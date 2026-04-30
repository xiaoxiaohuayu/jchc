import {
  o as et,
  q as Ae,
  a3 as pr,
  Z as ie,
  c as S,
  a4 as Pn,
  a5 as ze,
  I as Q,
  a6 as _n,
  a7 as An,
  a8 as Tn,
  a9 as tt,
  r as nt,
  aa as hr,
  ab as vr,
  ac as _t,
  ad as mr,
  ae as pe,
  i as En,
  af as At,
  t as gr,
  ag as Te,
  ah as In,
  ai as yt,
  aj as Yt,
  ak as br,
  al as Ut,
  am as Kt,
  an as qe,
  ao as yr,
  ap as qt,
  a as wr,
  aq as xr,
  ar as Cr,
  as as Sr,
  at as $r,
  au as Mr,
  av as Pr,
  aw as ft,
  ax as Ie,
  ay as _r,
  az as Oe,
  aA as Ar,
  d as K,
  a1 as Me,
  aB as Tr,
  b as z,
  aC as te,
  aD as Er,
  aE as oe,
  M as Ee,
  aF as Gt,
  aG as Ir,
  aH as Or,
  X as wt,
  L as fe,
  aI as On,
  m as M,
  aJ as Dn,
  aK as Dr,
  e as Fe,
  aL as j,
  f as ae,
  g as Ze,
  h as A,
  j as P,
  aM as zr,
  u as ge,
  k as ne,
  aN as Zt,
  N as Tt,
  l as Et,
  a2 as zn,
  aO as Fr,
  aP as Br,
  aQ as It,
  aR as Nr,
  aS as Qt,
  aT as Ot,
  aU as xt,
  G as Fn,
  aV as Re,
  aW as kr,
  aX as Lr,
  aY as Vr,
  w as Bn,
  aZ as Wr,
  a_ as Rr,
  a$ as Jt,
  b0 as en,
  b1 as Nn,
  b2 as jr,
  b3 as Hr,
  b4 as Xr,
  Y as Yr,
  T as Ur,
  s as ue,
  v as de,
  C as Z,
  b5 as Kr,
  x as W,
  b6 as qr,
  Q as Ct,
  R as kn,
  B as Ln,
  V as Dt,
  S as Gr,
  F as je,
  y as pt,
  D as He,
  H as Xe,
  E as Zr,
  O as Qr,
  P as Jr,
  W as Vn,
} from "./index.8a4e10e9.js";
let Qe = [];
const Wn = new WeakMap();
function eo() {
  (Qe.forEach((e) => e(...Wn.get(e))), (Qe = []));
}
function to(e, ...t) {
  (Wn.set(e, t),
    !Qe.includes(e) && Qe.push(e) === 1 && requestAnimationFrame(eo));
}
const no = /^(\d|\.)+$/,
  tn = /(\d|\.)+/;
function Ge(e, { c: t = 1, offset: n = 0, attachPx: r = !0 } = {}) {
  if (typeof e == "number") {
    const o = (e + n) * t;
    return o === 0 ? "0" : `${o}px`;
  } else if (typeof e == "string")
    if (no.test(e)) {
      const o = (Number(e) + n) * t;
      return r ? (o === 0 ? "0" : `${o}px`) : `${o}`;
    } else {
      const o = tn.exec(e);
      return o ? e.replace(tn, String((Number(o[0]) + n) * t)) : e;
    }
  return e;
}
let Pe, De;
const ro = () => {
  var e, t;
  ((Pe = pr
    ? (t = (e = document) === null || e === void 0 ? void 0 : e.fonts) ===
        null || t === void 0
      ? void 0
      : t.ready
    : void 0),
    (De = !1),
    Pe !== void 0
      ? Pe.then(() => {
          De = !0;
        })
      : (De = !0));
};
ro();
function oo(e) {
  if (De) return;
  let t = !1;
  (et(() => {
    De ||
      Pe == null ||
      Pe.then(() => {
        t || e();
      });
  }),
    Ae(() => {
      t = !0;
    }));
}
function ao(e, t) {
  return (
    ie(e, (n) => {
      n !== void 0 && (t.value = n);
    }),
    S(() => (e.value === void 0 ? t.value : e.value))
  );
}
function io(e, t) {
  return S(() => {
    for (const n of t) if (e[n] !== void 0) return e[n];
    return e[t[t.length - 1]];
  });
}
const so = Pn("n-internal-select-menu-body"),
  Rn = "__disabled__";
function _e(e) {
  const t = Q(_n, null),
    n = Q(An, null),
    r = Q(Tn, null),
    o = Q(so, null);
  return ze(() => {
    var a;
    const { to: i } = e;
    return i !== void 0
      ? i === !1
        ? Rn
        : i === !0
          ? "body"
          : i
      : t != null && t.value
        ? (a = t.value.$el) !== null && a !== void 0
          ? a
          : t.value
        : n != null && n.value
          ? n.value
          : r != null && r.value
            ? r.value
            : o != null && o.value
              ? o.value
              : i != null
                ? i
                : "body";
  });
}
_e.tdkey = Rn;
_e.propTo = { type: [String, Object, Boolean], default: void 0 };
var lo = tt(nt, "WeakMap"),
  St = lo,
  uo = hr(Object.keys, Object),
  co = uo,
  fo = Object.prototype,
  po = fo.hasOwnProperty;
function ho(e) {
  if (!vr(e)) return co(e);
  var t = [];
  for (var n in Object(e)) po.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function zt(e) {
  return _t(e) ? mr(e) : ho(e);
}
var vo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  mo = /^\w*$/;
function Ft(e, t) {
  if (pe(e)) return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || En(e)
    ? !0
    : mo.test(e) || !vo.test(e) || (t != null && e in Object(t));
}
var go = "Expected a function";
function Bt(e, t) {
  if (typeof e != "function" || (t != null && typeof t != "function"))
    throw new TypeError(go);
  var n = function () {
    var r = arguments,
      o = t ? t.apply(this, r) : r[0],
      a = n.cache;
    if (a.has(o)) return a.get(o);
    var i = e.apply(this, r);
    return ((n.cache = a.set(o, i) || a), i);
  };
  return ((n.cache = new (Bt.Cache || At)()), n);
}
Bt.Cache = At;
var bo = 500;
function yo(e) {
  var t = Bt(e, function (r) {
      return (n.size === bo && n.clear(), r);
    }),
    n = t.cache;
  return t;
}
var wo =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  xo = /\\(\\)?/g,
  Co = yo(function (e) {
    var t = [];
    return (
      e.charCodeAt(0) === 46 && t.push(""),
      e.replace(wo, function (n, r, o, a) {
        t.push(o ? a.replace(xo, "$1") : r || n);
      }),
      t
    );
  }),
  So = Co;
function jn(e, t) {
  return pe(e) ? e : Ft(e, t) ? [e] : So(gr(e));
}
var $o = 1 / 0;
function rt(e) {
  if (typeof e == "string" || En(e)) return e;
  var t = e + "";
  return t == "0" && 1 / e == -$o ? "-0" : t;
}
function Hn(e, t) {
  t = jn(t, e);
  for (var n = 0, r = t.length; e != null && n < r; ) e = e[rt(t[n++])];
  return n && n == r ? e : void 0;
}
function Mo(e, t, n) {
  var r = e == null ? void 0 : Hn(e, t);
  return r === void 0 ? n : r;
}
function Po(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; ) e[o + n] = t[n];
  return e;
}
function _o(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, a = []; ++n < r; ) {
    var i = e[n];
    t(i, n, e) && (a[o++] = i);
  }
  return a;
}
function Ao() {
  return [];
}
var To = Object.prototype,
  Eo = To.propertyIsEnumerable,
  nn = Object.getOwnPropertySymbols,
  Io = nn
    ? function (e) {
        return e == null
          ? []
          : ((e = Object(e)),
            _o(nn(e), function (t) {
              return Eo.call(e, t);
            }));
      }
    : Ao,
  Oo = Io;
function Do(e, t, n) {
  var r = t(e);
  return pe(e) ? r : Po(r, n(e));
}
function rn(e) {
  return Do(e, zt, Oo);
}
var zo = tt(nt, "DataView"),
  $t = zo,
  Fo = tt(nt, "Promise"),
  Mt = Fo,
  Bo = tt(nt, "Set"),
  Pt = Bo,
  on = "[object Map]",
  No = "[object Object]",
  an = "[object Promise]",
  sn = "[object Set]",
  ln = "[object WeakMap]",
  un = "[object DataView]",
  ko = Te($t),
  Lo = Te(yt),
  Vo = Te(Mt),
  Wo = Te(Pt),
  Ro = Te(St),
  me = In;
(($t && me(new $t(new ArrayBuffer(1))) != un) ||
  (yt && me(new yt()) != on) ||
  (Mt && me(Mt.resolve()) != an) ||
  (Pt && me(new Pt()) != sn) ||
  (St && me(new St()) != ln)) &&
  (me = function (e) {
    var t = In(e),
      n = t == No ? e.constructor : void 0,
      r = n ? Te(n) : "";
    if (r)
      switch (r) {
        case ko:
          return un;
        case Lo:
          return on;
        case Vo:
          return an;
        case Wo:
          return sn;
        case Ro:
          return ln;
      }
    return t;
  });
var dn = me,
  jo = "__lodash_hash_undefined__";
function Ho(e) {
  return (this.__data__.set(e, jo), this);
}
function Xo(e) {
  return this.__data__.has(e);
}
function Je(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.__data__ = new At(); ++t < n; ) this.add(e[t]);
}
Je.prototype.add = Je.prototype.push = Ho;
Je.prototype.has = Xo;
function Yo(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e)) return !0;
  return !1;
}
function Uo(e, t) {
  return e.has(t);
}
var Ko = 1,
  qo = 2;
function Xn(e, t, n, r, o, a) {
  var i = n & Ko,
    u = e.length,
    l = t.length;
  if (u != l && !(i && l > u)) return !1;
  var c = a.get(e),
    h = a.get(t);
  if (c && h) return c == t && h == e;
  var y = -1,
    p = !0,
    b = n & qo ? new Je() : void 0;
  for (a.set(e, t), a.set(t, e); ++y < u; ) {
    var m = e[y],
      f = t[y];
    if (r) var v = i ? r(f, m, y, t, e, a) : r(m, f, y, e, t, a);
    if (v !== void 0) {
      if (v) continue;
      p = !1;
      break;
    }
    if (b) {
      if (
        !Yo(t, function (d, w) {
          if (!Uo(b, w) && (m === d || o(m, d, n, r, a))) return b.push(w);
        })
      ) {
        p = !1;
        break;
      }
    } else if (!(m === f || o(m, f, n, r, a))) {
      p = !1;
      break;
    }
  }
  return (a.delete(e), a.delete(t), p);
}
function Go(e) {
  var t = -1,
    n = Array(e.size);
  return (
    e.forEach(function (r, o) {
      n[++t] = [o, r];
    }),
    n
  );
}
function Zo(e) {
  var t = -1,
    n = Array(e.size);
  return (
    e.forEach(function (r) {
      n[++t] = r;
    }),
    n
  );
}
var Qo = 1,
  Jo = 2,
  ea = "[object Boolean]",
  ta = "[object Date]",
  na = "[object Error]",
  ra = "[object Map]",
  oa = "[object Number]",
  aa = "[object RegExp]",
  ia = "[object Set]",
  sa = "[object String]",
  la = "[object Symbol]",
  ua = "[object ArrayBuffer]",
  da = "[object DataView]",
  cn = Yt ? Yt.prototype : void 0,
  ht = cn ? cn.valueOf : void 0;
function ca(e, t, n, r, o, a, i) {
  switch (n) {
    case da:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      ((e = e.buffer), (t = t.buffer));
    case ua:
      return !(e.byteLength != t.byteLength || !a(new Ut(e), new Ut(t)));
    case ea:
    case ta:
    case oa:
      return br(+e, +t);
    case na:
      return e.name == t.name && e.message == t.message;
    case aa:
    case sa:
      return e == t + "";
    case ra:
      var u = Go;
    case ia:
      var l = r & Qo;
      if ((u || (u = Zo), e.size != t.size && !l)) return !1;
      var c = i.get(e);
      if (c) return c == t;
      ((r |= Jo), i.set(e, t));
      var h = Xn(u(e), u(t), r, o, a, i);
      return (i.delete(e), h);
    case la:
      if (ht) return ht.call(e) == ht.call(t);
  }
  return !1;
}
var fa = 1,
  pa = Object.prototype,
  ha = pa.hasOwnProperty;
function va(e, t, n, r, o, a) {
  var i = n & fa,
    u = rn(e),
    l = u.length,
    c = rn(t),
    h = c.length;
  if (l != h && !i) return !1;
  for (var y = l; y--; ) {
    var p = u[y];
    if (!(i ? p in t : ha.call(t, p))) return !1;
  }
  var b = a.get(e),
    m = a.get(t);
  if (b && m) return b == t && m == e;
  var f = !0;
  (a.set(e, t), a.set(t, e));
  for (var v = i; ++y < l; ) {
    p = u[y];
    var d = e[p],
      w = t[p];
    if (r) var B = i ? r(w, d, p, t, e, a) : r(d, w, p, e, t, a);
    if (!(B === void 0 ? d === w || o(d, w, n, r, a) : B)) {
      f = !1;
      break;
    }
    v || (v = p == "constructor");
  }
  if (f && !v) {
    var X = e.constructor,
      Y = t.constructor;
    X != Y &&
      "constructor" in e &&
      "constructor" in t &&
      !(
        typeof X == "function" &&
        X instanceof X &&
        typeof Y == "function" &&
        Y instanceof Y
      ) &&
      (f = !1);
  }
  return (a.delete(e), a.delete(t), f);
}
var ma = 1,
  fn = "[object Arguments]",
  pn = "[object Array]",
  Ye = "[object Object]",
  ga = Object.prototype,
  hn = ga.hasOwnProperty;
function ba(e, t, n, r, o, a) {
  var i = pe(e),
    u = pe(t),
    l = i ? pn : dn(e),
    c = u ? pn : dn(t);
  ((l = l == fn ? Ye : l), (c = c == fn ? Ye : c));
  var h = l == Ye,
    y = c == Ye,
    p = l == c;
  if (p && Kt(e)) {
    if (!Kt(t)) return !1;
    ((i = !0), (h = !1));
  }
  if (p && !h)
    return (
      a || (a = new qe()),
      i || yr(e) ? Xn(e, t, n, r, o, a) : ca(e, t, l, n, r, o, a)
    );
  if (!(n & ma)) {
    var b = h && hn.call(e, "__wrapped__"),
      m = y && hn.call(t, "__wrapped__");
    if (b || m) {
      var f = b ? e.value() : e,
        v = m ? t.value() : t;
      return (a || (a = new qe()), o(f, v, n, r, a));
    }
  }
  return p ? (a || (a = new qe()), va(e, t, n, r, o, a)) : !1;
}
function Nt(e, t, n, r, o) {
  return e === t
    ? !0
    : e == null || t == null || (!qt(e) && !qt(t))
      ? e !== e && t !== t
      : ba(e, t, n, r, Nt, o);
}
var ya = 1,
  wa = 2;
function xa(e, t, n, r) {
  var o = n.length,
    a = o,
    i = !r;
  if (e == null) return !a;
  for (e = Object(e); o--; ) {
    var u = n[o];
    if (i && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1;
  }
  for (; ++o < a; ) {
    u = n[o];
    var l = u[0],
      c = e[l],
      h = u[1];
    if (i && u[2]) {
      if (c === void 0 && !(l in e)) return !1;
    } else {
      var y = new qe();
      if (r) var p = r(c, h, l, e, t, y);
      if (!(p === void 0 ? Nt(h, c, ya | wa, r, y) : p)) return !1;
    }
  }
  return !0;
}
function Yn(e) {
  return e === e && !wr(e);
}
function Ca(e) {
  for (var t = zt(e), n = t.length; n--; ) {
    var r = t[n],
      o = e[r];
    t[n] = [r, o, Yn(o)];
  }
  return t;
}
function Un(e, t) {
  return function (n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function Sa(e) {
  var t = Ca(e);
  return t.length == 1 && t[0][2]
    ? Un(t[0][0], t[0][1])
    : function (n) {
        return n === e || xa(n, e, t);
      };
}
function $a(e, t) {
  return e != null && t in Object(e);
}
function Ma(e, t, n) {
  t = jn(t, e);
  for (var r = -1, o = t.length, a = !1; ++r < o; ) {
    var i = rt(t[r]);
    if (!(a = e != null && n(e, i))) break;
    e = e[i];
  }
  return a || ++r != o
    ? a
    : ((o = e == null ? 0 : e.length),
      !!o && xr(o) && Cr(i, o) && (pe(e) || Sr(e)));
}
function Pa(e, t) {
  return e != null && Ma(e, t, $a);
}
var _a = 1,
  Aa = 2;
function Ta(e, t) {
  return Ft(e) && Yn(t)
    ? Un(rt(e), t)
    : function (n) {
        var r = Mo(n, e);
        return r === void 0 && r === t ? Pa(n, e) : Nt(t, r, _a | Aa);
      };
}
function Ea(e) {
  return function (t) {
    return t == null ? void 0 : t[e];
  };
}
function Ia(e) {
  return function (t) {
    return Hn(t, e);
  };
}
function Oa(e) {
  return Ft(e) ? Ea(rt(e)) : Ia(e);
}
function Da(e) {
  return typeof e == "function"
    ? e
    : e == null
      ? $r
      : typeof e == "object"
        ? pe(e)
          ? Ta(e[0], e[1])
          : Sa(e)
        : Oa(e);
}
function za(e, t) {
  return e && Mr(e, t, zt);
}
function Fa(e, t) {
  return function (n, r) {
    if (n == null) return n;
    if (!_t(n)) return e(n, r);
    for (
      var o = n.length, a = t ? o : -1, i = Object(n);
      (t ? a-- : ++a < o) && r(i[a], a, i) !== !1;
    );
    return n;
  };
}
var Ba = Fa(za),
  Na = Ba;
function ka(e, t) {
  var n = -1,
    r = _t(e) ? Array(e.length) : [];
  return (
    Na(e, function (o, a, i) {
      r[++n] = t(o, a, i);
    }),
    r
  );
}
function La(e, t) {
  var n = pe(e) ? Pr : ka;
  return n(e, Da(t));
}
const Va = {
  name: "en-US",
  global: { undo: "Undo", redo: "Redo", confirm: "Confirm" },
  Popconfirm: { positiveText: "Confirm", negativeText: "Cancel" },
  Cascader: {
    placeholder: "Please Select",
    loading: "Loading",
    loadingRequiredMessage: (e) =>
      `Please load all ${e}'s descendants before checking it.`,
  },
  Time: { dateFormat: "yyyy-MM-dd", dateTimeFormat: "yyyy-MM-dd HH:mm:ss" },
  DatePicker: {
    yearFormat: "yyyy",
    monthFormat: "MMM",
    dayFormat: "eeeeee",
    yearTypeFormat: "yyyy",
    monthTypeFormat: "yyyy-MM",
    dateFormat: "yyyy-MM-dd",
    dateTimeFormat: "yyyy-MM-dd HH:mm:ss",
    quarterFormat: "yyyy-qqq",
    clear: "Clear",
    now: "Now",
    confirm: "Confirm",
    selectTime: "Select Time",
    selectDate: "Select Date",
    datePlaceholder: "Select Date",
    datetimePlaceholder: "Select Date and Time",
    monthPlaceholder: "Select Month",
    yearPlaceholder: "Select Year",
    quarterPlaceholder: "Select Quarter",
    startDatePlaceholder: "Start Date",
    endDatePlaceholder: "End Date",
    startDatetimePlaceholder: "Start Date and Time",
    endDatetimePlaceholder: "End Date and Time",
    monthBeforeYear: !0,
    firstDayOfWeek: 6,
    today: "Today",
  },
  DataTable: {
    checkTableAll: "Select all in the table",
    uncheckTableAll: "Unselect all in the table",
    confirm: "Confirm",
    clear: "Clear",
  },
  Transfer: { sourceTitle: "Source", targetTitle: "Target" },
  Empty: { description: "No Data" },
  Select: { placeholder: "Please Select" },
  TimePicker: {
    placeholder: "Select Time",
    positiveText: "OK",
    negativeText: "Cancel",
    now: "Now",
  },
  Pagination: { goto: "Goto", selectionSuffix: "page" },
  DynamicTags: { add: "Add" },
  Log: { loading: "Loading" },
  Input: { placeholder: "Please Input" },
  InputNumber: { placeholder: "Please Input" },
  DynamicInput: { create: "Create" },
  ThemeEditor: {
    title: "Theme Editor",
    clearAllVars: "Clear All Variables",
    clearSearch: "Clear Search",
    filterCompName: "Filter Component Name",
    filterVarName: "Filter Variable Name",
    import: "Import",
    export: "Export",
    restore: "Reset to Default",
  },
  Image: {
    tipPrevious: "Previous picture (←)",
    tipNext: "Next picture (→)",
    tipCounterclockwise: "Counterclockwise",
    tipClockwise: "Clockwise",
    tipZoomOut: "Zoom out",
    tipZoomIn: "Zoom in",
    tipClose: "Close (Esc)",
  },
};
var Wa = Va,
  Ra = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds",
    },
    xSeconds: { one: "1 second", other: "{{count}} seconds" },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes",
    },
    xMinutes: { one: "1 minute", other: "{{count}} minutes" },
    aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
    xHours: { one: "1 hour", other: "{{count}} hours" },
    xDays: { one: "1 day", other: "{{count}} days" },
    aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
    xWeeks: { one: "1 week", other: "{{count}} weeks" },
    aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
    xMonths: { one: "1 month", other: "{{count}} months" },
    aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
    xYears: { one: "1 year", other: "{{count}} years" },
    overXYears: { one: "over 1 year", other: "over {{count}} years" },
    almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
  },
  ja = function (e, t, n) {
    var r,
      o = Ra[e];
    return (
      typeof o == "string"
        ? (r = o)
        : t === 1
          ? (r = o.one)
          : (r = o.other.replace("{{count}}", t.toString())),
      n != null && n.addSuffix
        ? n.comparison && n.comparison > 0
          ? "in " + r
          : r + " ago"
        : r
    );
  },
  Ha = ja,
  Xa = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy",
  },
  Ya = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a",
  },
  Ua = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}",
  },
  Ka = {
    date: ft({ formats: Xa, defaultWidth: "full" }),
    time: ft({ formats: Ya, defaultWidth: "full" }),
    dateTime: ft({ formats: Ua, defaultWidth: "full" }),
  },
  qa = Ka,
  Ga = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P",
  },
  Za = function (e, t, n, r) {
    return Ga[e];
  },
  Qa = Za,
  Ja = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"],
  },
  ei = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
  },
  ti = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    wide: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
  ni = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },
  ri = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
  },
  oi = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
  },
  ai = function (e, t) {
    var n = Number(e),
      r = n % 100;
    if (r > 20 || r < 10)
      switch (r % 10) {
        case 1:
          return n + "st";
        case 2:
          return n + "nd";
        case 3:
          return n + "rd";
      }
    return n + "th";
  },
  ii = {
    ordinalNumber: ai,
    era: Ie({ values: Ja, defaultWidth: "wide" }),
    quarter: Ie({
      values: ei,
      defaultWidth: "wide",
      argumentCallback: function (e) {
        return e - 1;
      },
    }),
    month: Ie({ values: ti, defaultWidth: "wide" }),
    day: Ie({ values: ni, defaultWidth: "wide" }),
    dayPeriod: Ie({
      values: ri,
      defaultWidth: "wide",
      formattingValues: oi,
      defaultFormattingWidth: "wide",
    }),
  },
  si = ii,
  li = /^(\d+)(th|st|nd|rd)?/i,
  ui = /\d+/i,
  di = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  ci = { any: [/^b/i, /^(a|c)/i] },
  fi = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i,
  },
  pi = { any: [/1/i, /2/i, /3/i, /4/i] },
  hi = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  vi = {
    narrow: [
      /^j/i,
      /^f/i,
      /^m/i,
      /^a/i,
      /^m/i,
      /^j/i,
      /^j/i,
      /^a/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
    any: [
      /^ja/i,
      /^f/i,
      /^mar/i,
      /^ap/i,
      /^may/i,
      /^jun/i,
      /^jul/i,
      /^au/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
  },
  mi = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  gi = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  bi = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  yi = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i,
    },
  },
  wi = {
    ordinalNumber: _r({
      matchPattern: li,
      parsePattern: ui,
      valueCallback: function (e) {
        return parseInt(e, 10);
      },
    }),
    era: Oe({
      matchPatterns: di,
      defaultMatchWidth: "wide",
      parsePatterns: ci,
      defaultParseWidth: "any",
    }),
    quarter: Oe({
      matchPatterns: fi,
      defaultMatchWidth: "wide",
      parsePatterns: pi,
      defaultParseWidth: "any",
      valueCallback: function (e) {
        return e + 1;
      },
    }),
    month: Oe({
      matchPatterns: hi,
      defaultMatchWidth: "wide",
      parsePatterns: vi,
      defaultParseWidth: "any",
    }),
    day: Oe({
      matchPatterns: mi,
      defaultMatchWidth: "wide",
      parsePatterns: gi,
      defaultParseWidth: "any",
    }),
    dayPeriod: Oe({
      matchPatterns: bi,
      defaultMatchWidth: "any",
      parsePatterns: yi,
      defaultParseWidth: "any",
    }),
  },
  xi = wi,
  Ci = {
    code: "en-US",
    formatDistance: Ha,
    formatLong: qa,
    formatRelative: Qa,
    localize: si,
    match: xi,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  },
  Si = Ci;
const $i = { name: "en-US", locale: Si };
var Mi = $i;
function Zs(e) {
  const { mergedLocaleRef: t, mergedDateLocaleRef: n } = Q(Ar, null) || {},
    r = S(() => {
      var a, i;
      return (i =
        (a = t == null ? void 0 : t.value) === null || a === void 0
          ? void 0
          : a[e]) !== null && i !== void 0
        ? i
        : Wa[e];
    });
  return {
    dateLocaleRef: S(() => {
      var a;
      return (a = n == null ? void 0 : n.value) !== null && a !== void 0
        ? a
        : Mi;
    }),
    localeRef: r,
  };
}
let ce = null;
function Kn() {
  if (
    ce === null &&
    ((ce = document.getElementById("v-binder-view-measurer")), ce === null)
  ) {
    ((ce = document.createElement("div")), (ce.id = "v-binder-view-measurer"));
    const { style: e } = ce;
    ((e.position = "fixed"),
      (e.left = "0"),
      (e.right = "0"),
      (e.top = "0"),
      (e.bottom = "0"),
      (e.pointerEvents = "none"),
      (e.visibility = "hidden"),
      document.body.appendChild(ce));
  }
  return ce.getBoundingClientRect();
}
function Pi(e, t) {
  const n = Kn();
  return {
    top: t,
    left: e,
    height: 0,
    width: 0,
    right: n.width - e,
    bottom: n.height - t,
  };
}
function vt(e) {
  const t = e.getBoundingClientRect(),
    n = Kn();
  return {
    left: t.left - n.left,
    top: t.top - n.top,
    bottom: n.height + n.top - t.bottom,
    right: n.width + n.left - t.right,
    width: t.width,
    height: t.height,
  };
}
function _i(e) {
  return e.nodeType === 9 ? null : e.parentNode;
}
function qn(e) {
  if (e === null) return null;
  const t = _i(e);
  if (t === null) return null;
  if (t.nodeType === 9) return document;
  if (t.nodeType === 1) {
    const { overflow: n, overflowX: r, overflowY: o } = getComputedStyle(t);
    if (/(auto|scroll|overlay)/.test(n + o + r)) return t;
  }
  return qn(t);
}
const Ai = K({
  name: "Binder",
  props: {
    syncTargetWithParent: Boolean,
    syncTarget: { type: Boolean, default: !0 },
  },
  setup(e) {
    var t;
    Me("VBinder", (t = Tr()) === null || t === void 0 ? void 0 : t.proxy);
    const n = Q("VBinder", null),
      r = z(null),
      o = (d) => {
        ((r.value = d), n && e.syncTargetWithParent && n.setTargetRef(d));
      };
    let a = [];
    const i = () => {
        let d = r.value;
        for (; (d = qn(d)), d !== null; ) a.push(d);
        for (const w of a) oe("scroll", w, y, !0);
      },
      u = () => {
        for (const d of a) te("scroll", d, y, !0);
        a = [];
      },
      l = new Set(),
      c = (d) => {
        (l.size === 0 && i(), l.has(d) || l.add(d));
      },
      h = (d) => {
        (l.has(d) && l.delete(d), l.size === 0 && u());
      },
      y = () => {
        to(p);
      },
      p = () => {
        l.forEach((d) => d());
      },
      b = new Set(),
      m = (d) => {
        (b.size === 0 && oe("resize", window, v), b.has(d) || b.add(d));
      },
      f = (d) => {
        (b.has(d) && b.delete(d), b.size === 0 && te("resize", window, v));
      },
      v = () => {
        b.forEach((d) => d());
      };
    return (
      Ae(() => {
        (te("resize", window, v), u());
      }),
      {
        targetRef: r,
        setTargetRef: o,
        addScrollListener: c,
        removeScrollListener: h,
        addResizeListener: m,
        removeResizeListener: f,
      }
    );
  },
  render() {
    return Er("binder", this.$slots);
  },
});
var Ti = Ai,
  Ei = K({
    name: "Target",
    setup() {
      const { setTargetRef: e, syncTarget: t } = Q("VBinder");
      return { syncTarget: t, setTargetDirective: { mounted: e, updated: e } };
    },
    render() {
      const { syncTarget: e, setTargetDirective: t } = this;
      return e
        ? Ee(Gt("follower", this.$slots), [[t]])
        : Gt("follower", this.$slots);
    },
  });
const $e = "@@mmoContext",
  Ii = {
    mounted(e, { value: t }) {
      ((e[$e] = { handler: void 0 }),
        typeof t == "function" &&
          ((e[$e].handler = t), oe("mousemoveoutside", e, t)));
    },
    updated(e, { value: t }) {
      const n = e[$e];
      typeof t == "function"
        ? n.handler
          ? n.handler !== t &&
            (te("mousemoveoutside", e, n.handler),
            (n.handler = t),
            oe("mousemoveoutside", e, t))
          : ((e[$e].handler = t), oe("mousemoveoutside", e, t))
        : n.handler &&
          (te("mousemoveoutside", e, n.handler), (n.handler = void 0));
    },
    unmounted(e) {
      const { handler: t } = e[$e];
      (t && te("mousemoveoutside", e, t), (e[$e].handler = void 0));
    },
  };
var Oi = Ii;
const { c: Ue } = Ir(),
  Di = "vueuc-style",
  Ke = { top: "bottom", bottom: "top", left: "right", right: "left" },
  vn = { start: "end", center: "center", end: "start" },
  mt = { top: "height", bottom: "height", left: "width", right: "width" },
  zi = {
    "bottom-start": "top left",
    bottom: "top center",
    "bottom-end": "top right",
    "top-start": "bottom left",
    top: "bottom center",
    "top-end": "bottom right",
    "right-start": "top left",
    right: "center left",
    "right-end": "bottom left",
    "left-start": "top right",
    left: "center right",
    "left-end": "bottom right",
  },
  Fi = {
    "bottom-start": "bottom left",
    bottom: "bottom center",
    "bottom-end": "bottom right",
    "top-start": "top left",
    top: "top center",
    "top-end": "top right",
    "right-start": "top right",
    right: "center right",
    "right-end": "bottom right",
    "left-start": "top left",
    left: "center left",
    "left-end": "bottom left",
  },
  Bi = {
    "bottom-start": "right",
    "bottom-end": "left",
    "top-start": "right",
    "top-end": "left",
    "right-start": "bottom",
    "right-end": "top",
    "left-start": "bottom",
    "left-end": "top",
  },
  mn = { top: !0, bottom: !1, left: !0, right: !1 },
  gn = { top: "end", bottom: "start", left: "end", right: "start" };
function Ni(e, t, n, r, o, a) {
  if (!o || a) return { placement: e, top: 0, left: 0 };
  const [i, u] = e.split("-");
  let l = u != null ? u : "center",
    c = { top: 0, left: 0 };
  const h = (b, m, f) => {
      let v = 0,
        d = 0;
      const w = n[b] - t[m] - t[b];
      return (
        w > 0 && r && (f ? (d = mn[m] ? w : -w) : (v = mn[m] ? w : -w)),
        { left: v, top: d }
      );
    },
    y = i === "left" || i === "right";
  if (l !== "center") {
    const b = Bi[e],
      m = Ke[b],
      f = mt[b];
    if (n[f] > t[f]) {
      if (t[b] + t[f] < n[f]) {
        const v = (n[f] - t[f]) / 2;
        t[b] < v || t[m] < v
          ? t[b] < t[m]
            ? ((l = vn[u]), (c = h(f, m, y)))
            : (c = h(f, b, y))
          : (l = "center");
      }
    } else n[f] < t[f] && t[m] < 0 && t[b] > t[m] && (l = vn[u]);
  } else {
    const b = i === "bottom" || i === "top" ? "left" : "top",
      m = Ke[b],
      f = mt[b],
      v = (n[f] - t[f]) / 2;
    (t[b] < v || t[m] < v) &&
      (t[b] > t[m]
        ? ((l = gn[b]), (c = h(f, b, y)))
        : ((l = gn[m]), (c = h(f, m, y))));
  }
  let p = i;
  return (
    t[i] < n[mt[i]] && t[i] < t[Ke[i]] && (p = Ke[i]),
    { placement: l !== "center" ? `${p}-${l}` : p, left: c.left, top: c.top }
  );
}
function ki(e, t) {
  return t ? Fi[e] : zi[e];
}
function Li(e, t, n, r, o, a) {
  if (a)
    switch (e) {
      case "bottom-start":
        return {
          top: `${Math.round(n.top - t.top + n.height)}px`,
          left: `${Math.round(n.left - t.left)}px`,
          transform: "translateY(-100%)",
        };
      case "bottom-end":
        return {
          top: `${Math.round(n.top - t.top + n.height)}px`,
          left: `${Math.round(n.left - t.left + n.width)}px`,
          transform: "translateX(-100%) translateY(-100%)",
        };
      case "top-start":
        return {
          top: `${Math.round(n.top - t.top)}px`,
          left: `${Math.round(n.left - t.left)}px`,
          transform: "",
        };
      case "top-end":
        return {
          top: `${Math.round(n.top - t.top)}px`,
          left: `${Math.round(n.left - t.left + n.width)}px`,
          transform: "translateX(-100%)",
        };
      case "right-start":
        return {
          top: `${Math.round(n.top - t.top)}px`,
          left: `${Math.round(n.left - t.left + n.width)}px`,
          transform: "translateX(-100%)",
        };
      case "right-end":
        return {
          top: `${Math.round(n.top - t.top + n.height)}px`,
          left: `${Math.round(n.left - t.left + n.width)}px`,
          transform: "translateX(-100%) translateY(-100%)",
        };
      case "left-start":
        return {
          top: `${Math.round(n.top - t.top)}px`,
          left: `${Math.round(n.left - t.left)}px`,
          transform: "",
        };
      case "left-end":
        return {
          top: `${Math.round(n.top - t.top + n.height)}px`,
          left: `${Math.round(n.left - t.left)}px`,
          transform: "translateY(-100%)",
        };
      case "top":
        return {
          top: `${Math.round(n.top - t.top)}px`,
          left: `${Math.round(n.left - t.left + n.width / 2)}px`,
          transform: "translateX(-50%)",
        };
      case "right":
        return {
          top: `${Math.round(n.top - t.top + n.height / 2)}px`,
          left: `${Math.round(n.left - t.left + n.width)}px`,
          transform: "translateX(-100%) translateY(-50%)",
        };
      case "left":
        return {
          top: `${Math.round(n.top - t.top + n.height / 2)}px`,
          left: `${Math.round(n.left - t.left)}px`,
          transform: "translateY(-50%)",
        };
      case "bottom":
      default:
        return {
          top: `${Math.round(n.top - t.top + n.height)}px`,
          left: `${Math.round(n.left - t.left + n.width / 2)}px`,
          transform: "translateX(-50%) translateY(-100%)",
        };
    }
  switch (e) {
    case "bottom-start":
      return {
        top: `${Math.round(n.top - t.top + n.height + r)}px`,
        left: `${Math.round(n.left - t.left + o)}px`,
        transform: "",
      };
    case "bottom-end":
      return {
        top: `${Math.round(n.top - t.top + n.height + r)}px`,
        left: `${Math.round(n.left - t.left + n.width + o)}px`,
        transform: "translateX(-100%)",
      };
    case "top-start":
      return {
        top: `${Math.round(n.top - t.top + r)}px`,
        left: `${Math.round(n.left - t.left + o)}px`,
        transform: "translateY(-100%)",
      };
    case "top-end":
      return {
        top: `${Math.round(n.top - t.top + r)}px`,
        left: `${Math.round(n.left - t.left + n.width + o)}px`,
        transform: "translateX(-100%) translateY(-100%)",
      };
    case "right-start":
      return {
        top: `${Math.round(n.top - t.top + r)}px`,
        left: `${Math.round(n.left - t.left + n.width + o)}px`,
        transform: "",
      };
    case "right-end":
      return {
        top: `${Math.round(n.top - t.top + n.height + r)}px`,
        left: `${Math.round(n.left - t.left + n.width + o)}px`,
        transform: "translateY(-100%)",
      };
    case "left-start":
      return {
        top: `${Math.round(n.top - t.top + r)}px`,
        left: `${Math.round(n.left - t.left + o)}px`,
        transform: "translateX(-100%)",
      };
    case "left-end":
      return {
        top: `${Math.round(n.top - t.top + n.height + r)}px`,
        left: `${Math.round(n.left - t.left + o)}px`,
        transform: "translateX(-100%) translateY(-100%)",
      };
    case "top":
      return {
        top: `${Math.round(n.top - t.top + r)}px`,
        left: `${Math.round(n.left - t.left + n.width / 2 + o)}px`,
        transform: "translateY(-100%) translateX(-50%)",
      };
    case "right":
      return {
        top: `${Math.round(n.top - t.top + n.height / 2 + r)}px`,
        left: `${Math.round(n.left - t.left + n.width + o)}px`,
        transform: "translateY(-50%)",
      };
    case "left":
      return {
        top: `${Math.round(n.top - t.top + n.height / 2 + r)}px`,
        left: `${Math.round(n.left - t.left + o)}px`,
        transform: "translateY(-50%) translateX(-100%)",
      };
    case "bottom":
    default:
      return {
        top: `${Math.round(n.top - t.top + n.height + r)}px`,
        left: `${Math.round(n.left - t.left + n.width / 2 + o)}px`,
        transform: "translateX(-50%)",
      };
  }
}
const Vi = Ue([
  Ue(".v-binder-follower-container", {
    position: "absolute",
    left: "0",
    right: "0",
    top: "0",
    height: "0",
    pointerEvents: "none",
    zIndex: "auto",
  }),
  Ue(".v-binder-follower-content", { position: "absolute", zIndex: "auto" }, [
    Ue("> *", { pointerEvents: "all" }),
  ]),
]);
var Wi = K({
    name: "Follower",
    inheritAttrs: !1,
    props: {
      show: Boolean,
      enabled: { type: Boolean, default: void 0 },
      placement: { type: String, default: "bottom" },
      syncTrigger: { type: Array, default: ["resize", "scroll"] },
      to: [String, Object],
      flip: { type: Boolean, default: !0 },
      internalShift: Boolean,
      x: Number,
      y: Number,
      width: String,
      minWidth: String,
      containerClass: String,
      teleportDisabled: Boolean,
      zindexable: { type: Boolean, default: !0 },
      zIndex: Number,
      overlap: Boolean,
    },
    setup(e) {
      const t = Q("VBinder"),
        n = ze(() => (e.enabled !== void 0 ? e.enabled : e.show)),
        r = z(null),
        o = z(null),
        a = () => {
          const { syncTrigger: p } = e;
          (p.includes("scroll") && t.addScrollListener(l),
            p.includes("resize") && t.addResizeListener(l));
        },
        i = () => {
          (t.removeScrollListener(l), t.removeResizeListener(l));
        };
      et(() => {
        n.value && (l(), a());
      });
      const u = Or();
      (Vi.mount({ id: "vueuc/binder", head: !0, anchorMetaName: Di, ssr: u }),
        Ae(() => {
          i();
        }),
        oo(() => {
          n.value && l();
        }));
      const l = () => {
        if (!n.value) return;
        const p = r.value;
        if (p === null) return;
        const b = t.targetRef,
          { x: m, y: f, overlap: v } = e,
          d = m !== void 0 && f !== void 0 ? Pi(m, f) : vt(b);
        (p.style.setProperty("--v-target-width", `${Math.round(d.width)}px`),
          p.style.setProperty(
            "--v-target-height",
            `${Math.round(d.height)}px`,
          ));
        const {
          width: w,
          minWidth: B,
          placement: X,
          internalShift: Y,
          flip: _,
        } = e;
        (p.setAttribute("v-placement", X),
          v ? p.setAttribute("v-overlap", "") : p.removeAttribute("v-overlap"));
        const { style: F } = p;
        (w === "target"
          ? (F.width = `${d.width}px`)
          : w !== void 0
            ? (F.width = w)
            : (F.width = ""),
          B === "target"
            ? (F.minWidth = `${d.width}px`)
            : B !== void 0
              ? (F.minWidth = B)
              : (F.minWidth = ""));
        const O = vt(p),
          R = vt(o.value),
          { left: J, top: N, placement: k } = Ni(X, d, O, Y, _, v),
          q = ki(k, v),
          { left: C, top: L, transform: U } = Li(k, R, d, N, J, v);
        (p.setAttribute("v-placement", k),
          p.style.setProperty("--v-offset-left", `${Math.round(J)}px`),
          p.style.setProperty("--v-offset-top", `${Math.round(N)}px`),
          (p.style.transform = `translateX(${C}) translateY(${L}) ${U}`),
          (p.style.transformOrigin = q));
      };
      ie(n, (p) => {
        p ? (a(), c()) : i();
      });
      const c = () => {
        wt()
          .then(l)
          .catch((p) => console.error(p));
      };
      ([
        "placement",
        "x",
        "y",
        "internalShift",
        "flip",
        "width",
        "overlap",
        "minWidth",
      ].forEach((p) => {
        ie(fe(e, p), l);
      }),
        ["teleportDisabled"].forEach((p) => {
          ie(fe(e, p), c);
        }),
        ie(fe(e, "syncTrigger"), (p) => {
          (p.includes("resize")
            ? t.addResizeListener(l)
            : t.removeResizeListener(l),
            p.includes("scroll")
              ? t.addScrollListener(l)
              : t.removeScrollListener(l));
        }));
      const h = On(),
        y = ze(() => {
          const { to: p } = e;
          if (p !== void 0) return p;
          h.value;
        });
      return {
        VBinder: t,
        mergedEnabled: n,
        offsetContainerRef: o,
        followerRef: r,
        mergedTo: y,
        syncPosition: l,
      };
    },
    render() {
      return M(
        Dr,
        { show: this.show, to: this.mergedTo, disabled: this.teleportDisabled },
        {
          default: () => {
            var e, t;
            const n = M(
              "div",
              {
                class: ["v-binder-follower-container", this.containerClass],
                ref: "offsetContainerRef",
              },
              [
                M(
                  "div",
                  { class: "v-binder-follower-content", ref: "followerRef" },
                  (t = (e = this.$slots).default) === null || t === void 0
                    ? void 0
                    : t.call(e),
                ),
              ],
            );
            return this.zindexable
              ? Ee(n, [
                  [Dn, { enabled: this.mergedEnabled, zIndex: this.zIndex }],
                ])
              : n;
          },
        },
      );
    },
  }),
  Ri = {
    space: "6px",
    spaceArrow: "10px",
    arrowOffset: "10px",
    arrowOffsetVertical: "10px",
    arrowHeight: "6px",
    padding: "8px 14px",
  };
const ji = (e) => {
    const {
      boxShadow2: t,
      popoverColor: n,
      textColor2: r,
      borderRadius: o,
      fontSize: a,
      dividerColor: i,
    } = e;
    return Object.assign(Object.assign({}, Ri), {
      fontSize: a,
      borderRadius: o,
      color: n,
      dividerColor: i,
      textColor: r,
      boxShadow: t,
    });
  },
  Hi = { name: "Popover", common: Fe, self: ji };
var Gn = Hi;
const gt = { top: "bottom", bottom: "top", left: "right", right: "left" },
  H = "var(--n-arrow-height) * 1.414";
var Xi = j([
  ae(
    "popover",
    `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 transform-origin: inherit;
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 `,
    [
      j(
        "&.popover-transition-enter-from, &.popover-transition-leave-to",
        `
 opacity: 0;
 transform: scale(.85);
 `,
      ),
      j(
        "&.popover-transition-enter-to, &.popover-transition-leave-from",
        `
 transform: scale(1);
 opacity: 1;
 `,
      ),
      j(
        "&.popover-transition-enter-active",
        `
 transition:
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `,
      ),
      j(
        "&.popover-transition-leave-active",
        `
 transition:
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `,
      ),
      Ze(
        "raw",
        `
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,
        [Ze("show-header", "padding: var(--n-padding);")],
      ),
      A(
        "header",
        `
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `,
      ),
      A(
        "content",
        `
 padding: var(--n-padding);
 `,
      ),
      ae(
        "popover-arrow-wrapper",
        `
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,
        [
          ae(
            "popover-arrow",
            `
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${H});
 height: calc(${H});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `,
          ),
        ],
      ),
    ],
  ),
  G(
    "top-start",
    `
 top: calc(${H} / -2 + 1px);
 left: calc(${le("top-start")} - var(--v-offset-left));
 `,
  ),
  G(
    "top",
    `
 top: calc(${H} / -2 + 1px);
 transform: translateX(calc(${H} / -2)) rotate(45deg);
 left: 50%;
 `,
  ),
  G(
    "top-end",
    `
 top: calc(${H} / -2 + 1px);
 right: calc(${le("top-end")} + var(--v-offset-left));
 `,
  ),
  G(
    "bottom-start",
    `
 bottom: calc(${H} / -2 + 1px);
 left: calc(${le("bottom-start")} - var(--v-offset-left));
 `,
  ),
  G(
    "bottom",
    `
 bottom: calc(${H} / -2 + 1px);
 transform: translateX(calc(${H} / -2)) rotate(45deg);
 left: 50%;
 `,
  ),
  G(
    "bottom-end",
    `
 bottom: calc(${H} / -2 + 1px);
 right: calc(${le("bottom-end")} + var(--v-offset-left));
 `,
  ),
  G(
    "left-start",
    `
 left: calc(${H} / -2 + 1px);
 top: calc(${le("left-start")} - var(--v-offset-top));
 `,
  ),
  G(
    "left",
    `
 left: calc(${H} / -2 + 1px);
 transform: translateY(calc(${H} / -2)) rotate(45deg);
 top: 50%;
 `,
  ),
  G(
    "left-end",
    `
 left: calc(${H} / -2 + 1px);
 bottom: calc(${le("left-end")} + var(--v-offset-top));
 `,
  ),
  G(
    "right-start",
    `
 right: calc(${H} / -2 + 1px);
 top: calc(${le("right-start")} - var(--v-offset-top));
 `,
  ),
  G(
    "right",
    `
 right: calc(${H} / -2 + 1px);
 transform: translateY(calc(${H} / -2)) rotate(45deg);
 top: 50%;
 `,
  ),
  G(
    "right-end",
    `
 right: calc(${H} / -2 + 1px);
 bottom: calc(${le("right-end")} + var(--v-offset-top));
 `,
  ),
  ...La(
    {
      top: ["right-start", "left-start"],
      right: ["top-end", "bottom-end"],
      bottom: ["right-end", "left-end"],
      left: ["top-start", "bottom-start"],
    },
    (e, t) => {
      const n = ["right", "left"].includes(t),
        r = n ? "width" : "height";
      return e.map((o) => {
        const a = o.split("-")[1] === "end",
          u = `calc((${`var(--v-target-${r}, 0px)`} - ${H}) / 2)`,
          l = le(o);
        return j(`[v-placement="${o}"] >`, [
          ae("popover", [
            P("center-arrow", [
              ae(
                "popover-arrow",
                `${t}: calc(max(${u}, ${l}) ${a ? "+" : "-"} var(--v-offset-${n ? "left" : "top"}));`,
              ),
            ]),
          ]),
        ]);
      });
    },
  ),
]);
function le(e) {
  return ["top", "bottom"].includes(e.split("-")[0])
    ? "var(--n-arrow-offset)"
    : "var(--n-arrow-offset-vertical)";
}
function G(e, t) {
  const n = e.split("-")[0],
    r = ["top", "bottom"].includes(n)
      ? "height: var(--n-space-arrow);"
      : "width: var(--n-space-arrow);";
  return j(`[v-placement="${e}"] >`, [
    ae("popover", [
      Ze(
        "manual-trigger",
        `
 margin-${gt[n]}: var(--n-space);
 `,
      ),
      P(
        "show-arrow",
        `
 margin-${gt[n]}: var(--n-space-arrow);
 `,
      ),
      P(
        "overlap",
        `
 margin: 0;
 `,
      ),
      zr(
        "popover-arrow-wrapper",
        `
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${n}: calc(100% - 1px);
 ${gt[n]}: auto;
 ${r}
 `,
        [ae("popover-arrow", t)],
      ),
    ]),
  ]);
}
const Zn = Object.assign(Object.assign({}, ne.props), {
    to: _e.propTo,
    show: Boolean,
    trigger: String,
    showArrow: Boolean,
    delay: Number,
    duration: Number,
    raw: Boolean,
    arrowPointToCenter: Boolean,
    arrowStyle: [String, Object],
    displayDirective: String,
    x: Number,
    y: Number,
    flip: Boolean,
    overlap: Boolean,
    placement: String,
    width: [Number, String],
    keepAliveOnHover: Boolean,
    internalTrapFocus: Boolean,
    animated: Boolean,
    onClickoutside: Function,
    minWidth: Number,
    maxWidth: Number,
  }),
  Yi = ({ arrowStyle: e, clsPrefix: t }) =>
    M(
      "div",
      { key: "__popover-arrow__", class: `${t}-popover-arrow-wrapper` },
      M("div", { class: `${t}-popover-arrow`, style: e }),
    );
var Ui = K({
  name: "PopoverBody",
  inheritAttrs: !1,
  props: Zn,
  setup(e, { slots: t, attrs: n }) {
    const {
        namespaceRef: r,
        mergedClsPrefixRef: o,
        inlineThemeDisabled: a,
      } = ge(e),
      i = ne("Popover", "-popover", Xi, Gn, e, o),
      u = z(null),
      l = Q("NPopover"),
      c = z(null),
      h = z(e.show),
      y = S(() => {
        const { trigger: _, onClickoutside: F } = e,
          O = [],
          {
            positionManuallyRef: { value: R },
          } = l;
        return (
          R ||
            (_ === "click" && !F && O.push([Zt, B]),
            _ === "hover" && O.push([Oi, w])),
          F && O.push([Zt, B]),
          e.displayDirective === "show" && O.push([Tt, e.show]),
          O
        );
      }),
      p = S(() => [
        { width: e.width === "trigger" ? "" : Ge(e.width) },
        e.maxWidth ? { maxWidth: Ge(e.maxWidth) } : {},
        e.minWidth ? { minWidth: Ge(e.minWidth) } : {},
        a ? void 0 : b.value,
      ]),
      b = S(() => {
        const {
          common: {
            cubicBezierEaseInOut: _,
            cubicBezierEaseIn: F,
            cubicBezierEaseOut: O,
          },
          self: {
            space: R,
            spaceArrow: J,
            padding: N,
            fontSize: k,
            textColor: q,
            dividerColor: C,
            color: L,
            boxShadow: U,
            borderRadius: be,
            arrowHeight: he,
            arrowOffset: at,
            arrowOffsetVertical: Be,
          },
        } = i.value;
        return {
          "--n-box-shadow": U,
          "--n-bezier": _,
          "--n-bezier-ease-in": F,
          "--n-bezier-ease-out": O,
          "--n-font-size": k,
          "--n-text-color": q,
          "--n-color": L,
          "--n-divider-color": C,
          "--n-border-radius": be,
          "--n-arrow-height": he,
          "--n-arrow-offset": at,
          "--n-arrow-offset-vertical": Be,
          "--n-padding": N,
          "--n-space": R,
          "--n-space-arrow": J,
        };
      }),
      m = a ? Et("popover", void 0, b, e) : void 0;
    (l.setBodyInstance({ syncPosition: f }),
      Ae(() => {
        l.setBodyInstance(null);
      }),
      ie(fe(e, "show"), (_) => {
        e.animated || (_ ? (h.value = !0) : (h.value = !1));
      }));
    function f() {
      var _;
      (_ = u.value) === null || _ === void 0 || _.syncPosition();
    }
    function v(_) {
      e.trigger === "hover" && e.keepAliveOnHover && l.handleMouseEnter(_);
    }
    function d(_) {
      e.trigger === "hover" && e.keepAliveOnHover && l.handleMouseLeave(_);
    }
    function w(_) {
      e.trigger === "hover" &&
        !X().contains(_.target) &&
        l.handleMouseMoveOutside(_);
    }
    function B(_) {
      ((e.trigger === "click" && !X().contains(_.target)) ||
        e.onClickoutside) &&
        l.handleClickOutside(_);
    }
    function X() {
      return l.getTriggerElement();
    }
    (Me(Tn, c), Me(An, null), Me(_n, null));
    function Y() {
      m == null || m.onRender();
      let _;
      const {
          internalRenderBodyRef: { value: F },
        } = l,
        { value: O } = o;
      if (F)
        _ = F(
          [
            `${O}-popover`,
            m == null ? void 0 : m.themeClass.value,
            e.overlap && `${O}-popover--overlap`,
          ],
          c,
          p.value,
          v,
          d,
        );
      else {
        const { value: R } = l.extraClassRef,
          { internalTrapFocus: J } = e,
          N = () => {
            var k;
            return [
              Br(
                t.header,
                (q) =>
                  q && [
                    M("div", { class: `${O}-popover__header` }, q),
                    M("div", { class: `${O}-popover__content` }, t),
                  ],
              ) ||
                ((k = t.default) === null || k === void 0 ? void 0 : k.call(t)),
              e.showArrow
                ? Yi({ arrowStyle: e.arrowStyle, clsPrefix: O })
                : null,
            ];
          };
        _ = M(
          "div",
          It(
            {
              class: [
                `${O}-popover`,
                m == null ? void 0 : m.themeClass.value,
                R.map((k) => `${O}-${k}`),
                {
                  [`${O}-popover--overlap`]: e.overlap,
                  [`${O}-popover--show-arrow`]: e.showArrow,
                  [`${O}-popover--show-header`]: !Nr(t.header),
                  [`${O}-popover--raw`]: e.raw,
                  [`${O}-popover--manual-trigger`]: e.trigger === "manual",
                  [`${O}-popover--center-arrow`]: e.arrowPointToCenter,
                },
              ],
              ref: c,
              style: p.value,
              onKeydown: l.handleKeydown,
              onMouseenter: v,
              onMouseleave: d,
            },
            n,
          ),
          J ? M(Fr, { active: e.show, autoFocus: !0 }, { default: N }) : N(),
        );
      }
      return e.displayDirective === "show" || e.show ? Ee(_, y.value) : null;
    }
    return {
      namespace: r,
      isMounted: l.isMountedRef,
      zIndex: l.zIndexRef,
      followerRef: u,
      adjustedTo: _e(e),
      followerEnabled: h,
      renderContentNode: Y,
    };
  },
  render() {
    return M(
      Wi,
      {
        zIndex: this.zIndex,
        show: this.show,
        enabled: this.followerEnabled,
        to: this.adjustedTo,
        x: this.x,
        y: this.y,
        flip: this.flip,
        placement: this.placement,
        containerClass: this.namespace,
        ref: "followerRef",
        overlap: this.overlap,
        width: this.width === "trigger" ? "target" : void 0,
        teleportDisabled: this.adjustedTo === _e.tdkey,
      },
      {
        default: () =>
          this.animated
            ? M(
                zn,
                {
                  name: "popover-transition",
                  appear: this.isMounted,
                  onEnter: () => {
                    this.followerEnabled = !0;
                  },
                  onAfterLeave: () => {
                    this.followerEnabled = !1;
                  },
                },
                { default: this.renderContentNode },
              )
            : this.renderContentNode(),
      },
    );
  },
});
const Ki = Object.keys(Zn),
  qi = {
    focus: ["onFocus", "onBlur"],
    click: ["onClick"],
    hover: ["onMouseenter", "onMouseleave"],
    manual: [],
    nested: ["onFocus", "onBlur", "onMouseenter", "onMouseleave", "onClick"],
  };
function Gi(e, t, n) {
  qi[t].forEach((r) => {
    e.props ? (e.props = Object.assign({}, e.props)) : (e.props = {});
    const o = e.props[r],
      a = n[r];
    o
      ? (e.props[r] = (...i) => {
          (o(...i), a(...i));
        })
      : (e.props[r] = a);
  });
}
const Zi = Fn("").type,
  Qn = {
    show: { type: Boolean, default: void 0 },
    defaultShow: Boolean,
    showArrow: { type: Boolean, default: !0 },
    trigger: { type: String, default: "hover" },
    delay: { type: Number, default: 100 },
    duration: { type: Number, default: 100 },
    raw: Boolean,
    placement: { type: String, default: "top" },
    x: Number,
    y: Number,
    arrowPointToCenter: Boolean,
    disabled: Boolean,
    getDisabled: Function,
    displayDirective: { type: String, default: "if" },
    arrowStyle: [String, Object],
    flip: { type: Boolean, default: !0 },
    animated: { type: Boolean, default: !0 },
    width: { type: [Number, String], default: void 0 },
    overlap: Boolean,
    keepAliveOnHover: { type: Boolean, default: !0 },
    onClickoutside: Function,
    internalExtraClass: { type: Array, default: () => [] },
    "onUpdate:show": [Function, Array],
    onUpdateShow: [Function, Array],
    zIndex: Number,
    to: _e.propTo,
    internalSyncTargetWithParent: Boolean,
    internalInheritedEventHandlers: { type: Array, default: () => [] },
    internalTrapFocus: Boolean,
    onShow: [Function, Array],
    onHide: [Function, Array],
    arrow: { type: Boolean, default: void 0 },
    minWidth: Number,
    maxWidth: Number,
  },
  Qi = Object.assign(Object.assign(Object.assign({}, ne.props), Qn), {
    internalRenderBody: Function,
  });
var Ji = K({
  name: "Popover",
  inheritAttrs: !1,
  props: Qi,
  __popover__: !0,
  setup(e) {
    const t = On(),
      n = z(null),
      r = S(() => e.show),
      o = z(e.defaultShow),
      a = ao(r, o),
      i = ze(() => (e.disabled ? !1 : a.value)),
      u = () => {
        if (e.disabled) return !0;
        const { getDisabled: C } = e;
        return !!(C != null && C());
      },
      l = () => (u() ? !1 : a.value),
      c = io(e, ["arrow", "showArrow"]),
      h = S(() => (e.overlap ? !1 : c.value));
    let y = null;
    const p = z(null),
      b = z(null),
      m = ze(() => e.x !== void 0 && e.y !== void 0);
    function f(C) {
      const { "onUpdate:show": L, onUpdateShow: U, onShow: be, onHide: he } = e;
      ((o.value = C),
        L && Re(L, C),
        U && Re(U, C),
        C && be && Re(be, !0),
        C && he && Re(he, !1));
    }
    function v() {
      y && y.syncPosition();
    }
    function d() {
      const { value: C } = p;
      C && (window.clearTimeout(C), (p.value = null));
    }
    function w() {
      const { value: C } = b;
      C && (window.clearTimeout(C), (b.value = null));
    }
    function B() {
      const C = u();
      if (e.trigger === "focus" && !C) {
        if (l()) return;
        f(!0);
      }
    }
    function X() {
      const C = u();
      if (e.trigger === "focus" && !C) {
        if (!l()) return;
        f(!1);
      }
    }
    function Y() {
      const C = u();
      if (e.trigger === "hover" && !C) {
        if ((w(), p.value !== null || l())) return;
        const L = () => {
            (f(!0), (p.value = null));
          },
          { delay: U } = e;
        U === 0 ? L() : (p.value = window.setTimeout(L, U));
      }
    }
    function _() {
      const C = u();
      if (e.trigger === "hover" && !C) {
        if ((d(), b.value !== null || !l())) return;
        const L = () => {
            (f(!1), (b.value = null));
          },
          { duration: U } = e;
        U === 0 ? L() : (b.value = window.setTimeout(L, U));
      }
    }
    function F() {
      _();
    }
    function O(C) {
      var L;
      !l() ||
        (e.trigger === "click" && (d(), w(), f(!1)),
        (L = e.onClickoutside) === null || L === void 0 || L.call(e, C));
    }
    function R() {
      if (e.trigger === "click" && !u()) {
        (d(), w());
        const C = !l();
        f(C);
      }
    }
    function J(C) {
      !e.internalTrapFocus || (C.code === "Escape" && (d(), w(), f(!1)));
    }
    function N(C) {
      o.value = C;
    }
    function k() {
      var C;
      return (C = n.value) === null || C === void 0 ? void 0 : C.targetRef;
    }
    function q(C) {
      y = C;
    }
    return (
      Me("NPopover", {
        getTriggerElement: k,
        handleKeydown: J,
        handleMouseEnter: Y,
        handleMouseLeave: _,
        handleClickOutside: O,
        handleMouseMoveOutside: F,
        setBodyInstance: q,
        positionManuallyRef: m,
        isMountedRef: t,
        zIndexRef: fe(e, "zIndex"),
        extraClassRef: fe(e, "internalExtraClass"),
        internalRenderBodyRef: fe(e, "internalRenderBody"),
      }),
      {
        binderInstRef: n,
        positionManually: m,
        mergedShowConsideringDisabledProp: i,
        uncontrolledShow: o,
        mergedShowArrow: h,
        getMergedShow: l,
        setShow: N,
        handleClick: R,
        handleMouseEnter: Y,
        handleMouseLeave: _,
        handleFocus: B,
        handleBlur: X,
        syncPosition: v,
      }
    );
  },
  render() {
    var e;
    const { positionManually: t, $slots: n } = this;
    let r,
      o = !1;
    if (
      !t &&
      (n.activator ? (r = Qt(n, "activator")) : (r = Qt(n, "trigger")), r)
    ) {
      ((r = Ot(r)), (r = r.type === Zi ? M("span", [r]) : r));
      const a = {
        onClick: this.handleClick,
        onMouseenter: this.handleMouseEnter,
        onMouseleave: this.handleMouseLeave,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
      };
      if (!((e = r.type) === null || e === void 0) && e.__popover__)
        ((o = !0),
          r.props ||
            (r.props = {
              internalSyncTargetWithParent: !0,
              internalInheritedEventHandlers: [],
            }),
          (r.props.internalSyncTargetWithParent = !0),
          r.props.internalInheritedEventHandlers
            ? (r.props.internalInheritedEventHandlers = [
                a,
                ...r.props.internalInheritedEventHandlers,
              ])
            : (r.props.internalInheritedEventHandlers = [a]));
      else {
        const { internalInheritedEventHandlers: i } = this,
          u = [a, ...i],
          l = {
            onBlur: (c) => {
              u.forEach((h) => {
                h.onBlur(c);
              });
            },
            onFocus: (c) => {
              u.forEach((h) => {
                h.onFocus(c);
              });
            },
            onClick: (c) => {
              u.forEach((h) => {
                h.onClick(c);
              });
            },
            onMouseenter: (c) => {
              u.forEach((h) => {
                h.onMouseenter(c);
              });
            },
            onMouseleave: (c) => {
              u.forEach((h) => {
                h.onMouseleave(c);
              });
            },
          };
        Gi(r, i ? "nested" : t ? "manual" : this.trigger, l);
      }
    }
    return M(
      Ti,
      {
        ref: "binderInstRef",
        syncTarget: !o,
        syncTargetWithParent: this.internalSyncTargetWithParent,
      },
      {
        default: () => {
          this.mergedShowConsideringDisabledProp;
          const a = this.getMergedShow();
          return [
            this.internalTrapFocus && a
              ? Ee(M("div", { style: { position: "fixed", inset: 0 } }), [
                  [Dn, { enabled: a, zIndex: this.zIndex }],
                ])
              : null,
            t ? null : M(Ei, null, { default: () => r }),
            M(
              Ui,
              xt(
                this.$props,
                Ki,
                Object.assign(Object.assign({}, this.$attrs), {
                  showArrow: this.mergedShowArrow,
                  show: a,
                }),
              ),
              {
                default: () => {
                  var i, u;
                  return (u = (i = this.$slots).default) === null ||
                    u === void 0
                    ? void 0
                    : u.call(i);
                },
                header: () => {
                  var i, u;
                  return (u = (i = this.$slots).header) === null || u === void 0
                    ? void 0
                    : u.call(i);
                },
              },
            ),
          ];
        },
      },
    );
  },
});
const es = (e) => ({
    dotSize: "8px",
    dotColor: "rgba(255, 255, 255, .3)",
    dotColorActive: "rgba(255, 255, 255, 1)",
    dotColorFocus: "rgba(255, 255, 255, .5)",
    dotLineWidth: "16px",
    dotLineWidthActive: "24px",
    arrowColor: "#eee",
  }),
  ts = { name: "Carousel", common: Fe, self: es };
var ns = ts;
function bn(e) {
  return window.TouchEvent && e instanceof window.TouchEvent;
}
function yn(e, t) {
  let n = e.clientWidth,
    r = e.clientHeight;
  if (t) {
    const o = getComputedStyle(e);
    return (
      (n =
        n -
        parseFloat(o.getPropertyValue("padding-left")) -
        parseFloat(o.getPropertyValue("padding-right"))),
      (r =
        r -
        parseFloat(o.getPropertyValue("padding-top")) -
        parseFloat(o.getPropertyValue("padding-bottom"))),
      { width: n, height: r }
    );
  }
  return { width: n, height: r };
}
function wn(e, t, n) {
  return e < t ? t : e > n ? n : e;
}
function rs(e) {
  if (e === void 0) return 0;
  if (typeof e == "number") return e;
  const t = /^((\d+)?\.?\d+?)(ms|s)?$/,
    n = e.match(t);
  if (n) {
    const [, r, , o = "ms"] = n;
    return Number(r) * (o === "ms" ? 1 : 1e3);
  }
  return 0;
}
function xn(e, t, n) {
  return n ? (e === 0 ? t - 3 : e === t - 1 ? 0 : e - 1) : e;
}
function Cn(e, t) {
  return t ? e + 1 : e;
}
function os(e, t, n) {
  return e < 0 ? null : e === 0 ? (n ? t - 1 : null) : e - 1;
}
function as(e, t, n) {
  return e > t - 1 ? null : e === t - 1 ? (n ? 0 : null) : e + 1;
}
const is = (...e) => e,
  ot = Pn("n-carousel-methods"),
  ss = {
    total: { type: Number, default: 0 },
    currentIndex: { type: Number, default: 0 },
    dotType: { type: String, default: "dot" },
    trigger: { type: String, default: "click" },
    keyboard: Boolean,
  };
var ls = K({
  name: "CarouselDots",
  props: ss,
  setup(e) {
    const { mergedClsPrefixRef: t } = ge(e),
      n = z([]),
      r = Q(ot, null);
    function o(c, h) {
      switch (c.code) {
        case "Enter":
        case "NumpadEnter":
        case "Space":
          r.to(h);
          return;
      }
      e.keyboard && u(c);
    }
    function a(c) {
      e.trigger === "hover" && r.to(c);
    }
    function i(c) {
      e.trigger === "click" && r.to(c);
    }
    function u(c) {
      var h;
      const { code: y } = c,
        p = r.isVertical(),
        b = y === "PageUp" || y === "ArrowUp",
        m = y === "PageDown" || y === "ArrowDown",
        f = y === "PageUp" || y === "ArrowRight",
        v = y === "PageDown" || y === "ArrowLeft";
      if (
        (p && ((b && r.isNextDisabled()) || (m && r.isPrevDisabled()))) ||
        (!p && ((f && r.isNextDisabled()) || (v && r.isPrevDisabled()))) ||
        c.shiftKey ||
        c.altKey ||
        c.ctrlKey ||
        c.metaKey
      )
        return;
      const d =
        (h = document.activeElement) === null || h === void 0
          ? void 0
          : h.nodeName.toLowerCase();
      d === "input" ||
        d === "textarea" ||
        ((p ? b : f)
          ? (c.preventDefault(), r.next(), l(r.getCurrentIndex()))
          : (p ? m : v) &&
            (c.preventDefault(), r.prev(), l(r.getCurrentIndex())));
    }
    function l(c = e.currentIndex) {
      const { value: h } = n;
      c >= 0 && c < h.length && h[c].focus();
    }
    return (
      kr(() => (n.value.length = 0)),
      {
        mergedClsPrefix: t,
        dotEls: n,
        handleKeydown: o,
        handleMouseenter: a,
        handleClick: i,
      }
    );
  },
  render() {
    const { mergedClsPrefix: e, dotEls: t } = this;
    return M(
      "div",
      {
        class: [`${e}-carousel__dots`, `${e}-carousel__dots--${this.dotType}`],
        role: "tablist",
      },
      Lr(this.total, (n) => {
        const r = n === this.currentIndex;
        return M("div", {
          "aria-selected": r,
          ref: (o) => t.push(o),
          role: "button",
          tabindex: "0",
          class: [`${e}-carousel__dot`, r && `${e}-carousel__dot--active`],
          key: n,
          onClick: () => this.handleClick(n),
          onMouseenter: () => this.handleMouseenter(n),
          onKeydown: (o) => this.handleKeydown(o, n),
        });
      }),
    );
  },
});
const us = M(
    "svg",
    { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16" },
    M(
      "g",
      { fill: "none" },
      M("path", {
        d: "M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",
        fill: "currentColor",
      }),
    ),
  ),
  ds = M(
    "svg",
    { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16" },
    M(
      "g",
      { fill: "none" },
      M("path", {
        d: "M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",
        fill: "currentColor",
      }),
    ),
  );
var cs = K({
    name: "CarouselArrow",
    setup(e) {
      const { mergedClsPrefixRef: t } = ge(e),
        {
          isVertical: n,
          isPrevDisabled: r,
          isNextDisabled: o,
          prev: a,
          next: i,
        } = Q(ot, null);
      return {
        mergedClsPrefix: t,
        isVertical: n,
        isPrevDisabled: r,
        isNextDisabled: o,
        prev: a,
        next: i,
      };
    },
    render() {
      const { mergedClsPrefix: e } = this;
      return M(
        "div",
        { class: `${e}-carousel__arrow-group` },
        M(
          "div",
          {
            class: [
              `${e}-carousel__arrow`,
              this.isPrevDisabled() && `${e}-carousel__arrow--disabled`,
            ],
            role: "button",
            onClick: this.prev,
          },
          us,
        ),
        M(
          "div",
          {
            class: [
              `${e}-carousel__arrow`,
              this.isNextDisabled() && `${e}-carousel__arrow--disabled`,
            ],
            role: "button",
            onClick: this.next,
          },
          ds,
        ),
      );
    },
  }),
  fs = K({
    name: "CarouselItem",
    setup(e) {
      const { mergedClsPrefixRef: t } = ge(e),
        n = Q(ot, null);
      n ||
        Vr(
          "carousel-item",
          "`n-carousel-item` must be placed inside `n-carousel`.",
        );
      const r = z(),
        o = S(() => {
          const { value: h } = r;
          return Boolean(h && n.isPrev(h));
        }),
        a = S(() => {
          const { value: h } = r;
          return Boolean(h && n.isNext(h));
        }),
        i = S(() => {
          const { value: h } = r;
          return Boolean(h && n.isActive(h));
        }),
        u = S(() => {
          const { value: h } = r;
          return h && n.getSlideStyle(h);
        }),
        l = S(() => {
          const { value: h } = r;
          return h && n.getSlideIndex(h);
        });
      function c(h) {
        const { value: y } = l;
        y !== void 0 && (n == null || n.onCarouselItemClick(y, h));
      }
      return (
        et(() => n.addSlide(r.value)),
        Ae(() => {
          n.removeSlide(r.value);
        }),
        {
          mergedClsPrefix: t,
          selfElRef: r,
          isPrev: o,
          isNext: a,
          isActive: i,
          index: l,
          style: u,
          handleClick: c,
        }
      );
    },
    render() {
      var e;
      const {
          $slots: t,
          mergedClsPrefix: n,
          isPrev: r,
          isNext: o,
          isActive: a,
          index: i,
          style: u,
        } = this,
        l = [
          `${n}-carousel__slide`,
          {
            [`${n}-carousel__slide--current`]: a,
            [`${n}-carousel__slide--prev`]: r,
            [`${n}-carousel__slide--next`]: o,
          },
        ];
      return M(
        "div",
        {
          ref: "selfElRef",
          class: l,
          role: "option",
          tabindex: "-1",
          "data-index": i,
          "aria-hidden": !a,
          style: u,
          onClickCapture: this.handleClick,
        },
        (e = t.default) === null || e === void 0
          ? void 0
          : e.call(t, { isPrev: r, isNext: o, isActive: a, index: i }),
      );
    },
  }),
  ps = ae(
    "carousel",
    `
 position: relative;
 width: 100%;
 height: 100%;
 overflow: hidden;
`,
    [
      A(
        "slides",
        `
 display: flex;
 width: 100%;
 height: 100%;
 transition-timing-function: var(--n-bezier);
 transition-property: transform;
 touch-action: pan-y;
 `,
        [
          A(
            "slide",
            `
 flex-shrink: 0;
 position: relative;
 width: 100%;
 height: 100%;
 outline: none;
 overflow: hidden;
 `,
            [
              j(
                "> img",
                `
 display: block;
 `,
              ),
            ],
          ),
        ],
      ),
      A(
        "dots",
        `
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `,
        [
          P("dot", [
            A(
              "dot",
              `
 height: var(--n-dot-size);
 width: var(--n-dot-size);
 background-color: var(--n-dot-color);
 border-radius: 50%;
 cursor: pointer;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,
              [
                j(
                  "&:focus",
                  `
 background-color: var(--n-dot-color-focus);
 `,
                ),
                P(
                  "active",
                  `
 background-color: var(--n-dot-color-active);
 `,
                ),
              ],
            ),
          ]),
          P("line", [
            A(
              "dot",
              `
 border-radius: 9999px;
 width: var(--n-dot-line-width);
 height: 4px;
 background-color: var(--n-dot-color);
 cursor: pointer;
 transition:
 width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,
              [
                j(
                  "&:focus",
                  `
 background-color: var(--n-dot-color-focus);
 `,
                ),
                P(
                  "active",
                  `
 width: var(--n-dot-line-width-active);
 background-color: var(--n-dot-color-active);
 `,
                ),
              ],
            ),
          ]),
        ],
      ),
      A(
        "arrow",
        `
 transition: background-color .3s var(--n-bezier);
 cursor: pointer;
 height: 28px;
 width: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: rgba(255, 255, 255, .2);
 color: var(--n-arrow-color);
 border-radius: 8px;
 user-select: none;
 font-size: 18px;
 `,
        [
          j(
            "svg",
            `
 height: 1em;
 width: 1em;
 `,
          ),
          j(
            "&:hover",
            `
 background-color: rgba(255, 255, 255, .3);
 `,
          ),
        ],
      ),
      P("vertical", [
        A(
          "slides",
          `
 flex-direction: column;
 touch-action: pan-x;
 `,
        ),
        P("fade", [
          A(
            "slide",
            `
 top: 50%;
 left: unset;
 transform: translateY(-50%);
 `,
          ),
        ]),
        P("card", [
          A(
            "slide",
            `
 top: 50%;
 left: unset;
 transform: translateY(-50%) translateZ(-400px);
 `,
            [
              P(
                "current",
                `
 transform: translateY(-50%) translateZ(0);
 `,
              ),
              P(
                "prev",
                `
 transform: translateY(-100%) translateZ(-200px);
 `,
              ),
              P(
                "next",
                `
 transform: translateY(0%) translateZ(-200px);
 `,
              ),
            ],
          ),
        ]),
      ]),
      P("usercontrol", [
        A("slides", [
          j(">", [
            j(
              "div",
              `
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 `,
            ),
          ]),
        ]),
      ]),
      P("left", [
        A(
          "dots",
          `
 transform: translateY(-50%);
 top: 50%;
 left: 12px;
 flex-direction: column;
 `,
          [
            P("line", [
              A(
                "dot",
                `
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,
                [
                  P(
                    "active",
                    `
 height: var(--n-dot-line-width-active);
 `,
                  ),
                ],
              ),
            ]),
          ],
        ),
        A(
          "dot",
          `
 margin: 4px 0;
 `,
        ),
      ]),
      A(
        "arrow-group",
        `
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `,
      ),
      P("vertical", [
        A(
          "arrow",
          `
 transform: rotate(90deg);
 `,
        ),
      ]),
      P("show-arrow", [
        P("bottom", [
          A(
            "dots",
            `
 transform: translateX(0);
 bottom: 18px;
 left: 18px;
 `,
          ),
        ]),
        P("top", [
          A(
            "dots",
            `
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `,
          ),
        ]),
        P("left", [
          A(
            "dots",
            `
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `,
          ),
        ]),
        P("right", [
          A(
            "dots",
            `
 transform: translateX(0);
 top: 18px;
 right: 18px;
 `,
          ),
        ]),
      ]),
      P("left", [
        A(
          "arrow-group",
          `
 bottom: 12px;
 left: 12px;
 flex-direction: column;
 `,
          [
            j(
              "> *:first-child",
              `
 margin-bottom: 12px;
 `,
            ),
          ],
        ),
      ]),
      P("right", [
        A(
          "dots",
          `
 transform: translateY(-50%);
 top: 50%;
 right: 12px;
 flex-direction: column;
 `,
          [
            P("line", [
              A(
                "dot",
                `
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,
                [
                  P(
                    "active",
                    `
 height: var(--n-dot-line-width-active);
 `,
                  ),
                ],
              ),
            ]),
          ],
        ),
        A(
          "dot",
          `
 margin: 4px 0;
 `,
        ),
        A(
          "arrow-group",
          `
 bottom: 12px;
 right: 12px;
 flex-direction: column;
 `,
          [
            j(
              "> *:first-child",
              `
 margin-bottom: 12px;
 `,
            ),
          ],
        ),
      ]),
      P("top", [
        A(
          "dots",
          `
 transform: translateX(-50%);
 top: 12px;
 left: 50%;
 `,
          [
            P("line", [
              A(
                "dot",
                `
 margin: 0 4px;
 `,
              ),
            ]),
          ],
        ),
        A(
          "dot",
          `
 margin: 0 4px;
 `,
        ),
        A(
          "arrow-group",
          `
 top: 12px;
 right: 12px;
 `,
          [
            j(
              "> *:first-child",
              `
 margin-right: 12px;
 `,
            ),
          ],
        ),
      ]),
      P("bottom", [
        A(
          "dots",
          `
 transform: translateX(-50%);
 bottom: 12px;
 left: 50%;
 `,
          [
            P("line", [
              A(
                "dot",
                `
 margin: 0 4px;
 `,
              ),
            ]),
          ],
        ),
        A(
          "dot",
          `
 margin: 0 4px;
 `,
        ),
        A(
          "arrow-group",
          `
 bottom: 12px;
 right: 12px;
 `,
          [
            j(
              "> *:first-child",
              `
 margin-right: 12px;
 `,
            ),
          ],
        ),
      ]),
      P("fade", [
        A(
          "slide",
          `
 position: absolute;
 left: 50%;
 opacity: 0;
 transform: translateX(-50%);
 transition-property: opacity;
 `,
          [
            P(
              "current",
              `
 opacity: 1;
 `,
            ),
          ],
        ),
      ]),
      P("card", [
        A(
          "slides",
          `
 perspective: 1200px;
 `,
        ),
        A(
          "slide",
          `
 position: absolute;
 left: 50%;
 opacity: 0;
 transform: translateX(-50%) translateZ(-400px);
 transition-property: opacity, transform;
 `,
          [
            P(
              "current",
              `
 opacity: 1;
 transform: translateX(-50%) translateZ(0);
 z-index: 1;
 `,
            ),
            P(
              "prev",
              `
 opacity: 0.4;
 transform: translateX(-100%) translateZ(-200px);
 `,
            ),
            P(
              "next",
              `
 opacity: 0.4;
 transform: translateX(0%) translateZ(-200px);
 `,
            ),
          ],
        ),
      ]),
    ],
  );
const hs = is("transitionDuration", "transitionTimingFunction"),
  vs = Object.assign(Object.assign({}, ne.props), {
    defaultIndex: { type: Number, default: 0 },
    currentIndex: Number,
    showArrow: Boolean,
    dotType: { type: String, default: "dot" },
    dotPlacement: { type: String, default: "bottom" },
    slidesPerView: { type: [Number, String], default: 1 },
    spaceBetween: { type: Number, default: 0 },
    centeredSlides: Boolean,
    direction: { type: String, default: "horizontal" },
    autoplay: Boolean,
    interval: { type: Number, default: 5e3 },
    loop: { type: Boolean, default: !0 },
    effect: { type: String, default: "slide" },
    showDots: { type: Boolean, default: !0 },
    trigger: { type: String, default: "click" },
    transitionStyle: {
      type: Object,
      default: () => ({ transitionDuration: "300ms" }),
    },
    transitionProps: Object,
    draggable: Boolean,
    touchable: { type: Boolean, default: !0 },
    mousewheel: Boolean,
    keyboard: Boolean,
    "onUpdate:currentIndex": Function,
    onUpdateCurrentIndex: Function,
  });
let bt = !1;
var Qs = K({
  name: "Carousel",
  props: vs,
  setup(e) {
    const { mergedClsPrefixRef: t, inlineThemeDisabled: n } = ge(e),
      r = z(null),
      o = z([]),
      a = { value: [] },
      i = S(() => e.effect === "custom"),
      u = S(() => !i.value && e.effect === "slide"),
      l = S(() => e.loop && e.slidesPerView === 1),
      c = S(() => u.value && l.value),
      h = S(() =>
        i.value || e.centeredSlides || e.effect !== "slide"
          ? 1
          : e.slidesPerView,
      ),
      y = S(() => (i.value ? 1 : e.slidesPerView)),
      p = S(
        () =>
          h.value === "auto" ||
          (e.slidesPerView === "auto" && e.centeredSlides),
      ),
      b = S(() => (e.transitionStyle ? xt(e.transitionStyle, hs) : {})),
      m = S(() => (i.value ? 0 : rs(b.value.transitionDuration))),
      f = S(() => e.direction === "vertical"),
      v = S(() => (f.value ? "height" : "width")),
      d = z({ width: 0, height: 0 }),
      w = S(() => {
        const { value: s } = o,
          { length: g } = s;
        if (!g) return [];
        if (p.value) return s.map((I) => yn(I));
        const { value: x } = y,
          { value: E } = d,
          { value: T } = v;
        let $ = E[T];
        if (x !== "auto") {
          const { spaceBetween: I } = e,
            V = $ - (x - 1) * I,
            D = 1 / Math.max(1, x);
          $ = V * D;
        }
        return s.map(() => Object.assign(Object.assign({}, E), { [T]: $ }));
      }),
      B = S(() => {
        const { value: s } = w,
          { length: g } = s;
        if (!g) return [];
        const { centeredSlides: x, spaceBetween: E } = e,
          { value: T } = v,
          { [T]: $ } = d.value;
        let I = 0;
        return s.map(({ [T]: V }) => {
          let D = I;
          return (x && (D += (V - $) / 2), (I += V + E), D);
        });
      });
    let X = !1;
    const Y = S(() => {
        const { value: s } = w,
          { length: g } = s;
        if (!g) return [];
        const { value: x } = v;
        if (i.value) return s.map((D) => ({ [x]: `${D[x]}px` }));
        const { effect: E, spaceBetween: T } = e,
          { value: $ } = f,
          I = $ ? "bottom" : "right",
          V = [];
        for (let D = 0; D < g; D++) {
          const ve = s[D][x],
            Xt = { [x]: `${ve}px`, [`margin-${I}`]: `${T}px` };
          (X && (E === "fade" || E === "card") && Object.assign(Xt, b.value),
            V.push(Xt));
        }
        return V;
      }),
      _ = S(() => {
        const { value: s } = h,
          { length: g } = o.value;
        if (s !== "auto") return g - s + 1;
        {
          const { value: x } = w,
            { length: E } = x;
          if (!E) return g;
          const { value: T } = B,
            { value: $ } = v,
            I = d.value[$];
          let V = x[x.length - 1][$],
            D = E;
          for (; D > 1 && V < I; ) (D--, (V += T[D] - T[D - 1]));
          return (D !== E && D++, D < 1 && (D = 1), D);
        }
      }),
      F = S(() => {
        const { value: s } = _;
        return c.value && s > 3 ? s - 2 : s;
      }),
      O = e.defaultIndex + (c.value ? 1 : 0),
      R = z(xn(O, _.value, c.value)),
      J = z(O),
      N = z(O);
    let k = 0;
    function q(s, g = m.value) {
      var x, E;
      const { value: T } = _;
      if ((s = wn(s, 0, T - 1)) !== N.value) {
        const { value: $ } = R;
        c.value &&
          F.value > 2 &&
          ($ === 0 && s === F.value
            ? (s = 0)
            : $ === F.value - 1 && s === 1 && (s = T - 1));
        const I = (R.value = xn(s, _.value, c.value));
        ((J.value = s),
          (N.value = Cn(I, c.value)),
          u.value ? lt(s, g) : (!i.value && g > 0 && (re = !0), Le()),
          I !== $ &&
            ((x = e["onUpdate:currentIndex"]) === null ||
              x === void 0 ||
              x.call(e, I, $),
            (E = e.onUpdateCurrentIndex) === null ||
              E === void 0 ||
              E.call(e, I, $)));
      }
    }
    function C(s = N.value) {
      return os(s, _.value, e.loop);
    }
    function L(s = N.value) {
      return as(s, _.value, e.loop);
    }
    function U(s) {
      const g = we(s);
      return g !== null && C() === g;
    }
    function be(s) {
      const g = we(s);
      return g !== null && L() === g;
    }
    function he(s) {
      return N.value === we(s);
    }
    function at(s) {
      return R.value === s;
    }
    function Be() {
      return C() === null;
    }
    function kt() {
      return L() === null;
    }
    function ye(s) {
      const g = Cn(s, c.value);
      (s !== R.value || g !== N.value) && q(g);
    }
    function it() {
      const s = C();
      s !== null && q(s);
    }
    function Ne() {
      const s = L();
      s !== null && q(s);
    }
    const st = z({});
    let re = !1;
    function ke(s, g = 0) {
      const x = e.direction === "vertical";
      st.value = Object.assign({}, b.value, {
        transform: x ? `translateY(${-s}px)` : `translateX(${-s}px)`,
        transitionDuration: `${g}ms`,
      });
    }
    function Le(s = 0) {
      u.value ? lt(N.value, s) : k !== 0 && ke((k = 0), s);
    }
    function lt(s, g = m.value) {
      const x = Lt(s);
      (x !== k && g > 0 && (re = !0), ke(x, g), (k = Lt(N.value)));
    }
    function Lt(s) {
      let g;
      return (s >= _.value - 1 ? (g = Vt()) : (g = B.value[s] || 0), g);
    }
    function Vt() {
      if (h.value === "auto") {
        const { value: s } = v,
          { [s]: g } = d.value,
          { value: x } = B,
          E = x[x.length - 1];
        let T;
        if (E === void 0) T = g;
        else {
          const { value: $ } = w;
          T = E + $[$.length - 1][s];
        }
        return T - g;
      } else {
        const { value: s } = B;
        return s[_.value - 1] || 0;
      }
    }
    function tr(s) {
      !s || o.value.push(s);
    }
    function nr(s) {
      if (!s) return;
      const g = we(s);
      g !== -1 && o.value.splice(g, 1);
    }
    function we(s) {
      return typeof s == "number" ? s : o.value.indexOf(s);
    }
    function rr(s) {
      const g = we(s);
      if (g !== -1) return Y.value[g];
    }
    function or(s, g) {
      let E = !re && !(ee & 28);
      (e.effect === "card" &&
        !i.value &&
        !(ee & 8) &&
        !he(s) &&
        (ye(s), (E = !1)),
        E || (g.preventDefault(), g.stopPropagation()));
    }
    const Wt = {
      to: ye,
      prev: () => {
        (!re || !c.value) && it();
      },
      next: () => {
        (!re || !c.value) && Ne();
      },
      isVertical: () => f.value,
      isHorizontal: () => !f.value,
      isPrev: U,
      isNext: be,
      isActive: he,
      isPrevDisabled: Be,
      isNextDisabled: kt,
      getCurrentIndex: () => R.value,
      getSlideIndex: we,
      getSlideStyle: rr,
      addSlide: tr,
      removeSlide: nr,
      onCarouselItemClick: or,
    };
    Me(ot, Wt);
    let Ve = null;
    function xe(s) {
      Ve && (clearInterval(Ve), (Ve = null));
      const { autoplay: g, interval: x } = e;
      g && x && !s && (Ve = setInterval(Ne, x));
    }
    function Rt() {
      const { autoplay: s } = e;
      s ? xe() : F.value < 2 && xe(!0);
    }
    let ut = 0,
      dt = 0,
      se = 0,
      ct = 0,
      ee = 1;
    function ar(s) {
      if (bt) return;
      ((ct = Date.now()),
        (ee = 2),
        (bt = !0),
        xe(!0),
        s.type !== "touchstart" &&
          !s.target.isContentEditable &&
          s.preventDefault());
      const g = bn(s) ? s.touches[0] : s;
      (f.value ? (dt = g.clientY) : (ut = g.clientX),
        e.touchable &&
          (oe("touchmove", document, We),
          oe("touchend", document, Ce),
          oe("touchcancel", document, Ce)),
        e.draggable &&
          (oe("mousemove", document, We), oe("mouseup", document, Ce)));
    }
    function We(s) {
      const { value: g } = f,
        x = g ? "height" : "width",
        E = d.value[x],
        T = bn(s) ? s.touches[0] : s,
        $ = g ? T.clientY - dt : T.clientX - ut;
      ((se = wn($, -E, E)), (ee = 4), u.value && ke(k - se, 0));
    }
    function Ce() {
      const s = Date.now() - ct,
        { value: g } = v,
        { value: x } = N,
        { value: E } = u;
      let T = x;
      if (!re && E && se !== 0) {
        const $ = k - se,
          I = [...B.value.slice(0, _.value - 1), Vt()];
        let V = null;
        for (let D = 0; D < I.length; D++) {
          const ve = Math.abs(I[D] - $);
          if (V !== null && V < ve) break;
          ((V = ve), (T = D));
        }
      }
      if (T === x) {
        const $ = d.value[g];
        se > $ / 2 || se / s > 0.4
          ? (T = C(x))
          : (se < -$ / 2 || se / s < -0.4) && (T = L(x));
      }
      (T !== null && T !== x
        ? ((ee = 8), q(T))
        : (ee & 4 ? (ee = 16) : (ee = 32), Le(m.value)),
        Rt(),
        jt());
    }
    function jt() {
      (ee & 1 || ((bt = !1), ee & 6 && (ee = 1)),
        (ut = 0),
        (dt = 0),
        (se = 0),
        (ct = 0),
        te("touchmove", document, We),
        te("touchend", document, Ce),
        te("touchcancel", document, Ce),
        te("mousemove", document, We),
        te("mouseup", document, Ce));
    }
    function ir() {
      const { value: s } = J,
        { value: g } = N;
      (re && s !== g ? lt(g, 0) : xe(),
        u.value && (st.value.transitionDuration = "0ms"),
        (re = !1));
    }
    function sr(s) {
      if ((s.preventDefault(), re)) return;
      const { value: g } = f;
      let { deltaX: x, deltaY: E } = s;
      s.shiftKey && !x && (x = E);
      const T = -1,
        $ = 1,
        I = (x || E) > 0 ? $ : T;
      let V = 0,
        D = 0;
      g ? (D = I) : (V = I);
      const ve = 10;
      (D * E >= ve || V * x >= ve) &&
        (I === $ && !kt() ? Ne() : I === T && !Be() && it());
    }
    function lr() {
      ((d.value = yn(r.value, !0)), xe());
    }
    function ur() {
      var s, g;
      p.value &&
        ((g = (s = w.effect).scheduler) === null || g === void 0 || g.call(s),
        w.effect.run());
    }
    (et(() => {
      (Bn(Rt), wt(() => (X = !0)));
    }),
      Ae(() => {
        (jt(), xe(!0));
      }),
      Wr(() => {
        const { value: s } = o,
          { value: g } = a,
          x = new Map(),
          E = ($) => (x.has($) ? x.get($) : -1);
        let T = !1;
        for (let $ = 0; $ < s.length; $++) {
          const I = g.findIndex((V) => V.el === s[$]);
          (I !== $ && (T = !0), x.set(s[$], I));
        }
        T && s.sort(($, I) => E($) - E(I));
      }),
      ie(fe(e, "currentIndex"), (s) => s !== void 0 && ye(s)),
      ie(c, () => void wt(() => ye(R.value))),
      ie(B, () => u.value && Le(), { deep: !0 }),
      ie(u, (s) => {
        s ? Le() : ((re = !1), ke((k = 0)));
      }));
    const dr = {
        arrowSlotProps: S(() =>
          Object.assign(
            { total: F.value, currentIndex: R.value },
            xt(Wt, ["to", "prev", "next", "isPrevDisabled", "isNextDisabled"]),
          ),
        ),
        dotSlotProps: S(() => ({
          total: F.value,
          currentIndex: R.value,
          to: ye,
        })),
      },
      cr = { getCurrentIndex: () => R.value, to: ye, prev: it, next: Ne },
      fr = ne("Carousel", "-carousel", ps, ns, e, t),
      Ht = S(() => {
        const {
          common: { cubicBezierEaseInOut: s },
          self: {
            dotSize: g,
            dotColor: x,
            dotColorActive: E,
            dotColorFocus: T,
            dotLineWidth: $,
            dotLineWidthActive: I,
            arrowColor: V,
          },
        } = fr.value;
        return {
          "--n-bezier": s,
          "--n-dot-color": x,
          "--n-dot-color-focus": T,
          "--n-dot-color-active": E,
          "--n-dot-size": g,
          "--n-dot-line-width": $,
          "--n-dot-line-width-active": I,
          "--n-arrow-color": V,
        };
      }),
      Se = n ? Et("carousel", void 0, Ht, e) : void 0;
    return Object.assign(
      Object.assign(
        Object.assign(
          {
            mergedClsPrefix: t,
            selfElRef: r,
            slideVNodes: a,
            duplicatedable: c,
            userWantsControl: i,
            autoSlideSize: p,
            displayIndex: R,
            realIndex: N,
            slideStyles: Y,
            translateStyle: st,
            handleTouchstart: ar,
            handleTransitionEnd: ir,
            handleMousewheel: sr,
            handleResize: lr,
            handleSlideResize: ur,
            isActive: at,
          },
          dr,
        ),
        cr,
      ),
      {
        cssVars: n ? void 0 : Ht,
        themeClass: Se == null ? void 0 : Se.themeClass,
        onRender: Se == null ? void 0 : Se.onRender,
      },
    );
  },
  render() {
    var e;
    const {
        mergedClsPrefix: t,
        showArrow: n,
        userWantsControl: r,
        draggable: o,
        touchable: a,
        slideStyles: i,
        dotType: u,
        dotPlacement: l,
        transitionProps: c = {},
        arrowSlotProps: h,
        dotSlotProps: y,
        $slots: { default: p, dots: b, arrow: m },
      } = this,
      f = (p && Rr(p())) || [];
    let v = ms(f);
    v.length || (v = f.map((w) => M(fs, null, { default: () => Ot(w) })));
    const { length: d } = v;
    return (
      d > 1 &&
        this.duplicatedable &&
        (v.push(Sn(v[0], 0, "append")),
        v.unshift(Sn(v[d - 1], d - 1, "prepend"))),
      (this.slideVNodes.value = v),
      this.autoSlideSize &&
        (v = v.map((w) =>
          M(Jt, { onResize: this.handleSlideResize }, { default: () => w }),
        )),
      (e = this.onRender) === null || e === void 0 || e.call(this),
      M(
        "div",
        {
          ref: "selfElRef",
          class: [
            this.themeClass,
            `${t}-carousel`,
            this.direction === "vertical" && `${t}-carousel--vertical`,
            this.showArrow && `${t}-carousel--show-arrow`,
            `${t}-carousel--${l}`,
            `${t}-carousel--${this.direction}`,
            `${t}-carousel--${this.effect}`,
            r && `${t}-carousel--usercontrol`,
          ],
          style: this.cssVars,
        },
        M(
          Jt,
          { onResize: this.handleResize },
          {
            default: () =>
              M(
                "div",
                {
                  class: `${t}-carousel__slides`,
                  role: "listbox",
                  style: this.translateStyle,
                  onMousedown: o ? this.handleTouchstart : void 0,
                  onTouchstart: a ? this.handleTouchstart : void 0,
                  onWheel: this.mousewheel ? this.handleMousewheel : void 0,
                  onTransitionend: this.handleTransitionEnd,
                },
                r
                  ? v.map((w, B) =>
                      M(
                        "div",
                        { style: i[B], key: B },
                        Ee(M(zn, Object.assign({}, c), { default: () => w }), [
                          [Tt, this.isActive(B)],
                        ]),
                      ),
                    )
                  : v,
              ),
          },
        ),
        this.showDots &&
          en(b, y, () => [
            y.total > 1 &&
              M(ls, {
                key: u + l,
                total: y.total,
                currentIndex: y.currentIndex,
                dotType: u,
                trigger: this.trigger,
                keyboard: this.keyboard,
              }),
          ]),
        n && en(m, h, () => [M(cs, null)]),
      )
    );
  },
});
function ms(e, t = []) {
  return (
    Array.isArray(e) &&
      e.forEach((n) => {
        n.type && n.type.name === "CarouselItem" && t.push(n);
      }),
    t
  );
}
function Sn(e, t, n) {
  return Ot(e, { key: `carousel-item-duplicate-${t}-${n}` });
}
var gs = { padding: "8px 14px" };
const bs = (e) => {
    const { borderRadius: t, boxShadow2: n, baseColor: r } = e;
    return Object.assign(Object.assign({}, gs), {
      borderRadius: t,
      boxShadow: n,
      color: jr(r, "rgba(0, 0, 0, .85)"),
      textColor: r,
    });
  },
  ys = Nn({ name: "Tooltip", common: Fe, peers: { Popover: Gn }, self: bs });
var Jn = ys;
const ws = Nn({ name: "Ellipsis", common: Fe, peers: { Tooltip: Jn } });
var xs = ws;
const Cs = Object.assign(Object.assign({}, Qn), ne.props);
var Ss = K({
    name: "Tooltip",
    props: Cs,
    __popover__: !0,
    setup(e) {
      const t = ne("Tooltip", "-tooltip", void 0, Jn, e),
        n = z(null);
      return Object.assign(
        Object.assign(
          {},
          {
            syncPosition() {
              n.value.syncPosition();
            },
            setShow(o) {
              n.value.setShow(o);
            },
          },
        ),
        {
          popoverRef: n,
          mergedTheme: t,
          popoverThemeOverrides: S(() => t.value.self),
        },
      );
    },
    render() {
      const { mergedTheme: e, internalExtraClass: t } = this;
      return M(
        Ji,
        Object.assign(Object.assign({}, this.$props), {
          theme: e.peers.Popover,
          themeOverrides: e.peerOverrides.Popover,
          builtinThemeOverrides: this.popoverThemeOverrides,
          internalExtraClass: t.concat("tooltip"),
          ref: "popoverRef",
        }),
        this.$slots,
      );
    },
  }),
  $s = ae("ellipsis", { overflow: "hidden" }, [
    Ze(
      "line-clamp",
      `
 white-space: nowrap;
 display: inline-block;
 vertical-align: bottom;
 max-width: 100%;
 `,
    ),
    P(
      "line-clamp",
      `
 display: -webkit-inline-box;
 -webkit-box-orient: vertical;
 `,
    ),
    P(
      "cursor-pointer",
      `
 cursor: pointer;
 `,
    ),
  ]);
function $n(e) {
  return `${e}-ellipsis--line-clamp`;
}
function Mn(e, t) {
  return `${e}-ellipsis--cursor-${t}`;
}
const Ms = Object.assign(Object.assign({}, ne.props), {
  expandTrigger: String,
  lineClamp: [Number, String],
  tooltip: { type: [Boolean, Object], default: !0 },
});
var Ps = K({
  name: "Ellipsis",
  inheritAttrs: !1,
  props: Ms,
  setup(e, { slots: t, attrs: n }) {
    const { mergedClsPrefixRef: r } = ge(e),
      o = ne("Ellipsis", "-ellipsis", $s, xs, e, r),
      a = z(null),
      i = z(null),
      u = z(!1),
      l = S(() => {
        const { lineClamp: f } = e,
          { value: v } = u;
        return f !== void 0
          ? { textOverflow: "", "-webkit-line-clamp": v ? "" : f }
          : { textOverflow: v ? "" : "ellipsis", "-webkit-line-clamp": "" };
      });
    function c() {
      let f = !1;
      const { value: v } = u;
      if (v) return !0;
      const { value: d } = a;
      if (d) {
        const { lineClamp: w } = e;
        (p(d),
          w !== void 0
            ? (f = d.scrollHeight <= d.offsetHeight)
            : (f = d.scrollWidth <= d.offsetWidth),
          b(d, f));
      }
      return f;
    }
    const h = S(() =>
        e.expandTrigger === "click"
          ? () => {
              var f;
              const { value: v } = u;
              (v && ((f = i.value) === null || f === void 0 || f.setShow(!1)),
                (u.value = !v));
            }
          : void 0,
      ),
      y = () =>
        M(
          "span",
          Object.assign(
            {},
            It(n, {
              class: [
                `${r.value}-ellipsis`,
                e.lineClamp !== void 0 ? $n(r.value) : void 0,
                e.expandTrigger === "click" ? Mn(r.value, "pointer") : void 0,
              ],
              style: l.value,
            }),
            {
              ref: "triggerRef",
              onClick: h.value,
              onMouseenter: e.expandTrigger === "click" ? c : void 0,
            },
          ),
          t,
        );
    function p(f) {
      if (!f) return;
      const v = l.value,
        d = $n(r.value);
      e.lineClamp !== void 0 ? m(f, d, "add") : m(f, d, "remove");
      for (const w in v) f.style[w] !== v[w] && (f.style[w] = v[w]);
    }
    function b(f, v) {
      const d = Mn(r.value, "pointer");
      e.expandTrigger === "click" && !v ? m(f, d, "add") : m(f, d, "remove");
    }
    function m(f, v, d) {
      d === "add"
        ? f.classList.contains(v) || f.classList.add(v)
        : f.classList.contains(v) && f.classList.remove(v);
    }
    return {
      mergedTheme: o,
      triggerRef: a,
      tooltipRef: i,
      handleClick: h,
      renderTrigger: y,
      getTooltipDisabled: c,
    };
  },
  render() {
    var e;
    const { tooltip: t, renderTrigger: n, $slots: r } = this;
    if (t) {
      const { mergedTheme: o } = this;
      return M(
        Ss,
        Object.assign({ ref: "tooltipRef", placement: "top" }, t, {
          getDisabled: this.getTooltipDisabled,
          theme: o.peers.Tooltip,
          themeOverrides: o.peerOverrides.Tooltip,
        }),
        {
          trigger: n,
          default: (e = r.tooltip) !== null && e !== void 0 ? e : r.default,
        },
      );
    } else return n();
  },
});
const _s = (e) => {
    const {
      textColorBase: t,
      opacity1: n,
      opacity2: r,
      opacity3: o,
      opacity4: a,
      opacity5: i,
    } = e;
    return {
      color: t,
      opacity1Depth: n,
      opacity2Depth: r,
      opacity3Depth: o,
      opacity4Depth: a,
      opacity5Depth: i,
    };
  },
  As = { name: "Icon", common: Fe, self: _s };
var Ts = As,
  Es = ae(
    "icon",
    `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,
    [
      P("color-transition", { transition: "color .3s var(--n-bezier)" }),
      P("depth", { color: "var(--n-color)" }, [
        j("svg", {
          opacity: "var(--n-opacity)",
          transition: "opacity .3s var(--n-bezier)",
        }),
      ]),
      j("svg", { height: "1em", width: "1em" }),
    ],
  );
const Is = K({
  _n_icon__: !0,
  name: "Icon",
  inheritAttrs: !1,
  props: Object.assign(Object.assign({}, ne.props), {
    depth: [String, Number],
    size: [Number, String],
    color: String,
    component: Object,
  }),
  setup(e) {
    const { mergedClsPrefixRef: t, inlineThemeDisabled: n } = ge(e),
      r = ne("Icon", "-icon", Es, Ts, e, t),
      o = S(() => {
        const { depth: i } = e,
          {
            common: { cubicBezierEaseInOut: u },
            self: l,
          } = r.value;
        if (i !== void 0) {
          const { color: c, [`opacity${i}Depth`]: h } = l;
          return { "--n-bezier": u, "--n-color": c, "--n-opacity": h };
        }
        return { "--n-bezier": u, "--n-color": "", "--n-opacity": "" };
      }),
      a = n
        ? Et(
            "icon",
            S(() => `${e.depth || "d"}`),
            o,
            e,
          )
        : void 0;
    return {
      mergedClsPrefix: t,
      mergedStyle: S(() => {
        const { size: i, color: u } = e;
        return { fontSize: Ge(i), color: u };
      }),
      cssVars: n ? void 0 : o,
      themeClass: a == null ? void 0 : a.themeClass,
      onRender: a == null ? void 0 : a.onRender,
    };
  },
  render() {
    var e;
    const {
      $parent: t,
      depth: n,
      mergedClsPrefix: r,
      component: o,
      onRender: a,
      themeClass: i,
    } = this;
    return (
      !((e = t == null ? void 0 : t.$options) === null || e === void 0) &&
        e._n_icon__ &&
        Hr("icon", "don't wrap `n-icon` inside `n-icon`"),
      a == null || a(),
      M(
        "i",
        It(this.$attrs, {
          role: "img",
          class: [
            `${r}-icon`,
            i,
            {
              [`${r}-icon--depth`]: n,
              [`${r}-icon--color-transition`]: n !== void 0,
            },
          ],
          style: [this.cssVars, this.mergedStyle],
        }),
        o ? M(o) : this.$slots,
      )
    );
  },
});
var Os = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t) n[r] = o;
  return n;
};
function Ds() {
  return Xr.get({ url: "/link-info/" });
}
const Js = K({
  props: { animated: { type: Boolean, default: !1 }, modelValue: null },
  emits: ["update:modelValue", "search"],
  setup(e, { emit: t }) {
    const n = e,
      r = z("");
    function o() {
      (t("update:modelValue", r.value), t("search"));
    }
    const a = Yr({ inputFocus: !1, isHover: !1 }),
      i = S(() =>
        n.animated
          ? a.isHover || a.inputFocus
            ? "!w-214px !px-13px !py-6px !border-1"
            : "!w-0 !p-0 !border-[rgba(0,0,0,0)]"
          : "",
      );
    return (u, l) => {
      const c = Ur("icon-search"),
        h = Is;
      return (
        ue(),
        de(
          "div",
          {
            class: Ln([
              "h-30px rounded-[15px] border-1 border-[#cbcccd] relative w-214px px-13px py-6px flex items-center justify-between duration-300",
              { [Z(i)]: !0 },
            ]),
            style: { transition: "width 250ms" },
            onMouseenter: l[5] || (l[5] = () => (Z(a).isHover = !0)),
            onMouseleave: l[6] || (l[6] = () => (Z(a).isHover = !1)),
          },
          [
            Ee(
              W(
                "input",
                {
                  "onUpdate:modelValue": l[0] || (l[0] = (y) => (r.value = y)),
                  type: "text",
                  class: "border-none h-20px outline-none",
                  onKeypress: l[1] || (l[1] = qr(() => o(), ["enter"])),
                  onFocus: l[2] || (l[2] = () => (Z(a).inputFocus = !0)),
                  onBlur: l[3] || (l[3] = () => (Z(a).inputFocus = !1)),
                },
                null,
                544,
              ),
              [
                [Tt, Z(a).isHover || Z(a).inputFocus],
                [Kr, r.value, void 0, { trim: !0 }],
              ],
            ),
            Ct(
              h,
              {
                class: "cursor-pointer absolute right-13px",
                onClick: l[4] || (l[4] = () => o()),
              },
              { default: kn(() => [Ct(c)]), _: 1 },
            ),
          ],
          34,
        )
      );
    };
  },
});
var el = "/assets/sjkgLogo2.a9b1b466.png";
function tl() {
  const e = z(""),
    t = Dt();
  function n() {
    t.push({
      name: "content",
      query: {
        ...t.currentRoute.value.query,
        detailType: "search",
        key: e.value,
      },
    });
  }
  return { inputValue: e, handleSearch: n };
}
var zs = "/assets/gzh1.7525cb4d.png",
  Fs = "/assets/gzh2.b3acb1b3.png";
const er = (e) => (Qr("data-v-48ffbc48"), (e = e()), Jr(), e),
  Bs = {
    class: "grid footer-bg bg-my-contain bg-bottom px-150px pb-100px reactive",
  },
  Ns = {
    class:
      "nav-list grid grid-cols-6 justify-between gap-x-130px pt-74px border-t-1",
  },
  ks = { class: "mb-[36px]" },
  Ls = ["onClick"],
  Vs = ["onClick"],
  Ws = { key: 0 },
  Rs = ["onClick"],
  js = er(() =>
    W(
      "div",
      { class: "grid grid-rows-2 gap-y-80px min-w-144px" },
      [
        W("img", {
          src: zs,
          alt: "e行高速APP",
          class: "w-144px h-144px",
        }),
        W("img", {
          src: Fs,
          alt: "江苏交通控股党建公众号",
          class: "w-144px h-144px",
        }),
      ],
      -1,
    ),
  ),
  Hs = {
    class:
      "grid grid-rows-2 gap-y-22px bg-[#323334] w-full h-100px pl-140px py-25px",
  },
  Xs = { class: "webInfo" },
  Ys = { class: "flex divide-x" },
  Us = ["onClick"],
  Ks = er(() =>
    W(
      "div",
      {
        class:
          "flex gap-40px text-[#FFFFFF] text-12px font-normal leading-18px",
      },
      [
        W(
          "span",
          { class: "pl-10px" },
          "Copyright \xA9新疆交通投资（集团）有限责任公司",
        ),
        W(
          "span",
          null,
          "新疆交通投资（集团）有限责任公司党委宣传部\xA0\xA0主办",
        ),
        W(
          "a",
          {
            href: "https://beian.miit.gov.cn/#/Integrated/index",
            target: "_blank",
          },
          "新ICP备20000599号",
        ),
        // W(
        //   "a",
        //   {
        //     href: "https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32010202010562",
        //     target: "_blank",
        //   },
        //   "公安备案号\xA0\xA032010202010562",
        // ),
      ],
      -1,
    ),
  ),
  qs = K({
    setup(e) {
      const t = z(),
        { firstMenus: n, jump: r, jump2Second: o } = Gr();
      Bn(() => {
        Ds().then((m) => {
          var f;
          t.value =
            (f = m.find((v) => v.name === "footerLink")) == null
              ? void 0
              : f.linkInfoList;
        });
      });
      const a = [
          "关于我们",
          "新闻中心",
          "业务领域",
          "党的建设",
          "社会责任",
        ],
        i = S(() => {
          var m;
          return (m = n.value) == null
            ? void 0
            : m.filter((f) => a.includes(f.name));
        }),
        u = ["联系我们", "法律声明"],
        l = S(() => n.value.filter((m) => u.includes(m.name))),
        c = z(!1),
        h = 6,
        y = (m) => m.name === "社会责任",
        p = (m) =>
          !y(m) || c.value || !m.menuInfoList
            ? m.menuInfoList
            : m.menuInfoList.slice(0, h),
        b = () => {
          c.value = !c.value;
        };
      return (m, f) => {
        const v = Ps;
        return (
          ue(),
          de(
            je,
            null,
            [
              W("div", Bs, [
                W("div", Ns, [
                  (ue(!0),
                  de(
                    je,
                    null,
                    pt(
                      Z(i),
                      (d) => (
                        ue(),
                        de("div", { key: d.id, class: "min-w-110px" }, [
                          W("p", ks, [
                            W(
                              "a",
                              {
                                class:
                                  "cursor-pointer text-20px font-bold text-[#333333] leading-30px",
                                onClick: He(() => Z(r)(d), ["prevent"]),
                              },
                              Xe(d.name),
                              9,
                              Ls,
                            ),
                          ]),
                          W("ul", null, [
                            (ue(!0),
                            de(
                              je,
                              null,
                              pt(
                                p(d),
                                (w) => (
                                  ue(),
                                  de(
                                    "li",
                                    {
                                      key: w.id,
                                      class:
                                        "text-[#96959A] text-[13px] leading-[26px] hover:text-[#FFF] truncate",
                                      style: { "letter-spacing": "-0.61px" },
                                    },
                                    [
                                      Ct(
                                        v,
                                        {
                                          class:
                                            "cursor-pointer text-17px font-medium text-[#666666] leading-40px",
                                        },
                                        {
                                          default: kn(() => [
                                            W(
                                              "span",
                                              {
                                                onClick: He(
                                                  () => Z(o)(d.id, w.id),
                                                  ["prevent"],
                                                ),
                                              },
                                              Xe(w.name),
                                              9,
                                              Vs,
                                            ),
                                          ]),
                                          _: 2,
                                        },
                                        1024,
                                      ),
                                    ],
                                  )
                                ),
                              ),
                              128,
                            )),
                            y(d) && d.menuInfoList && d.menuInfoList.length > h
                              ? (ue(),
                                de("li", Ws, [
                                  W(
                                    "a",
                                    {
                                      class:
                                        "cursor-pointer text-17px font-medium text-[#3A78F3] leading-40px flex items-center",
                                      onClick: He(b, ["prevent"]),
                                    },
                                    [
                                      Fn(
                                        Xe(
                                          c.value
                                            ? "收起"
                                            : "展开更多",
                                        ) + " ",
                                        1,
                                      ),
                                      W(
                                        "span",
                                        {
                                          class: Ln([
                                            "ml-1 transform",
                                            { "rotate-180": c.value },
                                          ]),
                                        },
                                        "▼",
                                        2,
                                      ),
                                    ],
                                    8,
                                    Rs,
                                  ),
                                ]))
                              : Zr("", !0),
                          ]),
                        ])
                      ),
                    ),
                    128,
                  )),
                  js,
                ]),
              ]),
              W("div", Hs, [
                W("div", Xs, [
                  W("ul", Ys, [
                    (ue(!0),
                    de(
                      je,
                      null,
                      pt(
                        Z(l),
                        (d, w) => (
                          ue(),
                          de(
                            "li",
                            {
                              key: w,
                              class: "px-10px text-[#ffffff] cursor-pointer",
                            },
                            [
                              W(
                                "a",
                                { onClick: He(() => Z(r)(d), ["prevent"]) },
                                Xe(d.name),
                                9,
                                Us,
                              ),
                            ],
                          )
                        ),
                      ),
                      128,
                    )),
                  ]),
                ]),
                Ks,
              ]),
            ],
            64,
          )
        );
      };
    },
  });
var nl = Os(qs, [["__scopeId", "data-v-48ffbc48"]]);
function rl() {
  const e = Dt(),
    t = Vn(),
    n = S(() => t.firstMenuByName("党的建设")),
    r = S(() => {
      var a, i;
      return (i = (a = n.value) == null ? void 0 : a.menuInfoList) == null
        ? void 0
        : i.find((u) => u.name === "青年工作");
    });
  function o() {
    var a, i;
    e.push({
      name: "content",
      query: {
        first: (a = n.value) == null ? void 0 : a.id,
        second: (i = r.value) == null ? void 0 : i.id,
        type: 11,
      },
    });
  }
  return { firstMenu: n, secondMenu: r, jumpQngz: o };
}
function ol() {
  const e = Dt(),
    t = Vn(),
    n = S(() => t.firstMenuByName("党的建设")),
    r = S(() => {
      var a, i;
      return (i = (a = n.value) == null ? void 0 : a.menuInfoList) == null
        ? void 0
        : i.find((u) => u.name === "工会工作");
    });
  function o() {
    var a, i;
    e.push({
      name: "content",
      query: {
        first: (a = n.value) == null ? void 0 : a.id,
        second: (i = r.value) == null ? void 0 : i.id,
        type: 22,
      },
    });
  }
  return { firstMenu: n, secondMenu: r, jumpGhgz: o };
}
export {
  nl as A,
  Is as N,
  Ti as V,
  Os as _,
  Qs as a,
  tl as b,
  Js as c,
  el as d,
  rl as e,
  Ei as f,
  Ds as g,
  Wi as h,
  ao as i,
  Ji as j,
  Qn as k,
  Jn as l,
  Ss as m,
  to as n,
  io as o,
  Gn as p,
  Yi as r,
  ol as t,
  Zs as u,
};
