///|
/// Last fully completed iteration; depth 0 is the legal fallback before any
/// iteration completed. Scores are from the root side, in internal pawn units.
pub(all) struct SearchResult {
  best : Move?
  score : Int
  depth : Int
  nodes : Int
  stopped : Bool
} derive(Debug, Eq)

///|
priv suberror SearchStopped {
  Interrupted
}

///|
priv struct SearchState {
  mut nodes : Int
  limit : Int
  should_stop : () -> Bool
  path : Array[String]
  // Bounded position-to-move cache. Scores are deliberately not cached because
  // path repetition changes the value of an otherwise identical position.
  ordering : Map[String, Move]
}

///|
fn SearchState::poll(self : SearchState) -> Unit raise SearchStopped {
  if self.nodes >= self.limit || (self.nodes % 64 == 0 && (self.should_stop)()) {
    raise Interrupted
  }
  self.nodes += 1
}

///|
fn piece_value(p : Int) -> Int {
  match abs(p) {
    1 => 100000
    2 | 3 => 120
    4 => 270
    5 => 600
    6 => 300
    7 => 60
    _ => 0
  }
}

///|
fn Board::ordered(self : Board, hint : Move?) -> Array[Move] {
  let moves = self.legal_moves()
  fn priority(m : Move) -> Int {
    if hint == Some(m) {
      return 10000000
    }
    let target = self.cells[m.to]
    if target != 0 {
      16 * piece_value(target) - piece_value(self.cells[m.from])
    } else {
      0
    }
  }
  moves.sort_by((a, b) => priority(b) - priority(a))
  moves
}

///|
fn SearchState::visit(
  self : SearchState,
  b : Board,
  depth : Int,
  qleft : Int,
  ply : Int,
  alpha : Int,
  beta : Int,
) -> Int raise SearchStopped {
  self.poll()
  let key = b.fen()
  if self.path.contains(key) {
    return 0
  }
  let moves = b.ordered(self.ordering.get(key))
  // Xiangqi stalemate is a loss, just as checkmate is.
  if moves.is_empty() {
    return -1000000 + ply
  }
  let checked = b.in_check(b.red)
  let mut bound = alpha
  if depth <= 0 {
    let static_score = b.evaluate()
    if qleft <= 0 {
      return static_score
    }
    if !checked {
      if static_score >= beta {
        return static_score
      }
      if static_score > bound {
        bound = static_score
      }
    }
  }
  self.path.push(key)
  let mut best = None
  for m in moves {
    if depth <= 0 && !checked && b.cells[m.to] == 0 {
      continue
    }
    let value = -self.visit(
      b.apply(m),
      depth - 1,
      if depth <= 0 {
        qleft - 1
      } else {
        qleft
      },
      ply + 1,
      -beta,
      -bound,
    )
    if value > bound {
      bound = value
      best = Some(m)
    }
    if bound >= beta {
      break
    }
  }
  ignore(self.path.pop())
  if self.ordering.length() < 50000 {
    if best is Some(m) {
      self.ordering[key] = m
    }
  }
  bound
}

///|
/// Iterative alpha-beta with capture quiescence and a bounded move-order cache.
/// Cancellation returns the last completed iteration (or a legal fallback).
/// Repeated search-path positions score 0 as a heuristic, not tournament rules.
pub fn Board::search(
  self : Board,
  depth : Int,
  node_limit? : Int = 100000,
  should_stop? : () -> Bool = () => false,
  on_iteration? : (SearchResult) -> Unit = _ => (),
  history? : Array[String] = [],
) -> SearchResult raise ChessError {
  if depth < 1 || depth > 64 || node_limit < 1 || node_limit > 1000000000 {
    raise Invalid("search depth 1..64 and nodes 1..1000000000 required")
  }
  if history.length() > 4096 {
    raise Invalid("search history limit")
  }
  let moves = self.legal_moves()
  if moves.is_empty() {
    return { best: None, score: -1000000, depth: 0, nodes: 0, stopped: false, }
  }
  let state : SearchState = {
    nodes: 0,
    limit: node_limit,
    should_stop,
    path: [],
    ordering: {},
  }
  let mut result : SearchResult = {
    best: Some(moves[0]),
    score: self.evaluate(),
    depth: 0,
    nodes: 0,
    stopped: false,
  }
  let key = self.fen()
  for level in 1..<=depth {
    let mut best = result.best
    let mut score = -10000000
    state.path.clear()
    for prior in history {
      state.path.push(prior)
    }
    state.path.push(key)
    try {
      if should_stop() {
        raise Interrupted
      }
      for m in self.ordered(result.best) {
        let value = -state.visit(
          self.apply(m),
          level - 1,
          8,
          1,
          -10000000,
          -score,
        )
        if value > score {
          score = value
          best = Some(m)
        }
      }
    } catch {
      Interrupted => return { ..result, nodes: state.nodes, stopped: true, }
    }
    result = { best, score, depth: level, nodes: state.nodes, stopped: false, }
    on_iteration(result)
    if abs(score) >= 999000 {
      break
    }
  }
  { ..result, nodes: state.nodes, }
}
