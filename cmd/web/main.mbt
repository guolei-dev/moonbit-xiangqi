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
pub fn position(command : String) -> String {
  try {
    let e = @lib.Engine::new()
    ignore(e.command(command))
    e.fen()
  } catch {
    e => "ERROR: " + Repr(e).to_string()
  }
}

///|
pub fn legal(fen : String) -> String {
  @lib.parse_fen(fen).legal_moves().map(m => m.coordinate()).join(" ") catch {
    e => "ERROR: " + Repr(e).to_string()
  }
}

///|
pub fn perft(fen : String, depth : Int) -> String {
  @lib.parse_fen(fen).perft(depth).to_string() catch {
    e => "ERROR: " + Repr(e).to_string()
  }
}

///|
fn info(result : @lib.SearchResult) -> String {
  let magnitude = if result.score < 0 { -result.score } else { result.score }
  let score = if magnitude >= 999000 {
    let distance = (1000000 - magnitude + 1) / 2
    "mate " + (if result.score < 0 { -distance } else { distance }).to_string()
  } else {
    // A pre-river pawn is 60 internal units; expose centipawns to UCI hosts.
    "cp " + (result.score * 100 / 60).to_string()
  }
  "info depth " +
  result.depth.to_string() +
  " score " +
  score +
  " nodes " +
  result.nodes.to_string() +
  (match result.best {
    Some(m) => " pv " + m.coordinate()
    None => ""
  })
}

///|
pub fn search_position(
  fen : String,
  depth : Int,
  nodes : Int,
  should_stop : () -> Bool,
  on_info : (String) -> Unit,
) -> String {
  try {
    let result = @lib.parse_fen(fen).search(
      depth,
      node_limit=nodes,
      should_stop~,
      on_iteration=r => on_info(info(r)),
    )
    if result.stopped || result.depth == 0 {
      on_info(info(result))
    }
    "bestmove " +
    (match result.best {
      Some(m) => m.coordinate()
      None => "0000"
    })
  } catch {
    e => "ERROR: " + Repr(e).to_string()
  }
}

///|
pub fn search_game(
  command : String,
  depth : Int,
  nodes : Int,
  should_stop : () -> Bool,
  on_info : (String) -> Unit,
) -> String {
  try {
    let engine = @lib.Engine::new()
    ignore(engine.command(command))
    let status = engine.status()
    if status != "ongoing" {
      on_info("info string result " + status)
    }
    let result = engine.search(depth, node_limit=nodes, should_stop~, on_iteration=r => {
      on_info(info(r))
    })
    if result.stopped || result.depth == 0 {
      on_info(info(result))
    }
    "bestmove " +
    (match result.best {
      Some(m) => m.coordinate()
      None => "0000"
    })
  } catch {
    e => "ERROR: " + Repr(e).to_string()
  }
}

///|
fn main {

}
