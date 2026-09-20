///|
/// Bounded game history with simple threefold/perpetual-check adjudication.
/// Long-chase and tournament-specific exceptions are outside this policy.
pub struct Game {
  positions : Array[Board]
} derive(Debug)

///|
pub fn Game::new(board : Board) -> Game {
  { positions: [board], }
}

///|
pub fn Game::board(self : Game) -> Board {
  self.positions[self.positions.length() - 1]
}

///|
/// Replay legal moves, including analysis lines beyond an earlier repetition.
pub fn Game::play(self : Game, coordinate : String) -> Unit raise ChessError {
  if self.positions.length() >= 4097 {
    raise Invalid("game history limit 4096 plies")
  }
  let next = self.board().play(coordinate)
  self.positions.push(next)
}

///|
pub fn Game::status(self : Game) -> String {
  let current = self.board()
  if current.legal_moves().is_empty() {
    return if current.red {
      "red-loses-no-moves"
    } else {
      "black-loses-no-moves"
    }
  }
  let matches : Array[Int] = []
  for i, board in self.positions {
    if board == current {
      matches.push(i)
    }
  }
  if matches.length() < 3 {
    return "ongoing"
  }
  let start = matches[matches.length() - 3]
  let mut red_checks = true
  let mut black_checks = true
  for i in (start + 1)..<self.positions.length() {
    let after = self.positions[i]
    let checked = after.in_check(after.red)
    if after.red {
      black_checks = black_checks && checked
    } else {
      red_checks = red_checks && checked
    }
  }
  if red_checks && !black_checks {
    "red-loses-perpetual-check"
  } else if black_checks && !red_checks {
    "black-loses-perpetual-check"
  } else {
    "draw-repetition"
  }
}

///|
pub fn Game::search(
  self : Game,
  depth : Int,
  node_limit? : Int = 100000,
  should_stop? : () -> Bool = () => false,
  on_iteration? : (SearchResult) -> Unit = _ => (),
) -> SearchResult raise ChessError {
  if depth < 1 || depth > 64 || node_limit < 1 || node_limit > 1000000000 {
    raise Invalid("search depth 1..64 and nodes 1..1000000000 required")
  }
  let status = self.status()
  if status != "ongoing" {
    let score = if status == "draw-repetition" {
      0
    } else if status.has_prefix(
        if self.board().red {
          "red-"
        } else {
          "black-"
        },
      ) {
      -1000000
    } else {
      1000000
    }
    return { best: None, score, depth: 0, nodes: 0, stopped: false, }
  }
  self
  .board()
  .search(
    depth,
    node_limit~,
    should_stop~,
    on_iteration~,
    history=self.positions[:self.positions.length() - 1].map(b => b.fen()),
  )
}
