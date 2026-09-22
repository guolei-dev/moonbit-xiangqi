# 对固定局面运行有限节点搜索

把规则引擎接到持续运行的搜索进程，让调用者在时间或节点预算到达时取得已完成迭代结果，stop/isready 不被同步搜索阻塞。

## 输入、操作、输出

初始棋局与固定节点预算；演示可调用搜索，不证明 Elo 或优于已有 MoonBit 象棋库。

最简运行：先按 README 构建，然后 `node examples/run-use-case.mjs`。它自动创建输出目录并执行下面命令。下列 `{out}` 是运行器替换的实际目录，不是直接输入 shell 的变量；stdin 文件由运行器传递，以避免 Windows 与 POSIX 重定向差异。

```text
node tools/engine.mjs  # stdin: examples/use-case/search.txt
```

观察：输出 ucciok、搜索信息和合法 bestmove，标准输入关闭后进程结束。

每一步输出见实际目录下 `step-N.stdout.txt` / `step-N.stderr.txt`；本轮已保存回执见 `evidence/value-rework-20260922/use-case.json`。

## 为什么保留这个实现

MoonBit 应用需要可取消、受预算约束的搜索服务时评估；棋规/FEN/UCCI 已有其它实现。

wbgxiaosu/xiangqi 已有规则、FEN、中文记谱、长将历史与 UCCI。规则/UCCI 本身不主张新增价值；本项目明确聚焦预算、取消及可独立集成的搜索服务。没有证明棋力超过对方或专业引擎。

## 不能由样例推出的结论

评估仍较简单，无专业 Elo/赛事棋力证明、开局库或完整长捉裁决；UCCI 专用时间选项未完全实现。

该样例是可修改的使用入口，不能证明存在真实用户、全部兼容或性能领先。继续投入的依据应是明确的输入或接入需求；若对接任务用既有成熟库即可完成，应优先复用而不是为保留参赛数量扩张本项目。
