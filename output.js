//Wed Jun 04 2025 12:11:44 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
;
const $ = new Env('\u9c7c\u4e50\u89c6\u9891');
const users = process.env.ylsp && process.env.ylsp.split('\x26') || [];
var CryptoJS = CryptoJS || function (Math, Oଠﾟ) {
  var ₒₒⲟ;
  if (typeof window !== '\x75\x6E\x64\x65\x66\x69\x6E\x65\x64' && window.crypto) {
    ₒₒⲟ = window.crypto;
  }
  if (typeof self !== '\x75\x6E\x64\x65\x66\x69\x6E\x65\x64' && self.crypto) {
    ₒₒⲟ = self.crypto;
  }
  if (typeof globalThis !== '\x75\x6E\x64\x65\x66\x69\x6E\x65\x64' && globalThis.crypto) {
    ₒₒⲟ = globalThis.crypto;
  }
  if (!ₒₒⲟ && typeof window !== '\x75\x6E\x64\x65\x66\x69\x6E\x65\x64' && window.msCrypto) {
    ₒₒⲟ = window.msCrypto;
  }
  if (!ₒₒⲟ && typeof global !== '\x75\x6E\x64\x65\x66\x69\x6E\x65\x64' && global.crypto) {
    ₒₒⲟ = global.crypto;
  }
  if (!ₒₒⲟ && typeof require === '\x66\x75\x6E\x63\x74\x69\x6F\x6E') {
    try {
      ₒₒⲟ = require('\x63\x72\x79\x70\x74\x6F');
    } catch (ﾟ0ᵒ) {}
  }
  var ﾷﾷ = function () {
    if (ₒₒⲟ) {
      if (typeof ₒₒⲟ.getRandomValues === '\x66\x75\x6E\x63\x74\x69\x6F\x6E') {
        try {
          return ₒₒⲟ.getRandomValues(new Uint32Array(1))[0];
        } catch (ﾟ0ᵒ) {}
      }
      if (typeof ₒₒⲟ.randomBytes === '\x66\x75\x6E\x63\x74\x69\x6F\x6E') {
        try {
          return ₒₒⲟ.randomBytes(4).readInt32LE();
        } catch (ﾟ0ᵒ) {}
      }
    }
    throw new Error('\x4E\x61\x74\x69\x76\x65\x20\x63\x72\x79\x70\x74\x6F\x20\x6D\x6F\x64\x75\x6C\x65\x20\x63\x6F\x75\x6C\x64\x20\x6E\x6F\x74\x20\x62\x65\x20\x75\x73\x65\x64\x20\x74\x6F\x20\x67\x65\x74\x20\x73\x65\x63\x75\x72\x65\x20\x72\x61\x6E\x64\x6F\x6D\x20\x6E\x75\x6D\x62\x65\x72\x2E');
  };
  var ᣞㅇ = Object.create || function () {
    function ㅇΟ() {}
    return function (ᵒꙨᐤ) {
      var ᵒᐤﾟ;
      ㅇΟ.prototype = ᵒꙨᐤ;
      ᵒᐤﾟ = new ㅇΟ();
      ㅇΟ.prototype = null;
      return ᵒᐤﾟ;
    };
  }();
  var ⲟΟଠ = {};
  var ﾷₒᴑ = ⲟΟଠ.lib = {};
  var ᣞOo = ﾷₒᴑ.Base = function () {
    return {
      extend: function (ᣞﾟo) {
        var ᵒᐤﾟ = ᣞㅇ(this);
        if (ᣞﾟo) {
          ᵒᐤﾟ.mixIn(ᣞﾟo);
        }
        if (!ᵒᐤﾟ.hasOwnProperty('\x69\x6E\x69\x74') || this.init === ᵒᐤﾟ.init) {
          ᵒᐤﾟ.init = function () {
            ᵒᐤﾟ.$super.init.apply(this, arguments);
          };
        }
        ᵒᐤﾟ.init.prototype = ᵒᐤﾟ;
        ᵒᐤﾟ.$super = this;
        return ᵒᐤﾟ;
      },
      create: function () {
        var ᵒⲟᣞ = this.extend();
        ᵒⲟᣞ.init.apply(ᵒⲟᣞ, arguments);
        return ᵒⲟᣞ;
      },
      init: function () {},
      mixIn: function (O) {
        for (var ᣞﾟﾟ in O) {
          if (O.hasOwnProperty(ᣞﾟﾟ)) {
            this[ᣞﾟﾟ] = O[ᣞﾟﾟ];
          }
        }
        if (O.hasOwnProperty('\x74\x6F\x53\x74\x72\x69\x6E\x67')) {
          this.toString = O.toString;
        }
      },
      clone: function () {
        return this.init.prototype.extend(this);
      }
    };
  }();
  var ᵒﾷ0 = ﾷₒᴑ.WordArray = ᣞOo.extend({
    init: function (ᵒㅇᴑ, ᵒㅇﾷ) {
      ᵒㅇᴑ = this.words = ᵒㅇᴑ || [];
      if (ᵒㅇﾷ != Oଠﾟ) {
        this.sigBytes = ᵒㅇﾷ;
      } else {
        this.sigBytes = ᵒㅇᴑ.length * 4;
      }
    },
    toString: function (ᵒᣞⲟ) {
      return (ᵒᣞⲟ || ᣞﾟㅇ).stringify(this);
    },
    concat: function (Ꙩﾷ) {
      var ᣞᐤΟ = this.words;
      var ᣞΟᣞ = Ꙩﾷ.words;
      var Ꙩㅇ = this.sigBytes;
      var ﾷଠꓳ = Ꙩﾷ.sigBytes;
      this.clamp();
      if (Ꙩㅇ % 4) {
        for (var ﾷ0ﾷ = 0; ﾷ0ﾷ < ﾷଠꓳ; ﾷ0ﾷ++) {
          var ﾷꓳㅇ = ᣞΟᣞ[ﾷ0ﾷ >>> 2] >>> 24 - ﾷ0ﾷ % 4 * 8 & 0xff;
          ᣞᐤΟ[Ꙩㅇ + ﾷ0ﾷ >>> 2] |= ﾷꓳㅇ << 24 - (Ꙩㅇ + ﾷ0ﾷ) % 4 * 8;
        }
      } else {
        for (var ﾷﾟㅇ = 0; ﾷﾟㅇ < ﾷଠꓳ; ﾷﾟㅇ += 4) {
          ᣞᐤΟ[Ꙩㅇ + ﾷﾟㅇ >>> 2] = ᣞΟᣞ[ﾷﾟㅇ >>> 2];
        }
      }
      this.sigBytes += ﾷଠꓳ;
      return this;
    },
    clamp: function () {
      var ᵒㅇᴑ = this.words;
      var ᵒㅇﾷ = this.sigBytes;
      ᵒㅇᴑ[ᵒㅇﾷ >>> 2] &= 0xffffffff << 32 - ᵒㅇﾷ % 4 * 8;
      ᵒㅇᴑ.length = Math.ceil(ᵒㅇﾷ / 4);
    },
    clone: function () {
      var ﾷᐤᵒ = ᣞOo.clone.call(this);
      ﾷᐤᵒ.words = this.words.slice(0);
      return ﾷᐤᵒ;
    },
    random: function (ﾷᵒᣞ) {
      var ᵒㅇᴑ = [];
      var ᵒⲟᴑ = function (ᣞᐤﾟ) {
        var ᣞᐤﾟ = ᣞᐤﾟ;
        var ﾷﾟᐤ = 0x3ade68b1;
        var ﾷ0ꓳ = 0xffffffff;
        return function () {
          ﾷﾟᐤ = 0x9069 * (ﾷﾟᐤ & 0xFFFF) + (ﾷﾟᐤ >> 0x10) & ﾷ0ꓳ;
          ᣞᐤﾟ = 0x4650 * (ᣞᐤﾟ & 0xFFFF) + (ᣞᐤﾟ >> 0x10) & ﾷ0ꓳ;
          var ﾷOₒ = (ﾷﾟᐤ << 0x10) + ᣞᐤﾟ & ﾷ0ꓳ;
          ﾷOₒ /= 0x100000000;
          ﾷOₒ += 0.5;
          return ﾷOₒ * (Math.random() > .5 ? 1 : -1);
        };
      };
      var ꓳﾷ = false,
        ᵒⲟo;
      try {
        ﾷﾷ();
        ꓳﾷ = true;
      } catch (ﾟ0ᵒ) {}
      for (var ﾷ0ﾷ = 0, ﾷ0o; ﾷ0ﾷ < ﾷᵒᣞ; ﾷ0ﾷ += 4) {
        if (!ꓳﾷ) {
          ᵒⲟo = ᵒⲟᴑ((ﾷ0o || Math.random()) * 0x100000000);
          ﾷ0o = ᵒⲟo() * 0x3ade67b7;
          ᵒㅇᴑ.push(ᵒⲟo() * 0x100000000 | 0);
          continue;
        }
        ᵒㅇᴑ.push(ﾷﾷ());
      }
      return new ᵒﾷ0.init(ᵒㅇᴑ, ﾷᵒᣞ);
    }
  });
  var ᣞﾟᵒ = ⲟΟଠ.enc = {};
  var ᣞﾟㅇ = ᣞﾟᵒ.Hex = {
    stringify: function (Ꙩﾷ) {
      var ᵒㅇᴑ = Ꙩﾷ.words;
      var ᵒㅇﾷ = Ꙩﾷ.sigBytes;
      var ᣞΟ0 = [];
      for (var ﾷ0ﾷ = 0; ﾷ0ﾷ < ᵒㅇﾷ; ﾷ0ﾷ++) {
        var ⲟᴑ = ᵒㅇᴑ[ﾷ0ﾷ >>> 2] >>> 24 - ﾷ0ﾷ % 4 * 8 & 0xff;
        ᣞΟ0.push((ⲟᴑ >>> 4).toString(16));
        ᣞΟ0.push((ⲟᴑ & 0x0f).toString(16));
      }
      return ᣞΟ0.join('');
    },
    parse: function (ᵒﾷᴑ) {
      var ᴑₒ = ᵒﾷᴑ.length;
      var ᵒㅇᴑ = [];
      for (var ﾷ0ﾷ = 0; ﾷ0ﾷ < ᴑₒ; ﾷ0ﾷ += 2) {
        ᵒㅇᴑ[ﾷ0ﾷ >>> 3] |= parseInt(ᵒﾷᴑ.substr(ﾷ0ﾷ, 2), 16) << 24 - ﾷ0ﾷ % 8 * 4;
      }
      return new ᵒﾷ0.init(ᵒㅇᴑ, ᴑₒ / 2);
    }
  };
  var ᣞᐤᣞ = ᣞﾟᵒ.Latin1 = {
    stringify: function (Ꙩﾷ) {
      var ᵒㅇᴑ = Ꙩﾷ.words;
      var ᵒㅇﾷ = Ꙩﾷ.sigBytes;
      var ᣞΟₒ = [];
      for (var ﾷ0ﾷ = 0; ﾷ0ﾷ < ᵒㅇﾷ; ﾷ0ﾷ++) {
        var ⲟᴑ = ᵒㅇᴑ[ﾷ0ﾷ >>> 2] >>> 24 - ﾷ0ﾷ % 4 * 8 & 0xff;
        ᣞΟₒ.push(String.fromCharCode(ⲟᴑ));
      }
      return ᣞΟₒ.join('');
    },
    parse: function (ﾷꙨଠ) {
      var ₒⲟ = ﾷꙨଠ.length;
      var ᵒㅇᴑ = [];
      for (var ﾷ0ﾷ = 0; ﾷ0ﾷ < ₒⲟ; ﾷ0ﾷ++) {
        ᵒㅇᴑ[ﾷ0ﾷ >>> 2] |= (ﾷꙨଠ.charCodeAt(ﾷ0ﾷ) & 0xff) << 24 - ﾷ0ﾷ % 4 * 8;
      }
      return new ᵒﾷ0.init(ᵒㅇᴑ, ₒⲟ);
    }
  };
  var ᴑᐤ = ᣞﾟᵒ.Utf8 = {
    stringify: function (Ꙩﾷ) {
      try {
        return decodeURIComponent(escape(ᣞᐤᣞ.stringify(Ꙩﾷ)));
      } catch (ᵒㅇଠ) {
        throw new Error('\x4D\x61\x6C\x66\x6F\x72\x6D\x65\x64\x20\x55\x54\x46\x2D\x38\x20\x64\x61\x74\x61');
      }
    },
    parse: function (ᵒᣞ0) {
      return ᣞᐤᣞ.parse(unescape(encodeURIComponent(ᵒᣞ0)));
    }
  };
  var ᵒΟᵒ = ﾷₒᴑ.BufferedBlockAlgorithm = ᣞOo.extend({
    reset: function () {
      this._data = new ᵒﾷ0.init();
      this._nDataBytes = 0;
    },
    _append: function (ᵒΟଠ) {
      if (typeof ᵒΟଠ == '\x73\x74\x72\x69\x6E\x67') {
        ᵒΟଠ = ᴑᐤ.parse(ᵒΟଠ);
      }
      this._data.concat(ᵒΟଠ);
      this._nDataBytes += ᵒΟଠ.sigBytes;
    },
    _process: function (oଠ) {
      var ᵒᣞₒ;
      var ᵒΟଠ = this._data;
      var ᵒΟꙨ = ᵒΟଠ.words;
      var Οᵒ = ᵒΟଠ.sigBytes;
      var ᣞﾟﾷ = this.blockSize;
      var ᣞꙨ = ᣞﾟﾷ * 4;
      var ᵒᣞﾟ = Οᵒ / ᣞꙨ;
      if (oଠ) {
        ᵒᣞﾟ = Math.ceil(ᵒᣞﾟ);
      } else {
        ᵒᣞﾟ = Math.max((ᵒᣞﾟ | 0) - this._minBufferSize, 0);
      }
      var ﾷଠⲟ = ᵒᣞﾟ * ᣞﾟﾷ;
      var ㅇₒ = Math.min(ﾷଠⲟ * 4, Οᵒ);
      if (ﾷଠⲟ) {
        for (var ᣞﾟⲟ = 0; ᣞﾟⲟ < ﾷଠⲟ; ᣞﾟⲟ += ᣞﾟﾷ) {
          this._doProcessBlock(ᵒΟꙨ, ᣞﾟⲟ);
        }
        ᵒᣞₒ = ᵒΟꙨ.splice(0, ﾷଠⲟ);
        ᵒΟଠ.sigBytes -= ㅇₒ;
      }
      return new ᵒﾷ0.init(ᵒᣞₒ, ㅇₒ);
    },
    clone: function () {
      var ﾷᐤᵒ = ᣞOo.clone.call(this);
      ﾷᐤᵒ._data = this._data.clone();
      return ﾷᐤᵒ;
    },
    _minBufferSize: 0
  });
  var ﾷ0 = ﾷₒᴑ.Hasher = ᵒΟᵒ.extend({
    cfg: ᣞOo.extend(),
    init: function (ᣞᐤꙨ) {
      this.cfg = this.cfg.extend(ᣞᐤꙨ);
      this.reset();
    },
    reset: function () {
      ᵒΟᵒ.reset.call(this);
      this._doReset();
    },
    update: function (oꙨ) {
      this._append(oꙨ);
      this._process();
      return this;
    },
    finalize: function (oꙨ) {
      if (oꙨ) {
        this._append(oꙨ);
      }
      var ᵒﾟꙨ = this._doFinalize();
      return ᵒﾟꙨ;
    },
    blockSize: 16,
    _createHelper: function (ᵒᣞᐤ) {
      return function (ᣞ0ଠ, ᣞᐤꙨ) {
        return new ᵒᣞᐤ.init(ᣞᐤꙨ).finalize(ᣞ0ଠ);
      };
    },
    _createHmacHelper: function (ᵒᣞᐤ) {
      return function (ᣞ0ଠ, ᵒᣞᣞ) {
        return new ᣞOᐤ.HMAC.init(ᵒᣞᐤ, ᵒᣞᣞ).finalize(ᣞ0ଠ);
      };
    }
  });
  var ᣞOᐤ = ⲟΟଠ.algo = {};
  return ⲟΟଠ;
}(Math);
(function () {
  var ⲟΟଠ = CryptoJS;
  var ﾷₒᴑ = ⲟΟଠ.lib;
  var ᵒﾷ0 = ﾷₒᴑ.WordArray;
  var ᣞﾟᵒ = ⲟΟଠ.enc;
  var ﾷꓳO = ᣞﾟᵒ.Base64 = {
    stringify: function (Ꙩﾷ) {
      var ᵒㅇᴑ = Ꙩﾷ.words;
      var ᵒㅇﾷ = Ꙩﾷ.sigBytes;
      var ﾷ0ଠ = this._map;
      Ꙩﾷ.clamp();
      var ᣞꙨᐤ = [];
      for (var ﾷ0ﾷ = 0; ﾷ0ﾷ < ᵒㅇﾷ; ﾷ0ﾷ += 3) {
        var ﾷΟO = ᵒㅇᴑ[ﾷ0ﾷ >>> 2] >>> 24 - ﾷ0ﾷ % 4 * 8 & 0xff;
        var ᣞᵒㅇ = ᵒㅇᴑ[ﾷ0ﾷ + 1 >>> 2] >>> 24 - (ﾷ0ﾷ + 1) % 4 * 8 & 0xff;
        var ᵒଠo = ᵒㅇᴑ[ﾷ0ﾷ + 2 >>> 2] >>> 24 - (ﾷ0ﾷ + 2) % 4 * 8 & 0xff;
        var ᣞOO = ﾷΟO << 16 | ᣞᵒㅇ << 8 | ᵒଠo;
        for (var ﾷﾟㅇ = 0; ﾷﾟㅇ < 4 && ﾷ0ﾷ + ﾷﾟㅇ * 0.75 < ᵒㅇﾷ; ﾷﾟㅇ++) {
          ᣞꙨᐤ.push(ﾷ0ଠ.charAt(ᣞOO >>> 6 * (3 - ﾷﾟㅇ) & 0x3f));
        }
      }
      var ﾷꓳଠ = ﾷ0ଠ.charAt(64);
      if (ﾷꓳଠ) {
        while (ᣞꙨᐤ.length % 4) {
          ᣞꙨᐤ.push(ﾷꓳଠ);
        }
      }
      return ᣞꙨᐤ.join('');
    },
    parse: function (ﾷΟⲟ) {
      var ᣞଠO = ﾷΟⲟ.length;
      var ﾷ0ଠ = this._map;
      var ᵒᣞꓳ = this._reverseMap;
      if (!ᵒᣞꓳ) {
        ᵒᣞꓳ = this._reverseMap = [];
        for (var ﾷﾟㅇ = 0; ﾷﾟㅇ < ﾷ0ଠ.length; ﾷﾟㅇ++) {
          ᵒᣞꓳ[ﾷ0ଠ.charCodeAt(ﾷﾟㅇ)] = ﾷﾟㅇ;
        }
      }
      var ﾷꓳଠ = ﾷ0ଠ.charAt(64);
      if (ﾷꓳଠ) {
        var ﾷᴑﾟ = ﾷΟⲟ.indexOf(ﾷꓳଠ);
        if (ﾷᴑﾟ !== -1) {
          ᣞଠO = ﾷᴑﾟ;
        }
      }
      return ᣞₒΟ(ﾷΟⲟ, ᣞଠO, ᵒᣞꓳ);
    },
    _map: '\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4A\x4B\x4C\x4D\x4E\x4F\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5A\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6A\x6B\x6C\x6D\x6E\x6F\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7A\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2B\x2F\x3D'
  };
  function ᣞₒΟ(ﾷΟⲟ, ᣞଠO, ᵒᣞꓳ) {
    var ᵒㅇᴑ = [];
    var ﾷᵒᣞ = 0;
    for (var ﾷ0ﾷ = 0; ﾷ0ﾷ < ᣞଠO; ﾷ0ﾷ++) {
      if (ﾷ0ﾷ % 4) {
        var Oﾟ = ᵒᣞꓳ[ﾷΟⲟ.charCodeAt(ﾷ0ﾷ - 1)] << ﾷ0ﾷ % 4 * 2;
        var ᣞᵒO = ᵒᣞꓳ[ﾷΟⲟ.charCodeAt(ﾷ0ﾷ)] >>> 6 - ﾷ0ﾷ % 4 * 2;
        ᵒㅇᴑ[ﾷᵒᣞ >>> 2] |= (Oﾟ | ᣞᵒO) << 24 - ﾷᵒᣞ % 4 * 8;
        ﾷᵒᣞ++;
      }
    }
    return ᵒﾷ0.create(ᵒㅇᴑ, ﾷᵒᣞ);
  }
})();
CryptoJS.lib.Cipher || function (Oଠﾟ) {
  var ⲟΟଠ = CryptoJS;
  var ﾷₒᴑ = ⲟΟଠ.lib;
  var ᣞOo = ﾷₒᴑ.Base;
  var ᵒﾷ0 = ﾷₒᴑ.WordArray;
  var ᵒΟᵒ = ﾷₒᴑ.BufferedBlockAlgorithm;
  var ᣞﾟᵒ = ⲟΟଠ.enc;
  var ᴑᐤ = ᣞﾟᵒ.Utf8;
  var ﾷꓳO = ᣞﾟᵒ.Base64;
  var ᣞOᐤ = ⲟΟଠ.algo;
  var ㅇꓳ = ᣞOᐤ.EvpKDF;
  var ﾷꓳΟ = ﾷₒᴑ.Cipher = ᵒΟᵒ.extend({
    cfg: ᣞOo.extend(),
    createEncryptor: function (ᵒᣞᣞ, ᣞᐤꙨ) {
      return this.create(this._ENC_XFORM_MODE, ᵒᣞᣞ, ᣞᐤꙨ);
    },
    createDecryptor: function (ᵒᣞᣞ, ᣞᐤꙨ) {
      return this.create(this._DEC_XFORM_MODE, ᵒᣞᣞ, ᣞᐤꙨ);
    },
    init: function (ᣞΟo, ᵒᣞᣞ, ᣞᐤꙨ) {
      this.cfg = this.cfg.extend(ᣞᐤꙨ);
      this._xformMode = ᣞΟo;
      this._key = ᵒᣞᣞ;
      this.reset();
    },
    reset: function () {
      ᵒΟᵒ.reset.call(this);
      this._doReset();
    },
    process: function (ᣞᐤ) {
      this._append(ᣞᐤ);
      return this._process();
    },
    finalize: function (ᣞᐤ) {
      if (ᣞᐤ) {
        this._append(ᣞᐤ);
      }
      var ᣞꙨⲟ = this._doFinalize();
      return ᣞꙨⲟ;
    },
    keySize: 4,
    ivSize: 4,
    _ENC_XFORM_MODE: 1,
    _DEC_XFORM_MODE: 2,
    _createHelper: function () {
      function ﾷᴑᵒ(ᵒᣞᣞ) {
        if (typeof ᵒᣞᣞ == '\x73\x74\x72\x69\x6E\x67') {
          return ﾷﾟꓳ;
        } else {
          return ₒᣞᴑ;
        }
      }
      return function (ᵒଠꙨ) {
        return {
          encrypt: function (ᣞ0ଠ, ᵒᣞᣞ, ᣞᐤꙨ) {
            return ﾷᴑᵒ(ᵒᣞᣞ).encrypt(ᵒଠꙨ, ᣞ0ଠ, ᵒᣞᣞ, ᣞᐤꙨ);
          },
          decrypt: function (ﾷﾟₒ, ᵒᣞᣞ, ᣞᐤꙨ) {
            return ﾷᴑᵒ(ᵒᣞᣞ).decrypt(ᵒଠꙨ, ﾷﾟₒ, ᵒᣞᣞ, ᣞᐤꙨ);
          }
        };
      };
    }()
  });
  var ᣞﾟꙨ = ﾷₒᴑ.StreamCipher = ﾷꓳΟ.extend({
    _doFinalize: function () {
      var ﾷᣞO = this._process(true);
      return ﾷᣞO;
    },
    blockSize: 1
  });
  var ₒΟଠ = ⲟΟଠ.mode = {};
  var ᣞᵒꙨ = ﾷₒᴑ.BlockCipherMode = ᣞOo.extend({
    createEncryptor: function (ᵒଠꙨ, ₒOₒ) {
      return this.Encryptor.create(ᵒଠꙨ, ₒOₒ);
    },
    createDecryptor: function (ᵒଠꙨ, ₒOₒ) {
      return this.Decryptor.create(ᵒଠꙨ, ₒOₒ);
    },
    init: function (ᵒଠꙨ, ₒOₒ) {
      this._cipher = ᵒଠꙨ;
      this._iv = ₒOₒ;
    }
  });
  var ₒㅇ = ₒΟଠ.CBC = function () {
    var ₒㅇ = ᣞᵒꙨ.extend();
    ₒㅇ.Encryptor = ₒㅇ.extend({
      processBlock: function (ᵒㅇᴑ, ᣞﾟⲟ) {
        var ᵒଠꙨ = this._cipher;
        var ᣞﾟﾷ = ᵒଠꙨ.blockSize;
        ﾷₒꓳ.call(this, ᵒㅇᴑ, ᣞﾟⲟ, ᣞﾟﾷ);
        ᵒଠꙨ.encryptBlock(ᵒㅇᴑ, ᣞﾟⲟ);
        this._prevBlock = ᵒㅇᴑ.slice(ᣞﾟⲟ, ᣞﾟⲟ + ᣞﾟﾷ);
      }
    });
    ₒㅇ.Decryptor = ₒㅇ.extend({
      processBlock: function (ᵒㅇᴑ, ᣞﾟⲟ) {
        var ᵒଠꙨ = this._cipher;
        var ᣞﾟﾷ = ᵒଠꙨ.blockSize;
        var ﾷㅇଠ = ᵒㅇᴑ.slice(ᣞﾟⲟ, ᣞﾟⲟ + ᣞﾟﾷ);
        ᵒଠꙨ.decryptBlock(ᵒㅇᴑ, ᣞﾟⲟ);
        ﾷₒꓳ.call(this, ᵒㅇᴑ, ᣞﾟⲟ, ᣞﾟﾷ);
        this._prevBlock = ﾷㅇଠ;
      }
    });
    function ﾷₒꓳ(ᵒㅇᴑ, ᣞﾟⲟ, ᣞﾟﾷ) {
      var ㅇᣞ;
      var ₒOₒ = this._iv;
      if (ₒOₒ) {
        ㅇᣞ = ₒOₒ;
        this._iv = Oଠﾟ;
      } else {
        ㅇᣞ = this._prevBlock;
      }
      for (var ﾷ0ﾷ = 0; ﾷ0ﾷ < ᣞﾟﾷ; ﾷ0ﾷ++) {
        ᵒㅇᴑ[ᣞﾟⲟ + ﾷ0ﾷ] ^= ㅇᣞ[ﾷ0ﾷ];
      }
    }
    return ₒㅇ;
  }();
  var ᵒᣞO = ⲟΟଠ.pad = {};
  var ﾷꓳᣞ = ᵒᣞO.Pkcs7 = {
    pad: function (ᵒΟଠ, ᣞﾟﾷ) {
      var ᣞꙨ = ᣞﾟﾷ * 4;
      var ﾷﾷଠ = ᣞꙨ - ᵒΟଠ.sigBytes % ᣞꙨ;
      var ᣞㅇᣞ = ﾷﾷଠ << 24 | ﾷﾷଠ << 16 | ﾷﾷଠ << 8 | ﾷﾷଠ;
      var ଠꙨ = [];
      for (var ﾷ0ﾷ = 0; ﾷ0ﾷ < ﾷﾷଠ; ﾷ0ﾷ += 4) {
        ଠꙨ.push(ᣞㅇᣞ);
      }
      var Ꙩﾷﾷ = ᵒﾷ0.create(ଠꙨ, ﾷﾷଠ);
      ᵒΟଠ.concat(Ꙩﾷﾷ);
    },
    unpad: function (ᵒΟଠ) {
      var ﾷﾷଠ = ᵒΟଠ.words[ᵒΟଠ.sigBytes - 1 >>> 2] & 0xff;
      ᵒΟଠ.sigBytes -= ﾷﾷଠ;
    }
  };
  var ﾷﾷΟ = ﾷₒᴑ.BlockCipher = ﾷꓳΟ.extend({
    cfg: ﾷꓳΟ.cfg.extend({
      mode: ₒㅇ,
      padding: ﾷꓳᣞ
    }),
    reset: function () {
      var ꙨOo;
      ﾷꓳΟ.reset.call(this);
      var ᣞᐤꙨ = this.cfg;
      var ₒOₒ = ᣞᐤꙨ.iv;
      var ﾷₒ = ᣞᐤꙨ.mode;
      if (this._xformMode == this._ENC_XFORM_MODE) {
        ꙨOo = ﾷₒ.createEncryptor;
      } else {
        ꙨOo = ﾷₒ.createDecryptor;
        this._minBufferSize = 1;
      }
      if (this._mode && this._mode.__creator == ꙨOo) {
        this._mode.init(this, ₒOₒ && ₒOₒ.words);
      } else {
        this._mode = ꙨOo.call(ﾷₒ, this, ₒOₒ && ₒOₒ.words);
        this._mode.__creator = ꙨOo;
      }
    },
    _doProcessBlock: function (ᵒㅇᴑ, ᣞﾟⲟ) {
      this._mode.processBlock(ᵒㅇᴑ, ᣞﾟⲟ);
    },
    _doFinalize: function () {
      var ﾷᣞO;
      var Ꙩﾷﾷ = this.cfg.padding;
      if (this._xformMode == this._ENC_XFORM_MODE) {
        Ꙩﾷﾷ.pad(this._data, this.blockSize);
        ﾷᣞO = this._process(true);
      } else {
        ﾷᣞO = this._process(true);
        Ꙩﾷﾷ.unpad(ﾷᣞO);
      }
      return ﾷᣞO;
    },
    blockSize: 4
  });
  var ᣞᴑᴑ = ﾷₒᴑ.CipherParams = ᣞOo.extend({
    init: function (ﾷᴑﾷ) {
      this.mixIn(ﾷᴑﾷ);
    },
    toString: function (ꓳﾟ) {
      return (ꓳﾟ || this.formatter).stringify(this);
    }
  });
  var ꓳ0ᵒ = ⲟΟଠ.format = {};
  var ﾷᵒ0 = ꓳ0ᵒ.OpenSSL = {
    stringify: function (ﾷᴑﾷ) {
      var Ꙩﾷ;
      var ﾷﾟₒ = ﾷᴑﾷ.ciphertext;
      var ᣞⲟᣞ = ﾷᴑﾷ.salt;
      if (ᣞⲟᣞ) {
        Ꙩﾷ = ᵒﾷ0.create([0x53616c74, 0x65645f5f]).concat(ᣞⲟᣞ).concat(ﾷﾟₒ);
      } else {
        Ꙩﾷ = ﾷﾟₒ;
      }
      return Ꙩﾷ.toString(ﾷꓳO);
    },
    parse: function (OᵒꙨ) {
      var ᣞⲟᣞ;
      var ﾷﾟₒ = ﾷꓳO.parse(OᵒꙨ);
      var ᣞꓳΟ = ﾷﾟₒ.words;
      if (ᣞꓳΟ[0] == 0x53616c74 && ᣞꓳΟ[1] == 0x65645f5f) {
        ᣞⲟᣞ = ᵒﾷ0.create(ᣞꓳΟ.slice(2, 4));
        ᣞꓳΟ.splice(0, 4);
        ﾷﾟₒ.sigBytes -= 16;
      }
      return ᣞᴑᴑ.create({
        ciphertext: ﾷﾟₒ,
        salt: ᣞⲟᣞ
      });
    }
  };
  var ₒᣞᴑ = ﾷₒᴑ.SerializableCipher = ᣞOo.extend({
    cfg: ᣞOo.extend({
      format: ﾷᵒ0
    }),
    encrypt: function (ᵒଠꙨ, ᣞ0ଠ, ᵒᣞᣞ, ᣞᐤꙨ) {
      ᣞᐤꙨ = this.cfg.extend(ᣞᐤꙨ);
      var oⲟᐤ = ᵒଠꙨ.createEncryptor(ᵒᣞᣞ, ᣞᐤꙨ);
      var ﾷﾟₒ = oⲟᐤ.finalize(ᣞ0ଠ);
      var ﾷﾷㅇ = oⲟᐤ.cfg;
      return ᣞᴑᴑ.create({
        ciphertext: ﾷﾟₒ,
        key: ᵒᣞᣞ,
        iv: ﾷﾷㅇ.iv,
        algorithm: ᵒଠꙨ,
        mode: ﾷﾷㅇ.mode,
        padding: ﾷﾷㅇ.padding,
        blockSize: ᵒଠꙨ.blockSize,
        formatter: ᣞᐤꙨ.format
      });
    },
    decrypt: function (ᵒଠꙨ, ﾷﾟₒ, ᵒᣞᣞ, ᣞᐤꙨ) {
      ᣞᐤꙨ = this.cfg.extend(ᣞᐤꙨ);
      ﾷﾟₒ = this._parse(ﾷﾟₒ, ᣞᐤꙨ.format);
      var ᣞଠﾷ = ᵒଠꙨ.createDecryptor(ᵒᣞᣞ, ᣞᐤꙨ).finalize(ﾷﾟₒ.ciphertext);
      return ᣞଠﾷ;
    },
    _parse: function (ﾷﾟₒ, ⲟᣞﾷ) {
      if (typeof ﾷﾟₒ == '\x73\x74\x72\x69\x6E\x67') {
        return ⲟᣞﾷ.parse(ﾷﾟₒ, this);
      } else {
        return ﾷﾟₒ;
      }
    }
  });
  var ⲟOO = ⲟΟଠ.kdf = {};
  var ⲟㅇO = ⲟOO.OpenSSL = {
    execute: function (ᵒﾟΟ, ⲟⲟㅇ, ᣞᴑₒ, ᣞⲟᣞ, ᵒᣞᐤ) {
      if (!ᣞⲟᣞ) {
        ᣞⲟᣞ = ᵒﾷ0.random(8);
      }
      if (!ᵒᣞᐤ) {
        var ᵒᣞᣞ = ㅇꓳ.create({
          keySize: ⲟⲟㅇ + ᣞᴑₒ
        }).compute(ᵒﾟΟ, ᣞⲟᣞ);
      } else {
        var ᵒᣞᣞ = ㅇꓳ.create({
          keySize: ⲟⲟㅇ + ᣞᴑₒ,
          hasher: ᵒᣞᐤ
        }).compute(ᵒﾟΟ, ᣞⲟᣞ);
      }
      var ₒOₒ = ᵒﾷ0.create(ᵒᣞᣞ.words.slice(ⲟⲟㅇ), ᣞᴑₒ * 4);
      ᵒᣞᣞ.sigBytes = ⲟⲟㅇ * 4;
      return ᣞᴑᴑ.create({
        key: ᵒᣞᣞ,
        iv: ₒOₒ,
        salt: ᣞⲟᣞ
      });
    }
  };
  var ﾷﾟꓳ = ﾷₒᴑ.PasswordBasedCipher = ₒᣞᴑ.extend({
    cfg: ₒᣞᴑ.cfg.extend({
      kdf: ⲟㅇO
    }),
    encrypt: function (ᵒଠꙨ, ᣞ0ଠ, ᵒﾟΟ, ᣞᐤꙨ) {
      ᣞᐤꙨ = this.cfg.extend(ᣞᐤꙨ);
      var ꓳₒΟ = ᣞᐤꙨ.kdf.execute(ᵒﾟΟ, ᵒଠꙨ.keySize, ᵒଠꙨ.ivSize, ᣞᐤꙨ.salt, ᣞᐤꙨ.hasher);
      ᣞᐤꙨ.iv = ꓳₒΟ.iv;
      var ﾷﾟₒ = ₒᣞᴑ.encrypt.call(this, ᵒଠꙨ, ᣞ0ଠ, ꓳₒΟ.key, ᣞᐤꙨ);
      ﾷﾟₒ.mixIn(ꓳₒΟ);
      return ﾷﾟₒ;
    },
    decrypt: function (ᵒଠꙨ, ﾷﾟₒ, ᵒﾟΟ, ᣞᐤꙨ) {
      ᣞᐤꙨ = this.cfg.extend(ᣞᐤꙨ);
      ﾷﾟₒ = this._parse(ﾷﾟₒ, ᣞᐤꙨ.format);
      var ꓳₒΟ = ᣞᐤꙨ.kdf.execute(ᵒﾟΟ, ᵒଠꙨ.keySize, ᵒଠꙨ.ivSize, ﾷﾟₒ.salt, ᣞᐤꙨ.hasher);
      ᣞᐤꙨ.iv = ꓳₒΟ.iv;
      var ᣞଠﾷ = ₒᣞᴑ.decrypt.call(this, ᵒଠꙨ, ﾷﾟₒ, ꓳₒΟ.key, ᣞᐤꙨ);
      return ᣞଠﾷ;
    }
  });
}();
(function () {
  var ⲟΟଠ = CryptoJS;
  var ﾷₒᴑ = ⲟΟଠ.lib;
  var ﾷﾷΟ = ﾷₒᴑ.BlockCipher;
  var ᣞOᐤ = ⲟΟଠ.algo;
  var ꓳ0ꓳ = [];
  var ﾷଠﾷ = [];
  var ⲟﾷO = [];
  var ⲟΟㅇ = [];
  var ﾷoO = [];
  var ﾷₒꙨ = [];
  var ㅇΟᐤ = [];
  var Oᵒₒ = [];
  var ㅇᴑᣞ = [];
  var Oꓳㅇ = [];
  (function () {
    var ᵒᣞΟ = [];
    for (var ﾷ0ﾷ = 0; ﾷ0ﾷ < 256; ﾷ0ﾷ++) {
      if (ﾷ0ﾷ < 128) {
        ᵒᣞΟ[ﾷ0ﾷ] = ﾷ0ﾷ << 1;
      } else {
        ᵒᣞΟ[ﾷ0ﾷ] = ﾷ0ﾷ << 1 ^ 0x11b;
      }
    }
    var ᵒⲟᐤ = 0;
    var ᣞᴑଠ = 0;
    for (var ﾷ0ﾷ = 0; ﾷ0ﾷ < 256; ﾷ0ﾷ++) {
      var ⲟᐤᐤ = ᣞᴑଠ ^ ᣞᴑଠ << 1 ^ ᣞᴑଠ << 2 ^ ᣞᴑଠ << 3 ^ ᣞᴑଠ << 4;
      ⲟᐤᐤ = ⲟᐤᐤ >>> 8 ^ ⲟᐤᐤ & 0xff ^ 0x63;
      ꓳ0ꓳ[ᵒⲟᐤ] = ⲟᐤᐤ;
      ﾷଠﾷ[ⲟᐤᐤ] = ᵒⲟᐤ;
      var ꙨO0 = ᵒᣞΟ[ᵒⲟᐤ];
      var ꙨOΟ = ᵒᣞΟ[ꙨO0];
      var ₒᴑꙨ = ᵒᣞΟ[ꙨOΟ];
      var Oₒଠ = ᵒᣞΟ[ⲟᐤᐤ] * 0x101 ^ ⲟᐤᐤ * 0x1010100;
      ⲟﾷO[ᵒⲟᐤ] = Oₒଠ << 24 | Oₒଠ >>> 8;
      ⲟΟㅇ[ᵒⲟᐤ] = Oₒଠ << 16 | Oₒଠ >>> 16;
      ﾷoO[ᵒⲟᐤ] = Oₒଠ << 8 | Oₒଠ >>> 24;
      ﾷₒꙨ[ᵒⲟᐤ] = Oₒଠ;
      var Oₒଠ = ₒᴑꙨ * 0x1010101 ^ ꙨOΟ * 0x10001 ^ ꙨO0 * 0x101 ^ ᵒⲟᐤ * 0x1010100;
      ㅇΟᐤ[ⲟᐤᐤ] = Oₒଠ << 24 | Oₒଠ >>> 8;
      Oᵒₒ[ⲟᐤᐤ] = Oₒଠ << 16 | Oₒଠ >>> 16;
      ㅇᴑᣞ[ⲟᐤᐤ] = Oₒଠ << 8 | Oₒଠ >>> 24;
      Oꓳㅇ[ⲟᐤᐤ] = Oₒଠ;
      if (!ᵒⲟᐤ) {
        ᵒⲟᐤ = ᣞᴑଠ = 1;
      } else {
        ᵒⲟᐤ = ꙨO0 ^ ᵒᣞΟ[ᵒᣞΟ[ᵒᣞΟ[ₒᴑꙨ ^ ꙨO0]]];
        ᣞᴑଠ ^= ᵒᣞΟ[ᵒᣞΟ[ᣞᴑଠ]];
      }
    }
  })();
  var ᵒᐤⲟ = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];
  var Oₒꓳ = ᣞOᐤ.AES = ﾷﾷΟ.extend({
    _doReset: function () {
      if (this._nRounds && this._keyPriorReset === this._key) {
        return;
      }
      var ᵒᣞᣞ = this._keyPriorReset = this._key;
      var ㅇₒₒ = ᵒᣞᣞ.words;
      var ⲟⲟㅇ = ᵒᣞᣞ.sigBytes / 4;
      var ㅇₒᵒ = this._nRounds = ⲟⲟㅇ + 6;
      var ꓳﾷᵒ = (ㅇₒᵒ + 1) * 4;
      var ﾷᴑㅇ = this._keySchedule = [];
      for (var ㅇOO = 0; ㅇOO < ꓳﾷᵒ; ㅇOO++) {
        if (ㅇOO < ⲟⲟㅇ) {
          ﾷᴑㅇ[ㅇOO] = ㅇₒₒ[ㅇOO];
        } else {
          var Oₒଠ = ﾷᴑㅇ[ㅇOO - 1];
          if (!(ㅇOO % ⲟⲟㅇ)) {
            Oₒଠ = Oₒଠ << 8 | Oₒଠ >>> 24;
            Oₒଠ = ꓳ0ꓳ[Oₒଠ >>> 24] << 24 | ꓳ0ꓳ[Oₒଠ >>> 16 & 0xff] << 16 | ꓳ0ꓳ[Oₒଠ >>> 8 & 0xff] << 8 | ꓳ0ꓳ[Oₒଠ & 0xff];
            Oₒଠ ^= ᵒᐤⲟ[ㅇOO / ⲟⲟㅇ | 0] << 24;
          } else if (ⲟⲟㅇ > 6 && ㅇOO % ⲟⲟㅇ == 4) {
            Oₒଠ = ꓳ0ꓳ[Oₒଠ >>> 24] << 24 | ꓳ0ꓳ[Oₒଠ >>> 16 & 0xff] << 16 | ꓳ0ꓳ[Oₒଠ >>> 8 & 0xff] << 8 | ꓳ0ꓳ[Oₒଠ & 0xff];
          }
          ﾷᴑㅇ[ㅇOO] = ﾷᴑㅇ[ㅇOO - ⲟⲟㅇ] ^ Oₒଠ;
        }
      }
      var ⲟ0ⲟ = this._invKeySchedule = [];
      for (var ㅇₒﾷ = 0; ㅇₒﾷ < ꓳﾷᵒ; ㅇₒﾷ++) {
        var ㅇOO = ꓳﾷᵒ - ㅇₒﾷ;
        if (ㅇₒﾷ % 4) {
          var Oₒଠ = ﾷᴑㅇ[ㅇOO];
        } else {
          var Oₒଠ = ﾷᴑㅇ[ㅇOO - 4];
        }
        if (ㅇₒﾷ < 4 || ㅇOO <= 4) {
          ⲟ0ⲟ[ㅇₒﾷ] = Oₒଠ;
        } else {
          ⲟ0ⲟ[ㅇₒﾷ] = ㅇΟᐤ[ꓳ0ꓳ[Oₒଠ >>> 24]] ^ Oᵒₒ[ꓳ0ꓳ[Oₒଠ >>> 16 & 0xff]] ^ ㅇᴑᣞ[ꓳ0ꓳ[Oₒଠ >>> 8 & 0xff]] ^ Oꓳㅇ[ꓳ0ꓳ[Oₒଠ & 0xff]];
        }
      }
    },
    encryptBlock: function (ₒΟᴑ, ᣞﾟⲟ) {
      this._doCryptBlock(ₒΟᴑ, ᣞﾟⲟ, this._keySchedule, ⲟﾷO, ⲟΟㅇ, ﾷoO, ﾷₒꙨ, ꓳ0ꓳ);
    },
    decryptBlock: function (ₒΟᴑ, ᣞﾟⲟ) {
      var Oₒଠ = ₒΟᴑ[ᣞﾟⲟ + 1];
      ₒΟᴑ[ᣞﾟⲟ + 1] = ₒΟᴑ[ᣞﾟⲟ + 3];
      ₒΟᴑ[ᣞﾟⲟ + 3] = Oₒଠ;
      this._doCryptBlock(ₒΟᴑ, ᣞﾟⲟ, this._invKeySchedule, ㅇΟᐤ, Oᵒₒ, ㅇᴑᣞ, Oꓳㅇ, ﾷଠﾷ);
      var Oₒଠ = ₒΟᴑ[ᣞﾟⲟ + 1];
      ₒΟᴑ[ᣞﾟⲟ + 1] = ₒΟᴑ[ᣞﾟⲟ + 3];
      ₒΟᴑ[ᣞﾟⲟ + 3] = Oₒଠ;
    },
    _doCryptBlock: function (ₒΟᴑ, ᣞﾟⲟ, ﾷᴑㅇ, ⲟﾷO, ⲟΟㅇ, ﾷoO, ﾷₒꙨ, ꓳ0ꓳ) {
      var ㅇₒᵒ = this._nRounds;
      var oᣞ0 = ₒΟᴑ[ᣞﾟⲟ] ^ ﾷᴑㅇ[0];
      var ꙨₒꙨ = ₒΟᴑ[ᣞﾟⲟ + 1] ^ ﾷᴑㅇ[1];
      var ᵒﾷᐤ = ₒΟᴑ[ᣞﾟⲟ + 2] ^ ﾷᴑㅇ[2];
      var ﾷOㅇ = ₒΟᴑ[ᣞﾟⲟ + 3] ^ ﾷᴑㅇ[3];
      var ㅇOO = 4;
      for (var ㅇᵒO = 1; ㅇᵒO < ㅇₒᵒ; ㅇᵒO++) {
        var Oᵒﾟ = ⲟﾷO[oᣞ0 >>> 24] ^ ⲟΟㅇ[ꙨₒꙨ >>> 16 & 0xff] ^ ﾷoO[ᵒﾷᐤ >>> 8 & 0xff] ^ ﾷₒꙨ[ﾷOㅇ & 0xff] ^ ﾷᴑㅇ[ㅇOO++];
        var ꓳᴑΟ = ⲟﾷO[ꙨₒꙨ >>> 24] ^ ⲟΟㅇ[ᵒﾷᐤ >>> 16 & 0xff] ^ ﾷoO[ﾷOㅇ >>> 8 & 0xff] ^ ﾷₒꙨ[oᣞ0 & 0xff] ^ ﾷᴑㅇ[ㅇOO++];
        var ꓳﾟㅇ = ⲟﾷO[ᵒﾷᐤ >>> 24] ^ ⲟΟㅇ[ﾷOㅇ >>> 16 & 0xff] ^ ﾷoO[oᣞ0 >>> 8 & 0xff] ^ ﾷₒꙨ[ꙨₒꙨ & 0xff] ^ ﾷᴑㅇ[ㅇOO++];
        var ﾷꓳꓳ = ⲟﾷO[ﾷOㅇ >>> 24] ^ ⲟΟㅇ[oᣞ0 >>> 16 & 0xff] ^ ﾷoO[ꙨₒꙨ >>> 8 & 0xff] ^ ﾷₒꙨ[ᵒﾷᐤ & 0xff] ^ ﾷᴑㅇ[ㅇOO++];
        oᣞ0 = Oᵒﾟ;
        ꙨₒꙨ = ꓳᴑΟ;
        ᵒﾷᐤ = ꓳﾟㅇ;
        ﾷOㅇ = ﾷꓳꓳ;
      }
      var Oᵒﾟ = (ꓳ0ꓳ[oᣞ0 >>> 24] << 24 | ꓳ0ꓳ[ꙨₒꙨ >>> 16 & 0xff] << 16 | ꓳ0ꓳ[ᵒﾷᐤ >>> 8 & 0xff] << 8 | ꓳ0ꓳ[ﾷOㅇ & 0xff]) ^ ﾷᴑㅇ[ㅇOO++];
      var ꓳᴑΟ = (ꓳ0ꓳ[ꙨₒꙨ >>> 24] << 24 | ꓳ0ꓳ[ᵒﾷᐤ >>> 16 & 0xff] << 16 | ꓳ0ꓳ[ﾷOㅇ >>> 8 & 0xff] << 8 | ꓳ0ꓳ[oᣞ0 & 0xff]) ^ ﾷᴑㅇ[ㅇOO++];
      var ꓳﾟㅇ = (ꓳ0ꓳ[ᵒﾷᐤ >>> 24] << 24 | ꓳ0ꓳ[ﾷOㅇ >>> 16 & 0xff] << 16 | ꓳ0ꓳ[oᣞ0 >>> 8 & 0xff] << 8 | ꓳ0ꓳ[ꙨₒꙨ & 0xff]) ^ ﾷᴑㅇ[ㅇOO++];
      var ﾷꓳꓳ = (ꓳ0ꓳ[ﾷOㅇ >>> 24] << 24 | ꓳ0ꓳ[oᣞ0 >>> 16 & 0xff] << 16 | ꓳ0ꓳ[ꙨₒꙨ >>> 8 & 0xff] << 8 | ꓳ0ꓳ[ᵒﾷᐤ & 0xff]) ^ ﾷᴑㅇ[ㅇOO++];
      ₒΟᴑ[ᣞﾟⲟ] = Oᵒﾟ;
      ₒΟᴑ[ᣞﾟⲟ + 1] = ꓳᴑΟ;
      ₒΟᴑ[ᣞﾟⲟ + 2] = ꓳﾟㅇ;
      ₒΟᴑ[ᣞﾟⲟ + 3] = ﾷꓳꓳ;
    },
    keySize: 8
  });
  ⲟΟଠ.AES = ﾷﾷΟ._createHelper(Oₒꓳ);
})();
function AES_Encrypt(ଠ0) {
  var ᵒᣞᣞ = CryptoJS.enc.Hex.parse('\x33\x33\x33\x34\x36\x35\x36\x36\x33\x39\x36\x62\x36\x33\x37\x33\x33\x31\x33\x33\x37\x33\x36\x34\x37\x38\x33\x38\x33\x32\x33\x33\x36\x32\x36\x34\x33\x31\x36\x65\x36\x31\x36\x37\x36\x36\x33\x35\x36\x32\x36\x64\x36\x31\x37\x38\x33\x38\x33\x37\x37\x33\x30\x30');
  var ₒOₒ = CryptoJS.enc.Utf8.parse('\x33\x61\x36\x34\x66\x31\x6B\x66\x30\x30\x6C\x35\x32\x65\x63\x6E');
  var ㅇoㅇ = CryptoJS.enc.Utf8.parse(ଠ0);
  var ꙨOₒ = CryptoJS.AES.encrypt(ㅇoㅇ, ᵒᣞᣞ, {
    iv: ₒOₒ,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return ꙨOₒ.toString();
}
class MainProgram {
  constructor(O0O, oㅇﾟ) {
    this.openid = O0O;
    this.index = oㅇﾟ;
    this.headers = {
      '\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74': '\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x69\x50\x68\x6F\x6E\x65\x3B\x20\x43\x50\x55\x20\x69\x50\x68\x6F\x6E\x65\x20\x4F\x53\x20\x31\x37\x5F\x30\x5F\x31\x20\x6C\x69\x6B\x65\x20\x4D\x61\x63\x20\x4F\x53\x20\x58\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x36\x30\x35\x2E\x31\x2E\x31\x35\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x56\x65\x72\x73\x69\x6F\x6E\x2F\x31\x35\x2E\x30\x20\x4D\x6F\x62\x69\x6C\x65\x2F\x31\x35\x45\x31\x34\x38\x20\x53\x61\x66\x61\x72\x69\x2F\x36\x30\x34\x2E\x31',
      '\x41\x63\x63\x65\x70\x74': '\x74\x65\x78\x74\x2F\x68\x74\x6D\x6C\x2C\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x68\x74\x6D\x6C\x2B\x78\x6D\x6C\x2C\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x6D\x6C\x3B\x71\x3D\x30\x2E\x39\x2C\x69\x6D\x61\x67\x65\x2F\x61\x76\x69\x66\x2C\x69\x6D\x61\x67\x65\x2F\x77\x65\x62\x70\x2C\x69\x6D\x61\x67\x65\x2F\x61\x70\x6E\x67\x2C\x2A\x2F\x2A\x3B\x71\x3D\x30\x2E\x38\x2C\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x73\x69\x67\x6E\x65\x64\x2D\x65\x78\x63\x68\x61\x6E\x67\x65\x3B\x76\x3D\x62\x33\x3B\x71\x3D\x30\x2E\x39',
      '\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67': '\x67\x7A\x69\x70\x2C\x20\x64\x65\x66\x6C\x61\x74\x65',
      '\x75\x70\x67\x72\x61\x64\x65\x2D\x69\x6E\x73\x65\x63\x75\x72\x65\x2D\x72\x65\x71\x75\x65\x73\x74\x73': '\x31',
      '\x78\x2D\x72\x65\x71\x75\x65\x73\x74\x65\x64\x2D\x77\x69\x74\x68': '\x63\x6F\x6D\x2E\x66\x75\x6C\x75\x62\x72\x6F\x2E\x66\x69\x73\x68\x69\x6E\x67\x32',
      '\x73\x65\x63\x2D\x66\x65\x74\x63\x68\x2D\x73\x69\x74\x65': '\x73\x61\x6D\x65\x2D\x6F\x72\x69\x67\x69\x6E',
      '\x73\x65\x63\x2D\x66\x65\x74\x63\x68\x2D\x6D\x6F\x64\x65': '\x6E\x61\x76\x69\x67\x61\x74\x65',
      '\x73\x65\x63\x2D\x66\x65\x74\x63\x68\x2D\x75\x73\x65\x72': '\x3F\x31',
      '\x73\x65\x63\x2D\x66\x65\x74\x63\x68\x2D\x64\x65\x73\x74': '\x64\x6F\x63\x75\x6D\x65\x6E\x74',
      '\x72\x65\x66\x65\x72\x65\x72': '\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x69\x73\x68\x69\x6E\x67\x2E\x66\x75\x6C\x75\x62\x72\x6F\x2E\x63\x6F\x6D\x2F\x61\x70\x70\x2F\x6D\x79\x31\x2E\x68\x74\x6D\x6C',
      '\x61\x63\x63\x65\x70\x74\x2D\x6C\x61\x6E\x67\x75\x61\x67\x65': '\x7A\x68\x2D\x43\x4E\x2C\x7A\x68\x3B\x71\x3D\x30\x2E\x39\x2C\x65\x6E\x2D\x55\x53\x3B\x71\x3D\x30\x2E\x38\x2C\x65\x6E\x3B\x71\x3D\x30\x2E\x37'
    };
  }
  log(Ꙩₒ) {
    console.log(`\u8d26\u53f7\x5B${this.index}\x5D\x20\x5B${this.remark}\x5D\x3A${Ꙩₒ}`);
  }
  async account() {
    let ᐤₒ = `\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x69\x73\x68\x69\x6E\x67\x2E\x66\x75\x6C\x75\x62\x72\x6F\x2E\x63\x6F\x6D\x2F\x61\x70\x70\x2F\x61\x70\x69\x2F\x67\x6F\x6C\x64\x5F\x61\x70\x69\x2E\x70\x68\x70\x3F\x6F\x70\x65\x6E\x5F\x69\x64\x3D${this.openid}\x26\x70\x61\x63\x6B\x61\x67\x65\x3D\x7A`;
    let ㅇꙨᐤ = this.headers;
    let ⲟOᵒ = JSON.parse((await get({
      url: ᐤₒ,
      headers: ㅇꙨᐤ
    })).body);
    this.log(JSON.stringify(ⲟOᵒ));
  }
  async plus_coin() {
    let ᐤₒ = `\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x69\x73\x68\x69\x6E\x67\x2E\x66\x75\x6C\x75\x62\x72\x6F\x2E\x63\x6F\x6D\x2F\x61\x70\x70\x2F\x61\x70\x69\x2F\x70\x6C\x75\x73\x5F\x63\x6F\x69\x6E\x5F\x73\x69\x67\x6E\x2E\x70\x68\x70`;
    let ㅇꙨᐤ = this.headers;
    let ⲟଠᐤ = Date.now();
    let ⲟﾟﾟ = AES_Encrypt(`${ⲟଠᐤ}\x5F${this.openid}`);
    let Oꓳₒ = `\x75\x73\x65\x72\x49\x64\x3D${this.openid}\x26\x70\x61\x63\x6B\x61\x67\x65\x3D\x7A\x26\x74\x69\x6D\x65\x3D${ⲟଠᐤ}\x26\x73\x69\x67\x6E\x3D${encodeURIComponent(ⲟﾟﾟ)}`;
    let ⲟOᵒ = (await post({
      url: ᐤₒ,
      body: Oꓳₒ,
      headers: ㅇꙨᐤ
    })).body;
  }
  async doTask() {
    try {
      await this.account();
      await this.plus_coin();
    } catch (ᵒㅇଠ) {
      this.log(ᵒㅇଠ.message);
    }
  }
}
async function main() {
  console.log('\u7fa4\x39\x33\x37\x39\x39\x34\x35\x31\x34');
  console.log('\u7fa4\x39\x33\x37\x39\x39\x34\x35\x31\x34');
  console.log('\u7fa4\x39\x33\x37\x39\x39\x34\x35\x31\x34');
  console.log('\u6d3b\u52a8\u5165\u53e3\x3A\x20\x68\x74\x74\x70\x73\x3A\x2F\x2F\x66\x69\x73\x68\x69\x6E\x67\x2E\x66\x75\x6C\x75\x62\x72\x6F\x2E\x63\x6F\x6D\x2F\x61\x70\x70\x2F\x61\x70\x69\x2F\x6F\x61\x75\x74\x68\x2E\x70\x68\x70\x3F\x6F\x70\x65\x6E\x5F\x69\x64\x3D\x6F\x38\x4D\x34\x78\x71\x36\x38\x68\x46\x55\x34\x63\x36\x67\x38\x6A\x54\x32\x49\x66\x39\x66\x78\x41\x4C\x4A\x7A\x6B\x31\x51\x45\x34\x26\x70\x61\x63\x6B\x61\x67\x65\x3D\x7A');
  for (let oㅇﾟ = 0; oㅇﾟ < users.length; oㅇﾟ++) {
    await new MainProgram(users[oㅇﾟ], oㅇﾟ + 1).doTask();
  }
}
!(async () => {
  if (typeof $request != '\x75\x6E\x64\x65\x66\x69\x6E\x65\x64') {
    await getCookie();
  } else {
    await main();
  }
})().catch(ᵒㅇଠ => {
  console.log(ᵒㅇଠ);
}).finally(() => $.done());
function get(ᵒㅇO) {
  return new Promise((ﾷㅇﾟ, ₒᐤଠ) => {
    $.get(ᵒㅇO, (ﾟ0ᵒ, ﾷ0ᐤ, Oꓳₒ) => {
      if (ﾟ0ᵒ) ₒᐤଠ(ﾟ0ᵒ);
      ﾷㅇﾟ(ﾷ0ᐤ);
    });
  });
}
function post(ᵒㅇO) {
  return new Promise((ﾷㅇﾟ, ₒᐤଠ) => {
    $.post(ᵒㅇO, (ﾟ0ᵒ, ﾷ0ᐤ, Oꓳₒ) => {
      ﾷㅇﾟ(ﾷ0ᐤ);
    });
  });
}
function Env(Oₒଠ, ᵒㅇଠ) {
  class ᵒⲟₒ {
    constructor(Oₒଠ) {
      this.env = Oₒଠ;
    }
    send(Oₒଠ, ᵒㅇଠ = '\x47\x45\x54') {
      Oₒଠ = '\x73\x74\x72\x69\x6E\x67' == typeof Oₒଠ ? {
        url: Oₒଠ
      } : Oₒଠ;
      let ᵒⲟₒ = this.get;
      '\x50\x4F\x53\x54' === ᵒㅇଠ && (ᵒⲟₒ = this.post);
      const ﾷ0ﾷ = new Promise((ᵒㅇଠ, ﾷ0ﾷ) => {
        ᵒⲟₒ.call(this, Oₒଠ, (Oₒଠ, ᵒⲟₒ, ᣞଠᴑ) => {
          Oₒଠ ? ﾷ0ﾷ(Oₒଠ) : ᵒㅇଠ(ᵒⲟₒ);
        });
      });
      return Oₒଠ.timeout ? ((Oₒଠ, ᵒㅇଠ = 1e3) => Promise.race([Oₒଠ, new Promise((Oₒଠ, ᵒⲟₒ) => {
        setTimeout(() => {
          ᵒⲟₒ(new Error('\u8bf7\u6c42\u8d85\u65f6'));
        }, ᵒㅇଠ);
      })]))(ﾷ0ﾷ, Oₒଠ.timeout) : ﾷ0ﾷ;
    }
    get(Oₒଠ) {
      return this.send.call(this.env, Oₒଠ);
    }
    post(Oₒଠ) {
      return this.send.call(this.env, Oₒଠ, '\x50\x4F\x53\x54');
    }
  }
  return new class {
    constructor(Oₒଠ, ᵒㅇଠ) {
      this.logLevels = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      }, this.logLevelPrefixs = {
        debug: '\x5B\x44\x45\x42\x55\x47\x5D\x20',
        info: '\x5B\x49\x4E\x46\x4F\x5D\x20',
        warn: '\x5B\x57\x41\x52\x4E\x5D\x20',
        error: '\x5B\x45\x52\x52\x4F\x52\x5D\x20'
      }, this.logLevel = '\x69\x6E\x66\x6F', this.name = Oₒଠ, this.http = new ᵒⲟₒ(this), this.data = null, this.dataFile = '\x62\x6F\x78\x2E\x64\x61\x74', this.logs = [], this.isMute = false, this.isNeedRewrite = false, this.logSeparator = '\x0A', this.encoding = '\x75\x74\x66\x2D\x38', this.startTime = new Date().getTime(), Object.assign(this, ᵒㅇଠ), this.log('', `\ud83d\udd14${this.name}\x2C\x20\u5f00\u59cb\x21`);
    }
    getEnv() {
      return '\x75\x6E\x64\x65\x66\x69\x6E\x65\x64' != typeof $environment && $environment['\x73\x75\x72\x67\x65\x2D\x76\x65\x72\x73\x69\x6F\x6E'] ? '\x53\x75\x72\x67\x65' : '\x75\x6E\x64\x65\x66\x69\x6E\x65\x64' != typeof $environment && $environment['\x73\x74\x61\x73\x68\x2D\x76\x65\x72\x73\x69\x6F\x6E'] ? '\x53\x74\x61\x73\x68' : '\x75\x6E\x64\x65\x66\x69\x6E\x65\x64' != typeof module && module.exports ? '\x4E\x6F\x64\x65\x2E\x6A\x73' : '\x75\x6E\x64\x65\x66\x69\x6E\x65\x64' != typeof $task ? '\x51\x75\x61\x6E\x74\x75\x6D\x75\x6C\x74\x20\x58' : '\x75\x6E\x64\x65\x66\x69\x6E\x65\x64' != typeof $loon ? '\x4C\x6F\x6F\x6E' : '\x75\x6E\x64\x65\x66\x69\x6E\x65\x64' != typeof $rocket ? '\x53\x68\x61\x64\x6F\x77\x72\x6F\x63\x6B\x65\x74' : undefined;
    }
    isNode() {
      return '\x4E\x6F\x64\x65\x2E\x6A\x73' === this.getEnv();
    }
    isQuanX() {
      return '\x51\x75\x61\x6E\x74\x75\x6D\x75\x6C\x74\x20\x58' === this.getEnv();
    }
    isSurge() {
      return '\x53\x75\x72\x67\x65' === this.getEnv();
    }
    isLoon() {
      return '\x4C\x6F\x6F\x6E' === this.getEnv();
    }
    isShadowrocket() {
      return '\x53\x68\x61\x64\x6F\x77\x72\x6F\x63\x6B\x65\x74' === this.getEnv();
    }
    isStash() {
      return '\x53\x74\x61\x73\x68' === this.getEnv();
    }
    toObj(Oₒଠ, ᵒㅇଠ = null) {
      try {
        return JSON.parse(Oₒଠ);
      } catch {
        return ᵒㅇଠ;
      }
    }
    toStr(Oₒଠ, ᵒㅇଠ = null, ...ᵒⲟₒ) {
      try {
        return JSON.stringify(Oₒଠ, ...ᵒⲟₒ);
      } catch {
        return ᵒㅇଠ;
      }
    }
    getjson(Oₒଠ, ᵒㅇଠ) {
      let ᵒⲟₒ = ᵒㅇଠ;
      if (this.getdata(Oₒଠ)) try {
        ᵒⲟₒ = JSON.parse(this.getdata(Oₒଠ));
      } catch {}
      return ᵒⲟₒ;
    }
    setjson(Oₒଠ, ᵒㅇଠ) {
      try {
        return this.setdata(JSON.stringify(Oₒଠ), ᵒㅇଠ);
      } catch {
        return false;
      }
    }
    getScript(Oₒଠ) {
      return new Promise(ᵒㅇଠ => {
        this.get({
          url: Oₒଠ
        }, (Oₒଠ, ᵒⲟₒ, ﾷ0ﾷ) => ᵒㅇଠ(ﾷ0ﾷ));
      });
    }
    runScript(Oₒଠ, ᵒㅇଠ) {
      return new Promise(ᵒⲟₒ => {
        let ﾷ0ﾷ = this.getdata('\x40\x63\x68\x61\x76\x79\x5F\x62\x6F\x78\x6A\x73\x5F\x75\x73\x65\x72\x43\x66\x67\x73\x2E\x68\x74\x74\x70\x61\x70\x69');
        ﾷ0ﾷ = ﾷ0ﾷ ? ﾷ0ﾷ.replace(/\n/g, '').trim() : ﾷ0ﾷ;
        let ᣞଠᴑ = this.getdata('\x40\x63\x68\x61\x76\x79\x5F\x62\x6F\x78\x6A\x73\x5F\x75\x73\x65\x72\x43\x66\x67\x73\x2E\x68\x74\x74\x70\x61\x70\x69\x5F\x74\x69\x6D\x65\x6F\x75\x74');
        ᣞଠᴑ = ᣞଠᴑ ? 1 * ᣞଠᴑ : 20, ᣞଠᴑ = ᵒㅇଠ && ᵒㅇଠ.timeout ? ᵒㅇଠ.timeout : ᣞଠᴑ;
        const [ᵒⲟᴑ, Ꙩoᣞ] = ﾷ0ﾷ.split('\x40'),
          oଠᣞ = {
            url: `\x68\x74\x74\x70\x3A\x2F\x2F${Ꙩoᣞ}\x2F\x76\x31\x2F\x73\x63\x72\x69\x70\x74\x69\x6E\x67\x2F\x65\x76\x61\x6C\x75\x61\x74\x65`,
            body: {
              script_text: Oₒଠ,
              mock_type: '\x63\x72\x6F\x6E',
              timeout: ᣞଠᴑ
            },
            headers: {
              '\x58\x2D\x4B\x65\x79': ᵒⲟᴑ,
              Accept: '\x2A\x2F\x2A'
            },
            policy: '\x44\x49\x52\x45\x43\x54',
            timeout: ᣞଠᴑ
          };
        this.post(oଠᣞ, (Oₒଠ, ᵒㅇଠ, ﾷ0ﾷ) => ᵒⲟₒ(ﾷ0ﾷ));
      }).catch(Oₒଠ => this.logErr(Oₒଠ));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require('\x66\x73'), this.path = this.path ? this.path : require('\x70\x61\x74\x68');
        const Oₒଠ = this.path.resolve(this.dataFile),
          ᵒㅇଠ = this.path.resolve(process.cwd(), this.dataFile),
          ᵒⲟₒ = this.fs.existsSync(Oₒଠ),
          ﾷ0ﾷ = !ᵒⲟₒ && this.fs.existsSync(ᵒㅇଠ);
        if (!ᵒⲟₒ && !ﾷ0ﾷ) return {};
        {
          const ﾷ0ﾷ = ᵒⲟₒ ? Oₒଠ : ᵒㅇଠ;
          try {
            return JSON.parse(this.fs.readFileSync(ﾷ0ﾷ));
          } catch (Oₒଠ) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require('\x66\x73'), this.path = this.path ? this.path : require('\x70\x61\x74\x68');
        const Oₒଠ = this.path.resolve(this.dataFile),
          ᵒㅇଠ = this.path.resolve(process.cwd(), this.dataFile),
          ᵒⲟₒ = this.fs.existsSync(Oₒଠ),
          ﾷ0ﾷ = !ᵒⲟₒ && this.fs.existsSync(ᵒㅇଠ),
          ᣞଠᴑ = JSON.stringify(this.data);
        ᵒⲟₒ ? this.fs.writeFileSync(Oₒଠ, ᣞଠᴑ) : ﾷ0ﾷ ? this.fs.writeFileSync(ᵒㅇଠ, ᣞଠᴑ) : this.fs.writeFileSync(Oₒଠ, ᣞଠᴑ);
      }
    }
    lodash_get(Oₒଠ, ᵒㅇଠ, ᵒⲟₒ) {
      const ﾷ0ﾷ = ᵒㅇଠ.replace(/\[(\d+)\]/g, '\x2E\x24\x31').split('\x2E');
      let ᣞଠᴑ = Oₒଠ;
      for (const Oₒଠ of ﾷ0ﾷ) if (ᣞଠᴑ = Object(ᣞଠᴑ)[Oₒଠ], undefined === ᣞଠᴑ) return ᵒⲟₒ;
      return ᣞଠᴑ;
    }
    lodash_set(Oₒଠ, ᵒㅇଠ, ᵒⲟₒ) {
      return Object(Oₒଠ) !== Oₒଠ || (Array.isArray(ᵒㅇଠ) || (ᵒㅇଠ = ᵒㅇଠ.toString().match(/[^.[\]]+/g) || []), ᵒㅇଠ.slice(0, -1).reduce((Oₒଠ, ᵒⲟₒ, ﾷ0ﾷ) => Object(Oₒଠ[ᵒⲟₒ]) === Oₒଠ[ᵒⲟₒ] ? Oₒଠ[ᵒⲟₒ] : Oₒଠ[ᵒⲟₒ] = Math.abs(ᵒㅇଠ[ﾷ0ﾷ + 1]) >> 0 == +ᵒㅇଠ[ﾷ0ﾷ + 1] ? [] : {}, Oₒଠ)[ᵒㅇଠ[ᵒㅇଠ.length - 1]] = ᵒⲟₒ), Oₒଠ;
    }
    getdata(Oₒଠ) {
      let ᵒㅇଠ = this.getval(Oₒଠ);
      if (/^@/.test(Oₒଠ)) {
        const [, ᵒⲟₒ, ﾷ0ﾷ] = /^@(.*?)\.(.*?)$/.exec(Oₒଠ),
          ᣞଠᴑ = ᵒⲟₒ ? this.getval(ᵒⲟₒ) : '';
        if (ᣞଠᴑ) try {
          const Oₒଠ = JSON.parse(ᣞଠᴑ);
          ᵒㅇଠ = Oₒଠ ? this.lodash_get(Oₒଠ, ﾷ0ﾷ, '') : ᵒㅇଠ;
        } catch (Oₒଠ) {
          ᵒㅇଠ = '';
        }
      }
      return ᵒㅇଠ;
    }
    setdata(Oₒଠ, ᵒㅇଠ) {
      let ᵒⲟₒ = false;
      if (/^@/.test(ᵒㅇଠ)) {
        const [, ﾷ0ﾷ, ᣞଠᴑ] = /^@(.*?)\.(.*?)$/.exec(ᵒㅇଠ),
          ᵒⲟᴑ = this.getval(ﾷ0ﾷ),
          Ꙩoᣞ = ﾷ0ﾷ ? '\x6E\x75\x6C\x6C' === ᵒⲟᴑ ? null : ᵒⲟᴑ || '\x7B\x7D' : '\x7B\x7D';
        try {
          const ᵒㅇଠ = JSON.parse(Ꙩoᣞ);
          this.lodash_set(ᵒㅇଠ, ᣞଠᴑ, Oₒଠ), ᵒⲟₒ = this.setval(JSON.stringify(ᵒㅇଠ), ﾷ0ﾷ);
        } catch (ᵒㅇଠ) {
          const ᵒⲟᴑ = {};
          this.lodash_set(ᵒⲟᴑ, ᣞଠᴑ, Oₒଠ), ᵒⲟₒ = this.setval(JSON.stringify(ᵒⲟᴑ), ﾷ0ﾷ);
        }
      } else ᵒⲟₒ = this.setval(Oₒଠ, ᵒㅇଠ);
      return ᵒⲟₒ;
    }
    getval(Oₒଠ) {
      switch (this.getEnv()) {
        case '\x53\x75\x72\x67\x65':
        case '\x4C\x6F\x6F\x6E':
        case '\x53\x74\x61\x73\x68':
        case '\x53\x68\x61\x64\x6F\x77\x72\x6F\x63\x6B\x65\x74':
          return $persistentStore.read(Oₒଠ);
        case '\x51\x75\x61\x6E\x74\x75\x6D\x75\x6C\x74\x20\x58':
          return $prefs.valueForKey(Oₒଠ);
        case '\x4E\x6F\x64\x65\x2E\x6A\x73':
          return this.data = this.loaddata(), this.data[Oₒଠ];
        default:
          return this.data && this.data[Oₒଠ] || null;
      }
    }
    setval(Oₒଠ, ᵒㅇଠ) {
      switch (this.getEnv()) {
        case '\x53\x75\x72\x67\x65':
        case '\x4C\x6F\x6F\x6E':
        case '\x53\x74\x61\x73\x68':
        case '\x53\x68\x61\x64\x6F\x77\x72\x6F\x63\x6B\x65\x74':
          return $persistentStore.write(Oₒଠ, ᵒㅇଠ);
        case '\x51\x75\x61\x6E\x74\x75\x6D\x75\x6C\x74\x20\x58':
          return $prefs.setValueForKey(Oₒଠ, ᵒㅇଠ);
        case '\x4E\x6F\x64\x65\x2E\x6A\x73':
          return this.data = this.loaddata(), this.data[ᵒㅇଠ] = Oₒଠ, this.writedata(), true;
        default:
          return this.data && this.data[ᵒㅇଠ] || null;
      }
    }
    initGotEnv(Oₒଠ) {
      this.got = this.got ? this.got : require('\x67\x6F\x74'), this.cktough = this.cktough ? this.cktough : require('\x74\x6F\x75\x67\x68\x2D\x63\x6F\x6F\x6B\x69\x65'), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar(), Oₒଠ && (Oₒଠ.headers = Oₒଠ.headers ? Oₒଠ.headers : {}, Oₒଠ && (Oₒଠ.headers = Oₒଠ.headers ? Oₒଠ.headers : {}, undefined === Oₒଠ.headers.cookie && undefined === Oₒଠ.headers.Cookie && undefined === Oₒଠ.cookieJar && (Oₒଠ.cookieJar = this.ckjar)));
    }
    get(Oₒଠ, ᵒㅇଠ = () => {}) {
      switch (Oₒଠ.headers && (delete Oₒଠ.headers['\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65'], delete Oₒଠ.headers['\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x4C\x65\x6E\x67\x74\x68'], delete Oₒଠ.headers['\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65'], delete Oₒଠ.headers['\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x6C\x65\x6E\x67\x74\x68']), Oₒଠ.params && (Oₒଠ.url += '\x3F' + this.queryStr(Oₒଠ.params)), undefined === Oₒଠ.followRedirect || Oₒଠ.followRedirect || ((this.isSurge() || this.isLoon()) && (Oₒଠ['\x61\x75\x74\x6F\x2D\x72\x65\x64\x69\x72\x65\x63\x74'] = false), this.isQuanX() && (Oₒଠ.opts ? Oₒଠ.opts.redirection = false : Oₒଠ.opts = {
        redirection: false
      })), this.getEnv()) {
        case '\x53\x75\x72\x67\x65':
        case '\x4C\x6F\x6F\x6E':
        case '\x53\x74\x61\x73\x68':
        case '\x53\x68\x61\x64\x6F\x77\x72\x6F\x63\x6B\x65\x74':
        default:
          this.isSurge() && this.isNeedRewrite && (Oₒଠ.headers = Oₒଠ.headers || {}, Object.assign(Oₒଠ.headers, {
            '\x58\x2D\x53\x75\x72\x67\x65\x2D\x53\x6B\x69\x70\x2D\x53\x63\x72\x69\x70\x74\x69\x6E\x67': false
          })), $httpClient.get(Oₒଠ, (Oₒଠ, ᵒⲟₒ, ﾷ0ﾷ) => {
            !Oₒଠ && ᵒⲟₒ && (ᵒⲟₒ.body = ﾷ0ﾷ, ᵒⲟₒ.statusCode = ᵒⲟₒ.status ? ᵒⲟₒ.status : ᵒⲟₒ.statusCode, ᵒⲟₒ.status = ᵒⲟₒ.statusCode), ᵒㅇଠ(Oₒଠ, ᵒⲟₒ, ﾷ0ﾷ);
          });
          break;
        case '\x51\x75\x61\x6E\x74\x75\x6D\x75\x6C\x74\x20\x58':
          this.isNeedRewrite && (Oₒଠ.opts = Oₒଠ.opts || {}, Object.assign(Oₒଠ.opts, {
            hints: false
          })), $task.fetch(Oₒଠ).then(Oₒଠ => {
            const {
              statusCode: ᵒⲟₒ,
              statusCode: ﾷ0ﾷ,
              headers: ᣞଠᴑ,
              body: ᵒⲟᴑ,
              bodyBytes: Ꙩoᣞ
            } = Oₒଠ;
            ᵒㅇଠ(null, {
              status: ᵒⲟₒ,
              statusCode: ﾷ0ﾷ,
              headers: ᣞଠᴑ,
              body: ᵒⲟᴑ,
              bodyBytes: Ꙩoᣞ
            }, ᵒⲟᴑ, Ꙩoᣞ);
          }, Oₒଠ => ᵒㅇଠ(Oₒଠ && Oₒଠ.error || '\x55\x6E\x64\x65\x66\x69\x6E\x65\x64\x45\x72\x72\x6F\x72'));
          break;
        case '\x4E\x6F\x64\x65\x2E\x6A\x73':
          let ᵒⲟₒ = require('\x69\x63\x6F\x6E\x76\x2D\x6C\x69\x74\x65');
          this.initGotEnv(Oₒଠ), this.got(Oₒଠ).on('\x72\x65\x64\x69\x72\x65\x63\x74', (Oₒଠ, ᵒㅇଠ) => {
            try {
              if (Oₒଠ.headers['\x73\x65\x74\x2D\x63\x6F\x6F\x6B\x69\x65']) {
                const ᵒⲟₒ = Oₒଠ.headers['\x73\x65\x74\x2D\x63\x6F\x6F\x6B\x69\x65'].map(this.cktough.Cookie.parse).toString();
                ᵒⲟₒ && this.ckjar.setCookieSync(ᵒⲟₒ, null), ᵒㅇଠ.cookieJar = this.ckjar;
              }
            } catch (Oₒଠ) {
              this.logErr(Oₒଠ);
            }
          }).then(Oₒଠ => {
            const {
                statusCode: ﾷ0ﾷ,
                statusCode: ᣞଠᴑ,
                headers: ᵒⲟᴑ,
                rawBody: Ꙩoᣞ
              } = Oₒଠ,
              oଠᣞ = ᵒⲟₒ.decode(Ꙩoᣞ, this.encoding);
            ᵒㅇଠ(null, {
              status: ﾷ0ﾷ,
              statusCode: ᣞଠᴑ,
              headers: ᵒⲟᴑ,
              rawBody: Ꙩoᣞ,
              body: oଠᣞ
            }, oଠᣞ);
          }, Oₒଠ => {
            const {
              message: ﾷ0ﾷ,
              response: ᣞଠᴑ
            } = Oₒଠ;
            ᵒㅇଠ(ﾷ0ﾷ, ᣞଠᴑ, ᣞଠᴑ && ᵒⲟₒ.decode(ᣞଠᴑ.rawBody, this.encoding));
          });
          break;
      }
    }
    post(Oₒଠ, ᵒㅇଠ = () => {}) {
      const ᵒⲟₒ = Oₒଠ.method ? Oₒଠ.method.toLocaleLowerCase() : '\x70\x6F\x73\x74';
      switch (Oₒଠ.body && Oₒଠ.headers && !Oₒଠ.headers['\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65'] && !Oₒଠ.headers['\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65'] && (Oₒଠ.headers['\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65'] = '\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x2D\x77\x77\x77\x2D\x66\x6F\x72\x6D\x2D\x75\x72\x6C\x65\x6E\x63\x6F\x64\x65\x64'), Oₒଠ.headers && (delete Oₒଠ.headers['\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x4C\x65\x6E\x67\x74\x68'], delete Oₒଠ.headers['\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x6C\x65\x6E\x67\x74\x68']), undefined === Oₒଠ.followRedirect || Oₒଠ.followRedirect || ((this.isSurge() || this.isLoon()) && (Oₒଠ['\x61\x75\x74\x6F\x2D\x72\x65\x64\x69\x72\x65\x63\x74'] = false), this.isQuanX() && (Oₒଠ.opts ? Oₒଠ.opts.redirection = false : Oₒଠ.opts = {
        redirection: false
      })), this.getEnv()) {
        case '\x53\x75\x72\x67\x65':
        case '\x4C\x6F\x6F\x6E':
        case '\x53\x74\x61\x73\x68':
        case '\x53\x68\x61\x64\x6F\x77\x72\x6F\x63\x6B\x65\x74':
        default:
          this.isSurge() && this.isNeedRewrite && (Oₒଠ.headers = Oₒଠ.headers || {}, Object.assign(Oₒଠ.headers, {
            '\x58\x2D\x53\x75\x72\x67\x65\x2D\x53\x6B\x69\x70\x2D\x53\x63\x72\x69\x70\x74\x69\x6E\x67': false
          })), $httpClient[ᵒⲟₒ](Oₒଠ, (Oₒଠ, ᵒⲟₒ, ﾷ0ﾷ) => {
            !Oₒଠ && ᵒⲟₒ && (ᵒⲟₒ.body = ﾷ0ﾷ, ᵒⲟₒ.statusCode = ᵒⲟₒ.status ? ᵒⲟₒ.status : ᵒⲟₒ.statusCode, ᵒⲟₒ.status = ᵒⲟₒ.statusCode), ᵒㅇଠ(Oₒଠ, ᵒⲟₒ, ﾷ0ﾷ);
          });
          break;
        case '\x51\x75\x61\x6E\x74\x75\x6D\x75\x6C\x74\x20\x58':
          Oₒଠ.method = ᵒⲟₒ, this.isNeedRewrite && (Oₒଠ.opts = Oₒଠ.opts || {}, Object.assign(Oₒଠ.opts, {
            hints: false
          })), $task.fetch(Oₒଠ).then(Oₒଠ => {
            const {
              statusCode: ᵒⲟₒ,
              statusCode: ﾷ0ﾷ,
              headers: ᣞଠᴑ,
              body: ᵒⲟᴑ,
              bodyBytes: Ꙩoᣞ
            } = Oₒଠ;
            ᵒㅇଠ(null, {
              status: ᵒⲟₒ,
              statusCode: ﾷ0ﾷ,
              headers: ᣞଠᴑ,
              body: ᵒⲟᴑ,
              bodyBytes: Ꙩoᣞ
            }, ᵒⲟᴑ, Ꙩoᣞ);
          }, Oₒଠ => ᵒㅇଠ(Oₒଠ && Oₒଠ.error || '\x55\x6E\x64\x65\x66\x69\x6E\x65\x64\x45\x72\x72\x6F\x72'));
          break;
        case '\x4E\x6F\x64\x65\x2E\x6A\x73':
          let ﾷ0ﾷ = require('\x69\x63\x6F\x6E\x76\x2D\x6C\x69\x74\x65');
          this.initGotEnv(Oₒଠ);
          const {
            url: ᣞଠᴑ,
            ...ᵒⲟᴑ
          } = Oₒଠ;
          this.got[ᵒⲟₒ](ᣞଠᴑ, ᵒⲟᴑ).then(Oₒଠ => {
            const {
                statusCode: ᵒⲟₒ,
                statusCode: ᣞଠᴑ,
                headers: ᵒⲟᴑ,
                rawBody: Ꙩoᣞ
              } = Oₒଠ,
              oଠᣞ = ﾷ0ﾷ.decode(Ꙩoᣞ, this.encoding);
            ᵒㅇଠ(null, {
              status: ᵒⲟₒ,
              statusCode: ᣞଠᴑ,
              headers: ᵒⲟᴑ,
              rawBody: Ꙩoᣞ,
              body: oଠᣞ
            }, oଠᣞ);
          }, Oₒଠ => {
            const {
              message: ᵒⲟₒ,
              response: ᣞଠᴑ
            } = Oₒଠ;
            ᵒㅇଠ(ᵒⲟₒ, ᣞଠᴑ, ᣞଠᴑ && ﾷ0ﾷ.decode(ᣞଠᴑ.rawBody, this.encoding));
          });
          break;
      }
    }
    time(Oₒଠ, ᵒㅇଠ = null) {
      const ᵒⲟₒ = ᵒㅇଠ ? new Date(ᵒㅇଠ) : new Date();
      let ﾷ0ﾷ = {
        '\x4D\x2B': ᵒⲟₒ.getMonth() + 1,
        '\x64\x2B': ᵒⲟₒ.getDate(),
        '\x48\x2B': ᵒⲟₒ.getHours(),
        '\x6D\x2B': ᵒⲟₒ.getMinutes(),
        '\x73\x2B': ᵒⲟₒ.getSeconds(),
        '\x71\x2B': Math.floor((ᵒⲟₒ.getMonth() + 3) / 3),
        S: ᵒⲟₒ.getMilliseconds()
      };
      /(y+)/.test(Oₒଠ) && (Oₒଠ = Oₒଠ.replace(RegExp.$1, (ᵒⲟₒ.getFullYear() + '').substr(4 - RegExp.$1.length)));
      for (let ᵒㅇଠ in ﾷ0ﾷ) new RegExp('\x28' + ᵒㅇଠ + '\x29').test(Oₒଠ) && (Oₒଠ = Oₒଠ.replace(RegExp.$1, 1 == RegExp.$1.length ? ﾷ0ﾷ[ᵒㅇଠ] : ('\x30\x30' + ﾷ0ﾷ[ᵒㅇଠ]).substr(('' + ﾷ0ﾷ[ᵒㅇଠ]).length)));
      return Oₒଠ;
    }
    queryStr(Oₒଠ) {
      let ᵒㅇଠ = '';
      for (const ᵒⲟₒ in Oₒଠ) {
        let ﾷ0ﾷ = Oₒଠ[ᵒⲟₒ];
        null != ﾷ0ﾷ && '' !== ﾷ0ﾷ && ('\x6F\x62\x6A\x65\x63\x74' == typeof ﾷ0ﾷ && (ﾷ0ﾷ = JSON.stringify(ﾷ0ﾷ)), ᵒㅇଠ += `${ᵒⲟₒ}\x3D${ﾷ0ﾷ}\x26`);
      }
      return ᵒㅇଠ = ᵒㅇଠ.substring(0, ᵒㅇଠ.length - 1), ᵒㅇଠ;
    }
    msg(ᵒㅇଠ = Oₒଠ, ᵒⲟₒ = '', ﾷ0ﾷ = '', ᣞଠᴑ = {}) {
      const ᵒⲟᴑ = Oₒଠ => {
        const {
          $open: ᵒㅇଠ,
          $copy: ᵒⲟₒ,
          $media: ﾷ0ﾷ,
          $mediaMime: ᣞଠᴑ
        } = Oₒଠ;
        switch (typeof Oₒଠ) {
          case undefined:
            return Oₒଠ;
          case '\x73\x74\x72\x69\x6E\x67':
            switch (this.getEnv()) {
              case '\x53\x75\x72\x67\x65':
              case '\x53\x74\x61\x73\x68':
              default:
                return {
                  url: Oₒଠ
                };
              case '\x4C\x6F\x6F\x6E':
              case '\x53\x68\x61\x64\x6F\x77\x72\x6F\x63\x6B\x65\x74':
                return Oₒଠ;
              case '\x51\x75\x61\x6E\x74\x75\x6D\x75\x6C\x74\x20\x58':
                return {
                  '\x6F\x70\x65\x6E\x2D\x75\x72\x6C': Oₒଠ
                };
              case '\x4E\x6F\x64\x65\x2E\x6A\x73':
                return;
            }
          case '\x6F\x62\x6A\x65\x63\x74':
            switch (this.getEnv()) {
              case '\x53\x75\x72\x67\x65':
              case '\x53\x74\x61\x73\x68':
              case '\x53\x68\x61\x64\x6F\x77\x72\x6F\x63\x6B\x65\x74':
              default:
                {
                  const ᵒⲟᴑ = {};
                  let Ꙩoᣞ = Oₒଠ.openUrl || Oₒଠ.url || Oₒଠ['\x6F\x70\x65\x6E\x2D\x75\x72\x6C'] || ᵒㅇଠ;
                  Ꙩoᣞ && Object.assign(ᵒⲟᴑ, {
                    action: '\x6F\x70\x65\x6E\x2D\x75\x72\x6C',
                    url: Ꙩoᣞ
                  });
                  let oଠᣞ = Oₒଠ['\x75\x70\x64\x61\x74\x65\x2D\x70\x61\x73\x74\x65\x62\x6F\x61\x72\x64'] || Oₒଠ.updatePasteboard || ᵒⲟₒ;
                  if (oଠᣞ && Object.assign(ᵒⲟᴑ, {
                    action: '\x63\x6C\x69\x70\x62\x6F\x61\x72\x64',
                    text: oଠᣞ
                  }), ﾷ0ﾷ) {
                    let Oₒଠ, ᵒㅇଠ, ᵒⲟₒ;
                    if (ﾷ0ﾷ.startsWith('\x68\x74\x74\x70')) Oₒଠ = ﾷ0ﾷ;else if (ﾷ0ﾷ.startsWith('\x64\x61\x74\x61\x3A')) {
                      const [Oₒଠ] = ﾷ0ﾷ.split('\x3B'),
                        [, ᣞଠᴑ] = ﾷ0ﾷ.split('\x2C');
                      ᵒㅇଠ = ᣞଠᴑ, ᵒⲟₒ = Oₒଠ.replace('\x64\x61\x74\x61\x3A', '');
                    } else {
                      ᵒㅇଠ = ﾷ0ﾷ, ᵒⲟₒ = (Oₒଠ => {
                        const ᵒㅇଠ = {
                          JVBERi0: '\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x70\x64\x66',
                          R0lGODdh: '\x69\x6D\x61\x67\x65\x2F\x67\x69\x66',
                          R0lGODlh: '\x69\x6D\x61\x67\x65\x2F\x67\x69\x66',
                          iVBORw0KGgo: '\x69\x6D\x61\x67\x65\x2F\x70\x6E\x67',
                          '\x2F\x39\x6A\x2F': '\x69\x6D\x61\x67\x65\x2F\x6A\x70\x67'
                        };
                        for (var ᵒⲟₒ in ᵒㅇଠ) if (0 === Oₒଠ.indexOf(ᵒⲟₒ)) return ᵒㅇଠ[ᵒⲟₒ];
                        return null;
                      })(ﾷ0ﾷ);
                    }
                    Object.assign(ᵒⲟᴑ, {
                      '\x6D\x65\x64\x69\x61\x2D\x75\x72\x6C': Oₒଠ,
                      '\x6D\x65\x64\x69\x61\x2D\x62\x61\x73\x65\x36\x34': ᵒㅇଠ,
                      '\x6D\x65\x64\x69\x61\x2D\x62\x61\x73\x65\x36\x34\x2D\x6D\x69\x6D\x65': ᣞଠᴑ ?? ᵒⲟₒ
                    });
                  }
                  return Object.assign(ᵒⲟᴑ, {
                    '\x61\x75\x74\x6F\x2D\x64\x69\x73\x6D\x69\x73\x73': Oₒଠ['\x61\x75\x74\x6F\x2D\x64\x69\x73\x6D\x69\x73\x73'],
                    sound: Oₒଠ.sound
                  }), ᵒⲟᴑ;
                }
              case '\x4C\x6F\x6F\x6E':
                {
                  const ᵒⲟₒ = {};
                  let ᣞଠᴑ = Oₒଠ.openUrl || Oₒଠ.url || Oₒଠ['\x6F\x70\x65\x6E\x2D\x75\x72\x6C'] || ᵒㅇଠ;
                  ᣞଠᴑ && Object.assign(ᵒⲟₒ, {
                    openUrl: ᣞଠᴑ
                  });
                  let ᵒⲟᴑ = Oₒଠ.mediaUrl || Oₒଠ['\x6D\x65\x64\x69\x61\x2D\x75\x72\x6C'];
                  return ﾷ0ﾷ?.startsWith('\x68\x74\x74\x70') && (ᵒⲟᴑ = ﾷ0ﾷ), ᵒⲟᴑ && Object.assign(ᵒⲟₒ, {
                    mediaUrl: ᵒⲟᴑ
                  }), console.log(JSON.stringify(ᵒⲟₒ)), ᵒⲟₒ;
                }
              case '\x51\x75\x61\x6E\x74\x75\x6D\x75\x6C\x74\x20\x58':
                {
                  const ᣞଠᴑ = {};
                  let ᵒⲟᴑ = Oₒଠ['\x6F\x70\x65\x6E\x2D\x75\x72\x6C'] || Oₒଠ.url || Oₒଠ.openUrl || ᵒㅇଠ;
                  ᵒⲟᴑ && Object.assign(ᣞଠᴑ, {
                    '\x6F\x70\x65\x6E\x2D\x75\x72\x6C': ᵒⲟᴑ
                  });
                  let Ꙩoᣞ = Oₒଠ['\x6D\x65\x64\x69\x61\x2D\x75\x72\x6C'] || Oₒଠ.mediaUrl;
                  ﾷ0ﾷ?.startsWith('\x68\x74\x74\x70') && (Ꙩoᣞ = ﾷ0ﾷ), Ꙩoᣞ && Object.assign(ᣞଠᴑ, {
                    '\x6D\x65\x64\x69\x61\x2D\x75\x72\x6C': Ꙩoᣞ
                  });
                  let oଠᣞ = Oₒଠ['\x75\x70\x64\x61\x74\x65\x2D\x70\x61\x73\x74\x65\x62\x6F\x61\x72\x64'] || Oₒଠ.updatePasteboard || ᵒⲟₒ;
                  return oଠᣞ && Object.assign(ᣞଠᴑ, {
                    '\x75\x70\x64\x61\x74\x65\x2D\x70\x61\x73\x74\x65\x62\x6F\x61\x72\x64': oଠᣞ
                  }), console.log(JSON.stringify(ᣞଠᴑ)), ᣞଠᴑ;
                }
              case '\x4E\x6F\x64\x65\x2E\x6A\x73':
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) switch (this.getEnv()) {
        case '\x53\x75\x72\x67\x65':
        case '\x4C\x6F\x6F\x6E':
        case '\x53\x74\x61\x73\x68':
        case '\x53\x68\x61\x64\x6F\x77\x72\x6F\x63\x6B\x65\x74':
        default:
          $notification.post(ᵒㅇଠ, ᵒⲟₒ, ﾷ0ﾷ, ᵒⲟᴑ(ᣞଠᴑ));
          break;
        case '\x51\x75\x61\x6E\x74\x75\x6D\x75\x6C\x74\x20\x58':
          $notify(ᵒㅇଠ, ᵒⲟₒ, ﾷ0ﾷ, ᵒⲟᴑ(ᣞଠᴑ));
          break;
        case '\x4E\x6F\x64\x65\x2E\x6A\x73':
          break;
      }
      if (!this.isMuteLog) {
        let Oₒଠ = ['', '\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D\x3D'];
        Oₒଠ.push(ᵒㅇଠ), ᵒⲟₒ && Oₒଠ.push(ᵒⲟₒ), ﾷ0ﾷ && Oₒଠ.push(ﾷ0ﾷ), console.log(Oₒଠ.join('\x0A')), this.logs = this.logs.concat(Oₒଠ);
      }
    }
    debug(...Oₒଠ) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (Oₒଠ.length > 0 && (this.logs = [...this.logs, ...Oₒଠ]), console.log(`${this.logLevelPrefixs.debug}${Oₒଠ.map(Oₒଠ => Oₒଠ ?? String(Oₒଠ)).join(this.logSeparator)}`));
    }
    info(...Oₒଠ) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (Oₒଠ.length > 0 && (this.logs = [...this.logs, ...Oₒଠ]), console.log(`${this.logLevelPrefixs.info}${Oₒଠ.map(Oₒଠ => Oₒଠ ?? String(Oₒଠ)).join(this.logSeparator)}`));
    }
    warn(...Oₒଠ) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (Oₒଠ.length > 0 && (this.logs = [...this.logs, ...Oₒଠ]), console.log(`${this.logLevelPrefixs.warn}${Oₒଠ.map(Oₒଠ => Oₒଠ ?? String(Oₒଠ)).join(this.logSeparator)}`));
    }
    error(...Oₒଠ) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (Oₒଠ.length > 0 && (this.logs = [...this.logs, ...Oₒଠ]), console.log(`${this.logLevelPrefixs.error}${Oₒଠ.map(Oₒଠ => Oₒଠ ?? String(Oₒଠ)).join(this.logSeparator)}`));
    }
    log(...Oₒଠ) {
      Oₒଠ.length > 0 && (this.logs = [...this.logs, ...Oₒଠ]), console.log(Oₒଠ.map(Oₒଠ => Oₒଠ ?? String(Oₒଠ)).join(this.logSeparator));
    }
    logErr(Oₒଠ, ᵒㅇଠ) {
      switch (this.getEnv()) {
        case '\x53\x75\x72\x67\x65':
        case '\x4C\x6F\x6F\x6E':
        case '\x53\x74\x61\x73\x68':
        case '\x53\x68\x61\x64\x6F\x77\x72\x6F\x63\x6B\x65\x74':
        case '\x51\x75\x61\x6E\x74\x75\x6D\x75\x6C\x74\x20\x58':
        default:
          this.log('', `\u2757\ufe0f${this.name}\x2C\x20\u9519\u8bef\x21`, ᵒㅇଠ, Oₒଠ);
          break;
        case '\x4E\x6F\x64\x65\x2E\x6A\x73':
          this.log('', `\u2757\ufe0f${this.name}\x2C\x20\u9519\u8bef\x21`, ᵒㅇଠ, undefined !== Oₒଠ.message ? Oₒଠ.message : Oₒଠ, Oₒଠ.stack);
          break;
      }
    }
    wait(Oₒଠ) {
      return new Promise(ᵒㅇଠ => setTimeout(ᵒㅇଠ, Oₒଠ));
    }
    done(Oₒଠ = {}) {
      const ᵒㅇଠ = (new Date().getTime() - this.startTime) / 1e3;
      switch (this.log('', `\ud83d\udd14${this.name}\x2C\x20\u7ed3\u675f\x21\x20\ud83d\udd5b\x20${ᵒㅇଠ}\x20\u79d2`), this.log(), this.getEnv()) {
        case '\x53\x75\x72\x67\x65':
        case '\x4C\x6F\x6F\x6E':
        case '\x53\x74\x61\x73\x68':
        case '\x53\x68\x61\x64\x6F\x77\x72\x6F\x63\x6B\x65\x74':
        case '\x51\x75\x61\x6E\x74\x75\x6D\x75\x6C\x74\x20\x58':
        default:
          $done(Oₒଠ);
          break;
        case '\x4E\x6F\x64\x65\x2E\x6A\x73':
          process.exit(1);
      }
    }
  }(Oₒଠ, ᵒㅇଠ);
}