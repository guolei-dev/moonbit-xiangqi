## 2026-09-21 常见流程验收

完整本地 verify 通过：JS/Wasm-GC 各 14 项、11 组进程夹具、3 个公开 perft 向量、原有 CLI 和 307 个异常输入。新增独立协议控制器驱动两个真实持续进程，分别经 UCI/UCCI 握手完成 24 半回合，共 48 半回合，验证准备响应、换边、走子、停止、新局与退出；见 evidence/gameplay-validation.json。

这是进程工作流验证，合法走法检查仍使用本项目规则核心；不声称独立规则、GUI 对弈或专业棋力验证。已有 Fairy-Stockfish 缓存只有未完成的下载，故未运行独立参考引擎；公开 perft 数值作为单独规则回归。算法及编译引擎本轮未改，修正文案中仍显示 0.2/未支持持续进程的旧说明。

按用户“主要功能差不多就行”的最新要求，本项目常用流程在此收尾；正式重复/长将/长捉裁决、专业棋力及完整 UCCI 扩展保留为限制。当前本地提交及源文件指纹见 evidence/practical-upgrade.json。

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
