///|
pub fn run(input : String) -> String {
  try {
    if input.trim().has_prefix("ucci") {
      let engine = @lib.Engine::new()
      let replies : Array[String] = []
      for line in input.split("\n") {
        let command = line.trim().to_owned()
        if !command.is_empty() {
          let reply = engine.command(command)
          if !reply.is_empty() {
            replies.push(reply)
          }
        }
      }
      return replies.join("\n")
    }
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
