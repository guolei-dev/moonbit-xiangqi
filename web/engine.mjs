class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function $oob() {
  throw new Error("Index out of bounds");
}
function _M0TPB13StringBuilder(param0) {
  this.val = param0;
}
function _M0TPC16string10StringView(param0, param1, param2) {
  this.str = param0;
  this.start = param1;
  this.end = param2;
}
const _M0FPB12random__seed = () => {
  if (globalThis.crypto?.getRandomValues) {
    const array = new Uint32Array(1);
    globalThis.crypto.getRandomValues(array);
    return array[0] | 0; // Convert to signed 32
  } else {
    return Math.floor(Math.random() * 0x100000000) | 0; // Fallback to Math.random
  }
};
const _M0FPB19int__to__string__js = (x, radix) => {
  return x.toString(radix);
};
function _M0TPB4IterGRPC16string10StringViewE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB4IterGcE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB8MutLocalGiE(param0) {
  this.val = param0;
}
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
const _M0MPB7JSArray4push = (arr, val) => { arr.push(val); };
function _M0TPB4IterGsE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function _M0TPB8MutLocalGORPC16string10StringViewE(param0) {
  this.val = param0;
}
function _M0TPB9ArrayViewGsE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB3MapGsRP211localreview7xiangqi4MoveE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB5EntryGsRP211localreview7xiangqi4MoveE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
const _M0MPB7JSArray4copy = (arr) => arr.slice(0);
const _M0MPB7JSArray11set__length = (arr, len) => { arr.length = len; };
const _M0MPB7JSArray12append__view = (dst, src, src_offset, len) => {
   for (let i = 0; i < len; i++) {
     dst.push(src[src_offset + i]);
   }
 };
const _M0MPB7JSArray3pop = (arr) => arr.pop();
function _M0TPB12MutArrayViewGRP211localreview7xiangqi4MoveE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGRPC16string10StringViewE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC15debug4Repr7UnitLit() {}
_M0DTPC15debug4Repr7UnitLit.prototype.$tag = 0;
function _M0DTPC15debug4Repr7Integer(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr7Integer.prototype.$tag = 1;
function _M0DTPC15debug4Repr9DoubleLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr9DoubleLit.prototype.$tag = 2;
function _M0DTPC15debug4Repr8FloatLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr8FloatLit.prototype.$tag = 3;
function _M0DTPC15debug4Repr7BoolLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr7BoolLit.prototype.$tag = 4;
function _M0DTPC15debug4Repr7CharLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr7CharLit.prototype.$tag = 5;
function _M0DTPC15debug4Repr9StringLit(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr9StringLit.prototype.$tag = 6;
function _M0DTPC15debug4Repr5Tuple(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr5Tuple.prototype.$tag = 7;
function _M0DTPC15debug4Repr5Array(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr5Array.prototype.$tag = 8;
function _M0DTPC15debug4Repr6Record(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr6Record.prototype.$tag = 9;
function _M0DTPC15debug4Repr4Enum(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr4Enum.prototype.$tag = 10;
function _M0DTPC15debug4Repr3Map(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr3Map.prototype.$tag = 11;
function _M0DTPC15debug4Repr11RecordField(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr11RecordField.prototype.$tag = 12;
function _M0DTPC15debug4Repr14EnumLabeledArg(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr14EnumLabeledArg.prototype.$tag = 13;
function _M0DTPC15debug4Repr6Opaque(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr6Opaque.prototype.$tag = 14;
function _M0DTPC15debug4Repr7Literal(param0) {
  this._0 = param0;
}
_M0DTPC15debug4Repr7Literal.prototype.$tag = 15;
function _M0DTPC15debug4Repr8MapEntry(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTPC15debug4Repr8MapEntry.prototype.$tag = 16;
function _M0DTPC15debug4Repr7Omitted() {}
_M0DTPC15debug4Repr7Omitted.prototype.$tag = 17;
const _M0DTPC15debug4Repr7Omitted__ = new _M0DTPC15debug4Repr7Omitted();
function _M0TPC15debug13ContentParens(param0, param1) {
  this.size = param0;
  this.lines = param1;
}
function _M0TPC15debug7Content(param0, param1, param2) {
  this.size = param0;
  this.lines = param1;
  this.needs_parens = param2;
}
function _M0DTPC16result6ResultGRP211localreview7xiangqi5BoardRP211localreview7xiangqi10ChessErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview7xiangqi5BoardRP211localreview7xiangqi10ChessErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP211localreview7xiangqi5BoardRP211localreview7xiangqi10ChessErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview7xiangqi5BoardRP211localreview7xiangqi10ChessErrorE2Ok.prototype.$tag = 1;
function _M0DTPC15error5Error51localreview_2fxiangqi_2eSearchStopped_2eInterrupted() {}
_M0DTPC15error5Error51localreview_2fxiangqi_2eSearchStopped_2eInterrupted.prototype.$tag = 1;
const _M0DTPC15error5Error51localreview_2fxiangqi_2eSearchStopped_2eInterrupted__ = new _M0DTPC15error5Error51localreview_2fxiangqi_2eSearchStopped_2eInterrupted();
function _M0DTPC15error5Error44localreview_2fxiangqi_2eChessError_2eInvalid(param0) {
  this._0 = param0;
}
_M0DTPC15error5Error44localreview_2fxiangqi_2eChessError_2eInvalid.prototype.$tag = 0;
function _M0TP211localreview7xiangqi5Board(param0, param1) {
  this.cells = param0;
  this.red = param1;
}
function _M0TP211localreview7xiangqi6Engine(param0, param1) {
  this.board = param0;
  this.closed = param1;
}
function _M0TPB8MutLocalGsE(param0) {
  this.val = param0;
}
function _M0TP211localreview7xiangqi4Move(param0, param1) {
  this.from = param0;
  this.to = param1;
}
function _M0DTPC16result6ResultGuRP211localreview7xiangqi13SearchStoppedE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRP211localreview7xiangqi13SearchStoppedE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGuRP211localreview7xiangqi13SearchStoppedE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGuRP211localreview7xiangqi13SearchStoppedE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGiRP211localreview7xiangqi13SearchStoppedE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRP211localreview7xiangqi13SearchStoppedE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGiRP211localreview7xiangqi13SearchStoppedE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRP211localreview7xiangqi13SearchStoppedE2Ok.prototype.$tag = 1;
function _M0TPB8MutLocalGORP211localreview7xiangqi4MoveE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGRP211localreview7xiangqi12SearchResultRP211localreview7xiangqi10ChessErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview7xiangqi12SearchResultRP211localreview7xiangqi10ChessErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGRP211localreview7xiangqi12SearchResultRP211localreview7xiangqi10ChessErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGRP211localreview7xiangqi12SearchResultRP211localreview7xiangqi10ChessErrorE2Ok.prototype.$tag = 1;
function _M0TP211localreview7xiangqi12SearchResult(param0, param1, param2, param3, param4) {
  this.best = param0;
  this.score = param1;
  this.depth = param2;
  this.nodes = param3;
  this.stopped = param4;
}
function _M0TP211localreview7xiangqi11SearchState(param0, param1, param2, param3, param4) {
  this.nodes = param0;
  this.limit = param1;
  this.should_stop = param2;
  this.path = param3;
  this.ordering = param4;
}
function _M0TPB9ArrayViewGUsRP211localreview7xiangqi4MoveEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB8MutLocalGRP211localreview7xiangqi12SearchResultE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGORP211localreview7xiangqi4MoveRP211localreview7xiangqi10ChessErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORP211localreview7xiangqi4MoveRP211localreview7xiangqi10ChessErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGORP211localreview7xiangqi4MoveRP211localreview7xiangqi10ChessErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGORP211localreview7xiangqi4MoveRP211localreview7xiangqi10ChessErrorE2Ok.prototype.$tag = 1;
function _M0DTPC16result6ResultGsRP211localreview7xiangqi10ChessErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRP211localreview7xiangqi10ChessErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGsRP211localreview7xiangqi10ChessErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGsRP211localreview7xiangqi10ChessErrorE2Ok.prototype.$tag = 1;
function _M0TPB8MutLocalGRP211localreview7xiangqi5BoardE(param0) {
  this.val = param0;
}
function _M0DTPC16result6ResultGiRP211localreview7xiangqi10ChessErrorE3Err(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRP211localreview7xiangqi10ChessErrorE3Err.prototype.$tag = 0;
function _M0DTPC16result6ResultGiRP211localreview7xiangqi10ChessErrorE2Ok(param0) {
  this._0 = param0;
}
_M0DTPC16result6ResultGiRP211localreview7xiangqi10ChessErrorE2Ok.prototype.$tag = 1;
const _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger = { method_0: _M0IPB13StringBuilderPB6Logger13write__string, method_1: _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE, method_2: _M0IPB13StringBuilderPB6Logger11write__view, method_3: _M0IPB13StringBuilderPB6Logger11write__char, method_4: _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE, method_5: _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE };
const _M0MPC16string10StringView4trimN7_2abindS6760 = "\t\n\r ";
const _M0MPC16string6String4trimN7_2abindS6861 = "\t\n\r ";
const _M0MPB4Iter4nextN6constrS9855GRPC16string10StringViewE = 0;
const _M0MPB4Iter4nextN6constrS9856GRPC16string10StringViewE = 0;
const _M0MPB4Iter4nextN6constrS9855GcE = 0;
const _M0MPB4Iter4nextN6constrS9856GcE = 0;
const _M0MPB4Iter3newN6constrS9863GRPC16string10StringViewE = 0;
const _M0MPB4Iter3newN6constrS9863GcE = 0;
const _M0FPC15debug14compact__linesN7_2abindS1134 = "";
const _M0FPC15debug14compact__linesN7_2abindS1147 = " ";
const _M0FPC15debug14compact__linesN7_2abindS1141 = ",";
const _M0FPC15debug14compact__linesN7_2abindS1139 = " ";
const _M0FPC15debug14compact__linesN7_2abindS1138 = " ";
const _M0FPC15debug14compact__linesN7_2abindS1136 = "";
const _M0FPC15debug14compact__linesN7_2abindS1148 = "(";
const _M0FPC15debug14compact__linesN7_2abindS1152 = "";
const _M0FPC15debug14compact__linesN7_2abindS1161 = " ";
const _M0FPC15debug14compact__linesN7_2abindS1155 = ",";
const _M0FPC15debug14compact__linesN7_2abindS1166 = " ";
const _M0FPC15debug19bracket__seq__linesN7_2abindS1175 = "";
const _M0FPC15debug14print__contentN7_2abindS1244 = "\n";
const _M0MPC16string10StringView4findN6constrS9865 = 0;
const _M0FPB4seed = _M0FPB12random__seed();
const _M0FPC15debug6renderN6constrS1705 = 16;
function _M0FPC15abort5abortGRP211localreview7xiangqi5BoardE(msg) {
  return $panic();
}
function _M0FPC15abort5abortGOiE(msg) {
  return $panic();
}
function _M0FPB4rotl(x, r) {
  return x << r | (x >>> (32 - r | 0) | 0);
}
function _M0FPB13consume4__acc(acc, input) {
  return Math.imul(_M0FPB4rotl((acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0, 17), 668265263) | 0;
}
function _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGsEE(dst, dst_offset, src, src_offset, len) {
  if (dst === src && dst_offset < src_offset) {
    let _tmp = 0;
    while (true) {
      const i = _tmp;
      if (i < len) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        if (_tmp$2 >>> 0 < dst.length) {
          dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
        } else {
          $oob();
        }
        _tmp = i + 1 | 0;
        continue;
      } else {
        return;
      }
    }
  } else {
    let _tmp = len - 1 | 0;
    while (true) {
      const i = _tmp;
      if (i >= 0) {
        const _tmp$2 = dst_offset + i | 0;
        const _tmp$3 = src_offset + i | 0;
        if (_tmp$2 >>> 0 < dst.length) {
          dst[_tmp$2] = _tmp$3 >>> 0 < src.length ? src[_tmp$3] : $oob();
        } else {
          $oob();
        }
        _tmp = i - 1 | 0;
        continue;
      } else {
        return;
      }
    }
  }
}
function _M0MPB18UninitializedArray12unsafe__blitGsE(dst, dst_offset, src, src_offset, len) {
  _M0MPC15array10FixedArray12unsafe__blitGRPB17UnsafeMaybeUninitGsEE(dst, dst_offset, src, src_offset, len);
}
function _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(self, obj) {
  _M0IPC16string10StringViewPB4Show6output(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGsE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGsE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPC13int3Int16unsafe__to__char(self) {
  return self;
}
function _M0MPC14byte4Byte8to__char(self) {
  return self;
}
function _M0MPB13StringBuilder21StringBuilder_2einner(size_hint) {
  return new _M0TPB13StringBuilder("");
}
function _M0MPB13StringBuilder10to__string(self) {
  return self.val;
}
function _M0IPB13StringBuilderPB6Logger11write__char(self, ch) {
  self.val = `${self.val}${String.fromCodePoint(ch)}`;
}
function _M0IPB13StringBuilderPB6Logger13write__string(self, str) {
  self.val = `${self.val}${str}`;
}
function _M0MPC16uint166UInt1622is__leading__surrogate(self) {
  return self >= 55296 && self <= 56319;
}
function _M0MPC16uint166UInt1623is__trailing__surrogate(self) {
  return self >= 56320 && self <= 57343;
}
function _M0FPB32code__point__of__surrogate__pair(leading, trailing) {
  return (((Math.imul(leading - 55296 | 0, 1024) | 0) + trailing | 0) - 56320 | 0) + 65536 | 0;
}
function _M0MPC16uint166UInt1616unsafe__to__char(self) {
  return self;
}
function _M0MPC16string6String16unsafe__char__at(self, index) {
  const c1 = self.charCodeAt(index);
  if (_M0MPC16uint166UInt1622is__leading__surrogate(c1)) {
    const c2 = self.charCodeAt(index + 1 | 0);
    return _M0FPB32code__point__of__surrogate__pair(c1, c2);
  } else {
    return _M0MPC16uint166UInt1616unsafe__to__char(c1);
  }
}
function _M0IPC14byte4BytePB3Add3add(self, that) {
  return (self + that | 0) & 255;
}
function _M0IPC14byte4BytePB3Div3div(self, that) {
  if (that === 0) {
    $panic();
  }
  return (self / that | 0) & 255;
}
function _M0IPC14byte4BytePB3Mod3mod(self, that) {
  if (that === 0) {
    $panic();
  }
  return (self % that | 0) & 255;
}
function _M0IPC14byte4BytePB3Sub3sub(self, that) {
  return (self - that | 0) & 255;
}
function _M0MPC14byte4Byte7to__hexN14to__hex__digitS3978(i) {
  return i < 10 ? _M0MPC14byte4Byte8to__char(_M0IPC14byte4BytePB3Add3add(i, 48)) : _M0MPC14byte4Byte8to__char(_M0IPC14byte4BytePB3Sub3sub(_M0IPC14byte4BytePB3Add3add(i, 97), 10));
}
function _M0MPC14byte4Byte7to__hex(b) {
  const _self = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IPB13StringBuilderPB6Logger11write__char(_self, _M0MPC14byte4Byte7to__hexN14to__hex__digitS3978(_M0IPC14byte4BytePB3Div3div(b, 16)));
  _M0IPB13StringBuilderPB6Logger11write__char(_self, _M0MPC14byte4Byte7to__hexN14to__hex__digitS3978(_M0IPC14byte4BytePB3Mod3mod(b, 16)));
  return _M0MPB13StringBuilder10to__string(_self);
}
function _M0MPC16string10StringView11sub_2einner(self, start, end) {
  const str_len = self.str.length;
  let abs_end;
  if (end === undefined) {
    abs_end = self.end;
  } else {
    const _Some = end;
    const _end = _Some;
    abs_end = self.start + _end | 0;
  }
  const abs_start = self.start + start | 0;
  if (abs_start >= self.start && (abs_start <= abs_end && abs_end <= self.end)) {
    if (abs_start < str_len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.str.charCodeAt(abs_start))) {
      } else {
        $panic();
      }
    }
    if (abs_end < str_len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.str.charCodeAt(abs_end))) {
      } else {
        $panic();
      }
    }
    return new _M0TPC16string10StringView(self.str, abs_start, abs_end);
  } else {
    return $panic();
  }
}
function _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i) {
  const logger = _env._1;
  const self = _env._0;
  if (i > seg) {
    logger.method_table.method_2(logger.self, _M0MPC16string10StringView11sub_2einner(self, seg, i));
    return;
  } else {
    return;
  }
}
function _M0MPC16string10StringView18escape__to_2einner(self, logger, quote) {
  if (quote) {
    logger.method_table.method_3(logger.self, 34);
  }
  const len = self.end - self.start | 0;
  const _env = { _0: self, _1: logger };
  let _tmp = 0;
  let _tmp$2 = 0;
  _L: while (true) {
    const i = _tmp;
    const seg = _tmp$2;
    if (i >= len) {
      _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i);
      break;
    }
    const code = self.str.charCodeAt(self.start + i | 0);
    let c;
    _L$2: {
      switch (code) {
        case 34: {
          c = code;
          break _L$2;
        }
        case 92: {
          c = code;
          break _L$2;
        }
        case 10: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\n");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        case 13: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\r");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        case 8: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\b");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        case 9: {
          _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i);
          logger.method_table.method_0(logger.self, "\\t");
          _tmp = i + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue _L;
        }
        default: {
          if (code < 32) {
            _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i);
            logger.method_table.method_0(logger.self, "\\u{");
            logger.method_table.method_0(logger.self, _M0MPC14byte4Byte7to__hex(code & 255));
            logger.method_table.method_3(logger.self, 125);
            _tmp = i + 1 | 0;
            _tmp$2 = i + 1 | 0;
            continue _L;
          } else {
            _tmp = i + 1 | 0;
            continue _L;
          }
        }
      }
    }
    _M0MPC16string10StringView18escape__to_2einnerN14flush__segmentS3963(_env, seg, i);
    logger.method_table.method_3(logger.self, 92);
    logger.method_table.method_3(logger.self, _M0MPC16uint166UInt1616unsafe__to__char(c));
    _tmp = i + 1 | 0;
    _tmp$2 = i + 1 | 0;
    continue;
  }
  if (quote) {
    logger.method_table.method_3(logger.self, 34);
    return;
  } else {
    return;
  }
}
function _M0MPC16string6String14escape_2einner(self, quote) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0MPC16string10StringView18escape__to_2einner(new _M0TPC16string10StringView(self, 0, self.length), { self: buf, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger }, quote);
  return _M0MPB13StringBuilder10to__string(buf);
}
function _M0MPC16string10StringView12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.end - self.start | 0;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= (self.end - self.start | 0)) ? new _M0TPC16string10StringView(self.str, self.start + start_offset | 0, self.start + end_offset$2 | 0) : _M0FPC15abort5abortGRP211localreview7xiangqi5BoardE("Invalid index for View");
}
function _M0IPC16uint166UInt16PB2Eq5equal(self, that) {
  return self === that;
}
function _M0IPC16uint166UInt16PB2Eq10not__equal(self, that) {
  return self !== that;
}
function _M0MPC16uint166UInt168to__uint(self) {
  return self;
}
function _M0IP016_24default__implPB2Eq10not__equalGsE(x, y) {
  return !(x === y);
}
function _M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(x, y) {
  return !_M0IPC16string10StringViewPB2Eq5equal(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGbE(x, y) {
  return !(x === y);
}
function _M0FPB14avalanche__acc(acc) {
  let acc$2 = acc;
  acc$2 = acc$2 ^ (acc$2 >>> 15 | 0);
  acc$2 = Math.imul(acc$2, -2048144777) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 13 | 0);
  acc$2 = Math.imul(acc$2, -1028477379) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 16 | 0);
  return acc$2;
}
function _M0FPB13finalize__acc(acc) {
  return _M0FPB14avalanche__acc(acc);
}
function _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPC16string6String11sub_2einner(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end;
  }
  if (start >= 0 && (start <= end$2 && end$2 <= len)) {
    if (start < len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.charCodeAt(start))) {
      } else {
        $panic();
      }
    }
    if (end$2 < len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.charCodeAt(end$2))) {
      } else {
        $panic();
      }
    }
    return new _M0TPC16string10StringView(self, start, end$2);
  } else {
    return $panic();
  }
}
function _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(self, value, start, len) {
  _M0IPB13StringBuilderPB6Logger11write__view(self, _M0MPC16string6String11sub_2einner(value, start, start + len | 0));
}
function _M0MPC16string10StringView4data(self) {
  return self.str;
}
function _M0MPC16string10StringView13start__offset(self) {
  return self.start;
}
function _M0IP016_24default__implPB4Show6outputGsE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC16string6StringPB4Show10to__string(self));
}
function _M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(self) {
  const logger = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0IPC15debug4ReprPB4Show6output(self, { self: logger, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
  return _M0MPB13StringBuilder10to__string(logger);
}
function _M0MPB4Iter4nextGRPC16string10StringViewE(self) {
  const _func = self.f;
  const result = _func();
  const _bind = self.size_hint;
  if (result === undefined) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9856GRPC16string10StringViewE;
  } else {
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9855GRPC16string10StringViewE;
    }
  }
  return result;
}
function _M0MPB4Iter4nextGcE(self) {
  const _func = self.f;
  const result = _func();
  const _bind = self.size_hint;
  if (result === -1) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9856GcE;
  } else {
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9855GcE;
    }
  }
  return result;
}
function _M0MPC13int3Int18to__string_2einner(self, radix) {
  return _M0FPB19int__to__string__js(self, radix);
}
function _M0MPB4Iter3newGRPC16string10StringViewE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9863GRPC16string10StringViewE;
  }
  return new _M0TPB4IterGRPC16string10StringViewE(f, size_hint$2);
}
function _M0MPB4Iter3newGcE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9863GcE;
  }
  return new _M0TPB4IterGcE(f, size_hint$2);
}
function _M0MPC16string10StringView9to__owned(self) {
  return self.str.substring(self.start, self.end);
}
function _M0IPC16string10StringViewPB4Show6output(self, logger) {
  logger.method_table.method_2(logger.self, self);
}
function _M0MPC16string10StringView4iter(self) {
  const start = self.start;
  const end = self.end;
  const index = new _M0TPB8MutLocalGiE(start);
  return _M0MPB4Iter3newGcE(() => {
    if (index.val < end) {
      const c1 = self.str.charCodeAt(index.val);
      if (_M0MPC16uint166UInt1622is__leading__surrogate(c1) && (index.val + 1 | 0) < self.end) {
        const c2 = self.str.charCodeAt(index.val + 1 | 0);
        if (_M0MPC16uint166UInt1623is__trailing__surrogate(c2)) {
          index.val = index.val + 2 | 0;
          return _M0FPB32code__point__of__surrogate__pair(c1, c2);
        }
      }
      index.val = index.val + 1 | 0;
      return _M0MPC16uint166UInt1616unsafe__to__char(c1);
    } else {
      return -1;
    }
  }, undefined);
}
function _M0MPC16string10StringView3all(self, f) {
  const _bind = self.str;
  const _bind$2 = self.start;
  const _bind$3 = self.end;
  let _tmp = _bind$2;
  while (true) {
    const _string_index = _tmp;
    if (_string_index < _bind$3) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$4 = _bind.charCodeAt(_string_index);
        if (_bind$4 >= 55296 && _bind$4 <= 56319 && (_string_index + 1 | 0) < _bind$3) {
          const _bind$5 = _bind.charCodeAt(_string_index + 1 | 0);
          if (_bind$5 >= 56320 && _bind$5 <= 57343) {
            _decoded_next_string_index = _string_index + 2 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$4 - 55296 | 0, 1024) | 0) + _bind$5 | 0) - 56320 | 0) + 65536 | 0);
            break _L;
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$4);
            break _L;
          }
        } else {
          _decoded_next_string_index = _string_index + 1 | 0;
          _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$4);
          break _L;
        }
      }
      if (!f(_decoded_char)) {
        return false;
      }
      _tmp = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0MPC16string6String20unsafe__range__equal(self, self_off, other, other_off, len) {
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < len) {
      if (_M0IPC16uint166UInt16PB2Eq5equal(self.charCodeAt(self_off + i | 0), other.charCodeAt(other_off + i | 0))) {
      } else {
        return false;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0IPC16string10StringViewPB2Eq5equal(self, other) {
  const len = self.end - self.start | 0;
  if (len === (other.end - other.start | 0)) {
    if (self.str === other.str && self.start === other.start) {
      return true;
    }
    return _M0MPC16string6String20unsafe__range__equal(self.str, self.start, other.str, other.start, len);
  } else {
    return false;
  }
}
function _M0MPC16string6String12view_2einner(self, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return start_offset >= 0 && (start_offset <= end_offset$2 && end_offset$2 <= self.length) ? new _M0TPC16string10StringView(self, start_offset, end_offset$2) : _M0FPC15abort5abortGRP211localreview7xiangqi5BoardE("Invalid index for View");
}
function _M0MPC16string6String31offset__of__nth__char__backward(self, n, start_offset, end_offset) {
  let _tmp = end_offset;
  let _tmp$2 = 0;
  while (true) {
    const utf16_offset = _tmp;
    const char_count = _tmp$2;
    if ((utf16_offset - 1 | 0) >= start_offset && char_count < n) {
      const c = self.charCodeAt(utf16_offset - 1 | 0);
      if (_M0MPC16uint166UInt1623is__trailing__surrogate(c)) {
        _tmp = utf16_offset - 2 | 0;
        _tmp$2 = char_count + 1 | 0;
        continue;
      } else {
        _tmp = utf16_offset - 1 | 0;
        _tmp$2 = char_count + 1 | 0;
        continue;
      }
    } else {
      return char_count < n || utf16_offset < start_offset ? undefined : utf16_offset;
    }
  }
}
function _M0MPC16string6String30offset__of__nth__char__forward(self, n, start_offset, end_offset) {
  if (start_offset >= 0 && start_offset <= end_offset) {
    let _tmp = start_offset;
    let _tmp$2 = 0;
    while (true) {
      const utf16_offset = _tmp;
      const char_count = _tmp$2;
      if (utf16_offset < end_offset && char_count < n) {
        const c = self.charCodeAt(utf16_offset);
        if (_M0MPC16uint166UInt1622is__leading__surrogate(c)) {
          _tmp = utf16_offset + 2 | 0;
          _tmp$2 = char_count + 1 | 0;
          continue;
        } else {
          _tmp = utf16_offset + 1 | 0;
          _tmp$2 = char_count + 1 | 0;
          continue;
        }
      } else {
        return char_count < n || utf16_offset >= end_offset ? undefined : utf16_offset;
      }
    }
  } else {
    return _M0FPC15abort5abortGOiE("Invalid start index");
  }
}
function _M0MPC16string6String29offset__of__nth__char_2einner(self, i, start_offset, end_offset) {
  let end_offset$2;
  if (end_offset === undefined) {
    end_offset$2 = self.length;
  } else {
    const _Some = end_offset;
    end_offset$2 = _Some;
  }
  return i >= 0 ? _M0MPC16string6String30offset__of__nth__char__forward(self, i, start_offset, end_offset$2) : _M0MPC16string6String31offset__of__nth__char__backward(self, -i | 0, start_offset, end_offset$2);
}
function _M0IPB13StringBuilderPB6Logger11write__view(self, str) {
  self.val = `${self.val}${_M0MPC16string10StringView9to__owned(str)}`;
}
function _M0FPB19kmp__failure__table(pattern) {
  const m = pattern.end - pattern.start | 0;
  const table = $make_array_len_and_init(m, 0);
  let k = 0;
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < m) {
      const c = pattern.str.charCodeAt(pattern.start + i | 0);
      while (true) {
        if (k > 0 && _M0IPC16uint166UInt16PB2Eq10not__equal(c, pattern.str.charCodeAt(pattern.start + k | 0))) {
          const _tmp$2 = k - 1 | 0;
          k = _tmp$2 >>> 0 < table.length ? table[_tmp$2] : $oob();
          continue;
        } else {
          break;
        }
      }
      if (_M0IPC16uint166UInt16PB2Eq5equal(c, pattern.str.charCodeAt(pattern.start + k | 0))) {
        k = k + 1 | 0;
      }
      if (i >>> 0 < table.length) {
        table[i] = k;
      } else {
        $oob();
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return table;
}
function _M0FPB24find__pattern__kmp__from(target, pattern, start) {
  const n = target.end - target.start | 0;
  const m = pattern.end - pattern.start | 0;
  const table = _M0FPB19kmp__failure__table(pattern);
  let k = 0;
  let _tmp = start;
  while (true) {
    const i = _tmp;
    if (i < n) {
      const c = target.str.charCodeAt(target.start + i | 0);
      while (true) {
        if (k > 0 && _M0IPC16uint166UInt16PB2Eq10not__equal(c, pattern.str.charCodeAt(pattern.start + k | 0))) {
          const _tmp$2 = k - 1 | 0;
          k = _tmp$2 >>> 0 < table.length ? table[_tmp$2] : $oob();
          continue;
        } else {
          break;
        }
      }
      if (_M0IPC16uint166UInt16PB2Eq5equal(c, pattern.str.charCodeAt(pattern.start + k | 0))) {
        k = k + 1 | 0;
      }
      if (k === m) {
        return (i - m | 0) + 1 | 0;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return undefined;
}
function _M0FPB36find__two__anchor__candidate__scalar(data, start, candidate_end, first, last_offset, last) {
  let _tmp = start;
  while (true) {
    const pos = _tmp;
    if (pos < candidate_end) {
      if (_M0IPC16uint166UInt16PB2Eq5equal(data.charCodeAt(pos), first) && _M0IPC16uint166UInt16PB2Eq5equal(data.charCodeAt(pos + last_offset | 0), last)) {
        return pos;
      }
      _tmp = pos + 1 | 0;
      continue;
    } else {
      return -1;
    }
  }
}
function _M0FPB42find__two__anchor__candidate__from__string(data, start, candidate_end, first, last_offset, last) {
  return _M0FPB36find__two__anchor__candidate__scalar(data, start, candidate_end, first, last_offset, last);
}
function _M0FPB21string__ranges__equal(left, left_start, right, right_start, length) {
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < length) {
      if (_M0IPC16uint166UInt16PB2Eq10not__equal(left.charCodeAt(left_start + i | 0), right.charCodeAt(right_start + i | 0))) {
        return false;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0FPB29two__anchor__should__fallback(failures, scanned) {
  if (failures > 64) {
    return true;
  } else {
    if (8 === 0) {
      $panic();
    }
    return failures > (4 + (scanned / 8 | 0) | 0);
  }
}
function _M0FPB22find__by__two__anchors(target, pattern) {
  const target_len = target.end - target.start | 0;
  const pattern_len = pattern.end - pattern.start | 0;
  const target_start = _M0MPC16string10StringView13start__offset(target);
  const pattern_start = _M0MPC16string10StringView13start__offset(pattern);
  const last_offset = pattern_len - 1 | 0;
  const candidate_end = ((target_start + target_len | 0) - pattern_len | 0) + 1 | 0;
  const first = pattern.str.charCodeAt(pattern.start);
  const last = pattern.str.charCodeAt(pattern.start + last_offset | 0);
  const middle_len = last_offset - 1 | 0;
  let _tmp = target_start;
  let _tmp$2 = 0;
  while (true) {
    const pos = _tmp;
    const failures = _tmp$2;
    if (pos < candidate_end) {
      const found = _M0FPB42find__two__anchor__candidate__from__string(_M0MPC16string10StringView4data(target), pos, candidate_end, first, last_offset, last);
      if (found < 0) {
        return undefined;
      }
      if (_M0FPB21string__ranges__equal(_M0MPC16string10StringView4data(target), found + 1 | 0, _M0MPC16string10StringView4data(pattern), pattern_start + 1 | 0, middle_len)) {
        return found - target_start | 0;
      }
      const failures$2 = failures + 1 | 0;
      const scanned = found - target_start | 0;
      if (_M0FPB29two__anchor__should__fallback(failures$2, scanned)) {
        return _M0FPB24find__pattern__kmp__from(target, pattern, scanned + 1 | 0);
      }
      _tmp = found + 1 | 0;
      _tmp$2 = failures$2;
      continue;
    } else {
      return undefined;
    }
  }
}
function _M0FPB24find__code__unit__scalar(data, start, end, code) {
  let _tmp = start;
  while (true) {
    const pos = _tmp;
    if (pos < end) {
      if (_M0IPC16uint166UInt16PB2Eq5equal(data.charCodeAt(pos), code)) {
        return pos;
      }
      _tmp = pos + 1 | 0;
      continue;
    } else {
      return -1;
    }
  }
}
function _M0FPB30find__code__unit__from__string(data, start, end, code) {
  return _M0FPB24find__code__unit__scalar(data, start, end, code);
}
function _M0FPB28find__code__unit__from__view(target, start, end, code) {
  const target_start = _M0MPC16string10StringView13start__offset(target);
  const found = _M0FPB30find__code__unit__from__string(_M0MPC16string10StringView4data(target), target_start + start | 0, target_start + end | 0, code);
  return found < 0 ? -1 : found - target_start | 0;
}
function _M0MPC16string10StringView4find(self, str) {
  const pattern_len = str.end - str.start | 0;
  switch (pattern_len) {
    case 0: {
      return _M0MPC16string10StringView4findN6constrS9865;
    }
    case 1: {
      const found = _M0FPB28find__code__unit__from__view(self, 0, self.end - self.start | 0, str.str.charCodeAt(str.start));
      return found < 0 ? undefined : found;
    }
    default: {
      return pattern_len > (self.end - self.start | 0) ? undefined : _M0FPB22find__by__two__anchors(self, str);
    }
  }
}
function _M0IPC16string6StringPB4Show10to__string(self) {
  return self;
}
function _M0MPC16string6String6repeat(self, n) {
  if (n < 0) {
    return _M0FPC15abort5abortGRP211localreview7xiangqi5BoardE("negative repeat count");
  } else {
    if (n === 0) {
      return "";
    } else {
      if (n === 1) {
        return self;
      } else {
        const len = self.length;
        const total = Math.imul(len, n) | 0;
        let _tmp;
        if (len === 0) {
          _tmp = true;
        } else {
          if (n === 0) {
            $panic();
          }
          _tmp = (total / n | 0) === len;
        }
        if (_tmp) {
          const buf = _M0MPB13StringBuilder21StringBuilder_2einner(total);
          const str = _M0IPC16string6StringPB4Show10to__string(self);
          let _tmp$2 = 0;
          while (true) {
            const _ = _tmp$2;
            if (_ < n) {
              _M0IPB13StringBuilderPB6Logger13write__string(buf, str);
              _tmp$2 = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          return _M0MPB13StringBuilder10to__string(buf);
        } else {
          return _M0FPC15abort5abortGRP211localreview7xiangqi5BoardE("repeat result too large");
        }
      }
    }
  }
}
function _M0MPC16string10StringView11has__suffix(self, str) {
  const self_len = self.end - self.start | 0;
  const str_len = str.end - str.start | 0;
  if (str_len <= self_len) {
    const start = self_len - str_len | 0;
    return str_len === 0 || _M0IPC16uint166UInt16PB2Eq5equal(self.str.charCodeAt(self.start + start | 0), str.str.charCodeAt(str.start)) ? _M0MPC16string6String20unsafe__range__equal(self.str, self.start + start | 0, str.str, str.start, str_len) : false;
  } else {
    return false;
  }
}
function _M0MPC16string6String11has__suffix(self, str) {
  return _M0MPC16string10StringView11has__suffix(new _M0TPC16string10StringView(self, 0, self.length), str);
}
function _M0MPC16string10StringView11has__prefix(self, str) {
  const str_len = str.end - str.start | 0;
  return str_len <= (self.end - self.start | 0) ? (str_len === 0 || _M0IPC16uint166UInt16PB2Eq5equal(self.str.charCodeAt(self.start), str.str.charCodeAt(str.start)) ? _M0MPC16string6String20unsafe__range__equal(self.str, self.start, str.str, str.start, str_len) : false) : false;
}
function _M0MPC16string10StringView13strip__suffix(self, suffix) {
  const self_len = self.end - self.start | 0;
  const suffix_len = suffix.end - suffix.start | 0;
  return self_len >= suffix_len && _M0IPC16string10StringViewPB2Eq5equal(_M0MPC16string10StringView12view_2einner(self, self_len - suffix_len | 0, undefined), suffix) ? _M0MPC16string10StringView12view_2einner(self, 0, self_len - suffix_len | 0) : undefined;
}
function _M0MPC16string6String13strip__suffix(self, suffix) {
  return _M0MPC16string10StringView13strip__suffix(new _M0TPC16string10StringView(self, 0, self.length), suffix);
}
function _M0MPC16string10StringView13strip__prefix(self, prefix) {
  const prefix_len = prefix.end - prefix.start | 0;
  return (self.end - self.start | 0) >= prefix_len && _M0IPC16string10StringViewPB2Eq5equal(_M0MPC16string10StringView12view_2einner(self, 0, prefix_len), prefix) ? _M0MPC16string10StringView12view_2einner(self, prefix_len, undefined) : undefined;
}
function _M0MPC15array5Array13Array_2einnerGsE(capacity) {
  return [];
}
function _M0MPC15array5Array13Array_2einnerGcE(capacity) {
  return [];
}
function _M0MPC15array5Array4pushGsE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGiE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGcE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPB4Iter4foldGcRPB5ArrayGcEE(self, init, f) {
  let acc = init;
  while (true) {
    const _bind = _M0MPB4Iter4nextGcE(self);
    if (_bind === -1) {
      break;
    } else {
      const _Some = _bind;
      const _x = _Some;
      acc = f(acc, _x);
      continue;
    }
  }
  return acc;
}
function _M0FPB36string__contains__code__unit__scalar(str, start, end, code) {
  let _tmp = start;
  while (true) {
    const i = _tmp;
    if (i < end) {
      if (_M0IPC16uint166UInt16PB2Eq5equal(str.charCodeAt(i), code)) {
        return true;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0FPB28string__contains__code__unit(str, start, end, code) {
  return _M0FPB36string__contains__code__unit__scalar(str, start, end, code);
}
function _M0MPC16string10StringView20contains__code__unit(self, code) {
  return _M0FPB28string__contains__code__unit(self.str, self.start, self.end, code);
}
function _M0MPC14char4Char8to__uint(self) {
  return self;
}
function _M0FPB23build__ascii__char__set(chars) {
  let bits0 = 0;
  let bits1 = 0;
  let bits2 = 0;
  let bits3 = 0;
  const _bind = chars.str;
  const _bind$2 = chars.start;
  const _bind$3 = chars.end;
  let _tmp = _bind$2;
  while (true) {
    const _string_index = _tmp;
    if (_string_index < _bind$3) {
      let _decoded_next_string_index;
      let _decoded_char;
      _L: {
        const _bind$4 = _bind.charCodeAt(_string_index);
        if (_bind$4 >= 55296 && _bind$4 <= 56319 && (_string_index + 1 | 0) < _bind$3) {
          const _bind$5 = _bind.charCodeAt(_string_index + 1 | 0);
          if (_bind$5 >= 56320 && _bind$5 <= 57343) {
            _decoded_next_string_index = _string_index + 2 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$4 - 55296 | 0, 1024) | 0) + _bind$5 | 0) - 56320 | 0) + 65536 | 0);
            break _L;
          } else {
            _decoded_next_string_index = _string_index + 1 | 0;
            _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$4);
            break _L;
          }
        } else {
          _decoded_next_string_index = _string_index + 1 | 0;
          _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$4);
          break _L;
        }
      }
      const code = _M0MPC14char4Char8to__uint(_decoded_char);
      if (code >>> 0 < 128 >>> 0) {
        const bit = 1 << (code & 31);
        const _bind$4 = code >>> 5 | 0;
        switch (_bind$4) {
          case 0: {
            bits0 = bits0 | bit;
            break;
          }
          case 1: {
            bits1 = bits1 | bit;
            break;
          }
          case 2: {
            bits2 = bits2 | bit;
            break;
          }
          default: {
            bits3 = bits3 | bit;
          }
        }
      } else {
        return undefined;
      }
      _tmp = _decoded_next_string_index;
      continue;
    } else {
      break;
    }
  }
  return { _0: bits0, _1: bits1, _2: bits2, _3: bits3 };
}
function _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, code) {
  if (code >>> 0 < 128 >>> 0) {
    const bit = 1 << (code & 31);
    const _bind = code >>> 5 | 0;
    switch (_bind) {
      case 0: {
        return (bits0 & bit) !== 0;
      }
      case 1: {
        return (bits1 & bit) !== 0;
      }
      case 2: {
        return (bits2 & bit) !== 0;
      }
      default: {
        return (bits3 & bit) !== 0;
      }
    }
  } else {
    return false;
  }
}
function _M0FPB34string__trim__start__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3) {
  let _tmp = start;
  while (true) {
    const pos = _tmp;
    if (pos < end && _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, _M0MPC16uint166UInt168to__uint(str.charCodeAt(pos)))) {
      _tmp = pos + 1 | 0;
      continue;
    } else {
      return pos;
    }
  }
}
function _M0FPB32string__trim__end__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3) {
  let _tmp = end;
  while (true) {
    const pos = _tmp;
    if (pos > start && _M0FPB26ascii__char__set__contains(bits0, bits1, bits2, bits3, _M0MPC16uint166UInt168to__uint(str.charCodeAt(pos - 1 | 0)))) {
      _tmp = pos - 1 | 0;
      continue;
    } else {
      return pos;
    }
  }
}
function _M0FPB26string__trim__start__ascii(str, start, end, _chars, bits0, bits1, bits2, bits3) {
  return _M0FPB34string__trim__start__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3);
}
function _M0FPB24string__trim__end__ascii(str, start, end, _chars, bits0, bits1, bits2, bits3) {
  return _M0FPB32string__trim__end__ascii__scalar(str, start, end, bits0, bits1, bits2, bits3);
}
function _M0MPC16string10StringView14contains__char(self, c) {
  const len = self.end - self.start | 0;
  if (len > 0) {
    const c$2 = c;
    if (c$2 >= 0 && c$2 <= 65535) {
      return _M0MPC16string10StringView20contains__code__unit(self, c$2 & 65535);
    } else {
      if (c$2 < 0) {
        return false;
      } else {
        if (len >= 2) {
          const adj = c$2 - 65536 | 0;
          const high = 55296 + (adj >> 10) | 0;
          if (high <= 65535) {
            const high$2 = high & 65535;
            const low = (56320 + (adj & 1023) | 0) & 65535;
            let _tmp = 0;
            while (true) {
              const i = _tmp;
              if (i < (len - 1 | 0)) {
                if (_M0IPC16uint166UInt16PB2Eq5equal(self.str.charCodeAt(self.start + i | 0), high$2)) {
                  if (_M0IPC16uint166UInt16PB2Eq5equal(self.str.charCodeAt(self.start + (i + 1 | 0) | 0), low)) {
                    return true;
                  }
                  _tmp = i + 2 | 0;
                  continue;
                }
                _tmp = i + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          } else {
            return false;
          }
        } else {
          return false;
        }
      }
    }
    return false;
  } else {
    return false;
  }
}
function _M0MPC16string10StringView24trim__start__with__chars(self, chars) {
  let _tmp = self;
  while (true) {
    const x = _tmp;
    if ((x.end - x.start | 0) === 0) {
      return x;
    } else {
      const _c = _M0MPC16string6String16unsafe__char__at(x.str, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, 0, x.start, x.end));
      const _tmp$2 = x.str;
      const _bind = _M0MPC16string6String29offset__of__nth__char_2einner(x.str, 1, x.start, x.end);
      let _tmp$3;
      if (_bind === undefined) {
        _tmp$3 = x.end;
      } else {
        const _Some = _bind;
        _tmp$3 = _Some;
      }
      const _x = new _M0TPC16string10StringView(_tmp$2, _tmp$3, x.end);
      if (_M0MPC16string10StringView14contains__char(chars, _c)) {
        _tmp = _x;
        continue;
      } else {
        return x;
      }
    }
  }
}
function _M0MPC16string10StringView22trim__end__with__chars(self, chars) {
  let _tmp = self;
  while (true) {
    const x = _tmp;
    if ((x.end - x.start | 0) === 0) {
      return x;
    } else {
      const _c = _M0MPC16string6String16unsafe__char__at(x.str, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, -1, x.start, x.end));
      const _x = new _M0TPC16string10StringView(x.str, x.start, _M0MPC16string6String29offset__of__nth__char_2einner(x.str, -1, x.start, x.end));
      if (_M0MPC16string10StringView14contains__char(chars, _c)) {
        _tmp = _x;
        continue;
      } else {
        return x;
      }
    }
  }
}
function _M0MPC16string10StringView12trim_2einner(self, chars) {
  const _bind = _M0FPB23build__ascii__char__set(chars);
  if (_bind === undefined) {
    return _M0MPC16string10StringView22trim__end__with__chars(_M0MPC16string10StringView24trim__start__with__chars(self, chars), chars);
  } else {
    const _Some = _bind;
    const _x = _Some;
    const _bits0 = _x._0;
    const _bits1 = _x._1;
    const _bits2 = _x._2;
    const _bits3 = _x._3;
    const start = _M0FPB26string__trim__start__ascii(self.str, self.start, self.end, chars, _bits0, _bits1, _bits2, _bits3);
    const end = _M0FPB24string__trim__end__ascii(self.str, start, self.end, chars, _bits0, _bits1, _bits2, _bits3);
    return new _M0TPC16string10StringView(self.str, start, end);
  }
}
function _M0MPC16string10StringView4trim(self, chars$46$opt) {
  let chars;
  if (chars$46$opt === undefined) {
    chars = new _M0TPC16string10StringView(_M0MPC16string10StringView4trimN7_2abindS6760, 0, _M0MPC16string10StringView4trimN7_2abindS6760.length);
  } else {
    const _Some = chars$46$opt;
    chars = _Some;
  }
  return _M0MPC16string10StringView12trim_2einner(self, chars);
}
function _M0MPC16string6String12trim_2einner(self, chars) {
  return _M0MPC16string10StringView12trim_2einner(new _M0TPC16string10StringView(self, 0, self.length), chars);
}
function _M0MPC16string6String4trim(self, chars$46$opt) {
  let chars;
  if (chars$46$opt === undefined) {
    chars = new _M0TPC16string10StringView(_M0MPC16string6String4trimN7_2abindS6861, 0, _M0MPC16string6String4trimN7_2abindS6861.length);
  } else {
    const _Some = chars$46$opt;
    chars = _Some;
  }
  return _M0MPC16string6String12trim_2einner(self, chars);
}
function _M0MPC16string10StringView9is__empty(self) {
  return (self.end - self.start | 0) === 0;
}
function _M0MPC16string6String9is__empty(self) {
  return self === "";
}
function _M0MPC16string6String4iter(self) {
  const len = self.length;
  const index = new _M0TPB8MutLocalGiE(0);
  return _M0MPB4Iter3newGcE(() => {
    if (index.val < len) {
      const c1 = self.charCodeAt(index.val);
      if (_M0MPC16uint166UInt1622is__leading__surrogate(c1) && (index.val + 1 | 0) < len) {
        const c2 = self.charCodeAt(index.val + 1 | 0);
        if (_M0MPC16uint166UInt1623is__trailing__surrogate(c2)) {
          const c = _M0FPB32code__point__of__surrogate__pair(c1, c2);
          index.val = index.val + 2 | 0;
          return c;
        }
      }
      index.val = index.val + 1 | 0;
      return _M0MPC16uint166UInt1616unsafe__to__char(c1);
    } else {
      return -1;
    }
  }, undefined);
}
function _M0MPB4Iter3mapGRPC16string10StringViewsE(self, f) {
  return new _M0TPB4IterGsE(() => {
    const _bind = _M0MPB4Iter4nextGRPC16string10StringViewE(self);
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _x = _Some;
      return f(_x);
    }
  }, self.size_hint);
}
function _M0MPB4Iter3mapGcRPC16string10StringViewE(self, f) {
  return new _M0TPB4IterGRPC16string10StringViewE(() => {
    const _bind = _M0MPB4Iter4nextGcE(self);
    if (_bind === -1) {
      return undefined;
    } else {
      const _Some = _bind;
      const _x = _Some;
      return f(_x);
    }
  }, self.size_hint);
}
function _M0IPC14char4CharPB4Show10to__string(self) {
  return String.fromCodePoint(self);
}
function _M0MPC16string10StringView5split(self, sep) {
  const sep_len = sep.end - sep.start | 0;
  if (sep_len === 0) {
    return _M0MPB4Iter3mapGcRPC16string10StringViewE(_M0MPC16string10StringView4iter(self), (c) => _M0MPC16string6String12view_2einner(_M0IPC14char4CharPB4Show10to__string(c), 0, undefined));
  }
  const remaining = new _M0TPB8MutLocalGORPC16string10StringViewE(self);
  return _M0MPB4Iter3newGRPC16string10StringViewE(() => {
    const _bind = remaining.val;
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _view = _Some;
      const _bind$2 = _M0MPC16string10StringView4find(_view, sep);
      if (_bind$2 === undefined) {
        remaining.val = undefined;
        return _view;
      } else {
        const _Some$2 = _bind$2;
        const _end = _Some$2;
        remaining.val = _M0MPC16string10StringView12view_2einner(_view, _end + sep_len | 0, undefined);
        return _M0MPC16string10StringView12view_2einner(_view, 0, _end);
      }
    }
  }, undefined);
}
function _M0MPC16string6String5split(self, sep) {
  return _M0MPC16string10StringView5split(new _M0TPC16string10StringView(self, 0, self.length), sep);
}
function _M0MPB4Iter9to__arrayGsE(self) {
  const _bind = self.size_hint;
  let result;
  if (_bind === undefined) {
    result = [];
  } else {
    const _Some = _bind;
    const _n = _Some;
    result = _M0MPC15array5Array13Array_2einnerGsE(_n);
  }
  while (true) {
    const _bind$2 = _M0MPB4Iter4nextGRPC16string10StringViewE(self);
    if (_bind$2 === undefined) {
      break;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      _M0MPC15array5Array4pushGsE(result, _x);
      continue;
    }
  }
  return result;
}
function _M0IPC16string6StringPB12ToStringView16to__string__view(self) {
  return new _M0TPC16string10StringView(self, 0, self.length);
}
function _M0IPC16string10StringViewPB12ToStringView16to__string__view(self) {
  return self;
}
function _M0MPC16string6String9to__array(self) {
  return _M0MPB4Iter4foldGcRPB5ArrayGcEE(_M0MPC16string6String4iter(self), _M0MPC15array5Array13Array_2einnerGcE(self.length), (rv, c) => {
    _M0MPC15array5Array4pushGcE(rv, c);
    return rv;
  });
}
function _M0IPC14bool4BoolPB4Show10to__string(self) {
  return self ? "true" : "false";
}
function _M0MPC15array9ArrayView4iterGsE(self) {
  const i = new _M0TPB8MutLocalGiE(0);
  const len = self.end - self.start | 0;
  return _M0MPB4Iter3newGRPC16string10StringViewE(() => {
    if (i.val < len) {
      const elem = self.buf[self.start + i.val | 0];
      i.val = i.val + 1 | 0;
      return elem;
    } else {
      return undefined;
    }
  }, len);
}
function _M0MPC15array5Array4iterGsE(self) {
  return _M0MPC15array9ArrayView4iterGsE(new _M0TPB9ArrayViewGsE(self, 0, self.length));
}
function _M0MPC15array9ArrayView4joinGsE(self, separator) {
  if ((self.end - self.start | 0) === 0) {
    return "";
  } else {
    const _hd = self.buf[self.start];
    const _x_buf = self.buf;
    const _x_start = 1 + self.start | 0;
    const _x_end = self.end;
    const hd = _M0IPC16string6StringPB12ToStringView16to__string__view(_hd);
    const _bind = _x_end - _x_start | 0;
    let size_hint;
    let _tmp = 0;
    let _tmp$2 = hd.end - hd.start | 0;
    while (true) {
      const _ = _tmp;
      const size_hint$2 = _tmp$2;
      if (_ < _bind) {
        const s = _x_buf[_x_start + _ | 0];
        _tmp = _ + 1 | 0;
        const _bind$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
        _tmp$2 = (size_hint$2 + (_bind$2.end - _bind$2.start | 0) | 0) + (separator.end - separator.start | 0) | 0;
        continue;
      } else {
        size_hint = size_hint$2;
        break;
      }
    }
    const size_hint$2 = size_hint << 1;
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(size_hint$2);
    _M0IPB13StringBuilderPB6Logger11write__view(buf, hd);
    if ((separator.end - separator.start | 0) === 0) {
      const _bind$2 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$2) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      const _bind$2 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$2) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, separator);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    return _M0MPB13StringBuilder10to__string(buf);
  }
}
function _M0MPC15array9ArrayView4joinGRPC16string10StringViewE(self, separator) {
  if ((self.end - self.start | 0) === 0) {
    return "";
  } else {
    const _hd = self.buf[self.start];
    const _x_buf = self.buf;
    const _x_start = 1 + self.start | 0;
    const _x_end = self.end;
    const hd = _M0IPC16string10StringViewPB12ToStringView16to__string__view(_hd);
    const _bind = _x_end - _x_start | 0;
    let size_hint;
    let _tmp = 0;
    let _tmp$2 = hd.end - hd.start | 0;
    while (true) {
      const _ = _tmp;
      const size_hint$2 = _tmp$2;
      if (_ < _bind) {
        const s = _x_buf[_x_start + _ | 0];
        _tmp = _ + 1 | 0;
        const _bind$2 = _M0IPC16string10StringViewPB12ToStringView16to__string__view(s);
        _tmp$2 = (size_hint$2 + (_bind$2.end - _bind$2.start | 0) | 0) + (separator.end - separator.start | 0) | 0;
        continue;
      } else {
        size_hint = size_hint$2;
        break;
      }
    }
    const size_hint$2 = size_hint << 1;
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(size_hint$2);
    _M0IPB13StringBuilderPB6Logger11write__view(buf, hd);
    if ((separator.end - separator.start | 0) === 0) {
      const _bind$2 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$2) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string10StringViewPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      const _bind$2 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$2) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string10StringViewPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, separator);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    return _M0MPB13StringBuilder10to__string(buf);
  }
}
function _M0IPC16option6OptionPB2Eq5equalGRP211localreview7xiangqi4MoveE(self, other) {
  if (self === undefined) {
    return other === undefined;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === undefined) {
      return false;
    } else {
      const _Some$2 = other;
      const _y = _Some$2;
      return _M0IP211localreview7xiangqi4MovePB2Eq5equal(_x, _y);
    }
  }
}
function _M0MPC16option6Option6unwrapGRPB5EntryGsRP211localreview7xiangqi4MoveEE(self) {
  if (self === undefined) {
    return $panic();
  } else {
    const _Some = self;
    return _Some;
  }
}
function _M0MPC16option6Option10unwrap__orGRPC16string10StringViewE(self, default_) {
  if (self === undefined) {
    return default_;
  } else {
    const _Some = self;
    const _t = _Some;
    return _t;
  }
}
function _M0MPC15array5Array31unsafe__make__and__blit_2einnerGsE(src, allocate_len, len, src_offset, dst_offset) {
  const dst = new Array(allocate_len);
  _M0MPB18UninitializedArray12unsafe__blitGsE(dst, dst_offset, src, src_offset, len);
  return dst;
}
function _M0MPC15array9ArrayView9to__ownedGsE(self) {
  const len = self.end - self.start | 0;
  return len === 0 ? [] : _M0MPC15array5Array31unsafe__make__and__blit_2einnerGsE(self.buf, len, len, self.start, 0);
}
function _M0FPB21calc__grow__threshold(capacity) {
  if (16 === 0) {
    $panic();
  }
  return (Math.imul(capacity, 13) | 0) / 16 | 0;
}
function _M0MPC13int3Int20next__power__of__two(self) {
  if (self >= 0) {
    if (self <= 1) {
      return 1;
    }
    if (self > 1073741824) {
      return 1073741824;
    }
    return (2147483647 >> (Math.clz32(self - 1 | 0) - 1 | 0)) + 1 | 0;
  } else {
    return $panic();
  }
}
function _M0FPB8new__mapGsRP211localreview7xiangqi4MoveE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = _M0FPB21calc__grow__threshold(capacity$2);
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGsRP211localreview7xiangqi4MoveE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0FPB21capacity__for__length(length) {
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  if (length > _M0FPB21calc__grow__threshold(capacity)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  return capacity;
}
function _M0MPC13int3Int3max(self, other) {
  return self > other ? self : other;
}
function _M0MPB3Map20add__entry__to__tailGsRP211localreview7xiangqi4MoveE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    _M0MPC16option6Option6unwrapGRPB5EntryGsRP211localreview7xiangqi4MoveEE(_bind >>> 0 < _tmp.length ? _tmp[_bind] : $oob()).next = entry;
  }
  self.tail = idx;
  self.entries[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map10set__entryGsRP211localreview7xiangqi4MoveE(self, entry, new_idx) {
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
  }
  self.entries[new_idx] = entry;
}
function _M0MPB3Map10push__awayGsRP211localreview7xiangqi4MoveE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _bind = self.entries[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsRP211localreview7xiangqi4MoveE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsRP211localreview7xiangqi4MoveE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx$2 + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsRP211localreview7xiangqi4MoveE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsRP211localreview7xiangqi4MoveE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsRP211localreview7xiangqi4MoveE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsRP211localreview7xiangqi4MoveE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map4growGsRP211localreview7xiangqi4MoveE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  self.grow_at = _M0FPB21calc__grow__threshold(self.capacity);
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsRP211localreview7xiangqi4MoveE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRP211localreview7xiangqi4MoveE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRP211localreview7xiangqi4MoveE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsRP211localreview7xiangqi4MoveE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRP211localreview7xiangqi4MoveE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRP211localreview7xiangqi4MoveE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRP211localreview7xiangqi4MoveE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsRP211localreview7xiangqi4MoveE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRP211localreview7xiangqi4MoveE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3setGsRP211localreview7xiangqi4MoveE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRP211localreview7xiangqi4MoveE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3MapGsRP211localreview7xiangqi4MoveE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    capacity$2 = _M0MPC13int3Int3max(_capacity, _M0FPB21capacity__for__length(length));
  }
  const m = _M0FPB8new__mapGsRP211localreview7xiangqi4MoveE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRP211localreview7xiangqi4MoveE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3getGsRP211localreview7xiangqi4MoveE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _bind = self.entries[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = (idx + 1 | 0) & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map6lengthGsRP211localreview7xiangqi4MoveE(self) {
  return self.size;
}
function _M0MPC15array5Array3mapGRP211localreview7xiangqi4MovesE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGUOsRPC15debug4ReprERPC15debug4ReprE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug7ContentE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug4ReprE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGRPC15debug13ContentParensRPB5ArrayGsEE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array3mapGssE(self, f) {
  const arr = new Array(self.length);
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const v = self[i];
      arr[i] = f(v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPB4Iter10size__hintGsE(self) {
  return self.size_hint;
}
function _M0MPB4Iter6filterGRPC16string10StringViewE(self, f) {
  return _M0MPB4Iter3newGRPC16string10StringViewE(() => {
    while (true) {
      const _bind = _M0MPB4Iter4nextGRPC16string10StringViewE(self);
      if (_bind === undefined) {
        return undefined;
      } else {
        const _Some = _bind;
        const _x = _Some;
        if (f(_x)) {
          return _x;
        }
        continue;
      }
    }
  }, undefined);
}
function _M0MPB4Iter4iterGsE(self) {
  return self;
}
function _M0MPC13int3Int13is__surrogate(self) {
  return 55296 <= self && self <= 57343;
}
function _M0IPC16string6StringPB4Hash4hash(self) {
  let acc = (_M0FPB4seed >>> 0) + (374761393 >>> 0) | 0;
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      acc = (acc >>> 0) + (4 >>> 0) | 0;
      const v = self.charCodeAt(i);
      acc = _M0FPB13consume4__acc(acc, v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FPB13finalize__acc(acc);
}
function _M0MPC14char4Char7to__hex(char) {
  const code = char;
  return code >= 0 && code <= 255 ? _M0MPC14byte4Byte7to__hex(code & 255) : code <= 65535 ? `${_M0MPC14byte4Byte7to__hex(code >> 8 & 255)}${_M0MPC14byte4Byte7to__hex(code & 255)}` : `${_M0MPC14byte4Byte7to__hex(code >> 16 & 255)}${_M0MPC14byte4Byte7to__hex(code >> 8 & 255)}${_M0MPC14byte4Byte7to__hex(code & 255)}`;
}
function _M0MPC14char4Char11is__control(self) {
  return self >= 0 && self <= 31 ? true : self >= 127 && self <= 159;
}
function _M0MPC14char4Char13is__printable(self) {
  if (_M0MPC14char4Char11is__control(self)) {
    return false;
  }
  const self$2 = self;
  _L: {
    _L$2: {
      if (self$2 >= 57344 && self$2 <= 63743) {
        break _L$2;
      } else {
        if (self$2 >= 983040 && self$2 <= 1048573) {
          break _L$2;
        } else {
          if (self$2 >= 1048576 && self$2 <= 1114109) {
            break _L$2;
          }
        }
      }
      break _L;
    }
    return false;
  }
  _L$2: {
    _L$3: {
      if (self$2 === 173) {
        break _L$3;
      } else {
        if (self$2 >= 1536 && self$2 <= 1541) {
          break _L$3;
        } else {
          if (self$2 === 1564) {
            break _L$3;
          } else {
            if (self$2 === 1757) {
              break _L$3;
            } else {
              if (self$2 === 1807) {
                break _L$3;
              } else {
                if (self$2 >= 2192 && self$2 <= 2193) {
                  break _L$3;
                } else {
                  if (self$2 === 2274) {
                    break _L$3;
                  } else {
                    if (self$2 === 6158) {
                      break _L$3;
                    } else {
                      if (self$2 >= 8203 && self$2 <= 8207) {
                        break _L$3;
                      } else {
                        if (self$2 >= 8234 && self$2 <= 8238) {
                          break _L$3;
                        } else {
                          if (self$2 >= 8288 && self$2 <= 8292) {
                            break _L$3;
                          } else {
                            if (self$2 >= 8294 && self$2 <= 8303) {
                              break _L$3;
                            } else {
                              if (self$2 === 65279) {
                                break _L$3;
                              } else {
                                if (self$2 >= 65529 && self$2 <= 65531) {
                                  break _L$3;
                                } else {
                                  if (self$2 === 69821) {
                                    break _L$3;
                                  } else {
                                    if (self$2 === 69837) {
                                      break _L$3;
                                    } else {
                                      if (self$2 >= 78896 && self$2 <= 78911) {
                                        break _L$3;
                                      } else {
                                        if (self$2 >= 113824 && self$2 <= 113827) {
                                          break _L$3;
                                        } else {
                                          if (self$2 >= 119155 && self$2 <= 119162) {
                                            break _L$3;
                                          } else {
                                            if (self$2 === 917505) {
                                              break _L$3;
                                            } else {
                                              if (self$2 >= 917536 && self$2 <= 917631) {
                                                break _L$3;
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      break _L$2;
    }
    return false;
  }
  if (_M0MPC13int3Int13is__surrogate(self$2)) {
    return false;
  }
  if (self$2 === 8232 || self$2 === 8233) {
    return false;
  }
  _L$3: {
    _L$4: {
      if (self$2 >= 64976 && self$2 <= 65007) {
        break _L$4;
      } else {
        if (self$2 >= 65534 && self$2 <= 65535) {
          break _L$4;
        } else {
          if (self$2 >= 131070 && self$2 <= 131071) {
            break _L$4;
          } else {
            if (self$2 >= 196606 && self$2 <= 196607) {
              break _L$4;
            } else {
              if (self$2 >= 262142 && self$2 <= 262143) {
                break _L$4;
              } else {
                if (self$2 >= 327678 && self$2 <= 327679) {
                  break _L$4;
                } else {
                  if (self$2 >= 393214 && self$2 <= 393215) {
                    break _L$4;
                  } else {
                    if (self$2 >= 458750 && self$2 <= 458751) {
                      break _L$4;
                    } else {
                      if (self$2 >= 524286 && self$2 <= 524287) {
                        break _L$4;
                      } else {
                        if (self$2 >= 589822 && self$2 <= 589823) {
                          break _L$4;
                        } else {
                          if (self$2 >= 655358 && self$2 <= 655359) {
                            break _L$4;
                          } else {
                            if (self$2 >= 720894 && self$2 <= 720895) {
                              break _L$4;
                            } else {
                              if (self$2 >= 786430 && self$2 <= 786431) {
                                break _L$4;
                              } else {
                                if (self$2 >= 851966 && self$2 <= 851967) {
                                  break _L$4;
                                } else {
                                  if (self$2 >= 917502 && self$2 <= 917503) {
                                    break _L$4;
                                  } else {
                                    if (self$2 >= 983038 && self$2 <= 983039) {
                                      break _L$4;
                                    } else {
                                      if (self$2 >= 1048574 && self$2 <= 1048575) {
                                        break _L$4;
                                      } else {
                                        if (self$2 >= 1114110 && self$2 <= 1114111) {
                                          break _L$4;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      break _L$3;
    }
    return false;
  }
  return true;
}
function _M0MPC14char4Char18escape__to_2einner(self, logger, quote) {
  if (quote) {
    logger.method_table.method_3(logger.self, 39);
  }
  _L: {
    _L$2: {
      if (self === 39) {
        break _L$2;
      } else {
        if (self === 92) {
          break _L$2;
        } else {
          if (self === 10) {
            logger.method_table.method_0(logger.self, "\\n");
          } else {
            if (self === 13) {
              logger.method_table.method_0(logger.self, "\\r");
            } else {
              if (self === 8) {
                logger.method_table.method_0(logger.self, "\\b");
              } else {
                if (self === 9) {
                  logger.method_table.method_0(logger.self, "\\t");
                } else {
                  if (self >= 32 && self <= 126) {
                    logger.method_table.method_3(logger.self, self);
                  } else {
                    if (!_M0MPC14char4Char13is__printable(self)) {
                      logger.method_table.method_0(logger.self, "\\u{");
                      logger.method_table.method_0(logger.self, _M0MPC14char4Char7to__hex(self));
                      logger.method_table.method_3(logger.self, 125);
                    } else {
                      logger.method_table.method_3(logger.self, self);
                    }
                  }
                }
              }
            }
          }
        }
      }
      break _L;
    }
    logger.method_table.method_3(logger.self, 92);
    logger.method_table.method_3(logger.self, self);
  }
  if (quote) {
    logger.method_table.method_3(logger.self, 39);
    return;
  } else {
    return;
  }
}
function _M0MPC14char4Char14escape_2einner(self, quote) {
  const buf = _M0MPB13StringBuilder21StringBuilder_2einner(0);
  _M0MPC14char4Char18escape__to_2einner(self, { self: buf, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger }, quote);
  return _M0MPB13StringBuilder10to__string(buf);
}
function _M0MPC15array5Array12view_2einnerGsE(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end;
  }
  if (start >= 0 && (start <= end$2 && end$2 <= len)) {
    const _bind = self;
    const _bind$2 = end$2 - start | 0;
    return new _M0TPB9ArrayViewGsE(_bind, start, start + _bind$2 | 0);
  } else {
    return _M0FPC15abort5abortGRP211localreview7xiangqi5BoardE("View index out of bounds");
  }
}
function _M0MPC15array5Array28unsafe__truncate__to__lengthGsE(self, new_len) {
  _M0MPB7JSArray11set__length(self, new_len);
}
function _M0MPC15array5Array17reserve__capacityGsE(self, capacity) {}
function _M0MPC15array5Array6appendGsE(self, other) {
  const old_len = self.length;
  const append_len = other.end - other.start | 0;
  if ((old_len + append_len | 0) >= old_len) {
    _M0MPB7JSArray12append__view(self, other.buf, other.start, append_len);
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array5Array9is__emptyGsE(self) {
  return self.length === 0;
}
function _M0MPC15array5Array11unsafe__popGsE(self) {
  return _M0MPB7JSArray3pop(self);
}
function _M0MPC15array5Array3popGsE(self) {
  if (_M0MPC15array5Array9is__emptyGsE(self)) {
    return undefined;
  } else {
    const v = _M0MPC15array5Array11unsafe__popGsE(self);
    return v;
  }
}
function _M0MPC15array5Array4copyGiE(self) {
  return _M0MPB7JSArray4copy(self);
}
function _M0MPC15array5Array2atGsE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGiE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGcE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0FPB7minimum(x, y) {
  return x > y ? y : x;
}
function _M0MPC15array12MutArrayView4swapGRP211localreview7xiangqi4MoveE(arr, i, j) {
  const temp = arr.buf[arr.start + i | 0];
  arr.buf[arr.start + i | 0] = arr.buf[arr.start + j | 0];
  arr.buf[arr.start + j | 0] = temp;
}
function _M0MPC15array12MutArrayView5sliceGRP211localreview7xiangqi4MoveE(arr, start, end) {
  const _bind = arr.end - arr.start | 0;
  if (start < 0 || (start > end || end > _bind)) {
    $panic();
  }
  return new _M0TPB12MutArrayViewGRP211localreview7xiangqi4MoveE(arr.buf, start + arr.start | 0, end + arr.start | 0);
}
function _M0MPC15array5Array3setGiE(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array5Array3setGsE(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array12MutArrayView14rev__in__placeGRP211localreview7xiangqi4MoveE(arr) {
  const len = arr.end - arr.start | 0;
  if (2 === 0) {
    $panic();
  }
  const mid_len = len / 2 | 0;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < mid_len) {
      const j = (len - i | 0) - 1 | 0;
      const temp = arr.buf[arr.start + i | 0];
      arr.buf[arr.start + i | 0] = arr.buf[arr.start + j | 0];
      arr.buf[arr.start + j | 0] = temp;
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB17fixed__get__limit(len) {
  let _tmp = len;
  let _tmp$2 = 0;
  while (true) {
    const len$2 = _tmp;
    const limit = _tmp$2;
    if (len$2 > 0) {
      if (2 === 0) {
        $panic();
      }
      _tmp = len$2 / 2 | 0;
      _tmp$2 = limit + 1 | 0;
      continue;
    } else {
      return limit;
    }
  }
}
function _M0FPB23fixed__bubble__sort__byGRP211localreview7xiangqi4MoveE(arr, cmp) {
  const _bind = arr.end - arr.start | 0;
  let _tmp = 1;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      let _tmp$2 = i;
      while (true) {
        const j = _tmp$2;
        if (j > 0 && cmp(arr.buf[arr.start + (j - 1 | 0) | 0], arr.buf[arr.start + j | 0]) > 0) {
          _M0MPC15array12MutArrayView4swapGRP211localreview7xiangqi4MoveE(arr, j, j - 1 | 0);
          _tmp$2 = j - 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB24fixed__choose__pivot__byN7sort__2S448GRP211localreview7xiangqi4MoveE(_env, a, b) {
  const arr = _env._2;
  const swaps = _env._1;
  const cmp = _env._0;
  if (cmp(arr.buf[arr.start + a | 0], arr.buf[arr.start + b | 0]) > 0) {
    _M0MPC15array12MutArrayView4swapGRP211localreview7xiangqi4MoveE(arr, a, b);
    swaps.val = swaps.val + 1 | 0;
    return;
  } else {
    return;
  }
}
function _M0FPB24fixed__choose__pivot__byN7sort__3S452GRP211localreview7xiangqi4MoveE(_env, a, b, c) {
  _M0FPB24fixed__choose__pivot__byN7sort__2S448GRP211localreview7xiangqi4MoveE(_env, a, b);
  _M0FPB24fixed__choose__pivot__byN7sort__2S448GRP211localreview7xiangqi4MoveE(_env, b, c);
  _M0FPB24fixed__choose__pivot__byN7sort__2S448GRP211localreview7xiangqi4MoveE(_env, a, b);
}
function _M0FPB24fixed__choose__pivot__byGRP211localreview7xiangqi4MoveE(arr, cmp) {
  const len = arr.end - arr.start | 0;
  const swaps = new _M0TPB8MutLocalGiE(0);
  if (4 === 0) {
    $panic();
  }
  const b = Math.imul(len / 4 | 0, 2) | 0;
  if (len >= 8) {
    if (4 === 0) {
      $panic();
    }
    const a = Math.imul(len / 4 | 0, 1) | 0;
    if (4 === 0) {
      $panic();
    }
    const c = Math.imul(len / 4 | 0, 3) | 0;
    const _env = { _0: cmp, _1: swaps, _2: arr };
    if (len > 50) {
      _M0FPB24fixed__choose__pivot__byN7sort__3S452GRP211localreview7xiangqi4MoveE(_env, a - 1 | 0, a, a + 1 | 0);
      _M0FPB24fixed__choose__pivot__byN7sort__3S452GRP211localreview7xiangqi4MoveE(_env, b - 1 | 0, b, b + 1 | 0);
      _M0FPB24fixed__choose__pivot__byN7sort__3S452GRP211localreview7xiangqi4MoveE(_env, c - 1 | 0, c, c + 1 | 0);
    }
    _M0FPB24fixed__choose__pivot__byN7sort__3S452GRP211localreview7xiangqi4MoveE(_env, a, b, c);
  }
  if (swaps.val === 12) {
    _M0MPC15array12MutArrayView14rev__in__placeGRP211localreview7xiangqi4MoveE(arr);
    return { _0: (len - b | 0) - 1 | 0, _1: true };
  } else {
    return { _0: b, _1: swaps.val === 0 };
  }
}
function _M0FPB21fixed__sift__down__byGRP211localreview7xiangqi4MoveE(arr, index, cmp) {
  const len = arr.end - arr.start | 0;
  let _tmp = index;
  let _tmp$2 = (Math.imul(index, 2) | 0) + 1 | 0;
  while (true) {
    const index$2 = _tmp;
    const child = _tmp$2;
    if (child < len) {
      const child$2 = (child + 1 | 0) < len && cmp(arr.buf[arr.start + child | 0], arr.buf[arr.start + (child + 1 | 0) | 0]) < 0 ? child + 1 | 0 : child;
      if (cmp(arr.buf[arr.start + index$2 | 0], arr.buf[arr.start + child$2 | 0]) >= 0) {
        return undefined;
      }
      _M0MPC15array12MutArrayView4swapGRP211localreview7xiangqi4MoveE(arr, index$2, child$2);
      _tmp = child$2;
      _tmp$2 = (Math.imul(child$2, 2) | 0) + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB21fixed__heap__sort__byGRP211localreview7xiangqi4MoveE(arr, cmp) {
  const len = arr.end - arr.start | 0;
  if (2 === 0) {
    $panic();
  }
  const _bind = len / 2 | 0;
  let _tmp = _bind - 1 | 0;
  while (true) {
    const i = _tmp;
    if (i >= 0) {
      _M0FPB21fixed__sift__down__byGRP211localreview7xiangqi4MoveE(arr, i, cmp);
      _tmp = i - 1 | 0;
      continue;
    } else {
      break;
    }
  }
  let _tmp$2 = len - 1 | 0;
  while (true) {
    const i = _tmp$2;
    if (i >= 1) {
      _M0MPC15array12MutArrayView4swapGRP211localreview7xiangqi4MoveE(arr, 0, i);
      _M0FPB21fixed__sift__down__byGRP211localreview7xiangqi4MoveE(_M0MPC15array12MutArrayView5sliceGRP211localreview7xiangqi4MoveE(arr, 0, i), 0, cmp);
      _tmp$2 = i - 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0FPB20fixed__partition__byGRP211localreview7xiangqi4MoveE(arr, cmp, pivot_index) {
  _M0MPC15array12MutArrayView4swapGRP211localreview7xiangqi4MoveE(arr, pivot_index, (arr.end - arr.start | 0) - 1 | 0);
  const pivot = arr.buf[arr.start + ((arr.end - arr.start | 0) - 1 | 0) | 0];
  const _bind = (arr.end - arr.start | 0) - 1 | 0;
  let _tmp = 0;
  let _tmp$2 = 0;
  let _tmp$3 = true;
  while (true) {
    const j = _tmp;
    const i = _tmp$2;
    const partitioned = _tmp$3;
    if (j < _bind) {
      if (cmp(arr.buf[arr.start + j | 0], pivot) < 0) {
        if (i !== j) {
          _M0MPC15array12MutArrayView4swapGRP211localreview7xiangqi4MoveE(arr, i, j);
          _tmp = j + 1 | 0;
          _tmp$2 = i + 1 | 0;
          _tmp$3 = false;
          continue;
        } else {
          _tmp = j + 1 | 0;
          _tmp$2 = i + 1 | 0;
          continue;
        }
      } else {
        _tmp = j + 1 | 0;
        continue;
      }
    } else {
      _M0MPC15array12MutArrayView4swapGRP211localreview7xiangqi4MoveE(arr, i, (arr.end - arr.start | 0) - 1 | 0);
      return { _0: i, _1: partitioned };
    }
  }
}
function _M0FPB28fixed__try__bubble__sort__byGRP211localreview7xiangqi4MoveE(arr, cmp) {
  const _bind = arr.end - arr.start | 0;
  let _tmp = 1;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp;
    const tries = _tmp$2;
    if (i < _bind) {
      let sorted;
      let _tmp$3 = i;
      let _tmp$4 = true;
      while (true) {
        const j = _tmp$3;
        const sorted$2 = _tmp$4;
        if (j > 0 && cmp(arr.buf[arr.start + (j - 1 | 0) | 0], arr.buf[arr.start + j | 0]) > 0) {
          _M0MPC15array12MutArrayView4swapGRP211localreview7xiangqi4MoveE(arr, j, j - 1 | 0);
          _tmp$3 = j - 1 | 0;
          _tmp$4 = false;
          continue;
        } else {
          sorted = sorted$2;
          break;
        }
      }
      if (!sorted) {
        const tries$2 = tries + 1 | 0;
        if (tries$2 > 8) {
          return false;
        }
        _tmp = i + 1 | 0;
        _tmp$2 = tries$2;
        continue;
      } else {
        _tmp = i + 1 | 0;
        continue;
      }
    } else {
      return true;
    }
  }
}
function _M0FPB22fixed__quick__sort__byGRP211localreview7xiangqi4MoveE(arr, cmp, pred, limit) {
  let _tmp = limit;
  let _tmp$2 = arr;
  let _tmp$3 = pred;
  let _tmp$4 = true;
  let _tmp$5 = true;
  while (true) {
    const limit$2 = _tmp;
    const arr$2 = _tmp$2;
    const pred$2 = _tmp$3;
    const was_partitioned = _tmp$4;
    const balanced = _tmp$5;
    const len = arr$2.end - arr$2.start | 0;
    if (len <= 16) {
      if (len >= 2) {
        _M0FPB23fixed__bubble__sort__byGRP211localreview7xiangqi4MoveE(arr$2, cmp);
      }
      return undefined;
    }
    if (limit$2 === 0) {
      _M0FPB21fixed__heap__sort__byGRP211localreview7xiangqi4MoveE(arr$2, cmp);
      return undefined;
    }
    const _bind = _M0FPB24fixed__choose__pivot__byGRP211localreview7xiangqi4MoveE(arr$2, cmp);
    const _pivot_index = _bind._0;
    const _likely_sorted = _bind._1;
    if (was_partitioned && (balanced && _likely_sorted)) {
      if (_M0FPB28fixed__try__bubble__sort__byGRP211localreview7xiangqi4MoveE(arr$2, cmp)) {
        return undefined;
      }
    }
    const _bind$2 = _M0FPB20fixed__partition__byGRP211localreview7xiangqi4MoveE(arr$2, cmp, _pivot_index);
    const _pivot = _bind$2._0;
    const _partitioned = _bind$2._1;
    const _tmp$6 = _M0FPB7minimum(_pivot, len - _pivot | 0);
    if (8 === 0) {
      $panic();
    }
    const balanced$2 = _tmp$6 >= (len / 8 | 0);
    const limit$3 = !balanced$2 ? limit$2 - 1 | 0 : limit$2;
    if (pred$2 === undefined) {
    } else {
      const _Some = pred$2;
      const _p = _Some;
      if (cmp(_p, arr$2.buf[arr$2.start + _pivot | 0]) === 0) {
        let i;
        let _tmp$7 = _pivot;
        while (true) {
          const i$2 = _tmp$7;
          if (i$2 < len && cmp(_p, arr$2.buf[arr$2.start + i$2 | 0]) === 0) {
            _tmp$7 = i$2 + 1 | 0;
            continue;
          } else {
            i = i$2;
            break;
          }
        }
        _tmp = limit$3;
        _tmp$2 = _M0MPC15array12MutArrayView5sliceGRP211localreview7xiangqi4MoveE(arr$2, i, len);
        _tmp$4 = _partitioned;
        _tmp$5 = balanced$2;
        continue;
      }
    }
    const left = _M0MPC15array12MutArrayView5sliceGRP211localreview7xiangqi4MoveE(arr$2, 0, _pivot);
    const right = _M0MPC15array12MutArrayView5sliceGRP211localreview7xiangqi4MoveE(arr$2, _pivot + 1 | 0, len);
    if ((left.end - left.start | 0) < (right.end - right.start | 0)) {
      _M0FPB22fixed__quick__sort__byGRP211localreview7xiangqi4MoveE(left, cmp, pred$2, limit$3);
      _tmp = limit$3;
      _tmp$2 = right;
      _tmp$3 = arr$2.buf[arr$2.start + _pivot | 0];
      _tmp$4 = _partitioned;
      _tmp$5 = balanced$2;
      continue;
    } else {
      _M0FPB22fixed__quick__sort__byGRP211localreview7xiangqi4MoveE(right, cmp, arr$2.buf[arr$2.start + _pivot | 0], limit$3);
      _tmp = limit$3;
      _tmp$2 = left;
      _tmp$4 = _partitioned;
      _tmp$5 = balanced$2;
      continue;
    }
  }
}
function _M0MPC15array12MutArrayView8sort__byGRP211localreview7xiangqi4MoveE(self, cmp) {
  _M0FPB22fixed__quick__sort__byGRP211localreview7xiangqi4MoveE(self, cmp, undefined, _M0FPB17fixed__get__limit(self.end - self.start | 0));
}
function _M0MPC15array5Array8sort__byGRP211localreview7xiangqi4MoveE(self, cmp) {
  const _bind = self.length;
  _M0MPC15array12MutArrayView8sort__byGRP211localreview7xiangqi4MoveE(new _M0TPB12MutArrayViewGRP211localreview7xiangqi4MoveE(self, 0, _bind), cmp);
}
function _M0IPC15array5ArrayPB3Add3addGsE(self, other) {
  const len_self = self.length;
  const len_other = other.length;
  if (len_self === 0) {
    return _M0MPC15array5Array31unsafe__make__and__blit_2einnerGsE(other, len_other, len_other, 0, 0);
  } else {
    const result = _M0MPC15array5Array31unsafe__make__and__blit_2einnerGsE(self, len_self + len_other | 0, len_self, 0, 0);
    _M0MPB18UninitializedArray12unsafe__blitGsE(result, len_self, other, 0, len_other);
    return result;
  }
}
function _M0MPC15array5Array3allGsE(self, f) {
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const v = self[_];
      if (!f(v)) {
        return false;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return true;
}
function _M0MPC15array5Array5clearGsE(self) {
  _M0MPC15array5Array28unsafe__truncate__to__lengthGsE(self, 0);
}
function _M0MPC15array5Array6filterGsE(self, f) {
  const arr = [];
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const v = self[_];
      if (f(v)) {
        _M0MPC15array5Array4pushGsE(arr, v);
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array8containsGsE(self, value) {
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const v = self[_];
      if (v === value) {
        return true;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      return false;
    }
  }
}
function _M0MPC15array5Array10push__iterGsE(self, iter) {
  const _bind = _M0MPB4Iter10size__hintGsE(iter);
  if (_bind === undefined) {
  } else {
    const _Some = _bind;
    const _n = _Some;
    _M0MPC15array5Array17reserve__capacityGsE(self, self.length + _n | 0);
  }
  while (true) {
    const _bind$2 = _M0MPB4Iter4nextGRPC16string10StringViewE(iter);
    if (_bind$2 === undefined) {
      return;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      _M0MPC15array5Array4pushGsE(self, _x);
      continue;
    }
  }
}
function _M0MPC15array5Array4joinGsE(self, separator) {
  return _M0MPC15array9ArrayView4joinGsE(new _M0TPB9ArrayViewGsE(self, 0, self.length), separator);
}
function _M0MPC15array5Array4joinGRPC16string10StringViewE(self, separator) {
  return _M0MPC15array9ArrayView4joinGRPC16string10StringViewE(new _M0TPB9ArrayViewGRPC16string10StringViewE(self, 0, self.length), separator);
}
function _M0IPC15float5FloatPB4Show10to__string(self) {
  return String(self);
}
function _M0MPC15debug4Repr4ReprGRP211localreview7xiangqi10ChessErrorE(value) {
  return _M0IP211localreview7xiangqi10ChessErrorPC15debug5Debug8to__repr(value);
}
function _M0MPC15debug4Repr8children(self) {
  let value;
  _L: {
    _L$2: {
      switch (self.$tag) {
        case 0: {
          break _L$2;
        }
        case 1: {
          break _L$2;
        }
        case 2: {
          break _L$2;
        }
        case 3: {
          break _L$2;
        }
        case 4: {
          break _L$2;
        }
        case 5: {
          break _L$2;
        }
        case 6: {
          break _L$2;
        }
        case 15: {
          break _L$2;
        }
        case 17: {
          break _L$2;
        }
        case 7: {
          const _Tuple = self;
          const _xs = _Tuple._0;
          return _xs;
        }
        case 8: {
          const _Array = self;
          const _xs$2 = _Array._0;
          return _xs$2;
        }
        case 9: {
          const _Record = self;
          const _xs$3 = _Record._0;
          return _xs$3;
        }
        case 10: {
          const _Enum = self;
          const _xs$4 = _Enum._1;
          return _xs$4;
        }
        case 11: {
          const _Map = self;
          const _xs$5 = _Map._0;
          return _xs$5;
        }
        case 14: {
          const _Opaque = self;
          const _value = _Opaque._1;
          value = _value;
          break _L;
        }
        case 12: {
          const _RecordField = self;
          const _value$2 = _RecordField._1;
          value = _value$2;
          break _L;
        }
        case 13: {
          const _EnumLabeledArg = self;
          const _value$3 = _EnumLabeledArg._1;
          value = _value$3;
          break _L;
        }
        default: {
          const _MapEntry = self;
          const _key = _MapEntry._0;
          const _value$4 = _MapEntry._1;
          return [_key, _value$4];
        }
      }
    }
    return [];
  }
  return [value];
}
function _M0MPC15debug4Repr14with__children(self, children) {
  _L: {
    switch (self.$tag) {
      case 0: {
        break _L;
      }
      case 1: {
        break _L;
      }
      case 2: {
        break _L;
      }
      case 3: {
        break _L;
      }
      case 4: {
        break _L;
      }
      case 5: {
        break _L;
      }
      case 6: {
        break _L;
      }
      case 15: {
        break _L;
      }
      case 17: {
        break _L;
      }
      case 7: {
        return new _M0DTPC15debug4Repr5Tuple(children);
      }
      case 8: {
        return new _M0DTPC15debug4Repr5Array(children);
      }
      case 9: {
        return new _M0DTPC15debug4Repr6Record(children);
      }
      case 10: {
        const _Enum = self;
        const _name = _Enum._0;
        return new _M0DTPC15debug4Repr4Enum(_name, children);
      }
      case 11: {
        return new _M0DTPC15debug4Repr3Map(children);
      }
      case 12: {
        const _RecordField = self;
        const _name$2 = _RecordField._0;
        if (children.length === 1) {
          const _value = children[0];
          return new _M0DTPC15debug4Repr11RecordField(_name$2, _value);
        } else {
          return new _M0DTPC15debug4Repr11RecordField(_name$2, _M0DTPC15debug4Repr7Omitted__);
        }
      }
      case 13: {
        const _EnumLabeledArg = self;
        const _label = _EnumLabeledArg._0;
        if (children.length === 1) {
          const _value = children[0];
          return new _M0DTPC15debug4Repr14EnumLabeledArg(_label, _value);
        } else {
          return new _M0DTPC15debug4Repr14EnumLabeledArg(_label, _M0DTPC15debug4Repr7Omitted__);
        }
      }
      case 16: {
        if (children.length === 2) {
          const _key = children[0];
          const _value = children[1];
          return new _M0DTPC15debug4Repr8MapEntry(_key, _value);
        } else {
          return new _M0DTPC15debug4Repr8MapEntry(_M0DTPC15debug4Repr7Omitted__, _M0DTPC15debug4Repr7Omitted__);
        }
      }
      default: {
        const _Opaque = self;
        const _name$3 = _Opaque._0;
        if (children.length === 1) {
          const _value = children[0];
          return new _M0DTPC15debug4Repr6Opaque(_name$3, _value);
        } else {
          return new _M0DTPC15debug4Repr6Opaque(_name$3, _M0DTPC15debug4Repr7Omitted__);
        }
      }
    }
  }
  return self;
}
function _M0MPC15debug4Repr6string(x) {
  return new _M0DTPC15debug4Repr9StringLit(x);
}
function _M0MPC15debug4Repr7omitted() {
  return _M0DTPC15debug4Repr7Omitted__;
}
function _M0MPC15debug4Repr4ctor(name, args) {
  return new _M0DTPC15debug4Repr4Enum(name, _M0MPC15array5Array3mapGUOsRPC15debug4ReprERPC15debug4ReprE(args, (arg) => {
    const _label = arg._0;
    const _value = arg._1;
    if (_label === undefined) {
      return _value;
    } else {
      const _Some = _label;
      const _label$2 = _Some;
      return new _M0DTPC15debug4Repr14EnumLabeledArg(_label$2, _value);
    }
  }));
}
function _M0MPC15debug4Repr7shallow(self) {
  return _M0MPC15debug4Repr14with__children(self, []);
}
function _M0IPC15debug13ContentParensPB3Add3add(self, other) {
  return new _M0TPC15debug13ContentParens(self.size + other.size | 0, _M0IPC15array5ArrayPB3Add3addGsE(self.lines, other.lines));
}
function _M0FPC15debug14empty__content() {
  return new _M0TPC15debug7Content(0, [], false);
}
function _M0FPC15debug8verbatim(x) {
  return new _M0TPC15debug13ContentParens(1, [x]);
}
function _M0FPC15debug15content__parens(size, lines) {
  return new _M0TPC15debug13ContentParens(size, lines);
}
function _M0FPC15debug12leaf_2einner(x, needs_parens) {
  return new _M0TPC15debug7Content(1, [x], needs_parens);
}
function _M0FPC15debug11with__lines(r, f) {
  return new _M0TPC15debug13ContentParens(r.size, f(r.lines));
}
function _M0MPC15debug7Content20with__lines__content(r, f) {
  return new _M0TPC15debug7Content(r.size, f(r.lines), r.needs_parens);
}
function _M0FPC15debug15surround__lines(start, finish, lines) {
  if (lines.length === 0) {
    return [`${start}${finish}`];
  } else {
    if (lines.length === 1) {
      const _item = lines[0];
      return [`${start}${_item}${finish}`];
    } else {
      const _first = lines[0];
      const _last = lines[lines.length - 1 | 0];
      const _x = new _M0TPB9ArrayViewGsE(lines, 1, lines.length - 1 | 0);
      const _self = [];
      _M0MPC15array5Array4pushGsE(_self, `${start}${_first}`);
      _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGsE(_x));
      _M0MPC15array5Array4pushGsE(_self, `${_last}${finish}`);
      return _self;
    }
  }
}
function _M0FPC15debug8surround(start, finish, r) {
  return _M0FPC15debug11with__lines(r, (lines) => _M0FPC15debug15surround__lines(start, finish, lines));
}
function _M0MPC15debug7Content8no__wrap(c) {
  return new _M0TPC15debug13ContentParens(c.size, c.lines);
}
function _M0FPC15debug6parens(r) {
  return new _M0TPC15debug7Content(r.size, r.lines, true);
}
function _M0FPC15debug10no__parens(r) {
  return new _M0TPC15debug7Content(r.size, r.lines, false);
}
function _M0FPC15debug14compact__lines(lines) {
  if (lines.length === 0) {
    return [];
  } else {
    if (lines.length === 1) {
      const _x = lines[0];
      return [_x];
    } else {
      const _first = lines[0];
      const _last = lines[lines.length - 1 | 0];
      const _x_end = lines.length - 1 | 0;
      if (_first === "[" && _last === "]" || _first === "{" && _last === "}") {
        const parts = [];
        const _bind = _x_end - 1 | 0;
        let _tmp = 0;
        while (true) {
          const _ = _tmp;
          if (_ < _bind) {
            const m = lines[1 + _ | 0];
            const t = _M0MPC16string6String4trim(m, undefined);
            if (_M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(t, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1134, 0, _M0FPC15debug14compact__linesN7_2abindS1134.length))) {
              _M0MPC15array5Array4pushGsE(parts, t);
            }
            _tmp = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        const joined0 = _M0MPC15array5Array4joinGRPC16string10StringViewE(parts, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1147, 0, _M0FPC15debug14compact__linesN7_2abindS1147.length));
        const _bind$2 = _M0MPC16string6String13strip__suffix(joined0, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1141, 0, _M0FPC15debug14compact__linesN7_2abindS1141.length));
        let joined;
        if (_bind$2 === undefined) {
          joined = new _M0TPC16string10StringView(joined0, 0, joined0.length);
        } else {
          const _Some = _bind$2;
          joined = _Some;
        }
        if (_first === "{") {
          const s1 = _M0MPC16option6Option10unwrap__orGRPC16string10StringViewE(_M0MPC16string10StringView13strip__prefix(joined, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1139, 0, _M0FPC15debug14compact__linesN7_2abindS1139.length)), joined);
          const inner = _M0MPC16option6Option10unwrap__orGRPC16string10StringViewE(_M0MPC16string10StringView13strip__suffix(s1, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1138, 0, _M0FPC15debug14compact__linesN7_2abindS1138.length)), s1);
          if (_M0IPC16string10StringViewPB2Eq5equal(inner, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1136, 0, _M0FPC15debug14compact__linesN7_2abindS1136.length))) {
            return ["{}"];
          } else {
            const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(4);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "{ ");
            _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, inner);
            _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " }");
            return [_M0MPB13StringBuilder10to__string(_string_builder)];
          }
        } else {
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(2);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "[");
          _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, joined);
          _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "]");
          return [_M0MPB13StringBuilder10to__string(_string_builder)];
        }
      } else {
        if (_M0MPC16string6String11has__suffix(_first, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1148, 0, _M0FPC15debug14compact__linesN7_2abindS1148.length)) && _last === ")") {
          const parts = [];
          const _bind = _x_end - 1 | 0;
          let _tmp = 0;
          while (true) {
            const _ = _tmp;
            if (_ < _bind) {
              const m = lines[1 + _ | 0];
              const t = _M0MPC16string6String4trim(m, undefined);
              if (_M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(t, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1152, 0, _M0FPC15debug14compact__linesN7_2abindS1152.length))) {
                _M0MPC15array5Array4pushGsE(parts, t);
              }
              _tmp = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          const joined0 = _M0MPC15array5Array4joinGRPC16string10StringViewE(parts, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1161, 0, _M0FPC15debug14compact__linesN7_2abindS1161.length));
          const _bind$2 = _M0MPC16string6String13strip__suffix(joined0, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1155, 0, _M0FPC15debug14compact__linesN7_2abindS1155.length));
          let joined;
          if (_bind$2 === undefined) {
            joined = new _M0TPC16string10StringView(joined0, 0, joined0.length);
          } else {
            const _Some = _bind$2;
            joined = _Some;
          }
          const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(0);
          _M0MPB13StringBuilder13write__objectGsE(_string_builder, _first);
          _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, joined);
          _M0MPB13StringBuilder13write__objectGsE(_string_builder, _last);
          return [_M0MPB13StringBuilder10to__string(_string_builder)];
        } else {
          const parts = [new _M0TPC16string10StringView(_first, 0, _first.length)];
          const _bind = _x_end - 1 | 0;
          let _tmp = 0;
          while (true) {
            const _ = _tmp;
            if (_ < _bind) {
              const m = lines[1 + _ | 0];
              _M0MPC15array5Array4pushGsE(parts, _M0MPC16string6String4trim(m, undefined));
              _tmp = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _M0MPC15array5Array4pushGsE(parts, _M0MPC16string6String4trim(_last, undefined));
          return [_M0MPC15array5Array4joinGRPC16string10StringViewE(parts, new _M0TPC16string10StringView(_M0FPC15debug14compact__linesN7_2abindS1166, 0, _M0FPC15debug14compact__linesN7_2abindS1166.length))];
        }
      }
    }
  }
}
function _M0MPC15debug7Content7compact(r) {
  return _M0MPC15debug7Content20with__lines__content(r, _M0FPC15debug14compact__lines);
}
function _M0FPC15debug6indent(prefix, r) {
  return _M0FPC15debug11with__lines(r, (lines) => _M0MPC15array5Array3mapGssE(lines, (line) => `${prefix}${line}`));
}
function _M0FPC15debug14indent__spaces(n, r) {
  return _M0FPC15debug6indent(_M0MPC16string6String6repeat(" ", n), r);
}
function _M0FPC15debug19bracket__seq__lines(open, close, indent_by, contents) {
  if (contents.length === 0) {
    return [`${open}${close}`];
  } else {
    if (contents.length === 1) {
      const _item = contents[0];
      if (_item.length > 1) {
        const lines = _M0FPC15debug14indent__spaces(indent_by, new _M0TPC15debug13ContentParens(0, _item)).lines;
        if (!_M0MPC15array5Array9is__emptyGsE(lines)) {
          const last_i = lines.length - 1 | 0;
          _M0MPC15array5Array3setGsE(lines, last_i, `${_M0MPC15array5Array2atGsE(lines, last_i)},`);
        }
        const _self = [];
        _M0MPC15array5Array4pushGsE(_self, open);
        _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(lines));
        _M0MPC15array5Array4pushGsE(_self, close);
        return _self;
      } else {
        const inner = _M0FPC15debug14compact__lines(_item);
        if (inner.length === 0) {
          return [`${open}${close}`];
        } else {
          if (inner.length === 1) {
            const _x = inner[0];
            if (open === "{" && close === "}") {
              const inner$2 = _M0MPC16string6String4trim(_x, undefined);
              if (_M0IPC16string10StringViewPB2Eq5equal(inner$2, new _M0TPC16string10StringView(_M0FPC15debug19bracket__seq__linesN7_2abindS1175, 0, _M0FPC15debug19bracket__seq__linesN7_2abindS1175.length))) {
                return ["{}"];
              } else {
                const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(4);
                _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "{ ");
                _M0MPB13StringBuilder13write__objectGRPC16string10StringViewE(_string_builder, inner$2);
                _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " }");
                return [_M0MPB13StringBuilder10to__string(_string_builder)];
              }
            } else {
              return [`${open}${_x}${close}`];
            }
          } else {
            const _self = [];
            _M0MPC15array5Array4pushGsE(_self, open);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(_M0FPC15debug14indent__spaces(indent_by, new _M0TPC15debug13ContentParens(0, _item)).lines));
            _M0MPC15array5Array4pushGsE(_self, close);
            return _self;
          }
        }
      }
    } else {
      const out = [open];
      const _bind = contents.length;
      let _tmp = 0;
      while (true) {
        const _ = _tmp;
        if (_ < _bind) {
          const item = contents[_];
          const item_lines = _M0MPC15array5Array6filterGsE(item, (line) => _M0IP016_24default__implPB2Eq10not__equalGsE(line, ""));
          if (item_lines.length === 0) {
          } else {
            if (item_lines.length === 1) {
              const _x = item_lines[0];
              _M0MPC15array5Array4pushGsE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${_x},`);
            } else {
              const _first = item_lines[0];
              const _last = item_lines[item_lines.length - 1 | 0];
              const _x_end = item_lines.length - 1 | 0;
              _M0MPC15array5Array4pushGsE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${_first}`);
              const _bind$2 = _x_end - 1 | 0;
              let _tmp$2 = 0;
              while (true) {
                const _$2 = _tmp$2;
                if (_$2 < _bind$2) {
                  const mid = item_lines[1 + _$2 | 0];
                  _M0MPC15array5Array4pushGsE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${mid}`);
                  _tmp$2 = _$2 + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              _M0MPC15array5Array4pushGsE(out, `${_M0MPC16string6String6repeat(" ", indent_by)}${_last},`);
            }
          }
          _tmp = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      _M0MPC15array5Array4pushGsE(out, close);
      return out;
    }
  }
}
function _M0FPC15debug17comma__seq__lines(begin, end, contents) {
  if (begin === "[" && end === "]") {
    return _M0FPC15debug19bracket__seq__lines("[", "]", 2, contents);
  } else {
    if (begin === "{" && end === "}") {
      return _M0FPC15debug19bracket__seq__lines("{", "}", 2, contents);
    } else {
      if (begin === "" && end === "") {
        let lines;
        if (contents.length === 0) {
          lines = [`${begin}${end}`];
        } else {
          if (contents.length === 1) {
            const _item = contents[0];
            lines = _M0FPC15debug15surround__lines(begin, end, _item);
          } else {
            const _first = contents[0];
            const _last = contents[contents.length - 1 | 0];
            const _x_end = contents.length - 1 | 0;
            const space = _M0MPC16string6String6repeat(" ", begin.length);
            const middle_lines = [];
            const _bind = _x_end - 1 | 0;
            let _tmp = 0;
            while (true) {
              const _ = _tmp;
              if (_ < _bind) {
                const item = contents[1 + _ | 0];
                const _bind$2 = _M0FPC15debug15surround__lines(space, ",", item);
                _M0MPC15array5Array6appendGsE(middle_lines, new _M0TPB9ArrayViewGsE(_bind$2, 0, _bind$2.length));
                _tmp = _ + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            const _self = [];
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(_M0FPC15debug15surround__lines(begin, ",", _first)));
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(middle_lines));
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array5Array4iterGsE(_M0FPC15debug15surround__lines(space, end, _last)));
            lines = _self;
          }
        }
        return _M0MPC15array5Array6filterGsE(lines, (line) => _M0IP016_24default__implPB2Eq10not__equalGsE(line, ""));
      } else {
        if (contents.length === 0) {
          return [`${begin}${end}`];
        } else {
          if (contents.length === 1) {
            const _item = contents[0];
            const item_lines = _M0MPC15array5Array6filterGsE(_item, (line) => _M0IP016_24default__implPB2Eq10not__equalGsE(line, ""));
            if (item_lines.length === 0) {
              return [`${begin}${end}`];
            } else {
              if (item_lines.length === 1) {
                const _x = item_lines[0];
                return [`${begin}${_x}${end}`];
              } else {
                const _last_line = item_lines[item_lines.length - 1 | 0];
                const _x = new _M0TPB9ArrayViewGsE(item_lines, 0, item_lines.length - 1 | 0);
                const _self = [];
                _M0MPC15array5Array4pushGsE(_self, begin);
                _M0MPC15array5Array10push__iterGsE(_self, _M0MPB4Iter4iterGsE(_M0MPB4Iter3mapGRPC16string10StringViewsE(_M0MPC15array9ArrayView4iterGsE(_x), (line) => `${_M0MPC16string6String6repeat(" ", 2)}${line}`)));
                _M0MPC15array5Array4pushGsE(_self, `${_M0MPC16string6String6repeat(" ", 2)}${_last_line},`);
                _M0MPC15array5Array4pushGsE(_self, end);
                return _self;
              }
            }
          } else {
            const out = [begin];
            const _bind = contents.length;
            let _tmp = 0;
            while (true) {
              const _ = _tmp;
              if (_ < _bind) {
                const item = contents[_];
                const item_lines = _M0MPC15array5Array6filterGsE(item, (line) => _M0IP016_24default__implPB2Eq10not__equalGsE(line, ""));
                if (item_lines.length === 0) {
                } else {
                  if (item_lines.length === 1) {
                    const _x = item_lines[0];
                    _M0MPC15array5Array4pushGsE(out, `${_M0MPC16string6String6repeat(" ", 2)}${_x},`);
                  } else {
                    const _first = item_lines[0];
                    const _last = item_lines[item_lines.length - 1 | 0];
                    const _x_end = item_lines.length - 1 | 0;
                    _M0MPC15array5Array4pushGsE(out, `${_M0MPC16string6String6repeat(" ", 2)}${_first}`);
                    const _bind$2 = _x_end - 1 | 0;
                    let _tmp$2 = 0;
                    while (true) {
                      const _$2 = _tmp$2;
                      if (_$2 < _bind$2) {
                        const mid = item_lines[1 + _$2 | 0];
                        _M0MPC15array5Array4pushGsE(out, `${_M0MPC16string6String6repeat(" ", 2)}${mid}`);
                        _tmp$2 = _$2 + 1 | 0;
                        continue;
                      } else {
                        break;
                      }
                    }
                    _M0MPC15array5Array4pushGsE(out, `${_M0MPC16string6String6repeat(" ", 2)}${_last},`);
                  }
                }
                _tmp = _ + 1 | 0;
                continue;
              } else {
                break;
              }
            }
            _M0MPC15array5Array4pushGsE(out, end);
            return out;
          }
        }
      }
    }
  }
}
function _M0FPC15debug10comma__seq(begin, end, contents) {
  const _bind = contents.length;
  let _tmp = 0;
  let _tmp$2 = 0;
  while (true) {
    const _ = _tmp;
    const size = _tmp$2;
    if (_ < _bind) {
      const c = contents[_];
      _tmp = _ + 1 | 0;
      _tmp$2 = size + c.size | 0;
      continue;
    } else {
      return new _M0TPC15debug7Content(size, _M0FPC15debug17comma__seq__lines(begin, end, _M0MPC15array5Array3mapGRPC15debug13ContentParensRPB5ArrayGsEE(contents, (c) => c.lines)), false);
    }
  }
}
function _M0FPC15debug14print__content(r) {
  return _M0MPC15array5Array4joinGsE(r.lines, new _M0TPC16string10StringView(_M0FPC15debug14print__contentN7_2abindS1244, 0, _M0FPC15debug14print__contentN7_2abindS1244.length));
}
function _M0FPC15debug14with__resizing(_root_size, threshold, rendered_children) {
  if (threshold <= 0) {
    return rendered_children;
  } else {
    const compacted = _M0MPC15debug7Content7compact(rendered_children);
    return _M0MPC15array5Array3allGsE(compacted.lines, (line) => line.length <= threshold) ? compacted : rendered_children;
  }
}
function _M0MPC15debug4Repr17info__adds__depth(info) {
  let _tmp;
  switch (info.$tag) {
    case 12: {
      _tmp = true;
      break;
    }
    case 13: {
      _tmp = true;
      break;
    }
    case 16: {
      _tmp = true;
      break;
    }
    default: {
      _tmp = false;
    }
  }
  return !_tmp;
}
function _M0MPC15debug4Repr19prune__info_2einnerN2goS259(replacement, d, node) {
  const children = _M0MPC15debug4Repr8children(node);
  if (d <= 0) {
    return _M0MPC15array5Array9is__emptyGsE(children) ? node : !_M0MPC15debug4Repr17info__adds__depth(node) ? _M0MPC15debug4Repr14with__children(node, _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug4ReprE(children, (child) => _M0MPC15debug4Repr19prune__info_2einnerN2goS259(replacement, d, child))) : replacement;
  } else {
    if (_M0MPC15array5Array9is__emptyGsE(children)) {
      return node;
    } else {
      const next_depth = _M0MPC15debug4Repr17info__adds__depth(node) ? d - 1 | 0 : d;
      return _M0MPC15debug4Repr14with__children(node, _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug4ReprE(children, (child) => _M0MPC15debug4Repr19prune__info_2einnerN2goS259(replacement, next_depth, child)));
    }
  }
}
function _M0MPC15debug4Repr19prune__info_2einner(self, replacement, max_depth) {
  if (max_depth === undefined) {
    return self;
  } else {
    const _Some = max_depth;
    const _depth = _Some;
    return _M0MPC15debug4Repr19prune__info_2einnerN2goS259(replacement, _M0MPC13int3Int3max(1, _depth), self);
  }
}
function _M0MPC15debug4Repr11prune__info(self, replacement$46$opt, max_depth) {
  let replacement;
  if (replacement$46$opt === undefined) {
    replacement = _M0MPC15debug4Repr7omitted();
  } else {
    const _Some = replacement$46$opt;
    replacement = _Some;
  }
  return _M0MPC15debug4Repr19prune__info_2einner(self, replacement, max_depth);
}
function _M0FPC15debug10info__size(info) {
  switch (info.$tag) {
    case 0: {
      return 1;
    }
    case 1: {
      return 1;
    }
    case 2: {
      return 1;
    }
    case 3: {
      return 1;
    }
    case 4: {
      return 1;
    }
    case 5: {
      return 1;
    }
    case 6: {
      const _StringLit = info;
      const _s = _StringLit._0;
      return _s.length <= 15 ? 1 : 2;
    }
    case 7: {
      return 1;
    }
    case 8: {
      return 1;
    }
    case 9: {
      return 2;
    }
    case 12: {
      const _RecordField = info;
      const _name = _RecordField._0;
      return _name.length <= 15 ? 0 : 1;
    }
    case 13: {
      const _EnumLabeledArg = info;
      const _name$2 = _EnumLabeledArg._0;
      return _name$2.length <= 15 ? 0 : 1;
    }
    case 10: {
      const _Enum = info;
      const _name$3 = _Enum._0;
      return _name$3.length <= 15 ? 1 : 2;
    }
    case 14: {
      const _Opaque = info;
      const _name$4 = _Opaque._0;
      return _name$4.length <= 15 ? 1 : 2;
    }
    case 15: {
      const _Literal = info;
      const _s$2 = _Literal._0;
      return _s$2.length <= 15 ? 1 : 2;
    }
    case 11: {
      return 2;
    }
    case 16: {
      return 0;
    }
    default: {
      return 0;
    }
  }
}
function _M0FPC15debug17is__unquoted__key(key) {
  let rest;
  _L: {
    if (key.length >= 1) {
      const _x = key.charCodeAt(0);
      if (_x >= 97 && _x <= 122) {
        const _x$2 = new _M0TPC16string10StringView(key, 1, key.length);
        rest = _x$2;
        break _L;
      } else {
        if (_x === 95) {
          const _x$2 = new _M0TPC16string10StringView(key, 1, key.length);
          rest = _x$2;
          break _L;
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  }
  return _M0MPC16string10StringView3all(rest, (c) => c >= 97 && c <= 122 ? true : c >= 65 && c <= 90 ? true : c >= 48 && c <= 57 ? true : c === 95);
}
function _M0FPC15debug20pretty__print__label(name) {
  return _M0FPC15debug17is__unquoted__key(name) ? name : _M0MPC16string6String14escape_2einner(name, true);
}
function _M0MPC15debug4Repr13pretty__print(self, children) {
  switch (self.$tag) {
    case 0: {
      return _M0FPC15debug10comma__seq("(", ")", []);
    }
    case 1: {
      const _Integer = self;
      const _s = _Integer._0;
      let _tmp;
      if (_s.length >= 1) {
        const _x = _s.charCodeAt(0);
        if (_x === 45) {
          _tmp = 1;
        } else {
          _tmp = 0;
        }
      } else {
        _tmp = 0;
      }
      return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(_tmp, [_s]));
    }
    case 2: {
      const _DoubleLit = self;
      const _x = _DoubleLit._0;
      const needs_parens = 1 / _x < 0;
      return _M0FPC15debug12leaf_2einner(String(_x), needs_parens);
    }
    case 3: {
      const _FloatLit = self;
      const _x$2 = _FloatLit._0;
      const needs_parens$2 = Math.fround(Math.fround(1) / _x$2) < Math.fround(0);
      return _M0FPC15debug12leaf_2einner(_M0IPC15float5FloatPB4Show10to__string(_x$2), needs_parens$2);
    }
    case 4: {
      const _BoolLit = self;
      const _x$3 = _BoolLit._0;
      return _M0FPC15debug12leaf_2einner(_M0IPC14bool4BoolPB4Show10to__string(_x$3), false);
    }
    case 5: {
      const _CharLit = self;
      const _x$4 = _CharLit._0;
      return _M0FPC15debug12leaf_2einner(_M0MPC14char4Char14escape_2einner(_x$4, true), false);
    }
    case 6: {
      const _StringLit = self;
      const _x$5 = _StringLit._0;
      return _M0FPC15debug10no__parens(_M0FPC15debug8verbatim(_M0MPC16string6String14escape_2einner(_x$5, true)));
    }
    case 7: {
      return _M0FPC15debug10comma__seq("(", ")", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 10: {
      const _Enum = self;
      const _name = _Enum._0;
      return children.length === 0 ? _M0FPC15debug10no__parens(_M0FPC15debug8verbatim(_name)) : _name === "Tuple" ? _M0FPC15debug10comma__seq("(", ")", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x))) : _M0FPC15debug10comma__seq(`${_name}(`, ")", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 8: {
      return _M0FPC15debug10comma__seq("[", "]", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 9: {
      return _M0FPC15debug10comma__seq("{", "}", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 14: {
      const _Opaque = self;
      const _name$2 = _Opaque._0;
      if (_M0MPC15array5Array9is__emptyGsE(children)) {
        return _M0FPC15debug10no__parens(_M0FPC15debug8surround("<", ">", _M0FPC15debug8verbatim(_name$2)));
      } else {
        const body = _M0IPC15debug13ContentParensPB3Add3add(_M0FPC15debug8verbatim(`${_name$2}:`), _M0FPC15debug6indent("  ", _M0MPC15debug7Content8no__wrap(_M0FPC15debug10comma__seq("", "", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x))))));
        return _M0FPC15debug10no__parens(_M0FPC15debug8surround("<", ">", body));
      }
    }
    case 15: {
      const _Literal = self;
      const _str = _Literal._0;
      return _M0FPC15debug10no__parens(_M0FPC15debug8verbatim(_str));
    }
    case 11: {
      return _M0FPC15debug10comma__seq("{", "}", _M0MPC15array5Array3mapGRPC15debug7ContentRPC15debug13ContentParensE(children, (x) => _M0MPC15debug7Content8no__wrap(x)));
    }
    case 16: {
      if (children.length === 2) {
        const _key = children[0];
        const _val = children[1];
        const k = _M0MPC15debug7Content8no__wrap(_key);
        const v = _M0MPC15debug7Content8no__wrap(_val);
        const _bind = v.lines;
        if (_bind.length === 0) {
          return _M0FPC15debug14empty__content();
        } else {
          if (_bind.length === 1) {
            const _one = _bind[0];
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens((1 + k.size | 0) + v.size | 0, [`${_M0FPC15debug14print__content(_M0FPC15debug8surround("", ": ", k))}${_one}`]));
          } else {
            const _first = _bind[0];
            const _x$6 = new _M0TPB9ArrayViewGsE(_bind, 1, _bind.length);
            const head = `${_M0FPC15debug14print__content(_M0FPC15debug8surround("", ": ", k))}${_first}`;
            const _tmp$2 = (1 + k.size | 0) + v.size | 0;
            const _self = [];
            _M0MPC15array5Array4pushGsE(_self, head);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGsE(_x$6));
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(_tmp$2, _self));
          }
        }
      } else {
        return _M0FPC15debug14empty__content();
      }
    }
    case 13: {
      const _EnumLabeledArg = self;
      const _name$3 = _EnumLabeledArg._0;
      if (children.length === 1) {
        const _val = children[0];
        const _bind = _val.lines;
        if (_bind.length === 0) {
          return _M0FPC15debug14empty__content();
        } else {
          if (_bind.length === 1) {
            const _first = _bind[0];
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(1 + _val.size | 0, [`${_name$3}=${_first}`]));
          } else {
            const _first = _bind[0];
            const _x$6 = new _M0TPB9ArrayViewGsE(_bind, 1, _bind.length);
            const _tmp$2 = 1 + _val.size | 0;
            const _self = [];
            _M0MPC15array5Array4pushGsE(_self, `${_name$3}=${_first}`);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGsE(_x$6));
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(_tmp$2, _self));
          }
        }
      } else {
        return _M0FPC15debug14empty__content();
      }
    }
    case 12: {
      const _RecordField = self;
      const _name$4 = _RecordField._0;
      if (children.length === 1) {
        const _val = children[0];
        const label = _M0FPC15debug20pretty__print__label(_name$4);
        const v = _M0MPC15debug7Content8no__wrap(_val);
        const _bind = v.lines;
        if (_bind.length === 0) {
          return _M0FPC15debug14empty__content();
        } else {
          if (_bind.length === 1) {
            const _one = _bind[0];
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(1 + v.size | 0, [`${label}: ${_one}`]));
          } else {
            const _first = _bind[0];
            const _x$6 = new _M0TPB9ArrayViewGsE(_bind, 1, _bind.length);
            const _tmp$2 = 1 + v.size | 0;
            const _self = [];
            _M0MPC15array5Array4pushGsE(_self, `${label}: ${_first}`);
            _M0MPC15array5Array10push__iterGsE(_self, _M0MPC15array9ArrayView4iterGsE(_x$6));
            return _M0FPC15debug10no__parens(_M0FPC15debug15content__parens(_tmp$2, _self));
          }
        }
      } else {
        return _M0FPC15debug14empty__content();
      }
    }
    default: {
      return _M0FPC15debug6parens(_M0FPC15debug8verbatim("..."));
    }
  }
}
function _M0MPC15debug4Repr12render__repr(self, threshold) {
  const label = _M0MPC15debug4Repr7shallow(self);
  const children = _M0MPC15array5Array3mapGRPC15debug4ReprRPC15debug7ContentE(_M0MPC15debug4Repr8children(self), (child) => _M0MPC15debug4Repr12render__repr(child, threshold));
  return _M0FPC15debug14with__resizing(_M0FPC15debug10info__size(label), threshold, _M0MPC15debug4Repr13pretty__print(label, children));
}
function _M0FPC15debug6render(r, max_depth) {
  const max_depth$2 = max_depth === undefined ? _M0FPC15debug6renderN6constrS1705 : max_depth;
  const info = _M0MPC15debug4Repr11prune__info(r, undefined, max_depth$2);
  return _M0FPC15debug14print__content(_M0MPC15debug7Content8no__wrap(_M0MPC15debug4Repr12render__repr(info, 70)));
}
function _M0IPC15debug4ReprPB4Show6output(self, logger) {
  logger.method_table.method_0(logger.self, _M0FPC15debug6render(self, undefined));
}
function _M0IPC16string6StringPC15debug5Debug8to__repr(self) {
  return _M0MPC15debug4Repr6string(self);
}
function _M0IP211localreview7xiangqi10ChessErrorPC15debug5Debug8to__repr(_x_157) {
  let _arg_158;
  _L: {
    const _Invalid = _x_157;
    const _$42$arg_158 = _Invalid._0;
    _arg_158 = _$42$arg_158;
    break _L;
  }
  return _M0MPC15debug4Repr4ctor("Invalid", [{ _0: undefined, _1: _M0IPC16string6StringPC15debug5Debug8to__repr(_arg_158) }]);
}
function _M0IP211localreview7xiangqi4MovePB2Eq5equal(_x_143, _x_144) {
  return _x_143.from === _x_144.from && _x_143.to === _x_144.to;
}
function _M0FP211localreview7xiangqi10parse__fen(fen) {
  const _bind = " ";
  const fields = _M0MPB4Iter9to__arrayGsE(_M0MPB4Iter6filterGRPC16string10StringViewE(_M0MPC16string6String5split(fen, new _M0TPC16string10StringView(_bind, 0, _bind.length)), (x) => !_M0MPC16string10StringView9is__empty(x)));
  let _tmp;
  if (fields.length < 2) {
    _tmp = true;
  } else {
    let _tmp$2;
    const _tmp$3 = _M0MPC15array5Array2atGsE(fields, 1);
    const _bind$2 = "w";
    if (_M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(_tmp$3, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length))) {
      const _tmp$4 = _M0MPC15array5Array2atGsE(fields, 1);
      const _bind$3 = "b";
      _tmp$2 = _M0IP016_24default__implPB2Eq10not__equalGRPC16string10StringViewE(_tmp$4, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length));
    } else {
      _tmp$2 = false;
    }
    _tmp = _tmp$2;
  }
  if (_tmp) {
    return new _M0DTPC16result6ResultGRP211localreview7xiangqi5BoardRP211localreview7xiangqi10ChessErrorE3Err(new _M0DTPC15error5Error44localreview_2fxiangqi_2eChessError_2eInvalid("FEN turn"));
  }
  const _tmp$2 = _M0MPC15array5Array2atGsE(fields, 0);
  const _bind$2 = "/";
  const rows = _M0MPB4Iter9to__arrayGsE(_M0MPC16string10StringView5split(_tmp$2, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length)));
  if (rows.length !== 10) {
    return new _M0DTPC16result6ResultGRP211localreview7xiangqi5BoardRP211localreview7xiangqi10ChessErrorE3Err(new _M0DTPC15error5Error44localreview_2fxiangqi_2eChessError_2eInvalid("FEN ranks"));
  }
  const cells = [];
  const rk = new _M0TPB8MutLocalGiE(0);
  const bk = new _M0TPB8MutLocalGiE(0);
  const _bind$3 = rows.length;
  let _tmp$3 = 0;
  while (true) {
    const _ = _tmp$3;
    if (_ < _bind$3) {
      const row = rows[_];
      const start = cells.length;
      const _bind$4 = row.str;
      const _bind$5 = row.start;
      const _bind$6 = row.end;
      let _tmp$4 = _bind$5;
      while (true) {
        const _string_index = _tmp$4;
        if (_string_index < _bind$6) {
          let _decoded_next_string_index;
          let _decoded_char;
          _L: {
            const _bind$7 = _bind$4.charCodeAt(_string_index);
            if (_bind$7 >= 55296 && _bind$7 <= 56319 && (_string_index + 1 | 0) < _bind$6) {
              const _bind$8 = _bind$4.charCodeAt(_string_index + 1 | 0);
              if (_bind$8 >= 56320 && _bind$8 <= 57343) {
                _decoded_next_string_index = _string_index + 2 | 0;
                _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$7 - 55296 | 0, 1024) | 0) + _bind$8 | 0) - 56320 | 0) + 65536 | 0);
                break _L;
              } else {
                _decoded_next_string_index = _string_index + 1 | 0;
                _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$7);
                break _L;
              }
            } else {
              _decoded_next_string_index = _string_index + 1 | 0;
              _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$7);
              break _L;
            }
          }
          const _next_string_index = _decoded_next_string_index;
          const c = _decoded_char;
          if (c >= 49 && c <= 57) {
            const _bind$7 = 0;
            const _bind$8 = c - 48 | 0;
            let _tmp$5 = _bind$7;
            while (true) {
              const _$2 = _tmp$5;
              if (_$2 < _bind$8) {
                _M0MPC15array5Array4pushGiE(cells, 0);
                _tmp$5 = _$2 + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          } else {
            let p;
            switch (c) {
              case 75: {
                p = 1;
                break;
              }
              case 65: {
                p = 2;
                break;
              }
              case 66: {
                p = 3;
                break;
              }
              case 69: {
                p = 3;
                break;
              }
              case 78: {
                p = 4;
                break;
              }
              case 72: {
                p = 4;
                break;
              }
              case 82: {
                p = 5;
                break;
              }
              case 67: {
                p = 6;
                break;
              }
              case 80: {
                p = 7;
                break;
              }
              case 107: {
                p = -1;
                break;
              }
              case 97: {
                p = -2;
                break;
              }
              case 98: {
                p = -3;
                break;
              }
              case 101: {
                p = -3;
                break;
              }
              case 110: {
                p = -4;
                break;
              }
              case 104: {
                p = -4;
                break;
              }
              case 114: {
                p = -5;
                break;
              }
              case 99: {
                p = -6;
                break;
              }
              case 112: {
                p = -7;
                break;
              }
              default: {
                return new _M0DTPC16result6ResultGRP211localreview7xiangqi5BoardRP211localreview7xiangqi10ChessErrorE3Err(new _M0DTPC15error5Error44localreview_2fxiangqi_2eChessError_2eInvalid("FEN piece"));
              }
            }
            if (p === 1) {
              rk.val = rk.val + 1 | 0;
            }
            if (p === -1) {
              bk.val = bk.val + 1 | 0;
            }
            _M0MPC15array5Array4pushGiE(cells, p);
          }
          _tmp$4 = _next_string_index;
          continue;
        } else {
          break;
        }
      }
      if ((cells.length - start | 0) !== 9) {
        return new _M0DTPC16result6ResultGRP211localreview7xiangqi5BoardRP211localreview7xiangqi10ChessErrorE3Err(new _M0DTPC15error5Error44localreview_2fxiangqi_2eChessError_2eInvalid("FEN file count"));
      }
      _tmp$3 = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (rk.val !== 1 || bk.val !== 1) {
    return new _M0DTPC16result6ResultGRP211localreview7xiangqi5BoardRP211localreview7xiangqi10ChessErrorE3Err(new _M0DTPC15error5Error44localreview_2fxiangqi_2eChessError_2eInvalid("FEN needs both kings"));
  }
  const _tmp$4 = _M0MPC15array5Array2atGsE(fields, 1);
  const _bind$4 = "w";
  return new _M0DTPC16result6ResultGRP211localreview7xiangqi5BoardRP211localreview7xiangqi10ChessErrorE2Ok(new _M0TP211localreview7xiangqi5Board(cells, _M0IPC16string10StringViewPB2Eq5equal(_tmp$4, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length))));
}
function _M0FP211localreview7xiangqi7initial() {
  let _try_err;
  _L: {
    const _bind = _M0FP211localreview7xiangqi10parse__fen("rnbakabnr/9/1c5c1/p1p1p1p1p/9/9/P1P1P1P1P/1C5C1/9/RNBAKABNR w");
    if (_bind.$tag === 1) {
      const _ok = _bind;
      return _ok._0;
    } else {
      const _err = _bind;
      _try_err = _err._0;
      break _L;
    }
  }
  return _M0FPC15abort5abortGRP211localreview7xiangqi5BoardE("internal FEN");
}
function _M0MP211localreview7xiangqi6Engine3new() {
  return new _M0TP211localreview7xiangqi6Engine(_M0FP211localreview7xiangqi7initial(), false);
}
function _M0MP211localreview7xiangqi5Board3fen(self) {
  const rows = [];
  const _bind = 0;
  const _bind$2 = 10;
  let _tmp = _bind;
  while (true) {
    const y = _tmp;
    if (y < _bind$2) {
      const row = new _M0TPB8MutLocalGsE("");
      const empty = new _M0TPB8MutLocalGiE(0);
      const _bind$3 = 0;
      const _bind$4 = 9;
      let _tmp$2 = _bind$3;
      while (true) {
        const x = _tmp$2;
        if (x < _bind$4) {
          const p = _M0MPC15array5Array2atGiE(self.cells, (Math.imul(y, 9) | 0) + x | 0);
          if (p === 0) {
            empty.val = empty.val + 1 | 0;
          } else {
            if (empty.val > 0) {
              row.val = `${row.val}${_M0MPC13int3Int18to__string_2einner(empty.val, 10)}`;
              empty.val = 0;
            }
            const _tmp$3 = row.val;
            let _tmp$4;
            switch (p) {
              case 1: {
                _tmp$4 = "K";
                break;
              }
              case 2: {
                _tmp$4 = "A";
                break;
              }
              case 3: {
                _tmp$4 = "B";
                break;
              }
              case 4: {
                _tmp$4 = "N";
                break;
              }
              case 5: {
                _tmp$4 = "R";
                break;
              }
              case 6: {
                _tmp$4 = "C";
                break;
              }
              case 7: {
                _tmp$4 = "P";
                break;
              }
              case -1: {
                _tmp$4 = "k";
                break;
              }
              case -2: {
                _tmp$4 = "a";
                break;
              }
              case -3: {
                _tmp$4 = "b";
                break;
              }
              case -4: {
                _tmp$4 = "n";
                break;
              }
              case -5: {
                _tmp$4 = "r";
                break;
              }
              case -6: {
                _tmp$4 = "c";
                break;
              }
              default: {
                _tmp$4 = "p";
              }
            }
            row.val = `${_tmp$3}${_tmp$4}`;
          }
          _tmp$2 = x + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      if (empty.val > 0) {
        row.val = `${row.val}${_M0MPC13int3Int18to__string_2einner(empty.val, 10)}`;
      }
      _M0MPC15array5Array4pushGsE(rows, row.val);
      _tmp = y + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$3 = "/";
  return `${_M0MPC15array5Array4joinGsE(rows, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length))}${self.red ? " w" : " b"}`;
}
function _M0MP211localreview7xiangqi6Engine3fen(self) {
  return _M0MP211localreview7xiangqi5Board3fen(self.board);
}
function _M0FP211localreview7xiangqi3abs(n) {
  return n < 0 ? -n | 0 : n;
}
function _M0MP211localreview7xiangqi5Board5apply(self, m) {
  const cells = _M0MPC15array5Array4copyGiE(self.cells);
  _M0MPC15array5Array3setGiE(cells, m.to, _M0MPC15array5Array2atGiE(cells, m.from));
  _M0MPC15array5Array3setGiE(cells, m.from, 0);
  return new _M0TP211localreview7xiangqi5Board(cells, !self.red);
}
function _M0MP211localreview7xiangqi5Board8evaluate(self) {
  const score = new _M0TPB8MutLocalGiE(0);
  const _bind = self.cells;
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      const p = _bind[i];
      const _bind$3 = _M0FP211localreview7xiangqi3abs(p);
      let v;
      switch (_bind$3) {
        case 1: {
          v = 100000;
          break;
        }
        case 2: {
          v = 120;
          break;
        }
        case 3: {
          v = 120;
          break;
        }
        case 4: {
          v = 270;
          break;
        }
        case 5: {
          v = 600;
          break;
        }
        case 6: {
          v = 300;
          break;
        }
        case 7: {
          let _tmp$2;
          let _tmp$3;
          if (p > 0) {
            if (9 === 0) {
              $panic();
            }
            _tmp$3 = (i / 9 | 0) < 5;
          } else {
            _tmp$3 = false;
          }
          if (_tmp$3) {
            _tmp$2 = true;
          } else {
            let _tmp$4;
            if (p < 0) {
              if (9 === 0) {
                $panic();
              }
              _tmp$4 = (i / 9 | 0) > 4;
            } else {
              _tmp$4 = false;
            }
            _tmp$2 = _tmp$4;
          }
          if (_tmp$2) {
            v = 100;
          } else {
            v = 60;
          }
          break;
        }
        default: {
          v = 0;
        }
      }
      score.val = score.val + (p > 0 ? v : -v | 0) | 0;
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return self.red ? score.val : -score.val | 0;
}
function _M0FP211localreview7xiangqi6palace(x, y, red) {
  return x >= 3 && (x <= 5 && (red ? y >= 7 && y <= 9 : y >= 0 && y <= 2));
}
function _M0MP211localreview7xiangqi5Board6pseudo(self, from, to) {
  if (from === to) {
    return false;
  }
  const p = _M0MPC15array5Array2atGiE(self.cells, from);
  const target = _M0MPC15array5Array2atGiE(self.cells, to);
  if (p === 0 || target !== 0 && p > 0 === target > 0) {
    return false;
  }
  if (9 === 0) {
    $panic();
  }
  const x = from % 9 | 0;
  if (9 === 0) {
    $panic();
  }
  const y = from / 9 | 0;
  if (9 === 0) {
    $panic();
  }
  const tx = to % 9 | 0;
  if (9 === 0) {
    $panic();
  }
  const ty = to / 9 | 0;
  const dx = tx - x | 0;
  const dy = ty - y | 0;
  const red = p > 0;
  const aligned = dx === 0 || dy === 0;
  const screen = new _M0TPB8MutLocalGiE(0);
  if (aligned) {
    const step = dx === 0 ? (dy > 0 ? 9 : -9) : dx > 0 ? 1 : -1;
    const i = new _M0TPB8MutLocalGiE(from + step | 0);
    while (true) {
      if (i.val !== to) {
        if (_M0MPC15array5Array2atGiE(self.cells, i.val) !== 0) {
          screen.val = screen.val + 1 | 0;
        }
        i.val = i.val + step | 0;
        continue;
      } else {
        break;
      }
    }
  }
  const _bind = _M0FP211localreview7xiangqi3abs(p);
  switch (_bind) {
    case 1: {
      return _M0FP211localreview7xiangqi6palace(tx, ty, red) && (_M0FP211localreview7xiangqi3abs(dx) + _M0FP211localreview7xiangqi3abs(dy) | 0) === 1 || target === (-p | 0) && (dx === 0 && screen.val === 0);
    }
    case 2: {
      return _M0FP211localreview7xiangqi6palace(tx, ty, red) && (_M0FP211localreview7xiangqi3abs(dx) === 1 && _M0FP211localreview7xiangqi3abs(dy) === 1);
    }
    case 3: {
      if (_M0FP211localreview7xiangqi3abs(dx) === 2) {
        let _tmp;
        if (_M0FP211localreview7xiangqi3abs(dy) === 2) {
          let _tmp$2;
          if (red ? ty >= 5 : ty <= 4) {
            const _tmp$3 = self.cells;
            if (2 === 0) {
              $panic();
            }
            const _tmp$4 = (Math.imul(y + (dy / 2 | 0) | 0, 9) | 0) + x | 0;
            if (2 === 0) {
              $panic();
            }
            _tmp$2 = _M0MPC15array5Array2atGiE(_tmp$3, _tmp$4 + (dx / 2 | 0) | 0) === 0;
          } else {
            _tmp$2 = false;
          }
          _tmp = _tmp$2;
        } else {
          _tmp = false;
        }
        return _tmp;
      } else {
        return false;
      }
    }
    case 4: {
      if (_M0FP211localreview7xiangqi3abs(dx) === 2 && _M0FP211localreview7xiangqi3abs(dy) === 1) {
        const _tmp = self.cells;
        const _tmp$2 = (Math.imul(y, 9) | 0) + x | 0;
        if (2 === 0) {
          $panic();
        }
        return _M0MPC15array5Array2atGiE(_tmp, _tmp$2 + (dx / 2 | 0) | 0) === 0;
      } else {
        if (_M0FP211localreview7xiangqi3abs(dx) === 1 && _M0FP211localreview7xiangqi3abs(dy) === 2) {
          const _tmp = self.cells;
          if (2 === 0) {
            $panic();
          }
          return _M0MPC15array5Array2atGiE(_tmp, (Math.imul(y + (dy / 2 | 0) | 0, 9) | 0) + x | 0) === 0;
        } else {
          return false;
        }
      }
    }
    case 5: {
      return aligned && screen.val === 0;
    }
    case 6: {
      return aligned && screen.val === (target === 0 ? 0 : 1);
    }
    case 7: {
      return dx === 0 && dy === (red ? -1 : 1) || dy === 0 && (_M0FP211localreview7xiangqi3abs(dx) === 1 && (red ? y <= 4 : y >= 5));
    }
    default: {
      return false;
    }
  }
}
function _M0MP211localreview7xiangqi5Board9in__check(self, red) {
  const king = new _M0TPB8MutLocalGiE(-1);
  const _bind = self.cells;
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      const p = _bind[i];
      if (p === (red ? 1 : -1)) {
        king.val = i;
        break;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  if (king.val < 0) {
    return true;
  }
  const _bind$3 = self.cells;
  const _bind$4 = _bind$3.length;
  let _tmp$2 = 0;
  while (true) {
    const i = _tmp$2;
    if (i < _bind$4) {
      const p = _bind$3[i];
      if (p !== 0 && (_M0IP016_24default__implPB2Eq10not__equalGbE(p > 0, red) && _M0MP211localreview7xiangqi5Board6pseudo(self, i, king.val))) {
        return true;
      }
      _tmp$2 = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return false;
}
function _M0MP211localreview7xiangqi5Board12legal__moves(self) {
  const out = [];
  const _bind = self.cells;
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind$2) {
      const p = _bind[i];
      _L: {
        if (p === 0 || _M0IP016_24default__implPB2Eq10not__equalGbE(p > 0, self.red)) {
          break _L;
        }
        if (9 === 0) {
          $panic();
        }
        const x = i % 9 | 0;
        if (9 === 0) {
          $panic();
        }
        const y = i / 9 | 0;
        const targets = [];
        if (_M0FP211localreview7xiangqi3abs(p) === 5 || (_M0FP211localreview7xiangqi3abs(p) === 6 || _M0FP211localreview7xiangqi3abs(p) === 1)) {
          const _bind$3 = 0;
          const _bind$4 = 9;
          let _tmp$2 = _bind$3;
          while (true) {
            const tx = _tmp$2;
            if (tx < _bind$4) {
              _M0MPC15array5Array4pushGiE(targets, (Math.imul(y, 9) | 0) + tx | 0);
              _tmp$2 = tx + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          const _bind$5 = 0;
          const _bind$6 = 10;
          let _tmp$3 = _bind$5;
          while (true) {
            const ty = _tmp$3;
            if (ty < _bind$6) {
              if (ty !== y) {
                _M0MPC15array5Array4pushGiE(targets, (Math.imul(ty, 9) | 0) + x | 0);
              }
              _tmp$3 = ty + 1 | 0;
              continue;
            } else {
              break;
            }
          }
        } else {
          const _bind$3 = _M0FP211localreview7xiangqi3abs(p);
          let offsets;
          switch (_bind$3) {
            case 2: {
              offsets = [{ _0: 1, _1: 1 }, { _0: 1, _1: -1 }, { _0: -1, _1: 1 }, { _0: -1, _1: -1 }];
              break;
            }
            case 3: {
              offsets = [{ _0: 2, _1: 2 }, { _0: 2, _1: -2 }, { _0: -2, _1: 2 }, { _0: -2, _1: -2 }];
              break;
            }
            case 4: {
              offsets = [{ _0: 2, _1: 1 }, { _0: 2, _1: -1 }, { _0: -2, _1: 1 }, { _0: -2, _1: -1 }, { _0: 1, _1: 2 }, { _0: 1, _1: -2 }, { _0: -1, _1: 2 }, { _0: -1, _1: -2 }];
              break;
            }
            default: {
              offsets = [{ _0: 0, _1: p > 0 ? -1 : 1 }, { _0: 1, _1: 0 }, { _0: -1, _1: 0 }];
            }
          }
          const _bind$4 = offsets.length;
          let _tmp$2 = 0;
          while (true) {
            const _ = _tmp$2;
            if (_ < _bind$4) {
              const _foreach_element = offsets[_];
              let dx;
              let dy;
              _L$2: {
                const _dx = _foreach_element._0;
                const _dy = _foreach_element._1;
                dx = _dx;
                dy = _dy;
                break _L$2;
              }
              const tx = x + dx | 0;
              const ty = y + dy | 0;
              if (tx >= 0 && (tx < 9 && (ty >= 0 && ty < 10))) {
                _M0MPC15array5Array4pushGiE(targets, (Math.imul(ty, 9) | 0) + tx | 0);
              }
              _tmp$2 = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
        }
        const _bind$3 = targets.length;
        let _tmp$2 = 0;
        while (true) {
          const _ = _tmp$2;
          if (_ < _bind$3) {
            const j = targets[_];
            if (_M0MP211localreview7xiangqi5Board6pseudo(self, i, j)) {
              const m = new _M0TP211localreview7xiangqi4Move(i, j);
              if (!_M0MP211localreview7xiangqi5Board9in__check(_M0MP211localreview7xiangqi5Board5apply(self, m), self.red)) {
                _M0MPC15array5Array4pushGsE(out, m);
              }
            }
            _tmp$2 = _ + 1 | 0;
            continue;
          } else {
            break;
          }
        }
        break _L;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return out;
}
function _M0FP211localreview7xiangqi12piece__value(p) {
  const _bind = _M0FP211localreview7xiangqi3abs(p);
  switch (_bind) {
    case 1: {
      return 100000;
    }
    case 2: {
      return 120;
    }
    case 3: {
      return 120;
    }
    case 4: {
      return 270;
    }
    case 5: {
      return 600;
    }
    case 6: {
      return 300;
    }
    case 7: {
      return 60;
    }
    default: {
      return 0;
    }
  }
}
function _M0MP211localreview7xiangqi5Board7ordered(self, hint) {
  const moves = _M0MP211localreview7xiangqi5Board12legal__moves(self);
  const priority = (m) => {
    if (_M0IPC16option6OptionPB2Eq5equalGRP211localreview7xiangqi4MoveE(hint, m)) {
      return 10000000;
    }
    const target = _M0MPC15array5Array2atGiE(self.cells, m.to);
    return target !== 0 ? (Math.imul(16, _M0FP211localreview7xiangqi12piece__value(target)) | 0) - _M0FP211localreview7xiangqi12piece__value(_M0MPC15array5Array2atGiE(self.cells, m.from)) | 0 : 0;
  };
  _M0MPC15array5Array8sort__byGRP211localreview7xiangqi4MoveE(moves, (a, b) => priority(b) - priority(a) | 0);
  return moves;
}
function _M0MP211localreview7xiangqi11SearchState4poll(self) {
  let _tmp;
  if (self.nodes >= self.limit) {
    _tmp = true;
  } else {
    let _tmp$2;
    if (64 === 0) {
      $panic();
    }
    if ((self.nodes % 64 | 0) === 0) {
      const _func = self.should_stop;
      _tmp$2 = _func();
    } else {
      _tmp$2 = false;
    }
    _tmp = _tmp$2;
  }
  if (_tmp) {
    return new _M0DTPC16result6ResultGuRP211localreview7xiangqi13SearchStoppedE3Err(_M0DTPC15error5Error51localreview_2fxiangqi_2eSearchStopped_2eInterrupted__);
  }
  self.nodes = self.nodes + 1 | 0;
  return new _M0DTPC16result6ResultGuRP211localreview7xiangqi13SearchStoppedE2Ok(undefined);
}
function _M0MP211localreview7xiangqi11SearchState5visit(self, b, depth, qleft, ply, alpha, beta) {
  const _bind = _M0MP211localreview7xiangqi11SearchState4poll(self);
  if (_bind.$tag === 1) {
    const _ok = _bind;
    _ok._0;
  } else {
    return _bind;
  }
  const key = _M0MP211localreview7xiangqi5Board3fen(b);
  if (_M0MPC15array5Array8containsGsE(self.path, key)) {
    return new _M0DTPC16result6ResultGiRP211localreview7xiangqi13SearchStoppedE2Ok(0);
  }
  const moves = _M0MP211localreview7xiangqi5Board7ordered(b, _M0MPB3Map3getGsRP211localreview7xiangqi4MoveE(self.ordering, key));
  if (_M0MPC15array5Array9is__emptyGsE(moves)) {
    return new _M0DTPC16result6ResultGiRP211localreview7xiangqi13SearchStoppedE2Ok(-1000000 + ply | 0);
  }
  const checked = _M0MP211localreview7xiangqi5Board9in__check(b, b.red);
  const bound = new _M0TPB8MutLocalGiE(alpha);
  if (depth <= 0) {
    const static_score = _M0MP211localreview7xiangqi5Board8evaluate(b);
    if (qleft <= 0) {
      return new _M0DTPC16result6ResultGiRP211localreview7xiangqi13SearchStoppedE2Ok(static_score);
    }
    if (!checked) {
      if (static_score >= beta) {
        return new _M0DTPC16result6ResultGiRP211localreview7xiangqi13SearchStoppedE2Ok(static_score);
      }
      if (static_score > bound.val) {
        bound.val = static_score;
      }
    }
  }
  _M0MPC15array5Array4pushGsE(self.path, key);
  const best = new _M0TPB8MutLocalGORP211localreview7xiangqi4MoveE(undefined);
  const _bind$2 = moves.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const m = moves[_];
      _L: {
        if (depth <= 0 && (!checked && _M0MPC15array5Array2atGiE(b.cells, m.to) === 0)) {
          break _L;
        }
        const _bind$3 = _M0MP211localreview7xiangqi11SearchState5visit(self, _M0MP211localreview7xiangqi5Board5apply(b, m), depth - 1 | 0, depth <= 0 ? qleft - 1 | 0 : qleft, ply + 1 | 0, -beta | 0, -bound.val | 0);
        let _tmp$2;
        if (_bind$3.$tag === 1) {
          const _ok = _bind$3;
          _tmp$2 = _ok._0;
        } else {
          return _bind$3;
        }
        const value = -_tmp$2 | 0;
        if (value > bound.val) {
          bound.val = value;
          best.val = m;
        }
        if (bound.val >= beta) {
          break;
        }
        break _L;
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  _M0MPC15array5Array3popGsE(self.path);
  if (_M0MPB3Map6lengthGsRP211localreview7xiangqi4MoveE(self.ordering) < 50000) {
    let m;
    _L: {
      _L$2: {
        const _bind$3 = best.val;
        if (_bind$3 === undefined) {
        } else {
          const _Some = _bind$3;
          const _m = _Some;
          m = _m;
          break _L$2;
        }
        break _L;
      }
      _M0MPB3Map3setGsRP211localreview7xiangqi4MoveE(self.ordering, key, m);
    }
  }
  return new _M0DTPC16result6ResultGiRP211localreview7xiangqi13SearchStoppedE2Ok(bound.val);
}
function _M0MP211localreview7xiangqi5Board14search_2einner(self, depth, node_limit, should_stop, on_iteration) {
  if (depth < 1 || (depth > 64 || (node_limit < 1 || node_limit > 1000000000))) {
    return new _M0DTPC16result6ResultGRP211localreview7xiangqi12SearchResultRP211localreview7xiangqi10ChessErrorE3Err(new _M0DTPC15error5Error44localreview_2fxiangqi_2eChessError_2eInvalid("search depth 1..64 and nodes 1..1000000000 required"));
  }
  const moves = _M0MP211localreview7xiangqi5Board12legal__moves(self);
  if (_M0MPC15array5Array9is__emptyGsE(moves)) {
    return new _M0DTPC16result6ResultGRP211localreview7xiangqi12SearchResultRP211localreview7xiangqi10ChessErrorE2Ok(new _M0TP211localreview7xiangqi12SearchResult(undefined, -1000000, 0, 0, false));
  }
  const _tmp = [];
  const _bind = [];
  const state = new _M0TP211localreview7xiangqi11SearchState(0, node_limit, should_stop, _tmp, _M0MPB3Map3MapGsRP211localreview7xiangqi4MoveE(new _M0TPB9ArrayViewGUsRP211localreview7xiangqi4MoveEE(_bind, 0, 0), undefined));
  const result = new _M0TPB8MutLocalGRP211localreview7xiangqi12SearchResultE(new _M0TP211localreview7xiangqi12SearchResult(_M0MPC15array5Array2atGsE(moves, 0), _M0MP211localreview7xiangqi5Board8evaluate(self), 0, 0, false));
  const key = _M0MP211localreview7xiangqi5Board3fen(self);
  const _bind$2 = 1;
  let _tmp$2 = _bind$2;
  while (true) {
    const level = _tmp$2;
    if (level <= depth) {
      const best = new _M0TPB8MutLocalGORP211localreview7xiangqi4MoveE(result.val.best);
      const score = new _M0TPB8MutLocalGiE(-10000000);
      _M0MPC15array5Array5clearGsE(state.path);
      _M0MPC15array5Array4pushGsE(state.path, key);
      let _try_err;
      _L: {
        _L$2: {
          if (should_stop()) {
            _try_err = _M0DTPC15error5Error51localreview_2fxiangqi_2eSearchStopped_2eInterrupted__;
            break _L$2;
          }
          const _bind$3 = _M0MP211localreview7xiangqi5Board7ordered(self, result.val.best);
          const _bind$4 = _bind$3.length;
          let _tmp$3 = 0;
          while (true) {
            const _ = _tmp$3;
            if (_ < _bind$4) {
              const m = _bind$3[_];
              const _bind$5 = _M0MP211localreview7xiangqi11SearchState5visit(state, _M0MP211localreview7xiangqi5Board5apply(self, m), level - 1 | 0, 8, 1, -10000000, -score.val | 0);
              let _tmp$4;
              if (_bind$5.$tag === 1) {
                const _ok = _bind$5;
                _tmp$4 = _ok._0;
              } else {
                const _err = _bind$5;
                _try_err = _err._0;
                break _L$2;
              }
              const value = -_tmp$4 | 0;
              if (value > score.val) {
                score.val = value;
                best.val = m;
              }
              _tmp$3 = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          break _L;
        }
        const _bind$3 = result.val;
        return new _M0DTPC16result6ResultGRP211localreview7xiangqi12SearchResultRP211localreview7xiangqi10ChessErrorE2Ok(new _M0TP211localreview7xiangqi12SearchResult(_bind$3.best, _bind$3.score, _bind$3.depth, state.nodes, true));
      }
      result.val = new _M0TP211localreview7xiangqi12SearchResult(best.val, score.val, level, state.nodes, false);
      on_iteration(result.val);
      if (_M0FP211localreview7xiangqi3abs(score.val) >= 999000) {
        break;
      }
      _tmp$2 = level + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$3 = result.val;
  return new _M0DTPC16result6ResultGRP211localreview7xiangqi12SearchResultRP211localreview7xiangqi10ChessErrorE2Ok(new _M0TP211localreview7xiangqi12SearchResult(_bind$3.best, _bind$3.score, _bind$3.depth, state.nodes, _bind$3.stopped));
}
function _M0MP211localreview7xiangqi5Board6search(self, depth, node_limit$46$opt, should_stop$46$opt, on_iteration$46$opt) {
  let node_limit;
  if (node_limit$46$opt === undefined) {
    node_limit = 100000;
  } else {
    const _Some = node_limit$46$opt;
    node_limit = _Some;
  }
  let should_stop;
  if (should_stop$46$opt === undefined) {
    should_stop = () => false;
  } else {
    const _Some = should_stop$46$opt;
    should_stop = _Some;
  }
  let on_iteration;
  if (on_iteration$46$opt === undefined) {
    on_iteration = (_discard_) => {
    };
  } else {
    const _Some = on_iteration$46$opt;
    on_iteration = _Some;
  }
  return _M0MP211localreview7xiangqi5Board14search_2einner(self, depth, node_limit, should_stop, on_iteration);
}
function _M0MP211localreview7xiangqi5Board18best__move_2einner(self, depth, node_limit) {
  if (depth < 1 || (depth > 64 || (node_limit < 1 || node_limit > 1000000))) {
    return new _M0DTPC16result6ResultGORP211localreview7xiangqi4MoveRP211localreview7xiangqi10ChessErrorE3Err(new _M0DTPC15error5Error44localreview_2fxiangqi_2eChessError_2eInvalid("search bounds"));
  }
  const _bind = _M0MP211localreview7xiangqi5Board6search(self, depth, node_limit, undefined, undefined);
  let result;
  if (_bind.$tag === 1) {
    const _ok = _bind;
    result = _ok._0;
  } else {
    return _bind;
  }
  if (result.stopped) {
    return new _M0DTPC16result6ResultGORP211localreview7xiangqi4MoveRP211localreview7xiangqi10ChessErrorE3Err(new _M0DTPC15error5Error44localreview_2fxiangqi_2eChessError_2eInvalid("search node budget"));
  }
  return new _M0DTPC16result6ResultGORP211localreview7xiangqi4MoveRP211localreview7xiangqi10ChessErrorE2Ok(result.best);
}
function _M0MP211localreview7xiangqi4Move10coordinate(self) {
  const files = _M0MPC16string6String9to__array("abcdefghi");
  if (9 === 0) {
    $panic();
  }
  const _tmp = _M0IPC14char4CharPB4Show10to__string(_M0MPC15array5Array2atGcE(files, self.from % 9 | 0));
  if (9 === 0) {
    $panic();
  }
  const _tmp$2 = _M0MPC13int3Int18to__string_2einner(9 - (self.from / 9 | 0) | 0, 10);
  if (9 === 0) {
    $panic();
  }
  const _tmp$3 = _M0IPC14char4CharPB4Show10to__string(_M0MPC15array5Array2atGcE(files, self.to % 9 | 0));
  if (9 === 0) {
    $panic();
  }
  return `${_tmp}${_tmp$2}${_tmp$3}${_M0MPC13int3Int18to__string_2einner(9 - (self.to / 9 | 0) | 0, 10)}`;
}
function _M0MP211localreview7xiangqi5Board4play(self, coordinate) {
  const _bind = _M0MP211localreview7xiangqi5Board12legal__moves(self);
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const m = _bind[_];
      if (_M0MP211localreview7xiangqi4Move10coordinate(m) === coordinate) {
        return new _M0DTPC16result6ResultGRP211localreview7xiangqi5BoardRP211localreview7xiangqi10ChessErrorE2Ok(_M0MP211localreview7xiangqi5Board5apply(self, m));
      }
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGRP211localreview7xiangqi5BoardRP211localreview7xiangqi10ChessErrorE3Err(new _M0DTPC15error5Error44localreview_2fxiangqi_2eChessError_2eInvalid(`illegal move ${coordinate}`));
}
function _M0MP211localreview7xiangqi6Engine7command(self, line) {
  if (self.closed) {
    return new _M0DTPC16result6ResultGsRP211localreview7xiangqi10ChessErrorE3Err(new _M0DTPC15error5Error44localreview_2fxiangqi_2eChessError_2eInvalid("engine closed"));
  }
  const _tmp = _M0MPC16string6String4trim(line, undefined);
  const _bind = " ";
  const args = _M0MPB4Iter9to__arrayGsE(_M0MPB4Iter3mapGRPC16string10StringViewsE(_M0MPB4Iter6filterGRPC16string10StringViewE(_M0MPC16string10StringView5split(_tmp, new _M0TPC16string10StringView(_bind, 0, _bind.length)), (x) => !_M0MPC16string10StringView9is__empty(x)), (x) => _M0MPC16string10StringView9to__owned(x)));
  if (_M0MPC15array5Array9is__emptyGsE(args)) {
    return new _M0DTPC16result6ResultGsRP211localreview7xiangqi10ChessErrorE3Err(new _M0DTPC15error5Error44localreview_2fxiangqi_2eChessError_2eInvalid("empty UCCI command"));
  }
  const _bind$2 = _M0MPC15array5Array2atGsE(args, 0);
  switch (_bind$2) {
    case "ucci": {
      return new _M0DTPC16result6ResultGsRP211localreview7xiangqi10ChessErrorE2Ok("id name MoonBit Xiangqi Local\nucciok");
    }
    case "isready": {
      return new _M0DTPC16result6ResultGsRP211localreview7xiangqi10ChessErrorE2Ok("readyok");
    }
    case "ucinewgame": {
      self.board = _M0FP211localreview7xiangqi7initial();
      return new _M0DTPC16result6ResultGsRP211localreview7xiangqi10ChessErrorE2Ok("");
    }
    case "quit": {
      self.closed = true;
      return new _M0DTPC16result6ResultGsRP211localreview7xiangqi10ChessErrorE2Ok("");
    }
    case "stop": {
      return new _M0DTPC16result6ResultGsRP211localreview7xiangqi10ChessErrorE2Ok("");
    }
    case "position": {
      if (args.length < 2) {
        return new _M0DTPC16result6ResultGsRP211localreview7xiangqi10ChessErrorE3Err(new _M0DTPC15error5Error44localreview_2fxiangqi_2eChessError_2eInvalid("position arguments"));
      }
      const end = new _M0TPB8MutLocalGiE(args.length);
      const _bind$3 = 2;
      const _bind$4 = args.length;
      let _tmp$2 = _bind$3;
      while (true) {
        const i = _tmp$2;
        if (i < _bind$4) {
          if (_M0MPC15array5Array2atGsE(args, i) === "moves") {
            end.val = i;
            break;
          }
          _tmp$2 = i + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      let _tmp$3;
      if (_M0MPC15array5Array2atGsE(args, 1) === "startpos") {
        if (end.val !== 2) {
          return new _M0DTPC16result6ResultGsRP211localreview7xiangqi10ChessErrorE3Err(new _M0DTPC15error5Error44localreview_2fxiangqi_2eChessError_2eInvalid("startpos arguments"));
        }
        _tmp$3 = _M0FP211localreview7xiangqi7initial();
      } else {
        if (_M0MPC15array5Array2atGsE(args, 1) === "fen") {
          const _tmp$4 = _M0MPC15array9ArrayView9to__ownedGsE(_M0MPC15array5Array12view_2einnerGsE(args, 2, end.val));
          const _bind$5 = " ";
          const _bind$6 = _M0FP211localreview7xiangqi10parse__fen(_M0MPC15array5Array4joinGsE(_tmp$4, new _M0TPC16string10StringView(_bind$5, 0, _bind$5.length)));
          if (_bind$6.$tag === 1) {
            const _ok = _bind$6;
            _tmp$3 = _ok._0;
          } else {
            return _bind$6;
          }
        } else {
          return new _M0DTPC16result6ResultGsRP211localreview7xiangqi10ChessErrorE3Err(new _M0DTPC15error5Error44localreview_2fxiangqi_2eChessError_2eInvalid("position type"));
        }
      }
      const board = new _M0TPB8MutLocalGRP211localreview7xiangqi5BoardE(_tmp$3);
      if (end.val < args.length) {
        const _bind$5 = end.val + 1 | 0;
        const _bind$6 = args.length;
        let _tmp$4 = _bind$5;
        while (true) {
          const i = _tmp$4;
          if (i < _bind$6) {
            const _bind$7 = _M0MP211localreview7xiangqi5Board4play(board.val, _M0MPC15array5Array2atGsE(args, i));
            let _tmp$5;
            if (_bind$7.$tag === 1) {
              const _ok = _bind$7;
              _tmp$5 = _ok._0;
            } else {
              return _bind$7;
            }
            board.val = _tmp$5;
            _tmp$4 = i + 1 | 0;
            continue;
          } else {
            break;
          }
        }
      }
      self.board = board.val;
      return new _M0DTPC16result6ResultGsRP211localreview7xiangqi10ChessErrorE2Ok("");
    }
    case "go": {
      if (args.length !== 3 || _M0IP016_24default__implPB2Eq10not__equalGsE(_M0MPC15array5Array2atGsE(args, 1), "depth")) {
        return new _M0DTPC16result6ResultGsRP211localreview7xiangqi10ChessErrorE3Err(new _M0DTPC15error5Error44localreview_2fxiangqi_2eChessError_2eInvalid("synchronous core supports go depth 1..64"));
      }
      const depth = new _M0TPB8MutLocalGiE(0);
      if (_M0MPC16string6String9is__empty(_M0MPC15array5Array2atGsE(args, 2)) || _M0MPC15array5Array2atGsE(args, 2).length > 2) {
        return new _M0DTPC16result6ResultGsRP211localreview7xiangqi10ChessErrorE3Err(new _M0DTPC15error5Error44localreview_2fxiangqi_2eChessError_2eInvalid("depth range"));
      }
      const _bind$5 = _M0MPC15array5Array2atGsE(args, 2);
      const _bind$6 = _bind$5.length;
      let _tmp$4 = 0;
      while (true) {
        const _string_index = _tmp$4;
        if (_string_index < _bind$6) {
          let _decoded_next_string_index;
          let _decoded_char;
          _L: {
            const _bind$7 = _bind$5.charCodeAt(_string_index);
            if (_bind$7 >= 55296 && _bind$7 <= 56319 && (_string_index + 1 | 0) < _bind$6) {
              const _bind$8 = _bind$5.charCodeAt(_string_index + 1 | 0);
              if (_bind$8 >= 56320 && _bind$8 <= 57343) {
                _decoded_next_string_index = _string_index + 2 | 0;
                _decoded_char = _M0MPC13int3Int16unsafe__to__char((((Math.imul(_bind$7 - 55296 | 0, 1024) | 0) + _bind$8 | 0) - 56320 | 0) + 65536 | 0);
                break _L;
              } else {
                _decoded_next_string_index = _string_index + 1 | 0;
                _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$7);
                break _L;
              }
            } else {
              _decoded_next_string_index = _string_index + 1 | 0;
              _decoded_char = _M0MPC13int3Int16unsafe__to__char(_bind$7);
              break _L;
            }
          }
          const _next_string_index = _decoded_next_string_index;
          const c = _decoded_char;
          if (c < 48 || c > 57) {
            return new _M0DTPC16result6ResultGsRP211localreview7xiangqi10ChessErrorE3Err(new _M0DTPC15error5Error44localreview_2fxiangqi_2eChessError_2eInvalid("depth range"));
          }
          depth.val = ((Math.imul(depth.val, 10) | 0) + c | 0) - 48 | 0;
          _tmp$4 = _next_string_index;
          continue;
        } else {
          break;
        }
      }
      let _tmp$5;
      let m;
      _L: {
        _L$2: {
          const _bind$7 = _M0MP211localreview7xiangqi5Board18best__move_2einner(self.board, depth.val, 50000);
          let _bind$8;
          if (_bind$7.$tag === 1) {
            const _ok = _bind$7;
            _bind$8 = _ok._0;
          } else {
            return _bind$7;
          }
          if (_bind$8 === undefined) {
            _tmp$5 = "0000";
          } else {
            const _Some = _bind$8;
            const _m = _Some;
            m = _m;
            break _L$2;
          }
          break _L;
        }
        _tmp$5 = _M0MP211localreview7xiangqi4Move10coordinate(m);
      }
      return new _M0DTPC16result6ResultGsRP211localreview7xiangqi10ChessErrorE2Ok(`bestmove ${_tmp$5}`);
    }
    default: {
      return new _M0DTPC16result6ResultGsRP211localreview7xiangqi10ChessErrorE3Err(new _M0DTPC15error5Error44localreview_2fxiangqi_2eChessError_2eInvalid("unsupported UCCI command"));
    }
  }
}
function _M0MP211localreview7xiangqi5Board5perft(self, depth) {
  if (depth < 0 || depth > 4) {
    return new _M0DTPC16result6ResultGiRP211localreview7xiangqi10ChessErrorE3Err(new _M0DTPC15error5Error44localreview_2fxiangqi_2eChessError_2eInvalid("perft depth 0..4"));
  }
  if (depth === 0) {
    return new _M0DTPC16result6ResultGiRP211localreview7xiangqi10ChessErrorE2Ok(1);
  }
  const n = new _M0TPB8MutLocalGiE(0);
  const _bind = _M0MP211localreview7xiangqi5Board12legal__moves(self);
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const m = _bind[_];
      const _bind$3 = _M0MP211localreview7xiangqi5Board5perft(_M0MP211localreview7xiangqi5Board5apply(self, m), depth - 1 | 0);
      let children;
      if (_bind$3.$tag === 1) {
        const _ok = _bind$3;
        children = _ok._0;
      } else {
        return _bind$3;
      }
      if (n.val > (2147483647 - children | 0)) {
        return new _M0DTPC16result6ResultGiRP211localreview7xiangqi10ChessErrorE3Err(new _M0DTPC15error5Error44localreview_2fxiangqi_2eChessError_2eInvalid("perft count exceeds Int"));
      }
      n.val = n.val + children | 0;
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTPC16result6ResultGiRP211localreview7xiangqi10ChessErrorE2Ok(n.val);
}
function _M0FP411localreview7xiangqi3cmd3web3run(input) {
  let _try_err;
  _L: {
    const _tmp = _M0MPC16string6String4trim(input, undefined);
    const _bind = "ucci";
    if (_M0MPC16string10StringView11has__prefix(_tmp, new _M0TPC16string10StringView(_bind, 0, _bind.length))) {
      const engine = _M0MP211localreview7xiangqi6Engine3new();
      const replies = [];
      const _bind$2 = "\n";
      const _it = _M0MPC16string6String5split(input, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length));
      while (true) {
        let line;
        _L$2: {
          const _bind$3 = _M0MPB4Iter4nextGRPC16string10StringViewE(_it);
          if (_bind$3 === undefined) {
            break;
          } else {
            const _Some = _bind$3;
            const _line = _Some;
            line = _line;
            break _L$2;
          }
        }
        const command = _M0MPC16string10StringView9to__owned(_M0MPC16string10StringView4trim(line, undefined));
        if (!_M0MPC16string6String9is__empty(command)) {
          const _bind$3 = _M0MP211localreview7xiangqi6Engine7command(engine, command);
          let reply;
          if (_bind$3.$tag === 1) {
            const _ok = _bind$3;
            reply = _ok._0;
          } else {
            const _err = _bind$3;
            _try_err = _err._0;
            break _L;
          }
          if (!_M0MPC16string6String9is__empty(reply)) {
            _M0MPC15array5Array4pushGsE(replies, reply);
          }
        }
        continue;
      }
      const _bind$3 = "\n";
      return _M0MPC15array5Array4joinGsE(replies, new _M0TPC16string10StringView(_bind$3, 0, _bind$3.length));
    }
    const _bind$2 = _M0FP211localreview7xiangqi10parse__fen(_M0MPC16string10StringView9to__owned(_M0MPC16string6String4trim(input, undefined)));
    let b;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      b = _ok._0;
    } else {
      const _err = _bind$2;
      _try_err = _err._0;
      break _L;
    }
    const moves = _M0MP211localreview7xiangqi5Board12legal__moves(b);
    const _bind$3 = _M0MP211localreview7xiangqi5Board18best__move_2einner(b, 2, 50000);
    let best;
    if (_bind$3.$tag === 1) {
      const _ok = _bind$3;
      best = _ok._0;
    } else {
      const _err = _bind$3;
      _try_err = _err._0;
      break _L;
    }
    const _tmp$2 = _M0MP211localreview7xiangqi5Board3fen(b);
    const _tmp$3 = _M0MPC13int3Int18to__string_2einner(moves.length, 10);
    const _tmp$4 = _M0MPC15array5Array3mapGRP211localreview7xiangqi4MovesE(moves, (m) => _M0MP211localreview7xiangqi4Move10coordinate(m));
    const _bind$4 = " ";
    const _tmp$5 = _M0MPC15array5Array4joinGsE(_tmp$4, new _M0TPC16string10StringView(_bind$4, 0, _bind$4.length));
    let _tmp$6;
    let m;
    _L$2: {
      _L$3: {
        if (best === undefined) {
          _tmp$6 = "none";
        } else {
          const _Some = best;
          const _m = _Some;
          m = _m;
          break _L$3;
        }
        break _L$2;
      }
      _tmp$6 = _M0MP211localreview7xiangqi4Move10coordinate(m);
    }
    return `FEN: ${_tmp$2}\nLegal moves: ${_tmp$3}\n${_tmp$5}\nBest (depth 2): ${_tmp$6}`;
  }
  const e = _try_err;
  return `ERROR: ${_M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRP211localreview7xiangqi10ChessErrorE(e))}`;
}
function _M0FP411localreview7xiangqi3cmd3web8position(command) {
  let _try_err;
  _L: {
    const e = _M0MP211localreview7xiangqi6Engine3new();
    const _bind = _M0MP211localreview7xiangqi6Engine7command(e, command);
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _ok._0;
    } else {
      const _err = _bind;
      _try_err = _err._0;
      break _L;
    }
    return _M0MP211localreview7xiangqi6Engine3fen(e);
  }
  const e = _try_err;
  return `ERROR: ${_M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRP211localreview7xiangqi10ChessErrorE(e))}`;
}
function _M0FP411localreview7xiangqi3cmd3web5legal(fen) {
  let _try_err;
  _L: {
    const _bind = _M0FP211localreview7xiangqi10parse__fen(fen);
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      const _err = _bind;
      _try_err = _err._0;
      break _L;
    }
    const _tmp$2 = _M0MPC15array5Array3mapGRP211localreview7xiangqi4MovesE(_M0MP211localreview7xiangqi5Board12legal__moves(_tmp), (m) => _M0MP211localreview7xiangqi4Move10coordinate(m));
    const _bind$2 = " ";
    return _M0MPC15array5Array4joinGsE(_tmp$2, new _M0TPC16string10StringView(_bind$2, 0, _bind$2.length));
  }
  const e = _try_err;
  return `ERROR: ${_M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRP211localreview7xiangqi10ChessErrorE(e))}`;
}
function _M0FP411localreview7xiangqi3cmd3web5perft(fen, depth) {
  let _try_err;
  _L: {
    const _bind = _M0FP211localreview7xiangqi10parse__fen(fen);
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      const _err = _bind;
      _try_err = _err._0;
      break _L;
    }
    const _bind$2 = _M0MP211localreview7xiangqi5Board5perft(_tmp, depth);
    let _tmp$2;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      _tmp$2 = _ok._0;
    } else {
      const _err = _bind$2;
      _try_err = _err._0;
      break _L;
    }
    return _M0MPC13int3Int18to__string_2einner(_tmp$2, 10);
  }
  const e = _try_err;
  return `ERROR: ${_M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRP211localreview7xiangqi10ChessErrorE(e))}`;
}
function _M0FP411localreview7xiangqi3cmd3web4info(result) {
  const magnitude = result.score < 0 ? -result.score | 0 : result.score;
  let score;
  if (magnitude >= 999000) {
    if (2 === 0) {
      $panic();
    }
    const distance = ((1000000 - magnitude | 0) + 1 | 0) / 2 | 0;
    score = `mate ${_M0MPC13int3Int18to__string_2einner(result.score < 0 ? -distance | 0 : distance, 10)}`;
  } else {
    if (60 === 0) {
      $panic();
    }
    score = `cp ${_M0MPC13int3Int18to__string_2einner((Math.imul(result.score, 100) | 0) / 60 | 0, 10)}`;
  }
  const _tmp = _M0MPC13int3Int18to__string_2einner(result.depth, 10);
  const _tmp$2 = _M0MPC13int3Int18to__string_2einner(result.nodes, 10);
  let _tmp$3;
  let m;
  _L: {
    _L$2: {
      const _bind = result.best;
      if (_bind === undefined) {
        _tmp$3 = "";
      } else {
        const _Some = _bind;
        const _m = _Some;
        m = _m;
        break _L$2;
      }
      break _L;
    }
    _tmp$3 = ` pv ${_M0MP211localreview7xiangqi4Move10coordinate(m)}`;
  }
  return `info depth ${_tmp} score ${score} nodes ${_tmp$2}${_tmp$3}`;
}
function _M0FP411localreview7xiangqi3cmd3web16search__position(fen, depth, nodes, should_stop, on_info) {
  let _try_err;
  _L: {
    const _bind = _M0FP211localreview7xiangqi10parse__fen(fen);
    let _tmp;
    if (_bind.$tag === 1) {
      const _ok = _bind;
      _tmp = _ok._0;
    } else {
      const _err = _bind;
      _try_err = _err._0;
      break _L;
    }
    const _bind$2 = _M0MP211localreview7xiangqi5Board14search_2einner(_tmp, depth, nodes, should_stop, (r) => {
      on_info(_M0FP411localreview7xiangqi3cmd3web4info(r));
    });
    let result;
    if (_bind$2.$tag === 1) {
      const _ok = _bind$2;
      result = _ok._0;
    } else {
      const _err = _bind$2;
      _try_err = _err._0;
      break _L;
    }
    if (result.stopped || result.depth === 0) {
      on_info(_M0FP411localreview7xiangqi3cmd3web4info(result));
    }
    let _tmp$2;
    let m;
    _L$2: {
      _L$3: {
        const _bind$3 = result.best;
        if (_bind$3 === undefined) {
          _tmp$2 = "0000";
        } else {
          const _Some = _bind$3;
          const _m = _Some;
          m = _m;
          break _L$3;
        }
        break _L$2;
      }
      _tmp$2 = _M0MP211localreview7xiangqi4Move10coordinate(m);
    }
    return `bestmove ${_tmp$2}`;
  }
  const e = _try_err;
  return `ERROR: ${_M0IP016_24default__implPB4Show10to__stringGRPC15debug4ReprE(_M0MPC15debug4Repr4ReprGRP211localreview7xiangqi10ChessErrorE(e))}`;
}
(() => {
})();
export { _M0FP411localreview7xiangqi3cmd3web3run as run, _M0FP411localreview7xiangqi3cmd3web8position as position, _M0FP411localreview7xiangqi3cmd3web5legal as legal, _M0FP411localreview7xiangqi3cmd3web5perft as perft, _M0FP411localreview7xiangqi3cmd3web16search__position as search_position }
//# sourceMappingURL=web.js.map
