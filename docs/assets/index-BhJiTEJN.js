var rh = (e) => {
  throw TypeError(e);
};
var Dl = (e, t, n) => t.has(e) || rh("Cannot " + n);
var A = (e, t, n) => (
    Dl(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  J = (e, t, n) =>
    t.has(e)
      ? rh("Cannot add the same private member more than once")
      : t instanceof WeakSet
      ? t.add(e)
      : t.set(e, n),
  H = (e, t, n, r) => (
    Dl(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
  ),
  je = (e, t, n) => (Dl(e, t, "access private method"), n);
var ws = (e, t, n, r) => ({
  set _(i) {
    H(e, t, i, n);
  },
  get _() {
    return A(e, t, r);
  },
});
function i1(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function xg(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var wg = { exports: {} },
  Xa = {},
  Sg = { exports: {} },
  X = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rs = Symbol.for("react.element"),
  o1 = Symbol.for("react.portal"),
  s1 = Symbol.for("react.fragment"),
  a1 = Symbol.for("react.strict_mode"),
  l1 = Symbol.for("react.profiler"),
  u1 = Symbol.for("react.provider"),
  c1 = Symbol.for("react.context"),
  d1 = Symbol.for("react.forward_ref"),
  f1 = Symbol.for("react.suspense"),
  h1 = Symbol.for("react.memo"),
  p1 = Symbol.for("react.lazy"),
  ih = Symbol.iterator;
function m1(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ih && e[ih]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var bg = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Cg = Object.assign,
  Eg = {};
function Fi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Eg),
    (this.updater = n || bg);
}
Fi.prototype.isReactComponent = {};
Fi.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Fi.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Tg() {}
Tg.prototype = Fi.prototype;
function rd(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Eg),
    (this.updater = n || bg);
}
var id = (rd.prototype = new Tg());
id.constructor = rd;
Cg(id, Fi.prototype);
id.isPureReactComponent = !0;
var oh = Array.isArray,
  Pg = Object.prototype.hasOwnProperty,
  od = { current: null },
  kg = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ag(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Pg.call(t, r) && !kg.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: rs,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: od.current,
  };
}
function g1(e, t) {
  return {
    $$typeof: rs,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function sd(e) {
  return typeof e == "object" && e !== null && e.$$typeof === rs;
}
function y1(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var sh = /\/+/g;
function jl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? y1("" + e.key)
    : t.toString(36);
}
function Gs(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case rs:
          case o1:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + jl(s, 0) : r),
      oh(i)
        ? ((n = ""),
          e != null && (n = e.replace(sh, "$&/") + "/"),
          Gs(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (sd(i) &&
            (i = g1(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(sh, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), oh(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var l = r + jl(o, a);
      s += Gs(o, t, n, l, i);
    }
  else if (((l = m1(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (l = r + jl(o, a++)), (s += Gs(o, t, n, l, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function Ss(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Gs(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function v1(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var He = { current: null },
  Qs = { transition: null },
  x1 = {
    ReactCurrentDispatcher: He,
    ReactCurrentBatchConfig: Qs,
    ReactCurrentOwner: od,
  };
function Rg() {
  throw Error("act(...) is not supported in production builds of React.");
}
X.Children = {
  map: Ss,
  forEach: function (e, t, n) {
    Ss(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ss(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ss(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!sd(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
X.Component = Fi;
X.Fragment = s1;
X.Profiler = l1;
X.PureComponent = rd;
X.StrictMode = a1;
X.Suspense = f1;
X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = x1;
X.act = Rg;
X.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Cg({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = od.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Pg.call(t, l) &&
        !kg.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: rs, type: e.type, key: i, ref: o, props: r, _owner: s };
};
X.createContext = function (e) {
  return (
    (e = {
      $$typeof: c1,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: u1, _context: e }),
    (e.Consumer = e)
  );
};
X.createElement = Ag;
X.createFactory = function (e) {
  var t = Ag.bind(null, e);
  return (t.type = e), t;
};
X.createRef = function () {
  return { current: null };
};
X.forwardRef = function (e) {
  return { $$typeof: d1, render: e };
};
X.isValidElement = sd;
X.lazy = function (e) {
  return { $$typeof: p1, _payload: { _status: -1, _result: e }, _init: v1 };
};
X.memo = function (e, t) {
  return { $$typeof: h1, type: e, compare: t === void 0 ? null : t };
};
X.startTransition = function (e) {
  var t = Qs.transition;
  Qs.transition = {};
  try {
    e();
  } finally {
    Qs.transition = t;
  }
};
X.unstable_act = Rg;
X.useCallback = function (e, t) {
  return He.current.useCallback(e, t);
};
X.useContext = function (e) {
  return He.current.useContext(e);
};
X.useDebugValue = function () {};
X.useDeferredValue = function (e) {
  return He.current.useDeferredValue(e);
};
X.useEffect = function (e, t) {
  return He.current.useEffect(e, t);
};
X.useId = function () {
  return He.current.useId();
};
X.useImperativeHandle = function (e, t, n) {
  return He.current.useImperativeHandle(e, t, n);
};
X.useInsertionEffect = function (e, t) {
  return He.current.useInsertionEffect(e, t);
};
X.useLayoutEffect = function (e, t) {
  return He.current.useLayoutEffect(e, t);
};
X.useMemo = function (e, t) {
  return He.current.useMemo(e, t);
};
X.useReducer = function (e, t, n) {
  return He.current.useReducer(e, t, n);
};
X.useRef = function (e) {
  return He.current.useRef(e);
};
X.useState = function (e) {
  return He.current.useState(e);
};
X.useSyncExternalStore = function (e, t, n) {
  return He.current.useSyncExternalStore(e, t, n);
};
X.useTransition = function () {
  return He.current.useTransition();
};
X.version = "18.3.1";
Sg.exports = X;
var w = Sg.exports;
const j = xg(w),
  Ng = i1({ __proto__: null, default: j }, [w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var w1 = w,
  S1 = Symbol.for("react.element"),
  b1 = Symbol.for("react.fragment"),
  C1 = Object.prototype.hasOwnProperty,
  E1 = w1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  T1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Mg(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) C1.call(t, r) && !T1.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: S1,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: E1.current,
  };
}
Xa.Fragment = b1;
Xa.jsx = Mg;
Xa.jsxs = Mg;
wg.exports = Xa;
var S = wg.exports,
  Dg = { exports: {} },
  ut = {},
  jg = { exports: {} },
  Og = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(k, R) {
    var L = k.length;
    k.push(R);
    e: for (; 0 < L; ) {
      var U = (L - 1) >>> 1,
        z = k[U];
      if (0 < i(z, R)) (k[U] = R), (k[L] = z), (L = U);
      else break e;
    }
  }
  function n(k) {
    return k.length === 0 ? null : k[0];
  }
  function r(k) {
    if (k.length === 0) return null;
    var R = k[0],
      L = k.pop();
    if (L !== R) {
      k[0] = L;
      e: for (var U = 0, z = k.length, Y = z >>> 1; U < Y; ) {
        var q = 2 * (U + 1) - 1,
          we = k[q],
          De = q + 1,
          ee = k[De];
        if (0 > i(we, L))
          De < z && 0 > i(ee, we)
            ? ((k[U] = ee), (k[De] = L), (U = De))
            : ((k[U] = we), (k[q] = L), (U = q));
        else if (De < z && 0 > i(ee, L)) (k[U] = ee), (k[De] = L), (U = De);
        else break e;
      }
    }
    return R;
  }
  function i(k, R) {
    var L = k.sortIndex - R.sortIndex;
    return L !== 0 ? L : k.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    h = !1,
    v = !1,
    g = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(k) {
    for (var R = n(u); R !== null; ) {
      if (R.callback === null) r(u);
      else if (R.startTime <= k)
        r(u), (R.sortIndex = R.expirationTime), t(l, R);
      else break;
      R = n(u);
    }
  }
  function b(k) {
    if (((g = !1), y(k), !v))
      if (n(l) !== null) (v = !0), $(C);
      else {
        var R = n(u);
        R !== null && _(b, R.startTime - k);
      }
  }
  function C(k, R) {
    (v = !1), g && ((g = !1), m(P), (P = -1)), (h = !0);
    var L = f;
    try {
      for (
        y(R), d = n(l);
        d !== null && (!(d.expirationTime > R) || (k && !F()));

      ) {
        var U = d.callback;
        if (typeof U == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var z = U(d.expirationTime <= R);
          (R = e.unstable_now()),
            typeof z == "function" ? (d.callback = z) : d === n(l) && r(l),
            y(R);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var Y = !0;
      else {
        var q = n(u);
        q !== null && _(b, q.startTime - R), (Y = !1);
      }
      return Y;
    } finally {
      (d = null), (f = L), (h = !1);
    }
  }
  var E = !1,
    T = null,
    P = -1,
    M = 5,
    N = -1;
  function F() {
    return !(e.unstable_now() - N < M);
  }
  function I() {
    if (T !== null) {
      var k = e.unstable_now();
      N = k;
      var R = !0;
      try {
        R = T(!0, k);
      } finally {
        R ? G() : ((E = !1), (T = null));
      }
    } else E = !1;
  }
  var G;
  if (typeof p == "function")
    G = function () {
      p(I);
    };
  else if (typeof MessageChannel < "u") {
    var O = new MessageChannel(),
      Q = O.port2;
    (O.port1.onmessage = I),
      (G = function () {
        Q.postMessage(null);
      });
  } else
    G = function () {
      x(I, 0);
    };
  function $(k) {
    (T = k), E || ((E = !0), G());
  }
  function _(k, R) {
    P = x(function () {
      k(e.unstable_now());
    }, R);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (k) {
      k.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || h || ((v = !0), $(C));
    }),
    (e.unstable_forceFrameRate = function (k) {
      0 > k || 125 < k
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (M = 0 < k ? Math.floor(1e3 / k) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (k) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = f;
      }
      var L = f;
      f = R;
      try {
        return k();
      } finally {
        f = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (k, R) {
      switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          k = 3;
      }
      var L = f;
      f = k;
      try {
        return R();
      } finally {
        f = L;
      }
    }),
    (e.unstable_scheduleCallback = function (k, R, L) {
      var U = e.unstable_now();
      switch (
        (typeof L == "object" && L !== null
          ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? U + L : U))
          : (L = U),
        k)
      ) {
        case 1:
          var z = -1;
          break;
        case 2:
          z = 250;
          break;
        case 5:
          z = 1073741823;
          break;
        case 4:
          z = 1e4;
          break;
        default:
          z = 5e3;
      }
      return (
        (z = L + z),
        (k = {
          id: c++,
          callback: R,
          priorityLevel: k,
          startTime: L,
          expirationTime: z,
          sortIndex: -1,
        }),
        L > U
          ? ((k.sortIndex = L),
            t(u, k),
            n(l) === null &&
              k === n(u) &&
              (g ? (m(P), (P = -1)) : (g = !0), _(b, L - U)))
          : ((k.sortIndex = z), t(l, k), v || h || ((v = !0), $(C))),
        k
      );
    }),
    (e.unstable_shouldYield = F),
    (e.unstable_wrapCallback = function (k) {
      var R = f;
      return function () {
        var L = f;
        f = R;
        try {
          return k.apply(this, arguments);
        } finally {
          f = L;
        }
      };
    });
})(Og);
jg.exports = Og;
var P1 = jg.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var k1 = w,
  lt = P1;
function D(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Lg = new Set(),
  Ao = {};
function _r(e, t) {
  Ai(e, t), Ai(e + "Capture", t);
}
function Ai(e, t) {
  for (Ao[e] = t, e = 0; e < t.length; e++) Lg.add(t[e]);
}
var dn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ku = Object.prototype.hasOwnProperty,
  A1 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ah = {},
  lh = {};
function R1(e) {
  return ku.call(lh, e)
    ? !0
    : ku.call(ah, e)
    ? !1
    : A1.test(e)
    ? (lh[e] = !0)
    : ((ah[e] = !0), !1);
}
function N1(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function M1(e, t, n, r) {
  if (t === null || typeof t > "u" || N1(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ke(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var Me = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Me[e] = new Ke(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Me[t] = new Ke(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Me[e] = new Ke(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Me[e] = new Ke(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Me[e] = new Ke(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Me[e] = new Ke(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Me[e] = new Ke(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Me[e] = new Ke(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Me[e] = new Ke(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ad = /[\-:]([a-z])/g;
function ld(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ad, ld);
    Me[t] = new Ke(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ad, ld);
    Me[t] = new Ke(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ad, ld);
  Me[t] = new Ke(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Me[e] = new Ke(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Me.xlinkHref = new Ke(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Me[e] = new Ke(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ud(e, t, n, r) {
  var i = Me.hasOwnProperty(t) ? Me[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (M1(t, n, i, r) && (n = null),
    r || i === null
      ? R1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var wn = k1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  bs = Symbol.for("react.element"),
  Gr = Symbol.for("react.portal"),
  Qr = Symbol.for("react.fragment"),
  cd = Symbol.for("react.strict_mode"),
  Au = Symbol.for("react.profiler"),
  Ig = Symbol.for("react.provider"),
  Vg = Symbol.for("react.context"),
  dd = Symbol.for("react.forward_ref"),
  Ru = Symbol.for("react.suspense"),
  Nu = Symbol.for("react.suspense_list"),
  fd = Symbol.for("react.memo"),
  Dn = Symbol.for("react.lazy"),
  _g = Symbol.for("react.offscreen"),
  uh = Symbol.iterator;
function Xi(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (uh && e[uh]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var pe = Object.assign,
  Ol;
function ao(e) {
  if (Ol === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ol = (t && t[1]) || "";
    }
  return (
    `
` +
    Ol +
    e
  );
}
var Ll = !1;
function Il(e, t) {
  if (!e || Ll) return "";
  Ll = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          a = o.length - 1;
        1 <= s && 0 <= a && i[s] !== o[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (i[s] !== o[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || i[s] !== o[a])) {
                var l =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (Ll = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? ao(e) : "";
}
function D1(e) {
  switch (e.tag) {
    case 5:
      return ao(e.type);
    case 16:
      return ao("Lazy");
    case 13:
      return ao("Suspense");
    case 19:
      return ao("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Il(e.type, !1)), e;
    case 11:
      return (e = Il(e.type.render, !1)), e;
    case 1:
      return (e = Il(e.type, !0)), e;
    default:
      return "";
  }
}
function Mu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Qr:
      return "Fragment";
    case Gr:
      return "Portal";
    case Au:
      return "Profiler";
    case cd:
      return "StrictMode";
    case Ru:
      return "Suspense";
    case Nu:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Vg:
        return (e.displayName || "Context") + ".Consumer";
      case Ig:
        return (e._context.displayName || "Context") + ".Provider";
      case dd:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case fd:
        return (
          (t = e.displayName || null), t !== null ? t : Mu(e.type) || "Memo"
        );
      case Dn:
        (t = e._payload), (e = e._init);
        try {
          return Mu(e(t));
        } catch {}
    }
  return null;
}
function j1(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Mu(t);
    case 8:
      return t === cd ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Zn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Fg(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function O1(e) {
  var t = Fg(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Cs(e) {
  e._valueTracker || (e._valueTracker = O1(e));
}
function zg(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Fg(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function fa(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Du(e, t) {
  var n = t.checked;
  return pe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ch(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Zn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Bg(e, t) {
  (t = t.checked), t != null && ud(e, "checked", t, !1);
}
function ju(e, t) {
  Bg(e, t);
  var n = Zn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ou(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ou(e, t.type, Zn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function dh(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Ou(e, t, n) {
  (t !== "number" || fa(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var lo = Array.isArray;
function ci(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Zn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Lu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(D(91));
  return pe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function fh(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(D(92));
      if (lo(n)) {
        if (1 < n.length) throw Error(D(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Zn(n) };
}
function $g(e, t) {
  var n = Zn(t.value),
    r = Zn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function hh(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ug(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Iu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ug(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Es,
  Wg = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Es = Es || document.createElement("div"),
          Es.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Es.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ro(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ho = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  L1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(ho).forEach(function (e) {
  L1.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ho[t] = ho[e]);
  });
});
function Hg(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ho.hasOwnProperty(e) && ho[e])
    ? ("" + t).trim()
    : t + "px";
}
function Kg(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Hg(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var I1 = pe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Vu(e, t) {
  if (t) {
    if (I1[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(D(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(D(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(D(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(D(62));
  }
}
function _u(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Fu = null;
function hd(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var zu = null,
  di = null,
  fi = null;
function ph(e) {
  if ((e = ss(e))) {
    if (typeof zu != "function") throw Error(D(280));
    var t = e.stateNode;
    t && ((t = tl(t)), zu(e.stateNode, e.type, t));
  }
}
function Gg(e) {
  di ? (fi ? fi.push(e) : (fi = [e])) : (di = e);
}
function Qg() {
  if (di) {
    var e = di,
      t = fi;
    if (((fi = di = null), ph(e), t)) for (e = 0; e < t.length; e++) ph(t[e]);
  }
}
function Yg(e, t) {
  return e(t);
}
function Xg() {}
var Vl = !1;
function qg(e, t, n) {
  if (Vl) return e(t, n);
  Vl = !0;
  try {
    return Yg(e, t, n);
  } finally {
    (Vl = !1), (di !== null || fi !== null) && (Xg(), Qg());
  }
}
function No(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = tl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(D(231, t, typeof n));
  return n;
}
var Bu = !1;
if (dn)
  try {
    var qi = {};
    Object.defineProperty(qi, "passive", {
      get: function () {
        Bu = !0;
      },
    }),
      window.addEventListener("test", qi, qi),
      window.removeEventListener("test", qi, qi);
  } catch {
    Bu = !1;
  }
function V1(e, t, n, r, i, o, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var po = !1,
  ha = null,
  pa = !1,
  $u = null,
  _1 = {
    onError: function (e) {
      (po = !0), (ha = e);
    },
  };
function F1(e, t, n, r, i, o, s, a, l) {
  (po = !1), (ha = null), V1.apply(_1, arguments);
}
function z1(e, t, n, r, i, o, s, a, l) {
  if ((F1.apply(this, arguments), po)) {
    if (po) {
      var u = ha;
      (po = !1), (ha = null);
    } else throw Error(D(198));
    pa || ((pa = !0), ($u = u));
  }
}
function Fr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Zg(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function mh(e) {
  if (Fr(e) !== e) throw Error(D(188));
}
function B1(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Fr(e)), t === null)) throw Error(D(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return mh(i), e;
        if (o === r) return mh(i), t;
        o = o.sibling;
      }
      throw Error(D(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (a === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = o.child; a; ) {
          if (a === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (a === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(D(189));
      }
    }
    if (n.alternate !== r) throw Error(D(190));
  }
  if (n.tag !== 3) throw Error(D(188));
  return n.stateNode.current === n ? e : t;
}
function Jg(e) {
  return (e = B1(e)), e !== null ? ey(e) : null;
}
function ey(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ey(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ty = lt.unstable_scheduleCallback,
  gh = lt.unstable_cancelCallback,
  $1 = lt.unstable_shouldYield,
  U1 = lt.unstable_requestPaint,
  xe = lt.unstable_now,
  W1 = lt.unstable_getCurrentPriorityLevel,
  pd = lt.unstable_ImmediatePriority,
  ny = lt.unstable_UserBlockingPriority,
  ma = lt.unstable_NormalPriority,
  H1 = lt.unstable_LowPriority,
  ry = lt.unstable_IdlePriority,
  qa = null,
  Yt = null;
function K1(e) {
  if (Yt && typeof Yt.onCommitFiberRoot == "function")
    try {
      Yt.onCommitFiberRoot(qa, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Lt = Math.clz32 ? Math.clz32 : Y1,
  G1 = Math.log,
  Q1 = Math.LN2;
function Y1(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((G1(e) / Q1) | 0)) | 0;
}
var Ts = 64,
  Ps = 4194304;
function uo(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ga(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (r = uo(a)) : ((o &= s), o !== 0 && (r = uo(o)));
  } else (s = n & ~i), s !== 0 ? (r = uo(s)) : o !== 0 && (r = uo(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Lt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function X1(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function q1(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - Lt(o),
      a = 1 << s,
      l = i[s];
    l === -1
      ? (!(a & n) || a & r) && (i[s] = X1(a, t))
      : l <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function Uu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function iy() {
  var e = Ts;
  return (Ts <<= 1), !(Ts & 4194240) && (Ts = 64), e;
}
function _l(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function is(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Lt(t)),
    (e[t] = n);
}
function Z1(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Lt(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function md(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Lt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var te = 0;
function oy(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var sy,
  gd,
  ay,
  ly,
  uy,
  Wu = !1,
  ks = [],
  Wn = null,
  Hn = null,
  Kn = null,
  Mo = new Map(),
  Do = new Map(),
  On = [],
  J1 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function yh(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Wn = null;
      break;
    case "dragenter":
    case "dragleave":
      Hn = null;
      break;
    case "mouseover":
    case "mouseout":
      Kn = null;
      break;
    case "pointerover":
    case "pointerout":
      Mo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Do.delete(t.pointerId);
  }
}
function Zi(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = ss(t)), t !== null && gd(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function eS(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Wn = Zi(Wn, e, t, n, r, i)), !0;
    case "dragenter":
      return (Hn = Zi(Hn, e, t, n, r, i)), !0;
    case "mouseover":
      return (Kn = Zi(Kn, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Mo.set(o, Zi(Mo.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Do.set(o, Zi(Do.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function cy(e) {
  var t = yr(e.target);
  if (t !== null) {
    var n = Fr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Zg(n)), t !== null)) {
          (e.blockedOn = t),
            uy(e.priority, function () {
              ay(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ys(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Hu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Fu = r), n.target.dispatchEvent(r), (Fu = null);
    } else return (t = ss(n)), t !== null && gd(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function vh(e, t, n) {
  Ys(e) && n.delete(t);
}
function tS() {
  (Wu = !1),
    Wn !== null && Ys(Wn) && (Wn = null),
    Hn !== null && Ys(Hn) && (Hn = null),
    Kn !== null && Ys(Kn) && (Kn = null),
    Mo.forEach(vh),
    Do.forEach(vh);
}
function Ji(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Wu ||
      ((Wu = !0),
      lt.unstable_scheduleCallback(lt.unstable_NormalPriority, tS)));
}
function jo(e) {
  function t(i) {
    return Ji(i, e);
  }
  if (0 < ks.length) {
    Ji(ks[0], e);
    for (var n = 1; n < ks.length; n++) {
      var r = ks[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Wn !== null && Ji(Wn, e),
      Hn !== null && Ji(Hn, e),
      Kn !== null && Ji(Kn, e),
      Mo.forEach(t),
      Do.forEach(t),
      n = 0;
    n < On.length;
    n++
  )
    (r = On[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < On.length && ((n = On[0]), n.blockedOn === null); )
    cy(n), n.blockedOn === null && On.shift();
}
var hi = wn.ReactCurrentBatchConfig,
  ya = !0;
function nS(e, t, n, r) {
  var i = te,
    o = hi.transition;
  hi.transition = null;
  try {
    (te = 1), yd(e, t, n, r);
  } finally {
    (te = i), (hi.transition = o);
  }
}
function rS(e, t, n, r) {
  var i = te,
    o = hi.transition;
  hi.transition = null;
  try {
    (te = 4), yd(e, t, n, r);
  } finally {
    (te = i), (hi.transition = o);
  }
}
function yd(e, t, n, r) {
  if (ya) {
    var i = Hu(e, t, n, r);
    if (i === null) Ql(e, t, r, va, n), yh(e, r);
    else if (eS(i, e, t, n, r)) r.stopPropagation();
    else if ((yh(e, r), t & 4 && -1 < J1.indexOf(e))) {
      for (; i !== null; ) {
        var o = ss(i);
        if (
          (o !== null && sy(o),
          (o = Hu(e, t, n, r)),
          o === null && Ql(e, t, r, va, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Ql(e, t, r, null, n);
  }
}
var va = null;
function Hu(e, t, n, r) {
  if (((va = null), (e = hd(r)), (e = yr(e)), e !== null))
    if (((t = Fr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Zg(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (va = e), null;
}
function dy(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (W1()) {
        case pd:
          return 1;
        case ny:
          return 4;
        case ma:
        case H1:
          return 16;
        case ry:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Bn = null,
  vd = null,
  Xs = null;
function fy() {
  if (Xs) return Xs;
  var e,
    t = vd,
    n = t.length,
    r,
    i = "value" in Bn ? Bn.value : Bn.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (Xs = i.slice(e, 1 < r ? 1 - r : void 0));
}
function qs(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function As() {
  return !0;
}
function xh() {
  return !1;
}
function ct(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? As
        : xh),
      (this.isPropagationStopped = xh),
      this
    );
  }
  return (
    pe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = As));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = As));
      },
      persist: function () {},
      isPersistent: As,
    }),
    t
  );
}
var zi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  xd = ct(zi),
  os = pe({}, zi, { view: 0, detail: 0 }),
  iS = ct(os),
  Fl,
  zl,
  eo,
  Za = pe({}, os, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: wd,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== eo &&
            (eo && e.type === "mousemove"
              ? ((Fl = e.screenX - eo.screenX), (zl = e.screenY - eo.screenY))
              : (zl = Fl = 0),
            (eo = e)),
          Fl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : zl;
    },
  }),
  wh = ct(Za),
  oS = pe({}, Za, { dataTransfer: 0 }),
  sS = ct(oS),
  aS = pe({}, os, { relatedTarget: 0 }),
  Bl = ct(aS),
  lS = pe({}, zi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  uS = ct(lS),
  cS = pe({}, zi, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  dS = ct(cS),
  fS = pe({}, zi, { data: 0 }),
  Sh = ct(fS),
  hS = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  pS = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  mS = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function gS(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = mS[e]) ? !!t[e] : !1;
}
function wd() {
  return gS;
}
var yS = pe({}, os, {
    key: function (e) {
      if (e.key) {
        var t = hS[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = qs(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? pS[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: wd,
    charCode: function (e) {
      return e.type === "keypress" ? qs(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? qs(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  vS = ct(yS),
  xS = pe({}, Za, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  bh = ct(xS),
  wS = pe({}, os, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: wd,
  }),
  SS = ct(wS),
  bS = pe({}, zi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  CS = ct(bS),
  ES = pe({}, Za, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  TS = ct(ES),
  PS = [9, 13, 27, 32],
  Sd = dn && "CompositionEvent" in window,
  mo = null;
dn && "documentMode" in document && (mo = document.documentMode);
var kS = dn && "TextEvent" in window && !mo,
  hy = dn && (!Sd || (mo && 8 < mo && 11 >= mo)),
  Ch = " ",
  Eh = !1;
function py(e, t) {
  switch (e) {
    case "keyup":
      return PS.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function my(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Yr = !1;
function AS(e, t) {
  switch (e) {
    case "compositionend":
      return my(t);
    case "keypress":
      return t.which !== 32 ? null : ((Eh = !0), Ch);
    case "textInput":
      return (e = t.data), e === Ch && Eh ? null : e;
    default:
      return null;
  }
}
function RS(e, t) {
  if (Yr)
    return e === "compositionend" || (!Sd && py(e, t))
      ? ((e = fy()), (Xs = vd = Bn = null), (Yr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return hy && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var NS = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Th(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!NS[e.type] : t === "textarea";
}
function gy(e, t, n, r) {
  Gg(r),
    (t = xa(t, "onChange")),
    0 < t.length &&
      ((n = new xd("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var go = null,
  Oo = null;
function MS(e) {
  ky(e, 0);
}
function Ja(e) {
  var t = Zr(e);
  if (zg(t)) return e;
}
function DS(e, t) {
  if (e === "change") return t;
}
var yy = !1;
if (dn) {
  var $l;
  if (dn) {
    var Ul = "oninput" in document;
    if (!Ul) {
      var Ph = document.createElement("div");
      Ph.setAttribute("oninput", "return;"),
        (Ul = typeof Ph.oninput == "function");
    }
    $l = Ul;
  } else $l = !1;
  yy = $l && (!document.documentMode || 9 < document.documentMode);
}
function kh() {
  go && (go.detachEvent("onpropertychange", vy), (Oo = go = null));
}
function vy(e) {
  if (e.propertyName === "value" && Ja(Oo)) {
    var t = [];
    gy(t, Oo, e, hd(e)), qg(MS, t);
  }
}
function jS(e, t, n) {
  e === "focusin"
    ? (kh(), (go = t), (Oo = n), go.attachEvent("onpropertychange", vy))
    : e === "focusout" && kh();
}
function OS(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ja(Oo);
}
function LS(e, t) {
  if (e === "click") return Ja(t);
}
function IS(e, t) {
  if (e === "input" || e === "change") return Ja(t);
}
function VS(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Vt = typeof Object.is == "function" ? Object.is : VS;
function Lo(e, t) {
  if (Vt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!ku.call(t, i) || !Vt(e[i], t[i])) return !1;
  }
  return !0;
}
function Ah(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Rh(e, t) {
  var n = Ah(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Ah(n);
  }
}
function xy(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? xy(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function wy() {
  for (var e = window, t = fa(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = fa(e.document);
  }
  return t;
}
function bd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function _S(e) {
  var t = wy(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    xy(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && bd(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Rh(n, o));
        var s = Rh(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var FS = dn && "documentMode" in document && 11 >= document.documentMode,
  Xr = null,
  Ku = null,
  yo = null,
  Gu = !1;
function Nh(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Gu ||
    Xr == null ||
    Xr !== fa(r) ||
    ((r = Xr),
    "selectionStart" in r && bd(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (yo && Lo(yo, r)) ||
      ((yo = r),
      (r = xa(Ku, "onSelect")),
      0 < r.length &&
        ((t = new xd("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Xr))));
}
function Rs(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var qr = {
    animationend: Rs("Animation", "AnimationEnd"),
    animationiteration: Rs("Animation", "AnimationIteration"),
    animationstart: Rs("Animation", "AnimationStart"),
    transitionend: Rs("Transition", "TransitionEnd"),
  },
  Wl = {},
  Sy = {};
dn &&
  ((Sy = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete qr.animationend.animation,
    delete qr.animationiteration.animation,
    delete qr.animationstart.animation),
  "TransitionEvent" in window || delete qr.transitionend.transition);
function el(e) {
  if (Wl[e]) return Wl[e];
  if (!qr[e]) return e;
  var t = qr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Sy) return (Wl[e] = t[n]);
  return e;
}
var by = el("animationend"),
  Cy = el("animationiteration"),
  Ey = el("animationstart"),
  Ty = el("transitionend"),
  Py = new Map(),
  Mh =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function sr(e, t) {
  Py.set(e, t), _r(t, [e]);
}
for (var Hl = 0; Hl < Mh.length; Hl++) {
  var Kl = Mh[Hl],
    zS = Kl.toLowerCase(),
    BS = Kl[0].toUpperCase() + Kl.slice(1);
  sr(zS, "on" + BS);
}
sr(by, "onAnimationEnd");
sr(Cy, "onAnimationIteration");
sr(Ey, "onAnimationStart");
sr("dblclick", "onDoubleClick");
sr("focusin", "onFocus");
sr("focusout", "onBlur");
sr(Ty, "onTransitionEnd");
Ai("onMouseEnter", ["mouseout", "mouseover"]);
Ai("onMouseLeave", ["mouseout", "mouseover"]);
Ai("onPointerEnter", ["pointerout", "pointerover"]);
Ai("onPointerLeave", ["pointerout", "pointerover"]);
_r(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
_r(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
_r("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
_r(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
_r(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
_r(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var co =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  $S = new Set("cancel close invalid load scroll toggle".split(" ").concat(co));
function Dh(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), z1(r, t, void 0, e), (e.currentTarget = null);
}
function ky(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== o && i.isPropagationStopped())) break e;
          Dh(i, a, u), (o = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== o && i.isPropagationStopped())
          )
            break e;
          Dh(i, a, u), (o = l);
        }
    }
  }
  if (pa) throw ((e = $u), (pa = !1), ($u = null), e);
}
function se(e, t) {
  var n = t[Zu];
  n === void 0 && (n = t[Zu] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ay(t, e, 2, !1), n.add(r));
}
function Gl(e, t, n) {
  var r = 0;
  t && (r |= 4), Ay(n, e, r, t);
}
var Ns = "_reactListening" + Math.random().toString(36).slice(2);
function Io(e) {
  if (!e[Ns]) {
    (e[Ns] = !0),
      Lg.forEach(function (n) {
        n !== "selectionchange" && ($S.has(n) || Gl(n, !1, e), Gl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ns] || ((t[Ns] = !0), Gl("selectionchange", !1, t));
  }
}
function Ay(e, t, n, r) {
  switch (dy(t)) {
    case 1:
      var i = nS;
      break;
    case 4:
      i = rS;
      break;
    default:
      i = yd;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Bu ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Ql(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = yr(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = o = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  qg(function () {
    var u = o,
      c = hd(n),
      d = [];
    e: {
      var f = Py.get(e);
      if (f !== void 0) {
        var h = xd,
          v = e;
        switch (e) {
          case "keypress":
            if (qs(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = vS;
            break;
          case "focusin":
            (v = "focus"), (h = Bl);
            break;
          case "focusout":
            (v = "blur"), (h = Bl);
            break;
          case "beforeblur":
          case "afterblur":
            h = Bl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = wh;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = sS;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = SS;
            break;
          case by:
          case Cy:
          case Ey:
            h = uS;
            break;
          case Ty:
            h = CS;
            break;
          case "scroll":
            h = iS;
            break;
          case "wheel":
            h = TS;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = dS;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = bh;
        }
        var g = (t & 4) !== 0,
          x = !g && e === "scroll",
          m = g ? (f !== null ? f + "Capture" : null) : f;
        g = [];
        for (var p = u, y; p !== null; ) {
          y = p;
          var b = y.stateNode;
          if (
            (y.tag === 5 &&
              b !== null &&
              ((y = b),
              m !== null && ((b = No(p, m)), b != null && g.push(Vo(p, b, y)))),
            x)
          )
            break;
          p = p.return;
        }
        0 < g.length &&
          ((f = new h(f, v, null, n, c)), d.push({ event: f, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (h = e === "mouseout" || e === "pointerout"),
          f &&
            n !== Fu &&
            (v = n.relatedTarget || n.fromElement) &&
            (yr(v) || v[fn]))
        )
          break e;
        if (
          (h || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          h
            ? ((v = n.relatedTarget || n.toElement),
              (h = u),
              (v = v ? yr(v) : null),
              v !== null &&
                ((x = Fr(v)), v !== x || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((h = null), (v = u)),
          h !== v)
        ) {
          if (
            ((g = wh),
            (b = "onMouseLeave"),
            (m = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = bh),
              (b = "onPointerLeave"),
              (m = "onPointerEnter"),
              (p = "pointer")),
            (x = h == null ? f : Zr(h)),
            (y = v == null ? f : Zr(v)),
            (f = new g(b, p + "leave", h, n, c)),
            (f.target = x),
            (f.relatedTarget = y),
            (b = null),
            yr(c) === u &&
              ((g = new g(m, p + "enter", v, n, c)),
              (g.target = y),
              (g.relatedTarget = x),
              (b = g)),
            (x = b),
            h && v)
          )
            t: {
              for (g = h, m = v, p = 0, y = g; y; y = Kr(y)) p++;
              for (y = 0, b = m; b; b = Kr(b)) y++;
              for (; 0 < p - y; ) (g = Kr(g)), p--;
              for (; 0 < y - p; ) (m = Kr(m)), y--;
              for (; p--; ) {
                if (g === m || (m !== null && g === m.alternate)) break t;
                (g = Kr(g)), (m = Kr(m));
              }
              g = null;
            }
          else g = null;
          h !== null && jh(d, f, h, g, !1),
            v !== null && x !== null && jh(d, x, v, g, !0);
        }
      }
      e: {
        if (
          ((f = u ? Zr(u) : window),
          (h = f.nodeName && f.nodeName.toLowerCase()),
          h === "select" || (h === "input" && f.type === "file"))
        )
          var C = DS;
        else if (Th(f))
          if (yy) C = IS;
          else {
            C = OS;
            var E = jS;
          }
        else
          (h = f.nodeName) &&
            h.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (C = LS);
        if (C && (C = C(e, u))) {
          gy(d, C, n, c);
          break e;
        }
        E && E(e, f, u),
          e === "focusout" &&
            (E = f._wrapperState) &&
            E.controlled &&
            f.type === "number" &&
            Ou(f, "number", f.value);
      }
      switch (((E = u ? Zr(u) : window), e)) {
        case "focusin":
          (Th(E) || E.contentEditable === "true") &&
            ((Xr = E), (Ku = u), (yo = null));
          break;
        case "focusout":
          yo = Ku = Xr = null;
          break;
        case "mousedown":
          Gu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Gu = !1), Nh(d, n, c);
          break;
        case "selectionchange":
          if (FS) break;
        case "keydown":
        case "keyup":
          Nh(d, n, c);
      }
      var T;
      if (Sd)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        Yr
          ? py(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (hy &&
          n.locale !== "ko" &&
          (Yr || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && Yr && (T = fy())
            : ((Bn = c),
              (vd = "value" in Bn ? Bn.value : Bn.textContent),
              (Yr = !0))),
        (E = xa(u, P)),
        0 < E.length &&
          ((P = new Sh(P, e, null, n, c)),
          d.push({ event: P, listeners: E }),
          T ? (P.data = T) : ((T = my(n)), T !== null && (P.data = T)))),
        (T = kS ? AS(e, n) : RS(e, n)) &&
          ((u = xa(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Sh("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = T)));
    }
    ky(d, t);
  });
}
function Vo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function xa(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = No(e, n)),
      o != null && r.unshift(Vo(e, o, i)),
      (o = No(e, t)),
      o != null && r.push(Vo(e, o, i))),
      (e = e.return);
  }
  return r;
}
function Kr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function jh(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = No(n, o)), l != null && s.unshift(Vo(n, l, a)))
        : i || ((l = No(n, o)), l != null && s.push(Vo(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var US = /\r\n?/g,
  WS = /\u0000|\uFFFD/g;
function Oh(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      US,
      `
`
    )
    .replace(WS, "");
}
function Ms(e, t, n) {
  if (((t = Oh(t)), Oh(e) !== t && n)) throw Error(D(425));
}
function wa() {}
var Qu = null,
  Yu = null;
function Xu(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var qu = typeof setTimeout == "function" ? setTimeout : void 0,
  HS = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Lh = typeof Promise == "function" ? Promise : void 0,
  KS =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Lh < "u"
      ? function (e) {
          return Lh.resolve(null).then(e).catch(GS);
        }
      : qu;
function GS(e) {
  setTimeout(function () {
    throw e;
  });
}
function Yl(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), jo(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  jo(t);
}
function Gn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Ih(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Bi = Math.random().toString(36).slice(2),
  Gt = "__reactFiber$" + Bi,
  _o = "__reactProps$" + Bi,
  fn = "__reactContainer$" + Bi,
  Zu = "__reactEvents$" + Bi,
  QS = "__reactListeners$" + Bi,
  YS = "__reactHandles$" + Bi;
function yr(e) {
  var t = e[Gt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[fn] || n[Gt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ih(e); e !== null; ) {
          if ((n = e[Gt])) return n;
          e = Ih(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ss(e) {
  return (
    (e = e[Gt] || e[fn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Zr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(D(33));
}
function tl(e) {
  return e[_o] || null;
}
var Ju = [],
  Jr = -1;
function ar(e) {
  return { current: e };
}
function ae(e) {
  0 > Jr || ((e.current = Ju[Jr]), (Ju[Jr] = null), Jr--);
}
function ie(e, t) {
  Jr++, (Ju[Jr] = e.current), (e.current = t);
}
var Jn = {},
  Fe = ar(Jn),
  Ze = ar(!1),
  Dr = Jn;
function Ri(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Jn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Je(e) {
  return (e = e.childContextTypes), e != null;
}
function Sa() {
  ae(Ze), ae(Fe);
}
function Vh(e, t, n) {
  if (Fe.current !== Jn) throw Error(D(168));
  ie(Fe, t), ie(Ze, n);
}
function Ry(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(D(108, j1(e) || "Unknown", i));
  return pe({}, n, r);
}
function ba(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Jn),
    (Dr = Fe.current),
    ie(Fe, e),
    ie(Ze, Ze.current),
    !0
  );
}
function _h(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(D(169));
  n
    ? ((e = Ry(e, t, Dr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ae(Ze),
      ae(Fe),
      ie(Fe, e))
    : ae(Ze),
    ie(Ze, n);
}
var sn = null,
  nl = !1,
  Xl = !1;
function Ny(e) {
  sn === null ? (sn = [e]) : sn.push(e);
}
function XS(e) {
  (nl = !0), Ny(e);
}
function lr() {
  if (!Xl && sn !== null) {
    Xl = !0;
    var e = 0,
      t = te;
    try {
      var n = sn;
      for (te = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (sn = null), (nl = !1);
    } catch (i) {
      throw (sn !== null && (sn = sn.slice(e + 1)), ty(pd, lr), i);
    } finally {
      (te = t), (Xl = !1);
    }
  }
  return null;
}
var ei = [],
  ti = 0,
  Ca = null,
  Ea = 0,
  mt = [],
  gt = 0,
  jr = null,
  ln = 1,
  un = "";
function pr(e, t) {
  (ei[ti++] = Ea), (ei[ti++] = Ca), (Ca = e), (Ea = t);
}
function My(e, t, n) {
  (mt[gt++] = ln), (mt[gt++] = un), (mt[gt++] = jr), (jr = e);
  var r = ln;
  e = un;
  var i = 32 - Lt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Lt(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (ln = (1 << (32 - Lt(t) + i)) | (n << i) | r),
      (un = o + e);
  } else (ln = (1 << o) | (n << i) | r), (un = e);
}
function Cd(e) {
  e.return !== null && (pr(e, 1), My(e, 1, 0));
}
function Ed(e) {
  for (; e === Ca; )
    (Ca = ei[--ti]), (ei[ti] = null), (Ea = ei[--ti]), (ei[ti] = null);
  for (; e === jr; )
    (jr = mt[--gt]),
      (mt[gt] = null),
      (un = mt[--gt]),
      (mt[gt] = null),
      (ln = mt[--gt]),
      (mt[gt] = null);
}
var st = null,
  ot = null,
  ue = !1,
  Ot = null;
function Dy(e, t) {
  var n = yt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Fh(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (st = e), (ot = Gn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (st = e), (ot = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = jr !== null ? { id: ln, overflow: un } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = yt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (st = e),
            (ot = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ec(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function tc(e) {
  if (ue) {
    var t = ot;
    if (t) {
      var n = t;
      if (!Fh(e, t)) {
        if (ec(e)) throw Error(D(418));
        t = Gn(n.nextSibling);
        var r = st;
        t && Fh(e, t)
          ? Dy(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ue = !1), (st = e));
      }
    } else {
      if (ec(e)) throw Error(D(418));
      (e.flags = (e.flags & -4097) | 2), (ue = !1), (st = e);
    }
  }
}
function zh(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  st = e;
}
function Ds(e) {
  if (e !== st) return !1;
  if (!ue) return zh(e), (ue = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Xu(e.type, e.memoizedProps))),
    t && (t = ot))
  ) {
    if (ec(e)) throw (jy(), Error(D(418)));
    for (; t; ) Dy(e, t), (t = Gn(t.nextSibling));
  }
  if ((zh(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(D(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ot = Gn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ot = null;
    }
  } else ot = st ? Gn(e.stateNode.nextSibling) : null;
  return !0;
}
function jy() {
  for (var e = ot; e; ) e = Gn(e.nextSibling);
}
function Ni() {
  (ot = st = null), (ue = !1);
}
function Td(e) {
  Ot === null ? (Ot = [e]) : Ot.push(e);
}
var qS = wn.ReactCurrentBatchConfig;
function to(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(D(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(D(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var a = i.refs;
            s === null ? delete a[o] : (a[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(D(284));
    if (!n._owner) throw Error(D(290, e));
  }
  return e;
}
function js(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      D(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Bh(e) {
  var t = e._init;
  return t(e._payload);
}
function Oy(e) {
  function t(m, p) {
    if (e) {
      var y = m.deletions;
      y === null ? ((m.deletions = [p]), (m.flags |= 16)) : y.push(p);
    }
  }
  function n(m, p) {
    if (!e) return null;
    for (; p !== null; ) t(m, p), (p = p.sibling);
    return null;
  }
  function r(m, p) {
    for (m = new Map(); p !== null; )
      p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling);
    return m;
  }
  function i(m, p) {
    return (m = qn(m, p)), (m.index = 0), (m.sibling = null), m;
  }
  function o(m, p, y) {
    return (
      (m.index = y),
      e
        ? ((y = m.alternate),
          y !== null
            ? ((y = y.index), y < p ? ((m.flags |= 2), p) : y)
            : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    );
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, p, y, b) {
    return p === null || p.tag !== 6
      ? ((p = ru(y, m.mode, b)), (p.return = m), p)
      : ((p = i(p, y)), (p.return = m), p);
  }
  function l(m, p, y, b) {
    var C = y.type;
    return C === Qr
      ? c(m, p, y.props.children, b, y.key)
      : p !== null &&
        (p.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === Dn &&
            Bh(C) === p.type))
      ? ((b = i(p, y.props)), (b.ref = to(m, p, y)), (b.return = m), b)
      : ((b = ia(y.type, y.key, y.props, null, m.mode, b)),
        (b.ref = to(m, p, y)),
        (b.return = m),
        b);
  }
  function u(m, p, y, b) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== y.containerInfo ||
      p.stateNode.implementation !== y.implementation
      ? ((p = iu(y, m.mode, b)), (p.return = m), p)
      : ((p = i(p, y.children || [])), (p.return = m), p);
  }
  function c(m, p, y, b, C) {
    return p === null || p.tag !== 7
      ? ((p = Rr(y, m.mode, b, C)), (p.return = m), p)
      : ((p = i(p, y)), (p.return = m), p);
  }
  function d(m, p, y) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = ru("" + p, m.mode, y)), (p.return = m), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case bs:
          return (
            (y = ia(p.type, p.key, p.props, null, m.mode, y)),
            (y.ref = to(m, null, p)),
            (y.return = m),
            y
          );
        case Gr:
          return (p = iu(p, m.mode, y)), (p.return = m), p;
        case Dn:
          var b = p._init;
          return d(m, b(p._payload), y);
      }
      if (lo(p) || Xi(p))
        return (p = Rr(p, m.mode, y, null)), (p.return = m), p;
      js(m, p);
    }
    return null;
  }
  function f(m, p, y, b) {
    var C = p !== null ? p.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return C !== null ? null : a(m, p, "" + y, b);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case bs:
          return y.key === C ? l(m, p, y, b) : null;
        case Gr:
          return y.key === C ? u(m, p, y, b) : null;
        case Dn:
          return (C = y._init), f(m, p, C(y._payload), b);
      }
      if (lo(y) || Xi(y)) return C !== null ? null : c(m, p, y, b, null);
      js(m, y);
    }
    return null;
  }
  function h(m, p, y, b, C) {
    if ((typeof b == "string" && b !== "") || typeof b == "number")
      return (m = m.get(y) || null), a(p, m, "" + b, C);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case bs:
          return (m = m.get(b.key === null ? y : b.key) || null), l(p, m, b, C);
        case Gr:
          return (m = m.get(b.key === null ? y : b.key) || null), u(p, m, b, C);
        case Dn:
          var E = b._init;
          return h(m, p, y, E(b._payload), C);
      }
      if (lo(b) || Xi(b)) return (m = m.get(y) || null), c(p, m, b, C, null);
      js(p, b);
    }
    return null;
  }
  function v(m, p, y, b) {
    for (
      var C = null, E = null, T = p, P = (p = 0), M = null;
      T !== null && P < y.length;
      P++
    ) {
      T.index > P ? ((M = T), (T = null)) : (M = T.sibling);
      var N = f(m, T, y[P], b);
      if (N === null) {
        T === null && (T = M);
        break;
      }
      e && T && N.alternate === null && t(m, T),
        (p = o(N, p, P)),
        E === null ? (C = N) : (E.sibling = N),
        (E = N),
        (T = M);
    }
    if (P === y.length) return n(m, T), ue && pr(m, P), C;
    if (T === null) {
      for (; P < y.length; P++)
        (T = d(m, y[P], b)),
          T !== null &&
            ((p = o(T, p, P)), E === null ? (C = T) : (E.sibling = T), (E = T));
      return ue && pr(m, P), C;
    }
    for (T = r(m, T); P < y.length; P++)
      (M = h(T, m, P, y[P], b)),
        M !== null &&
          (e && M.alternate !== null && T.delete(M.key === null ? P : M.key),
          (p = o(M, p, P)),
          E === null ? (C = M) : (E.sibling = M),
          (E = M));
    return (
      e &&
        T.forEach(function (F) {
          return t(m, F);
        }),
      ue && pr(m, P),
      C
    );
  }
  function g(m, p, y, b) {
    var C = Xi(y);
    if (typeof C != "function") throw Error(D(150));
    if (((y = C.call(y)), y == null)) throw Error(D(151));
    for (
      var E = (C = null), T = p, P = (p = 0), M = null, N = y.next();
      T !== null && !N.done;
      P++, N = y.next()
    ) {
      T.index > P ? ((M = T), (T = null)) : (M = T.sibling);
      var F = f(m, T, N.value, b);
      if (F === null) {
        T === null && (T = M);
        break;
      }
      e && T && F.alternate === null && t(m, T),
        (p = o(F, p, P)),
        E === null ? (C = F) : (E.sibling = F),
        (E = F),
        (T = M);
    }
    if (N.done) return n(m, T), ue && pr(m, P), C;
    if (T === null) {
      for (; !N.done; P++, N = y.next())
        (N = d(m, N.value, b)),
          N !== null &&
            ((p = o(N, p, P)), E === null ? (C = N) : (E.sibling = N), (E = N));
      return ue && pr(m, P), C;
    }
    for (T = r(m, T); !N.done; P++, N = y.next())
      (N = h(T, m, P, N.value, b)),
        N !== null &&
          (e && N.alternate !== null && T.delete(N.key === null ? P : N.key),
          (p = o(N, p, P)),
          E === null ? (C = N) : (E.sibling = N),
          (E = N));
    return (
      e &&
        T.forEach(function (I) {
          return t(m, I);
        }),
      ue && pr(m, P),
      C
    );
  }
  function x(m, p, y, b) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === Qr &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case bs:
          e: {
            for (var C = y.key, E = p; E !== null; ) {
              if (E.key === C) {
                if (((C = y.type), C === Qr)) {
                  if (E.tag === 7) {
                    n(m, E.sibling),
                      (p = i(E, y.props.children)),
                      (p.return = m),
                      (m = p);
                    break e;
                  }
                } else if (
                  E.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === Dn &&
                    Bh(C) === E.type)
                ) {
                  n(m, E.sibling),
                    (p = i(E, y.props)),
                    (p.ref = to(m, E, y)),
                    (p.return = m),
                    (m = p);
                  break e;
                }
                n(m, E);
                break;
              } else t(m, E);
              E = E.sibling;
            }
            y.type === Qr
              ? ((p = Rr(y.props.children, m.mode, b, y.key)),
                (p.return = m),
                (m = p))
              : ((b = ia(y.type, y.key, y.props, null, m.mode, b)),
                (b.ref = to(m, p, y)),
                (b.return = m),
                (m = b));
          }
          return s(m);
        case Gr:
          e: {
            for (E = y.key; p !== null; ) {
              if (p.key === E)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === y.containerInfo &&
                  p.stateNode.implementation === y.implementation
                ) {
                  n(m, p.sibling),
                    (p = i(p, y.children || [])),
                    (p.return = m),
                    (m = p);
                  break e;
                } else {
                  n(m, p);
                  break;
                }
              else t(m, p);
              p = p.sibling;
            }
            (p = iu(y, m.mode, b)), (p.return = m), (m = p);
          }
          return s(m);
        case Dn:
          return (E = y._init), x(m, p, E(y._payload), b);
      }
      if (lo(y)) return v(m, p, y, b);
      if (Xi(y)) return g(m, p, y, b);
      js(m, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = i(p, y)), (p.return = m), (m = p))
          : (n(m, p), (p = ru(y, m.mode, b)), (p.return = m), (m = p)),
        s(m))
      : n(m, p);
  }
  return x;
}
var Mi = Oy(!0),
  Ly = Oy(!1),
  Ta = ar(null),
  Pa = null,
  ni = null,
  Pd = null;
function kd() {
  Pd = ni = Pa = null;
}
function Ad(e) {
  var t = Ta.current;
  ae(Ta), (e._currentValue = t);
}
function nc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function pi(e, t) {
  (Pa = e),
    (Pd = ni = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Xe = !0), (e.firstContext = null));
}
function St(e) {
  var t = e._currentValue;
  if (Pd !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), ni === null)) {
      if (Pa === null) throw Error(D(308));
      (ni = e), (Pa.dependencies = { lanes: 0, firstContext: e });
    } else ni = ni.next = e;
  return t;
}
var vr = null;
function Rd(e) {
  vr === null ? (vr = [e]) : vr.push(e);
}
function Iy(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Rd(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    hn(e, r)
  );
}
function hn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var jn = !1;
function Nd(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Vy(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function cn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Qn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Z & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      hn(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Rd(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    hn(e, n)
  );
}
function Zs(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), md(e, n);
  }
}
function $h(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ka(e, t, n, r) {
  var i = e.updateQueue;
  jn = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (o = u) : (s.next = u), (s = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (o !== null) {
    var d = i.baseState;
    (s = 0), (c = u = l = null), (a = o);
    do {
      var f = a.lane,
        h = a.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: h,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var v = e,
            g = a;
          switch (((f = t), (h = n), g.tag)) {
            case 1:
              if (((v = g.payload), typeof v == "function")) {
                d = v.call(h, d, f);
                break e;
              }
              d = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = g.payload),
                (f = typeof v == "function" ? v.call(h, d, f) : v),
                f == null)
              )
                break e;
              d = pe({}, d, f);
              break e;
            case 2:
              jn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (f = i.effects),
          f === null ? (i.effects = [a]) : f.push(a));
      } else
        (h = {
          eventTime: h,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = h), (l = d)) : (c = c.next = h),
          (s |= f);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (f = a),
          (a = f.next),
          (f.next = null),
          (i.lastBaseUpdate = f),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = d),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Lr |= s), (e.lanes = s), (e.memoizedState = d);
  }
}
function Uh(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(D(191, i));
        i.call(r);
      }
    }
}
var as = {},
  Xt = ar(as),
  Fo = ar(as),
  zo = ar(as);
function xr(e) {
  if (e === as) throw Error(D(174));
  return e;
}
function Md(e, t) {
  switch ((ie(zo, t), ie(Fo, e), ie(Xt, as), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Iu(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Iu(t, e));
  }
  ae(Xt), ie(Xt, t);
}
function Di() {
  ae(Xt), ae(Fo), ae(zo);
}
function _y(e) {
  xr(zo.current);
  var t = xr(Xt.current),
    n = Iu(t, e.type);
  t !== n && (ie(Fo, e), ie(Xt, n));
}
function Dd(e) {
  Fo.current === e && (ae(Xt), ae(Fo));
}
var de = ar(0);
function Aa(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ql = [];
function jd() {
  for (var e = 0; e < ql.length; e++)
    ql[e]._workInProgressVersionPrimary = null;
  ql.length = 0;
}
var Js = wn.ReactCurrentDispatcher,
  Zl = wn.ReactCurrentBatchConfig,
  Or = 0,
  he = null,
  Ce = null,
  Pe = null,
  Ra = !1,
  vo = !1,
  Bo = 0,
  ZS = 0;
function Oe() {
  throw Error(D(321));
}
function Od(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Vt(e[n], t[n])) return !1;
  return !0;
}
function Ld(e, t, n, r, i, o) {
  if (
    ((Or = o),
    (he = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Js.current = e === null || e.memoizedState === null ? nb : rb),
    (e = n(r, i)),
    vo)
  ) {
    o = 0;
    do {
      if (((vo = !1), (Bo = 0), 25 <= o)) throw Error(D(301));
      (o += 1),
        (Pe = Ce = null),
        (t.updateQueue = null),
        (Js.current = ib),
        (e = n(r, i));
    } while (vo);
  }
  if (
    ((Js.current = Na),
    (t = Ce !== null && Ce.next !== null),
    (Or = 0),
    (Pe = Ce = he = null),
    (Ra = !1),
    t)
  )
    throw Error(D(300));
  return e;
}
function Id() {
  var e = Bo !== 0;
  return (Bo = 0), e;
}
function Ut() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Pe === null ? (he.memoizedState = Pe = e) : (Pe = Pe.next = e), Pe;
}
function bt() {
  if (Ce === null) {
    var e = he.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ce.next;
  var t = Pe === null ? he.memoizedState : Pe.next;
  if (t !== null) (Pe = t), (Ce = e);
  else {
    if (e === null) throw Error(D(310));
    (Ce = e),
      (e = {
        memoizedState: Ce.memoizedState,
        baseState: Ce.baseState,
        baseQueue: Ce.baseQueue,
        queue: Ce.queue,
        next: null,
      }),
      Pe === null ? (he.memoizedState = Pe = e) : (Pe = Pe.next = e);
  }
  return Pe;
}
function $o(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Jl(e) {
  var t = bt(),
    n = t.queue;
  if (n === null) throw Error(D(311));
  n.lastRenderedReducer = e;
  var r = Ce,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      u = o;
    do {
      var c = u.lane;
      if ((Or & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = d), (s = r)) : (l = l.next = d),
          (he.lanes |= c),
          (Lr |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    l === null ? (s = r) : (l.next = a),
      Vt(r, t.memoizedState) || (Xe = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (he.lanes |= o), (Lr |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function eu(e) {
  var t = bt(),
    n = t.queue;
  if (n === null) throw Error(D(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    Vt(o, t.memoizedState) || (Xe = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Fy() {}
function zy(e, t) {
  var n = he,
    r = bt(),
    i = t(),
    o = !Vt(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Xe = !0)),
    (r = r.queue),
    Vd(Uy.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Pe !== null && Pe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Uo(9, $y.bind(null, n, r, i, t), void 0, null),
      ke === null)
    )
      throw Error(D(349));
    Or & 30 || By(n, t, i);
  }
  return i;
}
function By(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = he.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (he.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function $y(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Wy(t) && Hy(e);
}
function Uy(e, t, n) {
  return n(function () {
    Wy(t) && Hy(e);
  });
}
function Wy(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Vt(e, n);
  } catch {
    return !0;
  }
}
function Hy(e) {
  var t = hn(e, 1);
  t !== null && It(t, e, 1, -1);
}
function Wh(e) {
  var t = Ut();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: $o,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = tb.bind(null, he, e)),
    [t.memoizedState, e]
  );
}
function Uo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = he.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (he.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Ky() {
  return bt().memoizedState;
}
function ea(e, t, n, r) {
  var i = Ut();
  (he.flags |= e),
    (i.memoizedState = Uo(1 | t, n, void 0, r === void 0 ? null : r));
}
function rl(e, t, n, r) {
  var i = bt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Ce !== null) {
    var s = Ce.memoizedState;
    if (((o = s.destroy), r !== null && Od(r, s.deps))) {
      i.memoizedState = Uo(t, n, o, r);
      return;
    }
  }
  (he.flags |= e), (i.memoizedState = Uo(1 | t, n, o, r));
}
function Hh(e, t) {
  return ea(8390656, 8, e, t);
}
function Vd(e, t) {
  return rl(2048, 8, e, t);
}
function Gy(e, t) {
  return rl(4, 2, e, t);
}
function Qy(e, t) {
  return rl(4, 4, e, t);
}
function Yy(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Xy(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), rl(4, 4, Yy.bind(null, t, e), n)
  );
}
function _d() {}
function qy(e, t) {
  var n = bt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Od(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Zy(e, t) {
  var n = bt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Od(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Jy(e, t, n) {
  return Or & 21
    ? (Vt(n, t) || ((n = iy()), (he.lanes |= n), (Lr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Xe = !0)), (e.memoizedState = n));
}
function JS(e, t) {
  var n = te;
  (te = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Zl.transition;
  Zl.transition = {};
  try {
    e(!1), t();
  } finally {
    (te = n), (Zl.transition = r);
  }
}
function ev() {
  return bt().memoizedState;
}
function eb(e, t, n) {
  var r = Xn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    tv(e))
  )
    nv(t, n);
  else if (((n = Iy(e, t, n, r)), n !== null)) {
    var i = We();
    It(n, e, r, i), rv(n, t, r);
  }
}
function tb(e, t, n) {
  var r = Xn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (tv(e)) nv(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), Vt(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), Rd(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Iy(e, t, i, r)),
      n !== null && ((i = We()), It(n, e, r, i), rv(n, t, r));
  }
}
function tv(e) {
  var t = e.alternate;
  return e === he || (t !== null && t === he);
}
function nv(e, t) {
  vo = Ra = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function rv(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), md(e, n);
  }
}
var Na = {
    readContext: St,
    useCallback: Oe,
    useContext: Oe,
    useEffect: Oe,
    useImperativeHandle: Oe,
    useInsertionEffect: Oe,
    useLayoutEffect: Oe,
    useMemo: Oe,
    useReducer: Oe,
    useRef: Oe,
    useState: Oe,
    useDebugValue: Oe,
    useDeferredValue: Oe,
    useTransition: Oe,
    useMutableSource: Oe,
    useSyncExternalStore: Oe,
    useId: Oe,
    unstable_isNewReconciler: !1,
  },
  nb = {
    readContext: St,
    useCallback: function (e, t) {
      return (Ut().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: St,
    useEffect: Hh,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ea(4194308, 4, Yy.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ea(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ea(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ut();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ut();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = eb.bind(null, he, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ut();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Wh,
    useDebugValue: _d,
    useDeferredValue: function (e) {
      return (Ut().memoizedState = e);
    },
    useTransition: function () {
      var e = Wh(!1),
        t = e[0];
      return (e = JS.bind(null, e[1])), (Ut().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = he,
        i = Ut();
      if (ue) {
        if (n === void 0) throw Error(D(407));
        n = n();
      } else {
        if (((n = t()), ke === null)) throw Error(D(349));
        Or & 30 || By(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Hh(Uy.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Uo(9, $y.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ut(),
        t = ke.identifierPrefix;
      if (ue) {
        var n = un,
          r = ln;
        (n = (r & ~(1 << (32 - Lt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Bo++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = ZS++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  rb = {
    readContext: St,
    useCallback: qy,
    useContext: St,
    useEffect: Vd,
    useImperativeHandle: Xy,
    useInsertionEffect: Gy,
    useLayoutEffect: Qy,
    useMemo: Zy,
    useReducer: Jl,
    useRef: Ky,
    useState: function () {
      return Jl($o);
    },
    useDebugValue: _d,
    useDeferredValue: function (e) {
      var t = bt();
      return Jy(t, Ce.memoizedState, e);
    },
    useTransition: function () {
      var e = Jl($o)[0],
        t = bt().memoizedState;
      return [e, t];
    },
    useMutableSource: Fy,
    useSyncExternalStore: zy,
    useId: ev,
    unstable_isNewReconciler: !1,
  },
  ib = {
    readContext: St,
    useCallback: qy,
    useContext: St,
    useEffect: Vd,
    useImperativeHandle: Xy,
    useInsertionEffect: Gy,
    useLayoutEffect: Qy,
    useMemo: Zy,
    useReducer: eu,
    useRef: Ky,
    useState: function () {
      return eu($o);
    },
    useDebugValue: _d,
    useDeferredValue: function (e) {
      var t = bt();
      return Ce === null ? (t.memoizedState = e) : Jy(t, Ce.memoizedState, e);
    },
    useTransition: function () {
      var e = eu($o)[0],
        t = bt().memoizedState;
      return [e, t];
    },
    useMutableSource: Fy,
    useSyncExternalStore: zy,
    useId: ev,
    unstable_isNewReconciler: !1,
  };
function Rt(e, t) {
  if (e && e.defaultProps) {
    (t = pe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function rc(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : pe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var il = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Fr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = We(),
      i = Xn(e),
      o = cn(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Qn(e, o, i)),
      t !== null && (It(t, e, i, r), Zs(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = We(),
      i = Xn(e),
      o = cn(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Qn(e, o, i)),
      t !== null && (It(t, e, i, r), Zs(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = We(),
      r = Xn(e),
      i = cn(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Qn(e, i, r)),
      t !== null && (It(t, e, r, n), Zs(t, e, r));
  },
};
function Kh(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Lo(n, r) || !Lo(i, o)
      : !0
  );
}
function iv(e, t, n) {
  var r = !1,
    i = Jn,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = St(o))
      : ((i = Je(t) ? Dr : Fe.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Ri(e, i) : Jn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = il),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Gh(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && il.enqueueReplaceState(t, t.state, null);
}
function ic(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Nd(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = St(o))
    : ((o = Je(t) ? Dr : Fe.current), (i.context = Ri(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (rc(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && il.enqueueReplaceState(i, i.state, null),
      ka(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function ji(e, t) {
  try {
    var n = "",
      r = t;
    do (n += D1(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function tu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function oc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var ob = typeof WeakMap == "function" ? WeakMap : Map;
function ov(e, t, n) {
  (n = cn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Da || ((Da = !0), (mc = r)), oc(e, t);
    }),
    n
  );
}
function sv(e, t, n) {
  (n = cn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        oc(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        oc(e, t),
          typeof r != "function" &&
            (Yn === null ? (Yn = new Set([this])) : Yn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Qh(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ob();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = xb.bind(null, e, t, n)), t.then(e, e));
}
function Yh(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Xh(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = cn(-1, 1)), (t.tag = 2), Qn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var sb = wn.ReactCurrentOwner,
  Xe = !1;
function Be(e, t, n, r) {
  t.child = e === null ? Ly(t, null, n, r) : Mi(t, e.child, n, r);
}
function qh(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    pi(t, i),
    (r = Ld(e, t, n, r, o, i)),
    (n = Id()),
    e !== null && !Xe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        pn(e, t, i))
      : (ue && n && Cd(t), (t.flags |= 1), Be(e, t, r, i), t.child)
  );
}
function Zh(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Kd(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), av(e, t, o, r, i))
      : ((e = ia(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Lo), n(s, r) && e.ref === t.ref)
    )
      return pn(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = qn(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function av(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Lo(o, r) && e.ref === t.ref)
      if (((Xe = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Xe = !0);
      else return (t.lanes = e.lanes), pn(e, t, i);
  }
  return sc(e, t, n, r, i);
}
function lv(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ie(ii, rt),
        (rt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ie(ii, rt),
          (rt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        ie(ii, rt),
        (rt |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ie(ii, rt),
      (rt |= r);
  return Be(e, t, i, n), t.child;
}
function uv(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function sc(e, t, n, r, i) {
  var o = Je(n) ? Dr : Fe.current;
  return (
    (o = Ri(t, o)),
    pi(t, i),
    (n = Ld(e, t, n, r, o, i)),
    (r = Id()),
    e !== null && !Xe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        pn(e, t, i))
      : (ue && r && Cd(t), (t.flags |= 1), Be(e, t, n, i), t.child)
  );
}
function Jh(e, t, n, r, i) {
  if (Je(n)) {
    var o = !0;
    ba(t);
  } else o = !1;
  if ((pi(t, i), t.stateNode === null))
    ta(e, t), iv(t, n, r), ic(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = St(u))
      : ((u = Je(n) ? Dr : Fe.current), (u = Ri(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && Gh(t, s, r, u)),
      (jn = !1);
    var f = t.memoizedState;
    (s.state = f),
      ka(t, r, s, i),
      (l = t.memoizedState),
      a !== r || f !== l || Ze.current || jn
        ? (typeof c == "function" && (rc(t, n, c, r), (l = t.memoizedState)),
          (a = jn || Kh(t, n, a, r, f, l, u))
            ? (d ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Vy(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : Rt(t.type, a)),
      (s.props = u),
      (d = t.pendingProps),
      (f = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = St(l))
        : ((l = Je(n) ? Dr : Fe.current), (l = Ri(t, l)));
    var h = n.getDerivedStateFromProps;
    (c =
      typeof h == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== d || f !== l) && Gh(t, s, r, l)),
      (jn = !1),
      (f = t.memoizedState),
      (s.state = f),
      ka(t, r, s, i);
    var v = t.memoizedState;
    a !== d || f !== v || Ze.current || jn
      ? (typeof h == "function" && (rc(t, n, h, r), (v = t.memoizedState)),
        (u = jn || Kh(t, n, u, r, f, v, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, v, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, v, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (s.props = r),
        (s.state = v),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ac(e, t, n, r, o, i);
}
function ac(e, t, n, r, i, o) {
  uv(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && _h(t, n, !1), pn(e, t, o);
  (r = t.stateNode), (sb.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Mi(t, e.child, null, o)), (t.child = Mi(t, null, a, o)))
      : Be(e, t, a, o),
    (t.memoizedState = r.state),
    i && _h(t, n, !0),
    t.child
  );
}
function cv(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Vh(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Vh(e, t.context, !1),
    Md(e, t.containerInfo);
}
function ep(e, t, n, r, i) {
  return Ni(), Td(i), (t.flags |= 256), Be(e, t, n, r), t.child;
}
var lc = { dehydrated: null, treeContext: null, retryLane: 0 };
function uc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function dv(e, t, n) {
  var r = t.pendingProps,
    i = de.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    ie(de, i & 1),
    e === null)
  )
    return (
      tc(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = al(s, r, 0, null)),
              (e = Rr(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = uc(n)),
              (t.memoizedState = lc),
              e)
            : Fd(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return ab(e, t, s, r, a, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = qn(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (o = qn(a, o)) : ((o = Rr(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? uc(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = lc),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = qn(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Fd(e, t) {
  return (
    (t = al({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Os(e, t, n, r) {
  return (
    r !== null && Td(r),
    Mi(t, e.child, null, n),
    (e = Fd(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function ab(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = tu(Error(D(422)))), Os(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = al({ mode: "visible", children: r.children }, i, 0, null)),
        (o = Rr(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Mi(t, e.child, null, s),
        (t.child.memoizedState = uc(s)),
        (t.memoizedState = lc),
        o);
  if (!(t.mode & 1)) return Os(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(D(419))), (r = tu(o, r, void 0)), Os(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), Xe || a)) {
    if (((r = ke), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), hn(e, i), It(r, e, i, -1));
    }
    return Hd(), (r = tu(Error(D(421)))), Os(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = wb.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (ot = Gn(i.nextSibling)),
      (st = t),
      (ue = !0),
      (Ot = null),
      e !== null &&
        ((mt[gt++] = ln),
        (mt[gt++] = un),
        (mt[gt++] = jr),
        (ln = e.id),
        (un = e.overflow),
        (jr = t)),
      (t = Fd(t, r.children)),
      (t.flags |= 4096),
      t);
}
function tp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), nc(e.return, t, n);
}
function nu(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function fv(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((Be(e, t, r.children, n), (r = de.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && tp(e, n, t);
        else if (e.tag === 19) tp(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ie(de, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Aa(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          nu(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Aa(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        nu(t, !0, n, null, o);
        break;
      case "together":
        nu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ta(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function pn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Lr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(D(153));
  if (t.child !== null) {
    for (
      e = t.child, n = qn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = qn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function lb(e, t, n) {
  switch (t.tag) {
    case 3:
      cv(t), Ni();
      break;
    case 5:
      _y(t);
      break;
    case 1:
      Je(t.type) && ba(t);
      break;
    case 4:
      Md(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      ie(Ta, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ie(de, de.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? dv(e, t, n)
          : (ie(de, de.current & 1),
            (e = pn(e, t, n)),
            e !== null ? e.sibling : null);
      ie(de, de.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return fv(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        ie(de, de.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), lv(e, t, n);
  }
  return pn(e, t, n);
}
var hv, cc, pv, mv;
hv = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
cc = function () {};
pv = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), xr(Xt.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Du(e, i)), (r = Du(e, r)), (o = []);
        break;
      case "select":
        (i = pe({}, i, { value: void 0 })),
          (r = pe({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = Lu(e, i)), (r = Lu(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = wa);
    }
    Vu(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Ao.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (o || (o = []), o.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (o = o || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (o = o || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Ao.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && se("scroll", e),
                  o || a === l || (o = []))
                : (o = o || []).push(u, l));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
mv = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function no(e, t) {
  if (!ue)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function ub(e, t, n) {
  var r = t.pendingProps;
  switch ((Ed(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Le(t), null;
    case 1:
      return Je(t.type) && Sa(), Le(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Di(),
        ae(Ze),
        ae(Fe),
        jd(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ds(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ot !== null && (vc(Ot), (Ot = null)))),
        cc(e, t),
        Le(t),
        null
      );
    case 5:
      Dd(t);
      var i = xr(zo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        pv(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(D(166));
          return Le(t), null;
        }
        if (((e = xr(Xt.current)), Ds(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Gt] = t), (r[_o] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              se("cancel", r), se("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              se("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < co.length; i++) se(co[i], r);
              break;
            case "source":
              se("error", r);
              break;
            case "img":
            case "image":
            case "link":
              se("error", r), se("load", r);
              break;
            case "details":
              se("toggle", r);
              break;
            case "input":
              ch(r, o), se("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                se("invalid", r);
              break;
            case "textarea":
              fh(r, o), se("invalid", r);
          }
          Vu(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var a = o[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ms(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ms(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : Ao.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  se("scroll", r);
            }
          switch (n) {
            case "input":
              Cs(r), dh(r, o, !0);
              break;
            case "textarea":
              Cs(r), hh(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = wa);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ug(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Gt] = t),
            (e[_o] = r),
            hv(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = _u(n, r)), n)) {
              case "dialog":
                se("cancel", e), se("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                se("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < co.length; i++) se(co[i], e);
                i = r;
                break;
              case "source":
                se("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                se("error", e), se("load", e), (i = r);
                break;
              case "details":
                se("toggle", e), (i = r);
                break;
              case "input":
                ch(e, r), (i = Du(e, r)), se("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = pe({}, r, { value: void 0 })),
                  se("invalid", e);
                break;
              case "textarea":
                fh(e, r), (i = Lu(e, r)), se("invalid", e);
                break;
              default:
                i = r;
            }
            Vu(n, i), (a = i);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var l = a[o];
                o === "style"
                  ? Kg(e, l)
                  : o === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Wg(e, l))
                  : o === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && Ro(e, l)
                    : typeof l == "number" && Ro(e, "" + l)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Ao.hasOwnProperty(o)
                      ? l != null && o === "onScroll" && se("scroll", e)
                      : l != null && ud(e, o, l, s));
              }
            switch (n) {
              case "input":
                Cs(e), dh(e, r, !1);
                break;
              case "textarea":
                Cs(e), hh(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Zn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? ci(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      ci(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = wa);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Le(t), null;
    case 6:
      if (e && t.stateNode != null) mv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(D(166));
        if (((n = xr(zo.current)), xr(Xt.current), Ds(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Gt] = t),
            (o = r.nodeValue !== n) && ((e = st), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ms(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ms(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Gt] = t),
            (t.stateNode = r);
      }
      return Le(t), null;
    case 13:
      if (
        (ae(de),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ue && ot !== null && t.mode & 1 && !(t.flags & 128))
          jy(), Ni(), (t.flags |= 98560), (o = !1);
        else if (((o = Ds(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(D(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(D(317));
            o[Gt] = t;
          } else
            Ni(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Le(t), (o = !1);
        } else Ot !== null && (vc(Ot), (Ot = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || de.current & 1 ? Te === 0 && (Te = 3) : Hd())),
          t.updateQueue !== null && (t.flags |= 4),
          Le(t),
          null);
    case 4:
      return (
        Di(), cc(e, t), e === null && Io(t.stateNode.containerInfo), Le(t), null
      );
    case 10:
      return Ad(t.type._context), Le(t), null;
    case 17:
      return Je(t.type) && Sa(), Le(t), null;
    case 19:
      if ((ae(de), (o = t.memoizedState), o === null)) return Le(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) no(o, !1);
        else {
          if (Te !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Aa(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    no(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ie(de, (de.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            xe() > Oi &&
            ((t.flags |= 128), (r = !0), no(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Aa(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              no(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !ue)
            )
              return Le(t), null;
          } else
            2 * xe() - o.renderingStartTime > Oi &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), no(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = xe()),
          (t.sibling = null),
          (n = de.current),
          ie(de, r ? (n & 1) | 2 : n & 1),
          t)
        : (Le(t), null);
    case 22:
    case 23:
      return (
        Wd(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? rt & 1073741824 && (Le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(D(156, t.tag));
}
function cb(e, t) {
  switch ((Ed(t), t.tag)) {
    case 1:
      return (
        Je(t.type) && Sa(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Di(),
        ae(Ze),
        ae(Fe),
        jd(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Dd(t), null;
    case 13:
      if (
        (ae(de), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(D(340));
        Ni();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ae(de), null;
    case 4:
      return Di(), null;
    case 10:
      return Ad(t.type._context), null;
    case 22:
    case 23:
      return Wd(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ls = !1,
  Ve = !1,
  db = typeof WeakSet == "function" ? WeakSet : Set,
  V = null;
function ri(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ye(e, t, r);
      }
    else n.current = null;
}
function dc(e, t, n) {
  try {
    n();
  } catch (r) {
    ye(e, t, r);
  }
}
var np = !1;
function fb(e, t) {
  if (((Qu = ya), (e = wy()), bd(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var h;
              d !== n || (i !== 0 && d.nodeType !== 3) || (a = s + i),
                d !== o || (r !== 0 && d.nodeType !== 3) || (l = s + r),
                d.nodeType === 3 && (s += d.nodeValue.length),
                (h = d.firstChild) !== null;

            )
              (f = d), (d = h);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === i && (a = s),
                f === o && ++c === r && (l = s),
                (h = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = h;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Yu = { focusedElem: e, selectionRange: n }, ya = !1, V = t; V !== null; )
    if (((t = V), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (V = e);
    else
      for (; V !== null; ) {
        t = V;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var g = v.memoizedProps,
                    x = v.memoizedState,
                    m = t.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : Rt(t.type, g),
                      x
                    );
                  m.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(D(163));
            }
        } catch (b) {
          ye(t, t.return, b);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (V = e);
          break;
        }
        V = t.return;
      }
  return (v = np), (np = !1), v;
}
function xo(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && dc(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function ol(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function fc(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function gv(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), gv(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Gt], delete t[_o], delete t[Zu], delete t[QS], delete t[YS])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function yv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function rp(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || yv(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function hc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = wa));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (hc(e, t, n), e = e.sibling; e !== null; ) hc(e, t, n), (e = e.sibling);
}
function pc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (pc(e, t, n), e = e.sibling; e !== null; ) pc(e, t, n), (e = e.sibling);
}
var Ae = null,
  jt = !1;
function kn(e, t, n) {
  for (n = n.child; n !== null; ) vv(e, t, n), (n = n.sibling);
}
function vv(e, t, n) {
  if (Yt && typeof Yt.onCommitFiberUnmount == "function")
    try {
      Yt.onCommitFiberUnmount(qa, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ve || ri(n, t);
    case 6:
      var r = Ae,
        i = jt;
      (Ae = null),
        kn(e, t, n),
        (Ae = r),
        (jt = i),
        Ae !== null &&
          (jt
            ? ((e = Ae),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ae.removeChild(n.stateNode));
      break;
    case 18:
      Ae !== null &&
        (jt
          ? ((e = Ae),
            (n = n.stateNode),
            e.nodeType === 8
              ? Yl(e.parentNode, n)
              : e.nodeType === 1 && Yl(e, n),
            jo(e))
          : Yl(Ae, n.stateNode));
      break;
    case 4:
      (r = Ae),
        (i = jt),
        (Ae = n.stateNode.containerInfo),
        (jt = !0),
        kn(e, t, n),
        (Ae = r),
        (jt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ve &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && dc(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      kn(e, t, n);
      break;
    case 1:
      if (
        !Ve &&
        (ri(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          ye(n, t, a);
        }
      kn(e, t, n);
      break;
    case 21:
      kn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ve = (r = Ve) || n.memoizedState !== null), kn(e, t, n), (Ve = r))
        : kn(e, t, n);
      break;
    default:
      kn(e, t, n);
  }
}
function ip(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new db()),
      t.forEach(function (r) {
        var i = Sb.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Pt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Ae = a.stateNode), (jt = !1);
              break e;
            case 3:
              (Ae = a.stateNode.containerInfo), (jt = !0);
              break e;
            case 4:
              (Ae = a.stateNode.containerInfo), (jt = !0);
              break e;
          }
          a = a.return;
        }
        if (Ae === null) throw Error(D(160));
        vv(o, s, i), (Ae = null), (jt = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        ye(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) xv(t, e), (t = t.sibling);
}
function xv(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Pt(t, e), $t(e), r & 4)) {
        try {
          xo(3, e, e.return), ol(3, e);
        } catch (g) {
          ye(e, e.return, g);
        }
        try {
          xo(5, e, e.return);
        } catch (g) {
          ye(e, e.return, g);
        }
      }
      break;
    case 1:
      Pt(t, e), $t(e), r & 512 && n !== null && ri(n, n.return);
      break;
    case 5:
      if (
        (Pt(t, e),
        $t(e),
        r & 512 && n !== null && ri(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Ro(i, "");
        } catch (g) {
          ye(e, e.return, g);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && Bg(i, o),
              _u(a, s);
            var u = _u(a, o);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                d = l[s + 1];
              c === "style"
                ? Kg(i, d)
                : c === "dangerouslySetInnerHTML"
                ? Wg(i, d)
                : c === "children"
                ? Ro(i, d)
                : ud(i, c, d, u);
            }
            switch (a) {
              case "input":
                ju(i, o);
                break;
              case "textarea":
                $g(i, o);
                break;
              case "select":
                var f = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var h = o.value;
                h != null
                  ? ci(i, !!o.multiple, h, !1)
                  : f !== !!o.multiple &&
                    (o.defaultValue != null
                      ? ci(i, !!o.multiple, o.defaultValue, !0)
                      : ci(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[_o] = o;
          } catch (g) {
            ye(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((Pt(t, e), $t(e), r & 4)) {
        if (e.stateNode === null) throw Error(D(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (g) {
          ye(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (Pt(t, e), $t(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          jo(t.containerInfo);
        } catch (g) {
          ye(e, e.return, g);
        }
      break;
    case 4:
      Pt(t, e), $t(e);
      break;
    case 13:
      Pt(t, e),
        $t(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            ($d = xe())),
        r & 4 && ip(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ve = (u = Ve) || c), Pt(t, e), (Ve = u)) : Pt(t, e),
        $t(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (V = e, c = e.child; c !== null; ) {
            for (d = V = c; V !== null; ) {
              switch (((f = V), (h = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  xo(4, f, f.return);
                  break;
                case 1:
                  ri(f, f.return);
                  var v = f.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (g) {
                      ye(r, n, g);
                    }
                  }
                  break;
                case 5:
                  ri(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    sp(d);
                    continue;
                  }
              }
              h !== null ? ((h.return = f), (V = h)) : sp(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (i = d.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Hg("display", s)));
              } catch (g) {
                ye(e, e.return, g);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (g) {
                ye(e, e.return, g);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Pt(t, e), $t(e), r & 4 && ip(e);
      break;
    case 21:
      break;
    default:
      Pt(t, e), $t(e);
  }
}
function $t(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (yv(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(D(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Ro(i, ""), (r.flags &= -33));
          var o = rp(e);
          pc(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = rp(e);
          hc(e, a, s);
          break;
        default:
          throw Error(D(161));
      }
    } catch (l) {
      ye(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function hb(e, t, n) {
  (V = e), wv(e);
}
function wv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; V !== null; ) {
    var i = V,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Ls;
      if (!s) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || Ve;
        a = Ls;
        var u = Ve;
        if (((Ls = s), (Ve = l) && !u))
          for (V = i; V !== null; )
            (s = V),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? ap(i)
                : l !== null
                ? ((l.return = s), (V = l))
                : ap(i);
        for (; o !== null; ) (V = o), wv(o), (o = o.sibling);
        (V = i), (Ls = a), (Ve = u);
      }
      op(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (V = o)) : op(e);
  }
}
function op(e) {
  for (; V !== null; ) {
    var t = V;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ve || ol(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ve)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Rt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Uh(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Uh(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && jo(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(D(163));
          }
        Ve || (t.flags & 512 && fc(t));
      } catch (f) {
        ye(t, t.return, f);
      }
    }
    if (t === e) {
      V = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (V = n);
      break;
    }
    V = t.return;
  }
}
function sp(e) {
  for (; V !== null; ) {
    var t = V;
    if (t === e) {
      V = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (V = n);
      break;
    }
    V = t.return;
  }
}
function ap(e) {
  for (; V !== null; ) {
    var t = V;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            ol(4, t);
          } catch (l) {
            ye(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              ye(t, i, l);
            }
          }
          var o = t.return;
          try {
            fc(t);
          } catch (l) {
            ye(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            fc(t);
          } catch (l) {
            ye(t, s, l);
          }
      }
    } catch (l) {
      ye(t, t.return, l);
    }
    if (t === e) {
      V = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (V = a);
      break;
    }
    V = t.return;
  }
}
var pb = Math.ceil,
  Ma = wn.ReactCurrentDispatcher,
  zd = wn.ReactCurrentOwner,
  xt = wn.ReactCurrentBatchConfig,
  Z = 0,
  ke = null,
  be = null,
  Ne = 0,
  rt = 0,
  ii = ar(0),
  Te = 0,
  Wo = null,
  Lr = 0,
  sl = 0,
  Bd = 0,
  wo = null,
  Ye = null,
  $d = 0,
  Oi = 1 / 0,
  on = null,
  Da = !1,
  mc = null,
  Yn = null,
  Is = !1,
  $n = null,
  ja = 0,
  So = 0,
  gc = null,
  na = -1,
  ra = 0;
function We() {
  return Z & 6 ? xe() : na !== -1 ? na : (na = xe());
}
function Xn(e) {
  return e.mode & 1
    ? Z & 2 && Ne !== 0
      ? Ne & -Ne
      : qS.transition !== null
      ? (ra === 0 && (ra = iy()), ra)
      : ((e = te),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : dy(e.type))),
        e)
    : 1;
}
function It(e, t, n, r) {
  if (50 < So) throw ((So = 0), (gc = null), Error(D(185)));
  is(e, n, r),
    (!(Z & 2) || e !== ke) &&
      (e === ke && (!(Z & 2) && (sl |= n), Te === 4 && Ln(e, Ne)),
      et(e, r),
      n === 1 && Z === 0 && !(t.mode & 1) && ((Oi = xe() + 500), nl && lr()));
}
function et(e, t) {
  var n = e.callbackNode;
  q1(e, t);
  var r = ga(e, e === ke ? Ne : 0);
  if (r === 0)
    n !== null && gh(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && gh(n), t === 1))
      e.tag === 0 ? XS(lp.bind(null, e)) : Ny(lp.bind(null, e)),
        KS(function () {
          !(Z & 6) && lr();
        }),
        (n = null);
    else {
      switch (oy(r)) {
        case 1:
          n = pd;
          break;
        case 4:
          n = ny;
          break;
        case 16:
          n = ma;
          break;
        case 536870912:
          n = ry;
          break;
        default:
          n = ma;
      }
      n = Av(n, Sv.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Sv(e, t) {
  if (((na = -1), (ra = 0), Z & 6)) throw Error(D(327));
  var n = e.callbackNode;
  if (mi() && e.callbackNode !== n) return null;
  var r = ga(e, e === ke ? Ne : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Oa(e, r);
  else {
    t = r;
    var i = Z;
    Z |= 2;
    var o = Cv();
    (ke !== e || Ne !== t) && ((on = null), (Oi = xe() + 500), Ar(e, t));
    do
      try {
        yb();
        break;
      } catch (a) {
        bv(e, a);
      }
    while (!0);
    kd(),
      (Ma.current = o),
      (Z = i),
      be !== null ? (t = 0) : ((ke = null), (Ne = 0), (t = Te));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Uu(e)), i !== 0 && ((r = i), (t = yc(e, i)))), t === 1)
    )
      throw ((n = Wo), Ar(e, 0), Ln(e, r), et(e, xe()), n);
    if (t === 6) Ln(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !mb(i) &&
          ((t = Oa(e, r)),
          t === 2 && ((o = Uu(e)), o !== 0 && ((r = o), (t = yc(e, o)))),
          t === 1))
      )
        throw ((n = Wo), Ar(e, 0), Ln(e, r), et(e, xe()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(D(345));
        case 2:
          mr(e, Ye, on);
          break;
        case 3:
          if (
            (Ln(e, r), (r & 130023424) === r && ((t = $d + 500 - xe()), 10 < t))
          ) {
            if (ga(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              We(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = qu(mr.bind(null, e, Ye, on), t);
            break;
          }
          mr(e, Ye, on);
          break;
        case 4:
          if ((Ln(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - Lt(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = xe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * pb(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = qu(mr.bind(null, e, Ye, on), r);
            break;
          }
          mr(e, Ye, on);
          break;
        case 5:
          mr(e, Ye, on);
          break;
        default:
          throw Error(D(329));
      }
    }
  }
  return et(e, xe()), e.callbackNode === n ? Sv.bind(null, e) : null;
}
function yc(e, t) {
  var n = wo;
  return (
    e.current.memoizedState.isDehydrated && (Ar(e, t).flags |= 256),
    (e = Oa(e, t)),
    e !== 2 && ((t = Ye), (Ye = n), t !== null && vc(t)),
    e
  );
}
function vc(e) {
  Ye === null ? (Ye = e) : Ye.push.apply(Ye, e);
}
function mb(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Vt(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Ln(e, t) {
  for (
    t &= ~Bd,
      t &= ~sl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Lt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function lp(e) {
  if (Z & 6) throw Error(D(327));
  mi();
  var t = ga(e, 0);
  if (!(t & 1)) return et(e, xe()), null;
  var n = Oa(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Uu(e);
    r !== 0 && ((t = r), (n = yc(e, r)));
  }
  if (n === 1) throw ((n = Wo), Ar(e, 0), Ln(e, t), et(e, xe()), n);
  if (n === 6) throw Error(D(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    mr(e, Ye, on),
    et(e, xe()),
    null
  );
}
function Ud(e, t) {
  var n = Z;
  Z |= 1;
  try {
    return e(t);
  } finally {
    (Z = n), Z === 0 && ((Oi = xe() + 500), nl && lr());
  }
}
function Ir(e) {
  $n !== null && $n.tag === 0 && !(Z & 6) && mi();
  var t = Z;
  Z |= 1;
  var n = xt.transition,
    r = te;
  try {
    if (((xt.transition = null), (te = 1), e)) return e();
  } finally {
    (te = r), (xt.transition = n), (Z = t), !(Z & 6) && lr();
  }
}
function Wd() {
  (rt = ii.current), ae(ii);
}
function Ar(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), HS(n)), be !== null))
    for (n = be.return; n !== null; ) {
      var r = n;
      switch ((Ed(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Sa();
          break;
        case 3:
          Di(), ae(Ze), ae(Fe), jd();
          break;
        case 5:
          Dd(r);
          break;
        case 4:
          Di();
          break;
        case 13:
          ae(de);
          break;
        case 19:
          ae(de);
          break;
        case 10:
          Ad(r.type._context);
          break;
        case 22:
        case 23:
          Wd();
      }
      n = n.return;
    }
  if (
    ((ke = e),
    (be = e = qn(e.current, null)),
    (Ne = rt = t),
    (Te = 0),
    (Wo = null),
    (Bd = sl = Lr = 0),
    (Ye = wo = null),
    vr !== null)
  ) {
    for (t = 0; t < vr.length; t++)
      if (((n = vr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    vr = null;
  }
  return e;
}
function bv(e, t) {
  do {
    var n = be;
    try {
      if ((kd(), (Js.current = Na), Ra)) {
        for (var r = he.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Ra = !1;
      }
      if (
        ((Or = 0),
        (Pe = Ce = he = null),
        (vo = !1),
        (Bo = 0),
        (zd.current = null),
        n === null || n.return === null)
      ) {
        (Te = 1), (Wo = t), (be = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = Ne),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var h = Yh(s);
          if (h !== null) {
            (h.flags &= -257),
              Xh(h, s, a, o, t),
              h.mode & 1 && Qh(o, u, t),
              (t = h),
              (l = u);
            var v = t.updateQueue;
            if (v === null) {
              var g = new Set();
              g.add(l), (t.updateQueue = g);
            } else v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Qh(o, u, t), Hd();
              break e;
            }
            l = Error(D(426));
          }
        } else if (ue && a.mode & 1) {
          var x = Yh(s);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              Xh(x, s, a, o, t),
              Td(ji(l, a));
            break e;
          }
        }
        (o = l = ji(l, a)),
          Te !== 4 && (Te = 2),
          wo === null ? (wo = [o]) : wo.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var m = ov(o, l, t);
              $h(o, m);
              break e;
            case 1:
              a = l;
              var p = o.type,
                y = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (Yn === null || !Yn.has(y))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var b = sv(o, a, t);
                $h(o, b);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Tv(n);
    } catch (C) {
      (t = C), be === n && n !== null && (be = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Cv() {
  var e = Ma.current;
  return (Ma.current = Na), e === null ? Na : e;
}
function Hd() {
  (Te === 0 || Te === 3 || Te === 2) && (Te = 4),
    ke === null || (!(Lr & 268435455) && !(sl & 268435455)) || Ln(ke, Ne);
}
function Oa(e, t) {
  var n = Z;
  Z |= 2;
  var r = Cv();
  (ke !== e || Ne !== t) && ((on = null), Ar(e, t));
  do
    try {
      gb();
      break;
    } catch (i) {
      bv(e, i);
    }
  while (!0);
  if ((kd(), (Z = n), (Ma.current = r), be !== null)) throw Error(D(261));
  return (ke = null), (Ne = 0), Te;
}
function gb() {
  for (; be !== null; ) Ev(be);
}
function yb() {
  for (; be !== null && !$1(); ) Ev(be);
}
function Ev(e) {
  var t = kv(e.alternate, e, rt);
  (e.memoizedProps = e.pendingProps),
    t === null ? Tv(e) : (be = t),
    (zd.current = null);
}
function Tv(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = cb(n, t)), n !== null)) {
        (n.flags &= 32767), (be = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Te = 6), (be = null);
        return;
      }
    } else if (((n = ub(n, t, rt)), n !== null)) {
      be = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      be = t;
      return;
    }
    be = t = e;
  } while (t !== null);
  Te === 0 && (Te = 5);
}
function mr(e, t, n) {
  var r = te,
    i = xt.transition;
  try {
    (xt.transition = null), (te = 1), vb(e, t, n, r);
  } finally {
    (xt.transition = i), (te = r);
  }
  return null;
}
function vb(e, t, n, r) {
  do mi();
  while ($n !== null);
  if (Z & 6) throw Error(D(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(D(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Z1(e, o),
    e === ke && ((be = ke = null), (Ne = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Is ||
      ((Is = !0),
      Av(ma, function () {
        return mi(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = xt.transition), (xt.transition = null);
    var s = te;
    te = 1;
    var a = Z;
    (Z |= 4),
      (zd.current = null),
      fb(e, n),
      xv(n, e),
      _S(Yu),
      (ya = !!Qu),
      (Yu = Qu = null),
      (e.current = n),
      hb(n),
      U1(),
      (Z = a),
      (te = s),
      (xt.transition = o);
  } else e.current = n;
  if (
    (Is && ((Is = !1), ($n = e), (ja = i)),
    (o = e.pendingLanes),
    o === 0 && (Yn = null),
    K1(n.stateNode),
    et(e, xe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Da) throw ((Da = !1), (e = mc), (mc = null), e);
  return (
    ja & 1 && e.tag !== 0 && mi(),
    (o = e.pendingLanes),
    o & 1 ? (e === gc ? So++ : ((So = 0), (gc = e))) : (So = 0),
    lr(),
    null
  );
}
function mi() {
  if ($n !== null) {
    var e = oy(ja),
      t = xt.transition,
      n = te;
    try {
      if (((xt.transition = null), (te = 16 > e ? 16 : e), $n === null))
        var r = !1;
      else {
        if (((e = $n), ($n = null), (ja = 0), Z & 6)) throw Error(D(331));
        var i = Z;
        for (Z |= 4, V = e.current; V !== null; ) {
          var o = V,
            s = o.child;
          if (V.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (V = u; V !== null; ) {
                  var c = V;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      xo(8, c, o);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (V = d);
                  else
                    for (; V !== null; ) {
                      c = V;
                      var f = c.sibling,
                        h = c.return;
                      if ((gv(c), c === u)) {
                        V = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = h), (V = f);
                        break;
                      }
                      V = h;
                    }
                }
              }
              var v = o.alternate;
              if (v !== null) {
                var g = v.child;
                if (g !== null) {
                  v.child = null;
                  do {
                    var x = g.sibling;
                    (g.sibling = null), (g = x);
                  } while (g !== null);
                }
              }
              V = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (V = s);
          else
            e: for (; V !== null; ) {
              if (((o = V), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    xo(9, o, o.return);
                }
              var m = o.sibling;
              if (m !== null) {
                (m.return = o.return), (V = m);
                break e;
              }
              V = o.return;
            }
        }
        var p = e.current;
        for (V = p; V !== null; ) {
          s = V;
          var y = s.child;
          if (s.subtreeFlags & 2064 && y !== null) (y.return = s), (V = y);
          else
            e: for (s = p; V !== null; ) {
              if (((a = V), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ol(9, a);
                  }
                } catch (C) {
                  ye(a, a.return, C);
                }
              if (a === s) {
                V = null;
                break e;
              }
              var b = a.sibling;
              if (b !== null) {
                (b.return = a.return), (V = b);
                break e;
              }
              V = a.return;
            }
        }
        if (
          ((Z = i), lr(), Yt && typeof Yt.onPostCommitFiberRoot == "function")
        )
          try {
            Yt.onPostCommitFiberRoot(qa, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (te = n), (xt.transition = t);
    }
  }
  return !1;
}
function up(e, t, n) {
  (t = ji(n, t)),
    (t = ov(e, t, 1)),
    (e = Qn(e, t, 1)),
    (t = We()),
    e !== null && (is(e, 1, t), et(e, t));
}
function ye(e, t, n) {
  if (e.tag === 3) up(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        up(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Yn === null || !Yn.has(r)))
        ) {
          (e = ji(n, e)),
            (e = sv(t, e, 1)),
            (t = Qn(t, e, 1)),
            (e = We()),
            t !== null && (is(t, 1, e), et(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function xb(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = We()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ke === e &&
      (Ne & n) === n &&
      (Te === 4 || (Te === 3 && (Ne & 130023424) === Ne && 500 > xe() - $d)
        ? Ar(e, 0)
        : (Bd |= n)),
    et(e, t);
}
function Pv(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ps), (Ps <<= 1), !(Ps & 130023424) && (Ps = 4194304))
      : (t = 1));
  var n = We();
  (e = hn(e, t)), e !== null && (is(e, t, n), et(e, n));
}
function wb(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Pv(e, n);
}
function Sb(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(D(314));
  }
  r !== null && r.delete(t), Pv(e, n);
}
var kv;
kv = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ze.current) Xe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Xe = !1), lb(e, t, n);
      Xe = !!(e.flags & 131072);
    }
  else (Xe = !1), ue && t.flags & 1048576 && My(t, Ea, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ta(e, t), (e = t.pendingProps);
      var i = Ri(t, Fe.current);
      pi(t, n), (i = Ld(null, t, r, e, i, n));
      var o = Id();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Je(r) ? ((o = !0), ba(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Nd(t),
            (i.updater = il),
            (t.stateNode = i),
            (i._reactInternals = t),
            ic(t, r, e, n),
            (t = ac(null, t, r, !0, o, n)))
          : ((t.tag = 0), ue && o && Cd(t), Be(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ta(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Cb(r)),
          (e = Rt(r, e)),
          i)
        ) {
          case 0:
            t = sc(null, t, r, e, n);
            break e;
          case 1:
            t = Jh(null, t, r, e, n);
            break e;
          case 11:
            t = qh(null, t, r, e, n);
            break e;
          case 14:
            t = Zh(null, t, r, Rt(r.type, e), n);
            break e;
        }
        throw Error(D(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Rt(r, i)),
        sc(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Rt(r, i)),
        Jh(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((cv(t), e === null)) throw Error(D(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Vy(e, t),
          ka(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = ji(Error(D(423)), t)), (t = ep(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = ji(Error(D(424)), t)), (t = ep(e, t, r, n, i));
            break e;
          } else
            for (
              ot = Gn(t.stateNode.containerInfo.firstChild),
                st = t,
                ue = !0,
                Ot = null,
                n = Ly(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Ni(), r === i)) {
            t = pn(e, t, n);
            break e;
          }
          Be(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        _y(t),
        e === null && tc(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        Xu(r, i) ? (s = null) : o !== null && Xu(r, o) && (t.flags |= 32),
        uv(e, t),
        Be(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && tc(t), null;
    case 13:
      return dv(e, t, n);
    case 4:
      return (
        Md(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Mi(t, null, r, n)) : Be(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Rt(r, i)),
        qh(e, t, r, i, n)
      );
    case 7:
      return Be(e, t, t.pendingProps, n), t.child;
    case 8:
      return Be(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Be(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          ie(Ta, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (Vt(o.value, s)) {
            if (o.children === i.children && !Ze.current) {
              t = pn(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                s = o.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (o.tag === 1) {
                      (l = cn(-1, n & -n)), (l.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (o.lanes |= n),
                      (l = o.alternate),
                      l !== null && (l.lanes |= n),
                      nc(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(D(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  nc(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        Be(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        pi(t, n),
        (i = St(i)),
        (r = r(i)),
        (t.flags |= 1),
        Be(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Rt(r, t.pendingProps)),
        (i = Rt(r.type, i)),
        Zh(e, t, r, i, n)
      );
    case 15:
      return av(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Rt(r, i)),
        ta(e, t),
        (t.tag = 1),
        Je(r) ? ((e = !0), ba(t)) : (e = !1),
        pi(t, n),
        iv(t, r, i),
        ic(t, r, i, n),
        ac(null, t, r, !0, e, n)
      );
    case 19:
      return fv(e, t, n);
    case 22:
      return lv(e, t, n);
  }
  throw Error(D(156, t.tag));
};
function Av(e, t) {
  return ty(e, t);
}
function bb(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function yt(e, t, n, r) {
  return new bb(e, t, n, r);
}
function Kd(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Cb(e) {
  if (typeof e == "function") return Kd(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === dd)) return 11;
    if (e === fd) return 14;
  }
  return 2;
}
function qn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = yt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ia(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) Kd(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Qr:
        return Rr(n.children, i, o, t);
      case cd:
        (s = 8), (i |= 8);
        break;
      case Au:
        return (
          (e = yt(12, n, t, i | 2)), (e.elementType = Au), (e.lanes = o), e
        );
      case Ru:
        return (e = yt(13, n, t, i)), (e.elementType = Ru), (e.lanes = o), e;
      case Nu:
        return (e = yt(19, n, t, i)), (e.elementType = Nu), (e.lanes = o), e;
      case _g:
        return al(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ig:
              s = 10;
              break e;
            case Vg:
              s = 9;
              break e;
            case dd:
              s = 11;
              break e;
            case fd:
              s = 14;
              break e;
            case Dn:
              (s = 16), (r = null);
              break e;
          }
        throw Error(D(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = yt(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Rr(e, t, n, r) {
  return (e = yt(7, e, r, t)), (e.lanes = n), e;
}
function al(e, t, n, r) {
  return (
    (e = yt(22, e, r, t)),
    (e.elementType = _g),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ru(e, t, n) {
  return (e = yt(6, e, null, t)), (e.lanes = n), e;
}
function iu(e, t, n) {
  return (
    (t = yt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Eb(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = _l(0)),
    (this.expirationTimes = _l(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = _l(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Gd(e, t, n, r, i, o, s, a, l) {
  return (
    (e = new Eb(e, t, n, a, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = yt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Nd(o),
    e
  );
}
function Tb(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Gr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Rv(e) {
  if (!e) return Jn;
  e = e._reactInternals;
  e: {
    if (Fr(e) !== e || e.tag !== 1) throw Error(D(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Je(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(D(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Je(n)) return Ry(e, n, t);
  }
  return t;
}
function Nv(e, t, n, r, i, o, s, a, l) {
  return (
    (e = Gd(n, r, !0, e, i, o, s, a, l)),
    (e.context = Rv(null)),
    (n = e.current),
    (r = We()),
    (i = Xn(n)),
    (o = cn(r, i)),
    (o.callback = t ?? null),
    Qn(n, o, i),
    (e.current.lanes = i),
    is(e, i, r),
    et(e, r),
    e
  );
}
function ll(e, t, n, r) {
  var i = t.current,
    o = We(),
    s = Xn(i);
  return (
    (n = Rv(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = cn(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Qn(i, t, s)),
    e !== null && (It(e, i, s, o), Zs(e, i, s)),
    s
  );
}
function La(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function cp(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Qd(e, t) {
  cp(e, t), (e = e.alternate) && cp(e, t);
}
function Pb() {
  return null;
}
var Mv =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Yd(e) {
  this._internalRoot = e;
}
ul.prototype.render = Yd.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(D(409));
  ll(e, t, null, null);
};
ul.prototype.unmount = Yd.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ir(function () {
      ll(null, e, null, null);
    }),
      (t[fn] = null);
  }
};
function ul(e) {
  this._internalRoot = e;
}
ul.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = ly();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < On.length && t !== 0 && t < On[n].priority; n++);
    On.splice(n, 0, e), n === 0 && cy(e);
  }
};
function Xd(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function cl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function dp() {}
function kb(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = La(s);
        o.call(u);
      };
    }
    var s = Nv(t, r, e, 0, null, !1, !1, "", dp);
    return (
      (e._reactRootContainer = s),
      (e[fn] = s.current),
      Io(e.nodeType === 8 ? e.parentNode : e),
      Ir(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = La(l);
      a.call(u);
    };
  }
  var l = Gd(e, 0, !1, null, null, !1, !1, "", dp);
  return (
    (e._reactRootContainer = l),
    (e[fn] = l.current),
    Io(e.nodeType === 8 ? e.parentNode : e),
    Ir(function () {
      ll(t, l, n, r);
    }),
    l
  );
}
function dl(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = La(s);
        a.call(l);
      };
    }
    ll(t, s, e, i);
  } else s = kb(n, t, e, i, r);
  return La(s);
}
sy = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = uo(t.pendingLanes);
        n !== 0 &&
          (md(t, n | 1), et(t, xe()), !(Z & 6) && ((Oi = xe() + 500), lr()));
      }
      break;
    case 13:
      Ir(function () {
        var r = hn(e, 1);
        if (r !== null) {
          var i = We();
          It(r, e, 1, i);
        }
      }),
        Qd(e, 1);
  }
};
gd = function (e) {
  if (e.tag === 13) {
    var t = hn(e, 134217728);
    if (t !== null) {
      var n = We();
      It(t, e, 134217728, n);
    }
    Qd(e, 134217728);
  }
};
ay = function (e) {
  if (e.tag === 13) {
    var t = Xn(e),
      n = hn(e, t);
    if (n !== null) {
      var r = We();
      It(n, e, t, r);
    }
    Qd(e, t);
  }
};
ly = function () {
  return te;
};
uy = function (e, t) {
  var n = te;
  try {
    return (te = e), t();
  } finally {
    te = n;
  }
};
zu = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ju(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = tl(r);
            if (!i) throw Error(D(90));
            zg(r), ju(r, i);
          }
        }
      }
      break;
    case "textarea":
      $g(e, n);
      break;
    case "select":
      (t = n.value), t != null && ci(e, !!n.multiple, t, !1);
  }
};
Yg = Ud;
Xg = Ir;
var Ab = { usingClientEntryPoint: !1, Events: [ss, Zr, tl, Gg, Qg, Ud] },
  ro = {
    findFiberByHostInstance: yr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Rb = {
    bundleType: ro.bundleType,
    version: ro.version,
    rendererPackageName: ro.rendererPackageName,
    rendererConfig: ro.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: wn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Jg(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ro.findFiberByHostInstance || Pb,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Vs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Vs.isDisabled && Vs.supportsFiber)
    try {
      (qa = Vs.inject(Rb)), (Yt = Vs);
    } catch {}
}
ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ab;
ut.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Xd(t)) throw Error(D(200));
  return Tb(e, t, null, n);
};
ut.createRoot = function (e, t) {
  if (!Xd(e)) throw Error(D(299));
  var n = !1,
    r = "",
    i = Mv;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Gd(e, 1, !1, null, null, n, !1, r, i)),
    (e[fn] = t.current),
    Io(e.nodeType === 8 ? e.parentNode : e),
    new Yd(t)
  );
};
ut.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(D(188))
      : ((e = Object.keys(e).join(",")), Error(D(268, e)));
  return (e = Jg(t)), (e = e === null ? null : e.stateNode), e;
};
ut.flushSync = function (e) {
  return Ir(e);
};
ut.hydrate = function (e, t, n) {
  if (!cl(t)) throw Error(D(200));
  return dl(null, e, t, !0, n);
};
ut.hydrateRoot = function (e, t, n) {
  if (!Xd(e)) throw Error(D(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = Mv;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Nv(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[fn] = t.current),
    Io(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new ul(t);
};
ut.render = function (e, t, n) {
  if (!cl(t)) throw Error(D(200));
  return dl(null, e, t, !1, n);
};
ut.unmountComponentAtNode = function (e) {
  if (!cl(e)) throw Error(D(40));
  return e._reactRootContainer
    ? (Ir(function () {
        dl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[fn] = null);
        });
      }),
      !0)
    : !1;
};
ut.unstable_batchedUpdates = Ud;
ut.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!cl(n)) throw Error(D(200));
  if (e == null || e._reactInternals === void 0) throw Error(D(38));
  return dl(e, t, n, !1, r);
};
ut.version = "18.3.1-next-f1338f8080-20240426";
function Dv() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dv);
    } catch (e) {
      console.error(e);
    }
}
Dv(), (Dg.exports = ut);
var ls = Dg.exports;
const jv = xg(ls);
var Ov,
  fp = ls;
(Ov = fp.createRoot), fp.hydrateRoot;
const Nb = 1,
  Mb = 1e6;
let ou = 0;
function Db() {
  return (ou = (ou + 1) % Number.MAX_SAFE_INTEGER), ou.toString();
}
const su = new Map(),
  hp = (e) => {
    if (su.has(e)) return;
    const t = setTimeout(() => {
      su.delete(e), bo({ type: "REMOVE_TOAST", toastId: e });
    }, Mb);
    su.set(e, t);
  },
  jb = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, Nb) };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map((n) =>
            n.id === t.toast.id ? { ...n, ...t.toast } : n
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: n } = t;
        return (
          n
            ? hp(n)
            : e.toasts.forEach((r) => {
                hp(r.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((r) =>
              r.id === n || n === void 0 ? { ...r, open: !1 } : r
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
    }
  },
  oa = [];
let sa = { toasts: [] };
function bo(e) {
  (sa = jb(sa, e)),
    oa.forEach((t) => {
      t(sa);
    });
}
function Ob({ ...e }) {
  const t = Db(),
    n = (i) => bo({ type: "UPDATE_TOAST", toast: { ...i, id: t } }),
    r = () => bo({ type: "DISMISS_TOAST", toastId: t });
  return (
    bo({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (i) => {
          i || r();
        },
      },
    }),
    { id: t, dismiss: r, update: n }
  );
}
function Lv() {
  const [e, t] = w.useState(sa);
  return (
    w.useEffect(
      () => (
        oa.push(t),
        () => {
          const n = oa.indexOf(t);
          n > -1 && oa.splice(n, 1);
        }
      ),
      [e]
    ),
    {
      ...e,
      toast: Ob,
      dismiss: (n) => bo({ type: "DISMISS_TOAST", toastId: n }),
    }
  );
}
function Ee(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (i) {
    if ((e == null || e(i), n === !1 || !i.defaultPrevented))
      return t == null ? void 0 : t(i);
  };
}
function pp(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function Iv(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((i) => {
      const o = pp(i, t);
      return !n && typeof o == "function" && (n = !0), o;
    });
    if (n)
      return () => {
        for (let i = 0; i < r.length; i++) {
          const o = r[i];
          typeof o == "function" ? o() : pp(e[i], null);
        }
      };
  };
}
function _t(...e) {
  return w.useCallback(Iv(...e), e);
}
function fl(e, t = []) {
  let n = [];
  function r(o, s) {
    const a = w.createContext(s),
      l = n.length;
    n = [...n, s];
    const u = (d) => {
      var m;
      const { scope: f, children: h, ...v } = d,
        g = ((m = f == null ? void 0 : f[e]) == null ? void 0 : m[l]) || a,
        x = w.useMemo(() => v, Object.values(v));
      return S.jsx(g.Provider, { value: x, children: h });
    };
    u.displayName = o + "Provider";
    function c(d, f) {
      var g;
      const h = ((g = f == null ? void 0 : f[e]) == null ? void 0 : g[l]) || a,
        v = w.useContext(h);
      if (v) return v;
      if (s !== void 0) return s;
      throw new Error(`\`${d}\` must be used within \`${o}\``);
    }
    return [u, c];
  }
  const i = () => {
    const o = n.map((s) => w.createContext(s));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || o;
      return w.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return (i.scopeName = e), [r, Lb(i, ...t)];
}
function Lb(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((i) => ({ useScope: i(), scopeName: i.scopeName }));
    return function (o) {
      const s = r.reduce((a, { useScope: l, scopeName: u }) => {
        const d = l(o)[`__scope${u}`];
        return { ...a, ...d };
      }, {});
      return w.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function Ia(e) {
  const t = Vb(e),
    n = w.forwardRef((r, i) => {
      const { children: o, ...s } = r,
        a = w.Children.toArray(o),
        l = a.find(Fb);
      if (l) {
        const u = l.props.children,
          c = a.map((d) =>
            d === l
              ? w.Children.count(u) > 1
                ? w.Children.only(null)
                : w.isValidElement(u)
                ? u.props.children
                : null
              : d
          );
        return S.jsx(t, {
          ...s,
          ref: i,
          children: w.isValidElement(u) ? w.cloneElement(u, void 0, c) : null,
        });
      }
      return S.jsx(t, { ...s, ref: i, children: o });
    });
  return (n.displayName = `${e}.Slot`), n;
}
var Ib = Ia("Slot");
function Vb(e) {
  const t = w.forwardRef((n, r) => {
    const { children: i, ...o } = n;
    if (w.isValidElement(i)) {
      const s = Bb(i),
        a = zb(o, i.props);
      return (
        i.type !== w.Fragment && (a.ref = r ? Iv(r, s) : s),
        w.cloneElement(i, a)
      );
    }
    return w.Children.count(i) > 1 ? w.Children.only(null) : null;
  });
  return (t.displayName = `${e}.SlotClone`), t;
}
var Vv = Symbol("radix.slottable");
function _b(e) {
  const t = ({ children: n }) => S.jsx(S.Fragment, { children: n });
  return (t.displayName = `${e}.Slottable`), (t.__radixId = Vv), t;
}
function Fb(e) {
  return (
    w.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === Vv
  );
}
function zb(e, t) {
  const n = { ...t };
  for (const r in t) {
    const i = e[r],
      o = t[r];
    /^on[A-Z]/.test(r)
      ? i && o
        ? (n[r] = (...a) => {
            const l = o(...a);
            return i(...a), l;
          })
        : i && (n[r] = i)
      : r === "style"
      ? (n[r] = { ...i, ...o })
      : r === "className" && (n[r] = [i, o].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Bb(e) {
  var r, i;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (i = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : i.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function $b(e) {
  const t = e + "CollectionProvider",
    [n, r] = fl(t),
    [i, o] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    s = (g) => {
      const { scope: x, children: m } = g,
        p = j.useRef(null),
        y = j.useRef(new Map()).current;
      return S.jsx(i, { scope: x, itemMap: y, collectionRef: p, children: m });
    };
  s.displayName = t;
  const a = e + "CollectionSlot",
    l = Ia(a),
    u = j.forwardRef((g, x) => {
      const { scope: m, children: p } = g,
        y = o(a, m),
        b = _t(x, y.collectionRef);
      return S.jsx(l, { ref: b, children: p });
    });
  u.displayName = a;
  const c = e + "CollectionItemSlot",
    d = "data-radix-collection-item",
    f = Ia(c),
    h = j.forwardRef((g, x) => {
      const { scope: m, children: p, ...y } = g,
        b = j.useRef(null),
        C = _t(x, b),
        E = o(c, m);
      return (
        j.useEffect(
          () => (
            E.itemMap.set(b, { ref: b, ...y }), () => void E.itemMap.delete(b)
          )
        ),
        S.jsx(f, { [d]: "", ref: C, children: p })
      );
    });
  h.displayName = c;
  function v(g) {
    const x = o(e + "CollectionConsumer", g);
    return j.useCallback(() => {
      const p = x.collectionRef.current;
      if (!p) return [];
      const y = Array.from(p.querySelectorAll(`[${d}]`));
      return Array.from(x.itemMap.values()).sort(
        (E, T) => y.indexOf(E.ref.current) - y.indexOf(T.ref.current)
      );
    }, [x.collectionRef, x.itemMap]);
  }
  return [{ Provider: s, Slot: u, ItemSlot: h }, v, r];
}
var Ub = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  nt = Ub.reduce((e, t) => {
    const n = Ia(`Primitive.${t}`),
      r = w.forwardRef((i, o) => {
        const { asChild: s, ...a } = i,
          l = s ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          S.jsx(l, { ...a, ref: o })
        );
      });
    return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
  }, {});
function _v(e, t) {
  e && ls.flushSync(() => e.dispatchEvent(t));
}
function er(e) {
  const t = w.useRef(e);
  return (
    w.useEffect(() => {
      t.current = e;
    }),
    w.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      []
    )
  );
}
function Wb(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = er(e);
  w.useEffect(() => {
    const r = (i) => {
      i.key === "Escape" && n(i);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var Hb = "DismissableLayer",
  xc = "dismissableLayer.update",
  Kb = "dismissableLayer.pointerDownOutside",
  Gb = "dismissableLayer.focusOutside",
  mp,
  Fv = w.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  qd = w.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: i,
        onFocusOutside: o,
        onInteractOutside: s,
        onDismiss: a,
        ...l
      } = e,
      u = w.useContext(Fv),
      [c, d] = w.useState(null),
      f =
        (c == null ? void 0 : c.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, h] = w.useState({}),
      v = _t(t, (T) => d(T)),
      g = Array.from(u.layers),
      [x] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      m = g.indexOf(x),
      p = c ? g.indexOf(c) : -1,
      y = u.layersWithOutsidePointerEventsDisabled.size > 0,
      b = p >= m,
      C = Yb((T) => {
        const P = T.target,
          M = [...u.branches].some((N) => N.contains(P));
        !b ||
          M ||
          (i == null || i(T),
          s == null || s(T),
          T.defaultPrevented || a == null || a());
      }, f),
      E = Xb((T) => {
        const P = T.target;
        [...u.branches].some((N) => N.contains(P)) ||
          (o == null || o(T),
          s == null || s(T),
          T.defaultPrevented || a == null || a());
      }, f);
    return (
      Wb((T) => {
        p === u.layers.size - 1 &&
          (r == null || r(T),
          !T.defaultPrevented && a && (T.preventDefault(), a()));
      }, f),
      w.useEffect(() => {
        if (c)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((mp = f.body.style.pointerEvents),
                (f.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            gp(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (f.body.style.pointerEvents = mp);
            }
          );
      }, [c, f, n, u]),
      w.useEffect(
        () => () => {
          c &&
            (u.layers.delete(c),
            u.layersWithOutsidePointerEventsDisabled.delete(c),
            gp());
        },
        [c, u]
      ),
      w.useEffect(() => {
        const T = () => h({});
        return (
          document.addEventListener(xc, T),
          () => document.removeEventListener(xc, T)
        );
      }, []),
      S.jsx(nt.div, {
        ...l,
        ref: v,
        style: {
          pointerEvents: y ? (b ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: Ee(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: Ee(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: Ee(
          e.onPointerDownCapture,
          C.onPointerDownCapture
        ),
      })
    );
  });
qd.displayName = Hb;
var Qb = "DismissableLayerBranch",
  zv = w.forwardRef((e, t) => {
    const n = w.useContext(Fv),
      r = w.useRef(null),
      i = _t(t, r);
    return (
      w.useEffect(() => {
        const o = r.current;
        if (o)
          return (
            n.branches.add(o),
            () => {
              n.branches.delete(o);
            }
          );
      }, [n.branches]),
      S.jsx(nt.div, { ...e, ref: i })
    );
  });
zv.displayName = Qb;
function Yb(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = er(e),
    r = w.useRef(!1),
    i = w.useRef(() => {});
  return (
    w.useEffect(() => {
      const o = (a) => {
          if (a.target && !r.current) {
            let l = function () {
              Bv(Kb, n, u, { discrete: !0 });
            };
            const u = { originalEvent: a };
            a.pointerType === "touch"
              ? (t.removeEventListener("click", i.current),
                (i.current = l),
                t.addEventListener("click", i.current, { once: !0 }))
              : l();
          } else t.removeEventListener("click", i.current);
          r.current = !1;
        },
        s = window.setTimeout(() => {
          t.addEventListener("pointerdown", o);
        }, 0);
      return () => {
        window.clearTimeout(s),
          t.removeEventListener("pointerdown", o),
          t.removeEventListener("click", i.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function Xb(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = er(e),
    r = w.useRef(!1);
  return (
    w.useEffect(() => {
      const i = (o) => {
        o.target &&
          !r.current &&
          Bv(Gb, n, { originalEvent: o }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", i),
        () => t.removeEventListener("focusin", i)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function gp() {
  const e = new CustomEvent(xc);
  document.dispatchEvent(e);
}
function Bv(e, t, n, { discrete: r }) {
  const i = n.originalEvent.target,
    o = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && i.addEventListener(e, t, { once: !0 }),
    r ? _v(i, o) : i.dispatchEvent(o);
}
var qb = qd,
  Zb = zv,
  tr = globalThis != null && globalThis.document ? w.useLayoutEffect : () => {},
  Jb = "Portal",
  $v = w.forwardRef((e, t) => {
    var a;
    const { container: n, ...r } = e,
      [i, o] = w.useState(!1);
    tr(() => o(!0), []);
    const s =
      n ||
      (i &&
        ((a = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : a.body));
    return s ? jv.createPortal(S.jsx(nt.div, { ...r, ref: t }), s) : null;
  });
$v.displayName = Jb;
function eC(e, t) {
  return w.useReducer((n, r) => t[n][r] ?? n, e);
}
var Zd = (e) => {
  const { present: t, children: n } = e,
    r = tC(t),
    i =
      typeof n == "function" ? n({ present: r.isPresent }) : w.Children.only(n),
    o = _t(r.ref, nC(i));
  return typeof n == "function" || r.isPresent
    ? w.cloneElement(i, { ref: o })
    : null;
};
Zd.displayName = "Presence";
function tC(e) {
  const [t, n] = w.useState(),
    r = w.useRef(null),
    i = w.useRef(e),
    o = w.useRef("none"),
    s = e ? "mounted" : "unmounted",
    [a, l] = eC(s, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    w.useEffect(() => {
      const u = _s(r.current);
      o.current = a === "mounted" ? u : "none";
    }, [a]),
    tr(() => {
      const u = r.current,
        c = i.current;
      if (c !== e) {
        const f = o.current,
          h = _s(u);
        e
          ? l("MOUNT")
          : h === "none" || (u == null ? void 0 : u.display) === "none"
          ? l("UNMOUNT")
          : l(c && f !== h ? "ANIMATION_OUT" : "UNMOUNT"),
          (i.current = e);
      }
    }, [e, l]),
    tr(() => {
      if (t) {
        let u;
        const c = t.ownerDocument.defaultView ?? window,
          d = (h) => {
            const g = _s(r.current).includes(h.animationName);
            if (h.target === t && g && (l("ANIMATION_END"), !i.current)) {
              const x = t.style.animationFillMode;
              (t.style.animationFillMode = "forwards"),
                (u = c.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = x);
                }));
            }
          },
          f = (h) => {
            h.target === t && (o.current = _s(r.current));
          };
        return (
          t.addEventListener("animationstart", f),
          t.addEventListener("animationcancel", d),
          t.addEventListener("animationend", d),
          () => {
            c.clearTimeout(u),
              t.removeEventListener("animationstart", f),
              t.removeEventListener("animationcancel", d),
              t.removeEventListener("animationend", d);
          }
        );
      } else l("ANIMATION_END");
    }, [t, l]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: w.useCallback((u) => {
        (r.current = u ? getComputedStyle(u) : null), n(u);
      }, []),
    }
  );
}
function _s(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function nC(e) {
  var r, i;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (i = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : i.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var rC = Ng[" useInsertionEffect ".trim().toString()] || tr;
function iC({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
  const [i, o, s] = oC({ defaultProp: t, onChange: n }),
    a = e !== void 0,
    l = a ? e : i;
  {
    const c = w.useRef(e !== void 0);
    w.useEffect(() => {
      const d = c.current;
      d !== a &&
        console.warn(
          `${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${
            a ? "controlled" : "uncontrolled"
          }. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        ),
        (c.current = a);
    }, [a, r]);
  }
  const u = w.useCallback(
    (c) => {
      var d;
      if (a) {
        const f = sC(c) ? c(e) : c;
        f !== e && ((d = s.current) == null || d.call(s, f));
      } else o(c);
    },
    [a, e, o, s]
  );
  return [l, u];
}
function oC({ defaultProp: e, onChange: t }) {
  const [n, r] = w.useState(e),
    i = w.useRef(n),
    o = w.useRef(t);
  return (
    rC(() => {
      o.current = t;
    }, [t]),
    w.useEffect(() => {
      var s;
      i.current !== n &&
        ((s = o.current) == null || s.call(o, n), (i.current = n));
    }, [n, i]),
    [n, r, o]
  );
}
function sC(e) {
  return typeof e == "function";
}
var aC = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  lC = "VisuallyHidden",
  hl = w.forwardRef((e, t) =>
    S.jsx(nt.span, { ...e, ref: t, style: { ...aC, ...e.style } })
  );
hl.displayName = lC;
var uC = hl,
  Jd = "ToastProvider",
  [ef, cC, dC] = $b("Toast"),
  [Uv, iD] = fl("Toast", [dC]),
  [fC, pl] = Uv(Jd),
  Wv = (e) => {
    const {
        __scopeToast: t,
        label: n = "Notification",
        duration: r = 5e3,
        swipeDirection: i = "right",
        swipeThreshold: o = 50,
        children: s,
      } = e,
      [a, l] = w.useState(null),
      [u, c] = w.useState(0),
      d = w.useRef(!1),
      f = w.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${Jd}\`. Expected non-empty \`string\`.`
        ),
      S.jsx(ef.Provider, {
        scope: t,
        children: S.jsx(fC, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: i,
          swipeThreshold: o,
          toastCount: u,
          viewport: a,
          onViewportChange: l,
          onToastAdd: w.useCallback(() => c((h) => h + 1), []),
          onToastRemove: w.useCallback(() => c((h) => h - 1), []),
          isFocusedToastEscapeKeyDownRef: d,
          isClosePausedRef: f,
          children: s,
        }),
      })
    );
  };
Wv.displayName = Jd;
var Hv = "ToastViewport",
  hC = ["F8"],
  wc = "toast.viewportPause",
  Sc = "toast.viewportResume",
  Kv = w.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        hotkey: r = hC,
        label: i = "Notifications ({hotkey})",
        ...o
      } = e,
      s = pl(Hv, n),
      a = cC(n),
      l = w.useRef(null),
      u = w.useRef(null),
      c = w.useRef(null),
      d = w.useRef(null),
      f = _t(t, d, s.onViewportChange),
      h = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      v = s.toastCount > 0;
    w.useEffect(() => {
      const x = (m) => {
        var y;
        r.length !== 0 &&
          r.every((b) => m[b] || m.code === b) &&
          ((y = d.current) == null || y.focus());
      };
      return (
        document.addEventListener("keydown", x),
        () => document.removeEventListener("keydown", x)
      );
    }, [r]),
      w.useEffect(() => {
        const x = l.current,
          m = d.current;
        if (v && x && m) {
          const p = () => {
              if (!s.isClosePausedRef.current) {
                const E = new CustomEvent(wc);
                m.dispatchEvent(E), (s.isClosePausedRef.current = !0);
              }
            },
            y = () => {
              if (s.isClosePausedRef.current) {
                const E = new CustomEvent(Sc);
                m.dispatchEvent(E), (s.isClosePausedRef.current = !1);
              }
            },
            b = (E) => {
              !x.contains(E.relatedTarget) && y();
            },
            C = () => {
              x.contains(document.activeElement) || y();
            };
          return (
            x.addEventListener("focusin", p),
            x.addEventListener("focusout", b),
            x.addEventListener("pointermove", p),
            x.addEventListener("pointerleave", C),
            window.addEventListener("blur", p),
            window.addEventListener("focus", y),
            () => {
              x.removeEventListener("focusin", p),
                x.removeEventListener("focusout", b),
                x.removeEventListener("pointermove", p),
                x.removeEventListener("pointerleave", C),
                window.removeEventListener("blur", p),
                window.removeEventListener("focus", y);
            }
          );
        }
      }, [v, s.isClosePausedRef]);
    const g = w.useCallback(
      ({ tabbingDirection: x }) => {
        const p = a().map((y) => {
          const b = y.ref.current,
            C = [b, ...PC(b)];
          return x === "forwards" ? C : C.reverse();
        });
        return (x === "forwards" ? p.reverse() : p).flat();
      },
      [a]
    );
    return (
      w.useEffect(() => {
        const x = d.current;
        if (x) {
          const m = (p) => {
            var C, E, T;
            const y = p.altKey || p.ctrlKey || p.metaKey;
            if (p.key === "Tab" && !y) {
              const P = document.activeElement,
                M = p.shiftKey;
              if (p.target === x && M) {
                (C = u.current) == null || C.focus();
                return;
              }
              const I = g({ tabbingDirection: M ? "backwards" : "forwards" }),
                G = I.findIndex((O) => O === P);
              au(I.slice(G + 1))
                ? p.preventDefault()
                : M
                ? (E = u.current) == null || E.focus()
                : (T = c.current) == null || T.focus();
            }
          };
          return (
            x.addEventListener("keydown", m),
            () => x.removeEventListener("keydown", m)
          );
        }
      }, [a, g]),
      S.jsxs(Zb, {
        ref: l,
        role: "region",
        "aria-label": i.replace("{hotkey}", h),
        tabIndex: -1,
        style: { pointerEvents: v ? void 0 : "none" },
        children: [
          v &&
            S.jsx(bc, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const x = g({ tabbingDirection: "forwards" });
                au(x);
              },
            }),
          S.jsx(ef.Slot, {
            scope: n,
            children: S.jsx(nt.ol, { tabIndex: -1, ...o, ref: f }),
          }),
          v &&
            S.jsx(bc, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                const x = g({ tabbingDirection: "backwards" });
                au(x);
              },
            }),
        ],
      })
    );
  });
Kv.displayName = Hv;
var Gv = "ToastFocusProxy",
  bc = w.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...i } = e,
      o = pl(Gv, n);
    return S.jsx(hl, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...i,
      ref: t,
      style: { position: "fixed" },
      onFocus: (s) => {
        var u;
        const a = s.relatedTarget;
        !((u = o.viewport) != null && u.contains(a)) && r();
      },
    });
  });
bc.displayName = Gv;
var us = "Toast",
  pC = "toast.swipeStart",
  mC = "toast.swipeMove",
  gC = "toast.swipeCancel",
  yC = "toast.swipeEnd",
  Qv = w.forwardRef((e, t) => {
    const { forceMount: n, open: r, defaultOpen: i, onOpenChange: o, ...s } = e,
      [a, l] = iC({ prop: r, defaultProp: i ?? !0, onChange: o, caller: us });
    return S.jsx(Zd, {
      present: n || a,
      children: S.jsx(wC, {
        open: a,
        ...s,
        ref: t,
        onClose: () => l(!1),
        onPause: er(e.onPause),
        onResume: er(e.onResume),
        onSwipeStart: Ee(e.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: Ee(e.onSwipeMove, (u) => {
          const { x: c, y: d } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "move"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${c}px`
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${d}px`
            );
        }),
        onSwipeCancel: Ee(e.onSwipeCancel, (u) => {
          u.currentTarget.setAttribute("data-swipe", "cancel"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: Ee(e.onSwipeEnd, (u) => {
          const { x: c, y: d } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "end"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${c}px`
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${d}px`
            ),
            l(!1);
        }),
      }),
    });
  });
Qv.displayName = us;
var [vC, xC] = Uv(us, { onClose() {} }),
  wC = w.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: i,
        open: o,
        onClose: s,
        onEscapeKeyDown: a,
        onPause: l,
        onResume: u,
        onSwipeStart: c,
        onSwipeMove: d,
        onSwipeCancel: f,
        onSwipeEnd: h,
        ...v
      } = e,
      g = pl(us, n),
      [x, m] = w.useState(null),
      p = _t(t, (O) => m(O)),
      y = w.useRef(null),
      b = w.useRef(null),
      C = i || g.duration,
      E = w.useRef(0),
      T = w.useRef(C),
      P = w.useRef(0),
      { onToastAdd: M, onToastRemove: N } = g,
      F = er(() => {
        var Q;
        (x == null ? void 0 : x.contains(document.activeElement)) &&
          ((Q = g.viewport) == null || Q.focus()),
          s();
      }),
      I = w.useCallback(
        (O) => {
          !O ||
            O === 1 / 0 ||
            (window.clearTimeout(P.current),
            (E.current = new Date().getTime()),
            (P.current = window.setTimeout(F, O)));
        },
        [F]
      );
    w.useEffect(() => {
      const O = g.viewport;
      if (O) {
        const Q = () => {
            I(T.current), u == null || u();
          },
          $ = () => {
            const _ = new Date().getTime() - E.current;
            (T.current = T.current - _),
              window.clearTimeout(P.current),
              l == null || l();
          };
        return (
          O.addEventListener(wc, $),
          O.addEventListener(Sc, Q),
          () => {
            O.removeEventListener(wc, $), O.removeEventListener(Sc, Q);
          }
        );
      }
    }, [g.viewport, C, l, u, I]),
      w.useEffect(() => {
        o && !g.isClosePausedRef.current && I(C);
      }, [o, C, g.isClosePausedRef, I]),
      w.useEffect(() => (M(), () => N()), [M, N]);
    const G = w.useMemo(() => (x ? t0(x) : null), [x]);
    return g.viewport
      ? S.jsxs(S.Fragment, {
          children: [
            G &&
              S.jsx(SC, {
                __scopeToast: n,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: G,
              }),
            S.jsx(vC, {
              scope: n,
              onClose: F,
              children: ls.createPortal(
                S.jsx(ef.ItemSlot, {
                  scope: n,
                  children: S.jsx(qb, {
                    asChild: !0,
                    onEscapeKeyDown: Ee(a, () => {
                      g.isFocusedToastEscapeKeyDownRef.current || F(),
                        (g.isFocusedToastEscapeKeyDownRef.current = !1);
                    }),
                    children: S.jsx(nt.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": o ? "open" : "closed",
                      "data-swipe-direction": g.swipeDirection,
                      ...v,
                      ref: p,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: Ee(e.onKeyDown, (O) => {
                        O.key === "Escape" &&
                          (a == null || a(O.nativeEvent),
                          O.nativeEvent.defaultPrevented ||
                            ((g.isFocusedToastEscapeKeyDownRef.current = !0),
                            F()));
                      }),
                      onPointerDown: Ee(e.onPointerDown, (O) => {
                        O.button === 0 &&
                          (y.current = { x: O.clientX, y: O.clientY });
                      }),
                      onPointerMove: Ee(e.onPointerMove, (O) => {
                        if (!y.current) return;
                        const Q = O.clientX - y.current.x,
                          $ = O.clientY - y.current.y,
                          _ = !!b.current,
                          k = ["left", "right"].includes(g.swipeDirection),
                          R = ["left", "up"].includes(g.swipeDirection)
                            ? Math.min
                            : Math.max,
                          L = k ? R(0, Q) : 0,
                          U = k ? 0 : R(0, $),
                          z = O.pointerType === "touch" ? 10 : 2,
                          Y = { x: L, y: U },
                          q = { originalEvent: O, delta: Y };
                        _
                          ? ((b.current = Y), Fs(mC, d, q, { discrete: !1 }))
                          : yp(Y, g.swipeDirection, z)
                          ? ((b.current = Y),
                            Fs(pC, c, q, { discrete: !1 }),
                            O.target.setPointerCapture(O.pointerId))
                          : (Math.abs(Q) > z || Math.abs($) > z) &&
                            (y.current = null);
                      }),
                      onPointerUp: Ee(e.onPointerUp, (O) => {
                        const Q = b.current,
                          $ = O.target;
                        if (
                          ($.hasPointerCapture(O.pointerId) &&
                            $.releasePointerCapture(O.pointerId),
                          (b.current = null),
                          (y.current = null),
                          Q)
                        ) {
                          const _ = O.currentTarget,
                            k = { originalEvent: O, delta: Q };
                          yp(Q, g.swipeDirection, g.swipeThreshold)
                            ? Fs(yC, h, k, { discrete: !0 })
                            : Fs(gC, f, k, { discrete: !0 }),
                            _.addEventListener(
                              "click",
                              (R) => R.preventDefault(),
                              { once: !0 }
                            );
                        }
                      }),
                    }),
                  }),
                }),
                g.viewport
              ),
            }),
          ],
        })
      : null;
  }),
  SC = (e) => {
    const { __scopeToast: t, children: n, ...r } = e,
      i = pl(us, t),
      [o, s] = w.useState(!1),
      [a, l] = w.useState(!1);
    return (
      EC(() => s(!0)),
      w.useEffect(() => {
        const u = window.setTimeout(() => l(!0), 1e3);
        return () => window.clearTimeout(u);
      }, []),
      a
        ? null
        : S.jsx($v, {
            asChild: !0,
            children: S.jsx(hl, {
              ...r,
              children:
                o && S.jsxs(S.Fragment, { children: [i.label, " ", n] }),
            }),
          })
    );
  },
  bC = "ToastTitle",
  Yv = w.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return S.jsx(nt.div, { ...r, ref: t });
  });
Yv.displayName = bC;
var CC = "ToastDescription",
  Xv = w.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return S.jsx(nt.div, { ...r, ref: t });
  });
Xv.displayName = CC;
var qv = "ToastAction",
  Zv = w.forwardRef((e, t) => {
    const { altText: n, ...r } = e;
    return n.trim()
      ? S.jsx(e0, {
          altText: n,
          asChild: !0,
          children: S.jsx(tf, { ...r, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${qv}\`. Expected non-empty \`string\`.`
        ),
        null);
  });
Zv.displayName = qv;
var Jv = "ToastClose",
  tf = w.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e,
      i = xC(Jv, n);
    return S.jsx(e0, {
      asChild: !0,
      children: S.jsx(nt.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: Ee(e.onClick, i.onClose),
      }),
    });
  });
tf.displayName = Jv;
var e0 = w.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...i } = e;
  return S.jsx(nt.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...i,
    ref: t,
  });
});
function t0(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        TC(r))
      ) {
        const i = r.ariaHidden || r.hidden || r.style.display === "none",
          o = r.dataset.radixToastAnnounceExclude === "";
        if (!i)
          if (o) {
            const s = r.dataset.radixToastAnnounceAlt;
            s && t.push(s);
          } else t.push(...t0(r));
      }
    }),
    t
  );
}
function Fs(e, t, n, { discrete: r }) {
  const i = n.originalEvent.currentTarget,
    o = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && i.addEventListener(e, t, { once: !0 }),
    r ? _v(i, o) : i.dispatchEvent(o);
}
var yp = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    i = Math.abs(e.y),
    o = r > i;
  return t === "left" || t === "right" ? o && r > n : !o && i > n;
};
function EC(e = () => {}) {
  const t = er(e);
  tr(() => {
    let n = 0,
      r = 0;
    return (
      (n = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(t))
      )),
      () => {
        window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
      }
    );
  }, [t]);
}
function TC(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function PC(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const i = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || i
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function au(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t)
  );
}
var kC = Wv,
  n0 = Kv,
  r0 = Qv,
  i0 = Yv,
  o0 = Xv,
  s0 = Zv,
  a0 = tf;
function l0(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++)
        e[t] && (n = l0(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function u0() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = l0(e)) && (r && (r += " "), (r += t));
  return r;
}
const vp = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  xp = u0,
  nf = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return xp(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className
      );
    const { variants: i, defaultVariants: o } = t,
      s = Object.keys(i).map((u) => {
        const c = n == null ? void 0 : n[u],
          d = o == null ? void 0 : o[u];
        if (c === null) return null;
        const f = vp(c) || vp(d);
        return i[u][f];
      }),
      a =
        n &&
        Object.entries(n).reduce((u, c) => {
          let [d, f] = c;
          return f === void 0 || (u[d] = f), u;
        }, {}),
      l =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, c) => {
              let { class: d, className: f, ...h } = c;
              return Object.entries(h).every((v) => {
                let [g, x] = v;
                return Array.isArray(x)
                  ? x.includes({ ...o, ...a }[g])
                  : { ...o, ...a }[g] === x;
              })
                ? [...u, d, f]
                : u;
            }, []);
    return xp(
      e,
      s,
      l,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className
    );
  };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const AC = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  c0 = (...e) =>
    e
      .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var RC = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const NC = w.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: i = "",
      children: o,
      iconNode: s,
      ...a
    },
    l
  ) =>
    w.createElement(
      "svg",
      {
        ref: l,
        ...RC,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: c0("lucide", i),
        ...a,
      },
      [
        ...s.map(([u, c]) => w.createElement(u, c)),
        ...(Array.isArray(o) ? o : [o]),
      ]
    )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ge = (e, t) => {
  const n = w.forwardRef(({ className: r, ...i }, o) =>
    w.createElement(NC, {
      ref: o,
      iconNode: t,
      className: c0(`lucide-${AC(e)}`, r),
      ...i,
    })
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const MC = Ge("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const DC = Ge("ArrowUp", [
  ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
  ["path", { d: "M12 19V5", key: "x0mq9r" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jC = Ge("Briefcase", [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  [
    "rect",
    { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const OC = Ge("Calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
  ],
  ["path", { d: "M3 10h18", key: "8toen8" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const LC = Ge("ChartColumn", [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const IC = Ge("CodeXml", [
  ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
  ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
  ["path", { d: "m14.5 4-5 16", key: "e7oirm" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const VC = Ge("Database", [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _C = Ge("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const d0 = Ge("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  [
    "path",
    {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      key: "a6xqqp",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const FC = Ge("FileCode", [
  ["path", { d: "M10 12.5 8 15l2 2.5", key: "1tg20x" }],
  ["path", { d: "m14 12.5 2 2.5-2 2.5", key: "yinavb" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",
      key: "1mlx9k",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const f0 = Ge("Github", [
  [
    "path",
    {
      d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
      key: "tonef",
    },
  ],
  ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zC = Ge("Heart", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const BC = Ge("Linkedin", [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
      key: "c2jq9f",
    },
  ],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $C = Ge("MessageSquare", [
  [
    "path",
    {
      d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
      key: "1lielz",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const UC = Ge("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  rf = "-",
  WC = (e) => {
    const t = KC(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (s) => {
        const a = s.split(rf);
        return a[0] === "" && a.length !== 1 && a.shift(), h0(a, t) || HC(s);
      },
      getConflictingClassGroupIds: (s, a) => {
        const l = n[s] || [];
        return a && r[s] ? [...l, ...r[s]] : l;
      },
    };
  },
  h0 = (e, t) => {
    var s;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      i = r ? h0(e.slice(1), r) : void 0;
    if (i) return i;
    if (t.validators.length === 0) return;
    const o = e.join(rf);
    return (s = t.validators.find(({ validator: a }) => a(o))) == null
      ? void 0
      : s.classGroupId;
  },
  wp = /^\[(.+)\]$/,
  HC = (e) => {
    if (wp.test(e)) {
      const t = wp.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  KC = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      QC(Object.entries(e.classGroups), n).forEach(([o, s]) => {
        Cc(s, r, o, t);
      }),
      r
    );
  },
  Cc = (e, t, n, r) => {
    e.forEach((i) => {
      if (typeof i == "string") {
        const o = i === "" ? t : Sp(t, i);
        o.classGroupId = n;
        return;
      }
      if (typeof i == "function") {
        if (GC(i)) {
          Cc(i(r), t, n, r);
          return;
        }
        t.validators.push({ validator: i, classGroupId: n });
        return;
      }
      Object.entries(i).forEach(([o, s]) => {
        Cc(s, Sp(t, o), n, r);
      });
    });
  },
  Sp = (e, t) => {
    let n = e;
    return (
      t.split(rf).forEach((r) => {
        n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  GC = (e) => e.isThemeGetter,
  QC = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const i = r.map((o) =>
            typeof o == "string"
              ? t + o
              : typeof o == "object"
              ? Object.fromEntries(
                  Object.entries(o).map(([s, a]) => [t + s, a])
                )
              : o
          );
          return [n, i];
        })
      : e,
  YC = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const i = (o, s) => {
      n.set(o, s), t++, t > e && ((t = 0), (r = n), (n = new Map()));
    };
    return {
      get(o) {
        let s = n.get(o);
        if (s !== void 0) return s;
        if ((s = r.get(o)) !== void 0) return i(o, s), s;
      },
      set(o, s) {
        n.has(o) ? n.set(o, s) : i(o, s);
      },
    };
  },
  p0 = "!",
  XC = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      i = t[0],
      o = t.length,
      s = (a) => {
        const l = [];
        let u = 0,
          c = 0,
          d;
        for (let x = 0; x < a.length; x++) {
          let m = a[x];
          if (u === 0) {
            if (m === i && (r || a.slice(x, x + o) === t)) {
              l.push(a.slice(c, x)), (c = x + o);
              continue;
            }
            if (m === "/") {
              d = x;
              continue;
            }
          }
          m === "[" ? u++ : m === "]" && u--;
        }
        const f = l.length === 0 ? a : a.substring(c),
          h = f.startsWith(p0),
          v = h ? f.substring(1) : f,
          g = d && d > c ? d - c : void 0;
        return {
          modifiers: l,
          hasImportantModifier: h,
          baseClassName: v,
          maybePostfixModifierPosition: g,
        };
      };
    return n ? (a) => n({ className: a, parseClassName: s }) : s;
  },
  qC = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  ZC = (e) => ({ cache: YC(e.cacheSize), parseClassName: XC(e), ...WC(e) }),
  JC = /\s+/,
  eE = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: i,
      } = t,
      o = [],
      s = e.trim().split(JC);
    let a = "";
    for (let l = s.length - 1; l >= 0; l -= 1) {
      const u = s[l],
        {
          modifiers: c,
          hasImportantModifier: d,
          baseClassName: f,
          maybePostfixModifierPosition: h,
        } = n(u);
      let v = !!h,
        g = r(v ? f.substring(0, h) : f);
      if (!g) {
        if (!v) {
          a = u + (a.length > 0 ? " " + a : a);
          continue;
        }
        if (((g = r(f)), !g)) {
          a = u + (a.length > 0 ? " " + a : a);
          continue;
        }
        v = !1;
      }
      const x = qC(c).join(":"),
        m = d ? x + p0 : x,
        p = m + g;
      if (o.includes(p)) continue;
      o.push(p);
      const y = i(g, v);
      for (let b = 0; b < y.length; ++b) {
        const C = y[b];
        o.push(m + C);
      }
      a = u + (a.length > 0 ? " " + a : a);
    }
    return a;
  };
function tE() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = m0(t)) && (r && (r += " "), (r += n));
  return r;
}
const m0 = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = m0(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function nE(e, ...t) {
  let n,
    r,
    i,
    o = s;
  function s(l) {
    const u = t.reduce((c, d) => d(c), e());
    return (n = ZC(u)), (r = n.cache.get), (i = n.cache.set), (o = a), a(l);
  }
  function a(l) {
    const u = r(l);
    if (u) return u;
    const c = eE(l, n);
    return i(l, c), c;
  }
  return function () {
    return o(tE.apply(null, arguments));
  };
}
const oe = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  g0 = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  rE = /^\d+\/\d+$/,
  iE = new Set(["px", "full", "screen"]),
  oE = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  sE =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  aE = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  lE = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  uE =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  nn = (e) => gi(e) || iE.has(e) || rE.test(e),
  An = (e) => $i(e, "length", yE),
  gi = (e) => !!e && !Number.isNaN(Number(e)),
  lu = (e) => $i(e, "number", gi),
  io = (e) => !!e && Number.isInteger(Number(e)),
  cE = (e) => e.endsWith("%") && gi(e.slice(0, -1)),
  K = (e) => g0.test(e),
  Rn = (e) => oE.test(e),
  dE = new Set(["length", "size", "percentage"]),
  fE = (e) => $i(e, dE, y0),
  hE = (e) => $i(e, "position", y0),
  pE = new Set(["image", "url"]),
  mE = (e) => $i(e, pE, xE),
  gE = (e) => $i(e, "", vE),
  oo = () => !0,
  $i = (e, t, n) => {
    const r = g0.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  yE = (e) => sE.test(e) && !aE.test(e),
  y0 = () => !1,
  vE = (e) => lE.test(e),
  xE = (e) => uE.test(e),
  wE = () => {
    const e = oe("colors"),
      t = oe("spacing"),
      n = oe("blur"),
      r = oe("brightness"),
      i = oe("borderColor"),
      o = oe("borderRadius"),
      s = oe("borderSpacing"),
      a = oe("borderWidth"),
      l = oe("contrast"),
      u = oe("grayscale"),
      c = oe("hueRotate"),
      d = oe("invert"),
      f = oe("gap"),
      h = oe("gradientColorStops"),
      v = oe("gradientColorStopPositions"),
      g = oe("inset"),
      x = oe("margin"),
      m = oe("opacity"),
      p = oe("padding"),
      y = oe("saturate"),
      b = oe("scale"),
      C = oe("sepia"),
      E = oe("skew"),
      T = oe("space"),
      P = oe("translate"),
      M = () => ["auto", "contain", "none"],
      N = () => ["auto", "hidden", "clip", "visible", "scroll"],
      F = () => ["auto", K, t],
      I = () => [K, t],
      G = () => ["", nn, An],
      O = () => ["auto", gi, K],
      Q = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      $ = () => ["solid", "dashed", "dotted", "double", "none"],
      _ = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      k = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      R = () => ["", "0", K],
      L = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      U = () => [gi, K];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [oo],
        spacing: [nn, An],
        blur: ["none", "", Rn, K],
        brightness: U(),
        borderColor: [e],
        borderRadius: ["none", "", "full", Rn, K],
        borderSpacing: I(),
        borderWidth: G(),
        contrast: U(),
        grayscale: R(),
        hueRotate: U(),
        invert: R(),
        gap: I(),
        gradientColorStops: [e],
        gradientColorStopPositions: [cE, An],
        inset: F(),
        margin: F(),
        opacity: U(),
        padding: I(),
        saturate: U(),
        scale: U(),
        sepia: R(),
        skew: U(),
        space: I(),
        translate: I(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", K] }],
        container: ["container"],
        columns: [{ columns: [Rn] }],
        "break-after": [{ "break-after": L() }],
        "break-before": [{ "break-before": L() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...Q(), K] }],
        overflow: [{ overflow: N() }],
        "overflow-x": [{ "overflow-x": N() }],
        "overflow-y": [{ "overflow-y": N() }],
        overscroll: [{ overscroll: M() }],
        "overscroll-x": [{ "overscroll-x": M() }],
        "overscroll-y": [{ "overscroll-y": M() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [g] }],
        "inset-x": [{ "inset-x": [g] }],
        "inset-y": [{ "inset-y": [g] }],
        start: [{ start: [g] }],
        end: [{ end: [g] }],
        top: [{ top: [g] }],
        right: [{ right: [g] }],
        bottom: [{ bottom: [g] }],
        left: [{ left: [g] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", io, K] }],
        basis: [{ basis: F() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", K] }],
        grow: [{ grow: R() }],
        shrink: [{ shrink: R() }],
        order: [{ order: ["first", "last", "none", io, K] }],
        "grid-cols": [{ "grid-cols": [oo] }],
        "col-start-end": [{ col: ["auto", { span: ["full", io, K] }, K] }],
        "col-start": [{ "col-start": O() }],
        "col-end": [{ "col-end": O() }],
        "grid-rows": [{ "grid-rows": [oo] }],
        "row-start-end": [{ row: ["auto", { span: [io, K] }, K] }],
        "row-start": [{ "row-start": O() }],
        "row-end": [{ "row-end": O() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", K] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", K] }],
        gap: [{ gap: [f] }],
        "gap-x": [{ "gap-x": [f] }],
        "gap-y": [{ "gap-y": [f] }],
        "justify-content": [{ justify: ["normal", ...k()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...k(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...k(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [p] }],
        px: [{ px: [p] }],
        py: [{ py: [p] }],
        ps: [{ ps: [p] }],
        pe: [{ pe: [p] }],
        pt: [{ pt: [p] }],
        pr: [{ pr: [p] }],
        pb: [{ pb: [p] }],
        pl: [{ pl: [p] }],
        m: [{ m: [x] }],
        mx: [{ mx: [x] }],
        my: [{ my: [x] }],
        ms: [{ ms: [x] }],
        me: [{ me: [x] }],
        mt: [{ mt: [x] }],
        mr: [{ mr: [x] }],
        mb: [{ mb: [x] }],
        ml: [{ ml: [x] }],
        "space-x": [{ "space-x": [T] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [T] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", K, t] }],
        "min-w": [{ "min-w": [K, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              K,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [Rn] },
              Rn,
            ],
          },
        ],
        h: [{ h: [K, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [K, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [K, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [K, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", Rn, An] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              lu,
            ],
          },
        ],
        "font-family": [{ font: [oo] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              K,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", gi, lu] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              nn,
              K,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", K] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", K] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [m] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [m] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...$(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", nn, An] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", nn, K] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: I() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              K,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", K] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [m] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...Q(), hE] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", fE] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              mE,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [v] }],
        "gradient-via-pos": [{ via: [v] }],
        "gradient-to-pos": [{ to: [v] }],
        "gradient-from": [{ from: [h] }],
        "gradient-via": [{ via: [h] }],
        "gradient-to": [{ to: [h] }],
        rounded: [{ rounded: [o] }],
        "rounded-s": [{ "rounded-s": [o] }],
        "rounded-e": [{ "rounded-e": [o] }],
        "rounded-t": [{ "rounded-t": [o] }],
        "rounded-r": [{ "rounded-r": [o] }],
        "rounded-b": [{ "rounded-b": [o] }],
        "rounded-l": [{ "rounded-l": [o] }],
        "rounded-ss": [{ "rounded-ss": [o] }],
        "rounded-se": [{ "rounded-se": [o] }],
        "rounded-ee": [{ "rounded-ee": [o] }],
        "rounded-es": [{ "rounded-es": [o] }],
        "rounded-tl": [{ "rounded-tl": [o] }],
        "rounded-tr": [{ "rounded-tr": [o] }],
        "rounded-br": [{ "rounded-br": [o] }],
        "rounded-bl": [{ "rounded-bl": [o] }],
        "border-w": [{ border: [a] }],
        "border-w-x": [{ "border-x": [a] }],
        "border-w-y": [{ "border-y": [a] }],
        "border-w-s": [{ "border-s": [a] }],
        "border-w-e": [{ "border-e": [a] }],
        "border-w-t": [{ "border-t": [a] }],
        "border-w-r": [{ "border-r": [a] }],
        "border-w-b": [{ "border-b": [a] }],
        "border-w-l": [{ "border-l": [a] }],
        "border-opacity": [{ "border-opacity": [m] }],
        "border-style": [{ border: [...$(), "hidden"] }],
        "divide-x": [{ "divide-x": [a] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [a] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [m] }],
        "divide-style": [{ divide: $() }],
        "border-color": [{ border: [i] }],
        "border-color-x": [{ "border-x": [i] }],
        "border-color-y": [{ "border-y": [i] }],
        "border-color-s": [{ "border-s": [i] }],
        "border-color-e": [{ "border-e": [i] }],
        "border-color-t": [{ "border-t": [i] }],
        "border-color-r": [{ "border-r": [i] }],
        "border-color-b": [{ "border-b": [i] }],
        "border-color-l": [{ "border-l": [i] }],
        "divide-color": [{ divide: [i] }],
        "outline-style": [{ outline: ["", ...$()] }],
        "outline-offset": [{ "outline-offset": [nn, K] }],
        "outline-w": [{ outline: [nn, An] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: G() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [m] }],
        "ring-offset-w": [{ "ring-offset": [nn, An] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", Rn, gE] }],
        "shadow-color": [{ shadow: [oo] }],
        opacity: [{ opacity: [m] }],
        "mix-blend": [{ "mix-blend": [..._(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": _() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [l] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", Rn, K] }],
        grayscale: [{ grayscale: [u] }],
        "hue-rotate": [{ "hue-rotate": [c] }],
        invert: [{ invert: [d] }],
        saturate: [{ saturate: [y] }],
        sepia: [{ sepia: [C] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [l] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
        "backdrop-invert": [{ "backdrop-invert": [d] }],
        "backdrop-opacity": [{ "backdrop-opacity": [m] }],
        "backdrop-saturate": [{ "backdrop-saturate": [y] }],
        "backdrop-sepia": [{ "backdrop-sepia": [C] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [s] }],
        "border-spacing-x": [{ "border-spacing-x": [s] }],
        "border-spacing-y": [{ "border-spacing-y": [s] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              K,
            ],
          },
        ],
        duration: [{ duration: U() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", K] }],
        delay: [{ delay: U() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", K] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [b] }],
        "scale-x": [{ "scale-x": [b] }],
        "scale-y": [{ "scale-y": [b] }],
        rotate: [{ rotate: [io, K] }],
        "translate-x": [{ "translate-x": [P] }],
        "translate-y": [{ "translate-y": [P] }],
        "skew-x": [{ "skew-x": [E] }],
        "skew-y": [{ "skew-y": [E] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              K,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              K,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": I() }],
        "scroll-mx": [{ "scroll-mx": I() }],
        "scroll-my": [{ "scroll-my": I() }],
        "scroll-ms": [{ "scroll-ms": I() }],
        "scroll-me": [{ "scroll-me": I() }],
        "scroll-mt": [{ "scroll-mt": I() }],
        "scroll-mr": [{ "scroll-mr": I() }],
        "scroll-mb": [{ "scroll-mb": I() }],
        "scroll-ml": [{ "scroll-ml": I() }],
        "scroll-p": [{ "scroll-p": I() }],
        "scroll-px": [{ "scroll-px": I() }],
        "scroll-py": [{ "scroll-py": I() }],
        "scroll-ps": [{ "scroll-ps": I() }],
        "scroll-pe": [{ "scroll-pe": I() }],
        "scroll-pt": [{ "scroll-pt": I() }],
        "scroll-pr": [{ "scroll-pr": I() }],
        "scroll-pb": [{ "scroll-pb": I() }],
        "scroll-pl": [{ "scroll-pl": I() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", K] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [nn, An, lu] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  SE = nE(wE);
function Bt(...e) {
  return SE(u0(e));
}
var bE = (e) => {
    switch (e) {
      case "success":
        return TE;
      case "info":
        return kE;
      case "warning":
        return PE;
      case "error":
        return AE;
      default:
        return null;
    }
  },
  CE = Array(12).fill(0),
  EE = ({ visible: e, className: t }) =>
    j.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
        "data-visible": e,
      },
      j.createElement(
        "div",
        { className: "sonner-spinner" },
        CE.map((n, r) =>
          j.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${r}`,
          })
        )
      )
    ),
  TE = j.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    j.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    })
  ),
  PE = j.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    j.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    })
  ),
  kE = j.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    j.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    })
  ),
  AE = j.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    j.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    })
  ),
  RE = j.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    j.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    j.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  ),
  NE = () => {
    let [e, t] = j.useState(document.hidden);
    return (
      j.useEffect(() => {
        let n = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", n),
          () => window.removeEventListener("visibilitychange", n)
        );
      }, []),
      e
    );
  },
  Ec = 1,
  ME = class {
    constructor() {
      (this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          this.publish(e), (this.toasts = [...this.toasts, e]);
        }),
        (this.create = (e) => {
          var t;
          let { message: n, ...r } = e,
            i =
              typeof (e == null ? void 0 : e.id) == "number" ||
              ((t = e.id) == null ? void 0 : t.length) > 0
                ? e.id
                : Ec++,
            o = this.toasts.find((a) => a.id === i),
            s = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            this.dismissedToasts.has(i) && this.dismissedToasts.delete(i),
            o
              ? (this.toasts = this.toasts.map((a) =>
                  a.id === i
                    ? (this.publish({ ...a, ...e, id: i, title: n }),
                      { ...a, ...e, id: i, dismissible: s, title: n })
                    : a
                ))
              : this.addToast({ title: n, ...r, dismissible: s, id: i }),
            i
          );
        }),
        (this.dismiss = (e) => (
          this.dismissedToasts.add(e),
          e ||
            this.toasts.forEach((t) => {
              this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) =>
          this.create({ ...t, message: e, type: "error" })),
        (this.success = (e, t) =>
          this.create({ ...t, type: "success", message: e })),
        (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
        (this.warning = (e, t) =>
          this.create({ ...t, type: "warning", message: e })),
        (this.loading = (e, t) =>
          this.create({ ...t, type: "loading", message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 &&
            (n = this.create({
              ...t,
              promise: e,
              type: "loading",
              message: t.loading,
              description:
                typeof t.description != "function" ? t.description : void 0,
            }));
          let r = e instanceof Promise ? e : e(),
            i = n !== void 0,
            o,
            s = r
              .then(async (l) => {
                if (((o = ["resolve", l]), j.isValidElement(l)))
                  (i = !1), this.create({ id: n, type: "default", message: l });
                else if (jE(l) && !l.ok) {
                  i = !1;
                  let u =
                      typeof t.error == "function"
                        ? await t.error(`HTTP error! status: ${l.status}`)
                        : t.error,
                    c =
                      typeof t.description == "function"
                        ? await t.description(`HTTP error! status: ${l.status}`)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: u,
                    description: c,
                  });
                } else if (t.success !== void 0) {
                  i = !1;
                  let u =
                      typeof t.success == "function"
                        ? await t.success(l)
                        : t.success,
                    c =
                      typeof t.description == "function"
                        ? await t.description(l)
                        : t.description;
                  this.create({
                    id: n,
                    type: "success",
                    message: u,
                    description: c,
                  });
                }
              })
              .catch(async (l) => {
                if (((o = ["reject", l]), t.error !== void 0)) {
                  i = !1;
                  let u =
                      typeof t.error == "function" ? await t.error(l) : t.error,
                    c =
                      typeof t.description == "function"
                        ? await t.description(l)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: u,
                    description: c,
                  });
                }
              })
              .finally(() => {
                var l;
                i && (this.dismiss(n), (n = void 0)),
                  (l = t.finally) == null || l.call(t);
              }),
            a = () =>
              new Promise((l, u) =>
                s.then(() => (o[0] === "reject" ? u(o[1]) : l(o[1]))).catch(u)
              );
          return typeof n != "string" && typeof n != "number"
            ? { unwrap: a }
            : Object.assign(n, { unwrap: a });
        }),
        (this.custom = (e, t) => {
          let n = (t == null ? void 0 : t.id) || Ec++;
          return this.create({ jsx: e(n), id: n, ...t }), n;
        }),
        (this.getActiveToasts = () =>
          this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set());
    }
  },
  Qe = new ME(),
  DE = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Ec++;
    return Qe.addToast({ title: e, ...t, id: n }), n;
  },
  jE = (e) =>
    e &&
    typeof e == "object" &&
    "ok" in e &&
    typeof e.ok == "boolean" &&
    "status" in e &&
    typeof e.status == "number",
  OE = DE,
  LE = () => Qe.toasts,
  IE = () => Qe.getActiveToasts();
Object.assign(
  OE,
  {
    success: Qe.success,
    info: Qe.info,
    warning: Qe.warning,
    error: Qe.error,
    custom: Qe.custom,
    message: Qe.message,
    promise: Qe.promise,
    dismiss: Qe.dismiss,
    loading: Qe.loading,
  },
  { getHistory: LE, getToasts: IE }
);
function VE(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0],
    r = document.createElement("style");
  (r.type = "text/css"),
    t === "top" && n.firstChild
      ? n.insertBefore(r, n.firstChild)
      : n.appendChild(r),
    r.styleSheet
      ? (r.styleSheet.cssText = e)
      : r.appendChild(document.createTextNode(e));
}
VE(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function zs(e) {
  return e.label !== void 0;
}
var _E = 3,
  FE = "32px",
  zE = "16px",
  bp = 4e3,
  BE = 356,
  $E = 14,
  UE = 20,
  WE = 200;
function kt(...e) {
  return e.filter(Boolean).join(" ");
}
function HE(e) {
  let [t, n] = e.split("-"),
    r = [];
  return t && r.push(t), n && r.push(n), r;
}
var KE = (e) => {
  var t, n, r, i, o, s, a, l, u, c, d;
  let {
      invert: f,
      toast: h,
      unstyled: v,
      interacting: g,
      setHeights: x,
      visibleToasts: m,
      heights: p,
      index: y,
      toasts: b,
      expanded: C,
      removeToast: E,
      defaultRichColors: T,
      closeButton: P,
      style: M,
      cancelButtonStyle: N,
      actionButtonStyle: F,
      className: I = "",
      descriptionClassName: G = "",
      duration: O,
      position: Q,
      gap: $,
      loadingIcon: _,
      expandByDefault: k,
      classNames: R,
      icons: L,
      closeButtonAriaLabel: U = "Close toast",
      pauseWhenPageIsHidden: z,
    } = e,
    [Y, q] = j.useState(null),
    [we, De] = j.useState(null),
    [ee, zr] = j.useState(!1),
    [Sn, cr] = j.useState(!1),
    [bn, Br] = j.useState(!1),
    [Cn, ys] = j.useState(!1),
    [Al, vs] = j.useState(!1),
    [Rl, Qi] = j.useState(0),
    [$r, qf] = j.useState(0),
    Yi = j.useRef(h.duration || O || bp),
    Zf = j.useRef(null),
    dr = j.useRef(null),
    Yw = y === 0,
    Xw = y + 1 <= m,
    dt = h.type,
    Ur = h.dismissible !== !1,
    qw = h.className || "",
    Zw = h.descriptionClassName || "",
    xs = j.useMemo(
      () => p.findIndex((W) => W.toastId === h.id) || 0,
      [p, h.id]
    ),
    Jw = j.useMemo(() => {
      var W;
      return (W = h.closeButton) != null ? W : P;
    }, [h.closeButton, P]),
    Jf = j.useMemo(() => h.duration || O || bp, [h.duration, O]),
    Nl = j.useRef(0),
    Wr = j.useRef(0),
    eh = j.useRef(0),
    Hr = j.useRef(null),
    [e1, t1] = Q.split("-"),
    th = j.useMemo(
      () => p.reduce((W, ne, le) => (le >= xs ? W : W + ne.height), 0),
      [p, xs]
    ),
    nh = NE(),
    n1 = h.invert || f,
    Ml = dt === "loading";
  (Wr.current = j.useMemo(() => xs * $ + th, [xs, th])),
    j.useEffect(() => {
      Yi.current = Jf;
    }, [Jf]),
    j.useEffect(() => {
      zr(!0);
    }, []),
    j.useEffect(() => {
      let W = dr.current;
      if (W) {
        let ne = W.getBoundingClientRect().height;
        return (
          qf(ne),
          x((le) => [
            { toastId: h.id, height: ne, position: h.position },
            ...le,
          ]),
          () => x((le) => le.filter((Ct) => Ct.toastId !== h.id))
        );
      }
    }, [x, h.id]),
    j.useLayoutEffect(() => {
      if (!ee) return;
      let W = dr.current,
        ne = W.style.height;
      W.style.height = "auto";
      let le = W.getBoundingClientRect().height;
      (W.style.height = ne),
        qf(le),
        x((Ct) =>
          Ct.find((Et) => Et.toastId === h.id)
            ? Ct.map((Et) => (Et.toastId === h.id ? { ...Et, height: le } : Et))
            : [{ toastId: h.id, height: le, position: h.position }, ...Ct]
        );
    }, [ee, h.title, h.description, x, h.id]);
  let En = j.useCallback(() => {
    cr(!0),
      Qi(Wr.current),
      x((W) => W.filter((ne) => ne.toastId !== h.id)),
      setTimeout(() => {
        E(h);
      }, WE);
  }, [h, E, x, Wr]);
  j.useEffect(() => {
    if (
      (h.promise && dt === "loading") ||
      h.duration === 1 / 0 ||
      h.type === "loading"
    )
      return;
    let W;
    return (
      C || g || (z && nh)
        ? (() => {
            if (eh.current < Nl.current) {
              let ne = new Date().getTime() - Nl.current;
              Yi.current = Yi.current - ne;
            }
            eh.current = new Date().getTime();
          })()
        : Yi.current !== 1 / 0 &&
          ((Nl.current = new Date().getTime()),
          (W = setTimeout(() => {
            var ne;
            (ne = h.onAutoClose) == null || ne.call(h, h), En();
          }, Yi.current))),
      () => clearTimeout(W)
    );
  }, [C, g, h, dt, z, nh, En]),
    j.useEffect(() => {
      h.delete && En();
    }, [En, h.delete]);
  function r1() {
    var W, ne, le;
    return L != null && L.loading
      ? j.createElement(
          "div",
          {
            className: kt(
              R == null ? void 0 : R.loader,
              (W = h == null ? void 0 : h.classNames) == null
                ? void 0
                : W.loader,
              "sonner-loader"
            ),
            "data-visible": dt === "loading",
          },
          L.loading
        )
      : _
      ? j.createElement(
          "div",
          {
            className: kt(
              R == null ? void 0 : R.loader,
              (ne = h == null ? void 0 : h.classNames) == null
                ? void 0
                : ne.loader,
              "sonner-loader"
            ),
            "data-visible": dt === "loading",
          },
          _
        )
      : j.createElement(EE, {
          className: kt(
            R == null ? void 0 : R.loader,
            (le = h == null ? void 0 : h.classNames) == null
              ? void 0
              : le.loader
          ),
          visible: dt === "loading",
        });
  }
  return j.createElement(
    "li",
    {
      tabIndex: 0,
      ref: dr,
      className: kt(
        I,
        qw,
        R == null ? void 0 : R.toast,
        (t = h == null ? void 0 : h.classNames) == null ? void 0 : t.toast,
        R == null ? void 0 : R.default,
        R == null ? void 0 : R[dt],
        (n = h == null ? void 0 : h.classNames) == null ? void 0 : n[dt]
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (r = h.richColors) != null ? r : T,
      "data-styled": !(h.jsx || h.unstyled || v),
      "data-mounted": ee,
      "data-promise": !!h.promise,
      "data-swiped": Al,
      "data-removed": Sn,
      "data-visible": Xw,
      "data-y-position": e1,
      "data-x-position": t1,
      "data-index": y,
      "data-front": Yw,
      "data-swiping": bn,
      "data-dismissible": Ur,
      "data-type": dt,
      "data-invert": n1,
      "data-swipe-out": Cn,
      "data-swipe-direction": we,
      "data-expanded": !!(C || (k && ee)),
      style: {
        "--index": y,
        "--toasts-before": y,
        "--z-index": b.length - y,
        "--offset": `${Sn ? Rl : Wr.current}px`,
        "--initial-height": k ? "auto" : `${$r}px`,
        ...M,
        ...h.style,
      },
      onDragEnd: () => {
        Br(!1), q(null), (Hr.current = null);
      },
      onPointerDown: (W) => {
        Ml ||
          !Ur ||
          ((Zf.current = new Date()),
          Qi(Wr.current),
          W.target.setPointerCapture(W.pointerId),
          W.target.tagName !== "BUTTON" &&
            (Br(!0), (Hr.current = { x: W.clientX, y: W.clientY })));
      },
      onPointerUp: () => {
        var W, ne, le, Ct;
        if (Cn || !Ur) return;
        Hr.current = null;
        let Et = Number(
            ((W = dr.current) == null
              ? void 0
              : W.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0
          ),
          Tn = Number(
            ((ne = dr.current) == null
              ? void 0
              : ne.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0
          ),
          fr =
            new Date().getTime() -
            ((le = Zf.current) == null ? void 0 : le.getTime()),
          Tt = Y === "x" ? Et : Tn,
          Pn = Math.abs(Tt) / fr;
        if (Math.abs(Tt) >= UE || Pn > 0.11) {
          Qi(Wr.current),
            (Ct = h.onDismiss) == null || Ct.call(h, h),
            De(
              Y === "x" ? (Et > 0 ? "right" : "left") : Tn > 0 ? "down" : "up"
            ),
            En(),
            ys(!0),
            vs(!1);
          return;
        }
        Br(!1), q(null);
      },
      onPointerMove: (W) => {
        var ne, le, Ct, Et;
        if (
          !Hr.current ||
          !Ur ||
          ((ne = window.getSelection()) == null
            ? void 0
            : ne.toString().length) > 0
        )
          return;
        let Tn = W.clientY - Hr.current.y,
          fr = W.clientX - Hr.current.x,
          Tt = (le = e.swipeDirections) != null ? le : HE(Q);
        !Y &&
          (Math.abs(fr) > 1 || Math.abs(Tn) > 1) &&
          q(Math.abs(fr) > Math.abs(Tn) ? "x" : "y");
        let Pn = { x: 0, y: 0 };
        Y === "y"
          ? (Tt.includes("top") || Tt.includes("bottom")) &&
            ((Tt.includes("top") && Tn < 0) ||
              (Tt.includes("bottom") && Tn > 0)) &&
            (Pn.y = Tn)
          : Y === "x" &&
            (Tt.includes("left") || Tt.includes("right")) &&
            ((Tt.includes("left") && fr < 0) ||
              (Tt.includes("right") && fr > 0)) &&
            (Pn.x = fr),
          (Math.abs(Pn.x) > 0 || Math.abs(Pn.y) > 0) && vs(!0),
          (Ct = dr.current) == null ||
            Ct.style.setProperty("--swipe-amount-x", `${Pn.x}px`),
          (Et = dr.current) == null ||
            Et.style.setProperty("--swipe-amount-y", `${Pn.y}px`);
      },
    },
    Jw && !h.jsx
      ? j.createElement(
          "button",
          {
            "aria-label": U,
            "data-disabled": Ml,
            "data-close-button": !0,
            onClick:
              Ml || !Ur
                ? () => {}
                : () => {
                    var W;
                    En(), (W = h.onDismiss) == null || W.call(h, h);
                  },
            className: kt(
              R == null ? void 0 : R.closeButton,
              (i = h == null ? void 0 : h.classNames) == null
                ? void 0
                : i.closeButton
            ),
          },
          (o = L == null ? void 0 : L.close) != null ? o : RE
        )
      : null,
    h.jsx || w.isValidElement(h.title)
      ? h.jsx
        ? h.jsx
        : typeof h.title == "function"
        ? h.title()
        : h.title
      : j.createElement(
          j.Fragment,
          null,
          dt || h.icon || h.promise
            ? j.createElement(
                "div",
                {
                  "data-icon": "",
                  className: kt(
                    R == null ? void 0 : R.icon,
                    (s = h == null ? void 0 : h.classNames) == null
                      ? void 0
                      : s.icon
                  ),
                },
                h.promise || (h.type === "loading" && !h.icon)
                  ? h.icon || r1()
                  : null,
                h.type !== "loading"
                  ? h.icon || (L == null ? void 0 : L[dt]) || bE(dt)
                  : null
              )
            : null,
          j.createElement(
            "div",
            {
              "data-content": "",
              className: kt(
                R == null ? void 0 : R.content,
                (a = h == null ? void 0 : h.classNames) == null
                  ? void 0
                  : a.content
              ),
            },
            j.createElement(
              "div",
              {
                "data-title": "",
                className: kt(
                  R == null ? void 0 : R.title,
                  (l = h == null ? void 0 : h.classNames) == null
                    ? void 0
                    : l.title
                ),
              },
              typeof h.title == "function" ? h.title() : h.title
            ),
            h.description
              ? j.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: kt(
                      G,
                      Zw,
                      R == null ? void 0 : R.description,
                      (u = h == null ? void 0 : h.classNames) == null
                        ? void 0
                        : u.description
                    ),
                  },
                  typeof h.description == "function"
                    ? h.description()
                    : h.description
                )
              : null
          ),
          w.isValidElement(h.cancel)
            ? h.cancel
            : h.cancel && zs(h.cancel)
            ? j.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-cancel": !0,
                  style: h.cancelButtonStyle || N,
                  onClick: (W) => {
                    var ne, le;
                    zs(h.cancel) &&
                      Ur &&
                      ((le = (ne = h.cancel).onClick) == null || le.call(ne, W),
                      En());
                  },
                  className: kt(
                    R == null ? void 0 : R.cancelButton,
                    (c = h == null ? void 0 : h.classNames) == null
                      ? void 0
                      : c.cancelButton
                  ),
                },
                h.cancel.label
              )
            : null,
          w.isValidElement(h.action)
            ? h.action
            : h.action && zs(h.action)
            ? j.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-action": !0,
                  style: h.actionButtonStyle || F,
                  onClick: (W) => {
                    var ne, le;
                    zs(h.action) &&
                      ((le = (ne = h.action).onClick) == null || le.call(ne, W),
                      !W.defaultPrevented && En());
                  },
                  className: kt(
                    R == null ? void 0 : R.actionButton,
                    (d = h == null ? void 0 : h.classNames) == null
                      ? void 0
                      : d.actionButton
                  ),
                },
                h.action.label
              )
            : null
        )
  );
};
function Cp() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
function GE(e, t) {
  let n = {};
  return (
    [e, t].forEach((r, i) => {
      let o = i === 1,
        s = o ? "--mobile-offset" : "--offset",
        a = o ? zE : FE;
      function l(u) {
        ["top", "right", "bottom", "left"].forEach((c) => {
          n[`${s}-${c}`] = typeof u == "number" ? `${u}px` : u;
        });
      }
      typeof r == "number" || typeof r == "string"
        ? l(r)
        : typeof r == "object"
        ? ["top", "right", "bottom", "left"].forEach((u) => {
            r[u] === void 0
              ? (n[`${s}-${u}`] = a)
              : (n[`${s}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]);
          })
        : l(a);
    }),
    n
  );
}
var QE = w.forwardRef(function (e, t) {
  let {
      invert: n,
      position: r = "bottom-right",
      hotkey: i = ["altKey", "KeyT"],
      expand: o,
      closeButton: s,
      className: a,
      offset: l,
      mobileOffset: u,
      theme: c = "light",
      richColors: d,
      duration: f,
      style: h,
      visibleToasts: v = _E,
      toastOptions: g,
      dir: x = Cp(),
      gap: m = $E,
      loadingIcon: p,
      icons: y,
      containerAriaLabel: b = "Notifications",
      pauseWhenPageIsHidden: C,
    } = e,
    [E, T] = j.useState([]),
    P = j.useMemo(
      () =>
        Array.from(
          new Set(
            [r].concat(E.filter((z) => z.position).map((z) => z.position))
          )
        ),
      [E, r]
    ),
    [M, N] = j.useState([]),
    [F, I] = j.useState(!1),
    [G, O] = j.useState(!1),
    [Q, $] = j.useState(
      c !== "system"
        ? c
        : typeof window < "u" &&
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    ),
    _ = j.useRef(null),
    k = i.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    R = j.useRef(null),
    L = j.useRef(!1),
    U = j.useCallback((z) => {
      T((Y) => {
        var q;
        return (
          ((q = Y.find((we) => we.id === z.id)) != null && q.delete) ||
            Qe.dismiss(z.id),
          Y.filter(({ id: we }) => we !== z.id)
        );
      });
    }, []);
  return (
    j.useEffect(
      () =>
        Qe.subscribe((z) => {
          if (z.dismiss) {
            T((Y) => Y.map((q) => (q.id === z.id ? { ...q, delete: !0 } : q)));
            return;
          }
          setTimeout(() => {
            jv.flushSync(() => {
              T((Y) => {
                let q = Y.findIndex((we) => we.id === z.id);
                return q !== -1
                  ? [...Y.slice(0, q), { ...Y[q], ...z }, ...Y.slice(q + 1)]
                  : [z, ...Y];
              });
            });
          });
        }),
      []
    ),
    j.useEffect(() => {
      if (c !== "system") {
        $(c);
        return;
      }
      if (
        (c === "system" &&
          (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? $("dark")
            : $("light")),
        typeof window > "u")
      )
        return;
      let z = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        z.addEventListener("change", ({ matches: Y }) => {
          $(Y ? "dark" : "light");
        });
      } catch {
        z.addListener(({ matches: q }) => {
          try {
            $(q ? "dark" : "light");
          } catch (we) {
            console.error(we);
          }
        });
      }
    }, [c]),
    j.useEffect(() => {
      E.length <= 1 && I(!1);
    }, [E]),
    j.useEffect(() => {
      let z = (Y) => {
        var q, we;
        i.every((De) => Y[De] || Y.code === De) &&
          (I(!0), (q = _.current) == null || q.focus()),
          Y.code === "Escape" &&
            (document.activeElement === _.current ||
              ((we = _.current) != null &&
                we.contains(document.activeElement))) &&
            I(!1);
      };
      return (
        document.addEventListener("keydown", z),
        () => document.removeEventListener("keydown", z)
      );
    }, [i]),
    j.useEffect(() => {
      if (_.current)
        return () => {
          R.current &&
            (R.current.focus({ preventScroll: !0 }),
            (R.current = null),
            (L.current = !1));
        };
    }, [_.current]),
    j.createElement(
      "section",
      {
        ref: t,
        "aria-label": `${b} ${k}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0,
      },
      P.map((z, Y) => {
        var q;
        let [we, De] = z.split("-");
        return E.length
          ? j.createElement(
              "ol",
              {
                key: z,
                dir: x === "auto" ? Cp() : x,
                tabIndex: -1,
                ref: _,
                className: a,
                "data-sonner-toaster": !0,
                "data-theme": Q,
                "data-y-position": we,
                "data-lifted": F && E.length > 1 && !o,
                "data-x-position": De,
                style: {
                  "--front-toast-height": `${
                    ((q = M[0]) == null ? void 0 : q.height) || 0
                  }px`,
                  "--width": `${BE}px`,
                  "--gap": `${m}px`,
                  ...h,
                  ...GE(l, u),
                },
                onBlur: (ee) => {
                  L.current &&
                    !ee.currentTarget.contains(ee.relatedTarget) &&
                    ((L.current = !1),
                    R.current &&
                      (R.current.focus({ preventScroll: !0 }),
                      (R.current = null)));
                },
                onFocus: (ee) => {
                  (ee.target instanceof HTMLElement &&
                    ee.target.dataset.dismissible === "false") ||
                    L.current ||
                    ((L.current = !0), (R.current = ee.relatedTarget));
                },
                onMouseEnter: () => I(!0),
                onMouseMove: () => I(!0),
                onMouseLeave: () => {
                  G || I(!1);
                },
                onDragEnd: () => I(!1),
                onPointerDown: (ee) => {
                  (ee.target instanceof HTMLElement &&
                    ee.target.dataset.dismissible === "false") ||
                    O(!0);
                },
                onPointerUp: () => O(!1),
              },
              E.filter(
                (ee) => (!ee.position && Y === 0) || ee.position === z
              ).map((ee, zr) => {
                var Sn, cr;
                return j.createElement(KE, {
                  key: ee.id,
                  icons: y,
                  index: zr,
                  toast: ee,
                  defaultRichColors: d,
                  duration:
                    (Sn = g == null ? void 0 : g.duration) != null ? Sn : f,
                  className: g == null ? void 0 : g.className,
                  descriptionClassName:
                    g == null ? void 0 : g.descriptionClassName,
                  invert: n,
                  visibleToasts: v,
                  closeButton:
                    (cr = g == null ? void 0 : g.closeButton) != null ? cr : s,
                  interacting: G,
                  position: z,
                  style: g == null ? void 0 : g.style,
                  unstyled: g == null ? void 0 : g.unstyled,
                  classNames: g == null ? void 0 : g.classNames,
                  cancelButtonStyle: g == null ? void 0 : g.cancelButtonStyle,
                  actionButtonStyle: g == null ? void 0 : g.actionButtonStyle,
                  removeToast: U,
                  toasts: E.filter((bn) => bn.position == ee.position),
                  heights: M.filter((bn) => bn.position == ee.position),
                  setHeights: N,
                  expandByDefault: o,
                  gap: m,
                  loadingIcon: p,
                  expanded: F,
                  pauseWhenPageIsHidden: C,
                  swipeDirections: e.swipeDirections,
                });
              })
            )
          : null;
      })
    )
  );
});
const YE = kC,
  v0 = w.forwardRef(({ className: e, ...t }, n) =>
    S.jsx(n0, {
      ref: n,
      className: Bt(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e
      ),
      ...t,
    })
  );
v0.displayName = n0.displayName;
const XE = nf(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    }
  ),
  x0 = w.forwardRef(({ className: e, variant: t, ...n }, r) =>
    S.jsx(r0, { ref: r, className: Bt(XE({ variant: t }), e), ...n })
  );
x0.displayName = r0.displayName;
const qE = w.forwardRef(({ className: e, ...t }, n) =>
  S.jsx(s0, {
    ref: n,
    className: Bt(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      e
    ),
    ...t,
  })
);
qE.displayName = s0.displayName;
const w0 = w.forwardRef(({ className: e, ...t }, n) =>
  S.jsx(a0, {
    ref: n,
    className: Bt(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: S.jsx(UC, { className: "h-4 w-4" }),
  })
);
w0.displayName = a0.displayName;
const S0 = w.forwardRef(({ className: e, ...t }, n) =>
  S.jsx(i0, { ref: n, className: Bt("text-sm font-semibold", e), ...t })
);
S0.displayName = i0.displayName;
const b0 = w.forwardRef(({ className: e, ...t }, n) =>
  S.jsx(o0, { ref: n, className: Bt("text-sm opacity-90", e), ...t })
);
b0.displayName = o0.displayName;
function ZE() {
  const { toasts: e } = Lv();
  return S.jsxs(YE, {
    children: [
      e.map(function ({ id: t, title: n, description: r, action: i, ...o }) {
        return S.jsxs(
          x0,
          {
            ...o,
            children: [
              S.jsxs("div", {
                className: "grid gap-1",
                children: [
                  n && S.jsx(S0, { children: n }),
                  r && S.jsx(b0, { children: r }),
                ],
              }),
              i,
              S.jsx(w0, {}),
            ],
          },
          t
        );
      }),
      S.jsx(v0, {}),
    ],
  });
}
var Ep = ["light", "dark"],
  JE = "(prefers-color-scheme: dark)",
  eT = w.createContext(void 0),
  tT = { setTheme: (e) => {}, themes: [] },
  nT = () => {
    var e;
    return (e = w.useContext(eT)) != null ? e : tT;
  };
w.memo(
  ({
    forcedTheme: e,
    storageKey: t,
    attribute: n,
    enableSystem: r,
    enableColorScheme: i,
    defaultTheme: o,
    value: s,
    attrs: a,
    nonce: l,
  }) => {
    let u = o === "system",
      c =
        n === "class"
          ? `var d=document.documentElement,c=d.classList;${`c.remove(${a
              .map((v) => `'${v}'`)
              .join(",")})`};`
          : `var d=document.documentElement,n='${n}',s='setAttribute';`,
      d = i
        ? Ep.includes(o) && o
          ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${o}'`
          : "if(e==='light'||e==='dark')d.style.colorScheme=e"
        : "",
      f = (v, g = !1, x = !0) => {
        let m = s ? s[v] : v,
          p = g ? v + "|| ''" : `'${m}'`,
          y = "";
        return (
          i &&
            x &&
            !g &&
            Ep.includes(v) &&
            (y += `d.style.colorScheme = '${v}';`),
          n === "class"
            ? g || m
              ? (y += `c.add(${p})`)
              : (y += "null")
            : m && (y += `d[s](n,${p})`),
          y
        );
      },
      h = e
        ? `!function(){${c}${f(e)}}()`
        : r
        ? `!function(){try{${c}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${JE}',m=window.matchMedia(t);if(m.media!==t||m.matches){${f(
            "dark"
          )}}else{${f("light")}}}else if(e){${
            s ? `var x=${JSON.stringify(s)};` : ""
          }${f(s ? "x[e]" : "e", !0)}}${
            u ? "" : "else{" + f(o, !1, !1) + "}"
          }${d}}catch(e){}}()`
        : `!function(){try{${c}var e=localStorage.getItem('${t}');if(e){${
            s ? `var x=${JSON.stringify(s)};` : ""
          }${f(s ? "x[e]" : "e", !0)}}else{${f(
            o,
            !1,
            !1
          )};}${d}}catch(t){}}();`;
    return w.createElement("script", {
      nonce: l,
      dangerouslySetInnerHTML: { __html: h },
    });
  }
);
const rT = ({ ...e }) => {
    const { theme: t = "system" } = nT();
    return S.jsx(QE, {
      theme: t,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      },
      ...e,
    });
  },
  iT = ["top", "right", "bottom", "left"],
  nr = Math.min,
  it = Math.max,
  Va = Math.round,
  Bs = Math.floor,
  qt = (e) => ({ x: e, y: e }),
  oT = { left: "right", right: "left", bottom: "top", top: "bottom" },
  sT = { start: "end", end: "start" };
function Tc(e, t, n) {
  return it(e, nr(t, n));
}
function mn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function gn(e) {
  return e.split("-")[0];
}
function Ui(e) {
  return e.split("-")[1];
}
function of(e) {
  return e === "x" ? "y" : "x";
}
function sf(e) {
  return e === "y" ? "height" : "width";
}
const aT = new Set(["top", "bottom"]);
function Qt(e) {
  return aT.has(gn(e)) ? "y" : "x";
}
function af(e) {
  return of(Qt(e));
}
function lT(e, t, n) {
  n === void 0 && (n = !1);
  const r = Ui(e),
    i = af(e),
    o = sf(i);
  let s =
    i === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return t.reference[o] > t.floating[o] && (s = _a(s)), [s, _a(s)];
}
function uT(e) {
  const t = _a(e);
  return [Pc(e), t, Pc(t)];
}
function Pc(e) {
  return e.replace(/start|end/g, (t) => sT[t]);
}
const Tp = ["left", "right"],
  Pp = ["right", "left"],
  cT = ["top", "bottom"],
  dT = ["bottom", "top"];
function fT(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? Pp : Tp) : t ? Tp : Pp;
    case "left":
    case "right":
      return t ? cT : dT;
    default:
      return [];
  }
}
function hT(e, t, n, r) {
  const i = Ui(e);
  let o = fT(gn(e), n === "start", r);
  return (
    i && ((o = o.map((s) => s + "-" + i)), t && (o = o.concat(o.map(Pc)))), o
  );
}
function _a(e) {
  return e.replace(/left|right|bottom|top/g, (t) => oT[t]);
}
function pT(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function C0(e) {
  return typeof e != "number"
    ? pT(e)
    : { top: e, right: e, bottom: e, left: e };
}
function Fa(e) {
  const { x: t, y: n, width: r, height: i } = e;
  return {
    width: r,
    height: i,
    top: n,
    left: t,
    right: t + r,
    bottom: n + i,
    x: t,
    y: n,
  };
}
function kp(e, t, n) {
  let { reference: r, floating: i } = e;
  const o = Qt(t),
    s = af(t),
    a = sf(s),
    l = gn(t),
    u = o === "y",
    c = r.x + r.width / 2 - i.width / 2,
    d = r.y + r.height / 2 - i.height / 2,
    f = r[a] / 2 - i[a] / 2;
  let h;
  switch (l) {
    case "top":
      h = { x: c, y: r.y - i.height };
      break;
    case "bottom":
      h = { x: c, y: r.y + r.height };
      break;
    case "right":
      h = { x: r.x + r.width, y: d };
      break;
    case "left":
      h = { x: r.x - i.width, y: d };
      break;
    default:
      h = { x: r.x, y: r.y };
  }
  switch (Ui(t)) {
    case "start":
      h[s] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      h[s] += f * (n && u ? -1 : 1);
      break;
  }
  return h;
}
const mT = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: i = "absolute",
      middleware: o = [],
      platform: s,
    } = n,
    a = o.filter(Boolean),
    l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let u = await s.getElementRects({ reference: e, floating: t, strategy: i }),
    { x: c, y: d } = kp(u, r, l),
    f = r,
    h = {},
    v = 0;
  for (let g = 0; g < a.length; g++) {
    const { name: x, fn: m } = a[g],
      {
        x: p,
        y,
        data: b,
        reset: C,
      } = await m({
        x: c,
        y: d,
        initialPlacement: r,
        placement: f,
        strategy: i,
        middlewareData: h,
        rects: u,
        platform: s,
        elements: { reference: e, floating: t },
      });
    (c = p ?? c),
      (d = y ?? d),
      (h = { ...h, [x]: { ...h[x], ...b } }),
      C &&
        v <= 50 &&
        (v++,
        typeof C == "object" &&
          (C.placement && (f = C.placement),
          C.rects &&
            (u =
              C.rects === !0
                ? await s.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: i,
                  })
                : C.rects),
          ({ x: c, y: d } = kp(u, f, l))),
        (g = -1));
  }
  return { x: c, y: d, placement: f, strategy: i, middlewareData: h };
};
async function Ho(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: i, platform: o, rects: s, elements: a, strategy: l } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: c = "viewport",
      elementContext: d = "floating",
      altBoundary: f = !1,
      padding: h = 0,
    } = mn(t, e),
    v = C0(h),
    x = a[f ? (d === "floating" ? "reference" : "floating") : d],
    m = Fa(
      await o.getClippingRect({
        element:
          (n = await (o.isElement == null ? void 0 : o.isElement(x))) == null ||
          n
            ? x
            : x.contextElement ||
              (await (o.getDocumentElement == null
                ? void 0
                : o.getDocumentElement(a.floating))),
        boundary: u,
        rootBoundary: c,
        strategy: l,
      })
    ),
    p =
      d === "floating"
        ? { x: r, y: i, width: s.floating.width, height: s.floating.height }
        : s.reference,
    y = await (o.getOffsetParent == null
      ? void 0
      : o.getOffsetParent(a.floating)),
    b = (await (o.isElement == null ? void 0 : o.isElement(y)))
      ? (await (o.getScale == null ? void 0 : o.getScale(y))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    C = Fa(
      o.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: p,
            offsetParent: y,
            strategy: l,
          })
        : p
    );
  return {
    top: (m.top - C.top + v.top) / b.y,
    bottom: (C.bottom - m.bottom + v.bottom) / b.y,
    left: (m.left - C.left + v.left) / b.x,
    right: (C.right - m.right + v.right) / b.x,
  };
}
const gT = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: i,
          rects: o,
          platform: s,
          elements: a,
          middlewareData: l,
        } = t,
        { element: u, padding: c = 0 } = mn(e, t) || {};
      if (u == null) return {};
      const d = C0(c),
        f = { x: n, y: r },
        h = af(i),
        v = sf(h),
        g = await s.getDimensions(u),
        x = h === "y",
        m = x ? "top" : "left",
        p = x ? "bottom" : "right",
        y = x ? "clientHeight" : "clientWidth",
        b = o.reference[v] + o.reference[h] - f[h] - o.floating[v],
        C = f[h] - o.reference[h],
        E = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
      let T = E ? E[y] : 0;
      (!T || !(await (s.isElement == null ? void 0 : s.isElement(E)))) &&
        (T = a.floating[y] || o.floating[v]);
      const P = b / 2 - C / 2,
        M = T / 2 - g[v] / 2 - 1,
        N = nr(d[m], M),
        F = nr(d[p], M),
        I = N,
        G = T - g[v] - F,
        O = T / 2 - g[v] / 2 + P,
        Q = Tc(I, O, G),
        $ =
          !l.arrow &&
          Ui(i) != null &&
          O !== Q &&
          o.reference[v] / 2 - (O < I ? N : F) - g[v] / 2 < 0,
        _ = $ ? (O < I ? O - I : O - G) : 0;
      return {
        [h]: f[h] + _,
        data: {
          [h]: Q,
          centerOffset: O - Q - _,
          ...($ && { alignmentOffset: _ }),
        },
        reset: $,
      };
    },
  }),
  yT = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: i,
              middlewareData: o,
              rects: s,
              initialPlacement: a,
              platform: l,
              elements: u,
            } = t,
            {
              mainAxis: c = !0,
              crossAxis: d = !0,
              fallbackPlacements: f,
              fallbackStrategy: h = "bestFit",
              fallbackAxisSideDirection: v = "none",
              flipAlignment: g = !0,
              ...x
            } = mn(e, t);
          if ((n = o.arrow) != null && n.alignmentOffset) return {};
          const m = gn(i),
            p = Qt(a),
            y = gn(a) === a,
            b = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)),
            C = f || (y || !g ? [_a(a)] : uT(a)),
            E = v !== "none";
          !f && E && C.push(...hT(a, g, v, b));
          const T = [a, ...C],
            P = await Ho(t, x),
            M = [];
          let N = ((r = o.flip) == null ? void 0 : r.overflows) || [];
          if ((c && M.push(P[m]), d)) {
            const O = lT(i, s, b);
            M.push(P[O[0]], P[O[1]]);
          }
          if (
            ((N = [...N, { placement: i, overflows: M }]),
            !M.every((O) => O <= 0))
          ) {
            var F, I;
            const O = (((F = o.flip) == null ? void 0 : F.index) || 0) + 1,
              Q = T[O];
            if (
              Q &&
              (!(d === "alignment" ? p !== Qt(Q) : !1) ||
                N.every((k) => k.overflows[0] > 0 && Qt(k.placement) === p))
            )
              return {
                data: { index: O, overflows: N },
                reset: { placement: Q },
              };
            let $ =
              (I = N.filter((_) => _.overflows[0] <= 0).sort(
                (_, k) => _.overflows[1] - k.overflows[1]
              )[0]) == null
                ? void 0
                : I.placement;
            if (!$)
              switch (h) {
                case "bestFit": {
                  var G;
                  const _ =
                    (G = N.filter((k) => {
                      if (E) {
                        const R = Qt(k.placement);
                        return R === p || R === "y";
                      }
                      return !0;
                    })
                      .map((k) => [
                        k.placement,
                        k.overflows
                          .filter((R) => R > 0)
                          .reduce((R, L) => R + L, 0),
                      ])
                      .sort((k, R) => k[1] - R[1])[0]) == null
                      ? void 0
                      : G[0];
                  _ && ($ = _);
                  break;
                }
                case "initialPlacement":
                  $ = a;
                  break;
              }
            if (i !== $) return { reset: { placement: $ } };
          }
          return {};
        },
      }
    );
  };
function Ap(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function Rp(e) {
  return iT.some((t) => e[t] >= 0);
}
const vT = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "hide",
        options: e,
        async fn(t) {
          const { rects: n } = t,
            { strategy: r = "referenceHidden", ...i } = mn(e, t);
          switch (r) {
            case "referenceHidden": {
              const o = await Ho(t, { ...i, elementContext: "reference" }),
                s = Ap(o, n.reference);
              return {
                data: { referenceHiddenOffsets: s, referenceHidden: Rp(s) },
              };
            }
            case "escaped": {
              const o = await Ho(t, { ...i, altBoundary: !0 }),
                s = Ap(o, n.floating);
              return { data: { escapedOffsets: s, escaped: Rp(s) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  E0 = new Set(["left", "top"]);
async function xT(e, t) {
  const { placement: n, platform: r, elements: i } = e,
    o = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)),
    s = gn(n),
    a = Ui(n),
    l = Qt(n) === "y",
    u = E0.has(s) ? -1 : 1,
    c = o && l ? -1 : 1,
    d = mn(t, e);
  let {
    mainAxis: f,
    crossAxis: h,
    alignmentAxis: v,
  } = typeof d == "number"
    ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis,
      };
  return (
    a && typeof v == "number" && (h = a === "end" ? v * -1 : v),
    l ? { x: h * c, y: f * u } : { x: f * u, y: h * c }
  );
}
const wT = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: i, y: o, placement: s, middlewareData: a } = t,
            l = await xT(t, e);
          return s === ((n = a.offset) == null ? void 0 : n.placement) &&
            (r = a.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: i + l.x, y: o + l.y, data: { ...l, placement: s } };
        },
      }
    );
  },
  ST = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: i } = t,
            {
              mainAxis: o = !0,
              crossAxis: s = !1,
              limiter: a = {
                fn: (x) => {
                  let { x: m, y: p } = x;
                  return { x: m, y: p };
                },
              },
              ...l
            } = mn(e, t),
            u = { x: n, y: r },
            c = await Ho(t, l),
            d = Qt(gn(i)),
            f = of(d);
          let h = u[f],
            v = u[d];
          if (o) {
            const x = f === "y" ? "top" : "left",
              m = f === "y" ? "bottom" : "right",
              p = h + c[x],
              y = h - c[m];
            h = Tc(p, h, y);
          }
          if (s) {
            const x = d === "y" ? "top" : "left",
              m = d === "y" ? "bottom" : "right",
              p = v + c[x],
              y = v - c[m];
            v = Tc(p, v, y);
          }
          const g = a.fn({ ...t, [f]: h, [d]: v });
          return {
            ...g,
            data: { x: g.x - n, y: g.y - r, enabled: { [f]: o, [d]: s } },
          };
        },
      }
    );
  },
  bT = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: i, rects: o, middlewareData: s } = t,
            { offset: a = 0, mainAxis: l = !0, crossAxis: u = !0 } = mn(e, t),
            c = { x: n, y: r },
            d = Qt(i),
            f = of(d);
          let h = c[f],
            v = c[d];
          const g = mn(a, t),
            x =
              typeof g == "number"
                ? { mainAxis: g, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...g };
          if (l) {
            const y = f === "y" ? "height" : "width",
              b = o.reference[f] - o.floating[y] + x.mainAxis,
              C = o.reference[f] + o.reference[y] - x.mainAxis;
            h < b ? (h = b) : h > C && (h = C);
          }
          if (u) {
            var m, p;
            const y = f === "y" ? "width" : "height",
              b = E0.has(gn(i)),
              C =
                o.reference[d] -
                o.floating[y] +
                ((b && ((m = s.offset) == null ? void 0 : m[d])) || 0) +
                (b ? 0 : x.crossAxis),
              E =
                o.reference[d] +
                o.reference[y] +
                (b ? 0 : ((p = s.offset) == null ? void 0 : p[d]) || 0) -
                (b ? x.crossAxis : 0);
            v < C ? (v = C) : v > E && (v = E);
          }
          return { [f]: h, [d]: v };
        },
      }
    );
  },
  CT = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: i, rects: o, platform: s, elements: a } = t,
            { apply: l = () => {}, ...u } = mn(e, t),
            c = await Ho(t, u),
            d = gn(i),
            f = Ui(i),
            h = Qt(i) === "y",
            { width: v, height: g } = o.floating;
          let x, m;
          d === "top" || d === "bottom"
            ? ((x = d),
              (m =
                f ===
                ((await (s.isRTL == null ? void 0 : s.isRTL(a.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((m = d), (x = f === "end" ? "top" : "bottom"));
          const p = g - c.top - c.bottom,
            y = v - c.left - c.right,
            b = nr(g - c[x], p),
            C = nr(v - c[m], y),
            E = !t.middlewareData.shift;
          let T = b,
            P = C;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (P = y),
            (r = t.middlewareData.shift) != null && r.enabled.y && (T = p),
            E && !f)
          ) {
            const N = it(c.left, 0),
              F = it(c.right, 0),
              I = it(c.top, 0),
              G = it(c.bottom, 0);
            h
              ? (P = v - 2 * (N !== 0 || F !== 0 ? N + F : it(c.left, c.right)))
              : (T =
                  g - 2 * (I !== 0 || G !== 0 ? I + G : it(c.top, c.bottom)));
          }
          await l({ ...t, availableWidth: P, availableHeight: T });
          const M = await s.getDimensions(a.floating);
          return v !== M.width || g !== M.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function ml() {
  return typeof window < "u";
}
function Wi(e) {
  return T0(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function at(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function tn(e) {
  var t;
  return (t = (T0(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function T0(e) {
  return ml() ? e instanceof Node || e instanceof at(e).Node : !1;
}
function Ft(e) {
  return ml() ? e instanceof Element || e instanceof at(e).Element : !1;
}
function en(e) {
  return ml() ? e instanceof HTMLElement || e instanceof at(e).HTMLElement : !1;
}
function Np(e) {
  return !ml() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof at(e).ShadowRoot;
}
const ET = new Set(["inline", "contents"]);
function cs(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: i } = zt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !ET.has(i);
}
const TT = new Set(["table", "td", "th"]);
function PT(e) {
  return TT.has(Wi(e));
}
const kT = [":popover-open", ":modal"];
function gl(e) {
  return kT.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const AT = ["transform", "translate", "scale", "rotate", "perspective"],
  RT = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  NT = ["paint", "layout", "strict", "content"];
function lf(e) {
  const t = uf(),
    n = Ft(e) ? zt(e) : e;
  return (
    AT.some((r) => (n[r] ? n[r] !== "none" : !1)) ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    RT.some((r) => (n.willChange || "").includes(r)) ||
    NT.some((r) => (n.contain || "").includes(r))
  );
}
function MT(e) {
  let t = rr(e);
  for (; en(t) && !Li(t); ) {
    if (lf(t)) return t;
    if (gl(t)) return null;
    t = rr(t);
  }
  return null;
}
function uf() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const DT = new Set(["html", "body", "#document"]);
function Li(e) {
  return DT.has(Wi(e));
}
function zt(e) {
  return at(e).getComputedStyle(e);
}
function yl(e) {
  return Ft(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function rr(e) {
  if (Wi(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (Np(e) && e.host) || tn(e);
  return Np(t) ? t.host : t;
}
function P0(e) {
  const t = rr(e);
  return Li(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : en(t) && cs(t)
    ? t
    : P0(t);
}
function Ko(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const i = P0(e),
    o = i === ((r = e.ownerDocument) == null ? void 0 : r.body),
    s = at(i);
  if (o) {
    const a = kc(s);
    return t.concat(
      s,
      s.visualViewport || [],
      cs(i) ? i : [],
      a && n ? Ko(a) : []
    );
  }
  return t.concat(i, Ko(i, [], n));
}
function kc(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function k0(e) {
  const t = zt(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const i = en(e),
    o = i ? e.offsetWidth : n,
    s = i ? e.offsetHeight : r,
    a = Va(n) !== o || Va(r) !== s;
  return a && ((n = o), (r = s)), { width: n, height: r, $: a };
}
function cf(e) {
  return Ft(e) ? e : e.contextElement;
}
function yi(e) {
  const t = cf(e);
  if (!en(t)) return qt(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: i, $: o } = k0(t);
  let s = (o ? Va(n.width) : n.width) / r,
    a = (o ? Va(n.height) : n.height) / i;
  return (
    (!s || !Number.isFinite(s)) && (s = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: s, y: a }
  );
}
const jT = qt(0);
function A0(e) {
  const t = at(e);
  return !uf() || !t.visualViewport
    ? jT
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function OT(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== at(e)) ? !1 : t;
}
function Vr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(),
    o = cf(e);
  let s = qt(1);
  t && (r ? Ft(r) && (s = yi(r)) : (s = yi(e)));
  const a = OT(o, n, r) ? A0(o) : qt(0);
  let l = (i.left + a.x) / s.x,
    u = (i.top + a.y) / s.y,
    c = i.width / s.x,
    d = i.height / s.y;
  if (o) {
    const f = at(o),
      h = r && Ft(r) ? at(r) : r;
    let v = f,
      g = kc(v);
    for (; g && r && h !== v; ) {
      const x = yi(g),
        m = g.getBoundingClientRect(),
        p = zt(g),
        y = m.left + (g.clientLeft + parseFloat(p.paddingLeft)) * x.x,
        b = m.top + (g.clientTop + parseFloat(p.paddingTop)) * x.y;
      (l *= x.x),
        (u *= x.y),
        (c *= x.x),
        (d *= x.y),
        (l += y),
        (u += b),
        (v = at(g)),
        (g = kc(v));
    }
  }
  return Fa({ width: c, height: d, x: l, y: u });
}
function df(e, t) {
  const n = yl(e).scrollLeft;
  return t ? t.left + n : Vr(tn(e)).left + n;
}
function R0(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(),
    i = r.left + t.scrollLeft - (n ? 0 : df(e, r)),
    o = r.top + t.scrollTop;
  return { x: i, y: o };
}
function LT(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: i } = e;
  const o = i === "fixed",
    s = tn(r),
    a = t ? gl(t.floating) : !1;
  if (r === s || (a && o)) return n;
  let l = { scrollLeft: 0, scrollTop: 0 },
    u = qt(1);
  const c = qt(0),
    d = en(r);
  if (
    (d || (!d && !o)) &&
    ((Wi(r) !== "body" || cs(s)) && (l = yl(r)), en(r))
  ) {
    const h = Vr(r);
    (u = yi(r)), (c.x = h.x + r.clientLeft), (c.y = h.y + r.clientTop);
  }
  const f = s && !d && !o ? R0(s, l, !0) : qt(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + f.y,
  };
}
function IT(e) {
  return Array.from(e.getClientRects());
}
function VT(e) {
  const t = tn(e),
    n = yl(e),
    r = e.ownerDocument.body,
    i = it(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    o = it(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + df(e);
  const a = -n.scrollTop;
  return (
    zt(r).direction === "rtl" && (s += it(t.clientWidth, r.clientWidth) - i),
    { width: i, height: o, x: s, y: a }
  );
}
function _T(e, t) {
  const n = at(e),
    r = tn(e),
    i = n.visualViewport;
  let o = r.clientWidth,
    s = r.clientHeight,
    a = 0,
    l = 0;
  if (i) {
    (o = i.width), (s = i.height);
    const u = uf();
    (!u || (u && t === "fixed")) && ((a = i.offsetLeft), (l = i.offsetTop));
  }
  return { width: o, height: s, x: a, y: l };
}
const FT = new Set(["absolute", "fixed"]);
function zT(e, t) {
  const n = Vr(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    i = n.left + e.clientLeft,
    o = en(e) ? yi(e) : qt(1),
    s = e.clientWidth * o.x,
    a = e.clientHeight * o.y,
    l = i * o.x,
    u = r * o.y;
  return { width: s, height: a, x: l, y: u };
}
function Mp(e, t, n) {
  let r;
  if (t === "viewport") r = _T(e, n);
  else if (t === "document") r = VT(tn(e));
  else if (Ft(t)) r = zT(t, n);
  else {
    const i = A0(e);
    r = { x: t.x - i.x, y: t.y - i.y, width: t.width, height: t.height };
  }
  return Fa(r);
}
function N0(e, t) {
  const n = rr(e);
  return n === t || !Ft(n) || Li(n)
    ? !1
    : zt(n).position === "fixed" || N0(n, t);
}
function BT(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Ko(e, [], !1).filter((a) => Ft(a) && Wi(a) !== "body"),
    i = null;
  const o = zt(e).position === "fixed";
  let s = o ? rr(e) : e;
  for (; Ft(s) && !Li(s); ) {
    const a = zt(s),
      l = lf(s);
    !l && a.position === "fixed" && (i = null),
      (
        o
          ? !l && !i
          : (!l && a.position === "static" && !!i && FT.has(i.position)) ||
            (cs(s) && !l && N0(e, s))
      )
        ? (r = r.filter((c) => c !== s))
        : (i = a),
      (s = rr(s));
  }
  return t.set(e, r), r;
}
function $T(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: i } = e;
  const s = [
      ...(n === "clippingAncestors"
        ? gl(t)
          ? []
          : BT(t, this._c)
        : [].concat(n)),
      r,
    ],
    a = s[0],
    l = s.reduce((u, c) => {
      const d = Mp(t, c, i);
      return (
        (u.top = it(d.top, u.top)),
        (u.right = nr(d.right, u.right)),
        (u.bottom = nr(d.bottom, u.bottom)),
        (u.left = it(d.left, u.left)),
        u
      );
    }, Mp(t, a, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top,
  };
}
function UT(e) {
  const { width: t, height: n } = k0(e);
  return { width: t, height: n };
}
function WT(e, t, n) {
  const r = en(t),
    i = tn(t),
    o = n === "fixed",
    s = Vr(e, !0, o, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = qt(0);
  function u() {
    l.x = df(i);
  }
  if (r || (!r && !o))
    if (((Wi(t) !== "body" || cs(i)) && (a = yl(t)), r)) {
      const h = Vr(t, !0, o, t);
      (l.x = h.x + t.clientLeft), (l.y = h.y + t.clientTop);
    } else i && u();
  o && !r && i && u();
  const c = i && !r && !o ? R0(i, a) : qt(0),
    d = s.left + a.scrollLeft - l.x - c.x,
    f = s.top + a.scrollTop - l.y - c.y;
  return { x: d, y: f, width: s.width, height: s.height };
}
function uu(e) {
  return zt(e).position === "static";
}
function Dp(e, t) {
  if (!en(e) || zt(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return tn(e) === n && (n = n.ownerDocument.body), n;
}
function M0(e, t) {
  const n = at(e);
  if (gl(e)) return n;
  if (!en(e)) {
    let i = rr(e);
    for (; i && !Li(i); ) {
      if (Ft(i) && !uu(i)) return i;
      i = rr(i);
    }
    return n;
  }
  let r = Dp(e, t);
  for (; r && PT(r) && uu(r); ) r = Dp(r, t);
  return r && Li(r) && uu(r) && !lf(r) ? n : r || MT(e) || n;
}
const HT = async function (e) {
  const t = this.getOffsetParent || M0,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: WT(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function KT(e) {
  return zt(e).direction === "rtl";
}
const GT = {
  convertOffsetParentRelativeRectToViewportRelativeRect: LT,
  getDocumentElement: tn,
  getClippingRect: $T,
  getOffsetParent: M0,
  getElementRects: HT,
  getClientRects: IT,
  getDimensions: UT,
  getScale: yi,
  isElement: Ft,
  isRTL: KT,
};
function D0(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function QT(e, t) {
  let n = null,
    r;
  const i = tn(e);
  function o() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), (n = null);
  }
  function s(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), o();
    const u = e.getBoundingClientRect(),
      { left: c, top: d, width: f, height: h } = u;
    if ((a || t(), !f || !h)) return;
    const v = Bs(d),
      g = Bs(i.clientWidth - (c + f)),
      x = Bs(i.clientHeight - (d + h)),
      m = Bs(c),
      y = {
        rootMargin: -v + "px " + -g + "px " + -x + "px " + -m + "px",
        threshold: it(0, nr(1, l)) || 1,
      };
    let b = !0;
    function C(E) {
      const T = E[0].intersectionRatio;
      if (T !== l) {
        if (!b) return s();
        T
          ? s(!1, T)
          : (r = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      T === 1 && !D0(u, e.getBoundingClientRect()) && s(), (b = !1);
    }
    try {
      n = new IntersectionObserver(C, { ...y, root: i.ownerDocument });
    } catch {
      n = new IntersectionObserver(C, y);
    }
    n.observe(e);
  }
  return s(!0), o;
}
function YT(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: i = !0,
      ancestorResize: o = !0,
      elementResize: s = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: l = !1,
    } = r,
    u = cf(e),
    c = i || o ? [...(u ? Ko(u) : []), ...Ko(t)] : [];
  c.forEach((m) => {
    i && m.addEventListener("scroll", n, { passive: !0 }),
      o && m.addEventListener("resize", n);
  });
  const d = u && a ? QT(u, n) : null;
  let f = -1,
    h = null;
  s &&
    ((h = new ResizeObserver((m) => {
      let [p] = m;
      p &&
        p.target === u &&
        h &&
        (h.unobserve(t),
        cancelAnimationFrame(f),
        (f = requestAnimationFrame(() => {
          var y;
          (y = h) == null || y.observe(t);
        }))),
        n();
    })),
    u && !l && h.observe(u),
    h.observe(t));
  let v,
    g = l ? Vr(e) : null;
  l && x();
  function x() {
    const m = Vr(e);
    g && !D0(g, m) && n(), (g = m), (v = requestAnimationFrame(x));
  }
  return (
    n(),
    () => {
      var m;
      c.forEach((p) => {
        i && p.removeEventListener("scroll", n),
          o && p.removeEventListener("resize", n);
      }),
        d == null || d(),
        (m = h) == null || m.disconnect(),
        (h = null),
        l && cancelAnimationFrame(v);
    }
  );
}
const XT = wT,
  qT = ST,
  ZT = yT,
  JT = CT,
  eP = vT,
  jp = gT,
  tP = bT,
  nP = (e, t, n) => {
    const r = new Map(),
      i = { platform: GT, ...n },
      o = { ...i.platform, _c: r };
    return mT(e, t, { ...i, platform: o });
  };
var rP = typeof document < "u",
  iP = function () {},
  aa = rP ? w.useLayoutEffect : iP;
function za(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, i;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!za(e[r], t[r])) return !1;
      return !0;
    }
    if (((i = Object.keys(e)), (n = i.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const o = i[r];
      if (!(o === "_owner" && e.$$typeof) && !za(e[o], t[o])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function j0(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Op(e, t) {
  const n = j0(e);
  return Math.round(t * n) / n;
}
function cu(e) {
  const t = w.useRef(e);
  return (
    aa(() => {
      t.current = e;
    }),
    t
  );
}
function oP(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: i,
      elements: { reference: o, floating: s } = {},
      transform: a = !0,
      whileElementsMounted: l,
      open: u,
    } = e,
    [c, d] = w.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [f, h] = w.useState(r);
  za(f, r) || h(r);
  const [v, g] = w.useState(null),
    [x, m] = w.useState(null),
    p = w.useCallback((k) => {
      k !== E.current && ((E.current = k), g(k));
    }, []),
    y = w.useCallback((k) => {
      k !== T.current && ((T.current = k), m(k));
    }, []),
    b = o || v,
    C = s || x,
    E = w.useRef(null),
    T = w.useRef(null),
    P = w.useRef(c),
    M = l != null,
    N = cu(l),
    F = cu(i),
    I = cu(u),
    G = w.useCallback(() => {
      if (!E.current || !T.current) return;
      const k = { placement: t, strategy: n, middleware: f };
      F.current && (k.platform = F.current),
        nP(E.current, T.current, k).then((R) => {
          const L = { ...R, isPositioned: I.current !== !1 };
          O.current &&
            !za(P.current, L) &&
            ((P.current = L),
            ls.flushSync(() => {
              d(L);
            }));
        });
    }, [f, t, n, F, I]);
  aa(() => {
    u === !1 &&
      P.current.isPositioned &&
      ((P.current.isPositioned = !1), d((k) => ({ ...k, isPositioned: !1 })));
  }, [u]);
  const O = w.useRef(!1);
  aa(
    () => (
      (O.current = !0),
      () => {
        O.current = !1;
      }
    ),
    []
  ),
    aa(() => {
      if ((b && (E.current = b), C && (T.current = C), b && C)) {
        if (N.current) return N.current(b, C, G);
        G();
      }
    }, [b, C, G, N, M]);
  const Q = w.useMemo(
      () => ({ reference: E, floating: T, setReference: p, setFloating: y }),
      [p, y]
    ),
    $ = w.useMemo(() => ({ reference: b, floating: C }), [b, C]),
    _ = w.useMemo(() => {
      const k = { position: n, left: 0, top: 0 };
      if (!$.floating) return k;
      const R = Op($.floating, c.x),
        L = Op($.floating, c.y);
      return a
        ? {
            ...k,
            transform: "translate(" + R + "px, " + L + "px)",
            ...(j0($.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: R, top: L };
    }, [n, a, $.floating, c.x, c.y]);
  return w.useMemo(
    () => ({ ...c, update: G, refs: Q, elements: $, floatingStyles: _ }),
    [c, G, Q, $, _]
  );
}
const sP = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: i } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? jp({ element: r.current, padding: i }).fn(n)
            : {}
          : r
          ? jp({ element: r, padding: i }).fn(n)
          : {};
      },
    };
  },
  aP = (e, t) => ({ ...XT(e), options: [e, t] }),
  lP = (e, t) => ({ ...qT(e), options: [e, t] }),
  uP = (e, t) => ({ ...tP(e), options: [e, t] }),
  cP = (e, t) => ({ ...ZT(e), options: [e, t] }),
  dP = (e, t) => ({ ...JT(e), options: [e, t] }),
  fP = (e, t) => ({ ...eP(e), options: [e, t] }),
  hP = (e, t) => ({ ...sP(e), options: [e, t] });
var pP = "Arrow",
  O0 = w.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: i = 5, ...o } = e;
    return S.jsx(nt.svg, {
      ...o,
      ref: t,
      width: r,
      height: i,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : S.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
O0.displayName = pP;
var mP = O0;
function gP(e) {
  const [t, n] = w.useState(void 0);
  return (
    tr(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((i) => {
          if (!Array.isArray(i) || !i.length) return;
          const o = i[0];
          let s, a;
          if ("borderBoxSize" in o) {
            const l = o.borderBoxSize,
              u = Array.isArray(l) ? l[0] : l;
            (s = u.inlineSize), (a = u.blockSize);
          } else (s = e.offsetWidth), (a = e.offsetHeight);
          n({ width: s, height: a });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
var L0 = "Popper",
  [I0, V0] = fl(L0),
  [oD, _0] = I0(L0),
  F0 = "PopperAnchor",
  z0 = w.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...i } = e,
      o = _0(F0, n),
      s = w.useRef(null),
      a = _t(t, s);
    return (
      w.useEffect(() => {
        o.onAnchorChange((r == null ? void 0 : r.current) || s.current);
      }),
      r ? null : S.jsx(nt.div, { ...i, ref: a })
    );
  });
z0.displayName = F0;
var ff = "PopperContent",
  [yP, vP] = I0(ff),
  B0 = w.forwardRef((e, t) => {
    var ee, zr, Sn, cr, bn, Br;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: i = 0,
        align: o = "center",
        alignOffset: s = 0,
        arrowPadding: a = 0,
        avoidCollisions: l = !0,
        collisionBoundary: u = [],
        collisionPadding: c = 0,
        sticky: d = "partial",
        hideWhenDetached: f = !1,
        updatePositionStrategy: h = "optimized",
        onPlaced: v,
        ...g
      } = e,
      x = _0(ff, n),
      [m, p] = w.useState(null),
      y = _t(t, (Cn) => p(Cn)),
      [b, C] = w.useState(null),
      E = gP(b),
      T = (E == null ? void 0 : E.width) ?? 0,
      P = (E == null ? void 0 : E.height) ?? 0,
      M = r + (o !== "center" ? "-" + o : ""),
      N =
        typeof c == "number"
          ? c
          : { top: 0, right: 0, bottom: 0, left: 0, ...c },
      F = Array.isArray(u) ? u : [u],
      I = F.length > 0,
      G = { padding: N, boundary: F.filter(wP), altBoundary: I },
      {
        refs: O,
        floatingStyles: Q,
        placement: $,
        isPositioned: _,
        middlewareData: k,
      } = oP({
        strategy: "fixed",
        placement: M,
        whileElementsMounted: (...Cn) =>
          YT(...Cn, { animationFrame: h === "always" }),
        elements: { reference: x.anchor },
        middleware: [
          aP({ mainAxis: i + P, alignmentAxis: s }),
          l &&
            lP({
              mainAxis: !0,
              crossAxis: !1,
              limiter: d === "partial" ? uP() : void 0,
              ...G,
            }),
          l && cP({ ...G }),
          dP({
            ...G,
            apply: ({
              elements: Cn,
              rects: ys,
              availableWidth: Al,
              availableHeight: vs,
            }) => {
              const { width: Rl, height: Qi } = ys.reference,
                $r = Cn.floating.style;
              $r.setProperty("--radix-popper-available-width", `${Al}px`),
                $r.setProperty("--radix-popper-available-height", `${vs}px`),
                $r.setProperty("--radix-popper-anchor-width", `${Rl}px`),
                $r.setProperty("--radix-popper-anchor-height", `${Qi}px`);
            },
          }),
          b && hP({ element: b, padding: a }),
          SP({ arrowWidth: T, arrowHeight: P }),
          f && fP({ strategy: "referenceHidden", ...G }),
        ],
      }),
      [R, L] = W0($),
      U = er(v);
    tr(() => {
      _ && (U == null || U());
    }, [_, U]);
    const z = (ee = k.arrow) == null ? void 0 : ee.x,
      Y = (zr = k.arrow) == null ? void 0 : zr.y,
      q = ((Sn = k.arrow) == null ? void 0 : Sn.centerOffset) !== 0,
      [we, De] = w.useState();
    return (
      tr(() => {
        m && De(window.getComputedStyle(m).zIndex);
      }, [m]),
      S.jsx("div", {
        ref: O.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Q,
          transform: _ ? Q.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: we,
          "--radix-popper-transform-origin": [
            (cr = k.transformOrigin) == null ? void 0 : cr.x,
            (bn = k.transformOrigin) == null ? void 0 : bn.y,
          ].join(" "),
          ...(((Br = k.hide) == null ? void 0 : Br.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: S.jsx(yP, {
          scope: n,
          placedSide: R,
          onArrowChange: C,
          arrowX: z,
          arrowY: Y,
          shouldHideArrow: q,
          children: S.jsx(nt.div, {
            "data-side": R,
            "data-align": L,
            ...g,
            ref: y,
            style: { ...g.style, animation: _ ? void 0 : "none" },
          }),
        }),
      })
    );
  });
B0.displayName = ff;
var $0 = "PopperArrow",
  xP = { top: "bottom", right: "left", bottom: "top", left: "right" },
  U0 = w.forwardRef(function (t, n) {
    const { __scopePopper: r, ...i } = t,
      o = vP($0, r),
      s = xP[o.placedSide];
    return S.jsx("span", {
      ref: o.onArrowChange,
      style: {
        position: "absolute",
        left: o.arrowX,
        top: o.arrowY,
        [s]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[o.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[o.placedSide],
        visibility: o.shouldHideArrow ? "hidden" : void 0,
      },
      children: S.jsx(mP, {
        ...i,
        ref: n,
        style: { ...i.style, display: "block" },
      }),
    });
  });
U0.displayName = $0;
function wP(e) {
  return e !== null;
}
var SP = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var x, m, p;
    const { placement: n, rects: r, middlewareData: i } = t,
      s = ((x = i.arrow) == null ? void 0 : x.centerOffset) !== 0,
      a = s ? 0 : e.arrowWidth,
      l = s ? 0 : e.arrowHeight,
      [u, c] = W0(n),
      d = { start: "0%", center: "50%", end: "100%" }[c],
      f = (((m = i.arrow) == null ? void 0 : m.x) ?? 0) + a / 2,
      h = (((p = i.arrow) == null ? void 0 : p.y) ?? 0) + l / 2;
    let v = "",
      g = "";
    return (
      u === "bottom"
        ? ((v = s ? d : `${f}px`), (g = `${-l}px`))
        : u === "top"
        ? ((v = s ? d : `${f}px`), (g = `${r.floating.height + l}px`))
        : u === "right"
        ? ((v = `${-l}px`), (g = s ? d : `${h}px`))
        : u === "left" &&
          ((v = `${r.floating.width + l}px`), (g = s ? d : `${h}px`)),
      { data: { x: v, y: g } }
    );
  },
});
function W0(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var bP = z0,
  CP = B0,
  EP = U0,
  [vl, sD] = fl("Tooltip", [V0]),
  hf = V0(),
  H0 = "TooltipProvider",
  TP = 700,
  Lp = "tooltip.open",
  [PP, K0] = vl(H0),
  G0 = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: n = TP,
        skipDelayDuration: r = 300,
        disableHoverableContent: i = !1,
        children: o,
      } = e,
      s = w.useRef(!0),
      a = w.useRef(!1),
      l = w.useRef(0);
    return (
      w.useEffect(() => {
        const u = l.current;
        return () => window.clearTimeout(u);
      }, []),
      S.jsx(PP, {
        scope: t,
        isOpenDelayedRef: s,
        delayDuration: n,
        onOpen: w.useCallback(() => {
          window.clearTimeout(l.current), (s.current = !1);
        }, []),
        onClose: w.useCallback(() => {
          window.clearTimeout(l.current),
            (l.current = window.setTimeout(() => (s.current = !0), r));
        }, [r]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: w.useCallback((u) => {
          a.current = u;
        }, []),
        disableHoverableContent: i,
        children: o,
      })
    );
  };
G0.displayName = H0;
var Q0 = "Tooltip",
  [aD, xl] = vl(Q0),
  Ac = "TooltipTrigger",
  kP = w.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      i = xl(Ac, n),
      o = K0(Ac, n),
      s = hf(n),
      a = w.useRef(null),
      l = _t(t, a, i.onTriggerChange),
      u = w.useRef(!1),
      c = w.useRef(!1),
      d = w.useCallback(() => (u.current = !1), []);
    return (
      w.useEffect(
        () => () => document.removeEventListener("pointerup", d),
        [d]
      ),
      S.jsx(bP, {
        asChild: !0,
        ...s,
        children: S.jsx(nt.button, {
          "aria-describedby": i.open ? i.contentId : void 0,
          "data-state": i.stateAttribute,
          ...r,
          ref: l,
          onPointerMove: Ee(e.onPointerMove, (f) => {
            f.pointerType !== "touch" &&
              !c.current &&
              !o.isPointerInTransitRef.current &&
              (i.onTriggerEnter(), (c.current = !0));
          }),
          onPointerLeave: Ee(e.onPointerLeave, () => {
            i.onTriggerLeave(), (c.current = !1);
          }),
          onPointerDown: Ee(e.onPointerDown, () => {
            i.open && i.onClose(),
              (u.current = !0),
              document.addEventListener("pointerup", d, { once: !0 });
          }),
          onFocus: Ee(e.onFocus, () => {
            u.current || i.onOpen();
          }),
          onBlur: Ee(e.onBlur, i.onClose),
          onClick: Ee(e.onClick, i.onClose),
        }),
      })
    );
  });
kP.displayName = Ac;
var AP = "TooltipPortal",
  [lD, RP] = vl(AP, { forceMount: void 0 }),
  Ii = "TooltipContent",
  Y0 = w.forwardRef((e, t) => {
    const n = RP(Ii, e.__scopeTooltip),
      { forceMount: r = n.forceMount, side: i = "top", ...o } = e,
      s = xl(Ii, e.__scopeTooltip);
    return S.jsx(Zd, {
      present: r || s.open,
      children: s.disableHoverableContent
        ? S.jsx(X0, { side: i, ...o, ref: t })
        : S.jsx(NP, { side: i, ...o, ref: t }),
    });
  }),
  NP = w.forwardRef((e, t) => {
    const n = xl(Ii, e.__scopeTooltip),
      r = K0(Ii, e.__scopeTooltip),
      i = w.useRef(null),
      o = _t(t, i),
      [s, a] = w.useState(null),
      { trigger: l, onClose: u } = n,
      c = i.current,
      { onPointerInTransitChange: d } = r,
      f = w.useCallback(() => {
        a(null), d(!1);
      }, [d]),
      h = w.useCallback(
        (v, g) => {
          const x = v.currentTarget,
            m = { x: v.clientX, y: v.clientY },
            p = LP(m, x.getBoundingClientRect()),
            y = IP(m, p),
            b = VP(g.getBoundingClientRect()),
            C = FP([...y, ...b]);
          a(C), d(!0);
        },
        [d]
      );
    return (
      w.useEffect(() => () => f(), [f]),
      w.useEffect(() => {
        if (l && c) {
          const v = (x) => h(x, c),
            g = (x) => h(x, l);
          return (
            l.addEventListener("pointerleave", v),
            c.addEventListener("pointerleave", g),
            () => {
              l.removeEventListener("pointerleave", v),
                c.removeEventListener("pointerleave", g);
            }
          );
        }
      }, [l, c, h, f]),
      w.useEffect(() => {
        if (s) {
          const v = (g) => {
            const x = g.target,
              m = { x: g.clientX, y: g.clientY },
              p =
                (l == null ? void 0 : l.contains(x)) ||
                (c == null ? void 0 : c.contains(x)),
              y = !_P(m, s);
            p ? f() : y && (f(), u());
          };
          return (
            document.addEventListener("pointermove", v),
            () => document.removeEventListener("pointermove", v)
          );
        }
      }, [l, c, s, u, f]),
      S.jsx(X0, { ...e, ref: o })
    );
  }),
  [MP, DP] = vl(Q0, { isInside: !1 }),
  jP = _b("TooltipContent"),
  X0 = w.forwardRef((e, t) => {
    const {
        __scopeTooltip: n,
        children: r,
        "aria-label": i,
        onEscapeKeyDown: o,
        onPointerDownOutside: s,
        ...a
      } = e,
      l = xl(Ii, n),
      u = hf(n),
      { onClose: c } = l;
    return (
      w.useEffect(
        () => (
          document.addEventListener(Lp, c),
          () => document.removeEventListener(Lp, c)
        ),
        [c]
      ),
      w.useEffect(() => {
        if (l.trigger) {
          const d = (f) => {
            const h = f.target;
            h != null && h.contains(l.trigger) && c();
          };
          return (
            window.addEventListener("scroll", d, { capture: !0 }),
            () => window.removeEventListener("scroll", d, { capture: !0 })
          );
        }
      }, [l.trigger, c]),
      S.jsx(qd, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: o,
        onPointerDownOutside: s,
        onFocusOutside: (d) => d.preventDefault(),
        onDismiss: c,
        children: S.jsxs(CP, {
          "data-state": l.stateAttribute,
          ...u,
          ...a,
          ref: t,
          style: {
            ...a.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            S.jsx(jP, { children: r }),
            S.jsx(MP, {
              scope: n,
              isInside: !0,
              children: S.jsx(uC, {
                id: l.contentId,
                role: "tooltip",
                children: i || r,
              }),
            }),
          ],
        }),
      })
    );
  });
Y0.displayName = Ii;
var q0 = "TooltipArrow",
  OP = w.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      i = hf(n);
    return DP(q0, n).isInside ? null : S.jsx(EP, { ...i, ...r, ref: t });
  });
OP.displayName = q0;
function LP(e, t) {
  const n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    i = Math.abs(t.right - e.x),
    o = Math.abs(t.left - e.x);
  switch (Math.min(n, r, i, o)) {
    case o:
      return "left";
    case i:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function IP(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case "bottom":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case "left":
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case "right":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function VP(e) {
  const { top: t, right: n, bottom: r, left: i } = e;
  return [
    { x: i, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: i, y: r },
  ];
}
function _P(e, t) {
  const { x: n, y: r } = e;
  let i = !1;
  for (let o = 0, s = t.length - 1; o < t.length; s = o++) {
    const a = t[o],
      l = t[s],
      u = a.x,
      c = a.y,
      d = l.x,
      f = l.y;
    c > r != f > r && n < ((d - u) * (r - c)) / (f - c) + u && (i = !i);
  }
  return i;
}
function FP(e) {
  const t = e.slice();
  return (
    t.sort((n, r) =>
      n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0
    ),
    zP(t)
  );
}
function zP(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    for (; t.length >= 2; ) {
      const o = t[t.length - 1],
        s = t[t.length - 2];
      if ((o.x - s.x) * (i.y - s.y) >= (o.y - s.y) * (i.x - s.x)) t.pop();
      else break;
    }
    t.push(i);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const i = e[r];
    for (; n.length >= 2; ) {
      const o = n[n.length - 1],
        s = n[n.length - 2];
      if ((o.x - s.x) * (i.y - s.y) >= (o.y - s.y) * (i.x - s.x)) n.pop();
      else break;
    }
    n.push(i);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
var BP = G0,
  Z0 = Y0;
const $P = BP,
  UP = w.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
    S.jsx(Z0, {
      ref: r,
      sideOffset: t,
      className: Bt(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...n,
    })
  );
UP.displayName = Z0.displayName;
var wl = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  Sl = typeof window > "u" || "Deno" in globalThis;
function Nt() {}
function WP(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function HP(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function KP(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Rc(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function GP(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ip(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: i,
    predicate: o,
    queryKey: s,
    stale: a,
  } = e;
  if (s) {
    if (r) {
      if (t.queryHash !== pf(s, t.options)) return !1;
    } else if (!Qo(t.queryKey, s)) return !1;
  }
  if (n !== "all") {
    const l = t.isActive();
    if ((n === "active" && !l) || (n === "inactive" && l)) return !1;
  }
  return !(
    (typeof a == "boolean" && t.isStale() !== a) ||
    (i && i !== t.state.fetchStatus) ||
    (o && !o(t))
  );
}
function Vp(e, t) {
  const { exact: n, status: r, predicate: i, mutationKey: o } = e;
  if (o) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (Go(t.options.mutationKey) !== Go(o)) return !1;
    } else if (!Qo(t.options.mutationKey, o)) return !1;
  }
  return !((r && t.state.status !== r) || (i && !i(t)));
}
function pf(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Go)(e);
}
function Go(e) {
  return JSON.stringify(e, (t, n) =>
    Nc(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, i) => ((r[i] = n[i]), r), {})
      : n
  );
}
function Qo(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? Object.keys(t).every((n) => Qo(e[n], t[n]))
    : !1;
}
function J0(e, t) {
  if (e === t) return e;
  const n = _p(e) && _p(t);
  if (n || (Nc(e) && Nc(t))) {
    const r = n ? e : Object.keys(e),
      i = r.length,
      o = n ? t : Object.keys(t),
      s = o.length,
      a = n ? [] : {},
      l = new Set(r);
    let u = 0;
    for (let c = 0; c < s; c++) {
      const d = n ? c : o[c];
      ((!n && l.has(d)) || n) && e[d] === void 0 && t[d] === void 0
        ? ((a[d] = void 0), u++)
        : ((a[d] = J0(e[d], t[d])), a[d] === e[d] && e[d] !== void 0 && u++);
    }
    return i === s && u === i ? e : a;
  }
  return t;
}
function _p(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Nc(e) {
  if (!Fp(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !Fp(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function Fp(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function QP(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function YP(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
    ? J0(e, t)
    : t;
}
function XP(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function qP(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var mf = Symbol();
function ex(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === mf
    ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
    : e.queryFn;
}
var br,
  In,
  wi,
  dg,
  ZP =
    ((dg = class extends wl {
      constructor() {
        super();
        J(this, br);
        J(this, In);
        J(this, wi);
        H(this, wi, (t) => {
          if (!Sl && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        A(this, In) || this.setEventListener(A(this, wi));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = A(this, In)) == null || t.call(this), H(this, In, void 0));
      }
      setEventListener(t) {
        var n;
        H(this, wi, t),
          (n = A(this, In)) == null || n.call(this),
          H(
            this,
            In,
            t((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            })
          );
      }
      setFocused(t) {
        A(this, br) !== t && (H(this, br, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof A(this, br) == "boolean"
          ? A(this, br)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (br = new WeakMap()),
    (In = new WeakMap()),
    (wi = new WeakMap()),
    dg),
  tx = new ZP(),
  Si,
  Vn,
  bi,
  fg,
  JP =
    ((fg = class extends wl {
      constructor() {
        super();
        J(this, Si, !0);
        J(this, Vn);
        J(this, bi);
        H(this, bi, (t) => {
          if (!Sl && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                window.removeEventListener("online", n),
                  window.removeEventListener("offline", r);
              }
            );
          }
        });
      }
      onSubscribe() {
        A(this, Vn) || this.setEventListener(A(this, bi));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = A(this, Vn)) == null || t.call(this), H(this, Vn, void 0));
      }
      setEventListener(t) {
        var n;
        H(this, bi, t),
          (n = A(this, Vn)) == null || n.call(this),
          H(this, Vn, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        A(this, Si) !== t &&
          (H(this, Si, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return A(this, Si);
      }
    }),
    (Si = new WeakMap()),
    (Vn = new WeakMap()),
    (bi = new WeakMap()),
    fg),
  Ba = new JP();
function ek() {
  let e, t;
  const n = new Promise((i, o) => {
    (e = i), (t = o);
  });
  (n.status = "pending"), n.catch(() => {});
  function r(i) {
    Object.assign(n, i), delete n.resolve, delete n.reject;
  }
  return (
    (n.resolve = (i) => {
      r({ status: "fulfilled", value: i }), e(i);
    }),
    (n.reject = (i) => {
      r({ status: "rejected", reason: i }), t(i);
    }),
    n
  );
}
function tk(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function nx(e) {
  return (e ?? "online") === "online" ? Ba.isOnline() : !0;
}
var rx = class extends Error {
  constructor(e) {
    super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
};
function du(e) {
  return e instanceof rx;
}
function ix(e) {
  let t = !1,
    n = 0,
    r = !1,
    i;
  const o = ek(),
    s = (g) => {
      var x;
      r || (f(new rx(g)), (x = e.abort) == null || x.call(e));
    },
    a = () => {
      t = !0;
    },
    l = () => {
      t = !1;
    },
    u = () =>
      tx.isFocused() &&
      (e.networkMode === "always" || Ba.isOnline()) &&
      e.canRun(),
    c = () => nx(e.networkMode) && e.canRun(),
    d = (g) => {
      var x;
      r ||
        ((r = !0),
        (x = e.onSuccess) == null || x.call(e, g),
        i == null || i(),
        o.resolve(g));
    },
    f = (g) => {
      var x;
      r ||
        ((r = !0),
        (x = e.onError) == null || x.call(e, g),
        i == null || i(),
        o.reject(g));
    },
    h = () =>
      new Promise((g) => {
        var x;
        (i = (m) => {
          (r || u()) && g(m);
        }),
          (x = e.onPause) == null || x.call(e);
      }).then(() => {
        var g;
        (i = void 0), r || (g = e.onContinue) == null || g.call(e);
      }),
    v = () => {
      if (r) return;
      let g;
      const x = n === 0 ? e.initialPromise : void 0;
      try {
        g = x ?? e.fn();
      } catch (m) {
        g = Promise.reject(m);
      }
      Promise.resolve(g)
        .then(d)
        .catch((m) => {
          var E;
          if (r) return;
          const p = e.retry ?? (Sl ? 0 : 3),
            y = e.retryDelay ?? tk,
            b = typeof y == "function" ? y(n, m) : y,
            C =
              p === !0 ||
              (typeof p == "number" && n < p) ||
              (typeof p == "function" && p(n, m));
          if (t || !C) {
            f(m);
            return;
          }
          n++,
            (E = e.onFail) == null || E.call(e, n, m),
            QP(b)
              .then(() => (u() ? void 0 : h()))
              .then(() => {
                t ? f(m) : v();
              });
        });
    };
  return {
    promise: o,
    cancel: s,
    continue: () => (i == null || i(), o),
    cancelRetry: a,
    continueRetry: l,
    canStart: c,
    start: () => (c() ? v() : h().then(v), o),
  };
}
var nk = (e) => setTimeout(e, 0);
function rk() {
  let e = [],
    t = 0,
    n = (a) => {
      a();
    },
    r = (a) => {
      a();
    },
    i = nk;
  const o = (a) => {
      t
        ? e.push(a)
        : i(() => {
            n(a);
          });
    },
    s = () => {
      const a = e;
      (e = []),
        a.length &&
          i(() => {
            r(() => {
              a.forEach((l) => {
                n(l);
              });
            });
          });
    };
  return {
    batch: (a) => {
      let l;
      t++;
      try {
        l = a();
      } finally {
        t--, t || s();
      }
      return l;
    },
    batchCalls:
      (a) =>
      (...l) => {
        o(() => {
          a(...l);
        });
      },
    schedule: o,
    setNotifyFunction: (a) => {
      n = a;
    },
    setBatchNotifyFunction: (a) => {
      r = a;
    },
    setScheduler: (a) => {
      i = a;
    },
  };
}
var $e = rk(),
  Cr,
  hg,
  ox =
    ((hg = class {
      constructor() {
        J(this, Cr);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          HP(this.gcTime) &&
            H(
              this,
              Cr,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (Sl ? 1 / 0 : 5 * 60 * 1e3)
        );
      }
      clearGcTimeout() {
        A(this, Cr) && (clearTimeout(A(this, Cr)), H(this, Cr, void 0));
      }
    }),
    (Cr = new WeakMap()),
    hg),
  Ci,
  Er,
  pt,
  Tr,
  Ie,
  ts,
  Pr,
  Mt,
  rn,
  pg,
  ik =
    ((pg = class extends ox {
      constructor(t) {
        super();
        J(this, Mt);
        J(this, Ci);
        J(this, Er);
        J(this, pt);
        J(this, Tr);
        J(this, Ie);
        J(this, ts);
        J(this, Pr);
        H(this, Pr, !1),
          H(this, ts, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          H(this, Tr, t.client),
          H(this, pt, A(this, Tr).getQueryCache()),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          H(this, Ci, sk(this.options)),
          (this.state = t.state ?? A(this, Ci)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = A(this, Ie)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        (this.options = { ...A(this, ts), ...t }),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          A(this, pt).remove(this);
      }
      setData(t, n) {
        const r = YP(this.state.data, t, this.options);
        return (
          je(this, Mt, rn).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        je(this, Mt, rn).call(this, {
          type: "setState",
          state: t,
          setStateOptions: n,
        });
      }
      cancel(t) {
        var r, i;
        const n = (r = A(this, Ie)) == null ? void 0 : r.promise;
        return (
          (i = A(this, Ie)) == null || i.cancel(t),
          n ? n.then(Nt).catch(Nt) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(A(this, Ci));
      }
      isActive() {
        return this.observers.some((t) => GP(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === mf ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStatic() {
        return this.getObserversCount() > 0
          ? this.observers.some(
              (t) => Rc(t.options.staleTime, this) === "static"
            )
          : !1;
      }
      isStale() {
        return this.getObserversCount() > 0
          ? this.observers.some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0 || this.state.isInvalidated;
      }
      isStaleByTime(t = 0) {
        return this.state.data === void 0
          ? !0
          : t === "static"
          ? !1
          : this.state.isInvalidated
          ? !0
          : !KP(this.state.dataUpdatedAt, t);
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = A(this, Ie)) == null || n.continue();
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = A(this, Ie)) == null || n.continue();
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          A(this, pt).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (A(this, Ie) &&
              (A(this, Pr)
                ? A(this, Ie).cancel({ revert: !0 })
                : A(this, Ie).cancelRetry()),
            this.scheduleGc()),
          A(this, pt).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          je(this, Mt, rn).call(this, { type: "invalidate" });
      }
      fetch(t, n) {
        var u, c, d;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (A(this, Ie))
            return A(this, Ie).continueRetry(), A(this, Ie).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const f = this.observers.find((h) => h.options.queryFn);
          f && this.setOptions(f.options);
        }
        const r = new AbortController(),
          i = (f) => {
            Object.defineProperty(f, "signal", {
              enumerable: !0,
              get: () => (H(this, Pr, !0), r.signal),
            });
          },
          o = () => {
            const f = ex(this.options, n),
              v = (() => {
                const g = {
                  client: A(this, Tr),
                  queryKey: this.queryKey,
                  meta: this.meta,
                };
                return i(g), g;
              })();
            return (
              H(this, Pr, !1),
              this.options.persister ? this.options.persister(f, v, this) : f(v)
            );
          },
          a = (() => {
            const f = {
              fetchOptions: n,
              options: this.options,
              queryKey: this.queryKey,
              client: A(this, Tr),
              state: this.state,
              fetchFn: o,
            };
            return i(f), f;
          })();
        (u = this.options.behavior) == null || u.onFetch(a, this),
          H(this, Er, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((c = a.fetchOptions) == null ? void 0 : c.meta)) &&
            je(this, Mt, rn).call(this, {
              type: "fetch",
              meta: (d = a.fetchOptions) == null ? void 0 : d.meta,
            });
        const l = (f) => {
          var h, v, g, x;
          (du(f) && f.silent) ||
            je(this, Mt, rn).call(this, { type: "error", error: f }),
            du(f) ||
              ((v = (h = A(this, pt).config).onError) == null ||
                v.call(h, f, this),
              (x = (g = A(this, pt).config).onSettled) == null ||
                x.call(g, this.state.data, f, this)),
            this.scheduleGc();
        };
        return (
          H(
            this,
            Ie,
            ix({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: a.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (f) => {
                var h, v, g, x;
                if (f === void 0) {
                  l(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(f);
                } catch (m) {
                  l(m);
                  return;
                }
                (v = (h = A(this, pt).config).onSuccess) == null ||
                  v.call(h, f, this),
                  (x = (g = A(this, pt).config).onSettled) == null ||
                    x.call(g, f, this.state.error, this),
                  this.scheduleGc();
              },
              onError: l,
              onFail: (f, h) => {
                je(this, Mt, rn).call(this, {
                  type: "failed",
                  failureCount: f,
                  error: h,
                });
              },
              onPause: () => {
                je(this, Mt, rn).call(this, { type: "pause" });
              },
              onContinue: () => {
                je(this, Mt, rn).call(this, { type: "continue" });
              },
              retry: a.options.retry,
              retryDelay: a.options.retryDelay,
              networkMode: a.options.networkMode,
              canRun: () => !0,
            })
          ),
          A(this, Ie).start()
        );
      }
    }),
    (Ci = new WeakMap()),
    (Er = new WeakMap()),
    (pt = new WeakMap()),
    (Tr = new WeakMap()),
    (Ie = new WeakMap()),
    (ts = new WeakMap()),
    (Pr = new WeakMap()),
    (Mt = new WeakSet()),
    (rn = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...r, fetchStatus: "paused" };
          case "continue":
            return { ...r, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...r,
              ...ok(r.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            return (
              H(this, Er, void 0),
              {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...(!t.manual && {
                  fetchStatus: "idle",
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                }),
              }
            );
          case "error":
            const i = t.error;
            return du(i) && i.revert && A(this, Er)
              ? { ...A(this, Er), fetchStatus: "idle" }
              : {
                  ...r,
                  error: i,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: i,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...r, isInvalidated: !0 };
          case "setState":
            return { ...r, ...t.state };
        }
      };
      (this.state = n(this.state)),
        $e.batch(() => {
          this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            A(this, pt).notify({ query: this, type: "updated", action: t });
        });
    }),
    pg);
function ok(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: nx(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function sk(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? r ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var Wt,
  mg,
  ak =
    ((mg = class extends wl {
      constructor(t = {}) {
        super();
        J(this, Wt);
        (this.config = t), H(this, Wt, new Map());
      }
      build(t, n, r) {
        const i = n.queryKey,
          o = n.queryHash ?? pf(i, n);
        let s = this.get(o);
        return (
          s ||
            ((s = new ik({
              client: t,
              queryKey: i,
              queryHash: o,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(i),
            })),
            this.add(s)),
          s
        );
      }
      add(t) {
        A(this, Wt).has(t.queryHash) ||
          (A(this, Wt).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = A(this, Wt).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && A(this, Wt).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        $e.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return A(this, Wt).get(t);
      }
      getAll() {
        return [...A(this, Wt).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Ip(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => Ip(t, r)) : n;
      }
      notify(t) {
        $e.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        $e.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        $e.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (Wt = new WeakMap()),
    mg),
  Ht,
  ze,
  kr,
  Kt,
  Nn,
  gg,
  lk =
    ((gg = class extends ox {
      constructor(t) {
        super();
        J(this, Kt);
        J(this, Ht);
        J(this, ze);
        J(this, kr);
        (this.mutationId = t.mutationId),
          H(this, ze, t.mutationCache),
          H(this, Ht, []),
          (this.state = t.state || uk()),
          this.setOptions(t.options),
          this.scheduleGc();
      }
      setOptions(t) {
        (this.options = t), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        A(this, Ht).includes(t) ||
          (A(this, Ht).push(t),
          this.clearGcTimeout(),
          A(this, ze).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        H(
          this,
          Ht,
          A(this, Ht).filter((n) => n !== t)
        ),
          this.scheduleGc(),
          A(this, ze).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          });
      }
      optionalRemove() {
        A(this, Ht).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : A(this, ze).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = A(this, kr)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var o, s, a, l, u, c, d, f, h, v, g, x, m, p, y, b, C, E, T, P;
        const n = () => {
          je(this, Kt, Nn).call(this, { type: "continue" });
        };
        H(
          this,
          kr,
          ix({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (M, N) => {
              je(this, Kt, Nn).call(this, {
                type: "failed",
                failureCount: M,
                error: N,
              });
            },
            onPause: () => {
              je(this, Kt, Nn).call(this, { type: "pause" });
            },
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => A(this, ze).canRun(this),
          })
        );
        const r = this.state.status === "pending",
          i = !A(this, kr).canStart();
        try {
          if (r) n();
          else {
            je(this, Kt, Nn).call(this, {
              type: "pending",
              variables: t,
              isPaused: i,
            }),
              await ((s = (o = A(this, ze).config).onMutate) == null
                ? void 0
                : s.call(o, t, this));
            const N = await ((l = (a = this.options).onMutate) == null
              ? void 0
              : l.call(a, t));
            N !== this.state.context &&
              je(this, Kt, Nn).call(this, {
                type: "pending",
                context: N,
                variables: t,
                isPaused: i,
              });
          }
          const M = await A(this, kr).start();
          return (
            await ((c = (u = A(this, ze).config).onSuccess) == null
              ? void 0
              : c.call(u, M, t, this.state.context, this)),
            await ((f = (d = this.options).onSuccess) == null
              ? void 0
              : f.call(d, M, t, this.state.context)),
            await ((v = (h = A(this, ze).config).onSettled) == null
              ? void 0
              : v.call(
                  h,
                  M,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                )),
            await ((x = (g = this.options).onSettled) == null
              ? void 0
              : x.call(g, M, null, t, this.state.context)),
            je(this, Kt, Nn).call(this, { type: "success", data: M }),
            M
          );
        } catch (M) {
          try {
            throw (
              (await ((p = (m = A(this, ze).config).onError) == null
                ? void 0
                : p.call(m, M, t, this.state.context, this)),
              await ((b = (y = this.options).onError) == null
                ? void 0
                : b.call(y, M, t, this.state.context)),
              await ((E = (C = A(this, ze).config).onSettled) == null
                ? void 0
                : E.call(
                    C,
                    void 0,
                    M,
                    this.state.variables,
                    this.state.context,
                    this
                  )),
              await ((P = (T = this.options).onSettled) == null
                ? void 0
                : P.call(T, void 0, M, t, this.state.context)),
              M)
            );
          } finally {
            je(this, Kt, Nn).call(this, { type: "error", error: M });
          }
        } finally {
          A(this, ze).runNext(this);
        }
      }
    }),
    (Ht = new WeakMap()),
    (ze = new WeakMap()),
    (kr = new WeakMap()),
    (Kt = new WeakSet()),
    (Nn = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...r, isPaused: !0 };
          case "continue":
            return { ...r, isPaused: !1 };
          case "pending":
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...r,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...r,
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = n(this.state)),
        $e.batch(() => {
          A(this, Ht).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            A(this, ze).notify({ mutation: this, type: "updated", action: t });
        });
    }),
    gg);
function uk() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var an,
  Dt,
  ns,
  yg,
  ck =
    ((yg = class extends wl {
      constructor(t = {}) {
        super();
        J(this, an);
        J(this, Dt);
        J(this, ns);
        (this.config = t),
          H(this, an, new Set()),
          H(this, Dt, new Map()),
          H(this, ns, 0);
      }
      build(t, n, r) {
        const i = new lk({
          mutationCache: this,
          mutationId: ++ws(this, ns)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return this.add(i), i;
      }
      add(t) {
        A(this, an).add(t);
        const n = $s(t);
        if (typeof n == "string") {
          const r = A(this, Dt).get(n);
          r ? r.push(t) : A(this, Dt).set(n, [t]);
        }
        this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        if (A(this, an).delete(t)) {
          const n = $s(t);
          if (typeof n == "string") {
            const r = A(this, Dt).get(n);
            if (r)
              if (r.length > 1) {
                const i = r.indexOf(t);
                i !== -1 && r.splice(i, 1);
              } else r[0] === t && A(this, Dt).delete(n);
          }
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        const n = $s(t);
        if (typeof n == "string") {
          const r = A(this, Dt).get(n),
            i =
              r == null ? void 0 : r.find((o) => o.state.status === "pending");
          return !i || i === t;
        } else return !0;
      }
      runNext(t) {
        var r;
        const n = $s(t);
        if (typeof n == "string") {
          const i =
            (r = A(this, Dt).get(n)) == null
              ? void 0
              : r.find((o) => o !== t && o.state.isPaused);
          return (i == null ? void 0 : i.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        $e.batch(() => {
          A(this, an).forEach((t) => {
            this.notify({ type: "removed", mutation: t });
          }),
            A(this, an).clear(),
            A(this, Dt).clear();
        });
      }
      getAll() {
        return Array.from(A(this, an));
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => Vp(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => Vp(t, n));
      }
      notify(t) {
        $e.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return $e.batch(() =>
          Promise.all(t.map((n) => n.continue().catch(Nt)))
        );
      }
    }),
    (an = new WeakMap()),
    (Dt = new WeakMap()),
    (ns = new WeakMap()),
    yg);
function $s(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
function zp(e) {
  return {
    onFetch: (t, n) => {
      var c, d, f, h, v;
      const r = t.options,
        i =
          (f =
            (d = (c = t.fetchOptions) == null ? void 0 : c.meta) == null
              ? void 0
              : d.fetchMore) == null
            ? void 0
            : f.direction,
        o = ((h = t.state.data) == null ? void 0 : h.pages) || [],
        s = ((v = t.state.data) == null ? void 0 : v.pageParams) || [];
      let a = { pages: [], pageParams: [] },
        l = 0;
      const u = async () => {
        let g = !1;
        const x = (y) => {
            Object.defineProperty(y, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (g = !0)
                  : t.signal.addEventListener("abort", () => {
                      g = !0;
                    }),
                t.signal
              ),
            });
          },
          m = ex(t.options, t.fetchOptions),
          p = async (y, b, C) => {
            if (g) return Promise.reject();
            if (b == null && y.pages.length) return Promise.resolve(y);
            const T = (() => {
                const F = {
                  client: t.client,
                  queryKey: t.queryKey,
                  pageParam: b,
                  direction: C ? "backward" : "forward",
                  meta: t.options.meta,
                };
                return x(F), F;
              })(),
              P = await m(T),
              { maxPages: M } = t.options,
              N = C ? qP : XP;
            return {
              pages: N(y.pages, P, M),
              pageParams: N(y.pageParams, b, M),
            };
          };
        if (i && o.length) {
          const y = i === "backward",
            b = y ? dk : Bp,
            C = { pages: o, pageParams: s },
            E = b(r, C);
          a = await p(C, E, y);
        } else {
          const y = e ?? o.length;
          do {
            const b = l === 0 ? s[0] ?? r.initialPageParam : Bp(r, a);
            if (l > 0 && b == null) break;
            (a = await p(a, b)), l++;
          } while (l < y);
        }
        return a;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var g, x;
            return (x = (g = t.options).persister) == null
              ? void 0
              : x.call(
                  g,
                  u,
                  {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n
                );
          })
        : (t.fetchFn = u);
    },
  };
}
function Bp(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function dk(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0
    ? (r = e.getPreviousPageParam) == null
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0;
}
var me,
  _n,
  Fn,
  Ei,
  Ti,
  zn,
  Pi,
  ki,
  vg,
  fk =
    ((vg = class {
      constructor(e = {}) {
        J(this, me);
        J(this, _n);
        J(this, Fn);
        J(this, Ei);
        J(this, Ti);
        J(this, zn);
        J(this, Pi);
        J(this, ki);
        H(this, me, e.queryCache || new ak()),
          H(this, _n, e.mutationCache || new ck()),
          H(this, Fn, e.defaultOptions || {}),
          H(this, Ei, new Map()),
          H(this, Ti, new Map()),
          H(this, zn, 0);
      }
      mount() {
        ws(this, zn)._++,
          A(this, zn) === 1 &&
            (H(
              this,
              Pi,
              tx.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), A(this, me).onFocus());
              })
            ),
            H(
              this,
              ki,
              Ba.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), A(this, me).onOnline());
              })
            ));
      }
      unmount() {
        var e, t;
        ws(this, zn)._--,
          A(this, zn) === 0 &&
            ((e = A(this, Pi)) == null || e.call(this),
            H(this, Pi, void 0),
            (t = A(this, ki)) == null || t.call(this),
            H(this, ki, void 0));
      }
      isFetching(e) {
        return A(this, me).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return A(this, _n).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = A(this, me).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.defaultQueryOptions(e),
          n = A(this, me).build(this, t),
          r = n.state.data;
        return r === void 0
          ? this.fetchQuery(e)
          : (e.revalidateIfStale &&
              n.isStaleByTime(Rc(t.staleTime, n)) &&
              this.prefetchQuery(t),
            Promise.resolve(r));
      }
      getQueriesData(e) {
        return A(this, me)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          i = A(this, me).get(r.queryHash),
          o = i == null ? void 0 : i.state.data,
          s = WP(t, o);
        if (s !== void 0)
          return A(this, me)
            .build(this, r)
            .setData(s, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return $e.batch(() =>
          A(this, me)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)])
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = A(this, me).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = A(this, me);
        $e.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = A(this, me);
        return $e.batch(
          () => (
            n.findAll(e).forEach((r) => {
              r.reset();
            }),
            this.refetchQueries({ type: "active", ...e }, t)
          )
        );
      }
      cancelQueries(e, t = {}) {
        const n = { revert: !0, ...t },
          r = $e.batch(() =>
            A(this, me)
              .findAll(e)
              .map((i) => i.cancel(n))
          );
        return Promise.all(r).then(Nt).catch(Nt);
      }
      invalidateQueries(e, t = {}) {
        return $e.batch(
          () => (
            A(this, me)
              .findAll(e)
              .forEach((n) => {
                n.invalidate();
              }),
            (e == null ? void 0 : e.refetchType) === "none"
              ? Promise.resolve()
              : this.refetchQueries(
                  {
                    ...e,
                    type:
                      (e == null ? void 0 : e.refetchType) ??
                      (e == null ? void 0 : e.type) ??
                      "active",
                  },
                  t
                )
          )
        );
      }
      refetchQueries(e, t = {}) {
        const n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
          r = $e.batch(() =>
            A(this, me)
              .findAll(e)
              .filter((i) => !i.isDisabled() && !i.isStatic())
              .map((i) => {
                let o = i.fetch(void 0, n);
                return (
                  n.throwOnError || (o = o.catch(Nt)),
                  i.state.fetchStatus === "paused" ? Promise.resolve() : o
                );
              })
          );
        return Promise.all(r).then(Nt);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = A(this, me).build(this, t);
        return n.isStaleByTime(Rc(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(Nt).catch(Nt);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = zp(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Nt).catch(Nt);
      }
      ensureInfiniteQueryData(e) {
        return (e.behavior = zp(e.pages)), this.ensureQueryData(e);
      }
      resumePausedMutations() {
        return Ba.isOnline()
          ? A(this, _n).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return A(this, me);
      }
      getMutationCache() {
        return A(this, _n);
      }
      getDefaultOptions() {
        return A(this, Fn);
      }
      setDefaultOptions(e) {
        H(this, Fn, e);
      }
      setQueryDefaults(e, t) {
        A(this, Ei).set(Go(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...A(this, Ei).values()],
          n = {};
        return (
          t.forEach((r) => {
            Qo(e, r.queryKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        A(this, Ti).set(Go(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...A(this, Ti).values()],
          n = {};
        return (
          t.forEach((r) => {
            Qo(e, r.mutationKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...A(this, Fn).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = pf(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.queryFn === mf && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...A(this, Fn).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        A(this, me).clear(), A(this, _n).clear();
      }
    }),
    (me = new WeakMap()),
    (_n = new WeakMap()),
    (Fn = new WeakMap()),
    (Ei = new WeakMap()),
    (Ti = new WeakMap()),
    (zn = new WeakMap()),
    (Pi = new WeakMap()),
    (ki = new WeakMap()),
    vg),
  hk = w.createContext(void 0),
  pk = ({ client: e, children: t }) => (
    w.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    S.jsx(hk.Provider, { value: e, children: t })
  );
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function $a() {
  return (
    ($a = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    $a.apply(this, arguments)
  );
}
var Un;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Un || (Un = {}));
const $p = "popstate";
function mk(e) {
  e === void 0 && (e = {});
  function t(i, o) {
    let {
      pathname: s = "/",
      search: a = "",
      hash: l = "",
    } = ds(i.location.hash.substr(1));
    return (
      !s.startsWith("/") && !s.startsWith(".") && (s = "/" + s),
      Mc(
        "",
        { pathname: s, search: a, hash: l },
        (o.state && o.state.usr) || null,
        (o.state && o.state.key) || "default"
      )
    );
  }
  function n(i, o) {
    let s = i.document.querySelector("base"),
      a = "";
    if (s && s.getAttribute("href")) {
      let l = i.location.href,
        u = l.indexOf("#");
      a = u === -1 ? l : l.slice(0, u);
    }
    return a + "#" + (typeof o == "string" ? o : sx(o));
  }
  function r(i, o) {
    gf(
      i.pathname.charAt(0) === "/",
      "relative pathnames are not supported in hash history.push(" +
        JSON.stringify(o) +
        ")"
    );
  }
  return yk(t, n, r, e);
}
function tt(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function gf(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function gk() {
  return Math.random().toString(36).substr(2, 8);
}
function Up(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Mc(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    $a(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? ds(t) : t,
      { state: n, key: (t && t.key) || r || gk() }
    )
  );
}
function sx(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function ds(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function yk(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    s = i.history,
    a = Un.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), s.replaceState($a({}, s.state, { idx: u }), ""));
  function c() {
    return (s.state || { idx: null }).idx;
  }
  function d() {
    a = Un.Pop;
    let x = c(),
      m = x == null ? null : x - u;
    (u = x), l && l({ action: a, location: g.location, delta: m });
  }
  function f(x, m) {
    a = Un.Push;
    let p = Mc(g.location, x, m);
    n && n(p, x), (u = c() + 1);
    let y = Up(p, u),
      b = g.createHref(p);
    try {
      s.pushState(y, "", b);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      i.location.assign(b);
    }
    o && l && l({ action: a, location: g.location, delta: 1 });
  }
  function h(x, m) {
    a = Un.Replace;
    let p = Mc(g.location, x, m);
    n && n(p, x), (u = c());
    let y = Up(p, u),
      b = g.createHref(p);
    s.replaceState(y, "", b),
      o && l && l({ action: a, location: g.location, delta: 0 });
  }
  function v(x) {
    let m = i.location.origin !== "null" ? i.location.origin : i.location.href,
      p = typeof x == "string" ? x : sx(x);
    return (
      (p = p.replace(/ $/, "%20")),
      tt(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          p
      ),
      new URL(p, m)
    );
  }
  let g = {
    get action() {
      return a;
    },
    get location() {
      return e(i, s);
    },
    listen(x) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener($p, d),
        (l = x),
        () => {
          i.removeEventListener($p, d), (l = null);
        }
      );
    },
    createHref(x) {
      return t(i, x);
    },
    createURL: v,
    encodeLocation(x) {
      let m = v(x);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: f,
    replace: h,
    go(x) {
      return s.go(x);
    },
  };
  return g;
}
var Wp;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Wp || (Wp = {}));
function vk(e, t, n) {
  return n === void 0 && (n = "/"), xk(e, t, n, !1);
}
function xk(e, t, n, r) {
  let i = typeof t == "string" ? ds(t) : t,
    o = ux(i.pathname || "/", n);
  if (o == null) return null;
  let s = ax(e);
  wk(s);
  let a = null;
  for (let l = 0; a == null && l < s.length; ++l) {
    let u = Mk(o);
    a = Rk(s[l], u, r);
  }
  return a;
}
function ax(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, s, a) => {
    let l = {
      relativePath: a === void 0 ? o.path || "" : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: s,
      route: o,
    };
    l.relativePath.startsWith("/") &&
      (tt(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = vi([r, l.relativePath]),
      c = n.concat(l);
    o.children &&
      o.children.length > 0 &&
      (tt(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      ax(o.children, t, c, u)),
      !(o.path == null && !o.index) &&
        t.push({ path: u, score: kk(u, o.index), routesMeta: c });
  };
  return (
    e.forEach((o, s) => {
      var a;
      if (o.path === "" || !((a = o.path) != null && a.includes("?"))) i(o, s);
      else for (let l of lx(o.path)) i(o, s, l);
    }),
    t
  );
}
function lx(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let s = lx(r.join("/")),
    a = [];
  return (
    a.push(...s.map((l) => (l === "" ? o : [o, l].join("/")))),
    i && a.push(...s),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function wk(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Ak(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Sk = /^:[\w-]+$/,
  bk = 3,
  Ck = 2,
  Ek = 1,
  Tk = 10,
  Pk = -2,
  Hp = (e) => e === "*";
function kk(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Hp) && (r += Pk),
    t && (r += Ck),
    n
      .filter((i) => !Hp(i))
      .reduce((i, o) => i + (Sk.test(o) ? bk : o === "" ? Ek : Tk), r)
  );
}
function Ak(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Rk(e, t, n) {
  let { routesMeta: r } = e,
    i = {},
    o = "/",
    s = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a],
      u = a === r.length - 1,
      c = o === "/" ? t : t.slice(o.length) || "/",
      d = Kp(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        c
      ),
      f = l.route;
    if (
      (!d &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (d = Kp(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          c
        )),
      !d)
    )
      return null;
    Object.assign(i, d.params),
      s.push({
        params: i,
        pathname: vi([o, d.pathname]),
        pathnameBase: Dk(vi([o, d.pathnameBase])),
        route: f,
      }),
      d.pathnameBase !== "/" && (o = vi([o, d.pathnameBase]));
  }
  return s;
}
function Kp(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Nk(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    s = o.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      let { paramName: f, isOptional: h } = c;
      if (f === "*") {
        let g = a[d] || "";
        s = o.slice(0, o.length - g.length).replace(/(.)\/+$/, "$1");
      }
      const v = a[d];
      return (
        h && !v ? (u[f] = void 0) : (u[f] = (v || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: o,
    pathnameBase: s,
    pattern: e,
  };
}
function Nk(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    gf(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function Mk(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      gf(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function ux(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const vi = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Dk = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function jk(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const cx = ["post", "put", "patch", "delete"];
new Set(cx);
const Ok = ["get", ...cx];
new Set(Ok);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ua() {
  return (
    (Ua = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ua.apply(this, arguments)
  );
}
const Lk = w.createContext(null),
  Ik = w.createContext(null),
  dx = w.createContext(null),
  bl = w.createContext(null),
  Cl = w.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  fx = w.createContext(null);
function yf() {
  return w.useContext(bl) != null;
}
function hx() {
  return yf() || tt(!1), w.useContext(bl).location;
}
function Vk(e, t) {
  return _k(e, t);
}
function _k(e, t, n, r) {
  yf() || tt(!1);
  let { navigator: i } = w.useContext(dx),
    { matches: o } = w.useContext(Cl),
    s = o[o.length - 1],
    a = s ? s.params : {};
  s && s.pathname;
  let l = s ? s.pathnameBase : "/";
  s && s.route;
  let u = hx(),
    c;
  if (t) {
    var d;
    let x = typeof t == "string" ? ds(t) : t;
    l === "/" || ((d = x.pathname) != null && d.startsWith(l)) || tt(!1),
      (c = x);
  } else c = u;
  let f = c.pathname || "/",
    h = f;
  if (l !== "/") {
    let x = l.replace(/^\//, "").split("/");
    h = "/" + f.replace(/^\//, "").split("/").slice(x.length).join("/");
  }
  let v = vk(e, { pathname: h }),
    g = Uk(
      v &&
        v.map((x) =>
          Object.assign({}, x, {
            params: Object.assign({}, a, x.params),
            pathname: vi([
              l,
              i.encodeLocation
                ? i.encodeLocation(x.pathname).pathname
                : x.pathname,
            ]),
            pathnameBase:
              x.pathnameBase === "/"
                ? l
                : vi([
                    l,
                    i.encodeLocation
                      ? i.encodeLocation(x.pathnameBase).pathname
                      : x.pathnameBase,
                  ]),
          })
        ),
      o,
      n,
      r
    );
  return t && g
    ? w.createElement(
        bl.Provider,
        {
          value: {
            location: Ua(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c
            ),
            navigationType: Un.Pop,
          },
        },
        g
      )
    : g;
}
function Fk() {
  let e = Gk(),
    t = jk(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return w.createElement(
    w.Fragment,
    null,
    w.createElement("h2", null, "Unexpected Application Error!"),
    w.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? w.createElement("pre", { style: i }, n) : null,
    null
  );
}
const zk = w.createElement(Fk, null);
class Bk extends w.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? w.createElement(
          Cl.Provider,
          { value: this.props.routeContext },
          w.createElement(fx.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function $k(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = w.useContext(Lk);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    w.createElement(Cl.Provider, { value: t }, r)
  );
}
function Uk(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (o = r) != null &&
      o.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let s = e,
    a = (i = n) == null ? void 0 : i.errors;
  if (a != null) {
    let c = s.findIndex(
      (d) => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0
    );
    c >= 0 || tt(!1), (s = s.slice(0, Math.min(s.length, c + 1)));
  }
  let l = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < s.length; c++) {
      let d = s[c];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
        d.route.id)
      ) {
        let { loaderData: f, errors: h } = n,
          v =
            d.route.loader &&
            f[d.route.id] === void 0 &&
            (!h || h[d.route.id] === void 0);
        if (d.route.lazy || v) {
          (l = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((c, d, f) => {
    let h,
      v = !1,
      g = null,
      x = null;
    n &&
      ((h = a && d.route.id ? a[d.route.id] : void 0),
      (g = d.route.errorElement || zk),
      l &&
        (u < 0 && f === 0
          ? ((v = !0), (x = null))
          : u === f &&
            ((v = !0), (x = d.route.hydrateFallbackElement || null))));
    let m = t.concat(s.slice(0, f + 1)),
      p = () => {
        let y;
        return (
          h
            ? (y = g)
            : v
            ? (y = x)
            : d.route.Component
            ? (y = w.createElement(d.route.Component, null))
            : d.route.element
            ? (y = d.route.element)
            : (y = c),
          w.createElement($k, {
            match: d,
            routeContext: { outlet: c, matches: m, isDataRoute: n != null },
            children: y,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0)
      ? w.createElement(Bk, {
          location: n.location,
          revalidation: n.revalidation,
          component: g,
          error: h,
          children: p(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var Dc = (function (e) {
  return (
    (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId"),
    e
  );
})(Dc || {});
function Wk(e) {
  let t = w.useContext(Ik);
  return t || tt(!1), t;
}
function Hk(e) {
  let t = w.useContext(Cl);
  return t || tt(!1), t;
}
function Kk(e) {
  let t = Hk(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || tt(!1), n.route.id;
}
function Gk() {
  var e;
  let t = w.useContext(fx),
    n = Wk(Dc.UseRouteError),
    r = Kk(Dc.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Qk(e, t) {
  e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath;
}
function jc(e) {
  tt(!1);
}
function Yk(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Un.Pop,
    navigator: o,
    static: s = !1,
    future: a,
  } = e;
  yf() && tt(!1);
  let l = t.replace(/^\/*/, "/"),
    u = w.useMemo(
      () => ({
        basename: l,
        navigator: o,
        static: s,
        future: Ua({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, o, s]
    );
  typeof r == "string" && (r = ds(r));
  let {
      pathname: c = "/",
      search: d = "",
      hash: f = "",
      state: h = null,
      key: v = "default",
    } = r,
    g = w.useMemo(() => {
      let x = ux(c, l);
      return x == null
        ? null
        : {
            location: { pathname: x, search: d, hash: f, state: h, key: v },
            navigationType: i,
          };
    }, [l, c, d, f, h, v, i]);
  return g == null
    ? null
    : w.createElement(
        dx.Provider,
        { value: u },
        w.createElement(bl.Provider, { children: n, value: g })
      );
}
function Xk(e) {
  let { children: t, location: n } = e;
  return Vk(Oc(t), n);
}
new Promise(() => {});
function Oc(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    w.Children.forEach(e, (r, i) => {
      if (!w.isValidElement(r)) return;
      let o = [...t, i];
      if (r.type === w.Fragment) {
        n.push.apply(n, Oc(r.props.children, o));
        return;
      }
      r.type !== jc && tt(!1), !r.props.index || !r.props.children || tt(!1);
      let s = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (s.children = Oc(r.props.children, o)), n.push(s);
    }),
    n
  );
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const qk = "6";
try {
  window.__reactRouterVersion = qk;
} catch {}
const Zk = "startTransition",
  Gp = Ng[Zk];
function Jk(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    o = w.useRef();
  o.current == null && (o.current = mk({ window: i, v5Compat: !0 }));
  let s = o.current,
    [a, l] = w.useState({ action: s.action, location: s.location }),
    { v7_startTransition: u } = r || {},
    c = w.useCallback(
      (d) => {
        u && Gp ? Gp(() => l(d)) : l(d);
      },
      [l, u]
    );
  return (
    w.useLayoutEffect(() => s.listen(c), [s, c]),
    w.useEffect(() => Qk(r), [r]),
    w.createElement(Yk, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: s,
      future: r,
    })
  );
}
var Qp;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Qp || (Qp = {}));
var Yp;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Yp || (Yp = {}));
const vf = w.createContext({});
function xf(e) {
  const t = w.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const wf = typeof window < "u",
  px = wf ? w.useLayoutEffect : w.useEffect,
  El = w.createContext(null);
function Sf(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function bf(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
const yn = (e, t, n) => (n > t ? t : n < e ? e : n);
let Wa = () => {};
const vn = {},
  mx = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function gx(e) {
  return typeof e == "object" && e !== null;
}
const yx = (e) => /^0[^.\s]+$/u.test(e);
function Cf(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const wt = (e) => e,
  e2 = (e, t) => (n) => t(e(n)),
  fs = (...e) => e.reduce(e2),
  Yo = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  };
class Ef {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Sf(this.subscriptions, t), () => bf(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Zt = (e) => e * 1e3,
  vt = (e) => e / 1e3;
function vx(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const xx = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  t2 = 1e-7,
  n2 = 12;
function r2(e, t, n, r, i) {
  let o,
    s,
    a = 0;
  do (s = t + (n - t) / 2), (o = xx(s, r, i) - e), o > 0 ? (n = s) : (t = s);
  while (Math.abs(o) > t2 && ++a < n2);
  return s;
}
function hs(e, t, n, r) {
  if (e === t && n === r) return wt;
  const i = (o) => r2(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : xx(i(o), t, r));
}
const wx = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  Sx = (e) => (t) => 1 - e(1 - t),
  bx = hs(0.33, 1.53, 0.69, 0.99),
  Tf = Sx(bx),
  Cx = wx(Tf),
  Ex = (e) =>
    (e *= 2) < 1 ? 0.5 * Tf(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Pf = (e) => 1 - Math.sin(Math.acos(e)),
  Tx = Sx(Pf),
  Px = wx(Pf),
  i2 = hs(0.42, 0, 1, 1),
  o2 = hs(0, 0, 0.58, 1),
  kx = hs(0.42, 0, 0.58, 1),
  s2 = (e) => Array.isArray(e) && typeof e[0] != "number",
  Ax = (e) => Array.isArray(e) && typeof e[0] == "number",
  Xp = {
    linear: wt,
    easeIn: i2,
    easeInOut: kx,
    easeOut: o2,
    circIn: Pf,
    circInOut: Px,
    circOut: Tx,
    backIn: Tf,
    backInOut: Cx,
    backOut: bx,
    anticipate: Ex,
  },
  a2 = (e) => typeof e == "string",
  qp = (e) => {
    if (Ax(e)) {
      Wa(e.length === 4);
      const [t, n, r, i] = e;
      return hs(t, n, r, i);
    } else if (a2(e)) return Wa(Xp[e] !== void 0), Xp[e];
    return e;
  },
  Us = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  Zp = { value: null, addProjectionMetrics: null };
function l2(e, t) {
  let n = new Set(),
    r = new Set(),
    i = !1,
    o = !1;
  const s = new WeakSet();
  let a = { delta: 0, timestamp: 0, isProcessing: !1 },
    l = 0;
  function u(d) {
    s.has(d) && (c.schedule(d), e()), l++, d(a);
  }
  const c = {
    schedule: (d, f = !1, h = !1) => {
      const g = h && i ? n : r;
      return f && s.add(d), g.has(d) || g.add(d), d;
    },
    cancel: (d) => {
      r.delete(d), s.delete(d);
    },
    process: (d) => {
      if (((a = d), i)) {
        o = !0;
        return;
      }
      (i = !0),
        ([n, r] = [r, n]),
        n.forEach(u),
        t && Zp.value && Zp.value.frameloop[t].push(l),
        (l = 0),
        n.clear(),
        (i = !1),
        o && ((o = !1), c.process(d));
    },
  };
  return c;
}
const u2 = 40;
function Rx(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = () => (n = !0),
    s = Us.reduce((y, b) => ((y[b] = l2(o, t ? b : void 0)), y), {}),
    {
      setup: a,
      read: l,
      resolveKeyframes: u,
      preUpdate: c,
      update: d,
      preRender: f,
      render: h,
      postRender: v,
    } = s,
    g = () => {
      const y = vn.useManualTiming ? i.timestamp : performance.now();
      (n = !1),
        vn.useManualTiming ||
          (i.delta = r ? 1e3 / 60 : Math.max(Math.min(y - i.timestamp, u2), 1)),
        (i.timestamp = y),
        (i.isProcessing = !0),
        a.process(i),
        l.process(i),
        u.process(i),
        c.process(i),
        d.process(i),
        f.process(i),
        h.process(i),
        v.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(g));
    },
    x = () => {
      (n = !0), (r = !0), i.isProcessing || e(g);
    };
  return {
    schedule: Us.reduce((y, b) => {
      const C = s[b];
      return (y[b] = (E, T = !1, P = !1) => (n || x(), C.schedule(E, T, P))), y;
    }, {}),
    cancel: (y) => {
      for (let b = 0; b < Us.length; b++) s[Us[b]].cancel(y);
    },
    state: i,
    steps: s,
  };
}
const {
  schedule: ce,
  cancel: ir,
  state: Re,
  steps: fu,
} = Rx(typeof requestAnimationFrame < "u" ? requestAnimationFrame : wt, !0);
let la;
function c2() {
  la = void 0;
}
const qe = {
    now: () => (
      la === void 0 &&
        qe.set(
          Re.isProcessing || vn.useManualTiming
            ? Re.timestamp
            : performance.now()
        ),
      la
    ),
    set: (e) => {
      (la = e), queueMicrotask(c2);
    },
  },
  Nx = (e) => (t) => typeof t == "string" && t.startsWith(e),
  kf = Nx("--"),
  d2 = Nx("var(--"),
  Af = (e) => (d2(e) ? f2.test(e.split("/*")[0].trim()) : !1),
  f2 =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Hi = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Xo = { ...Hi, transform: (e) => yn(0, 1, e) },
  Ws = { ...Hi, default: 1 },
  Co = (e) => Math.round(e * 1e5) / 1e5,
  Rf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function h2(e) {
  return e == null;
}
const p2 =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Nf = (e, t) => (n) =>
    !!(
      (typeof n == "string" && p2.test(n) && n.startsWith(e)) ||
      (t && !h2(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Mx = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [i, o, s, a] = r.match(Rf);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  m2 = (e) => yn(0, 255, e),
  hu = { ...Hi, transform: (e) => Math.round(m2(e)) },
  wr = {
    test: Nf("rgb", "red"),
    parse: Mx("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      hu.transform(e) +
      ", " +
      hu.transform(t) +
      ", " +
      hu.transform(n) +
      ", " +
      Co(Xo.transform(r)) +
      ")",
  };
function g2(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const Lc = { test: Nf("#"), parse: g2, transform: wr.transform },
  ps = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Mn = ps("deg"),
  Jt = ps("%"),
  B = ps("px"),
  y2 = ps("vh"),
  v2 = ps("vw"),
  Jp = {
    ...Jt,
    parse: (e) => Jt.parse(e) / 100,
    transform: (e) => Jt.transform(e * 100),
  },
  oi = {
    test: Nf("hsl", "hue"),
    parse: Mx("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Jt.transform(Co(t)) +
      ", " +
      Jt.transform(Co(n)) +
      ", " +
      Co(Xo.transform(r)) +
      ")",
  },
  Se = {
    test: (e) => wr.test(e) || Lc.test(e) || oi.test(e),
    parse: (e) =>
      wr.test(e) ? wr.parse(e) : oi.test(e) ? oi.parse(e) : Lc.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
        ? wr.transform(e)
        : oi.transform(e),
    getAnimatableNone: (e) => {
      const t = Se.parse(e);
      return (t.alpha = 0), Se.transform(t);
    },
  },
  x2 =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function w2(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(Rf)) == null ? void 0 : t.length) || 0) +
      (((n = e.match(x2)) == null ? void 0 : n.length) || 0) >
      0
  );
}
const Dx = "number",
  jx = "color",
  S2 = "var",
  b2 = "var(",
  em = "${}",
  C2 =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function qo(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let o = 0;
  const a = t
    .replace(
      C2,
      (l) => (
        Se.test(l)
          ? (r.color.push(o), i.push(jx), n.push(Se.parse(l)))
          : l.startsWith(b2)
          ? (r.var.push(o), i.push(S2), n.push(l))
          : (r.number.push(o), i.push(Dx), n.push(parseFloat(l))),
        ++o,
        em
      )
    )
    .split(em);
  return { values: n, split: a, indexes: r, types: i };
}
function Ox(e) {
  return qo(e).values;
}
function Lx(e) {
  const { split: t, types: n } = qo(e),
    r = t.length;
  return (i) => {
    let o = "";
    for (let s = 0; s < r; s++)
      if (((o += t[s]), i[s] !== void 0)) {
        const a = n[s];
        a === Dx
          ? (o += Co(i[s]))
          : a === jx
          ? (o += Se.transform(i[s]))
          : (o += i[s]);
      }
    return o;
  };
}
const E2 = (e) =>
  typeof e == "number" ? 0 : Se.test(e) ? Se.getAnimatableNone(e) : e;
function T2(e) {
  const t = Ox(e);
  return Lx(e)(t.map(E2));
}
const or = {
  test: w2,
  parse: Ox,
  createTransformer: Lx,
  getAnimatableNone: T2,
};
function pu(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function P2({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (i = pu(l, a, e + 1 / 3)), (o = pu(l, a, e)), (s = pu(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
function Ha(e, t) {
  return (n) => (n > 0 ? t : e);
}
const fe = (e, t, n) => e + (t - e) * n,
  mu = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  k2 = [Lc, wr, oi],
  A2 = (e) => k2.find((t) => t.test(e));
function tm(e) {
  const t = A2(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === oi && (n = P2(n)), n;
}
const nm = (e, t) => {
    const n = tm(e),
      r = tm(t);
    if (!n || !r) return Ha(e, t);
    const i = { ...n };
    return (o) => (
      (i.red = mu(n.red, r.red, o)),
      (i.green = mu(n.green, r.green, o)),
      (i.blue = mu(n.blue, r.blue, o)),
      (i.alpha = fe(n.alpha, r.alpha, o)),
      wr.transform(i)
    );
  },
  Ic = new Set(["none", "hidden"]);
function R2(e, t) {
  return Ic.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function N2(e, t) {
  return (n) => fe(e, t, n);
}
function Mf(e) {
  return typeof e == "number"
    ? N2
    : typeof e == "string"
    ? Af(e)
      ? Ha
      : Se.test(e)
      ? nm
      : j2
    : Array.isArray(e)
    ? Ix
    : typeof e == "object"
    ? Se.test(e)
      ? nm
      : M2
    : Ha;
}
function Ix(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((o, s) => Mf(o)(o, t[s]));
  return (o) => {
    for (let s = 0; s < r; s++) n[s] = i[s](o);
    return n;
  };
}
function M2(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = Mf(e[i])(e[i], t[i]));
  return (i) => {
    for (const o in r) n[o] = r[o](i);
    return n;
  };
}
function D2(e, t) {
  const n = [],
    r = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const o = t.types[i],
      s = e.indexes[o][r[o]],
      a = e.values[s] ?? 0;
    (n[i] = a), r[o]++;
  }
  return n;
}
const j2 = (e, t) => {
  const n = or.createTransformer(t),
    r = qo(e),
    i = qo(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (Ic.has(e) && !i.values.length) || (Ic.has(t) && !r.values.length)
      ? R2(e, t)
      : fs(Ix(D2(r, i), i.values), n)
    : Ha(e, t);
};
function Vx(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? fe(e, t, n)
    : Mf(e)(e, t);
}
const O2 = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: (n = !0) => ce.update(t, n),
      stop: () => ir(t),
      now: () => (Re.isProcessing ? Re.timestamp : qe.now()),
    };
  },
  _x = (e, t, n = 10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let o = 0; o < i; o++)
      r += Math.round(e(o / (i - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  },
  Ka = 2e4;
function Df(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Ka; ) (t += n), (r = e.next(t));
  return t >= Ka ? 1 / 0 : t;
}
function L2(e, t = 100, n) {
  const r = n({ ...e, keyframes: [0, t] }),
    i = Math.min(Df(r), Ka);
  return {
    type: "keyframes",
    ease: (o) => r.next(i * o).value / t,
    duration: vt(i),
  };
}
const I2 = 5;
function Fx(e, t, n) {
  const r = Math.max(t - I2, 0);
  return vx(n - e(r), t - r);
}
const ge = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  gu = 0.001;
function V2({
  duration: e = ge.duration,
  bounce: t = ge.bounce,
  velocity: n = ge.velocity,
  mass: r = ge.mass,
}) {
  let i,
    o,
    s = 1 - t;
  (s = yn(ge.minDamping, ge.maxDamping, s)),
    (e = yn(ge.minDuration, ge.maxDuration, vt(e))),
    s < 1
      ? ((i = (u) => {
          const c = u * s,
            d = c * e,
            f = c - n,
            h = Vc(u, s),
            v = Math.exp(-d);
          return gu - (f / h) * v;
        }),
        (o = (u) => {
          const d = u * s * e,
            f = d * n + n,
            h = Math.pow(s, 2) * Math.pow(u, 2) * e,
            v = Math.exp(-d),
            g = Vc(Math.pow(u, 2), s);
          return ((-i(u) + gu > 0 ? -1 : 1) * ((f - h) * v)) / g;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
          return -gu + c * d;
        }),
        (o = (u) => {
          const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
          return c * d;
        }));
  const a = 5 / e,
    l = F2(i, o, a);
  if (((e = Zt(e)), isNaN(l)))
    return { stiffness: ge.stiffness, damping: ge.damping, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const _2 = 12;
function F2(e, t, n) {
  let r = n;
  for (let i = 1; i < _2; i++) r = r - e(r) / t(r);
  return r;
}
function Vc(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const z2 = ["duration", "bounce"],
  B2 = ["stiffness", "damping", "mass"];
function rm(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function $2(e) {
  let t = {
    velocity: ge.velocity,
    stiffness: ge.stiffness,
    damping: ge.damping,
    mass: ge.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!rm(e, B2) && rm(e, z2))
    if (e.visualDuration) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        o = 2 * yn(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: ge.mass, stiffness: i, damping: o };
    } else {
      const n = V2(e);
      (t = { ...t, ...n, mass: ge.mass }), (t.isResolvedFromDuration = !0);
    }
  return t;
}
function Ga(e = ge.visualDuration, t = ge.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: i } = n;
  const o = n.keyframes[0],
    s = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: o },
    {
      stiffness: l,
      damping: u,
      mass: c,
      duration: d,
      velocity: f,
      isResolvedFromDuration: h,
    } = $2({ ...n, velocity: -vt(n.velocity || 0) }),
    v = f || 0,
    g = u / (2 * Math.sqrt(l * c)),
    x = s - o,
    m = vt(Math.sqrt(l / c)),
    p = Math.abs(x) < 5;
  r || (r = p ? ge.restSpeed.granular : ge.restSpeed.default),
    i || (i = p ? ge.restDelta.granular : ge.restDelta.default);
  let y;
  if (g < 1) {
    const C = Vc(m, g);
    y = (E) => {
      const T = Math.exp(-g * m * E);
      return (
        s - T * (((v + g * m * x) / C) * Math.sin(C * E) + x * Math.cos(C * E))
      );
    };
  } else if (g === 1) y = (C) => s - Math.exp(-m * C) * (x + (v + m * x) * C);
  else {
    const C = m * Math.sqrt(g * g - 1);
    y = (E) => {
      const T = Math.exp(-g * m * E),
        P = Math.min(C * E, 300);
      return (
        s - (T * ((v + g * m * x) * Math.sinh(P) + C * x * Math.cosh(P))) / C
      );
    };
  }
  const b = {
    calculatedDuration: (h && d) || null,
    next: (C) => {
      const E = y(C);
      if (h) a.done = C >= d;
      else {
        let T = C === 0 ? v : 0;
        g < 1 && (T = C === 0 ? Zt(v) : Fx(y, C, E));
        const P = Math.abs(T) <= r,
          M = Math.abs(s - E) <= i;
        a.done = P && M;
      }
      return (a.value = a.done ? s : E), a;
    },
    toString: () => {
      const C = Math.min(Df(b), Ka),
        E = _x((T) => b.next(C * T).value, C, 30);
      return C + "ms " + E;
    },
    toTransition: () => {},
  };
  return b;
}
Ga.applyToOptions = (e) => {
  const t = L2(e, 100, Ga);
  return (
    (e.ease = t.ease), (e.duration = Zt(t.duration)), (e.type = "keyframes"), e
  );
};
function _c({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = e[0],
    f = { done: !1, value: d },
    h = (P) => (a !== void 0 && P < a) || (l !== void 0 && P > l),
    v = (P) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - P) < Math.abs(l - P)
        ? a
        : l;
  let g = n * t;
  const x = d + g,
    m = s === void 0 ? x : s(x);
  m !== x && (g = m - d);
  const p = (P) => -g * Math.exp(-P / r),
    y = (P) => m + p(P),
    b = (P) => {
      const M = p(P),
        N = y(P);
      (f.done = Math.abs(M) <= u), (f.value = f.done ? m : N);
    };
  let C, E;
  const T = (P) => {
    h(f.value) &&
      ((C = P),
      (E = Ga({
        keyframes: [f.value, v(f.value)],
        velocity: Fx(y, P, f.value),
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    T(0),
    {
      calculatedDuration: null,
      next: (P) => {
        let M = !1;
        return (
          !E && C === void 0 && ((M = !0), b(P), T(P)),
          C !== void 0 && P >= C ? E.next(P - C) : (!M && b(P), f)
        );
      },
    }
  );
}
function U2(e, t, n) {
  const r = [],
    i = n || vn.mix || Vx,
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let a = i(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || wt : t;
      a = fs(l, a);
    }
    r.push(a);
  }
  return r;
}
function W2(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if ((Wa(o === t.length), o === 1)) return () => t[0];
  if (o === 2 && t[0] === t[1]) return () => t[1];
  const s = e[0] === e[1];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = U2(t, r, i),
    l = a.length,
    u = (c) => {
      if (s && c < e[0]) return t[0];
      let d = 0;
      if (l > 1) for (; d < e.length - 2 && !(c < e[d + 1]); d++);
      const f = Yo(e[d], e[d + 1], c);
      return a[d](f);
    };
  return n ? (c) => u(yn(e[0], e[o - 1], c)) : u;
}
function H2(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = Yo(0, t, r);
    e.push(fe(n, 1, i));
  }
}
function K2(e) {
  const t = [0];
  return H2(t, e.length - 1), t;
}
function G2(e, t) {
  return e.map((n) => n * t);
}
function Q2(e, t) {
  return e.map(() => t || kx).splice(0, e.length - 1);
}
function Eo({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = s2(r) ? r.map(qp) : qp(r),
    o = { done: !1, value: t[0] },
    s = G2(n && n.length === t.length ? n : K2(t), e),
    a = W2(s, t, { ease: Array.isArray(i) ? i : Q2(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((o.value = a(l)), (o.done = l >= e), o),
  };
}
const Y2 = (e) => e !== null;
function jf(e, { repeat: t, repeatType: n = "loop" }, r, i = 1) {
  const o = e.filter(Y2),
    a = i < 0 || (t && n !== "loop" && t % 2 === 1) ? 0 : o.length - 1;
  return !a || r === void 0 ? o[a] : r;
}
const X2 = { decay: _c, inertia: _c, tween: Eo, keyframes: Eo, spring: Ga };
function zx(e) {
  typeof e.type == "string" && (e.type = X2[e.type]);
}
class Of {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((t) => {
      this.resolve = t;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
}
const q2 = (e) => e / 100;
class Lf extends Of {
  constructor(t) {
    super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.stop = () => {
        var r, i;
        const { motionValue: n } = this.options;
        n && n.updatedAt !== qe.now() && this.tick(qe.now()),
          (this.isStopped = !0),
          this.state !== "idle" &&
            (this.teardown(),
            (i = (r = this.options).onStop) == null || i.call(r));
      }),
      (this.options = t),
      this.initAnimation(),
      this.play(),
      t.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: t } = this;
    zx(t);
    const {
      type: n = Eo,
      repeat: r = 0,
      repeatDelay: i = 0,
      repeatType: o,
      velocity: s = 0,
    } = t;
    let { keyframes: a } = t;
    const l = n || Eo;
    l !== Eo &&
      typeof a[0] != "number" &&
      ((this.mixKeyframes = fs(q2, Vx(a[0], a[1]))), (a = [0, 100]));
    const u = l({ ...t, keyframes: a });
    o === "mirror" &&
      (this.mirroredGenerator = l({
        ...t,
        keyframes: [...a].reverse(),
        velocity: -s,
      })),
      u.calculatedDuration === null && (u.calculatedDuration = Df(u));
    const { calculatedDuration: c } = u;
    (this.calculatedDuration = c),
      (this.resolvedDuration = c + i),
      (this.totalDuration = this.resolvedDuration * (r + 1) - i),
      (this.generator = u);
  }
  updateTime(t) {
    const n = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = n);
  }
  tick(t, n = !1) {
    const {
      generator: r,
      totalDuration: i,
      mixKeyframes: o,
      mirroredGenerator: s,
      resolvedDuration: a,
      calculatedDuration: l,
    } = this;
    if (this.startTime === null) return r.next(0);
    const {
      delay: u = 0,
      keyframes: c,
      repeat: d,
      repeatType: f,
      repeatDelay: h,
      type: v,
      onUpdate: g,
      finalKeyframe: x,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - i / this.speed, this.startTime)),
      n ? (this.currentTime = t) : this.updateTime(t);
    const m = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1),
      p = this.playbackSpeed >= 0 ? m < 0 : m > i;
    (this.currentTime = Math.max(m, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = i);
    let y = this.currentTime,
      b = r;
    if (d) {
      const P = Math.min(this.currentTime, i) / a;
      let M = Math.floor(P),
        N = P % 1;
      !N && P >= 1 && (N = 1),
        N === 1 && M--,
        (M = Math.min(M, d + 1)),
        !!(M % 2) &&
          (f === "reverse"
            ? ((N = 1 - N), h && (N -= h / a))
            : f === "mirror" && (b = s)),
        (y = yn(0, 1, N) * a);
    }
    const C = p ? { done: !1, value: c[0] } : b.next(y);
    o && (C.value = o(C.value));
    let { done: E } = C;
    !p &&
      l !== null &&
      (E =
        this.playbackSpeed >= 0
          ? this.currentTime >= i
          : this.currentTime <= 0);
    const T =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && E));
    return (
      T && v !== _c && (C.value = jf(c, this.options, x, this.speed)),
      g && g(C.value),
      T && this.finish(),
      C
    );
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
  get duration() {
    return vt(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + vt(t);
  }
  get time() {
    return vt(this.currentTime);
  }
  set time(t) {
    var n;
    (t = Zt(t)),
      (this.currentTime = t),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = t)
        : this.driver &&
          (this.startTime = this.driver.now() - t / this.playbackSpeed),
      (n = this.driver) == null || n.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    this.updateTime(qe.now());
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = vt(this.currentTime));
  }
  play() {
    var i, o;
    if (this.isStopped) return;
    const { driver: t = O2, startTime: n } = this.options;
    this.driver || (this.driver = t((s) => this.tick(s))),
      (o = (i = this.options).onPlay) == null || o.call(i);
    const r = this.driver.now();
    this.state === "finished"
      ? (this.updateFinished(), (this.startTime = r))
      : this.holdTime !== null
      ? (this.startTime = r - this.holdTime)
      : this.startTime || (this.startTime = n ?? r),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    (this.state = "paused"),
      this.updateTime(qe.now()),
      (this.holdTime = this.currentTime);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    var t, n;
    this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      (n = (t = this.options).onComplete) == null || n.call(t);
  }
  cancel() {
    var t, n;
    (this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      (n = (t = this.options).onCancel) == null || n.call(t);
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null);
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
  attachTimeline(t) {
    var n;
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      (n = this.driver) == null || n.stop(),
      t.observe(this)
    );
  }
}
function Z2(e) {
  for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
const Sr = (e) => (e * 180) / Math.PI,
  Fc = (e) => {
    const t = Sr(Math.atan2(e[1], e[0]));
    return zc(t);
  },
  J2 = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: Fc,
    rotateZ: Fc,
    skewX: (e) => Sr(Math.atan(e[1])),
    skewY: (e) => Sr(Math.atan(e[2])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
  },
  zc = (e) => ((e = e % 360), e < 0 && (e += 360), e),
  im = Fc,
  om = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
  sm = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
  eA = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: om,
    scaleY: sm,
    scale: (e) => (om(e) + sm(e)) / 2,
    rotateX: (e) => zc(Sr(Math.atan2(e[6], e[5]))),
    rotateY: (e) => zc(Sr(Math.atan2(-e[2], e[0]))),
    rotateZ: im,
    rotate: im,
    skewX: (e) => Sr(Math.atan(e[4])),
    skewY: (e) => Sr(Math.atan(e[1])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
  };
function Bc(e) {
  return e.includes("scale") ? 1 : 0;
}
function $c(e, t) {
  if (!e || e === "none") return Bc(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, i;
  if (n) (r = eA), (i = n);
  else {
    const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    (r = J2), (i = a);
  }
  if (!i) return Bc(t);
  const o = r[t],
    s = i[1].split(",").map(nA);
  return typeof o == "function" ? o(s) : s[o];
}
const tA = (e, t) => {
  const { transform: n = "none" } = getComputedStyle(e);
  return $c(n, t);
};
function nA(e) {
  return parseFloat(e.trim());
}
const Ki = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Gi = new Set(Ki),
  am = (e) => e === Hi || e === B,
  rA = new Set(["x", "y", "z"]),
  iA = Ki.filter((e) => !rA.has(e));
function oA(e) {
  const t = [];
  return (
    iA.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const Nr = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: (e, { transform: t }) => $c(t, "x"),
  y: (e, { transform: t }) => $c(t, "y"),
};
Nr.translateX = Nr.x;
Nr.translateY = Nr.y;
const Mr = new Set();
let Uc = !1,
  Wc = !1,
  Hc = !1;
function Bx() {
  if (Wc) {
    const e = Array.from(Mr).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const i = oA(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([o, s]) => {
            var a;
            (a = r.getValue(o)) == null || a.set(s);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (Wc = !1), (Uc = !1), Mr.forEach((e) => e.complete(Hc)), Mr.clear();
}
function $x() {
  Mr.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Wc = !0);
  });
}
function sA() {
  (Hc = !0), $x(), Bx(), (Hc = !1);
}
class If {
  constructor(t, n, r, i, o, s = !1) {
    (this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = o),
      (this.isAsync = s);
  }
  scheduleResolve() {
    (this.state = "scheduled"),
      this.isAsync
        ? (Mr.add(this),
          Uc || ((Uc = !0), ce.read($x), ce.resolveKeyframes(Bx)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    if (t[0] === null) {
      const o = i == null ? void 0 : i.get(),
        s = t[t.length - 1];
      if (o !== void 0) t[0] = o;
      else if (r && n) {
        const a = r.readValue(n, s);
        a != null && (t[0] = a);
      }
      t[0] === void 0 && (t[0] = s), i && o === void 0 && i.set(t[0]);
    }
    Z2(t);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(t = !1) {
    (this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
      Mr.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (Mr.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const aA = (e) => e.startsWith("--");
function lA(e, t, n) {
  aA(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
}
const uA = Cf(() => window.ScrollTimeline !== void 0),
  cA = {};
function dA(e, t) {
  const n = Cf(e);
  return () => cA[t] ?? n();
}
const Ux = dA(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  fo = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  lm = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: fo([0, 0.65, 0.55, 1]),
    circOut: fo([0.55, 0, 1, 0.45]),
    backIn: fo([0.31, 0.01, 0.66, -0.59]),
    backOut: fo([0.33, 1.53, 0.69, 0.99]),
  };
function Wx(e, t) {
  if (e)
    return typeof e == "function"
      ? Ux()
        ? _x(e, t)
        : "ease-out"
      : Ax(e)
      ? fo(e)
      : Array.isArray(e)
      ? e.map((n) => Wx(n, t) || lm.easeOut)
      : lm[e];
}
function fA(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: o = 0,
    repeatType: s = "loop",
    ease: a = "easeOut",
    times: l,
  } = {},
  u = void 0
) {
  const c = { [t]: n };
  l && (c.offset = l);
  const d = Wx(a, i);
  Array.isArray(d) && (c.easing = d);
  const f = {
    delay: r,
    duration: i,
    easing: Array.isArray(d) ? "linear" : d,
    fill: "both",
    iterations: o + 1,
    direction: s === "reverse" ? "alternate" : "normal",
  };
  return u && (f.pseudoElement = u), e.animate(c, f);
}
function Hx(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function hA({ type: e, ...t }) {
  return Hx(e) && Ux()
    ? e.applyToOptions(t)
    : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class pA extends Of {
  constructor(t) {
    if ((super(), (this.finishedTime = null), (this.isStopped = !1), !t))
      return;
    const {
      element: n,
      name: r,
      keyframes: i,
      pseudoElement: o,
      allowFlatten: s = !1,
      finalKeyframe: a,
      onComplete: l,
    } = t;
    (this.isPseudoElement = !!o),
      (this.allowFlatten = s),
      (this.options = t),
      Wa(typeof t.type != "string");
    const u = hA(t);
    (this.animation = fA(n, r, i, u, o)),
      u.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !o)) {
          const c = jf(i, this.options, a, this.speed);
          this.updateMotionValue ? this.updateMotionValue(c) : lA(n, r, c),
            this.animation.cancel();
        }
        l == null || l(), this.notifyFinished();
      });
  }
  play() {
    this.isStopped ||
      (this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var t, n;
    (n = (t = this.animation).finish) == null || n.call(t);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: t } = this;
    t === "idle" ||
      t === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var t, n;
    this.isPseudoElement ||
      (n = (t = this.animation).commitStyles) == null ||
      n.call(t);
  }
  get duration() {
    var n, r;
    const t =
      ((r =
        (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) ==
      null
        ? void 0
        : r.call(n).duration) || 0;
    return vt(Number(t));
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + vt(t);
  }
  get time() {
    return vt(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    (this.finishedTime = null), (this.animation.currentTime = Zt(t));
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(t) {
    t < 0 && (this.finishedTime = null), (this.animation.playbackRate = t);
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(t) {
    this.animation.startTime = t;
  }
  attachTimeline({ timeline: t, observe: n }) {
    var r;
    return (
      this.allowFlatten &&
        ((r = this.animation.effect) == null ||
          r.updateTiming({ easing: "linear" })),
      (this.animation.onfinish = null),
      t && uA() ? ((this.animation.timeline = t), wt) : n(this)
    );
  }
}
const Kx = { anticipate: Ex, backInOut: Cx, circInOut: Px };
function mA(e) {
  return e in Kx;
}
function gA(e) {
  typeof e.ease == "string" && mA(e.ease) && (e.ease = Kx[e.ease]);
}
const um = 10;
class yA extends pA {
  constructor(t) {
    gA(t),
      zx(t),
      super(t),
      t.startTime && (this.startTime = t.startTime),
      (this.options = t);
  }
  updateMotionValue(t) {
    const {
      motionValue: n,
      onUpdate: r,
      onComplete: i,
      element: o,
      ...s
    } = this.options;
    if (!n) return;
    if (t !== void 0) {
      n.set(t);
      return;
    }
    const a = new Lf({ ...s, autoplay: !1 }),
      l = Zt(this.finishedTime ?? this.time);
    n.setWithVelocity(a.sample(l - um).value, a.sample(l).value, um), a.stop();
  }
}
const cm = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (or.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function vA(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function xA(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const o = e[e.length - 1],
    s = cm(i, t),
    a = cm(o, t);
  return !s || !a ? !1 : vA(e) || ((n === "spring" || Hx(n)) && r);
}
function Kc(e) {
  (e.duration = 0), (e.type = "keyframes");
}
const wA = new Set(["opacity", "clipPath", "filter", "transform"]),
  SA = Cf(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function bA(e) {
  var c;
  const {
    motionValue: t,
    name: n,
    repeatDelay: r,
    repeatType: i,
    damping: o,
    type: s,
  } = e;
  if (
    !(
      ((c = t == null ? void 0 : t.owner) == null
        ? void 0
        : c.current) instanceof HTMLElement
    )
  )
    return !1;
  const { onUpdate: l, transformTemplate: u } = t.owner.getProps();
  return (
    SA() &&
    n &&
    wA.has(n) &&
    (n !== "transform" || !u) &&
    !l &&
    !r &&
    i !== "mirror" &&
    o !== 0 &&
    s !== "inertia"
  );
}
const CA = 40;
class EA extends Of {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: o = 0,
    repeatType: s = "loop",
    keyframes: a,
    name: l,
    motionValue: u,
    element: c,
    ...d
  }) {
    var v;
    super(),
      (this.stop = () => {
        var g, x;
        this._animation &&
          (this._animation.stop(),
          (g = this.stopTimeline) == null || g.call(this)),
          (x = this.keyframeResolver) == null || x.cancel();
      }),
      (this.createdAt = qe.now());
    const f = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: o,
        repeatType: s,
        name: l,
        motionValue: u,
        element: c,
        ...d,
      },
      h = (c == null ? void 0 : c.KeyframeResolver) || If;
    (this.keyframeResolver = new h(
      a,
      (g, x, m) => this.onKeyframesResolved(g, x, f, !m),
      l,
      u,
      c
    )),
      (v = this.keyframeResolver) == null || v.scheduleResolve();
  }
  onKeyframesResolved(t, n, r, i) {
    this.keyframeResolver = void 0;
    const {
      name: o,
      type: s,
      velocity: a,
      delay: l,
      isHandoff: u,
      onUpdate: c,
    } = r;
    (this.resolvedAt = qe.now()),
      xA(t, o, s, a) ||
        ((vn.instantAnimations || !l) && (c == null || c(jf(t, r, n))),
        (t[0] = t[t.length - 1]),
        Kc(r),
        (r.repeat = 0));
    const f = {
        startTime: i
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > CA
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: n,
        ...r,
        keyframes: t,
      },
      h =
        !u && bA(f)
          ? new yA({ ...f, element: f.motionValue.owner.current })
          : new Lf(f);
    h.finished.then(() => this.notifyFinished()).catch(wt),
      this.pendingTimeline &&
        ((this.stopTimeline = h.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = h);
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(t, n) {
    return this.finished.finally(t).then(() => {});
  }
  get animation() {
    var t;
    return (
      this._animation ||
        ((t = this.keyframeResolver) == null || t.resume(), sA()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(t) {
    this.animation.time = t;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(t) {
    this.animation.speed = t;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(t) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(t))
        : (this.pendingTimeline = t),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var t;
    this._animation && this.animation.cancel(),
      (t = this.keyframeResolver) == null || t.cancel();
  }
}
const TA = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function PA(e) {
  const t = TA.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function Gx(e, t, n = 1) {
  const [r, i] = PA(e);
  if (!r) return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    const s = o.trim();
    return mx(s) ? parseFloat(s) : s;
  }
  return Af(i) ? Gx(i, t, n + 1) : i;
}
function Vf(e, t) {
  return (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
}
const Qx = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...Ki,
  ]),
  kA = { test: (e) => e === "auto", parse: (e) => e },
  Yx = (e) => (t) => t.test(e),
  Xx = [Hi, B, Jt, Mn, v2, y2, kA],
  dm = (e) => Xx.find(Yx(e));
function AA(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || yx(e)
    : !0;
}
const RA = new Set(["brightness", "contrast", "saturate", "opacity"]);
function NA(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Rf) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let o = RA.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const MA = /\b([a-z-]*)\(.*?\)/gu,
  Gc = {
    ...or,
    getAnimatableNone: (e) => {
      const t = e.match(MA);
      return t ? t.map(NA).join(" ") : e;
    },
  },
  fm = { ...Hi, transform: Math.round },
  DA = {
    rotate: Mn,
    rotateX: Mn,
    rotateY: Mn,
    rotateZ: Mn,
    scale: Ws,
    scaleX: Ws,
    scaleY: Ws,
    scaleZ: Ws,
    skew: Mn,
    skewX: Mn,
    skewY: Mn,
    distance: B,
    translateX: B,
    translateY: B,
    translateZ: B,
    x: B,
    y: B,
    z: B,
    perspective: B,
    transformPerspective: B,
    opacity: Xo,
    originX: Jp,
    originY: Jp,
    originZ: B,
  },
  _f = {
    borderWidth: B,
    borderTopWidth: B,
    borderRightWidth: B,
    borderBottomWidth: B,
    borderLeftWidth: B,
    borderRadius: B,
    radius: B,
    borderTopLeftRadius: B,
    borderTopRightRadius: B,
    borderBottomRightRadius: B,
    borderBottomLeftRadius: B,
    width: B,
    maxWidth: B,
    height: B,
    maxHeight: B,
    top: B,
    right: B,
    bottom: B,
    left: B,
    padding: B,
    paddingTop: B,
    paddingRight: B,
    paddingBottom: B,
    paddingLeft: B,
    margin: B,
    marginTop: B,
    marginRight: B,
    marginBottom: B,
    marginLeft: B,
    backgroundPositionX: B,
    backgroundPositionY: B,
    ...DA,
    zIndex: fm,
    fillOpacity: Xo,
    strokeOpacity: Xo,
    numOctaves: fm,
  },
  jA = {
    ..._f,
    color: Se,
    backgroundColor: Se,
    outlineColor: Se,
    fill: Se,
    stroke: Se,
    borderColor: Se,
    borderTopColor: Se,
    borderRightColor: Se,
    borderBottomColor: Se,
    borderLeftColor: Se,
    filter: Gc,
    WebkitFilter: Gc,
  },
  qx = (e) => jA[e];
function Zx(e, t) {
  let n = qx(e);
  return (
    n !== Gc && (n = or), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const OA = new Set(["auto", "none", "0"]);
function LA(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const o = e[r];
    typeof o == "string" && !OA.has(o) && qo(o).values.length && (i = e[r]),
      r++;
  }
  if (i && n) for (const o of t) e[o] = Zx(n, i);
}
class IA extends If {
  constructor(t, n, r, i, o) {
    super(t, n, r, i, o, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let u = t[l];
      if (typeof u == "string" && ((u = u.trim()), Af(u))) {
        const c = Gx(u, n.current);
        c !== void 0 && (t[l] = c),
          l === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if ((this.resolveNoneKeyframes(), !Qx.has(r) || t.length !== 2)) return;
    const [i, o] = t,
      s = dm(i),
      a = dm(o);
    if (s !== a)
      if (am(s) && am(a))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == "string" && (t[l] = parseFloat(u));
        }
      else Nr[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) (t[i] === null || AA(t[i])) && r.push(i);
    r.length && LA(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Nr[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var a;
    const { element: t, name: n, unresolvedKeyframes: r } = this;
    if (!t || !t.current) return;
    const i = t.getValue(n);
    i && i.jump(this.measuredOrigin, !1);
    const o = r.length - 1,
      s = r[o];
    (r[o] = Nr[n](t.measureViewportBox(), window.getComputedStyle(t.current))),
      s !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = s),
      (a = this.removedTransforms) != null &&
        a.length &&
        this.removedTransforms.forEach(([l, u]) => {
          t.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes();
  }
}
function Jx(e, t, n) {
  if (e instanceof EventTarget) return [e];
  if (typeof e == "string") {
    const i = document.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e);
}
const ew = (e, t) => (t && typeof e == "number" ? t.transform(e) : e);
function tw(e) {
  return gx(e) && "offsetHeight" in e;
}
const hm = 30,
  VA = (e) => !isNaN(parseFloat(e));
class _A {
  constructor(t, n = {}) {
    (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r) => {
        var o;
        const i = qe.now();
        if (
          (this.updatedAt !== i && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            ((o = this.events.change) == null || o.notify(this.current),
            this.dependents))
        )
          for (const s of this.dependents) s.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = qe.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = VA(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Ef());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            ce.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t) {
    this.passiveEffect
      ? this.passiveEffect(t, this.updateAndNotify)
      : this.updateAndNotify(t);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    var t;
    (t = this.events.change) == null || t.notify(this.current);
  }
  addDependent(t) {
    this.dependents || (this.dependents = new Set()), this.dependents.add(t);
  }
  removeDependent(t) {
    this.dependents && this.dependents.delete(t);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = qe.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > hm
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, hm);
    return vx(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var t, n;
    (t = this.dependents) == null || t.clear(),
      (n = this.events.destroy) == null || n.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Vi(e, t) {
  return new _A(e, t);
}
const { schedule: Ff, cancel: uD } = Rx(queueMicrotask, !1),
  At = { x: !1, y: !1 };
function nw() {
  return At.x || At.y;
}
function FA(e) {
  return e === "x" || e === "y"
    ? At[e]
      ? null
      : ((At[e] = !0),
        () => {
          At[e] = !1;
        })
    : At.x || At.y
    ? null
    : ((At.x = At.y = !0),
      () => {
        At.x = At.y = !1;
      });
}
function rw(e, t) {
  const n = Jx(e),
    r = new AbortController(),
    i = { passive: !0, ...t, signal: r.signal };
  return [n, i, () => r.abort()];
}
function pm(e) {
  return !(e.pointerType === "touch" || nw());
}
function zA(e, t, n = {}) {
  const [r, i, o] = rw(e, n),
    s = (a) => {
      if (!pm(a)) return;
      const { target: l } = a,
        u = t(l, a);
      if (typeof u != "function" || !l) return;
      const c = (d) => {
        pm(d) && (u(d), l.removeEventListener("pointerleave", c));
      };
      l.addEventListener("pointerleave", c, i);
    };
  return (
    r.forEach((a) => {
      a.addEventListener("pointerenter", s, i);
    }),
    o
  );
}
const iw = (e, t) => (t ? (e === t ? !0 : iw(e, t.parentElement)) : !1),
  zf = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  BA = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function $A(e) {
  return BA.has(e.tagName) || e.tabIndex !== -1;
}
const ua = new WeakSet();
function mm(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function yu(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 })
  );
}
const UA = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = mm(() => {
    if (ua.has(n)) return;
    yu(n, "down");
    const i = mm(() => {
        yu(n, "up");
      }),
      o = () => yu(n, "cancel");
    n.addEventListener("keyup", i, t), n.addEventListener("blur", o, t);
  });
  n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function gm(e) {
  return zf(e) && !nw();
}
function WA(e, t, n = {}) {
  const [r, i, o] = rw(e, n),
    s = (a) => {
      const l = a.currentTarget;
      if (!gm(a)) return;
      ua.add(l);
      const u = t(l, a),
        c = (h, v) => {
          window.removeEventListener("pointerup", d),
            window.removeEventListener("pointercancel", f),
            ua.has(l) && ua.delete(l),
            gm(h) && typeof u == "function" && u(h, { success: v });
        },
        d = (h) => {
          c(
            h,
            l === window ||
              l === document ||
              n.useGlobalTarget ||
              iw(l, h.target)
          );
        },
        f = (h) => {
          c(h, !1);
        };
      window.addEventListener("pointerup", d, i),
        window.addEventListener("pointercancel", f, i);
    };
  return (
    r.forEach((a) => {
      (n.useGlobalTarget ? window : a).addEventListener("pointerdown", s, i),
        tw(a) &&
          (a.addEventListener("focus", (u) => UA(u, i)),
          !$A(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0));
    }),
    o
  );
}
function ow(e) {
  return gx(e) && "ownerSVGElement" in e;
}
function HA(e) {
  return ow(e) && e.tagName === "svg";
}
const _e = (e) => !!(e && e.getVelocity),
  KA = [...Xx, Se, or],
  GA = (e) => KA.find(Yx(e)),
  Bf = w.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
function ym(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function QA(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((i) => {
      const o = ym(i, t);
      return !n && typeof o == "function" && (n = !0), o;
    });
    if (n)
      return () => {
        for (let i = 0; i < r.length; i++) {
          const o = r[i];
          typeof o == "function" ? o() : ym(e[i], null);
        }
      };
  };
}
function YA(...e) {
  return w.useCallback(QA(...e), e);
}
class XA extends w.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = n.offsetParent,
        i = (tw(r) && r.offsetWidth) || 0,
        o = this.props.sizeRef.current;
      (o.height = n.offsetHeight || 0),
        (o.width = n.offsetWidth || 0),
        (o.top = n.offsetTop),
        (o.left = n.offsetLeft),
        (o.right = i - o.width - o.left);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function qA({ children: e, isPresent: t, anchorX: n, root: r }) {
  const i = w.useId(),
    o = w.useRef(null),
    s = w.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
    { nonce: a } = w.useContext(Bf),
    l = YA(o, e == null ? void 0 : e.ref);
  return (
    w.useInsertionEffect(() => {
      const { width: u, height: c, top: d, left: f, right: h } = s.current;
      if (t || !o.current || !u || !c) return;
      const v = n === "left" ? `left: ${f}` : `right: ${h}`;
      o.current.dataset.motionPopId = i;
      const g = document.createElement("style");
      a && (g.nonce = a);
      const x = r ?? document.head;
      return (
        x.appendChild(g),
        g.sheet &&
          g.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${c}px !important;
            ${v}px !important;
            top: ${d}px !important;
          }
        `),
        () => {
          x.contains(g) && x.removeChild(g);
        }
      );
    }, [t]),
    S.jsx(XA, {
      isPresent: t,
      childRef: o,
      sizeRef: s,
      children: w.cloneElement(e, { ref: l }),
    })
  );
}
const ZA = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: o,
  mode: s,
  anchorX: a,
  root: l,
}) => {
  const u = xf(JA),
    c = w.useId();
  let d = !0,
    f = w.useMemo(
      () => (
        (d = !1),
        {
          id: c,
          initial: t,
          isPresent: n,
          custom: i,
          onExitComplete: (h) => {
            u.set(h, !0);
            for (const v of u.values()) if (!v) return;
            r && r();
          },
          register: (h) => (u.set(h, !1), () => u.delete(h)),
        }
      ),
      [n, u, r]
    );
  return (
    o && d && (f = { ...f }),
    w.useMemo(() => {
      u.forEach((h, v) => u.set(v, !1));
    }, [n]),
    w.useEffect(() => {
      !n && !u.size && r && r();
    }, [n]),
    s === "popLayout" &&
      (e = S.jsx(qA, { isPresent: n, anchorX: a, root: l, children: e })),
    S.jsx(El.Provider, { value: f, children: e })
  );
};
function JA() {
  return new Map();
}
function sw(e = !0) {
  const t = w.useContext(El);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: i } = t,
    o = w.useId();
  w.useEffect(() => {
    if (e) return i(o);
  }, [e]);
  const s = w.useCallback(() => e && r && r(o), [o, r, e]);
  return !n && r ? [!1, s] : [!0];
}
const Hs = (e) => e.key || "";
function vm(e) {
  const t = [];
  return (
    w.Children.forEach(e, (n) => {
      w.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const eR = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    presenceAffectsLayout: i = !0,
    mode: o = "sync",
    propagate: s = !1,
    anchorX: a = "left",
    root: l,
  }) => {
    const [u, c] = sw(s),
      d = w.useMemo(() => vm(e), [e]),
      f = s && !u ? [] : d.map(Hs),
      h = w.useRef(!0),
      v = w.useRef(d),
      g = xf(() => new Map()),
      [x, m] = w.useState(d),
      [p, y] = w.useState(d);
    px(() => {
      (h.current = !1), (v.current = d);
      for (let E = 0; E < p.length; E++) {
        const T = Hs(p[E]);
        f.includes(T) ? g.delete(T) : g.get(T) !== !0 && g.set(T, !1);
      }
    }, [p, f.length, f.join("-")]);
    const b = [];
    if (d !== x) {
      let E = [...d];
      for (let T = 0; T < p.length; T++) {
        const P = p[T],
          M = Hs(P);
        f.includes(M) || (E.splice(T, 0, P), b.push(P));
      }
      return o === "wait" && b.length && (E = b), y(vm(E)), m(d), null;
    }
    const { forceRender: C } = w.useContext(vf);
    return S.jsx(S.Fragment, {
      children: p.map((E) => {
        const T = Hs(E),
          P = s && !u ? !1 : d === p || f.includes(T),
          M = () => {
            if (g.has(T)) g.set(T, !0);
            else return;
            let N = !0;
            g.forEach((F) => {
              F || (N = !1);
            }),
              N &&
                (C == null || C(),
                y(v.current),
                s && (c == null || c()),
                r && r());
          };
        return S.jsx(
          ZA,
          {
            isPresent: P,
            initial: !h.current || n ? void 0 : !1,
            custom: t,
            presenceAffectsLayout: i,
            mode: o,
            root: l,
            onExitComplete: P ? void 0 : M,
            anchorX: a,
            children: E,
          },
          T
        );
      }),
    });
  },
  aw = w.createContext({ strict: !1 }),
  xm = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  _i = {};
for (const e in xm) _i[e] = { isEnabled: (t) => xm[e].some((n) => !!t[n]) };
function tR(e) {
  for (const t in e) _i[t] = { ..._i[t], ...e[t] };
}
const nR = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Qa(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    nR.has(e)
  );
}
let lw = (e) => !Qa(e);
function rR(e) {
  typeof e == "function" && (lw = (t) => (t.startsWith("on") ? !Qa(t) : e(t)));
}
try {
  rR(require("@emotion/is-prop-valid").default);
} catch {}
function iR(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((lw(i) ||
        (n === !0 && Qa(i)) ||
        (!t && !Qa(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
const Tl = w.createContext({});
function Pl(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function Zo(e) {
  return typeof e == "string" || Array.isArray(e);
}
const $f = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Uf = ["initial", ...$f];
function kl(e) {
  return Pl(e.animate) || Uf.some((t) => Zo(e[t]));
}
function uw(e) {
  return !!(kl(e) || e.variants);
}
function oR(e, t) {
  if (kl(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Zo(n) ? n : void 0,
      animate: Zo(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function sR(e) {
  const { initial: t, animate: n } = oR(e, w.useContext(Tl));
  return w.useMemo(() => ({ initial: t, animate: n }), [wm(t), wm(n)]);
}
function wm(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Jo = {};
function aR(e) {
  for (const t in e) (Jo[t] = e[t]), kf(t) && (Jo[t].isCSSVariable = !0);
}
function cw(e, { layout: t, layoutId: n }) {
  return (
    Gi.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Jo[e] || e === "opacity"))
  );
}
const lR = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  uR = Ki.length;
function cR(e, t, n) {
  let r = "",
    i = !0;
  for (let o = 0; o < uR; o++) {
    const s = Ki[o],
      a = e[s];
    if (a === void 0) continue;
    let l = !0;
    if (
      (typeof a == "number"
        ? (l = a === (s.startsWith("scale") ? 1 : 0))
        : (l = parseFloat(a) === 0),
      !l || n)
    ) {
      const u = ew(a, _f[s]);
      if (!l) {
        i = !1;
        const c = lR[s] || s;
        r += `${c}(${u}) `;
      }
      n && (t[s] = u);
    }
  }
  return (r = r.trim()), n ? (r = n(t, i ? "" : r)) : i && (r = "none"), r;
}
function Wf(e, t, n) {
  const { style: r, vars: i, transformOrigin: o } = e;
  let s = !1,
    a = !1;
  for (const l in t) {
    const u = t[l];
    if (Gi.has(l)) {
      s = !0;
      continue;
    } else if (kf(l)) {
      i[l] = u;
      continue;
    } else {
      const c = ew(u, _f[l]);
      l.startsWith("origin") ? ((a = !0), (o[l] = c)) : (r[l] = c);
    }
  }
  if (
    (t.transform ||
      (s || n
        ? (r.transform = cR(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = o;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
const Hf = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function dw(e, t, n) {
  for (const r in t) !_e(t[r]) && !cw(r, n) && (e[r] = t[r]);
}
function dR({ transformTemplate: e }, t) {
  return w.useMemo(() => {
    const n = Hf();
    return Wf(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function fR(e, t) {
  const n = e.style || {},
    r = {};
  return dw(r, n, e), Object.assign(r, dR(e, t)), r;
}
function hR(e, t) {
  const n = {},
    r = fR(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const pR = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  mR = { offset: "strokeDashoffset", array: "strokeDasharray" };
function gR(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? pR : mR;
  e[o.offset] = B.transform(-r);
  const s = B.transform(t),
    a = B.transform(n);
  e[o.array] = `${s} ${a}`;
}
function fw(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    pathLength: i,
    pathSpacing: o = 1,
    pathOffset: s = 0,
    ...a
  },
  l,
  u,
  c
) {
  if ((Wf(e, a, u), l)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: d, style: f } = e;
  d.transform && ((f.transform = d.transform), delete d.transform),
    (f.transform || d.transformOrigin) &&
      ((f.transformOrigin = d.transformOrigin ?? "50% 50%"),
      delete d.transformOrigin),
    f.transform &&
      ((f.transformBox = (c == null ? void 0 : c.transformBox) ?? "fill-box"),
      delete d.transformBox),
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    i !== void 0 && gR(d, i, o, s, !1);
}
const hw = () => ({ ...Hf(), attrs: {} }),
  pw = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function yR(e, t, n, r) {
  const i = w.useMemo(() => {
    const o = hw();
    return (
      fw(o, t, pw(r), e.transformTemplate, e.style),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    const o = {};
    dw(o, e.style, e), (i.style = { ...o, ...i.style });
  }
  return i;
}
const vR = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Kf(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(vR.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function xR(e, t, n, { latestValues: r }, i, o = !1) {
  const a = (Kf(e) ? yR : hR)(t, r, i, e),
    l = iR(t, typeof e == "string", o),
    u = e !== w.Fragment ? { ...l, ...a, ref: n } : {},
    { children: c } = t,
    d = w.useMemo(() => (_e(c) ? c.get() : c), [c]);
  return w.createElement(e, { ...u, children: d });
}
function Sm(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function Gf(e, t, n, r) {
  if (typeof t == "function") {
    const [i, o] = Sm(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [i, o] = Sm(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  return t;
}
function ca(e) {
  return _e(e) ? e.get() : e;
}
function wR({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
  return { latestValues: SR(n, r, i, e), renderState: t() };
}
function SR(e, t, n, r) {
  const i = {},
    o = r(e, {});
  for (const f in o) i[f] = ca(o[f]);
  let { initial: s, animate: a } = e;
  const l = kl(e),
    u = uw(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const d = c ? a : s;
  if (d && typeof d != "boolean" && !Pl(d)) {
    const f = Array.isArray(d) ? d : [d];
    for (let h = 0; h < f.length; h++) {
      const v = Gf(e, f[h]);
      if (v) {
        const { transitionEnd: g, transition: x, ...m } = v;
        for (const p in m) {
          let y = m[p];
          if (Array.isArray(y)) {
            const b = c ? y.length - 1 : 0;
            y = y[b];
          }
          y !== null && (i[p] = y);
        }
        for (const p in g) i[p] = g[p];
      }
    }
  }
  return i;
}
const mw = (e) => (t, n) => {
  const r = w.useContext(Tl),
    i = w.useContext(El),
    o = () => wR(e, t, r, i);
  return n ? o() : xf(o);
};
function Qf(e, t, n) {
  var o;
  const { style: r } = e,
    i = {};
  for (const s in r)
    (_e(r[s]) ||
      (t.style && _e(t.style[s])) ||
      cw(s, e) ||
      ((o = n == null ? void 0 : n.getValue(s)) == null
        ? void 0
        : o.liveStyle) !== void 0) &&
      (i[s] = r[s]);
  return i;
}
const bR = mw({ scrapeMotionValuesFromProps: Qf, createRenderState: Hf });
function gw(e, t, n) {
  const r = Qf(e, t, n);
  for (const i in e)
    if (_e(e[i]) || _e(t[i])) {
      const o =
        Ki.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[o] = e[i];
    }
  return r;
}
const CR = mw({ scrapeMotionValuesFromProps: gw, createRenderState: hw }),
  ER = Symbol.for("motionComponentSymbol");
function si(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function TR(e, t, n) {
  return w.useCallback(
    (r) => {
      r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : si(n) && (n.current = r));
    },
    [t]
  );
}
const Yf = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  PR = "framerAppearId",
  yw = "data-" + Yf(PR),
  vw = w.createContext({});
function kR(e, t, n, r, i) {
  var g, x;
  const { visualElement: o } = w.useContext(Tl),
    s = w.useContext(aw),
    a = w.useContext(El),
    l = w.useContext(Bf).reducedMotion,
    u = w.useRef(null);
  (r = r || s.renderer),
    !u.current &&
      r &&
      (u.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: l,
      }));
  const c = u.current,
    d = w.useContext(vw);
  c &&
    !c.projection &&
    i &&
    (c.type === "html" || c.type === "svg") &&
    AR(u.current, n, i, d);
  const f = w.useRef(!1);
  w.useInsertionEffect(() => {
    c && f.current && c.update(n, a);
  });
  const h = n[yw],
    v = w.useRef(
      !!h &&
        !((g = window.MotionHandoffIsComplete) != null && g.call(window, h)) &&
        ((x = window.MotionHasOptimisedAnimation) == null
          ? void 0
          : x.call(window, h))
    );
  return (
    px(() => {
      c &&
        ((f.current = !0),
        (window.MotionIsMounted = !0),
        c.updateFeatures(),
        c.scheduleRenderMicrotask(),
        v.current && c.animationState && c.animationState.animateChanges());
    }),
    w.useEffect(() => {
      c &&
        (!v.current && c.animationState && c.animationState.animateChanges(),
        v.current &&
          (queueMicrotask(() => {
            var m;
            (m = window.MotionHandoffMarkAsComplete) == null ||
              m.call(window, h);
          }),
          (v.current = !1)),
        (c.enteringChildren = void 0));
    }),
    c
  );
}
function AR(e, t, n, r) {
  const {
    layoutId: i,
    layout: o,
    drag: s,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: u,
    layoutCrossfade: c,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : xw(e.parent)
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: o,
      alwaysMeasureLayout: !!s || (a && si(a)),
      visualElement: e,
      animationType: typeof o == "string" ? o : "both",
      initialPromotionConfig: r,
      crossfade: c,
      layoutScroll: l,
      layoutRoot: u,
    });
}
function xw(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : xw(e.parent);
}
function vu(e, { forwardMotionProps: t = !1 } = {}, n, r) {
  n && tR(n);
  const i = Kf(e) ? CR : bR;
  function o(a, l) {
    let u;
    const c = { ...w.useContext(Bf), ...a, layoutId: RR(a) },
      { isStatic: d } = c,
      f = sR(a),
      h = i(a, d);
    if (!d && wf) {
      NR();
      const v = MR(c);
      (u = v.MeasureLayout),
        (f.visualElement = kR(e, h, c, r, v.ProjectionNode));
    }
    return S.jsxs(Tl.Provider, {
      value: f,
      children: [
        u && f.visualElement
          ? S.jsx(u, { visualElement: f.visualElement, ...c })
          : null,
        xR(e, a, TR(h, f.visualElement, l), h, d, t),
      ],
    });
  }
  o.displayName = `motion.${
    typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`
  }`;
  const s = w.forwardRef(o);
  return (s[ER] = e), s;
}
function RR({ layoutId: e }) {
  const t = w.useContext(vf).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function NR(e, t) {
  w.useContext(aw).strict;
}
function MR(e) {
  const { drag: t, layout: n } = _i;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
function DR(e, t) {
  if (typeof Proxy > "u") return vu;
  const n = new Map(),
    r = (o, s) => vu(o, s, e, t),
    i = (o, s) => r(o, s);
  return new Proxy(i, {
    get: (o, s) =>
      s === "create"
        ? r
        : (n.has(s) || n.set(s, vu(s, void 0, e, t)), n.get(s)),
  });
}
function ww({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function jR({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function OR(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function xu(e) {
  return e === void 0 || e === 1;
}
function Qc({ scale: e, scaleX: t, scaleY: n }) {
  return !xu(e) || !xu(t) || !xu(n);
}
function gr(e) {
  return (
    Qc(e) ||
    Sw(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function Sw(e) {
  return bm(e.x) || bm(e.y);
}
function bm(e) {
  return e && e !== "0%";
}
function Ya(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function Cm(e, t, n, r, i) {
  return i !== void 0 && (e = Ya(e, i, r)), Ya(e, n, r) + t;
}
function Yc(e, t = 0, n = 1, r, i) {
  (e.min = Cm(e.min, t, n, r, i)), (e.max = Cm(e.max, t, n, r, i));
}
function bw(e, { x: t, y: n }) {
  Yc(e.x, t.translate, t.scale, t.originPoint),
    Yc(e.y, n.translate, n.scale, n.originPoint);
}
const Em = 0.999999999999,
  Tm = 1.0000000000001;
function LR(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let a = 0; a < i; a++) {
    (o = n[a]), (s = o.projectionDelta);
    const { visualElement: l } = o.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        li(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), bw(e, s)),
      r && gr(o.latestValues) && li(e, o.latestValues));
  }
  t.x < Tm && t.x > Em && (t.x = 1), t.y < Tm && t.y > Em && (t.y = 1);
}
function ai(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Pm(e, t, n, r, i = 0.5) {
  const o = fe(e.min, e.max, i);
  Yc(e, t, n, o, r);
}
function li(e, t) {
  Pm(e.x, t.x, t.scaleX, t.scale, t.originX),
    Pm(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Cw(e, t) {
  return ww(OR(e.getBoundingClientRect(), t));
}
function IR(e, t, n) {
  const r = Cw(e, n),
    { scroll: i } = t;
  return i && (ai(r.x, i.offset.x), ai(r.y, i.offset.y)), r;
}
const km = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  ui = () => ({ x: km(), y: km() }),
  Am = () => ({ min: 0, max: 0 }),
  ve = () => ({ x: Am(), y: Am() }),
  Xc = { current: null },
  Ew = { current: !1 };
function VR() {
  if (((Ew.current = !0), !!wf))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Xc.current = e.matches);
      e.addEventListener("change", t), t();
    } else Xc.current = !1;
}
const _R = new WeakMap();
function FR(e, t, n) {
  for (const r in t) {
    const i = t[r],
      o = n[r];
    if (_e(i)) e.addValue(r, i);
    else if (_e(o)) e.addValue(r, Vi(i, { owner: e }));
    else if (o !== i)
      if (e.hasValue(r)) {
        const s = e.getValue(r);
        s.liveStyle === !0 ? s.jump(i) : s.hasAnimated || s.set(i);
      } else {
        const s = e.getStaticValue(r);
        e.addValue(r, Vi(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const Rm = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class zR {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: o,
      visualState: s,
    },
    a = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = If),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const f = qe.now();
        this.renderScheduledAt < f &&
          ((this.renderScheduledAt = f), ce.render(this.render, !1, !0));
      });
    const { latestValues: l, renderState: u } = s;
    (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = a),
      (this.blockInitialAnimation = !!o),
      (this.isControllingVariants = kl(n)),
      (this.isVariantNode = uw(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: c, ...d } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const f in d) {
      const h = d[f];
      l[f] !== void 0 && _e(h) && h.set(l[f]);
    }
  }
  mount(t) {
    var n;
    (this.current = t),
      _R.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((r, i) => this.bindToMotionValue(i, r)),
      Ew.current || VR(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : Xc.current),
      (n = this.parent) == null || n.addChild(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    var t;
    this.projection && this.projection.unmount(),
      ir(this.notifyUpdate),
      ir(this.render),
      this.valueSubscriptions.forEach((n) => n()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      (t = this.parent) == null || t.removeChild(this);
    for (const n in this.events) this.events[n].clear();
    for (const n in this.features) {
      const r = this.features[n];
      r && (r.unmount(), (r.isMounted = !1));
    }
    this.current = null;
  }
  addChild(t) {
    this.children.add(t),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(t);
  }
  removeChild(t) {
    this.children.delete(t),
      this.enteringChildren && this.enteringChildren.delete(t);
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = Gi.has(t);
    r && this.onBindTransform && this.onBindTransform();
    const i = n.on("change", (s) => {
      (this.latestValues[t] = s),
        this.props.onUpdate && ce.preRender(this.notifyUpdate),
        r && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender();
    });
    let o;
    window.MotionCheckAppearSync &&
      (o = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        i(), o && o(), n.owner && n.stop();
      });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in _i) {
      const n = _i[t];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if (
        (!this.features[t] &&
          i &&
          r(this.props) &&
          (this.features[t] = new i(this)),
        this.features[t])
      ) {
        const o = this.features[t];
        o.isMounted ? o.update() : (o.mount(), (o.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : ve();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < Rm.length; r++) {
      const i = Rm[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const o = "on" + i,
        s = t[o];
      s && (this.propEventSubscriptions[i] = this.on(i, s));
    }
    (this.prevMotionValues = FR(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Vi(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    let r =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : this.getBaseTargetFromProps(this.props, t) ??
          this.readValueFromInstance(this.current, t, this.options);
    return (
      r != null &&
        (typeof r == "string" && (mx(r) || yx(r))
          ? (r = parseFloat(r))
          : !GA(r) && or.test(n) && (r = Zx(t, n)),
        this.setBaseTarget(t, _e(r) ? r.get() : r)),
      _e(r) ? r.get() : r
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var o;
    const { initial: n } = this.props;
    let r;
    if (typeof n == "string" || typeof n == "object") {
      const s = Gf(
        this.props,
        n,
        (o = this.presenceContext) == null ? void 0 : o.custom
      );
      s && (r = s[t]);
    }
    if (n && r !== void 0) return r;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !_e(i)
      ? i
      : this.initialValues[t] !== void 0 && r === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Ef()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
  scheduleRenderMicrotask() {
    Ff.render(this.render);
  }
}
class Tw extends zR {
  constructor() {
    super(...arguments), (this.KeyframeResolver = IA);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    _e(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
function Pw(e, { style: t, vars: n }, r, i) {
  const o = e.style;
  let s;
  for (s in t) o[s] = t[s];
  i == null || i.applyProjectionStyles(o, r);
  for (s in n) o.setProperty(s, n[s]);
}
function BR(e) {
  return window.getComputedStyle(e);
}
class $R extends Tw {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = Pw);
  }
  readValueFromInstance(t, n) {
    var r;
    if (Gi.has(n))
      return (r = this.projection) != null && r.isProjecting ? Bc(n) : tA(t, n);
    {
      const i = BR(t),
        o = (kf(n) ? i.getPropertyValue(n) : i[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Cw(t, n);
  }
  build(t, n, r) {
    Wf(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Qf(t, n, r);
  }
}
const kw = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function UR(e, t, n, r) {
  Pw(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(kw.has(i) ? i : Yf(i), t.attrs[i]);
}
class WR extends Tw {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = ve);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Gi.has(n)) {
      const r = qx(n);
      return (r && r.default) || 0;
    }
    return (n = kw.has(n) ? n : Yf(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return gw(t, n, r);
  }
  build(t, n, r) {
    fw(t, n, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(t, n, r, i) {
    UR(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = pw(t.tagName)), super.mount(t);
  }
}
const HR = (e, t) =>
  Kf(e) ? new WR(t) : new $R(t, { allowProjection: e !== w.Fragment });
function xi(e, t, n) {
  const r = e.getProps();
  return Gf(r, t, n !== void 0 ? n : r.custom, e);
}
const qc = (e) => Array.isArray(e);
function KR(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Vi(n));
}
function GR(e) {
  return qc(e) ? e[e.length - 1] || 0 : e;
}
function QR(e, t) {
  const n = xi(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...r };
  for (const s in o) {
    const a = GR(o[s]);
    KR(e, s, a);
  }
}
function YR(e) {
  return !!(_e(e) && e.add);
}
function Zc(e, t) {
  const n = e.getValue("willChange");
  if (YR(n)) return n.add(t);
  if (!n && vn.WillChange) {
    const r = new vn.WillChange("auto");
    e.addValue("willChange", r), r.add(t);
  }
}
function Aw(e) {
  return e.props[yw];
}
const XR = (e) => e !== null;
function qR(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(XR),
    o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !o || r === void 0 ? i[o] : r;
}
const ZR = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  JR = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  eN = { type: "keyframes", duration: 0.8 },
  tN = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  nN = (e, { keyframes: t }) =>
    t.length > 2
      ? eN
      : Gi.has(e)
      ? e.startsWith("scale")
        ? JR(t[1])
        : ZR
      : tN;
function rN({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
const Xf =
  (e, t, n, r = {}, i, o) =>
  (s) => {
    const a = Vf(r, e) || {},
      l = a.delay || r.delay || 0;
    let { elapsed: u = 0 } = r;
    u = u - Zt(l);
    const c = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...a,
      delay: -u,
      onUpdate: (f) => {
        t.set(f), a.onUpdate && a.onUpdate(f);
      },
      onComplete: () => {
        s(), a.onComplete && a.onComplete();
      },
      name: e,
      motionValue: t,
      element: o ? void 0 : i,
    };
    rN(a) || Object.assign(c, nN(e, c)),
      c.duration && (c.duration = Zt(c.duration)),
      c.repeatDelay && (c.repeatDelay = Zt(c.repeatDelay)),
      c.from !== void 0 && (c.keyframes[0] = c.from);
    let d = !1;
    if (
      ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
        (Kc(c), c.delay === 0 && (d = !0)),
      (vn.instantAnimations || vn.skipAnimations) &&
        ((d = !0), Kc(c), (c.delay = 0)),
      (c.allowFlatten = !a.type && !a.ease),
      d && !o && t.get() !== void 0)
    ) {
      const f = qR(c.keyframes, a);
      if (f !== void 0) {
        ce.update(() => {
          c.onUpdate(f), c.onComplete();
        });
        return;
      }
    }
    return a.isSync ? new Lf(c) : new EA(c);
  };
function iN({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function Rw(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: o = e.getDefaultTransition(), transitionEnd: s, ...a } = t;
  r && (o = r);
  const l = [],
    u = i && e.animationState && e.animationState.getState()[i];
  for (const c in a) {
    const d = e.getValue(c, e.latestValues[c] ?? null),
      f = a[c];
    if (f === void 0 || (u && iN(u, c))) continue;
    const h = { delay: n, ...Vf(o || {}, c) },
      v = d.get();
    if (
      v !== void 0 &&
      !d.isAnimating &&
      !Array.isArray(f) &&
      f === v &&
      !h.velocity
    )
      continue;
    let g = !1;
    if (window.MotionHandoffAnimation) {
      const m = Aw(e);
      if (m) {
        const p = window.MotionHandoffAnimation(m, c, ce);
        p !== null && ((h.startTime = p), (g = !0));
      }
    }
    Zc(e, c),
      d.start(
        Xf(c, d, f, e.shouldReduceMotion && Qx.has(c) ? { type: !1 } : h, e, g)
      );
    const x = d.animation;
    x && l.push(x);
  }
  return (
    s &&
      Promise.all(l).then(() => {
        ce.update(() => {
          s && QR(e, s);
        });
      }),
    l
  );
}
function Nw(e, t, n, r = 0, i = 1) {
  const o = Array.from(e)
      .sort((u, c) => u.sortNodePosition(c))
      .indexOf(t),
    s = e.size,
    a = (s - 1) * r;
  return typeof n == "function" ? n(o, s) : i === 1 ? o * r : a - o * r;
}
function Jc(e, t, n = {}) {
  var l;
  const r = xi(
    e,
    t,
    n.type === "exit"
      ? (l = e.presenceContext) == null
        ? void 0
        : l.custom
      : void 0
  );
  let { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = r ? () => Promise.all(Rw(e, r, n)) : () => Promise.resolve(),
    s =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: d,
              staggerDirection: f,
            } = i;
            return oN(e, t, u, c, d, f, n);
          }
        : () => Promise.resolve(),
    { when: a } = i;
  if (a) {
    const [u, c] = a === "beforeChildren" ? [o, s] : [s, o];
    return u().then(() => c());
  } else return Promise.all([o(), s(n.delay)]);
}
function oN(e, t, n = 0, r = 0, i = 0, o = 1, s) {
  const a = [];
  for (const l of e.variantChildren)
    l.notify("AnimationStart", t),
      a.push(
        Jc(l, t, {
          ...s,
          delay:
            n +
            (typeof r == "function" ? 0 : r) +
            Nw(e.variantChildren, l, r, i, o),
        }).then(() => l.notify("AnimationComplete", t))
      );
  return Promise.all(a);
}
function sN(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => Jc(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = Jc(e, t, n);
  else {
    const i = typeof t == "function" ? xi(e, t, n.custom) : t;
    r = Promise.all(Rw(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
function Mw(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
const aN = Uf.length;
function Dw(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Dw(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < aN; n++) {
    const r = Uf[n],
      i = e.props[r];
    (Zo(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const lN = [...$f].reverse(),
  uN = $f.length;
function cN(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => sN(e, n, r)));
}
function dN(e) {
  let t = cN(e),
    n = Nm(),
    r = !0;
  const i = (l) => (u, c) => {
    var f;
    const d = xi(
      e,
      c,
      l === "exit"
        ? (f = e.presenceContext) == null
          ? void 0
          : f.custom
        : void 0
    );
    if (d) {
      const { transition: h, transitionEnd: v, ...g } = d;
      u = { ...u, ...g, ...v };
    }
    return u;
  };
  function o(l) {
    t = l(e);
  }
  function s(l) {
    const { props: u } = e,
      c = Dw(e.parent) || {},
      d = [],
      f = new Set();
    let h = {},
      v = 1 / 0;
    for (let x = 0; x < uN; x++) {
      const m = lN[x],
        p = n[m],
        y = u[m] !== void 0 ? u[m] : c[m],
        b = Zo(y),
        C = m === l ? p.isActive : null;
      C === !1 && (v = x);
      let E = y === c[m] && y !== u[m] && b;
      if (
        (E && r && e.manuallyAnimateOnMount && (E = !1),
        (p.protectedKeys = { ...h }),
        (!p.isActive && C === null) ||
          (!y && !p.prevProp) ||
          Pl(y) ||
          typeof y == "boolean")
      )
        continue;
      const T = fN(p.prevProp, y);
      let P = T || (m === l && p.isActive && !E && b) || (x > v && b),
        M = !1;
      const N = Array.isArray(y) ? y : [y];
      let F = N.reduce(i(m), {});
      C === !1 && (F = {});
      const { prevResolvedValues: I = {} } = p,
        G = { ...I, ...F },
        O = (_) => {
          (P = !0),
            f.has(_) && ((M = !0), f.delete(_)),
            (p.needsAnimating[_] = !0);
          const k = e.getValue(_);
          k && (k.liveStyle = !1);
        };
      for (const _ in G) {
        const k = F[_],
          R = I[_];
        if (h.hasOwnProperty(_)) continue;
        let L = !1;
        qc(k) && qc(R) ? (L = !Mw(k, R)) : (L = k !== R),
          L
            ? k != null
              ? O(_)
              : f.add(_)
            : k !== void 0 && f.has(_)
            ? O(_)
            : (p.protectedKeys[_] = !0);
      }
      (p.prevProp = y),
        (p.prevResolvedValues = F),
        p.isActive && (h = { ...h, ...F }),
        r && e.blockInitialAnimation && (P = !1);
      const Q = E && T;
      P &&
        (!Q || M) &&
        d.push(
          ...N.map((_) => {
            const k = { type: m };
            if (
              typeof _ == "string" &&
              r &&
              !Q &&
              e.manuallyAnimateOnMount &&
              e.parent
            ) {
              const { parent: R } = e,
                L = xi(R, _);
              if (R.enteringChildren && L) {
                const { delayChildren: U } = L.transition || {};
                k.delay = Nw(R.enteringChildren, e, U);
              }
            }
            return { animation: _, options: k };
          })
        );
    }
    if (f.size) {
      const x = {};
      if (typeof u.initial != "boolean") {
        const m = xi(e, Array.isArray(u.initial) ? u.initial[0] : u.initial);
        m && m.transition && (x.transition = m.transition);
      }
      f.forEach((m) => {
        const p = e.getBaseTarget(m),
          y = e.getValue(m);
        y && (y.liveStyle = !0), (x[m] = p ?? null);
      }),
        d.push({ animation: x });
    }
    let g = !!d.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (g = !1),
      (r = !1),
      g ? t(d) : Promise.resolve()
    );
  }
  function a(l, u) {
    var d;
    if (n[l].isActive === u) return Promise.resolve();
    (d = e.variantChildren) == null ||
      d.forEach((f) => {
        var h;
        return (h = f.animationState) == null ? void 0 : h.setActive(l, u);
      }),
      (n[l].isActive = u);
    const c = s(l);
    for (const f in n) n[f].protectedKeys = {};
    return c;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      n = Nm();
    },
  };
}
function fN(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Mw(t, e) : !1;
}
function hr(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Nm() {
  return {
    animate: hr(!0),
    whileInView: hr(),
    whileHover: hr(),
    whileTap: hr(),
    whileDrag: hr(),
    whileFocus: hr(),
    exit: hr(),
  };
}
class ur {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
class hN extends ur {
  constructor(t) {
    super(t), t.animationState || (t.animationState = dN(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Pl(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) == null || t.call(this);
  }
}
let pN = 0;
class mN extends ur {
  constructor() {
    super(...arguments), (this.id = pN++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const i = this.node.animationState.setActive("exit", !t);
    n &&
      !t &&
      i.then(() => {
        n(this.id);
      });
  }
  mount() {
    const { register: t, onExitComplete: n } = this.node.presenceContext || {};
    n && n(this.id), t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const gN = { animation: { Feature: hN }, exit: { Feature: mN } };
function es(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function ms(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const yN = (e) => (t) => zf(t) && e(t, ms(t));
function To(e, t, n, r) {
  return es(e, t, yN(n), r);
}
const jw = 1e-4,
  vN = 1 - jw,
  xN = 1 + jw,
  Ow = 0.01,
  wN = 0 - Ow,
  SN = 0 + Ow;
function Ue(e) {
  return e.max - e.min;
}
function bN(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Mm(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = fe(t.min, t.max, e.origin)),
    (e.scale = Ue(n) / Ue(t)),
    (e.translate = fe(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= vN && e.scale <= xN) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= wN && e.translate <= SN) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function Po(e, t, n, r) {
  Mm(e.x, t.x, n.x, r ? r.originX : void 0),
    Mm(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Dm(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Ue(t));
}
function CN(e, t, n) {
  Dm(e.x, t.x, n.x), Dm(e.y, t.y, n.y);
}
function jm(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Ue(t));
}
function ko(e, t, n) {
  jm(e.x, t.x, n.x), jm(e.y, t.y, n.y);
}
function ht(e) {
  return [e("x"), e("y")];
}
const Lw = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  Om = (e, t) => Math.abs(e - t);
function EN(e, t) {
  const n = Om(e.x, t.x),
    r = Om(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Iw {
  constructor(
    t,
    n,
    {
      transformPagePoint: r,
      contextWindow: i = window,
      dragSnapToOrigin: o = !1,
      distanceThreshold: s = 3,
    } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const f = Su(this.lastMoveEventInfo, this.history),
          h = this.startEvent !== null,
          v = EN(f.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!h && !v) return;
        const { point: g } = f,
          { timestamp: x } = Re;
        this.history.push({ ...g, timestamp: x });
        const { onStart: m, onMove: p } = this.handlers;
        h ||
          (m && m(this.lastMoveEvent, f),
          (this.startEvent = this.lastMoveEvent)),
          p && p(this.lastMoveEvent, f);
      }),
      (this.handlePointerMove = (f, h) => {
        (this.lastMoveEvent = f),
          (this.lastMoveEventInfo = wu(h, this.transformPagePoint)),
          ce.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (f, h) => {
        this.end();
        const { onEnd: v, onSessionEnd: g, resumeAnimation: x } = this.handlers;
        if (
          (this.dragSnapToOrigin && x && x(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const m = Su(
          f.type === "pointercancel"
            ? this.lastMoveEventInfo
            : wu(h, this.transformPagePoint),
          this.history
        );
        this.startEvent && v && v(f, m), g && g(f, m);
      }),
      !zf(t))
    )
      return;
    (this.dragSnapToOrigin = o),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.distanceThreshold = s),
      (this.contextWindow = i || window);
    const a = ms(t),
      l = wu(a, this.transformPagePoint),
      { point: u } = l,
      { timestamp: c } = Re;
    this.history = [{ ...u, timestamp: c }];
    const { onSessionStart: d } = n;
    d && d(t, Su(l, this.history)),
      (this.removeListeners = fs(
        To(this.contextWindow, "pointermove", this.handlePointerMove),
        To(this.contextWindow, "pointerup", this.handlePointerUp),
        To(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), ir(this.updatePoint);
  }
}
function wu(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Lm(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Su({ point: e }, t) {
  return {
    point: e,
    delta: Lm(e, Vw(t)),
    offset: Lm(e, TN(t)),
    velocity: PN(t, 0.1),
  };
}
function TN(e) {
  return e[0];
}
function Vw(e) {
  return e[e.length - 1];
}
function PN(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = Vw(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Zt(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const o = vt(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function kN(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? fe(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? fe(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Im(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function AN(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: Im(e.x, n, i), y: Im(e.y, t, r) };
}
function Vm(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function RN(e, t) {
  return { x: Vm(e.x, t.x), y: Vm(e.y, t.y) };
}
function NN(e, t) {
  let n = 0.5;
  const r = Ue(e),
    i = Ue(t);
  return (
    i > r
      ? (n = Yo(t.min, t.max - r, e.min))
      : r > i && (n = Yo(e.min, e.max - i, t.min)),
    yn(0, 1, n)
  );
}
function MN(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const ed = 0.35;
function DN(e = ed) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = ed),
    { x: _m(e, "left", "right"), y: _m(e, "top", "bottom") }
  );
}
function _m(e, t, n) {
  return { min: Fm(e, t), max: Fm(e, n) };
}
function Fm(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const jN = new WeakMap();
class ON {
  constructor(t) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = ve()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1, distanceThreshold: r } = {}) {
    const { presenceContext: i } = this.visualElement;
    if (i && i.isPresent === !1) return;
    const o = (d) => {
        const { dragSnapToOrigin: f } = this.getProps();
        f ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(ms(d).point);
      },
      s = (d, f) => {
        const { drag: h, dragPropagation: v, onDragStart: g } = this.getProps();
        if (
          h &&
          !v &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = FA(h)),
          !this.openDragLock)
        )
          return;
        (this.latestPointerEvent = d),
          (this.latestPanInfo = f),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          ht((m) => {
            let p = this.getAxisMotionValue(m).get() || 0;
            if (Jt.test(p)) {
              const { projection: y } = this.visualElement;
              if (y && y.layout) {
                const b = y.layout.layoutBox[m];
                b && (p = Ue(b) * (parseFloat(p) / 100));
              }
            }
            this.originPoint[m] = p;
          }),
          g && ce.postRender(() => g(d, f)),
          Zc(this.visualElement, "transform");
        const { animationState: x } = this.visualElement;
        x && x.setActive("whileDrag", !0);
      },
      a = (d, f) => {
        (this.latestPointerEvent = d), (this.latestPanInfo = f);
        const {
          dragPropagation: h,
          dragDirectionLock: v,
          onDirectionLock: g,
          onDrag: x,
        } = this.getProps();
        if (!h && !this.openDragLock) return;
        const { offset: m } = f;
        if (v && this.currentDirection === null) {
          (this.currentDirection = LN(m)),
            this.currentDirection !== null && g && g(this.currentDirection);
          return;
        }
        this.updateAxis("x", f.point, m),
          this.updateAxis("y", f.point, m),
          this.visualElement.render(),
          x && x(d, f);
      },
      l = (d, f) => {
        (this.latestPointerEvent = d),
          (this.latestPanInfo = f),
          this.stop(d, f),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null);
      },
      u = () =>
        ht((d) => {
          var f;
          return (
            this.getAnimationState(d) === "paused" &&
            ((f = this.getAxisMotionValue(d).animation) == null
              ? void 0
              : f.play())
          );
        }),
      { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new Iw(
      t,
      {
        onSessionStart: o,
        onStart: s,
        onMove: a,
        onSessionEnd: l,
        resumeAnimation: u,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: c,
        distanceThreshold: r,
        contextWindow: Lw(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = t || this.latestPointerEvent,
      i = n || this.latestPanInfo,
      o = this.isDragging;
    if ((this.cancel(), !o || !i || !r)) return;
    const { velocity: s } = i;
    this.startAnimation(s);
    const { onDragEnd: a } = this.getProps();
    a && ce.postRender(() => a(r, i));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !Ks(t, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (s = kN(s, this.constraints[t], this.elastic[t])),
      o.set(s);
  }
  resolveConstraints() {
    var o;
    const { dragConstraints: t, dragElastic: n } = this.getProps(),
      r =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (o = this.visualElement.projection) == null
          ? void 0
          : o.layout,
      i = this.constraints;
    t && si(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && r
      ? (this.constraints = AN(r.layoutBox, t))
      : (this.constraints = !1),
      (this.elastic = DN(n)),
      i !== this.constraints &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        ht((s) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(s) &&
            (this.constraints[s] = MN(r.layoutBox[s], this.constraints[s]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !si(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = IR(r, i.root, this.visualElement.getTransformPagePoint());
    let s = RN(i.layout.layoutBox, o);
    if (n) {
      const a = n(jR(s));
      (this.hasMutatedConstraints = !!a), a && (s = ww(a));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: s,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = ht((c) => {
        if (!Ks(c, n, this.currentDirection)) return;
        let d = (l && l[c]) || {};
        s && (d = { min: 0, max: 0 });
        const f = i ? 200 : 1e6,
          h = i ? 40 : 1e7,
          v = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: f,
            bounceDamping: h,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...d,
          };
        return this.startAxisValueAnimation(c, v);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      Zc(this.visualElement, t), r.start(Xf(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    ht((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    ht((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) == null
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) == null
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    ht((n) => {
      const { drag: r } = this.getProps();
      if (!Ks(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: a } = i.layout.layoutBox[n];
        o.set(t[n] - fe(s, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!si(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    ht((s) => {
      const a = this.getAxisMotionValue(s);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[s] = NN({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      ht((s) => {
        if (!Ks(s, t, null)) return;
        const a = this.getAxisMotionValue(s),
          { min: l, max: u } = this.constraints[s];
        a.set(fe(l, u, i[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    jN.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = To(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        si(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      ce.read(r);
    const s = es(window, "resize", () => this.scalePositionWithinConstraints()),
      a = i.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (ht((c) => {
              const d = this.getAxisMotionValue(c);
              d &&
                ((this.originPoint[c] += l[c].translate),
                d.set(d.get() + l[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      s(), n(), o(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: s = ed,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: a,
    };
  }
}
function Ks(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function LN(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class IN extends ur {
  constructor(t) {
    super(t),
      (this.removeGroupControls = wt),
      (this.removeListeners = wt),
      (this.controls = new ON(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || wt);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const zm = (e) => (t, n) => {
  e && ce.postRender(() => e(t, n));
};
class VN extends ur {
  constructor() {
    super(...arguments), (this.removePointerDownListener = wt);
  }
  onPointerDown(t) {
    this.session = new Iw(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Lw(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: zm(t),
      onStart: zm(n),
      onMove: r,
      onEnd: (o, s) => {
        delete this.session, i && ce.postRender(() => i(o, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = To(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const da = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Bm(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const so = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (B.test(e)) e = parseFloat(e);
        else return e;
      const n = Bm(e, t.target.x),
        r = Bm(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  _N = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = or.parse(e);
      if (i.length > 5) return r;
      const o = or.createTransformer(e),
        s = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (i[0 + s] /= a), (i[1 + s] /= l);
      const u = fe(a, l, 0.5);
      return (
        typeof i[2 + s] == "number" && (i[2 + s] /= u),
        typeof i[3 + s] == "number" && (i[3 + s] /= u),
        o(i)
      );
    },
  };
let bu = !1;
class FN extends w.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: o } = t;
    aR(zN),
      o &&
        (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        bu && o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        o.setOptions({
          ...o.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (da.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: o,
      } = this.props,
      { projection: s } = r;
    return (
      s &&
        ((s.isPresent = o),
        (bu = !0),
        i || t.layoutDependency !== n || n === void 0 || t.isPresent !== o
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== o &&
          (o
            ? s.promote()
            : s.relegate() ||
              ce.postRender(() => {
                const a = s.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      Ff.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    (bu = !0),
      i &&
        (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function _w(e) {
  const [t, n] = sw(),
    r = w.useContext(vf);
  return S.jsx(FN, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: w.useContext(vw),
    isPresent: t,
    safeToRemove: n,
  });
}
const zN = {
  borderRadius: {
    ...so,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: so,
  borderTopRightRadius: so,
  borderBottomLeftRadius: so,
  borderBottomRightRadius: so,
  boxShadow: _N,
};
function BN(e, t, n) {
  const r = _e(e) ? e : Vi(e);
  return r.start(Xf("", r, t, n)), r.animation;
}
const $N = (e, t) => e.depth - t.depth;
class UN {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    Sf(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    bf(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort($N),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function WN(e, t) {
  const n = qe.now(),
    r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (ir(r), e(o - t));
    };
  return ce.setup(r, !0), () => ir(r);
}
const Fw = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  HN = Fw.length,
  $m = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Um = (e) => typeof e == "number" || B.test(e);
function KN(e, t, n, r, i, o) {
  i
    ? ((e.opacity = fe(0, n.opacity ?? 1, GN(r))),
      (e.opacityExit = fe(t.opacity ?? 1, 0, QN(r))))
    : o && (e.opacity = fe(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let s = 0; s < HN; s++) {
    const a = `border${Fw[s]}Radius`;
    let l = Wm(t, a),
      u = Wm(n, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || Um(l) === Um(u)
        ? ((e[a] = Math.max(fe($m(l), $m(u), r), 0)),
          (Jt.test(u) || Jt.test(l)) && (e[a] += "%"))
        : (e[a] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = fe(t.rotate || 0, n.rotate || 0, r));
}
function Wm(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const GN = zw(0, 0.5, Tx),
  QN = zw(0.5, 0.95, wt);
function zw(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Yo(e, t, r)));
}
function Hm(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function ft(e, t) {
  Hm(e.x, t.x), Hm(e.y, t.y);
}
function Km(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function Gm(e, t, n, r, i) {
  return (
    (e -= t), (e = Ya(e, 1 / n, r)), i !== void 0 && (e = Ya(e, 1 / i, r)), e
  );
}
function YN(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (
    (Jt.test(t) &&
      ((t = parseFloat(t)), (t = fe(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let a = fe(o.min, o.max, r);
  e === o && (a -= t),
    (e.min = Gm(e.min, t, n, a, i)),
    (e.max = Gm(e.max, t, n, a, i));
}
function Qm(e, t, [n, r, i], o, s) {
  YN(e, t[n], t[r], t[i], t.scale, o, s);
}
const XN = ["x", "scaleX", "originX"],
  qN = ["y", "scaleY", "originY"];
function Ym(e, t, n, r) {
  Qm(e.x, t, XN, n ? n.x : void 0, r ? r.x : void 0),
    Qm(e.y, t, qN, n ? n.y : void 0, r ? r.y : void 0);
}
function Xm(e) {
  return e.translate === 0 && e.scale === 1;
}
function Bw(e) {
  return Xm(e.x) && Xm(e.y);
}
function qm(e, t) {
  return e.min === t.min && e.max === t.max;
}
function ZN(e, t) {
  return qm(e.x, t.x) && qm(e.y, t.y);
}
function Zm(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function $w(e, t) {
  return Zm(e.x, t.x) && Zm(e.y, t.y);
}
function Jm(e) {
  return Ue(e.x) / Ue(e.y);
}
function eg(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class JN {
  constructor() {
    this.members = [];
  }
  add(t) {
    Sf(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (bf(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function eM(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    o = e.y.translate / t.y,
    s = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: d,
      rotateY: f,
      skewX: h,
      skewY: v,
    } = n;
    u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      d && (r += `rotateX(${d}deg) `),
      f && (r += `rotateY(${f}deg) `),
      h && (r += `skewX(${h}deg) `),
      v && (r += `skewY(${v}deg) `);
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const Cu = ["", "X", "Y", "Z"],
  tM = 1e3;
let nM = 0;
function Eu(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Uw(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = Aw(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: o } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", ce, !(i || o));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Uw(r);
}
function Ww({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      (this.id = nM++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            this.nodes.forEach(oM),
            this.nodes.forEach(uM),
            this.nodes.forEach(cM),
            this.nodes.forEach(sM);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new UN());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new Ef()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s) {
      if (this.instance) return;
      (this.isSVG = ow(s) && !HA(s)), (this.instance = s);
      const { layoutId: a, layout: l, visualElement: u } = this.options;
      if (
        (u && !u.current && u.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0),
        e)
      ) {
        let c,
          d = 0;
        const f = () => (this.root.updateBlockedByResize = !1);
        ce.read(() => {
          d = window.innerWidth;
        }),
          e(s, () => {
            const h = window.innerWidth;
            h !== d &&
              ((d = h),
              (this.root.updateBlockedByResize = !0),
              c && c(),
              (c = WN(f, 250)),
              da.hasAnimatedSinceResize &&
                ((da.hasAnimatedSinceResize = !1), this.nodes.forEach(rg)));
          });
      }
      a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          u &&
          (a || l) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: c,
              hasLayoutChanged: d,
              hasRelativeLayoutChanged: f,
              layout: h,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const v =
                  this.options.transition || u.getDefaultTransition() || mM,
                { onLayoutAnimationStart: g, onLayoutAnimationComplete: x } =
                  u.getProps(),
                m = !this.targetLayout || !$w(this.targetLayout, h),
                p = !d && f;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                p ||
                (d && (m || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const y = { ...Vf(v, "layout"), onPlay: g, onComplete: x };
                (u.shouldReduceMotion || this.options.layoutRoot) &&
                  ((y.delay = 0), (y.type = !1)),
                  this.startAnimation(y),
                  this.setAnimationOrigin(c, p);
              } else
                d || rg(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = h;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        ir(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(dM),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          Uw(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        (d.shouldResetTransform = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(tg);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(ng);
        return;
      }
      (this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(lM),
            this.nodes.forEach(rM),
            this.nodes.forEach(iM))
          : this.nodes.forEach(ng),
        this.clearAllSnapshots();
      const a = qe.now();
      (Re.delta = yn(0, 1e3 / 60, a - Re.timestamp)),
        (Re.timestamp = a),
        (Re.isProcessing = !0),
        fu.update.process(Re),
        fu.preRender.process(Re),
        fu.render.process(Re),
        (Re.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Ff.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(aM), this.sharedNodes.forEach(fM);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        ce.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      ce.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !Ue(this.snapshot.measuredBox.x) &&
          !Ue(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = ve()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        );
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === s &&
          (a = !1),
        a && this.instance)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: s,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const s =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !Bw(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        this.instance &&
        (a || gr(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        gM(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var u;
      const { visualElement: s } = this.options;
      if (!s) return ve();
      const a = s.measureViewportBox();
      if (
        !(
          ((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some(yM)
        )
      ) {
        const { scroll: c } = this.root;
        c && (ai(a.x, c.offset.x), ai(a.y, c.offset.y));
      }
      return a;
    }
    removeElementScroll(s) {
      var l;
      const a = ve();
      if ((ft(a, s), (l = this.scroll) != null && l.wasRoot)) return a;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: d, options: f } = c;
        c !== this.root &&
          d &&
          f.layoutScroll &&
          (d.wasRoot && ft(a, s), ai(a.x, d.offset.x), ai(a.y, d.offset.y));
      }
      return a;
    }
    applyTransform(s, a = !1) {
      const l = ve();
      ft(l, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          li(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          gr(c.latestValues) && li(l, c.latestValues);
      }
      return gr(this.latestValues) && li(l, this.latestValues), l;
    }
    removeTransform(s) {
      const a = ve();
      ft(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !gr(u.latestValues)) continue;
        Qc(u.latestValues) && u.updateSnapshot();
        const c = ve(),
          d = u.measurePageBox();
        ft(c, d),
          Ym(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return gr(this.latestValues) && Ym(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Re.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var f;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const l = !!this.resumingFrom || this !== a;
      if (
        !(
          s ||
          (l && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((f = this.parent) != null && f.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (!(!this.layout || !(c || d))) {
        if (
          ((this.resolvedRelativeTargetAt = Re.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const h = this.getClosestProjectingParent();
          h && h.layout && this.animationProgress !== 1
            ? ((this.relativeParent = h),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = ve()),
              (this.relativeTargetOrigin = ve()),
              ko(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                h.layout.layoutBox
              ),
              ft(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (
          !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = ve()), (this.targetWithTransforms = ve())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              CN(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
            ? (this.resumingFrom
                ? (this.target = this.applyTransform(this.layout.layoutBox))
                : ft(this.target, this.layout.layoutBox),
              bw(this.target, this.targetDelta))
            : ft(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget)
        ) {
          this.attemptToResolveRelativeTarget = !1;
          const h = this.getClosestProjectingParent();
          h &&
          !!h.resumingFrom == !!this.resumingFrom &&
          !h.options.layoutScroll &&
          h.target &&
          this.animationProgress !== 1
            ? ((this.relativeParent = h),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = ve()),
              (this.relativeTargetOrigin = ve()),
              ko(this.relativeTargetOrigin, this.target, h.target),
              ft(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Qc(this.parent.latestValues) ||
          Sw(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var v;
      const s = this.getLead(),
        a = !!this.resumingFrom || this !== s;
      let l = !0;
      if (
        ((this.isProjectionDirty ||
          ((v = this.parent) != null && v.isProjectionDirty)) &&
          (l = !1),
        a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (l = !1),
        this.resolvedRelativeTargetAt === Re.timestamp && (l = !1),
        l)
      )
        return;
      const { layout: u, layoutId: c } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(u || c))
      )
        return;
      ft(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        f = this.treeScale.y;
      LR(this.layoutCorrected, this.treeScale, this.path, a),
        s.layout &&
          !s.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((s.target = s.layout.layoutBox), (s.targetWithTransforms = ve()));
      const { target: h } = s;
      if (!h) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Km(this.prevProjectionDelta.x, this.projectionDelta.x),
          Km(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Po(this.projectionDelta, this.layoutCorrected, h, this.latestValues),
        (this.treeScale.x !== d ||
          this.treeScale.y !== f ||
          !eg(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !eg(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", h));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      var a;
      if (((a = this.options.visualElement) == null || a.scheduleRender(), s)) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = ui()),
        (this.projectionDelta = ui()),
        (this.projectionDeltaWithTransform = ui());
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        d = ui();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const f = ve(),
        h = l ? l.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        g = h !== v,
        x = this.getStack(),
        m = !x || x.members.length <= 1,
        p = !!(g && !m && this.options.crossfade === !0 && !this.path.some(pM));
      this.animationProgress = 0;
      let y;
      (this.mixTargetDelta = (b) => {
        const C = b / 1e3;
        ig(d.x, s.x, C),
          ig(d.y, s.y, C),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (ko(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            hM(this.relativeTarget, this.relativeTargetOrigin, f, C),
            y && ZN(this.relativeTarget, y) && (this.isProjectionDirty = !1),
            y || (y = ve()),
            ft(y, this.relativeTarget)),
          g &&
            ((this.animationValues = c), KN(c, u, this.latestValues, C, p, m)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = C);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      var a, l, u;
      this.notifyListeners("animationStart"),
        (a = this.currentAnimation) == null || a.stop(),
        (u = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) ==
          null || u.stop(),
        this.pendingAnimation &&
          (ir(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = ce.update(() => {
          (da.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = Vi(0)),
            (this.currentAnimation = BN(this.motionValue, [0, 1e3], {
              ...s,
              velocity: 0,
              isSync: !0,
              onUpdate: (c) => {
                this.mixTargetDelta(c), s.onUpdate && s.onUpdate(c);
              },
              onStop: () => {},
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(tM),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = s;
      if (!(!a || !l || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          Hw(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || ve();
          const d = Ue(this.layout.layoutBox.x);
          (l.x.min = s.target.x.min), (l.x.max = l.x.min + d);
          const f = Ue(this.layout.layoutBox.y);
          (l.y.min = s.target.y.min), (l.y.max = l.y.min + f);
        }
        ft(a, l),
          li(a, c),
          Po(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new JN()),
        this.sharedNodes.get(s).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: s } = this.options;
      return s
        ? ((a = this.getStack()) == null ? void 0 : a.lead) || this
        : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: s } = this.options;
      return s ? ((a = this.getStack()) == null ? void 0 : a.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let a = !1;
      const { latestValues: l } = s;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const u = {};
      l.z && Eu("z", s, u, this.animationValues);
      for (let c = 0; c < Cu.length; c++)
        Eu(`rotate${Cu[c]}`, s, u, this.animationValues),
          Eu(`skew${Cu[c]}`, s, u, this.animationValues);
      s.render();
      for (const c in u)
        s.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]);
      s.scheduleRender();
    }
    applyProjectionStyles(s, a) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        s.visibility = "hidden";
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        (this.needsReset = !1),
          (s.visibility = ""),
          (s.opacity = ""),
          (s.pointerEvents = ca(a == null ? void 0 : a.pointerEvents) || ""),
          (s.transform = l ? l(this.latestValues, "") : "none");
        return;
      }
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        this.options.layoutId &&
          ((s.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (s.pointerEvents = ca(a == null ? void 0 : a.pointerEvents) || "")),
          this.hasProjected &&
            !gr(this.latestValues) &&
            ((s.transform = l ? l({}, "") : "none"), (this.hasProjected = !1));
        return;
      }
      s.visibility = "";
      const c = u.animationValues || u.latestValues;
      this.applyTransformsToTarget();
      let d = eM(this.projectionDeltaWithTransform, this.treeScale, c);
      l && (d = l(c, d)), (s.transform = d);
      const { x: f, y: h } = this.projectionDelta;
      (s.transformOrigin = `${f.origin * 100}% ${h.origin * 100}% 0`),
        u.animationValues
          ? (s.opacity =
              u === this
                ? c.opacity ?? this.latestValues.opacity ?? 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : c.opacityExit)
          : (s.opacity =
              u === this
                ? c.opacity !== void 0
                  ? c.opacity
                  : ""
                : c.opacityExit !== void 0
                ? c.opacityExit
                : 0);
      for (const v in Jo) {
        if (c[v] === void 0) continue;
        const { correct: g, applyTo: x, isCSSVariable: m } = Jo[v],
          p = d === "none" ? c[v] : g(c[v], u);
        if (x) {
          const y = x.length;
          for (let b = 0; b < y; b++) s[x[b]] = p;
        } else
          m ? (this.options.visualElement.renderState.vars[v] = p) : (s[v] = p);
      }
      this.options.layoutId &&
        (s.pointerEvents =
          u === this ? ca(a == null ? void 0 : a.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) == null ? void 0 : a.stop();
      }),
        this.root.nodes.forEach(tg),
        this.root.sharedNodes.clear();
    }
  };
}
function rM(e) {
  e.updateLayout();
}
function iM(e) {
  var n;
  const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = t.source !== e.layout.source;
    o === "size"
      ? ht((d) => {
          const f = s ? t.measuredBox[d] : t.layoutBox[d],
            h = Ue(f);
          (f.min = r[d].min), (f.max = f.min + h);
        })
      : Hw(o, t.layoutBox, r) &&
        ht((d) => {
          const f = s ? t.measuredBox[d] : t.layoutBox[d],
            h = Ue(r[d]);
          (f.max = f.min + h),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + h));
        });
    const a = ui();
    Po(a, r, t.layoutBox);
    const l = ui();
    s ? Po(l, e.applyTransform(i, !0), t.measuredBox) : Po(l, r, t.layoutBox);
    const u = !Bw(a);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: h } = d;
        if (f && h) {
          const v = ve();
          ko(v, t.layoutBox, f.layoutBox);
          const g = ve();
          ko(g, r, h.layoutBox),
            $w(v, g) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = g),
              (e.relativeTargetOrigin = v),
              (e.relativeParent = d));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: t,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeLayoutChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function oM(e) {
  e.parent &&
    (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty ||
      (e.isSharedProjectionDirty = !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function sM(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function aM(e) {
  e.clearSnapshot();
}
function tg(e) {
  e.clearMeasurements();
}
function ng(e) {
  e.isLayoutDirty = !1;
}
function lM(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function rg(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function uM(e) {
  e.resolveTargetDelta();
}
function cM(e) {
  e.calcProjection();
}
function dM(e) {
  e.resetSkewAndRotation();
}
function fM(e) {
  e.removeLeadSnapshot();
}
function ig(e, t, n) {
  (e.translate = fe(t.translate, 0, n)),
    (e.scale = fe(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function og(e, t, n, r) {
  (e.min = fe(t.min, n.min, r)), (e.max = fe(t.max, n.max, r));
}
function hM(e, t, n, r) {
  og(e.x, t.x, n.x, r), og(e.y, t.y, n.y, r);
}
function pM(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const mM = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  sg = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  ag = sg("applewebkit/") && !sg("chrome/") ? Math.round : wt;
function lg(e) {
  (e.min = ag(e.min)), (e.max = ag(e.max));
}
function gM(e) {
  lg(e.x), lg(e.y);
}
function Hw(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !bN(Jm(t), Jm(n), 0.2))
  );
}
function yM(e) {
  var t;
  return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
}
const vM = Ww({
    attachResizeListener: (e, t) => es(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Tu = { current: void 0 },
  Kw = Ww({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Tu.current) {
        const e = new vM({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Tu.current = e);
      }
      return Tu.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  xM = {
    pan: { Feature: VN },
    drag: { Feature: IN, ProjectionNode: Kw, MeasureLayout: _w },
  };
function ug(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n,
    o = r[i];
  o && ce.postRender(() => o(t, ms(t)));
}
class wM extends ur {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = zA(
        t,
        (n, r) => (ug(this.node, r, "Start"), (i) => ug(this.node, i, "End"))
      ));
  }
  unmount() {}
}
class SM extends ur {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = fs(
      es(this.node.current, "focus", () => this.onFocus()),
      es(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
function cg(e, t, n) {
  const { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n),
    o = r[i];
  o && ce.postRender(() => o(t, ms(t)));
}
class bM extends ur {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = WA(
        t,
        (n, r) => (
          cg(this.node, r, "Start"),
          (i, { success: o }) => cg(this.node, i, o ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ));
  }
  unmount() {}
}
const td = new WeakMap(),
  Pu = new WeakMap(),
  CM = (e) => {
    const t = td.get(e.target);
    t && t(e);
  },
  EM = (e) => {
    e.forEach(CM);
  };
function TM({ root: e, ...t }) {
  const n = e || document;
  Pu.has(n) || Pu.set(n, {});
  const r = Pu.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(EM, { root: e, ...t })), r[i];
}
function PM(e, t, n) {
  const r = TM(t);
  return (
    td.set(e, n),
    r.observe(e),
    () => {
      td.delete(e), r.unobserve(e);
    }
  );
}
const kM = { some: 0, all: 1 };
class AM extends ur {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: o } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : kM[i],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), o && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          f = u ? c : d;
        f && f(l);
      };
    return PM(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(RM(t, n)) && this.startObserver();
  }
  unmount() {}
}
function RM({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const NM = {
    inView: { Feature: AM },
    tap: { Feature: bM },
    focus: { Feature: SM },
    hover: { Feature: wM },
  },
  MM = { layout: { ProjectionNode: Kw, MeasureLayout: _w } },
  DM = { ...gN, ...NM, ...xM, ...MM },
  re = DR(DM, HR),
  jM = { some: 0, all: 1 };
function OM(e, t, { root: n, margin: r, amount: i = "some" } = {}) {
  const o = Jx(e),
    s = new WeakMap(),
    a = (u) => {
      u.forEach((c) => {
        const d = s.get(c.target);
        if (c.isIntersecting !== !!d)
          if (c.isIntersecting) {
            const f = t(c.target, c);
            typeof f == "function" ? s.set(c.target, f) : l.unobserve(c.target);
          } else typeof d == "function" && (d(c), s.delete(c.target));
      });
    },
    l = new IntersectionObserver(a, {
      root: n,
      rootMargin: r,
      threshold: typeof i == "number" ? i : jM[i],
    });
  return o.forEach((u) => l.observe(u)), () => l.disconnect();
}
function gs(
  e,
  { root: t, margin: n, amount: r, once: i = !1, initial: o = !1 } = {}
) {
  const [s, a] = w.useState(o);
  return (
    w.useEffect(() => {
      if (!e.current || (i && s)) return;
      const l = () => (a(!0), i ? void 0 : () => a(!1)),
        u = { root: (t && t.current) || void 0, margin: n, amount: r };
      return OM(e.current, l, u);
    }, [t, e, n, i, r]),
    s
  );
}
const LM = nf(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  xn = w.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...i }, o) => {
      const s = r ? Ib : "button";
      return S.jsx(s, {
        className: Bt(LM({ variant: t, size: n, className: e })),
        ref: o,
        ...i,
      });
    }
  );
xn.displayName = "Button";
const IM = () => {
    const [e, t] = w.useState("inicio"),
      [n, r] = w.useState(!1),
      i = [
        { id: "inicio", label: "Início" },
        { id: "about", label: "Quem sou eu" },
        { id: "services", label: "O que eu faço" },
        { id: "projects", label: "Projetos" },
        { id: "contact", label: "Contato" },
      ];
    w.useEffect(() => {
      const s = () => {
        r(window.scrollY > 50);
        const a = i.map((u) => document.getElementById(u.id)),
          l = window.scrollY + 100;
        a.forEach((u, c) => {
          if (u) {
            const d = u.offsetTop,
              f = d + u.offsetHeight;
            l >= d && l < f && t(i[c].id);
          }
        });
      };
      return (
        window.addEventListener("scroll", s),
        () => window.removeEventListener("scroll", s)
      );
    }, []);
    const o = (s) => {
      const a = document.getElementById(s);
      if (a) {
        const c = a.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: c, behavior: "smooth" });
      }
    };
    return S.jsx(re.header, {
      initial: { y: -100 },
      animate: { y: 0 },
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        n ? "bg-background/70 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`,
      children: S.jsx("nav", {
        className: "container mx-auto px-4 py-4 max-w-6xl",
        children: S.jsxs("div", {
          className: "flex items-center justify-between",
          children: [
            S.jsx(re.button, {
              onClick: () => o("inicio"),
              className:
                "text-xl font-heading font-bold text-foreground hover:text-primary transition-colors",
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              children: "Gabriel Alves",
            }),
            S.jsx("div", {
              className: "hidden md:flex items-center gap-8",
              children: i.map((s) =>
                S.jsxs(
                  "button",
                  {
                    onClick: () => o(s.id),
                    className: `text-sm font-medium transition-colors relative ${
                      e === s.id
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`,
                    children: [
                      s.label,
                      e === s.id &&
                        S.jsx(re.div, {
                          layoutId: "activeSection",
                          className:
                            "absolute -bottom-1 left-0 right-0 h-0.5 bg-primary",
                          transition: {
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          },
                        }),
                    ],
                  },
                  s.id
                )
              ),
            }),
            S.jsx(xn, {
              variant: "outline",
              size: "sm",
              className:
                "hidden md:flex items-center gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all",
              asChild: !0,
              children: S.jsxs("a", {
                href: "#",
                download: !0,
                children: [S.jsx(_C, { className: "w-4 h-4" }), "Baixar CV"],
              }),
            }),
          ],
        }),
      }),
    });
  },
  VM =
    "/gabriel-alves-scroll-story/assets/foto_perfil_workana_400x400-BAuKpw5w.jpg",
  _M = () => {
    const e = (t) => {
      const n = document.getElementById(t);
      if (n) {
        const o = n.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: o, behavior: "smooth" });
      }
    };
    return S.jsxs("section", {
      id: "inicio",
      className:
        "min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden",
      children: [
        S.jsx("div", {
          className:
            "absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none",
        }),
        S.jsx("div", {
          className: "container mx-auto max-w-6xl relative z-10",
          children: S.jsxs("div", {
            className: "grid md:grid-cols-2 gap-12 items-center",
            children: [
              S.jsxs(re.div, {
                initial: { opacity: 0, x: -50 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.8 },
                className: "text-left",
                children: [
                  S.jsxs(re.h1, {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.2 },
                    className:
                      "text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-4",
                    children: [
                      "Olá, sou ",
                      S.jsx("span", {
                        className: "text-primary",
                        children: "Gabriel Alves",
                      }),
                    ],
                  }),
                  S.jsx(re.h2, {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.4 },
                    className:
                      "text-2xl md:text-3xl font-heading font-semibold text-muted-foreground mb-6",
                    children:
                      "Desenvolvedor .NET e Vue.js focado em performance e arquitetura limpa.",
                  }),
                  S.jsx(re.p, {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.6 },
                    className: "text-lg text-muted-foreground mb-8 max-w-lg",
                    children:
                      "Transformo ideias em sistemas web e APIs escaláveis, com código limpo e resultados mensuráveis.",
                  }),
                  S.jsxs(re.div, {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.8 },
                    className: "flex flex-wrap gap-4",
                    children: [
                      S.jsxs(xn, {
                        size: "lg",
                        className:
                          "bg-primary text-primary-foreground hover:bg-primary/90 transition-all group",
                        onClick: () => e("projects"),
                        children: [
                          "Ver Projetos",
                          S.jsx(MC, {
                            className:
                              "ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform",
                          }),
                        ],
                      }),
                      S.jsx(xn, {
                        size: "lg",
                        variant: "outline",
                        className:
                          "border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all",
                        onClick: () => e("contact"),
                        children: "Entrar em contato",
                      }),
                    ],
                  }),
                ],
              }),
              S.jsx(re.div, {
                initial: { opacity: 0, scale: 0.8 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.8, delay: 0.3 },
                className: "flex justify-center md:justify-end",
                children: S.jsxs("div", {
                  className: "relative",
                  children: [
                    S.jsx("div", {
                      className:
                        "absolute inset-0 bg-primary/20 rounded-full blur-3xl",
                    }),
                    S.jsx(re.img, {
                      src: VM,
                      alt: "Gabriel Alves - Desenvolvedor .NET e Vue.js",
                      className:
                        "relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-primary/20 shadow-2xl",
                      whileHover: { scale: 1.05 },
                      transition: { type: "spring", stiffness: 300 },
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      ],
    });
  },
  FM = nf(
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
      variants: {
        variant: {
          default:
            "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
          secondary:
            "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
          destructive:
            "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
          outline: "text-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    }
  );
function Gw({ className: e, variant: t, ...n }) {
  return S.jsx("div", { className: Bt(FM({ variant: t }), e), ...n });
}
const zM = () => {
    const e = w.useRef(null),
      t = gs(e, { once: !0, margin: "-100px" }),
      n = [
        {
          category: "Backend",
          items: ["C#", ".NET 8", "EF Core", "Dapper", "SQL Server"],
        },
        { category: "Frontend", items: ["Vue.js", "React", "Tailwind CSS"] },
        { category: "Infra/DevOps", items: ["Git/GitHub", "Nginx", "Azure"] },
      ];
    return S.jsx("section", {
      id: "about",
      className: "py-20 px-4",
      ref: e,
      children: S.jsx("div", {
        className: "container mx-auto max-w-6xl",
        children: S.jsxs(re.div, {
          initial: { opacity: 0, y: 50 },
          animate: t ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.6 },
          children: [
            S.jsx("h2", {
              className:
                "text-4xl md:text-5xl font-heading font-bold mb-12 text-center",
              children: "Quem sou eu",
            }),
            S.jsxs("div", {
              className: "grid md:grid-cols-2 gap-12 items-center",
              children: [
                S.jsxs(re.div, {
                  initial: { opacity: 0, x: -30 },
                  animate: t ? { opacity: 1, x: 0 } : {},
                  transition: { duration: 0.6, delay: 0.2 },
                  className: "space-y-6",
                  children: [
                    S.jsx("p", {
                      className:
                        "text-lg text-muted-foreground leading-relaxed",
                      children:
                        "Sou desenvolvedor de software com mais de 2 anos de experiência criando APIs, integrações e sistemas web. Meu foco é performance, Clean Architecture e entregas previsíveis.",
                    }),
                    S.jsx("p", {
                      className:
                        "text-lg text-muted-foreground leading-relaxed",
                      children:
                        "Acredito que tecnologia boa simplifica processos e gera valor de negócio. Busco sempre escrever código limpo, testável e que seja fácil de manter no longo prazo.",
                    }),
                    S.jsx(xn, {
                      variant: "outline",
                      className:
                        "border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all group",
                      asChild: !0,
                      children: S.jsxs("a", {
                        href: "#",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: [
                          "Ver meu LinkedIn",
                          S.jsx(d0, {
                            className:
                              "ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                S.jsx(re.div, {
                  initial: { opacity: 0, x: 30 },
                  animate: t ? { opacity: 1, x: 0 } : {},
                  transition: { duration: 0.6, delay: 0.4 },
                  className: "space-y-6",
                  children: n.map((r, i) =>
                    S.jsxs(
                      re.div,
                      {
                        initial: { opacity: 0, y: 20 },
                        animate: t ? { opacity: 1, y: 0 } : {},
                        transition: { duration: 0.6, delay: 0.2 * i },
                        className:
                          "bg-card rounded-2xl p-6 shadow-md border border-border hover:shadow-xl hover:border-primary/20 transition-all",
                        children: [
                          S.jsx("h3", {
                            className:
                              "text-xl font-heading font-semibold mb-4 text-primary",
                            children: r.category,
                          }),
                          S.jsx("div", {
                            className: "flex flex-wrap gap-2",
                            children: r.items.map((o) =>
                              S.jsx(
                                Gw,
                                {
                                  variant: "secondary",
                                  className:
                                    "px-3 py-1 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default",
                                  children: o,
                                },
                                o
                              )
                            ),
                          }),
                        ],
                      },
                      r.category
                    )
                  ),
                }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  BM = () => {
    const e = w.useRef(null),
      t = gs(e, { once: !0, margin: "-100px" }),
      n = [
        {
          icon: IC,
          title: "Desenvolvimento Web",
          description:
            "Sites e sistemas performáticos com foco em UX e escalabilidade.",
        },
        {
          icon: VC,
          title: "APIs & Integrações",
          description:
            "APIs REST, automações e conexões com bancos de dados e serviços.",
        },
        {
          icon: LC,
          title: "Dashboards & Dados",
          description:
            "Dashboards e relatórios com dados em tempo real para decisão.",
        },
      ];
    return S.jsx("section", {
      id: "services",
      className: "py-20 px-4 bg-card/30",
      ref: e,
      children: S.jsx("div", {
        className: "container mx-auto max-w-6xl",
        children: S.jsxs(re.div, {
          initial: { opacity: 0, y: 50 },
          animate: t ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.6 },
          children: [
            S.jsx("h2", {
              className:
                "text-4xl md:text-5xl font-heading font-bold mb-12 text-center",
              children: "O que eu faço",
            }),
            S.jsx("div", {
              className: "grid md:grid-cols-3 gap-8",
              children: n.map((r, i) => {
                const o = r.icon;
                return S.jsxs(
                  re.div,
                  {
                    initial: { opacity: 0, y: 30 },
                    animate: t ? { opacity: 1, y: 0 } : {},
                    transition: { duration: 0.6, delay: 0.2 * i },
                    whileHover: { scale: 1.05, y: -5 },
                    className:
                      "bg-card rounded-2xl p-8 shadow-md border border-border hover:shadow-xl hover:border-primary/50 transition-all group cursor-default",
                    children: [
                      S.jsx("div", {
                        className:
                          "w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors",
                        children: S.jsx(o, {
                          className: "w-7 h-7 text-primary",
                        }),
                      }),
                      S.jsx("h3", {
                        className:
                          "text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors",
                        children: r.title,
                      }),
                      S.jsx("p", {
                        className: "text-muted-foreground leading-relaxed",
                        children: r.description,
                      }),
                    ],
                  },
                  r.title
                );
              }),
            }),
          ],
        }),
      }),
    });
  },
  $M = "/gabriel-alves-scroll-story/assets/BarberShopSystem-e4W03AA0.png",
  UM = "/gabriel-alves-scroll-story/assets/project2-Baq0yXyR.jpg",
  WM = "/gabriel-alves-scroll-story/assets/project3-75uolQI7.jpg",
  HM = "/gabriel-alves-scroll-story/assets/project4-B8TlgWGK.jpg",
  KM = "/gabriel-alves-scroll-story/assets/project5-Bp908_TL.jpg",
  GM = "/gabriel-alves-scroll-story/assets/project6-CQdxlCxM.jpg",
  QM = () => {
    const e = w.useRef(null),
      t = gs(e, { once: !0, margin: "-100px" }),
      n = [
        {
          title: "BarberShopSystem",
          description:
            "Sistema de agendamento com Clean Architecture, JWT e EF Core.",
          image: $M,
          tags: ["C#", ".NET", "EF Core", "JWT"],
          github: "https://github.com/GabrielAlvesGG/BarbeShopingSystem",
          demo: "http://localhost:5276",
        },
        {
          title: "CertaconAPI",
          description:
            "Ingestão de XMLs em alta escala com Dapper e SqlBulkCopy.",
          image: UM,
          tags: ["C#", ".NET", "Dapper", "SQL Server"],
          github: "#",
          demo: "",
        },
        {
          title: "Dashboard Vendas",
          description: "Painel com métricas e filtros em tempo real.",
          image: WM,
          tags: ["Vue.js", "Tailwind", "Charts"],
          github: "#",
          demo: "#",
        },
        {
          title: "API Pagamentos",
          description: "Integrações seguras com gateways e validações.",
          image: HM,
          tags: ["C#", ".NET", "REST API"],
          github: "#",
          demo: "",
        },
        {
          title: "Landing Performance",
          description: "Landing otimizada com SEO e Lighthouse > 90.",
          image: KM,
          tags: ["React", "Tailwind", "SEO"],
          github: "#",
          demo: "#",
        },
        {
          title: "Nginx Reverse Proxy",
          description: "Setup para múltiplos serviços com HTTPS local.",
          image: GM,
          tags: ["Nginx", "DevOps", "Docker"],
          github: "#",
          demo: "",
        },
      ];
    return S.jsx("section", {
      id: "projects",
      className: "py-20 px-4",
      ref: e,
      children: S.jsx("div", {
        className: "container mx-auto max-w-6xl",
        children: S.jsxs(re.div, {
          initial: { opacity: 0, y: 50 },
          animate: t ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.6 },
          children: [
            S.jsx("h2", {
              className:
                "text-4xl md:text-5xl font-heading font-bold mb-12 text-center",
              children: "Meus Projetos",
            }),
            S.jsx("div", {
              className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
              children: n.map((r, i) =>
                S.jsxs(
                  re.div,
                  {
                    initial: { opacity: 0, y: 30 },
                    animate: t ? { opacity: 1, y: 0 } : {},
                    transition: { duration: 0.6, delay: 0.1 * i },
                    whileHover: { y: -8 },
                    className:
                      "bg-card rounded-2xl overflow-hidden shadow-md border border-border hover:shadow-xl hover:border-primary/50 transition-all group",
                    children: [
                      S.jsxs("div", {
                        className: "relative overflow-hidden aspect-video",
                        children: [
                          S.jsx("img", {
                            src: r.image,
                            alt: r.title,
                            className:
                              "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500",
                          }),
                          S.jsx("div", {
                            className:
                              "absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60",
                          }),
                        ],
                      }),
                      S.jsxs("div", {
                        className: "p-6",
                        children: [
                          S.jsx("h3", {
                            className:
                              "text-xl font-heading font-semibold mb-2 group-hover:text-primary transition-colors",
                            children: r.title,
                          }),
                          S.jsx("p", {
                            className:
                              "text-muted-foreground mb-4 text-sm leading-relaxed",
                            children: r.description,
                          }),
                          S.jsx("div", {
                            className: "flex flex-wrap gap-2 mb-4",
                            children: r.tags.map((o) =>
                              S.jsx(
                                Gw,
                                {
                                  variant: "secondary",
                                  className: "text-xs px-2 py-1",
                                  children: o,
                                },
                                o
                              )
                            ),
                          }),
                          S.jsxs("div", {
                            className: "flex gap-3",
                            children: [
                              S.jsx(xn, {
                                size: "sm",
                                variant: "outline",
                                className:
                                  "flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all group/btn",
                                asChild: !0,
                                children: S.jsxs("a", {
                                  href: r.github,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  children: [
                                    S.jsx(f0, { className: "w-4 h-4 mr-2" }),
                                    "GitHub",
                                  ],
                                }),
                              }),
                              r.demo &&
                                S.jsx(xn, {
                                  size: "sm",
                                  className:
                                    "flex-1 bg-primary text-primary-foreground hover:bg-primary/90 transition-all group/btn",
                                  asChild: !0,
                                  children: S.jsxs("a", {
                                    href: r.demo,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: [
                                      S.jsx(d0, {
                                        className:
                                          "w-4 h-4 mr-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform",
                                      }),
                                      "Demo",
                                    ],
                                  }),
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  r.title
                )
              ),
            }),
          ],
        }),
      }),
    });
  },
  YM = () => {
    const e = w.useRef(null),
      t = gs(e, { once: !0, margin: "-100px" }),
      n = [
        { icon: FC, value: "+7M", label: "linhas XML processadas" },
        { icon: jC, value: "+15", label: "projetos entregues" },
        { icon: OC, value: "2+", label: "anos de experiência" },
      ];
    return S.jsx("section", {
      className: "py-20 px-4 bg-card/30",
      ref: e,
      children: S.jsx("div", {
        className: "container mx-auto max-w-6xl",
        children: S.jsxs(re.div, {
          initial: { opacity: 0, y: 50 },
          animate: t ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.6 },
          children: [
            S.jsx("h2", {
              className:
                "text-4xl md:text-5xl font-heading font-bold mb-12 text-center",
              children: "Resultados",
            }),
            S.jsx("div", {
              className: "grid md:grid-cols-3 gap-8 mb-16",
              children: n.map((r, i) => {
                const o = r.icon;
                return S.jsxs(
                  re.div,
                  {
                    initial: { opacity: 0, scale: 0.8 },
                    animate: t ? { opacity: 1, scale: 1 } : {},
                    transition: { duration: 0.6, delay: 0.2 * i },
                    className: "text-center",
                    children: [
                      S.jsx("div", {
                        className:
                          "w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4",
                        children: S.jsx(o, {
                          className: "w-8 h-8 text-primary",
                        }),
                      }),
                      S.jsx("div", {
                        className:
                          "text-4xl md:text-5xl font-heading font-bold text-primary mb-2",
                        children: r.value,
                      }),
                      S.jsx("div", {
                        className: "text-muted-foreground",
                        children: r.label,
                      }),
                    ],
                  },
                  r.label
                );
              }),
            }),
            S.jsxs(re.div, {
              initial: { opacity: 0, y: 30 },
              animate: t ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.6, delay: 0.6 },
              className: "grid md:grid-cols-2 gap-8",
              children: [
                S.jsxs("div", {
                  className:
                    "bg-card rounded-2xl p-8 shadow-md border border-border",
                  children: [
                    S.jsxs("div", {
                      className: "flex items-start gap-4 mb-4",
                      children: [
                        S.jsx("div", {
                          className:
                            "w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0",
                          children: S.jsx("span", {
                            className:
                              "text-xl font-heading font-bold text-primary",
                            children: "A",
                          }),
                        }),
                        S.jsxs("div", {
                          children: [
                            S.jsx("h4", {
                              className: "font-heading font-semibold mb-1",
                              children: "Cliente A",
                            }),
                            S.jsx("p", {
                              className: "text-sm text-muted-foreground",
                              children: "Empresa de Tecnologia",
                            }),
                          ],
                        }),
                      ],
                    }),
                    S.jsx("p", {
                      className: "text-muted-foreground italic leading-relaxed",
                      children:
                        '"Excelente trabalho no desenvolvimento da API. Entrega rápida, código limpo e ótima comunicação durante todo o projeto."',
                    }),
                  ],
                }),
                S.jsxs("div", {
                  className:
                    "bg-card rounded-2xl p-8 shadow-md border border-border",
                  children: [
                    S.jsxs("div", {
                      className: "flex items-start gap-4 mb-4",
                      children: [
                        S.jsx("div", {
                          className:
                            "w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0",
                          children: S.jsx("span", {
                            className:
                              "text-xl font-heading font-bold text-primary",
                            children: "B",
                          }),
                        }),
                        S.jsxs("div", {
                          children: [
                            S.jsx("h4", {
                              className: "font-heading font-semibold mb-1",
                              children: "Cliente B",
                            }),
                            S.jsx("p", {
                              className: "text-sm text-muted-foreground",
                              children: "Startup",
                            }),
                          ],
                        }),
                      ],
                    }),
                    S.jsx("p", {
                      className: "text-muted-foreground italic leading-relaxed",
                      children:
                        '"Profissional dedicado e focado em resultados. O dashboard ficou exatamente como imaginávamos, com performance excepcional."',
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  nd = w.forwardRef(({ className: e, type: t, ...n }, r) =>
    S.jsx("input", {
      type: t,
      className: Bt(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        e
      ),
      ref: r,
      ...n,
    })
  );
nd.displayName = "Input";
const Qw = w.forwardRef(({ className: e, ...t }, n) =>
  S.jsx("textarea", {
    className: Bt(
      "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ref: n,
    ...t,
  })
);
Qw.displayName = "Textarea";
const XM = () => {
    const e = w.useRef(null),
      t = gs(e, { once: !0, margin: "-100px" }),
      { toast: n } = Lv(),
      [r, i] = w.useState({ name: "", email: "", message: "" }),
      [o, s] = w.useState(!1),
      a = [
        {
          icon: BC,
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/gabriel-alves-84725a34a",
          color: "hover:text-blue-400",
        },
        {
          icon: f0,
          label: "GitHub",
          href: "https://github.com/GabrielAlvesGG",
          color: "hover:text-purple-400",
        },
        {
          icon: $C,
          label: "WhatsApp",
          href: "https://wa.me/5511949008619?text=Ol%C3%A1%2C%20vi%20seu%20portf%C3%B3lio%20e%20quero%20um%20or%C3%A7amento",
          color: "hover:text-green-400",
        },
      ],
      l = async (c) => {
        if (
          (c.preventDefault(),
          s(!0),
          !r.name.trim() || !r.email.trim() || !r.message.trim())
        ) {
          n({
            title: "Erro",
            description: "Por favor, preencha todos os campos.",
            variant: "destructive",
          }),
            s(!1);
          return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.email)) {
          n({
            title: "Erro",
            description: "Por favor, insira um email válido.",
            variant: "destructive",
          }),
            s(!1);
          return;
        }
        try {
          const f = await fetch("http://localhost:8000/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(r),
          });
          if (f.ok)
            n({
              title: "Mensagem enviada!",
              description: "Obrigado pelo contato. Responderei em breve!",
            }),
              i({ name: "", email: "", message: "" });
          else {
            const h = await f.json();
            n({
              title: "Erro",
              description: h.detail || "Falha ao enviar mensagem.",
              variant: "destructive",
            });
          }
        } catch {
          n({
            title: "Erro",
            description: "Falha de conexão com o servidor.",
            variant: "destructive",
          });
        }
        s(!1);
      },
      u = (c) => {
        i({ ...r, [c.target.name]: c.target.value });
      };
    return S.jsx("section", {
      id: "contact",
      className: "py-20 px-4",
      ref: e,
      children: S.jsx("div", {
        className: "container mx-auto max-w-4xl",
        children: S.jsxs(re.div, {
          initial: { opacity: 0, y: 50 },
          animate: t ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.6 },
          children: [
            S.jsx("h2", {
              className:
                "text-4xl md:text-5xl font-heading font-bold mb-4 text-center",
              children: "Vamos conversar?",
            }),
            S.jsx("p", {
              className:
                "text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto",
              children:
                "Tem um projeto em mente? Envie uma mensagem — respondo rapidamente.",
            }),
            S.jsx(re.div, {
              initial: { opacity: 0, y: 20 },
              animate: t ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.6, delay: 0.2 },
              className: "grid grid-cols-2 md:grid-cols-3 gap-4 mb-12",
              children: a.map((c, d) => {
                const f = c.icon;
                return S.jsxs(
                  re.a,
                  {
                    href: c.href,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    initial: { opacity: 0, scale: 0.8 },
                    animate: t ? { opacity: 1, scale: 1 } : {},
                    transition: { duration: 0.6, delay: 0.1 * d },
                    whileHover: { scale: 1.05, y: -5 },
                    className: `flex flex-col items-center justify-center gap-3 bg-card rounded-2xl p-6 shadow-md border border-border hover:shadow-xl hover:border-primary/50 transition-all group ${c.color}`,
                    children: [
                      S.jsx(f, {
                        className:
                          "w-8 h-8 text-primary group-hover:scale-110 transition-transform",
                      }),
                      S.jsx("span", {
                        className: "text-sm font-medium",
                        children: c.label,
                      }),
                    ],
                  },
                  c.label
                );
              }),
            }),
            S.jsxs(re.form, {
              initial: { opacity: 0, y: 30 },
              animate: t ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.6, delay: 0.4 },
              onSubmit: l,
              className:
                "bg-card rounded-2xl p-8 shadow-md border border-border space-y-6",
              children: [
                S.jsxs("div", {
                  className: "grid md:grid-cols-2 gap-6",
                  children: [
                    S.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        S.jsx("label", {
                          htmlFor: "name",
                          className: "text-sm font-medium",
                          children: "Nome",
                        }),
                        S.jsx(nd, {
                          id: "name",
                          name: "name",
                          type: "text",
                          placeholder: "Seu nome",
                          value: r.name,
                          onChange: u,
                          className:
                            "bg-background border-border focus:border-primary",
                          required: !0,
                        }),
                      ],
                    }),
                    S.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        S.jsx("label", {
                          htmlFor: "email",
                          className: "text-sm font-medium",
                          children: "Email",
                        }),
                        S.jsx(nd, {
                          id: "email",
                          name: "email",
                          type: "email",
                          placeholder: "seu@email.com",
                          value: r.email,
                          onChange: u,
                          className:
                            "bg-background border-border focus:border-primary",
                          required: !0,
                        }),
                      ],
                    }),
                  ],
                }),
                S.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    S.jsx("label", {
                      htmlFor: "message",
                      className: "text-sm font-medium",
                      children: "Mensagem",
                    }),
                    S.jsx(Qw, {
                      id: "message",
                      name: "message",
                      placeholder: "Conte-me sobre seu projeto...",
                      value: r.message,
                      onChange: u,
                      rows: 6,
                      className:
                        "bg-background border-border focus:border-primary resize-none",
                      required: !0,
                    }),
                  ],
                }),
                S.jsx(xn, {
                  type: "submit",
                  size: "lg",
                  className:
                    "w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all",
                  disabled: o,
                  children: o ? "Enviando..." : "Enviar mensagem",
                }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  qM = () =>
    S.jsx("footer", {
      className: "py-8 px-4 border-t border-border",
      children: S.jsx("div", {
        className: "container mx-auto max-w-6xl",
        children: S.jsxs("div", {
          className:
            "flex flex-col md:flex-row items-center justify-between gap-4",
          children: [
            S.jsxs("p", {
              className:
                "text-sm text-muted-foreground flex items-center gap-2",
              children: [
                "© ",
                new Date().getFullYear(),
                " Gabriel Alves. Feito com",
                " ",
                S.jsx(zC, { className: "w-4 h-4 text-primary fill-primary" }),
                " usando React e Tailwind.",
              ],
            }),
            S.jsx("div", {
              className: "flex gap-6",
              children: S.jsx("a", {
                href: "#inicio",
                className:
                  "text-sm text-muted-foreground hover:text-primary transition-colors",
                children: "Voltar ao topo",
              }),
            }),
          ],
        }),
      }),
    }),
  ZM = () => {
    const [e, t] = w.useState(!1);
    w.useEffect(() => {
      const r = () => {
        window.pageYOffset > 300 ? t(!0) : t(!1);
      };
      return (
        window.addEventListener("scroll", r),
        () => window.removeEventListener("scroll", r)
      );
    }, []);
    const n = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return S.jsx(eR, {
      children:
        e &&
        S.jsx(re.div, {
          initial: { opacity: 0, scale: 0.5 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.5 },
          className: "fixed bottom-8 right-8 z-50",
          children: S.jsx(xn, {
            size: "icon",
            onClick: n,
            className:
              "w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all",
            "aria-label": "Voltar ao topo",
            children: S.jsx(DC, { className: "w-5 h-5" }),
          }),
        }),
    });
  },
  JM = () =>
    S.jsxs("div", {
      className: "min-h-screen bg-background text-foreground",
      children: [
        S.jsx(IM, {}),
        S.jsxs("main", {
          children: [
            S.jsx(_M, {}),
            S.jsx(zM, {}),
            S.jsx(BM, {}),
            S.jsx(QM, {}),
            S.jsx(YM, {}),
            S.jsx(XM, {}),
          ],
        }),
        S.jsx(qM, {}),
        S.jsx(ZM, {}),
      ],
    }),
  eD = () => {
    const e = hx();
    return (
      w.useEffect(() => {
        console.error(
          "404 Error: User attempted to access non-existent route:",
          e.pathname
        );
      }, [e.pathname]),
      S.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-gray-100",
        children: S.jsxs("div", {
          className: "text-center",
          children: [
            S.jsx("h1", {
              className: "mb-4 text-4xl font-bold",
              children: "404",
            }),
            S.jsx("p", {
              className: "mb-4 text-xl text-gray-600",
              children: "Oops! Page not found",
            }),
            S.jsx("a", {
              href: "/",
              className: "text-blue-500 underline hover:text-blue-700",
              children: "Return to Home",
            }),
          ],
        }),
      })
    );
  },
  tD = new fk(),
  nD = () =>
    S.jsx(pk, {
      client: tD,
      children: S.jsxs($P, {
        children: [
          S.jsx(ZE, {}),
          S.jsx(rT, {}),
          S.jsx(Jk, {
            children: S.jsxs(Xk, {
              children: [
                S.jsx(jc, { path: "/", element: S.jsx(JM, {}) }),
                S.jsx(jc, { path: "*", element: S.jsx(eD, {}) }),
              ],
            }),
          }),
        ],
      }),
    });
Ov(document.getElementById("root")).render(S.jsx(nD, {}));
