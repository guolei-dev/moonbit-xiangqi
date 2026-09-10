///|
test "initial FEN and perft known counts" {
  let b = @xiangqi.initial()
  assert_eq(b.perft(0), 1)
  assert_eq(b.perft(1), 44)
  assert_eq(b.perft(2), 1920)
  assert_eq(@xiangqi.parse_fen(b.fen()), b)
}

///|
test "legal move transitions side" {
  let b = @xiangqi.initial().play("h2e2")
  assert_true(b.fen().has_suffix(" b"))
  assert_true(!b.in_check(true))
  assert_true(!b.legal_moves().is_empty())
}

///|
test "horse leg blocked" {
  let b = @xiangqi.parse_fen("4k4/9/9/9/4p4/9/9/9/1P7/1N2K4 w")
  assert_true(!b.legal_moves().iter().any(m => m.coordinate() == "b0c2"))
  assert_true(!b.legal_moves().iter().any(m => m.coordinate() == "b0a2"))
}

///|
test "kings cannot face after exposing file" {
  let b = @xiangqi.parse_fen("4k4/9/9/9/9/9/9/9/4R4/4K4 w")
  assert_true(!b.legal_moves().iter().any(m => m.coordinate() == "e1d1"))
  assert_true(b.legal_moves().iter().any(m => m.coordinate() == "e1e2"))
}

///|
test "pawn cannot retreat" {
  let b = @xiangqi.initial()
  assert_true(
    try {
      ignore(b.play("a3a2"))
      false
    } catch {
      _ => true
    },
  )
  assert_true(
    try {
      ignore(b.play("a3b3"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "elephant cannot cross river" {
  let b = @xiangqi.parse_fen("4k4/9/9/9/4p4/2B6/9/9/9/4K4 w")
  assert_true(!b.legal_moves().iter().any(m => m.coordinate() == "c4e6"))
}

///|
test "search result legal and budget enforced" {
  let b = @xiangqi.initial()
  match b.best_move(2) {
    Some(m) => assert_true(b.legal_moves().contains(m))
    None => fail("expected move")
  }
  assert_true(
    try {
      ignore(b.best_move(3, node_limit=1))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "invalid FEN rejected" {
  for
    s in [
      "9/9 w", "9/9/9/9/9/9/9/9/9/9 w", "rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR x",
    ] {
    assert_true(
      try {
        ignore(@xiangqi.parse_fen(s))
        false
      } catch {
        _ => true
      },
    )
  }
}
