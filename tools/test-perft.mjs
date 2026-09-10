import { perft, position } from '../web/engine.mjs';
import assert from 'node:assert/strict';
import { writeFile } from 'node:fs/promises';
import { performance } from 'node:perf_hooks';
// Numerical regression inputs published by the upstream engine project.
// This checks public perft results, not playing strength or adjudication.
const source = 'https://github.com/fairy-stockfish/Fairy-Stockfish/blob/master/tests/perft.sh';
const vectors = [
  ['position startpos', 4, 3290240],
  ['position fen 1rbaka2R/5r3/6n2/2p1p1p2/4P1bP1/PpC3Bc1/1nPR2P2/2N2AN2/1c2K1p2/2BAC4 w - - 0 1', 4, 4485547],
  ['position fen 4kcP1N/8n/3rb4/9/9/9/9/3p1A3/4K4/5CB2 w - - 0 1', 4, 92741],
];
const results = vectors.map(([command, depth, expected]) => {
  const fen = position(command), start = performance.now();
  const actual = Number(perft(fen, depth));
  assert.equal(actual, expected, fen);
  const result = { fen, depth, expected, actual, milliseconds: Math.round(performance.now() - start) };
  console.log(JSON.stringify(result));
  return result;
});
await writeFile(new URL('../evidence/perft-reference.json', import.meta.url), JSON.stringify({ date: new Date().toISOString(), source, node: process.version, results }, null, 2) + '\n');
