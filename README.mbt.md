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

限制：未提供持久在线 UCCI 进程、异步 stop/时间管理、开局库、重复局面判定；不是专业棋力引擎。
