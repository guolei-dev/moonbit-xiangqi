# 可执行 API 示例

增加同步 UCCI 命令核心：握手、准备、局面、走子、有限深度搜索及退出。这些例子调用公开 API，并随 `moon test` 执行。

```mbt check
///|
test "UCCI ready position go quit session" {
  let e = @xiangqi.Engine::new()
  assert_true(e.command("ucci").has_suffix("ucciok"))
  assert_eq(e.command("isready"), "readyok")
  assert_eq(e.command("position startpos moves h2e2"), "")
  assert_true(e.command("go depth 1").has_prefix("bestmove "))
  assert_true(
    try {
      ignore(e.command("position startpos moves a0a9"))
      false
    } catch {
      _ => true
    },
  )
  assert_eq(e.command("quit"), "")
  assert_true(
    try {
      ignore(e.command("isready"))
      false
    } catch {
      _ => true
    },
  )
}
```

持续进程及异步停止见 `node tools/engine.mjs`。正式重复/长将/长捉裁决、开局库与专业棋力仍未完成。
