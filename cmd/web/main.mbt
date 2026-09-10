///|
pub fn run(input : String) -> String {
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

}
