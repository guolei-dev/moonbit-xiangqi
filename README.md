# 可取消、有节点与时间预算的象棋搜索服务

**本项目仓库：[https://github.com/guolei-dev/moonbit-xiangqi](https://github.com/guolei-dev/moonbit-xiangqi)**

模块 `guolei-dev/xiangqi`，本地版本 **0.4.0**，MIT。当前评审状态：**条件复审**。本文件是当前入口，旧轮次说明与详细用法保存在 [历史/完整使用说明](README-BEFORE-VALUE-REWORK.md)。

## 解决什么任务

把规则引擎接到持续运行的搜索进程，让调用者在时间或节点预算到达时取得已完成迭代结果，stop/isready 不被同步搜索阻塞。

MoonBit 应用需要可取消、受预算约束的搜索服务时评估；棋规/FEN/UCCI 已有其它实现。

## 直接复现

安装 MoonBit 和 Node.js 24，在本仓库根目录运行：

```sh
moon build --target js
node -e "require('node:fs').copyFileSync('_build/js/debug/build/cmd/web/web.js','web/engine.mjs')"
node examples/run-use-case.mjs
```

流程：**对固定局面运行有限节点搜索**。运行器创建新的系统临时目录，保留每一步的 stdout/stderr、产物及 `report.json`，打印实际目录；重复运行不会覆盖之前产物。它只执行仓库内的本地样例，不连接公网或发送消息。`report.json` 的 `expected` 是应观察的结果，实际结果在各步输出中；成功退出不替代内容核对。

输入性质：初始棋局与固定节点预算；演示可调用搜索，不证明 Elo 或优于已有 MoonBit 象棋库。

应观察：输出 ucciok、搜索信息和合法 bestmove，标准输入关闭后进程结束。

具体命令和输入路径见 [使用任务](USE-CASE.md) 与 [机器可读流程](examples/use-case.json)。只把这个脚本当复现入口，不把通用运行器计作核心技术贡献。

## 实现与已有项目的关系

MoonBit Board::search 实现迭代 alpha-beta、静态搜索、预算/取消回调和上一轮完整结果；Node 提供 Worker、真实时钟和持续协议进程。

wbgxiaosu/xiangqi 已有规则、FEN、中文记谱、长将历史与 UCCI。规则/UCCI 本身不主张新增价值；本项目明确聚焦预算、取消及可独立集成的搜索服务。没有证明棋力超过对方或专业引擎。

同类项目和检索边界见 [DUPLICATION](DUPLICATION.md)。查重用于避免错误的首创表述；关键词零结果不能证明生态空白，Node 宿主能力也不计为 MoonBit 原生 I/O。

库使用从 [公共 API](pkg.generated.mbti) 和根包源码开始；可在本 checkout 的消费包中导入 `"guolei-dev/xiangqi"`。源码中的网络/文件宿主入口及完整参数仍见 [完整使用说明](README-BEFORE-VALUE-REWORK.md)。是否已发布到 Mooncakes 需另核实，本文不把 `moon add` 的下载成功作为已完成事项。

## 验证与边界

前一轮工程验证真实进程检查覆盖节点/时间预算、搜索中 isready、stop 与 quit；不是专业棋力比赛或 GUI 长期兼容验收。

[上一轮工程验证](evidence/innovation-review-20260922/results.json) 与 [本轮最小任务回执](evidence/value-rework-20260922/use-case.json) 分开。历史参考版本、golden 重放、本机 peer、真实第三方服务端和本次样例是不同证据，不能合并成“全部生产验证”。

常规核心检查可运行 `moon check --target js`、`moon test --target js`、`moon test --target wasm-gc`。专项命令：

```sh
node tools/test-engine.mjs
```

专项所需的参考环境和历史版本见原使用说明及 TESTING 文档；本轮回执只记录实际执行项，不声称上面所有参考服务在任意环境即装即跑。

评估仍较简单，无专业 Elo/赛事棋力证明、开局库或完整长捉裁决；UCCI 专用时间选项未完全实现。

## 复审材料状态

没有 Elo 或独立棋力优势；只证明搜索生命周期，不把 GUI 或规则数量当创新。

2026-09-22 匿名新克隆成功；默认分支 `main`，核验公开提交 `2a0541d09a1569eb513444a7b6f5a2b2ba964de8`。本轮源码修订仅在本地，尚未推送；此记录不证明当时报名表中的地址正确，也不证明新修订已上线。

[申报草稿](PROPOSAL.md) 已压缩为 30 行以内，并单独标明本项目仓库；[复核说明](REVIEW-RESPONSE.md) 区分材料错误、功能变化及尚未解决的问题。没有编造用户、设备接入、生产部署或评审认可。
