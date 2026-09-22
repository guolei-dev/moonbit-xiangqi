# xiangqi 查重与定位 · 2026-09-22

[wbgxiaosu/xiangqi](https://github.com/wbgxiaosu/xiangqi)。wbgxiaosu/xiangqi 已有规则、FEN、中文记谱、长将历史与 UCCI。规则/UCCI 本身不主张新增价值；本项目明确聚焦预算、取消及可独立集成的搜索服务。没有证明棋力超过对方或专业引擎。

- [wbgxiaosu/xiangqi 固定提交](https://github.com/wbgxiaosu/xiangqi/tree/da0e20a0d3e9468deeb26bc02368d02518b07e64)：依据该版本的公开说明对照，不冒充本轮运行了对方全部实现。

本轮材料采用定位：**可取消、有节点与时间预算的象棋搜索服务**。

MoonBit 与宿主分工：MoonBit Board::search 实现迭代 alpha-beta、静态搜索、预算/取消回调和上一轮完整结果；Node 提供 Worker、真实时钟和持续协议进程。

本轮证据：本轮真实进程检查覆盖节点/时间预算、搜索中 isready、stop 与 quit；不是专业棋力比赛或 GUI 长期兼容验收。 具体输入、脚本、已执行与历史对照分开记录在 [PROPOSAL.md](PROPOSAL.md) 和 evidence/innovation-review-20260922/。

边界：评估仍较简单，无专业 Elo/赛事棋力证明、开局库或完整长捉裁决；UCCI 专用时间选项未完全实现。

检索覆盖 Mooncakes 官方关键词/别名、GitHub 仓库查询、GitLink 公开索引、直接来源文档；没有完整赛事报名表、私有仓库、未公开分支或 GitHub 全代码索引。GitLink 索引也不完整。未找到同范围项目不等于生态空白；已有相关项目不自动等于无独立贡献。完整查询和固定提交快照在总交付目录 innovation-review-20260922/。

初次复核风险为“高”。本次补足差异和可复现工作流，没有自行将重叠归零，也不替评委作创新性认定。最终公开代码与表单附件须使用一致版本。
