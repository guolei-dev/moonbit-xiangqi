///|
test "threefold includes side to move and survives failed commands" {
  let e = @xiangqi.Engine::new()
  let cycle = " b0c2 b9c7 c2b0 c7b9"
  ignore(e.command("position startpos moves" + cycle))
  assert_eq(e.status(), "ongoing")
  ignore(e.command("position startpos moves" + cycle + cycle))
  assert_eq(e.status(), "draw-repetition")
  let r = e.search(2)
  assert_eq(r.best, None)
  assert_eq(r.score, 0)
  ignore(e.command("position startpos moves a0a9")) catch {
    _ => ()
  }
  assert_eq(e.status(), "draw-repetition")
  ignore(e.command("ucinewgame"))
  assert_eq(e.status(), "ongoing")
}

///|
test "unilateral perpetual checks lose for either colour" {
  for
    fixture in [
      (
        "4k4/3R5/9/9/4p4/9/9/9/9/4K4 w", " d8e8 e9d9 e8d8 d9e9", "red-loses-perpetual-check",
      ),
      (
        "4k4/9/9/9/9/4P4/9/9/3r5/4K4 b", " d1e1 e0d0 e1d1 d0e0", "black-loses-perpetual-check",
      ),
    ] {
    let e = @xiangqi.Engine::new()
    ignore(e.command("position fen " + fixture.0 + " moves" + fixture.1))
    assert_eq(e.status(), "ongoing")
    ignore(
      e.command("position fen " + fixture.0 + " moves" + fixture.1 + fixture.1),
    )
    assert_eq(e.status(), fixture.2)
    assert_eq(e.search(2).score, -1000000)
  }
}

///|
test "game play is atomic and search history is bounded" {
  let g = @xiangqi.Game::new(@xiangqi.initial())
  let before = g.board().fen()
  ignore(g.play("a0a9")) catch {
    _ => ()
  }
  assert_eq(g.board().fen(), before)
  assert_eq(g.status(), "ongoing")
  assert_true(
    try {
      ignore(g.board().search(1, history=Array::make(4097, before)))
      false
    } catch {
      _ => true
    },
  )
}
