# 可取消、有节点与时间预算的象棋搜索服务

本地申报候选材料，2026-09-22；模块 `guolei-dev/xiangqi`，版本 `0.4.0`。团队的公开仓库可能还是先前提交，本次没有推送；最终表单必须指向团队实际上传版本。

## 要解决的任务

把规则引擎接到持续运行的搜索进程，让调用者在时间或节点预算到达时取得已完成迭代结果，stop/isready 不被同步搜索阻塞。

以下是目标任务和可复现工程证据，不虚构客户、存量部署或采用人数。

## 现有工作与新增贡献

[wbgxiaosu/xiangqi](https://github.com/wbgxiaosu/xiangqi)。wbgxiaosu/xiangqi 已有规则、FEN、中文记谱、长将历史与 UCCI。规则/UCCI 本身不主张新增价值；本项目明确聚焦预算、取消及可独立集成的搜索服务。没有证明棋力超过对方或专业引擎。

MoonBit Board::search 实现迭代 alpha-beta、静态搜索、预算/取消回调和上一轮完整结果；Node 提供 Worker、真实时钟和持续协议进程。

- [wbgxiaosu/xiangqi 固定提交](https://github.com/wbgxiaosu/xiangqi/tree/da0e20a0d3e9468deeb26bc02368d02518b07e64)：依据该版本的公开说明对照，不冒充本轮运行了对方全部实现。

## 可复现路径

仓库附编译引擎；修改源码后先构建。参考工具的额外依赖与环境变量见 TESTING.md；测试创建的网络服务仅在本机。

```sh
node tools/test-engine.mjs
```

本轮真实进程检查覆盖节点/时间预算、搜索中 isready、stop 与 quit；不是专业棋力比赛或 GUI 长期兼容验收。 本轮 JS/WasmGC 核心测试及 JS 构建通过，原始日志见 [本轮验证](evidence/innovation-review-20260922/results.json)。测试数量证明所列范围，不能代替创新性论证或推断正式审核通过。

## 边界与来源

评估仍较简单，无专业 Elo/赛事棋力证明、开局库或完整长捉裁决；UCCI 专用时间选项未完全实现。

许可证与来源沿用仓库现有 LICENSE/第三方说明，不将标准、算法、词库或参考软件写成本项目发明。查重不是对全生态不存在的证明，日期、相邻项与未覆盖范围见 [DUPLICATION.md](DUPLICATION.md)。
