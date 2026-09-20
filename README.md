# 中国象棋规则与本地引擎

MoonBit 本地候选版 0.4.0。规则、FEN、合法走法与搜索由 MoonBit 实现；Node.js 提供持续运行的引擎进程、工作线程、时钟和标准输入输出。

## 直接运行

已附编译的引擎，需要 Node.js 24：

```powershell
node tools/engine.mjs
```

逐行输入：

```text
uci
isready
position startpos moves h2e2 h9g7
go depth 4
go movetime 1000
quit
```

每次 `go` 后等到 `bestmove` 再开始下一次搜索。`go infinite` 可随时用 `stop` 结束；搜索期间 `isready` 仍响应。`position` 中走子非法时保留原局面。读取到输入结束会等待有限搜索完成；`quit` 会立即关闭工作线程。

UCI 支持 `uci/isready/ucinewgame/position/go/stop/quit`；`go` 支持 `depth`、`nodes`、`movetime`、`wtime/btime`、`winc/binc`、`movestogo`、`infinite`，时钟单位毫秒。剩余时间按剩余步数分配，预留 20 毫秒并限制增量的使用。UCCI 支持握手及相同的基础局面/深度/停止命令；**未实现 UCCI 专用时间格式与全部协议选项**。不支持 `ponder`、`searchmoves`、开局库或 `setoption`；不支持的命令返回 `info string error`。

网页与原有文件 CLI 仍可使用：

```powershell
./start-review.ps1
node tools/cli.mjs --file sample.txt --json
```

网页地址为 http://127.0.0.1:8800/web/ 。同步网页/示例搜索不能响应异步停止；持续进程请使用 `tools/engine.mjs`。

## 搜索与接口

- 按棋子生成候选走法，再过滤阻挡与自将；支持全部标准棋子走法、将帅照面、FEN 和 `perft` 深度 0–4。
- `Board::search` 使用深度 1–64 的迭代 alpha-beta、最多 8 层吃子静态搜索、受将时逃将搜索，以及最多 50,000 项的走法排序缓存。评估目前主要是子力与过河兵价值，未证明专业棋力。
- `SearchResult` 返回走法、分数、已完成深度、访问节点数和停止标志。预算/取消返回上一轮完整结果；若一轮也未完成，深度为 0，返回合法备用走法。无合法走法返回 `None`，困毙同将死判负。
- `should_stop` 回调在每轮开始及每 64 个节点检查；`on_iteration` 只报告完整轮次。节点预算 1–1,000,000,000。计数包括静态搜索节点，不包括根节点或备用走法生成。
- `Board::best_move` 保留原来的耗尽预算报错行为；需要平稳中止时用 `search`。同步 `Engine::command` 保留为无传输的基础会话 API。

新增棋局历史、三次重复及单方连续长将的基础处理；终局返回原因和 bestmove 0000。具体政策、API 和局限见 [GAME-HISTORY.md](GAME-HISTORY.md)。长捉及正式赛事例外仍未实现；搜索树的重复置零仍为启发式。

公共 API 见编译器生成的 [pkg.generated.mbti](pkg.generated.mbti)，可执行示例见 [README.mbt.md](README.mbt.md)。

## 常见流程验收

本轮 JS/Wasm-GC 各 18 组、11 组进程检查、3 个公开 perft 向量及 CLI/异常输入通过。官方 Fairy-Stockfish 实时对照 180 次局面检查、两段共 48 半回合互通及三个基础重复/长将结果通过。独立棋力未证明，详情见 [GAME-HISTORY.md](GAME-HISTORY.md)。

## 构建、验证与当前差距

安装 MoonBit 后运行 `./verify.ps1`，或 `./verify.ps1 -MoonPath C:/path/to/moon/bin/moon.exe`。单独运行新进程检查：`node tools/test-engine.mjs`；独立公开 perft 向量：`node tools/test-perft.mjs`。细节及实际运行记录见 [TESTING.md](TESTING.md) 和 `evidence/`。

仍缺完整赛事重复/长捉裁决、开局库、完整协议选项、专业评估与棋力比赛、真实 GUI 长期对弈和跨平台时间精度证据。具体边界见 [FEATURES.md](FEATURES.md)，不能由测试通过推断已追平上游。

## 来源与本地仓库

参考 [Elephantfish](https://github.com/bupticybee/elephantfish) 的公开能力范围独立实现，未复制其搜索代码。UCI 命令参考 [Pikafish 官方说明](https://github.com/official-pikafish/Pikafish/wiki/UCI-&-Commands)，perft 数值来自 [Fairy-Stockfish 测试](https://github.com/fairy-stockfish/Fairy-Stockfish/blob/master/tests/perft.sh)。本仓库源码为 MIT；独立参考引擎不随仓库分发。

本目录是唯一开发主仓库，独立 Git/构建目录，无 remote。所有改动仅本地，未上传、发布或提交比赛。旧批次目录、ZIP 和 Git bundle 是历史快照，最终统一交付将另附当前提交的包。[查重记录](DUPLICATION.md)保留其原验证范围。
