import {
  i as ov,
  a as Yo,
  t as qo,
  r as lv,
  d as Ht,
  b as Bt,
  c as _t,
  o as Fn,
  w as La,
  e as fv,
  f as cv,
  g as Fa,
  h as Kn,
  j as Sn,
  u as hv,
  k as Zo,
  l as dv,
  m as si,
  F as Ft,
  n as pv,
  p as gv,
  q as vv,
  s as k,
  v as H,
  x as y,
  y as Nt,
  z as _v,
  A as qe,
  B as ht,
  C as S,
  D as br,
  E as cn,
  G as Jo,
  H as It,
  I as Oa,
  J as mv,
  K as yr,
  L as jo,
  M as Pe,
  N as Ne,
  O as Er,
  P as Tr,
  Q as gt,
  R as Qt,
  S as tl,
  T as el,
  U as xv,
  V as ui,
  W as oi,
  X as nl,
  Y as wv,
  Z as fn,
  _ as rl,
  $ as il,
  a0 as Av,
  a1 as Go,
  a2 as Xo,
} from "./index.8a4e10e9.js";
import {
  u as yv,
  _ as Be,
  g as bv,
  a as sl,
  b as Ev,
  c as Tv,
  d as Iv,
  A as Cv,
  t as Sv,
  e as Fv,
  N as Ov,
} from "./use-ghgz.340a8ccd.js";
var ai =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof self < "u"
            ? self
            : {},
  Rv = /\s/;
function Lv(g) {
  for (var x = g.length; x-- && Rv.test(g.charAt(x)); );
  return x;
}
var Dv = /^\s+/;
function Pv(g) {
  return g && g.slice(0, Lv(g) + 1).replace(Dv, "");
}
var Vo = 0 / 0,
  Nv = /^[-+]0x[0-9a-f]+$/i,
  Bv = /^0b[01]+$/i,
  Mv = /^0o[0-7]+$/i,
  Uv = parseInt;
function al(g) {
  if (typeof g == "number") return g;
  if (ov(g)) return Vo;
  if (Yo(g)) {
    var x = typeof g.valueOf == "function" ? g.valueOf() : g;
    g = Yo(x) ? x + "" : x;
  }
  if (typeof g != "string") return g === 0 ? g : +g;
  g = Pv(g);
  var a = Bv.test(g);
  return a || Mv.test(g) ? Uv(g.slice(2), a ? 2 : 8) : Nv.test(g) ? Vo : +g;
}
var Ko = 1 / 0,
  Wv = 17976931348623157e292;
function $v(g) {
  if (!g) return g === 0 ? g : 0;
  if (((g = al(g)), g === Ko || g === -Ko)) {
    var x = g < 0 ? -1 : 1;
    return x * Wv;
  }
  return g === g ? g : 0;
}
function kv(g) {
  var x = $v(g),
    a = x % 1;
  return x === x ? (a ? x - a : x) : 0;
}
var Hv = lv.isFinite,
  zv = Math.min;
function Yv(g) {
  var x = Math[g];
  return function (a, O) {
    if (((a = al(a)), (O = O == null ? 0 : zv(kv(O), 292)), O && Hv(a))) {
      var I = (qo(a) + "e").split("e"),
        C = x(I[0] + "e" + (+I[1] + O));
      return ((I = (qo(C) + "e").split("e")), +(I[0] + "e" + (+I[1] - O)));
    }
    return x(a);
  };
}
var qv = Yv("round"),
  Gv = qv;
const Xv = (g) => 1 - Math.pow(1 - g, 5);
function Vv(g) {
  const { from: x, to: a, duration: O, onUpdate: I, onFinish: C } = g,
    b = () => {
      const Y = performance.now(),
        U = Math.min(Y - F, O),
        B = x + (a - x) * Xv(U / O);
      if (U === O) {
        C();
        return;
      }
      (I(B), requestAnimationFrame(b));
    },
    F = performance.now();
  b();
}
const Kv = {
  to: { type: Number, default: 0 },
  precision: { type: Number, default: 0 },
  showSeparator: Boolean,
  locale: String,
  from: { type: Number, default: 0 },
  active: { type: Boolean, default: !0 },
  duration: { type: Number, default: 2e3 },
};
var Qv = Ht({
  name: "NumberAnimation",
  props: Kv,
  setup(g) {
    const { localeRef: x } = yv("name"),
      { duration: a } = g,
      O = Bt(g.from),
      I = _t(() => {
        const { locale: L } = g;
        return L !== void 0 ? L : x.value;
      });
    let C = !1;
    const b = (L) => {
        O.value = L;
      },
      F = () => {
        ((O.value = g.to), (C = !1));
      },
      Y = (L = g.from, z = g.to) => {
        ((C = !0),
          (O.value = g.from),
          L !== z &&
            Vv({ from: L, to: z, duration: a, onUpdate: b, onFinish: F }));
      },
      U = _t(() => {
        var L;
        const N = Gv(O.value, g.precision).toFixed(g.precision).split("."),
          K = new Intl.NumberFormat(I.value),
          et =
            (L = K.formatToParts(0.5).find((At) => At.type === "decimal")) ===
              null || L === void 0
              ? void 0
              : L.value,
          at = g.showSeparator ? K.format(Number(N[0])) : N[0],
          ut = N[1];
        return { integer: at, decimal: ut, decimalSeparator: et };
      });
    function B() {
      C || Y();
    }
    return (
      Fn(() => {
        La(() => {
          g.active && Y();
        });
      }),
      Object.assign({ formattedValue: U }, { play: B })
    );
  },
  render() {
    const {
      formattedValue: { integer: g, decimal: x, decimalSeparator: a },
    } = this;
    return [g, x ? a : null, x];
  },
});
const Zv = (g) => {
    const { textColor1: x, dividerColor: a, fontWeightStrong: O } = g;
    return { textColor: x, color: a, fontWeight: O };
  },
  Jv = { name: "Divider", common: fv, self: Zv };
var jv = Jv,
  t0 = cv(
    "divider",
    `
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,
    [
      Fa(
        "vertical",
        `
 margin-top: 24px;
 margin-bottom: 24px;
 `,
        [
          Fa(
            "no-title",
            `
 display: flex;
 align-items: center;
 `,
          ),
        ],
      ),
      Kn(
        "title",
        `
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `,
      ),
      Sn("title-position-left", [Kn("line", [Sn("left", { width: "28px" })])]),
      Sn("title-position-right", [
        Kn("line", [Sn("right", { width: "28px" })]),
      ]),
      Sn("dashed", [
        Kn(
          "line",
          `
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `,
        ),
      ]),
      Sn(
        "vertical",
        `
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `,
      ),
      Kn(
        "line",
        `
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `,
      ),
      Fa("dashed", [Kn("line", { backgroundColor: "var(--n-color)" })]),
      Sn("dashed", [Kn("line", { borderColor: "var(--n-color)" })]),
      Sn("vertical", { backgroundColor: "var(--n-color)" }),
    ],
  );
const e0 = Object.assign(Object.assign({}, Zo.props), {
  titlePlacement: { type: String, default: "center" },
  dashed: Boolean,
  vertical: Boolean,
});
var n0 = Ht({
    name: "Divider",
    props: e0,
    setup(g) {
      const { mergedClsPrefixRef: x, inlineThemeDisabled: a } = hv(g),
        O = Zo("Divider", "-divider", t0, jv, g, x),
        I = _t(() => {
          const {
            common: { cubicBezierEaseInOut: b },
            self: { color: F, textColor: Y, fontWeight: U },
          } = O.value;
          return {
            "--n-bezier": b,
            "--n-color": F,
            "--n-text-color": Y,
            "--n-font-weight": U,
          };
        }),
        C = a ? dv("divider", void 0, I, g) : void 0;
      return {
        mergedClsPrefix: x,
        cssVars: a ? void 0 : I,
        themeClass: C == null ? void 0 : C.themeClass,
        onRender: C == null ? void 0 : C.onRender,
      };
    },
    render() {
      var g;
      const {
        $slots: x,
        titlePlacement: a,
        vertical: O,
        dashed: I,
        cssVars: C,
        mergedClsPrefix: b,
      } = this;
      return (
        (g = this.onRender) === null || g === void 0 || g.call(this),
        si(
          "div",
          {
            role: "separator",
            class: [
              `${b}-divider`,
              this.themeClass,
              {
                [`${b}-divider--vertical`]: O,
                [`${b}-divider--no-title`]: !x.default,
                [`${b}-divider--dashed`]: I,
                [`${b}-divider--title-position-${a}`]: x.default && a,
              },
            ],
            style: C,
          },
          O
            ? null
            : si("div", {
                class: `${b}-divider__line ${b}-divider__line--left`,
              }),
          !O && x.default
            ? si(
                Ft,
                null,
                si("div", { class: `${b}-divider__title` }, this.$slots),
                si("div", {
                  class: `${b}-divider__line ${b}-divider__line--right`,
                }),
              )
            : null,
        )
      );
    },
  }),
  Ra = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ 
(function (g, x) {
  (function () {
    var a,
      O = "4.17.21",
      I = 200,
      C = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
      b = "Expected a function",
      F = "Invalid `variable` option passed into `_.template`",
      Y = "__lodash_hash_undefined__",
      U = 500,
      B = "__lodash_placeholder__",
      W = 1,
      L = 2,
      z = 4,
      N = 1,
      K = 2,
      et = 1,
      at = 2,
      ut = 4,
      At = 8,
      Gt = 16,
      ft = 32,
      Ct = 64,
      Lt = 128,
      Ie = 256,
      Zt = 512,
      Ge = 30,
      Ce = "...",
      Xe = 800,
      Rn = 16,
      Jt = 1,
      Ve = 2,
      ss = 3,
      Me = 1 / 0,
      Ue = 9007199254740991,
      fi = 17976931348623157e292,
      Qn = 0 / 0,
      de = 4294967295,
      Ln = de - 1,
      as = de >>> 1,
      Ir = [
        ["ary", Lt],
        ["bind", et],
        ["bindKey", at],
        ["curry", At],
        ["curryRight", Gt],
        ["flip", Zt],
        ["partial", ft],
        ["partialRight", Ct],
        ["rearg", Ie],
      ],
      hn = "[object Arguments]",
      Zn = "[object Array]",
      Mt = "[object AsyncFunction]",
      se = "[object Boolean]",
      dt = "[object Date]",
      zt = "[object DOMException]",
      Ke = "[object Error]",
      We = "[object Function]",
      dn = "[object GeneratorFunction]",
      Ut = "[object Map]",
      Se = "[object Number]",
      pe = "[object Null]",
      Wt = "[object Object]",
      Cr = "[object Promise]",
      ci = "[object Proxy]",
      $e = "[object RegExp]",
      mt = "[object Set]",
      Dn = "[object String]",
      Jn = "[object Symbol]",
      us = "[object Undefined]",
      Pn = "[object WeakMap]",
      os = "[object WeakSet]",
      pn = "[object ArrayBuffer]",
      Qe = "[object DataView]",
      jn = "[object Float32Array]",
      tr = "[object Float64Array]",
      gn = "[object Int8Array]",
      Nn = "[object Int16Array]",
      Sr = "[object Int32Array]",
      Fr = "[object Uint8Array]",
      Or = "[object Uint8ClampedArray]",
      Rr = "[object Uint16Array]",
      Lr = "[object Uint32Array]",
      er = /\b__p \+= '';/g,
      ls = /\b(__p \+=) '' \+/g,
      fs = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
      Dr = /&(?:amp|lt|gt|quot|#39);/g,
      Pr = /[&<>"']/g,
      Nr = RegExp(Dr.source),
      cs = RegExp(Pr.source),
      hs = /<%-([\s\S]+?)%>/g,
      ds = /<%([\s\S]+?)%>/g,
      Br = /<%=([\s\S]+?)%>/g,
      ps = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      gs = /^\w*$/,
      vs =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      vn = /[\\^$.*+?()[\]{}|]/g,
      _s = RegExp(vn.source),
      Mr = /^\s+/,
      hi = /\s/,
      Ur = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      ms = /\{\n\/\* \[wrapped with (.+)\] \*/,
      di = /,? & /,
      xs = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
      pi = /[()=,{}\[\]\/\s]/,
      gi = /\\(\\)?/g,
      vi = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
      Wr = /\w*$/,
      $r = /^[-+]0x[0-9a-f]+$/i,
      Ze = /^0b[01]+$/i,
      Bn = /^\[object .+?Constructor\]$/,
      Mn = /^0o[0-7]+$/i,
      nr = /^(?:0|[1-9]\d*)$/,
      kr = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
      rr = /($^)/,
      ws = /['\n\r\u2028\u2029\\]/g,
      Je = "\\ud800-\\udfff",
      jt = "\\u0300-\\u036f",
      _n = "\\ufe20-\\ufe2f",
      ke = "\\u20d0-\\u20ff",
      ge = jt + _n + ke,
      mn = "\\u2700-\\u27bf",
      ae = "a-z\\xdf-\\xf6\\xf8-\\xff",
      Fe = "\\xac\\xb1\\xd7\\xf7",
      _i = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
      mi = "\\u2000-\\u206f",
      ir =
        " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
      te = "A-Z\\xc0-\\xd6\\xd8-\\xde",
      Un = "\\ufe0e\\ufe0f",
      sr = Fe + _i + mi + ir,
      Wn = "['\u2019]",
      Hr = "[" + Je + "]",
      ar = "[" + sr + "]",
      je = "[" + ge + "]",
      ve = "\\d+",
      As = "[" + mn + "]",
      zr = "[" + ae + "]",
      ur = "[^" + Je + sr + ve + mn + ae + te + "]",
      or = "\\ud83c[\\udffb-\\udfff]",
      ys = "(?:" + je + "|" + or + ")",
      xi = "[^" + Je + "]",
      s = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      l = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      c = "[" + te + "]",
      v = "\\u200d",
      T = "(?:" + zr + "|" + ur + ")",
      D = "(?:" + c + "|" + ur + ")",
      J = "(?:" + Wn + "(?:d|ll|m|re|s|t|ve))?",
      bt = "(?:" + Wn + "(?:D|LL|M|RE|S|T|VE))?",
      St = ys + "?",
      Dt = "[" + Un + "]?",
      _e = "(?:" + v + "(?:" + [xi, s, l].join("|") + ")" + Dt + St + ")*",
      hl = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
      dl = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
      Na = Dt + St + _e,
      pl = "(?:" + [As, s, l].join("|") + ")" + Na,
      gl = "(?:" + [xi + je + "?", je, s, l, Hr].join("|") + ")",
      vl = RegExp(Wn, "g"),
      _l = RegExp(je, "g"),
      bs = RegExp(or + "(?=" + or + ")|" + gl + Na, "g"),
      ml = RegExp(
        [
          c + "?" + zr + "+" + J + "(?=" + [ar, c, "$"].join("|") + ")",
          D + "+" + bt + "(?=" + [ar, c + T, "$"].join("|") + ")",
          c + "?" + T + "+" + J,
          c + "+" + bt,
          dl,
          hl,
          ve,
          pl,
        ].join("|"),
        "g",
      ),
      xl = RegExp("[" + v + Je + ge + Un + "]"),
      wl = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
      Al = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout",
      ],
      yl = -1,
      vt = {};
    ((vt[jn] =
      vt[tr] =
      vt[gn] =
      vt[Nn] =
      vt[Sr] =
      vt[Fr] =
      vt[Or] =
      vt[Rr] =
      vt[Lr] =
        !0),
      (vt[hn] =
        vt[Zn] =
        vt[pn] =
        vt[se] =
        vt[Qe] =
        vt[dt] =
        vt[Ke] =
        vt[We] =
        vt[Ut] =
        vt[Se] =
        vt[Wt] =
        vt[$e] =
        vt[mt] =
        vt[Dn] =
        vt[Pn] =
          !1));
    var pt = {};
    ((pt[hn] =
      pt[Zn] =
      pt[pn] =
      pt[Qe] =
      pt[se] =
      pt[dt] =
      pt[jn] =
      pt[tr] =
      pt[gn] =
      pt[Nn] =
      pt[Sr] =
      pt[Ut] =
      pt[Se] =
      pt[Wt] =
      pt[$e] =
      pt[mt] =
      pt[Dn] =
      pt[Jn] =
      pt[Fr] =
      pt[Or] =
      pt[Rr] =
      pt[Lr] =
        !0),
      (pt[Ke] = pt[We] = pt[Pn] = !1));
    var bl = {
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "s",
      },
      El = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      },
      Tl = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'",
      },
      Il = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029",
      },
      Cl = parseFloat,
      Sl = parseInt,
      Ba = typeof ai == "object" && ai && ai.Object === Object && ai,
      Fl = typeof self == "object" && self && self.Object === Object && self,
      $t = Ba || Fl || Function("return this")(),
      Es = x && !x.nodeType && x,
      $n = Es && !0 && g && !g.nodeType && g,
      Ma = $n && $n.exports === Es,
      Ts = Ma && Ba.process,
      me = (function () {
        try {
          var d = $n && $n.require && $n.require("util").types;
          return d || (Ts && Ts.binding && Ts.binding("util"));
        } catch (m) {}
      })(),
      Ua = me && me.isArrayBuffer,
      Wa = me && me.isDate,
      $a = me && me.isMap,
      ka = me && me.isRegExp,
      Ha = me && me.isSet,
      za = me && me.isTypedArray;
    function ue(d, m, _) {
      switch (_.length) {
        case 0:
          return d.call(m);
        case 1:
          return d.call(m, _[0]);
        case 2:
          return d.call(m, _[0], _[1]);
        case 3:
          return d.call(m, _[0], _[1], _[2]);
      }
      return d.apply(m, _);
    }
    function Ol(d, m, _, P) {
      for (var V = -1, st = d == null ? 0 : d.length; ++V < st; ) {
        var Ot = d[V];
        m(P, Ot, _(Ot), d);
      }
      return P;
    }
    function xe(d, m) {
      for (
        var _ = -1, P = d == null ? 0 : d.length;
        ++_ < P && m(d[_], _, d) !== !1;
      );
      return d;
    }
    function Rl(d, m) {
      for (var _ = d == null ? 0 : d.length; _-- && m(d[_], _, d) !== !1; );
      return d;
    }
    function Ya(d, m) {
      for (var _ = -1, P = d == null ? 0 : d.length; ++_ < P; )
        if (!m(d[_], _, d)) return !1;
      return !0;
    }
    function xn(d, m) {
      for (
        var _ = -1, P = d == null ? 0 : d.length, V = 0, st = [];
        ++_ < P;
      ) {
        var Ot = d[_];
        m(Ot, _, d) && (st[V++] = Ot);
      }
      return st;
    }
    function wi(d, m) {
      var _ = d == null ? 0 : d.length;
      return !!_ && lr(d, m, 0) > -1;
    }
    function Is(d, m, _) {
      for (var P = -1, V = d == null ? 0 : d.length; ++P < V; )
        if (_(m, d[P])) return !0;
      return !1;
    }
    function xt(d, m) {
      for (var _ = -1, P = d == null ? 0 : d.length, V = Array(P); ++_ < P; )
        V[_] = m(d[_], _, d);
      return V;
    }
    function wn(d, m) {
      for (var _ = -1, P = m.length, V = d.length; ++_ < P; ) d[V + _] = m[_];
      return d;
    }
    function Cs(d, m, _, P) {
      var V = -1,
        st = d == null ? 0 : d.length;
      for (P && st && (_ = d[++V]); ++V < st; ) _ = m(_, d[V], V, d);
      return _;
    }
    function Ll(d, m, _, P) {
      var V = d == null ? 0 : d.length;
      for (P && V && (_ = d[--V]); V--; ) _ = m(_, d[V], V, d);
      return _;
    }
    function Ss(d, m) {
      for (var _ = -1, P = d == null ? 0 : d.length; ++_ < P; )
        if (m(d[_], _, d)) return !0;
      return !1;
    }
    var Dl = Fs("length");
    function Pl(d) {
      return d.split("");
    }
    function Nl(d) {
      return d.match(xs) || [];
    }
    function qa(d, m, _) {
      var P;
      return (
        _(d, function (V, st, Ot) {
          if (m(V, st, Ot)) return ((P = st), !1);
        }),
        P
      );
    }
    function Ai(d, m, _, P) {
      for (var V = d.length, st = _ + (P ? 1 : -1); P ? st-- : ++st < V; )
        if (m(d[st], st, d)) return st;
      return -1;
    }
    function lr(d, m, _) {
      return m === m ? Xl(d, m, _) : Ai(d, Ga, _);
    }
    function Bl(d, m, _, P) {
      for (var V = _ - 1, st = d.length; ++V < st; ) if (P(d[V], m)) return V;
      return -1;
    }
    function Ga(d) {
      return d !== d;
    }
    function Xa(d, m) {
      var _ = d == null ? 0 : d.length;
      return _ ? Rs(d, m) / _ : Qn;
    }
    function Fs(d) {
      return function (m) {
        return m == null ? a : m[d];
      };
    }
    function Os(d) {
      return function (m) {
        return d == null ? a : d[m];
      };
    }
    function Va(d, m, _, P, V) {
      return (
        V(d, function (st, Ot, ct) {
          _ = P ? ((P = !1), st) : m(_, st, Ot, ct);
        }),
        _
      );
    }
    function Ml(d, m) {
      var _ = d.length;
      for (d.sort(m); _--; ) d[_] = d[_].value;
      return d;
    }
    function Rs(d, m) {
      for (var _, P = -1, V = d.length; ++P < V; ) {
        var st = m(d[P]);
        st !== a && (_ = _ === a ? st : _ + st);
      }
      return _;
    }
    function Ls(d, m) {
      for (var _ = -1, P = Array(d); ++_ < d; ) P[_] = m(_);
      return P;
    }
    function Ul(d, m) {
      return xt(m, function (_) {
        return [_, d[_]];
      });
    }
    function Ka(d) {
      return d && d.slice(0, ja(d) + 1).replace(Mr, "");
    }
    function oe(d) {
      return function (m) {
        return d(m);
      };
    }
    function Ds(d, m) {
      return xt(m, function (_) {
        return d[_];
      });
    }
    function Yr(d, m) {
      return d.has(m);
    }
    function Qa(d, m) {
      for (var _ = -1, P = d.length; ++_ < P && lr(m, d[_], 0) > -1; );
      return _;
    }
    function Za(d, m) {
      for (var _ = d.length; _-- && lr(m, d[_], 0) > -1; );
      return _;
    }
    function Wl(d, m) {
      for (var _ = d.length, P = 0; _--; ) d[_] === m && ++P;
      return P;
    }
    var $l = Os(bl),
      kl = Os(El);
    function Hl(d) {
      return "\\" + Il[d];
    }
    function zl(d, m) {
      return d == null ? a : d[m];
    }
    function fr(d) {
      return xl.test(d);
    }
    function Yl(d) {
      return wl.test(d);
    }
    function ql(d) {
      for (var m, _ = []; !(m = d.next()).done; ) _.push(m.value);
      return _;
    }
    function Ps(d) {
      var m = -1,
        _ = Array(d.size);
      return (
        d.forEach(function (P, V) {
          _[++m] = [V, P];
        }),
        _
      );
    }
    function Ja(d, m) {
      return function (_) {
        return d(m(_));
      };
    }
    function An(d, m) {
      for (var _ = -1, P = d.length, V = 0, st = []; ++_ < P; ) {
        var Ot = d[_];
        (Ot === m || Ot === B) && ((d[_] = B), (st[V++] = _));
      }
      return st;
    }
    function yi(d) {
      var m = -1,
        _ = Array(d.size);
      return (
        d.forEach(function (P) {
          _[++m] = P;
        }),
        _
      );
    }
    function Gl(d) {
      var m = -1,
        _ = Array(d.size);
      return (
        d.forEach(function (P) {
          _[++m] = [P, P];
        }),
        _
      );
    }
    function Xl(d, m, _) {
      for (var P = _ - 1, V = d.length; ++P < V; ) if (d[P] === m) return P;
      return -1;
    }
    function Vl(d, m, _) {
      for (var P = _ + 1; P--; ) if (d[P] === m) return P;
      return P;
    }
    function cr(d) {
      return fr(d) ? Ql(d) : Dl(d);
    }
    function Oe(d) {
      return fr(d) ? Zl(d) : Pl(d);
    }
    function ja(d) {
      for (var m = d.length; m-- && hi.test(d.charAt(m)); );
      return m;
    }
    var Kl = Os(Tl);
    function Ql(d) {
      for (var m = (bs.lastIndex = 0); bs.test(d); ) ++m;
      return m;
    }
    function Zl(d) {
      return d.match(bs) || [];
    }
    function Jl(d) {
      return d.match(ml) || [];
    }
    var jl = function d(m) {
        m = m == null ? $t : hr.defaults($t.Object(), m, hr.pick($t, Al));
        var _ = m.Array,
          P = m.Date,
          V = m.Error,
          st = m.Function,
          Ot = m.Math,
          ct = m.Object,
          Ns = m.RegExp,
          tf = m.String,
          we = m.TypeError,
          bi = _.prototype,
          ef = st.prototype,
          dr = ct.prototype,
          Ei = m["__core-js_shared__"],
          Ti = ef.toString,
          lt = dr.hasOwnProperty,
          nf = 0,
          tu = (function () {
            var t = /[^.]+$/.exec((Ei && Ei.keys && Ei.keys.IE_PROTO) || "");
            return t ? "Symbol(src)_1." + t : "";
          })(),
          Ii = dr.toString,
          rf = Ti.call(ct),
          sf = $t._,
          af = Ns(
            "^" +
              Ti.call(lt)
                .replace(vn, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?",
                ) +
              "$",
          ),
          Ci = Ma ? m.Buffer : a,
          yn = m.Symbol,
          Si = m.Uint8Array,
          eu = Ci ? Ci.allocUnsafe : a,
          Fi = Ja(ct.getPrototypeOf, ct),
          nu = ct.create,
          ru = dr.propertyIsEnumerable,
          Oi = bi.splice,
          iu = yn ? yn.isConcatSpreadable : a,
          qr = yn ? yn.iterator : a,
          kn = yn ? yn.toStringTag : a,
          Ri = (function () {
            try {
              var t = Gn(ct, "defineProperty");
              return (t({}, "", {}), t);
            } catch (e) {}
          })(),
          uf = m.clearTimeout !== $t.clearTimeout && m.clearTimeout,
          of = P && P.now !== $t.Date.now && P.now,
          lf = m.setTimeout !== $t.setTimeout && m.setTimeout,
          Li = Ot.ceil,
          Di = Ot.floor,
          Bs = ct.getOwnPropertySymbols,
          ff = Ci ? Ci.isBuffer : a,
          su = m.isFinite,
          cf = bi.join,
          hf = Ja(ct.keys, ct),
          Rt = Ot.max,
          Yt = Ot.min,
          df = P.now,
          pf = m.parseInt,
          au = Ot.random,
          gf = bi.reverse,
          Ms = Gn(m, "DataView"),
          Gr = Gn(m, "Map"),
          Us = Gn(m, "Promise"),
          pr = Gn(m, "Set"),
          Xr = Gn(m, "WeakMap"),
          Vr = Gn(ct, "create"),
          Pi = Xr && new Xr(),
          gr = {},
          vf = Xn(Ms),
          _f = Xn(Gr),
          mf = Xn(Us),
          xf = Xn(pr),
          wf = Xn(Xr),
          Ni = yn ? yn.prototype : a,
          Kr = Ni ? Ni.valueOf : a,
          uu = Ni ? Ni.toString : a;
        function u(t) {
          if (yt(t) && !Q(t) && !(t instanceof rt)) {
            if (t instanceof Ae) return t;
            if (lt.call(t, "__wrapped__")) return oo(t);
          }
          return new Ae(t);
        }
        var vr = (function () {
          function t() {}
          return function (e) {
            if (!wt(e)) return {};
            if (nu) return nu(e);
            t.prototype = e;
            var n = new t();
            return ((t.prototype = a), n);
          };
        })();
        function Bi() {}
        function Ae(t, e) {
          ((this.__wrapped__ = t),
            (this.__actions__ = []),
            (this.__chain__ = !!e),
            (this.__index__ = 0),
            (this.__values__ = a));
        }
        ((u.templateSettings = {
          escape: hs,
          evaluate: ds,
          interpolate: Br,
          variable: "",
          imports: { _: u },
        }),
          (u.prototype = Bi.prototype),
          (u.prototype.constructor = u),
          (Ae.prototype = vr(Bi.prototype)),
          (Ae.prototype.constructor = Ae));
        function rt(t) {
          ((this.__wrapped__ = t),
            (this.__actions__ = []),
            (this.__dir__ = 1),
            (this.__filtered__ = !1),
            (this.__iteratees__ = []),
            (this.__takeCount__ = de),
            (this.__views__ = []));
        }
        function Af() {
          var t = new rt(this.__wrapped__);
          return (
            (t.__actions__ = ee(this.__actions__)),
            (t.__dir__ = this.__dir__),
            (t.__filtered__ = this.__filtered__),
            (t.__iteratees__ = ee(this.__iteratees__)),
            (t.__takeCount__ = this.__takeCount__),
            (t.__views__ = ee(this.__views__)),
            t
          );
        }
        function yf() {
          if (this.__filtered__) {
            var t = new rt(this);
            ((t.__dir__ = -1), (t.__filtered__ = !0));
          } else ((t = this.clone()), (t.__dir__ *= -1));
          return t;
        }
        function bf() {
          var t = this.__wrapped__.value(),
            e = this.__dir__,
            n = Q(t),
            r = e < 0,
            i = n ? t.length : 0,
            o = Nc(0, i, this.__views__),
            f = o.start,
            h = o.end,
            p = h - f,
            w = r ? h : f - 1,
            A = this.__iteratees__,
            E = A.length,
            R = 0,
            M = Yt(p, this.__takeCount__);
          if (!n || (!r && i == p && M == p)) return Ru(t, this.__actions__);
          var G = [];
          t: for (; p-- && R < M; ) {
            w += e;
            for (var j = -1, X = t[w]; ++j < E; ) {
              var nt = A[j],
                it = nt.iteratee,
                ce = nt.type,
                Kt = it(X);
              if (ce == Ve) X = Kt;
              else if (!Kt) {
                if (ce == Jt) continue t;
                break t;
              }
            }
            G[R++] = X;
          }
          return G;
        }
        ((rt.prototype = vr(Bi.prototype)), (rt.prototype.constructor = rt));
        function Hn(t) {
          var e = -1,
            n = t == null ? 0 : t.length;
          for (this.clear(); ++e < n; ) {
            var r = t[e];
            this.set(r[0], r[1]);
          }
        }
        function Ef() {
          ((this.__data__ = Vr ? Vr(null) : {}), (this.size = 0));
        }
        function Tf(t) {
          var e = this.has(t) && delete this.__data__[t];
          return ((this.size -= e ? 1 : 0), e);
        }
        function If(t) {
          var e = this.__data__;
          if (Vr) {
            var n = e[t];
            return n === Y ? a : n;
          }
          return lt.call(e, t) ? e[t] : a;
        }
        function Cf(t) {
          var e = this.__data__;
          return Vr ? e[t] !== a : lt.call(e, t);
        }
        function Sf(t, e) {
          var n = this.__data__;
          return (
            (this.size += this.has(t) ? 0 : 1),
            (n[t] = Vr && e === a ? Y : e),
            this
          );
        }
        ((Hn.prototype.clear = Ef),
          (Hn.prototype.delete = Tf),
          (Hn.prototype.get = If),
          (Hn.prototype.has = Cf),
          (Hn.prototype.set = Sf));
        function tn(t) {
          var e = -1,
            n = t == null ? 0 : t.length;
          for (this.clear(); ++e < n; ) {
            var r = t[e];
            this.set(r[0], r[1]);
          }
        }
        function Ff() {
          ((this.__data__ = []), (this.size = 0));
        }
        function Of(t) {
          var e = this.__data__,
            n = Mi(e, t);
          if (n < 0) return !1;
          var r = e.length - 1;
          return (n == r ? e.pop() : Oi.call(e, n, 1), --this.size, !0);
        }
        function Rf(t) {
          var e = this.__data__,
            n = Mi(e, t);
          return n < 0 ? a : e[n][1];
        }
        function Lf(t) {
          return Mi(this.__data__, t) > -1;
        }
        function Df(t, e) {
          var n = this.__data__,
            r = Mi(n, t);
          return (r < 0 ? (++this.size, n.push([t, e])) : (n[r][1] = e), this);
        }
        ((tn.prototype.clear = Ff),
          (tn.prototype.delete = Of),
          (tn.prototype.get = Rf),
          (tn.prototype.has = Lf),
          (tn.prototype.set = Df));
        function en(t) {
          var e = -1,
            n = t == null ? 0 : t.length;
          for (this.clear(); ++e < n; ) {
            var r = t[e];
            this.set(r[0], r[1]);
          }
        }
        function Pf() {
          ((this.size = 0),
            (this.__data__ = {
              hash: new Hn(),
              map: new (Gr || tn)(),
              string: new Hn(),
            }));
        }
        function Nf(t) {
          var e = Ki(this, t).delete(t);
          return ((this.size -= e ? 1 : 0), e);
        }
        function Bf(t) {
          return Ki(this, t).get(t);
        }
        function Mf(t) {
          return Ki(this, t).has(t);
        }
        function Uf(t, e) {
          var n = Ki(this, t),
            r = n.size;
          return (n.set(t, e), (this.size += n.size == r ? 0 : 1), this);
        }
        ((en.prototype.clear = Pf),
          (en.prototype.delete = Nf),
          (en.prototype.get = Bf),
          (en.prototype.has = Mf),
          (en.prototype.set = Uf));
        function zn(t) {
          var e = -1,
            n = t == null ? 0 : t.length;
          for (this.__data__ = new en(); ++e < n; ) this.add(t[e]);
        }
        function Wf(t) {
          return (this.__data__.set(t, Y), this);
        }
        function $f(t) {
          return this.__data__.has(t);
        }
        ((zn.prototype.add = zn.prototype.push = Wf), (zn.prototype.has = $f));
        function Re(t) {
          var e = (this.__data__ = new tn(t));
          this.size = e.size;
        }
        function kf() {
          ((this.__data__ = new tn()), (this.size = 0));
        }
        function Hf(t) {
          var e = this.__data__,
            n = e.delete(t);
          return ((this.size = e.size), n);
        }
        function zf(t) {
          return this.__data__.get(t);
        }
        function Yf(t) {
          return this.__data__.has(t);
        }
        function qf(t, e) {
          var n = this.__data__;
          if (n instanceof tn) {
            var r = n.__data__;
            if (!Gr || r.length < I - 1)
              return (r.push([t, e]), (this.size = ++n.size), this);
            n = this.__data__ = new en(r);
          }
          return (n.set(t, e), (this.size = n.size), this);
        }
        ((Re.prototype.clear = kf),
          (Re.prototype.delete = Hf),
          (Re.prototype.get = zf),
          (Re.prototype.has = Yf),
          (Re.prototype.set = qf));
        function ou(t, e) {
          var n = Q(t),
            r = !n && Vn(t),
            i = !n && !r && Cn(t),
            o = !n && !r && !i && wr(t),
            f = n || r || i || o,
            h = f ? Ls(t.length, tf) : [],
            p = h.length;
          for (var w in t)
            (e || lt.call(t, w)) &&
              !(
                f &&
                (w == "length" ||
                  (i && (w == "offset" || w == "parent")) ||
                  (o &&
                    (w == "buffer" ||
                      w == "byteLength" ||
                      w == "byteOffset")) ||
                  an(w, p))
              ) &&
              h.push(w);
          return h;
        }
        function lu(t) {
          var e = t.length;
          return e ? t[Ks(0, e - 1)] : a;
        }
        function Gf(t, e) {
          return Qi(ee(t), Yn(e, 0, t.length));
        }
        function Xf(t) {
          return Qi(ee(t));
        }
        function Ws(t, e, n) {
          ((n !== a && !Le(t[e], n)) || (n === a && !(e in t))) && nn(t, e, n);
        }
        function Qr(t, e, n) {
          var r = t[e];
          (!(lt.call(t, e) && Le(r, n)) || (n === a && !(e in t))) &&
            nn(t, e, n);
        }
        function Mi(t, e) {
          for (var n = t.length; n--; ) if (Le(t[n][0], e)) return n;
          return -1;
        }
        function Vf(t, e, n, r) {
          return (
            bn(t, function (i, o, f) {
              e(r, i, n(i), f);
            }),
            r
          );
        }
        function fu(t, e) {
          return t && ze(e, Pt(e), t);
        }
        function Kf(t, e) {
          return t && ze(e, re(e), t);
        }
        function nn(t, e, n) {
          e == "__proto__" && Ri
            ? Ri(t, e, {
                configurable: !0,
                enumerable: !0,
                value: n,
                writable: !0,
              })
            : (t[e] = n);
        }
        function $s(t, e) {
          for (var n = -1, r = e.length, i = _(r), o = t == null; ++n < r; )
            i[n] = o ? a : wa(t, e[n]);
          return i;
        }
        function Yn(t, e, n) {
          return (
            t === t &&
              (n !== a && (t = t <= n ? t : n),
              e !== a && (t = t >= e ? t : e)),
            t
          );
        }
        function ye(t, e, n, r, i, o) {
          var f,
            h = e & W,
            p = e & L,
            w = e & z;
          if ((n && (f = i ? n(t, r, i, o) : n(t)), f !== a)) return f;
          if (!wt(t)) return t;
          var A = Q(t);
          if (A) {
            if (((f = Mc(t)), !h)) return ee(t, f);
          } else {
            var E = qt(t),
              R = E == We || E == dn;
            if (Cn(t)) return Pu(t, h);
            if (E == Wt || E == hn || (R && !i)) {
              if (((f = p || R ? {} : ju(t)), !h))
                return p ? Ic(t, Kf(f, t)) : Tc(t, fu(f, t));
            } else {
              if (!pt[E]) return i ? t : {};
              f = Uc(t, E, h);
            }
          }
          o || (o = new Re());
          var M = o.get(t);
          if (M) return M;
          (o.set(t, f),
            Fo(t)
              ? t.forEach(function (X) {
                  f.add(ye(X, e, n, X, t, o));
                })
              : Co(t) &&
                t.forEach(function (X, nt) {
                  f.set(nt, ye(X, e, n, nt, t, o));
                }));
          var G = w ? (p ? aa : sa) : p ? re : Pt,
            j = A ? a : G(t);
          return (
            xe(j || t, function (X, nt) {
              (j && ((nt = X), (X = t[nt])), Qr(f, nt, ye(X, e, n, nt, t, o)));
            }),
            f
          );
        }
        function Qf(t) {
          var e = Pt(t);
          return function (n) {
            return cu(n, t, e);
          };
        }
        function cu(t, e, n) {
          var r = n.length;
          if (t == null) return !r;
          for (t = ct(t); r--; ) {
            var i = n[r],
              o = e[i],
              f = t[i];
            if ((f === a && !(i in t)) || !o(f)) return !1;
          }
          return !0;
        }
        function hu(t, e, n) {
          if (typeof t != "function") throw new we(b);
          return ri(function () {
            t.apply(a, n);
          }, e);
        }
        function Zr(t, e, n, r) {
          var i = -1,
            o = wi,
            f = !0,
            h = t.length,
            p = [],
            w = e.length;
          if (!h) return p;
          (n && (e = xt(e, oe(n))),
            r
              ? ((o = Is), (f = !1))
              : e.length >= I && ((o = Yr), (f = !1), (e = new zn(e))));
          t: for (; ++i < h; ) {
            var A = t[i],
              E = n == null ? A : n(A);
            if (((A = r || A !== 0 ? A : 0), f && E === E)) {
              for (var R = w; R--; ) if (e[R] === E) continue t;
              p.push(A);
            } else o(e, E, r) || p.push(A);
          }
          return p;
        }
        var bn = Wu(He),
          du = Wu(Hs, !0);
        function Zf(t, e) {
          var n = !0;
          return (
            bn(t, function (r, i, o) {
              return ((n = !!e(r, i, o)), n);
            }),
            n
          );
        }
        function Ui(t, e, n) {
          for (var r = -1, i = t.length; ++r < i; ) {
            var o = t[r],
              f = e(o);
            if (f != null && (h === a ? f === f && !fe(f) : n(f, h)))
              var h = f,
                p = o;
          }
          return p;
        }
        function Jf(t, e, n, r) {
          var i = t.length;
          for (
            n = Z(n),
              n < 0 && (n = -n > i ? 0 : i + n),
              r = r === a || r > i ? i : Z(r),
              r < 0 && (r += i),
              r = n > r ? 0 : Ro(r);
            n < r;
          )
            t[n++] = e;
          return t;
        }
        function pu(t, e) {
          var n = [];
          return (
            bn(t, function (r, i, o) {
              e(r, i, o) && n.push(r);
            }),
            n
          );
        }
        function kt(t, e, n, r, i) {
          var o = -1,
            f = t.length;
          for (n || (n = $c), i || (i = []); ++o < f; ) {
            var h = t[o];
            e > 0 && n(h)
              ? e > 1
                ? kt(h, e - 1, n, r, i)
                : wn(i, h)
              : r || (i[i.length] = h);
          }
          return i;
        }
        var ks = $u(),
          gu = $u(!0);
        function He(t, e) {
          return t && ks(t, e, Pt);
        }
        function Hs(t, e) {
          return t && gu(t, e, Pt);
        }
        function Wi(t, e) {
          return xn(e, function (n) {
            return un(t[n]);
          });
        }
        function qn(t, e) {
          e = Tn(e, t);
          for (var n = 0, r = e.length; t != null && n < r; ) t = t[Ye(e[n++])];
          return n && n == r ? t : a;
        }
        function vu(t, e, n) {
          var r = e(t);
          return Q(t) ? r : wn(r, n(t));
        }
        function Xt(t) {
          return t == null
            ? t === a
              ? us
              : pe
            : kn && kn in ct(t)
              ? Pc(t)
              : Xc(t);
        }
        function zs(t, e) {
          return t > e;
        }
        function jf(t, e) {
          return t != null && lt.call(t, e);
        }
        function tc(t, e) {
          return t != null && e in ct(t);
        }
        function ec(t, e, n) {
          return t >= Yt(e, n) && t < Rt(e, n);
        }
        function Ys(t, e, n) {
          for (
            var r = n ? Is : wi,
              i = t[0].length,
              o = t.length,
              f = o,
              h = _(o),
              p = 1 / 0,
              w = [];
            f--;
          ) {
            var A = t[f];
            (f && e && (A = xt(A, oe(e))),
              (p = Yt(A.length, p)),
              (h[f] =
                !n && (e || (i >= 120 && A.length >= 120))
                  ? new zn(f && A)
                  : a));
          }
          A = t[0];
          var E = -1,
            R = h[0];
          t: for (; ++E < i && w.length < p; ) {
            var M = A[E],
              G = e ? e(M) : M;
            if (((M = n || M !== 0 ? M : 0), !(R ? Yr(R, G) : r(w, G, n)))) {
              for (f = o; --f; ) {
                var j = h[f];
                if (!(j ? Yr(j, G) : r(t[f], G, n))) continue t;
              }
              (R && R.push(G), w.push(M));
            }
          }
          return w;
        }
        function nc(t, e, n, r) {
          return (
            He(t, function (i, o, f) {
              e(r, n(i), o, f);
            }),
            r
          );
        }
        function Jr(t, e, n) {
          ((e = Tn(e, t)), (t = ro(t, e)));
          var r = t == null ? t : t[Ye(Ee(e))];
          return r == null ? a : ue(r, t, n);
        }
        function _u(t) {
          return yt(t) && Xt(t) == hn;
        }
        function rc(t) {
          return yt(t) && Xt(t) == pn;
        }
        function ic(t) {
          return yt(t) && Xt(t) == dt;
        }
        function jr(t, e, n, r, i) {
          return t === e
            ? !0
            : t == null || e == null || (!yt(t) && !yt(e))
              ? t !== t && e !== e
              : sc(t, e, n, r, jr, i);
        }
        function sc(t, e, n, r, i, o) {
          var f = Q(t),
            h = Q(e),
            p = f ? Zn : qt(t),
            w = h ? Zn : qt(e);
          ((p = p == hn ? Wt : p), (w = w == hn ? Wt : w));
          var A = p == Wt,
            E = w == Wt,
            R = p == w;
          if (R && Cn(t)) {
            if (!Cn(e)) return !1;
            ((f = !0), (A = !1));
          }
          if (R && !A)
            return (
              o || (o = new Re()),
              f || wr(t) ? Qu(t, e, n, r, i, o) : Lc(t, e, p, n, r, i, o)
            );
          if (!(n & N)) {
            var M = A && lt.call(t, "__wrapped__"),
              G = E && lt.call(e, "__wrapped__");
            if (M || G) {
              var j = M ? t.value() : t,
                X = G ? e.value() : e;
              return (o || (o = new Re()), i(j, X, n, r, o));
            }
          }
          return R ? (o || (o = new Re()), Dc(t, e, n, r, i, o)) : !1;
        }
        function ac(t) {
          return yt(t) && qt(t) == Ut;
        }
        function qs(t, e, n, r) {
          var i = n.length,
            o = i,
            f = !r;
          if (t == null) return !o;
          for (t = ct(t); i--; ) {
            var h = n[i];
            if (f && h[2] ? h[1] !== t[h[0]] : !(h[0] in t)) return !1;
          }
          for (; ++i < o; ) {
            h = n[i];
            var p = h[0],
              w = t[p],
              A = h[1];
            if (f && h[2]) {
              if (w === a && !(p in t)) return !1;
            } else {
              var E = new Re();
              if (r) var R = r(w, A, p, t, e, E);
              if (!(R === a ? jr(A, w, N | K, r, E) : R)) return !1;
            }
          }
          return !0;
        }
        function mu(t) {
          if (!wt(t) || Hc(t)) return !1;
          var e = un(t) ? af : Bn;
          return e.test(Xn(t));
        }
        function uc(t) {
          return yt(t) && Xt(t) == $e;
        }
        function oc(t) {
          return yt(t) && qt(t) == mt;
        }
        function lc(t) {
          return yt(t) && ns(t.length) && !!vt[Xt(t)];
        }
        function xu(t) {
          return typeof t == "function"
            ? t
            : t == null
              ? ie
              : typeof t == "object"
                ? Q(t)
                  ? yu(t[0], t[1])
                  : Au(t)
                : Ho(t);
        }
        function Gs(t) {
          if (!ni(t)) return hf(t);
          var e = [];
          for (var n in ct(t)) lt.call(t, n) && n != "constructor" && e.push(n);
          return e;
        }
        function fc(t) {
          if (!wt(t)) return Gc(t);
          var e = ni(t),
            n = [];
          for (var r in t)
            (r == "constructor" && (e || !lt.call(t, r))) || n.push(r);
          return n;
        }
        function Xs(t, e) {
          return t < e;
        }
        function wu(t, e) {
          var n = -1,
            r = ne(t) ? _(t.length) : [];
          return (
            bn(t, function (i, o, f) {
              r[++n] = e(i, o, f);
            }),
            r
          );
        }
        function Au(t) {
          var e = oa(t);
          return e.length == 1 && e[0][2]
            ? eo(e[0][0], e[0][1])
            : function (n) {
                return n === t || qs(n, t, e);
              };
        }
        function yu(t, e) {
          return fa(t) && to(e)
            ? eo(Ye(t), e)
            : function (n) {
                var r = wa(n, t);
                return r === a && r === e ? Aa(n, t) : jr(e, r, N | K);
              };
        }
        function $i(t, e, n, r, i) {
          t !== e &&
            ks(
              e,
              function (o, f) {
                if ((i || (i = new Re()), wt(o))) cc(t, e, f, n, $i, r, i);
                else {
                  var h = r ? r(ha(t, f), o, f + "", t, e, i) : a;
                  (h === a && (h = o), Ws(t, f, h));
                }
              },
              re,
            );
        }
        function cc(t, e, n, r, i, o, f) {
          var h = ha(t, n),
            p = ha(e, n),
            w = f.get(p);
          if (w) {
            Ws(t, n, w);
            return;
          }
          var A = o ? o(h, p, n + "", t, e, f) : a,
            E = A === a;
          if (E) {
            var R = Q(p),
              M = !R && Cn(p),
              G = !R && !M && wr(p);
            ((A = p),
              R || M || G
                ? Q(h)
                  ? (A = h)
                  : Et(h)
                    ? (A = ee(h))
                    : M
                      ? ((E = !1), (A = Pu(p, !0)))
                      : G
                        ? ((E = !1), (A = Nu(p, !0)))
                        : (A = [])
                : ii(p) || Vn(p)
                  ? ((A = h),
                    Vn(h) ? (A = Lo(h)) : (!wt(h) || un(h)) && (A = ju(p)))
                  : (E = !1));
          }
          (E && (f.set(p, A), i(A, p, r, o, f), f.delete(p)), Ws(t, n, A));
        }
        function bu(t, e) {
          var n = t.length;
          if (!!n) return ((e += e < 0 ? n : 0), an(e, n) ? t[e] : a);
        }
        function Eu(t, e, n) {
          e.length
            ? (e = xt(e, function (o) {
                return Q(o)
                  ? function (f) {
                      return qn(f, o.length === 1 ? o[0] : o);
                    }
                  : o;
              }))
            : (e = [ie]);
          var r = -1;
          e = xt(e, oe(q()));
          var i = wu(t, function (o, f, h) {
            var p = xt(e, function (w) {
              return w(o);
            });
            return { criteria: p, index: ++r, value: o };
          });
          return Ml(i, function (o, f) {
            return Ec(o, f, n);
          });
        }
        function hc(t, e) {
          return Tu(t, e, function (n, r) {
            return Aa(t, r);
          });
        }
        function Tu(t, e, n) {
          for (var r = -1, i = e.length, o = {}; ++r < i; ) {
            var f = e[r],
              h = qn(t, f);
            n(h, f) && ti(o, Tn(f, t), h);
          }
          return o;
        }
        function dc(t) {
          return function (e) {
            return qn(e, t);
          };
        }
        function Vs(t, e, n, r) {
          var i = r ? Bl : lr,
            o = -1,
            f = e.length,
            h = t;
          for (t === e && (e = ee(e)), n && (h = xt(t, oe(n))); ++o < f; )
            for (
              var p = 0, w = e[o], A = n ? n(w) : w;
              (p = i(h, A, p, r)) > -1;
            )
              (h !== t && Oi.call(h, p, 1), Oi.call(t, p, 1));
          return t;
        }
        function Iu(t, e) {
          for (var n = t ? e.length : 0, r = n - 1; n--; ) {
            var i = e[n];
            if (n == r || i !== o) {
              var o = i;
              an(i) ? Oi.call(t, i, 1) : Js(t, i);
            }
          }
          return t;
        }
        function Ks(t, e) {
          return t + Di(au() * (e - t + 1));
        }
        function pc(t, e, n, r) {
          for (var i = -1, o = Rt(Li((e - t) / (n || 1)), 0), f = _(o); o--; )
            ((f[r ? o : ++i] = t), (t += n));
          return f;
        }
        function Qs(t, e) {
          var n = "";
          if (!t || e < 1 || e > Ue) return n;
          do (e % 2 && (n += t), (e = Di(e / 2)), e && (t += t));
          while (e);
          return n;
        }
        function tt(t, e) {
          return da(no(t, e, ie), t + "");
        }
        function gc(t) {
          return lu(Ar(t));
        }
        function vc(t, e) {
          var n = Ar(t);
          return Qi(n, Yn(e, 0, n.length));
        }
        function ti(t, e, n, r) {
          if (!wt(t)) return t;
          e = Tn(e, t);
          for (
            var i = -1, o = e.length, f = o - 1, h = t;
            h != null && ++i < o;
          ) {
            var p = Ye(e[i]),
              w = n;
            if (p === "__proto__" || p === "constructor" || p === "prototype")
              return t;
            if (i != f) {
              var A = h[p];
              ((w = r ? r(A, p, h) : a),
                w === a && (w = wt(A) ? A : an(e[i + 1]) ? [] : {}));
            }
            (Qr(h, p, w), (h = h[p]));
          }
          return t;
        }
        var Cu = Pi
            ? function (t, e) {
                return (Pi.set(t, e), t);
              }
            : ie,
          _c = Ri
            ? function (t, e) {
                return Ri(t, "toString", {
                  configurable: !0,
                  enumerable: !1,
                  value: ba(e),
                  writable: !0,
                });
              }
            : ie;
        function mc(t) {
          return Qi(Ar(t));
        }
        function be(t, e, n) {
          var r = -1,
            i = t.length;
          (e < 0 && (e = -e > i ? 0 : i + e),
            (n = n > i ? i : n),
            n < 0 && (n += i),
            (i = e > n ? 0 : (n - e) >>> 0),
            (e >>>= 0));
          for (var o = _(i); ++r < i; ) o[r] = t[r + e];
          return o;
        }
        function xc(t, e) {
          var n;
          return (
            bn(t, function (r, i, o) {
              return ((n = e(r, i, o)), !n);
            }),
            !!n
          );
        }
        function ki(t, e, n) {
          var r = 0,
            i = t == null ? r : t.length;
          if (typeof e == "number" && e === e && i <= as) {
            for (; r < i; ) {
              var o = (r + i) >>> 1,
                f = t[o];
              f !== null && !fe(f) && (n ? f <= e : f < e)
                ? (r = o + 1)
                : (i = o);
            }
            return i;
          }
          return Zs(t, e, ie, n);
        }
        function Zs(t, e, n, r) {
          var i = 0,
            o = t == null ? 0 : t.length;
          if (o === 0) return 0;
          e = n(e);
          for (
            var f = e !== e, h = e === null, p = fe(e), w = e === a;
            i < o;
          ) {
            var A = Di((i + o) / 2),
              E = n(t[A]),
              R = E !== a,
              M = E === null,
              G = E === E,
              j = fe(E);
            if (f) var X = r || G;
            else
              w
                ? (X = G && (r || R))
                : h
                  ? (X = G && R && (r || !M))
                  : p
                    ? (X = G && R && !M && (r || !j))
                    : M || j
                      ? (X = !1)
                      : (X = r ? E <= e : E < e);
            X ? (i = A + 1) : (o = A);
          }
          return Yt(o, Ln);
        }
        function Su(t, e) {
          for (var n = -1, r = t.length, i = 0, o = []; ++n < r; ) {
            var f = t[n],
              h = e ? e(f) : f;
            if (!n || !Le(h, p)) {
              var p = h;
              o[i++] = f === 0 ? 0 : f;
            }
          }
          return o;
        }
        function Fu(t) {
          return typeof t == "number" ? t : fe(t) ? Qn : +t;
        }
        function le(t) {
          if (typeof t == "string") return t;
          if (Q(t)) return xt(t, le) + "";
          if (fe(t)) return uu ? uu.call(t) : "";
          var e = t + "";
          return e == "0" && 1 / t == -Me ? "-0" : e;
        }
        function En(t, e, n) {
          var r = -1,
            i = wi,
            o = t.length,
            f = !0,
            h = [],
            p = h;
          if (n) ((f = !1), (i = Is));
          else if (o >= I) {
            var w = e ? null : Oc(t);
            if (w) return yi(w);
            ((f = !1), (i = Yr), (p = new zn()));
          } else p = e ? [] : h;
          t: for (; ++r < o; ) {
            var A = t[r],
              E = e ? e(A) : A;
            if (((A = n || A !== 0 ? A : 0), f && E === E)) {
              for (var R = p.length; R--; ) if (p[R] === E) continue t;
              (e && p.push(E), h.push(A));
            } else i(p, E, n) || (p !== h && p.push(E), h.push(A));
          }
          return h;
        }
        function Js(t, e) {
          return (
            (e = Tn(e, t)),
            (t = ro(t, e)),
            t == null || delete t[Ye(Ee(e))]
          );
        }
        function Ou(t, e, n, r) {
          return ti(t, e, n(qn(t, e)), r);
        }
        function Hi(t, e, n, r) {
          for (
            var i = t.length, o = r ? i : -1;
            (r ? o-- : ++o < i) && e(t[o], o, t);
          );
          return n
            ? be(t, r ? 0 : o, r ? o + 1 : i)
            : be(t, r ? o + 1 : 0, r ? i : o);
        }
        function Ru(t, e) {
          var n = t;
          return (
            n instanceof rt && (n = n.value()),
            Cs(
              e,
              function (r, i) {
                return i.func.apply(i.thisArg, wn([r], i.args));
              },
              n,
            )
          );
        }
        function js(t, e, n) {
          var r = t.length;
          if (r < 2) return r ? En(t[0]) : [];
          for (var i = -1, o = _(r); ++i < r; )
            for (var f = t[i], h = -1; ++h < r; )
              h != i && (o[i] = Zr(o[i] || f, t[h], e, n));
          return En(kt(o, 1), e, n);
        }
        function Lu(t, e, n) {
          for (var r = -1, i = t.length, o = e.length, f = {}; ++r < i; ) {
            var h = r < o ? e[r] : a;
            n(f, t[r], h);
          }
          return f;
        }
        function ta(t) {
          return Et(t) ? t : [];
        }
        function ea(t) {
          return typeof t == "function" ? t : ie;
        }
        function Tn(t, e) {
          return Q(t) ? t : fa(t, e) ? [t] : uo(ot(t));
        }
        var wc = tt;
        function In(t, e, n) {
          var r = t.length;
          return ((n = n === a ? r : n), !e && n >= r ? t : be(t, e, n));
        }
        var Du =
          uf ||
          function (t) {
            return $t.clearTimeout(t);
          };
        function Pu(t, e) {
          if (e) return t.slice();
          var n = t.length,
            r = eu ? eu(n) : new t.constructor(n);
          return (t.copy(r), r);
        }
        function na(t) {
          var e = new t.constructor(t.byteLength);
          return (new Si(e).set(new Si(t)), e);
        }
        function Ac(t, e) {
          var n = e ? na(t.buffer) : t.buffer;
          return new t.constructor(n, t.byteOffset, t.byteLength);
        }
        function yc(t) {
          var e = new t.constructor(t.source, Wr.exec(t));
          return ((e.lastIndex = t.lastIndex), e);
        }
        function bc(t) {
          return Kr ? ct(Kr.call(t)) : {};
        }
        function Nu(t, e) {
          var n = e ? na(t.buffer) : t.buffer;
          return new t.constructor(n, t.byteOffset, t.length);
        }
        function Bu(t, e) {
          if (t !== e) {
            var n = t !== a,
              r = t === null,
              i = t === t,
              o = fe(t),
              f = e !== a,
              h = e === null,
              p = e === e,
              w = fe(e);
            if (
              (!h && !w && !o && t > e) ||
              (o && f && p && !h && !w) ||
              (r && f && p) ||
              (!n && p) ||
              !i
            )
              return 1;
            if (
              (!r && !o && !w && t < e) ||
              (w && n && i && !r && !o) ||
              (h && n && i) ||
              (!f && i) ||
              !p
            )
              return -1;
          }
          return 0;
        }
        function Ec(t, e, n) {
          for (
            var r = -1,
              i = t.criteria,
              o = e.criteria,
              f = i.length,
              h = n.length;
            ++r < f;
          ) {
            var p = Bu(i[r], o[r]);
            if (p) {
              if (r >= h) return p;
              var w = n[r];
              return p * (w == "desc" ? -1 : 1);
            }
          }
          return t.index - e.index;
        }
        function Mu(t, e, n, r) {
          for (
            var i = -1,
              o = t.length,
              f = n.length,
              h = -1,
              p = e.length,
              w = Rt(o - f, 0),
              A = _(p + w),
              E = !r;
            ++h < p;
          )
            A[h] = e[h];
          for (; ++i < f; ) (E || i < o) && (A[n[i]] = t[i]);
          for (; w--; ) A[h++] = t[i++];
          return A;
        }
        function Uu(t, e, n, r) {
          for (
            var i = -1,
              o = t.length,
              f = -1,
              h = n.length,
              p = -1,
              w = e.length,
              A = Rt(o - h, 0),
              E = _(A + w),
              R = !r;
            ++i < A;
          )
            E[i] = t[i];
          for (var M = i; ++p < w; ) E[M + p] = e[p];
          for (; ++f < h; ) (R || i < o) && (E[M + n[f]] = t[i++]);
          return E;
        }
        function ee(t, e) {
          var n = -1,
            r = t.length;
          for (e || (e = _(r)); ++n < r; ) e[n] = t[n];
          return e;
        }
        function ze(t, e, n, r) {
          var i = !n;
          n || (n = {});
          for (var o = -1, f = e.length; ++o < f; ) {
            var h = e[o],
              p = r ? r(n[h], t[h], h, n, t) : a;
            (p === a && (p = t[h]), i ? nn(n, h, p) : Qr(n, h, p));
          }
          return n;
        }
        function Tc(t, e) {
          return ze(t, la(t), e);
        }
        function Ic(t, e) {
          return ze(t, Zu(t), e);
        }
        function zi(t, e) {
          return function (n, r) {
            var i = Q(n) ? Ol : Vf,
              o = e ? e() : {};
            return i(n, t, q(r, 2), o);
          };
        }
        function _r(t) {
          return tt(function (e, n) {
            var r = -1,
              i = n.length,
              o = i > 1 ? n[i - 1] : a,
              f = i > 2 ? n[2] : a;
            for (
              o = t.length > 3 && typeof o == "function" ? (i--, o) : a,
                f && Vt(n[0], n[1], f) && ((o = i < 3 ? a : o), (i = 1)),
                e = ct(e);
              ++r < i;
            ) {
              var h = n[r];
              h && t(e, h, r, o);
            }
            return e;
          });
        }
        function Wu(t, e) {
          return function (n, r) {
            if (n == null) return n;
            if (!ne(n)) return t(n, r);
            for (
              var i = n.length, o = e ? i : -1, f = ct(n);
              (e ? o-- : ++o < i) && r(f[o], o, f) !== !1;
            );
            return n;
          };
        }
        function $u(t) {
          return function (e, n, r) {
            for (var i = -1, o = ct(e), f = r(e), h = f.length; h--; ) {
              var p = f[t ? h : ++i];
              if (n(o[p], p, o) === !1) break;
            }
            return e;
          };
        }
        function Cc(t, e, n) {
          var r = e & et,
            i = ei(t);
          function o() {
            var f = this && this !== $t && this instanceof o ? i : t;
            return f.apply(r ? n : this, arguments);
          }
          return o;
        }
        function ku(t) {
          return function (e) {
            e = ot(e);
            var n = fr(e) ? Oe(e) : a,
              r = n ? n[0] : e.charAt(0),
              i = n ? In(n, 1).join("") : e.slice(1);
            return r[t]() + i;
          };
        }
        function mr(t) {
          return function (e) {
            return Cs($o(Wo(e).replace(vl, "")), t, "");
          };
        }
        function ei(t) {
          return function () {
            var e = arguments;
            switch (e.length) {
              case 0:
                return new t();
              case 1:
                return new t(e[0]);
              case 2:
                return new t(e[0], e[1]);
              case 3:
                return new t(e[0], e[1], e[2]);
              case 4:
                return new t(e[0], e[1], e[2], e[3]);
              case 5:
                return new t(e[0], e[1], e[2], e[3], e[4]);
              case 6:
                return new t(e[0], e[1], e[2], e[3], e[4], e[5]);
              case 7:
                return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6]);
            }
            var n = vr(t.prototype),
              r = t.apply(n, e);
            return wt(r) ? r : n;
          };
        }
        function Sc(t, e, n) {
          var r = ei(t);
          function i() {
            for (var o = arguments.length, f = _(o), h = o, p = xr(i); h--; )
              f[h] = arguments[h];
            var w = o < 3 && f[0] !== p && f[o - 1] !== p ? [] : An(f, p);
            if (((o -= w.length), o < n))
              return Gu(t, e, Yi, i.placeholder, a, f, w, a, a, n - o);
            var A = this && this !== $t && this instanceof i ? r : t;
            return ue(A, this, f);
          }
          return i;
        }
        function Hu(t) {
          return function (e, n, r) {
            var i = ct(e);
            if (!ne(e)) {
              var o = q(n, 3);
              ((e = Pt(e)),
                (n = function (h) {
                  return o(i[h], h, i);
                }));
            }
            var f = t(e, n, r);
            return f > -1 ? i[o ? e[f] : f] : a;
          };
        }
        function zu(t) {
          return sn(function (e) {
            var n = e.length,
              r = n,
              i = Ae.prototype.thru;
            for (t && e.reverse(); r--; ) {
              var o = e[r];
              if (typeof o != "function") throw new we(b);
              if (i && !f && Vi(o) == "wrapper") var f = new Ae([], !0);
            }
            for (r = f ? r : n; ++r < n; ) {
              o = e[r];
              var h = Vi(o),
                p = h == "wrapper" ? ua(o) : a;
              p &&
              ca(p[0]) &&
              p[1] == (Lt | At | ft | Ie) &&
              !p[4].length &&
              p[9] == 1
                ? (f = f[Vi(p[0])].apply(f, p[3]))
                : (f = o.length == 1 && ca(o) ? f[h]() : f.thru(o));
            }
            return function () {
              var w = arguments,
                A = w[0];
              if (f && w.length == 1 && Q(A)) return f.plant(A).value();
              for (var E = 0, R = n ? e[E].apply(this, w) : A; ++E < n; )
                R = e[E].call(this, R);
              return R;
            };
          });
        }
        function Yi(t, e, n, r, i, o, f, h, p, w) {
          var A = e & Lt,
            E = e & et,
            R = e & at,
            M = e & (At | Gt),
            G = e & Zt,
            j = R ? a : ei(t);
          function X() {
            for (var nt = arguments.length, it = _(nt), ce = nt; ce--; )
              it[ce] = arguments[ce];
            if (M)
              var Kt = xr(X),
                he = Wl(it, Kt);
            if (
              (r && (it = Mu(it, r, i, M)),
              o && (it = Uu(it, o, f, M)),
              (nt -= he),
              M && nt < w)
            ) {
              var Tt = An(it, Kt);
              return Gu(t, e, Yi, X.placeholder, n, it, Tt, h, p, w - nt);
            }
            var De = E ? n : this,
              ln = R ? De[t] : t;
            return (
              (nt = it.length),
              h ? (it = Vc(it, h)) : G && nt > 1 && it.reverse(),
              A && p < nt && (it.length = p),
              this && this !== $t && this instanceof X && (ln = j || ei(ln)),
              ln.apply(De, it)
            );
          }
          return X;
        }
        function Yu(t, e) {
          return function (n, r) {
            return nc(n, t, e(r), {});
          };
        }
        function qi(t, e) {
          return function (n, r) {
            var i;
            if (n === a && r === a) return e;
            if ((n !== a && (i = n), r !== a)) {
              if (i === a) return r;
              (typeof n == "string" || typeof r == "string"
                ? ((n = le(n)), (r = le(r)))
                : ((n = Fu(n)), (r = Fu(r))),
                (i = t(n, r)));
            }
            return i;
          };
        }
        function ra(t) {
          return sn(function (e) {
            return (
              (e = xt(e, oe(q()))),
              tt(function (n) {
                var r = this;
                return t(e, function (i) {
                  return ue(i, r, n);
                });
              })
            );
          });
        }
        function Gi(t, e) {
          e = e === a ? " " : le(e);
          var n = e.length;
          if (n < 2) return n ? Qs(e, t) : e;
          var r = Qs(e, Li(t / cr(e)));
          return fr(e) ? In(Oe(r), 0, t).join("") : r.slice(0, t);
        }
        function Fc(t, e, n, r) {
          var i = e & et,
            o = ei(t);
          function f() {
            for (
              var h = -1,
                p = arguments.length,
                w = -1,
                A = r.length,
                E = _(A + p),
                R = this && this !== $t && this instanceof f ? o : t;
              ++w < A;
            )
              E[w] = r[w];
            for (; p--; ) E[w++] = arguments[++h];
            return ue(R, i ? n : this, E);
          }
          return f;
        }
        function qu(t) {
          return function (e, n, r) {
            return (
              r && typeof r != "number" && Vt(e, n, r) && (n = r = a),
              (e = on(e)),
              n === a ? ((n = e), (e = 0)) : (n = on(n)),
              (r = r === a ? (e < n ? 1 : -1) : on(r)),
              pc(e, n, r, t)
            );
          };
        }
        function Xi(t) {
          return function (e, n) {
            return (
              (typeof e == "string" && typeof n == "string") ||
                ((e = Te(e)), (n = Te(n))),
              t(e, n)
            );
          };
        }
        function Gu(t, e, n, r, i, o, f, h, p, w) {
          var A = e & At,
            E = A ? f : a,
            R = A ? a : f,
            M = A ? o : a,
            G = A ? a : o;
          ((e |= A ? ft : Ct),
            (e &= ~(A ? Ct : ft)),
            e & ut || (e &= ~(et | at)));
          var j = [t, e, i, M, E, G, R, h, p, w],
            X = n.apply(a, j);
          return (ca(t) && io(X, j), (X.placeholder = r), so(X, t, e));
        }
        function ia(t) {
          var e = Ot[t];
          return function (n, r) {
            if (
              ((n = Te(n)), (r = r == null ? 0 : Yt(Z(r), 292)), r && su(n))
            ) {
              var i = (ot(n) + "e").split("e"),
                o = e(i[0] + "e" + (+i[1] + r));
              return (
                (i = (ot(o) + "e").split("e")),
                +(i[0] + "e" + (+i[1] - r))
              );
            }
            return e(n);
          };
        }
        var Oc =
          pr && 1 / yi(new pr([, -0]))[1] == Me
            ? function (t) {
                return new pr(t);
              }
            : Ia;
        function Xu(t) {
          return function (e) {
            var n = qt(e);
            return n == Ut ? Ps(e) : n == mt ? Gl(e) : Ul(e, t(e));
          };
        }
        function rn(t, e, n, r, i, o, f, h) {
          var p = e & at;
          if (!p && typeof t != "function") throw new we(b);
          var w = r ? r.length : 0;
          if (
            (w || ((e &= ~(ft | Ct)), (r = i = a)),
            (f = f === a ? f : Rt(Z(f), 0)),
            (h = h === a ? h : Z(h)),
            (w -= i ? i.length : 0),
            e & Ct)
          ) {
            var A = r,
              E = i;
            r = i = a;
          }
          var R = p ? a : ua(t),
            M = [t, e, n, r, i, A, E, o, f, h];
          if (
            (R && qc(M, R),
            (t = M[0]),
            (e = M[1]),
            (n = M[2]),
            (r = M[3]),
            (i = M[4]),
            (h = M[9] = M[9] === a ? (p ? 0 : t.length) : Rt(M[9] - w, 0)),
            !h && e & (At | Gt) && (e &= ~(At | Gt)),
            !e || e == et)
          )
            var G = Cc(t, e, n);
          else
            e == At || e == Gt
              ? (G = Sc(t, e, h))
              : (e == ft || e == (et | ft)) && !i.length
                ? (G = Fc(t, e, n, r))
                : (G = Yi.apply(a, M));
          var j = R ? Cu : io;
          return so(j(G, M), t, e);
        }
        function Vu(t, e, n, r) {
          return t === a || (Le(t, dr[n]) && !lt.call(r, n)) ? e : t;
        }
        function Ku(t, e, n, r, i, o) {
          return (
            wt(t) && wt(e) && (o.set(e, t), $i(t, e, a, Ku, o), o.delete(e)),
            t
          );
        }
        function Rc(t) {
          return ii(t) ? a : t;
        }
        function Qu(t, e, n, r, i, o) {
          var f = n & N,
            h = t.length,
            p = e.length;
          if (h != p && !(f && p > h)) return !1;
          var w = o.get(t),
            A = o.get(e);
          if (w && A) return w == e && A == t;
          var E = -1,
            R = !0,
            M = n & K ? new zn() : a;
          for (o.set(t, e), o.set(e, t); ++E < h; ) {
            var G = t[E],
              j = e[E];
            if (r) var X = f ? r(j, G, E, e, t, o) : r(G, j, E, t, e, o);
            if (X !== a) {
              if (X) continue;
              R = !1;
              break;
            }
            if (M) {
              if (
                !Ss(e, function (nt, it) {
                  if (!Yr(M, it) && (G === nt || i(G, nt, n, r, o)))
                    return M.push(it);
                })
              ) {
                R = !1;
                break;
              }
            } else if (!(G === j || i(G, j, n, r, o))) {
              R = !1;
              break;
            }
          }
          return (o.delete(t), o.delete(e), R);
        }
        function Lc(t, e, n, r, i, o, f) {
          switch (n) {
            case Qe:
              if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
                return !1;
              ((t = t.buffer), (e = e.buffer));
            case pn:
              return !(
                t.byteLength != e.byteLength || !o(new Si(t), new Si(e))
              );
            case se:
            case dt:
            case Se:
              return Le(+t, +e);
            case Ke:
              return t.name == e.name && t.message == e.message;
            case $e:
            case Dn:
              return t == e + "";
            case Ut:
              var h = Ps;
            case mt:
              var p = r & N;
              if ((h || (h = yi), t.size != e.size && !p)) return !1;
              var w = f.get(t);
              if (w) return w == e;
              ((r |= K), f.set(t, e));
              var A = Qu(h(t), h(e), r, i, o, f);
              return (f.delete(t), A);
            case Jn:
              if (Kr) return Kr.call(t) == Kr.call(e);
          }
          return !1;
        }
        function Dc(t, e, n, r, i, o) {
          var f = n & N,
            h = sa(t),
            p = h.length,
            w = sa(e),
            A = w.length;
          if (p != A && !f) return !1;
          for (var E = p; E--; ) {
            var R = h[E];
            if (!(f ? R in e : lt.call(e, R))) return !1;
          }
          var M = o.get(t),
            G = o.get(e);
          if (M && G) return M == e && G == t;
          var j = !0;
          (o.set(t, e), o.set(e, t));
          for (var X = f; ++E < p; ) {
            R = h[E];
            var nt = t[R],
              it = e[R];
            if (r) var ce = f ? r(it, nt, R, e, t, o) : r(nt, it, R, t, e, o);
            if (!(ce === a ? nt === it || i(nt, it, n, r, o) : ce)) {
              j = !1;
              break;
            }
            X || (X = R == "constructor");
          }
          if (j && !X) {
            var Kt = t.constructor,
              he = e.constructor;
            Kt != he &&
              "constructor" in t &&
              "constructor" in e &&
              !(
                typeof Kt == "function" &&
                Kt instanceof Kt &&
                typeof he == "function" &&
                he instanceof he
              ) &&
              (j = !1);
          }
          return (o.delete(t), o.delete(e), j);
        }
        function sn(t) {
          return da(no(t, a, co), t + "");
        }
        function sa(t) {
          return vu(t, Pt, la);
        }
        function aa(t) {
          return vu(t, re, Zu);
        }
        var ua = Pi
          ? function (t) {
              return Pi.get(t);
            }
          : Ia;
        function Vi(t) {
          for (
            var e = t.name + "", n = gr[e], r = lt.call(gr, e) ? n.length : 0;
            r--;
          ) {
            var i = n[r],
              o = i.func;
            if (o == null || o == t) return i.name;
          }
          return e;
        }
        function xr(t) {
          var e = lt.call(u, "placeholder") ? u : t;
          return e.placeholder;
        }
        function q() {
          var t = u.iteratee || Ea;
          return (
            (t = t === Ea ? xu : t),
            arguments.length ? t(arguments[0], arguments[1]) : t
          );
        }
        function Ki(t, e) {
          var n = t.__data__;
          return kc(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
        }
        function oa(t) {
          for (var e = Pt(t), n = e.length; n--; ) {
            var r = e[n],
              i = t[r];
            e[n] = [r, i, to(i)];
          }
          return e;
        }
        function Gn(t, e) {
          var n = zl(t, e);
          return mu(n) ? n : a;
        }
        function Pc(t) {
          var e = lt.call(t, kn),
            n = t[kn];
          try {
            t[kn] = a;
            var r = !0;
          } catch (o) {}
          var i = Ii.call(t);
          return (r && (e ? (t[kn] = n) : delete t[kn]), i);
        }
        var la = Bs
            ? function (t) {
                return t == null
                  ? []
                  : ((t = ct(t)),
                    xn(Bs(t), function (e) {
                      return ru.call(t, e);
                    }));
              }
            : Ca,
          Zu = Bs
            ? function (t) {
                for (var e = []; t; ) (wn(e, la(t)), (t = Fi(t)));
                return e;
              }
            : Ca,
          qt = Xt;
        ((Ms && qt(new Ms(new ArrayBuffer(1))) != Qe) ||
          (Gr && qt(new Gr()) != Ut) ||
          (Us && qt(Us.resolve()) != Cr) ||
          (pr && qt(new pr()) != mt) ||
          (Xr && qt(new Xr()) != Pn)) &&
          (qt = function (t) {
            var e = Xt(t),
              n = e == Wt ? t.constructor : a,
              r = n ? Xn(n) : "";
            if (r)
              switch (r) {
                case vf:
                  return Qe;
                case _f:
                  return Ut;
                case mf:
                  return Cr;
                case xf:
                  return mt;
                case wf:
                  return Pn;
              }
            return e;
          });
        function Nc(t, e, n) {
          for (var r = -1, i = n.length; ++r < i; ) {
            var o = n[r],
              f = o.size;
            switch (o.type) {
              case "drop":
                t += f;
                break;
              case "dropRight":
                e -= f;
                break;
              case "take":
                e = Yt(e, t + f);
                break;
              case "takeRight":
                t = Rt(t, e - f);
                break;
            }
          }
          return { start: t, end: e };
        }
        function Bc(t) {
          var e = t.match(ms);
          return e ? e[1].split(di) : [];
        }
        function Ju(t, e, n) {
          e = Tn(e, t);
          for (var r = -1, i = e.length, o = !1; ++r < i; ) {
            var f = Ye(e[r]);
            if (!(o = t != null && n(t, f))) break;
            t = t[f];
          }
          return o || ++r != i
            ? o
            : ((i = t == null ? 0 : t.length),
              !!i && ns(i) && an(f, i) && (Q(t) || Vn(t)));
        }
        function Mc(t) {
          var e = t.length,
            n = new t.constructor(e);
          return (
            e &&
              typeof t[0] == "string" &&
              lt.call(t, "index") &&
              ((n.index = t.index), (n.input = t.input)),
            n
          );
        }
        function ju(t) {
          return typeof t.constructor == "function" && !ni(t) ? vr(Fi(t)) : {};
        }
        function Uc(t, e, n) {
          var r = t.constructor;
          switch (e) {
            case pn:
              return na(t);
            case se:
            case dt:
              return new r(+t);
            case Qe:
              return Ac(t, n);
            case jn:
            case tr:
            case gn:
            case Nn:
            case Sr:
            case Fr:
            case Or:
            case Rr:
            case Lr:
              return Nu(t, n);
            case Ut:
              return new r();
            case Se:
            case Dn:
              return new r(t);
            case $e:
              return yc(t);
            case mt:
              return new r();
            case Jn:
              return bc(t);
          }
        }
        function Wc(t, e) {
          var n = e.length;
          if (!n) return t;
          var r = n - 1;
          return (
            (e[r] = (n > 1 ? "& " : "") + e[r]),
            (e = e.join(n > 2 ? ", " : " ")),
            t.replace(
              Ur,
              `{
/* [wrapped with ` +
                e +
                `] */
`,
            )
          );
        }
        function $c(t) {
          return Q(t) || Vn(t) || !!(iu && t && t[iu]);
        }
        function an(t, e) {
          var n = typeof t;
          return (
            (e = e == null ? Ue : e),
            !!e &&
              (n == "number" || (n != "symbol" && nr.test(t))) &&
              t > -1 &&
              t % 1 == 0 &&
              t < e
          );
        }
        function Vt(t, e, n) {
          if (!wt(n)) return !1;
          var r = typeof e;
          return (
            r == "number" ? ne(n) && an(e, n.length) : r == "string" && e in n
          )
            ? Le(n[e], t)
            : !1;
        }
        function fa(t, e) {
          if (Q(t)) return !1;
          var n = typeof t;
          return n == "number" ||
            n == "symbol" ||
            n == "boolean" ||
            t == null ||
            fe(t)
            ? !0
            : gs.test(t) || !ps.test(t) || (e != null && t in ct(e));
        }
        function kc(t) {
          var e = typeof t;
          return e == "string" ||
            e == "number" ||
            e == "symbol" ||
            e == "boolean"
            ? t !== "__proto__"
            : t === null;
        }
        function ca(t) {
          var e = Vi(t),
            n = u[e];
          if (typeof n != "function" || !(e in rt.prototype)) return !1;
          if (t === n) return !0;
          var r = ua(n);
          return !!r && t === r[0];
        }
        function Hc(t) {
          return !!tu && tu in t;
        }
        var zc = Ei ? un : Sa;
        function ni(t) {
          var e = t && t.constructor,
            n = (typeof e == "function" && e.prototype) || dr;
          return t === n;
        }
        function to(t) {
          return t === t && !wt(t);
        }
        function eo(t, e) {
          return function (n) {
            return n == null ? !1 : n[t] === e && (e !== a || t in ct(n));
          };
        }
        function Yc(t) {
          var e = ts(t, function (r) {
              return (n.size === U && n.clear(), r);
            }),
            n = e.cache;
          return e;
        }
        function qc(t, e) {
          var n = t[1],
            r = e[1],
            i = n | r,
            o = i < (et | at | Lt),
            f =
              (r == Lt && n == At) ||
              (r == Lt && n == Ie && t[7].length <= e[8]) ||
              (r == (Lt | Ie) && e[7].length <= e[8] && n == At);
          if (!(o || f)) return t;
          r & et && ((t[2] = e[2]), (i |= n & et ? 0 : ut));
          var h = e[3];
          if (h) {
            var p = t[3];
            ((t[3] = p ? Mu(p, h, e[4]) : h), (t[4] = p ? An(t[3], B) : e[4]));
          }
          return (
            (h = e[5]),
            h &&
              ((p = t[5]),
              (t[5] = p ? Uu(p, h, e[6]) : h),
              (t[6] = p ? An(t[5], B) : e[6])),
            (h = e[7]),
            h && (t[7] = h),
            r & Lt && (t[8] = t[8] == null ? e[8] : Yt(t[8], e[8])),
            t[9] == null && (t[9] = e[9]),
            (t[0] = e[0]),
            (t[1] = i),
            t
          );
        }
        function Gc(t) {
          var e = [];
          if (t != null) for (var n in ct(t)) e.push(n);
          return e;
        }
        function Xc(t) {
          return Ii.call(t);
        }
        function no(t, e, n) {
          return (
            (e = Rt(e === a ? t.length - 1 : e, 0)),
            function () {
              for (
                var r = arguments, i = -1, o = Rt(r.length - e, 0), f = _(o);
                ++i < o;
              )
                f[i] = r[e + i];
              i = -1;
              for (var h = _(e + 1); ++i < e; ) h[i] = r[i];
              return ((h[e] = n(f)), ue(t, this, h));
            }
          );
        }
        function ro(t, e) {
          return e.length < 2 ? t : qn(t, be(e, 0, -1));
        }
        function Vc(t, e) {
          for (var n = t.length, r = Yt(e.length, n), i = ee(t); r--; ) {
            var o = e[r];
            t[r] = an(o, n) ? i[o] : a;
          }
          return t;
        }
        function ha(t, e) {
          if (
            !(e === "constructor" && typeof t[e] == "function") &&
            e != "__proto__"
          )
            return t[e];
        }
        var io = ao(Cu),
          ri =
            lf ||
            function (t, e) {
              return $t.setTimeout(t, e);
            },
          da = ao(_c);
        function so(t, e, n) {
          var r = e + "";
          return da(t, Wc(r, Kc(Bc(r), n)));
        }
        function ao(t) {
          var e = 0,
            n = 0;
          return function () {
            var r = df(),
              i = Rn - (r - n);
            if (((n = r), i > 0)) {
              if (++e >= Xe) return arguments[0];
            } else e = 0;
            return t.apply(a, arguments);
          };
        }
        function Qi(t, e) {
          var n = -1,
            r = t.length,
            i = r - 1;
          for (e = e === a ? r : e; ++n < e; ) {
            var o = Ks(n, i),
              f = t[o];
            ((t[o] = t[n]), (t[n] = f));
          }
          return ((t.length = e), t);
        }
        var uo = Yc(function (t) {
          var e = [];
          return (
            t.charCodeAt(0) === 46 && e.push(""),
            t.replace(vs, function (n, r, i, o) {
              e.push(i ? o.replace(gi, "$1") : r || n);
            }),
            e
          );
        });
        function Ye(t) {
          if (typeof t == "string" || fe(t)) return t;
          var e = t + "";
          return e == "0" && 1 / t == -Me ? "-0" : e;
        }
        function Xn(t) {
          if (t != null) {
            try {
              return Ti.call(t);
            } catch (e) {}
            try {
              return t + "";
            } catch (e) {}
          }
          return "";
        }
        function Kc(t, e) {
          return (
            xe(Ir, function (n) {
              var r = "_." + n[0];
              e & n[1] && !wi(t, r) && t.push(r);
            }),
            t.sort()
          );
        }
        function oo(t) {
          if (t instanceof rt) return t.clone();
          var e = new Ae(t.__wrapped__, t.__chain__);
          return (
            (e.__actions__ = ee(t.__actions__)),
            (e.__index__ = t.__index__),
            (e.__values__ = t.__values__),
            e
          );
        }
        function Qc(t, e, n) {
          (n ? Vt(t, e, n) : e === a) ? (e = 1) : (e = Rt(Z(e), 0));
          var r = t == null ? 0 : t.length;
          if (!r || e < 1) return [];
          for (var i = 0, o = 0, f = _(Li(r / e)); i < r; )
            f[o++] = be(t, i, (i += e));
          return f;
        }
        function Zc(t) {
          for (
            var e = -1, n = t == null ? 0 : t.length, r = 0, i = [];
            ++e < n;
          ) {
            var o = t[e];
            o && (i[r++] = o);
          }
          return i;
        }
        function Jc() {
          var t = arguments.length;
          if (!t) return [];
          for (var e = _(t - 1), n = arguments[0], r = t; r--; )
            e[r - 1] = arguments[r];
          return wn(Q(n) ? ee(n) : [n], kt(e, 1));
        }
        var jc = tt(function (t, e) {
            return Et(t) ? Zr(t, kt(e, 1, Et, !0)) : [];
          }),
          th = tt(function (t, e) {
            var n = Ee(e);
            return (
              Et(n) && (n = a),
              Et(t) ? Zr(t, kt(e, 1, Et, !0), q(n, 2)) : []
            );
          }),
          eh = tt(function (t, e) {
            var n = Ee(e);
            return (
              Et(n) && (n = a),
              Et(t) ? Zr(t, kt(e, 1, Et, !0), a, n) : []
            );
          });
        function nh(t, e, n) {
          var r = t == null ? 0 : t.length;
          return r
            ? ((e = n || e === a ? 1 : Z(e)), be(t, e < 0 ? 0 : e, r))
            : [];
        }
        function rh(t, e, n) {
          var r = t == null ? 0 : t.length;
          return r
            ? ((e = n || e === a ? 1 : Z(e)),
              (e = r - e),
              be(t, 0, e < 0 ? 0 : e))
            : [];
        }
        function ih(t, e) {
          return t && t.length ? Hi(t, q(e, 3), !0, !0) : [];
        }
        function sh(t, e) {
          return t && t.length ? Hi(t, q(e, 3), !0) : [];
        }
        function ah(t, e, n, r) {
          var i = t == null ? 0 : t.length;
          return i
            ? (n && typeof n != "number" && Vt(t, e, n) && ((n = 0), (r = i)),
              Jf(t, e, n, r))
            : [];
        }
        function lo(t, e, n) {
          var r = t == null ? 0 : t.length;
          if (!r) return -1;
          var i = n == null ? 0 : Z(n);
          return (i < 0 && (i = Rt(r + i, 0)), Ai(t, q(e, 3), i));
        }
        function fo(t, e, n) {
          var r = t == null ? 0 : t.length;
          if (!r) return -1;
          var i = r - 1;
          return (
            n !== a && ((i = Z(n)), (i = n < 0 ? Rt(r + i, 0) : Yt(i, r - 1))),
            Ai(t, q(e, 3), i, !0)
          );
        }
        function co(t) {
          var e = t == null ? 0 : t.length;
          return e ? kt(t, 1) : [];
        }
        function uh(t) {
          var e = t == null ? 0 : t.length;
          return e ? kt(t, Me) : [];
        }
        function oh(t, e) {
          var n = t == null ? 0 : t.length;
          return n ? ((e = e === a ? 1 : Z(e)), kt(t, e)) : [];
        }
        function lh(t) {
          for (var e = -1, n = t == null ? 0 : t.length, r = {}; ++e < n; ) {
            var i = t[e];
            r[i[0]] = i[1];
          }
          return r;
        }
        function ho(t) {
          return t && t.length ? t[0] : a;
        }
        function fh(t, e, n) {
          var r = t == null ? 0 : t.length;
          if (!r) return -1;
          var i = n == null ? 0 : Z(n);
          return (i < 0 && (i = Rt(r + i, 0)), lr(t, e, i));
        }
        function ch(t) {
          var e = t == null ? 0 : t.length;
          return e ? be(t, 0, -1) : [];
        }
        var hh = tt(function (t) {
            var e = xt(t, ta);
            return e.length && e[0] === t[0] ? Ys(e) : [];
          }),
          dh = tt(function (t) {
            var e = Ee(t),
              n = xt(t, ta);
            return (
              e === Ee(n) ? (e = a) : n.pop(),
              n.length && n[0] === t[0] ? Ys(n, q(e, 2)) : []
            );
          }),
          ph = tt(function (t) {
            var e = Ee(t),
              n = xt(t, ta);
            return (
              (e = typeof e == "function" ? e : a),
              e && n.pop(),
              n.length && n[0] === t[0] ? Ys(n, a, e) : []
            );
          });
        function gh(t, e) {
          return t == null ? "" : cf.call(t, e);
        }
        function Ee(t) {
          var e = t == null ? 0 : t.length;
          return e ? t[e - 1] : a;
        }
        function vh(t, e, n) {
          var r = t == null ? 0 : t.length;
          if (!r) return -1;
          var i = r;
          return (
            n !== a && ((i = Z(n)), (i = i < 0 ? Rt(r + i, 0) : Yt(i, r - 1))),
            e === e ? Vl(t, e, i) : Ai(t, Ga, i, !0)
          );
        }
        function _h(t, e) {
          return t && t.length ? bu(t, Z(e)) : a;
        }
        var mh = tt(po);
        function po(t, e) {
          return t && t.length && e && e.length ? Vs(t, e) : t;
        }
        function xh(t, e, n) {
          return t && t.length && e && e.length ? Vs(t, e, q(n, 2)) : t;
        }
        function wh(t, e, n) {
          return t && t.length && e && e.length ? Vs(t, e, a, n) : t;
        }
        var Ah = sn(function (t, e) {
          var n = t == null ? 0 : t.length,
            r = $s(t, e);
          return (
            Iu(
              t,
              xt(e, function (i) {
                return an(i, n) ? +i : i;
              }).sort(Bu),
            ),
            r
          );
        });
        function yh(t, e) {
          var n = [];
          if (!(t && t.length)) return n;
          var r = -1,
            i = [],
            o = t.length;
          for (e = q(e, 3); ++r < o; ) {
            var f = t[r];
            e(f, r, t) && (n.push(f), i.push(r));
          }
          return (Iu(t, i), n);
        }
        function pa(t) {
          return t == null ? t : gf.call(t);
        }
        function bh(t, e, n) {
          var r = t == null ? 0 : t.length;
          return r
            ? (n && typeof n != "number" && Vt(t, e, n)
                ? ((e = 0), (n = r))
                : ((e = e == null ? 0 : Z(e)), (n = n === a ? r : Z(n))),
              be(t, e, n))
            : [];
        }
        function Eh(t, e) {
          return ki(t, e);
        }
        function Th(t, e, n) {
          return Zs(t, e, q(n, 2));
        }
        function Ih(t, e) {
          var n = t == null ? 0 : t.length;
          if (n) {
            var r = ki(t, e);
            if (r < n && Le(t[r], e)) return r;
          }
          return -1;
        }
        function Ch(t, e) {
          return ki(t, e, !0);
        }
        function Sh(t, e, n) {
          return Zs(t, e, q(n, 2), !0);
        }
        function Fh(t, e) {
          var n = t == null ? 0 : t.length;
          if (n) {
            var r = ki(t, e, !0) - 1;
            if (Le(t[r], e)) return r;
          }
          return -1;
        }
        function Oh(t) {
          return t && t.length ? Su(t) : [];
        }
        function Rh(t, e) {
          return t && t.length ? Su(t, q(e, 2)) : [];
        }
        function Lh(t) {
          var e = t == null ? 0 : t.length;
          return e ? be(t, 1, e) : [];
        }
        function Dh(t, e, n) {
          return t && t.length
            ? ((e = n || e === a ? 1 : Z(e)), be(t, 0, e < 0 ? 0 : e))
            : [];
        }
        function Ph(t, e, n) {
          var r = t == null ? 0 : t.length;
          return r
            ? ((e = n || e === a ? 1 : Z(e)),
              (e = r - e),
              be(t, e < 0 ? 0 : e, r))
            : [];
        }
        function Nh(t, e) {
          return t && t.length ? Hi(t, q(e, 3), !1, !0) : [];
        }
        function Bh(t, e) {
          return t && t.length ? Hi(t, q(e, 3)) : [];
        }
        var Mh = tt(function (t) {
            return En(kt(t, 1, Et, !0));
          }),
          Uh = tt(function (t) {
            var e = Ee(t);
            return (Et(e) && (e = a), En(kt(t, 1, Et, !0), q(e, 2)));
          }),
          Wh = tt(function (t) {
            var e = Ee(t);
            return (
              (e = typeof e == "function" ? e : a),
              En(kt(t, 1, Et, !0), a, e)
            );
          });
        function $h(t) {
          return t && t.length ? En(t) : [];
        }
        function kh(t, e) {
          return t && t.length ? En(t, q(e, 2)) : [];
        }
        function Hh(t, e) {
          return (
            (e = typeof e == "function" ? e : a),
            t && t.length ? En(t, a, e) : []
          );
        }
        function ga(t) {
          if (!(t && t.length)) return [];
          var e = 0;
          return (
            (t = xn(t, function (n) {
              if (Et(n)) return ((e = Rt(n.length, e)), !0);
            })),
            Ls(e, function (n) {
              return xt(t, Fs(n));
            })
          );
        }
        function go(t, e) {
          if (!(t && t.length)) return [];
          var n = ga(t);
          return e == null
            ? n
            : xt(n, function (r) {
                return ue(e, a, r);
              });
        }
        var zh = tt(function (t, e) {
            return Et(t) ? Zr(t, e) : [];
          }),
          Yh = tt(function (t) {
            return js(xn(t, Et));
          }),
          qh = tt(function (t) {
            var e = Ee(t);
            return (Et(e) && (e = a), js(xn(t, Et), q(e, 2)));
          }),
          Gh = tt(function (t) {
            var e = Ee(t);
            return ((e = typeof e == "function" ? e : a), js(xn(t, Et), a, e));
          }),
          Xh = tt(ga);
        function Vh(t, e) {
          return Lu(t || [], e || [], Qr);
        }
        function Kh(t, e) {
          return Lu(t || [], e || [], ti);
        }
        var Qh = tt(function (t) {
          var e = t.length,
            n = e > 1 ? t[e - 1] : a;
          return ((n = typeof n == "function" ? (t.pop(), n) : a), go(t, n));
        });
        function vo(t) {
          var e = u(t);
          return ((e.__chain__ = !0), e);
        }
        function Zh(t, e) {
          return (e(t), t);
        }
        function Zi(t, e) {
          return e(t);
        }
        var Jh = sn(function (t) {
          var e = t.length,
            n = e ? t[0] : 0,
            r = this.__wrapped__,
            i = function (o) {
              return $s(o, t);
            };
          return e > 1 ||
            this.__actions__.length ||
            !(r instanceof rt) ||
            !an(n)
            ? this.thru(i)
            : ((r = r.slice(n, +n + (e ? 1 : 0))),
              r.__actions__.push({ func: Zi, args: [i], thisArg: a }),
              new Ae(r, this.__chain__).thru(function (o) {
                return (e && !o.length && o.push(a), o);
              }));
        });
        function jh() {
          return vo(this);
        }
        function td() {
          return new Ae(this.value(), this.__chain__);
        }
        function ed() {
          this.__values__ === a && (this.__values__ = Oo(this.value()));
          var t = this.__index__ >= this.__values__.length,
            e = t ? a : this.__values__[this.__index__++];
          return { done: t, value: e };
        }
        function nd() {
          return this;
        }
        function rd(t) {
          for (var e, n = this; n instanceof Bi; ) {
            var r = oo(n);
            ((r.__index__ = 0),
              (r.__values__ = a),
              e ? (i.__wrapped__ = r) : (e = r));
            var i = r;
            n = n.__wrapped__;
          }
          return ((i.__wrapped__ = t), e);
        }
        function id() {
          var t = this.__wrapped__;
          if (t instanceof rt) {
            var e = t;
            return (
              this.__actions__.length && (e = new rt(this)),
              (e = e.reverse()),
              e.__actions__.push({ func: Zi, args: [pa], thisArg: a }),
              new Ae(e, this.__chain__)
            );
          }
          return this.thru(pa);
        }
        function sd() {
          return Ru(this.__wrapped__, this.__actions__);
        }
        var ad = zi(function (t, e, n) {
          lt.call(t, n) ? ++t[n] : nn(t, n, 1);
        });
        function ud(t, e, n) {
          var r = Q(t) ? Ya : Zf;
          return (n && Vt(t, e, n) && (e = a), r(t, q(e, 3)));
        }
        function od(t, e) {
          var n = Q(t) ? xn : pu;
          return n(t, q(e, 3));
        }
        var ld = Hu(lo),
          fd = Hu(fo);
        function cd(t, e) {
          return kt(Ji(t, e), 1);
        }
        function hd(t, e) {
          return kt(Ji(t, e), Me);
        }
        function dd(t, e, n) {
          return ((n = n === a ? 1 : Z(n)), kt(Ji(t, e), n));
        }
        function _o(t, e) {
          var n = Q(t) ? xe : bn;
          return n(t, q(e, 3));
        }
        function mo(t, e) {
          var n = Q(t) ? Rl : du;
          return n(t, q(e, 3));
        }
        var pd = zi(function (t, e, n) {
          lt.call(t, n) ? t[n].push(e) : nn(t, n, [e]);
        });
        function gd(t, e, n, r) {
          ((t = ne(t) ? t : Ar(t)), (n = n && !r ? Z(n) : 0));
          var i = t.length;
          return (
            n < 0 && (n = Rt(i + n, 0)),
            rs(t) ? n <= i && t.indexOf(e, n) > -1 : !!i && lr(t, e, n) > -1
          );
        }
        var vd = tt(function (t, e, n) {
            var r = -1,
              i = typeof e == "function",
              o = ne(t) ? _(t.length) : [];
            return (
              bn(t, function (f) {
                o[++r] = i ? ue(e, f, n) : Jr(f, e, n);
              }),
              o
            );
          }),
          _d = zi(function (t, e, n) {
            nn(t, n, e);
          });
        function Ji(t, e) {
          var n = Q(t) ? xt : wu;
          return n(t, q(e, 3));
        }
        function md(t, e, n, r) {
          return t == null
            ? []
            : (Q(e) || (e = e == null ? [] : [e]),
              (n = r ? a : n),
              Q(n) || (n = n == null ? [] : [n]),
              Eu(t, e, n));
        }
        var xd = zi(
          function (t, e, n) {
            t[n ? 0 : 1].push(e);
          },
          function () {
            return [[], []];
          },
        );
        function wd(t, e, n) {
          var r = Q(t) ? Cs : Va,
            i = arguments.length < 3;
          return r(t, q(e, 4), n, i, bn);
        }
        function Ad(t, e, n) {
          var r = Q(t) ? Ll : Va,
            i = arguments.length < 3;
          return r(t, q(e, 4), n, i, du);
        }
        function yd(t, e) {
          var n = Q(t) ? xn : pu;
          return n(t, es(q(e, 3)));
        }
        function bd(t) {
          var e = Q(t) ? lu : gc;
          return e(t);
        }
        function Ed(t, e, n) {
          (n ? Vt(t, e, n) : e === a) ? (e = 1) : (e = Z(e));
          var r = Q(t) ? Gf : vc;
          return r(t, e);
        }
        function Td(t) {
          var e = Q(t) ? Xf : mc;
          return e(t);
        }
        function Id(t) {
          if (t == null) return 0;
          if (ne(t)) return rs(t) ? cr(t) : t.length;
          var e = qt(t);
          return e == Ut || e == mt ? t.size : Gs(t).length;
        }
        function Cd(t, e, n) {
          var r = Q(t) ? Ss : xc;
          return (n && Vt(t, e, n) && (e = a), r(t, q(e, 3)));
        }
        var Sd = tt(function (t, e) {
            if (t == null) return [];
            var n = e.length;
            return (
              n > 1 && Vt(t, e[0], e[1])
                ? (e = [])
                : n > 2 && Vt(e[0], e[1], e[2]) && (e = [e[0]]),
              Eu(t, kt(e, 1), [])
            );
          }),
          ji =
            of ||
            function () {
              return $t.Date.now();
            };
        function Fd(t, e) {
          if (typeof e != "function") throw new we(b);
          return (
            (t = Z(t)),
            function () {
              if (--t < 1) return e.apply(this, arguments);
            }
          );
        }
        function xo(t, e, n) {
          return (
            (e = n ? a : e),
            (e = t && e == null ? t.length : e),
            rn(t, Lt, a, a, a, a, e)
          );
        }
        function wo(t, e) {
          var n;
          if (typeof e != "function") throw new we(b);
          return (
            (t = Z(t)),
            function () {
              return (
                --t > 0 && (n = e.apply(this, arguments)),
                t <= 1 && (e = a),
                n
              );
            }
          );
        }
        var va = tt(function (t, e, n) {
            var r = et;
            if (n.length) {
              var i = An(n, xr(va));
              r |= ft;
            }
            return rn(t, r, e, n, i);
          }),
          Ao = tt(function (t, e, n) {
            var r = et | at;
            if (n.length) {
              var i = An(n, xr(Ao));
              r |= ft;
            }
            return rn(e, r, t, n, i);
          });
        function yo(t, e, n) {
          e = n ? a : e;
          var r = rn(t, At, a, a, a, a, a, e);
          return ((r.placeholder = yo.placeholder), r);
        }
        function bo(t, e, n) {
          e = n ? a : e;
          var r = rn(t, Gt, a, a, a, a, a, e);
          return ((r.placeholder = bo.placeholder), r);
        }
        function Eo(t, e, n) {
          var r,
            i,
            o,
            f,
            h,
            p,
            w = 0,
            A = !1,
            E = !1,
            R = !0;
          if (typeof t != "function") throw new we(b);
          ((e = Te(e) || 0),
            wt(n) &&
              ((A = !!n.leading),
              (E = "maxWait" in n),
              (o = E ? Rt(Te(n.maxWait) || 0, e) : o),
              (R = "trailing" in n ? !!n.trailing : R)));
          function M(Tt) {
            var De = r,
              ln = i;
            return ((r = i = a), (w = Tt), (f = t.apply(ln, De)), f);
          }
          function G(Tt) {
            return ((w = Tt), (h = ri(nt, e)), A ? M(Tt) : f);
          }
          function j(Tt) {
            var De = Tt - p,
              ln = Tt - w,
              zo = e - De;
            return E ? Yt(zo, o - ln) : zo;
          }
          function X(Tt) {
            var De = Tt - p,
              ln = Tt - w;
            return p === a || De >= e || De < 0 || (E && ln >= o);
          }
          function nt() {
            var Tt = ji();
            if (X(Tt)) return it(Tt);
            h = ri(nt, j(Tt));
          }
          function it(Tt) {
            return ((h = a), R && r ? M(Tt) : ((r = i = a), f));
          }
          function ce() {
            (h !== a && Du(h), (w = 0), (r = p = i = h = a));
          }
          function Kt() {
            return h === a ? f : it(ji());
          }
          function he() {
            var Tt = ji(),
              De = X(Tt);
            if (((r = arguments), (i = this), (p = Tt), De)) {
              if (h === a) return G(p);
              if (E) return (Du(h), (h = ri(nt, e)), M(p));
            }
            return (h === a && (h = ri(nt, e)), f);
          }
          return ((he.cancel = ce), (he.flush = Kt), he);
        }
        var Od = tt(function (t, e) {
            return hu(t, 1, e);
          }),
          Rd = tt(function (t, e, n) {
            return hu(t, Te(e) || 0, n);
          });
        function Ld(t) {
          return rn(t, Zt);
        }
        function ts(t, e) {
          if (typeof t != "function" || (e != null && typeof e != "function"))
            throw new we(b);
          var n = function () {
            var r = arguments,
              i = e ? e.apply(this, r) : r[0],
              o = n.cache;
            if (o.has(i)) return o.get(i);
            var f = t.apply(this, r);
            return ((n.cache = o.set(i, f) || o), f);
          };
          return ((n.cache = new (ts.Cache || en)()), n);
        }
        ts.Cache = en;
        function es(t) {
          if (typeof t != "function") throw new we(b);
          return function () {
            var e = arguments;
            switch (e.length) {
              case 0:
                return !t.call(this);
              case 1:
                return !t.call(this, e[0]);
              case 2:
                return !t.call(this, e[0], e[1]);
              case 3:
                return !t.call(this, e[0], e[1], e[2]);
            }
            return !t.apply(this, e);
          };
        }
        function Dd(t) {
          return wo(2, t);
        }
        var Pd = wc(function (t, e) {
            e =
              e.length == 1 && Q(e[0])
                ? xt(e[0], oe(q()))
                : xt(kt(e, 1), oe(q()));
            var n = e.length;
            return tt(function (r) {
              for (var i = -1, o = Yt(r.length, n); ++i < o; )
                r[i] = e[i].call(this, r[i]);
              return ue(t, this, r);
            });
          }),
          _a = tt(function (t, e) {
            var n = An(e, xr(_a));
            return rn(t, ft, a, e, n);
          }),
          To = tt(function (t, e) {
            var n = An(e, xr(To));
            return rn(t, Ct, a, e, n);
          }),
          Nd = sn(function (t, e) {
            return rn(t, Ie, a, a, a, e);
          });
        function Bd(t, e) {
          if (typeof t != "function") throw new we(b);
          return ((e = e === a ? e : Z(e)), tt(t, e));
        }
        function Md(t, e) {
          if (typeof t != "function") throw new we(b);
          return (
            (e = e == null ? 0 : Rt(Z(e), 0)),
            tt(function (n) {
              var r = n[e],
                i = In(n, 0, e);
              return (r && wn(i, r), ue(t, this, i));
            })
          );
        }
        function Ud(t, e, n) {
          var r = !0,
            i = !0;
          if (typeof t != "function") throw new we(b);
          return (
            wt(n) &&
              ((r = "leading" in n ? !!n.leading : r),
              (i = "trailing" in n ? !!n.trailing : i)),
            Eo(t, e, { leading: r, maxWait: e, trailing: i })
          );
        }
        function Wd(t) {
          return xo(t, 1);
        }
        function $d(t, e) {
          return _a(ea(e), t);
        }
        function kd() {
          if (!arguments.length) return [];
          var t = arguments[0];
          return Q(t) ? t : [t];
        }
        function Hd(t) {
          return ye(t, z);
        }
        function zd(t, e) {
          return ((e = typeof e == "function" ? e : a), ye(t, z, e));
        }
        function Yd(t) {
          return ye(t, W | z);
        }
        function qd(t, e) {
          return ((e = typeof e == "function" ? e : a), ye(t, W | z, e));
        }
        function Gd(t, e) {
          return e == null || cu(t, e, Pt(e));
        }
        function Le(t, e) {
          return t === e || (t !== t && e !== e);
        }
        var Xd = Xi(zs),
          Vd = Xi(function (t, e) {
            return t >= e;
          }),
          Vn = _u(
            (function () {
              return arguments;
            })(),
          )
            ? _u
            : function (t) {
                return yt(t) && lt.call(t, "callee") && !ru.call(t, "callee");
              },
          Q = _.isArray,
          Kd = Ua ? oe(Ua) : rc;
        function ne(t) {
          return t != null && ns(t.length) && !un(t);
        }
        function Et(t) {
          return yt(t) && ne(t);
        }
        function Qd(t) {
          return t === !0 || t === !1 || (yt(t) && Xt(t) == se);
        }
        var Cn = ff || Sa,
          Zd = Wa ? oe(Wa) : ic;
        function Jd(t) {
          return yt(t) && t.nodeType === 1 && !ii(t);
        }
        function jd(t) {
          if (t == null) return !0;
          if (
            ne(t) &&
            (Q(t) ||
              typeof t == "string" ||
              typeof t.splice == "function" ||
              Cn(t) ||
              wr(t) ||
              Vn(t))
          )
            return !t.length;
          var e = qt(t);
          if (e == Ut || e == mt) return !t.size;
          if (ni(t)) return !Gs(t).length;
          for (var n in t) if (lt.call(t, n)) return !1;
          return !0;
        }
        function tp(t, e) {
          return jr(t, e);
        }
        function ep(t, e, n) {
          n = typeof n == "function" ? n : a;
          var r = n ? n(t, e) : a;
          return r === a ? jr(t, e, a, n) : !!r;
        }
        function ma(t) {
          if (!yt(t)) return !1;
          var e = Xt(t);
          return (
            e == Ke ||
            e == zt ||
            (typeof t.message == "string" &&
              typeof t.name == "string" &&
              !ii(t))
          );
        }
        function np(t) {
          return typeof t == "number" && su(t);
        }
        function un(t) {
          if (!wt(t)) return !1;
          var e = Xt(t);
          return e == We || e == dn || e == Mt || e == ci;
        }
        function Io(t) {
          return typeof t == "number" && t == Z(t);
        }
        function ns(t) {
          return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Ue;
        }
        function wt(t) {
          var e = typeof t;
          return t != null && (e == "object" || e == "function");
        }
        function yt(t) {
          return t != null && typeof t == "object";
        }
        var Co = $a ? oe($a) : ac;
        function rp(t, e) {
          return t === e || qs(t, e, oa(e));
        }
        function ip(t, e, n) {
          return ((n = typeof n == "function" ? n : a), qs(t, e, oa(e), n));
        }
        function sp(t) {
          return So(t) && t != +t;
        }
        function ap(t) {
          if (zc(t)) throw new V(C);
          return mu(t);
        }
        function up(t) {
          return t === null;
        }
        function op(t) {
          return t == null;
        }
        function So(t) {
          return typeof t == "number" || (yt(t) && Xt(t) == Se);
        }
        function ii(t) {
          if (!yt(t) || Xt(t) != Wt) return !1;
          var e = Fi(t);
          if (e === null) return !0;
          var n = lt.call(e, "constructor") && e.constructor;
          return typeof n == "function" && n instanceof n && Ti.call(n) == rf;
        }
        var xa = ka ? oe(ka) : uc;
        function lp(t) {
          return Io(t) && t >= -Ue && t <= Ue;
        }
        var Fo = Ha ? oe(Ha) : oc;
        function rs(t) {
          return typeof t == "string" || (!Q(t) && yt(t) && Xt(t) == Dn);
        }
        function fe(t) {
          return typeof t == "symbol" || (yt(t) && Xt(t) == Jn);
        }
        var wr = za ? oe(za) : lc;
        function fp(t) {
          return t === a;
        }
        function cp(t) {
          return yt(t) && qt(t) == Pn;
        }
        function hp(t) {
          return yt(t) && Xt(t) == os;
        }
        var dp = Xi(Xs),
          pp = Xi(function (t, e) {
            return t <= e;
          });
        function Oo(t) {
          if (!t) return [];
          if (ne(t)) return rs(t) ? Oe(t) : ee(t);
          if (qr && t[qr]) return ql(t[qr]());
          var e = qt(t),
            n = e == Ut ? Ps : e == mt ? yi : Ar;
          return n(t);
        }
        function on(t) {
          if (!t) return t === 0 ? t : 0;
          if (((t = Te(t)), t === Me || t === -Me)) {
            var e = t < 0 ? -1 : 1;
            return e * fi;
          }
          return t === t ? t : 0;
        }
        function Z(t) {
          var e = on(t),
            n = e % 1;
          return e === e ? (n ? e - n : e) : 0;
        }
        function Ro(t) {
          return t ? Yn(Z(t), 0, de) : 0;
        }
        function Te(t) {
          if (typeof t == "number") return t;
          if (fe(t)) return Qn;
          if (wt(t)) {
            var e = typeof t.valueOf == "function" ? t.valueOf() : t;
            t = wt(e) ? e + "" : e;
          }
          if (typeof t != "string") return t === 0 ? t : +t;
          t = Ka(t);
          var n = Ze.test(t);
          return n || Mn.test(t)
            ? Sl(t.slice(2), n ? 2 : 8)
            : $r.test(t)
              ? Qn
              : +t;
        }
        function Lo(t) {
          return ze(t, re(t));
        }
        function gp(t) {
          return t ? Yn(Z(t), -Ue, Ue) : t === 0 ? t : 0;
        }
        function ot(t) {
          return t == null ? "" : le(t);
        }
        var vp = _r(function (t, e) {
            if (ni(e) || ne(e)) {
              ze(e, Pt(e), t);
              return;
            }
            for (var n in e) lt.call(e, n) && Qr(t, n, e[n]);
          }),
          Do = _r(function (t, e) {
            ze(e, re(e), t);
          }),
          is = _r(function (t, e, n, r) {
            ze(e, re(e), t, r);
          }),
          _p = _r(function (t, e, n, r) {
            ze(e, Pt(e), t, r);
          }),
          mp = sn($s);
        function xp(t, e) {
          var n = vr(t);
          return e == null ? n : fu(n, e);
        }
        var wp = tt(function (t, e) {
            t = ct(t);
            var n = -1,
              r = e.length,
              i = r > 2 ? e[2] : a;
            for (i && Vt(e[0], e[1], i) && (r = 1); ++n < r; )
              for (var o = e[n], f = re(o), h = -1, p = f.length; ++h < p; ) {
                var w = f[h],
                  A = t[w];
                (A === a || (Le(A, dr[w]) && !lt.call(t, w))) && (t[w] = o[w]);
              }
            return t;
          }),
          Ap = tt(function (t) {
            return (t.push(a, Ku), ue(Po, a, t));
          });
        function yp(t, e) {
          return qa(t, q(e, 3), He);
        }
        function bp(t, e) {
          return qa(t, q(e, 3), Hs);
        }
        function Ep(t, e) {
          return t == null ? t : ks(t, q(e, 3), re);
        }
        function Tp(t, e) {
          return t == null ? t : gu(t, q(e, 3), re);
        }
        function Ip(t, e) {
          return t && He(t, q(e, 3));
        }
        function Cp(t, e) {
          return t && Hs(t, q(e, 3));
        }
        function Sp(t) {
          return t == null ? [] : Wi(t, Pt(t));
        }
        function Fp(t) {
          return t == null ? [] : Wi(t, re(t));
        }
        function wa(t, e, n) {
          var r = t == null ? a : qn(t, e);
          return r === a ? n : r;
        }
        function Op(t, e) {
          return t != null && Ju(t, e, jf);
        }
        function Aa(t, e) {
          return t != null && Ju(t, e, tc);
        }
        var Rp = Yu(function (t, e, n) {
            (e != null && typeof e.toString != "function" && (e = Ii.call(e)),
              (t[e] = n));
          }, ba(ie)),
          Lp = Yu(function (t, e, n) {
            (e != null && typeof e.toString != "function" && (e = Ii.call(e)),
              lt.call(t, e) ? t[e].push(n) : (t[e] = [n]));
          }, q),
          Dp = tt(Jr);
        function Pt(t) {
          return ne(t) ? ou(t) : Gs(t);
        }
        function re(t) {
          return ne(t) ? ou(t, !0) : fc(t);
        }
        function Pp(t, e) {
          var n = {};
          return (
            (e = q(e, 3)),
            He(t, function (r, i, o) {
              nn(n, e(r, i, o), r);
            }),
            n
          );
        }
        function Np(t, e) {
          var n = {};
          return (
            (e = q(e, 3)),
            He(t, function (r, i, o) {
              nn(n, i, e(r, i, o));
            }),
            n
          );
        }
        var Bp = _r(function (t, e, n) {
            $i(t, e, n);
          }),
          Po = _r(function (t, e, n, r) {
            $i(t, e, n, r);
          }),
          Mp = sn(function (t, e) {
            var n = {};
            if (t == null) return n;
            var r = !1;
            ((e = xt(e, function (o) {
              return ((o = Tn(o, t)), r || (r = o.length > 1), o);
            })),
              ze(t, aa(t), n),
              r && (n = ye(n, W | L | z, Rc)));
            for (var i = e.length; i--; ) Js(n, e[i]);
            return n;
          });
        function Up(t, e) {
          return No(t, es(q(e)));
        }
        var Wp = sn(function (t, e) {
          return t == null ? {} : hc(t, e);
        });
        function No(t, e) {
          if (t == null) return {};
          var n = xt(aa(t), function (r) {
            return [r];
          });
          return (
            (e = q(e)),
            Tu(t, n, function (r, i) {
              return e(r, i[0]);
            })
          );
        }
        function $p(t, e, n) {
          e = Tn(e, t);
          var r = -1,
            i = e.length;
          for (i || ((i = 1), (t = a)); ++r < i; ) {
            var o = t == null ? a : t[Ye(e[r])];
            (o === a && ((r = i), (o = n)), (t = un(o) ? o.call(t) : o));
          }
          return t;
        }
        function kp(t, e, n) {
          return t == null ? t : ti(t, e, n);
        }
        function Hp(t, e, n, r) {
          return (
            (r = typeof r == "function" ? r : a),
            t == null ? t : ti(t, e, n, r)
          );
        }
        var Bo = Xu(Pt),
          Mo = Xu(re);
        function zp(t, e, n) {
          var r = Q(t),
            i = r || Cn(t) || wr(t);
          if (((e = q(e, 4)), n == null)) {
            var o = t && t.constructor;
            i
              ? (n = r ? new o() : [])
              : wt(t)
                ? (n = un(o) ? vr(Fi(t)) : {})
                : (n = {});
          }
          return (
            (i ? xe : He)(t, function (f, h, p) {
              return e(n, f, h, p);
            }),
            n
          );
        }
        function Yp(t, e) {
          return t == null ? !0 : Js(t, e);
        }
        function qp(t, e, n) {
          return t == null ? t : Ou(t, e, ea(n));
        }
        function Gp(t, e, n, r) {
          return (
            (r = typeof r == "function" ? r : a),
            t == null ? t : Ou(t, e, ea(n), r)
          );
        }
        function Ar(t) {
          return t == null ? [] : Ds(t, Pt(t));
        }
        function Xp(t) {
          return t == null ? [] : Ds(t, re(t));
        }
        function Vp(t, e, n) {
          return (
            n === a && ((n = e), (e = a)),
            n !== a && ((n = Te(n)), (n = n === n ? n : 0)),
            e !== a && ((e = Te(e)), (e = e === e ? e : 0)),
            Yn(Te(t), e, n)
          );
        }
        function Kp(t, e, n) {
          return (
            (e = on(e)),
            n === a ? ((n = e), (e = 0)) : (n = on(n)),
            (t = Te(t)),
            ec(t, e, n)
          );
        }
        function Qp(t, e, n) {
          if (
            (n && typeof n != "boolean" && Vt(t, e, n) && (e = n = a),
            n === a &&
              (typeof e == "boolean"
                ? ((n = e), (e = a))
                : typeof t == "boolean" && ((n = t), (t = a))),
            t === a && e === a
              ? ((t = 0), (e = 1))
              : ((t = on(t)), e === a ? ((e = t), (t = 0)) : (e = on(e))),
            t > e)
          ) {
            var r = t;
            ((t = e), (e = r));
          }
          if (n || t % 1 || e % 1) {
            var i = au();
            return Yt(t + i * (e - t + Cl("1e-" + ((i + "").length - 1))), e);
          }
          return Ks(t, e);
        }
        var Zp = mr(function (t, e, n) {
          return ((e = e.toLowerCase()), t + (n ? Uo(e) : e));
        });
        function Uo(t) {
          return ya(ot(t).toLowerCase());
        }
        function Wo(t) {
          return ((t = ot(t)), t && t.replace(kr, $l).replace(_l, ""));
        }
        function Jp(t, e, n) {
          ((t = ot(t)), (e = le(e)));
          var r = t.length;
          n = n === a ? r : Yn(Z(n), 0, r);
          var i = n;
          return ((n -= e.length), n >= 0 && t.slice(n, i) == e);
        }
        function jp(t) {
          return ((t = ot(t)), t && cs.test(t) ? t.replace(Pr, kl) : t);
        }
        function tg(t) {
          return ((t = ot(t)), t && _s.test(t) ? t.replace(vn, "\\$&") : t);
        }
        var eg = mr(function (t, e, n) {
            return t + (n ? "-" : "") + e.toLowerCase();
          }),
          ng = mr(function (t, e, n) {
            return t + (n ? " " : "") + e.toLowerCase();
          }),
          rg = ku("toLowerCase");
        function ig(t, e, n) {
          ((t = ot(t)), (e = Z(e)));
          var r = e ? cr(t) : 0;
          if (!e || r >= e) return t;
          var i = (e - r) / 2;
          return Gi(Di(i), n) + t + Gi(Li(i), n);
        }
        function sg(t, e, n) {
          ((t = ot(t)), (e = Z(e)));
          var r = e ? cr(t) : 0;
          return e && r < e ? t + Gi(e - r, n) : t;
        }
        function ag(t, e, n) {
          ((t = ot(t)), (e = Z(e)));
          var r = e ? cr(t) : 0;
          return e && r < e ? Gi(e - r, n) + t : t;
        }
        function ug(t, e, n) {
          return (
            n || e == null ? (e = 0) : e && (e = +e),
            pf(ot(t).replace(Mr, ""), e || 0)
          );
        }
        function og(t, e, n) {
          return (
            (n ? Vt(t, e, n) : e === a) ? (e = 1) : (e = Z(e)),
            Qs(ot(t), e)
          );
        }
        function lg() {
          var t = arguments,
            e = ot(t[0]);
          return t.length < 3 ? e : e.replace(t[1], t[2]);
        }
        var fg = mr(function (t, e, n) {
          return t + (n ? "_" : "") + e.toLowerCase();
        });
        function cg(t, e, n) {
          return (
            n && typeof n != "number" && Vt(t, e, n) && (e = n = a),
            (n = n === a ? de : n >>> 0),
            n
              ? ((t = ot(t)),
                t &&
                (typeof e == "string" || (e != null && !xa(e))) &&
                ((e = le(e)), !e && fr(t))
                  ? In(Oe(t), 0, n)
                  : t.split(e, n))
              : []
          );
        }
        var hg = mr(function (t, e, n) {
          return t + (n ? " " : "") + ya(e);
        });
        function dg(t, e, n) {
          return (
            (t = ot(t)),
            (n = n == null ? 0 : Yn(Z(n), 0, t.length)),
            (e = le(e)),
            t.slice(n, n + e.length) == e
          );
        }
        function pg(t, e, n) {
          var r = u.templateSettings;
          (n && Vt(t, e, n) && (e = a), (t = ot(t)), (e = is({}, e, r, Vu)));
          var i = is({}, e.imports, r.imports, Vu),
            o = Pt(i),
            f = Ds(i, o),
            h,
            p,
            w = 0,
            A = e.interpolate || rr,
            E = "__p += '",
            R = Ns(
              (e.escape || rr).source +
                "|" +
                A.source +
                "|" +
                (A === Br ? vi : rr).source +
                "|" +
                (e.evaluate || rr).source +
                "|$",
              "g",
            ),
            M =
              "//# sourceURL=" +
              (lt.call(e, "sourceURL")
                ? (e.sourceURL + "").replace(/\s/g, " ")
                : "lodash.templateSources[" + ++yl + "]") +
              `
`;
          (t.replace(R, function (X, nt, it, ce, Kt, he) {
            return (
              it || (it = ce),
              (E += t.slice(w, he).replace(ws, Hl)),
              nt &&
                ((h = !0),
                (E +=
                  `' +
__e(` +
                  nt +
                  `) +
'`)),
              Kt &&
                ((p = !0),
                (E +=
                  `';
` +
                  Kt +
                  `;
__p += '`)),
              it &&
                (E +=
                  `' +
((__t = (` +
                  it +
                  `)) == null ? '' : __t) +
'`),
              (w = he + X.length),
              X
            );
          }),
            (E += `';
`));
          var G = lt.call(e, "variable") && e.variable;
          if (!G)
            E =
              `with (obj) {
` +
              E +
              `
}
`;
          else if (pi.test(G)) throw new V(F);
          ((E = (p ? E.replace(er, "") : E)
            .replace(ls, "$1")
            .replace(fs, "$1;")),
            (E =
              "function(" +
              (G || "obj") +
              `) {
` +
              (G
                ? ""
                : `obj || (obj = {});
`) +
              "var __t, __p = ''" +
              (h ? ", __e = _.escape" : "") +
              (p
                ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                : `;
`) +
              E +
              `return __p
}`));
          var j = ko(function () {
            return st(o, M + "return " + E).apply(a, f);
          });
          if (((j.source = E), ma(j))) throw j;
          return j;
        }
        function gg(t) {
          return ot(t).toLowerCase();
        }
        function vg(t) {
          return ot(t).toUpperCase();
        }
        function _g(t, e, n) {
          if (((t = ot(t)), t && (n || e === a))) return Ka(t);
          if (!t || !(e = le(e))) return t;
          var r = Oe(t),
            i = Oe(e),
            o = Qa(r, i),
            f = Za(r, i) + 1;
          return In(r, o, f).join("");
        }
        function mg(t, e, n) {
          if (((t = ot(t)), t && (n || e === a))) return t.slice(0, ja(t) + 1);
          if (!t || !(e = le(e))) return t;
          var r = Oe(t),
            i = Za(r, Oe(e)) + 1;
          return In(r, 0, i).join("");
        }
        function xg(t, e, n) {
          if (((t = ot(t)), t && (n || e === a))) return t.replace(Mr, "");
          if (!t || !(e = le(e))) return t;
          var r = Oe(t),
            i = Qa(r, Oe(e));
          return In(r, i).join("");
        }
        function wg(t, e) {
          var n = Ge,
            r = Ce;
          if (wt(e)) {
            var i = "separator" in e ? e.separator : i;
            ((n = "length" in e ? Z(e.length) : n),
              (r = "omission" in e ? le(e.omission) : r));
          }
          t = ot(t);
          var o = t.length;
          if (fr(t)) {
            var f = Oe(t);
            o = f.length;
          }
          if (n >= o) return t;
          var h = n - cr(r);
          if (h < 1) return r;
          var p = f ? In(f, 0, h).join("") : t.slice(0, h);
          if (i === a) return p + r;
          if ((f && (h += p.length - h), xa(i))) {
            if (t.slice(h).search(i)) {
              var w,
                A = p;
              for (
                i.global || (i = Ns(i.source, ot(Wr.exec(i)) + "g")),
                  i.lastIndex = 0;
                (w = i.exec(A));
              )
                var E = w.index;
              p = p.slice(0, E === a ? h : E);
            }
          } else if (t.indexOf(le(i), h) != h) {
            var R = p.lastIndexOf(i);
            R > -1 && (p = p.slice(0, R));
          }
          return p + r;
        }
        function Ag(t) {
          return ((t = ot(t)), t && Nr.test(t) ? t.replace(Dr, Kl) : t);
        }
        var yg = mr(function (t, e, n) {
            return t + (n ? " " : "") + e.toUpperCase();
          }),
          ya = ku("toUpperCase");
        function $o(t, e, n) {
          return (
            (t = ot(t)),
            (e = n ? a : e),
            e === a ? (Yl(t) ? Jl(t) : Nl(t)) : t.match(e) || []
          );
        }
        var ko = tt(function (t, e) {
            try {
              return ue(t, a, e);
            } catch (n) {
              return ma(n) ? n : new V(n);
            }
          }),
          bg = sn(function (t, e) {
            return (
              xe(e, function (n) {
                ((n = Ye(n)), nn(t, n, va(t[n], t)));
              }),
              t
            );
          });
        function Eg(t) {
          var e = t == null ? 0 : t.length,
            n = q();
          return (
            (t = e
              ? xt(t, function (r) {
                  if (typeof r[1] != "function") throw new we(b);
                  return [n(r[0]), r[1]];
                })
              : []),
            tt(function (r) {
              for (var i = -1; ++i < e; ) {
                var o = t[i];
                if (ue(o[0], this, r)) return ue(o[1], this, r);
              }
            })
          );
        }
        function Tg(t) {
          return Qf(ye(t, W));
        }
        function ba(t) {
          return function () {
            return t;
          };
        }
        function Ig(t, e) {
          return t == null || t !== t ? e : t;
        }
        var Cg = zu(),
          Sg = zu(!0);
        function ie(t) {
          return t;
        }
        function Ea(t) {
          return xu(typeof t == "function" ? t : ye(t, W));
        }
        function Fg(t) {
          return Au(ye(t, W));
        }
        function Og(t, e) {
          return yu(t, ye(e, W));
        }
        var Rg = tt(function (t, e) {
            return function (n) {
              return Jr(n, t, e);
            };
          }),
          Lg = tt(function (t, e) {
            return function (n) {
              return Jr(t, n, e);
            };
          });
        function Ta(t, e, n) {
          var r = Pt(e),
            i = Wi(e, r);
          n == null &&
            !(wt(e) && (i.length || !r.length)) &&
            ((n = e), (e = t), (t = this), (i = Wi(e, Pt(e))));
          var o = !(wt(n) && "chain" in n) || !!n.chain,
            f = un(t);
          return (
            xe(i, function (h) {
              var p = e[h];
              ((t[h] = p),
                f &&
                  (t.prototype[h] = function () {
                    var w = this.__chain__;
                    if (o || w) {
                      var A = t(this.__wrapped__),
                        E = (A.__actions__ = ee(this.__actions__));
                      return (
                        E.push({ func: p, args: arguments, thisArg: t }),
                        (A.__chain__ = w),
                        A
                      );
                    }
                    return p.apply(t, wn([this.value()], arguments));
                  }));
            }),
            t
          );
        }
        function Dg() {
          return ($t._ === this && ($t._ = sf), this);
        }
        function Ia() {}
        function Pg(t) {
          return (
            (t = Z(t)),
            tt(function (e) {
              return bu(e, t);
            })
          );
        }
        var Ng = ra(xt),
          Bg = ra(Ya),
          Mg = ra(Ss);
        function Ho(t) {
          return fa(t) ? Fs(Ye(t)) : dc(t);
        }
        function Ug(t) {
          return function (e) {
            return t == null ? a : qn(t, e);
          };
        }
        var Wg = qu(),
          $g = qu(!0);
        function Ca() {
          return [];
        }
        function Sa() {
          return !1;
        }
        function kg() {
          return {};
        }
        function Hg() {
          return "";
        }
        function zg() {
          return !0;
        }
        function Yg(t, e) {
          if (((t = Z(t)), t < 1 || t > Ue)) return [];
          var n = de,
            r = Yt(t, de);
          ((e = q(e)), (t -= de));
          for (var i = Ls(r, e); ++n < t; ) e(n);
          return i;
        }
        function qg(t) {
          return Q(t) ? xt(t, Ye) : fe(t) ? [t] : ee(uo(ot(t)));
        }
        function Gg(t) {
          var e = ++nf;
          return ot(t) + e;
        }
        var Xg = qi(function (t, e) {
            return t + e;
          }, 0),
          Vg = ia("ceil"),
          Kg = qi(function (t, e) {
            return t / e;
          }, 1),
          Qg = ia("floor");
        function Zg(t) {
          return t && t.length ? Ui(t, ie, zs) : a;
        }
        function Jg(t, e) {
          return t && t.length ? Ui(t, q(e, 2), zs) : a;
        }
        function jg(t) {
          return Xa(t, ie);
        }
        function tv(t, e) {
          return Xa(t, q(e, 2));
        }
        function ev(t) {
          return t && t.length ? Ui(t, ie, Xs) : a;
        }
        function nv(t, e) {
          return t && t.length ? Ui(t, q(e, 2), Xs) : a;
        }
        var rv = qi(function (t, e) {
            return t * e;
          }, 1),
          iv = ia("round"),
          sv = qi(function (t, e) {
            return t - e;
          }, 0);
        function av(t) {
          return t && t.length ? Rs(t, ie) : 0;
        }
        function uv(t, e) {
          return t && t.length ? Rs(t, q(e, 2)) : 0;
        }
        return (
          (u.after = Fd),
          (u.ary = xo),
          (u.assign = vp),
          (u.assignIn = Do),
          (u.assignInWith = is),
          (u.assignWith = _p),
          (u.at = mp),
          (u.before = wo),
          (u.bind = va),
          (u.bindAll = bg),
          (u.bindKey = Ao),
          (u.castArray = kd),
          (u.chain = vo),
          (u.chunk = Qc),
          (u.compact = Zc),
          (u.concat = Jc),
          (u.cond = Eg),
          (u.conforms = Tg),
          (u.constant = ba),
          (u.countBy = ad),
          (u.create = xp),
          (u.curry = yo),
          (u.curryRight = bo),
          (u.debounce = Eo),
          (u.defaults = wp),
          (u.defaultsDeep = Ap),
          (u.defer = Od),
          (u.delay = Rd),
          (u.difference = jc),
          (u.differenceBy = th),
          (u.differenceWith = eh),
          (u.drop = nh),
          (u.dropRight = rh),
          (u.dropRightWhile = ih),
          (u.dropWhile = sh),
          (u.fill = ah),
          (u.filter = od),
          (u.flatMap = cd),
          (u.flatMapDeep = hd),
          (u.flatMapDepth = dd),
          (u.flatten = co),
          (u.flattenDeep = uh),
          (u.flattenDepth = oh),
          (u.flip = Ld),
          (u.flow = Cg),
          (u.flowRight = Sg),
          (u.fromPairs = lh),
          (u.functions = Sp),
          (u.functionsIn = Fp),
          (u.groupBy = pd),
          (u.initial = ch),
          (u.intersection = hh),
          (u.intersectionBy = dh),
          (u.intersectionWith = ph),
          (u.invert = Rp),
          (u.invertBy = Lp),
          (u.invokeMap = vd),
          (u.iteratee = Ea),
          (u.keyBy = _d),
          (u.keys = Pt),
          (u.keysIn = re),
          (u.map = Ji),
          (u.mapKeys = Pp),
          (u.mapValues = Np),
          (u.matches = Fg),
          (u.matchesProperty = Og),
          (u.memoize = ts),
          (u.merge = Bp),
          (u.mergeWith = Po),
          (u.method = Rg),
          (u.methodOf = Lg),
          (u.mixin = Ta),
          (u.negate = es),
          (u.nthArg = Pg),
          (u.omit = Mp),
          (u.omitBy = Up),
          (u.once = Dd),
          (u.orderBy = md),
          (u.over = Ng),
          (u.overArgs = Pd),
          (u.overEvery = Bg),
          (u.overSome = Mg),
          (u.partial = _a),
          (u.partialRight = To),
          (u.partition = xd),
          (u.pick = Wp),
          (u.pickBy = No),
          (u.property = Ho),
          (u.propertyOf = Ug),
          (u.pull = mh),
          (u.pullAll = po),
          (u.pullAllBy = xh),
          (u.pullAllWith = wh),
          (u.pullAt = Ah),
          (u.range = Wg),
          (u.rangeRight = $g),
          (u.rearg = Nd),
          (u.reject = yd),
          (u.remove = yh),
          (u.rest = Bd),
          (u.reverse = pa),
          (u.sampleSize = Ed),
          (u.set = kp),
          (u.setWith = Hp),
          (u.shuffle = Td),
          (u.slice = bh),
          (u.sortBy = Sd),
          (u.sortedUniq = Oh),
          (u.sortedUniqBy = Rh),
          (u.split = cg),
          (u.spread = Md),
          (u.tail = Lh),
          (u.take = Dh),
          (u.takeRight = Ph),
          (u.takeRightWhile = Nh),
          (u.takeWhile = Bh),
          (u.tap = Zh),
          (u.throttle = Ud),
          (u.thru = Zi),
          (u.toArray = Oo),
          (u.toPairs = Bo),
          (u.toPairsIn = Mo),
          (u.toPath = qg),
          (u.toPlainObject = Lo),
          (u.transform = zp),
          (u.unary = Wd),
          (u.union = Mh),
          (u.unionBy = Uh),
          (u.unionWith = Wh),
          (u.uniq = $h),
          (u.uniqBy = kh),
          (u.uniqWith = Hh),
          (u.unset = Yp),
          (u.unzip = ga),
          (u.unzipWith = go),
          (u.update = qp),
          (u.updateWith = Gp),
          (u.values = Ar),
          (u.valuesIn = Xp),
          (u.without = zh),
          (u.words = $o),
          (u.wrap = $d),
          (u.xor = Yh),
          (u.xorBy = qh),
          (u.xorWith = Gh),
          (u.zip = Xh),
          (u.zipObject = Vh),
          (u.zipObjectDeep = Kh),
          (u.zipWith = Qh),
          (u.entries = Bo),
          (u.entriesIn = Mo),
          (u.extend = Do),
          (u.extendWith = is),
          Ta(u, u),
          (u.add = Xg),
          (u.attempt = ko),
          (u.camelCase = Zp),
          (u.capitalize = Uo),
          (u.ceil = Vg),
          (u.clamp = Vp),
          (u.clone = Hd),
          (u.cloneDeep = Yd),
          (u.cloneDeepWith = qd),
          (u.cloneWith = zd),
          (u.conformsTo = Gd),
          (u.deburr = Wo),
          (u.defaultTo = Ig),
          (u.divide = Kg),
          (u.endsWith = Jp),
          (u.eq = Le),
          (u.escape = jp),
          (u.escapeRegExp = tg),
          (u.every = ud),
          (u.find = ld),
          (u.findIndex = lo),
          (u.findKey = yp),
          (u.findLast = fd),
          (u.findLastIndex = fo),
          (u.findLastKey = bp),
          (u.floor = Qg),
          (u.forEach = _o),
          (u.forEachRight = mo),
          (u.forIn = Ep),
          (u.forInRight = Tp),
          (u.forOwn = Ip),
          (u.forOwnRight = Cp),
          (u.get = wa),
          (u.gt = Xd),
          (u.gte = Vd),
          (u.has = Op),
          (u.hasIn = Aa),
          (u.head = ho),
          (u.identity = ie),
          (u.includes = gd),
          (u.indexOf = fh),
          (u.inRange = Kp),
          (u.invoke = Dp),
          (u.isArguments = Vn),
          (u.isArray = Q),
          (u.isArrayBuffer = Kd),
          (u.isArrayLike = ne),
          (u.isArrayLikeObject = Et),
          (u.isBoolean = Qd),
          (u.isBuffer = Cn),
          (u.isDate = Zd),
          (u.isElement = Jd),
          (u.isEmpty = jd),
          (u.isEqual = tp),
          (u.isEqualWith = ep),
          (u.isError = ma),
          (u.isFinite = np),
          (u.isFunction = un),
          (u.isInteger = Io),
          (u.isLength = ns),
          (u.isMap = Co),
          (u.isMatch = rp),
          (u.isMatchWith = ip),
          (u.isNaN = sp),
          (u.isNative = ap),
          (u.isNil = op),
          (u.isNull = up),
          (u.isNumber = So),
          (u.isObject = wt),
          (u.isObjectLike = yt),
          (u.isPlainObject = ii),
          (u.isRegExp = xa),
          (u.isSafeInteger = lp),
          (u.isSet = Fo),
          (u.isString = rs),
          (u.isSymbol = fe),
          (u.isTypedArray = wr),
          (u.isUndefined = fp),
          (u.isWeakMap = cp),
          (u.isWeakSet = hp),
          (u.join = gh),
          (u.kebabCase = eg),
          (u.last = Ee),
          (u.lastIndexOf = vh),
          (u.lowerCase = ng),
          (u.lowerFirst = rg),
          (u.lt = dp),
          (u.lte = pp),
          (u.max = Zg),
          (u.maxBy = Jg),
          (u.mean = jg),
          (u.meanBy = tv),
          (u.min = ev),
          (u.minBy = nv),
          (u.stubArray = Ca),
          (u.stubFalse = Sa),
          (u.stubObject = kg),
          (u.stubString = Hg),
          (u.stubTrue = zg),
          (u.multiply = rv),
          (u.nth = _h),
          (u.noConflict = Dg),
          (u.noop = Ia),
          (u.now = ji),
          (u.pad = ig),
          (u.padEnd = sg),
          (u.padStart = ag),
          (u.parseInt = ug),
          (u.random = Qp),
          (u.reduce = wd),
          (u.reduceRight = Ad),
          (u.repeat = og),
          (u.replace = lg),
          (u.result = $p),
          (u.round = iv),
          (u.runInContext = d),
          (u.sample = bd),
          (u.size = Id),
          (u.snakeCase = fg),
          (u.some = Cd),
          (u.sortedIndex = Eh),
          (u.sortedIndexBy = Th),
          (u.sortedIndexOf = Ih),
          (u.sortedLastIndex = Ch),
          (u.sortedLastIndexBy = Sh),
          (u.sortedLastIndexOf = Fh),
          (u.startCase = hg),
          (u.startsWith = dg),
          (u.subtract = sv),
          (u.sum = av),
          (u.sumBy = uv),
          (u.template = pg),
          (u.times = Yg),
          (u.toFinite = on),
          (u.toInteger = Z),
          (u.toLength = Ro),
          (u.toLower = gg),
          (u.toNumber = Te),
          (u.toSafeInteger = gp),
          (u.toString = ot),
          (u.toUpper = vg),
          (u.trim = _g),
          (u.trimEnd = mg),
          (u.trimStart = xg),
          (u.truncate = wg),
          (u.unescape = Ag),
          (u.uniqueId = Gg),
          (u.upperCase = yg),
          (u.upperFirst = ya),
          (u.each = _o),
          (u.eachRight = mo),
          (u.first = ho),
          Ta(
            u,
            (function () {
              var t = {};
              return (
                He(u, function (e, n) {
                  lt.call(u.prototype, n) || (t[n] = e);
                }),
                t
              );
            })(),
            { chain: !1 },
          ),
          (u.VERSION = O),
          xe(
            [
              "bind",
              "bindKey",
              "curry",
              "curryRight",
              "partial",
              "partialRight",
            ],
            function (t) {
              u[t].placeholder = u;
            },
          ),
          xe(["drop", "take"], function (t, e) {
            ((rt.prototype[t] = function (n) {
              n = n === a ? 1 : Rt(Z(n), 0);
              var r = this.__filtered__ && !e ? new rt(this) : this.clone();
              return (
                r.__filtered__
                  ? (r.__takeCount__ = Yt(n, r.__takeCount__))
                  : r.__views__.push({
                      size: Yt(n, de),
                      type: t + (r.__dir__ < 0 ? "Right" : ""),
                    }),
                r
              );
            }),
              (rt.prototype[t + "Right"] = function (n) {
                return this.reverse()[t](n).reverse();
              }));
          }),
          xe(["filter", "map", "takeWhile"], function (t, e) {
            var n = e + 1,
              r = n == Jt || n == ss;
            rt.prototype[t] = function (i) {
              var o = this.clone();
              return (
                o.__iteratees__.push({ iteratee: q(i, 3), type: n }),
                (o.__filtered__ = o.__filtered__ || r),
                o
              );
            };
          }),
          xe(["head", "last"], function (t, e) {
            var n = "take" + (e ? "Right" : "");
            rt.prototype[t] = function () {
              return this[n](1).value()[0];
            };
          }),
          xe(["initial", "tail"], function (t, e) {
            var n = "drop" + (e ? "" : "Right");
            rt.prototype[t] = function () {
              return this.__filtered__ ? new rt(this) : this[n](1);
            };
          }),
          (rt.prototype.compact = function () {
            return this.filter(ie);
          }),
          (rt.prototype.find = function (t) {
            return this.filter(t).head();
          }),
          (rt.prototype.findLast = function (t) {
            return this.reverse().find(t);
          }),
          (rt.prototype.invokeMap = tt(function (t, e) {
            return typeof t == "function"
              ? new rt(this)
              : this.map(function (n) {
                  return Jr(n, t, e);
                });
          })),
          (rt.prototype.reject = function (t) {
            return this.filter(es(q(t)));
          }),
          (rt.prototype.slice = function (t, e) {
            t = Z(t);
            var n = this;
            return n.__filtered__ && (t > 0 || e < 0)
              ? new rt(n)
              : (t < 0 ? (n = n.takeRight(-t)) : t && (n = n.drop(t)),
                e !== a &&
                  ((e = Z(e)), (n = e < 0 ? n.dropRight(-e) : n.take(e - t))),
                n);
          }),
          (rt.prototype.takeRightWhile = function (t) {
            return this.reverse().takeWhile(t).reverse();
          }),
          (rt.prototype.toArray = function () {
            return this.take(de);
          }),
          He(rt.prototype, function (t, e) {
            var n = /^(?:filter|find|map|reject)|While$/.test(e),
              r = /^(?:head|last)$/.test(e),
              i = u[r ? "take" + (e == "last" ? "Right" : "") : e],
              o = r || /^find/.test(e);
            !i ||
              (u.prototype[e] = function () {
                var f = this.__wrapped__,
                  h = r ? [1] : arguments,
                  p = f instanceof rt,
                  w = h[0],
                  A = p || Q(f),
                  E = function (nt) {
                    var it = i.apply(u, wn([nt], h));
                    return r && R ? it[0] : it;
                  };
                A &&
                  n &&
                  typeof w == "function" &&
                  w.length != 1 &&
                  (p = A = !1);
                var R = this.__chain__,
                  M = !!this.__actions__.length,
                  G = o && !R,
                  j = p && !M;
                if (!o && A) {
                  f = j ? f : new rt(this);
                  var X = t.apply(f, h);
                  return (
                    X.__actions__.push({ func: Zi, args: [E], thisArg: a }),
                    new Ae(X, R)
                  );
                }
                return G && j
                  ? t.apply(this, h)
                  : ((X = this.thru(E)),
                    G ? (r ? X.value()[0] : X.value()) : X);
              });
          }),
          xe(
            ["pop", "push", "shift", "sort", "splice", "unshift"],
            function (t) {
              var e = bi[t],
                n = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
                r = /^(?:pop|shift)$/.test(t);
              u.prototype[t] = function () {
                var i = arguments;
                if (r && !this.__chain__) {
                  var o = this.value();
                  return e.apply(Q(o) ? o : [], i);
                }
                return this[n](function (f) {
                  return e.apply(Q(f) ? f : [], i);
                });
              };
            },
          ),
          He(rt.prototype, function (t, e) {
            var n = u[e];
            if (n) {
              var r = n.name + "";
              (lt.call(gr, r) || (gr[r] = []),
                gr[r].push({ name: e, func: n }));
            }
          }),
          (gr[Yi(a, at).name] = [{ name: "wrapper", func: a }]),
          (rt.prototype.clone = Af),
          (rt.prototype.reverse = yf),
          (rt.prototype.value = bf),
          (u.prototype.at = Jh),
          (u.prototype.chain = jh),
          (u.prototype.commit = td),
          (u.prototype.next = ed),
          (u.prototype.plant = rd),
          (u.prototype.reverse = id),
          (u.prototype.toJSON = u.prototype.valueOf = u.prototype.value = sd),
          (u.prototype.first = u.prototype.head),
          qr && (u.prototype[qr] = nd),
          u
        );
      },
      hr = jl();
    $n ? ((($n.exports = hr)._ = hr), (Es._ = hr)) : ($t._ = hr);
  }).call(ai);
})(Ra, Ra.exports);
var r0 = { exports: {} };
/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */ (function (g) {
  (function (x, a, O, I) {
    var C = ["", "webkit", "Moz", "MS", "ms", "o"],
      b = a.createElement("div"),
      F = "function",
      Y = Math.round,
      U = Math.abs,
      B = Date.now;
    function W(s, l, c) {
      return setTimeout(At(s, c), l);
    }
    function L(s, l, c) {
      return Array.isArray(s) ? (z(s, c[l], c), !0) : !1;
    }
    function z(s, l, c) {
      var v;
      if (!!s)
        if (s.forEach) s.forEach(l, c);
        else if (s.length !== I)
          for (v = 0; v < s.length; ) (l.call(c, s[v], v, s), v++);
        else for (v in s) s.hasOwnProperty(v) && l.call(c, s[v], v, s);
    }
    function N(s, l, c) {
      var v =
        "DEPRECATED METHOD: " +
        l +
        `
` +
        c +
        ` AT 
`;
      return function () {
        var T = new Error("get-stack-trace"),
          D =
            T && T.stack
              ? T.stack
                  .replace(/^[^\(]+?[\n$]/gm, "")
                  .replace(/^\s+at\s+/gm, "")
                  .replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@")
              : "Unknown Stack Trace",
          J = x.console && (x.console.warn || x.console.log);
        return (J && J.call(x.console, v, D), s.apply(this, arguments));
      };
    }
    var K;
    typeof Object.assign != "function"
      ? (K = function (l) {
          if (l === I || l === null)
            throw new TypeError("Cannot convert undefined or null to object");
          for (var c = Object(l), v = 1; v < arguments.length; v++) {
            var T = arguments[v];
            if (T !== I && T !== null)
              for (var D in T) T.hasOwnProperty(D) && (c[D] = T[D]);
          }
          return c;
        })
      : (K = Object.assign);
    var et = N(
        function (l, c, v) {
          for (var T = Object.keys(c), D = 0; D < T.length; )
            ((!v || (v && l[T[D]] === I)) && (l[T[D]] = c[T[D]]), D++);
          return l;
        },
        "extend",
        "Use `assign`.",
      ),
      at = N(
        function (l, c) {
          return et(l, c, !0);
        },
        "merge",
        "Use `assign`.",
      );
    function ut(s, l, c) {
      var v = l.prototype,
        T;
      ((T = s.prototype = Object.create(v)),
        (T.constructor = s),
        (T._super = v),
        c && K(T, c));
    }
    function At(s, l) {
      return function () {
        return s.apply(l, arguments);
      };
    }
    function Gt(s, l) {
      return typeof s == F ? s.apply((l && l[0]) || I, l) : s;
    }
    function ft(s, l) {
      return s === I ? l : s;
    }
    function Ct(s, l, c) {
      z(Ge(l), function (v) {
        s.addEventListener(v, c, !1);
      });
    }
    function Lt(s, l, c) {
      z(Ge(l), function (v) {
        s.removeEventListener(v, c, !1);
      });
    }
    function Ie(s, l) {
      for (; s; ) {
        if (s == l) return !0;
        s = s.parentNode;
      }
      return !1;
    }
    function Zt(s, l) {
      return s.indexOf(l) > -1;
    }
    function Ge(s) {
      return s.trim().split(/\s+/g);
    }
    function Ce(s, l, c) {
      if (s.indexOf && !c) return s.indexOf(l);
      for (var v = 0; v < s.length; ) {
        if ((c && s[v][c] == l) || (!c && s[v] === l)) return v;
        v++;
      }
      return -1;
    }
    function Xe(s) {
      return Array.prototype.slice.call(s, 0);
    }
    function Rn(s, l, c) {
      for (var v = [], T = [], D = 0; D < s.length; ) {
        var J = l ? s[D][l] : s[D];
        (Ce(T, J) < 0 && v.push(s[D]), (T[D] = J), D++);
      }
      return (
        c &&
          (l
            ? (v = v.sort(function (St, Dt) {
                return St[l] > Dt[l];
              }))
            : (v = v.sort())),
        v
      );
    }
    function Jt(s, l) {
      for (
        var c, v, T = l[0].toUpperCase() + l.slice(1), D = 0;
        D < C.length;
      ) {
        if (((c = C[D]), (v = c ? c + T : l), v in s)) return v;
        D++;
      }
      return I;
    }
    var Ve = 1;
    function ss() {
      return Ve++;
    }
    function Me(s) {
      var l = s.ownerDocument || s;
      return l.defaultView || l.parentWindow || x;
    }
    var Ue = /mobile|tablet|ip(ad|hone|od)|android/i,
      fi = "ontouchstart" in x,
      Qn = Jt(x, "PointerEvent") !== I,
      de = fi && Ue.test(navigator.userAgent),
      Ln = "touch",
      as = "pen",
      Ir = "mouse",
      hn = "kinect",
      Zn = 25,
      Mt = 1,
      se = 2,
      dt = 4,
      zt = 8,
      Ke = 1,
      We = 2,
      dn = 4,
      Ut = 8,
      Se = 16,
      pe = We | dn,
      Wt = Ut | Se,
      Cr = pe | Wt,
      ci = ["x", "y"],
      $e = ["clientX", "clientY"];
    function mt(s, l) {
      var c = this;
      ((this.manager = s),
        (this.callback = l),
        (this.element = s.element),
        (this.target = s.options.inputTarget),
        (this.domHandler = function (v) {
          Gt(s.options.enable, [s]) && c.handler(v);
        }),
        this.init());
    }
    mt.prototype = {
      handler: function () {},
      init: function () {
        (this.evEl && Ct(this.element, this.evEl, this.domHandler),
          this.evTarget && Ct(this.target, this.evTarget, this.domHandler),
          this.evWin && Ct(Me(this.element), this.evWin, this.domHandler));
      },
      destroy: function () {
        (this.evEl && Lt(this.element, this.evEl, this.domHandler),
          this.evTarget && Lt(this.target, this.evTarget, this.domHandler),
          this.evWin && Lt(Me(this.element), this.evWin, this.domHandler));
      },
    };
    function Dn(s) {
      var l,
        c = s.options.inputClass;
      return (
        c ? (l = c) : Qn ? (l = Nr) : de ? (l = vn) : fi ? (l = Ur) : (l = er),
        new l(s, Jn)
      );
    }
    function Jn(s, l, c) {
      var v = c.pointers.length,
        T = c.changedPointers.length,
        D = l & Mt && v - T === 0,
        J = l & (dt | zt) && v - T === 0;
      ((c.isFirst = !!D),
        (c.isFinal = !!J),
        D && (s.session = {}),
        (c.eventType = l),
        us(s, c),
        s.emit("hammer.input", c),
        s.recognize(c),
        (s.session.prevInput = c));
    }
    function us(s, l) {
      var c = s.session,
        v = l.pointers,
        T = v.length;
      (c.firstInput || (c.firstInput = pn(l)),
        T > 1 && !c.firstMultiple
          ? (c.firstMultiple = pn(l))
          : T === 1 && (c.firstMultiple = !1));
      var D = c.firstInput,
        J = c.firstMultiple,
        bt = J ? J.center : D.center,
        St = (l.center = Qe(v));
      ((l.timeStamp = B()),
        (l.deltaTime = l.timeStamp - D.timeStamp),
        (l.angle = Nn(bt, St)),
        (l.distance = gn(bt, St)),
        Pn(c, l),
        (l.offsetDirection = tr(l.deltaX, l.deltaY)));
      var Dt = jn(l.deltaTime, l.deltaX, l.deltaY);
      ((l.overallVelocityX = Dt.x),
        (l.overallVelocityY = Dt.y),
        (l.overallVelocity = U(Dt.x) > U(Dt.y) ? Dt.x : Dt.y),
        (l.scale = J ? Fr(J.pointers, v) : 1),
        (l.rotation = J ? Sr(J.pointers, v) : 0),
        (l.maxPointers = c.prevInput
          ? l.pointers.length > c.prevInput.maxPointers
            ? l.pointers.length
            : c.prevInput.maxPointers
          : l.pointers.length),
        os(c, l));
      var _e = s.element;
      (Ie(l.srcEvent.target, _e) && (_e = l.srcEvent.target), (l.target = _e));
    }
    function Pn(s, l) {
      var c = l.center,
        v = s.offsetDelta || {},
        T = s.prevDelta || {},
        D = s.prevInput || {};
      ((l.eventType === Mt || D.eventType === dt) &&
        ((T = s.prevDelta = { x: D.deltaX || 0, y: D.deltaY || 0 }),
        (v = s.offsetDelta = { x: c.x, y: c.y })),
        (l.deltaX = T.x + (c.x - v.x)),
        (l.deltaY = T.y + (c.y - v.y)));
    }
    function os(s, l) {
      var c = s.lastInterval || l,
        v = l.timeStamp - c.timeStamp,
        T,
        D,
        J,
        bt;
      if (l.eventType != zt && (v > Zn || c.velocity === I)) {
        var St = l.deltaX - c.deltaX,
          Dt = l.deltaY - c.deltaY,
          _e = jn(v, St, Dt);
        ((D = _e.x),
          (J = _e.y),
          (T = U(_e.x) > U(_e.y) ? _e.x : _e.y),
          (bt = tr(St, Dt)),
          (s.lastInterval = l));
      } else
        ((T = c.velocity),
          (D = c.velocityX),
          (J = c.velocityY),
          (bt = c.direction));
      ((l.velocity = T),
        (l.velocityX = D),
        (l.velocityY = J),
        (l.direction = bt));
    }
    function pn(s) {
      for (var l = [], c = 0; c < s.pointers.length; )
        ((l[c] = {
          clientX: Y(s.pointers[c].clientX),
          clientY: Y(s.pointers[c].clientY),
        }),
          c++);
      return {
        timeStamp: B(),
        pointers: l,
        center: Qe(l),
        deltaX: s.deltaX,
        deltaY: s.deltaY,
      };
    }
    function Qe(s) {
      var l = s.length;
      if (l === 1) return { x: Y(s[0].clientX), y: Y(s[0].clientY) };
      for (var c = 0, v = 0, T = 0; T < l; )
        ((c += s[T].clientX), (v += s[T].clientY), T++);
      return { x: Y(c / l), y: Y(v / l) };
    }
    function jn(s, l, c) {
      return { x: l / s || 0, y: c / s || 0 };
    }
    function tr(s, l) {
      return s === l ? Ke : U(s) >= U(l) ? (s < 0 ? We : dn) : l < 0 ? Ut : Se;
    }
    function gn(s, l, c) {
      c || (c = ci);
      var v = l[c[0]] - s[c[0]],
        T = l[c[1]] - s[c[1]];
      return Math.sqrt(v * v + T * T);
    }
    function Nn(s, l, c) {
      c || (c = ci);
      var v = l[c[0]] - s[c[0]],
        T = l[c[1]] - s[c[1]];
      return (Math.atan2(T, v) * 180) / Math.PI;
    }
    function Sr(s, l) {
      return Nn(l[1], l[0], $e) + Nn(s[1], s[0], $e);
    }
    function Fr(s, l) {
      return gn(l[0], l[1], $e) / gn(s[0], s[1], $e);
    }
    var Or = { mousedown: Mt, mousemove: se, mouseup: dt },
      Rr = "mousedown",
      Lr = "mousemove mouseup";
    function er() {
      ((this.evEl = Rr),
        (this.evWin = Lr),
        (this.pressed = !1),
        mt.apply(this, arguments));
    }
    ut(er, mt, {
      handler: function (l) {
        var c = Or[l.type];
        (c & Mt && l.button === 0 && (this.pressed = !0),
          c & se && l.which !== 1 && (c = dt),
          this.pressed &&
            (c & dt && (this.pressed = !1),
            this.callback(this.manager, c, {
              pointers: [l],
              changedPointers: [l],
              pointerType: Ir,
              srcEvent: l,
            })));
      },
    });
    var ls = {
        pointerdown: Mt,
        pointermove: se,
        pointerup: dt,
        pointercancel: zt,
        pointerout: zt,
      },
      fs = { 2: Ln, 3: as, 4: Ir, 5: hn },
      Dr = "pointerdown",
      Pr = "pointermove pointerup pointercancel";
    x.MSPointerEvent &&
      !x.PointerEvent &&
      ((Dr = "MSPointerDown"),
      (Pr = "MSPointerMove MSPointerUp MSPointerCancel"));
    function Nr() {
      ((this.evEl = Dr),
        (this.evWin = Pr),
        mt.apply(this, arguments),
        (this.store = this.manager.session.pointerEvents = []));
    }
    ut(Nr, mt, {
      handler: function (l) {
        var c = this.store,
          v = !1,
          T = l.type.toLowerCase().replace("ms", ""),
          D = ls[T],
          J = fs[l.pointerType] || l.pointerType,
          bt = J == Ln,
          St = Ce(c, l.pointerId, "pointerId");
        (D & Mt && (l.button === 0 || bt)
          ? St < 0 && (c.push(l), (St = c.length - 1))
          : D & (dt | zt) && (v = !0),
          !(St < 0) &&
            ((c[St] = l),
            this.callback(this.manager, D, {
              pointers: c,
              changedPointers: [l],
              pointerType: J,
              srcEvent: l,
            }),
            v && c.splice(St, 1)));
      },
    });
    var cs = { touchstart: Mt, touchmove: se, touchend: dt, touchcancel: zt },
      hs = "touchstart",
      ds = "touchstart touchmove touchend touchcancel";
    function Br() {
      ((this.evTarget = hs),
        (this.evWin = ds),
        (this.started = !1),
        mt.apply(this, arguments));
    }
    ut(Br, mt, {
      handler: function (l) {
        var c = cs[l.type];
        if ((c === Mt && (this.started = !0), !!this.started)) {
          var v = ps.call(this, l, c);
          (c & (dt | zt) &&
            v[0].length - v[1].length === 0 &&
            (this.started = !1),
            this.callback(this.manager, c, {
              pointers: v[0],
              changedPointers: v[1],
              pointerType: Ln,
              srcEvent: l,
            }));
        }
      },
    });
    function ps(s, l) {
      var c = Xe(s.touches),
        v = Xe(s.changedTouches);
      return (l & (dt | zt) && (c = Rn(c.concat(v), "identifier", !0)), [c, v]);
    }
    var gs = { touchstart: Mt, touchmove: se, touchend: dt, touchcancel: zt },
      vs = "touchstart touchmove touchend touchcancel";
    function vn() {
      ((this.evTarget = vs), (this.targetIds = {}), mt.apply(this, arguments));
    }
    ut(vn, mt, {
      handler: function (l) {
        var c = gs[l.type],
          v = _s.call(this, l, c);
        !v ||
          this.callback(this.manager, c, {
            pointers: v[0],
            changedPointers: v[1],
            pointerType: Ln,
            srcEvent: l,
          });
      },
    });
    function _s(s, l) {
      var c = Xe(s.touches),
        v = this.targetIds;
      if (l & (Mt | se) && c.length === 1)
        return ((v[c[0].identifier] = !0), [c, c]);
      var T,
        D,
        J = Xe(s.changedTouches),
        bt = [],
        St = this.target;
      if (
        ((D = c.filter(function (Dt) {
          return Ie(Dt.target, St);
        })),
        l === Mt)
      )
        for (T = 0; T < D.length; ) ((v[D[T].identifier] = !0), T++);
      for (T = 0; T < J.length; )
        (v[J[T].identifier] && bt.push(J[T]),
          l & (dt | zt) && delete v[J[T].identifier],
          T++);
      if (!!bt.length) return [Rn(D.concat(bt), "identifier", !0), bt];
    }
    var Mr = 2500,
      hi = 25;
    function Ur() {
      mt.apply(this, arguments);
      var s = At(this.handler, this);
      ((this.touch = new vn(this.manager, s)),
        (this.mouse = new er(this.manager, s)),
        (this.primaryTouch = null),
        (this.lastTouches = []));
    }
    ut(Ur, mt, {
      handler: function (l, c, v) {
        var T = v.pointerType == Ln,
          D = v.pointerType == Ir;
        if (
          !(D && v.sourceCapabilities && v.sourceCapabilities.firesTouchEvents)
        ) {
          if (T) ms.call(this, c, v);
          else if (D && xs.call(this, v)) return;
          this.callback(l, c, v);
        }
      },
      destroy: function () {
        (this.touch.destroy(), this.mouse.destroy());
      },
    });
    function ms(s, l) {
      s & Mt
        ? ((this.primaryTouch = l.changedPointers[0].identifier),
          di.call(this, l))
        : s & (dt | zt) && di.call(this, l);
    }
    function di(s) {
      var l = s.changedPointers[0];
      if (l.identifier === this.primaryTouch) {
        var c = { x: l.clientX, y: l.clientY };
        this.lastTouches.push(c);
        var v = this.lastTouches,
          T = function () {
            var D = v.indexOf(c);
            D > -1 && v.splice(D, 1);
          };
        setTimeout(T, Mr);
      }
    }
    function xs(s) {
      for (
        var l = s.srcEvent.clientX, c = s.srcEvent.clientY, v = 0;
        v < this.lastTouches.length;
        v++
      ) {
        var T = this.lastTouches[v],
          D = Math.abs(l - T.x),
          J = Math.abs(c - T.y);
        if (D <= hi && J <= hi) return !0;
      }
      return !1;
    }
    var pi = Jt(b.style, "touchAction"),
      gi = pi !== I,
      vi = "compute",
      Wr = "auto",
      $r = "manipulation",
      Ze = "none",
      Bn = "pan-x",
      Mn = "pan-y",
      nr = ws();
    function kr(s, l) {
      ((this.manager = s), this.set(l));
    }
    kr.prototype = {
      set: function (s) {
        (s == vi && (s = this.compute()),
          gi &&
            this.manager.element.style &&
            nr[s] &&
            (this.manager.element.style[pi] = s),
          (this.actions = s.toLowerCase().trim()));
      },
      update: function () {
        this.set(this.manager.options.touchAction);
      },
      compute: function () {
        var s = [];
        return (
          z(this.manager.recognizers, function (l) {
            Gt(l.options.enable, [l]) && (s = s.concat(l.getTouchAction()));
          }),
          rr(s.join(" "))
        );
      },
      preventDefaults: function (s) {
        var l = s.srcEvent,
          c = s.offsetDirection;
        if (this.manager.session.prevented) {
          l.preventDefault();
          return;
        }
        var v = this.actions,
          T = Zt(v, Ze) && !nr[Ze],
          D = Zt(v, Mn) && !nr[Mn],
          J = Zt(v, Bn) && !nr[Bn];
        if (T) {
          var bt = s.pointers.length === 1,
            St = s.distance < 2,
            Dt = s.deltaTime < 250;
          if (bt && St && Dt) return;
        }
        if (!(J && D) && (T || (D && c & pe) || (J && c & Wt)))
          return this.preventSrc(l);
      },
      preventSrc: function (s) {
        ((this.manager.session.prevented = !0), s.preventDefault());
      },
    };
    function rr(s) {
      if (Zt(s, Ze)) return Ze;
      var l = Zt(s, Bn),
        c = Zt(s, Mn);
      return l && c ? Ze : l || c ? (l ? Bn : Mn) : Zt(s, $r) ? $r : Wr;
    }
    function ws() {
      if (!gi) return !1;
      var s = {},
        l = x.CSS && x.CSS.supports;
      return (
        [
          "auto",
          "manipulation",
          "pan-y",
          "pan-x",
          "pan-x pan-y",
          "none",
        ].forEach(function (c) {
          s[c] = l ? x.CSS.supports("touch-action", c) : !0;
        }),
        s
      );
    }
    var Je = 1,
      jt = 2,
      _n = 4,
      ke = 8,
      ge = ke,
      mn = 16,
      ae = 32;
    function Fe(s) {
      ((this.options = K({}, this.defaults, s || {})),
        (this.id = ss()),
        (this.manager = null),
        (this.options.enable = ft(this.options.enable, !0)),
        (this.state = Je),
        (this.simultaneous = {}),
        (this.requireFail = []));
    }
    Fe.prototype = {
      defaults: {},
      set: function (s) {
        return (
          K(this.options, s),
          this.manager && this.manager.touchAction.update(),
          this
        );
      },
      recognizeWith: function (s) {
        if (L(s, "recognizeWith", this)) return this;
        var l = this.simultaneous;
        return (
          (s = ir(s, this)),
          l[s.id] || ((l[s.id] = s), s.recognizeWith(this)),
          this
        );
      },
      dropRecognizeWith: function (s) {
        return L(s, "dropRecognizeWith", this)
          ? this
          : ((s = ir(s, this)), delete this.simultaneous[s.id], this);
      },
      requireFailure: function (s) {
        if (L(s, "requireFailure", this)) return this;
        var l = this.requireFail;
        return (
          (s = ir(s, this)),
          Ce(l, s) === -1 && (l.push(s), s.requireFailure(this)),
          this
        );
      },
      dropRequireFailure: function (s) {
        if (L(s, "dropRequireFailure", this)) return this;
        s = ir(s, this);
        var l = Ce(this.requireFail, s);
        return (l > -1 && this.requireFail.splice(l, 1), this);
      },
      hasRequireFailures: function () {
        return this.requireFail.length > 0;
      },
      canRecognizeWith: function (s) {
        return !!this.simultaneous[s.id];
      },
      emit: function (s) {
        var l = this,
          c = this.state;
        function v(T) {
          l.manager.emit(T, s);
        }
        (c < ke && v(l.options.event + _i(c)),
          v(l.options.event),
          s.additionalEvent && v(s.additionalEvent),
          c >= ke && v(l.options.event + _i(c)));
      },
      tryEmit: function (s) {
        if (this.canEmit()) return this.emit(s);
        this.state = ae;
      },
      canEmit: function () {
        for (var s = 0; s < this.requireFail.length; ) {
          if (!(this.requireFail[s].state & (ae | Je))) return !1;
          s++;
        }
        return !0;
      },
      recognize: function (s) {
        var l = K({}, s);
        if (!Gt(this.options.enable, [this, l])) {
          (this.reset(), (this.state = ae));
          return;
        }
        (this.state & (ge | mn | ae) && (this.state = Je),
          (this.state = this.process(l)),
          this.state & (jt | _n | ke | mn) && this.tryEmit(l));
      },
      process: function (s) {},
      getTouchAction: function () {},
      reset: function () {},
    };
    function _i(s) {
      return s & mn
        ? "cancel"
        : s & ke
          ? "end"
          : s & _n
            ? "move"
            : s & jt
              ? "start"
              : "";
    }
    function mi(s) {
      return s == Se
        ? "down"
        : s == Ut
          ? "up"
          : s == We
            ? "left"
            : s == dn
              ? "right"
              : "";
    }
    function ir(s, l) {
      var c = l.manager;
      return c ? c.get(s) : s;
    }
    function te() {
      Fe.apply(this, arguments);
    }
    ut(te, Fe, {
      defaults: { pointers: 1 },
      attrTest: function (s) {
        var l = this.options.pointers;
        return l === 0 || s.pointers.length === l;
      },
      process: function (s) {
        var l = this.state,
          c = s.eventType,
          v = l & (jt | _n),
          T = this.attrTest(s);
        return v && (c & zt || !T)
          ? l | mn
          : v || T
            ? c & dt
              ? l | ke
              : l & jt
                ? l | _n
                : jt
            : ae;
      },
    });
    function Un() {
      (te.apply(this, arguments), (this.pX = null), (this.pY = null));
    }
    ut(Un, te, {
      defaults: { event: "pan", threshold: 10, pointers: 1, direction: Cr },
      getTouchAction: function () {
        var s = this.options.direction,
          l = [];
        return (s & pe && l.push(Mn), s & Wt && l.push(Bn), l);
      },
      directionTest: function (s) {
        var l = this.options,
          c = !0,
          v = s.distance,
          T = s.direction,
          D = s.deltaX,
          J = s.deltaY;
        return (
          T & l.direction ||
            (l.direction & pe
              ? ((T = D === 0 ? Ke : D < 0 ? We : dn),
                (c = D != this.pX),
                (v = Math.abs(s.deltaX)))
              : ((T = J === 0 ? Ke : J < 0 ? Ut : Se),
                (c = J != this.pY),
                (v = Math.abs(s.deltaY)))),
          (s.direction = T),
          c && v > l.threshold && T & l.direction
        );
      },
      attrTest: function (s) {
        return (
          te.prototype.attrTest.call(this, s) &&
          (this.state & jt || (!(this.state & jt) && this.directionTest(s)))
        );
      },
      emit: function (s) {
        ((this.pX = s.deltaX), (this.pY = s.deltaY));
        var l = mi(s.direction);
        (l && (s.additionalEvent = this.options.event + l),
          this._super.emit.call(this, s));
      },
    });
    function sr() {
      te.apply(this, arguments);
    }
    ut(sr, te, {
      defaults: { event: "pinch", threshold: 0, pointers: 2 },
      getTouchAction: function () {
        return [Ze];
      },
      attrTest: function (s) {
        return (
          this._super.attrTest.call(this, s) &&
          (Math.abs(s.scale - 1) > this.options.threshold || this.state & jt)
        );
      },
      emit: function (s) {
        if (s.scale !== 1) {
          var l = s.scale < 1 ? "in" : "out";
          s.additionalEvent = this.options.event + l;
        }
        this._super.emit.call(this, s);
      },
    });
    function Wn() {
      (Fe.apply(this, arguments), (this._timer = null), (this._input = null));
    }
    ut(Wn, Fe, {
      defaults: { event: "press", pointers: 1, time: 251, threshold: 9 },
      getTouchAction: function () {
        return [Wr];
      },
      process: function (s) {
        var l = this.options,
          c = s.pointers.length === l.pointers,
          v = s.distance < l.threshold,
          T = s.deltaTime > l.time;
        if (((this._input = s), !v || !c || (s.eventType & (dt | zt) && !T)))
          this.reset();
        else if (s.eventType & Mt)
          (this.reset(),
            (this._timer = W(
              function () {
                ((this.state = ge), this.tryEmit());
              },
              l.time,
              this,
            )));
        else if (s.eventType & dt) return ge;
        return ae;
      },
      reset: function () {
        clearTimeout(this._timer);
      },
      emit: function (s) {
        this.state === ge &&
          (s && s.eventType & dt
            ? this.manager.emit(this.options.event + "up", s)
            : ((this._input.timeStamp = B()),
              this.manager.emit(this.options.event, this._input)));
      },
    });
    function Hr() {
      te.apply(this, arguments);
    }
    ut(Hr, te, {
      defaults: { event: "rotate", threshold: 0, pointers: 2 },
      getTouchAction: function () {
        return [Ze];
      },
      attrTest: function (s) {
        return (
          this._super.attrTest.call(this, s) &&
          (Math.abs(s.rotation) > this.options.threshold || this.state & jt)
        );
      },
    });
    function ar() {
      te.apply(this, arguments);
    }
    ut(ar, te, {
      defaults: {
        event: "swipe",
        threshold: 10,
        velocity: 0.3,
        direction: pe | Wt,
        pointers: 1,
      },
      getTouchAction: function () {
        return Un.prototype.getTouchAction.call(this);
      },
      attrTest: function (s) {
        var l = this.options.direction,
          c;
        return (
          l & (pe | Wt)
            ? (c = s.overallVelocity)
            : l & pe
              ? (c = s.overallVelocityX)
              : l & Wt && (c = s.overallVelocityY),
          this._super.attrTest.call(this, s) &&
            l & s.offsetDirection &&
            s.distance > this.options.threshold &&
            s.maxPointers == this.options.pointers &&
            U(c) > this.options.velocity &&
            s.eventType & dt
        );
      },
      emit: function (s) {
        var l = mi(s.offsetDirection);
        (l && this.manager.emit(this.options.event + l, s),
          this.manager.emit(this.options.event, s));
      },
    });
    function je() {
      (Fe.apply(this, arguments),
        (this.pTime = !1),
        (this.pCenter = !1),
        (this._timer = null),
        (this._input = null),
        (this.count = 0));
    }
    ut(je, Fe, {
      defaults: {
        event: "tap",
        pointers: 1,
        taps: 1,
        interval: 300,
        time: 250,
        threshold: 9,
        posThreshold: 10,
      },
      getTouchAction: function () {
        return [$r];
      },
      process: function (s) {
        var l = this.options,
          c = s.pointers.length === l.pointers,
          v = s.distance < l.threshold,
          T = s.deltaTime < l.time;
        if ((this.reset(), s.eventType & Mt && this.count === 0))
          return this.failTimeout();
        if (v && T && c) {
          if (s.eventType != dt) return this.failTimeout();
          var D = this.pTime ? s.timeStamp - this.pTime < l.interval : !0,
            J = !this.pCenter || gn(this.pCenter, s.center) < l.posThreshold;
          ((this.pTime = s.timeStamp),
            (this.pCenter = s.center),
            !J || !D ? (this.count = 1) : (this.count += 1),
            (this._input = s));
          var bt = this.count % l.taps;
          if (bt === 0)
            return this.hasRequireFailures()
              ? ((this._timer = W(
                  function () {
                    ((this.state = ge), this.tryEmit());
                  },
                  l.interval,
                  this,
                )),
                jt)
              : ge;
        }
        return ae;
      },
      failTimeout: function () {
        return (
          (this._timer = W(
            function () {
              this.state = ae;
            },
            this.options.interval,
            this,
          )),
          ae
        );
      },
      reset: function () {
        clearTimeout(this._timer);
      },
      emit: function () {
        this.state == ge &&
          ((this._input.tapCount = this.count),
          this.manager.emit(this.options.event, this._input));
      },
    });
    function ve(s, l) {
      return (
        (l = l || {}),
        (l.recognizers = ft(l.recognizers, ve.defaults.preset)),
        new ur(s, l)
      );
    }
    ((ve.VERSION = "2.0.7"),
      (ve.defaults = {
        domEvents: !1,
        touchAction: vi,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [
          [Hr, { enable: !1 }],
          [sr, { enable: !1 }, ["rotate"]],
          [ar, { direction: pe }],
          [Un, { direction: pe }, ["swipe"]],
          [je],
          [je, { event: "doubletap", taps: 2 }, ["tap"]],
          [Wn],
        ],
        cssProps: {
          userSelect: "none",
          touchSelect: "none",
          touchCallout: "none",
          contentZooming: "none",
          userDrag: "none",
          tapHighlightColor: "rgba(0,0,0,0)",
        },
      }));
    var As = 1,
      zr = 2;
    function ur(s, l) {
      ((this.options = K({}, ve.defaults, l || {})),
        (this.options.inputTarget = this.options.inputTarget || s),
        (this.handlers = {}),
        (this.session = {}),
        (this.recognizers = []),
        (this.oldCssProps = {}),
        (this.element = s),
        (this.input = Dn(this)),
        (this.touchAction = new kr(this, this.options.touchAction)),
        or(this, !0),
        z(
          this.options.recognizers,
          function (c) {
            var v = this.add(new c[0](c[1]));
            (c[2] && v.recognizeWith(c[2]), c[3] && v.requireFailure(c[3]));
          },
          this,
        ));
    }
    ur.prototype = {
      set: function (s) {
        return (
          K(this.options, s),
          s.touchAction && this.touchAction.update(),
          s.inputTarget &&
            (this.input.destroy(),
            (this.input.target = s.inputTarget),
            this.input.init()),
          this
        );
      },
      stop: function (s) {
        this.session.stopped = s ? zr : As;
      },
      recognize: function (s) {
        var l = this.session;
        if (!l.stopped) {
          this.touchAction.preventDefaults(s);
          var c,
            v = this.recognizers,
            T = l.curRecognizer;
          (!T || (T && T.state & ge)) && (T = l.curRecognizer = null);
          for (var D = 0; D < v.length; )
            ((c = v[D]),
              l.stopped !== zr && (!T || c == T || c.canRecognizeWith(T))
                ? c.recognize(s)
                : c.reset(),
              !T && c.state & (jt | _n | ke) && (T = l.curRecognizer = c),
              D++);
        }
      },
      get: function (s) {
        if (s instanceof Fe) return s;
        for (var l = this.recognizers, c = 0; c < l.length; c++)
          if (l[c].options.event == s) return l[c];
        return null;
      },
      add: function (s) {
        if (L(s, "add", this)) return this;
        var l = this.get(s.options.event);
        return (
          l && this.remove(l),
          this.recognizers.push(s),
          (s.manager = this),
          this.touchAction.update(),
          s
        );
      },
      remove: function (s) {
        if (L(s, "remove", this)) return this;
        if (((s = this.get(s)), s)) {
          var l = this.recognizers,
            c = Ce(l, s);
          c !== -1 && (l.splice(c, 1), this.touchAction.update());
        }
        return this;
      },
      on: function (s, l) {
        if (s !== I && l !== I) {
          var c = this.handlers;
          return (
            z(Ge(s), function (v) {
              ((c[v] = c[v] || []), c[v].push(l));
            }),
            this
          );
        }
      },
      off: function (s, l) {
        if (s !== I) {
          var c = this.handlers;
          return (
            z(Ge(s), function (v) {
              l ? c[v] && c[v].splice(Ce(c[v], l), 1) : delete c[v];
            }),
            this
          );
        }
      },
      emit: function (s, l) {
        this.options.domEvents && ys(s, l);
        var c = this.handlers[s] && this.handlers[s].slice();
        if (!(!c || !c.length)) {
          ((l.type = s),
            (l.preventDefault = function () {
              l.srcEvent.preventDefault();
            }));
          for (var v = 0; v < c.length; ) (c[v](l), v++);
        }
      },
      destroy: function () {
        (this.element && or(this, !1),
          (this.handlers = {}),
          (this.session = {}),
          this.input.destroy(),
          (this.element = null));
      },
    };
    function or(s, l) {
      var c = s.element;
      if (!!c.style) {
        var v;
        (z(s.options.cssProps, function (T, D) {
          ((v = Jt(c.style, D)),
            l
              ? ((s.oldCssProps[v] = c.style[v]), (c.style[v] = T))
              : (c.style[v] = s.oldCssProps[v] || ""));
        }),
          l || (s.oldCssProps = {}));
      }
    }
    function ys(s, l) {
      var c = a.createEvent("Event");
      (c.initEvent(s, !0, !0), (c.gesture = l), l.target.dispatchEvent(c));
    }
    K(ve, {
      INPUT_START: Mt,
      INPUT_MOVE: se,
      INPUT_END: dt,
      INPUT_CANCEL: zt,
      STATE_POSSIBLE: Je,
      STATE_BEGAN: jt,
      STATE_CHANGED: _n,
      STATE_ENDED: ke,
      STATE_RECOGNIZED: ge,
      STATE_CANCELLED: mn,
      STATE_FAILED: ae,
      DIRECTION_NONE: Ke,
      DIRECTION_LEFT: We,
      DIRECTION_RIGHT: dn,
      DIRECTION_UP: Ut,
      DIRECTION_DOWN: Se,
      DIRECTION_HORIZONTAL: pe,
      DIRECTION_VERTICAL: Wt,
      DIRECTION_ALL: Cr,
      Manager: ur,
      Input: mt,
      TouchAction: kr,
      TouchInput: vn,
      MouseInput: er,
      PointerEventInput: Nr,
      TouchMouseInput: Ur,
      SingleTouchInput: Br,
      Recognizer: Fe,
      AttrRecognizer: te,
      Tap: je,
      Pan: Un,
      Swipe: ar,
      Pinch: sr,
      Rotate: Hr,
      Press: Wn,
      on: Ct,
      off: Lt,
      each: z,
      merge: at,
      extend: et,
      assign: K,
      inherit: ut,
      bindFn: At,
      prefixed: Jt,
    });
    var xi = typeof x < "u" ? x : typeof self < "u" ? self : {};
    ((xi.Hammer = ve),
      typeof I == "function" && I.amd
        ? I(function () {
            return ve;
          })
        : g.exports
          ? (g.exports = ve)
          : (x[O] = ve));
  })(window, document, "Hammer");
})(r0);
const i0 = { class: "overflow-hidden" },
  s0 = ["data-page"],
  a0 = ["href", "data-link"],
  u0 = Ht({
    props: {
      pageList: null,
      duration: { default: 500 },
      showAnchor: { type: Boolean, default: !0 },
      modelValue: null,
    },
    emits: ["update:modelValue"],
    setup(g, { emit: x }) {
      const a = g,
        O = pv("current_page", window.location.hash || a.pageList[0]),
        I = Bt(),
        C = _t(() => I.value);
      function b(B) {
        const W = B.target;
        ((O.value = W.dataset.link), (window.location.hash = O.value));
      }
      function F() {
        const B = C.value.querySelector(`[data-page="${O.value}"]`);
        !B ||
          ((C.value.style.transform = `translateY(-${B.offsetTop - (window.innerHeight - B.clientHeight)}px)`),
          x("update:modelValue", O.value));
      }
      const Y = gv(),
        U = Ra.exports.throttle(F, 500);
      return (
        Fn(() => {
          if (Object.keys(Y).length < 1) return;
          ((O.value = window.location.hash.slice(1) || a.pageList[0]), F());
          let B = !0;
          (C.value.addEventListener("wheel", (W) => {
            if (!B) return;
            const L = W.deltaY;
            if (L === 0) return;
            let z = a.pageList.findIndex((N) => N === O.value) + 1;
            (L > 0 && z >= a.pageList.length) ||
              (L < 0 && z <= 1) ||
              (L > 0 ? (z += 1) : (z -= 1),
              (window.location.hash = `#${a.pageList[z - 1]}`),
              (B = !1),
              setTimeout(() => {
                B = !0;
              }, 1e3));
          }),
            (window.onhashchange = function (W) {
              ((O.value = W.newURL.split("#").pop()), F());
            }),
            window.addEventListener("resize", U));
        }),
        vv(() => {
          ((window.onhashchange = null),
            window.removeEventListener("resize", U));
        }),
        Fn(() => {
          const B = new Hammer.Manager(I.value),
            W = new Hammer.Swipe({ event: "swipe" });
          (B.add(W),
            B.on("swipe", (L) => {
              const z = L.offsetDirection;
              if ([8, 16].includes(z)) {
                let N = a.pageList.findIndex((K) => K === O.value) + 1;
                if ((z === 8 && N >= a.pageList.length) || (z === 16 && N <= 1))
                  return;
                (z === 8 ? (N += 1) : (N -= 1),
                  (window.location.hash = `#${a.pageList[N - 1]}`));
              }
            }));
        }),
        (B, W) => (
          k(),
          H("div", i0, [
            y(
              "div",
              {
                ref_key: "ctnRef",
                ref: I,
                class: "h-screen",
                style: qe({ transitionDuration: g.duration + "ms" }),
              },
              [
                (k(!0),
                H(
                  Ft,
                  null,
                  Nt(
                    g.pageList,
                    (L) => (
                      k(),
                      H(
                        "div",
                        { key: L, "data-page": L },
                        [
                          _v(
                            B.$slots,
                            L,
                            { page: L },
                            () => [Jo(It(L), 1)],
                            !0,
                          ),
                        ],
                        8,
                        s0,
                      )
                    ),
                  ),
                  128,
                )),
              ],
              4,
            ),
            g.showAnchor
              ? (k(),
                H(
                  "ul",
                  {
                    key: 0,
                    class: "fixed right-5 top-1/2 -translate-y-1/2 list-none",
                    onClick: W[1] || (W[1] = (L) => b(L)),
                  },
                  [
                    (k(!0),
                    H(
                      Ft,
                      null,
                      Nt(
                        g.pageList,
                        (L) => (
                          k(),
                          H(
                            "li",
                            {
                              key: "#" + L,
                              class:
                                "anchor-li h-4 w-4 flex justify-center items-center m-1 cursor-pointer",
                            },
                            [
                              y(
                                "a",
                                {
                                  href: "#" + L,
                                  "data-link": L,
                                  class: ht([
                                    "anchor block w-1.5 h-1.5 bg-red-600 rounded-full transition-all ease-in-out duration-200",
                                    { active: L === S(O) },
                                  ]),
                                  onClick:
                                    W[0] || (W[0] = br(() => {}, ["prevent"])),
                                },
                                null,
                                10,
                                a0,
                              ),
                            ],
                          )
                        ),
                      ),
                      128,
                    )),
                  ],
                ))
              : cn("", !0),
          ])
        )
      );
    },
  });
var o0 = Be(u0, [["__scopeId", "data-v-7ce4222e"]]);
function On() {
  const g = Oa("pageList"),
    x = Oa("currentPage"),
    a = _t(() => (x == null ? void 0 : x.value) === g[0].pageId),
    O = _t(() => (C) => {
      const b = g.findIndex((Y) => Y.pageId === C),
        F = g.findIndex((Y) => Y.pageId === (x == null ? void 0 : x.value));
      return Math.abs(b - F) > 1;
    });
  function I() {
    window.location.hash = `#${g[0].pageId}`;
  }
  return { pageList: g, currentPage: x, isIndex: a, isHidden: O, gotoIndex: I };
}
const ul = mv("article", {
  state: () => ({ homeCarouselList: [], currentHomeCarouselUrl: "" }),
  actions: {
    async setHomeCarouselList() {
      const g = await yr(1);
      ((this.homeCarouselList = g), this.setCurrentHomeCarouselUrl(0));
    },
    setCurrentHomeCarouselUrl(g) {
      var x;
      this.currentHomeCarouselUrl =
        (x = this.homeCarouselList[g]) == null ? void 0 : x.picturePath;
    },
  },
});
const li = (g) => (Er("data-v-3316e0ac"), (g = g()), Tr(), g),
  l0 = { class: "fixed left-0 top-0 bottom-0 h-screen w-[89px]" },
  f0 = li(() =>
    y(
      "div",
      { class: "bg-[#000F23] opacity-65 w-full h-full absolute top-0 left-0" },
      null,
      -1,
    ),
  ),
  c0 = {
    class:
      "w-full h-full absolute top-0 left-0 px-[23px] pt-10 py-[31px] flex flex-col justify-between",
  },
  h0 = li(() =>
    y(
      "i",
      {
        class:
          "block w-10px h-45px bg-[#2288E6] absolute top-0 left-[50%] -ml-5px z-1",
      },
      "\xA0",
      -1,
    ),
  ),
  d0 = li(() =>
    y(
      "i",
      { class: "block w-1px h-75px bg-[#FFFFFF] my-0 mx-auto opacity-80" },
      "\xA0",
      -1,
    ),
  ),
  p0 = li(() =>
    y(
      "span",
      {
        class:
          "block w-20px break-words my-10px mx-auto text-center text-15px text-[#FFFFFF] leading-19px font-normal",
      },
      "返回顶部",
      -1,
    ),
  ),
  g0 = [h0, d0, p0],
  v0 = { class: "flex-1 flex flex-col items-center" },
  _0 = ["onMouseenter"],
  m0 = ["href", "target"],
  x0 = ["src"],
  w0 = { class: "nav-title" },
  A0 = {
    class:
      "bg-[#EEF5F5] grid grid-cols-2 justify-center items-center gap-y-21px px-35px py-38px",
  },
  y0 = ["src"],
  b0 = { class: "text-[12px] font-medium leading-20px truncate" },
  E0 = li(() =>
    y(
      "div",
      { class: "bg-[#fff] flex justify-center items-center" },
      [
        y("img", {
          src: "https://www.jchc.cn/storage/sjk/91ba0efe-10e2-4883-89a1-a803ae969130.png",
          alt: "",
          class: "w-21px h-17px mr-9px",
        }),
        y(
          "span",
          { class: "text-[#000] text-16px font-medium leading-22px" },
          "扫描关注公众号",
        ),
      ],
      -1,
    ),
  ),
  T0 = ["onMouseenter"],
  I0 = {
    key: 0,
    class:
      "right-box h-320px absolute left-270px top-0 grid grid-cols-5 bg-[#fff] px-51px py-41px",
  },
  C0 = ["href"],
  S0 = Ht({
    setup(g) {
      const { gotoIndex: x } = On(),
        a = ul(),
        O = jo(a, "currentHomeCarouselUrl"),
        I = [
          {
            id: 1,
            title: "公众号",
            sideIcon:
              "https://www.jchc.cn/storage/sjk/5e8dbf78-a340-41a6-9445-431f6d2ab39d.png",
            url: "javascript:",
          },
          {
            id: 2,
            title: "OA登录",
            sideIcon:
              "https://www.jchc.cn/storage/sjk/63468d50-10bb-43f7-b707-046e2818f09c.png",
            url: "http://sjk.jchc.cn",
          },
          // {
          //   id: 3,
          //   title: "友情链接",
          //   sideIcon:
          //     "https://www.jchc.cn/storage/sjk/5fe34e6d-8d8f-4b0b-b6ca-aa5649ecf3d3.png",
          //   url: "javascript:",
          // },
        ],
        C = [
          {
            id: 1,
            title: "新e畅App",
            qrCode:
              "https://www.jchc.cn/storage/sjk/b9065284-90ce-46fd-9e0f-a6e63c6131dc.png",
          },
          {
            id: 2,
            title: '"新疆交投"公众号',
            qrCode:
              "https://www.jchc.cn/storage/sjk/e1603caf-ef30-41d6-9a36-8ad7ec6b2709.jpg",
          },
          {
            id: 3,
            title: "新疆交通投资（集团）党建",
            qrCode:
              "https://www.jchc.cn/storage/sjk/15298361-c7d0-4a2e-bf9c-e80341b422ee.jpg",
          },
          // {
          //   id: 4,
          //   title: "先锋荟App",
          //   qrCode:
          //     "https://www.jchc.cn/storage/sjk/f0d2b763-65c4-4373-a6eb-07f27d930af9.png",
          // },
        ],
        b = Bt();
      La(() => {
        bv().then((W) => {
          const L = [];
          (Object.assign(L, W),
            (b.value = L.filter((z) => z.name !== "所属单位")));
        });
      });
      const F = Bt(0);
      function Y(W) {
        F.value = W;
      }
      function U() {
        F.value = 0;
      }
      const B = Bt(1);
      return (W, L) => {
        var z;
        return (
          k(),
          H("div", l0, [
            y(
              "div",
              {
                style: qe({ backgroundImage: `url(${S(O)})` }),
                class: "w-full h-full transition-all duration-1000",
              },
              null,
              4,
            ),
            f0,
            y("div", c0, [
              y(
                "a",
                {
                  class: "mb-[100%]",
                  href: "/",
                  onClick:
                    L[0] ||
                    (L[0] = br((...N) => S(x) && S(x)(...N), ["prevent"])),
                },
                g0,
              ),
              y("ul", v0, [
                (k(),
                H(
                  Ft,
                  null,
                  Nt(I, (N, K) =>
                    y(
                      "li",
                      {
                        key: K,
                        class:
                          "li-box relative cursor-pointer mb-28px w-89px flex justify-center items-center",
                        onMouseenter: (et) => Y(N.id),
                        onMouseleave: L[1] || (L[1] = (et) => U()),
                      },
                      [
                        y(
                          "a",
                          {
                            class: "nav-item",
                            href: N.url,
                            target: N.url.includes("javascript")
                              ? "_self"
                              : "_blank",
                          },
                          [y("img", { src: N.sideIcon, alt: "" }, null, 8, x0)],
                          8,
                          m0,
                        ),
                        y("div", w0, It(N.title), 1),
                      ],
                      40,
                      _0,
                    ),
                  ),
                  64,
                )),
              ]),
              Pe(
                y(
                  "div",
                  {
                    class:
                      "w-340px h-330px grid grid-rows-[270px,60px] absolute left-89px top-150px animate-fade-in-left",
                    onMouseenter: L[2] || (L[2] = (N) => Y(1)),
                    onMouseleave: L[3] || (L[3] = (N) => U()),
                  },
                  [
                    y("div", A0, [
                      (k(),
                      H(
                        Ft,
                        null,
                        Nt(C, (N, K) =>
                          y(
                            "div",
                            {
                              key: K,
                              class:
                                "flex flex-col items-center justify-between",
                            },
                            [
                              y(
                                "img",
                                {
                                  src: N.qrCode,
                                  alt: "",
                                  class: "w-58px h-58px mb-10px",
                                },
                                null,
                                8,
                                y0,
                              ),
                              y("span", b0, It(N.title), 1),
                            ],
                          ),
                        ),
                        64,
                      )),
                    ]),
                    E0,
                  ],
                  544,
                ),
                [[Ne, F.value === 1]],
              ),
              (z = b.value) != null && z.length
                ? Pe(
                    (k(),
                    H(
                      "div",
                      {
                        key: 0,
                        class:
                          "w-screen h-320px absolute ml-66px bottom-0px z-999 flex flex-col justify-between",
                        onMouseenter: L[4] || (L[4] = (N) => Y(3)),
                        onMouseleave: L[5] || (L[5] = (N) => U()),
                      },
                      [
                        (k(!0),
                        H(
                          Ft,
                          null,
                          Nt(
                            b.value,
                            (N) => (
                              k(),
                              H(
                                "div",
                                {
                                  key: N.id,
                                  style: qe({
                                    height: `${100 / b.value.length}%`,
                                  }),
                                  class: "w-270px bg-[#2288E6]",
                                },
                                [
                                  y(
                                    "div",
                                    {
                                      class:
                                        "text-15px font-normal text-[#fff] cursor-default h-full flex justify-center items-center",
                                      onMouseenter: () => {
                                        B.value = N.id;
                                      },
                                    },
                                    It(N.name),
                                    41,
                                    T0,
                                  ),
                                  N.id === B.value
                                    ? (k(),
                                      H("div", I0, [
                                        (k(!0),
                                        H(
                                          Ft,
                                          null,
                                          Nt(
                                            N.linkInfoList,
                                            (K) => (
                                              k(),
                                              H(
                                                "div",
                                                {
                                                  key: K.id,
                                                  class:
                                                    "truncate whitespace-nowrap",
                                                },
                                                [
                                                  y(
                                                    "a",
                                                    {
                                                      href: K.linkUrl,
                                                      class:
                                                        "inline-block text-16px bg-red text-[#000] font-normal leading-34px",
                                                    },
                                                    It(K.name),
                                                    9,
                                                    C0,
                                                  ),
                                                ],
                                              )
                                            ),
                                          ),
                                          128,
                                        )),
                                      ]))
                                    : cn("", !0),
                                ],
                                4,
                              )
                            ),
                          ),
                          128,
                        )),
                      ],
                      544,
                    )),
                    [[Ne, F.value === 3]],
                  )
                : cn("", !0),
            ]),
          ])
        );
      };
    },
  });
var F0 = Be(S0, [["__scopeId", "data-v-3316e0ac"]]);
const O0 = { class: "h-screen relative" },
  R0 = ["href"],
  L0 = { class: "absolute right-20 bottom-[195px] flex py-10px" },
  D0 = ["onClick"],
  P0 = {
    class: "absolute left-6 top-1/2 text-xs text-white w-3 select-none more",
  },
  N0 = Ht({
    props: { page: null },
    setup(g) {
      const x = ul(),
        a = jo(x, "homeCarouselList");
      Fn(() => {
        x.setHomeCarouselList();
      });
      const { isHidden: O } = On(),
        I = Bt(0);
      function C(b) {
        ((I.value = b), x.setCurrentHomeCarouselUrl(b));
      }
      return (b, F) => {
        const Y = sl;
        return (
          k(),
          H("div", O0, [
            Pe(
              gt(
                Y,
                {
                  autoplay: "",
                  draggable: "",
                  "transition-style": { transitionDuration: "800ms" },
                  onUpdateCurrentIndex: C,
                },
                {
                  dots: Qt(({ total: U, currentIndex: B, to: W }) => [
                    y("ul", L0, [
                      (k(!0),
                      H(
                        Ft,
                        null,
                        Nt(
                          U,
                          (L) => (
                            k(),
                            H(
                              "li",
                              {
                                key: L,
                                class:
                                  "flex justify-center items-center py-20px",
                                onClick: (z) => W(L - 1),
                              },
                              [
                                y(
                                  "div",
                                  {
                                    class: ht([
                                      "w-[67px] h-[3px] text-center opacity-70 bg-white mx-4 cursor-pointer",
                                      { ["bg-[#3B8CF3]"]: B === L - 1 },
                                    ]),
                                  },
                                  null,
                                  2,
                                ),
                              ],
                              8,
                              D0,
                            )
                          ),
                        ),
                        128,
                      )),
                    ]),
                  ]),
                  default: Qt(() => [
                    (k(!0),
                    H(
                      Ft,
                      null,
                      Nt(
                        S(a),
                        (U, B) => (
                          k(),
                          H("div", { key: B }, [
                            y(
                              "a",
                              { href: U.bannerUrl, target: "_blank" },
                              [
                                y(
                                  "div",
                                  {
                                    class:
                                      "bg-my-cover w-screen h-screen bg-top",
                                    style: qe({
                                      backgroundImage: `url(${U.picturePath})`,
                                    }),
                                  },
                                  null,
                                  4,
                                ),
                              ],
                              8,
                              R0,
                            ),
                          ])
                        ),
                      ),
                      128,
                    )),
                  ]),
                  _: 1,
                },
                512,
              ),
              [[Ne, !S(O)(g.page)]],
            ),
            Pe(y("div", P0, " 下滑查看更多 ", 512), [
              [Ne, !S(O)(g.page)],
            ]),
          ])
        );
      };
    },
  });
var B0 = Be(N0, [["__scopeId", "data-v-64df3a9d"]]);
const Da = (g) => (Er("data-v-5ea8d805"), (g = g()), Tr(), g),
  M0 = {
    class:
      "flex h-130px items-center pl-50px pr-75px select-none justify-between",
  },
  U0 = Da(() => y("img", { src: Iv, class: "w-181pt h-30pt" }, null, -1)),
  W0 = [U0],
  $0 = { class: "flex text-16px" },
  k0 = ["onClick"],
  H0 = Da(() =>
    y(
      "a",
      {
        target: "_blank",
        href: "http://sjk.jchc.cn",
        class:
          "font-medium text-15px text-[#333333] leading-21px ml-25px mr-[15px] cursor-pointer",
      },
      "OA登录",
      -1,
    ),
  ),
  z0 = {
    href: "https://english.jchc.cn",
    class:
      "text-[14px] leading-[20px] font-medium text-[#115FAD] flex items-center cursor-pointer",
  },
  Y0 = Da(() => y("span", null, "EN", -1)),
  q0 = Ht({
    setup(g) {
      const x = Bt(!1),
        { isIndex: a } = On();
      Fn(() => {
        x.value = !0;
      });
      const { firstMenusToShow: O, jump: I } = tl(),
        { inputValue: C, handleSearch: b } = Ev();
      return (F, Y) => {
        const U = Tv,
          B = el("icon-language");
        return (
          k(),
          H(
            "div",
            {
              class: ht([
                "top-nav relative bg-white duration-1000 forwards-1000",
                {
                  "animate-slide-in-right": S(a),
                  "top-left-rounded": S(a),
                  "transition-all": !S(a),
                },
              ]),
            },
            [
              y("div", M0, [
                y(
                  "div",
                  {
                    class: ht([
                      "flex items-center",
                      {
                        "animate-delay-700 both-1000 animate-fade-in-down":
                          S(a),
                      },
                    ]),
                  },
                  W0,
                  2,
                ),
                y(
                  "div",
                  {
                    class: ht([
                      "flex items-center",
                      {
                        "both-1000 animate-delay-700 animate-fade-in-right":
                          S(a),
                      },
                    ]),
                  },
                  [
                    y("ul", $0, [
                      (k(!0),
                      H(
                        Ft,
                        null,
                        Nt(
                          S(O),
                          (W) => (
                            k(),
                            H(
                              "li",
                              { key: W.id, class: "mr-8 cursor-pointer" },
                              [
                                y(
                                  "a",
                                  { onClick: br(() => S(I)(W), ["prevent"]) },
                                  It(W.name),
                                  9,
                                  k0,
                                ),
                              ],
                            )
                          ),
                        ),
                        128,
                      )),
                    ]),
                    gt(
                      U,
                      {
                        modelValue: S(C),
                        "onUpdate:modelValue":
                          Y[0] ||
                          (Y[0] = (W) => (xv(C) ? (C.value = W) : null)),
                        onSearch: S(b),
                      },
                      null,
                      8,
                      ["modelValue", "onSearch"],
                    ),
                    H0,
                    y("a", z0, [gt(B, { class: "mr-[6px]" }), Y0]),
                  ],
                  2,
                ),
              ]),
            ],
            2,
          )
        );
      };
    },
  });
var G0 = Be(q0, [["__scopeId", "data-v-5ea8d805"]]);
function X0() {
  const g = ui();
  return {
    jump2Detail: (a, O, I, C, b = !0) => {
      const F = {
        first: O.id,
        second: I.id,
        articleId: a,
        detailType: "article",
        type: I.type,
      };
      if ((I.type === 88 && ((F.third = C.id), (F.type = C.type)), b))
        return `${"/".replaceAll(/\//g, "")}/content?${new URLSearchParams(F)}`;
      g.push({ name: "content", query: F });
    },
  };
}
const ol = (g) => (Er("data-v-34291fb1"), (g = g()), Tr(), g),
  V0 = { class: "article-ctn cursor-default" },
  K0 = { class: "h-[33px] flex justify-between items-center" },
  Q0 = { class: "text-[#21344C] text-[24px] font-semibold" },
  Z0 = ["href"],
  J0 = {
    key: 0,
    class: "grid grid-cols-[311px,1fr,72px] items-center justify-between",
  },
  j0 = ["href"],
  t_ = ol(() => y("div", null, null, -1)),
  e_ = {
    class:
      "text-[#888888] font-ArialMT text-14px leading-44px whitespace-nowrap",
  },
  n_ = ["href"],
  r_ = ol(() => y("div", null, null, -1)),
  i_ = {
    class:
      "text-[#888888] font-ArialMT text-14px leading-44px whitespace-nowrap",
  },
  s_ = Ht({
    props: {
      title: null,
      articleList: null,
      firstMenu: null,
      secondMenu: null,
    },
    setup(g) {
      const x = g,
        a = Oa("primaryColor"),
        { jump2Detail: O } = X0(),
        I = _t(() => {
          const C = {
            first: x.firstMenu.id,
            second: x.secondMenu.id,
            type: x.secondMenu.type,
          };
          return `${"/".replaceAll(/\//g, "")}/content?${new URLSearchParams(C)}`;
        });
      return (C, b) => {
        const F = el("icon-more-blue"),
          Y = n0;
        return (
          k(),
          H("div", V0, [
            y("div", K0, [
              y("span", Q0, It(g.title), 1),
              y("a", { href: S(I), target: "_blank" }, [gt(F)], 8, Z0),
            ]),
            y(
              "div",
              {
                style: qe({ backgroundColor: S(a) }),
                class: "progress mt-19px w-0 h-3px",
              },
              null,
              4,
            ),
            gt(Y, { class: "!mt-0 !mb-14px" }),
            y("ul", null, [
              (k(!0),
              H(
                Ft,
                null,
                Nt(
                  g.articleList,
                  (U) => (
                    k(),
                    H("li", { key: U.id, class: "h-10" }, [
                      U.type === 1
                        ? (k(),
                          H("div", J0, [
                            y(
                              "a",
                              {
                                class: ht([
                                  "text-[16px] truncate cursor-pointer font-normal text-[#000000] leading-44px",
                                  { [`hover:text-[${S(a)}]`]: !0 },
                                ]),
                                href: S(O)(
                                  U.id,
                                  g.firstMenu,
                                  g.secondMenu,
                                  null,
                                ),
                                target: "_blank",
                              },
                              It(U.title),
                              11,
                              j0,
                            ),
                            t_,
                            y("p", e_, It(U.addTime.slice(0, 10)), 1),
                          ]))
                        : U.type === 3
                          ? (k(),
                            H(
                              "a",
                              {
                                key: 1,
                                href: JSON.parse(U.content).link,
                                target: "_blank",
                                class:
                                  "grid grid-cols-[311px,1fr,72px] items-center justify-between",
                              },
                              [
                                y(
                                  "a",
                                  {
                                    class: ht([
                                      "text-[16px] truncate cursor-pointer font-normal text-[#000000] leading-44px",
                                      { [`hover:text-[${S(a)}]`]: !0 },
                                    ]),
                                    target: "_blank",
                                  },
                                  It(U.title),
                                  3,
                                ),
                                r_,
                                y("p", i_, It(U.addTime.slice(0, 10)), 1),
                              ],
                              8,
                              n_,
                            ))
                          : cn("", !0),
                    ])
                  ),
                ),
                128,
              )),
            ]),
          ])
        );
      };
    },
  });
var Qo = Be(s_, [["__scopeId", "data-v-34291fb1"]]);
function a_() {
  const g = ui(),
    x = oi(),
    a = _t(() => x.firstMenuByName("新闻中心")),
    O = _t(() => {
      var C, b;
      return (b = (C = a.value) == null ? void 0 : C.menuInfoList) == null
        ? void 0
        : b.find((F) => ["公司要闻", "集团要闻"].includes(F.name));
    });
  function I(C) {
    var b, F;
    g.push({
      name: "content",
      query: {
        first: (b = a.value) == null ? void 0 : b.id,
        second: (F = O.value) == null ? void 0 : F.id,
        detailType: "article",
        articleId: C,
      },
    });
  }
  return { firstMenu: a, secondMenu: O, jumpTopNews: I };
}
function Pa() {
  const g = Bt();
  return {
    imgsCtn: g,
    loadImgs: () => {
      nl(() => {
        g.value.querySelectorAll(".lazy-load").forEach((a) => {
          const { bg: O, src: I } = a.dataset;
          O ? (a.style.backgroundImage = `url(${O})`) : I && (a.src = I);
        });
      });
    },
  };
}
const u_ = { class: "ctn h-screen flex flex-col" },
  o_ = {
    key: 0,
    class: "w-1200px grid grid-rows-2 grid-cols-2 gap-x-[96px] gap-y-[36px]",
  },
  l_ = ["data-bg"],
  f_ = {
    class:
      "absolute w-full absolute bottom-0 h-38px bg-[#000000] opacity-58 px-13px py-10px",
  },
  c_ = { class: "text-[#FFFFFF] leading-20px text-16px font-normal truncate" },
  h_ = ["href", "data-bg"],
  d_ = {
    class:
      "absolute w-full absolute bottom-0 h-38px bg-[#000000] opacity-58 px-13px py-10px",
  },
  p_ = { class: "text-[#FFFFFF] leading-20px text-16px font-normal truncate" },
  g_ = Ht({
    props: { page: null },
    setup(g) {
      const x = g,
        { currentPage: a, isHidden: O } = On(),
        I = _t(() => (a == null ? void 0 : a.value) === x.page),
        C = Bt([]),
        b = oi(),
        F = _t(() => b.firstMenuByName("新闻中心")),
        Y = [
          "集团要闻",
          "国资网讯",
          "媒体聚焦",
        ],
        U = _t(() => {
          var N, K;
          return (K = (N = F.value) == null ? void 0 : N.menuInfoList) == null
            ? void 0
            : K.filter((et) => Y.includes(et.name));
        }),
        J = {
          集团要闻: "公司要闻",
          国资网讯: "国资网讯",
          媒体聚焦: "媒体聚焦",
        },
        B = wv(new Array(3).fill([])),
        { jumpTopNews: W } = a_();
      (fn(
        U,
        (N) => {
          N == null ||
            N.forEach((K, et) => {
              rl(K.id, 1, 6).then((at) => {
                B[et] = at.articleList;
              });
            });
        },
        { immediate: !0 },
      ),
        Fn(() => {
          yr(3).then((N) => {
            C.value = N;
          });
        }));
      const { imgsCtn: L, loadImgs: z } = Pa();
      return (
        fn(I, (N) => {
          if (N) {
            if (B[0] && B[0][0]) return z();
            fn(B, z);
          }
        }),
        (N, K) => {
          var et, at, ut, At, Gt, ft, Ct, Lt, Ie, Zt, Ge, Ce, Xe, Rn;
          return (
            k(),
            H("div", u_, [
              gt(
                G0,
                {
                  class: ht([
                    "h-130px flex-shrink-0",
                    S(I) ? "top-0" : "-top-130px",
                  ]),
                },
                null,
                8,
                ["class"],
              ),
              Pe(
                y(
                  "div",
                  {
                    ref_key: "imgsCtn",
                    ref: L,
                    class:
                      "flex-1 flex justify-center items-center overflow-hidden",
                  },
                  [
                    S(F) && S(U) && S(U).length
                      ? (k(),
                        H("div", o_, [
                          ((at = (et = S(B)[0]) == null ? void 0 : et[0]) ==
                          null
                            ? void 0
                            : at.type) === 1
                            ? (k(),
                              H(
                                "div",
                                {
                                  key: 0,
                                  class: ht([
                                    "lazy-load bg-my-cover h-360px relative cursor-pointer",
                                    { "both-1000 animate-fade-in-right": S(I) },
                                  ]),
                                  "data-bg":
                                    (At =
                                      (ut = S(B)[0]) == null
                                        ? void 0
                                        : ut[0]) == null || !At.photoPath
                                      ? "/assets/news-bg.dc4d7627.webp"
                                      : At.photoPath,
                                  onClick:
                                    K[0] ||
                                    (K[0] = br(() => {
                                      var Jt, Ve;
                                      return S(W)(
                                        (Ve =
                                          (Jt = S(B)[0]) == null
                                            ? void 0
                                            : Jt[0]) == null
                                          ? void 0
                                          : Ve.id,
                                      );
                                    }, ["prevent"])),
                                },
                                [
                                  y("div", f_, [
                                    y(
                                      "p",
                                      c_,
                                      It(
                                        (ft =
                                          (Gt = S(B)[0]) == null
                                            ? void 0
                                            : Gt[0]) == null
                                          ? void 0
                                          : ft.title,
                                      ),
                                      1,
                                    ),
                                  ]),
                                ],
                                10,
                                l_,
                              ))
                            : ((Lt = (Ct = S(B)[0]) == null ? void 0 : Ct[0]) ==
                                null
                                  ? void 0
                                  : Lt.type) === 3
                              ? (k(),
                                H(
                                  "a",
                                  {
                                    key: 1,
                                    href: JSON.parse(
                                      (Zt =
                                        (Ie = S(B)[0]) == null
                                          ? void 0
                                          : Ie[0]) == null
                                        ? void 0
                                        : Zt.content,
                                    ).link,
                                    target: "_blank",
                                    class: ht([
                                      "lazy-load bg-my-cover h-360px relative cursor-pointer",
                                      {
                                        "both-1000 animate-fade-in-right": S(I),
                                      },
                                    ]),
                                    "data-bg":
                                      (Ce =
                                        (Ge = S(B)[0]) == null
                                          ? void 0
                                          : Ge[0]) == null || !Ce.photoPath
                                        ? "/assets/news-bg.dc4d7627.webp"
                                        : Ce.photoPath,
                                  },
                                  [
                                    y("div", d_, [
                                      y(
                                        "p",
                                        p_,
                                        It(
                                          (Rn =
                                            (Xe = S(B)[0]) == null
                                              ? void 0
                                              : Xe[0]) == null
                                            ? void 0
                                            : Rn.title,
                                        ),
                                        1,
                                      ),
                                    ]),
                                  ],
                                  10,
                                  h_,
                                ))
                              : cn("", !0),
                          gt(
                            Qo,
                            {
                              "article-list": S(B)[0],
                              title: S(J)[S(U)[0].name] || S(U)[0].name,
                              class: ht([
                                "animate-delay-300",
                                { "both-1000 animate-fade-in-right": S(I) },
                              ]),
                              "first-menu": S(F),
                              "second-menu": S(U)[0],
                            },
                            null,
                            8,
                            [
                              "article-list",
                              "title",
                              "class",
                              "first-menu",
                              "second-menu",
                            ],
                          ),
                          (k(!0),
                          H(
                            Ft,
                            null,
                            Nt(
                              S(U).slice(1),
                              (Jt, Ve) => (
                                k(),
                                il(
                                  Qo,
                                  {
                                    key: Jt.id,
                                    "article-list": S(B).slice(1)[Ve],
                                    title: S(J)[Jt.name] || Jt.name,
                                    style: qe({
                                      animationDelay: `${150 * Ve}ms`,
                                    }),
                                    class: ht({
                                      "both-1000 animate-fade-in-left": S(I),
                                    }),
                                    "first-menu": S(F),
                                    "second-menu": Jt,
                                  },
                                  null,
                                  8,
                                  [
                                    "article-list",
                                    "title",
                                    "style",
                                    "class",
                                    "first-menu",
                                    "second-menu",
                                  ],
                                )
                              ),
                            ),
                            128,
                          )),
                        ]))
                      : cn("", !0),
                  ],
                  512,
                ),
                [[Ne, !S(O)(g.page)]],
              ),
            ])
          );
        }
      );
    },
  });
var v_ = Be(g_, [["__scopeId", "data-v-0ea57ad8"]]);
const __ = { class: "text-[#888] text-[19px] leading-22px" },
  m_ = {
    class: "text-[30px] text-[#333] leading-[42px] font-semibold mt-4 mb-21px",
  },
  ll = Ht({
    props: {
      title: null,
      titleEn: null,
      align: null,
      isCurrent: { type: Boolean },
      animateName: null,
      animateDelay: { default: 200 },
    },
    setup(g) {
      const x = g,
        a = `both-1000 ${x.animateName}`,
        O = (() =>
          x.align === "center"
            ? "justify-center"
            : x.align === "left"
              ? "justify-start"
              : "justify-end")();
      return (I, C) => (
        k(),
        H(
          "div",
          {
            style: qe({
              textAlign: g.align,
              animationDelay: `${g.animateDelay}ms`,
            }),
            class: ht([
              "flex flex-col items-center cursor-default",
              { [a]: g.isCurrent },
            ]),
          },
          [
            y("span", __, It(g.titleEn), 1),
            y("span", m_, It(g.title), 1),
            y(
              "div",
              { class: ht(["w-[50px] h-3px bg-[#3A78F3]", S(O)]) },
              null,
              2,
            ),
          ],
          6,
        )
      );
    },
  });
var x_ = "/assets/content-bg.e81366f7.webp";
const w_ = (g) => (Er("data-v-d83afada"), (g = g()), Tr(), g),
  A_ = { class: "flex justify-center items-center" },
  y_ = {
    class:
      "flex justify-center items-center text-16px text-[#000000] font-normal leading-50px text-center",
  },
  b_ = ["data-bg"],
  E_ = { class: "mb-64px" },
  T_ = ["data-src"],
  I_ = {
    style: { "letter-spacing": "-2px" },
    class:
      "item-count flex items-baseline font-RajdhaniMedium text-[80px] text-[#FFFFFF] font-medium leading-128px",
  },
  C_ = { class: "text-30px ml-7px font-normal leading-38px text-[#FFFFFF]" },
  S_ = {
    class: "item-title font-normal text-[#FFFFFF] text-[18px] leading-25px",
  },
  F_ = w_(() => y("span", null, null, -1)),
  O_ = Ht({
    props: { page: null },
    setup(g) {
      const x = g,
        { firstMenusToShow: a, jump: O } = tl(),
        I = Bt(!1),
        { currentPage: C, isHidden: b } = On(),
        F = _t(() => (C == null ? void 0 : C.value) === x.page),
        { imgsCtn: Y, loadImgs: U } = Pa(),
        B = _t(() => {
          var et, at, ut;
          const z =
              (ut =
                (at = (et = a.value) == null ? void 0 : et[0]) == null
                  ? void 0
                  : at.remark) != null
                ? ut
                : "",
            N = Array.from(z),
            K = N.slice(0, 95).join("");
          return N.length > 95 ? `${K}...` : K;
        });
      fn(F, (z) => {
        z
          ? (U(),
            setTimeout(() => {
              I.value = !0;
            }, 500))
          : (I.value = !1);
      });
      const W = { title: "关于我们", enTitle: "ABOUT US" },
        L = [
          {
            showIcon:
              "https://www.jchc.cn/storage/sjk/b09d85a5-4970-4e4a-bd60-73561700ecae.png",
            title: "总资产",
            count: 2373.31,
            unit: "亿",
          },
          {
            showIcon:
              "https://www.jchc.cn/storage/sjk/28e35c6e-e280-4718-a3e4-800ea4ac6dca.png",
            title: "运营全区高速公路",
            count: 8125,
            unit: "公里",
          },
          {
            showIcon:
              "https://www.jchc.cn/storage/sjk/79c3df0e-d85a-48dd-8613-e0edf5970e15.png",
            title: "下属企业",
            count: 142,
            unit: "",
          },
          {
            showIcon:
              "https://www.jchc.cn/storage/sjk/6cb187ef-184f-44e3-bf67-b33073c8914d.png",
            title: "收费站",
            count: 229,
            unit: "",
          },
          {
            showIcon:
              "https://www.jchc.cn/storage/sjk/4156cde5-8e39-433b-9918-e0cf2e5534cf.png",
            title: "员工人数",
            count: 2.3,
            unit: "万+",
          },
        ];
      return (z, N) => {
        const K = Qv;
        return (
          k(),
          H(
            "div",
            {
              ref_key: "imgsCtn",
              ref: Y,
              class:
                "ctn h-screen bg-my-cover grid grid-rows-[26%,11%,53%,10%]",
            },
            [
              Pe(
                y(
                  "div",
                  A_,
                  [
                    gt(
                      ll,
                      {
                        class: "mt-[3%]",
                        "title-en": W.enTitle,
                        title: W.title,
                        "is-current": S(F),
                        "animate-name": "animate-fade-in-down",
                        align: "center",
                      },
                      null,
                      8,
                      ["title-en", "title", "is-current"],
                    ),
                  ],
                  512,
                ),
                [[Ne, !S(b)(g.page)]],
              ),
              Pe(
                y(
                  "div",
                  null,
                  [
                    y("span", y_, [
                      Jo(It(S(B)) + " ", 1),
                      y(
                        "a",
                        {
                          class:
                            "font-normal text-[#8B8B8B] ml-10px cursor-pointer",
                          onClick:
                            N[0] ||
                            (N[0] = br(() => S(O)(S(a)[0]), ["prevent"])),
                        },
                        " 更多>> ",
                      ),
                    ]),
                  ],
                  512,
                ),
                [[Ne, !S(b)(g.page)]],
              ),
              Pe(
                y(
                  "div",
                  {
                    "data-bg": S(x_),
                    class: ht([
                      "lazy-load bg-my-cover w-[84%] h-full mx-auto grid grid-cols-5",
                      { "both-1000 animate-fade-in": S(F) },
                    ]),
                  },
                  [
                    (k(),
                    H(
                      Ft,
                      null,
                      Nt(L, (et, at) =>
                        y(
                          "div",
                          {
                            key: at,
                            class:
                              "flex flex-col justify-center items-center team-item about-border",
                          },
                          [
                            y("div", E_, [
                              y(
                                "img",
                                {
                                  "data-src": et.showIcon,
                                  alt: "",
                                  class: "lazy-load item-img w-90px h-90px",
                                },
                                null,
                                8,
                                T_,
                              ),
                            ]),
                            y("div", I_, [
                              S(F)
                                ? (k(),
                                  il(
                                    K,
                                    {
                                      key: 0,
                                      duration: 2e3,
                                      from: 0,
                                      to: et.count,
                                      active: I.value,
                                      precision: et.count % 1 === 0 ? 0 : 1,
                                    },
                                    null,
                                    8,
                                    ["to", "active", "precision"],
                                  ))
                                : cn("", !0),
                              y("span", C_, It(et.unit), 1),
                            ]),
                            y("div", S_, It(et.title), 1),
                          ],
                        ),
                      ),
                      64,
                    )),
                  ],
                  10,
                  b_,
                ),
                [[Ne, !S(b)(g.page)]],
              ),
              F_,
            ],
            512,
          )
        );
      };
    },
  });
var R_ = Be(O_, [["__scopeId", "data-v-d83afada"]]);
const L_ = { class: "h-screen grid grid-cols-3 bg-black" },
  D_ = ["onClick"],
  P_ = { class: "flex flex-col justify-center items-center absolute" },
  N_ = ["src"],
  B_ = {
    class: "item-title text-[#FFFFFF] font-semibold text-46px leading-69px",
  },
  M_ = Ht({
    props: { page: null },
    setup(g) {
      const x = g,
        { currentPage: a, isHidden: O } = On(),
        I = _t(() => (a == null ? void 0 : a.value) === x.page),
        C = oi(),
        b = _t(() => C.firstMenuByName("业务领域")),
        F = _t(() => {
          var W;
          return (W = b.value) == null ? void 0 : W.menuInfoList;
        }),
        Y = {
          投资建设: {
            bgImg:
              "https://www.jchc.cn/storage/sjk/6367dee9-4af6-4c3f-8aab-bc4def1f5184.jpg",
            showIcon:
              "https://www.jchc.cn/storage/sjk/3207f02a-6b36-4ac5-9e02-7d9d5d74007a.png",
          },
          运营管理: {
            bgImg:
              "https://www.jchc.cn/storage/sjk/8cc7370d-44c9-40c4-b2de-b817e577bc6a.jpg",
            showIcon:
              "https://www.jchc.cn/storage/sjk/5db8b3b4-c1e9-4066-88c6-0e3b24d04bbf.png",
          },
          产业科技: {
            bgImg:
              "https://www.jchc.cn/storage/sjk/d8b21765-daa2-4785-b297-4cac7d07b3bf.jpg",
            showIcon:
              "https://www.jchc.cn/storage/sjk/6b10a204-8cc3-4dbf-9754-16e1031a4b1e.png",
          },
        },
        U = ui();
      function B(W) {
        const L = C.firstSelectableMenuPath(b.value.id, W.id);
        U.push({ name: "content", query: L });
      }
      return (W, L) => (
        k(),
        H("div", L_, [
          (k(!0),
          H(
            Ft,
            null,
            Nt(S(F), (z, N) =>
              Pe(
                (k(),
                H(
                  "div",
                  {
                    key: N,
                    class: ht([
                      "team-item flex justify-center items-center cursor-pointer select-none",
                      { ["animate-fade-in-up both-1000"]: S(I) },
                    ]),
                    style: qe({ animationDelay: `${N * 200}ms` }),
                    onClick: () => B(z),
                  },
                  [
                    y(
                      "div",
                      {
                        style: qe({
                          backgroundImage: `url(${S(Y)[z.name].bgImg})`,
                        }),
                        class: "bg lazy-load bg-my-cover w-full h-full",
                      },
                      null,
                      4,
                    ),
                    y("div", P_, [
                      y(
                        "img",
                        {
                          src: S(Y)[z.name].showIcon,
                          alt: "新疆交通投资（集团）有限公司官网首页菜单导航图",
                          class: "lazy-load item-img w-110px h-110px mb-74px",
                        },
                        null,
                        8,
                        N_,
                      ),
                      y("span", B_, It(z.name), 1),
                    ]),
                  ],
                  14,
                  D_,
                )),
                [[Ne, !S(O)(g.page)]],
              ),
            ),
            128,
          )),
        ])
      );
    },
  });
var U_ = Be(M_, [["__scopeId", "data-v-638bed61"]]);
function W_() {
  const g = Bt(),
    x = Bt(),
    a = Bt();
  return (
    Fn(() => {
      (yr(7).then((I) => {
        g.value = I;
      }),
        yr(8).then((I) => {
          x.value = I;
        }),
        yr(9).then((I) => {
          a.value = I;
        }));
    }),
    {
      finalData: _t(() => {
        if (!g.value || !x.value || !a.value) return null;
        const I = [],
          C = [],
          b = [];
        for (let F = 0; F < 10; ++F) I.push(g.value[F % g.value.length]);
        for (let F = 0; F < 10; ++F) C.push(x.value[F % x.value.length]);
        for (let F = 0; F < 10; ++F) b.push(a.value[F % a.value.length]);
        return [I, C, b];
      }),
    }
  );
}
var $_ = "/assets/sj-top.ae197a79.jpg",
  k_ =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAArJJREFUWEftlstPE3EQx7+z3dIWC/aB1hghHGiD5dFEDgShBFooPisJKR64EBECIbEejJpIwnrhQFC8mHgDiQcfidE/wHDRo564mhgNEEhtCxQRDDsGzCZS+9gtGC7d687M57Oz85tdwiFfdMh85AVy70DLrGgpjw4x8RAxJuLlc9OQJFnrK81JwNb7ul2GPAlw1V/Aj8RCOPa064MWCU0CxX1vKwR56wEYwTQQJuAFkf52dKrzmxoRVQK2nmfFrDeOyMANAhtUFP4BYDy+zuN41b2RKT6zgCQJli/VvQx5jEAOFeDkkK8E3IlNh56ny00rYL32sollegSgLgfw3hTGexaE8MpU16fkWmkFqoPSwoK10iCTzrZfgSKTITLoq43cC5WfVi3g9fXLMul+LlkqohFzmQ1EJq0igkCJq/Wu1VB9ZYleJ6x6a8RjmgSAP5vyl2iMzVvdm2vGEgdI1fbcPus8uTzo9xRaCw1Hd6FEkZwFFOuEwbY8b6/Clmg6nq4bZfai5XDHGXKdsO592oMQ2IEykRw1ly4tWlwmJsGiiBQWiNEBn2fL7y7dOS3/ztZBCShAWRDXFyyulXjRqSOddc5ET0Ol3aDXGdPOyUELKKC2S1cSvrYOc9YB/V8CgYvBjZb2c9lPSF4g3wGtHWj2Dwwzy/cBsmeacFVDSLQIGXe9HnFG9SreCWxo6LOJJkECMARATCWSSYCBTRIwSXFxrKmJ1lLlq/ohaWztr9IRPWRwILlIBoE3Am3faqwxfs79hyQps7m1P8hEEwA7lVspBOaYcbPZo3+XdTml3NlZstzuUIHdYQ0z8QgBxYoAA98JPLpYo3/STbStBr77kVQbmBzn9193bILGAucvd/kCF2YYulFvLcW01stZQAFJj2fN0nBrQitYid+3QK7gvIDSgd/hlechYPKvmwAAAABJRU5ErkJggg==",
  H_ =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAA5tJREFUWEftl11MU3cYxp/3f05PQSwWCwbRJS4BdUrVRGKisaVKtmRLuJl4a9ABxgtXiB9Eo6ZEjdOIoCZmIYzgtriNbXrlLkhgUHQuLpIxJdOZ4Bd+oVi0SIttz7v0AmjZaXuKF2SJ5/Lked/nl/f/nPefQ5jmh6bZH+8A/r8T6O1lxaOqnzOr5SA62vaz1OxykZpspqY0ga6eYDEE14KRF2F4jYXstOfT5WQgkgJwd48uEQapjpk/imHCAH2vklRdaKUHekB0AXT9xRmCgi6VaRvABh2NR0A4JpnlY2veI188fVyAFmZpbq+6Fcw1YM7UYTxJQveJsHutVf4hVm1MAHdPoEgQ6hiwJm88qYJxiSE77cupe3IvTYCunsBxEHa8tXF0AxXEVTarcirytSbAL7fZaPIFqwDsBWB6exAaYGCfzSp9RRT9qcbNwNVezvaHAkcE0SZmiGRBCHhDhNMjo/LBDwvopVZ9XADTprMWSaTVLMw2by1z5Msf5Fh0M/zR9wRN7hu+/hfDx4eUlC/QUDyiH8Dxq2xe8HwbABeA2WOFhYvno9S2FJmm1JggDwa9aOy8ju67AxMaRj+RqPY0bzinK4Tm0h/rAFRquRhlCSWrFuLTglwosjQuGfYH8N3vN3Hxzz6EVNYqDS+pqqHmkpMJQxgWZJT+VMzgWiBq3Y7XZplSscWej9V5OWi9fhff/vY3XvnexJrMtRALp/fshv+s6fibcGOLMitNOAWHapiE5txNKQq8fm1jYh5kEruHFtxohsuleVHFBbAVlS1jpvqgUNY9NefCkzYPoMTbm1iFxXsPc172sYTQeZJ4l7u18Y7uEDocFZkhwQcBlAMYP2ifko5HGYswYsyIGUKTbwBzPf/AGIwKvZ9AtSmy70hr6zevE2bAVlR+ACr2gaB58QzNyMYTcx4C8sSpGAPDyPHcwkz/YKyL8jUgKrvaGxoTAoQFqx0Viw2CTzDwsVZHlQSepb+PFzPnIevVHVi8/SBopJ/DK4zOBVmqvtL+5UNdn2GkyL6u7BMmcQLgRbq30ITwqqBQZWdb05VYtYkTBWDlygpDqpm3E2M/AHNCEMZjErTH3dbwNaA1lokOugDG5Dbb5ixSDIeY+bPIcEYA+RlcL6vK4Y6OM8MJQYGp/RescZSvkATqARSOmRBwQaXQzkttTX16jCPqkpFHa9eur9hIQBlBPepub2yfSqekjmAqBolq3gFM+wT+BeCKMzDUpjk8AAAAAElFTkSuQmCC",
  z_ =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAxFJREFUWEftlk9IFHEUx7+/8V+RuWMphQRtEWFJigVKh6IOghmhqLPkwZzV/mBQEFKEHdIiJKgugZSVO+rF3NWMMEPqkIRdLCRD8ZJmddjA3dFKanX2xajRro3Ob1nDi7/DHub33ud95s3vzSzDMi+2zPWxIhByB0T5kZVBO02gbADWuUc4zIBOaFTrbbKNhvJYQxKwlDgvgOEKA2KMihDwk4FdUpXCW7wS3AKi3XkDhAoeMDHUjDukSp5YLgHR3pYL0tp5gLMxjBj5j3gbbB1mOVwCFtk5yIBkM9i8/X5VkVLNckwFxDJXOjR6awSKZAAB0PQfg8UiInZ5H+S/X0zCVMAiu04wUJ0RpCBtEzQ/ob3/ywI1yK4qNiUsgXi55SKB1cyHiDEC7pZmgYhwsv45Jnx+ox5UmE2EeQfszuOMcG8+/eyBZGTtnj0Wnb2DqO0e+leAMVl1FDaE1QGxtC0Nfq0vELJt3WrcPJYFQRBmLmuahnONXRj2/gqqNc0o5bvDNhCWgJ4syk79IKX8AV3Pz8BOa1IQt//DZ1S29wZe61MVKT3sKdAB8WWth0mjJwCx/VvX43zePkNuTVs3ekY8+miQEIFsT73UtSQCOsQiO6/FCKi8U3IQifEWQ657zIvyppeY8qNaVaQqs+L6vukhDIRIV1+0lufszY+KijJk+3w+1Hb0PGy9nHWUp3hIAgmlj5OmNd/QxtjI2EOpVuzZnIBEMW6mzlfvOHo/juHZuxG4J6cnpiKjt/+4n+vmkeDugCi7GgEq5oECqFcVqYwnlksgzu7KFIh6AMzOnekiPxEyxhtsb8xCOQSIWWTXawZkmsGC9hleqQ7JeFwCAk0FRLm1GPA3hlR8LpgBRV5Fal4sd1GBRKkldmoN09+xwW8dfptRNdqzA3WnJhdKWVRAn30GcP2zWdhJqFKVguqQBSzFLVsQwQYYsIr/hg0jJwUWlexx5H0y2l2wA6LscgFUEGbxmXQGNHsVqSgkAZx5GmP95jY9pDyCI2s3EG7nBH8q/x5UHsT/i1mSOwxHb0XgNwQb9CHyxpaeAAAAAElFTkSuQmCC";
const fl = (g) => (Er("data-v-328fde1a"), (g = g()), Tr(), g),
  Y_ = {
    class:
      "h-screen grid grid-rows-[195px,2.63fr,1.18fr] relative overflow-hidden",
  },
  q_ = Av(
    '<div class="absolute top-56px left-270px flex flex-col" data-v-328fde1a><div class="flex items-center mb-14px" data-v-328fde1a><div class="w-[50px] h-3px bg-[#3A78F3] mr-13px" data-v-328fde1a></div><span class="text-19px text-[#888888] leading-22px" data-v-328fde1a>COMMUNICATIONS HOLDING STYLE</span></div><div data-v-328fde1a><span class="text-24px font-bold text-[#333333] leading-36px" data-v-328fde1a>视觉交控</span></div></div>',
    1,
  ),
  G_ = ["href"],
  X_ = ["src", "alt"],
  V_ = { class: "grid grid-cols-3 foot-nav" },
  K_ = { class: "flex justify-center items-center" },
  Q_ = ["src"],
  Z_ = fl(() =>
    y(
      "a",
      {
        target: "_blank",
        href: "http://sjk.jchc.cn",
        class:
          "font-medium text-20px text-[#1060AB] leading-30px cursor-pointer",
      },
      "OA登录",
      -1,
    ),
  ),
  J_ = { class: "flex justify-center items-center" },
  j_ = ["src"],
  t1 = fl(() =>
    y(
      "a",
      {
        target: "_blank",
        href: "https://zbcg.jchc.cn/portal",
        class:
          "font-medium text-20px text-[#1060AB] leading-30px cursor-pointer",
      },
      "采购平台",
      -1,
    ),
  ),
  e1 = { class: "flex justify-center items-center" },
  n1 = ["src"],
  r1 = ["href"],
  i1 = Ht({
    props: { page: null },
    setup(g) {
      const x = g,
        { finalData: a } = W_();
      function O() {
        return `${location.origin + "/"}talent/`;
      }
      fn(a, (F) => {
        F != null &&
          F.length &&
          nl(() => {
            $(() => {
              (imgScroll.rolling({
                name: "imgscroll-0",
                width: "294px",
                height: "170px",
                direction: "left",
                speed: 40,
                addcss: !0,
              }),
                imgScroll.rolling({
                  name: "imgscroll-1",
                  width: "294px",
                  height: "170px",
                  direction: "right",
                  speed: 40,
                  addcss: !0,
                }),
                imgScroll.rolling({
                  name: "imgscroll-2",
                  width: "294px",
                  height: "170px",
                  direction: "left",
                  speed: 40,
                  addcss: !0,
                }));
            });
          });
      });
      const { currentPage: I } = On(),
        C = _t(() => (I == null ? void 0 : I.value) === x.page),
        b = Bt(!1);
      return (
        fn(C, (F) => {
          F &&
            setTimeout(() => {
              b.value = !0;
            }, 100);
        }),
        (F, Y) => (
          k(),
          H("div", Y_, [
            y("div", null, [
              y(
                "div",
                {
                  class: "bg-my-cover w-screen h-full filter opacity-30",
                  style: qe({ backgroundImage: `url(${S($_)})` }),
                },
                null,
                4,
              ),
              q_,
            ]),
            y("div", null, [
              (k(!0),
              H(
                Ft,
                null,
                Nt(
                  S(a),
                  (U, B) => (
                    k(),
                    H(
                      "div",
                      {
                        key: `row-${B}`,
                        class: ht(`img-row imgscroll-${B}`),
                        style: { width: "calc(100vw - 4.635417vw)" },
                      },
                      [
                        y(
                          "ul",
                          {
                            class: ht([
                              { "opacity-0": !b.value },
                              "transition-opacity duration-200",
                            ]),
                          },
                          [
                            (k(!0),
                            H(
                              Ft,
                              null,
                              Nt(
                                U,
                                (W, L) => (
                                  k(),
                                  H("li", { key: `img-${L}` }, [
                                    y(
                                      "a",
                                      { target: "_blank", href: W.bannerUrl },
                                      [
                                        y(
                                          "img",
                                          {
                                            class: "w-full h-full",
                                            src: W.picturePath,
                                            alt: W.title,
                                          },
                                          null,
                                          8,
                                          X_,
                                        ),
                                      ],
                                      8,
                                      G_,
                                    ),
                                  ])
                                ),
                              ),
                              128,
                            )),
                          ],
                          2,
                        ),
                      ],
                      2,
                    )
                  ),
                ),
                128,
              )),
            ]),
            y("div", V_, [
              y("div", K_, [
                y("img", { src: S(k_), alt: "", class: "mr-6px" }, null, 8, Q_),
                Z_,
              ]),
              y("div", J_, [
                y("img", { src: S(H_), alt: "", class: "mr-6px" }, null, 8, j_),
                t1,
              ]),
              y("div", e1, [
                y("img", { src: S(z_), alt: "", class: "mr-6px" }, null, 8, n1),
                y(
                  "a",
                  {
                    class:
                      "font-medium text-20px text-[#1060AB] leading-30px cursor-pointer",
                    target: "_blank",
                    href: O(),
                  },
                  "人才中心",
                  8,
                  r1,
                ),
              ]),
            ]),
          ])
        )
      );
    },
  });
var s1 = Be(i1, [["__scopeId", "data-v-328fde1a"]]);
const a1 = Ht({
    setup(g) {
      return (x, a) => (k(), H("div", null, [gt(Cv)]));
    },
  }),
  u1 = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 24 24",
  },
  o1 = y(
    "path",
    {
      d: "M17.77 3.77L16 2L6 12l10 10l1.77-1.77L9.54 12z",
      fill: "currentColor",
    },
    null,
    -1,
  ),
  l1 = [o1];
var f1 = Ht({
  name: "ArrowBackIosNewFilled",
  render: function (x, a) {
    return (k(), H("svg", u1, l1));
  },
});
const c1 = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 24 24",
  },
  h1 = y(
    "path",
    {
      d: "M6.23 20.23L8 22l10-10L8 2L6.23 3.77L14.46 12z",
      fill: "currentColor",
    },
    null,
    -1,
  ),
  d1 = [h1];
var p1 = Ht({
  name: "ArrowForwardIosFilled",
  render: function (x, a) {
    return (k(), H("svg", c1, d1));
  },
});
function g1() {
  const g = Bt();
  return (
    Fn(() => {
      yr(10).then((x) => {
        g.value = x;
      });
    }),
    { twentyData: g }
  );
}
function v1() {
  const g = ui(),
    x = oi(),
    a = _t(() => x.firstMenuByName("党的建设")),
    O = _t(() => {
      var b, F;
      return (F = (b = a.value) == null ? void 0 : b.menuInfoList) == null
        ? void 0
        : F.find((Y) => Y.name === "党建工作");
    }),
    I = _t(() => {
      var b, F;
      return (F = (b = O.value) == null ? void 0 : b.menuInfoList) == null
        ? void 0
        : F.find((Y) => Y.name === "党建概况");
    });
  function C() {
    var b, F, Y;
    g.push({
      name: "content",
      query: {
        first: (b = a.value) == null ? void 0 : b.id,
        second: (F = O.value) == null ? void 0 : F.id,
        third: (Y = I.value) == null ? void 0 : Y.id,
        type: 11,
      },
    });
  }
  return { firstMenu: a, secondMenu: O, dhsg: I, jumpDhsgDetail: C };
}
function _1() {
  const g = ui(),
    x = oi(),
    a = _t(() => x.firstMenuByName("新闻中心")),
    O = _t(() => {
      var C, b;
      return (b = (C = a.value) == null ? void 0 : C.menuInfoList) == null
        ? void 0
        : b.find((F) => F.name === "主题专栏");
    });
  function I() {
    var C, b;
    g.push({
      name: "content",
      query: {
        first: (C = a.value) == null ? void 0 : C.id,
        second: (b = O.value) == null ? void 0 : b.id,
        type: 20,
      },
    });
  }
  return { firstMenu: a, secondMenu: O, jumpZtsy: I };
}
var m1 = "/assets/twenty-bg.d445ec5a.webp";
const cl = (g) => (Er("data-v-425dea86"), (g = g()), Tr(), g),
  x1 = { class: "ctn h-screen bg-my-cover grid grid-rows-[26%,54%,20%]" },
  w1 = { class: "flex justify-center items-center" },
  A1 = ["data-bg"],
  y1 = {
    key: 0,
    class: "truncate text-[20px] leading-[36px] font-medium mb-10px",
  },
  b1 = { class: "custom-arrow" },
  E1 = ["onClick"],
  T1 = ["onClick"],
  I1 = ["data-bg"],
  C1 = cl(() =>
    y(
      "div",
      {
        class:
          "text-[#FFFFFF] text-[25px] text-center leading-[42px] font-medium",
      },
      [
        y(
          "p",
          null,
          "学习贯彻习近平新时代中国特色社会主义思想主题教育",
        ),
      ],
      -1,
    ),
  ),
  S1 = [C1],
  F1 = ["data-bg", "onClick"],
  O1 = { class: "text-[#FFFFFF] text-[27px] leading-[38px] font-medium" },
  R1 = cl(() => y("span", null, null, -1)),
  L1 = Ht({
    props: { page: null },
    setup(g) {
      const x = g,
        { twentyData: a } = g1(),
        O = Bt(!1),
        { currentPage: I } = On(),
        C = _t(() => (I == null ? void 0 : I.value) === x.page);
      fn(C, (at) => {
        at
          ? setTimeout(() => {
              O.value = !0;
            }, 500)
          : (O.value = !1);
      });
      const b = Bt([]),
        { dhsg: F, jumpDhsgDetail: Y } = v1();
      La(() => {
        F.value &&
          rl(F.value.id, 1, 3).then((at) => {
            b.value = at.articleList;
          });
      });
      const U = {
          title: "党的建设",
          enTitle: "PARTY BUILDING",
        },
        B = [
          {
            title: "工会工作",
            bg: "https://www.jchc.cn/storage/sjk/7b9b2767-fdc0-43b4-80f8-a1ade8141703.jpg",
            url: "https://gh.jchc.cn/",
          },
          {
            title: "青年工作",
            bg: "https://www.jchc.cn/storage/sjk/41ca6b18-d922-4f3b-b5c2-17ffc56672fa.jpg",
            url: "https://youth.jchc.cn/",
          },
        ],
        { jumpGhgz: W } = Sv(),
        { jumpQngz: L } = Fv();
      function z(at, ut) {
        at === "工会工作" ? W() : L();
      }
      const { jumpZtsy: N } = _1(),
        { imgsCtn: K, loadImgs: et } = Pa();
      return (
        fn(C, (at) => {
          if (at) {
            if (a.value && a.value.length) return et();
            fn(a, et);
          }
        }),
        (at, ut) => {
          const At = Ov,
            Gt = sl;
          return (
            k(),
            H("div", x1, [
              y("div", w1, [
                gt(
                  ll,
                  {
                    class: "mt-[3%]",
                    "title-en": U.enTitle,
                    title: U.title,
                    "is-current": S(C),
                    "animate-name": "animate-fade-in-up",
                    align: "center",
                  },
                  null,
                  8,
                  ["title-en", "title", "is-current"],
                ),
              ]),
              y(
                "div",
                {
                  ref_key: "imgsCtn",
                  ref: K,
                  class:
                    "content-bg bg-my-cover w-[84%] h-full mx-auto grid grid-rows-2 grid-cols-4 gap-18px",
                },
                [
                  y(
                    "div",
                    {
                      class: ht([
                        "col-start-1 col-end-3 row-start-1 row-end-3 forwards-1000",
                        { "animate-fade-in-left": S(C) },
                      ]),
                    },
                    [
                      gt(
                        Gt,
                        {
                          "show-dots": !1,
                          autoplay: "",
                          "show-arrow": "",
                          draggable: "",
                        },
                        {
                          arrow: Qt(({ prev: ft, next: Ct }) => [
                            y("div", b1, [
                              y(
                                "button",
                                {
                                  type: "button",
                                  class: "curtom-arrow-left",
                                  onClick: ft,
                                },
                                [
                                  gt(
                                    At,
                                    { size: "30" },
                                    { default: Qt(() => [gt(S(f1))]), _: 1 },
                                  ),
                                ],
                                8,
                                E1,
                              ),
                              y(
                                "button",
                                {
                                  type: "button",
                                  class: "curtom-arrow-right",
                                  onClick: Ct,
                                },
                                [
                                  gt(
                                    At,
                                    { size: "30" },
                                    { default: Qt(() => [gt(S(p1))]), _: 1 },
                                  ),
                                ],
                                8,
                                T1,
                              ),
                            ]),
                          ]),
                          default: Qt(() => [
                            (k(!0),
                            H(
                              Ft,
                              null,
                              Nt(
                                S(a),
                                (ft, Ct) => (
                                  k(),
                                  H(
                                    "div",
                                    {
                                      key: Ct,
                                      class:
                                        "lazy-load h-full w-full absolute top-0 left-0 bg-my-cover overflow-hidden hover:scale-105 transform transition-transform duration-1000",
                                      "data-bg": ft.picturePath,
                                      onClick:
                                        ut[0] ||
                                        (ut[0] = br(() => S(Y)(), ["prevent"])),
                                    },
                                    [
                                      y(
                                        "div",
                                        {
                                          class: ht([
                                            "text-area absolute w-full text-white flex flex-col justify-end px-[30px] pb-[4%]",
                                            { "animate-textArea": S(C) },
                                          ]),
                                        },
                                        [
                                          ft.title
                                            ? (k(),
                                              H("span", y1, It(ft.title), 1))
                                            : cn("", !0),
                                        ],
                                        2,
                                      ),
                                    ],
                                    8,
                                    A1,
                                  )
                                ),
                              ),
                              128,
                            )),
                          ]),
                          _: 1,
                        },
                      ),
                    ],
                    2,
                  ),
                  y(
                    "div",
                    {
                      class: ht([
                        "lazy-load col-start-3 col-end-5 w-full h-full cursor-pointer bg-my-cover overflow-hidden hover:scale-105 transform transition-transform duration-1000 forwards-1000",
                        { "animate-fade-in-top-right": S(C) },
                      ]),
                      "data-bg": S(m1),
                      onClick: ut[1] || (ut[1] = () => S(N)()),
                    },
                    [
                      y(
                        "div",
                        {
                          class: ht([
                            "twenty absolute w-full flex justify-center items-center",
                            { "animate-textArea": S(C) },
                          ]),
                        },
                        S1,
                        2,
                      ),
                    ],
                    10,
                    I1,
                  ),
                  (k(),
                  H(
                    Ft,
                    null,
                    Nt(B, (ft, Ct) =>
                      y(
                        "div",
                        {
                          key: Ct,
                          class: ht([
                            "lazy-load w-full h-full cursor-pointer bg-my-cover overflow-hidden transform transition-transform duration-1000 forwards-1000",
                            { "animate-fade-in-bottom-right": S(C) },
                          ]),
                          "data-bg": ft.bg,
                          onClick: (Lt) => z(ft.title, ft.url),
                        },
                        [
                          y(
                            "div",
                            {
                              class: ht([
                                "labor-young-box absolute w-full flex justify-start items-center px-50px",
                                { "animate-textArea-labor": S(C) },
                              ]),
                            },
                            [y("span", O1, It(ft.title), 1)],
                            2,
                          ),
                        ],
                        10,
                        F1,
                      ),
                    ),
                    64,
                  )),
                ],
                512,
              ),
              R1,
            ])
          );
        }
      );
    },
  });
var D1 = Be(L1, [["__scopeId", "data-v-425dea86"]]);
const P1 = { class: "flex-1 flex flex-col justify-between items-center" },
  N1 = ["href"],
  B1 = Ht({
    setup(g) {
      const x = [
        { pageId: "index", title: "首页" },
        { pageId: "news", title: "新闻中心" },
        { pageId: "aboutus", title: "关于我们" },
        { pageId: "partybuilding", title: "党的建设" },
        { pageId: "businessfield", title: "业务领域" },
        {
          pageId: "communicationholdingstyle",
          title: "视觉交控",
        },
        { pageId: "footer", title: "底部" },
      ];
      Go("pageList", x);
      const a = Bt(x[0].pageId);
      return (
        Go("currentPage", a),
        (O, I) => {
          const C = o0;
          return (
            k(),
            H(
              Ft,
              null,
              [
                gt(
                  C,
                  {
                    modelValue: a.value,
                    "onUpdate:modelValue":
                      I[0] || (I[0] = (b) => (a.value = b)),
                    "page-list": x.map((b) => b.pageId),
                    "show-anchor": !1,
                    duration: 350,
                  },
                  {
                    index: Qt(({ page: b }) => [
                      gt(B0, { page: b }, null, 8, ["page"]),
                    ]),
                    news: Qt(({ page: b }) => [
                      gt(v_, { class: "ml-[89px]", page: b }, null, 8, [
                        "page",
                      ]),
                    ]),
                    aboutus: Qt(({ page: b }) => [
                      gt(R_, { class: "ml-[89px]", page: b }, null, 8, [
                        "page",
                      ]),
                    ]),
                    partybuilding: Qt(({ page: b }) => [
                      gt(D1, { class: "ml-[89px]", page: b }, null, 8, [
                        "page",
                      ]),
                    ]),
                    businessfield: Qt(({ page: b }) => [
                      gt(U_, { class: "ml-[89px]", page: b }, null, 8, [
                        "page",
                      ]),
                    ]),
                    communicationholdingstyle: Qt(({ page: b }) => [
                      gt(s1, { class: "ml-[89px]", page: b }, null, 8, [
                        "page",
                      ]),
                    ]),
                    footer: Qt(() => [gt(a1, { class: "ml-[89px]" })]),
                    _: 1,
                  },
                  8,
                  ["modelValue", "page-list"],
                ),
                gt(
                  Xo,
                  {
                    "enter-active-class":
                      "animate__animated animate__slideInLeft",
                    "leave-active-class":
                      "animate__animated animate__slideOutLeft",
                  },
                  {
                    default: Qt(() => [
                      Pe(gt(F0, null, null, 512), [
                        [Ne, a.value !== x[0].pageId],
                      ]),
                    ]),
                    _: 1,
                  },
                ),
                gt(
                  Xo,
                  {
                    "enter-active-class": "animate__animated animate__fadeIn",
                    "leave-active-class": "animate__animated animate__fadeOut",
                  },
                  {
                    default: Qt(() => [
                      Pe(
                        y(
                          "div",
                          {
                            class: ht([
                              "fixed bottom-[380px] right-[42px] cursor-pointer animate-duration-300",
                              { "animate-delay-700": a.value !== x[0].pageId },
                            ]),
                          },
                          [
                            y("ul", P1, [
                              (k(),
                              H(
                                Ft,
                                null,
                                Nt(x, (b) =>
                                  y(
                                    "li",
                                    {
                                      key: b.pageId,
                                      class: ht([
                                        "relative li-box mb-17px",
                                        { liActive: a.value === b.pageId },
                                      ]),
                                    },
                                    [
                                      y(
                                        "a",
                                        {
                                          href: `#${b.pageId}`,
                                          class: ht([
                                            "inline-block nav-item",
                                            { active: a.value === b.pageId },
                                          ]),
                                        },
                                        null,
                                        10,
                                        N1,
                                      ),
                                    ],
                                    2,
                                  ),
                                ),
                                64,
                              )),
                            ]),
                          ],
                          2,
                        ),
                        [[Ne, a.value !== x[0].pageId]],
                      ),
                    ]),
                    _: 1,
                  },
                ),
                cn("", !0),
              ],
              64,
            )
          );
        }
      );
    },
  });
var W1 = Be(B1, [["__scopeId", "data-v-52e6e942"]]);
export { W1 as default };
