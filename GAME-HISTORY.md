# 棋局历史与独立对照 · 0.4.0

新增 Game API 保存最多 4096 半回合；position ... moves 重放到独立临时棋局，非法走子不会污染原局面。新局清空历史；只给 FEN 时不能恢复 FEN 之前的历史。Game/Engine 搜索以真实历史初始化重复路径启发式。

基础规则模式：同一方行棋的相同棋盘出现三次时，检查最近三次出现之间的每步将军。只有一方每步都将军则该方判负；其余重复按和棋。无合法走法仍判负。Engine::status 返回 ongoing、draw-repetition、red/black-loses-perpetual-check 或 red/black-loses-no-moves。终局搜索输出 info string result 原因和 bestmove 0000。同步 Engine::command 仍保留原 50000 节点耗尽时报错行为。

这不是完整竞赛规则：尚未实现长捉、将捉混合及各赛事例外；这些重复局面会按基础模式处理，不适合用作正式比赛裁判。搜索树里的重返仍是置零启发式，不是逐分支完整规则裁决。可单独用 Board API 分析局面，不自动使用 Game 终局政策。

本轮真正运行官方 Fairy-Stockfish 14 largeboard（经典评估，参考程序不随源码分发）：

- 180 次局面检查，175 个不同 FEN；逐项比较完整合法走法集合、走子后 FEN 和 perft 数量。其中 20 次比较深度 2，其余深度 1。
- 交换执棋方各进行 24 半回合，两段共 48 半回合；双方每次走子均通过独立参考合法集合验证。深度 2 / 5000 节点，仅证明互通，不是完整对局胜率或专业棋力结论。
- 三次中性重复、红方连续长将、黑方连续长将三个案例，与原生 XBoard 直接返回的结果一致。UCI 根搜索不会直接裁决可选终局，不能用搜索分数替代此对照。参考实现见 Fairy-Stockfish fairy_sf_14/src/search.cpp 的根节点结束处理。

原生记录与二进制来源/摘要见 evidence/native-reference.json，回放金标 native_golden_test.mbt。JS/Wasm-GC 各 18 组通过；11 组进程检查、两段本机工作流（40 半回合，含一次三次重复终止）、3 个公开深度 4 perft 向量及 CLI/307 项异常输入通过。完整执行记录 evidence/history-final-tests.txt，最终指纹 evidence/history-upgrade.json。

复现：普通 verify.ps1 无需参考程序；设置 XIANGQI_REFERENCE 指向指定官方 Windows largeboard 二进制，再加 -WithNative 重跑独立对照。tools/test-native.mjs 验证固定 SHA256、隔离控制两个进程，不执行参考源代码。没有发布、上传、GUI 认证或跨平台验收。
