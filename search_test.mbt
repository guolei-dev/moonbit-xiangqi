///|
test "search cancellation returns a legal fallback with exact budget" {
  let b = @xiangqi.initial()
  let r = b.search(64, node_limit=1)
  assert_true(r.stopped)
  assert_eq(r.depth, 0)
  assert_eq(r.nodes, 1)
  assert_true(b.legal_moves().contains(r.best.unwrap()))
  let immediate = b.search(4, should_stop=() => true)
  assert_eq(immediate.nodes, 0)
  assert_true(immediate.stopped)
}

///|
test "search retains completed iteration and reports progress" {
  let b = @xiangqi.initial()
  let reports : Array[@xiangqi.SearchResult] = []
  let r = b.search(8, should_stop=() => !reports.is_empty(), on_iteration=x => {
    reports.push(x)
  })
  assert_eq(reports.length(), 1)
  assert_eq(r.depth, 1)
  assert_eq(r.best, reports[0].best)
  assert_eq(r.score, reports[0].score)
  assert_true(r.stopped)
  let exhausted = b.search(8, node_limit=reports[0].nodes + 1)
  assert_eq(exhausted.depth, 1)
  assert_eq(exhausted.best, r.best)
}

///|
test "search beyond depth three and quiescence capture" {
  let b = @xiangqi.parse_fen("4k4/9/9/9/4p4/9/9/9/r8/R3K4 w")
  let r = b.search(4, node_limit=100000)
  assert_eq(r.depth, 4)
  assert_true(!r.stopped)
  assert_eq(r.best.unwrap().coordinate(), "a0a1")
}

///|
test "stalemate is a xiangqi loss and has no fallback" {
  let b = @xiangqi.parse_fen("4k4/3R1R3/9/9/4P4/9/9/9/9/4K4 b")
  assert_true(!b.in_check(false))
  let r = b.search(4)
  assert_eq(r.best, None)
  assert_eq(r.score, -1000000)
  assert_true(!r.stopped)
}

///|
test "search and perft reject unsafe bounds" {
  for depth in [0, 65] {
    assert_true(
      try {
        ignore(@xiangqi.initial().search(depth))
        false
      } catch {
        _ => true
      },
    )
  }
  assert_true(
    try {
      ignore(@xiangqi.initial().search(1, node_limit=0))
      false
    } catch {
      _ => true
    },
  )
  assert_true(
    try {
      ignore(@xiangqi.initial().perft(5))
      false
    } catch {
      _ => true
    },
  )
}
