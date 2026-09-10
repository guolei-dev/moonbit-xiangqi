///|
fn run(input : String) -> String {
  try {
    let b = @lib.parse_fen(input.trim().to_owned())
    let moves = b.legal_moves()
    let best = b.best_move(2)
    "FEN: " +
    b.fen() +
    "\nLegal moves: " +
    moves.length().to_string() +
    "\n" +
    moves.map(m => m.coordinate()).join(" ") +
    "\nBest (depth 2): " +
    (match best {
      Some(m) => m.coordinate()
      None => "none"
    })
  } catch {
    e => "ERROR: " + Repr(e).to_string()
  }
}

///|
fn main {
  println(run("rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR w"))
}
