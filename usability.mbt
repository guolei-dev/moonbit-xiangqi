///|
/// Synchronous, transport-independent UCCI command session.
pub struct Engine {
  mut game : Game
  mut closed : Bool
} derive(Debug)

///|
pub fn Engine::new() -> Engine {
  { game: Game::new(initial()), closed: false, }
}

///|
pub fn Engine::fen(self : Engine) -> String {
  self.game.board().fen()
}

///|
pub fn Engine::command(self : Engine, line : String) -> String raise ChessError {
  if self.closed {
    raise Invalid("engine closed")
  }
  let args = line
    .trim()
    .split(" ")
    .filter(x => !x.is_empty())
    .map(x => x.to_owned())
    .collect()
  if args.is_empty() {
    raise Invalid("empty UCCI command")
  }
  match args[0] {
    "ucci" => "id name MoonBit Xiangqi Local\nucciok"
    "isready" => "readyok"
    "ucinewgame" => {
      self.game = Game::new(initial())
      ""
    }
    "quit" => {
      self.closed = true
      ""
    }
    "stop" => ""
    "position" => {
      if args.length() < 2 {
        raise Invalid("position arguments")
      }
      let mut end = args.length()
      for i in 2..<args.length() {
        if args[i] == "moves" {
          end = i
          break
        }
      }
      let board = if args[1] == "startpos" {
        if end != 2 {
          raise Invalid("startpos arguments")
        }
        initial()
      } else if args[1] == "fen" {
        parse_fen(args[2:end].to_owned().join(" "))
      } else {
        raise Invalid("position type")
      }
      let game = Game::new(board)
      if end < args.length() {
        for i in (end + 1)..<args.length() {
          game.play(args[i])
        }
      }
      self.game = game
      ""
    }
    "go" => {
      if args.length() != 3 || args[1] != "depth" {
        raise Invalid("synchronous core supports go depth 1..64")
      }
      let mut depth = 0
      if args[2].is_empty() || args[2].length() > 2 {
        raise Invalid("depth range")
      }
      for c in args[2] {
        if c < '0' || c > '9' {
          raise Invalid("depth range")
        }
        depth = depth * 10 + c.to_int() - 48
      }
      let result = self.game.search(depth, node_limit=50000)
      if result.stopped {
        raise Invalid("search node budget")
      }
      "bestmove " +
      (match result.best {
        Some(m) => m.coordinate()
        None => "0000"
      })
    }
    _ => raise Invalid("unsupported UCCI command")
  }
}

///|
pub fn Engine::status(self : Engine) -> String {
  self.game.status()
}

///|
pub fn Engine::search(
  self : Engine,
  depth : Int,
  node_limit? : Int = 100000,
  should_stop? : () -> Bool = () => false,
  on_iteration? : (SearchResult) -> Unit = _ => (),
) -> SearchResult raise ChessError {
  if self.closed {
    raise Invalid("engine closed")
  }
  self.game.search(depth, node_limit~, should_stop~, on_iteration~)
}
