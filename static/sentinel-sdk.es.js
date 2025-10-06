function Gv(u, c) {
  for (var s = 0; s < c.length; s++) {
    const r = c[s];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const d in r)
        if (d !== "default" && !(d in u)) {
          const m = Object.getOwnPropertyDescriptor(r, d);
          m && Object.defineProperty(u, d, m.get ? m : {
            enumerable: !0,
            get: () => r[d]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(u, Symbol.toStringTag, { value: "Module" }));
}
function Lv(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
var Qr = { exports: {} }, ee = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oh;
function Xv() {
  if (oh) return ee;
  oh = 1;
  var u = Symbol.for("react.transitional.element"), c = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), m = Symbol.for("react.consumer"), E = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), b = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), j = Symbol.iterator;
  function H(y) {
    return y === null || typeof y != "object" ? null : (y = j && y[j] || y["@@iterator"], typeof y == "function" ? y : null);
  }
  var Y = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, B = Object.assign, W = {};
  function k(y, N, G) {
    this.props = y, this.context = N, this.refs = W, this.updater = G || Y;
  }
  k.prototype.isReactComponent = {}, k.prototype.setState = function(y, N) {
    if (typeof y != "object" && typeof y != "function" && y != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, y, N, "setState");
  }, k.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate");
  };
  function fe() {
  }
  fe.prototype = k.prototype;
  function ce(y, N, G) {
    this.props = y, this.context = N, this.refs = W, this.updater = G || Y;
  }
  var I = ce.prototype = new fe();
  I.constructor = ce, B(I, k.prototype), I.isPureReactComponent = !0;
  var ie = Array.isArray, V = { H: null, A: null, T: null, S: null, V: null }, he = Object.prototype.hasOwnProperty;
  function me(y, N, G, C, Z, le) {
    return G = le.ref, {
      $$typeof: u,
      type: y,
      key: N,
      ref: G !== void 0 ? G : null,
      props: le
    };
  }
  function qe(y, N) {
    return me(
      y.type,
      N,
      void 0,
      void 0,
      void 0,
      y.props
    );
  }
  function Fe(y) {
    return typeof y == "object" && y !== null && y.$$typeof === u;
  }
  function ze(y) {
    var N = { "=": "=0", ":": "=2" };
    return "$" + y.replace(/[=:]/g, function(G) {
      return N[G];
    });
  }
  var Qe = /\/+/g;
  function we(y, N) {
    return typeof y == "object" && y !== null && y.key != null ? ze("" + y.key) : N.toString(36);
  }
  function He() {
  }
  function Pe(y) {
    switch (y.status) {
      case "fulfilled":
        return y.value;
      case "rejected":
        throw y.reason;
      default:
        switch (typeof y.status == "string" ? y.then(He, He) : (y.status = "pending", y.then(
          function(N) {
            y.status === "pending" && (y.status = "fulfilled", y.value = N);
          },
          function(N) {
            y.status === "pending" && (y.status = "rejected", y.reason = N);
          }
        )), y.status) {
          case "fulfilled":
            return y.value;
          case "rejected":
            throw y.reason;
        }
    }
    throw y;
  }
  function Oe(y, N, G, C, Z) {
    var le = typeof y;
    (le === "undefined" || le === "boolean") && (y = null);
    var P = !1;
    if (y === null) P = !0;
    else
      switch (le) {
        case "bigint":
        case "string":
        case "number":
          P = !0;
          break;
        case "object":
          switch (y.$$typeof) {
            case u:
            case c:
              P = !0;
              break;
            case w:
              return P = y._init, Oe(
                P(y._payload),
                N,
                G,
                C,
                Z
              );
          }
      }
    if (P)
      return Z = Z(y), P = C === "" ? "." + we(y, 0) : C, ie(Z) ? (G = "", P != null && (G = P.replace(Qe, "$&/") + "/"), Oe(Z, N, G, "", function(et) {
        return et;
      })) : Z != null && (Fe(Z) && (Z = qe(
        Z,
        G + (Z.key == null || y && y.key === Z.key ? "" : ("" + Z.key).replace(
          Qe,
          "$&/"
        ) + "/") + P
      )), N.push(Z)), 1;
    P = 0;
    var Ze = C === "" ? "." : C + ":";
    if (ie(y))
      for (var ve = 0; ve < y.length; ve++)
        C = y[ve], le = Ze + we(C, ve), P += Oe(
          C,
          N,
          G,
          le,
          Z
        );
    else if (ve = H(y), typeof ve == "function")
      for (y = ve.call(y), ve = 0; !(C = y.next()).done; )
        C = C.value, le = Ze + we(C, ve++), P += Oe(
          C,
          N,
          G,
          le,
          Z
        );
    else if (le === "object") {
      if (typeof y.then == "function")
        return Oe(
          Pe(y),
          N,
          G,
          C,
          Z
        );
      throw N = String(y), Error(
        "Objects are not valid as a React child (found: " + (N === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : N) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return P;
  }
  function M(y, N, G) {
    if (y == null) return y;
    var C = [], Z = 0;
    return Oe(y, C, "", "", function(le) {
      return N.call(G, le, Z++);
    }), C;
  }
  function q(y) {
    if (y._status === -1) {
      var N = y._result;
      N = N(), N.then(
        function(G) {
          (y._status === 0 || y._status === -1) && (y._status = 1, y._result = G);
        },
        function(G) {
          (y._status === 0 || y._status === -1) && (y._status = 2, y._result = G);
        }
      ), y._status === -1 && (y._status = 0, y._result = N);
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var Q = typeof reportError == "function" ? reportError : function(y) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var N = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y),
        error: y
      });
      if (!window.dispatchEvent(N)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", y);
      return;
    }
    console.error(y);
  };
  function re() {
  }
  return ee.Children = {
    map: M,
    forEach: function(y, N, G) {
      M(
        y,
        function() {
          N.apply(this, arguments);
        },
        G
      );
    },
    count: function(y) {
      var N = 0;
      return M(y, function() {
        N++;
      }), N;
    },
    toArray: function(y) {
      return M(y, function(N) {
        return N;
      }) || [];
    },
    only: function(y) {
      if (!Fe(y))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return y;
    }
  }, ee.Component = k, ee.Fragment = s, ee.Profiler = d, ee.PureComponent = ce, ee.StrictMode = r, ee.Suspense = v, ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = V, ee.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(y) {
      return V.H.useMemoCache(y);
    }
  }, ee.cache = function(y) {
    return function() {
      return y.apply(null, arguments);
    };
  }, ee.cloneElement = function(y, N, G) {
    if (y == null)
      throw Error(
        "The argument must be a React element, but you passed " + y + "."
      );
    var C = B({}, y.props), Z = y.key, le = void 0;
    if (N != null)
      for (P in N.ref !== void 0 && (le = void 0), N.key !== void 0 && (Z = "" + N.key), N)
        !he.call(N, P) || P === "key" || P === "__self" || P === "__source" || P === "ref" && N.ref === void 0 || (C[P] = N[P]);
    var P = arguments.length - 2;
    if (P === 1) C.children = G;
    else if (1 < P) {
      for (var Ze = Array(P), ve = 0; ve < P; ve++)
        Ze[ve] = arguments[ve + 2];
      C.children = Ze;
    }
    return me(y.type, Z, void 0, void 0, le, C);
  }, ee.createContext = function(y) {
    return y = {
      $$typeof: E,
      _currentValue: y,
      _currentValue2: y,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, y.Provider = y, y.Consumer = {
      $$typeof: m,
      _context: y
    }, y;
  }, ee.createElement = function(y, N, G) {
    var C, Z = {}, le = null;
    if (N != null)
      for (C in N.key !== void 0 && (le = "" + N.key), N)
        he.call(N, C) && C !== "key" && C !== "__self" && C !== "__source" && (Z[C] = N[C]);
    var P = arguments.length - 2;
    if (P === 1) Z.children = G;
    else if (1 < P) {
      for (var Ze = Array(P), ve = 0; ve < P; ve++)
        Ze[ve] = arguments[ve + 2];
      Z.children = Ze;
    }
    if (y && y.defaultProps)
      for (C in P = y.defaultProps, P)
        Z[C] === void 0 && (Z[C] = P[C]);
    return me(y, le, void 0, void 0, null, Z);
  }, ee.createRef = function() {
    return { current: null };
  }, ee.forwardRef = function(y) {
    return { $$typeof: S, render: y };
  }, ee.isValidElement = Fe, ee.lazy = function(y) {
    return {
      $$typeof: w,
      _payload: { _status: -1, _result: y },
      _init: q
    };
  }, ee.memo = function(y, N) {
    return {
      $$typeof: b,
      type: y,
      compare: N === void 0 ? null : N
    };
  }, ee.startTransition = function(y) {
    var N = V.T, G = {};
    V.T = G;
    try {
      var C = y(), Z = V.S;
      Z !== null && Z(G, C), typeof C == "object" && C !== null && typeof C.then == "function" && C.then(re, Q);
    } catch (le) {
      Q(le);
    } finally {
      V.T = N;
    }
  }, ee.unstable_useCacheRefresh = function() {
    return V.H.useCacheRefresh();
  }, ee.use = function(y) {
    return V.H.use(y);
  }, ee.useActionState = function(y, N, G) {
    return V.H.useActionState(y, N, G);
  }, ee.useCallback = function(y, N) {
    return V.H.useCallback(y, N);
  }, ee.useContext = function(y) {
    return V.H.useContext(y);
  }, ee.useDebugValue = function() {
  }, ee.useDeferredValue = function(y, N) {
    return V.H.useDeferredValue(y, N);
  }, ee.useEffect = function(y, N, G) {
    var C = V.H;
    if (typeof G == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return C.useEffect(y, N);
  }, ee.useId = function() {
    return V.H.useId();
  }, ee.useImperativeHandle = function(y, N, G) {
    return V.H.useImperativeHandle(y, N, G);
  }, ee.useInsertionEffect = function(y, N) {
    return V.H.useInsertionEffect(y, N);
  }, ee.useLayoutEffect = function(y, N) {
    return V.H.useLayoutEffect(y, N);
  }, ee.useMemo = function(y, N) {
    return V.H.useMemo(y, N);
  }, ee.useOptimistic = function(y, N) {
    return V.H.useOptimistic(y, N);
  }, ee.useReducer = function(y, N, G) {
    return V.H.useReducer(y, N, G);
  }, ee.useRef = function(y) {
    return V.H.useRef(y);
  }, ee.useState = function(y) {
    return V.H.useState(y);
  }, ee.useSyncExternalStore = function(y, N, G) {
    return V.H.useSyncExternalStore(
      y,
      N,
      G
    );
  }, ee.useTransition = function() {
    return V.H.useTransition();
  }, ee.version = "19.1.1", ee;
}
var dh;
function bi() {
  return dh || (dh = 1, Qr.exports = Xv()), Qr.exports;
}
var O = bi();
const F = /* @__PURE__ */ Lv(O), hh = /* @__PURE__ */ Gv({
  __proto__: null,
  default: F
}, [O]);
class Qv {
  sessionId;
  sessionToken;
  checkpointId;
  policy = {};
  mediaStreams;
  listeners;
  constructor(c, s) {
    this.sessionId = c, this.sessionToken = s, this.checkpointId = null, this.listeners = /* @__PURE__ */ new Map(), this.mediaStreams = {};
  }
  getSessionId() {
    return this.sessionId;
  }
  getSessionToken() {
    return this.sessionToken;
  }
  getCheckpointId() {
    return this.checkpointId;
  }
  getPolicy() {
    return this.policy;
  }
  getMediaStreams() {
    return this.mediaStreams;
  }
  setMediaStreams(c) {
    this.mediaStreams = c;
  }
  updateCheckpoint(c, s) {
    this.checkpointId = c ?? null, this.policy = { ...this.policy, ...s };
  }
  updatePolicy(c) {
    this.policy = c;
  }
  on(c, s) {
    const d = [...this.listeners.get(c) || [], s];
    this.listeners.set(c, d);
  }
  emit(c, s) {
    (this.listeners.get(c) || []).forEach((d) => d(s));
  }
}
class Zv {
}
class Vv extends Zv {
  async startCheckpoint(c) {
    console.log("ConsolePublisher.startCheckpoint", c);
  }
  async completeCheckpoint(c) {
    console.log("ConsolePublisher.completeCheckpoint", c);
  }
  async submitEvent(c) {
    return console.log("[EVENT]", c), `mock-${Date.now()}`;
  }
  async uploadArtifact(c, s, r, d) {
    console.log("[ARTIFACT]", { eventId: c, type: r, size: s.size, metadata: d });
  }
  async uploadSessionRecording(c, s, r) {
    console.log("[RECORDING]", { sessionId: c, checkpointId: s, size: r.size });
  }
}
class ss {
  onPolicyChange(c) {
  }
  onCheckpointChange(c) {
  }
}
class Bh {
  isRunning = !1;
  config;
  onAnomaly;
  updateConfig(c) {
    this.config = c;
  }
}
class kv extends Bh {
  constructor(c) {
    if (super(), !c)
      throw new Error("Webcam stream is required");
  }
  async start(c, s) {
    this.onAnomaly = c, this.updateConfig(s || { anomalyDetectionInterval: 1e3 }), this.isRunning = !0, console.log("WebcamDetector started", this.config);
  }
  stop() {
    this.isRunning = !1, console.log("WebcamDetector stopped");
  }
}
class Kv extends Bh {
  boundHandlers = {};
  async start(c) {
    this.onAnomaly = c, this.isRunning = !0, this.setupEventListeners(), console.log("BrowserDetector started");
  }
  stop() {
    this.isRunning = !1, this.removeEventListeners(), console.log("BrowserDetector stopped");
  }
  setupEventListeners() {
    this.boundHandlers.visibilityChange = this.handleVisibilityChange.bind(this), this.boundHandlers.windowBlur = this.handleWindowBlur.bind(this), this.boundHandlers.windowFocus = this.handleWindowFocus.bind(this), this.boundHandlers.keyDown = this.handleSpecialKeyPress.bind(this), document.addEventListener("visibilitychange", this.boundHandlers.visibilityChange), window.addEventListener("blur", this.boundHandlers.windowBlur), window.addEventListener("focus", this.boundHandlers.windowFocus), document.addEventListener("keydown", this.boundHandlers.keyDown);
  }
  removeEventListeners() {
    this.boundHandlers.visibilityChange && document.removeEventListener("visibilitychange", this.boundHandlers.visibilityChange), this.boundHandlers.windowBlur && window.removeEventListener("blur", this.boundHandlers.windowBlur), this.boundHandlers.windowFocus && window.removeEventListener("focus", this.boundHandlers.windowFocus), this.boundHandlers.keyDown && document.removeEventListener("keydown", this.boundHandlers.keyDown);
  }
  handleVisibilityChange() {
    document.hidden && this.isRunning && this.reportAnomaly("browser_tab_switch", "User switched tabs or minimized the window");
  }
  handleWindowBlur() {
    this.isRunning && setTimeout(() => {
      document.visibilityState === "visible" && this.reportAnomaly("browser_window_minimize", "Focus moved away from the course window");
    }, 0);
  }
  handleWindowFocus() {
  }
  handleSpecialKeyPress(c) {
    if (!this.isRunning) return;
    ["Control", "Alt", "Escape", "F1", "F2", "F3", "F4", "F6", "F7", "F8", "F9", "F10", "F12"].includes(c.key) && this.reportAnomaly("browser_special_key", "User pressed a restricted key");
  }
  reportAnomaly(c, s) {
    if (!this.onAnomaly || !this.isRunning) return;
    const r = {
      id: `browser_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`,
      type: c,
      // Type assertion since we're using string literals
      severity: "low",
      timestamp: Date.now(),
      metadata: {
        message: s,
        userAgent: navigator.userAgent,
        url: window.location.href
      }
    };
    this.onAnomaly(r);
  }
}
class $v extends ss {
  subDetectors;
  sessionState;
  publisher;
  constructor(c, s) {
    super(), this.sessionState = c, this.publisher = s, this.subDetectors = [
      new Kv()
    ];
    const r = c.getMediaStreams().webcam;
    r && this.subDetectors.unshift(new kv(r));
  }
  async start() {
    const c = (s) => this.handleAnomaly(s);
    for (const s of this.subDetectors)
      await s.start(c);
    this.sessionState.on("policyChanged", (s) => this.onPolicyChange(s)), console.log("AnomalyDetector started");
  }
  async stop() {
    for (const c of this.subDetectors)
      c.stop();
    console.log("AnomalyDetector stopped");
  }
  async pause() {
    for (const c of this.subDetectors)
      c.stop();
  }
  async resume() {
    for (const c of this.subDetectors)
      c.start(this.handleAnomaly);
  }
  onPolicyChange(c) {
    console.log("Policy changed", c);
  }
  async handleAnomaly(c) {
    c.id || (c.id = `anomaly_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`), Ul.getInstance().getUIEventBus().emitAnomalyDetected(c), this.publisher.submitEvent({
      sessionId: this.sessionState.getSessionId(),
      type: "anomaly",
      eventSource: "anomaly_detector",
      eventData: c,
      timestamp: c.timestamp,
      checkpointId: this.sessionState.getCheckpointId()
    });
  }
  // Add method to resolve anomalies
  resolveAnomaly(c) {
    Ul.getInstance().getUIEventBus().emitAnomalyResolved(c);
  }
}
class Jv extends ss {
  constructor(c, s) {
    super();
  }
  async start() {
  }
  async stop() {
  }
  pause() {
  }
  resume() {
  }
}
class Wv extends ss {
  constructor(c, s) {
    super();
  }
  async start() {
  }
  async stop() {
  }
  pause() {
  }
  resume() {
  }
}
async function Fv() {
  return navigator.mediaDevices.getUserMedia({ video: !0, audio: !0 });
}
async function Pv() {
  return navigator.mediaDevices.getUserMedia({ audio: !0 });
}
class Iv {
  sessionState;
  publisher;
  modules;
  sdk;
  constructor(c, s, r) {
    this.sessionState = new Qv(c, s), this.publisher = this.createPublisher(), this.modules = [], this.sdk = Ul.getInstance(), this.sessionState.updatePolicy(r || {});
  }
  createPublisher() {
    return new Vv();
  }
  initModules() {
    const c = this.sessionState.getPolicy();
    c.anomalyDetection && this.modules.push(new $v(this.sessionState, this.publisher)), c.snapshot_enabled && this.modules.push(new Jv(this.sessionState, this.publisher)), c.recording_enabled && this.modules.push(new Wv(this.sessionState, this.publisher));
  }
  /**
   * Start the proctoring session
   */
  async start() {
    this.sdk.getUIEventBus().emit("showSetup", {
      onComplete: async () => {
        const c = await Fv(), s = await Pv();
        this.sessionState.setMediaStreams({
          webcam: c,
          microphone: s
        }), this.sdk.getUIEventBus().emit("showWebcam", { stream: this.sessionState.getMediaStreams().webcam }), this.initModules();
        for (const r of this.modules)
          await r.start();
        console.log("Setup complete");
      },
      onCancel: () => {
        console.log("Setup cancelled");
      }
    });
  }
  /**
   * Get the current policies
   */
  getCurrentPolicies() {
    return this.sessionState.getPolicy();
  }
  /**
   * Set a checkpoint within the ongoing session
   * @param checkpointId - Unique checkpoint identifier
   * @param overridePolicies - Optional policy overrides for this checkpoint
   */
  async setCheckpoint(c, s) {
    if (!c || typeof c != "string")
      throw new Error("Checkpoint ID must be a valid string");
    await this.publisher.startCheckpoint(c), this.sessionState.updateCheckpoint(c, s);
  }
  /**
   * Complete a checkpoint in the current session
   * @param checkpointId - Checkpoint identifier to complete
   */
  async completeCheckpoint(c) {
    if (!c || typeof c != "string")
      throw new Error("Checkpoint ID must be a valid string");
    await this.publisher.completeCheckpoint(c), this.sessionState.updateCheckpoint(null);
  }
  /**
   * Capture a custom event during the session
   * @param event - Event name/type
   * @param eventData - Event data payload
   */
  async capture(c, s) {
    if (!c || typeof c != "string")
      throw new Error("Event must be a valid string");
    await this.publisher.submitEvent({
      sessionId: this.sessionState.getSessionId(),
      type: "custom",
      eventSource: "custom",
      eventData: s,
      timestamp: Date.now(),
      checkpointId: this.sessionState.getCheckpointId()
    });
  }
  /**
   * Stop the proctoring session
   */
  async stop() {
    for (const c of this.modules)
      await c.stop();
    this.sdk.getUIEventBus().emit("hideWebcam");
  }
}
var Zr = { exports: {} }, La = {}, Vr = { exports: {} }, kr = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mh;
function ey() {
  return mh || (mh = 1, (function(u) {
    function c(M, q) {
      var Q = M.length;
      M.push(q);
      e: for (; 0 < Q; ) {
        var re = Q - 1 >>> 1, y = M[re];
        if (0 < d(y, q))
          M[re] = q, M[Q] = y, Q = re;
        else break e;
      }
    }
    function s(M) {
      return M.length === 0 ? null : M[0];
    }
    function r(M) {
      if (M.length === 0) return null;
      var q = M[0], Q = M.pop();
      if (Q !== q) {
        M[0] = Q;
        e: for (var re = 0, y = M.length, N = y >>> 1; re < N; ) {
          var G = 2 * (re + 1) - 1, C = M[G], Z = G + 1, le = M[Z];
          if (0 > d(C, Q))
            Z < y && 0 > d(le, C) ? (M[re] = le, M[Z] = Q, re = Z) : (M[re] = C, M[G] = Q, re = G);
          else if (Z < y && 0 > d(le, Q))
            M[re] = le, M[Z] = Q, re = Z;
          else break e;
        }
      }
      return q;
    }
    function d(M, q) {
      var Q = M.sortIndex - q.sortIndex;
      return Q !== 0 ? Q : M.id - q.id;
    }
    if (u.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var m = performance;
      u.unstable_now = function() {
        return m.now();
      };
    } else {
      var E = Date, S = E.now();
      u.unstable_now = function() {
        return E.now() - S;
      };
    }
    var v = [], b = [], w = 1, j = null, H = 3, Y = !1, B = !1, W = !1, k = !1, fe = typeof setTimeout == "function" ? setTimeout : null, ce = typeof clearTimeout == "function" ? clearTimeout : null, I = typeof setImmediate < "u" ? setImmediate : null;
    function ie(M) {
      for (var q = s(b); q !== null; ) {
        if (q.callback === null) r(b);
        else if (q.startTime <= M)
          r(b), q.sortIndex = q.expirationTime, c(v, q);
        else break;
        q = s(b);
      }
    }
    function V(M) {
      if (W = !1, ie(M), !B)
        if (s(v) !== null)
          B = !0, he || (he = !0, we());
        else {
          var q = s(b);
          q !== null && Oe(V, q.startTime - M);
        }
    }
    var he = !1, me = -1, qe = 5, Fe = -1;
    function ze() {
      return k ? !0 : !(u.unstable_now() - Fe < qe);
    }
    function Qe() {
      if (k = !1, he) {
        var M = u.unstable_now();
        Fe = M;
        var q = !0;
        try {
          e: {
            B = !1, W && (W = !1, ce(me), me = -1), Y = !0;
            var Q = H;
            try {
              t: {
                for (ie(M), j = s(v); j !== null && !(j.expirationTime > M && ze()); ) {
                  var re = j.callback;
                  if (typeof re == "function") {
                    j.callback = null, H = j.priorityLevel;
                    var y = re(
                      j.expirationTime <= M
                    );
                    if (M = u.unstable_now(), typeof y == "function") {
                      j.callback = y, ie(M), q = !0;
                      break t;
                    }
                    j === s(v) && r(v), ie(M);
                  } else r(v);
                  j = s(v);
                }
                if (j !== null) q = !0;
                else {
                  var N = s(b);
                  N !== null && Oe(
                    V,
                    N.startTime - M
                  ), q = !1;
                }
              }
              break e;
            } finally {
              j = null, H = Q, Y = !1;
            }
            q = void 0;
          }
        } finally {
          q ? we() : he = !1;
        }
      }
    }
    var we;
    if (typeof I == "function")
      we = function() {
        I(Qe);
      };
    else if (typeof MessageChannel < "u") {
      var He = new MessageChannel(), Pe = He.port2;
      He.port1.onmessage = Qe, we = function() {
        Pe.postMessage(null);
      };
    } else
      we = function() {
        fe(Qe, 0);
      };
    function Oe(M, q) {
      me = fe(function() {
        M(u.unstable_now());
      }, q);
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(M) {
      M.callback = null;
    }, u.unstable_forceFrameRate = function(M) {
      0 > M || 125 < M ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : qe = 0 < M ? Math.floor(1e3 / M) : 5;
    }, u.unstable_getCurrentPriorityLevel = function() {
      return H;
    }, u.unstable_next = function(M) {
      switch (H) {
        case 1:
        case 2:
        case 3:
          var q = 3;
          break;
        default:
          q = H;
      }
      var Q = H;
      H = q;
      try {
        return M();
      } finally {
        H = Q;
      }
    }, u.unstable_requestPaint = function() {
      k = !0;
    }, u.unstable_runWithPriority = function(M, q) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var Q = H;
      H = M;
      try {
        return q();
      } finally {
        H = Q;
      }
    }, u.unstable_scheduleCallback = function(M, q, Q) {
      var re = u.unstable_now();
      switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? re + Q : re) : Q = re, M) {
        case 1:
          var y = -1;
          break;
        case 2:
          y = 250;
          break;
        case 5:
          y = 1073741823;
          break;
        case 4:
          y = 1e4;
          break;
        default:
          y = 5e3;
      }
      return y = Q + y, M = {
        id: w++,
        callback: q,
        priorityLevel: M,
        startTime: Q,
        expirationTime: y,
        sortIndex: -1
      }, Q > re ? (M.sortIndex = Q, c(b, M), s(v) === null && M === s(b) && (W ? (ce(me), me = -1) : W = !0, Oe(V, Q - re))) : (M.sortIndex = y, c(v, M), B || Y || (B = !0, he || (he = !0, we()))), M;
    }, u.unstable_shouldYield = ze, u.unstable_wrapCallback = function(M) {
      var q = H;
      return function() {
        var Q = H;
        H = q;
        try {
          return M.apply(this, arguments);
        } finally {
          H = Q;
        }
      };
    };
  })(kr)), kr;
}
var vh;
function ty() {
  return vh || (vh = 1, Vr.exports = ey()), Vr.exports;
}
var Kr = { exports: {} }, We = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yh;
function ly() {
  if (yh) return We;
  yh = 1;
  var u = bi();
  function c(v) {
    var b = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      b += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var w = 2; w < arguments.length; w++)
        b += "&args[]=" + encodeURIComponent(arguments[w]);
    }
    return "Minified React error #" + v + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s() {
  }
  var r = {
    d: {
      f: s,
      r: function() {
        throw Error(c(522));
      },
      D: s,
      C: s,
      L: s,
      m: s,
      X: s,
      S: s,
      M: s
    },
    p: 0,
    findDOMNode: null
  }, d = Symbol.for("react.portal");
  function m(v, b, w) {
    var j = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: d,
      key: j == null ? null : "" + j,
      children: v,
      containerInfo: b,
      implementation: w
    };
  }
  var E = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function S(v, b) {
    if (v === "font") return "";
    if (typeof b == "string")
      return b === "use-credentials" ? b : "";
  }
  return We.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, We.createPortal = function(v, b) {
    var w = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!b || b.nodeType !== 1 && b.nodeType !== 9 && b.nodeType !== 11)
      throw Error(c(299));
    return m(v, b, null, w);
  }, We.flushSync = function(v) {
    var b = E.T, w = r.p;
    try {
      if (E.T = null, r.p = 2, v) return v();
    } finally {
      E.T = b, r.p = w, r.d.f();
    }
  }, We.preconnect = function(v, b) {
    typeof v == "string" && (b ? (b = b.crossOrigin, b = typeof b == "string" ? b === "use-credentials" ? b : "" : void 0) : b = null, r.d.C(v, b));
  }, We.prefetchDNS = function(v) {
    typeof v == "string" && r.d.D(v);
  }, We.preinit = function(v, b) {
    if (typeof v == "string" && b && typeof b.as == "string") {
      var w = b.as, j = S(w, b.crossOrigin), H = typeof b.integrity == "string" ? b.integrity : void 0, Y = typeof b.fetchPriority == "string" ? b.fetchPriority : void 0;
      w === "style" ? r.d.S(
        v,
        typeof b.precedence == "string" ? b.precedence : void 0,
        {
          crossOrigin: j,
          integrity: H,
          fetchPriority: Y
        }
      ) : w === "script" && r.d.X(v, {
        crossOrigin: j,
        integrity: H,
        fetchPriority: Y,
        nonce: typeof b.nonce == "string" ? b.nonce : void 0
      });
    }
  }, We.preinitModule = function(v, b) {
    if (typeof v == "string")
      if (typeof b == "object" && b !== null) {
        if (b.as == null || b.as === "script") {
          var w = S(
            b.as,
            b.crossOrigin
          );
          r.d.M(v, {
            crossOrigin: w,
            integrity: typeof b.integrity == "string" ? b.integrity : void 0,
            nonce: typeof b.nonce == "string" ? b.nonce : void 0
          });
        }
      } else b == null && r.d.M(v);
  }, We.preload = function(v, b) {
    if (typeof v == "string" && typeof b == "object" && b !== null && typeof b.as == "string") {
      var w = b.as, j = S(w, b.crossOrigin);
      r.d.L(v, w, {
        crossOrigin: j,
        integrity: typeof b.integrity == "string" ? b.integrity : void 0,
        nonce: typeof b.nonce == "string" ? b.nonce : void 0,
        type: typeof b.type == "string" ? b.type : void 0,
        fetchPriority: typeof b.fetchPriority == "string" ? b.fetchPriority : void 0,
        referrerPolicy: typeof b.referrerPolicy == "string" ? b.referrerPolicy : void 0,
        imageSrcSet: typeof b.imageSrcSet == "string" ? b.imageSrcSet : void 0,
        imageSizes: typeof b.imageSizes == "string" ? b.imageSizes : void 0,
        media: typeof b.media == "string" ? b.media : void 0
      });
    }
  }, We.preloadModule = function(v, b) {
    if (typeof v == "string")
      if (b) {
        var w = S(b.as, b.crossOrigin);
        r.d.m(v, {
          as: typeof b.as == "string" && b.as !== "script" ? b.as : void 0,
          crossOrigin: w,
          integrity: typeof b.integrity == "string" ? b.integrity : void 0
        });
      } else r.d.m(v);
  }, We.requestFormReset = function(v) {
    r.d.r(v);
  }, We.unstable_batchedUpdates = function(v, b) {
    return v(b);
  }, We.useFormState = function(v, b, w) {
    return E.H.useFormState(v, b, w);
  }, We.useFormStatus = function() {
    return E.H.useHostTransitionStatus();
  }, We.version = "19.1.1", We;
}
var gh;
function qh() {
  if (gh) return Kr.exports;
  gh = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (c) {
        console.error(c);
      }
  }
  return u(), Kr.exports = ly(), Kr.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bh;
function ny() {
  if (bh) return La;
  bh = 1;
  var u = ty(), c = bi(), s = qh();
  function r(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        t += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function d(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function m(e) {
    var t = e, l = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (l = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? l : null;
  }
  function E(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function S(e) {
    if (m(e) !== e)
      throw Error(r(188));
  }
  function v(e) {
    var t = e.alternate;
    if (!t) {
      if (t = m(e), t === null) throw Error(r(188));
      return t !== e ? null : e;
    }
    for (var l = e, n = t; ; ) {
      var a = l.return;
      if (a === null) break;
      var i = a.alternate;
      if (i === null) {
        if (n = a.return, n !== null) {
          l = n;
          continue;
        }
        break;
      }
      if (a.child === i.child) {
        for (i = a.child; i; ) {
          if (i === l) return S(a), e;
          if (i === n) return S(a), t;
          i = i.sibling;
        }
        throw Error(r(188));
      }
      if (l.return !== n.return) l = a, n = i;
      else {
        for (var f = !1, o = a.child; o; ) {
          if (o === l) {
            f = !0, l = a, n = i;
            break;
          }
          if (o === n) {
            f = !0, n = a, l = i;
            break;
          }
          o = o.sibling;
        }
        if (!f) {
          for (o = i.child; o; ) {
            if (o === l) {
              f = !0, l = i, n = a;
              break;
            }
            if (o === n) {
              f = !0, n = i, l = a;
              break;
            }
            o = o.sibling;
          }
          if (!f) throw Error(r(189));
        }
      }
      if (l.alternate !== n) throw Error(r(190));
    }
    if (l.tag !== 3) throw Error(r(188));
    return l.stateNode.current === l ? e : t;
  }
  function b(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = b(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var w = Object.assign, j = Symbol.for("react.element"), H = Symbol.for("react.transitional.element"), Y = Symbol.for("react.portal"), B = Symbol.for("react.fragment"), W = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), fe = Symbol.for("react.provider"), ce = Symbol.for("react.consumer"), I = Symbol.for("react.context"), ie = Symbol.for("react.forward_ref"), V = Symbol.for("react.suspense"), he = Symbol.for("react.suspense_list"), me = Symbol.for("react.memo"), qe = Symbol.for("react.lazy"), Fe = Symbol.for("react.activity"), ze = Symbol.for("react.memo_cache_sentinel"), Qe = Symbol.iterator;
  function we(e) {
    return e === null || typeof e != "object" ? null : (e = Qe && e[Qe] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var He = Symbol.for("react.client.reference");
  function Pe(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === He ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case B:
        return "Fragment";
      case k:
        return "Profiler";
      case W:
        return "StrictMode";
      case V:
        return "Suspense";
      case he:
        return "SuspenseList";
      case Fe:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Y:
          return "Portal";
        case I:
          return (e.displayName || "Context") + ".Provider";
        case ce:
          return (e._context.displayName || "Context") + ".Consumer";
        case ie:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case me:
          return t = e.displayName || null, t !== null ? t : Pe(e.type) || "Memo";
        case qe:
          t = e._payload, e = e._init;
          try {
            return Pe(e(t));
          } catch {
          }
      }
    return null;
  }
  var Oe = Array.isArray, M = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, re = [], y = -1;
  function N(e) {
    return { current: e };
  }
  function G(e) {
    0 > y || (e.current = re[y], re[y] = null, y--);
  }
  function C(e, t) {
    y++, re[y] = e.current, e.current = t;
  }
  var Z = N(null), le = N(null), P = N(null), Ze = N(null);
  function ve(e, t) {
    switch (C(P, t), C(le, e), C(Z, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Yd(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Yd(t), e = Gd(t, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    G(Z), C(Z, e);
  }
  function et() {
    G(Z), G(le), G(P);
  }
  function Mi(e) {
    e.memoizedState !== null && C(Ze, e);
    var t = Z.current, l = Gd(t, e.type);
    t !== l && (C(le, e), C(Z, l));
  }
  function Pa(e) {
    le.current === e && (G(Z), G(le)), Ze.current === e && (G(Ze), ja._currentValue = Q);
  }
  var _i = Object.prototype.hasOwnProperty, zi = u.unstable_scheduleCallback, Ri = u.unstable_cancelCallback, bm = u.unstable_shouldYield, pm = u.unstable_requestPaint, Nt = u.unstable_now, Sm = u.unstable_getCurrentPriorityLevel, gs = u.unstable_ImmediatePriority, bs = u.unstable_UserBlockingPriority, Ia = u.unstable_NormalPriority, Em = u.unstable_LowPriority, ps = u.unstable_IdlePriority, Tm = u.log, Am = u.unstable_setDisableYieldValue, Zn = null, rt = null;
  function il(e) {
    if (typeof Tm == "function" && Am(e), rt && typeof rt.setStrictMode == "function")
      try {
        rt.setStrictMode(Zn, e);
      } catch {
      }
  }
  var st = Math.clz32 ? Math.clz32 : wm, xm = Math.log, Dm = Math.LN2;
  function wm(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (xm(e) / Dm | 0) | 0;
  }
  var eu = 256, tu = 4194304;
  function Hl(e) {
    var t = e & 42;
    if (t !== 0) return t;
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
        return 64;
      case 128:
        return 128;
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
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function lu(e, t, l) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var a = 0, i = e.suspendedLanes, f = e.pingedLanes;
    e = e.warmLanes;
    var o = n & 134217727;
    return o !== 0 ? (n = o & ~i, n !== 0 ? a = Hl(n) : (f &= o, f !== 0 ? a = Hl(f) : l || (l = o & ~e, l !== 0 && (a = Hl(l))))) : (o = n & ~i, o !== 0 ? a = Hl(o) : f !== 0 ? a = Hl(f) : l || (l = n & ~e, l !== 0 && (a = Hl(l)))), a === 0 ? 0 : t !== 0 && t !== a && (t & i) === 0 && (i = a & -a, l = t & -t, i >= l || i === 32 && (l & 4194048) !== 0) ? t : a;
  }
  function Vn(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Om(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
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
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ss() {
    var e = eu;
    return eu <<= 1, (eu & 4194048) === 0 && (eu = 256), e;
  }
  function Es() {
    var e = tu;
    return tu <<= 1, (tu & 62914560) === 0 && (tu = 4194304), e;
  }
  function Ni(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function kn(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Mm(e, t, l, n, a, i) {
    var f = e.pendingLanes;
    e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
    var o = e.entanglements, h = e.expirationTimes, A = e.hiddenUpdates;
    for (l = f & ~l; 0 < l; ) {
      var _ = 31 - st(l), R = 1 << _;
      o[_] = 0, h[_] = -1;
      var x = A[_];
      if (x !== null)
        for (A[_] = null, _ = 0; _ < x.length; _++) {
          var D = x[_];
          D !== null && (D.lane &= -536870913);
        }
      l &= ~R;
    }
    n !== 0 && Ts(e, n, 0), i !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(f & ~t));
  }
  function Ts(e, t, l) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var n = 31 - st(t);
    e.entangledLanes |= t, e.entanglements[n] = e.entanglements[n] | 1073741824 | l & 4194090;
  }
  function As(e, t) {
    var l = e.entangledLanes |= t;
    for (e = e.entanglements; l; ) {
      var n = 31 - st(l), a = 1 << n;
      a & t | e[n] & t && (e[n] |= t), l &= ~a;
    }
  }
  function Ui(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
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
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Ci(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function xs() {
    var e = q.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : uh(e.type));
  }
  function _m(e, t) {
    var l = q.p;
    try {
      return q.p = e, t();
    } finally {
      q.p = l;
    }
  }
  var cl = Math.random().toString(36).slice(2), $e = "__reactFiber$" + cl, tt = "__reactProps$" + cl, an = "__reactContainer$" + cl, Hi = "__reactEvents$" + cl, zm = "__reactListeners$" + cl, Rm = "__reactHandles$" + cl, Ds = "__reactResources$" + cl, Kn = "__reactMarker$" + cl;
  function ji(e) {
    delete e[$e], delete e[tt], delete e[Hi], delete e[zm], delete e[Rm];
  }
  function un(e) {
    var t = e[$e];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if (t = l[an] || l[$e]) {
        if (l = t.alternate, t.child !== null || l !== null && l.child !== null)
          for (e = Zd(e); e !== null; ) {
            if (l = e[$e]) return l;
            e = Zd(e);
          }
        return t;
      }
      e = l, l = e.parentNode;
    }
    return null;
  }
  function cn(e) {
    if (e = e[$e] || e[an]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function $n(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(r(33));
  }
  function rn(e) {
    var t = e[Ds];
    return t || (t = e[Ds] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Ye(e) {
    e[Kn] = !0;
  }
  var ws = /* @__PURE__ */ new Set(), Os = {};
  function jl(e, t) {
    sn(e, t), sn(e + "Capture", t);
  }
  function sn(e, t) {
    for (Os[e] = t, e = 0; e < t.length; e++)
      ws.add(t[e]);
  }
  var Nm = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Ms = {}, _s = {};
  function Um(e) {
    return _i.call(_s, e) ? !0 : _i.call(Ms, e) ? !1 : Nm.test(e) ? _s[e] = !0 : (Ms[e] = !0, !1);
  }
  function nu(e, t, l) {
    if (Um(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var n = t.toLowerCase().slice(0, 5);
            if (n !== "data-" && n !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + l);
      }
  }
  function au(e, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + l);
    }
  }
  function Lt(e, t, l, n) {
    if (n === null) e.removeAttribute(l);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(t, l, "" + n);
    }
  }
  var Bi, zs;
  function fn(e) {
    if (Bi === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        Bi = t && t[1] || "", zs = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Bi + e + zs;
  }
  var qi = !1;
  function Yi(e, t) {
    if (!e || qi) return "";
    qi = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var R = function() {
                throw Error();
              };
              if (Object.defineProperty(R.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(R, []);
                } catch (D) {
                  var x = D;
                }
                Reflect.construct(e, [], R);
              } else {
                try {
                  R.call();
                } catch (D) {
                  x = D;
                }
                e.call(R.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (D) {
                x = D;
              }
              (R = e()) && typeof R.catch == "function" && R.catch(function() {
              });
            }
          } catch (D) {
            if (D && x && typeof D.stack == "string")
              return [D.stack, x.stack];
          }
          return [null, null];
        }
      };
      n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var a = Object.getOwnPropertyDescriptor(
        n.DetermineComponentFrameRoot,
        "name"
      );
      a && a.configurable && Object.defineProperty(
        n.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var i = n.DetermineComponentFrameRoot(), f = i[0], o = i[1];
      if (f && o) {
        var h = f.split(`
`), A = o.split(`
`);
        for (a = n = 0; n < h.length && !h[n].includes("DetermineComponentFrameRoot"); )
          n++;
        for (; a < A.length && !A[a].includes(
          "DetermineComponentFrameRoot"
        ); )
          a++;
        if (n === h.length || a === A.length)
          for (n = h.length - 1, a = A.length - 1; 1 <= n && 0 <= a && h[n] !== A[a]; )
            a--;
        for (; 1 <= n && 0 <= a; n--, a--)
          if (h[n] !== A[a]) {
            if (n !== 1 || a !== 1)
              do
                if (n--, a--, 0 > a || h[n] !== A[a]) {
                  var _ = `
` + h[n].replace(" at new ", " at ");
                  return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), _;
                }
              while (1 <= n && 0 <= a);
            break;
          }
      }
    } finally {
      qi = !1, Error.prepareStackTrace = l;
    }
    return (l = e ? e.displayName || e.name : "") ? fn(l) : "";
  }
  function Cm(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return fn(e.type);
      case 16:
        return fn("Lazy");
      case 13:
        return fn("Suspense");
      case 19:
        return fn("SuspenseList");
      case 0:
      case 15:
        return Yi(e.type, !1);
      case 11:
        return Yi(e.type.render, !1);
      case 1:
        return Yi(e.type, !0);
      case 31:
        return fn("Activity");
      default:
        return "";
    }
  }
  function Rs(e) {
    try {
      var t = "";
      do
        t += Cm(e), e = e.return;
      while (e);
      return t;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  function gt(e) {
    switch (typeof e) {
      case "bigint":
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
  function Ns(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Hm(e) {
    var t = Ns(e) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    ), n = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var a = l.get, i = l.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return a.call(this);
        },
        set: function(f) {
          n = "" + f, i.call(this, f);
        }
      }), Object.defineProperty(e, t, {
        enumerable: l.enumerable
      }), {
        getValue: function() {
          return n;
        },
        setValue: function(f) {
          n = "" + f;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function uu(e) {
    e._valueTracker || (e._valueTracker = Hm(e));
  }
  function Us(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(), n = "";
    return e && (n = Ns(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== l ? (t.setValue(e), !0) : !1;
  }
  function iu(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var jm = /[\n"\\]/g;
  function bt(e) {
    return e.replace(
      jm,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Gi(e, t, l, n, a, i, f, o) {
    e.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.type = f : e.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + gt(t)) : e.value !== "" + gt(t) && (e.value = "" + gt(t)) : f !== "submit" && f !== "reset" || e.removeAttribute("value"), t != null ? Li(e, f, gt(t)) : l != null ? Li(e, f, gt(l)) : n != null && e.removeAttribute("value"), a == null && i != null && (e.defaultChecked = !!i), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? e.name = "" + gt(o) : e.removeAttribute("name");
  }
  function Cs(e, t, l, n, a, i, f, o) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || l != null) {
      if (!(i !== "submit" && i !== "reset" || t != null))
        return;
      l = l != null ? "" + gt(l) : "", t = t != null ? "" + gt(t) : l, o || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = n ?? a, n = typeof n != "function" && typeof n != "symbol" && !!n, e.checked = o ? e.checked : !!n, e.defaultChecked = !!n, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.name = f);
  }
  function Li(e, t, l) {
    t === "number" && iu(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
  }
  function on(e, t, l, n) {
    if (e = e.options, t) {
      t = {};
      for (var a = 0; a < l.length; a++)
        t["$" + l[a]] = !0;
      for (l = 0; l < e.length; l++)
        a = t.hasOwnProperty("$" + e[l].value), e[l].selected !== a && (e[l].selected = a), a && n && (e[l].defaultSelected = !0);
    } else {
      for (l = "" + gt(l), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === l) {
          e[a].selected = !0, n && (e[a].defaultSelected = !0);
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Hs(e, t, l) {
    if (t != null && (t = "" + gt(t), t !== e.value && (e.value = t), l == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + gt(l) : "";
  }
  function js(e, t, l, n) {
    if (t == null) {
      if (n != null) {
        if (l != null) throw Error(r(92));
        if (Oe(n)) {
          if (1 < n.length) throw Error(r(93));
          n = n[0];
        }
        l = n;
      }
      l == null && (l = ""), t = l;
    }
    l = gt(t), e.defaultValue = l, n = e.textContent, n === l && n !== "" && n !== null && (e.value = n);
  }
  function dn(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Bm = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Bs(e, t, l) {
    var n = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? n ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : n ? e.setProperty(t, l) : typeof l != "number" || l === 0 || Bm.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
  }
  function qs(e, t, l) {
    if (t != null && typeof t != "object")
      throw Error(r(62));
    if (e = e.style, l != null) {
      for (var n in l)
        !l.hasOwnProperty(n) || t != null && t.hasOwnProperty(n) || (n.indexOf("--") === 0 ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "");
      for (var a in t)
        n = t[a], t.hasOwnProperty(a) && l[a] !== n && Bs(e, a, n);
    } else
      for (var i in t)
        t.hasOwnProperty(i) && Bs(e, i, t[i]);
  }
  function Xi(e) {
    if (e.indexOf("-") === -1) return !1;
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
  var qm = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Ym = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function cu(e) {
    return Ym.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var Qi = null;
  function Zi(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var hn = null, mn = null;
  function Ys(e) {
    var t = cn(e);
    if (t && (e = t.stateNode)) {
      var l = e[tt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Gi(
            e,
            l.value,
            l.defaultValue,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name
          ), t = l.name, l.type === "radio" && t != null) {
            for (l = e; l.parentNode; ) l = l.parentNode;
            for (l = l.querySelectorAll(
              'input[name="' + bt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < l.length; t++) {
              var n = l[t];
              if (n !== e && n.form === e.form) {
                var a = n[tt] || null;
                if (!a) throw Error(r(90));
                Gi(
                  n,
                  a.value,
                  a.defaultValue,
                  a.defaultValue,
                  a.checked,
                  a.defaultChecked,
                  a.type,
                  a.name
                );
              }
            }
            for (t = 0; t < l.length; t++)
              n = l[t], n.form === e.form && Us(n);
          }
          break e;
        case "textarea":
          Hs(e, l.value, l.defaultValue);
          break e;
        case "select":
          t = l.value, t != null && on(e, !!l.multiple, t, !1);
      }
    }
  }
  var Vi = !1;
  function Gs(e, t, l) {
    if (Vi) return e(t, l);
    Vi = !0;
    try {
      var n = e(t);
      return n;
    } finally {
      if (Vi = !1, (hn !== null || mn !== null) && (ku(), hn && (t = hn, e = mn, mn = hn = null, Ys(t), e)))
        for (t = 0; t < e.length; t++) Ys(e[t]);
    }
  }
  function Jn(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var n = l[tt] || null;
    if (n === null) return null;
    l = n[t];
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
        (n = !n.disabled) || (e = e.type, n = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !n;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != "function")
      throw Error(
        r(231, t, typeof l)
      );
    return l;
  }
  var Xt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ki = !1;
  if (Xt)
    try {
      var Wn = {};
      Object.defineProperty(Wn, "passive", {
        get: function() {
          ki = !0;
        }
      }), window.addEventListener("test", Wn, Wn), window.removeEventListener("test", Wn, Wn);
    } catch {
      ki = !1;
    }
  var rl = null, Ki = null, ru = null;
  function Ls() {
    if (ru) return ru;
    var e, t = Ki, l = t.length, n, a = "value" in rl ? rl.value : rl.textContent, i = a.length;
    for (e = 0; e < l && t[e] === a[e]; e++) ;
    var f = l - e;
    for (n = 1; n <= f && t[l - n] === a[i - n]; n++) ;
    return ru = a.slice(e, 1 < n ? 1 - n : void 0);
  }
  function su(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function fu() {
    return !0;
  }
  function Xs() {
    return !1;
  }
  function lt(e) {
    function t(l, n, a, i, f) {
      this._reactName = l, this._targetInst = a, this.type = n, this.nativeEvent = i, this.target = f, this.currentTarget = null;
      for (var o in e)
        e.hasOwnProperty(o) && (l = e[o], this[o] = l ? l(i) : i[o]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? fu : Xs, this.isPropagationStopped = Xs, this;
    }
    return w(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = fu);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = fu);
      },
      persist: function() {
      },
      isPersistent: fu
    }), t;
  }
  var Bl = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, ou = lt(Bl), Fn = w({}, Bl, { view: 0, detail: 0 }), Gm = lt(Fn), $i, Ji, Pn, du = w({}, Fn, {
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
    getModifierState: Fi,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Pn && (Pn && e.type === "mousemove" ? ($i = e.screenX - Pn.screenX, Ji = e.screenY - Pn.screenY) : Ji = $i = 0, Pn = e), $i);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Ji;
    }
  }), Qs = lt(du), Lm = w({}, du, { dataTransfer: 0 }), Xm = lt(Lm), Qm = w({}, Fn, { relatedTarget: 0 }), Wi = lt(Qm), Zm = w({}, Bl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Vm = lt(Zm), km = w({}, Bl, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Km = lt(km), $m = w({}, Bl, { data: 0 }), Zs = lt($m), Jm = {
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
    MozPrintableKey: "Unidentified"
  }, Wm = {
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
    224: "Meta"
  }, Fm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Pm(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Fm[e]) ? !!t[e] : !1;
  }
  function Fi() {
    return Pm;
  }
  var Im = w({}, Fn, {
    key: function(e) {
      if (e.key) {
        var t = Jm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = su(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Wm[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Fi,
    charCode: function(e) {
      return e.type === "keypress" ? su(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? su(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), e0 = lt(Im), t0 = w({}, du, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Vs = lt(t0), l0 = w({}, Fn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Fi
  }), n0 = lt(l0), a0 = w({}, Bl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), u0 = lt(a0), i0 = w({}, du, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), c0 = lt(i0), r0 = w({}, Bl, {
    newState: 0,
    oldState: 0
  }), s0 = lt(r0), f0 = [9, 13, 27, 32], Pi = Xt && "CompositionEvent" in window, In = null;
  Xt && "documentMode" in document && (In = document.documentMode);
  var o0 = Xt && "TextEvent" in window && !In, ks = Xt && (!Pi || In && 8 < In && 11 >= In), Ks = " ", $s = !1;
  function Js(e, t) {
    switch (e) {
      case "keyup":
        return f0.indexOf(t.keyCode) !== -1;
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
  function Ws(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var vn = !1;
  function d0(e, t) {
    switch (e) {
      case "compositionend":
        return Ws(t);
      case "keypress":
        return t.which !== 32 ? null : ($s = !0, Ks);
      case "textInput":
        return e = t.data, e === Ks && $s ? null : e;
      default:
        return null;
    }
  }
  function h0(e, t) {
    if (vn)
      return e === "compositionend" || !Pi && Js(e, t) ? (e = Ls(), ru = Ki = rl = null, vn = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return ks && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var m0 = {
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
    week: !0
  };
  function Fs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!m0[e.type] : t === "textarea";
  }
  function Ps(e, t, l, n) {
    hn ? mn ? mn.push(n) : mn = [n] : hn = n, t = Pu(t, "onChange"), 0 < t.length && (l = new ou(
      "onChange",
      "change",
      null,
      l,
      n
    ), e.push({ event: l, listeners: t }));
  }
  var ea = null, ta = null;
  function v0(e) {
    Cd(e, 0);
  }
  function hu(e) {
    var t = $n(e);
    if (Us(t)) return e;
  }
  function Is(e, t) {
    if (e === "change") return t;
  }
  var ef = !1;
  if (Xt) {
    var Ii;
    if (Xt) {
      var ec = "oninput" in document;
      if (!ec) {
        var tf = document.createElement("div");
        tf.setAttribute("oninput", "return;"), ec = typeof tf.oninput == "function";
      }
      Ii = ec;
    } else Ii = !1;
    ef = Ii && (!document.documentMode || 9 < document.documentMode);
  }
  function lf() {
    ea && (ea.detachEvent("onpropertychange", nf), ta = ea = null);
  }
  function nf(e) {
    if (e.propertyName === "value" && hu(ta)) {
      var t = [];
      Ps(
        t,
        ta,
        e,
        Zi(e)
      ), Gs(v0, t);
    }
  }
  function y0(e, t, l) {
    e === "focusin" ? (lf(), ea = t, ta = l, ea.attachEvent("onpropertychange", nf)) : e === "focusout" && lf();
  }
  function g0(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return hu(ta);
  }
  function b0(e, t) {
    if (e === "click") return hu(t);
  }
  function p0(e, t) {
    if (e === "input" || e === "change")
      return hu(t);
  }
  function S0(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var ft = typeof Object.is == "function" ? Object.is : S0;
  function la(e, t) {
    if (ft(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var l = Object.keys(e), n = Object.keys(t);
    if (l.length !== n.length) return !1;
    for (n = 0; n < l.length; n++) {
      var a = l[n];
      if (!_i.call(t, a) || !ft(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  function af(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function uf(e, t) {
    var l = af(e);
    e = 0;
    for (var n; l; ) {
      if (l.nodeType === 3) {
        if (n = e + l.textContent.length, e <= t && n >= t)
          return { node: l, offset: t - e };
        e = n;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = af(l);
    }
  }
  function cf(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? cf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function rf(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = iu(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = iu(e.document);
    }
    return t;
  }
  function tc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var E0 = Xt && "documentMode" in document && 11 >= document.documentMode, yn = null, lc = null, na = null, nc = !1;
  function sf(e, t, l) {
    var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    nc || yn == null || yn !== iu(n) || (n = yn, "selectionStart" in n && tc(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset
    }), na && la(na, n) || (na = n, n = Pu(lc, "onSelect"), 0 < n.length && (t = new ou(
      "onSelect",
      "select",
      null,
      t,
      l
    ), e.push({ event: t, listeners: n }), t.target = yn)));
  }
  function ql(e, t) {
    var l = {};
    return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
  }
  var gn = {
    animationend: ql("Animation", "AnimationEnd"),
    animationiteration: ql("Animation", "AnimationIteration"),
    animationstart: ql("Animation", "AnimationStart"),
    transitionrun: ql("Transition", "TransitionRun"),
    transitionstart: ql("Transition", "TransitionStart"),
    transitioncancel: ql("Transition", "TransitionCancel"),
    transitionend: ql("Transition", "TransitionEnd")
  }, ac = {}, ff = {};
  Xt && (ff = document.createElement("div").style, "AnimationEvent" in window || (delete gn.animationend.animation, delete gn.animationiteration.animation, delete gn.animationstart.animation), "TransitionEvent" in window || delete gn.transitionend.transition);
  function Yl(e) {
    if (ac[e]) return ac[e];
    if (!gn[e]) return e;
    var t = gn[e], l;
    for (l in t)
      if (t.hasOwnProperty(l) && l in ff)
        return ac[e] = t[l];
    return e;
  }
  var of = Yl("animationend"), df = Yl("animationiteration"), hf = Yl("animationstart"), T0 = Yl("transitionrun"), A0 = Yl("transitionstart"), x0 = Yl("transitioncancel"), mf = Yl("transitionend"), vf = /* @__PURE__ */ new Map(), uc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  uc.push("scrollEnd");
  function Mt(e, t) {
    vf.set(e, t), jl(t, [e]);
  }
  var yf = /* @__PURE__ */ new WeakMap();
  function pt(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = yf.get(e);
      return l !== void 0 ? l : (t = {
        value: e,
        source: t,
        stack: Rs(t)
      }, yf.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Rs(t)
    };
  }
  var St = [], bn = 0, ic = 0;
  function mu() {
    for (var e = bn, t = ic = bn = 0; t < e; ) {
      var l = St[t];
      St[t++] = null;
      var n = St[t];
      St[t++] = null;
      var a = St[t];
      St[t++] = null;
      var i = St[t];
      if (St[t++] = null, n !== null && a !== null) {
        var f = n.pending;
        f === null ? a.next = a : (a.next = f.next, f.next = a), n.pending = a;
      }
      i !== 0 && gf(l, a, i);
    }
  }
  function vu(e, t, l, n) {
    St[bn++] = e, St[bn++] = t, St[bn++] = l, St[bn++] = n, ic |= n, e.lanes |= n, e = e.alternate, e !== null && (e.lanes |= n);
  }
  function cc(e, t, l, n) {
    return vu(e, t, l, n), yu(e);
  }
  function pn(e, t) {
    return vu(e, null, null, t), yu(e);
  }
  function gf(e, t, l) {
    e.lanes |= l;
    var n = e.alternate;
    n !== null && (n.lanes |= l);
    for (var a = !1, i = e.return; i !== null; )
      i.childLanes |= l, n = i.alternate, n !== null && (n.childLanes |= l), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (a = !0)), e = i, i = i.return;
    return e.tag === 3 ? (i = e.stateNode, a && t !== null && (a = 31 - st(l), e = i.hiddenUpdates, n = e[a], n === null ? e[a] = [t] : n.push(t), t.lane = l | 536870912), i) : null;
  }
  function yu(e) {
    if (50 < Ma)
      throw Ma = 0, hr = null, Error(r(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Sn = {};
  function D0(e, t, l, n) {
    this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ot(e, t, l, n) {
    return new D0(e, t, l, n);
  }
  function rc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Qt(e, t) {
    var l = e.alternate;
    return l === null ? (l = ot(
      e.tag,
      t,
      e.key,
      e.mode
    ), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l;
  }
  function bf(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function gu(e, t, l, n, a, i) {
    var f = 0;
    if (n = e, typeof e == "function") rc(e) && (f = 1);
    else if (typeof e == "string")
      f = Ov(
        e,
        l,
        Z.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case Fe:
          return e = ot(31, l, t, a), e.elementType = Fe, e.lanes = i, e;
        case B:
          return Gl(l.children, a, i, t);
        case W:
          f = 8, a |= 24;
          break;
        case k:
          return e = ot(12, l, t, a | 2), e.elementType = k, e.lanes = i, e;
        case V:
          return e = ot(13, l, t, a), e.elementType = V, e.lanes = i, e;
        case he:
          return e = ot(19, l, t, a), e.elementType = he, e.lanes = i, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case fe:
              case I:
                f = 10;
                break e;
              case ce:
                f = 9;
                break e;
              case ie:
                f = 11;
                break e;
              case me:
                f = 14;
                break e;
              case qe:
                f = 16, n = null;
                break e;
            }
          f = 29, l = Error(
            r(130, e === null ? "null" : typeof e, "")
          ), n = null;
      }
    return t = ot(f, l, t, a), t.elementType = e, t.type = n, t.lanes = i, t;
  }
  function Gl(e, t, l, n) {
    return e = ot(7, e, n, t), e.lanes = l, e;
  }
  function sc(e, t, l) {
    return e = ot(6, e, null, t), e.lanes = l, e;
  }
  function fc(e, t, l) {
    return t = ot(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = l, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var En = [], Tn = 0, bu = null, pu = 0, Et = [], Tt = 0, Ll = null, Zt = 1, Vt = "";
  function Xl(e, t) {
    En[Tn++] = pu, En[Tn++] = bu, bu = e, pu = t;
  }
  function pf(e, t, l) {
    Et[Tt++] = Zt, Et[Tt++] = Vt, Et[Tt++] = Ll, Ll = e;
    var n = Zt;
    e = Vt;
    var a = 32 - st(n) - 1;
    n &= ~(1 << a), l += 1;
    var i = 32 - st(t) + a;
    if (30 < i) {
      var f = a - a % 5;
      i = (n & (1 << f) - 1).toString(32), n >>= f, a -= f, Zt = 1 << 32 - st(t) + a | l << a | n, Vt = i + e;
    } else
      Zt = 1 << i | l << a | n, Vt = e;
  }
  function oc(e) {
    e.return !== null && (Xl(e, 1), pf(e, 1, 0));
  }
  function dc(e) {
    for (; e === bu; )
      bu = En[--Tn], En[Tn] = null, pu = En[--Tn], En[Tn] = null;
    for (; e === Ll; )
      Ll = Et[--Tt], Et[Tt] = null, Vt = Et[--Tt], Et[Tt] = null, Zt = Et[--Tt], Et[Tt] = null;
  }
  var Ie = null, Me = null, de = !1, Ql = null, Ut = !1, hc = Error(r(519));
  function Zl(e) {
    var t = Error(r(418, ""));
    throw ia(pt(t, e)), hc;
  }
  function Sf(e) {
    var t = e.stateNode, l = e.type, n = e.memoizedProps;
    switch (t[$e] = e, t[tt] = n, l) {
      case "dialog":
        ue("cancel", t), ue("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        ue("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < za.length; l++)
          ue(za[l], t);
        break;
      case "source":
        ue("error", t);
        break;
      case "img":
      case "image":
      case "link":
        ue("error", t), ue("load", t);
        break;
      case "details":
        ue("toggle", t);
        break;
      case "input":
        ue("invalid", t), Cs(
          t,
          n.value,
          n.defaultValue,
          n.checked,
          n.defaultChecked,
          n.type,
          n.name,
          !0
        ), uu(t);
        break;
      case "select":
        ue("invalid", t);
        break;
      case "textarea":
        ue("invalid", t), js(t, n.value, n.defaultValue, n.children), uu(t);
    }
    l = n.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || n.suppressHydrationWarning === !0 || qd(t.textContent, l) ? (n.popover != null && (ue("beforetoggle", t), ue("toggle", t)), n.onScroll != null && ue("scroll", t), n.onScrollEnd != null && ue("scrollend", t), n.onClick != null && (t.onclick = Iu), t = !0) : t = !1, t || Zl(e);
  }
  function Ef(e) {
    for (Ie = e.return; Ie; )
      switch (Ie.tag) {
        case 5:
        case 13:
          Ut = !1;
          return;
        case 27:
        case 3:
          Ut = !0;
          return;
        default:
          Ie = Ie.return;
      }
  }
  function aa(e) {
    if (e !== Ie) return !1;
    if (!de) return Ef(e), de = !0, !1;
    var t = e.tag, l;
    if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || _r(e.type, e.memoizedProps)), l = !l), l && Me && Zl(e), Ef(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (l = e.data, l === "/$") {
              if (t === 0) {
                Me = zt(e.nextSibling);
                break e;
              }
              t--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || t++;
          e = e.nextSibling;
        }
        Me = null;
      }
    } else
      t === 27 ? (t = Me, xl(e.type) ? (e = Ur, Ur = null, Me = e) : Me = t) : Me = Ie ? zt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ua() {
    Me = Ie = null, de = !1;
  }
  function Tf() {
    var e = Ql;
    return e !== null && (ut === null ? ut = e : ut.push.apply(
      ut,
      e
    ), Ql = null), e;
  }
  function ia(e) {
    Ql === null ? Ql = [e] : Ql.push(e);
  }
  var mc = N(null), Vl = null, kt = null;
  function sl(e, t, l) {
    C(mc, t._currentValue), t._currentValue = l;
  }
  function Kt(e) {
    e._currentValue = mc.current, G(mc);
  }
  function vc(e, t, l) {
    for (; e !== null; ) {
      var n = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === l) break;
      e = e.return;
    }
  }
  function yc(e, t, l, n) {
    var a = e.child;
    for (a !== null && (a.return = e); a !== null; ) {
      var i = a.dependencies;
      if (i !== null) {
        var f = a.child;
        i = i.firstContext;
        e: for (; i !== null; ) {
          var o = i;
          i = a;
          for (var h = 0; h < t.length; h++)
            if (o.context === t[h]) {
              i.lanes |= l, o = i.alternate, o !== null && (o.lanes |= l), vc(
                i.return,
                l,
                e
              ), n || (f = null);
              break e;
            }
          i = o.next;
        }
      } else if (a.tag === 18) {
        if (f = a.return, f === null) throw Error(r(341));
        f.lanes |= l, i = f.alternate, i !== null && (i.lanes |= l), vc(f, l, e), f = null;
      } else f = a.child;
      if (f !== null) f.return = a;
      else
        for (f = a; f !== null; ) {
          if (f === e) {
            f = null;
            break;
          }
          if (a = f.sibling, a !== null) {
            a.return = f.return, f = a;
            break;
          }
          f = f.return;
        }
      a = f;
    }
  }
  function ca(e, t, l, n) {
    e = null;
    for (var a = t, i = !1; a !== null; ) {
      if (!i) {
        if ((a.flags & 524288) !== 0) i = !0;
        else if ((a.flags & 262144) !== 0) break;
      }
      if (a.tag === 10) {
        var f = a.alternate;
        if (f === null) throw Error(r(387));
        if (f = f.memoizedProps, f !== null) {
          var o = a.type;
          ft(a.pendingProps.value, f.value) || (e !== null ? e.push(o) : e = [o]);
        }
      } else if (a === Ze.current) {
        if (f = a.alternate, f === null) throw Error(r(387));
        f.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e !== null ? e.push(ja) : e = [ja]);
      }
      a = a.return;
    }
    e !== null && yc(
      t,
      e,
      l,
      n
    ), t.flags |= 262144;
  }
  function Su(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!ft(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function kl(e) {
    Vl = e, kt = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Je(e) {
    return Af(Vl, e);
  }
  function Eu(e, t) {
    return Vl === null && kl(e), Af(e, t);
  }
  function Af(e, t) {
    var l = t._currentValue;
    if (t = { context: t, memoizedValue: l, next: null }, kt === null) {
      if (e === null) throw Error(r(308));
      kt = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else kt = kt.next = t;
    return l;
  }
  var w0 = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(l, n) {
        e.push(n);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(l) {
        return l();
      });
    };
  }, O0 = u.unstable_scheduleCallback, M0 = u.unstable_NormalPriority, je = {
    $$typeof: I,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function gc() {
    return {
      controller: new w0(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function ra(e) {
    e.refCount--, e.refCount === 0 && O0(M0, function() {
      e.controller.abort();
    });
  }
  var sa = null, bc = 0, An = 0, xn = null;
  function _0(e, t) {
    if (sa === null) {
      var l = sa = [];
      bc = 0, An = Sr(), xn = {
        status: "pending",
        value: void 0,
        then: function(n) {
          l.push(n);
        }
      };
    }
    return bc++, t.then(xf, xf), t;
  }
  function xf() {
    if (--bc === 0 && sa !== null) {
      xn !== null && (xn.status = "fulfilled");
      var e = sa;
      sa = null, An = 0, xn = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function z0(e, t) {
    var l = [], n = {
      status: "pending",
      value: null,
      reason: null,
      then: function(a) {
        l.push(a);
      }
    };
    return e.then(
      function() {
        n.status = "fulfilled", n.value = t;
        for (var a = 0; a < l.length; a++) (0, l[a])(t);
      },
      function(a) {
        for (n.status = "rejected", n.reason = a, a = 0; a < l.length; a++)
          (0, l[a])(void 0);
      }
    ), n;
  }
  var Df = M.S;
  M.S = function(e, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && _0(e, t), Df !== null && Df(e, t);
  };
  var Kl = N(null);
  function pc() {
    var e = Kl.current;
    return e !== null ? e : Ae.pooledCache;
  }
  function Tu(e, t) {
    t === null ? C(Kl, Kl.current) : C(Kl, t.pool);
  }
  function wf() {
    var e = pc();
    return e === null ? null : { parent: je._currentValue, pool: e };
  }
  var fa = Error(r(460)), Of = Error(r(474)), Au = Error(r(542)), Sc = { then: function() {
  } };
  function Mf(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function xu() {
  }
  function _f(e, t, l) {
    switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(xu, xu), t = l), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Rf(e), e;
      default:
        if (typeof t.status == "string") t.then(xu, xu);
        else {
          if (e = Ae, e !== null && 100 < e.shellSuspendCounter)
            throw Error(r(482));
          e = t, e.status = "pending", e.then(
            function(n) {
              if (t.status === "pending") {
                var a = t;
                a.status = "fulfilled", a.value = n;
              }
            },
            function(n) {
              if (t.status === "pending") {
                var a = t;
                a.status = "rejected", a.reason = n;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, Rf(e), e;
        }
        throw oa = t, fa;
    }
  }
  var oa = null;
  function zf() {
    if (oa === null) throw Error(r(459));
    var e = oa;
    return oa = null, e;
  }
  function Rf(e) {
    if (e === fa || e === Au)
      throw Error(r(483));
  }
  var fl = !1;
  function Ec(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Tc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function ol(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function dl(e, t, l) {
    var n = e.updateQueue;
    if (n === null) return null;
    if (n = n.shared, (ye & 2) !== 0) {
      var a = n.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), n.pending = t, t = yu(e), gf(e, null, l), t;
    }
    return vu(e, n, t, l), yu(e);
  }
  function da(e, t, l) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
      var n = t.lanes;
      n &= e.pendingLanes, l |= n, t.lanes = l, As(e, l);
    }
  }
  function Ac(e, t) {
    var l = e.updateQueue, n = e.alternate;
    if (n !== null && (n = n.updateQueue, l === n)) {
      var a = null, i = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var f = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          i === null ? a = i = f : i = i.next = f, l = l.next;
        } while (l !== null);
        i === null ? a = i = t : i = i.next = t;
      } else a = i = t;
      l = {
        baseState: n.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: i,
        shared: n.shared,
        callbacks: n.callbacks
      }, e.updateQueue = l;
      return;
    }
    e = l.lastBaseUpdate, e === null ? l.firstBaseUpdate = t : e.next = t, l.lastBaseUpdate = t;
  }
  var xc = !1;
  function ha() {
    if (xc) {
      var e = xn;
      if (e !== null) throw e;
    }
  }
  function ma(e, t, l, n) {
    xc = !1;
    var a = e.updateQueue;
    fl = !1;
    var i = a.firstBaseUpdate, f = a.lastBaseUpdate, o = a.shared.pending;
    if (o !== null) {
      a.shared.pending = null;
      var h = o, A = h.next;
      h.next = null, f === null ? i = A : f.next = A, f = h;
      var _ = e.alternate;
      _ !== null && (_ = _.updateQueue, o = _.lastBaseUpdate, o !== f && (o === null ? _.firstBaseUpdate = A : o.next = A, _.lastBaseUpdate = h));
    }
    if (i !== null) {
      var R = a.baseState;
      f = 0, _ = A = h = null, o = i;
      do {
        var x = o.lane & -536870913, D = x !== o.lane;
        if (D ? (se & x) === x : (n & x) === x) {
          x !== 0 && x === An && (xc = !0), _ !== null && (_ = _.next = {
            lane: 0,
            tag: o.tag,
            payload: o.payload,
            callback: null,
            next: null
          });
          e: {
            var J = e, K = o;
            x = t;
            var Se = l;
            switch (K.tag) {
              case 1:
                if (J = K.payload, typeof J == "function") {
                  R = J.call(Se, R, x);
                  break e;
                }
                R = J;
                break e;
              case 3:
                J.flags = J.flags & -65537 | 128;
              case 0:
                if (J = K.payload, x = typeof J == "function" ? J.call(Se, R, x) : J, x == null) break e;
                R = w({}, R, x);
                break e;
              case 2:
                fl = !0;
            }
          }
          x = o.callback, x !== null && (e.flags |= 64, D && (e.flags |= 8192), D = a.callbacks, D === null ? a.callbacks = [x] : D.push(x));
        } else
          D = {
            lane: x,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null
          }, _ === null ? (A = _ = D, h = R) : _ = _.next = D, f |= x;
        if (o = o.next, o === null) {
          if (o = a.shared.pending, o === null)
            break;
          D = o, o = D.next, D.next = null, a.lastBaseUpdate = D, a.shared.pending = null;
        }
      } while (!0);
      _ === null && (h = R), a.baseState = h, a.firstBaseUpdate = A, a.lastBaseUpdate = _, i === null && (a.shared.lanes = 0), Sl |= f, e.lanes = f, e.memoizedState = R;
    }
  }
  function Nf(e, t) {
    if (typeof e != "function")
      throw Error(r(191, e));
    e.call(t);
  }
  function Uf(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++)
        Nf(l[e], t);
  }
  var Dn = N(null), Du = N(0);
  function Cf(e, t) {
    e = el, C(Du, e), C(Dn, t), el = e | t.baseLanes;
  }
  function Dc() {
    C(Du, el), C(Dn, Dn.current);
  }
  function wc() {
    el = Du.current, G(Dn), G(Du);
  }
  var hl = 0, te = null, be = null, Ue = null, wu = !1, wn = !1, $l = !1, Ou = 0, va = 0, On = null, R0 = 0;
  function Re() {
    throw Error(r(321));
  }
  function Oc(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!ft(e[l], t[l])) return !1;
    return !0;
  }
  function Mc(e, t, l, n, a, i) {
    return hl = i, te = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, M.H = e === null || e.memoizedState === null ? bo : po, $l = !1, i = l(n, a), $l = !1, wn && (i = jf(
      t,
      l,
      n,
      a
    )), Hf(e), i;
  }
  function Hf(e) {
    M.H = Uu;
    var t = be !== null && be.next !== null;
    if (hl = 0, Ue = be = te = null, wu = !1, va = 0, On = null, t) throw Error(r(300));
    e === null || Ge || (e = e.dependencies, e !== null && Su(e) && (Ge = !0));
  }
  function jf(e, t, l, n) {
    te = e;
    var a = 0;
    do {
      if (wn && (On = null), va = 0, wn = !1, 25 <= a) throw Error(r(301));
      if (a += 1, Ue = be = null, e.updateQueue != null) {
        var i = e.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      M.H = q0, i = t(l, n);
    } while (wn);
    return i;
  }
  function N0() {
    var e = M.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? ya(t) : t, e = e.useState()[0], (be !== null ? be.memoizedState : null) !== e && (te.flags |= 1024), t;
  }
  function _c() {
    var e = Ou !== 0;
    return Ou = 0, e;
  }
  function zc(e, t, l) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
  }
  function Rc(e) {
    if (wu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      wu = !1;
    }
    hl = 0, Ue = be = te = null, wn = !1, va = Ou = 0, On = null;
  }
  function nt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ue === null ? te.memoizedState = Ue = e : Ue = Ue.next = e, Ue;
  }
  function Ce() {
    if (be === null) {
      var e = te.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = be.next;
    var t = Ue === null ? te.memoizedState : Ue.next;
    if (t !== null)
      Ue = t, be = e;
    else {
      if (e === null)
        throw te.alternate === null ? Error(r(467)) : Error(r(310));
      be = e, e = {
        memoizedState: be.memoizedState,
        baseState: be.baseState,
        baseQueue: be.baseQueue,
        queue: be.queue,
        next: null
      }, Ue === null ? te.memoizedState = Ue = e : Ue = Ue.next = e;
    }
    return Ue;
  }
  function Nc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ya(e) {
    var t = va;
    return va += 1, On === null && (On = []), e = _f(On, e, t), t = te, (Ue === null ? t.memoizedState : Ue.next) === null && (t = t.alternate, M.H = t === null || t.memoizedState === null ? bo : po), e;
  }
  function Mu(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return ya(e);
      if (e.$$typeof === I) return Je(e);
    }
    throw Error(r(438, String(e)));
  }
  function Uc(e) {
    var t = null, l = te.updateQueue;
    if (l !== null && (t = l.memoCache), t == null) {
      var n = te.alternate;
      n !== null && (n = n.updateQueue, n !== null && (n = n.memoCache, n != null && (t = {
        data: n.data.map(function(a) {
          return a.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), l === null && (l = Nc(), te.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0)
      for (l = t.data[t.index] = Array(e), n = 0; n < e; n++)
        l[n] = ze;
    return t.index++, l;
  }
  function $t(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function _u(e) {
    var t = Ce();
    return Cc(t, be, e);
  }
  function Cc(e, t, l) {
    var n = e.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = l;
    var a = e.baseQueue, i = n.pending;
    if (i !== null) {
      if (a !== null) {
        var f = a.next;
        a.next = i.next, i.next = f;
      }
      t.baseQueue = a = i, n.pending = null;
    }
    if (i = e.baseState, a === null) e.memoizedState = i;
    else {
      t = a.next;
      var o = f = null, h = null, A = t, _ = !1;
      do {
        var R = A.lane & -536870913;
        if (R !== A.lane ? (se & R) === R : (hl & R) === R) {
          var x = A.revertLane;
          if (x === 0)
            h !== null && (h = h.next = {
              lane: 0,
              revertLane: 0,
              action: A.action,
              hasEagerState: A.hasEagerState,
              eagerState: A.eagerState,
              next: null
            }), R === An && (_ = !0);
          else if ((hl & x) === x) {
            A = A.next, x === An && (_ = !0);
            continue;
          } else
            R = {
              lane: 0,
              revertLane: A.revertLane,
              action: A.action,
              hasEagerState: A.hasEagerState,
              eagerState: A.eagerState,
              next: null
            }, h === null ? (o = h = R, f = i) : h = h.next = R, te.lanes |= x, Sl |= x;
          R = A.action, $l && l(i, R), i = A.hasEagerState ? A.eagerState : l(i, R);
        } else
          x = {
            lane: R,
            revertLane: A.revertLane,
            action: A.action,
            hasEagerState: A.hasEagerState,
            eagerState: A.eagerState,
            next: null
          }, h === null ? (o = h = x, f = i) : h = h.next = x, te.lanes |= R, Sl |= R;
        A = A.next;
      } while (A !== null && A !== t);
      if (h === null ? f = i : h.next = o, !ft(i, e.memoizedState) && (Ge = !0, _ && (l = xn, l !== null)))
        throw l;
      e.memoizedState = i, e.baseState = f, e.baseQueue = h, n.lastRenderedState = i;
    }
    return a === null && (n.lanes = 0), [e.memoizedState, n.dispatch];
  }
  function Hc(e) {
    var t = Ce(), l = t.queue;
    if (l === null) throw Error(r(311));
    l.lastRenderedReducer = e;
    var n = l.dispatch, a = l.pending, i = t.memoizedState;
    if (a !== null) {
      l.pending = null;
      var f = a = a.next;
      do
        i = e(i, f.action), f = f.next;
      while (f !== a);
      ft(i, t.memoizedState) || (Ge = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), l.lastRenderedState = i;
    }
    return [i, n];
  }
  function Bf(e, t, l) {
    var n = te, a = Ce(), i = de;
    if (i) {
      if (l === void 0) throw Error(r(407));
      l = l();
    } else l = t();
    var f = !ft(
      (be || a).memoizedState,
      l
    );
    f && (a.memoizedState = l, Ge = !0), a = a.queue;
    var o = Gf.bind(null, n, a, e);
    if (ga(2048, 8, o, [e]), a.getSnapshot !== t || f || Ue !== null && Ue.memoizedState.tag & 1) {
      if (n.flags |= 2048, Mn(
        9,
        zu(),
        Yf.bind(
          null,
          n,
          a,
          l,
          t
        ),
        null
      ), Ae === null) throw Error(r(349));
      i || (hl & 124) !== 0 || qf(n, t, l);
    }
    return l;
  }
  function qf(e, t, l) {
    e.flags |= 16384, e = { getSnapshot: t, value: l }, t = te.updateQueue, t === null ? (t = Nc(), te.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e));
  }
  function Yf(e, t, l, n) {
    t.value = l, t.getSnapshot = n, Lf(t) && Xf(e);
  }
  function Gf(e, t, l) {
    return l(function() {
      Lf(t) && Xf(e);
    });
  }
  function Lf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !ft(e, l);
    } catch {
      return !0;
    }
  }
  function Xf(e) {
    var t = pn(e, 2);
    t !== null && yt(t, e, 2);
  }
  function jc(e) {
    var t = nt();
    if (typeof e == "function") {
      var l = e;
      if (e = l(), $l) {
        il(!0);
        try {
          l();
        } finally {
          il(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: $t,
      lastRenderedState: e
    }, t;
  }
  function Qf(e, t, l, n) {
    return e.baseState = l, Cc(
      e,
      be,
      typeof n == "function" ? n : $t
    );
  }
  function U0(e, t, l, n, a) {
    if (Nu(e)) throw Error(r(485));
    if (e = t.action, e !== null) {
      var i = {
        payload: a,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(f) {
          i.listeners.push(f);
        }
      };
      M.T !== null ? l(!0) : i.isTransition = !1, n(i), l = t.pending, l === null ? (i.next = t.pending = i, Zf(t, i)) : (i.next = l.next, t.pending = l.next = i);
    }
  }
  function Zf(e, t) {
    var l = t.action, n = t.payload, a = e.state;
    if (t.isTransition) {
      var i = M.T, f = {};
      M.T = f;
      try {
        var o = l(a, n), h = M.S;
        h !== null && h(f, o), Vf(e, t, o);
      } catch (A) {
        Bc(e, t, A);
      } finally {
        M.T = i;
      }
    } else
      try {
        i = l(a, n), Vf(e, t, i);
      } catch (A) {
        Bc(e, t, A);
      }
  }
  function Vf(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(n) {
        kf(e, t, n);
      },
      function(n) {
        return Bc(e, t, n);
      }
    ) : kf(e, t, l);
  }
  function kf(e, t, l) {
    t.status = "fulfilled", t.value = l, Kf(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, Zf(e, l)));
  }
  function Bc(e, t, l) {
    var n = e.pending;
    if (e.pending = null, n !== null) {
      n = n.next;
      do
        t.status = "rejected", t.reason = l, Kf(t), t = t.next;
      while (t !== n);
    }
    e.action = null;
  }
  function Kf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function $f(e, t) {
    return t;
  }
  function Jf(e, t) {
    if (de) {
      var l = Ae.formState;
      if (l !== null) {
        e: {
          var n = te;
          if (de) {
            if (Me) {
              t: {
                for (var a = Me, i = Ut; a.nodeType !== 8; ) {
                  if (!i) {
                    a = null;
                    break t;
                  }
                  if (a = zt(
                    a.nextSibling
                  ), a === null) {
                    a = null;
                    break t;
                  }
                }
                i = a.data, a = i === "F!" || i === "F" ? a : null;
              }
              if (a) {
                Me = zt(
                  a.nextSibling
                ), n = a.data === "F!";
                break e;
              }
            }
            Zl(n);
          }
          n = !1;
        }
        n && (t = l[0]);
      }
    }
    return l = nt(), l.memoizedState = l.baseState = t, n = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: $f,
      lastRenderedState: t
    }, l.queue = n, l = vo.bind(
      null,
      te,
      n
    ), n.dispatch = l, n = jc(!1), i = Xc.bind(
      null,
      te,
      !1,
      n.queue
    ), n = nt(), a = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, n.queue = a, l = U0.bind(
      null,
      te,
      a,
      i,
      l
    ), a.dispatch = l, n.memoizedState = e, [t, l, !1];
  }
  function Wf(e) {
    var t = Ce();
    return Ff(t, be, e);
  }
  function Ff(e, t, l) {
    if (t = Cc(
      e,
      t,
      $f
    )[0], e = _u($t)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var n = ya(t);
      } catch (f) {
        throw f === fa ? Au : f;
      }
    else n = t;
    t = Ce();
    var a = t.queue, i = a.dispatch;
    return l !== t.memoizedState && (te.flags |= 2048, Mn(
      9,
      zu(),
      C0.bind(null, a, l),
      null
    )), [n, i, e];
  }
  function C0(e, t) {
    e.action = t;
  }
  function Pf(e) {
    var t = Ce(), l = be;
    if (l !== null)
      return Ff(t, l, e);
    Ce(), t = t.memoizedState, l = Ce();
    var n = l.queue.dispatch;
    return l.memoizedState = e, [t, n, !1];
  }
  function Mn(e, t, l, n) {
    return e = { tag: e, create: l, deps: n, inst: t, next: null }, t = te.updateQueue, t === null && (t = Nc(), te.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (n = l.next, l.next = e, e.next = n, t.lastEffect = e), e;
  }
  function zu() {
    return { destroy: void 0, resource: void 0 };
  }
  function If() {
    return Ce().memoizedState;
  }
  function Ru(e, t, l, n) {
    var a = nt();
    n = n === void 0 ? null : n, te.flags |= e, a.memoizedState = Mn(
      1 | t,
      zu(),
      l,
      n
    );
  }
  function ga(e, t, l, n) {
    var a = Ce();
    n = n === void 0 ? null : n;
    var i = a.memoizedState.inst;
    be !== null && n !== null && Oc(n, be.memoizedState.deps) ? a.memoizedState = Mn(t, i, l, n) : (te.flags |= e, a.memoizedState = Mn(
      1 | t,
      i,
      l,
      n
    ));
  }
  function eo(e, t) {
    Ru(8390656, 8, e, t);
  }
  function to(e, t) {
    ga(2048, 8, e, t);
  }
  function lo(e, t) {
    return ga(4, 2, e, t);
  }
  function no(e, t) {
    return ga(4, 4, e, t);
  }
  function ao(e, t) {
    if (typeof t == "function") {
      e = e();
      var l = t(e);
      return function() {
        typeof l == "function" ? l() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function uo(e, t, l) {
    l = l != null ? l.concat([e]) : null, ga(4, 4, ao.bind(null, t, e), l);
  }
  function qc() {
  }
  function io(e, t) {
    var l = Ce();
    t = t === void 0 ? null : t;
    var n = l.memoizedState;
    return t !== null && Oc(t, n[1]) ? n[0] : (l.memoizedState = [e, t], e);
  }
  function co(e, t) {
    var l = Ce();
    t = t === void 0 ? null : t;
    var n = l.memoizedState;
    if (t !== null && Oc(t, n[1]))
      return n[0];
    if (n = e(), $l) {
      il(!0);
      try {
        e();
      } finally {
        il(!1);
      }
    }
    return l.memoizedState = [n, t], n;
  }
  function Yc(e, t, l) {
    return l === void 0 || (hl & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = l, e = od(), te.lanes |= e, Sl |= e, l);
  }
  function ro(e, t, l, n) {
    return ft(l, t) ? l : Dn.current !== null ? (e = Yc(e, l, n), ft(e, t) || (Ge = !0), e) : (hl & 42) === 0 ? (Ge = !0, e.memoizedState = l) : (e = od(), te.lanes |= e, Sl |= e, t);
  }
  function so(e, t, l, n, a) {
    var i = q.p;
    q.p = i !== 0 && 8 > i ? i : 8;
    var f = M.T, o = {};
    M.T = o, Xc(e, !1, t, l);
    try {
      var h = a(), A = M.S;
      if (A !== null && A(o, h), h !== null && typeof h == "object" && typeof h.then == "function") {
        var _ = z0(
          h,
          n
        );
        ba(
          e,
          t,
          _,
          vt(e)
        );
      } else
        ba(
          e,
          t,
          n,
          vt(e)
        );
    } catch (R) {
      ba(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: R },
        vt()
      );
    } finally {
      q.p = i, M.T = f;
    }
  }
  function H0() {
  }
  function Gc(e, t, l, n) {
    if (e.tag !== 5) throw Error(r(476));
    var a = fo(e).queue;
    so(
      e,
      a,
      t,
      Q,
      l === null ? H0 : function() {
        return oo(e), l(n);
      }
    );
  }
  function fo(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: Q,
      baseState: Q,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $t,
        lastRenderedState: Q
      },
      next: null
    };
    var l = {};
    return t.next = {
      memoizedState: l,
      baseState: l,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $t,
        lastRenderedState: l
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function oo(e) {
    var t = fo(e).next.queue;
    ba(e, t, {}, vt());
  }
  function Lc() {
    return Je(ja);
  }
  function ho() {
    return Ce().memoizedState;
  }
  function mo() {
    return Ce().memoizedState;
  }
  function j0(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = vt();
          e = ol(l);
          var n = dl(t, e, l);
          n !== null && (yt(n, t, l), da(n, t, l)), t = { cache: gc() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function B0(e, t, l) {
    var n = vt();
    l = {
      lane: n,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Nu(e) ? yo(t, l) : (l = cc(e, t, l, n), l !== null && (yt(l, e, n), go(l, t, n)));
  }
  function vo(e, t, l) {
    var n = vt();
    ba(e, t, l, n);
  }
  function ba(e, t, l, n) {
    var a = {
      lane: n,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Nu(e)) yo(t, a);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
        try {
          var f = t.lastRenderedState, o = i(f, l);
          if (a.hasEagerState = !0, a.eagerState = o, ft(o, f))
            return vu(e, t, a, 0), Ae === null && mu(), !1;
        } catch {
        } finally {
        }
      if (l = cc(e, t, a, n), l !== null)
        return yt(l, e, n), go(l, t, n), !0;
    }
    return !1;
  }
  function Xc(e, t, l, n) {
    if (n = {
      lane: 2,
      revertLane: Sr(),
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Nu(e)) {
      if (t) throw Error(r(479));
    } else
      t = cc(
        e,
        l,
        n,
        2
      ), t !== null && yt(t, e, 2);
  }
  function Nu(e) {
    var t = e.alternate;
    return e === te || t !== null && t === te;
  }
  function yo(e, t) {
    wn = wu = !0;
    var l = e.pending;
    l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
  }
  function go(e, t, l) {
    if ((l & 4194048) !== 0) {
      var n = t.lanes;
      n &= e.pendingLanes, l |= n, t.lanes = l, As(e, l);
    }
  }
  var Uu = {
    readContext: Je,
    use: Mu,
    useCallback: Re,
    useContext: Re,
    useEffect: Re,
    useImperativeHandle: Re,
    useLayoutEffect: Re,
    useInsertionEffect: Re,
    useMemo: Re,
    useReducer: Re,
    useRef: Re,
    useState: Re,
    useDebugValue: Re,
    useDeferredValue: Re,
    useTransition: Re,
    useSyncExternalStore: Re,
    useId: Re,
    useHostTransitionStatus: Re,
    useFormState: Re,
    useActionState: Re,
    useOptimistic: Re,
    useMemoCache: Re,
    useCacheRefresh: Re
  }, bo = {
    readContext: Je,
    use: Mu,
    useCallback: function(e, t) {
      return nt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: Je,
    useEffect: eo,
    useImperativeHandle: function(e, t, l) {
      l = l != null ? l.concat([e]) : null, Ru(
        4194308,
        4,
        ao.bind(null, t, e),
        l
      );
    },
    useLayoutEffect: function(e, t) {
      return Ru(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Ru(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var l = nt();
      t = t === void 0 ? null : t;
      var n = e();
      if ($l) {
        il(!0);
        try {
          e();
        } finally {
          il(!1);
        }
      }
      return l.memoizedState = [n, t], n;
    },
    useReducer: function(e, t, l) {
      var n = nt();
      if (l !== void 0) {
        var a = l(t);
        if ($l) {
          il(!0);
          try {
            l(t);
          } finally {
            il(!1);
          }
        }
      } else a = t;
      return n.memoizedState = n.baseState = a, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: a
      }, n.queue = e, e = e.dispatch = B0.bind(
        null,
        te,
        e
      ), [n.memoizedState, e];
    },
    useRef: function(e) {
      var t = nt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = jc(e);
      var t = e.queue, l = vo.bind(null, te, t);
      return t.dispatch = l, [e.memoizedState, l];
    },
    useDebugValue: qc,
    useDeferredValue: function(e, t) {
      var l = nt();
      return Yc(l, e, t);
    },
    useTransition: function() {
      var e = jc(!1);
      return e = so.bind(
        null,
        te,
        e.queue,
        !0,
        !1
      ), nt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, l) {
      var n = te, a = nt();
      if (de) {
        if (l === void 0)
          throw Error(r(407));
        l = l();
      } else {
        if (l = t(), Ae === null)
          throw Error(r(349));
        (se & 124) !== 0 || qf(n, t, l);
      }
      a.memoizedState = l;
      var i = { value: l, getSnapshot: t };
      return a.queue = i, eo(Gf.bind(null, n, i, e), [
        e
      ]), n.flags |= 2048, Mn(
        9,
        zu(),
        Yf.bind(
          null,
          n,
          i,
          l,
          t
        ),
        null
      ), l;
    },
    useId: function() {
      var e = nt(), t = Ae.identifierPrefix;
      if (de) {
        var l = Vt, n = Zt;
        l = (n & ~(1 << 32 - st(n) - 1)).toString(32) + l, t = "«" + t + "R" + l, l = Ou++, 0 < l && (t += "H" + l.toString(32)), t += "»";
      } else
        l = R0++, t = "«" + t + "r" + l.toString(32) + "»";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Lc,
    useFormState: Jf,
    useActionState: Jf,
    useOptimistic: function(e) {
      var t = nt();
      t.memoizedState = t.baseState = e;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = l, t = Xc.bind(
        null,
        te,
        !0,
        l
      ), l.dispatch = t, [e, t];
    },
    useMemoCache: Uc,
    useCacheRefresh: function() {
      return nt().memoizedState = j0.bind(
        null,
        te
      );
    }
  }, po = {
    readContext: Je,
    use: Mu,
    useCallback: io,
    useContext: Je,
    useEffect: to,
    useImperativeHandle: uo,
    useInsertionEffect: lo,
    useLayoutEffect: no,
    useMemo: co,
    useReducer: _u,
    useRef: If,
    useState: function() {
      return _u($t);
    },
    useDebugValue: qc,
    useDeferredValue: function(e, t) {
      var l = Ce();
      return ro(
        l,
        be.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = _u($t)[0], t = Ce().memoizedState;
      return [
        typeof e == "boolean" ? e : ya(e),
        t
      ];
    },
    useSyncExternalStore: Bf,
    useId: ho,
    useHostTransitionStatus: Lc,
    useFormState: Wf,
    useActionState: Wf,
    useOptimistic: function(e, t) {
      var l = Ce();
      return Qf(l, be, e, t);
    },
    useMemoCache: Uc,
    useCacheRefresh: mo
  }, q0 = {
    readContext: Je,
    use: Mu,
    useCallback: io,
    useContext: Je,
    useEffect: to,
    useImperativeHandle: uo,
    useInsertionEffect: lo,
    useLayoutEffect: no,
    useMemo: co,
    useReducer: Hc,
    useRef: If,
    useState: function() {
      return Hc($t);
    },
    useDebugValue: qc,
    useDeferredValue: function(e, t) {
      var l = Ce();
      return be === null ? Yc(l, e, t) : ro(
        l,
        be.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Hc($t)[0], t = Ce().memoizedState;
      return [
        typeof e == "boolean" ? e : ya(e),
        t
      ];
    },
    useSyncExternalStore: Bf,
    useId: ho,
    useHostTransitionStatus: Lc,
    useFormState: Pf,
    useActionState: Pf,
    useOptimistic: function(e, t) {
      var l = Ce();
      return be !== null ? Qf(l, be, e, t) : (l.baseState = e, [e, l.queue.dispatch]);
    },
    useMemoCache: Uc,
    useCacheRefresh: mo
  }, _n = null, pa = 0;
  function Cu(e) {
    var t = pa;
    return pa += 1, _n === null && (_n = []), _f(_n, e, t);
  }
  function Sa(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Hu(e, t) {
    throw t.$$typeof === j ? Error(r(525)) : (e = Object.prototype.toString.call(t), Error(
      r(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function So(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Eo(e) {
    function t(p, g) {
      if (e) {
        var T = p.deletions;
        T === null ? (p.deletions = [g], p.flags |= 16) : T.push(g);
      }
    }
    function l(p, g) {
      if (!e) return null;
      for (; g !== null; )
        t(p, g), g = g.sibling;
      return null;
    }
    function n(p) {
      for (var g = /* @__PURE__ */ new Map(); p !== null; )
        p.key !== null ? g.set(p.key, p) : g.set(p.index, p), p = p.sibling;
      return g;
    }
    function a(p, g) {
      return p = Qt(p, g), p.index = 0, p.sibling = null, p;
    }
    function i(p, g, T) {
      return p.index = T, e ? (T = p.alternate, T !== null ? (T = T.index, T < g ? (p.flags |= 67108866, g) : T) : (p.flags |= 67108866, g)) : (p.flags |= 1048576, g);
    }
    function f(p) {
      return e && p.alternate === null && (p.flags |= 67108866), p;
    }
    function o(p, g, T, z) {
      return g === null || g.tag !== 6 ? (g = sc(T, p.mode, z), g.return = p, g) : (g = a(g, T), g.return = p, g);
    }
    function h(p, g, T, z) {
      var L = T.type;
      return L === B ? _(
        p,
        g,
        T.props.children,
        z,
        T.key
      ) : g !== null && (g.elementType === L || typeof L == "object" && L !== null && L.$$typeof === qe && So(L) === g.type) ? (g = a(g, T.props), Sa(g, T), g.return = p, g) : (g = gu(
        T.type,
        T.key,
        T.props,
        null,
        p.mode,
        z
      ), Sa(g, T), g.return = p, g);
    }
    function A(p, g, T, z) {
      return g === null || g.tag !== 4 || g.stateNode.containerInfo !== T.containerInfo || g.stateNode.implementation !== T.implementation ? (g = fc(T, p.mode, z), g.return = p, g) : (g = a(g, T.children || []), g.return = p, g);
    }
    function _(p, g, T, z, L) {
      return g === null || g.tag !== 7 ? (g = Gl(
        T,
        p.mode,
        z,
        L
      ), g.return = p, g) : (g = a(g, T), g.return = p, g);
    }
    function R(p, g, T) {
      if (typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint")
        return g = sc(
          "" + g,
          p.mode,
          T
        ), g.return = p, g;
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case H:
            return T = gu(
              g.type,
              g.key,
              g.props,
              null,
              p.mode,
              T
            ), Sa(T, g), T.return = p, T;
          case Y:
            return g = fc(
              g,
              p.mode,
              T
            ), g.return = p, g;
          case qe:
            var z = g._init;
            return g = z(g._payload), R(p, g, T);
        }
        if (Oe(g) || we(g))
          return g = Gl(
            g,
            p.mode,
            T,
            null
          ), g.return = p, g;
        if (typeof g.then == "function")
          return R(p, Cu(g), T);
        if (g.$$typeof === I)
          return R(
            p,
            Eu(p, g),
            T
          );
        Hu(p, g);
      }
      return null;
    }
    function x(p, g, T, z) {
      var L = g !== null ? g.key : null;
      if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
        return L !== null ? null : o(p, g, "" + T, z);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case H:
            return T.key === L ? h(p, g, T, z) : null;
          case Y:
            return T.key === L ? A(p, g, T, z) : null;
          case qe:
            return L = T._init, T = L(T._payload), x(p, g, T, z);
        }
        if (Oe(T) || we(T))
          return L !== null ? null : _(p, g, T, z, null);
        if (typeof T.then == "function")
          return x(
            p,
            g,
            Cu(T),
            z
          );
        if (T.$$typeof === I)
          return x(
            p,
            g,
            Eu(p, T),
            z
          );
        Hu(p, T);
      }
      return null;
    }
    function D(p, g, T, z, L) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return p = p.get(T) || null, o(g, p, "" + z, L);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case H:
            return p = p.get(
              z.key === null ? T : z.key
            ) || null, h(g, p, z, L);
          case Y:
            return p = p.get(
              z.key === null ? T : z.key
            ) || null, A(g, p, z, L);
          case qe:
            var ne = z._init;
            return z = ne(z._payload), D(
              p,
              g,
              T,
              z,
              L
            );
        }
        if (Oe(z) || we(z))
          return p = p.get(T) || null, _(g, p, z, L, null);
        if (typeof z.then == "function")
          return D(
            p,
            g,
            T,
            Cu(z),
            L
          );
        if (z.$$typeof === I)
          return D(
            p,
            g,
            T,
            Eu(g, z),
            L
          );
        Hu(g, z);
      }
      return null;
    }
    function J(p, g, T, z) {
      for (var L = null, ne = null, X = g, $ = g = 0, Xe = null; X !== null && $ < T.length; $++) {
        X.index > $ ? (Xe = X, X = null) : Xe = X.sibling;
        var oe = x(
          p,
          X,
          T[$],
          z
        );
        if (oe === null) {
          X === null && (X = Xe);
          break;
        }
        e && X && oe.alternate === null && t(p, X), g = i(oe, g, $), ne === null ? L = oe : ne.sibling = oe, ne = oe, X = Xe;
      }
      if ($ === T.length)
        return l(p, X), de && Xl(p, $), L;
      if (X === null) {
        for (; $ < T.length; $++)
          X = R(p, T[$], z), X !== null && (g = i(
            X,
            g,
            $
          ), ne === null ? L = X : ne.sibling = X, ne = X);
        return de && Xl(p, $), L;
      }
      for (X = n(X); $ < T.length; $++)
        Xe = D(
          X,
          p,
          $,
          T[$],
          z
        ), Xe !== null && (e && Xe.alternate !== null && X.delete(
          Xe.key === null ? $ : Xe.key
        ), g = i(
          Xe,
          g,
          $
        ), ne === null ? L = Xe : ne.sibling = Xe, ne = Xe);
      return e && X.forEach(function(_l) {
        return t(p, _l);
      }), de && Xl(p, $), L;
    }
    function K(p, g, T, z) {
      if (T == null) throw Error(r(151));
      for (var L = null, ne = null, X = g, $ = g = 0, Xe = null, oe = T.next(); X !== null && !oe.done; $++, oe = T.next()) {
        X.index > $ ? (Xe = X, X = null) : Xe = X.sibling;
        var _l = x(p, X, oe.value, z);
        if (_l === null) {
          X === null && (X = Xe);
          break;
        }
        e && X && _l.alternate === null && t(p, X), g = i(_l, g, $), ne === null ? L = _l : ne.sibling = _l, ne = _l, X = Xe;
      }
      if (oe.done)
        return l(p, X), de && Xl(p, $), L;
      if (X === null) {
        for (; !oe.done; $++, oe = T.next())
          oe = R(p, oe.value, z), oe !== null && (g = i(oe, g, $), ne === null ? L = oe : ne.sibling = oe, ne = oe);
        return de && Xl(p, $), L;
      }
      for (X = n(X); !oe.done; $++, oe = T.next())
        oe = D(X, p, $, oe.value, z), oe !== null && (e && oe.alternate !== null && X.delete(oe.key === null ? $ : oe.key), g = i(oe, g, $), ne === null ? L = oe : ne.sibling = oe, ne = oe);
      return e && X.forEach(function(Yv) {
        return t(p, Yv);
      }), de && Xl(p, $), L;
    }
    function Se(p, g, T, z) {
      if (typeof T == "object" && T !== null && T.type === B && T.key === null && (T = T.props.children), typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case H:
            e: {
              for (var L = T.key; g !== null; ) {
                if (g.key === L) {
                  if (L = T.type, L === B) {
                    if (g.tag === 7) {
                      l(
                        p,
                        g.sibling
                      ), z = a(
                        g,
                        T.props.children
                      ), z.return = p, p = z;
                      break e;
                    }
                  } else if (g.elementType === L || typeof L == "object" && L !== null && L.$$typeof === qe && So(L) === g.type) {
                    l(
                      p,
                      g.sibling
                    ), z = a(g, T.props), Sa(z, T), z.return = p, p = z;
                    break e;
                  }
                  l(p, g);
                  break;
                } else t(p, g);
                g = g.sibling;
              }
              T.type === B ? (z = Gl(
                T.props.children,
                p.mode,
                z,
                T.key
              ), z.return = p, p = z) : (z = gu(
                T.type,
                T.key,
                T.props,
                null,
                p.mode,
                z
              ), Sa(z, T), z.return = p, p = z);
            }
            return f(p);
          case Y:
            e: {
              for (L = T.key; g !== null; ) {
                if (g.key === L)
                  if (g.tag === 4 && g.stateNode.containerInfo === T.containerInfo && g.stateNode.implementation === T.implementation) {
                    l(
                      p,
                      g.sibling
                    ), z = a(g, T.children || []), z.return = p, p = z;
                    break e;
                  } else {
                    l(p, g);
                    break;
                  }
                else t(p, g);
                g = g.sibling;
              }
              z = fc(T, p.mode, z), z.return = p, p = z;
            }
            return f(p);
          case qe:
            return L = T._init, T = L(T._payload), Se(
              p,
              g,
              T,
              z
            );
        }
        if (Oe(T))
          return J(
            p,
            g,
            T,
            z
          );
        if (we(T)) {
          if (L = we(T), typeof L != "function") throw Error(r(150));
          return T = L.call(T), K(
            p,
            g,
            T,
            z
          );
        }
        if (typeof T.then == "function")
          return Se(
            p,
            g,
            Cu(T),
            z
          );
        if (T.$$typeof === I)
          return Se(
            p,
            g,
            Eu(p, T),
            z
          );
        Hu(p, T);
      }
      return typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint" ? (T = "" + T, g !== null && g.tag === 6 ? (l(p, g.sibling), z = a(g, T), z.return = p, p = z) : (l(p, g), z = sc(T, p.mode, z), z.return = p, p = z), f(p)) : l(p, g);
    }
    return function(p, g, T, z) {
      try {
        pa = 0;
        var L = Se(
          p,
          g,
          T,
          z
        );
        return _n = null, L;
      } catch (X) {
        if (X === fa || X === Au) throw X;
        var ne = ot(29, X, null, p.mode);
        return ne.lanes = z, ne.return = p, ne;
      } finally {
      }
    };
  }
  var zn = Eo(!0), To = Eo(!1), At = N(null), Ct = null;
  function ml(e) {
    var t = e.alternate;
    C(Be, Be.current & 1), C(At, e), Ct === null && (t === null || Dn.current !== null || t.memoizedState !== null) && (Ct = e);
  }
  function Ao(e) {
    if (e.tag === 22) {
      if (C(Be, Be.current), C(At, e), Ct === null) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (Ct = e);
      }
    } else vl();
  }
  function vl() {
    C(Be, Be.current), C(At, At.current);
  }
  function Jt(e) {
    G(At), Ct === e && (Ct = null), G(Be);
  }
  var Be = N(0);
  function ju(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || Nr(l)))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  function Qc(e, t, l, n) {
    t = e.memoizedState, l = l(n, t), l = l == null ? t : w({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var Zc = {
    enqueueSetState: function(e, t, l) {
      e = e._reactInternals;
      var n = vt(), a = ol(n);
      a.payload = t, l != null && (a.callback = l), t = dl(e, a, n), t !== null && (yt(t, e, n), da(t, e, n));
    },
    enqueueReplaceState: function(e, t, l) {
      e = e._reactInternals;
      var n = vt(), a = ol(n);
      a.tag = 1, a.payload = t, l != null && (a.callback = l), t = dl(e, a, n), t !== null && (yt(t, e, n), da(t, e, n));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var l = vt(), n = ol(l);
      n.tag = 2, t != null && (n.callback = t), t = dl(e, n, l), t !== null && (yt(t, e, l), da(t, e, l));
    }
  };
  function xo(e, t, l, n, a, i, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, i, f) : t.prototype && t.prototype.isPureReactComponent ? !la(l, n) || !la(a, i) : !0;
  }
  function Do(e, t, l, n) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, n), t.state !== e && Zc.enqueueReplaceState(t, t.state, null);
  }
  function Jl(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var n in t)
        n !== "ref" && (l[n] = t[n]);
    }
    if (e = e.defaultProps) {
      l === t && (l = w({}, l));
      for (var a in e)
        l[a] === void 0 && (l[a] = e[a]);
    }
    return l;
  }
  var Bu = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  };
  function wo(e) {
    Bu(e);
  }
  function Oo(e) {
    console.error(e);
  }
  function Mo(e) {
    Bu(e);
  }
  function qu(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function _o(e, t, l) {
    try {
      var n = e.onCaughtError;
      n(l.value, {
        componentStack: l.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Vc(e, t, l) {
    return l = ol(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      qu(e, t);
    }, l;
  }
  function zo(e) {
    return e = ol(e), e.tag = 3, e;
  }
  function Ro(e, t, l, n) {
    var a = l.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var i = n.value;
      e.payload = function() {
        return a(i);
      }, e.callback = function() {
        _o(t, l, n);
      };
    }
    var f = l.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (e.callback = function() {
      _o(t, l, n), typeof a != "function" && (El === null ? El = /* @__PURE__ */ new Set([this]) : El.add(this));
      var o = n.stack;
      this.componentDidCatch(n.value, {
        componentStack: o !== null ? o : ""
      });
    });
  }
  function Y0(e, t, l, n, a) {
    if (l.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
      if (t = l.alternate, t !== null && ca(
        t,
        l,
        a,
        !0
      ), l = At.current, l !== null) {
        switch (l.tag) {
          case 13:
            return Ct === null ? vr() : l.alternate === null && _e === 0 && (_e = 3), l.flags &= -257, l.flags |= 65536, l.lanes = a, n === Sc ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = /* @__PURE__ */ new Set([n]) : t.add(n), gr(e, n, a)), !1;
          case 22:
            return l.flags |= 65536, n === Sc ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([n])
            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = /* @__PURE__ */ new Set([n]) : l.add(n)), gr(e, n, a)), !1;
        }
        throw Error(r(435, l.tag));
      }
      return gr(e, n, a), vr(), !1;
    }
    if (de)
      return t = At.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = a, n !== hc && (e = Error(r(422), { cause: n }), ia(pt(e, l)))) : (n !== hc && (t = Error(r(423), {
        cause: n
      }), ia(
        pt(t, l)
      )), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, n = pt(n, l), a = Vc(
        e.stateNode,
        n,
        a
      ), Ac(e, a), _e !== 4 && (_e = 2)), !1;
    var i = Error(r(520), { cause: n });
    if (i = pt(i, l), Oa === null ? Oa = [i] : Oa.push(i), _e !== 4 && (_e = 2), t === null) return !0;
    n = pt(n, l), l = t;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, e = a & -a, l.lanes |= e, e = Vc(l.stateNode, n, e), Ac(l, e), !1;
        case 1:
          if (t = l.type, i = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (El === null || !El.has(i))))
            return l.flags |= 65536, a &= -a, l.lanes |= a, a = zo(a), Ro(
              a,
              e,
              l,
              n
            ), Ac(l, a), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var No = Error(r(461)), Ge = !1;
  function Ve(e, t, l, n) {
    t.child = e === null ? To(t, null, l, n) : zn(
      t,
      e.child,
      l,
      n
    );
  }
  function Uo(e, t, l, n, a) {
    l = l.render;
    var i = t.ref;
    if ("ref" in n) {
      var f = {};
      for (var o in n)
        o !== "ref" && (f[o] = n[o]);
    } else f = n;
    return kl(t), n = Mc(
      e,
      t,
      l,
      f,
      i,
      a
    ), o = _c(), e !== null && !Ge ? (zc(e, t, a), Wt(e, t, a)) : (de && o && oc(t), t.flags |= 1, Ve(e, t, n, a), t.child);
  }
  function Co(e, t, l, n, a) {
    if (e === null) {
      var i = l.type;
      return typeof i == "function" && !rc(i) && i.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = i, Ho(
        e,
        t,
        i,
        n,
        a
      )) : (e = gu(
        l.type,
        null,
        n,
        t,
        t.mode,
        a
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, !Ic(e, a)) {
      var f = i.memoizedProps;
      if (l = l.compare, l = l !== null ? l : la, l(f, n) && e.ref === t.ref)
        return Wt(e, t, a);
    }
    return t.flags |= 1, e = Qt(i, n), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Ho(e, t, l, n, a) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (la(i, n) && e.ref === t.ref)
        if (Ge = !1, t.pendingProps = n = i, Ic(e, a))
          (e.flags & 131072) !== 0 && (Ge = !0);
        else
          return t.lanes = e.lanes, Wt(e, t, a);
    }
    return kc(
      e,
      t,
      l,
      n,
      a
    );
  }
  function jo(e, t, l) {
    var n = t.pendingProps, a = n.children, i = e !== null ? e.memoizedState : null;
    if (n.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (n = i !== null ? i.baseLanes | l : l, e !== null) {
          for (a = t.child = e.child, i = 0; a !== null; )
            i = i | a.lanes | a.childLanes, a = a.sibling;
          t.childLanes = i & ~n;
        } else t.childLanes = 0, t.child = null;
        return Bo(
          e,
          t,
          n,
          l
        );
      }
      if ((l & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Tu(
          t,
          i !== null ? i.cachePool : null
        ), i !== null ? Cf(t, i) : Dc(), Ao(t);
      else
        return t.lanes = t.childLanes = 536870912, Bo(
          e,
          t,
          i !== null ? i.baseLanes | l : l,
          l
        );
    } else
      i !== null ? (Tu(t, i.cachePool), Cf(t, i), vl(), t.memoizedState = null) : (e !== null && Tu(t, null), Dc(), vl());
    return Ve(e, t, a, l), t.child;
  }
  function Bo(e, t, l, n) {
    var a = pc();
    return a = a === null ? null : { parent: je._currentValue, pool: a }, t.memoizedState = {
      baseLanes: l,
      cachePool: a
    }, e !== null && Tu(t, null), Dc(), Ao(t), e !== null && ca(e, t, n, !0), null;
  }
  function Yu(e, t) {
    var l = t.ref;
    if (l === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(r(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function kc(e, t, l, n, a) {
    return kl(t), l = Mc(
      e,
      t,
      l,
      n,
      void 0,
      a
    ), n = _c(), e !== null && !Ge ? (zc(e, t, a), Wt(e, t, a)) : (de && n && oc(t), t.flags |= 1, Ve(e, t, l, a), t.child);
  }
  function qo(e, t, l, n, a, i) {
    return kl(t), t.updateQueue = null, l = jf(
      t,
      n,
      l,
      a
    ), Hf(e), n = _c(), e !== null && !Ge ? (zc(e, t, i), Wt(e, t, i)) : (de && n && oc(t), t.flags |= 1, Ve(e, t, l, i), t.child);
  }
  function Yo(e, t, l, n, a) {
    if (kl(t), t.stateNode === null) {
      var i = Sn, f = l.contextType;
      typeof f == "object" && f !== null && (i = Je(f)), i = new l(n, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Zc, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = n, i.state = t.memoizedState, i.refs = {}, Ec(t), f = l.contextType, i.context = typeof f == "object" && f !== null ? Je(f) : Sn, i.state = t.memoizedState, f = l.getDerivedStateFromProps, typeof f == "function" && (Qc(
        t,
        l,
        f,
        n
      ), i.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (f = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), f !== i.state && Zc.enqueueReplaceState(i, i.state, null), ma(t, n, i, a), ha(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), n = !0;
    } else if (e === null) {
      i = t.stateNode;
      var o = t.memoizedProps, h = Jl(l, o);
      i.props = h;
      var A = i.context, _ = l.contextType;
      f = Sn, typeof _ == "object" && _ !== null && (f = Je(_));
      var R = l.getDerivedStateFromProps;
      _ = typeof R == "function" || typeof i.getSnapshotBeforeUpdate == "function", o = t.pendingProps !== o, _ || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (o || A !== f) && Do(
        t,
        i,
        n,
        f
      ), fl = !1;
      var x = t.memoizedState;
      i.state = x, ma(t, n, i, a), ha(), A = t.memoizedState, o || x !== A || fl ? (typeof R == "function" && (Qc(
        t,
        l,
        R,
        n
      ), A = t.memoizedState), (h = fl || xo(
        t,
        l,
        h,
        n,
        x,
        A,
        f
      )) ? (_ || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = A), i.props = n, i.state = A, i.context = f, n = h) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
    } else {
      i = t.stateNode, Tc(e, t), f = t.memoizedProps, _ = Jl(l, f), i.props = _, R = t.pendingProps, x = i.context, A = l.contextType, h = Sn, typeof A == "object" && A !== null && (h = Je(A)), o = l.getDerivedStateFromProps, (A = typeof o == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (f !== R || x !== h) && Do(
        t,
        i,
        n,
        h
      ), fl = !1, x = t.memoizedState, i.state = x, ma(t, n, i, a), ha();
      var D = t.memoizedState;
      f !== R || x !== D || fl || e !== null && e.dependencies !== null && Su(e.dependencies) ? (typeof o == "function" && (Qc(
        t,
        l,
        o,
        n
      ), D = t.memoizedState), (_ = fl || xo(
        t,
        l,
        _,
        n,
        x,
        D,
        h
      ) || e !== null && e.dependencies !== null && Su(e.dependencies)) ? (A || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(n, D, h), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        n,
        D,
        h
      )), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || f === e.memoizedProps && x === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && x === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = D), i.props = n, i.state = D, i.context = h, n = _) : (typeof i.componentDidUpdate != "function" || f === e.memoizedProps && x === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && x === e.memoizedState || (t.flags |= 1024), n = !1);
    }
    return i = n, Yu(e, t), n = (t.flags & 128) !== 0, i || n ? (i = t.stateNode, l = n && typeof l.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && n ? (t.child = zn(
      t,
      e.child,
      null,
      a
    ), t.child = zn(
      t,
      null,
      l,
      a
    )) : Ve(e, t, l, a), t.memoizedState = i.state, e = t.child) : e = Wt(
      e,
      t,
      a
    ), e;
  }
  function Go(e, t, l, n) {
    return ua(), t.flags |= 256, Ve(e, t, l, n), t.child;
  }
  var Kc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function $c(e) {
    return { baseLanes: e, cachePool: wf() };
  }
  function Jc(e, t, l) {
    return e = e !== null ? e.childLanes & ~l : 0, t && (e |= xt), e;
  }
  function Lo(e, t, l) {
    var n = t.pendingProps, a = !1, i = (t.flags & 128) !== 0, f;
    if ((f = i) || (f = e !== null && e.memoizedState === null ? !1 : (Be.current & 2) !== 0), f && (a = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (de) {
        if (a ? ml(t) : vl(), de) {
          var o = Me, h;
          if (h = o) {
            e: {
              for (h = o, o = Ut; h.nodeType !== 8; ) {
                if (!o) {
                  o = null;
                  break e;
                }
                if (h = zt(
                  h.nextSibling
                ), h === null) {
                  o = null;
                  break e;
                }
              }
              o = h;
            }
            o !== null ? (t.memoizedState = {
              dehydrated: o,
              treeContext: Ll !== null ? { id: Zt, overflow: Vt } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, h = ot(
              18,
              null,
              null,
              0
            ), h.stateNode = o, h.return = t, t.child = h, Ie = t, Me = null, h = !0) : h = !1;
          }
          h || Zl(t);
        }
        if (o = t.memoizedState, o !== null && (o = o.dehydrated, o !== null))
          return Nr(o) ? t.lanes = 32 : t.lanes = 536870912, null;
        Jt(t);
      }
      return o = n.children, n = n.fallback, a ? (vl(), a = t.mode, o = Gu(
        { mode: "hidden", children: o },
        a
      ), n = Gl(
        n,
        a,
        l,
        null
      ), o.return = t, n.return = t, o.sibling = n, t.child = o, a = t.child, a.memoizedState = $c(l), a.childLanes = Jc(
        e,
        f,
        l
      ), t.memoizedState = Kc, n) : (ml(t), Wc(t, o));
    }
    if (h = e.memoizedState, h !== null && (o = h.dehydrated, o !== null)) {
      if (i)
        t.flags & 256 ? (ml(t), t.flags &= -257, t = Fc(
          e,
          t,
          l
        )) : t.memoizedState !== null ? (vl(), t.child = e.child, t.flags |= 128, t = null) : (vl(), a = n.fallback, o = t.mode, n = Gu(
          { mode: "visible", children: n.children },
          o
        ), a = Gl(
          a,
          o,
          l,
          null
        ), a.flags |= 2, n.return = t, a.return = t, n.sibling = a, t.child = n, zn(
          t,
          e.child,
          null,
          l
        ), n = t.child, n.memoizedState = $c(l), n.childLanes = Jc(
          e,
          f,
          l
        ), t.memoizedState = Kc, t = a);
      else if (ml(t), Nr(o)) {
        if (f = o.nextSibling && o.nextSibling.dataset, f) var A = f.dgst;
        f = A, n = Error(r(419)), n.stack = "", n.digest = f, ia({ value: n, source: null, stack: null }), t = Fc(
          e,
          t,
          l
        );
      } else if (Ge || ca(e, t, l, !1), f = (l & e.childLanes) !== 0, Ge || f) {
        if (f = Ae, f !== null && (n = l & -l, n = (n & 42) !== 0 ? 1 : Ui(n), n = (n & (f.suspendedLanes | l)) !== 0 ? 0 : n, n !== 0 && n !== h.retryLane))
          throw h.retryLane = n, pn(e, n), yt(f, e, n), No;
        o.data === "$?" || vr(), t = Fc(
          e,
          t,
          l
        );
      } else
        o.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = h.treeContext, Me = zt(
          o.nextSibling
        ), Ie = t, de = !0, Ql = null, Ut = !1, e !== null && (Et[Tt++] = Zt, Et[Tt++] = Vt, Et[Tt++] = Ll, Zt = e.id, Vt = e.overflow, Ll = t), t = Wc(
          t,
          n.children
        ), t.flags |= 4096);
      return t;
    }
    return a ? (vl(), a = n.fallback, o = t.mode, h = e.child, A = h.sibling, n = Qt(h, {
      mode: "hidden",
      children: n.children
    }), n.subtreeFlags = h.subtreeFlags & 65011712, A !== null ? a = Qt(A, a) : (a = Gl(
      a,
      o,
      l,
      null
    ), a.flags |= 2), a.return = t, n.return = t, n.sibling = a, t.child = n, n = a, a = t.child, o = e.child.memoizedState, o === null ? o = $c(l) : (h = o.cachePool, h !== null ? (A = je._currentValue, h = h.parent !== A ? { parent: A, pool: A } : h) : h = wf(), o = {
      baseLanes: o.baseLanes | l,
      cachePool: h
    }), a.memoizedState = o, a.childLanes = Jc(
      e,
      f,
      l
    ), t.memoizedState = Kc, n) : (ml(t), l = e.child, e = l.sibling, l = Qt(l, {
      mode: "visible",
      children: n.children
    }), l.return = t, l.sibling = null, e !== null && (f = t.deletions, f === null ? (t.deletions = [e], t.flags |= 16) : f.push(e)), t.child = l, t.memoizedState = null, l);
  }
  function Wc(e, t) {
    return t = Gu(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Gu(e, t) {
    return e = ot(22, e, null, t), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e;
  }
  function Fc(e, t, l) {
    return zn(t, e.child, null, l), e = Wc(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Xo(e, t, l) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t), vc(e.return, t, l);
  }
  function Pc(e, t, l, n, a) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: n,
      tail: l,
      tailMode: a
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = n, i.tail = l, i.tailMode = a);
  }
  function Qo(e, t, l) {
    var n = t.pendingProps, a = n.revealOrder, i = n.tail;
    if (Ve(e, t, n.children, l), n = Be.current, (n & 2) !== 0)
      n = n & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Xo(e, l, t);
          else if (e.tag === 19)
            Xo(e, l, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
      n &= 1;
    }
    switch (C(Be, n), a) {
      case "forwards":
        for (l = t.child, a = null; l !== null; )
          e = l.alternate, e !== null && ju(e) === null && (a = l), l = l.sibling;
        l = a, l === null ? (a = t.child, t.child = null) : (a = l.sibling, l.sibling = null), Pc(
          t,
          !1,
          a,
          l,
          i
        );
        break;
      case "backwards":
        for (l = null, a = t.child, t.child = null; a !== null; ) {
          if (e = a.alternate, e !== null && ju(e) === null) {
            t.child = a;
            break;
          }
          e = a.sibling, a.sibling = l, l = a, a = e;
        }
        Pc(
          t,
          !0,
          l,
          null,
          i
        );
        break;
      case "together":
        Pc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Wt(e, t, l) {
    if (e !== null && (t.dependencies = e.dependencies), Sl |= t.lanes, (l & t.childLanes) === 0)
      if (e !== null) {
        if (ca(
          e,
          t,
          l,
          !1
        ), (l & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(r(153));
    if (t.child !== null) {
      for (e = t.child, l = Qt(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; )
        e = e.sibling, l = l.sibling = Qt(e, e.pendingProps), l.return = t;
      l.sibling = null;
    }
    return t.child;
  }
  function Ic(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Su(e)));
  }
  function G0(e, t, l) {
    switch (t.tag) {
      case 3:
        ve(t, t.stateNode.containerInfo), sl(t, je, e.memoizedState.cache), ua();
        break;
      case 27:
      case 5:
        Mi(t);
        break;
      case 4:
        ve(t, t.stateNode.containerInfo);
        break;
      case 10:
        sl(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 13:
        var n = t.memoizedState;
        if (n !== null)
          return n.dehydrated !== null ? (ml(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? Lo(e, t, l) : (ml(t), e = Wt(
            e,
            t,
            l
          ), e !== null ? e.sibling : null);
        ml(t);
        break;
      case 19:
        var a = (e.flags & 128) !== 0;
        if (n = (l & t.childLanes) !== 0, n || (ca(
          e,
          t,
          l,
          !1
        ), n = (l & t.childLanes) !== 0), a) {
          if (n)
            return Qo(
              e,
              t,
              l
            );
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), C(Be, Be.current), n) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, jo(e, t, l);
      case 24:
        sl(t, je, e.memoizedState.cache);
    }
    return Wt(e, t, l);
  }
  function Zo(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Ge = !0;
      else {
        if (!Ic(e, l) && (t.flags & 128) === 0)
          return Ge = !1, G0(
            e,
            t,
            l
          );
        Ge = (e.flags & 131072) !== 0;
      }
    else
      Ge = !1, de && (t.flags & 1048576) !== 0 && pf(t, pu, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          e = t.pendingProps;
          var n = t.elementType, a = n._init;
          if (n = a(n._payload), t.type = n, typeof n == "function")
            rc(n) ? (e = Jl(n, e), t.tag = 1, t = Yo(
              null,
              t,
              n,
              e,
              l
            )) : (t.tag = 0, t = kc(
              null,
              t,
              n,
              e,
              l
            ));
          else {
            if (n != null) {
              if (a = n.$$typeof, a === ie) {
                t.tag = 11, t = Uo(
                  null,
                  t,
                  n,
                  e,
                  l
                );
                break e;
              } else if (a === me) {
                t.tag = 14, t = Co(
                  null,
                  t,
                  n,
                  e,
                  l
                );
                break e;
              }
            }
            throw t = Pe(n) || n, Error(r(306, t, ""));
          }
        }
        return t;
      case 0:
        return kc(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 1:
        return n = t.type, a = Jl(
          n,
          t.pendingProps
        ), Yo(
          e,
          t,
          n,
          a,
          l
        );
      case 3:
        e: {
          if (ve(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(r(387));
          n = t.pendingProps;
          var i = t.memoizedState;
          a = i.element, Tc(e, t), ma(t, n, null, l);
          var f = t.memoizedState;
          if (n = f.cache, sl(t, je, n), n !== i.cache && yc(
            t,
            [je],
            l,
            !0
          ), ha(), n = f.element, i.isDehydrated)
            if (i = {
              element: n,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
              t = Go(
                e,
                t,
                n,
                l
              );
              break e;
            } else if (n !== a) {
              a = pt(
                Error(r(424)),
                t
              ), ia(a), t = Go(
                e,
                t,
                n,
                l
              );
              break e;
            } else {
              switch (e = t.stateNode.containerInfo, e.nodeType) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (Me = zt(e.firstChild), Ie = t, de = !0, Ql = null, Ut = !0, l = To(
                t,
                null,
                n,
                l
              ), t.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
            }
          else {
            if (ua(), n === a) {
              t = Wt(
                e,
                t,
                l
              );
              break e;
            }
            Ve(
              e,
              t,
              n,
              l
            );
          }
          t = t.child;
        }
        return t;
      case 26:
        return Yu(e, t), e === null ? (l = $d(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = l : de || (l = t.type, e = t.pendingProps, n = ei(
          P.current
        ).createElement(l), n[$e] = t, n[tt] = e, Ke(n, l, e), Ye(n), t.stateNode = n) : t.memoizedState = $d(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Mi(t), e === null && de && (n = t.stateNode = Vd(
          t.type,
          t.pendingProps,
          P.current
        ), Ie = t, Ut = !0, a = Me, xl(t.type) ? (Ur = a, Me = zt(
          n.firstChild
        )) : Me = a), Ve(
          e,
          t,
          t.pendingProps.children,
          l
        ), Yu(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && de && ((a = n = Me) && (n = mv(
          n,
          t.type,
          t.pendingProps,
          Ut
        ), n !== null ? (t.stateNode = n, Ie = t, Me = zt(
          n.firstChild
        ), Ut = !1, a = !0) : a = !1), a || Zl(t)), Mi(t), a = t.type, i = t.pendingProps, f = e !== null ? e.memoizedProps : null, n = i.children, _r(a, i) ? n = null : f !== null && _r(a, f) && (t.flags |= 32), t.memoizedState !== null && (a = Mc(
          e,
          t,
          N0,
          null,
          null,
          l
        ), ja._currentValue = a), Yu(e, t), Ve(e, t, n, l), t.child;
      case 6:
        return e === null && de && ((e = l = Me) && (l = vv(
          l,
          t.pendingProps,
          Ut
        ), l !== null ? (t.stateNode = l, Ie = t, Me = null, e = !0) : e = !1), e || Zl(t)), null;
      case 13:
        return Lo(e, t, l);
      case 4:
        return ve(
          t,
          t.stateNode.containerInfo
        ), n = t.pendingProps, e === null ? t.child = zn(
          t,
          null,
          n,
          l
        ) : Ve(
          e,
          t,
          n,
          l
        ), t.child;
      case 11:
        return Uo(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 7:
        return Ve(
          e,
          t,
          t.pendingProps,
          l
        ), t.child;
      case 8:
        return Ve(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 12:
        return Ve(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 10:
        return n = t.pendingProps, sl(t, t.type, n.value), Ve(
          e,
          t,
          n.children,
          l
        ), t.child;
      case 9:
        return a = t.type._context, n = t.pendingProps.children, kl(t), a = Je(a), n = n(a), t.flags |= 1, Ve(e, t, n, l), t.child;
      case 14:
        return Co(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 15:
        return Ho(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 19:
        return Qo(e, t, l);
      case 31:
        return n = t.pendingProps, l = t.mode, n = {
          mode: n.mode,
          children: n.children
        }, e === null ? (l = Gu(
          n,
          l
        ), l.ref = t.ref, t.child = l, l.return = t, t = l) : (l = Qt(e.child, n), l.ref = t.ref, t.child = l, l.return = t, t = l), t;
      case 22:
        return jo(e, t, l);
      case 24:
        return kl(t), n = Je(je), e === null ? (a = pc(), a === null && (a = Ae, i = gc(), a.pooledCache = i, i.refCount++, i !== null && (a.pooledCacheLanes |= l), a = i), t.memoizedState = {
          parent: n,
          cache: a
        }, Ec(t), sl(t, je, a)) : ((e.lanes & l) !== 0 && (Tc(e, t), ma(t, null, null, l), ha()), a = e.memoizedState, i = t.memoizedState, a.parent !== n ? (a = { parent: n, cache: n }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), sl(t, je, n)) : (n = i.cache, sl(t, je, n), n !== a.cache && yc(
          t,
          [je],
          l,
          !0
        ))), Ve(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(r(156, t.tag));
  }
  function Ft(e) {
    e.flags |= 4;
  }
  function Vo(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Id(t)) {
      if (t = At.current, t !== null && ((se & 4194048) === se ? Ct !== null : (se & 62914560) !== se && (se & 536870912) === 0 || t !== Ct))
        throw oa = Sc, Of;
      e.flags |= 8192;
    }
  }
  function Lu(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Es() : 536870912, e.lanes |= t, Cn |= t);
  }
  function Ea(e, t) {
    if (!de)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var l = null; t !== null; )
            t.alternate !== null && (l = t), t = t.sibling;
          l === null ? e.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = e.tail;
          for (var n = null; l !== null; )
            l.alternate !== null && (n = l), l = l.sibling;
          n === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : n.sibling = null;
      }
  }
  function De(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, l = 0, n = 0;
    if (t)
      for (var a = e.child; a !== null; )
        l |= a.lanes | a.childLanes, n |= a.subtreeFlags & 65011712, n |= a.flags & 65011712, a.return = e, a = a.sibling;
    else
      for (a = e.child; a !== null; )
        l |= a.lanes | a.childLanes, n |= a.subtreeFlags, n |= a.flags, a.return = e, a = a.sibling;
    return e.subtreeFlags |= n, e.childLanes = l, t;
  }
  function L0(e, t, l) {
    var n = t.pendingProps;
    switch (dc(t), t.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return De(t), null;
      case 1:
        return De(t), null;
      case 3:
        return l = t.stateNode, n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Kt(je), et(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (aa(t) ? Ft(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Tf())), De(t), null;
      case 26:
        return l = t.memoizedState, e === null ? (Ft(t), l !== null ? (De(t), Vo(t, l)) : (De(t), t.flags &= -16777217)) : l ? l !== e.memoizedState ? (Ft(t), De(t), Vo(t, l)) : (De(t), t.flags &= -16777217) : (e.memoizedProps !== n && Ft(t), De(t), t.flags &= -16777217), null;
      case 27:
        Pa(t), l = P.current;
        var a = t.type;
        if (e !== null && t.stateNode != null)
          e.memoizedProps !== n && Ft(t);
        else {
          if (!n) {
            if (t.stateNode === null)
              throw Error(r(166));
            return De(t), null;
          }
          e = Z.current, aa(t) ? Sf(t) : (e = Vd(a, n, l), t.stateNode = e, Ft(t));
        }
        return De(t), null;
      case 5:
        if (Pa(t), l = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== n && Ft(t);
        else {
          if (!n) {
            if (t.stateNode === null)
              throw Error(r(166));
            return De(t), null;
          }
          if (e = Z.current, aa(t))
            Sf(t);
          else {
            switch (a = ei(
              P.current
            ), e) {
              case 1:
                e = a.createElementNS(
                  "http://www.w3.org/2000/svg",
                  l
                );
                break;
              case 2:
                e = a.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  l
                );
                break;
              default:
                switch (l) {
                  case "svg":
                    e = a.createElementNS(
                      "http://www.w3.org/2000/svg",
                      l
                    );
                    break;
                  case "math":
                    e = a.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      l
                    );
                    break;
                  case "script":
                    e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                    break;
                  case "select":
                    e = typeof n.is == "string" ? a.createElement("select", { is: n.is }) : a.createElement("select"), n.multiple ? e.multiple = !0 : n.size && (e.size = n.size);
                    break;
                  default:
                    e = typeof n.is == "string" ? a.createElement(l, { is: n.is }) : a.createElement(l);
                }
            }
            e[$e] = t, e[tt] = n;
            e: for (a = t.child; a !== null; ) {
              if (a.tag === 5 || a.tag === 6)
                e.appendChild(a.stateNode);
              else if (a.tag !== 4 && a.tag !== 27 && a.child !== null) {
                a.child.return = a, a = a.child;
                continue;
              }
              if (a === t) break e;
              for (; a.sibling === null; ) {
                if (a.return === null || a.return === t)
                  break e;
                a = a.return;
              }
              a.sibling.return = a.return, a = a.sibling;
            }
            t.stateNode = e;
            e: switch (Ke(e, l, n), l) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!n.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && Ft(t);
          }
        }
        return De(t), t.flags &= -16777217, null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== n && Ft(t);
        else {
          if (typeof n != "string" && t.stateNode === null)
            throw Error(r(166));
          if (e = P.current, aa(t)) {
            if (e = t.stateNode, l = t.memoizedProps, n = null, a = Ie, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  n = a.memoizedProps;
              }
            e[$e] = t, e = !!(e.nodeValue === l || n !== null && n.suppressHydrationWarning === !0 || qd(e.nodeValue, l)), e || Zl(t);
          } else
            e = ei(e).createTextNode(
              n
            ), e[$e] = t, t.stateNode = e;
        }
        return De(t), null;
      case 13:
        if (n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (a = aa(t), n !== null && n.dehydrated !== null) {
            if (e === null) {
              if (!a) throw Error(r(318));
              if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(r(317));
              a[$e] = t;
            } else
              ua(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            De(t), a = !1;
          } else
            a = Tf(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return t.flags & 256 ? (Jt(t), t) : (Jt(t), null);
        }
        if (Jt(t), (t.flags & 128) !== 0)
          return t.lanes = l, t;
        if (l = n !== null, e = e !== null && e.memoizedState !== null, l) {
          n = t.child, a = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (a = n.alternate.memoizedState.cachePool.pool);
          var i = null;
          n.memoizedState !== null && n.memoizedState.cachePool !== null && (i = n.memoizedState.cachePool.pool), i !== a && (n.flags |= 2048);
        }
        return l !== e && l && (t.child.flags |= 8192), Lu(t, t.updateQueue), De(t), null;
      case 4:
        return et(), e === null && xr(t.stateNode.containerInfo), De(t), null;
      case 10:
        return Kt(t.type), De(t), null;
      case 19:
        if (G(Be), a = t.memoizedState, a === null) return De(t), null;
        if (n = (t.flags & 128) !== 0, i = a.rendering, i === null)
          if (n) Ea(a, !1);
          else {
            if (_e !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (i = ju(e), i !== null) {
                  for (t.flags |= 128, Ea(a, !1), e = i.updateQueue, t.updateQueue = e, Lu(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null; )
                    bf(l, e), l = l.sibling;
                  return C(
                    Be,
                    Be.current & 1 | 2
                  ), t.child;
                }
                e = e.sibling;
              }
            a.tail !== null && Nt() > Zu && (t.flags |= 128, n = !0, Ea(a, !1), t.lanes = 4194304);
          }
        else {
          if (!n)
            if (e = ju(i), e !== null) {
              if (t.flags |= 128, n = !0, e = e.updateQueue, t.updateQueue = e, Lu(t, e), Ea(a, !0), a.tail === null && a.tailMode === "hidden" && !i.alternate && !de)
                return De(t), null;
            } else
              2 * Nt() - a.renderingStartTime > Zu && l !== 536870912 && (t.flags |= 128, n = !0, Ea(a, !1), t.lanes = 4194304);
          a.isBackwards ? (i.sibling = t.child, t.child = i) : (e = a.last, e !== null ? e.sibling = i : t.child = i, a.last = i);
        }
        return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Nt(), t.sibling = null, e = Be.current, C(Be, n ? e & 1 | 2 : e & 1), t) : (De(t), null);
      case 22:
      case 23:
        return Jt(t), wc(), n = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== n && (t.flags |= 8192) : n && (t.flags |= 8192), n ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (De(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : De(t), l = t.updateQueue, l !== null && Lu(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), n = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), n !== l && (t.flags |= 2048), e !== null && G(Kl), null;
      case 24:
        return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Kt(je), De(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function X0(e, t) {
    switch (dc(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Kt(je), et(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Pa(t), null;
      case 13:
        if (Jt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(r(340));
          ua();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return G(Be), null;
      case 4:
        return et(), null;
      case 10:
        return Kt(t.type), null;
      case 22:
      case 23:
        return Jt(t), wc(), e !== null && G(Kl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Kt(je), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ko(e, t) {
    switch (dc(t), t.tag) {
      case 3:
        Kt(je), et();
        break;
      case 26:
      case 27:
      case 5:
        Pa(t);
        break;
      case 4:
        et();
        break;
      case 13:
        Jt(t);
        break;
      case 19:
        G(Be);
        break;
      case 10:
        Kt(t.type);
        break;
      case 22:
      case 23:
        Jt(t), wc(), e !== null && G(Kl);
        break;
      case 24:
        Kt(je);
    }
  }
  function Ta(e, t) {
    try {
      var l = t.updateQueue, n = l !== null ? l.lastEffect : null;
      if (n !== null) {
        var a = n.next;
        l = a;
        do {
          if ((l.tag & e) === e) {
            n = void 0;
            var i = l.create, f = l.inst;
            n = i(), f.destroy = n;
          }
          l = l.next;
        } while (l !== a);
      }
    } catch (o) {
      Ee(t, t.return, o);
    }
  }
  function yl(e, t, l) {
    try {
      var n = t.updateQueue, a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var i = a.next;
        n = i;
        do {
          if ((n.tag & e) === e) {
            var f = n.inst, o = f.destroy;
            if (o !== void 0) {
              f.destroy = void 0, a = t;
              var h = l, A = o;
              try {
                A();
              } catch (_) {
                Ee(
                  a,
                  h,
                  _
                );
              }
            }
          }
          n = n.next;
        } while (n !== i);
      }
    } catch (_) {
      Ee(t, t.return, _);
    }
  }
  function Ko(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        Uf(t, l);
      } catch (n) {
        Ee(e, e.return, n);
      }
    }
  }
  function $o(e, t, l) {
    l.props = Jl(
      e.type,
      e.memoizedProps
    ), l.state = e.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (n) {
      Ee(e, t, n);
    }
  }
  function Aa(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var n = e.stateNode;
            break;
          case 30:
            n = e.stateNode;
            break;
          default:
            n = e.stateNode;
        }
        typeof l == "function" ? e.refCleanup = l(n) : l.current = n;
      }
    } catch (a) {
      Ee(e, t, a);
    }
  }
  function Ht(e, t) {
    var l = e.ref, n = e.refCleanup;
    if (l !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (a) {
          Ee(e, t, a);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (a) {
          Ee(e, t, a);
        }
      else l.current = null;
  }
  function Jo(e) {
    var t = e.type, l = e.memoizedProps, n = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && n.focus();
          break e;
        case "img":
          l.src ? n.src = l.src : l.srcSet && (n.srcset = l.srcSet);
      }
    } catch (a) {
      Ee(e, e.return, a);
    }
  }
  function er(e, t, l) {
    try {
      var n = e.stateNode;
      sv(n, e.type, l, t), n[tt] = t;
    } catch (a) {
      Ee(e, e.return, a);
    }
  }
  function Wo(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && xl(e.type) || e.tag === 4;
  }
  function tr(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Wo(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && xl(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function lr(e, t, l) {
    var n = e.tag;
    if (n === 5 || n === 6)
      e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = Iu));
    else if (n !== 4 && (n === 27 && xl(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null))
      for (lr(e, t, l), e = e.sibling; e !== null; )
        lr(e, t, l), e = e.sibling;
  }
  function Xu(e, t, l) {
    var n = e.tag;
    if (n === 5 || n === 6)
      e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (n !== 4 && (n === 27 && xl(e.type) && (l = e.stateNode), e = e.child, e !== null))
      for (Xu(e, t, l), e = e.sibling; e !== null; )
        Xu(e, t, l), e = e.sibling;
  }
  function Fo(e) {
    var t = e.stateNode, l = e.memoizedProps;
    try {
      for (var n = e.type, a = t.attributes; a.length; )
        t.removeAttributeNode(a[0]);
      Ke(t, n, l), t[$e] = e, t[tt] = l;
    } catch (i) {
      Ee(e, e.return, i);
    }
  }
  var Pt = !1, Ne = !1, nr = !1, Po = typeof WeakSet == "function" ? WeakSet : Set, Le = null;
  function Q0(e, t) {
    if (e = e.containerInfo, Or = ii, e = rf(e), tc(e)) {
      if ("selectionStart" in e)
        var l = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          l = (l = e.ownerDocument) && l.defaultView || window;
          var n = l.getSelection && l.getSelection();
          if (n && n.rangeCount !== 0) {
            l = n.anchorNode;
            var a = n.anchorOffset, i = n.focusNode;
            n = n.focusOffset;
            try {
              l.nodeType, i.nodeType;
            } catch {
              l = null;
              break e;
            }
            var f = 0, o = -1, h = -1, A = 0, _ = 0, R = e, x = null;
            t: for (; ; ) {
              for (var D; R !== l || a !== 0 && R.nodeType !== 3 || (o = f + a), R !== i || n !== 0 && R.nodeType !== 3 || (h = f + n), R.nodeType === 3 && (f += R.nodeValue.length), (D = R.firstChild) !== null; )
                x = R, R = D;
              for (; ; ) {
                if (R === e) break t;
                if (x === l && ++A === a && (o = f), x === i && ++_ === n && (h = f), (D = R.nextSibling) !== null) break;
                R = x, x = R.parentNode;
              }
              R = D;
            }
            l = o === -1 || h === -1 ? null : { start: o, end: h };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Mr = { focusedElem: e, selectionRange: l }, ii = !1, Le = t; Le !== null; )
      if (t = Le, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null)
        e.return = t, Le = e;
      else
        for (; Le !== null; ) {
          switch (t = Le, i = t.alternate, e = t.flags, t.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && i !== null) {
                e = void 0, l = t, a = i.memoizedProps, i = i.memoizedState, n = l.stateNode;
                try {
                  var J = Jl(
                    l.type,
                    a,
                    l.elementType === l.type
                  );
                  e = n.getSnapshotBeforeUpdate(
                    J,
                    i
                  ), n.__reactInternalSnapshotBeforeUpdate = e;
                } catch (K) {
                  Ee(
                    l,
                    l.return,
                    K
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, l = e.nodeType, l === 9)
                  Rr(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Rr(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(r(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, Le = e;
            break;
          }
          Le = t.return;
        }
  }
  function Io(e, t, l) {
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        gl(e, l), n & 4 && Ta(5, l);
        break;
      case 1:
        if (gl(e, l), n & 4)
          if (e = l.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (f) {
              Ee(l, l.return, f);
            }
          else {
            var a = Jl(
              l.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                a,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (f) {
              Ee(
                l,
                l.return,
                f
              );
            }
          }
        n & 64 && Ko(l), n & 512 && Aa(l, l.return);
        break;
      case 3:
        if (gl(e, l), n & 64 && (e = l.updateQueue, e !== null)) {
          if (t = null, l.child !== null)
            switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode;
                break;
              case 1:
                t = l.child.stateNode;
            }
          try {
            Uf(e, t);
          } catch (f) {
            Ee(l, l.return, f);
          }
        }
        break;
      case 27:
        t === null && n & 4 && Fo(l);
      case 26:
      case 5:
        gl(e, l), t === null && n & 4 && Jo(l), n & 512 && Aa(l, l.return);
        break;
      case 12:
        gl(e, l);
        break;
      case 13:
        gl(e, l), n & 4 && ld(e, l), n & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = P0.bind(
          null,
          l
        ), yv(e, l))));
        break;
      case 22:
        if (n = l.memoizedState !== null || Pt, !n) {
          t = t !== null && t.memoizedState !== null || Ne, a = Pt;
          var i = Ne;
          Pt = n, (Ne = t) && !i ? bl(
            e,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : gl(e, l), Pt = a, Ne = i;
        }
        break;
      case 30:
        break;
      default:
        gl(e, l);
    }
  }
  function ed(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, ed(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && ji(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var xe = null, at = !1;
  function It(e, t, l) {
    for (l = l.child; l !== null; )
      td(e, t, l), l = l.sibling;
  }
  function td(e, t, l) {
    if (rt && typeof rt.onCommitFiberUnmount == "function")
      try {
        rt.onCommitFiberUnmount(Zn, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        Ne || Ht(l, t), It(
          e,
          t,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        Ne || Ht(l, t);
        var n = xe, a = at;
        xl(l.type) && (xe = l.stateNode, at = !1), It(
          e,
          t,
          l
        ), Na(l.stateNode), xe = n, at = a;
        break;
      case 5:
        Ne || Ht(l, t);
      case 6:
        if (n = xe, a = at, xe = null, It(
          e,
          t,
          l
        ), xe = n, at = a, xe !== null)
          if (at)
            try {
              (xe.nodeType === 9 ? xe.body : xe.nodeName === "HTML" ? xe.ownerDocument.body : xe).removeChild(l.stateNode);
            } catch (i) {
              Ee(
                l,
                t,
                i
              );
            }
          else
            try {
              xe.removeChild(l.stateNode);
            } catch (i) {
              Ee(
                l,
                t,
                i
              );
            }
        break;
      case 18:
        xe !== null && (at ? (e = xe, Qd(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          l.stateNode
        ), Ga(e)) : Qd(xe, l.stateNode));
        break;
      case 4:
        n = xe, a = at, xe = l.stateNode.containerInfo, at = !0, It(
          e,
          t,
          l
        ), xe = n, at = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ne || yl(2, l, t), Ne || yl(4, l, t), It(
          e,
          t,
          l
        );
        break;
      case 1:
        Ne || (Ht(l, t), n = l.stateNode, typeof n.componentWillUnmount == "function" && $o(
          l,
          t,
          n
        )), It(
          e,
          t,
          l
        );
        break;
      case 21:
        It(
          e,
          t,
          l
        );
        break;
      case 22:
        Ne = (n = Ne) || l.memoizedState !== null, It(
          e,
          t,
          l
        ), Ne = n;
        break;
      default:
        It(
          e,
          t,
          l
        );
    }
  }
  function ld(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Ga(e);
      } catch (l) {
        Ee(t, t.return, l);
      }
  }
  function Z0(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Po()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Po()), t;
      default:
        throw Error(r(435, e.tag));
    }
  }
  function ar(e, t) {
    var l = Z0(e);
    t.forEach(function(n) {
      var a = I0.bind(null, e, n);
      l.has(n) || (l.add(n), n.then(a, a));
    });
  }
  function dt(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var n = 0; n < l.length; n++) {
        var a = l[n], i = e, f = t, o = f;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 27:
              if (xl(o.type)) {
                xe = o.stateNode, at = !1;
                break e;
              }
              break;
            case 5:
              xe = o.stateNode, at = !1;
              break e;
            case 3:
            case 4:
              xe = o.stateNode.containerInfo, at = !0;
              break e;
          }
          o = o.return;
        }
        if (xe === null) throw Error(r(160));
        td(i, f, a), xe = null, at = !1, i = a.alternate, i !== null && (i.return = null), a.return = null;
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; )
        nd(t, e), t = t.sibling;
  }
  var _t = null;
  function nd(e, t) {
    var l = e.alternate, n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        dt(t, e), ht(e), n & 4 && (yl(3, e, e.return), Ta(3, e), yl(5, e, e.return));
        break;
      case 1:
        dt(t, e), ht(e), n & 512 && (Ne || l === null || Ht(l, l.return)), n & 64 && Pt && (e = e.updateQueue, e !== null && (n = e.callbacks, n !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? n : l.concat(n))));
        break;
      case 26:
        var a = _t;
        if (dt(t, e), ht(e), n & 512 && (Ne || l === null || Ht(l, l.return)), n & 4) {
          var i = l !== null ? l.memoizedState : null;
          if (n = e.memoizedState, l === null)
            if (n === null)
              if (e.stateNode === null) {
                e: {
                  n = e.type, l = e.memoizedProps, a = a.ownerDocument || a;
                  t: switch (n) {
                    case "title":
                      i = a.getElementsByTagName("title")[0], (!i || i[Kn] || i[$e] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = a.createElement(n), a.head.insertBefore(
                        i,
                        a.querySelector("head > title")
                      )), Ke(i, n, l), i[$e] = e, Ye(i), n = i;
                      break e;
                    case "link":
                      var f = Fd(
                        "link",
                        "href",
                        a
                      ).get(n + (l.href || ""));
                      if (f) {
                        for (var o = 0; o < f.length; o++)
                          if (i = f[o], i.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && i.getAttribute("rel") === (l.rel == null ? null : l.rel) && i.getAttribute("title") === (l.title == null ? null : l.title) && i.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            f.splice(o, 1);
                            break t;
                          }
                      }
                      i = a.createElement(n), Ke(i, n, l), a.head.appendChild(i);
                      break;
                    case "meta":
                      if (f = Fd(
                        "meta",
                        "content",
                        a
                      ).get(n + (l.content || ""))) {
                        for (o = 0; o < f.length; o++)
                          if (i = f[o], i.getAttribute("content") === (l.content == null ? null : "" + l.content) && i.getAttribute("name") === (l.name == null ? null : l.name) && i.getAttribute("property") === (l.property == null ? null : l.property) && i.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && i.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            f.splice(o, 1);
                            break t;
                          }
                      }
                      i = a.createElement(n), Ke(i, n, l), a.head.appendChild(i);
                      break;
                    default:
                      throw Error(r(468, n));
                  }
                  i[$e] = e, Ye(i), n = i;
                }
                e.stateNode = n;
              } else
                Pd(
                  a,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Wd(
                a,
                n,
                e.memoizedProps
              );
          else
            i !== n ? (i === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : i.count--, n === null ? Pd(
              a,
              e.type,
              e.stateNode
            ) : Wd(
              a,
              n,
              e.memoizedProps
            )) : n === null && e.stateNode !== null && er(
              e,
              e.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        dt(t, e), ht(e), n & 512 && (Ne || l === null || Ht(l, l.return)), l !== null && n & 4 && er(
          e,
          e.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (dt(t, e), ht(e), n & 512 && (Ne || l === null || Ht(l, l.return)), e.flags & 32) {
          a = e.stateNode;
          try {
            dn(a, "");
          } catch (D) {
            Ee(e, e.return, D);
          }
        }
        n & 4 && e.stateNode != null && (a = e.memoizedProps, er(
          e,
          a,
          l !== null ? l.memoizedProps : a
        )), n & 1024 && (nr = !0);
        break;
      case 6:
        if (dt(t, e), ht(e), n & 4) {
          if (e.stateNode === null)
            throw Error(r(162));
          n = e.memoizedProps, l = e.stateNode;
          try {
            l.nodeValue = n;
          } catch (D) {
            Ee(e, e.return, D);
          }
        }
        break;
      case 3:
        if (ni = null, a = _t, _t = ti(t.containerInfo), dt(t, e), _t = a, ht(e), n & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Ga(t.containerInfo);
          } catch (D) {
            Ee(e, e.return, D);
          }
        nr && (nr = !1, ad(e));
        break;
      case 4:
        n = _t, _t = ti(
          e.stateNode.containerInfo
        ), dt(t, e), ht(e), _t = n;
        break;
      case 12:
        dt(t, e), ht(e);
        break;
      case 13:
        dt(t, e), ht(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (fr = Nt()), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, ar(e, n)));
        break;
      case 22:
        a = e.memoizedState !== null;
        var h = l !== null && l.memoizedState !== null, A = Pt, _ = Ne;
        if (Pt = A || a, Ne = _ || h, dt(t, e), Ne = _, Pt = A, ht(e), n & 8192)
          e: for (t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, a && (l === null || h || Pt || Ne || Wl(e)), l = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                h = l = t;
                try {
                  if (i = h.stateNode, a)
                    f = i.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    o = h.stateNode;
                    var R = h.memoizedProps.style, x = R != null && R.hasOwnProperty("display") ? R.display : null;
                    o.style.display = x == null || typeof x == "boolean" ? "" : ("" + x).trim();
                  }
                } catch (D) {
                  Ee(h, h.return, D);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                h = t;
                try {
                  h.stateNode.nodeValue = a ? "" : h.memoizedProps;
                } catch (D) {
                  Ee(h, h.return, D);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              l === t && (l = null), t = t.return;
            }
            l === t && (l = null), t.sibling.return = t.return, t = t.sibling;
          }
        n & 4 && (n = e.updateQueue, n !== null && (l = n.retryQueue, l !== null && (n.retryQueue = null, ar(e, l))));
        break;
      case 19:
        dt(t, e), ht(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, ar(e, n)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        dt(t, e), ht(e);
    }
  }
  function ht(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, n = e.return; n !== null; ) {
          if (Wo(n)) {
            l = n;
            break;
          }
          n = n.return;
        }
        if (l == null) throw Error(r(160));
        switch (l.tag) {
          case 27:
            var a = l.stateNode, i = tr(e);
            Xu(e, i, a);
            break;
          case 5:
            var f = l.stateNode;
            l.flags & 32 && (dn(f, ""), l.flags &= -33);
            var o = tr(e);
            Xu(e, o, f);
            break;
          case 3:
          case 4:
            var h = l.stateNode.containerInfo, A = tr(e);
            lr(
              e,
              A,
              h
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (_) {
        Ee(e, e.return, _);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function ad(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        ad(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function gl(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Io(e, t.alternate, t), t = t.sibling;
  }
  function Wl(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          yl(4, t, t.return), Wl(t);
          break;
        case 1:
          Ht(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == "function" && $o(
            t,
            t.return,
            l
          ), Wl(t);
          break;
        case 27:
          Na(t.stateNode);
        case 26:
        case 5:
          Ht(t, t.return), Wl(t);
          break;
        case 22:
          t.memoizedState === null && Wl(t);
          break;
        case 30:
          Wl(t);
          break;
        default:
          Wl(t);
      }
      e = e.sibling;
    }
  }
  function bl(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var n = t.alternate, a = e, i = t, f = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          bl(
            a,
            i,
            l
          ), Ta(4, i);
          break;
        case 1:
          if (bl(
            a,
            i,
            l
          ), n = i, a = n.stateNode, typeof a.componentDidMount == "function")
            try {
              a.componentDidMount();
            } catch (A) {
              Ee(n, n.return, A);
            }
          if (n = i, a = n.updateQueue, a !== null) {
            var o = n.stateNode;
            try {
              var h = a.shared.hiddenCallbacks;
              if (h !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < h.length; a++)
                  Nf(h[a], o);
            } catch (A) {
              Ee(n, n.return, A);
            }
          }
          l && f & 64 && Ko(i), Aa(i, i.return);
          break;
        case 27:
          Fo(i);
        case 26:
        case 5:
          bl(
            a,
            i,
            l
          ), l && n === null && f & 4 && Jo(i), Aa(i, i.return);
          break;
        case 12:
          bl(
            a,
            i,
            l
          );
          break;
        case 13:
          bl(
            a,
            i,
            l
          ), l && f & 4 && ld(a, i);
          break;
        case 22:
          i.memoizedState === null && bl(
            a,
            i,
            l
          ), Aa(i, i.return);
          break;
        case 30:
          break;
        default:
          bl(
            a,
            i,
            l
          );
      }
      t = t.sibling;
    }
  }
  function ur(e, t) {
    var l = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && ra(l));
  }
  function ir(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ra(e));
  }
  function jt(e, t, l, n) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        ud(
          e,
          t,
          l,
          n
        ), t = t.sibling;
  }
  function ud(e, t, l, n) {
    var a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        jt(
          e,
          t,
          l,
          n
        ), a & 2048 && Ta(9, t);
        break;
      case 1:
        jt(
          e,
          t,
          l,
          n
        );
        break;
      case 3:
        jt(
          e,
          t,
          l,
          n
        ), a & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ra(e)));
        break;
      case 12:
        if (a & 2048) {
          jt(
            e,
            t,
            l,
            n
          ), e = t.stateNode;
          try {
            var i = t.memoizedProps, f = i.id, o = i.onPostCommit;
            typeof o == "function" && o(
              f,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (h) {
            Ee(t, t.return, h);
          }
        } else
          jt(
            e,
            t,
            l,
            n
          );
        break;
      case 13:
        jt(
          e,
          t,
          l,
          n
        );
        break;
      case 23:
        break;
      case 22:
        i = t.stateNode, f = t.alternate, t.memoizedState !== null ? i._visibility & 2 ? jt(
          e,
          t,
          l,
          n
        ) : xa(e, t) : i._visibility & 2 ? jt(
          e,
          t,
          l,
          n
        ) : (i._visibility |= 2, Rn(
          e,
          t,
          l,
          n,
          (t.subtreeFlags & 10256) !== 0
        )), a & 2048 && ur(f, t);
        break;
      case 24:
        jt(
          e,
          t,
          l,
          n
        ), a & 2048 && ir(t.alternate, t);
        break;
      default:
        jt(
          e,
          t,
          l,
          n
        );
    }
  }
  function Rn(e, t, l, n, a) {
    for (a = a && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var i = e, f = t, o = l, h = n, A = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Rn(
            i,
            f,
            o,
            h,
            a
          ), Ta(8, f);
          break;
        case 23:
          break;
        case 22:
          var _ = f.stateNode;
          f.memoizedState !== null ? _._visibility & 2 ? Rn(
            i,
            f,
            o,
            h,
            a
          ) : xa(
            i,
            f
          ) : (_._visibility |= 2, Rn(
            i,
            f,
            o,
            h,
            a
          )), a && A & 2048 && ur(
            f.alternate,
            f
          );
          break;
        case 24:
          Rn(
            i,
            f,
            o,
            h,
            a
          ), a && A & 2048 && ir(f.alternate, f);
          break;
        default:
          Rn(
            i,
            f,
            o,
            h,
            a
          );
      }
      t = t.sibling;
    }
  }
  function xa(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e, n = t, a = n.flags;
        switch (n.tag) {
          case 22:
            xa(l, n), a & 2048 && ur(
              n.alternate,
              n
            );
            break;
          case 24:
            xa(l, n), a & 2048 && ir(n.alternate, n);
            break;
          default:
            xa(l, n);
        }
        t = t.sibling;
      }
  }
  var Da = 8192;
  function Nn(e) {
    if (e.subtreeFlags & Da)
      for (e = e.child; e !== null; )
        id(e), e = e.sibling;
  }
  function id(e) {
    switch (e.tag) {
      case 26:
        Nn(e), e.flags & Da && e.memoizedState !== null && _v(
          _t,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Nn(e);
        break;
      case 3:
      case 4:
        var t = _t;
        _t = ti(e.stateNode.containerInfo), Nn(e), _t = t;
        break;
      case 22:
        e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = Da, Da = 16777216, Nn(e), Da = t) : Nn(e));
        break;
      default:
        Nn(e);
    }
  }
  function cd(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function wa(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var n = t[l];
          Le = n, sd(
            n,
            e
          );
        }
      cd(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        rd(e), e = e.sibling;
  }
  function rd(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        wa(e), e.flags & 2048 && yl(9, e, e.return);
        break;
      case 3:
        wa(e);
        break;
      case 12:
        wa(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Qu(e)) : wa(e);
        break;
      default:
        wa(e);
    }
  }
  function Qu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var n = t[l];
          Le = n, sd(
            n,
            e
          );
        }
      cd(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          yl(8, t, t.return), Qu(t);
          break;
        case 22:
          l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, Qu(t));
          break;
        default:
          Qu(t);
      }
      e = e.sibling;
    }
  }
  function sd(e, t) {
    for (; Le !== null; ) {
      var l = Le;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          yl(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var n = l.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          ra(l.memoizedState.cache);
      }
      if (n = l.child, n !== null) n.return = l, Le = n;
      else
        e: for (l = e; Le !== null; ) {
          n = Le;
          var a = n.sibling, i = n.return;
          if (ed(n), n === l) {
            Le = null;
            break e;
          }
          if (a !== null) {
            a.return = i, Le = a;
            break e;
          }
          Le = i;
        }
    }
  }
  var V0 = {
    getCacheForType: function(e) {
      var t = Je(je), l = t.data.get(e);
      return l === void 0 && (l = e(), t.data.set(e, l)), l;
    }
  }, k0 = typeof WeakMap == "function" ? WeakMap : Map, ye = 0, Ae = null, ae = null, se = 0, ge = 0, mt = null, pl = !1, Un = !1, cr = !1, el = 0, _e = 0, Sl = 0, Fl = 0, rr = 0, xt = 0, Cn = 0, Oa = null, ut = null, sr = !1, fr = 0, Zu = 1 / 0, Vu = null, El = null, ke = 0, Tl = null, Hn = null, jn = 0, or = 0, dr = null, fd = null, Ma = 0, hr = null;
  function vt() {
    if ((ye & 2) !== 0 && se !== 0)
      return se & -se;
    if (M.T !== null) {
      var e = An;
      return e !== 0 ? e : Sr();
    }
    return xs();
  }
  function od() {
    xt === 0 && (xt = (se & 536870912) === 0 || de ? Ss() : 536870912);
    var e = At.current;
    return e !== null && (e.flags |= 32), xt;
  }
  function yt(e, t, l) {
    (e === Ae && (ge === 2 || ge === 9) || e.cancelPendingCommit !== null) && (Bn(e, 0), Al(
      e,
      se,
      xt,
      !1
    )), kn(e, l), ((ye & 2) === 0 || e !== Ae) && (e === Ae && ((ye & 2) === 0 && (Fl |= l), _e === 4 && Al(
      e,
      se,
      xt,
      !1
    )), Bt(e));
  }
  function dd(e, t, l) {
    if ((ye & 6) !== 0) throw Error(r(327));
    var n = !l && (t & 124) === 0 && (t & e.expiredLanes) === 0 || Vn(e, t), a = n ? J0(e, t) : yr(e, t, !0), i = n;
    do {
      if (a === 0) {
        Un && !n && Al(e, t, 0, !1);
        break;
      } else {
        if (l = e.current.alternate, i && !K0(l)) {
          a = yr(e, t, !1), i = !1;
          continue;
        }
        if (a === 2) {
          if (i = t, e.errorRecoveryDisabledLanes & i)
            var f = 0;
          else
            f = e.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            t = f;
            e: {
              var o = e;
              a = Oa;
              var h = o.current.memoizedState.isDehydrated;
              if (h && (Bn(o, f).flags |= 256), f = yr(
                o,
                f,
                !1
              ), f !== 2) {
                if (cr && !h) {
                  o.errorRecoveryDisabledLanes |= i, Fl |= i, a = 4;
                  break e;
                }
                i = ut, ut = a, i !== null && (ut === null ? ut = i : ut.push.apply(
                  ut,
                  i
                ));
              }
              a = f;
            }
            if (i = !1, a !== 2) continue;
          }
        }
        if (a === 1) {
          Bn(e, 0), Al(e, t, 0, !0);
          break;
        }
        e: {
          switch (n = e, i = a, i) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Al(
                n,
                t,
                xt,
                !pl
              );
              break e;
            case 2:
              ut = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((t & 62914560) === t && (a = fr + 300 - Nt(), 10 < a)) {
            if (Al(
              n,
              t,
              xt,
              !pl
            ), lu(n, 0, !0) !== 0) break e;
            n.timeoutHandle = Ld(
              hd.bind(
                null,
                n,
                l,
                ut,
                Vu,
                sr,
                t,
                xt,
                Fl,
                Cn,
                pl,
                i,
                2,
                -0,
                0
              ),
              a
            );
            break e;
          }
          hd(
            n,
            l,
            ut,
            Vu,
            sr,
            t,
            xt,
            Fl,
            Cn,
            pl,
            i,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Bt(e);
  }
  function hd(e, t, l, n, a, i, f, o, h, A, _, R, x, D) {
    if (e.timeoutHandle = -1, R = t.subtreeFlags, (R & 8192 || (R & 16785408) === 16785408) && (Ha = { stylesheets: null, count: 0, unsuspend: Mv }, id(t), R = zv(), R !== null)) {
      e.cancelPendingCommit = R(
        Sd.bind(
          null,
          e,
          t,
          i,
          l,
          n,
          a,
          f,
          o,
          h,
          _,
          1,
          x,
          D
        )
      ), Al(e, i, f, !A);
      return;
    }
    Sd(
      e,
      t,
      i,
      l,
      n,
      a,
      f,
      o,
      h
    );
  }
  function K0(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var n = 0; n < l.length; n++) {
          var a = l[n], i = a.getSnapshot;
          a = a.value;
          try {
            if (!ft(i(), a)) return !1;
          } catch {
            return !1;
          }
        }
      if (l = t.child, t.subtreeFlags & 16384 && l !== null)
        l.return = t, t = l;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Al(e, t, l, n) {
    t &= ~rr, t &= ~Fl, e.suspendedLanes |= t, e.pingedLanes &= ~t, n && (e.warmLanes |= t), n = e.expirationTimes;
    for (var a = t; 0 < a; ) {
      var i = 31 - st(a), f = 1 << i;
      n[i] = -1, a &= ~f;
    }
    l !== 0 && Ts(e, l, t);
  }
  function ku() {
    return (ye & 6) === 0 ? (_a(0), !1) : !0;
  }
  function mr() {
    if (ae !== null) {
      if (ge === 0)
        var e = ae.return;
      else
        e = ae, kt = Vl = null, Rc(e), _n = null, pa = 0, e = ae;
      for (; e !== null; )
        ko(e.alternate, e), e = e.return;
      ae = null;
    }
  }
  function Bn(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && (e.timeoutHandle = -1, ov(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), mr(), Ae = e, ae = l = Qt(e.current, null), se = t, ge = 0, mt = null, pl = !1, Un = Vn(e, t), cr = !1, Cn = xt = rr = Fl = Sl = _e = 0, ut = Oa = null, sr = !1, (t & 8) !== 0 && (t |= t & 32);
    var n = e.entangledLanes;
    if (n !== 0)
      for (e = e.entanglements, n &= t; 0 < n; ) {
        var a = 31 - st(n), i = 1 << a;
        t |= e[a], n &= ~i;
      }
    return el = t, mu(), l;
  }
  function md(e, t) {
    te = null, M.H = Uu, t === fa || t === Au ? (t = zf(), ge = 3) : t === Of ? (t = zf(), ge = 4) : ge = t === No ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, mt = t, ae === null && (_e = 1, qu(
      e,
      pt(t, e.current)
    ));
  }
  function vd() {
    var e = M.H;
    return M.H = Uu, e === null ? Uu : e;
  }
  function yd() {
    var e = M.A;
    return M.A = V0, e;
  }
  function vr() {
    _e = 4, pl || (se & 4194048) !== se && At.current !== null || (Un = !0), (Sl & 134217727) === 0 && (Fl & 134217727) === 0 || Ae === null || Al(
      Ae,
      se,
      xt,
      !1
    );
  }
  function yr(e, t, l) {
    var n = ye;
    ye |= 2;
    var a = vd(), i = yd();
    (Ae !== e || se !== t) && (Vu = null, Bn(e, t)), t = !1;
    var f = _e;
    e: do
      try {
        if (ge !== 0 && ae !== null) {
          var o = ae, h = mt;
          switch (ge) {
            case 8:
              mr(), f = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              At.current === null && (t = !0);
              var A = ge;
              if (ge = 0, mt = null, qn(e, o, h, A), l && Un) {
                f = 0;
                break e;
              }
              break;
            default:
              A = ge, ge = 0, mt = null, qn(e, o, h, A);
          }
        }
        $0(), f = _e;
        break;
      } catch (_) {
        md(e, _);
      }
    while (!0);
    return t && e.shellSuspendCounter++, kt = Vl = null, ye = n, M.H = a, M.A = i, ae === null && (Ae = null, se = 0, mu()), f;
  }
  function $0() {
    for (; ae !== null; ) gd(ae);
  }
  function J0(e, t) {
    var l = ye;
    ye |= 2;
    var n = vd(), a = yd();
    Ae !== e || se !== t ? (Vu = null, Zu = Nt() + 500, Bn(e, t)) : Un = Vn(
      e,
      t
    );
    e: do
      try {
        if (ge !== 0 && ae !== null) {
          t = ae;
          var i = mt;
          t: switch (ge) {
            case 1:
              ge = 0, mt = null, qn(e, t, i, 1);
              break;
            case 2:
            case 9:
              if (Mf(i)) {
                ge = 0, mt = null, bd(t);
                break;
              }
              t = function() {
                ge !== 2 && ge !== 9 || Ae !== e || (ge = 7), Bt(e);
              }, i.then(t, t);
              break e;
            case 3:
              ge = 7;
              break e;
            case 4:
              ge = 5;
              break e;
            case 7:
              Mf(i) ? (ge = 0, mt = null, bd(t)) : (ge = 0, mt = null, qn(e, t, i, 7));
              break;
            case 5:
              var f = null;
              switch (ae.tag) {
                case 26:
                  f = ae.memoizedState;
                case 5:
                case 27:
                  var o = ae;
                  if (!f || Id(f)) {
                    ge = 0, mt = null;
                    var h = o.sibling;
                    if (h !== null) ae = h;
                    else {
                      var A = o.return;
                      A !== null ? (ae = A, Ku(A)) : ae = null;
                    }
                    break t;
                  }
              }
              ge = 0, mt = null, qn(e, t, i, 5);
              break;
            case 6:
              ge = 0, mt = null, qn(e, t, i, 6);
              break;
            case 8:
              mr(), _e = 6;
              break e;
            default:
              throw Error(r(462));
          }
        }
        W0();
        break;
      } catch (_) {
        md(e, _);
      }
    while (!0);
    return kt = Vl = null, M.H = n, M.A = a, ye = l, ae !== null ? 0 : (Ae = null, se = 0, mu(), _e);
  }
  function W0() {
    for (; ae !== null && !bm(); )
      gd(ae);
  }
  function gd(e) {
    var t = Zo(e.alternate, e, el);
    e.memoizedProps = e.pendingProps, t === null ? Ku(e) : ae = t;
  }
  function bd(e) {
    var t = e, l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = qo(
          l,
          t,
          t.pendingProps,
          t.type,
          void 0,
          se
        );
        break;
      case 11:
        t = qo(
          l,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          se
        );
        break;
      case 5:
        Rc(t);
      default:
        ko(l, t), t = ae = bf(t, el), t = Zo(l, t, el);
    }
    e.memoizedProps = e.pendingProps, t === null ? Ku(e) : ae = t;
  }
  function qn(e, t, l, n) {
    kt = Vl = null, Rc(t), _n = null, pa = 0;
    var a = t.return;
    try {
      if (Y0(
        e,
        a,
        t,
        l,
        se
      )) {
        _e = 1, qu(
          e,
          pt(l, e.current)
        ), ae = null;
        return;
      }
    } catch (i) {
      if (a !== null) throw ae = a, i;
      _e = 1, qu(
        e,
        pt(l, e.current)
      ), ae = null;
      return;
    }
    t.flags & 32768 ? (de || n === 1 ? e = !0 : Un || (se & 536870912) !== 0 ? e = !1 : (pl = e = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = At.current, n !== null && n.tag === 13 && (n.flags |= 16384))), pd(t, e)) : Ku(t);
  }
  function Ku(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        pd(
          t,
          pl
        );
        return;
      }
      e = t.return;
      var l = L0(
        t.alternate,
        t,
        el
      );
      if (l !== null) {
        ae = l;
        return;
      }
      if (t = t.sibling, t !== null) {
        ae = t;
        return;
      }
      ae = t = e;
    } while (t !== null);
    _e === 0 && (_e = 5);
  }
  function pd(e, t) {
    do {
      var l = X0(e.alternate, e);
      if (l !== null) {
        l.flags &= 32767, ae = l;
        return;
      }
      if (l = e.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !t && (e = e.sibling, e !== null)) {
        ae = e;
        return;
      }
      ae = e = l;
    } while (e !== null);
    _e = 6, ae = null;
  }
  function Sd(e, t, l, n, a, i, f, o, h) {
    e.cancelPendingCommit = null;
    do
      $u();
    while (ke !== 0);
    if ((ye & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === e.current) throw Error(r(177));
      if (i = t.lanes | t.childLanes, i |= ic, Mm(
        e,
        l,
        i,
        f,
        o,
        h
      ), e === Ae && (ae = Ae = null, se = 0), Hn = t, Tl = e, jn = l, or = i, dr = a, fd = n, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, ev(Ia, function() {
        return Dd(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), n = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || n) {
        n = M.T, M.T = null, a = q.p, q.p = 2, f = ye, ye |= 4;
        try {
          Q0(e, t, l);
        } finally {
          ye = f, q.p = a, M.T = n;
        }
      }
      ke = 1, Ed(), Td(), Ad();
    }
  }
  function Ed() {
    if (ke === 1) {
      ke = 0;
      var e = Tl, t = Hn, l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        l = M.T, M.T = null;
        var n = q.p;
        q.p = 2;
        var a = ye;
        ye |= 4;
        try {
          nd(t, e);
          var i = Mr, f = rf(e.containerInfo), o = i.focusedElem, h = i.selectionRange;
          if (f !== o && o && o.ownerDocument && cf(
            o.ownerDocument.documentElement,
            o
          )) {
            if (h !== null && tc(o)) {
              var A = h.start, _ = h.end;
              if (_ === void 0 && (_ = A), "selectionStart" in o)
                o.selectionStart = A, o.selectionEnd = Math.min(
                  _,
                  o.value.length
                );
              else {
                var R = o.ownerDocument || document, x = R && R.defaultView || window;
                if (x.getSelection) {
                  var D = x.getSelection(), J = o.textContent.length, K = Math.min(h.start, J), Se = h.end === void 0 ? K : Math.min(h.end, J);
                  !D.extend && K > Se && (f = Se, Se = K, K = f);
                  var p = uf(
                    o,
                    K
                  ), g = uf(
                    o,
                    Se
                  );
                  if (p && g && (D.rangeCount !== 1 || D.anchorNode !== p.node || D.anchorOffset !== p.offset || D.focusNode !== g.node || D.focusOffset !== g.offset)) {
                    var T = R.createRange();
                    T.setStart(p.node, p.offset), D.removeAllRanges(), K > Se ? (D.addRange(T), D.extend(g.node, g.offset)) : (T.setEnd(g.node, g.offset), D.addRange(T));
                  }
                }
              }
            }
            for (R = [], D = o; D = D.parentNode; )
              D.nodeType === 1 && R.push({
                element: D,
                left: D.scrollLeft,
                top: D.scrollTop
              });
            for (typeof o.focus == "function" && o.focus(), o = 0; o < R.length; o++) {
              var z = R[o];
              z.element.scrollLeft = z.left, z.element.scrollTop = z.top;
            }
          }
          ii = !!Or, Mr = Or = null;
        } finally {
          ye = a, q.p = n, M.T = l;
        }
      }
      e.current = t, ke = 2;
    }
  }
  function Td() {
    if (ke === 2) {
      ke = 0;
      var e = Tl, t = Hn, l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        l = M.T, M.T = null;
        var n = q.p;
        q.p = 2;
        var a = ye;
        ye |= 4;
        try {
          Io(e, t.alternate, t);
        } finally {
          ye = a, q.p = n, M.T = l;
        }
      }
      ke = 3;
    }
  }
  function Ad() {
    if (ke === 4 || ke === 3) {
      ke = 0, pm();
      var e = Tl, t = Hn, l = jn, n = fd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? ke = 5 : (ke = 0, Hn = Tl = null, xd(e, e.pendingLanes));
      var a = e.pendingLanes;
      if (a === 0 && (El = null), Ci(l), t = t.stateNode, rt && typeof rt.onCommitFiberRoot == "function")
        try {
          rt.onCommitFiberRoot(
            Zn,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (n !== null) {
        t = M.T, a = q.p, q.p = 2, M.T = null;
        try {
          for (var i = e.onRecoverableError, f = 0; f < n.length; f++) {
            var o = n[f];
            i(o.value, {
              componentStack: o.stack
            });
          }
        } finally {
          M.T = t, q.p = a;
        }
      }
      (jn & 3) !== 0 && $u(), Bt(e), a = e.pendingLanes, (l & 4194090) !== 0 && (a & 42) !== 0 ? e === hr ? Ma++ : (Ma = 0, hr = e) : Ma = 0, _a(0);
    }
  }
  function xd(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, ra(t)));
  }
  function $u(e) {
    return Ed(), Td(), Ad(), Dd();
  }
  function Dd() {
    if (ke !== 5) return !1;
    var e = Tl, t = or;
    or = 0;
    var l = Ci(jn), n = M.T, a = q.p;
    try {
      q.p = 32 > l ? 32 : l, M.T = null, l = dr, dr = null;
      var i = Tl, f = jn;
      if (ke = 0, Hn = Tl = null, jn = 0, (ye & 6) !== 0) throw Error(r(331));
      var o = ye;
      if (ye |= 4, rd(i.current), ud(
        i,
        i.current,
        f,
        l
      ), ye = o, _a(0, !1), rt && typeof rt.onPostCommitFiberRoot == "function")
        try {
          rt.onPostCommitFiberRoot(Zn, i);
        } catch {
        }
      return !0;
    } finally {
      q.p = a, M.T = n, xd(e, t);
    }
  }
  function wd(e, t, l) {
    t = pt(l, t), t = Vc(e.stateNode, t, 2), e = dl(e, t, 2), e !== null && (kn(e, 2), Bt(e));
  }
  function Ee(e, t, l) {
    if (e.tag === 3)
      wd(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          wd(
            t,
            e,
            l
          );
          break;
        } else if (t.tag === 1) {
          var n = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (El === null || !El.has(n))) {
            e = pt(l, e), l = zo(2), n = dl(t, l, 2), n !== null && (Ro(
              l,
              n,
              t,
              e
            ), kn(n, 2), Bt(n));
            break;
          }
        }
        t = t.return;
      }
  }
  function gr(e, t, l) {
    var n = e.pingCache;
    if (n === null) {
      n = e.pingCache = new k0();
      var a = /* @__PURE__ */ new Set();
      n.set(t, a);
    } else
      a = n.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), n.set(t, a));
    a.has(l) || (cr = !0, a.add(l), e = F0.bind(null, e, t, l), t.then(e, e));
  }
  function F0(e, t, l) {
    var n = e.pingCache;
    n !== null && n.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Ae === e && (se & l) === l && (_e === 4 || _e === 3 && (se & 62914560) === se && 300 > Nt() - fr ? (ye & 2) === 0 && Bn(e, 0) : rr |= l, Cn === se && (Cn = 0)), Bt(e);
  }
  function Od(e, t) {
    t === 0 && (t = Es()), e = pn(e, t), e !== null && (kn(e, t), Bt(e));
  }
  function P0(e) {
    var t = e.memoizedState, l = 0;
    t !== null && (l = t.retryLane), Od(e, l);
  }
  function I0(e, t) {
    var l = 0;
    switch (e.tag) {
      case 13:
        var n = e.stateNode, a = e.memoizedState;
        a !== null && (l = a.retryLane);
        break;
      case 19:
        n = e.stateNode;
        break;
      case 22:
        n = e.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    n !== null && n.delete(t), Od(e, l);
  }
  function ev(e, t) {
    return zi(e, t);
  }
  var Ju = null, Yn = null, br = !1, Wu = !1, pr = !1, Pl = 0;
  function Bt(e) {
    e !== Yn && e.next === null && (Yn === null ? Ju = Yn = e : Yn = Yn.next = e), Wu = !0, br || (br = !0, lv());
  }
  function _a(e, t) {
    if (!pr && Wu) {
      pr = !0;
      do
        for (var l = !1, n = Ju; n !== null; ) {
          if (e !== 0) {
            var a = n.pendingLanes;
            if (a === 0) var i = 0;
            else {
              var f = n.suspendedLanes, o = n.pingedLanes;
              i = (1 << 31 - st(42 | e) + 1) - 1, i &= a & ~(f & ~o), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (l = !0, Rd(n, i));
          } else
            i = se, i = lu(
              n,
              n === Ae ? i : 0,
              n.cancelPendingCommit !== null || n.timeoutHandle !== -1
            ), (i & 3) === 0 || Vn(n, i) || (l = !0, Rd(n, i));
          n = n.next;
        }
      while (l);
      pr = !1;
    }
  }
  function tv() {
    Md();
  }
  function Md() {
    Wu = br = !1;
    var e = 0;
    Pl !== 0 && (fv() && (e = Pl), Pl = 0);
    for (var t = Nt(), l = null, n = Ju; n !== null; ) {
      var a = n.next, i = _d(n, t);
      i === 0 ? (n.next = null, l === null ? Ju = a : l.next = a, a === null && (Yn = l)) : (l = n, (e !== 0 || (i & 3) !== 0) && (Wu = !0)), n = a;
    }
    _a(e);
  }
  function _d(e, t) {
    for (var l = e.suspendedLanes, n = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
      var f = 31 - st(i), o = 1 << f, h = a[f];
      h === -1 ? ((o & l) === 0 || (o & n) !== 0) && (a[f] = Om(o, t)) : h <= t && (e.expiredLanes |= o), i &= ~o;
    }
    if (t = Ae, l = se, l = lu(
      e,
      e === t ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), n = e.callbackNode, l === 0 || e === t && (ge === 2 || ge === 9) || e.cancelPendingCommit !== null)
      return n !== null && n !== null && Ri(n), e.callbackNode = null, e.callbackPriority = 0;
    if ((l & 3) === 0 || Vn(e, l)) {
      if (t = l & -l, t === e.callbackPriority) return t;
      switch (n !== null && Ri(n), Ci(l)) {
        case 2:
        case 8:
          l = bs;
          break;
        case 32:
          l = Ia;
          break;
        case 268435456:
          l = ps;
          break;
        default:
          l = Ia;
      }
      return n = zd.bind(null, e), l = zi(l, n), e.callbackPriority = t, e.callbackNode = l, t;
    }
    return n !== null && n !== null && Ri(n), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function zd(e, t) {
    if (ke !== 0 && ke !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var l = e.callbackNode;
    if ($u() && e.callbackNode !== l)
      return null;
    var n = se;
    return n = lu(
      e,
      e === Ae ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), n === 0 ? null : (dd(e, n, t), _d(e, Nt()), e.callbackNode != null && e.callbackNode === l ? zd.bind(null, e) : null);
  }
  function Rd(e, t) {
    if ($u()) return null;
    dd(e, t, !0);
  }
  function lv() {
    dv(function() {
      (ye & 6) !== 0 ? zi(
        gs,
        tv
      ) : Md();
    });
  }
  function Sr() {
    return Pl === 0 && (Pl = Ss()), Pl;
  }
  function Nd(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : cu("" + e);
  }
  function Ud(e, t) {
    var l = t.ownerDocument.createElement("input");
    return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
  }
  function nv(e, t, l, n, a) {
    if (t === "submit" && l && l.stateNode === a) {
      var i = Nd(
        (a[tt] || null).action
      ), f = n.submitter;
      f && (t = (t = f[tt] || null) ? Nd(t.formAction) : f.getAttribute("formAction"), t !== null && (i = t, f = null));
      var o = new ou(
        "action",
        "action",
        null,
        n,
        a
      );
      e.push({
        event: o,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (n.defaultPrevented) {
                if (Pl !== 0) {
                  var h = f ? Ud(a, f) : new FormData(a);
                  Gc(
                    l,
                    {
                      pending: !0,
                      data: h,
                      method: a.method,
                      action: i
                    },
                    null,
                    h
                  );
                }
              } else
                typeof i == "function" && (o.preventDefault(), h = f ? Ud(a, f) : new FormData(a), Gc(
                  l,
                  {
                    pending: !0,
                    data: h,
                    method: a.method,
                    action: i
                  },
                  i,
                  h
                ));
            },
            currentTarget: a
          }
        ]
      });
    }
  }
  for (var Er = 0; Er < uc.length; Er++) {
    var Tr = uc[Er], av = Tr.toLowerCase(), uv = Tr[0].toUpperCase() + Tr.slice(1);
    Mt(
      av,
      "on" + uv
    );
  }
  Mt(of, "onAnimationEnd"), Mt(df, "onAnimationIteration"), Mt(hf, "onAnimationStart"), Mt("dblclick", "onDoubleClick"), Mt("focusin", "onFocus"), Mt("focusout", "onBlur"), Mt(T0, "onTransitionRun"), Mt(A0, "onTransitionStart"), Mt(x0, "onTransitionCancel"), Mt(mf, "onTransitionEnd"), sn("onMouseEnter", ["mouseout", "mouseover"]), sn("onMouseLeave", ["mouseout", "mouseover"]), sn("onPointerEnter", ["pointerout", "pointerover"]), sn("onPointerLeave", ["pointerout", "pointerover"]), jl(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), jl(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), jl("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), jl(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), jl(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), jl(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var za = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), iv = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(za)
  );
  function Cd(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var n = e[l], a = n.event;
      n = n.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var f = n.length - 1; 0 <= f; f--) {
            var o = n[f], h = o.instance, A = o.currentTarget;
            if (o = o.listener, h !== i && a.isPropagationStopped())
              break e;
            i = o, a.currentTarget = A;
            try {
              i(a);
            } catch (_) {
              Bu(_);
            }
            a.currentTarget = null, i = h;
          }
        else
          for (f = 0; f < n.length; f++) {
            if (o = n[f], h = o.instance, A = o.currentTarget, o = o.listener, h !== i && a.isPropagationStopped())
              break e;
            i = o, a.currentTarget = A;
            try {
              i(a);
            } catch (_) {
              Bu(_);
            }
            a.currentTarget = null, i = h;
          }
      }
    }
  }
  function ue(e, t) {
    var l = t[Hi];
    l === void 0 && (l = t[Hi] = /* @__PURE__ */ new Set());
    var n = e + "__bubble";
    l.has(n) || (Hd(t, e, 2, !1), l.add(n));
  }
  function Ar(e, t, l) {
    var n = 0;
    t && (n |= 4), Hd(
      l,
      e,
      n,
      t
    );
  }
  var Fu = "_reactListening" + Math.random().toString(36).slice(2);
  function xr(e) {
    if (!e[Fu]) {
      e[Fu] = !0, ws.forEach(function(l) {
        l !== "selectionchange" && (iv.has(l) || Ar(l, !1, e), Ar(l, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Fu] || (t[Fu] = !0, Ar("selectionchange", !1, t));
    }
  }
  function Hd(e, t, l, n) {
    switch (uh(t)) {
      case 2:
        var a = Uv;
        break;
      case 8:
        a = Cv;
        break;
      default:
        a = qr;
    }
    l = a.bind(
      null,
      t,
      l,
      e
    ), a = void 0, !ki || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), n ? a !== void 0 ? e.addEventListener(t, l, {
      capture: !0,
      passive: a
    }) : e.addEventListener(t, l, !0) : a !== void 0 ? e.addEventListener(t, l, {
      passive: a
    }) : e.addEventListener(t, l, !1);
  }
  function Dr(e, t, l, n, a) {
    var i = n;
    if ((t & 1) === 0 && (t & 2) === 0 && n !== null)
      e: for (; ; ) {
        if (n === null) return;
        var f = n.tag;
        if (f === 3 || f === 4) {
          var o = n.stateNode.containerInfo;
          if (o === a) break;
          if (f === 4)
            for (f = n.return; f !== null; ) {
              var h = f.tag;
              if ((h === 3 || h === 4) && f.stateNode.containerInfo === a)
                return;
              f = f.return;
            }
          for (; o !== null; ) {
            if (f = un(o), f === null) return;
            if (h = f.tag, h === 5 || h === 6 || h === 26 || h === 27) {
              n = i = f;
              continue e;
            }
            o = o.parentNode;
          }
        }
        n = n.return;
      }
    Gs(function() {
      var A = i, _ = Zi(l), R = [];
      e: {
        var x = vf.get(e);
        if (x !== void 0) {
          var D = ou, J = e;
          switch (e) {
            case "keypress":
              if (su(l) === 0) break e;
            case "keydown":
            case "keyup":
              D = e0;
              break;
            case "focusin":
              J = "focus", D = Wi;
              break;
            case "focusout":
              J = "blur", D = Wi;
              break;
            case "beforeblur":
            case "afterblur":
              D = Wi;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              D = Qs;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              D = Xm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              D = n0;
              break;
            case of:
            case df:
            case hf:
              D = Vm;
              break;
            case mf:
              D = u0;
              break;
            case "scroll":
            case "scrollend":
              D = Gm;
              break;
            case "wheel":
              D = c0;
              break;
            case "copy":
            case "cut":
            case "paste":
              D = Km;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              D = Vs;
              break;
            case "toggle":
            case "beforetoggle":
              D = s0;
          }
          var K = (t & 4) !== 0, Se = !K && (e === "scroll" || e === "scrollend"), p = K ? x !== null ? x + "Capture" : null : x;
          K = [];
          for (var g = A, T; g !== null; ) {
            var z = g;
            if (T = z.stateNode, z = z.tag, z !== 5 && z !== 26 && z !== 27 || T === null || p === null || (z = Jn(g, p), z != null && K.push(
              Ra(g, z, T)
            )), Se) break;
            g = g.return;
          }
          0 < K.length && (x = new D(
            x,
            J,
            null,
            l,
            _
          ), R.push({ event: x, listeners: K }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (x = e === "mouseover" || e === "pointerover", D = e === "mouseout" || e === "pointerout", x && l !== Qi && (J = l.relatedTarget || l.fromElement) && (un(J) || J[an]))
            break e;
          if ((D || x) && (x = _.window === _ ? _ : (x = _.ownerDocument) ? x.defaultView || x.parentWindow : window, D ? (J = l.relatedTarget || l.toElement, D = A, J = J ? un(J) : null, J !== null && (Se = m(J), K = J.tag, J !== Se || K !== 5 && K !== 27 && K !== 6) && (J = null)) : (D = null, J = A), D !== J)) {
            if (K = Qs, z = "onMouseLeave", p = "onMouseEnter", g = "mouse", (e === "pointerout" || e === "pointerover") && (K = Vs, z = "onPointerLeave", p = "onPointerEnter", g = "pointer"), Se = D == null ? x : $n(D), T = J == null ? x : $n(J), x = new K(
              z,
              g + "leave",
              D,
              l,
              _
            ), x.target = Se, x.relatedTarget = T, z = null, un(_) === A && (K = new K(
              p,
              g + "enter",
              J,
              l,
              _
            ), K.target = T, K.relatedTarget = Se, z = K), Se = z, D && J)
              t: {
                for (K = D, p = J, g = 0, T = K; T; T = Gn(T))
                  g++;
                for (T = 0, z = p; z; z = Gn(z))
                  T++;
                for (; 0 < g - T; )
                  K = Gn(K), g--;
                for (; 0 < T - g; )
                  p = Gn(p), T--;
                for (; g--; ) {
                  if (K === p || p !== null && K === p.alternate)
                    break t;
                  K = Gn(K), p = Gn(p);
                }
                K = null;
              }
            else K = null;
            D !== null && jd(
              R,
              x,
              D,
              K,
              !1
            ), J !== null && Se !== null && jd(
              R,
              Se,
              J,
              K,
              !0
            );
          }
        }
        e: {
          if (x = A ? $n(A) : window, D = x.nodeName && x.nodeName.toLowerCase(), D === "select" || D === "input" && x.type === "file")
            var L = Is;
          else if (Fs(x))
            if (ef)
              L = p0;
            else {
              L = g0;
              var ne = y0;
            }
          else
            D = x.nodeName, !D || D.toLowerCase() !== "input" || x.type !== "checkbox" && x.type !== "radio" ? A && Xi(A.elementType) && (L = Is) : L = b0;
          if (L && (L = L(e, A))) {
            Ps(
              R,
              L,
              l,
              _
            );
            break e;
          }
          ne && ne(e, x, A), e === "focusout" && A && x.type === "number" && A.memoizedProps.value != null && Li(x, "number", x.value);
        }
        switch (ne = A ? $n(A) : window, e) {
          case "focusin":
            (Fs(ne) || ne.contentEditable === "true") && (yn = ne, lc = A, na = null);
            break;
          case "focusout":
            na = lc = yn = null;
            break;
          case "mousedown":
            nc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            nc = !1, sf(R, l, _);
            break;
          case "selectionchange":
            if (E0) break;
          case "keydown":
          case "keyup":
            sf(R, l, _);
        }
        var X;
        if (Pi)
          e: {
            switch (e) {
              case "compositionstart":
                var $ = "onCompositionStart";
                break e;
              case "compositionend":
                $ = "onCompositionEnd";
                break e;
              case "compositionupdate":
                $ = "onCompositionUpdate";
                break e;
            }
            $ = void 0;
          }
        else
          vn ? Js(e, l) && ($ = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && ($ = "onCompositionStart");
        $ && (ks && l.locale !== "ko" && (vn || $ !== "onCompositionStart" ? $ === "onCompositionEnd" && vn && (X = Ls()) : (rl = _, Ki = "value" in rl ? rl.value : rl.textContent, vn = !0)), ne = Pu(A, $), 0 < ne.length && ($ = new Zs(
          $,
          e,
          null,
          l,
          _
        ), R.push({ event: $, listeners: ne }), X ? $.data = X : (X = Ws(l), X !== null && ($.data = X)))), (X = o0 ? d0(e, l) : h0(e, l)) && ($ = Pu(A, "onBeforeInput"), 0 < $.length && (ne = new Zs(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          _
        ), R.push({
          event: ne,
          listeners: $
        }), ne.data = X)), nv(
          R,
          e,
          A,
          l,
          _
        );
      }
      Cd(R, t);
    });
  }
  function Ra(e, t, l) {
    return {
      instance: e,
      listener: t,
      currentTarget: l
    };
  }
  function Pu(e, t) {
    for (var l = t + "Capture", n = []; e !== null; ) {
      var a = e, i = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || i === null || (a = Jn(e, l), a != null && n.unshift(
        Ra(e, a, i)
      ), a = Jn(e, t), a != null && n.push(
        Ra(e, a, i)
      )), e.tag === 3) return n;
      e = e.return;
    }
    return [];
  }
  function Gn(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function jd(e, t, l, n, a) {
    for (var i = t._reactName, f = []; l !== null && l !== n; ) {
      var o = l, h = o.alternate, A = o.stateNode;
      if (o = o.tag, h !== null && h === n) break;
      o !== 5 && o !== 26 && o !== 27 || A === null || (h = A, a ? (A = Jn(l, i), A != null && f.unshift(
        Ra(l, A, h)
      )) : a || (A = Jn(l, i), A != null && f.push(
        Ra(l, A, h)
      ))), l = l.return;
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var cv = /\r\n?/g, rv = /\u0000|\uFFFD/g;
  function Bd(e) {
    return (typeof e == "string" ? e : "" + e).replace(cv, `
`).replace(rv, "");
  }
  function qd(e, t) {
    return t = Bd(t), Bd(e) === t;
  }
  function Iu() {
  }
  function pe(e, t, l, n, a, i) {
    switch (l) {
      case "children":
        typeof n == "string" ? t === "body" || t === "textarea" && n === "" || dn(e, n) : (typeof n == "number" || typeof n == "bigint") && t !== "body" && dn(e, "" + n);
        break;
      case "className":
        au(e, "class", n);
        break;
      case "tabIndex":
        au(e, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        au(e, l, n);
        break;
      case "style":
        qs(e, n, i);
        break;
      case "data":
        if (t !== "object") {
          au(e, "data", n);
          break;
        }
      case "src":
      case "href":
        if (n === "" && (t !== "a" || l !== "href")) {
          e.removeAttribute(l);
          break;
        }
        if (n == null || typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") {
          e.removeAttribute(l);
          break;
        }
        n = cu("" + n), e.setAttribute(l, n);
        break;
      case "action":
      case "formAction":
        if (typeof n == "function") {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof i == "function" && (l === "formAction" ? (t !== "input" && pe(e, t, "name", a.name, a, null), pe(
            e,
            t,
            "formEncType",
            a.formEncType,
            a,
            null
          ), pe(
            e,
            t,
            "formMethod",
            a.formMethod,
            a,
            null
          ), pe(
            e,
            t,
            "formTarget",
            a.formTarget,
            a,
            null
          )) : (pe(e, t, "encType", a.encType, a, null), pe(e, t, "method", a.method, a, null), pe(e, t, "target", a.target, a, null)));
        if (n == null || typeof n == "symbol" || typeof n == "boolean") {
          e.removeAttribute(l);
          break;
        }
        n = cu("" + n), e.setAttribute(l, n);
        break;
      case "onClick":
        n != null && (e.onclick = Iu);
        break;
      case "onScroll":
        n != null && ue("scroll", e);
        break;
      case "onScrollEnd":
        n != null && ue("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(r(61));
          if (l = n.__html, l != null) {
            if (a.children != null) throw Error(r(60));
            e.innerHTML = l;
          }
        }
        break;
      case "multiple":
        e.multiple = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "muted":
        e.muted = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (n == null || typeof n == "function" || typeof n == "boolean" || typeof n == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        l = cu("" + n), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          l
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        n != null && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(l, "" + n) : e.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        n && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(l, "") : e.removeAttribute(l);
        break;
      case "capture":
      case "download":
        n === !0 ? e.setAttribute(l, "") : n !== !1 && n != null && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(l, n) : e.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        n != null && typeof n != "function" && typeof n != "symbol" && !isNaN(n) && 1 <= n ? e.setAttribute(l, n) : e.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n) ? e.removeAttribute(l) : e.setAttribute(l, n);
        break;
      case "popover":
        ue("beforetoggle", e), ue("toggle", e), nu(e, "popover", n);
        break;
      case "xlinkActuate":
        Lt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          n
        );
        break;
      case "xlinkArcrole":
        Lt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          n
        );
        break;
      case "xlinkRole":
        Lt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          n
        );
        break;
      case "xlinkShow":
        Lt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          n
        );
        break;
      case "xlinkTitle":
        Lt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          n
        );
        break;
      case "xlinkType":
        Lt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          n
        );
        break;
      case "xmlBase":
        Lt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          n
        );
        break;
      case "xmlLang":
        Lt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          n
        );
        break;
      case "xmlSpace":
        Lt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          n
        );
        break;
      case "is":
        nu(e, "is", n);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = qm.get(l) || l, nu(e, l, n));
    }
  }
  function wr(e, t, l, n, a, i) {
    switch (l) {
      case "style":
        qs(e, n, i);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(r(61));
          if (l = n.__html, l != null) {
            if (a.children != null) throw Error(r(60));
            e.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof n == "string" ? dn(e, n) : (typeof n == "number" || typeof n == "bigint") && dn(e, "" + n);
        break;
      case "onScroll":
        n != null && ue("scroll", e);
        break;
      case "onScrollEnd":
        n != null && ue("scrollend", e);
        break;
      case "onClick":
        n != null && (e.onclick = Iu);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Os.hasOwnProperty(l))
          e: {
            if (l[0] === "o" && l[1] === "n" && (a = l.endsWith("Capture"), t = l.slice(2, a ? l.length - 7 : void 0), i = e[tt] || null, i = i != null ? i[l] : null, typeof i == "function" && e.removeEventListener(t, i, a), typeof n == "function")) {
              typeof i != "function" && i !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, n, a);
              break e;
            }
            l in e ? e[l] = n : n === !0 ? e.setAttribute(l, "") : nu(e, l, n);
          }
    }
  }
  function Ke(e, t, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        ue("error", e), ue("load", e);
        var n = !1, a = !1, i;
        for (i in l)
          if (l.hasOwnProperty(i)) {
            var f = l[i];
            if (f != null)
              switch (i) {
                case "src":
                  n = !0;
                  break;
                case "srcSet":
                  a = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, t));
                default:
                  pe(e, t, i, f, l, null);
              }
          }
        a && pe(e, t, "srcSet", l.srcSet, l, null), n && pe(e, t, "src", l.src, l, null);
        return;
      case "input":
        ue("invalid", e);
        var o = i = f = a = null, h = null, A = null;
        for (n in l)
          if (l.hasOwnProperty(n)) {
            var _ = l[n];
            if (_ != null)
              switch (n) {
                case "name":
                  a = _;
                  break;
                case "type":
                  f = _;
                  break;
                case "checked":
                  h = _;
                  break;
                case "defaultChecked":
                  A = _;
                  break;
                case "value":
                  i = _;
                  break;
                case "defaultValue":
                  o = _;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (_ != null)
                    throw Error(r(137, t));
                  break;
                default:
                  pe(e, t, n, _, l, null);
              }
          }
        Cs(
          e,
          i,
          o,
          h,
          A,
          f,
          a,
          !1
        ), uu(e);
        return;
      case "select":
        ue("invalid", e), n = f = i = null;
        for (a in l)
          if (l.hasOwnProperty(a) && (o = l[a], o != null))
            switch (a) {
              case "value":
                i = o;
                break;
              case "defaultValue":
                f = o;
                break;
              case "multiple":
                n = o;
              default:
                pe(e, t, a, o, l, null);
            }
        t = i, l = f, e.multiple = !!n, t != null ? on(e, !!n, t, !1) : l != null && on(e, !!n, l, !0);
        return;
      case "textarea":
        ue("invalid", e), i = a = n = null;
        for (f in l)
          if (l.hasOwnProperty(f) && (o = l[f], o != null))
            switch (f) {
              case "value":
                n = o;
                break;
              case "defaultValue":
                a = o;
                break;
              case "children":
                i = o;
                break;
              case "dangerouslySetInnerHTML":
                if (o != null) throw Error(r(91));
                break;
              default:
                pe(e, t, f, o, l, null);
            }
        js(e, n, a, i), uu(e);
        return;
      case "option":
        for (h in l)
          if (l.hasOwnProperty(h) && (n = l[h], n != null))
            switch (h) {
              case "selected":
                e.selected = n && typeof n != "function" && typeof n != "symbol";
                break;
              default:
                pe(e, t, h, n, l, null);
            }
        return;
      case "dialog":
        ue("beforetoggle", e), ue("toggle", e), ue("cancel", e), ue("close", e);
        break;
      case "iframe":
      case "object":
        ue("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < za.length; n++)
          ue(za[n], e);
        break;
      case "image":
        ue("error", e), ue("load", e);
        break;
      case "details":
        ue("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        ue("error", e), ue("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (A in l)
          if (l.hasOwnProperty(A) && (n = l[A], n != null))
            switch (A) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, t));
              default:
                pe(e, t, A, n, l, null);
            }
        return;
      default:
        if (Xi(t)) {
          for (_ in l)
            l.hasOwnProperty(_) && (n = l[_], n !== void 0 && wr(
              e,
              t,
              _,
              n,
              l,
              void 0
            ));
          return;
        }
    }
    for (o in l)
      l.hasOwnProperty(o) && (n = l[o], n != null && pe(e, t, o, n, l, null));
  }
  function sv(e, t, l, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var a = null, i = null, f = null, o = null, h = null, A = null, _ = null;
        for (D in l) {
          var R = l[D];
          if (l.hasOwnProperty(D) && R != null)
            switch (D) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                h = R;
              default:
                n.hasOwnProperty(D) || pe(e, t, D, null, n, R);
            }
        }
        for (var x in n) {
          var D = n[x];
          if (R = l[x], n.hasOwnProperty(x) && (D != null || R != null))
            switch (x) {
              case "type":
                i = D;
                break;
              case "name":
                a = D;
                break;
              case "checked":
                A = D;
                break;
              case "defaultChecked":
                _ = D;
                break;
              case "value":
                f = D;
                break;
              case "defaultValue":
                o = D;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (D != null)
                  throw Error(r(137, t));
                break;
              default:
                D !== R && pe(
                  e,
                  t,
                  x,
                  D,
                  n,
                  R
                );
            }
        }
        Gi(
          e,
          f,
          o,
          h,
          A,
          _,
          i,
          a
        );
        return;
      case "select":
        D = f = o = x = null;
        for (i in l)
          if (h = l[i], l.hasOwnProperty(i) && h != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                D = h;
              default:
                n.hasOwnProperty(i) || pe(
                  e,
                  t,
                  i,
                  null,
                  n,
                  h
                );
            }
        for (a in n)
          if (i = n[a], h = l[a], n.hasOwnProperty(a) && (i != null || h != null))
            switch (a) {
              case "value":
                x = i;
                break;
              case "defaultValue":
                o = i;
                break;
              case "multiple":
                f = i;
              default:
                i !== h && pe(
                  e,
                  t,
                  a,
                  i,
                  n,
                  h
                );
            }
        t = o, l = f, n = D, x != null ? on(e, !!l, x, !1) : !!n != !!l && (t != null ? on(e, !!l, t, !0) : on(e, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        D = x = null;
        for (o in l)
          if (a = l[o], l.hasOwnProperty(o) && a != null && !n.hasOwnProperty(o))
            switch (o) {
              case "value":
                break;
              case "children":
                break;
              default:
                pe(e, t, o, null, n, a);
            }
        for (f in n)
          if (a = n[f], i = l[f], n.hasOwnProperty(f) && (a != null || i != null))
            switch (f) {
              case "value":
                x = a;
                break;
              case "defaultValue":
                D = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(r(91));
                break;
              default:
                a !== i && pe(e, t, f, a, n, i);
            }
        Hs(e, x, D);
        return;
      case "option":
        for (var J in l)
          if (x = l[J], l.hasOwnProperty(J) && x != null && !n.hasOwnProperty(J))
            switch (J) {
              case "selected":
                e.selected = !1;
                break;
              default:
                pe(
                  e,
                  t,
                  J,
                  null,
                  n,
                  x
                );
            }
        for (h in n)
          if (x = n[h], D = l[h], n.hasOwnProperty(h) && x !== D && (x != null || D != null))
            switch (h) {
              case "selected":
                e.selected = x && typeof x != "function" && typeof x != "symbol";
                break;
              default:
                pe(
                  e,
                  t,
                  h,
                  x,
                  n,
                  D
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var K in l)
          x = l[K], l.hasOwnProperty(K) && x != null && !n.hasOwnProperty(K) && pe(e, t, K, null, n, x);
        for (A in n)
          if (x = n[A], D = l[A], n.hasOwnProperty(A) && x !== D && (x != null || D != null))
            switch (A) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (x != null)
                  throw Error(r(137, t));
                break;
              default:
                pe(
                  e,
                  t,
                  A,
                  x,
                  n,
                  D
                );
            }
        return;
      default:
        if (Xi(t)) {
          for (var Se in l)
            x = l[Se], l.hasOwnProperty(Se) && x !== void 0 && !n.hasOwnProperty(Se) && wr(
              e,
              t,
              Se,
              void 0,
              n,
              x
            );
          for (_ in n)
            x = n[_], D = l[_], !n.hasOwnProperty(_) || x === D || x === void 0 && D === void 0 || wr(
              e,
              t,
              _,
              x,
              n,
              D
            );
          return;
        }
    }
    for (var p in l)
      x = l[p], l.hasOwnProperty(p) && x != null && !n.hasOwnProperty(p) && pe(e, t, p, null, n, x);
    for (R in n)
      x = n[R], D = l[R], !n.hasOwnProperty(R) || x === D || x == null && D == null || pe(e, t, R, x, n, D);
  }
  var Or = null, Mr = null;
  function ei(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Yd(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Gd(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function _r(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var zr = null;
  function fv() {
    var e = window.event;
    return e && e.type === "popstate" ? e === zr ? !1 : (zr = e, !0) : (zr = null, !1);
  }
  var Ld = typeof setTimeout == "function" ? setTimeout : void 0, ov = typeof clearTimeout == "function" ? clearTimeout : void 0, Xd = typeof Promise == "function" ? Promise : void 0, dv = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xd < "u" ? function(e) {
    return Xd.resolve(null).then(e).catch(hv);
  } : Ld;
  function hv(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function xl(e) {
    return e === "head";
  }
  function Qd(e, t) {
    var l = t, n = 0, a = 0;
    do {
      var i = l.nextSibling;
      if (e.removeChild(l), i && i.nodeType === 8)
        if (l = i.data, l === "/$") {
          if (0 < n && 8 > n) {
            l = n;
            var f = e.ownerDocument;
            if (l & 1 && Na(f.documentElement), l & 2 && Na(f.body), l & 4)
              for (l = f.head, Na(l), f = l.firstChild; f; ) {
                var o = f.nextSibling, h = f.nodeName;
                f[Kn] || h === "SCRIPT" || h === "STYLE" || h === "LINK" && f.rel.toLowerCase() === "stylesheet" || l.removeChild(f), f = o;
              }
          }
          if (a === 0) {
            e.removeChild(i), Ga(t);
            return;
          }
          a--;
        } else
          l === "$" || l === "$?" || l === "$!" ? a++ : n = l.charCodeAt(0) - 48;
      else n = 0;
      l = i;
    } while (l);
    Ga(t);
  }
  function Rr(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (t = t.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Rr(l), ji(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(l);
    }
  }
  function mv(e, t, l, n) {
    for (; e.nodeType === 1; ) {
      var a = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!n && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (n) {
        if (!e[Kn])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (i = e.getAttribute("rel"), i === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (i !== a.rel || e.getAttribute("href") !== (a.href == null || a.href === "" ? null : a.href) || e.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin) || e.getAttribute("title") !== (a.title == null ? null : a.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (i = e.getAttribute("src"), (i !== (a.src == null ? null : a.src) || e.getAttribute("type") !== (a.type == null ? null : a.type) || e.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin)) && i && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var i = a.name == null ? null : "" + a.name;
        if (a.type === "hidden" && e.getAttribute("name") === i)
          return e;
      } else return e;
      if (e = zt(e.nextSibling), e === null) break;
    }
    return null;
  }
  function vv(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = zt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Nr(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function yv(e, t) {
    var l = e.ownerDocument;
    if (e.data !== "$?" || l.readyState === "complete")
      t();
    else {
      var n = function() {
        t(), l.removeEventListener("DOMContentLoaded", n);
      };
      l.addEventListener("DOMContentLoaded", n), e._reactRetry = n;
    }
  }
  function zt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
          break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  var Ur = null;
  function Zd(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (t === 0) return e;
          t--;
        } else l === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Vd(e, t, l) {
    switch (t = ei(l), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(r(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(r(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(r(454));
        return e;
      default:
        throw Error(r(451));
    }
  }
  function Na(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    ji(e);
  }
  var Dt = /* @__PURE__ */ new Map(), kd = /* @__PURE__ */ new Set();
  function ti(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var tl = q.d;
  q.d = {
    f: gv,
    r: bv,
    D: pv,
    C: Sv,
    L: Ev,
    m: Tv,
    X: xv,
    S: Av,
    M: Dv
  };
  function gv() {
    var e = tl.f(), t = ku();
    return e || t;
  }
  function bv(e) {
    var t = cn(e);
    t !== null && t.tag === 5 && t.type === "form" ? oo(t) : tl.r(e);
  }
  var Ln = typeof document > "u" ? null : document;
  function Kd(e, t, l) {
    var n = Ln;
    if (n && typeof t == "string" && t) {
      var a = bt(t);
      a = 'link[rel="' + e + '"][href="' + a + '"]', typeof l == "string" && (a += '[crossorigin="' + l + '"]'), kd.has(a) || (kd.add(a), e = { rel: e, crossOrigin: l, href: t }, n.querySelector(a) === null && (t = n.createElement("link"), Ke(t, "link", e), Ye(t), n.head.appendChild(t)));
    }
  }
  function pv(e) {
    tl.D(e), Kd("dns-prefetch", e, null);
  }
  function Sv(e, t) {
    tl.C(e, t), Kd("preconnect", e, t);
  }
  function Ev(e, t, l) {
    tl.L(e, t, l);
    var n = Ln;
    if (n && e && t) {
      var a = 'link[rel="preload"][as="' + bt(t) + '"]';
      t === "image" && l && l.imageSrcSet ? (a += '[imagesrcset="' + bt(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (a += '[imagesizes="' + bt(
        l.imageSizes
      ) + '"]')) : a += '[href="' + bt(e) + '"]';
      var i = a;
      switch (t) {
        case "style":
          i = Xn(e);
          break;
        case "script":
          i = Qn(e);
      }
      Dt.has(i) || (e = w(
        {
          rel: "preload",
          href: t === "image" && l && l.imageSrcSet ? void 0 : e,
          as: t
        },
        l
      ), Dt.set(i, e), n.querySelector(a) !== null || t === "style" && n.querySelector(Ua(i)) || t === "script" && n.querySelector(Ca(i)) || (t = n.createElement("link"), Ke(t, "link", e), Ye(t), n.head.appendChild(t)));
    }
  }
  function Tv(e, t) {
    tl.m(e, t);
    var l = Ln;
    if (l && e) {
      var n = t && typeof t.as == "string" ? t.as : "script", a = 'link[rel="modulepreload"][as="' + bt(n) + '"][href="' + bt(e) + '"]', i = a;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = Qn(e);
      }
      if (!Dt.has(i) && (e = w({ rel: "modulepreload", href: e }, t), Dt.set(i, e), l.querySelector(a) === null)) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Ca(i)))
              return;
        }
        n = l.createElement("link"), Ke(n, "link", e), Ye(n), l.head.appendChild(n);
      }
    }
  }
  function Av(e, t, l) {
    tl.S(e, t, l);
    var n = Ln;
    if (n && e) {
      var a = rn(n).hoistableStyles, i = Xn(e);
      t = t || "default";
      var f = a.get(i);
      if (!f) {
        var o = { loading: 0, preload: null };
        if (f = n.querySelector(
          Ua(i)
        ))
          o.loading = 5;
        else {
          e = w(
            { rel: "stylesheet", href: e, "data-precedence": t },
            l
          ), (l = Dt.get(i)) && Cr(e, l);
          var h = f = n.createElement("link");
          Ye(h), Ke(h, "link", e), h._p = new Promise(function(A, _) {
            h.onload = A, h.onerror = _;
          }), h.addEventListener("load", function() {
            o.loading |= 1;
          }), h.addEventListener("error", function() {
            o.loading |= 2;
          }), o.loading |= 4, li(f, t, n);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: o
        }, a.set(i, f);
      }
    }
  }
  function xv(e, t) {
    tl.X(e, t);
    var l = Ln;
    if (l && e) {
      var n = rn(l).hoistableScripts, a = Qn(e), i = n.get(a);
      i || (i = l.querySelector(Ca(a)), i || (e = w({ src: e, async: !0 }, t), (t = Dt.get(a)) && Hr(e, t), i = l.createElement("script"), Ye(i), Ke(i, "link", e), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, n.set(a, i));
    }
  }
  function Dv(e, t) {
    tl.M(e, t);
    var l = Ln;
    if (l && e) {
      var n = rn(l).hoistableScripts, a = Qn(e), i = n.get(a);
      i || (i = l.querySelector(Ca(a)), i || (e = w({ src: e, async: !0, type: "module" }, t), (t = Dt.get(a)) && Hr(e, t), i = l.createElement("script"), Ye(i), Ke(i, "link", e), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, n.set(a, i));
    }
  }
  function $d(e, t, l, n) {
    var a = (a = P.current) ? ti(a) : null;
    if (!a) throw Error(r(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (t = Xn(l.href), l = rn(
          a
        ).hoistableStyles, n = l.get(t), n || (n = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, n)), n) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          e = Xn(l.href);
          var i = rn(
            a
          ).hoistableStyles, f = i.get(e);
          if (f || (a = a.ownerDocument || a, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, i.set(e, f), (i = a.querySelector(
            Ua(e)
          )) && !i._p && (f.instance = i, f.state.loading = 5), Dt.has(e) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, Dt.set(e, l), i || wv(
            a,
            e,
            l,
            f.state
          ))), t && n === null)
            throw Error(r(528, ""));
          return f;
        }
        if (t && n !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Qn(l), l = rn(
          a
        ).hoistableScripts, n = l.get(t), n || (n = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, n)), n) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, e));
    }
  }
  function Xn(e) {
    return 'href="' + bt(e) + '"';
  }
  function Ua(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Jd(e) {
    return w({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function wv(e, t, l, n) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? n.loading = 1 : (t = e.createElement("link"), n.preload = t, t.addEventListener("load", function() {
      return n.loading |= 1;
    }), t.addEventListener("error", function() {
      return n.loading |= 2;
    }), Ke(t, "link", l), Ye(t), e.head.appendChild(t));
  }
  function Qn(e) {
    return '[src="' + bt(e) + '"]';
  }
  function Ca(e) {
    return "script[async]" + e;
  }
  function Wd(e, t, l) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var n = e.querySelector(
            'style[data-href~="' + bt(l.href) + '"]'
          );
          if (n)
            return t.instance = n, Ye(n), n;
          var a = w({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return n = (e.ownerDocument || e).createElement(
            "style"
          ), Ye(n), Ke(n, "style", a), li(n, l.precedence, e), t.instance = n;
        case "stylesheet":
          a = Xn(l.href);
          var i = e.querySelector(
            Ua(a)
          );
          if (i)
            return t.state.loading |= 4, t.instance = i, Ye(i), i;
          n = Jd(l), (a = Dt.get(a)) && Cr(n, a), i = (e.ownerDocument || e).createElement("link"), Ye(i);
          var f = i;
          return f._p = new Promise(function(o, h) {
            f.onload = o, f.onerror = h;
          }), Ke(i, "link", n), t.state.loading |= 4, li(i, l.precedence, e), t.instance = i;
        case "script":
          return i = Qn(l.src), (a = e.querySelector(
            Ca(i)
          )) ? (t.instance = a, Ye(a), a) : (n = l, (a = Dt.get(i)) && (n = w({}, l), Hr(n, a)), e = e.ownerDocument || e, a = e.createElement("script"), Ye(a), Ke(a, "link", n), e.head.appendChild(a), t.instance = a);
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (n = t.instance, t.state.loading |= 4, li(n, l.precedence, e));
    return t.instance;
  }
  function li(e, t, l) {
    for (var n = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), a = n.length ? n[n.length - 1] : null, i = a, f = 0; f < n.length; f++) {
      var o = n[f];
      if (o.dataset.precedence === t) i = o;
      else if (i !== a) break;
    }
    i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
  }
  function Cr(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Hr(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var ni = null;
  function Fd(e, t, l) {
    if (ni === null) {
      var n = /* @__PURE__ */ new Map(), a = ni = /* @__PURE__ */ new Map();
      a.set(l, n);
    } else
      a = ni, n = a.get(l), n || (n = /* @__PURE__ */ new Map(), a.set(l, n));
    if (n.has(e)) return n;
    for (n.set(e, null), l = l.getElementsByTagName(e), a = 0; a < l.length; a++) {
      var i = l[a];
      if (!(i[Kn] || i[$e] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = i.getAttribute(t) || "";
        f = e + f;
        var o = n.get(f);
        o ? o.push(i) : n.set(f, [i]);
      }
    }
    return n;
  }
  function Pd(e, t, l) {
    e = e.ownerDocument || e, e.head.insertBefore(
      l,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function Ov(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        switch (t.rel) {
          case "stylesheet":
            return e = t.disabled, typeof t.precedence == "string" && e == null;
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function Id(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Ha = null;
  function Mv() {
  }
  function _v(e, t, l) {
    if (Ha === null) throw Error(r(475));
    var n = Ha;
    if (t.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var a = Xn(l.href), i = e.querySelector(
          Ua(a)
        );
        if (i) {
          e = i._p, e !== null && typeof e == "object" && typeof e.then == "function" && (n.count++, n = ai.bind(n), e.then(n, n)), t.state.loading |= 4, t.instance = i, Ye(i);
          return;
        }
        i = e.ownerDocument || e, l = Jd(l), (a = Dt.get(a)) && Cr(l, a), i = i.createElement("link"), Ye(i);
        var f = i;
        f._p = new Promise(function(o, h) {
          f.onload = o, f.onerror = h;
        }), Ke(i, "link", l), t.instance = i;
      }
      n.stylesheets === null && (n.stylesheets = /* @__PURE__ */ new Map()), n.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (n.count++, t = ai.bind(n), e.addEventListener("load", t), e.addEventListener("error", t));
    }
  }
  function zv() {
    if (Ha === null) throw Error(r(475));
    var e = Ha;
    return e.stylesheets && e.count === 0 && jr(e, e.stylesheets), 0 < e.count ? function(t) {
      var l = setTimeout(function() {
        if (e.stylesheets && jr(e, e.stylesheets), e.unsuspend) {
          var n = e.unsuspend;
          e.unsuspend = null, n();
        }
      }, 6e4);
      return e.unsuspend = t, function() {
        e.unsuspend = null, clearTimeout(l);
      };
    } : null;
  }
  function ai() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) jr(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var ui = null;
  function jr(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, ui = /* @__PURE__ */ new Map(), t.forEach(Rv, e), ui = null, ai.call(e));
  }
  function Rv(e, t) {
    if (!(t.state.loading & 4)) {
      var l = ui.get(e);
      if (l) var n = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), ui.set(e, l);
        for (var a = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), i = 0; i < a.length; i++) {
          var f = a[i];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (l.set(f.dataset.precedence, f), n = f);
        }
        n && l.set(null, n);
      }
      a = t.instance, f = a.getAttribute("data-precedence"), i = l.get(f) || n, i === n && l.set(null, a), l.set(f, a), this.count++, n = ai.bind(this), a.addEventListener("load", n), a.addEventListener("error", n), i ? i.parentNode.insertBefore(a, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(a, e.firstChild)), t.state.loading |= 4;
    }
  }
  var ja = {
    $$typeof: I,
    Provider: null,
    Consumer: null,
    _currentValue: Q,
    _currentValue2: Q,
    _threadCount: 0
  };
  function Nv(e, t, l, n, a, i, f, o) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ni(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ni(0), this.hiddenUpdates = Ni(null), this.identifierPrefix = n, this.onUncaughtError = a, this.onCaughtError = i, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = o, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function eh(e, t, l, n, a, i, f, o, h, A, _, R) {
    return e = new Nv(
      e,
      t,
      l,
      f,
      o,
      h,
      A,
      R
    ), t = 1, i === !0 && (t |= 24), i = ot(3, null, null, t), e.current = i, i.stateNode = e, t = gc(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
      element: n,
      isDehydrated: l,
      cache: t
    }, Ec(i), e;
  }
  function th(e) {
    return e ? (e = Sn, e) : Sn;
  }
  function lh(e, t, l, n, a, i) {
    a = th(a), n.context === null ? n.context = a : n.pendingContext = a, n = ol(t), n.payload = { element: l }, i = i === void 0 ? null : i, i !== null && (n.callback = i), l = dl(e, n, t), l !== null && (yt(l, e, t), da(l, e, t));
  }
  function nh(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function Br(e, t) {
    nh(e, t), (e = e.alternate) && nh(e, t);
  }
  function ah(e) {
    if (e.tag === 13) {
      var t = pn(e, 67108864);
      t !== null && yt(t, e, 67108864), Br(e, 67108864);
    }
  }
  var ii = !0;
  function Uv(e, t, l, n) {
    var a = M.T;
    M.T = null;
    var i = q.p;
    try {
      q.p = 2, qr(e, t, l, n);
    } finally {
      q.p = i, M.T = a;
    }
  }
  function Cv(e, t, l, n) {
    var a = M.T;
    M.T = null;
    var i = q.p;
    try {
      q.p = 8, qr(e, t, l, n);
    } finally {
      q.p = i, M.T = a;
    }
  }
  function qr(e, t, l, n) {
    if (ii) {
      var a = Yr(n);
      if (a === null)
        Dr(
          e,
          t,
          n,
          ci,
          l
        ), ih(e, n);
      else if (jv(
        a,
        e,
        t,
        l,
        n
      ))
        n.stopPropagation();
      else if (ih(e, n), t & 4 && -1 < Hv.indexOf(e)) {
        for (; a !== null; ) {
          var i = cn(a);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var f = Hl(i.pendingLanes);
                  if (f !== 0) {
                    var o = i;
                    for (o.pendingLanes |= 2, o.entangledLanes |= 2; f; ) {
                      var h = 1 << 31 - st(f);
                      o.entanglements[1] |= h, f &= ~h;
                    }
                    Bt(i), (ye & 6) === 0 && (Zu = Nt() + 500, _a(0));
                  }
                }
                break;
              case 13:
                o = pn(i, 2), o !== null && yt(o, i, 2), ku(), Br(i, 2);
            }
          if (i = Yr(n), i === null && Dr(
            e,
            t,
            n,
            ci,
            l
          ), i === a) break;
          a = i;
        }
        a !== null && n.stopPropagation();
      } else
        Dr(
          e,
          t,
          n,
          null,
          l
        );
    }
  }
  function Yr(e) {
    return e = Zi(e), Gr(e);
  }
  var ci = null;
  function Gr(e) {
    if (ci = null, e = un(e), e !== null) {
      var t = m(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (e = E(t), e !== null) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ci = e, null;
  }
  function uh(e) {
    switch (e) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Sm()) {
          case gs:
            return 2;
          case bs:
            return 8;
          case Ia:
          case Em:
            return 32;
          case ps:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Lr = !1, Dl = null, wl = null, Ol = null, Ba = /* @__PURE__ */ new Map(), qa = /* @__PURE__ */ new Map(), Ml = [], Hv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function ih(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Dl = null;
        break;
      case "dragenter":
      case "dragleave":
        wl = null;
        break;
      case "mouseover":
      case "mouseout":
        Ol = null;
        break;
      case "pointerover":
      case "pointerout":
        Ba.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        qa.delete(t.pointerId);
    }
  }
  function Ya(e, t, l, n, a, i) {
    return e === null || e.nativeEvent !== i ? (e = {
      blockedOn: t,
      domEventName: l,
      eventSystemFlags: n,
      nativeEvent: i,
      targetContainers: [a]
    }, t !== null && (t = cn(t), t !== null && ah(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function jv(e, t, l, n, a) {
    switch (t) {
      case "focusin":
        return Dl = Ya(
          Dl,
          e,
          t,
          l,
          n,
          a
        ), !0;
      case "dragenter":
        return wl = Ya(
          wl,
          e,
          t,
          l,
          n,
          a
        ), !0;
      case "mouseover":
        return Ol = Ya(
          Ol,
          e,
          t,
          l,
          n,
          a
        ), !0;
      case "pointerover":
        var i = a.pointerId;
        return Ba.set(
          i,
          Ya(
            Ba.get(i) || null,
            e,
            t,
            l,
            n,
            a
          )
        ), !0;
      case "gotpointercapture":
        return i = a.pointerId, qa.set(
          i,
          Ya(
            qa.get(i) || null,
            e,
            t,
            l,
            n,
            a
          )
        ), !0;
    }
    return !1;
  }
  function ch(e) {
    var t = un(e.target);
    if (t !== null) {
      var l = m(t);
      if (l !== null) {
        if (t = l.tag, t === 13) {
          if (t = E(l), t !== null) {
            e.blockedOn = t, _m(e.priority, function() {
              if (l.tag === 13) {
                var n = vt();
                n = Ui(n);
                var a = pn(l, n);
                a !== null && yt(a, l, n), Br(l, n);
              }
            });
            return;
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function ri(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = Yr(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var n = new l.constructor(
          l.type,
          l
        );
        Qi = n, l.target.dispatchEvent(n), Qi = null;
      } else
        return t = cn(l), t !== null && ah(t), e.blockedOn = l, !1;
      t.shift();
    }
    return !0;
  }
  function rh(e, t, l) {
    ri(e) && l.delete(t);
  }
  function Bv() {
    Lr = !1, Dl !== null && ri(Dl) && (Dl = null), wl !== null && ri(wl) && (wl = null), Ol !== null && ri(Ol) && (Ol = null), Ba.forEach(rh), qa.forEach(rh);
  }
  function si(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Lr || (Lr = !0, u.unstable_scheduleCallback(
      u.unstable_NormalPriority,
      Bv
    )));
  }
  var fi = null;
  function sh(e) {
    fi !== e && (fi = e, u.unstable_scheduleCallback(
      u.unstable_NormalPriority,
      function() {
        fi === e && (fi = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t], n = e[t + 1], a = e[t + 2];
          if (typeof n != "function") {
            if (Gr(n || l) === null)
              continue;
            break;
          }
          var i = cn(l);
          i !== null && (e.splice(t, 3), t -= 3, Gc(
            i,
            {
              pending: !0,
              data: a,
              method: l.method,
              action: n
            },
            n,
            a
          ));
        }
      }
    ));
  }
  function Ga(e) {
    function t(h) {
      return si(h, e);
    }
    Dl !== null && si(Dl, e), wl !== null && si(wl, e), Ol !== null && si(Ol, e), Ba.forEach(t), qa.forEach(t);
    for (var l = 0; l < Ml.length; l++) {
      var n = Ml[l];
      n.blockedOn === e && (n.blockedOn = null);
    }
    for (; 0 < Ml.length && (l = Ml[0], l.blockedOn === null); )
      ch(l), l.blockedOn === null && Ml.shift();
    if (l = (e.ownerDocument || e).$$reactFormReplay, l != null)
      for (n = 0; n < l.length; n += 3) {
        var a = l[n], i = l[n + 1], f = a[tt] || null;
        if (typeof i == "function")
          f || sh(l);
        else if (f) {
          var o = null;
          if (i && i.hasAttribute("formAction")) {
            if (a = i, f = i[tt] || null)
              o = f.formAction;
            else if (Gr(a) !== null) continue;
          } else o = f.action;
          typeof o == "function" ? l[n + 1] = o : (l.splice(n, 3), n -= 3), sh(l);
        }
      }
  }
  function Xr(e) {
    this._internalRoot = e;
  }
  oi.prototype.render = Xr.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(r(409));
    var l = t.current, n = vt();
    lh(l, n, e, t, null, null);
  }, oi.prototype.unmount = Xr.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      lh(e.current, 2, null, e, null, null), ku(), t[an] = null;
    }
  };
  function oi(e) {
    this._internalRoot = e;
  }
  oi.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = xs();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < Ml.length && t !== 0 && t < Ml[l].priority; l++) ;
      Ml.splice(l, 0, e), l === 0 && ch(e);
    }
  };
  var fh = c.version;
  if (fh !== "19.1.1")
    throw Error(
      r(
        527,
        fh,
        "19.1.1"
      )
    );
  q.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","), Error(r(268, e)));
    return e = v(t), e = e !== null ? b(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var qv = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: M,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var di = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!di.isDisabled && di.supportsFiber)
      try {
        Zn = di.inject(
          qv
        ), rt = di;
      } catch {
      }
  }
  return La.createRoot = function(e, t) {
    if (!d(e)) throw Error(r(299));
    var l = !1, n = "", a = wo, i = Oo, f = Mo, o = null;
    return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (o = t.unstable_transitionCallbacks)), t = eh(
      e,
      1,
      !1,
      null,
      null,
      l,
      n,
      a,
      i,
      f,
      o,
      null
    ), e[an] = t.current, xr(e), new Xr(t);
  }, La.hydrateRoot = function(e, t, l) {
    if (!d(e)) throw Error(r(299));
    var n = !1, a = "", i = wo, f = Oo, o = Mo, h = null, A = null;
    return l != null && (l.unstable_strictMode === !0 && (n = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (i = l.onUncaughtError), l.onCaughtError !== void 0 && (f = l.onCaughtError), l.onRecoverableError !== void 0 && (o = l.onRecoverableError), l.unstable_transitionCallbacks !== void 0 && (h = l.unstable_transitionCallbacks), l.formState !== void 0 && (A = l.formState)), t = eh(
      e,
      1,
      !0,
      t,
      l ?? null,
      n,
      a,
      i,
      f,
      o,
      h,
      A
    ), t.context = th(null), l = t.current, n = vt(), n = Ui(n), a = ol(n), a.callback = null, dl(l, a, n), l = n, t.current.lanes = l, kn(t, l), Bt(t), e[an] = t.current, xr(e), new oi(t);
  }, La.version = "19.1.1", La;
}
var ph;
function ay() {
  if (ph) return Zr.exports;
  ph = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (c) {
        console.error(c);
      }
  }
  return u(), Zr.exports = ny(), Zr.exports;
}
var uy = ay();
class iy {
  listeners = /* @__PURE__ */ new Map();
  on(c, s) {
    return this.listeners.has(c) || this.listeners.set(c, /* @__PURE__ */ new Set()), this.listeners.get(c).add(s), () => this.off(c, s);
  }
  off(c, s) {
    const r = this.listeners.get(c);
    r && (r.delete(s), r.size === 0 && this.listeners.delete(c));
  }
  emit(c, s) {
    const r = this.listeners.get(c);
    r && r.forEach((d) => {
      try {
        d(s);
      } catch (m) {
        console.error(`[UIEventBus] Error in event handler for ${c}:`, m);
      }
    });
  }
  showSetupWidget(c) {
    this.emit("showSetup", c);
  }
  hideSetupWidget() {
    this.emit("hideSetup");
  }
  showWarning(c) {
    this.emit("showWarning", c);
  }
  hideWarning(c) {
    this.emit("hideWarning", { id: c });
  }
  updateWebcamStream(c) {
    this.emit("updateWebcamStream", { stream: c });
  }
  showWebcamWidget() {
    this.emit("showWebcam");
  }
  hideWebcamWidget() {
    this.emit("hideWebcam");
  }
  getListenerCount(c) {
    const s = this.listeners.get(c);
    return s ? s.size : 0;
  }
  getEventNames() {
    return Array.from(this.listeners.keys());
  }
  removeAllListeners(c) {
    this.listeners.delete(c);
  }
  emitAnomalyDetected(c) {
    this.emit("anomalyDetected", c);
  }
  emitAnomalyResolved(c) {
    this.emit("anomalyResolved", { id: c });
  }
  removeAllListenersAll() {
    this.listeners.clear();
  }
}
var $r = { exports: {} }, Xa = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sh;
function cy() {
  if (Sh) return Xa;
  Sh = 1;
  var u = Symbol.for("react.transitional.element"), c = Symbol.for("react.fragment");
  function s(r, d, m) {
    var E = null;
    if (m !== void 0 && (E = "" + m), d.key !== void 0 && (E = "" + d.key), "key" in d) {
      m = {};
      for (var S in d)
        S !== "key" && (m[S] = d[S]);
    } else m = d;
    return d = m.ref, {
      $$typeof: u,
      type: r,
      key: E,
      ref: d !== void 0 ? d : null,
      props: m
    };
  }
  return Xa.Fragment = c, Xa.jsx = s, Xa.jsxs = s, Xa;
}
var Eh;
function ry() {
  return Eh || (Eh = 1, $r.exports = cy()), $r.exports;
}
var U = ry();
const sy = {
  webcam_no_face: {
    type: "no_face",
    severity: "high",
    blocking: !0,
    continueEnabled: !1,
    title: "Anomaly Detected",
    description: "No face detected in camera. This has been reported to the system for review. Please ensure your face is visible to continue.",
    resolutionSteps: [
      "Check if your camera is working properly",
      "Ensure good lighting in your environment",
      "Position yourself in front of the camera",
      "Remove any obstructions from your face"
    ]
  },
  webcam_multiple_faces: {
    type: "multiple_faces",
    severity: "high",
    blocking: !0,
    continueEnabled: !1,
    title: "Anomaly Detected",
    description: "Multiple faces detected in camera. This has been reported to the system for review. Only one person should be visible.",
    resolutionSteps: [
      "Please ensure that only your face is visible",
      "Adjust your camera to avoid multiple faces",
      "You cannot continue until the issue is resolved"
    ]
  },
  browser_tab_switch: {
    type: "tab_switch",
    severity: "low",
    blocking: !1,
    continueEnabled: !0,
    title: "Anomaly Detected",
    description: "Tab switch detected. This has been reported to the system. Please stay on this tab during the session."
  },
  browser_window_minimize: {
    type: "window_minimize",
    severity: "low",
    blocking: !1,
    continueEnabled: !0,
    title: "Anomaly Detected",
    description: "Window minimized. This has been reported to the system. Please keep the window focused during the session."
  },
  browser_special_key: {
    type: "tab_switch",
    // Reuse existing warning type for special keys
    severity: "low",
    blocking: !1,
    continueEnabled: !0,
    title: "Anomaly Detected",
    description: "Restricted key pressed. This has been reported to the system. Please avoid using special keys during the session."
  },
  browser_permission_stop: {
    type: "permission_lost",
    severity: "high",
    blocking: !0,
    continueEnabled: !1,
    title: "Anomaly Detected",
    description: "Camera or microphone permission lost. This has been reported to the system. Please restore permissions to continue.",
    resolutionSteps: [
      "Check your browser permissions",
      "Re-enable camera and microphone access",
      "Refresh the page if necessary"
    ]
  }
};
function fy(u) {
  const c = sy[u.type];
  if (!c)
    throw new Error(`No warning template for anomaly type: ${u.type}`);
  return {
    id: `warning_${u.id}`,
    type: c.type,
    severity: c.severity,
    title: c.title,
    description: c.description,
    resolutionSteps: c.resolutionSteps,
    timestamp: u.timestamp,
    blocking: c.blocking,
    continueEnabled: c.continueEnabled,
    source: "anomaly",
    anomalyId: u.id
  };
}
function oy(u, c) {
  return !(c.warnings.some(
    (m) => m.blocking && !m.continueEnabled
  ) && u.severity === "low" || c.warnings.some(
    (m) => m.severity === "high" || m.severity === "critical"
  ) && (u.severity === "high" || u.severity === "critical") || c.warnings.some(
    (m) => m.severity === "low" || m.severity === "medium"
  ) && (u.severity === "low" || u.severity === "medium"));
}
const dy = {
  setupWidget: {
    isVisible: !1,
    config: null
  },
  warnings: [],
  warningQueue: [],
  anomalies: [],
  webcamWidget: {
    isVisible: !1,
    stream: null
  }
};
function hy(u, c) {
  switch (c.type) {
    case "SHOW_SETUP_WIDGET":
      return {
        ...u,
        setupWidget: {
          isVisible: !0,
          config: c.payload
        }
      };
    case "HIDE_SETUP_WIDGET":
      return {
        ...u,
        setupWidget: {
          isVisible: !1,
          config: null
        }
      };
    case "SHOW_WARNING":
      return {
        ...u,
        warnings: [...u.warnings, c.payload]
      };
    case "HIDE_WARNING":
      return {
        ...u,
        warnings: u.warnings.filter((s) => s.id !== c.payload)
      };
    case "ANOMALY_DETECTED": {
      const s = c.payload, r = {
        ...u,
        anomalies: [...u.anomalies, s]
      }, d = fy(s);
      return oy(d, u) ? {
        ...r,
        warnings: [...u.warnings, d]
      } : {
        ...r,
        warningQueue: [...u.warningQueue, d]
      };
    }
    case "ANOMALY_RESOLVED": {
      const s = c.payload, r = {
        ...u,
        anomalies: u.anomalies.filter((m) => m.id !== s)
      };
      if (u.warnings.find((m) => m.anomalyId === s)) {
        const m = u.warnings.filter((S) => S.anomalyId !== s), E = u.warningQueue.find(
          (S) => S.severity === "high" || S.severity === "critical"
        );
        if (E) {
          const S = u.warningQueue.filter((v) => v.id !== E.id);
          return {
            ...r,
            warnings: [...m, E],
            warningQueue: S
          };
        }
        return {
          ...r,
          warnings: m
        };
      }
      return r;
    }
    case "SHOW_WEBCAM_WIDGET":
      return {
        ...u,
        webcamWidget: {
          ...u.webcamWidget,
          stream: c.payload,
          isVisible: !0
        }
      };
    case "HIDE_WEBCAM_WIDGET":
      return {
        ...u,
        webcamWidget: {
          ...u.webcamWidget,
          stream: null,
          isVisible: !1
        }
      };
    case "UPDATE_WEBCAM_STREAM":
      return {
        ...u,
        webcamWidget: {
          ...u.webcamWidget,
          stream: c.payload
        }
      };
    default:
      return u;
  }
}
const Yh = O.createContext(void 0);
function my({ uiEventBus: u, children: c }) {
  const [s, r] = O.useReducer(hy, dy);
  O.useEffect(() => {
    const m = u.on("showSetup", (B) => {
      r({ type: "SHOW_SETUP_WIDGET", payload: B });
    }), E = u.on("hideSetup", () => {
      r({ type: "HIDE_SETUP_WIDGET" });
    }), S = u.on("showWarning", (B) => {
      r({ type: "SHOW_WARNING", payload: B });
    }), v = u.on("hideWarning", (B) => {
      r({ type: "HIDE_WARNING", payload: B.id });
    }), b = u.on("showWebcam", (B) => {
      r({ type: "SHOW_WEBCAM_WIDGET", payload: B.stream });
    }), w = u.on("hideWebcam", () => {
      r({ type: "HIDE_WEBCAM_WIDGET" });
    }), j = u.on("updateWebcamStream", (B) => {
      r({ type: "UPDATE_WEBCAM_STREAM", payload: B.stream });
    }), H = u.on("anomalyDetected", (B) => {
      r({ type: "ANOMALY_DETECTED", payload: B });
    }), Y = u.on("anomalyResolved", (B) => {
      r({ type: "ANOMALY_RESOLVED", payload: B.id });
    });
    return () => {
      m(), E(), S(), v(), b(), w(), j(), H(), Y();
    };
  }, [u]);
  const d = O.useMemo(() => ({
    uiEventBus: u,
    uiState: s,
    dispatch: r
  }), [u, s]);
  return /* @__PURE__ */ U.jsx(Yh.Provider, { value: d, children: c });
}
function vy() {
  const u = O.useContext(Yh);
  if (!u)
    throw new Error("useProctorContext must be used within ProctorProvider");
  return u;
}
var yy = qh(), gy = Object.defineProperty, by = (u, c, s) => c in u ? gy(u, c, { enumerable: !0, configurable: !0, writable: !0, value: s }) : u[c] = s, Jr = (u, c, s) => (by(u, typeof c != "symbol" ? c + "" : c, s), s);
let py = class {
  constructor() {
    Jr(this, "current", this.detect()), Jr(this, "handoffState", "pending"), Jr(this, "currentId", 0);
  }
  set(c) {
    this.current !== c && (this.handoffState = "pending", this.currentId = 0, this.current = c);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
}, Yt = new py();
function Ja(u) {
  var c;
  return Yt.isServer ? null : u == null ? document : (c = u?.ownerDocument) != null ? c : document;
}
function ts(u) {
  var c, s;
  return Yt.isServer ? null : u == null ? document : (s = (c = u?.getRootNode) == null ? void 0 : c.call(u)) != null ? s : document;
}
function Gh(u) {
  var c, s;
  return (s = (c = ts(u)) == null ? void 0 : c.activeElement) != null ? s : null;
}
function Sy(u) {
  return Gh(u) === u;
}
function pi(u) {
  typeof queueMicrotask == "function" ? queueMicrotask(u) : Promise.resolve().then(u).catch((c) => setTimeout(() => {
    throw c;
  }));
}
function ul() {
  let u = [], c = { addEventListener(s, r, d, m) {
    return s.addEventListener(r, d, m), c.add(() => s.removeEventListener(r, d, m));
  }, requestAnimationFrame(...s) {
    let r = requestAnimationFrame(...s);
    return c.add(() => cancelAnimationFrame(r));
  }, nextFrame(...s) {
    return c.requestAnimationFrame(() => c.requestAnimationFrame(...s));
  }, setTimeout(...s) {
    let r = setTimeout(...s);
    return c.add(() => clearTimeout(r));
  }, microTask(...s) {
    let r = { current: !0 };
    return pi(() => {
      r.current && s[0]();
    }), c.add(() => {
      r.current = !1;
    });
  }, style(s, r, d) {
    let m = s.style.getPropertyValue(r);
    return Object.assign(s.style, { [r]: d }), this.add(() => {
      Object.assign(s.style, { [r]: m });
    });
  }, group(s) {
    let r = ul();
    return s(r), this.add(() => r.dispose());
  }, add(s) {
    return u.includes(s) || u.push(s), () => {
      let r = u.indexOf(s);
      if (r >= 0) for (let d of u.splice(r, 1)) d();
    };
  }, dispose() {
    for (let s of u.splice(0)) s();
  } };
  return c;
}
function Si() {
  let [u] = O.useState(ul);
  return O.useEffect(() => () => u.dispose(), [u]), u;
}
let it = (u, c) => {
  Yt.isServer ? O.useEffect(u, c) : O.useLayoutEffect(u, c);
};
function nn(u) {
  let c = O.useRef(u);
  return it(() => {
    c.current = u;
  }, [u]), c;
}
let Te = function(u) {
  let c = nn(u);
  return F.useCallback((...s) => c.current(...s), [c]);
};
function Wa(u) {
  return O.useMemo(() => u, Object.values(u));
}
let Ey = O.createContext(void 0);
function Ty() {
  return O.useContext(Ey);
}
function ls(...u) {
  return Array.from(new Set(u.flatMap((c) => typeof c == "string" ? c.split(" ") : []))).filter(Boolean).join(" ");
}
function al(u, c, ...s) {
  if (u in c) {
    let d = c[u];
    return typeof d == "function" ? d(...s) : d;
  }
  let r = new Error(`Tried to handle "${u}" but there is no handler defined. Only defined handlers are: ${Object.keys(c).map((d) => `"${d}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, al), r;
}
var vi = ((u) => (u[u.None = 0] = "None", u[u.RenderStrategy = 1] = "RenderStrategy", u[u.Static = 2] = "Static", u))(vi || {}), Rl = ((u) => (u[u.Unmount = 0] = "Unmount", u[u.Hidden = 1] = "Hidden", u))(Rl || {});
function Ot() {
  let u = xy();
  return O.useCallback((c) => Ay({ mergeRefs: u, ...c }), [u]);
}
function Ay({ ourProps: u, theirProps: c, slot: s, defaultTag: r, features: d, visible: m = !0, name: E, mergeRefs: S }) {
  S = S ?? Dy;
  let v = Lh(c, u);
  if (m) return hi(v, s, r, E, S);
  let b = d ?? 0;
  if (b & 2) {
    let { static: w = !1, ...j } = v;
    if (w) return hi(j, s, r, E, S);
  }
  if (b & 1) {
    let { unmount: w = !0, ...j } = v;
    return al(w ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return hi({ ...j, hidden: !0, style: { display: "none" } }, s, r, E, S);
    } });
  }
  return hi(v, s, r, E, S);
}
function hi(u, c = {}, s, r, d) {
  let { as: m = s, children: E, refName: S = "ref", ...v } = Wr(u, ["unmount", "static"]), b = u.ref !== void 0 ? { [S]: u.ref } : {}, w = typeof E == "function" ? E(c) : E;
  "className" in v && v.className && typeof v.className == "function" && (v.className = v.className(c)), v["aria-labelledby"] && v["aria-labelledby"] === v.id && (v["aria-labelledby"] = void 0);
  let j = {};
  if (c) {
    let H = !1, Y = [];
    for (let [B, W] of Object.entries(c)) typeof W == "boolean" && (H = !0), W === !0 && Y.push(B.replace(/([A-Z])/g, (k) => `-${k.toLowerCase()}`));
    if (H) {
      j["data-headlessui-state"] = Y.join(" ");
      for (let B of Y) j[`data-${B}`] = "";
    }
  }
  if (ka(m) && (Object.keys(Il(v)).length > 0 || Object.keys(Il(j)).length > 0)) if (!O.isValidElement(w) || Array.isArray(w) && w.length > 1 || Oy(w)) {
    if (Object.keys(Il(v)).length > 0) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(Il(v)).concat(Object.keys(Il(j))).map((H) => `  - ${H}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((H) => `  - ${H}`).join(`
`)].join(`
`));
  } else {
    let H = w.props, Y = H?.className, B = typeof Y == "function" ? (...fe) => ls(Y(...fe), v.className) : ls(Y, v.className), W = B ? { className: B } : {}, k = Lh(w.props, Il(Wr(v, ["ref"])));
    for (let fe in j) fe in k && delete j[fe];
    return O.cloneElement(w, Object.assign({}, k, j, b, { ref: d(wy(w), b.ref) }, W));
  }
  return O.createElement(m, Object.assign({}, Wr(v, ["ref"]), !ka(m) && b, !ka(m) && j), w);
}
function xy() {
  let u = O.useRef([]), c = O.useCallback((s) => {
    for (let r of u.current) r != null && (typeof r == "function" ? r(s) : r.current = s);
  }, []);
  return (...s) => {
    if (!s.every((r) => r == null)) return u.current = s, c;
  };
}
function Dy(...u) {
  return u.every((c) => c == null) ? void 0 : (c) => {
    for (let s of u) s != null && (typeof s == "function" ? s(c) : s.current = c);
  };
}
function Lh(...u) {
  if (u.length === 0) return {};
  if (u.length === 1) return u[0];
  let c = {}, s = {};
  for (let r of u) for (let d in r) d.startsWith("on") && typeof r[d] == "function" ? (s[d] != null || (s[d] = []), s[d].push(r[d])) : c[d] = r[d];
  if (c.disabled || c["aria-disabled"]) for (let r in s) /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(r) && (s[r] = [(d) => {
    var m;
    return (m = d?.preventDefault) == null ? void 0 : m.call(d);
  }]);
  for (let r in s) Object.assign(c, { [r](d, ...m) {
    let E = s[r];
    for (let S of E) {
      if ((d instanceof Event || d?.nativeEvent instanceof Event) && d.defaultPrevented) return;
      S(d, ...m);
    }
  } });
  return c;
}
function ct(u) {
  var c;
  return Object.assign(O.forwardRef(u), { displayName: (c = u.displayName) != null ? c : u.name });
}
function Il(u) {
  let c = Object.assign({}, u);
  for (let s in c) c[s] === void 0 && delete c[s];
  return c;
}
function Wr(u, c = []) {
  let s = Object.assign({}, u);
  for (let r of c) r in s && delete s[r];
  return s;
}
function wy(u) {
  return F.version.split(".")[0] >= "19" ? u.props.ref : u.ref;
}
function ka(u) {
  return u === O.Fragment || u === Symbol.for("react.fragment");
}
function Oy(u) {
  return ka(u.type);
}
let My = "span";
var yi = ((u) => (u[u.None = 1] = "None", u[u.Focusable = 2] = "Focusable", u[u.Hidden = 4] = "Hidden", u))(yi || {});
function _y(u, c) {
  var s;
  let { features: r = 1, ...d } = u, m = { ref: c, "aria-hidden": (r & 2) === 2 ? !0 : (s = d["aria-hidden"]) != null ? s : void 0, hidden: (r & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
  return Ot()({ ourProps: m, theirProps: d, slot: {}, defaultTag: My, name: "Hidden" });
}
let ns = ct(_y);
function zy(u) {
  return typeof u != "object" || u === null ? !1 : "nodeType" in u;
}
function Cl(u) {
  return zy(u) && "tagName" in u;
}
function ln(u) {
  return Cl(u) && "accessKey" in u;
}
function Nl(u) {
  return Cl(u) && "tabIndex" in u;
}
function Ry(u) {
  return Cl(u) && "style" in u;
}
function Ny(u) {
  return ln(u) && u.nodeName === "IFRAME";
}
function Uy(u) {
  return ln(u) && u.nodeName === "INPUT";
}
let Xh = Symbol();
function Cy(u, c = !0) {
  return Object.assign(u, { [Xh]: c });
}
function Gt(...u) {
  let c = O.useRef(u);
  O.useEffect(() => {
    c.current = u;
  }, [u]);
  let s = Te((r) => {
    for (let d of c.current) d != null && (typeof d == "function" ? d(r) : d.current = r);
  });
  return u.every((r) => r == null || r?.[Xh]) ? void 0 : s;
}
let fs = O.createContext(null);
fs.displayName = "DescriptionContext";
function Qh() {
  let u = O.useContext(fs);
  if (u === null) {
    let c = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(c, Qh), c;
  }
  return u;
}
function Hy() {
  let [u, c] = O.useState([]);
  return [u.length > 0 ? u.join(" ") : void 0, O.useMemo(() => function(s) {
    let r = Te((m) => (c((E) => [...E, m]), () => c((E) => {
      let S = E.slice(), v = S.indexOf(m);
      return v !== -1 && S.splice(v, 1), S;
    }))), d = O.useMemo(() => ({ register: r, slot: s.slot, name: s.name, props: s.props, value: s.value }), [r, s.slot, s.name, s.props, s.value]);
    return F.createElement(fs.Provider, { value: d }, s.children);
  }, [c])];
}
let jy = "p";
function By(u, c) {
  let s = O.useId(), r = Ty(), { id: d = `headlessui-description-${s}`, ...m } = u, E = Qh(), S = Gt(c);
  it(() => E.register(d), [d, E.register]);
  let v = Wa({ ...E.slot, disabled: r || !1 }), b = { ref: S, ...E.props, id: d };
  return Ot()({ ourProps: b, theirProps: m, slot: v, defaultTag: jy, name: E.name || "Description" });
}
let qy = ct(By), Yy = Object.assign(qy, {});
var Zh = ((u) => (u.Space = " ", u.Enter = "Enter", u.Escape = "Escape", u.Backspace = "Backspace", u.Delete = "Delete", u.ArrowLeft = "ArrowLeft", u.ArrowUp = "ArrowUp", u.ArrowRight = "ArrowRight", u.ArrowDown = "ArrowDown", u.Home = "Home", u.End = "End", u.PageUp = "PageUp", u.PageDown = "PageDown", u.Tab = "Tab", u))(Zh || {});
let Gy = O.createContext(() => {
});
function Ly({ value: u, children: c }) {
  return F.createElement(Gy.Provider, { value: u }, c);
}
let Vh = class extends Map {
  constructor(c) {
    super(), this.factory = c;
  }
  get(c) {
    let s = super.get(c);
    return s === void 0 && (s = this.factory(c), this.set(c, s)), s;
  }
};
var Xy = Object.defineProperty, Qy = (u, c, s) => c in u ? Xy(u, c, { enumerable: !0, configurable: !0, writable: !0, value: s }) : u[c] = s, Zy = (u, c, s) => (Qy(u, c + "", s), s), kh = (u, c, s) => {
  if (!c.has(u)) throw TypeError("Cannot " + s);
}, wt = (u, c, s) => (kh(u, c, "read from private field"), s ? s.call(u) : c.get(u)), Fr = (u, c, s) => {
  if (c.has(u)) throw TypeError("Cannot add the same private member more than once");
  c instanceof WeakSet ? c.add(u) : c.set(u, s);
}, Th = (u, c, s, r) => (kh(u, c, "write to private field"), c.set(u, s), s), qt, Qa, Za;
let Vy = class {
  constructor(c) {
    Fr(this, qt, {}), Fr(this, Qa, new Vh(() => /* @__PURE__ */ new Set())), Fr(this, Za, /* @__PURE__ */ new Set()), Zy(this, "disposables", ul()), Th(this, qt, c), Yt.isServer && this.disposables.microTask(() => {
      this.dispose();
    });
  }
  dispose() {
    this.disposables.dispose();
  }
  get state() {
    return wt(this, qt);
  }
  subscribe(c, s) {
    if (Yt.isServer) return () => {
    };
    let r = { selector: c, callback: s, current: c(wt(this, qt)) };
    return wt(this, Za).add(r), this.disposables.add(() => {
      wt(this, Za).delete(r);
    });
  }
  on(c, s) {
    return Yt.isServer ? () => {
    } : (wt(this, Qa).get(c).add(s), this.disposables.add(() => {
      wt(this, Qa).get(c).delete(s);
    }));
  }
  send(c) {
    let s = this.reduce(wt(this, qt), c);
    if (s !== wt(this, qt)) {
      Th(this, qt, s);
      for (let r of wt(this, Za)) {
        let d = r.selector(wt(this, qt));
        Kh(r.current, d) || (r.current = d, r.callback(d));
      }
      for (let r of wt(this, Qa).get(c.type)) r(wt(this, qt), c);
    }
  }
};
qt = /* @__PURE__ */ new WeakMap(), Qa = /* @__PURE__ */ new WeakMap(), Za = /* @__PURE__ */ new WeakMap();
function Kh(u, c) {
  return Object.is(u, c) ? !0 : typeof u != "object" || u === null || typeof c != "object" || c === null ? !1 : Array.isArray(u) && Array.isArray(c) ? u.length !== c.length ? !1 : Pr(u[Symbol.iterator](), c[Symbol.iterator]()) : u instanceof Map && c instanceof Map || u instanceof Set && c instanceof Set ? u.size !== c.size ? !1 : Pr(u.entries(), c.entries()) : Ah(u) && Ah(c) ? Pr(Object.entries(u)[Symbol.iterator](), Object.entries(c)[Symbol.iterator]()) : !1;
}
function Pr(u, c) {
  do {
    let s = u.next(), r = c.next();
    if (s.done && r.done) return !0;
    if (s.done || r.done || !Object.is(s.value, r.value)) return !1;
  } while (!0);
}
function Ah(u) {
  if (Object.prototype.toString.call(u) !== "[object Object]") return !1;
  let c = Object.getPrototypeOf(u);
  return c === null || Object.getPrototypeOf(c) === null;
}
var ky = Object.defineProperty, Ky = (u, c, s) => c in u ? ky(u, c, { enumerable: !0, configurable: !0, writable: !0, value: s }) : u[c] = s, xh = (u, c, s) => (Ky(u, typeof c != "symbol" ? c + "" : c, s), s), $y = ((u) => (u[u.Push = 0] = "Push", u[u.Pop = 1] = "Pop", u))($y || {});
let Jy = { 0(u, c) {
  let s = c.id, r = u.stack, d = u.stack.indexOf(s);
  if (d !== -1) {
    let m = u.stack.slice();
    return m.splice(d, 1), m.push(s), r = m, { ...u, stack: r };
  }
  return { ...u, stack: [...u.stack, s] };
}, 1(u, c) {
  let s = c.id, r = u.stack.indexOf(s);
  if (r === -1) return u;
  let d = u.stack.slice();
  return d.splice(r, 1), { ...u, stack: d };
} }, Wy = class $h extends Vy {
  constructor() {
    super(...arguments), xh(this, "actions", { push: (c) => this.send({ type: 0, id: c }), pop: (c) => this.send({ type: 1, id: c }) }), xh(this, "selectors", { isTop: (c, s) => c.stack[c.stack.length - 1] === s, inStack: (c, s) => c.stack.includes(s) });
  }
  static new() {
    return new $h({ stack: [] });
  }
  reduce(c, s) {
    return al(s.type, Jy, c, s);
  }
};
const Jh = new Vh(() => Wy.new());
var Ir = { exports: {} }, es = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dh;
function Fy() {
  if (Dh) return es;
  Dh = 1;
  var u = bi();
  function c(v, b) {
    return v === b && (v !== 0 || 1 / v === 1 / b) || v !== v && b !== b;
  }
  var s = typeof Object.is == "function" ? Object.is : c, r = u.useSyncExternalStore, d = u.useRef, m = u.useEffect, E = u.useMemo, S = u.useDebugValue;
  return es.useSyncExternalStoreWithSelector = function(v, b, w, j, H) {
    var Y = d(null);
    if (Y.current === null) {
      var B = { hasValue: !1, value: null };
      Y.current = B;
    } else B = Y.current;
    Y = E(
      function() {
        function k(V) {
          if (!fe) {
            if (fe = !0, ce = V, V = j(V), H !== void 0 && B.hasValue) {
              var he = B.value;
              if (H(he, V))
                return I = he;
            }
            return I = V;
          }
          if (he = I, s(ce, V)) return he;
          var me = j(V);
          return H !== void 0 && H(he, me) ? (ce = V, he) : (ce = V, I = me);
        }
        var fe = !1, ce, I, ie = w === void 0 ? null : w;
        return [
          function() {
            return k(b());
          },
          ie === null ? void 0 : function() {
            return k(ie());
          }
        ];
      },
      [b, w, j, H]
    );
    var W = r(v, Y[0], Y[1]);
    return m(
      function() {
        B.hasValue = !0, B.value = W;
      },
      [W]
    ), S(W), W;
  }, es;
}
var wh;
function Py() {
  return wh || (wh = 1, Ir.exports = Fy()), Ir.exports;
}
var Iy = Py();
function Wh(u, c, s = Kh) {
  return Iy.useSyncExternalStoreWithSelector(Te((r) => u.subscribe(eg, r)), Te(() => u.state), Te(() => u.state), Te(c), s);
}
function eg(u) {
  return u;
}
function Fa(u, c) {
  let s = O.useId(), r = Jh.get(c), [d, m] = Wh(r, O.useCallback((E) => [r.selectors.isTop(E, s), r.selectors.inStack(E, s)], [r, s]));
  return it(() => {
    if (u) return r.actions.push(s), () => r.actions.pop(s);
  }, [r, u, s]), u ? m ? d : !0 : !1;
}
let as = /* @__PURE__ */ new Map(), Ka = /* @__PURE__ */ new Map();
function Oh(u) {
  var c;
  let s = (c = Ka.get(u)) != null ? c : 0;
  return Ka.set(u, s + 1), s !== 0 ? () => Mh(u) : (as.set(u, { "aria-hidden": u.getAttribute("aria-hidden"), inert: u.inert }), u.setAttribute("aria-hidden", "true"), u.inert = !0, () => Mh(u));
}
function Mh(u) {
  var c;
  let s = (c = Ka.get(u)) != null ? c : 1;
  if (s === 1 ? Ka.delete(u) : Ka.set(u, s - 1), s !== 1) return;
  let r = as.get(u);
  r && (r["aria-hidden"] === null ? u.removeAttribute("aria-hidden") : u.setAttribute("aria-hidden", r["aria-hidden"]), u.inert = r.inert, as.delete(u));
}
function tg(u, { allowed: c, disallowed: s } = {}) {
  let r = Fa(u, "inert-others");
  it(() => {
    var d, m;
    if (!r) return;
    let E = ul();
    for (let v of (d = s?.()) != null ? d : []) v && E.add(Oh(v));
    let S = (m = c?.()) != null ? m : [];
    for (let v of S) {
      if (!v) continue;
      let b = Ja(v);
      if (!b) continue;
      let w = v.parentElement;
      for (; w && w !== b.body; ) {
        for (let j of w.children) S.some((H) => j.contains(H)) || E.add(Oh(j));
        w = w.parentElement;
      }
    }
    return E.dispose;
  }, [r, c, s]);
}
function lg(u, c, s) {
  let r = nn((d) => {
    let m = d.getBoundingClientRect();
    m.x === 0 && m.y === 0 && m.width === 0 && m.height === 0 && s();
  });
  O.useEffect(() => {
    if (!u) return;
    let d = c === null ? null : ln(c) ? c : c.current;
    if (!d) return;
    let m = ul();
    if (typeof ResizeObserver < "u") {
      let E = new ResizeObserver(() => r.current(d));
      E.observe(d), m.add(() => E.disconnect());
    }
    if (typeof IntersectionObserver < "u") {
      let E = new IntersectionObserver(() => r.current(d));
      E.observe(d), m.add(() => E.disconnect());
    }
    return () => m.dispose();
  }, [c, r, u]);
}
let gi = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "details>summary", "textarea:not([disabled])"].map((u) => `${u}:not([tabindex='-1'])`).join(","), ng = ["[data-autofocus]"].map((u) => `${u}:not([tabindex='-1'])`).join(",");
var ll = ((u) => (u[u.First = 1] = "First", u[u.Previous = 2] = "Previous", u[u.Next = 4] = "Next", u[u.Last = 8] = "Last", u[u.WrapAround = 16] = "WrapAround", u[u.NoScroll = 32] = "NoScroll", u[u.AutoFocus = 64] = "AutoFocus", u))(ll || {}), us = ((u) => (u[u.Error = 0] = "Error", u[u.Overflow = 1] = "Overflow", u[u.Success = 2] = "Success", u[u.Underflow = 3] = "Underflow", u))(us || {}), ag = ((u) => (u[u.Previous = -1] = "Previous", u[u.Next = 1] = "Next", u))(ag || {});
function ug(u = document.body) {
  return u == null ? [] : Array.from(u.querySelectorAll(gi)).sort((c, s) => Math.sign((c.tabIndex || Number.MAX_SAFE_INTEGER) - (s.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function ig(u = document.body) {
  return u == null ? [] : Array.from(u.querySelectorAll(ng)).sort((c, s) => Math.sign((c.tabIndex || Number.MAX_SAFE_INTEGER) - (s.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Fh = ((u) => (u[u.Strict = 0] = "Strict", u[u.Loose = 1] = "Loose", u))(Fh || {});
function cg(u, c = 0) {
  var s;
  return u === ((s = Ja(u)) == null ? void 0 : s.body) ? !1 : al(c, { 0() {
    return u.matches(gi);
  }, 1() {
    let r = u;
    for (; r !== null; ) {
      if (r.matches(gi)) return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
var rg = ((u) => (u[u.Keyboard = 0] = "Keyboard", u[u.Mouse = 1] = "Mouse", u))(rg || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", (u) => {
  u.metaKey || u.altKey || u.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (u) => {
  u.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : u.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function nl(u) {
  u?.focus({ preventScroll: !0 });
}
let sg = ["textarea", "input"].join(",");
function fg(u) {
  var c, s;
  return (s = (c = u?.matches) == null ? void 0 : c.call(u, sg)) != null ? s : !1;
}
function og(u, c = (s) => s) {
  return u.slice().sort((s, r) => {
    let d = c(s), m = c(r);
    if (d === null || m === null) return 0;
    let E = d.compareDocumentPosition(m);
    return E & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : E & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function $a(u, c, { sorted: s = !0, relativeTo: r = null, skipElements: d = [] } = {}) {
  let m = Array.isArray(u) ? u.length > 0 ? ts(u[0]) : document : ts(u), E = Array.isArray(u) ? s ? og(u) : u : c & 64 ? ig(u) : ug(u);
  d.length > 0 && E.length > 1 && (E = E.filter((Y) => !d.some((B) => B != null && "current" in B ? B?.current === Y : B === Y))), r = r ?? m?.activeElement;
  let S = (() => {
    if (c & 5) return 1;
    if (c & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), v = (() => {
    if (c & 1) return 0;
    if (c & 2) return Math.max(0, E.indexOf(r)) - 1;
    if (c & 4) return Math.max(0, E.indexOf(r)) + 1;
    if (c & 8) return E.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), b = c & 32 ? { preventScroll: !0 } : {}, w = 0, j = E.length, H;
  do {
    if (w >= j || w + j <= 0) return 0;
    let Y = v + w;
    if (c & 16) Y = (Y + j) % j;
    else {
      if (Y < 0) return 3;
      if (Y >= j) return 1;
    }
    H = E[Y], H?.focus(b), w += S;
  } while (H !== Gh(H));
  return c & 6 && fg(H) && H.select(), 2;
}
function Ph() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function dg() {
  return /Android/gi.test(window.navigator.userAgent);
}
function _h() {
  return Ph() || dg();
}
function mi(u, c, s, r) {
  let d = nn(s);
  O.useEffect(() => {
    if (!u) return;
    function m(E) {
      d.current(E);
    }
    return document.addEventListener(c, m, r), () => document.removeEventListener(c, m, r);
  }, [u, c, r]);
}
function Ih(u, c, s, r) {
  let d = nn(s);
  O.useEffect(() => {
    if (!u) return;
    function m(E) {
      d.current(E);
    }
    return window.addEventListener(c, m, r), () => window.removeEventListener(c, m, r);
  }, [u, c, r]);
}
const zh = 30;
function hg(u, c, s) {
  let r = nn(s), d = O.useCallback(function(S, v) {
    if (S.defaultPrevented) return;
    let b = v(S);
    if (b === null || !b.getRootNode().contains(b) || !b.isConnected) return;
    let w = (function j(H) {
      return typeof H == "function" ? j(H()) : Array.isArray(H) || H instanceof Set ? H : [H];
    })(c);
    for (let j of w) if (j !== null && (j.contains(b) || S.composed && S.composedPath().includes(j))) return;
    return !cg(b, Fh.Loose) && b.tabIndex !== -1 && S.preventDefault(), r.current(S, b);
  }, [r, c]), m = O.useRef(null);
  mi(u, "pointerdown", (S) => {
    var v, b;
    _h() || (m.current = ((b = (v = S.composedPath) == null ? void 0 : v.call(S)) == null ? void 0 : b[0]) || S.target);
  }, !0), mi(u, "pointerup", (S) => {
    if (_h() || !m.current) return;
    let v = m.current;
    return m.current = null, d(S, () => v);
  }, !0);
  let E = O.useRef({ x: 0, y: 0 });
  mi(u, "touchstart", (S) => {
    E.current.x = S.touches[0].clientX, E.current.y = S.touches[0].clientY;
  }, !0), mi(u, "touchend", (S) => {
    let v = { x: S.changedTouches[0].clientX, y: S.changedTouches[0].clientY };
    if (!(Math.abs(v.x - E.current.x) >= zh || Math.abs(v.y - E.current.y) >= zh)) return d(S, () => Nl(S.target) ? S.target : null);
  }, !0), Ih(u, "blur", (S) => d(S, () => Ny(window.document.activeElement) ? window.document.activeElement : null), !0);
}
function os(...u) {
  return O.useMemo(() => Ja(...u), [...u]);
}
function em(u, c, s, r) {
  let d = nn(s);
  O.useEffect(() => {
    u = u ?? window;
    function m(E) {
      d.current(E);
    }
    return u.addEventListener(c, m, r), () => u.removeEventListener(c, m, r);
  }, [u, c, r]);
}
function mg(u) {
  return O.useSyncExternalStore(u.subscribe, u.getSnapshot, u.getSnapshot);
}
function vg(u, c) {
  let s = u(), r = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return s;
  }, subscribe(d) {
    return r.add(d), () => r.delete(d);
  }, dispatch(d, ...m) {
    let E = c[d].call(s, ...m);
    E && (s = E, r.forEach((S) => S()));
  } };
}
function yg() {
  let u;
  return { before({ doc: c }) {
    var s;
    let r = c.documentElement, d = (s = c.defaultView) != null ? s : window;
    u = Math.max(0, d.innerWidth - r.clientWidth);
  }, after({ doc: c, d: s }) {
    let r = c.documentElement, d = Math.max(0, r.clientWidth - r.offsetWidth), m = Math.max(0, u - d);
    s.style(r, "paddingRight", `${m}px`);
  } };
}
function gg() {
  return Ph() ? { before({ doc: u, d: c, meta: s }) {
    function r(d) {
      for (let m of s().containers) for (let E of m()) if (E.contains(d)) return !0;
      return !1;
    }
    c.microTask(() => {
      var d;
      if (window.getComputedStyle(u.documentElement).scrollBehavior !== "auto") {
        let S = ul();
        S.style(u.documentElement, "scrollBehavior", "auto"), c.add(() => c.microTask(() => S.dispose()));
      }
      let m = (d = window.scrollY) != null ? d : window.pageYOffset, E = null;
      c.addEventListener(u, "click", (S) => {
        if (Nl(S.target)) try {
          let v = S.target.closest("a");
          if (!v) return;
          let { hash: b } = new URL(v.href), w = u.querySelector(b);
          Nl(w) && !r(w) && (E = w);
        } catch {
        }
      }, !0), c.group((S) => {
        c.addEventListener(u, "touchstart", (v) => {
          if (S.dispose(), Nl(v.target) && Ry(v.target)) if (r(v.target)) {
            let b = v.target;
            for (; b.parentElement && r(b.parentElement); ) b = b.parentElement;
            S.style(b, "overscrollBehavior", "contain");
          } else S.style(v.target, "touchAction", "none");
        });
      }), c.addEventListener(u, "touchmove", (S) => {
        if (Nl(S.target)) {
          if (Uy(S.target)) return;
          if (r(S.target)) {
            let v = S.target;
            for (; v.parentElement && v.dataset.headlessuiPortal !== "" && !(v.scrollHeight > v.clientHeight || v.scrollWidth > v.clientWidth); ) v = v.parentElement;
            v.dataset.headlessuiPortal === "" && S.preventDefault();
          } else S.preventDefault();
        }
      }, { passive: !1 }), c.add(() => {
        var S;
        let v = (S = window.scrollY) != null ? S : window.pageYOffset;
        m !== v && window.scrollTo(0, m), E && E.isConnected && (E.scrollIntoView({ block: "nearest" }), E = null);
      });
    });
  } } : {};
}
function bg() {
  return { before({ doc: u, d: c }) {
    c.style(u.documentElement, "overflow", "hidden");
  } };
}
function Rh(u) {
  let c = {};
  for (let s of u) Object.assign(c, s(c));
  return c;
}
let tn = vg(() => /* @__PURE__ */ new Map(), { PUSH(u, c) {
  var s;
  let r = (s = this.get(u)) != null ? s : { doc: u, count: 0, d: ul(), meta: /* @__PURE__ */ new Set(), computedMeta: {} };
  return r.count++, r.meta.add(c), r.computedMeta = Rh(r.meta), this.set(u, r), this;
}, POP(u, c) {
  let s = this.get(u);
  return s && (s.count--, s.meta.delete(c), s.computedMeta = Rh(s.meta)), this;
}, SCROLL_PREVENT(u) {
  let c = { doc: u.doc, d: u.d, meta() {
    return u.computedMeta;
  } }, s = [gg(), yg(), bg()];
  s.forEach(({ before: r }) => r?.(c)), s.forEach(({ after: r }) => r?.(c));
}, SCROLL_ALLOW({ d: u }) {
  u.dispose();
}, TEARDOWN({ doc: u }) {
  this.delete(u);
} });
tn.subscribe(() => {
  let u = tn.getSnapshot(), c = /* @__PURE__ */ new Map();
  for (let [s] of u) c.set(s, s.documentElement.style.overflow);
  for (let s of u.values()) {
    let r = c.get(s.doc) === "hidden", d = s.count !== 0;
    (d && !r || !d && r) && tn.dispatch(s.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", s), s.count === 0 && tn.dispatch("TEARDOWN", s);
  }
});
function pg(u, c, s = () => ({ containers: [] })) {
  let r = mg(tn), d = c ? r.get(c) : void 0, m = d ? d.count > 0 : !1;
  return it(() => {
    if (!(!c || !u)) return tn.dispatch("PUSH", c, s), () => tn.dispatch("POP", c, s);
  }, [u, c]), m;
}
function Sg(u, c, s = () => [document.body]) {
  let r = Fa(u, "scroll-lock");
  pg(r, c, (d) => {
    var m;
    return { containers: [...(m = d.containers) != null ? m : [], s] };
  });
}
function Eg(u = 0) {
  let [c, s] = O.useState(u), r = O.useCallback((v) => s(v), []), d = O.useCallback((v) => s((b) => b | v), []), m = O.useCallback((v) => (c & v) === v, [c]), E = O.useCallback((v) => s((b) => b & ~v), []), S = O.useCallback((v) => s((b) => b ^ v), []);
  return { flags: c, setFlag: r, addFlag: d, hasFlag: m, removeFlag: E, toggleFlag: S };
}
var Nh, Uh;
typeof process < "u" && typeof globalThis < "u" && typeof Element < "u" && ((Nh = process == null ? void 0 : process.env) == null ? void 0 : Nh.NODE_ENV) === "test" && typeof ((Uh = Element?.prototype) == null ? void 0 : Uh.getAnimations) > "u" && (Element.prototype.getAnimations = function() {
  return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.", "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.", "", "Example usage:", "```js", "import { mockAnimationsApi } from 'jsdom-testing-mocks'", "mockAnimationsApi()", "```"].join(`
`)), [];
});
var Tg = ((u) => (u[u.None = 0] = "None", u[u.Closed = 1] = "Closed", u[u.Enter = 2] = "Enter", u[u.Leave = 4] = "Leave", u))(Tg || {});
function Ag(u) {
  let c = {};
  for (let s in u) u[s] === !0 && (c[`data-${s}`] = "");
  return c;
}
function xg(u, c, s, r) {
  let [d, m] = O.useState(s), { hasFlag: E, addFlag: S, removeFlag: v } = Eg(u && d ? 3 : 0), b = O.useRef(!1), w = O.useRef(!1), j = Si();
  return it(() => {
    var H;
    if (u) {
      if (s && m(!0), !c) {
        s && S(3);
        return;
      }
      return (H = r?.start) == null || H.call(r, s), Dg(c, { inFlight: b, prepare() {
        w.current ? w.current = !1 : w.current = b.current, b.current = !0, !w.current && (s ? (S(3), v(4)) : (S(4), v(2)));
      }, run() {
        w.current ? s ? (v(3), S(4)) : (v(4), S(3)) : s ? v(1) : S(1);
      }, done() {
        var Y;
        w.current && Mg(c) || (b.current = !1, v(7), s || m(!1), (Y = r?.end) == null || Y.call(r, s));
      } });
    }
  }, [u, s, c, j]), u ? [d, { closed: E(1), enter: E(2), leave: E(4), transition: E(2) || E(4) }] : [s, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
}
function Dg(u, { prepare: c, run: s, done: r, inFlight: d }) {
  let m = ul();
  return Og(u, { prepare: c, inFlight: d }), m.nextFrame(() => {
    s(), m.requestAnimationFrame(() => {
      m.add(wg(u, r));
    });
  }), m.dispose;
}
function wg(u, c) {
  var s, r;
  let d = ul();
  if (!u) return d.dispose;
  let m = !1;
  d.add(() => {
    m = !0;
  });
  let E = (r = (s = u.getAnimations) == null ? void 0 : s.call(u).filter((S) => S instanceof CSSTransition)) != null ? r : [];
  return E.length === 0 ? (c(), d.dispose) : (Promise.allSettled(E.map((S) => S.finished)).then(() => {
    m || c();
  }), d.dispose);
}
function Og(u, { inFlight: c, prepare: s }) {
  if (c != null && c.current) {
    s();
    return;
  }
  let r = u.style.transition;
  u.style.transition = "none", s(), u.offsetHeight, u.style.transition = r;
}
function Mg(u) {
  var c, s;
  return ((s = (c = u.getAnimations) == null ? void 0 : c.call(u)) != null ? s : []).some((r) => r instanceof CSSTransition && r.playState !== "finished");
}
function ds(u, c) {
  let s = O.useRef([]), r = Te(u);
  O.useEffect(() => {
    let d = [...s.current];
    for (let [m, E] of c.entries()) if (s.current[m] !== E) {
      let S = r(c, d);
      return s.current = c, S;
    }
  }, [r, ...c]);
}
let Ei = O.createContext(null);
Ei.displayName = "OpenClosedContext";
var Rt = ((u) => (u[u.Open = 1] = "Open", u[u.Closed = 2] = "Closed", u[u.Closing = 4] = "Closing", u[u.Opening = 8] = "Opening", u))(Rt || {});
function Ti() {
  return O.useContext(Ei);
}
function _g({ value: u, children: c }) {
  return F.createElement(Ei.Provider, { value: u }, c);
}
function zg({ children: u }) {
  return F.createElement(Ei.Provider, { value: null }, u);
}
function Rg(u) {
  function c() {
    document.readyState !== "loading" && (u(), document.removeEventListener("DOMContentLoaded", c));
  }
  typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", c), c());
}
let zl = [];
Rg(() => {
  function u(c) {
    if (!Nl(c.target) || c.target === document.body || zl[0] === c.target) return;
    let s = c.target;
    s = s.closest(gi), zl.unshift(s ?? c.target), zl = zl.filter((r) => r != null && r.isConnected), zl.splice(10);
  }
  window.addEventListener("click", u, { capture: !0 }), window.addEventListener("mousedown", u, { capture: !0 }), window.addEventListener("focus", u, { capture: !0 }), document.body.addEventListener("click", u, { capture: !0 }), document.body.addEventListener("mousedown", u, { capture: !0 }), document.body.addEventListener("focus", u, { capture: !0 });
});
function tm(u) {
  let c = Te(u), s = O.useRef(!1);
  O.useEffect(() => (s.current = !1, () => {
    s.current = !0, pi(() => {
      s.current && c();
    });
  }), [c]);
}
let lm = O.createContext(!1);
function Ng() {
  return O.useContext(lm);
}
function Ch(u) {
  return F.createElement(lm.Provider, { value: u.force }, u.children);
}
function Ug(u) {
  let c = Ng(), s = O.useContext(am), [r, d] = O.useState(() => {
    var m;
    if (!c && s !== null) return (m = s.current) != null ? m : null;
    if (Yt.isServer) return null;
    let E = u?.getElementById("headlessui-portal-root");
    if (E) return E;
    if (u === null) return null;
    let S = u.createElement("div");
    return S.setAttribute("id", "headlessui-portal-root"), u.body.appendChild(S);
  });
  return O.useEffect(() => {
    r !== null && (u != null && u.body.contains(r) || u == null || u.body.appendChild(r));
  }, [r, u]), O.useEffect(() => {
    c || s !== null && d(s.current);
  }, [s, d, c]), r;
}
let nm = O.Fragment, Cg = ct(function(u, c) {
  let { ownerDocument: s = null, ...r } = u, d = O.useRef(null), m = Gt(Cy((H) => {
    d.current = H;
  }), c), E = os(d.current), S = s ?? E, v = Ug(S), b = O.useContext(is), w = Si(), j = Ot();
  return tm(() => {
    var H;
    v && v.childNodes.length <= 0 && ((H = v.parentElement) == null || H.removeChild(v));
  }), v ? yy.createPortal(F.createElement("div", { "data-headlessui-portal": "", ref: (H) => {
    w.dispose(), b && H && w.add(b.register(H));
  } }, j({ ourProps: { ref: m }, theirProps: r, slot: {}, defaultTag: nm, name: "Portal" })), v) : null;
});
function Hg(u, c) {
  let s = Gt(c), { enabled: r = !0, ownerDocument: d, ...m } = u, E = Ot();
  return r ? F.createElement(Cg, { ...m, ownerDocument: d, ref: s }) : E({ ourProps: { ref: s }, theirProps: m, slot: {}, defaultTag: nm, name: "Portal" });
}
let jg = O.Fragment, am = O.createContext(null);
function Bg(u, c) {
  let { target: s, ...r } = u, d = { ref: Gt(c) }, m = Ot();
  return F.createElement(am.Provider, { value: s }, m({ ourProps: d, theirProps: r, defaultTag: jg, name: "Popover.Group" }));
}
let is = O.createContext(null);
function qg() {
  let u = O.useContext(is), c = O.useRef([]), s = Te((m) => (c.current.push(m), u && u.register(m), () => r(m))), r = Te((m) => {
    let E = c.current.indexOf(m);
    E !== -1 && c.current.splice(E, 1), u && u.unregister(m);
  }), d = O.useMemo(() => ({ register: s, unregister: r, portals: c }), [s, r, c]);
  return [c, O.useMemo(() => function({ children: m }) {
    return F.createElement(is.Provider, { value: d }, m);
  }, [d])];
}
let Yg = ct(Hg), um = ct(Bg), Gg = Object.assign(Yg, { Group: um });
function Lg(u, c = typeof document < "u" ? document.defaultView : null, s) {
  let r = Fa(u, "escape");
  em(c, "keydown", (d) => {
    r && (d.defaultPrevented || d.key === Zh.Escape && s(d));
  });
}
function Xg() {
  var u;
  let [c] = O.useState(() => typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(pointer: coarse)") : null), [s, r] = O.useState((u = c?.matches) != null ? u : !1);
  return it(() => {
    if (!c) return;
    function d(m) {
      r(m.matches);
    }
    return c.addEventListener("change", d), () => c.removeEventListener("change", d);
  }, [c]), s;
}
function Qg({ defaultContainers: u = [], portals: c, mainTreeNode: s } = {}) {
  let r = Te(() => {
    var d, m;
    let E = Ja(s), S = [];
    for (let v of u) v !== null && (Cl(v) ? S.push(v) : "current" in v && Cl(v.current) && S.push(v.current));
    if (c != null && c.current) for (let v of c.current) S.push(v);
    for (let v of (d = E?.querySelectorAll("html > *, body > *")) != null ? d : []) v !== document.body && v !== document.head && Cl(v) && v.id !== "headlessui-portal-root" && (s && (v.contains(s) || v.contains((m = s?.getRootNode()) == null ? void 0 : m.host)) || S.some((b) => v.contains(b)) || S.push(v));
    return S;
  });
  return { resolveContainers: r, contains: Te((d) => r().some((m) => m.contains(d))) };
}
let im = O.createContext(null);
function Hh({ children: u, node: c }) {
  let [s, r] = O.useState(null), d = cm(c ?? s);
  return F.createElement(im.Provider, { value: d }, u, d === null && F.createElement(ns, { features: yi.Hidden, ref: (m) => {
    var E, S;
    if (m) {
      for (let v of (S = (E = Ja(m)) == null ? void 0 : E.querySelectorAll("html > *, body > *")) != null ? S : []) if (v !== document.body && v !== document.head && Cl(v) && v != null && v.contains(m)) {
        r(v);
        break;
      }
    }
  } }));
}
function cm(u = null) {
  var c;
  return (c = O.useContext(im)) != null ? c : u;
}
function Zg() {
  let u = typeof document > "u";
  return "useSyncExternalStore" in hh ? ((c) => c.useSyncExternalStore)(hh)(() => () => {
  }, () => !1, () => !u) : !1;
}
function Ai() {
  let u = Zg(), [c, s] = O.useState(Yt.isHandoffComplete);
  return c && Yt.isHandoffComplete === !1 && s(!1), O.useEffect(() => {
    c !== !0 && s(!0);
  }, [c]), O.useEffect(() => Yt.handoff(), []), u ? !1 : c;
}
function hs() {
  let u = O.useRef(!1);
  return it(() => (u.current = !0, () => {
    u.current = !1;
  }), []), u;
}
var Va = ((u) => (u[u.Forwards = 0] = "Forwards", u[u.Backwards = 1] = "Backwards", u))(Va || {});
function Vg() {
  let u = O.useRef(0);
  return Ih(!0, "keydown", (c) => {
    c.key === "Tab" && (u.current = c.shiftKey ? 1 : 0);
  }, !0), u;
}
function rm(u) {
  if (!u) return /* @__PURE__ */ new Set();
  if (typeof u == "function") return new Set(u());
  let c = /* @__PURE__ */ new Set();
  for (let s of u.current) Cl(s.current) && c.add(s.current);
  return c;
}
let kg = "div";
var en = ((u) => (u[u.None = 0] = "None", u[u.InitialFocus = 1] = "InitialFocus", u[u.TabLock = 2] = "TabLock", u[u.FocusLock = 4] = "FocusLock", u[u.RestoreFocus = 8] = "RestoreFocus", u[u.AutoFocus = 16] = "AutoFocus", u))(en || {});
function Kg(u, c) {
  let s = O.useRef(null), r = Gt(s, c), { initialFocus: d, initialFocusFallback: m, containers: E, features: S = 15, ...v } = u;
  Ai() || (S = 0);
  let b = os(s.current);
  Fg(S, { ownerDocument: b });
  let w = Pg(S, { ownerDocument: b, container: s, initialFocus: d, initialFocusFallback: m });
  Ig(S, { ownerDocument: b, container: s, containers: E, previousActiveElement: w });
  let j = Vg(), H = Te((ce) => {
    if (!ln(s.current)) return;
    let I = s.current;
    ((ie) => ie())(() => {
      al(j.current, { [Va.Forwards]: () => {
        $a(I, ll.First, { skipElements: [ce.relatedTarget, m] });
      }, [Va.Backwards]: () => {
        $a(I, ll.Last, { skipElements: [ce.relatedTarget, m] });
      } });
    });
  }), Y = Fa(!!(S & 2), "focus-trap#tab-lock"), B = Si(), W = O.useRef(!1), k = { ref: r, onKeyDown(ce) {
    ce.key == "Tab" && (W.current = !0, B.requestAnimationFrame(() => {
      W.current = !1;
    }));
  }, onBlur(ce) {
    if (!(S & 4)) return;
    let I = rm(E);
    ln(s.current) && I.add(s.current);
    let ie = ce.relatedTarget;
    Nl(ie) && ie.dataset.headlessuiFocusGuard !== "true" && (sm(I, ie) || (W.current ? $a(s.current, al(j.current, { [Va.Forwards]: () => ll.Next, [Va.Backwards]: () => ll.Previous }) | ll.WrapAround, { relativeTo: ce.target }) : Nl(ce.target) && nl(ce.target)));
  } }, fe = Ot();
  return F.createElement(F.Fragment, null, Y && F.createElement(ns, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: H, features: yi.Focusable }), fe({ ourProps: k, theirProps: v, defaultTag: kg, name: "FocusTrap" }), Y && F.createElement(ns, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: H, features: yi.Focusable }));
}
let $g = ct(Kg), Jg = Object.assign($g, { features: en });
function Wg(u = !0) {
  let c = O.useRef(zl.slice());
  return ds(([s], [r]) => {
    r === !0 && s === !1 && pi(() => {
      c.current.splice(0);
    }), r === !1 && s === !0 && (c.current = zl.slice());
  }, [u, zl, c]), Te(() => {
    var s;
    return (s = c.current.find((r) => r != null && r.isConnected)) != null ? s : null;
  });
}
function Fg(u, { ownerDocument: c }) {
  let s = !!(u & 8), r = Wg(s);
  ds(() => {
    s || Sy(c?.body) && nl(r());
  }, [s]), tm(() => {
    s && nl(r());
  });
}
function Pg(u, { ownerDocument: c, container: s, initialFocus: r, initialFocusFallback: d }) {
  let m = O.useRef(null), E = Fa(!!(u & 1), "focus-trap#initial-focus"), S = hs();
  return ds(() => {
    if (u === 0) return;
    if (!E) {
      d != null && d.current && nl(d.current);
      return;
    }
    let v = s.current;
    v && pi(() => {
      if (!S.current) return;
      let b = c?.activeElement;
      if (r != null && r.current) {
        if (r?.current === b) {
          m.current = b;
          return;
        }
      } else if (v.contains(b)) {
        m.current = b;
        return;
      }
      if (r != null && r.current) nl(r.current);
      else {
        if (u & 16) {
          if ($a(v, ll.First | ll.AutoFocus) !== us.Error) return;
        } else if ($a(v, ll.First) !== us.Error) return;
        if (d != null && d.current && (nl(d.current), c?.activeElement === d.current)) return;
        console.warn("There are no focusable elements inside the <FocusTrap />");
      }
      m.current = c?.activeElement;
    });
  }, [d, E, u]), m;
}
function Ig(u, { ownerDocument: c, container: s, containers: r, previousActiveElement: d }) {
  let m = hs(), E = !!(u & 4);
  em(c?.defaultView, "focus", (S) => {
    if (!E || !m.current) return;
    let v = rm(r);
    ln(s.current) && v.add(s.current);
    let b = d.current;
    if (!b) return;
    let w = S.target;
    ln(w) ? sm(v, w) ? (d.current = w, nl(w)) : (S.preventDefault(), S.stopPropagation(), nl(b)) : nl(d.current);
  }, !0);
}
function sm(u, c) {
  for (let s of u) if (s.contains(c)) return !0;
  return !1;
}
function fm(u) {
  var c;
  return !!(u.enter || u.enterFrom || u.enterTo || u.leave || u.leaveFrom || u.leaveTo) || !ka((c = u.as) != null ? c : dm) || F.Children.count(u.children) === 1;
}
let xi = O.createContext(null);
xi.displayName = "TransitionContext";
var eb = ((u) => (u.Visible = "visible", u.Hidden = "hidden", u))(eb || {});
function tb() {
  let u = O.useContext(xi);
  if (u === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return u;
}
function lb() {
  let u = O.useContext(Di);
  if (u === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return u;
}
let Di = O.createContext(null);
Di.displayName = "NestingContext";
function wi(u) {
  return "children" in u ? wi(u.children) : u.current.filter(({ el: c }) => c.current !== null).filter(({ state: c }) => c === "visible").length > 0;
}
function om(u, c) {
  let s = nn(u), r = O.useRef([]), d = hs(), m = Si(), E = Te((Y, B = Rl.Hidden) => {
    let W = r.current.findIndex(({ el: k }) => k === Y);
    W !== -1 && (al(B, { [Rl.Unmount]() {
      r.current.splice(W, 1);
    }, [Rl.Hidden]() {
      r.current[W].state = "hidden";
    } }), m.microTask(() => {
      var k;
      !wi(r) && d.current && ((k = s.current) == null || k.call(s));
    }));
  }), S = Te((Y) => {
    let B = r.current.find(({ el: W }) => W === Y);
    return B ? B.state !== "visible" && (B.state = "visible") : r.current.push({ el: Y, state: "visible" }), () => E(Y, Rl.Unmount);
  }), v = O.useRef([]), b = O.useRef(Promise.resolve()), w = O.useRef({ enter: [], leave: [] }), j = Te((Y, B, W) => {
    v.current.splice(0), c && (c.chains.current[B] = c.chains.current[B].filter(([k]) => k !== Y)), c?.chains.current[B].push([Y, new Promise((k) => {
      v.current.push(k);
    })]), c?.chains.current[B].push([Y, new Promise((k) => {
      Promise.all(w.current[B].map(([fe, ce]) => ce)).then(() => k());
    })]), B === "enter" ? b.current = b.current.then(() => c?.wait.current).then(() => W(B)) : W(B);
  }), H = Te((Y, B, W) => {
    Promise.all(w.current[B].splice(0).map(([k, fe]) => fe)).then(() => {
      var k;
      (k = v.current.shift()) == null || k();
    }).then(() => W(B));
  });
  return O.useMemo(() => ({ children: r, register: S, unregister: E, onStart: j, onStop: H, wait: b, chains: w }), [S, E, r, j, H, w, b]);
}
let dm = O.Fragment, hm = vi.RenderStrategy;
function nb(u, c) {
  var s, r;
  let { transition: d = !0, beforeEnter: m, afterEnter: E, beforeLeave: S, afterLeave: v, enter: b, enterFrom: w, enterTo: j, entered: H, leave: Y, leaveFrom: B, leaveTo: W, ...k } = u, [fe, ce] = O.useState(null), I = O.useRef(null), ie = fm(u), V = Gt(...ie ? [I, c, ce] : c === null ? [] : [c]), he = (s = k.unmount) == null || s ? Rl.Unmount : Rl.Hidden, { show: me, appear: qe, initial: Fe } = tb(), [ze, Qe] = O.useState(me ? "visible" : "hidden"), we = lb(), { register: He, unregister: Pe } = we;
  it(() => He(I), [He, I]), it(() => {
    if (he === Rl.Hidden && I.current) {
      if (me && ze !== "visible") {
        Qe("visible");
        return;
      }
      return al(ze, { hidden: () => Pe(I), visible: () => He(I) });
    }
  }, [ze, I, He, Pe, me, he]);
  let Oe = Ai();
  it(() => {
    if (ie && Oe && ze === "visible" && I.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [I, ze, Oe, ie]);
  let M = Fe && !qe, q = qe && me && Fe, Q = O.useRef(!1), re = om(() => {
    Q.current || (Qe("hidden"), Pe(I));
  }, we), y = Te((Ze) => {
    Q.current = !0;
    let ve = Ze ? "enter" : "leave";
    re.onStart(I, ve, (et) => {
      et === "enter" ? m?.() : et === "leave" && S?.();
    });
  }), N = Te((Ze) => {
    let ve = Ze ? "enter" : "leave";
    Q.current = !1, re.onStop(I, ve, (et) => {
      et === "enter" ? E?.() : et === "leave" && v?.();
    }), ve === "leave" && !wi(re) && (Qe("hidden"), Pe(I));
  });
  O.useEffect(() => {
    ie && d || (y(me), N(me));
  }, [me, ie, d]);
  let G = !(!d || !ie || !Oe || M), [, C] = xg(G, fe, me, { start: y, end: N }), Z = Il({ ref: V, className: ((r = ls(k.className, q && b, q && w, C.enter && b, C.enter && C.closed && w, C.enter && !C.closed && j, C.leave && Y, C.leave && !C.closed && B, C.leave && C.closed && W, !C.transition && me && H)) == null ? void 0 : r.trim()) || void 0, ...Ag(C) }), le = 0;
  ze === "visible" && (le |= Rt.Open), ze === "hidden" && (le |= Rt.Closed), me && ze === "hidden" && (le |= Rt.Opening), !me && ze === "visible" && (le |= Rt.Closing);
  let P = Ot();
  return F.createElement(Di.Provider, { value: re }, F.createElement(_g, { value: le }, P({ ourProps: Z, theirProps: k, defaultTag: dm, features: hm, visible: ze === "visible", name: "Transition.Child" })));
}
function ab(u, c) {
  let { show: s, appear: r = !1, unmount: d = !0, ...m } = u, E = O.useRef(null), S = fm(u), v = Gt(...S ? [E, c] : c === null ? [] : [c]);
  Ai();
  let b = Ti();
  if (s === void 0 && b !== null && (s = (b & Rt.Open) === Rt.Open), s === void 0) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [w, j] = O.useState(s ? "visible" : "hidden"), H = om(() => {
    s || j("hidden");
  }), [Y, B] = O.useState(!0), W = O.useRef([s]);
  it(() => {
    Y !== !1 && W.current[W.current.length - 1] !== s && (W.current.push(s), B(!1));
  }, [W, s]);
  let k = O.useMemo(() => ({ show: s, appear: r, initial: Y }), [s, r, Y]);
  it(() => {
    s ? j("visible") : !wi(H) && E.current !== null && j("hidden");
  }, [s, H]);
  let fe = { unmount: d }, ce = Te(() => {
    var V;
    Y && B(!1), (V = u.beforeEnter) == null || V.call(u);
  }), I = Te(() => {
    var V;
    Y && B(!1), (V = u.beforeLeave) == null || V.call(u);
  }), ie = Ot();
  return F.createElement(Di.Provider, { value: H }, F.createElement(xi.Provider, { value: k }, ie({ ourProps: { ...fe, as: O.Fragment, children: F.createElement(mm, { ref: v, ...fe, ...m, beforeEnter: ce, beforeLeave: I }) }, theirProps: {}, defaultTag: O.Fragment, features: hm, visible: w === "visible", name: "Transition" })));
}
function ub(u, c) {
  let s = O.useContext(xi) !== null, r = Ti() !== null;
  return F.createElement(F.Fragment, null, !s && r ? F.createElement(cs, { ref: c, ...u }) : F.createElement(mm, { ref: c, ...u }));
}
let cs = ct(ab), mm = ct(nb), ms = ct(ub), ib = Object.assign(cs, { Child: ms, Root: cs });
var cb = ((u) => (u[u.Open = 0] = "Open", u[u.Closed = 1] = "Closed", u))(cb || {}), rb = ((u) => (u[u.SetTitleId = 0] = "SetTitleId", u))(rb || {});
let sb = { 0(u, c) {
  return u.titleId === c.id ? u : { ...u, titleId: c.id };
} }, vs = O.createContext(null);
vs.displayName = "DialogContext";
function Oi(u) {
  let c = O.useContext(vs);
  if (c === null) {
    let s = new Error(`<${u} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(s, Oi), s;
  }
  return c;
}
function fb(u, c) {
  return al(c.type, sb, u, c);
}
let jh = ct(function(u, c) {
  let s = O.useId(), { id: r = `headlessui-dialog-${s}`, open: d, onClose: m, initialFocus: E, role: S = "dialog", autoFocus: v = !0, __demoMode: b = !1, unmount: w = !1, ...j } = u, H = O.useRef(!1);
  S = (function() {
    return S === "dialog" || S === "alertdialog" ? S : (H.current || (H.current = !0, console.warn(`Invalid role [${S}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  })();
  let Y = Ti();
  d === void 0 && Y !== null && (d = (Y & Rt.Open) === Rt.Open);
  let B = O.useRef(null), W = Gt(B, c), k = os(B.current), fe = d ? 0 : 1, [ce, I] = O.useReducer(fb, { titleId: null, descriptionId: null, panelRef: O.createRef() }), ie = Te(() => m(!1)), V = Te((C) => I({ type: 0, id: C })), he = Ai() ? fe === 0 : !1, [me, qe] = qg(), Fe = { get current() {
    var C;
    return (C = ce.panelRef.current) != null ? C : B.current;
  } }, ze = cm(), { resolveContainers: Qe } = Qg({ mainTreeNode: ze, portals: me, defaultContainers: [Fe] }), we = Y !== null ? (Y & Rt.Closing) === Rt.Closing : !1;
  tg(b || we ? !1 : he, { allowed: Te(() => {
    var C, Z;
    return [(Z = (C = B.current) == null ? void 0 : C.closest("[data-headlessui-portal]")) != null ? Z : null];
  }), disallowed: Te(() => {
    var C;
    return [(C = ze?.closest("body > *:not(#headlessui-portal-root)")) != null ? C : null];
  }) });
  let He = Jh.get(null);
  it(() => {
    if (he) return He.actions.push(r), () => He.actions.pop(r);
  }, [He, r, he]);
  let Pe = Wh(He, O.useCallback((C) => He.selectors.isTop(C, r), [He, r]));
  hg(Pe, Qe, (C) => {
    C.preventDefault(), ie();
  }), Lg(Pe, k?.defaultView, (C) => {
    C.preventDefault(), C.stopPropagation(), document.activeElement && "blur" in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(), ie();
  }), Sg(b || we ? !1 : he, k, Qe), lg(he, B, ie);
  let [Oe, M] = Hy(), q = O.useMemo(() => [{ dialogState: fe, close: ie, setTitleId: V, unmount: w }, ce], [fe, ie, V, w, ce]), Q = Wa({ open: fe === 0 }), re = { ref: W, id: r, role: S, tabIndex: -1, "aria-modal": b ? void 0 : fe === 0 ? !0 : void 0, "aria-labelledby": ce.titleId, "aria-describedby": Oe, unmount: w }, y = !Xg(), N = en.None;
  he && !b && (N |= en.RestoreFocus, N |= en.TabLock, v && (N |= en.AutoFocus), y && (N |= en.InitialFocus));
  let G = Ot();
  return F.createElement(zg, null, F.createElement(Ch, { force: !0 }, F.createElement(Gg, null, F.createElement(vs.Provider, { value: q }, F.createElement(um, { target: B }, F.createElement(Ch, { force: !1 }, F.createElement(M, { slot: Q }, F.createElement(qe, null, F.createElement(Jg, { initialFocus: E, initialFocusFallback: B, containers: Qe, features: N }, F.createElement(Ly, { value: ie }, G({ ourProps: re, theirProps: j, slot: Q, defaultTag: ob, features: db, visible: fe === 0, name: "Dialog" })))))))))));
}), ob = "div", db = vi.RenderStrategy | vi.Static;
function hb(u, c) {
  let { transition: s = !1, open: r, ...d } = u, m = Ti(), E = u.hasOwnProperty("open") || m !== null, S = u.hasOwnProperty("onClose");
  if (!E && !S) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!E) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!S) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (!m && typeof u.open != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.open}`);
  if (typeof u.onClose != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${u.onClose}`);
  return (r !== void 0 || s) && !d.static ? F.createElement(Hh, null, F.createElement(ib, { show: r, transition: s, unmount: d.unmount }, F.createElement(jh, { ref: c, ...d }))) : F.createElement(Hh, null, F.createElement(jh, { ref: c, open: r, ...d }));
}
let mb = "div";
function vb(u, c) {
  let s = O.useId(), { id: r = `headlessui-dialog-panel-${s}`, transition: d = !1, ...m } = u, [{ dialogState: E, unmount: S }, v] = Oi("Dialog.Panel"), b = Gt(c, v.panelRef), w = Wa({ open: E === 0 }), j = Te((k) => {
    k.stopPropagation();
  }), H = { ref: b, id: r, onClick: j }, Y = d ? ms : O.Fragment, B = d ? { unmount: S } : {}, W = Ot();
  return F.createElement(Y, { ...B }, W({ ourProps: H, theirProps: m, slot: w, defaultTag: mb, name: "Dialog.Panel" }));
}
let yb = "div";
function gb(u, c) {
  let { transition: s = !1, ...r } = u, [{ dialogState: d, unmount: m }] = Oi("Dialog.Backdrop"), E = Wa({ open: d === 0 }), S = { ref: c, "aria-hidden": !0 }, v = s ? ms : O.Fragment, b = s ? { unmount: m } : {}, w = Ot();
  return F.createElement(v, { ...b }, w({ ourProps: S, theirProps: r, slot: E, defaultTag: yb, name: "Dialog.Backdrop" }));
}
let bb = "h2";
function pb(u, c) {
  let s = O.useId(), { id: r = `headlessui-dialog-title-${s}`, ...d } = u, [{ dialogState: m, setTitleId: E }] = Oi("Dialog.Title"), S = Gt(c);
  O.useEffect(() => (E(r), () => E(null)), [r, E]);
  let v = Wa({ open: m === 0 }), b = { ref: S, id: r };
  return Ot()({ ourProps: b, theirProps: d, slot: v, defaultTag: bb, name: "Dialog.Title" });
}
let Sb = ct(hb), ys = ct(vb), vm = ct(gb), ym = ct(pb), gm = Object.assign(Sb, { Panel: ys, Title: ym, Description: Yy });
function Eb({ icon: u, title: c, description: s }) {
  return /* @__PURE__ */ U.jsx("span", { className: "p-3 sm:p-4 bg-white border border-gray-200 rounded-xl", children: /* @__PURE__ */ U.jsxs("div", { className: "flex gap-x-4", children: [
    /* @__PURE__ */ U.jsx("span", { className: "shrink-0 flex justify-center items-center size-10 bg-primary-600 text-white mt-2 rounded-full", children: u }),
    /* @__PURE__ */ U.jsxs("div", { children: [
      /* @__PURE__ */ U.jsx("h3", { className: "font-semibold text-gray-800", children: c }),
      /* @__PURE__ */ U.jsx("p", { className: "text-sm text-gray-500", children: s })
    ] })
  ] }) });
}
function Tb({ checked: u, onChange: c }) {
  return /* @__PURE__ */ U.jsx("div", { className: "mt-4 p-4 rounded-lg border border-gray-200 hover:cursor-pointer", children: /* @__PURE__ */ U.jsxs("div", { className: "flex items-start space-x-3", children: [
    /* @__PURE__ */ U.jsx(
      "input",
      {
        id: "consent",
        type: "checkbox",
        checked: u,
        onChange: (s) => c(s.target.checked),
        className: "h-4 w-4 text-primary-600 border-gray-300 rounded mt-1 focus:ring-primary-600"
      }
    ),
    /* @__PURE__ */ U.jsx("label", { htmlFor: "consent", className: "text-sm text-gray-700", children: "I understand and consent to all monitoring activities described above, including biometric verification. By checking this box, you agree to proceed with the proctored session under these terms." })
  ] }) });
}
function Ab({ onCancel: u, onNext: c, isNextDisabled: s }) {
  return /* @__PURE__ */ U.jsx("div", { className: "flex justify-end gap-x-2", children: /* @__PURE__ */ U.jsxs("div", { className: "flex-1 flex justify-end items-center gap-2", children: [
    /* @__PURE__ */ U.jsx(
      "button",
      {
        type: "button",
        onClick: u,
        className: "py-2 px-3 text-nowrap inline-flex justify-center items-center text-start whitespace-nowrap bg-white border border-gray-200 text-gray-800 text-sm font-medium rounded-lg shadow-2xs align-middle hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none",
        children: "Decline & Exit"
      }
    ),
    /* @__PURE__ */ U.jsx(
      "button",
      {
        type: "button",
        disabled: s,
        onClick: c,
        className: "py-2 px-3 text-nowrap inline-flex justify-center items-center gap-x-2 text-start whitespace-nowrap bg-primary-600 border border-primary-600 text-white text-sm font-medium rounded-lg shadow-2xs align-middle hover:bg-primary-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-1 focus:ring-primary-300",
        children: "Accept & Continue"
      }
    )
  ] }) });
}
function xb({ onNext: u, onCancel: c }) {
  const [s, r] = O.useState(!1), d = [
    {
      icon: /* @__PURE__ */ U.jsxs(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          className: "shrink-0 size-5",
          children: [
            /* @__PURE__ */ U.jsx("path", { d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" }),
            /* @__PURE__ */ U.jsx("circle", { cx: "12", cy: "12", r: "3" })
          ]
        }
      ),
      title: "Session Recording",
      description: "Records your screen, audio, and key activities during the session to ensure transparency and accountability."
    },
    {
      icon: /* @__PURE__ */ U.jsxs(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          className: "shrink-0 size-5",
          children: [
            /* @__PURE__ */ U.jsx("path", { d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z" }),
            /* @__PURE__ */ U.jsx("circle", { cx: "12", cy: "13", r: "3" })
          ]
        }
      ),
      title: "Camera & Microphone",
      description: "Continuous access to your camera and microphone is required for identity verification and live monitoring."
    },
    {
      icon: /* @__PURE__ */ U.jsx(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          className: "shrink-0 size-5",
          children: /* @__PURE__ */ U.jsx("path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" })
        }
      ),
      title: "Integrity Monitoring",
      description: "Detects tab switching, background activity, and unusual behavior to maintain exam integrity."
    },
    {
      icon: /* @__PURE__ */ U.jsxs(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          className: "shrink-0 size-5",
          children: [
            /* @__PURE__ */ U.jsx("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
            /* @__PURE__ */ U.jsx("path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }),
            /* @__PURE__ */ U.jsx("path", { d: "M10 9H8" }),
            /* @__PURE__ */ U.jsx("path", { d: "M16 13H8" }),
            /* @__PURE__ */ U.jsx("path", { d: "M16 17H8" })
          ]
        }
      ),
      title: "Identity Verification",
      description: "Uses facial recognition and ID document scanning to securely confirm your identity before entry."
    }
  ];
  return /* @__PURE__ */ U.jsxs(U.Fragment, { children: [
    /* @__PURE__ */ U.jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
      /* @__PURE__ */ U.jsx("h1", { className: "font-semibold text-2xl text-gray-800", children: "Proctoring Consent" }),
      /* @__PURE__ */ U.jsx("div", { className: "mt-2", children: /* @__PURE__ */ U.jsx("p", { className: "text-gray-600 text-sm", children: "To ensure fairness, security, and compliance, this session may monitor the following. Please review and agree to continue." }) })
    ] }),
    /* @__PURE__ */ U.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5", children: d.map((m, E) => /* @__PURE__ */ U.jsx(
      Eb,
      {
        icon: m.icon,
        title: m.title,
        description: m.description
      },
      E
    )) }),
    /* @__PURE__ */ U.jsx(
      Tb,
      {
        checked: s,
        onChange: r
      }
    ),
    /* @__PURE__ */ U.jsx(
      Ab,
      {
        onCancel: c,
        onNext: u,
        isNextDisabled: !s
      }
    )
  ] });
}
async function Db() {
  try {
    const u = !!navigator.mediaDevices?.getUserMedia, c = !!navigator.mediaDevices?.getDisplayMedia, s = !!window.RTCPeerConnection;
    return !u || !c || !s ? {
      success: !1,
      error: "Browser doesn't support required APIs. Use Chrome/Edge."
    } : { success: !0 };
  } catch {
    return {
      success: !1,
      error: "Browser doesn't support required APIs. Use Chrome/Edge."
    };
  }
}
async function wb() {
  try {
    return (await navigator.mediaDevices.getUserMedia({ video: !0 })).getTracks().forEach((c) => c.stop()), { success: !0 };
  } catch {
    return {
      success: !1,
      error: "Camera access denied or not available."
    };
  }
}
async function Ob() {
  try {
    return (await navigator.mediaDevices.getUserMedia({ audio: !0 })).getTracks().forEach((c) => c.stop()), { success: !0 };
  } catch {
    return {
      success: !1,
      error: "Microphone access denied or not available."
    };
  }
}
async function Mb() {
  try {
    if (!navigator.onLine)
      return {
        success: !1,
        error: "No internet connection."
      };
    const u = Date.now();
    await new Promise((s, r) => {
      const d = new Image();
      d.src = `https://www.google.com/favicon.ico?${Date.now()}`;
      const m = setTimeout(() => {
        r(new Error("Network timeout (>5s)."));
      }, 5e3);
      d.onload = () => {
        clearTimeout(m), s();
      }, d.onerror = () => {
        clearTimeout(m), r(new Error("Network check failed (resource blocked)."));
      };
    });
    const c = Date.now() - u;
    return c > 3e3 ? {
      success: !1,
      error: `High latency detected (${c}ms).`
    } : { success: !0 };
  } catch (u) {
    return {
      success: !1,
      error: u instanceof Error ? u.message : "Network check failed."
    };
  }
}
async function _b() {
  try {
    return (await navigator.mediaDevices.getUserMedia({ video: !0 })).getTracks().forEach((c) => c.stop()), { success: !0 };
  } catch {
    return {
      success: !1,
      error: "Camera access denied or not available."
    };
  }
}
async function zb() {
  try {
    return (await navigator.mediaDevices.getUserMedia({ audio: !0 })).getTracks().forEach((c) => c.stop()), { success: !0 };
  } catch {
    return {
      success: !1,
      error: "Microphone access denied or not available."
    };
  }
}
async function rs(u) {
  u.status = "checking", u.error = "";
  try {
    await new Promise((s) => setTimeout(s, 2e3));
    let c;
    switch (u.key) {
      case "browser":
        c = await Db();
        break;
      case "webcam":
        c = await wb();
        break;
      case "microphone":
        c = await Ob();
        break;
      case "network":
        c = await Mb();
        break;
      default:
        throw new Error("Unknown check type");
    }
    c.success ? u.status = "success" : (u.status = "error", u.error = c.error || "Check failed");
  } catch (c) {
    u.status = "error", u.error = c instanceof Error ? c.message : "Check failed";
  }
  return u;
}
async function Rb(u) {
  if (console.log("handleCheckAction", u), u.key === "network")
    return await rs(u);
  if (u.key === "webcam") {
    const c = await _b();
    return u.status = c.success ? "success" : "error", u.error = c.error || "", u;
  } else if (u.key === "microphone") {
    const c = await zb();
    return u.status = c.success ? "success" : "error", u.error = c.error || "", u;
  } else if (u.key === "browser")
    return await rs(u);
  return u;
}
function Nb() {
  return [
    {
      key: "browser",
      name: "Browser Support",
      description: "Checks if your browser supports camera, screen share, and WebRTC.",
      status: "pending",
      error: ""
    },
    {
      key: "webcam",
      name: "Webcam",
      description: "Checks if camera permissions are enabled.",
      status: "pending",
      error: ""
    },
    {
      key: "microphone",
      name: "Microphone",
      description: "Checks if microphone permissions are enabled.",
      status: "pending",
      error: ""
    },
    {
      key: "network",
      name: "Network",
      description: "Checks network stability.",
      status: "pending",
      error: ""
    }
  ];
}
function Ub({ status: u }) {
  return u === "checking" ? /* @__PURE__ */ U.jsxs("span", { className: "flex items-center gap-2 text-sm text-gray-500 dark:text-neutral-300", children: [
    /* @__PURE__ */ U.jsx("div", { className: "animate-spin inline-block size-4 border-2 border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-400" }),
    "Checking…"
  ] }) : u === "success" ? /* @__PURE__ */ U.jsxs("span", { className: "flex items-center gap-1 text-sm text-emerald-600 font-semibold", children: [
    /* @__PURE__ */ U.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "size-4", children: /* @__PURE__ */ U.jsx("path", { d: "M20 6 9 17l-5-5" }) }),
    "Passed"
  ] }) : u === "error" ? /* @__PURE__ */ U.jsxs("span", { className: "flex items-center gap-1 text-sm text-red-600 font-semibold", children: [
    /* @__PURE__ */ U.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "size-4", children: [
      /* @__PURE__ */ U.jsx("path", { d: "M18 6 6 18" }),
      /* @__PURE__ */ U.jsx("path", { d: "m6 6 12 12" })
    ] }),
    "Failed"
  ] }) : /* @__PURE__ */ U.jsx("span", { className: "flex items-center gap-2 text-sm text-gray-500 dark:text-neutral-300", children: "Pending" });
}
function Cb({ check: u, onAction: c }) {
  const s = () => {
    const r = "p-3 rounded-md flex flex-col gap-1 border";
    return u.status === "checking" || u.status === "pending" ? `${r} bg-gray-50 border-gray-200 dark:bg-neutral-700 dark:border-neutral-700` : u.status === "success" ? `${r} bg-emerald-50 border-emerald-500 dark:bg-emerald-800/30 dark:border-emerald-700` : u.status === "error" ? `${r} bg-red-50 border-red-500 dark:bg-red-800/30 dark:border-red-700` : r;
  };
  return /* @__PURE__ */ U.jsxs("li", { className: s(), children: [
    /* @__PURE__ */ U.jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ U.jsx("span", { className: "font-medium text-gray-800 dark:text-neutral-200", children: u.name }),
      /* @__PURE__ */ U.jsx(Ub, { status: u.status })
    ] }),
    /* @__PURE__ */ U.jsx("p", { className: "text-sm text-gray-600 dark:text-neutral-400", children: u.description }),
    u.error && /* @__PURE__ */ U.jsx("p", { className: "text-sm text-red-500", children: u.error }),
    u.status === "error" && /* @__PURE__ */ U.jsx("div", { className: "flex gap-x-3 mt-4", children: /* @__PURE__ */ U.jsx(
      "button",
      {
        type: "button",
        className: "inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800 focus:outline-hidden dark:text-red-500 dark:hover:text-red-400",
        onClick: () => c(u),
        children: u.key === "network" ? "Retry" : "Allow Permission"
      }
    ) })
  ] });
}
function Hb({ onNext: u }) {
  const [c, s] = O.useState(Nb());
  O.useEffect(() => {
    (async () => {
      for (let E = 0; E < c.length; E++) {
        const S = await rs(c[E]);
        s((v) => v.map(
          (b, w) => w === E ? S : b
        ));
      }
    })();
  }, []);
  const r = c.every((m) => m.status === "success"), d = async (m) => {
    const E = await Rb(m);
    s((S) => S.map((v) => v.key === m.key ? E : v));
  };
  return /* @__PURE__ */ U.jsxs(U.Fragment, { children: [
    /* @__PURE__ */ U.jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
      /* @__PURE__ */ U.jsx("h1", { className: "font-semibold text-2xl text-gray-800 dark:text-neutral-200", children: "System Readiness Check" }),
      /* @__PURE__ */ U.jsx("div", { className: "mt-2", children: /* @__PURE__ */ U.jsx("p", { className: "text-gray-600 dark:text-neutral-400 text-sm", children: "We'll verify that your camera, microphone, and browser permissions are enabled. If any required access is blocked, you'll be prompted to allow it before continuing." }) })
    ] }),
    /* @__PURE__ */ U.jsx("ul", { className: "space-y-4", children: c.map((m) => /* @__PURE__ */ U.jsx(
      Cb,
      {
        check: m,
        onAction: d
      },
      m.key
    )) }),
    /* @__PURE__ */ U.jsx("div", { className: "pt-6", children: /* @__PURE__ */ U.jsx("div", { className: "flex justify-end gap-x-2", "x-show": "allPassed", children: /* @__PURE__ */ U.jsx("div", { className: "flex-1 flex justify-end items-center gap-2", children: r && /* @__PURE__ */ U.jsx(
      "button",
      {
        onClick: u,
        className: "py-2 px-3 text-nowrap inline-flex justify-center items-center gap-x-2 text-start whitespace-nowrap bg-primary-600 border border-primary-600 text-white text-sm font-medium rounded-lg shadow-2xs align-middle hover:bg-primary-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-1 focus:ring-primary-300 dark:focus:ring-primary-500",
        children: "Continue"
      }
    ) }) }) })
  ] });
}
function jb({
  isVisible: u,
  onCancel: c,
  onComplete: s
}) {
  const [r, d] = O.useState("consent");
  O.useEffect(() => {
    u && d("consent");
  }, [u]);
  const m = () => {
    r === "consent" ? d("device") : r === "device" && s();
  };
  return /* @__PURE__ */ U.jsxs(gm, { open: u, onClose: c, className: "relative z-10", children: [
    /* @__PURE__ */ U.jsx(
      vm,
      {
        transition: !0,
        className: "fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      }
    ),
    /* @__PURE__ */ U.jsx("div", { className: "fixed inset-0 z-10 w-screen overflow-y-auto", children: /* @__PURE__ */ U.jsx("div", { className: "flex min-h-full items-center justify-center text-center sm:p-0", children: /* @__PURE__ */ U.jsxs(
      ys,
      {
        transition: !0,
        className: "relative transform max-w-6xl  space-y-8 flex flex-col overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-6xl sm:p-6 data-closed:sm:translate-y-0 data-closed:sm:scale-95",
        children: [
          r === "consent" && /* @__PURE__ */ U.jsx(xb, { onNext: m, onCancel: c }),
          r === "device" && /* @__PURE__ */ U.jsx(Hb, { onNext: m })
        ]
      }
    ) }) })
  ] });
}
function Bb({ warnings: u, onContinue: c }) {
  if (u.length === 0) return null;
  const r = u.sort((d, m) => {
    const E = { low: 1, medium: 2, high: 3, critical: 4 };
    return E[m.severity] - E[d.severity];
  })[0];
  return /* @__PURE__ */ U.jsxs(gm, { open: !0, onClose: () => {
  }, className: "relative z-10", children: [
    /* @__PURE__ */ U.jsx(
      vm,
      {
        transition: !0,
        className: "fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in dark:bg-neutral-900/80"
      }
    ),
    /* @__PURE__ */ U.jsx("div", { className: "fixed inset-0 z-10 w-screen overflow-y-auto", children: /* @__PURE__ */ U.jsx("div", { className: "flex min-h-full items-center justify-center text-center sm:p-0", children: /* @__PURE__ */ U.jsx(
      ys,
      {
        transition: !0,
        className: "relative transform overflow-hidden rounded-xl bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95 dark:bg-neutral-800",
        children: /* @__PURE__ */ U.jsxs("div", { className: "w-full max-h-full overflow-hidden flex flex-col", children: [
          /* @__PURE__ */ U.jsx("div", { className: "py-2.5 px-4 flex justify-between items-center border-b border-gray-200 dark:border-neutral-700", children: /* @__PURE__ */ U.jsx(ym, { as: "h3", className: "font-medium text-gray-800 dark:text-neutral-200", children: r.title }) }),
          /* @__PURE__ */ U.jsx("div", { className: "overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500", children: /* @__PURE__ */ U.jsxs("div", { className: "p-4 space-y-5", children: [
            /* @__PURE__ */ U.jsx("p", { className: "text-gray-600 dark:text-neutral-400 mb-4 text-sm", children: r.description }),
            r.resolutionSteps && r.resolutionSteps.length > 0 && /* @__PURE__ */ U.jsx("div", { className: "space-y-2", children: r.resolutionSteps.map((d, m) => /* @__PURE__ */ U.jsx("p", { className: "text-gray-600 dark:text-neutral-400 text-sm", children: d }, m)) })
          ] }) }),
          /* @__PURE__ */ U.jsx("div", { className: "py-2 px-4 border-t border-gray-200 dark:border-neutral-700", children: /* @__PURE__ */ U.jsx("div", { className: "flex-1 flex justify-end items-center gap-2", children: /* @__PURE__ */ U.jsx(
            "button",
            {
              onClick: () => c(r.id),
              disabled: r.blocking && !r.continueEnabled,
              type: "button",
              className: "py-2 px-3 text-nowrap inline-flex justify-center items-center gap-x-2 text-start whitespace-nowrap bg-primary-600 border border-primary-600 text-white text-sm font-medium rounded-lg shadow-2xs align-middle hover:bg-primary-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-1 focus:ring-primary-300",
              children: r.blocking ? "Continue" : "Dismiss"
            }
          ) }) })
        ] })
      }
    ) }) })
  ] });
}
function qb({ isVisible: u, stream: c }) {
  const s = O.useRef(null), r = O.useRef(null), d = O.useRef(!1), m = O.useRef({ x: 0, y: 0 });
  O.useEffect(() => {
    c && s.current && (s.current.srcObject = c, s.current.muted = !0);
  }, [c]), O.useEffect(() => {
    r.current && u && (r.current.style.left = "10px", r.current.style.top = `${window.innerHeight - 200}px`);
  }, [u]);
  const E = (w) => {
    if (!r.current) return;
    d.current = !0;
    const j = r.current.getBoundingClientRect();
    m.current = {
      x: w.clientX - j.left,
      y: w.clientY - j.top
    }, w.preventDefault();
  }, S = (w) => {
    if (!d.current || !r.current) return;
    const j = w.clientX - m.current.x, H = w.clientY - m.current.y;
    r.current.style.left = `${j}px`, r.current.style.top = `${H}px`;
  }, v = () => {
    d.current = !1;
  }, b = () => {
    d.current = !1;
  };
  return O.useEffect(() => {
    const w = (Y) => S(Y), j = () => v(), H = () => b();
    return document.addEventListener("mousemove", w), document.addEventListener("mouseup", j), document.addEventListener("mouseleave", H), () => {
      document.removeEventListener("mousemove", w), document.removeEventListener("mouseup", j), document.removeEventListener("mouseleave", H);
    };
  }, []), u ? /* @__PURE__ */ U.jsx(
    "div",
    {
      ref: r,
      className: "fixed z-[80] w-64 h-48 flex items-center justify-center cursor-pointer",
      style: {
        left: "0px",
        top: typeof window < "u" ? `${window.innerHeight - 200}px` : "0px"
      },
      onMouseDown: E,
      children: /* @__PURE__ */ U.jsx("div", { className: "w-full max-w-xs sm:w-full sm:mx-auto flex items-center", children: /* @__PURE__ */ U.jsxs("div", { className: "w-full max-h-full overflow-hidden flex flex-col bg-white rounded-md pointer-events-auto shadow-xl dark:bg-neutral-800", children: [
        /* @__PURE__ */ U.jsx("div", { className: "p-2 flex justify-between items-center border-b border-gray-200 dark:border-neutral-700", children: /* @__PURE__ */ U.jsx("h3", { className: "font-medium text-xs text-gray-800 dark:text-neutral-200", children: "Webcam Monitor" }) }),
        /* @__PURE__ */ U.jsx("div", { className: "overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500", children: /* @__PURE__ */ U.jsx("div", { className: "p-2 space-y-5", children: /* @__PURE__ */ U.jsx("div", { className: "relative w-full h-40", children: /* @__PURE__ */ U.jsx(
          "video",
          {
            ref: s,
            id: "camera-feed",
            className: "absolute inset-0 w-full h-full object-cover",
            autoPlay: !0,
            playsInline: !0,
            muted: !0
          }
        ) }) }) })
      ] }) })
    }
  ) : null;
}
function Yb() {
  const { uiState: u, dispatch: c } = vy();
  return /* @__PURE__ */ U.jsxs(U.Fragment, { children: [
    /* @__PURE__ */ U.jsx(
      jb,
      {
        isVisible: u.setupWidget.isVisible,
        onCancel: () => {
          u.setupWidget.config && u.setupWidget.config.onCancel(), c({ type: "HIDE_SETUP_WIDGET" });
        },
        onComplete: () => {
          u.setupWidget.config && u.setupWidget.config.onComplete(), c({ type: "HIDE_SETUP_WIDGET" });
        }
      }
    ),
    /* @__PURE__ */ U.jsx(
      Bb,
      {
        warnings: u.warnings,
        onContinue: (s) => {
          const r = u.warnings.find((d) => d.id === s);
          r && r.anomalyId && c({ type: "ANOMALY_RESOLVED", payload: r.anomalyId });
        }
      }
    ),
    /* @__PURE__ */ U.jsx(
      qb,
      {
        isVisible: u.webcamWidget.isVisible,
        stream: u.webcamWidget.stream
      }
    )
  ] });
}
class Ul {
  static instance = null;
  orgId = null;
  isInitialized = !1;
  reactRoot;
  uiEventBus = new iy();
  constructor() {
  }
  /**
   * Get the singleton instance of TPSentinelSDK
   */
  static getInstance() {
    return Ul.instance || (Ul.instance = new Ul()), Ul.instance;
  }
  /**
   * Get the current organization ID
   */
  getOrgId() {
    if (!this.orgId)
      throw new Error("TPSentinelSDK must be initialized before accessing orgId");
    return this.orgId;
  }
  getUIEventBus() {
    return this.uiEventBus;
  }
  /**
   * Initialize the TPSentinelSDK with organization ID
   * @param orgId - Organization ID (UUID)
   */
  initialize(c) {
    if (!c || typeof c != "string")
      throw new Error("Organization ID must be a valid string");
    this.orgId = c;
    const s = document.getElementById("tp-sentinel-ui");
    if (!s)
      throw new Error('Container with id "tp-sentinel-ui" not found');
    this.reactRoot = uy.createRoot(s), this.reactRoot.render(F.createElement(
      my,
      { uiEventBus: this.uiEventBus, children: F.createElement(Yb) }
    )), this.isInitialized = !0, console.log(`TPSentinelSDK initialized for organization: ${c}`);
  }
  /**
   * Start a proctoring session
   * @param sessionId - Unique session identifier
   * @param sessionToken - Session authentication token
   * @param overridePolicies - Optional policy overrides for the session
   * @returns Promise<Proctor> - Proctor instance for managing the session
   */
  async startProctor(c, s, r) {
    if (!this.isInitialized)
      throw new Error("TPSentinelSDK must be initialized before starting proctoring");
    if (!c || !s)
      throw new Error("Session ID and session token are required");
    console.log(`Starting proctoring session: ${c}`);
    const d = new Iv(c, s, r);
    return await d.start(), d;
  }
  cleanup() {
    this.reactRoot?.unmount();
  }
}
export {
  Iv as Proctor,
  Yb as ProctorUI,
  Ul as TPSentinelSDK
};
