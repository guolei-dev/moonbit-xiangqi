# Validation contract

- Explicit Wasm-GC and JS targets: no inference from the toolchain default.
- Public API tests plus compiled browser engine, CLI stdin/file/argument and failure exit-code checks.
- 307 seeded bounded malformed inputs including UTF-16 surrogates. The worker has a 20-second limit.
- Local code coverage: `moon coverage analyze -p localreview/xiangqi -- -f summary`. No coverage upload is configured. Coverage is evidence about current code, not upstream feature coverage.
- Benchmark: 5 warmups and 30 measured documented-example executions; median and p95 recorded locally.
- Generated API and browser artifact must match the same source revision.

CI files are prepared locally; remote CI has not run because this repository has not been uploaded. Compatibility beyond README scope remains unverified.

## 0.3 actual local validation

- 14 JS MoonBit tests passed, including bounded search cancellation/fallback, completed iteration preservation, depth four, tactical capture and stalemate. Wasm-GC was not rerun for this stage.
- 11 process fixture groups passed on Node.js v24.11.0 / Windows. Covers both handshakes, EOF, ready during search, stop, repeated stop, expired clocks, node fallback, board rollback, terminal infinite search and quit. The recorded stop latency is one local observation, not a real-time guarantee. See `evidence/engine-process.json`.
- All three public Fairy-Stockfish Xiangqi perft depth-four vectors passed (3,290,240 / 4,485,547 / 92,741), with raw FENs and timings in `evidence/perft-reference.json`. Source: https://github.com/fairy-stockfish/Fairy-Stockfish/blob/master/tests/perft.sh . Numerical fixtures are independent published regression results; a reference engine was not executed.
- Existing file/argument/stdin/error/exit-status CLI checks passed. `moon info` and the JS build regenerated the public API and bundled engine.
- Direct Fairy-Stockfish binary and pyffish wheel downloads both remained incomplete due to network timeouts; no live reference-engine or GUI interoperability claim is made. No playing-strength match was run.
- Historical verification/coverage files describe their dated snapshots. No full workspace suite, archive rebuild, remote CI, upload or publication ran in this stage.
