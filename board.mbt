///|
pub suberror ChessError {
  Invalid(String)
} derive(Debug)

///|
pub struct Board {
  cells : Array[Int]
  red : Bool
} derive(Debug, Eq)

///|
pub(all) struct Move {
  from : Int
  to : Int
} derive(Debug, Eq)

///|
pub fn initial() -> Board {
  parse_fen("rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR w") catch {
    _ => abort("internal FEN")
  }
}

///|
pub fn parse_fen(fen : String) -> Board raise ChessError {
  let fields = fen.split(" ").filter(x => !x.is_empty()).collect()
  if fields.length() < 2 || (fields[1] != "w" && fields[1] != "b") {
    raise Invalid("FEN turn")
  }
  let rows = fields[0].split("/").collect()
  if rows.length() != 10 {
    raise Invalid("FEN ranks")
  }
  let cells : Array[Int] = []
  let mut rk = 0
  let mut bk = 0
  for row in rows {
    let start = cells.length()
    for c in row {
      if c >= '1' && c <= '9' {
        for _ in 0..<(c.to_int() - '0'.to_int()) {
          cells.push(0)
        }
      } else {
        let p = match c {
          'K' => 1
          'A' => 2
          'B' | 'E' => 3
          'N' | 'H' => 4
          'R' => 5
          'C' => 6
          'P' => 7
          'k' => -1
          'a' => -2
          'b' | 'e' => -3
          'n' | 'h' => -4
          'r' => -5
          'c' => -6
          'p' => -7
          _ => raise Invalid("FEN piece")
        }
        if p == 1 {
          rk += 1
        }
        if p == -1 {
          bk += 1
        }
        cells.push(p)
      }
    }
    if cells.length() - start != 9 {
      raise Invalid("FEN file count")
    }
  }
  if rk != 1 || bk != 1 {
    raise Invalid("FEN needs both kings")
  }
  { cells, red: fields[1] == "w", }
}

///|
pub fn Board::fen(self : Board) -> String {
  let rows : Array[String] = []
  for y in 0..<10 {
    let mut row = ""
    let mut empty = 0
    for x in 0..<9 {
      let p = self.cells[y * 9 + x]
      if p == 0 {
        empty += 1
      } else {
        if empty > 0 {
          row += empty.to_string()
          empty = 0
        }
        row += match p {
          1 => "K"
          2 => "A"
          3 => "B"
          4 => "N"
          5 => "R"
          6 => "C"
          7 => "P"
          -1 => "k"
          -2 => "a"
          -3 => "b"
          -4 => "n"
          -5 => "r"
          -6 => "c"
          _ => "p"
        }
      }
    }
    if empty > 0 {
      row += empty.to_string()
    }
    rows.push(row)
  }
  rows.join("/") + (if self.red { " w" } else { " b" })
}

///|
fn abs(n : Int) -> Int {
  if n < 0 {
    -n
  } else {
    n
  }
}

///|
fn palace(x : Int, y : Int, red : Bool) -> Bool {
  x >= 3 && x <= 5 && (if red { y >= 7 && y <= 9 } else { y >= 0 && y <= 2 })
}

///|
fn Board::pseudo(self : Board, from : Int, to : Int) -> Bool {
  if from == to {
    return false
  }
  let p = self.cells[from]
  let target = self.cells[to]
  if p == 0 || (target != 0 && (p > 0) == (target > 0)) {
    return false
  }
  let x = from % 9
  let y = from / 9
  let tx = to % 9
  let ty = to / 9
  let dx = tx - x
  let dy = ty - y
  let red = p > 0
  let aligned = dx == 0 || dy == 0
  let mut screen = 0
  if aligned {
    let step = if dx == 0 {
      if dy > 0 {
        9
      } else {
        -9
      }
    } else if dx > 0 {
      1
    } else {
      -1
    }
    let mut i = from + step
    while i != to {
      if self.cells[i] != 0 {
        screen += 1
      }
      i += step
    }
  }
  match abs(p) {
    1 =>
      (palace(tx, ty, red) && abs(dx) + abs(dy) == 1) ||
      (target == -p && dx == 0 && screen == 0)
    2 => palace(tx, ty, red) && abs(dx) == 1 && abs(dy) == 1
    3 =>
      abs(dx) == 2 &&
      abs(dy) == 2 &&
      (if red { ty >= 5 } else { ty <= 4 }) &&
      self.cells[(y + dy / 2) * 9 + x + dx / 2] == 0
    4 =>
      if abs(dx) == 2 && abs(dy) == 1 {
        self.cells[y * 9 + x + dx / 2] == 0
      } else if abs(dx) == 1 && abs(dy) == 2 {
        self.cells[(y + dy / 2) * 9 + x] == 0
      } else {
        false
      }
    5 => aligned && screen == 0
    6 => aligned && screen == (if target == 0 { 0 } else { 1 })
    7 =>
      (dx == 0 && dy == (if red { -1 } else { 1 })) ||
      (dy == 0 && abs(dx) == 1 && (if red { y <= 4 } else { y >= 5 }))
    _ => false
  }
}

///|
pub fn Board::in_check(self : Board, red : Bool) -> Bool {
  let mut king = -1
  for i, p in self.cells {
    if p == (if red { 1 } else { -1 }) {
      king = i
      break
    }
  }
  if king < 0 {
    return true
  }
  for i, p in self.cells {
    if p != 0 && (p > 0) != red && self.pseudo(i, king) {
      return true
    }
  }
  false
}

///|
fn Board::apply(self : Board, m : Move) -> Board {
  let cells = self.cells.copy()
  cells[m.to] = cells[m.from]
  cells[m.from] = 0
  { cells, red: !self.red, }
}

///|
pub fn Board::legal_moves(self : Board) -> Array[Move] {
  let out : Array[Move] = []
  for i, p in self.cells {
    if p == 0 || (p > 0) != self.red {
      continue
    }
    for j in 0..<90 {
      if self.pseudo(i, j) {
        let m = Move::{ from: i, to: j, }
        if !self.apply(m).in_check(self.red) {
          out.push(m)
        }
      }
    }
  }
  out
}

///|
pub fn Move::coordinate(self : Move) -> String {
  let files = "abcdefghi".to_array()
  files[self.from % 9].to_string() +
  (9 - self.from / 9).to_string() +
  files[self.to % 9].to_string() +
  (9 - self.to / 9).to_string()
}

///|
pub fn Board::play(self : Board, coordinate : String) -> Board raise ChessError {
  for m in self.legal_moves() {
    if m.coordinate() == coordinate {
      return self.apply(m)
    }
  }
  raise Invalid("illegal move " + coordinate)
}

///|
fn Board::evaluate(self : Board) -> Int {
  let mut score = 0
  for i, p in self.cells {
    let v = match abs(p) {
      1 => 100000
      2 | 3 => 120
      4 => 270
      5 => 600
      6 => 300
      7 => if (p > 0 && i / 9 < 5) || (p < 0 && i / 9 > 4) { 100 } else { 60 }
      _ => 0
    }
    score += if p > 0 { v } else { -v }
  }
  if self.red {
    score
  } else {
    -score
  }
}

///|
priv struct Search {
  mut nodes : Int
  limit : Int
}

///|
fn Search::visit(
  self : Search,
  b : Board,
  depth : Int,
  alpha : Int,
  beta : Int,
) -> Int raise ChessError {
  self.nodes += 1
  if self.nodes > self.limit {
    raise Invalid("search node budget")
  }
  if depth == 0 {
    return b.evaluate()
  }
  let moves = b.legal_moves()
  if moves.is_empty() {
    return -100000 - depth
  }
  let mut best = alpha
  for m in moves {
    let value = -self.visit(b.apply(m), depth - 1, -beta, -best)
    if value > best {
      best = value
    }
    if best >= beta {
      break
    }
  }
  best
}

///|
pub fn Board::best_move(
  self : Board,
  depth : Int,
  node_limit? : Int = 50000,
) -> Move? raise ChessError {
  if depth < 1 || depth > 3 || node_limit < 1 || node_limit > 1000000 {
    raise Invalid("search bounds")
  }
  let s = Search::{ nodes: 0, limit: node_limit, }
  let mut best = None
  let mut score = -10000000
  for m in self.legal_moves() {
    let value = -s.visit(self.apply(m), depth - 1, -10000000, -score)
    if value > score {
      score = value
      best = Some(m)
    }
  }
  best
}

///|
pub fn Board::perft(self : Board, depth : Int) -> Int raise ChessError {
  if depth < 0 || depth > 2 {
    raise Invalid("perft depth 0..2")
  }
  if depth == 0 {
    return 1
  }
  let mut n = 0
  for m in self.legal_moves() {
    n += self.apply(m).perft(depth - 1)
  }
  n
}
