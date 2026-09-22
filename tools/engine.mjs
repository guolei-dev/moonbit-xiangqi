#!/usr/bin/env node
// Persistent local engine. All rules and search run in compiled MoonBit;
// Node owns stdin/stdout, the monotonic clock and a cancellable worker.
import { Worker } from 'node:worker_threads';
import { createInterface } from 'node:readline';
import { performance } from 'node:perf_hooks';
import { position, legal } from '../web/engine.mjs';

export function limits(line, red) {
  const args = line.trim().split(/\s+/);
  if (args.shift() !== 'go') throw Error('expected go');
  const values = {};
  const ranges = { depth: [1, 64], nodes: [1, 1e9], movetime: [0, 86400000],
    wtime: [0, 86400000], btime: [0, 86400000], winc: [0, 86400000],
    binc: [0, 86400000], movestogo: [1, 1000] };
  for (let i = 0; i < args.length; i++) {
    const key = args[i];
    if (Object.hasOwn(values, key)) throw Error(`duplicate go argument ${key}`);
    if (key === 'infinite') { values[key] = true; continue; }
    if (!ranges[key] || !/^\d+$/.test(args[i + 1] ?? '')) throw Error(`unsupported or missing go argument ${key}`);
    const value = Number(args[++i]);
    if (!Number.isSafeInteger(value) || value < ranges[key][0] || value > ranges[key][1]) throw Error(`go argument out of range: ${key}`);
    values[key] = value;
  }
  if (values.infinite && Object.keys(values).length !== 1) throw Error('infinite cannot be combined with limits');
  let ms = values.movetime ?? Infinity;
  const remain = values[red ? 'wtime' : 'btime'];
  if (remain !== undefined) {
    const usable = Math.max(0, remain - 20);
    const allotted = Math.floor(usable / (values.movestogo ?? 30) + (values[red ? 'winc' : 'binc'] ?? 0) * 0.8);
    ms = Math.min(ms, usable, allotted);
  }
  if (!values.infinite && values.depth === undefined && values.nodes === undefined && !Number.isFinite(ms)) ms = 1000;
  return { depth: values.depth ?? 64, nodes: values.nodes ?? 1e9, ms, infinite: !!values.infinite };
}

export function serve() {
  let positionCommand = 'position startpos', fen = position(positionCommand), active = null, serial = 0, quitting = false;
  const write = line => { if (line && !quitting) process.stdout.write(line + '\n'); };
  const worker = new Worker(new URL('./engine-worker.mjs', import.meta.url));
  const input = createInterface({ input: process.stdin, crlfDelay: Infinity });
  function finish(job, line) {
    if (active !== job) return;
    write(line);
    active = null;
    job.resolve();
  }
  worker.on('message', message => {
    const job = active;
    if (!job || message.id !== job.id) return;
    if (message.kind === 'info') {
      write(message.line + (message.line.startsWith('info string ') ? '' : ` time ${Math.floor(performance.now() - job.start)}`));
      return;
    }
    let best = message.line;
    if (message.kind === 'error' || !best.startsWith('bestmove ')) {
      write('info string error ' + best.replace(/[\r\n]+/g, ' '));
      best = job.fallback;
    }
    if (job.hold) job.pendingBest = best;
    else finish(job, best);
  });
  worker.on('error', error => {
    write('info string worker failed ' + error.message.replace(/[\r\n]+/g, ' '));
    if (active) finish(active, active.fallback);
    process.exitCode = 1;
    input.close();
    void worker.terminate();
  });
  async function stop() {
    const job = active;
    if (!job) return;
    job.hold = false;
    Atomics.store(job.stop, 0, 1);
    if (job.pendingBest) finish(job, job.pendingBest);
    await job.done;
  }
  async function command(line) {
    if (quitting || !line) return;
    if (line.length > 65536) throw Error('command exceeds 65536 characters');
    if (line === 'uci' || line === 'ucci') {
      write('id name MoonBit Xiangqi 0.4.0');
      write('id author guolei-dev');
      write(line + 'ok');
    } else if (line === 'isready') write('readyok');
    else if (line === 'stop') await stop();
    else if (line === 'ucinewgame' || line.startsWith('position ')) {
      if (active) throw Error('send stop before changing position');
      const next = position(line === 'ucinewgame' ? 'position startpos' : line);
      if (next.startsWith('ERROR:')) throw Error(next);
      fen = next;
      positionCommand = line === 'ucinewgame' ? 'position startpos' : line;
    } else if (line === 'go' || line.startsWith('go ')) {
      if (active) throw Error('search already running; send stop');
      const config = limits(line, fen.endsWith(' w'));
      const stopBuffer = new SharedArrayBuffer(4);
      const job = { id: ++serial, start: performance.now(), stop: new Int32Array(stopBuffer), hold: config.infinite,
        fallback: 'bestmove ' + (legal(fen).split(' ')[0] || '0000') };
      job.done = new Promise(resolve => { job.resolve = resolve; });
      active = job;
      worker.postMessage({ id: job.id, command: positionCommand, depth: config.depth, nodes: config.nodes, stopBuffer, deadline: job.start + config.ms });
    } else throw Error('unsupported command: ' + line.split(' ')[0]);
  }
  let queue = Promise.resolve();
  input.on('line', raw => {
    const line = raw.trim().replace(/\s+/g, ' ');
    if (line === 'quit') {
      quitting = true;
      if (active) { Atomics.store(active.stop, 0, 1); active.resolve(); active = null; }
      input.close();
      process.stdin.destroy();
      void worker.terminate();
      return;
    }
    queue = queue.then(() => command(line)).catch(error => write('info string error ' + error.message.replace(/[\r\n]+/g, ' ')));
  });
  input.on('close', () => {
    void queue.then(async () => {
      if (active?.hold) await stop();
      if (active) await active.done;
      await worker.terminate();
    });
  });
}

import { pathToFileURL } from 'node:url';
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) serve();
