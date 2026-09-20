import { parentPort } from 'node:worker_threads';
import { performance } from 'node:perf_hooks';
import { search_game } from '../web/engine.mjs';

parentPort.on('message', ({ id, command, depth, nodes, stopBuffer, deadline }) => {
  const stop = new Int32Array(stopBuffer);
  try {
    const best = search_game(command, depth, nodes,
      () => Atomics.load(stop, 0) !== 0 || performance.now() >= deadline,
      line => parentPort.postMessage({ id, kind: 'info', line }));
    parentPort.postMessage({ id, kind: 'best', line: best });
  } catch (error) {
    parentPort.postMessage({ id, kind: 'error', line: String(error) });
  }
});
