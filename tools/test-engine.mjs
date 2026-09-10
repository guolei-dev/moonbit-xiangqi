import assert from 'node:assert/strict';
import { spawn, spawnSync } from 'node:child_process';
import { once } from 'node:events';
import { setTimeout as delay } from 'node:timers/promises';
import { writeFile } from 'node:fs/promises';
import { performance } from 'node:perf_hooks';
import { fileURLToPath } from 'node:url';
import { limits } from './engine.mjs';
import { legal, position } from '../web/engine.mjs';

const cases = [];
assert.equal(limits('go wtime 9000 btime 90 winc 300', false).ms, 2);
assert.equal(limits('go wtime 9000 btime 90 winc 300', true).ms, 539);
assert.equal(limits('go movetime 500 wtime 5', true).ms, 0);
assert.equal(limits('go depth 4', true).ms, Infinity);
for (const text of ['go depth 65', 'go nodes 0', 'go movetime -1', 'go depth 1 depth 2', 'go infinite depth 2', 'go ponder', 'go wtime NaN']) {
  assert.throws(() => limits(text, true));
}
cases.push('clock allocation, bounds and unsupported arguments');

const eof = spawnSync(process.execPath, [fileURLToPath(new URL('./engine.mjs', import.meta.url))], {
  input: 'position startpos\ngo nodes 1\n', encoding: 'utf8', timeout: 5000,
});
assert.equal(eof.status, 0, eof.stderr);
assert.match(eof.stdout, /^bestmove [a-i][0-9][a-i][0-9]$/m);
cases.push('EOF waits for a finite search and exits');

const child = spawn(process.execPath, [fileURLToPath(new URL('./engine.mjs', import.meta.url))], { stdio: ['pipe', 'pipe', 'pipe'] });
const lines = []; let pending = '', stderr = '';
child.stdout.setEncoding('utf8'); child.stderr.setEncoding('utf8');
child.stdout.on('data', chunk => {
  pending += chunk;
  let cut;
  while ((cut = pending.indexOf('\n')) >= 0) { lines.push(pending.slice(0, cut).trim()); pending = pending.slice(cut + 1); }
});
child.stderr.on('data', chunk => { stderr += chunk; });
const send = text => child.stdin.write(text + '\n');
async function waitFor(pattern, from = 0, timeout = 5000) {
  const start = performance.now();
  while (performance.now() - start < timeout) {
    const found = lines.slice(from).find(x => pattern.test(x));
    if (found) return found;
    if (child.exitCode !== null) throw Error('engine exited: ' + stderr);
    await delay(10);
  }
  throw Error('timeout ' + pattern + '\n' + lines.slice(from).join('\n') + stderr);
}
const initial = position('position startpos');
const validate = (best, fen = initial) => assert(legal(fen).split(' ').includes(best.split(' ')[1]), best);
const stopTimes = [];
try {
  send('ucci'); await waitFor(/^ucciok$/);
  send('uci'); await waitFor(/^uciok$/);
  cases.push('persistent UCCI and UCI handshakes');

  let at = lines.length;
  send('position startpos\ngo infinite\nisready');
  await waitFor(/^readyok$/, at);
  await waitFor(/^info depth [1-9]/, at);
  assert(!lines.slice(at).some(x => x.startsWith('bestmove')));
  const start = performance.now();
  send('stop\nstop');
  validate(await waitFor(/^bestmove /, at));
  stopTimes.push(Math.round(performance.now() - start));
  await delay(30);
  assert.equal(lines.slice(at).filter(x => x.startsWith('bestmove')).length, 1);
  cases.push('ready while searching, stop and duplicate-stop single result');

  at = lines.length;
  send('position startpos moves h2e2\ngo nodes 1');
  validate(await waitFor(/^bestmove /, at), position('position startpos moves h2e2'));
  assert(lines.slice(at).some(x => /depth 0 .*nodes 1\b/.test(x)));
  cases.push('post-stop position transition and exact node fallback');

  at = lines.length;
  send('position startpos\ngo movetime 0');
  validate(await waitFor(/^bestmove /, at));
  assert(lines.slice(at).some(x => /depth 0 .*nodes 0\b/.test(x)));
  cases.push('expired movetime still returns legal move');

  at = lines.length;
  const clockStart = performance.now();
  send('go wtime 60 btime 10000 movestogo 1');
  validate(await waitFor(/^bestmove /, at));
  assert(performance.now() - clockStart < 1500);
  cases.push('side clock deadline');

  at = lines.length;
  send('position startpos moves a0a9\nisready');
  await waitFor(/^info string error /, at); await waitFor(/^readyok$/, at);
  send('go nodes 1'); validate(await waitFor(/^bestmove /, at));
  cases.push('invalid position preserves prior board');

  const sparse = '4k4/9/9/9/4p4/9/9/9/r8/R3K4 w';
  at = lines.length;
  send('position fen ' + sparse + ' - - 0 1\ngo depth 4');
  assert.equal(await waitFor(/^bestmove /, at), 'bestmove a0a1');
  assert(lines.slice(at).some(x => x.startsWith('info depth 4 ')));
  cases.push('completed depth four tactical search');

  at = lines.length;
  send('position fen 4k4/3R1R3/9/9/4P4/9/9/9/9/4K4 b\ngo infinite\nisready');
  await waitFor(/^readyok$/, at); await waitFor(/^info depth 0 /, at);
  await delay(30);
  assert(!lines.slice(at).some(x => x.startsWith('bestmove')));
  send('stop'); assert.equal(await waitFor(/^bestmove /, at), 'bestmove 0000');
  cases.push('terminal infinite search waits for stop');

  at = lines.length;
  send('ucinewgame\ngo infinite\nisready'); await waitFor(/^readyok$/, at);
  const exit = once(child, 'exit');
  send('quit');
  const quitTimeout = setTimeout(() => child.kill(), 2000);
  const [code] = await exit;
  clearTimeout(quitTimeout);
  assert.equal(code, 0, stderr);
  assert(!lines.slice(at).some(x => x.startsWith('bestmove')));
  cases.push('quit during search shuts down worker');
  const report = { date: new Date().toISOString(), node: process.version, passed: cases.length, cases, stopLatencyMs: stopTimes, transcript: lines, scope: 'local process fixtures; not GUI or tournament compatibility' };
  await writeFile(new URL('../evidence/engine-process.json', import.meta.url), JSON.stringify(report, null, 2) + '\n');
  console.log(JSON.stringify({ passed: cases.length, stopLatencyMs: stopTimes }));
} finally { child.kill(); }
