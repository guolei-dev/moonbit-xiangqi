# MoonBit 中国象棋规则与本地搜索引擎 · 项目申报书

## 一、项目名称

MoonBit 中国象棋规则与本地搜索引擎

## 二、项目说明

MoonBit 实现走法、FEN、基础历史与有界 alpha-beta 搜索；Node 提供持久进程、工作线程、时钟和 UCI/UCCI 基础接口。不是专业棋力或完整赛事裁决实现。

## 三、方向与通用性

游戏规则与搜索工具。已有 wbgxiaosu/xiangqi（https://github.com/wbgxiaosu/xiangqi），包含规则、记谱、历史和 UCCI 适配。本项目需展示可取消迭代搜索、时间/节点预算及独立进程工作流，不能把规则库或 UCCI 本身当独有创新。

## 四、应用场景

运行 node tools/engine.mjs 后使用 uci/isready/position/go/stop；嵌入规则 API 做教学；perft 核对走法生成。GUI 和赛事应用须额外验证各自协议及重复裁决要求。

## 五、功能与验证边界

含迭代加深、静态搜索和合法备用走法，支持基础重复/长将判断。未实现完整长捉及赛事例外、全部 UCCI 时间选项、开局库和专业评估；有限 perft/互通结果不证明所有规则或棋力。

## 六、原创性与参考材料

原创代码 MIT。参考 Elephantfish（https://github.com/bupticybee/elephantfish）能力范围和 Pikafish 协议说明，未复制搜索实现；Fairy-Stockfish（GPL-3.0，https://github.com/fairy-stockfish/Fairy-Stockfish）仅作独立数值与引擎行为对照，参考二进制不随源码分发。

## 七、仓库链接

https://github.com/guolei-dev/moonbit-xiangqi
