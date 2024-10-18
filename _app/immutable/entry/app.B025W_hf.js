import { _ as __vitePreload } from "../chunks/preload-helper.CP-VSAQc.js";
import { s as safe_not_equal, f as afterUpdate, o as onMount, h as binding_callbacks, t as tick } from "../chunks/scheduler.DwkGEAYb.js";
import { S as SvelteComponent, i as init, s as space, n as empty, f as claim_space, g as insert_hydration, p as transition_out, w as check_outros, o as transition_in, d as detach, e as element, c as claim_element, a as children, m as attr, C as set_style, t as text, b as claim_text, j as set_data, v as group_outros, D as construct_svelte_component, y as create_component, z as claim_component, A as mount_component, B as destroy_component } from "../chunks/index.BoYP9eQs.js";
function e(e6, t2) {
  var n2 = Object.keys(e6);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e6);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e6, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function t(t2) {
  for (var n2 = 1; n2 < arguments.length; n2++) {
    var r2 = null != arguments[n2] ? arguments[n2] : {};
    n2 % 2 ? e(Object(r2), true).forEach(function(e6) {
      s(t2, e6, r2[e6]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(r2)) : e(Object(r2)).forEach(function(e6) {
      Object.defineProperty(t2, e6, Object.getOwnPropertyDescriptor(r2, e6));
    });
  }
  return t2;
}
function n(e6) {
  return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e7) {
    return typeof e7;
  } : function(e7) {
    return e7 && "function" == typeof Symbol && e7.constructor === Symbol && e7 !== Symbol.prototype ? "symbol" : typeof e7;
  }, n(e6);
}
function r(e6, t2) {
  if (!(e6 instanceof t2))
    throw new TypeError("Cannot call a class as a function");
}
function i(e6, t2) {
  for (var n2 = 0; n2 < t2.length; n2++) {
    var r2 = t2[n2];
    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e6, r2.key, r2);
  }
}
function o(e6, t2, n2) {
  return t2 && i(e6.prototype, t2), n2 && i(e6, n2), Object.defineProperty(e6, "prototype", { writable: false }), e6;
}
function s(e6, t2, n2) {
  return t2 in e6 ? Object.defineProperty(e6, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e6[t2] = n2, e6;
}
function a(e6, t2) {
  if ("function" != typeof t2 && null !== t2)
    throw new TypeError("Super expression must either be null or a function");
  e6.prototype = Object.create(t2 && t2.prototype, { constructor: { value: e6, writable: true, configurable: true } }), Object.defineProperty(e6, "prototype", { writable: false }), t2 && l(e6, t2);
}
function u(e6) {
  return u = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e7) {
    return e7.__proto__ || Object.getPrototypeOf(e7);
  }, u(e6);
}
function l(e6, t2) {
  return l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e7, t3) {
    return e7.__proto__ = t3, e7;
  }, l(e6, t2);
}
function c(e6, t2) {
  if (null == e6)
    return {};
  var n2, r2, i2 = function(e7, t3) {
    if (null == e7)
      return {};
    var n3, r3, i3 = {}, o3 = Object.keys(e7);
    for (r3 = 0; r3 < o3.length; r3++)
      n3 = o3[r3], t3.indexOf(n3) >= 0 || (i3[n3] = e7[n3]);
    return i3;
  }(e6, t2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e6);
    for (r2 = 0; r2 < o2.length; r2++)
      n2 = o2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e6, n2) && (i2[n2] = e6[n2]);
  }
  return i2;
}
function d(e6, t2) {
  if (t2 && ("object" == typeof t2 || "function" == typeof t2))
    return t2;
  if (void 0 !== t2)
    throw new TypeError("Derived constructors may only return object or undefined");
  return function(e7) {
    if (void 0 === e7)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e7;
  }(e6);
}
function h(e6) {
  var t2 = function() {
    if ("undefined" == typeof Reflect || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if ("function" == typeof Proxy)
      return true;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), true;
    } catch (e7) {
      return false;
    }
  }();
  return function() {
    var n2, r2 = u(e6);
    if (t2) {
      var i2 = u(this).constructor;
      n2 = Reflect.construct(r2, arguments, i2);
    } else
      n2 = r2.apply(this, arguments);
    return d(this, n2);
  };
}
function f(e6, t2) {
  return function(e7) {
    if (Array.isArray(e7))
      return e7;
  }(e6) || function(e7, t3) {
    var n2 = null == e7 ? null : "undefined" != typeof Symbol && e7[Symbol.iterator] || e7["@@iterator"];
    if (null == n2)
      return;
    var r2, i2, o2 = [], s2 = true, a2 = false;
    try {
      for (n2 = n2.call(e7); !(s2 = (r2 = n2.next()).done) && (o2.push(r2.value), !t3 || o2.length !== t3); s2 = true)
        ;
    } catch (e8) {
      a2 = true, i2 = e8;
    } finally {
      try {
        s2 || null == n2.return || n2.return();
      } finally {
        if (a2)
          throw i2;
      }
    }
    return o2;
  }(e6, t2) || _(e6, t2) || function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function p(e6) {
  return function(e7) {
    if (Array.isArray(e7))
      return g(e7);
  }(e6) || function(e7) {
    if ("undefined" != typeof Symbol && null != e7[Symbol.iterator] || null != e7["@@iterator"])
      return Array.from(e7);
  }(e6) || _(e6) || function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function _(e6, t2) {
  if (e6) {
    if ("string" == typeof e6)
      return g(e6, t2);
    var n2 = Object.prototype.toString.call(e6).slice(8, -1);
    return "Object" === n2 && e6.constructor && (n2 = e6.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e6) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? g(e6, t2) : void 0;
  }
}
function g(e6, t2) {
  (null == t2 || t2 > e6.length) && (t2 = e6.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
    r2[n2] = e6[n2];
  return r2;
}
function v(e6, t2) {
  var n2 = "undefined" != typeof Symbol && e6[Symbol.iterator] || e6["@@iterator"];
  if (!n2) {
    if (Array.isArray(e6) || (n2 = _(e6)) || t2) {
      n2 && (e6 = n2);
      var r2 = 0, i2 = function() {
      };
      return { s: i2, n: function() {
        return r2 >= e6.length ? { done: true } : { done: false, value: e6[r2++] };
      }, e: function(e7) {
        throw e7;
      }, f: i2 };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o2, s2 = true, a2 = false;
  return { s: function() {
    n2 = n2.call(e6);
  }, n: function() {
    var e7 = n2.next();
    return s2 = e7.done, e7;
  }, e: function(e7) {
    a2 = true, o2 = e7;
  }, f: function() {
    try {
      s2 || null == n2.return || n2.return();
    } finally {
      if (a2)
        throw o2;
    }
  } };
}
var m = { DEBUG: false, LIB_VERSION: "1.96.1" }, y = Array.isArray, b = Object.prototype, k = b.hasOwnProperty, w = b.toString, S = y || function(e6) {
  return "[object Array]" === w.call(e6);
}, F = function(e6) {
  return "[object Uint8Array]" === w.call(e6);
}, P = function(e6) {
  return "function" == typeof e6;
}, I = function(e6) {
  return e6 === Object(e6) && !S(e6);
}, x = function(e6) {
  if (I(e6)) {
    for (var t2 in e6)
      if (k.call(e6, t2))
        return false;
    return true;
  }
  return false;
}, R = function(e6) {
  return void 0 === e6;
}, E = function(e6) {
  return "[object String]" == w.call(e6);
}, C = function(e6) {
  return null === e6;
}, O = function(e6) {
  return "[object Number]" == w.call(e6);
}, $ = function(e6) {
  return "[object Boolean]" === w.call(e6);
}, M = Array.prototype, T = M.forEach, A = M.indexOf, D = "undefined" != typeof window ? window : void 0, q = null == D ? void 0 : D.navigator, B = null == D ? void 0 : D.document, N = null == q ? void 0 : q.userAgent, L = null != D ? D : {}, j = "[PostHog.js]", H = { _log: function(e6) {
  if (D && (m.DEBUG || L.POSTHOG_DEBUG) && !R(D.console) && D.console) {
    for (var t2 = ("__rrweb_original__" in D.console[e6]) ? D.console[e6].__rrweb_original__ : D.console[e6], n2 = arguments.length, r2 = new Array(n2 > 1 ? n2 - 1 : 0), i2 = 1; i2 < n2; i2++)
      r2[i2 - 1] = arguments[i2];
    t2.apply(void 0, [j].concat(r2));
  }
}, info: function() {
  for (var e6 = arguments.length, t2 = new Array(e6), n2 = 0; n2 < e6; n2++)
    t2[n2] = arguments[n2];
  H._log.apply(H, ["log"].concat(t2));
}, warn: function() {
  for (var e6 = arguments.length, t2 = new Array(e6), n2 = 0; n2 < e6; n2++)
    t2[n2] = arguments[n2];
  H._log.apply(H, ["warn"].concat(t2));
}, error: function() {
  for (var e6 = arguments.length, t2 = new Array(e6), n2 = 0; n2 < e6; n2++)
    t2[n2] = arguments[n2];
  H._log.apply(H, ["error"].concat(t2));
}, critical: function() {
  for (var e6, t2 = arguments.length, n2 = new Array(t2), r2 = 0; r2 < t2; r2++)
    n2[r2] = arguments[r2];
  (e6 = console).error.apply(e6, [j].concat(n2));
}, uninitializedWarning: function(e6) {
  H.error("You must initialize PostHog before calling ".concat(e6));
} }, V = {}, U = function(e6) {
  return e6.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
};
function W(e6, t2, n2) {
  if (S(e6)) {
    if (T && e6.forEach === T)
      e6.forEach(t2, n2);
    else if ("length" in e6 && e6.length === +e6.length) {
      for (var r2 = 0, i2 = e6.length; r2 < i2; r2++)
        if (r2 in e6 && t2.call(n2, e6[r2], r2) === V)
          return;
    }
  }
}
function G(e6, t2, n2) {
  if (!C(e6) && !R(e6)) {
    if (S(e6))
      return W(e6, t2, n2);
    for (var r2 in e6)
      if (k.call(e6, r2) && t2.call(n2, e6[r2], r2) === V)
        return;
  }
}
var z = function(e6) {
  for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++)
    n2[r2 - 1] = arguments[r2];
  return W(n2, function(t3) {
    for (var n3 in t3)
      void 0 !== t3[n3] && (e6[n3] = t3[n3]);
  }), e6;
};
function Y(e6, t2) {
  return -1 !== e6.indexOf(t2);
}
function Q(e6) {
  for (var t2 = Object.keys(e6), n2 = t2.length, r2 = new Array(n2); n2--; )
    r2[n2] = [t2[n2], e6[t2[n2]]];
  return r2;
}
var J = function() {
  return Date.now = Date.now || function() {
    return +/* @__PURE__ */ new Date();
  }, Date.now();
}, X = function(e6) {
  try {
    return e6();
  } catch (e7) {
    return;
  }
}, K = function(e6) {
  return function() {
    try {
      for (var t2 = arguments.length, n2 = new Array(t2), r2 = 0; r2 < t2; r2++)
        n2[r2] = arguments[r2];
      return e6.apply(this, n2);
    } catch (e7) {
      H.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."), H.critical(e7);
    }
  };
}, Z = function(e6) {
  var t2 = {};
  return G(e6, function(e7, n2) {
    E(e7) && e7.length > 0 && (t2[n2] = e7);
  }), t2;
};
var ee = ["$performance_raw"];
function te(e6, t2) {
  return n2 = e6, r2 = function(e7, n3) {
    return n3 && ee.indexOf(n3) > -1 ? e7 : E(e7) && !C(t2) ? e7.slice(0, t2) : e7;
  }, i2 = /* @__PURE__ */ new Set(), function e7(t3, n3) {
    return t3 !== Object(t3) ? r2 ? r2(t3, n3) : t3 : i2.has(t3) ? void 0 : (i2.add(t3), S(t3) ? (o2 = [], W(t3, function(t4) {
      o2.push(e7(t4));
    })) : (o2 = {}, G(t3, function(t4, n4) {
      i2.has(t4) || (o2[n4] = e7(t4, n4));
    })), o2);
    var o2;
  }(n2);
  var n2, r2, i2;
}
function ne(e6) {
  var t2, n2, r2, i2, o2, s2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", a2 = 0, u2 = 0, l2 = "", c2 = [];
  if (!e6)
    return e6;
  e6 = re(e6);
  do {
    t2 = (o2 = e6.charCodeAt(a2++) << 16 | e6.charCodeAt(a2++) << 8 | e6.charCodeAt(a2++)) >> 18 & 63, n2 = o2 >> 12 & 63, r2 = o2 >> 6 & 63, i2 = 63 & o2, c2[u2++] = s2.charAt(t2) + s2.charAt(n2) + s2.charAt(r2) + s2.charAt(i2);
  } while (a2 < e6.length);
  switch (l2 = c2.join(""), e6.length % 3) {
    case 1:
      l2 = l2.slice(0, -2) + "==";
      break;
    case 2:
      l2 = l2.slice(0, -1) + "=";
  }
  return l2;
}
var re = function(e6) {
  var t2, n2, r2, i2, o2 = "";
  for (t2 = n2 = 0, r2 = (e6 = (e6 + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, i2 = 0; i2 < r2; i2++) {
    var s2 = e6.charCodeAt(i2), a2 = null;
    s2 < 128 ? n2++ : a2 = s2 > 127 && s2 < 2048 ? String.fromCharCode(s2 >> 6 | 192, 63 & s2 | 128) : String.fromCharCode(s2 >> 12 | 224, s2 >> 6 & 63 | 128, 63 & s2 | 128), C(a2) || (n2 > t2 && (o2 += e6.substring(t2, n2)), o2 += a2, t2 = n2 = i2 + 1);
  }
  return n2 > t2 && (o2 += e6.substring(t2, e6.length)), o2;
}, ie = function() {
  function e6(t2) {
    return t2 && (t2.preventDefault = e6.preventDefault, t2.stopPropagation = e6.stopPropagation), t2;
  }
  return e6.preventDefault = function() {
    this.returnValue = false;
  }, e6.stopPropagation = function() {
    this.cancelBubble = true;
  }, function(t2, n2, r2, i2, o2) {
    if (t2)
      if (t2.addEventListener && !i2)
        t2.addEventListener(n2, r2, !!o2);
      else {
        var s2 = "on" + n2, a2 = t2[s2];
        t2[s2] = /* @__PURE__ */ function(t3, n3, r3) {
          return function(i3) {
            if (i3 = i3 || e6(null == D ? void 0 : D.event)) {
              var o3, s3 = true;
              P(r3) && (o3 = r3(i3));
              var a3 = n3.call(t3, i3);
              return false !== o3 && false !== a3 || (s3 = false), s3;
            }
          };
        }(t2, r2, a2);
      }
    else
      H.error("No valid element provided to register_event");
  };
}();
function oe(e6, t2) {
  var n2 = function() {
    if (!B)
      return t2("document not found");
    var n3 = B.createElement("script");
    n3.type = "text/javascript", n3.src = e6, n3.onload = function(e7) {
      return t2(void 0, e7);
    }, n3.onerror = function(e7) {
      return t2(e7);
    };
    var r2, i2 = B.querySelectorAll("body > script");
    i2.length > 0 ? null === (r2 = i2[0].parentNode) || void 0 === r2 || r2.insertBefore(n3, i2[0]) : B.body.appendChild(n3);
  };
  null != B && B.body ? n2() : null == B || B.addEventListener("DOMContentLoaded", n2);
}
function se(e6) {
  return e6 ? U(e6).split(/\s+/) : [];
}
function ae(e6) {
  var t2 = "";
  switch (n(e6.className)) {
    case "string":
      t2 = e6.className;
      break;
    case "object":
      t2 = ("baseVal" in e6.className ? e6.className.baseVal : null) || e6.getAttribute("class") || "";
      break;
    default:
      t2 = "";
  }
  return se(t2);
}
function ue(e6) {
  var t2 = "";
  return pe(e6) && !_e(e6) && e6.childNodes && e6.childNodes.length && G(e6.childNodes, function(e7) {
    de(e7) && e7.textContent && (t2 += U(e7.textContent).split(/(\s+)/).filter(ge).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255));
  }), U(t2);
}
function le(e6) {
  return !!e6 && 1 === e6.nodeType;
}
function ce(e6, t2) {
  return !!e6 && !!e6.tagName && e6.tagName.toLowerCase() === t2.toLowerCase();
}
function de(e6) {
  return !!e6 && 3 === e6.nodeType;
}
function he(e6) {
  return !!e6 && 11 === e6.nodeType;
}
var fe = ["a", "button", "form", "input", "select", "textarea", "label"];
function pe(e6) {
  for (var t2 = e6; t2.parentNode && !ce(t2, "body"); t2 = t2.parentNode) {
    var n2 = ae(t2);
    if (Y(n2, "ph-sensitive") || Y(n2, "ph-no-capture"))
      return false;
  }
  if (Y(ae(e6), "ph-include"))
    return true;
  var r2 = e6.type || "";
  if (E(r2))
    switch (r2.toLowerCase()) {
      case "hidden":
      case "password":
        return false;
    }
  var i2 = e6.name || e6.id || "";
  if (E(i2)) {
    if (/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(i2.replace(/[^a-zA-Z0-9]/g, "")))
      return false;
  }
  return true;
}
function _e(e6) {
  return !!(ce(e6, "input") && !["button", "checkbox", "submit", "reset"].includes(e6.type) || ce(e6, "select") || ce(e6, "textarea") || "true" === e6.getAttribute("contenteditable"));
}
function ge(e6) {
  if (C(e6) || R(e6))
    return false;
  if (E(e6)) {
    e6 = U(e6);
    if (/^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/.test((e6 || "").replace(/[- ]/g, "")))
      return false;
    if (/(^\d{3}-?\d{2}-?\d{4}$)/.test(e6))
      return false;
  }
  return true;
}
function ve(e6) {
  var t2 = ue(e6);
  return ge(t2 = "".concat(t2, " ").concat(me(e6)).trim()) ? t2 : "";
}
function me(e6) {
  var t2 = "";
  return e6 && e6.childNodes && e6.childNodes.length && G(e6.childNodes, function(e7) {
    var n2;
    if (e7 && "span" === (null === (n2 = e7.tagName) || void 0 === n2 ? void 0 : n2.toLowerCase()))
      try {
        var r2 = ue(e7);
        t2 = "".concat(t2, " ").concat(r2).trim(), e7.childNodes && e7.childNodes.length && (t2 = "".concat(t2, " ").concat(me(e7)).trim());
      } catch (e8) {
        H.error(e8);
      }
  }), t2;
}
function ye(e6) {
  return function(e7) {
    var n2 = e7.map(function(e8) {
      var n3, r2, i2 = "";
      if (e8.tag_name && (i2 += e8.tag_name), e8.attr_class) {
        e8.attr_class.sort();
        var o2, s2 = v(e8.attr_class);
        try {
          for (s2.s(); !(o2 = s2.n()).done; ) {
            var a2 = o2.value;
            i2 += ".".concat(a2.replace(/"/g, ""));
          }
        } catch (e9) {
          s2.e(e9);
        } finally {
          s2.f();
        }
      }
      var u2 = t(t(t(t({}, e8.text ? { text: e8.text } : {}), {}, { "nth-child": null !== (n3 = e8.nth_child) && void 0 !== n3 ? n3 : 0, "nth-of-type": null !== (r2 = e8.nth_of_type) && void 0 !== r2 ? r2 : 0 }, e8.href ? { href: e8.href } : {}), e8.attr_id ? { attr_id: e8.attr_id } : {}), e8.attributes), l2 = {};
      return Q(u2).sort(function(e9, t2) {
        var n4 = f(e9, 1)[0], r3 = f(t2, 1)[0];
        return n4.localeCompare(r3);
      }).forEach(function(e9) {
        var t2 = f(e9, 2), n4 = t2[0], r3 = t2[1];
        return l2[be(n4.toString())] = be(r3.toString());
      }), i2 += ":", i2 += Q(u2).map(function(e9) {
        var t2 = f(e9, 2), n4 = t2[0], r3 = t2[1];
        return "".concat(n4, '="').concat(r3, '"');
      }).join("");
    });
    return n2.join(";");
  }(function(e7) {
    return e7.map(function(e8) {
      var t2, n2, r2 = { text: null === (t2 = e8.$el_text) || void 0 === t2 ? void 0 : t2.slice(0, 400), tag_name: e8.tag_name, href: null === (n2 = e8.attr__href) || void 0 === n2 ? void 0 : n2.slice(0, 2048), attr_class: ke(e8), attr_id: e8.attr__id, nth_child: e8.nth_child, nth_of_type: e8.nth_of_type, attributes: {} };
      return Q(e8).filter(function(e9) {
        return 0 === f(e9, 1)[0].indexOf("attr__");
      }).forEach(function(e9) {
        var t3 = f(e9, 2), n3 = t3[0], i2 = t3[1];
        return r2.attributes[n3] = i2;
      }), r2;
    });
  }(e6));
}
function be(e6) {
  return e6.replace(/"|\\"/g, '\\"');
}
function ke(e6) {
  var t2 = e6.attr__class;
  return t2 ? S(t2) ? t2 : se(t2) : void 0;
}
var we = function() {
  function e6(t2) {
    r(this, e6), this.clicks = [], this.enabled = t2;
  }
  return o(e6, [{ key: "isRageClick", value: function(e7, t2, n2) {
    if (!this.enabled)
      return false;
    var r2 = this.clicks[this.clicks.length - 1];
    if (r2 && Math.abs(e7 - r2.x) + Math.abs(t2 - r2.y) < 30 && n2 - r2.timestamp < 1e3) {
      if (this.clicks.push({ x: e7, y: t2, timestamp: n2 }), 3 === this.clicks.length)
        return true;
    } else
      this.clicks = [{ x: e7, y: t2, timestamp: n2 }];
    return false;
  } }]), e6;
}(), Se = "$people_distinct_id", Fe = "__alias", Pe = "__timers", Ie = "$autocapture_disabled_server_side", xe = "$session_recording_enabled_server_side", Re = "$console_log_recording_enabled_server_side", Ee = "$session_recording_recorder_version_server_side", Ce = "$session_recording_network_payload_capture", Oe = "$sesid", $e = "$session_is_sampled", Me = "$enabled_feature_flags", Te = "$early_access_features", Ae = "$stored_person_properties", De = "$stored_group_properties", qe = "$surveys", Be = "$flag_call_reported", Ne = "$user_state", Le = "$posthog_quota_limited", je = "$client_session_props", He = [Se, Fe, "__cmpns", Pe, xe, Oe, Me, Ne, Le, Te, De, Ae, qe, Be, je];
function Ve(e6, t2) {
  return t2.length > e6 ? t2.slice(0, e6) + "..." : t2;
}
var Ue = { _initializedTokens: [], _isDisabledServerSide: null, _isAutocaptureEnabled: false, _setIsAutocaptureEnabled: function(e6) {
  var t2, n2 = C(this._isDisabledServerSide) ? !(null === (t2 = e6.persistence) || void 0 === t2 || !t2.props[Ie]) : this._isDisabledServerSide, r2 = !!e6.config.autocapture;
  this._isAutocaptureEnabled = r2 && !n2;
}, _previousElementSibling: function(e6) {
  if (e6.previousElementSibling)
    return e6.previousElementSibling;
  var t2 = e6;
  do {
    t2 = t2.previousSibling;
  } while (t2 && !le(t2));
  return t2;
}, _getAugmentPropertiesFromElement: function(e6) {
  if (!pe(e6))
    return {};
  var t2 = {};
  return G(e6.attributes, function(e7) {
    if (0 === e7.name.indexOf("data-ph-capture-attribute")) {
      var n2 = e7.name.replace("data-ph-capture-attribute-", ""), r2 = e7.value;
      n2 && r2 && ge(r2) && (t2[n2] = r2);
    }
  }), t2;
}, _getPropertiesFromElement: function(e6, t2, n2) {
  var r2, i2 = e6.tagName.toLowerCase(), o2 = { tag_name: i2 };
  fe.indexOf(i2) > -1 && !n2 && ("a" === i2.toLowerCase() || "button" === i2.toLowerCase() ? o2.$el_text = Ve(1024, ve(e6)) : o2.$el_text = Ve(1024, ue(e6)));
  var s2 = ae(e6);
  s2.length > 0 && (o2.classes = s2.filter(function(e7) {
    return "" !== e7;
  }));
  var a2 = null === (r2 = this.config) || void 0 === r2 ? void 0 : r2.element_attribute_ignorelist;
  G(e6.attributes, function(n3) {
    var r3;
    if ((!_e(e6) || -1 !== ["name", "id", "class"].indexOf(n3.name)) && ((null == a2 || !a2.includes(n3.name)) && !t2 && ge(n3.value) && (r3 = n3.name, !E(r3) || "_ngcontent" !== r3.substring(0, 10) && "_nghost" !== r3.substring(0, 7)))) {
      var i3 = n3.value;
      "class" === n3.name && (i3 = se(i3).join(" ")), o2["attr__" + n3.name] = Ve(1024, i3);
    }
  });
  for (var u2 = 1, l2 = 1, c2 = e6; c2 = this._previousElementSibling(c2); )
    u2++, c2.tagName === e6.tagName && l2++;
  return o2.nth_child = u2, o2.nth_of_type = l2, o2;
}, _getDefaultProperties: function(e6) {
  return { $event_type: e6, $ce_version: 1 };
}, _extractCustomPropertyValue: function(e6) {
  var t2 = [];
  return G(null == B ? void 0 : B.querySelectorAll(e6.css_selector), function(e7) {
    var n2;
    ["input", "select"].indexOf(e7.tagName.toLowerCase()) > -1 ? n2 = e7.value : e7.textContent && (n2 = e7.textContent), ge(n2) && t2.push(n2);
  }), t2.join(", ");
}, _getCustomProperties: function(e6) {
  var t2 = this, n2 = {};
  return G(this._customProperties, function(r2) {
    G(r2.event_selectors, function(i2) {
      G(null == B ? void 0 : B.querySelectorAll(i2), function(i3) {
        Y(e6, i3) && pe(i3) && (n2[r2.name] = t2._extractCustomPropertyValue(r2));
      });
    });
  }), n2;
}, _getEventTarget: function(e6) {
  return R(e6.target) ? e6.srcElement || null : null !== (t2 = e6.target) && void 0 !== t2 && t2.shadowRoot ? e6.composedPath()[0] || null : e6.target || null;
  var t2;
}, _captureEvent: function(e6, t2) {
  var n2, r2 = this, i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "$autocapture", o2 = this._getEventTarget(e6);
  (de(o2) && (o2 = o2.parentNode || null), "$autocapture" === i2 && "click" === e6.type && e6 instanceof MouseEvent) && (null !== (n2 = this.rageclicks) && void 0 !== n2 && n2.isRageClick(e6.clientX, e6.clientY, (/* @__PURE__ */ new Date()).getTime()) && this._captureEvent(e6, t2, "$rageclick"));
  if (o2 && function(e7, t3) {
    var n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
    if (!D || !e7 || ce(e7, "html") || !le(e7))
      return false;
    if (null != n3 && n3.url_allowlist) {
      var r3 = D.location.href, i3 = n3.url_allowlist;
      if (i3 && !i3.some(function(e8) {
        return r3.match(e8);
      }))
        return false;
    }
    if (null != n3 && n3.dom_event_allowlist) {
      var o3 = n3.dom_event_allowlist;
      if (o3 && !o3.some(function(e8) {
        return t3.type === e8;
      }))
        return false;
    }
    if (null != n3 && n3.element_allowlist) {
      var s3 = n3.element_allowlist;
      if (s3 && !s3.some(function(t4) {
        return e7.tagName.toLowerCase() === t4;
      }))
        return false;
    }
    if (null != n3 && n3.css_selector_allowlist) {
      var a3 = n3.css_selector_allowlist;
      if (a3 && !a3.some(function(t4) {
        return e7.matches(t4);
      }))
        return false;
    }
    for (var u3 = false, l3 = [e7], c3 = true, d3 = e7; d3.parentNode && !ce(d3, "body"); )
      if (he(d3.parentNode))
        l3.push(d3.parentNode.host), d3 = d3.parentNode.host;
      else {
        if (!(c3 = d3.parentNode || false))
          break;
        if (fe.indexOf(c3.tagName.toLowerCase()) > -1)
          u3 = true;
        else {
          var h3 = D.getComputedStyle(c3);
          h3 && "pointer" === h3.getPropertyValue("cursor") && (u3 = true);
        }
        l3.push(c3), d3 = c3;
      }
    var f3 = D.getComputedStyle(e7);
    if (f3 && "pointer" === f3.getPropertyValue("cursor") && "click" === t3.type)
      return true;
    var p3 = e7.tagName.toLowerCase();
    switch (p3) {
      case "html":
        return false;
      case "form":
        return "submit" === t3.type;
      case "input":
      case "select":
      case "textarea":
        return "change" === t3.type || "click" === t3.type;
      default:
        return u3 ? "click" === t3.type : "click" === t3.type && (fe.indexOf(p3) > -1 || "true" === e7.getAttribute("contenteditable"));
    }
  }(o2, e6, this.config)) {
    for (var s2, a2, u2 = [o2], l2 = o2; l2.parentNode && !ce(l2, "body"); )
      he(l2.parentNode) ? (u2.push(l2.parentNode.host), l2 = l2.parentNode.host) : (u2.push(l2.parentNode), l2 = l2.parentNode);
    var c2, d2 = [], h2 = {}, f2 = false;
    if (G(u2, function(e7) {
      var n3 = pe(e7);
      "a" === e7.tagName.toLowerCase() && (c2 = e7.getAttribute("href"), c2 = n3 && ge(c2) && c2), Y(ae(e7), "ph-no-capture") && (f2 = true), d2.push(r2._getPropertiesFromElement(e7, t2.config.mask_all_element_attributes, t2.config.mask_all_text));
      var i3 = r2._getAugmentPropertiesFromElement(e7);
      z(h2, i3);
    }), t2.config.mask_all_text || ("a" === o2.tagName.toLowerCase() || "button" === o2.tagName.toLowerCase() ? d2[0].$el_text = ve(o2) : d2[0].$el_text = ue(o2)), c2 && (d2[0].attr__href = c2), f2)
      return false;
    var p2 = z(this._getDefaultProperties(e6.type), t2.elementsChainAsString ? { $elements_chain: ye(d2) } : { $elements: d2 }, null !== (s2 = d2[0]) && void 0 !== s2 && s2.$el_text ? { $el_text: null === (a2 = d2[0]) || void 0 === a2 ? void 0 : a2.$el_text } : {}, this._getCustomProperties(u2), h2);
    return t2.capture(i2, p2), true;
  }
}, _navigate: function(e6) {
  D && (D.location.href = e6);
}, _addDomEventHandlers: function(e6) {
  var t2 = this;
  if (D && B) {
    var n2 = function(n3) {
      n3 = n3 || (null == D ? void 0 : D.event), t2._captureEvent(n3, e6);
    };
    ie(B, "submit", n2, false, true), ie(B, "change", n2, false, true), ie(B, "click", n2, false, true);
  }
}, _customProperties: [], rageclicks: null, config: void 0, init: function(e6) {
  var t2;
  $(e6.__autocapture) || (this.config = e6.__autocapture), null !== (t2 = this.config) && void 0 !== t2 && t2.url_allowlist && (this.config.url_allowlist = this.config.url_allowlist.map(function(e7) {
    return new RegExp(e7);
  })), this.rageclicks = new we(e6.config.rageclick);
}, afterDecideResponse: function(e6, t2) {
  var n2 = t2.config.token;
  this._initializedTokens.indexOf(n2) > -1 ? H.info('autocapture already initialized for token "' + n2 + '"') : (t2.persistence && t2.persistence.register(s({}, Ie, !!e6.autocapture_opt_out)), this._isDisabledServerSide = !!e6.autocapture_opt_out, this._setIsAutocaptureEnabled(t2), this._initializedTokens.push(n2), e6 && e6.config && e6.config.enable_collect_everything && this._isAutocaptureEnabled ? (e6.custom_properties && (this._customProperties = e6.custom_properties), this._addDomEventHandlers(t2)) : t2.__autocapture = false);
}, enabledForProject: function(e6, t2, n2) {
  if (!e6)
    return true;
  t2 = R(t2) ? 10 : t2, n2 = R(n2) ? 10 : n2;
  for (var r2 = 0, i2 = 0; i2 < e6.length; i2++)
    r2 += e6.charCodeAt(i2);
  return r2 % t2 < n2;
}, isBrowserSupported: function() {
  return P(null == B ? void 0 : B.querySelectorAll);
} };
!function(e6) {
  for (var t2 in e6)
    P(e6[t2]) && (e6[t2] = e6[t2].bind(e6));
}(Ue), function(e6) {
  for (var t2 in e6)
    P(e6[t2]) && (e6[t2] = K(e6[t2]));
}(Ue);
var We = "$active_feature_flags", Ge = "$override_feature_flags", ze = "$feature_flag_payloads", Ye = function(e6) {
  var t2, n2 = {}, r2 = v(Q(e6 || {}));
  try {
    for (r2.s(); !(t2 = r2.n()).done; ) {
      var i2 = f(t2.value, 2), o2 = i2[0], s2 = i2[1];
      s2 && (n2[o2] = s2);
    }
  } catch (e7) {
    r2.e(e7);
  } finally {
    r2.f();
  }
  return n2;
}, Qe = function() {
  function e6(t2) {
    r(this, e6), this.instance = t2, this._override_warning = false, this.featureFlagEventHandlers = [], this.reloadFeatureFlagsQueued = false, this.reloadFeatureFlagsInAction = false;
  }
  return o(e6, [{ key: "getFlags", value: function() {
    return Object.keys(this.getFlagVariants());
  } }, { key: "getFlagVariants", value: function() {
    var e7 = this.instance.get_property(Me), t2 = this.instance.get_property(Ge);
    if (!t2)
      return e7 || {};
    for (var n2 = z({}, e7), r2 = Object.keys(t2), i2 = 0; i2 < r2.length; i2++)
      false === t2[r2[i2]] ? delete n2[r2[i2]] : n2[r2[i2]] = t2[r2[i2]];
    return this._override_warning || (H.warn(" Overriding feature flags!", { enabledFlags: e7, overriddenFlags: t2, finalFlags: n2 }), this._override_warning = true), n2;
  } }, { key: "getFlagPayloads", value: function() {
    return this.instance.get_property(ze) || {};
  } }, { key: "reloadFeatureFlags", value: function() {
    this.reloadFeatureFlagsQueued || (this.reloadFeatureFlagsQueued = true, this._startReloadTimer());
  } }, { key: "setAnonymousDistinctId", value: function(e7) {
    this.$anon_distinct_id = e7;
  } }, { key: "setReloadingPaused", value: function(e7) {
    this.reloadFeatureFlagsInAction = e7;
  } }, { key: "resetRequestQueue", value: function() {
    this.reloadFeatureFlagsQueued = false;
  } }, { key: "_startReloadTimer", value: function() {
    var e7 = this;
    this.reloadFeatureFlagsQueued && !this.reloadFeatureFlagsInAction && setTimeout(function() {
      !e7.reloadFeatureFlagsInAction && e7.reloadFeatureFlagsQueued && (e7.reloadFeatureFlagsQueued = false, e7._reloadFeatureFlagsRequest());
    }, 5);
  } }, { key: "_reloadFeatureFlagsRequest", value: function() {
    var e7 = this;
    if (!this.instance.config.advanced_disable_feature_flags) {
      this.setReloadingPaused(true);
      var t2 = this.instance.config.token, n2 = this.instance.get_property(Ae), r2 = this.instance.get_property(De), i2 = ne(JSON.stringify({ token: t2, distinct_id: this.instance.get_distinct_id(), groups: this.instance.getGroups(), $anon_distinct_id: this.$anon_distinct_id, person_properties: n2, group_properties: r2, disable_flags: this.instance.config.advanced_disable_feature_flags || void 0 }));
      this.instance._send_request(this.instance.config.api_host + "/decide/?v=3", { data: i2 }, { method: "POST" }, this.instance._prepare_callback(function(t3) {
        e7.$anon_distinct_id = void 0, e7.receivedFeatureFlags(t3), e7.setReloadingPaused(false), e7._startReloadTimer();
      }));
    }
  } }, { key: "getFeatureFlag", value: function(e7) {
    var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (this.instance.decideEndpointWasHit || this.getFlags() && this.getFlags().length > 0) {
      var n2, r2 = this.getFlagVariants()[e7], i2 = "".concat(r2), o2 = this.instance.get_property(Be) || {};
      if (t2.send_event || !("send_event" in t2)) {
        if (!(e7 in o2) || !o2[e7].includes(i2))
          S(o2[e7]) ? o2[e7].push(i2) : o2[e7] = [i2], null === (n2 = this.instance.persistence) || void 0 === n2 || n2.register(s({}, Be, o2)), this.instance.capture("$feature_flag_called", { $feature_flag: e7, $feature_flag_response: r2 });
      }
      return r2;
    }
    H.warn('getFeatureFlag for key "' + e7 + `" failed. Feature flags didn't load in time.`);
  } }, { key: "getFeatureFlagPayload", value: function(e7) {
    return this.getFlagPayloads()[e7];
  } }, { key: "isFeatureEnabled", value: function(e7) {
    var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (this.instance.decideEndpointWasHit || this.getFlags() && this.getFlags().length > 0)
      return !!this.getFeatureFlag(e7, t2);
    H.warn('isFeatureEnabled for key "' + e7 + `" failed. Feature flags didn't load in time.`);
  } }, { key: "addFeatureFlagsHandler", value: function(e7) {
    this.featureFlagEventHandlers.push(e7);
  } }, { key: "removeFeatureFlagsHandler", value: function(e7) {
    this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter(function(t2) {
      return t2 !== e7;
    });
  } }, { key: "receivedFeatureFlags", value: function(e7) {
    if (this.instance.persistence) {
      this.instance.decideEndpointWasHit = true;
      var n2 = this.getFlagVariants(), r2 = this.getFlagPayloads();
      !function(e8, n3) {
        var r3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, o2 = e8.featureFlags, a2 = e8.featureFlagPayloads;
        if (o2)
          if (S(o2)) {
            var u2, l2 = {};
            if (o2)
              for (var c2 = 0; c2 < o2.length; c2++)
                l2[o2[c2]] = true;
            n3 && n3.register((s(u2 = {}, We, o2), s(u2, Me, l2), u2));
          } else {
            var d2, h2 = o2, f2 = a2;
            e8.errorsWhileComputingFlags && (h2 = t(t({}, r3), h2), f2 = t(t({}, i2), f2)), n3 && n3.register((s(d2 = {}, We, Object.keys(Ye(h2))), s(d2, Me, h2 || {}), s(d2, ze, f2 || {}), d2));
          }
      }(e7, this.instance.persistence, n2, r2), this._fireFeatureFlagsCallbacks();
    }
  } }, { key: "override", value: function(e7) {
    if (!this.instance.__loaded || !this.instance.persistence)
      return H.uninitializedWarning("posthog.feature_flags.override");
    if (this._override_warning = false, false === e7)
      this.instance.persistence.unregister(Ge);
    else if (S(e7)) {
      for (var t2 = {}, n2 = 0; n2 < e7.length; n2++)
        t2[e7[n2]] = true;
      this.instance.persistence.register(s({}, Ge, t2));
    } else
      this.instance.persistence.register(s({}, Ge, e7));
  } }, { key: "onFeatureFlags", value: function(e7) {
    var t2 = this;
    if (this.addFeatureFlagsHandler(e7), this.instance.decideEndpointWasHit) {
      var n2 = this._prepareFeatureFlagsForCallbacks(), r2 = n2.flags, i2 = n2.flagVariants;
      e7(r2, i2);
    }
    return function() {
      return t2.removeFeatureFlagsHandler(e7);
    };
  } }, { key: "updateEarlyAccessFeatureEnrollment", value: function(e7, n2) {
    var r2, i2, o2 = s({}, "$feature_enrollment/".concat(e7), n2);
    this.instance.capture("$feature_enrollment_update", { $feature_flag: e7, $feature_enrollment: n2, $set: o2 }), this.setPersonPropertiesForFlags(o2, false);
    var a2 = t(t({}, this.getFlagVariants()), {}, s({}, e7, n2));
    null === (r2 = this.instance.persistence) || void 0 === r2 || r2.register((s(i2 = {}, We, Object.keys(Ye(a2))), s(i2, Me, a2), i2)), this._fireFeatureFlagsCallbacks();
  } }, { key: "getEarlyAccessFeatures", value: function(e7) {
    var t2 = this, n2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r2 = this.instance.get_property(Te);
    if (r2 && !n2)
      return e7(r2);
    this.instance._send_request("".concat(this.instance.config.api_host, "/api/early_access_features/?token=").concat(this.instance.config.token), {}, { method: "GET" }, function(n3) {
      var r3, i2 = n3.earlyAccessFeatures;
      return null === (r3 = t2.instance.persistence) || void 0 === r3 || r3.register(s({}, Te, i2)), e7(i2);
    });
  } }, { key: "_prepareFeatureFlagsForCallbacks", value: function() {
    var e7 = this.getFlags(), t2 = this.getFlagVariants();
    return { flags: e7.filter(function(e8) {
      return t2[e8];
    }), flagVariants: Object.keys(t2).filter(function(e8) {
      return t2[e8];
    }).reduce(function(e8, n2) {
      return e8[n2] = t2[n2], e8;
    }, {}) };
  } }, { key: "_fireFeatureFlagsCallbacks", value: function() {
    var e7 = this._prepareFeatureFlagsForCallbacks(), t2 = e7.flags, n2 = e7.flagVariants;
    this.featureFlagEventHandlers.forEach(function(e8) {
      return e8(t2, n2);
    });
  } }, { key: "setPersonPropertiesForFlags", value: function(e7) {
    var n2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], r2 = this.instance.get_property(Ae) || {};
    this.instance.register(s({}, Ae, t(t({}, r2), e7))), n2 && this.instance.reloadFeatureFlags();
  } }, { key: "resetPersonPropertiesForFlags", value: function() {
    this.instance.unregister(Ae);
  } }, { key: "setGroupPropertiesForFlags", value: function(e7) {
    var n2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], r2 = this.instance.get_property(De) || {};
    0 !== Object.keys(r2).length && Object.keys(r2).forEach(function(n3) {
      r2[n3] = t(t({}, r2[n3]), e7[n3]), delete e7[n3];
    }), this.instance.register(s({}, De, t(t({}, r2), e7))), n2 && this.instance.reloadFeatureFlags();
  } }, { key: "resetGroupPropertiesForFlags", value: function(e7) {
    if (e7) {
      var n2 = this.instance.get_property(De) || {};
      this.instance.register(s({}, De, t(t({}, n2), {}, s({}, e7, {}))));
    } else
      this.instance.unregister(De);
  } }]), e6;
}();
Math.trunc || (Math.trunc = function(e6) {
  return e6 < 0 ? Math.ceil(e6) : Math.floor(e6);
}), Number.isInteger || (Number.isInteger = function(e6) {
  return O(e6) && isFinite(e6) && Math.floor(e6) === e6;
});
var Je = "0123456789abcdef", Xe = function() {
  function e6(t2) {
    if (r(this, e6), this.bytes = t2, 16 !== t2.length)
      throw new TypeError("not 128-bit length");
  }
  return o(e6, [{ key: "toString", value: function() {
    for (var e7 = "", t2 = 0; t2 < this.bytes.length; t2++)
      e7 = e7 + Je.charAt(this.bytes[t2] >>> 4) + Je.charAt(15 & this.bytes[t2]), 3 !== t2 && 5 !== t2 && 7 !== t2 && 9 !== t2 || (e7 += "-");
    if (36 !== e7.length)
      throw new Error("Invalid UUIDv7 was generated");
    return e7;
  } }, { key: "clone", value: function() {
    return new e6(this.bytes.slice(0));
  } }, { key: "equals", value: function(e7) {
    return 0 === this.compareTo(e7);
  } }, { key: "compareTo", value: function(e7) {
    for (var t2 = 0; t2 < 16; t2++) {
      var n2 = this.bytes[t2] - e7.bytes[t2];
      if (0 !== n2)
        return Math.sign(n2);
    }
    return 0;
  } }], [{ key: "fromFieldsV7", value: function(t2, n2, r2, i2) {
    if (!Number.isInteger(t2) || !Number.isInteger(n2) || !Number.isInteger(r2) || !Number.isInteger(i2) || t2 < 0 || n2 < 0 || r2 < 0 || i2 < 0 || t2 > 281474976710655 || n2 > 4095 || r2 > 1073741823 || i2 > 4294967295)
      throw new RangeError("invalid field value");
    var o2 = new Uint8Array(16);
    return o2[0] = t2 / Math.pow(2, 40), o2[1] = t2 / Math.pow(2, 32), o2[2] = t2 / Math.pow(2, 24), o2[3] = t2 / Math.pow(2, 16), o2[4] = t2 / Math.pow(2, 8), o2[5] = t2, o2[6] = 112 | n2 >>> 8, o2[7] = n2, o2[8] = 128 | r2 >>> 24, o2[9] = r2 >>> 16, o2[10] = r2 >>> 8, o2[11] = r2, o2[12] = i2 >>> 24, o2[13] = i2 >>> 16, o2[14] = i2 >>> 8, o2[15] = i2, new e6(o2);
  } }]), e6;
}(), Ke = function() {
  function e6() {
    r(this, e6), s(this, "timestamp", 0), s(this, "counter", 0), s(this, "random", new tt());
  }
  return o(e6, [{ key: "generate", value: function() {
    var e7 = this.generateOrAbort();
    if (R(e7)) {
      this.timestamp = 0;
      var t2 = this.generateOrAbort();
      if (R(t2))
        throw new Error("Could not generate UUID after timestamp reset");
      return t2;
    }
    return e7;
  } }, { key: "generateOrAbort", value: function() {
    var e7 = Date.now();
    if (e7 > this.timestamp)
      this.timestamp = e7, this.resetCounter();
    else {
      if (!(e7 + 1e4 > this.timestamp))
        return;
      this.counter++, this.counter > 4398046511103 && (this.timestamp++, this.resetCounter());
    }
    return Xe.fromFieldsV7(this.timestamp, Math.trunc(this.counter / Math.pow(2, 30)), this.counter & Math.pow(2, 30) - 1, this.random.nextUint32());
  } }, { key: "resetCounter", value: function() {
    this.counter = 1024 * this.random.nextUint32() + (1023 & this.random.nextUint32());
  } }]), e6;
}(), Ze = function(e6) {
  if ("undefined" != typeof UUIDV7_DENY_WEAK_RNG && UUIDV7_DENY_WEAK_RNG)
    throw new Error("no cryptographically strong RNG available");
  for (var t2 = 0; t2 < e6.length; t2++)
    e6[t2] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
  return e6;
};
D && !R(D.crypto) && crypto.getRandomValues && (Ze = function(e6) {
  return crypto.getRandomValues(e6);
});
var et, tt = function() {
  function e6() {
    r(this, e6), s(this, "buffer", new Uint32Array(8)), s(this, "cursor", 1 / 0);
  }
  return o(e6, [{ key: "nextUint32", value: function() {
    return this.cursor >= this.buffer.length && (Ze(this.buffer), this.cursor = 0), this.buffer[this.cursor++];
  } }]), e6;
}(), nt = function() {
  return rt().toString();
}, rt = function() {
  return (et || (et = new Ke())).generate();
}, it = "Thu, 01 Jan 1970 00:00:00 GMT", ot = "";
var st = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i, at = function(e6) {
  var t2 = e6.match(st);
  return t2 ? t2[0] : "";
};
function ut(e6, t2) {
  if (t2) {
    var n2 = function(e7) {
      var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : B;
      if (ot)
        return ot;
      if (!t3)
        return "";
      if (["localhost", "127.0.0.1"].includes(e7))
        return "";
      for (var n3 = e7.split("."), r3 = Math.min(n3.length, 8), i2 = "dmn_chk_" + nt(), o2 = new RegExp("(^|;)\\s*" + i2 + "=1"); !ot && r3--; ) {
        var s2 = n3.slice(r3).join("."), a2 = i2 + "=1;domain=." + s2;
        t3.cookie = a2, o2.test(t3.cookie) && (t3.cookie = a2 + ";expires=" + it, ot = s2);
      }
      return ot;
    }(e6);
    if (!n2) {
      var r2 = at(e6);
      r2 !== n2 && H.info("Warning: cookie subdomain discovery mismatch", r2, n2), n2 = r2;
    }
    return n2 ? "; domain=." + n2 : "";
  }
  return "";
}
var lt = { is_supported: function() {
  return !!B;
}, error: function(e6) {
  H.error("cookieStore error: " + e6);
}, get: function(e6) {
  if (B) {
    try {
      for (var t2 = e6 + "=", n2 = B.cookie.split(";").filter(function(e7) {
        return e7.length;
      }), r2 = 0; r2 < n2.length; r2++) {
        for (var i2 = n2[r2]; " " == i2.charAt(0); )
          i2 = i2.substring(1, i2.length);
        if (0 === i2.indexOf(t2))
          return decodeURIComponent(i2.substring(t2.length, i2.length));
      }
    } catch (e7) {
    }
    return null;
  }
}, parse: function(e6) {
  var t2;
  try {
    t2 = JSON.parse(lt.get(e6)) || {};
  } catch (e7) {
  }
  return t2;
}, set: function(e6, t2, n2, r2, i2) {
  if (B)
    try {
      var o2 = "", s2 = "", a2 = ut(B.location.hostname, r2);
      if (n2) {
        var u2 = /* @__PURE__ */ new Date();
        u2.setTime(u2.getTime() + 24 * n2 * 60 * 60 * 1e3), o2 = "; expires=" + u2.toUTCString();
      }
      i2 && (s2 = "; secure");
      var l2 = e6 + "=" + encodeURIComponent(JSON.stringify(t2)) + o2 + "; SameSite=Lax; path=/" + a2 + s2;
      return l2.length > 3686.4 && H.warn("cookieStore warning: large cookie, len=" + l2.length), B.cookie = l2, l2;
    } catch (e7) {
      return;
    }
}, remove: function(e6, t2) {
  try {
    lt.set(e6, "", -1, t2);
  } catch (e7) {
    return;
  }
} }, ct = null, dt = { is_supported: function() {
  if (!C(ct))
    return ct;
  var e6 = true;
  if (R(D))
    e6 = false;
  else
    try {
      var t2 = "__mplssupport__";
      dt.set(t2, "xyz"), '"xyz"' !== dt.get(t2) && (e6 = false), dt.remove(t2);
    } catch (t3) {
      e6 = false;
    }
  return e6 || H.error("localStorage unsupported; falling back to cookie store"), ct = e6, e6;
}, error: function(e6) {
  H.error("localStorage error: " + e6);
}, get: function(e6) {
  try {
    return null == D ? void 0 : D.localStorage.getItem(e6);
  } catch (e7) {
    dt.error(e7);
  }
  return null;
}, parse: function(e6) {
  try {
    return JSON.parse(dt.get(e6)) || {};
  } catch (e7) {
  }
  return null;
}, set: function(e6, t2) {
  try {
    null == D || D.localStorage.setItem(e6, JSON.stringify(t2));
  } catch (e7) {
    dt.error(e7);
  }
}, remove: function(e6) {
  try {
    null == D || D.localStorage.removeItem(e6);
  } catch (e7) {
    dt.error(e7);
  }
} }, ht = ["distinct_id", Oe, $e], ft = t(t({}, dt), {}, { parse: function(e6) {
  try {
    var t2 = {};
    try {
      t2 = lt.parse(e6) || {};
    } catch (e7) {
    }
    var n2 = z(t2, JSON.parse(dt.get(e6) || "{}"));
    return dt.set(e6, n2), n2;
  } catch (e7) {
  }
  return null;
}, set: function(e6, t2, n2, r2, i2) {
  try {
    dt.set(e6, t2);
    var o2 = {};
    ht.forEach(function(e7) {
      t2[e7] && (o2[e7] = t2[e7]);
    }), Object.keys(o2).length && lt.set(e6, o2, n2, r2, i2);
  } catch (e7) {
    dt.error(e7);
  }
}, remove: function(e6, t2) {
  try {
    null == D || D.localStorage.removeItem(e6), lt.remove(e6, t2);
  } catch (e7) {
    dt.error(e7);
  }
} }), pt = {}, _t = { is_supported: function() {
  return true;
}, error: function(e6) {
  H.error("memoryStorage error: " + e6);
}, get: function(e6) {
  return pt[e6] || null;
}, parse: function(e6) {
  return pt[e6] || null;
}, set: function(e6, t2) {
  pt[e6] = t2;
}, remove: function(e6) {
  delete pt[e6];
} }, gt = null, vt = { is_supported: function() {
  if (!C(gt))
    return gt;
  if (gt = true, R(D))
    gt = false;
  else
    try {
      var e6 = "__support__";
      vt.set(e6, "xyz"), '"xyz"' !== vt.get(e6) && (gt = false), vt.remove(e6);
    } catch (e7) {
      gt = false;
    }
  return gt;
}, error: function(e6) {
  H.error("sessionStorage error: ", e6);
}, get: function(e6) {
  try {
    return null == D ? void 0 : D.sessionStorage.getItem(e6);
  } catch (e7) {
    vt.error(e7);
  }
  return null;
}, parse: function(e6) {
  try {
    return JSON.parse(vt.get(e6)) || null;
  } catch (e7) {
  }
  return null;
}, set: function(e6, t2) {
  try {
    null == D || D.sessionStorage.setItem(e6, JSON.stringify(t2));
  } catch (e7) {
    vt.error(e7);
  }
}, remove: function(e6) {
  try {
    null == D || D.sessionStorage.removeItem(e6);
  } catch (e7) {
    vt.error(e7);
  }
} }, mt = ["localhost", "127.0.0.1"], yt = function(e6) {
  var t2 = null == B ? void 0 : B.createElement("a");
  return R(t2) ? null : (t2.href = e6, t2);
}, bt = function(e6, t2) {
  return !!function(e7) {
    try {
      new RegExp(e7);
    } catch (e8) {
      return false;
    }
    return true;
  }(t2) && new RegExp(t2).test(e6);
}, kt = function(e6, t2) {
  for (var n2, r2 = ((e6.split("#")[0] || "").split("?")[1] || "").split("&"), i2 = 0; i2 < r2.length; i2++) {
    var o2 = r2[i2].split("=");
    if (o2[0] === t2) {
      n2 = o2;
      break;
    }
  }
  if (!S(n2) || n2.length < 2)
    return "";
  var s2 = n2[1];
  try {
    s2 = decodeURIComponent(s2);
  } catch (e7) {
    H.error("Skipping decoding for malformed query param: " + s2);
  }
  return s2.replace(/\+/g, " ");
}, wt = function(e6, t2) {
  var n2 = e6.match(new RegExp(t2 + "=([^&]*)"));
  return n2 ? n2[1] : null;
};
var St = { campaignParams: function(e6) {
  var t2 = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "gad_source", "gbraid", "wbraid", "fbclid", "msclkid"].concat(e6 || []), n2 = {};
  return G(t2, function(e7) {
    var t3 = B ? kt(B.URL, e7) : "";
    t3.length && (n2[e7] = t3);
  }), n2;
}, searchEngine: function() {
  var e6 = null == B ? void 0 : B.referrer;
  return e6 ? 0 === e6.search("https?://(.*)google.([^/?]*)") ? "google" : 0 === e6.search("https?://(.*)bing.com") ? "bing" : 0 === e6.search("https?://(.*)yahoo.com") ? "yahoo" : 0 === e6.search("https?://(.*)duckduckgo.com") ? "duckduckgo" : null : null;
}, searchInfo: function() {
  var e6 = St.searchEngine(), t2 = "yahoo" != e6 ? "q" : "p", n2 = {};
  if (!C(e6)) {
    n2.$search_engine = e6;
    var r2 = B ? kt(B.referrer, t2) : "";
    r2.length && (n2.ph_keyword = r2);
  }
  return n2;
}, browser: function(e6, t2, n2) {
  return t2 = t2 || "", n2 || Y(e6, " OPR/") ? Y(e6, "Mini") ? "Opera Mini" : "Opera" : /(BlackBerry|PlayBook|BB10)/i.test(e6) ? "BlackBerry" : Y(e6, "IEMobile") || Y(e6, "WPDesktop") ? "Internet Explorer Mobile" : Y(e6, "SamsungBrowser/") ? "Samsung Internet" : Y(e6, "Edge") || Y(e6, "Edg/") ? "Microsoft Edge" : Y(e6, "FBIOS") ? "Facebook Mobile" : Y(e6, "Chrome") ? "Chrome" : Y(e6, "CriOS") ? "Chrome iOS" : Y(e6, "UCWEB") || Y(e6, "UCBrowser") ? "UC Browser" : Y(e6, "FxiOS") ? "Firefox iOS" : Y(t2, "Apple") || function(e7) {
    return Y(e7, "Safari") && !Y(e7, "Chrome") && !Y(e7, "Android");
  }(e6) ? Y(e6, "Mobile") ? "Mobile Safari" : "Safari" : Y(e6, "Android") ? "Android Mobile" : Y(e6, "Konqueror") || Y(e6, "konqueror") ? "Konqueror" : Y(e6, "Firefox") ? "Firefox" : Y(e6, "MSIE") || Y(e6, "Trident/") ? "Internet Explorer" : Y(e6, "Gecko") ? "Mozilla" : "";
}, browserVersion: function(e6, t2, n2) {
  var r2 = { "Internet Explorer Mobile": [/rv:(\d+(\.\d+)?)/], "Microsoft Edge": [/Edge?\/(\d+(\.\d+)?)/], Chrome: [/Chrome\/(\d+(\.\d+)?)/], "Chrome iOS": [/CriOS\/(\d+(\.\d+)?)/], "UC Browser": [/(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/], Safari: [/Version\/(\d+(\.\d+)?)/], "Mobile Safari": [/Version\/(\d+(\.\d+)?)/], Opera: [/(Opera|OPR)\/(\d+(\.\d+)?)/], Firefox: [/Firefox\/(\d+(\.\d+)?)/], "Firefox iOS": [/FxiOS\/(\d+(\.\d+)?)/], Konqueror: [/Konqueror[:/]?(\d+(\.\d+)?)/i], BlackBerry: [/BlackBerry (\d+(\.\d+)?)/, /Version\/(\d+(\.\d+)?)/], "Android Mobile": [/android\s(\d+(\.\d+)?)/], "Samsung Internet": [/SamsungBrowser\/(\d+(\.\d+)?)/], "Internet Explorer": [/(rv:|MSIE )(\d+(\.\d+)?)/], Mozilla: [/rv:(\d+(\.\d+)?)/] }[St.browser(e6, t2, n2)];
  if (R(r2))
    return null;
  for (var i2 = 0; i2 < r2.length; i2++) {
    var o2 = r2[i2], s2 = e6.match(o2);
    if (s2)
      return parseFloat(s2[s2.length - 2]);
  }
  return null;
}, browserLanguage: function() {
  return navigator.language || navigator.userLanguage;
}, os: function(e6) {
  if (/Windows/i.test(e6)) {
    if (/Phone/.test(e6) || /WPDesktop/.test(e6))
      return { os_name: "Windows Phone", os_version: "" };
    var t2 = /Windows NT ([0-9.]+)/i.exec(e6);
    return t2 && t2[1] ? { os_name: "Windows", os_version: t2[1] } : { os_name: "Windows", os_version: "" };
  }
  if (/(iPhone|iPad|iPod)/.test(e6)) {
    var n2 = /OS (\d+)_(\d+)_?(\d+)?/i.exec(e6);
    return n2 && n2[1] ? { os_name: "iOS", os_version: [n2[1], n2[2], n2[3] || "0"].join(".") } : { os_name: "iOS", os_version: "" };
  }
  if (/Android/.test(e6)) {
    var r2 = /Android (\d+)\.(\d+)\.?(\d+)?/i.exec(e6);
    return r2 && r2[1] ? { os_name: "Android", os_version: [r2[1], r2[2], r2[3] || "0"].join(".") } : { os_name: "Android", os_version: "" };
  }
  if (/(BlackBerry|PlayBook|BB10)/i.test(e6))
    return { os_name: "BlackBerry", os_version: "" };
  if (/Mac/i.test(e6)) {
    var i2 = /Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i.exec(e6);
    return i2 && i2[1] ? { os_name: "Mac OS X", os_version: [i2[1], i2[2], i2[3] || "0"].join(".") } : { os_name: "Mac OS X", os_version: "" };
  }
  return /Linux/.test(e6) ? { os_name: "Linux", os_version: "" } : /CrOS/.test(e6) ? { os_name: "Chrome OS", os_version: "" } : { os_name: "", os_version: "" };
}, device: function(e6) {
  return /Windows Phone/i.test(e6) || /WPDesktop/.test(e6) ? "Windows Phone" : /iPad/.test(e6) ? "iPad" : /iPod/.test(e6) ? "iPod Touch" : /iPhone/.test(e6) ? "iPhone" : /(BlackBerry|PlayBook|BB10)/i.test(e6) ? "BlackBerry" : /Android/.test(e6) && !/Mobile/.test(e6) ? "Android Tablet" : /Android/.test(e6) ? "Android" : "";
}, deviceType: function(e6) {
  var t2 = this.device(e6);
  return "iPad" === t2 || "Android Tablet" === t2 ? "Tablet" : t2 ? "Mobile" : "Desktop";
}, referrer: function() {
  return (null == B ? void 0 : B.referrer) || "$direct";
}, referringDomain: function() {
  var e6;
  return null != B && B.referrer && (null === (e6 = yt(B.referrer)) || void 0 === e6 ? void 0 : e6.host) || "$direct";
}, properties: function() {
  if (!N)
    return {};
  var e6 = St.os(N), t2 = e6.os_name, n2 = e6.os_version;
  return z(Z({ $os: t2, $os_version: n2, $browser: St.browser(N, navigator.vendor, L.opera), $device: St.device(N), $device_type: St.deviceType(N) }), { $current_url: null == D ? void 0 : D.location.href, $host: null == D ? void 0 : D.location.host, $pathname: null == D ? void 0 : D.location.pathname, $raw_user_agent: N.length > 1e3 ? N.substring(0, 997) + "..." : N, $browser_version: St.browserVersion(N, navigator.vendor, L.opera), $browser_language: St.browserLanguage(), $screen_height: null == D ? void 0 : D.screen.height, $screen_width: null == D ? void 0 : D.screen.width, $viewport_height: null == D ? void 0 : D.innerHeight, $viewport_width: null == D ? void 0 : D.innerWidth, $lib: "web", $lib_version: m.LIB_VERSION, $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10), $time: J() / 1e3 });
}, people_properties: function() {
  if (!N)
    return {};
  var e6 = St.os(N), t2 = e6.os_name, n2 = e6.os_version;
  return z(Z({ $os: t2, $os_version: n2, $browser: St.browser(N, navigator.vendor, L.opera) }), { $browser_version: St.browserVersion(N, navigator.vendor, L.opera) });
} }, Ft = ["cookie", "localstorage", "localstorage+cookie", "sessionstorage", "memory"], Pt = function() {
  function e6(t2) {
    r(this, e6);
    var n2 = "";
    t2.token && (n2 = t2.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")), this.props = {}, this.campaign_params_saved = false, this.custom_campaign_params = t2.custom_campaign_params || [], t2.persistence_name ? this.name = "ph_" + t2.persistence_name : this.name = "ph_" + n2 + "_posthog", -1 === Ft.indexOf(t2.persistence.toLowerCase()) && (H.critical("Unknown persistence type " + t2.persistence + "; falling back to localStorage+cookie"), t2.persistence = "localStorage+cookie");
    var i2 = t2.persistence.toLowerCase();
    "localstorage" === i2 && dt.is_supported() ? this.storage = dt : "localstorage+cookie" === i2 && ft.is_supported() ? this.storage = ft : "sessionstorage" === i2 && vt.is_supported() ? this.storage = vt : "memory" === i2 ? this.storage = _t : "cookie" === i2 ? this.storage = lt : ft.is_supported() ? this.storage = ft : this.storage = lt, this.user_state = "anonymous", this.load(), this.update_config(t2), this.save();
  }
  return o(e6, [{ key: "properties", value: function() {
    var e7 = {};
    return G(this.props, function(t2, n2) {
      if (n2 === Me && I(t2))
        for (var r2 = Object.keys(t2), i2 = 0; i2 < r2.length; i2++)
          e7["$feature/".concat(r2[i2])] = t2[r2[i2]];
      else
        s2 = n2, a2 = false, (C(o2 = He) ? a2 : A && o2.indexOf === A ? -1 != o2.indexOf(s2) : (G(o2, function(e8) {
          if (a2 || (a2 = e8 === s2))
            return V;
        }), a2)) || (e7[n2] = t2);
      var o2, s2, a2;
    }), e7;
  } }, { key: "load", value: function() {
    if (!this.disabled) {
      var e7 = this.storage.parse(this.name);
      e7 && (this.props = z({}, e7));
    }
  } }, { key: "save", value: function() {
    this.disabled || this.storage.set(this.name, this.props, this.expire_days, this.cross_subdomain, this.secure);
  } }, { key: "remove", value: function() {
    this.storage.remove(this.name, false), this.storage.remove(this.name, true);
  } }, { key: "clear", value: function() {
    this.remove(), this.props = {};
  } }, { key: "register_once", value: function(e7, t2, n2) {
    var r2 = this;
    if (I(e7)) {
      R(t2) && (t2 = "None"), this.expire_days = R(n2) ? this.default_expiry : n2;
      var i2 = false;
      if (G(e7, function(e8, n3) {
        r2.props.hasOwnProperty(n3) && r2.props[n3] !== t2 || (r2.props[n3] = e8, i2 = true);
      }), i2)
        return this.save(), true;
    }
    return false;
  } }, { key: "register", value: function(e7, t2) {
    var n2 = this;
    if (I(e7)) {
      this.expire_days = R(t2) ? this.default_expiry : t2;
      var r2 = false;
      if (G(e7, function(t3, i2) {
        e7.hasOwnProperty(i2) && n2.props[i2] !== t3 && (n2.props[i2] = t3, r2 = true);
      }), r2)
        return this.save(), true;
    }
    return false;
  } }, { key: "unregister", value: function(e7) {
    e7 in this.props && (delete this.props[e7], this.save());
  } }, { key: "update_campaign_params", value: function() {
    this.campaign_params_saved || (this.register(St.campaignParams(this.custom_campaign_params)), this.campaign_params_saved = true);
  } }, { key: "update_search_keyword", value: function() {
    this.register(St.searchInfo());
  } }, { key: "update_referrer_info", value: function() {
    this.register({ $referrer: this.props.$referrer || St.referrer(), $referring_domain: this.props.$referring_domain || St.referringDomain() });
  } }, { key: "get_referrer_info", value: function() {
    return Z({ $referrer: this.props.$referrer, $referring_domain: this.props.$referring_domain });
  } }, { key: "safe_merge", value: function(e7) {
    return G(this.props, function(t2, n2) {
      n2 in e7 || (e7[n2] = t2);
    }), e7;
  } }, { key: "update_config", value: function(e7) {
    this.default_expiry = this.expire_days = e7.cookie_expiration, this.set_disabled(e7.disable_persistence), this.set_cross_subdomain(e7.cross_subdomain_cookie), this.set_secure(e7.secure_cookie);
  } }, { key: "set_disabled", value: function(e7) {
    this.disabled = e7, this.disabled ? this.remove() : this.save();
  } }, { key: "set_cross_subdomain", value: function(e7) {
    e7 !== this.cross_subdomain && (this.cross_subdomain = e7, this.remove(), this.save());
  } }, { key: "get_cross_subdomain", value: function() {
    return !!this.cross_subdomain;
  } }, { key: "set_secure", value: function(e7) {
    e7 !== this.secure && (this.secure = e7, this.remove(), this.save());
  } }, { key: "set_event_timer", value: function(e7, t2) {
    var n2 = this.props[Pe] || {};
    n2[e7] = t2, this.props[Pe] = n2, this.save();
  } }, { key: "remove_event_timer", value: function(e7) {
    var t2 = (this.props[Pe] || {})[e7];
    return R(t2) || (delete this.props[Pe][e7], this.save()), t2;
  } }, { key: "get_user_state", value: function() {
    return this.props[Ne] || "anonymous";
  } }, { key: "set_user_state", value: function(e7) {
    this.props[Ne] = e7, this.save();
  } }, { key: "get_quota_limits", value: function() {
    return this.props[Le] || {};
  } }, { key: "set_quota_limits", value: function(e7) {
    this.props[Le] = e7, this.save();
  } }]), e6;
}(), It = 2, xt = 4, Rt = 3, Et = 6, Ct = 0, Ot = "rrweb/console@1";
var $t = o(function e2(t2) {
  var n2, i2, o2 = this, a2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  r(this, e2), s(this, "bucketSize", 100), s(this, "refillRate", 10), s(this, "mutationBuckets", {}), s(this, "loggedTracker", {}), s(this, "refillBuckets", function() {
    Object.keys(o2.mutationBuckets).forEach(function(e6) {
      o2.mutationBuckets[e6] = o2.mutationBuckets[e6] + o2.refillRate, o2.mutationBuckets[e6] >= o2.bucketSize && delete o2.mutationBuckets[e6];
    });
  }), s(this, "getNodeOrRelevantParent", function(e6) {
    var t3 = o2.rrweb.mirror.getNode(e6);
    if ("svg" !== (null == t3 ? void 0 : t3.nodeName) && t3 instanceof Element) {
      var n3 = t3.closest("svg");
      if (n3)
        return [o2.rrweb.mirror.getId(n3), n3];
    }
    return [e6, t3];
  }), s(this, "numberOfChanges", function(e6) {
    var t3, n3, r2, i3, o3, s2, a3, u2;
    return (null !== (t3 = null === (n3 = e6.removes) || void 0 === n3 ? void 0 : n3.length) && void 0 !== t3 ? t3 : 0) + (null !== (r2 = null === (i3 = e6.attributes) || void 0 === i3 ? void 0 : i3.length) && void 0 !== r2 ? r2 : 0) + (null !== (o3 = null === (s2 = e6.texts) || void 0 === s2 ? void 0 : s2.length) && void 0 !== o3 ? o3 : 0) + (null !== (a3 = null === (u2 = e6.adds) || void 0 === u2 ? void 0 : u2.length) && void 0 !== a3 ? a3 : 0);
  }), s(this, "throttleMutations", function(e6) {
    if (e6.type !== Rt || e6.data.source !== Ct)
      return e6;
    var t3 = e6.data, n3 = o2.numberOfChanges(t3);
    t3.attributes && (t3.attributes = t3.attributes.filter(function(e7) {
      var t4, n4, r3, i3 = f(o2.getNodeOrRelevantParent(e7.id), 2), s2 = i3[0], a3 = i3[1];
      if (0 === o2.mutationBuckets[s2])
        return false;
      (o2.mutationBuckets[s2] = null !== (t4 = o2.mutationBuckets[s2]) && void 0 !== t4 ? t4 : o2.bucketSize, o2.mutationBuckets[s2] = Math.max(o2.mutationBuckets[s2] - 1, 0), 0 === o2.mutationBuckets[s2]) && (o2.loggedTracker[s2] || (o2.loggedTracker[s2] = true, null === (n4 = (r3 = o2.options).onBlockedNode) || void 0 === n4 || n4.call(r3, s2, a3)));
      return e7;
    }));
    var r2 = o2.numberOfChanges(t3);
    return 0 !== r2 || n3 === r2 ? e6 : void 0;
  }), this.rrweb = t2, this.options = a2, this.refillRate = null !== (n2 = this.options.refillRate) && void 0 !== n2 ? n2 : this.refillRate, this.bucketSize = null !== (i2 = this.options.bucketSize) && void 0 !== i2 ? i2 : this.bucketSize, setInterval(function() {
    o2.refillBuckets();
  }, 1e3);
}), Mt = function(e6) {
  return e6[e6.DomContentLoaded = 0] = "DomContentLoaded", e6[e6.Load = 1] = "Load", e6[e6.FullSnapshot = 2] = "FullSnapshot", e6[e6.IncrementalSnapshot = 3] = "IncrementalSnapshot", e6[e6.Meta = 4] = "Meta", e6[e6.Custom = 5] = "Custom", e6[e6.Plugin = 6] = "Plugin", e6;
}(Mt || {}), Tt = { initiatorTypes: ["audio", "beacon", "body", "css", "early-hint", "embed", "fetch", "frame", "iframe", "icon", "image", "img", "input", "link", "navigation", "object", "ping", "script", "track", "video", "xmlhttprequest"], maskRequestFn: function(e6) {
  return e6;
}, recordHeaders: false, recordBody: false, recordInitialRequests: false, recordPerformance: false, performanceEntryTypeToObserve: ["first-input", "navigation", "paint", "resource"], payloadSizeLimitBytes: 1e6 }, At = ["authorization", "x-forwarded-for", "authorization", "cookie", "set-cookie", "x-api-key", "x-real-ip", "remote-addr", "forwarded", "proxy-authorization", "x-csrf-token", "x-csrftoken", "x-xsrf-token"], Dt = ["/s/", "/e/", "/i/vo/e/"];
function qt(e6, t2, n2, r2) {
  var i2 = null == t2 ? void 0 : t2["content-length"];
  return i2 && parseInt(i2) > n2 ? "".concat(r2, " body too large to record") : e6;
}
var Bt, Nt = function(e6, n2) {
  var r2, i2, o2, s2 = e6.session_recording, a2 = false !== s2.recordHeaders && n2.recordHeaders, u2 = false !== s2.recordBody && n2.recordBody, l2 = false !== s2.recordPerformance && n2.recordPerformance, c2 = (r2 = s2, o2 = Math.min(1e6, null !== (i2 = r2.payloadSizeLimitBytes) && void 0 !== i2 ? i2 : 1e6), function(e7) {
    return null != e7 && e7.requestBody && (e7.requestBody = qt(e7.requestBody, e7.requestHeaders, o2, "Request")), null != e7 && e7.responseBody && (e7.responseBody = qt(e7.responseBody, e7.responseHeaders, o2, "Response")), e7;
  }), d2 = function(e7) {
    return c2(function(e8) {
      var t3 = yt(e8.name);
      if (!(t3 && t3.pathname && Dt.includes(t3.pathname)))
        return e8;
    }((t2 = e7, Object.keys(null !== (n3 = t2.requestHeaders) && void 0 !== n3 ? n3 : {}).forEach(function(e8) {
      var n4;
      At.includes(e8.toLowerCase()) && (null === (n4 = t2.requestHeaders) || void 0 === n4 || delete n4[e8]);
    }), t2)));
    var t2, n3;
  }, h2 = P(e6.session_recording.maskNetworkRequestFn);
  return h2 && P(e6.session_recording.maskCapturedNetworkRequestFn) && H.warn("Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored."), h2 && (e6.session_recording.maskCapturedNetworkRequestFn = function(n3) {
    var r3 = e6.session_recording.maskNetworkRequestFn({ url: n3.name });
    return t(t({}, n3), {}, { name: null == r3 ? void 0 : r3.url });
  }), s2.maskRequestFn = P(e6.session_recording.maskCapturedNetworkRequestFn) ? function(t2) {
    var n3, r3, i3, o3 = d2(t2);
    return o3 && null !== (n3 = null === (r3 = (i3 = e6.session_recording).maskCapturedNetworkRequestFn) || void 0 === r3 ? void 0 : r3.call(i3, o3)) && void 0 !== n3 ? n3 : void 0;
  } : void 0, s2.maskRequestFn || (s2.maskRequestFn = d2), t(t(t({}, Tt), s2), {}, { recordHeaders: a2, recordBody: u2, recordPerformance: l2, recordInitialRequests: l2 });
}, Lt = "/s/", jt = 3e5;
!function(e6) {
  e6[e6.Mutation = 0] = "Mutation", e6[e6.MouseMove = 1] = "MouseMove", e6[e6.MouseInteraction = 2] = "MouseInteraction", e6[e6.Scroll = 3] = "Scroll", e6[e6.ViewportResize = 4] = "ViewportResize", e6[e6.Input = 5] = "Input", e6[e6.TouchMove = 6] = "TouchMove", e6[e6.MediaInteraction = 7] = "MediaInteraction", e6[e6.StyleSheetRule = 8] = "StyleSheetRule", e6[e6.CanvasMutation = 9] = "CanvasMutation", e6[e6.Font = 10] = "Font", e6[e6.Log = 11] = "Log", e6[e6.Drag = 12] = "Drag", e6[e6.StyleDeclaration = 13] = "StyleDeclaration", e6[e6.Selection = 14] = "Selection", e6[e6.AdoptedStyleSheet = 15] = "AdoptedStyleSheet";
}(Bt || (Bt = {}));
var Ht = [Bt.MouseMove, Bt.MouseInteraction, Bt.Scroll, Bt.ViewportResize, Bt.Input, Bt.TouchMove, Bt.MediaInteraction, Bt.Drag], Vt = function() {
  function e6(t2) {
    var n2 = this;
    if (r(this, e6), s(this, "isIdle", false), s(this, "_linkedFlagSeen", false), s(this, "_lastActivityTimestamp", Date.now()), s(this, "windowId", null), s(this, "sessionId", null), s(this, "_linkedFlag", null), s(this, "_sampleRate", null), s(this, "_minimumDuration", null), s(this, "_forceAllowLocalhostNetworkCapture", false), this.instance = t2, this._captureStarted = false, this._endpoint = Lt, this.stopRrweb = void 0, this.receivedDecide = false, null == D || D.addEventListener("beforeunload", function() {
      n2._flushBuffer();
    }), !this.instance.sessionManager)
      throw H.error("Session recording started without valid sessionManager"), new Error("Session recording started without valid sessionManager. This is a bug.");
    this.buffer = this.clearBuffer();
  }
  return o(e6, [{ key: "started", get: function() {
    return this._captureStarted;
  } }, { key: "sessionManager", get: function() {
    if (!this.instance.sessionManager)
      throw H.error("Session recording started without valid sessionManager"), new Error("Session recording started without valid sessionManager. This is a bug.");
    return this.instance.sessionManager;
  } }, { key: "isSampled", get: function() {
    return O(this._sampleRate) ? this.instance.get_property($e) : null;
  } }, { key: "sessionDuration", get: function() {
    var e7, t2, n2 = null === (e7 = this.buffer) || void 0 === e7 ? void 0 : e7.data[(null === (t2 = this.buffer) || void 0 === t2 ? void 0 : t2.data.length) - 1], r2 = this.sessionManager.checkAndGetSessionAndWindowId(true).sessionStartTimestamp;
    return n2 ? n2.timestamp - r2 : null;
  } }, { key: "isRecordingEnabled", get: function() {
    var e7 = !!this.instance.get_property(xe), t2 = !this.instance.config.disable_session_recording;
    return D && e7 && t2;
  } }, { key: "isConsoleLogCaptureEnabled", get: function() {
    var e7 = !!this.instance.get_property(Re), t2 = this.instance.config.enable_recording_console_log;
    return null != t2 ? t2 : e7;
  } }, { key: "recordingVersion", get: function() {
    var e7, t2 = this.instance.get_property(Ee);
    return (null === (e7 = this.instance.config.session_recording) || void 0 === e7 ? void 0 : e7.recorderVersion) || t2 || "v1";
  } }, { key: "networkPayloadCapture", get: function() {
    var e7, t2, n2 = this.instance.get_property(Ce), r2 = { recordHeaders: null === (e7 = this.instance.config.session_recording) || void 0 === e7 ? void 0 : e7.recordHeaders, recordBody: null === (t2 = this.instance.config.session_recording) || void 0 === t2 ? void 0 : t2.recordBody }, i2 = (null == r2 ? void 0 : r2.recordHeaders) || (null == n2 ? void 0 : n2.recordHeaders), o2 = (null == r2 ? void 0 : r2.recordBody) || (null == n2 ? void 0 : n2.recordBody), s2 = this.instance.config.capture_performance || (null == n2 ? void 0 : n2.capturePerformance);
    return i2 || o2 || s2 ? { recordHeaders: i2, recordBody: o2, recordPerformance: s2 } : void 0;
  } }, { key: "status", get: function() {
    return this.receivedDecide ? this.isRecordingEnabled ? E(this._linkedFlag) && !this._linkedFlagSeen ? "buffering" : $(this.isSampled) ? this.isSampled ? "sampled" : "disabled" : "active" : "disabled" : "buffering";
  } }, { key: "startRecordingIfEnabled", value: function() {
    this.isRecordingEnabled ? this.startCaptureAndTrySendingQueuedSnapshots() : (this.stopRecording(), this.clearBuffer());
  } }, { key: "stopRecording", value: function() {
    this._captureStarted && this.stopRrweb && (this.stopRrweb(), this.stopRrweb = void 0, this._captureStarted = false);
  } }, { key: "makeSamplingDecision", value: function(e7) {
    var t2, n2 = this.sessionId !== e7;
    if (O(this._sampleRate)) {
      var r2, i2 = this.isSampled;
      if (n2 || !$(i2))
        r2 = Math.random() < this._sampleRate;
      else
        r2 = i2;
      r2 || H.warn("[SessionSampling] Sample rate (".concat(this._sampleRate, ") has determined that this sessionId (").concat(e7, ") will not be sent to the server.")), null === (t2 = this.instance.persistence) || void 0 === t2 || t2.register(s({}, $e, r2));
    } else {
      var o2;
      null === (o2 = this.instance.persistence) || void 0 === o2 || o2.register(s({}, $e, null));
    }
  } }, { key: "afterDecideResponse", value: function(e7) {
    var n2, r2, i2, o2, a2, u2, l2, c2, d2 = this;
    this.instance.persistence && this.instance.persistence.register((s(c2 = {}, xe, !!e7.sessionRecording), s(c2, Re, null === (a2 = e7.sessionRecording) || void 0 === a2 ? void 0 : a2.consoleLogRecordingEnabled), s(c2, Ee, null === (u2 = e7.sessionRecording) || void 0 === u2 ? void 0 : u2.recorderVersion), s(c2, Ce, t({ capturePerformance: e7.capturePerformance }, null === (l2 = e7.sessionRecording) || void 0 === l2 ? void 0 : l2.networkPayloadCapture)), c2));
    var h2 = null === (n2 = e7.sessionRecording) || void 0 === n2 ? void 0 : n2.sampleRate;
    this._sampleRate = R(h2) || C(h2) ? null : parseFloat(h2);
    var f2, p2 = null === (r2 = e7.sessionRecording) || void 0 === r2 ? void 0 : r2.minimumDurationMilliseconds;
    (this._minimumDuration = R(p2) ? null : p2, this._linkedFlag = (null === (i2 = e7.sessionRecording) || void 0 === i2 ? void 0 : i2.linkedFlag) || null, null !== (o2 = e7.sessionRecording) && void 0 !== o2 && o2.endpoint) && (this._endpoint = null === (f2 = e7.sessionRecording) || void 0 === f2 ? void 0 : f2.endpoint);
    if (O(this._sampleRate) && this.sessionManager.onSessionId(function(e8) {
      d2.makeSamplingDecision(e8);
    }), E(this._linkedFlag)) {
      var _2 = this._linkedFlag;
      this.instance.onFeatureFlags(function(e8) {
        d2._linkedFlagSeen = e8.includes(_2);
      });
    }
    this.receivedDecide = true, this.startRecordingIfEnabled();
  } }, { key: "log", value: function(e7) {
    var t2, n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "log";
    null === (t2 = this.instance.sessionRecording) || void 0 === t2 || t2.onRRwebEmit({ type: 6, data: { plugin: "rrweb/console@1", payload: { level: n2, trace: [], payload: [JSON.stringify(e7)] } }, timestamp: J() });
  } }, { key: "startCaptureAndTrySendingQueuedSnapshots", value: function() {
    this._startCapture();
  } }, { key: "_startCapture", value: function() {
    var e7 = this;
    if (!R(Object.assign) && !this._captureStarted && !this.instance.config.disable_session_recording) {
      this._captureStarted = true, this.sessionManager.checkAndGetSessionAndWindowId();
      var t2 = "v2" === this.recordingVersion ? "recorder-v2.js" : "recorder.js";
      this.instance.__loaded_recorder_version !== this.recordingVersion ? oe(this.instance.config.api_host + "/static/".concat(t2, "?v=").concat(m.LIB_VERSION), function(n2) {
        if (n2)
          return H.error("Could not load ".concat(t2), n2);
        e7._onScriptLoaded();
      }) : this._onScriptLoaded();
    }
  } }, { key: "_isInteractiveEvent", value: function(e7) {
    var t2;
    return e7.type === Rt && -1 !== Ht.indexOf(null === (t2 = e7.data) || void 0 === t2 ? void 0 : t2.source);
  } }, { key: "_updateWindowAndSessionIds", value: function(e7) {
    var t2 = this._isInteractiveEvent(e7);
    if (t2 || this.isIdle || e7.timestamp - this._lastActivityTimestamp > jt && (this.isIdle = true, this._tryAddCustomEvent("sessionIdle", { reason: "user inactivity", timeSinceLastActive: e7.timestamp - this._lastActivityTimestamp, threshold: jt })), t2 && (this._lastActivityTimestamp = e7.timestamp, this.isIdle && (this.isIdle = false, this._tryAddCustomEvent("sessionNoLongerIdle", { reason: "user activity", type: e7.type }), this._tryTakeFullSnapshot())), !this.isIdle) {
      var n2 = this.sessionManager.checkAndGetSessionAndWindowId(!t2, e7.timestamp), r2 = n2.windowId, i2 = n2.sessionId, o2 = this.sessionId !== i2, s2 = this.windowId !== r2;
      -1 === [It, xt].indexOf(e7.type) && (s2 || o2) && this._tryTakeFullSnapshot(), this.windowId = r2, this.sessionId = i2;
    }
  } }, { key: "_tryRRwebMethod", value: function(e7) {
    if (!this._captureStarted)
      return false;
    try {
      return e7(), true;
    } catch (e8) {
      return H.error("[Session-Recording] using rrweb when not started.", e8), false;
    }
  } }, { key: "_tryAddCustomEvent", value: function(e7, t2) {
    var n2 = this;
    return this._tryRRwebMethod(function() {
      var r2;
      return null === (r2 = n2.rrwebRecord) || void 0 === r2 ? void 0 : r2.addCustomEvent(e7, t2);
    });
  } }, { key: "_tryTakeFullSnapshot", value: function() {
    var e7 = this;
    return this._tryRRwebMethod(function() {
      var t2;
      return null === (t2 = e7.rrwebRecord) || void 0 === t2 ? void 0 : t2.takeFullSnapshot();
    });
  } }, { key: "_onScriptLoaded", value: function() {
    var e7, n2 = this, r2 = { blockClass: "ph-no-capture", blockSelector: void 0, ignoreClass: "ph-ignore-input", maskTextClass: "ph-mask", maskTextSelector: void 0, maskTextFn: void 0, maskAllInputs: true, maskInputOptions: {}, maskInputFn: void 0, slimDOMOptions: {}, collectFonts: false, inlineStylesheet: true, recordCrossOriginIframes: false };
    this.rrwebRecord = D.rrweb ? D.rrweb.record : D.rrwebRecord;
    for (var i2 = this.instance.config.session_recording, o2 = 0, s2 = Object.entries(i2 || {}); o2 < s2.length; o2++) {
      var a2 = f(s2[o2], 2), u2 = a2[0], l2 = a2[1];
      u2 in r2 && (r2[u2] = l2);
    }
    this.rrwebRecord ? (this.mutationRateLimiter = null !== (e7 = this.mutationRateLimiter) && void 0 !== e7 ? e7 : new $t(this.rrwebRecord, { onBlockedNode: function(e8, t2) {
      var r3 = "Too many mutations on node '".concat(e8, "'. Rate limiting. This could be due to SVG animations or something similar");
      H.info(r3, { node: t2 }), n2.log("[PostHog Recorder] " + r3, "warn");
    } }), this.stopRrweb = this.rrwebRecord(t({ emit: function(e8) {
      n2.onRRwebEmit(e8);
    }, plugins: this._gatherRRWebPlugins() }, r2)), this.instance._addCaptureHook(function(e8) {
      try {
        if ("$pageview" === e8) {
          var t2 = D ? n2._maskUrl(D.location.href) : "";
          if (!t2)
            return;
          n2._tryAddCustomEvent("$pageview", { href: t2 });
        }
      } catch (e9) {
        H.error("Could not add $pageview to rrweb session", e9);
      }
    }), this._lastActivityTimestamp = Date.now(), this.isIdle = false) : H.error("onScriptLoaded was called but rrwebRecord is not available. This indicates something has gone wrong.");
  } }, { key: "_gatherRRWebPlugins", value: function() {
    var e7 = [];
    (L.rrwebConsoleRecord && this.isConsoleLogCaptureEnabled && e7.push(L.rrwebConsoleRecord.getRecordConsolePlugin()), this.networkPayloadCapture && P(L.getRecordNetworkPlugin)) && (!mt.includes(location.hostname) || this._forceAllowLocalhostNetworkCapture ? e7.push(L.getRecordNetworkPlugin(Nt(this.instance.config, this.networkPayloadCapture))) : H.info("[SessionReplay-NetworkCapture] not started because we are on localhost."));
    return e7;
  } }, { key: "onRRwebEmit", value: function(e7) {
    if (e7 && I(e7)) {
      if (e7.type === Mt.Meta) {
        var t2 = this._maskUrl(e7.data.href);
        if (!t2)
          return;
        e7.data.href = t2;
      }
      var n2 = this.mutationRateLimiter ? this.mutationRateLimiter.throttleMutations(e7) : e7;
      if (n2) {
        var r2 = function(e8) {
          var t3 = e8;
          if (t3 && I(t3) && t3.type === Et && I(t3.data) && t3.data.plugin === Ot) {
            t3.data.payload.payload.length > 10 && (t3.data.payload.payload = t3.data.payload.payload.slice(0, 10), t3.data.payload.payload.push("...[truncated]"));
            for (var n3 = [], r3 = 0; r3 < t3.data.payload.payload.length; r3++)
              t3.data.payload.payload[r3] && t3.data.payload.payload[r3].length > 2e3 ? n3.push(t3.data.payload.payload[r3].slice(0, 2e3) + "...[truncated]") : n3.push(t3.data.payload.payload[r3]);
            return t3.data.payload.payload = n3, e8;
          }
          return e8;
        }(n2), i2 = JSON.stringify(r2).length;
        if (this._updateWindowAndSessionIds(r2), !this.isIdle) {
          var o2 = { $snapshot_bytes: i2, $snapshot_data: r2, $session_id: this.sessionId, $window_id: this.windowId };
          "disabled" !== this.status ? this._captureSnapshotBuffered(o2) : this.clearBuffer();
        }
      }
    }
  } }, { key: "_maskUrl", value: function(e7) {
    var t2 = this.instance.config.session_recording;
    if (t2.maskNetworkRequestFn) {
      var n2, r2 = { url: e7 };
      return null === (n2 = r2 = t2.maskNetworkRequestFn(r2)) || void 0 === n2 ? void 0 : n2.url;
    }
    return e7;
  } }, { key: "clearBuffer", value: function() {
    return this.buffer = void 0, { size: 0, data: [], sessionId: this.sessionId, windowId: this.windowId };
  } }, { key: "_flushBuffer", value: function() {
    var e7 = this;
    this.flushBufferTimer && (clearTimeout(this.flushBufferTimer), this.flushBufferTimer = void 0);
    var t2 = this._minimumDuration, n2 = this.sessionDuration, r2 = O(n2) && n2 >= 0, i2 = O(t2) && r2 && n2 < t2;
    return "buffering" === this.status || i2 ? (this.flushBufferTimer = setTimeout(function() {
      e7._flushBuffer();
    }, 2e3), this.buffer || this.clearBuffer()) : this.buffer && 0 !== this.buffer.data.length ? (this._captureSnapshot({ $snapshot_bytes: this.buffer.size, $snapshot_data: this.buffer.data, $session_id: this.buffer.sessionId, $window_id: this.buffer.windowId }), this.clearBuffer()) : this.buffer || this.clearBuffer();
  } }, { key: "_captureSnapshotBuffered", value: function(e7) {
    var t2, n2 = this, r2 = 2 + ((null === (t2 = this.buffer) || void 0 === t2 ? void 0 : t2.data.length) || 0);
    (!this.buffer || this.buffer.size + e7.$snapshot_bytes + r2 > 943718.4 || this.buffer.sessionId && this.buffer.sessionId !== this.sessionId) && (this.buffer = this._flushBuffer()), C(this.buffer.sessionId) && !C(this.sessionId) && (this.buffer.sessionId = this.sessionId, this.buffer.windowId = this.windowId), this.buffer.size += e7.$snapshot_bytes, this.buffer.data.push(e7.$snapshot_data), this.flushBufferTimer || (this.flushBufferTimer = setTimeout(function() {
      n2._flushBuffer();
    }, 2e3));
  } }, { key: "_captureSnapshot", value: function(e7) {
    this.instance.capture("$snapshot", e7, { transport: "XHR", method: "POST", endpoint: this._endpoint, _noTruncate: true, _batchKey: "recordings", _metrics: { rrweb_full_snapshot: e7.$snapshot_data.type === It } });
  } }]), e6;
}(), Ut = function() {
  function e6(t2) {
    r(this, e6), this.instance = t2, this.instance.decideEndpointWasHit = this.instance._hasBootstrappedFeatureFlags();
  }
  return o(e6, [{ key: "call", value: function() {
    var e7 = this, t2 = ne(JSON.stringify({ token: this.instance.config.token, distinct_id: this.instance.get_distinct_id(), groups: this.instance.getGroups(), person_properties: this.instance.get_property(Ae), group_properties: this.instance.get_property(De), disable_flags: this.instance.config.advanced_disable_feature_flags || this.instance.config.advanced_disable_feature_flags_on_first_load || void 0 }));
    this.instance._send_request("".concat(this.instance.config.api_host, "/decide/?v=3"), { data: t2, verbose: true }, { method: "POST" }, function(t3) {
      return e7.parseDecideResponse(t3);
    });
  } }, { key: "parseDecideResponse", value: function(e7) {
    var t2, n2 = this;
    if (this.instance.featureFlags.setReloadingPaused(false), this.instance.featureFlags._startReloadTimer(), 0 !== (null == e7 ? void 0 : e7.status)) {
      if (!B || !B.body)
        return H.info("document not ready yet, trying again in 500 milliseconds..."), void setTimeout(function() {
          n2.parseDecideResponse(e7);
        }, 500);
      this.instance.toolbar.afterDecideResponse(e7), null === (t2 = this.instance.sessionRecording) || void 0 === t2 || t2.afterDecideResponse(e7), Ue.afterDecideResponse(e7, this.instance), this.instance._afterDecideResponse(e7), this.instance.config.advanced_disable_feature_flags_on_first_load || this.instance.config.advanced_disable_feature_flags || this.instance.featureFlags.receivedFeatureFlags(e7);
      var r2 = null == D ? void 0 : D.extendPostHogWithSurveys;
      e7.surveys && !r2 && oe(this.instance.config.api_host + "/static/surveys.js", function(e8) {
        if (e8)
          return H.error("Could not load surveys script", e8);
        D.extendPostHogWithSurveys(n2.instance);
      });
      var i2 = null == D ? void 0 : D.extendPostHogWithExceptionAutoCapture;
      if (e7.autocaptureExceptions && e7.autocaptureExceptions && R(i2) && oe(this.instance.config.api_host + "/static/exception-autocapture.js", function(t3) {
        if (t3)
          return H.error("Could not load exception autocapture script", t3);
        D.extendPostHogWithExceptionAutocapture(n2.instance, e7);
      }), e7.siteApps)
        if (this.instance.config.opt_in_site_apps) {
          var o2, s2 = this.instance.config.api_host, a2 = v(e7.siteApps);
          try {
            var u2 = function() {
              var e8 = o2.value, t3 = e8.id, r3 = e8.url, i3 = [s2, "/" === s2[s2.length - 1] && "/" === r3[0] ? r3.substring(1) : r3].join("");
              L["__$$ph_site_app_".concat(t3)] = n2.instance, oe(i3, function(e9) {
                e9 && H.error("Error while initializing PostHog app with config id ".concat(t3), e9);
              });
            };
            for (a2.s(); !(o2 = a2.n()).done; )
              u2();
          } catch (e8) {
            a2.e(e8);
          } finally {
            a2.f();
          }
        } else
          e7.siteApps.length > 0 && H.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
    } else
      H.error("Failed to fetch feature flags from PostHog.");
  } }]), e6;
}(), Wt = ["https://app.posthog.com", "https://eu.posthog.com"], Gt = ["source"], zt = null != D && D.location ? wt(D.location.hash, "__posthog") || wt(location.hash, "state") : null, Yt = function() {
  function e6(t2) {
    r(this, e6), this.instance = t2;
  }
  return o(e6, [{ key: "afterDecideResponse", value: function(e7) {
    var n2 = e7.toolbarParams || e7.editorParams || (e7.toolbarVersion ? { toolbarVersion: e7.toolbarVersion } : {});
    e7.isAuthenticated && n2.toolbarVersion && 0 === n2.toolbarVersion.indexOf("toolbar") && this.loadToolbar(t({}, n2));
  } }, { key: "maybeLoadToolbar", value: function() {
    var e7, t2, n2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0, r2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0, i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
    if (!D || !B)
      return false;
    n2 = null !== (e7 = n2) && void 0 !== e7 ? e7 : D.location, i2 = null !== (t2 = i2) && void 0 !== t2 ? t2 : D.history;
    try {
      if (!r2) {
        try {
          D.localStorage.setItem("test", "test"), D.localStorage.removeItem("test");
        } catch (e8) {
          return false;
        }
        r2 = null == D ? void 0 : D.localStorage;
      }
      var o2, s2 = zt || wt(n2.hash, "__posthog") || wt(n2.hash, "state"), a2 = s2 ? X(function() {
        return JSON.parse(atob(decodeURIComponent(s2)));
      }) || X(function() {
        return JSON.parse(decodeURIComponent(s2));
      }) : null;
      return a2 && "ph_authorize" === a2.action ? ((o2 = a2).source = "url", o2 && Object.keys(o2).length > 0 && (a2.desiredHash ? n2.hash = a2.desiredHash : i2 ? i2.replaceState("", B.title, n2.pathname + n2.search) : n2.hash = "")) : ((o2 = JSON.parse(r2.getItem("_postHogToolbarParams") || "{}")).source = "localstorage", delete o2.userIntent), !(!o2.token || this.instance.config.token !== o2.token) && (this.loadToolbar(o2), true);
    } catch (e8) {
      return false;
    }
  } }, { key: "loadToolbar", value: function(e7) {
    var n2 = this;
    if (!D || L._postHogToolbarLoaded)
      return false;
    L._postHogToolbarLoaded = true;
    var r2 = this.instance.config.api_host, i2 = 3e5, o2 = Math.floor(Date.now() / i2) * i2, s2 = "".concat(r2).concat(r2.endsWith("/") ? "" : "/", "static/toolbar.js?t=").concat(o2), a2 = !Wt.includes(this.instance.config.api_host) && this.instance.config.advanced_disable_toolbar_metrics, u2 = t(t({ token: this.instance.config.token }, e7), {}, { apiURL: r2 }, a2 ? { instrument: false } : {});
    u2.source;
    var l2 = c(u2, Gt);
    return D.localStorage.setItem("_postHogToolbarParams", JSON.stringify(l2)), oe(s2, function(e8) {
      e8 ? H.error("Failed to load toolbar", e8) : (L.ph_load_toolbar || L.ph_load_editor)(u2, n2.instance);
    }), ie(D, "turbolinks:load", function() {
      L._postHogToolbarLoaded = false, n2.loadToolbar(u2);
    }), true;
  } }, { key: "_loadEditor", value: function(e7) {
    return this.loadToolbar(e7);
  } }, { key: "maybeLoadEditor", value: function() {
    var e7 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0, t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0, n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
    return this.maybeLoadToolbar(e7, t2, n2);
  } }]), e6;
}(), Qt = "__ph_opt_in_out_";
function Jt(e6, t2) {
  on(true, e6, t2);
}
function Xt(e6, t2) {
  on(false, e6, t2);
}
function Kt(e6, t2) {
  return "1" === rn(e6, t2);
}
function Zt(e6, t2) {
  return !!function(e7) {
    if (e7 && e7.respectDnt) {
      var t3 = e7 && e7.window || D, n2 = null == t3 ? void 0 : t3.navigator, r2 = false;
      return G([null == n2 ? void 0 : n2.doNotTrack, n2.msDoNotTrack, t3.doNotTrack], function(e8) {
        Y([true, 1, "1", "yes"], e8) && (r2 = true);
      }), r2;
    }
    return false;
  }(t2) || "0" === rn(e6, t2);
}
function en(e6, t2) {
  tn(t2 = t2 || {}).remove(nn(e6, t2), !!t2.crossSubdomainCookie);
}
function tn(e6) {
  return "localStorage" === (e6 = e6 || {}).persistenceType ? dt : "localStorage+cookie" === e6.persistenceType ? ft : lt;
}
function nn(e6, t2) {
  return ((t2 = t2 || {}).persistencePrefix || Qt) + e6;
}
function rn(e6, t2) {
  return tn(t2).get(nn(e6, t2));
}
function on(e6, t2, n2) {
  E(t2) && t2.length ? (tn(n2 = n2 || {}).set(nn(t2, n2), e6 ? 1 : 0, O(n2.cookieExpiration) ? n2.cookieExpiration : null, n2.crossSubdomainCookie, n2.secureCookie), n2.capture && e6 && n2.capture(n2.captureEventName || "$opt_in", n2.captureProperties || {}, { send_instantly: true })) : H.error("gdpr." + (e6 ? "optIn" : "optOut") + " called with an invalid token");
}
var sn = function() {
  function e6() {
    var t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3e3;
    r(this, e6), this.isPolling = true, this._event_queue = [], this._empty_queue_count = 0, this._poller = void 0, this._pollInterval = t2;
  }
  return o(e6, [{ key: "setPollInterval", value: function(e7) {
    this._pollInterval = e7, this.isPolling && this.poll();
  } }, { key: "poll", value: function() {
  } }, { key: "unload", value: function() {
  } }, { key: "getTime", value: function() {
    return (/* @__PURE__ */ new Date()).getTime();
  } }]), e6;
}(), an = function(e6) {
  a(i2, sn);
  var n2 = h(i2);
  function i2(e7) {
    var t2, o2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3e3;
    return r(this, i2), (t2 = n2.call(this, o2)).handlePollRequest = e7, t2;
  }
  return o(i2, [{ key: "enqueue", value: function(e7, t2, n3) {
    this._event_queue.push({ url: e7, data: t2, options: n3 }), this.isPolling || (this.isPolling = true, this.poll());
  } }, { key: "poll", value: function() {
    var e7 = this;
    clearTimeout(this._poller), this._poller = setTimeout(function() {
      if (e7._event_queue.length > 0) {
        var t2 = e7.formatQueue(), n3 = function(n4) {
          var r3 = t2[n4], i3 = r3.url, o2 = r3.data, s2 = r3.options;
          G(o2, function(t3, n5) {
            o2[n5].offset = Math.abs(o2[n5].timestamp - e7.getTime()), delete o2[n5].timestamp;
          }), e7.handlePollRequest(i3, o2, s2);
        };
        for (var r2 in t2)
          n3(r2);
        e7._event_queue.length = 0, e7._empty_queue_count = 0;
      } else
        e7._empty_queue_count++;
      e7._empty_queue_count > 4 && (e7.isPolling = false, e7._empty_queue_count = 0), e7.isPolling && e7.poll();
    }, this._pollInterval);
  } }, { key: "unload", value: function() {
    var e7 = this;
    clearTimeout(this._poller);
    var n3 = this._event_queue.length > 0 ? this.formatQueue() : {};
    this._event_queue.length = 0;
    var r2 = Object.values(n3);
    [].concat(p(r2.filter(function(e8) {
      return 0 === e8.url.indexOf("/e");
    })), p(r2.filter(function(e8) {
      return 0 !== e8.url.indexOf("/e");
    }))).map(function(n4) {
      var r3 = n4.url, i3 = n4.data, o2 = n4.options;
      e7.handlePollRequest(r3, i3, t(t({}, o2), {}, { transport: "sendBeacon" }));
    });
  } }, { key: "formatQueue", value: function() {
    var e7 = {};
    return G(this._event_queue, function(t2) {
      var n3 = t2.url, r2 = t2.data, i3 = t2.options, o2 = (i3 ? i3._batchKey : null) || n3;
      R(e7[o2]) && (e7[o2] = { data: [], url: n3, options: i3 }), i3 && e7[o2].options && e7[o2].options._metrics && !e7[o2].options._metrics.rrweb_full_snapshot && (e7[o2].options._metrics.rrweb_full_snapshot = i3._metrics.rrweb_full_snapshot), e7[o2].data.push(r2);
    }), e7;
  } }]), i2;
}(), un = Uint8Array, ln = Uint16Array, cn = Uint32Array, dn = new un([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]), hn = new un([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]), fn = new un([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), pn = function(e6, t2) {
  for (var n2 = new ln(31), r2 = 0; r2 < 31; ++r2)
    n2[r2] = t2 += 1 << e6[r2 - 1];
  var i2 = new cn(n2[30]);
  for (r2 = 1; r2 < 30; ++r2)
    for (var o2 = n2[r2]; o2 < n2[r2 + 1]; ++o2)
      i2[o2] = o2 - n2[r2] << 5 | r2;
  return [n2, i2];
}, _n = pn(dn, 2), gn = _n[0], vn = _n[1];
gn[28] = 258, vn[258] = 28;
for (var mn = pn(hn, 0)[1], yn = new ln(32768), bn = 0; bn < 32768; ++bn) {
  var kn = (43690 & bn) >>> 1 | (21845 & bn) << 1;
  kn = (61680 & (kn = (52428 & kn) >>> 2 | (13107 & kn) << 2)) >>> 4 | (3855 & kn) << 4, yn[bn] = ((65280 & kn) >>> 8 | (255 & kn) << 8) >>> 1;
}
var wn = function(e6, t2, n2) {
  for (var r2 = e6.length, i2 = 0, o2 = new ln(t2); i2 < r2; ++i2)
    ++o2[e6[i2] - 1];
  var s2, a2 = new ln(t2);
  for (i2 = 0; i2 < t2; ++i2)
    a2[i2] = a2[i2 - 1] + o2[i2 - 1] << 1;
  for (s2 = new ln(r2), i2 = 0; i2 < r2; ++i2)
    s2[i2] = yn[a2[e6[i2] - 1]++] >>> 15 - e6[i2];
  return s2;
}, Sn = new un(288);
for (bn = 0; bn < 144; ++bn)
  Sn[bn] = 8;
for (bn = 144; bn < 256; ++bn)
  Sn[bn] = 9;
for (bn = 256; bn < 280; ++bn)
  Sn[bn] = 7;
for (bn = 280; bn < 288; ++bn)
  Sn[bn] = 8;
var Fn = new un(32);
for (bn = 0; bn < 32; ++bn)
  Fn[bn] = 5;
var Pn, In = wn(Sn, 9), xn = wn(Fn, 5), Rn = function(e6) {
  return (e6 / 8 >> 0) + (7 & e6 && 1);
}, En = function(e6, t2, n2) {
  (null == n2 || n2 > e6.length) && (n2 = e6.length);
  var r2 = new (e6 instanceof ln ? ln : e6 instanceof cn ? cn : un)(n2 - t2);
  return r2.set(e6.subarray(t2, n2)), r2;
}, Cn = function(e6, t2, n2) {
  n2 <<= 7 & t2;
  var r2 = t2 / 8 >> 0;
  e6[r2] |= n2, e6[r2 + 1] |= n2 >>> 8;
}, On = function(e6, t2, n2) {
  n2 <<= 7 & t2;
  var r2 = t2 / 8 >> 0;
  e6[r2] |= n2, e6[r2 + 1] |= n2 >>> 8, e6[r2 + 2] |= n2 >>> 16;
}, $n = function(e6, t2) {
  for (var n2 = [], r2 = 0; r2 < e6.length; ++r2)
    e6[r2] && n2.push({ s: r2, f: e6[r2] });
  var i2 = n2.length, o2 = n2.slice();
  if (!i2)
    return [new un(0), 0];
  if (1 == i2) {
    var s2 = new un(n2[0].s + 1);
    return s2[n2[0].s] = 1, [s2, 1];
  }
  n2.sort(function(e7, t3) {
    return e7.f - t3.f;
  }), n2.push({ s: -1, f: 25001 });
  var a2 = n2[0], u2 = n2[1], l2 = 0, c2 = 1, d2 = 2;
  for (n2[0] = { s: -1, f: a2.f + u2.f, l: a2, r: u2 }; c2 != i2 - 1; )
    a2 = n2[n2[l2].f < n2[d2].f ? l2++ : d2++], u2 = n2[l2 != c2 && n2[l2].f < n2[d2].f ? l2++ : d2++], n2[c2++] = { s: -1, f: a2.f + u2.f, l: a2, r: u2 };
  var h2 = o2[0].s;
  for (r2 = 1; r2 < i2; ++r2)
    o2[r2].s > h2 && (h2 = o2[r2].s);
  var f2 = new ln(h2 + 1), p2 = Mn(n2[c2 - 1], f2, 0);
  if (p2 > t2) {
    r2 = 0;
    var _2 = 0, g2 = p2 - t2, v2 = 1 << g2;
    for (o2.sort(function(e7, t3) {
      return f2[t3.s] - f2[e7.s] || e7.f - t3.f;
    }); r2 < i2; ++r2) {
      var m2 = o2[r2].s;
      if (!(f2[m2] > t2))
        break;
      _2 += v2 - (1 << p2 - f2[m2]), f2[m2] = t2;
    }
    for (_2 >>>= g2; _2 > 0; ) {
      var y2 = o2[r2].s;
      f2[y2] < t2 ? _2 -= 1 << t2 - f2[y2]++ - 1 : ++r2;
    }
    for (; r2 >= 0 && _2; --r2) {
      var b2 = o2[r2].s;
      f2[b2] == t2 && (--f2[b2], ++_2);
    }
    p2 = t2;
  }
  return [new un(f2), p2];
}, Mn = function e3(t2, n2, r2) {
  return -1 == t2.s ? Math.max(e3(t2.l, n2, r2 + 1), e3(t2.r, n2, r2 + 1)) : n2[t2.s] = r2;
}, Tn = function(e6) {
  for (var t2 = e6.length; t2 && !e6[--t2]; )
    ;
  for (var n2 = new ln(++t2), r2 = 0, i2 = e6[0], o2 = 1, s2 = function(e7) {
    n2[r2++] = e7;
  }, a2 = 1; a2 <= t2; ++a2)
    if (e6[a2] == i2 && a2 != t2)
      ++o2;
    else {
      if (!i2 && o2 > 2) {
        for (; o2 > 138; o2 -= 138)
          s2(32754);
        o2 > 2 && (s2(o2 > 10 ? o2 - 11 << 5 | 28690 : o2 - 3 << 5 | 12305), o2 = 0);
      } else if (o2 > 3) {
        for (s2(i2), --o2; o2 > 6; o2 -= 6)
          s2(8304);
        o2 > 2 && (s2(o2 - 3 << 5 | 8208), o2 = 0);
      }
      for (; o2--; )
        s2(i2);
      o2 = 1, i2 = e6[a2];
    }
  return [n2.subarray(0, r2), t2];
}, An = function(e6, t2) {
  for (var n2 = 0, r2 = 0; r2 < t2.length; ++r2)
    n2 += e6[r2] * t2[r2];
  return n2;
}, Dn = function(e6, t2, n2) {
  var r2 = n2.length, i2 = Rn(t2 + 2);
  e6[i2] = 255 & r2, e6[i2 + 1] = r2 >>> 8, e6[i2 + 2] = 255 ^ e6[i2], e6[i2 + 3] = 255 ^ e6[i2 + 1];
  for (var o2 = 0; o2 < r2; ++o2)
    e6[i2 + o2 + 4] = n2[o2];
  return 8 * (i2 + 4 + r2);
}, qn = function(e6, t2, n2, r2, i2, o2, s2, a2, u2, l2, c2) {
  Cn(t2, c2++, n2), ++i2[256];
  for (var d2 = $n(i2, 15), h2 = d2[0], f2 = d2[1], p2 = $n(o2, 15), _2 = p2[0], g2 = p2[1], v2 = Tn(h2), m2 = v2[0], y2 = v2[1], b2 = Tn(_2), k2 = b2[0], w2 = b2[1], S2 = new ln(19), F2 = 0; F2 < m2.length; ++F2)
    S2[31 & m2[F2]]++;
  for (F2 = 0; F2 < k2.length; ++F2)
    S2[31 & k2[F2]]++;
  for (var P2 = $n(S2, 7), I2 = P2[0], x2 = P2[1], R2 = 19; R2 > 4 && !I2[fn[R2 - 1]]; --R2)
    ;
  var E2, C2, O2, $2, M2 = l2 + 5 << 3, T2 = An(i2, Sn) + An(o2, Fn) + s2, A2 = An(i2, h2) + An(o2, _2) + s2 + 14 + 3 * R2 + An(S2, I2) + (2 * S2[16] + 3 * S2[17] + 7 * S2[18]);
  if (M2 <= T2 && M2 <= A2)
    return Dn(t2, c2, e6.subarray(u2, u2 + l2));
  if (Cn(t2, c2, 1 + (A2 < T2)), c2 += 2, A2 < T2) {
    E2 = wn(h2, f2), C2 = h2, O2 = wn(_2, g2), $2 = _2;
    var D2 = wn(I2, x2);
    Cn(t2, c2, y2 - 257), Cn(t2, c2 + 5, w2 - 1), Cn(t2, c2 + 10, R2 - 4), c2 += 14;
    for (F2 = 0; F2 < R2; ++F2)
      Cn(t2, c2 + 3 * F2, I2[fn[F2]]);
    c2 += 3 * R2;
    for (var q2 = [m2, k2], B2 = 0; B2 < 2; ++B2) {
      var N2 = q2[B2];
      for (F2 = 0; F2 < N2.length; ++F2) {
        var L2 = 31 & N2[F2];
        Cn(t2, c2, D2[L2]), c2 += I2[L2], L2 > 15 && (Cn(t2, c2, N2[F2] >>> 5 & 127), c2 += N2[F2] >>> 12);
      }
    }
  } else
    E2 = In, C2 = Sn, O2 = xn, $2 = Fn;
  for (F2 = 0; F2 < a2; ++F2)
    if (r2[F2] > 255) {
      L2 = r2[F2] >>> 18 & 31;
      On(t2, c2, E2[L2 + 257]), c2 += C2[L2 + 257], L2 > 7 && (Cn(t2, c2, r2[F2] >>> 23 & 31), c2 += dn[L2]);
      var j2 = 31 & r2[F2];
      On(t2, c2, O2[j2]), c2 += $2[j2], j2 > 3 && (On(t2, c2, r2[F2] >>> 5 & 8191), c2 += hn[j2]);
    } else
      On(t2, c2, E2[r2[F2]]), c2 += C2[r2[F2]];
  return On(t2, c2, E2[256]), c2 + C2[256];
}, Bn = new cn([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), Ln = function() {
  for (var e6 = new cn(256), t2 = 0; t2 < 256; ++t2) {
    for (var n2 = t2, r2 = 9; --r2; )
      n2 = (1 & n2 && 3988292384) ^ n2 >>> 1;
    e6[t2] = n2;
  }
  return e6;
}(), jn = function() {
  var e6 = 4294967295;
  return { p: function(t2) {
    for (var n2 = e6, r2 = 0; r2 < t2.length; ++r2)
      n2 = Ln[255 & n2 ^ t2[r2]] ^ n2 >>> 8;
    e6 = n2;
  }, d: function() {
    return 4294967295 ^ e6;
  } };
}, Hn = function(e6, t2, n2, r2, i2) {
  return function(e7, t3, n3, r3, i3, o2) {
    var s2 = e7.length, a2 = new un(r3 + s2 + 5 * (1 + Math.floor(s2 / 7e3)) + i3), u2 = a2.subarray(r3, a2.length - i3), l2 = 0;
    if (!t3 || s2 < 8)
      for (var c2 = 0; c2 <= s2; c2 += 65535) {
        var d2 = c2 + 65535;
        d2 < s2 ? l2 = Dn(u2, l2, e7.subarray(c2, d2)) : (u2[c2] = o2, l2 = Dn(u2, l2, e7.subarray(c2, s2)));
      }
    else {
      for (var h2 = Bn[t3 - 1], f2 = h2 >>> 13, p2 = 8191 & h2, _2 = (1 << n3) - 1, g2 = new ln(32768), v2 = new ln(_2 + 1), m2 = Math.ceil(n3 / 3), y2 = 2 * m2, b2 = function(t4) {
        return (e7[t4] ^ e7[t4 + 1] << m2 ^ e7[t4 + 2] << y2) & _2;
      }, k2 = new cn(25e3), w2 = new ln(288), S2 = new ln(32), F2 = 0, P2 = 0, I2 = (c2 = 0, 0), x2 = 0, R2 = 0; c2 < s2; ++c2) {
        var E2 = b2(c2), C2 = 32767 & c2, O2 = v2[E2];
        if (g2[C2] = O2, v2[E2] = C2, x2 <= c2) {
          var $2 = s2 - c2;
          if ((F2 > 7e3 || I2 > 24576) && $2 > 423) {
            l2 = qn(e7, u2, 0, k2, w2, S2, P2, I2, R2, c2 - R2, l2), I2 = F2 = P2 = 0, R2 = c2;
            for (var M2 = 0; M2 < 286; ++M2)
              w2[M2] = 0;
            for (M2 = 0; M2 < 30; ++M2)
              S2[M2] = 0;
          }
          var T2 = 2, A2 = 0, D2 = p2, q2 = C2 - O2 & 32767;
          if ($2 > 2 && E2 == b2(c2 - q2))
            for (var B2 = Math.min(f2, $2) - 1, N2 = Math.min(32767, c2), L2 = Math.min(258, $2); q2 <= N2 && --D2 && C2 != O2; ) {
              if (e7[c2 + T2] == e7[c2 + T2 - q2]) {
                for (var j2 = 0; j2 < L2 && e7[c2 + j2] == e7[c2 + j2 - q2]; ++j2)
                  ;
                if (j2 > T2) {
                  if (T2 = j2, A2 = q2, j2 > B2)
                    break;
                  var H2 = Math.min(q2, j2 - 2), V2 = 0;
                  for (M2 = 0; M2 < H2; ++M2) {
                    var U2 = c2 - q2 + M2 + 32768 & 32767, W2 = U2 - g2[U2] + 32768 & 32767;
                    W2 > V2 && (V2 = W2, O2 = U2);
                  }
                }
              }
              q2 += (C2 = O2) - (O2 = g2[C2]) + 32768 & 32767;
            }
          if (A2) {
            k2[I2++] = 268435456 | vn[T2] << 18 | mn[A2];
            var G2 = 31 & vn[T2], z2 = 31 & mn[A2];
            P2 += dn[G2] + hn[z2], ++w2[257 + G2], ++S2[z2], x2 = c2 + T2, ++F2;
          } else
            k2[I2++] = e7[c2], ++w2[e7[c2]];
        }
      }
      l2 = qn(e7, u2, o2, k2, w2, S2, P2, I2, R2, c2 - R2, l2);
    }
    return En(a2, 0, r3 + Rn(l2) + i3);
  }(e6, null == t2.level ? 6 : t2.level, null == t2.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e6.length)))) : 12 + t2.mem, n2, r2, !i2);
}, Vn = function(e6, t2, n2) {
  for (; n2; ++t2)
    e6[t2] = n2, n2 >>>= 8;
}, Un = function(e6, t2) {
  var n2 = t2.filename;
  if (e6[0] = 31, e6[1] = 139, e6[2] = 8, e6[8] = t2.level < 2 ? 4 : 9 == t2.level ? 2 : 0, e6[9] = 3, 0 != t2.mtime && Vn(e6, 4, Math.floor(new Date(t2.mtime || Date.now()) / 1e3)), n2) {
    e6[3] = 8;
    for (var r2 = 0; r2 <= n2.length; ++r2)
      e6[r2 + 10] = n2.charCodeAt(r2);
  }
}, Wn = function(e6) {
  return 10 + (e6.filename && e6.filename.length + 1 || 0);
};
function Gn(e6, t2) {
  void 0 === t2 && (t2 = {});
  var n2 = jn(), r2 = e6.length;
  n2.p(e6);
  var i2 = Hn(e6, t2, Wn(t2), 8), o2 = i2.length;
  return Un(i2, t2), Vn(i2, o2 - 8, n2.d()), Vn(i2, o2 - 4, r2), i2;
}
function zn(e6, t2) {
  var n2 = e6.length;
  if ("undefined" != typeof TextEncoder)
    return new TextEncoder().encode(e6);
  for (var r2 = new un(e6.length + (e6.length >>> 1)), i2 = 0, o2 = function(e7) {
    r2[i2++] = e7;
  }, s2 = 0; s2 < n2; ++s2) {
    if (i2 + 5 > r2.length) {
      var a2 = new un(i2 + 8 + (n2 - s2 << 1));
      a2.set(r2), r2 = a2;
    }
    var u2 = e6.charCodeAt(s2);
    u2 < 128 || t2 ? o2(u2) : u2 < 2048 ? (o2(192 | u2 >>> 6), o2(128 | 63 & u2)) : u2 > 55295 && u2 < 57344 ? (o2(240 | (u2 = 65536 + (1047552 & u2) | 1023 & e6.charCodeAt(++s2)) >>> 18), o2(128 | u2 >>> 12 & 63), o2(128 | u2 >>> 6 & 63), o2(128 | 63 & u2)) : (o2(224 | u2 >>> 12), o2(128 | u2 >>> 6 & 63), o2(128 | 63 & u2));
  }
  return En(r2, 0, i2);
}
!function(e6) {
  e6.GZipJS = "gzip-js", e6.Base64 = "base64";
}(Pn || (Pn = {}));
var Yn = function(e6, t2, n2) {
  var r2 = t2 || {};
  r2.ip = n2.ip ? 1 : 0, r2._ = (/* @__PURE__ */ new Date()).getTime().toString(), r2.ver = m.LIB_VERSION;
  var i2 = e6.split("?");
  if (i2.length > 1) {
    var o2, s2 = v(i2[1].split("&"));
    try {
      for (s2.s(); !(o2 = s2.n()).done; ) {
        var a2 = o2.value.split("=")[0];
        R(r2[a2]) || delete r2[a2];
      }
    } catch (e7) {
      s2.e(e7);
    } finally {
      s2.f();
    }
  }
  var u2 = e6.indexOf("?") > -1 ? "&" : "?";
  return e6 + u2 + function(e7) {
    var t3, n3, r3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&", i3 = [];
    return G(e7, function(e8, r4) {
      R(e8) || R(r4) || "undefined" === r4 || (t3 = encodeURIComponent(e8.toString()), n3 = encodeURIComponent(r4), i3[i3.length] = n3 + "=" + t3);
    }), i3.join(r3);
  }(r2);
}, Qn = function e4(t2, n2) {
  if (n2.blob && t2.buffer)
    return new Blob([F(t2) ? t2 : t2.buffer], { type: "text/plain" });
  if (n2.sendBeacon || n2.blob) {
    var r2 = e4(t2, { method: "POST" });
    return new Blob([r2], { type: "application/x-www-form-urlencoded" });
  }
  return "POST" !== n2.method ? null : (i2 = S(t2) || F(t2) ? "data=" + encodeURIComponent(t2) : "data=" + encodeURIComponent(t2.data), "compression" in t2 && t2.compression && (i2 += "&compression=" + t2.compression), i2);
  var i2;
}, Jn = function(e6) {
  var t2 = e6.url, n2 = e6.data, r2 = e6.headers, i2 = e6.options, o2 = e6.callback, s2 = e6.retriesPerformedSoFar, a2 = e6.retryQueue, u2 = e6.onXHRError, l2 = e6.timeout, c2 = void 0 === l2 ? 6e4 : l2, d2 = e6.onResponse;
  O(s2) && s2 > 0 && (t2 = Yn(t2, { retry_count: s2 }, {}));
  var h2 = new XMLHttpRequest();
  h2.open(i2.method || "GET", t2, true);
  var f2 = Qn(n2, i2);
  G(r2, function(e7, t3) {
    h2.setRequestHeader(t3, e7);
  }), "POST" !== i2.method || i2.blob || h2.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), h2.timeout = c2, h2.withCredentials = true, h2.onreadystatechange = function() {
    if (4 === h2.readyState)
      if (null == d2 || d2(h2), 200 === h2.status) {
        if (o2) {
          var e7;
          try {
            e7 = JSON.parse(h2.responseText);
          } catch (e8) {
            return void H.error(e8);
          }
          o2(e7);
        }
      } else
        P(u2) && u2(h2), (h2.status < 400 || h2.status > 500) && a2.enqueue({ url: t2, data: n2, options: i2, headers: r2, retriesPerformedSoFar: (s2 || 0) + 1, callback: o2 }), null == o2 || o2({ status: 0 });
  }, h2.send(f2);
}, Xn = 18e5;
var Kn = function(e6) {
  a(i2, sn);
  var n2 = h(i2);
  function i2(e7, t2) {
    var o2;
    return r(this, i2), (o2 = n2.call(this)).isPolling = false, o2.queue = [], o2.areWeOnline = true, o2.onXHRError = e7, o2.rateLimiter = t2, !R(D) && "onLine" in D.navigator && (o2.areWeOnline = D.navigator.onLine, D.addEventListener("online", function() {
      o2._handleWeAreNowOnline();
    }), D.addEventListener("offline", function() {
      o2.areWeOnline = false;
    })), o2;
  }
  return o(i2, [{ key: "enqueue", value: function(e7) {
    var t2 = e7.retriesPerformedSoFar || 0;
    if (!(t2 >= 10)) {
      var n3 = function(e8) {
        var t3 = 3e3 * Math.pow(2, e8), n4 = t3 / 2, r3 = Math.min(Xn, t3), i4 = (Math.random() - 0.5) * (r3 - n4);
        return Math.ceil(r3 + i4);
      }(t2), r2 = new Date(Date.now() + n3);
      this.queue.push({ retryAt: r2, requestData: e7 });
      var i3 = "Enqueued failed request for retry in ".concat(n3);
      navigator.onLine || (i3 += " (Browser is offline)"), H.warn(i3), this.isPolling || (this.isPolling = true, this.poll());
    }
  } }, { key: "poll", value: function() {
    var e7 = this;
    this._poller && clearTimeout(this._poller), this._poller = setTimeout(function() {
      e7.areWeOnline && e7.queue.length > 0 && e7.flush(), e7.poll();
    }, this._pollInterval);
  } }, { key: "flush", value: function() {
    var e7 = new Date(Date.now()), t2 = this.queue.filter(function(t3) {
      return t3.retryAt < e7;
    });
    if (t2.length > 0) {
      this.queue = this.queue.filter(function(t3) {
        return t3.retryAt >= e7;
      });
      var n3, r2 = v(t2);
      try {
        for (r2.s(); !(n3 = r2.n()).done; ) {
          var i3 = n3.value.requestData;
          this._executeXhrRequest(i3);
        }
      } catch (e8) {
        r2.e(e8);
      } finally {
        r2.f();
      }
    }
  } }, { key: "unload", value: function() {
    this._poller && (clearTimeout(this._poller), this._poller = void 0);
    var e7, n3 = v(this.queue);
    try {
      for (n3.s(); !(e7 = n3.n()).done; ) {
        var r2 = e7.value.requestData, i3 = r2.url, o2 = r2.data, s2 = r2.options;
        if (this.rateLimiter.isRateLimited(s2._batchKey))
          H.warn("[RetryQueue] is quota limited. Dropping request.");
        else
          try {
            null == D || D.navigator.sendBeacon(i3, Qn(o2, t(t({}, s2), {}, { sendBeacon: true })));
          } catch (e8) {
            H.error(e8);
          }
      }
    } catch (e8) {
      n3.e(e8);
    } finally {
      n3.f();
    }
    this.queue = [];
  } }, { key: "_executeXhrRequest", value: function(e7) {
    var t2 = e7.url, n3 = e7.data, r2 = e7.options, i3 = e7.headers, o2 = e7.callback, s2 = e7.retriesPerformedSoFar;
    this.rateLimiter.isRateLimited(r2._batchKey) || Jn({ url: t2, data: n3 || {}, options: r2 || {}, headers: i3 || {}, retriesPerformedSoFar: s2 || 0, callback: o2, retryQueue: this, onXHRError: this.onXHRError, onResponse: this.rateLimiter.checkForLimiting });
  } }, { key: "_handleWeAreNowOnline", value: function() {
    this.areWeOnline = true, this.flush();
  } }]), i2;
}(), Zn = 1800, er = 60, tr = 864e5, nr = function() {
  function e6(t2, n2, i2, o2) {
    r(this, e6), s(this, "_sessionIdChangedHandlers", []), this.config = t2, this.persistence = n2, this._windowId = void 0, this._sessionId = void 0, this._sessionStartTimestamp = null, this._sessionActivityTimestamp = null, this._sessionIdGenerator = i2 || nt, this._windowIdGenerator = o2 || nt;
    var a2 = t2.persistence_name || t2.token, u2 = t2.session_idle_timeout_seconds || Zn;
    if (O(u2) ? u2 > Zn ? H.warn("session_idle_timeout_seconds cannot be  greater than 30 minutes. Using 30 minutes instead.") : u2 < er && H.warn("session_idle_timeout_seconds cannot be less than 60 seconds. Using 60 seconds instead.") : (H.warn("session_idle_timeout_seconds must be a number. Defaulting to 30 minutes."), u2 = Zn), this._sessionTimeoutMs = 1e3 * Math.min(Math.max(u2, er), Zn), this._window_id_storage_key = "ph_" + a2 + "_window_id", this._primary_window_exists_storage_key = "ph_" + a2 + "_primary_window_exists", this._canUseSessionStorage()) {
      var l2 = vt.parse(this._window_id_storage_key), c2 = vt.parse(this._primary_window_exists_storage_key);
      l2 && !c2 ? this._windowId = l2 : vt.remove(this._window_id_storage_key), vt.set(this._primary_window_exists_storage_key, true);
    }
    this._listenToReloadWindow();
  }
  return o(e6, [{ key: "onSessionId", value: function(e7) {
    var t2 = this;
    return R(this._sessionIdChangedHandlers) && (this._sessionIdChangedHandlers = []), this._sessionIdChangedHandlers.push(e7), this._sessionId && e7(this._sessionId, this._windowId), function() {
      t2._sessionIdChangedHandlers = t2._sessionIdChangedHandlers.filter(function(t3) {
        return t3 !== e7;
      });
    };
  } }, { key: "_canUseSessionStorage", value: function() {
    return "memory" !== this.config.persistence && !this.persistence.disabled && vt.is_supported();
  } }, { key: "_setWindowId", value: function(e7) {
    e7 !== this._windowId && (this._windowId = e7, this._canUseSessionStorage() && vt.set(this._window_id_storage_key, e7));
  } }, { key: "_getWindowId", value: function() {
    return this._windowId ? this._windowId : this._canUseSessionStorage() ? vt.parse(this._window_id_storage_key) : null;
  } }, { key: "_setSessionId", value: function(e7, t2, n2) {
    e7 === this._sessionId && t2 === this._sessionActivityTimestamp && n2 === this._sessionStartTimestamp || (this._sessionStartTimestamp = n2, this._sessionActivityTimestamp = t2, this._sessionId = e7, this.persistence.register(s({}, Oe, [t2, e7, n2])));
  } }, { key: "_getSessionId", value: function() {
    if (this._sessionId && this._sessionActivityTimestamp && this._sessionStartTimestamp)
      return [this._sessionActivityTimestamp, this._sessionId, this._sessionStartTimestamp];
    var e7 = this.persistence.props[Oe];
    return S(e7) && 2 === e7.length && e7.push(e7[0]), e7 || [0, null, 0];
  } }, { key: "resetSessionId", value: function() {
    this._setSessionId(null, null, null);
  } }, { key: "_listenToReloadWindow", value: function() {
    var e7 = this;
    null == D || D.addEventListener("beforeunload", function() {
      e7._canUseSessionStorage() && vt.remove(e7._primary_window_exists_storage_key);
    });
  } }, { key: "checkAndGetSessionAndWindowId", value: function() {
    var e7 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t2 = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || (/* @__PURE__ */ new Date()).getTime(), n2 = f(this._getSessionId(), 3), r2 = n2[0], i2 = n2[1], o2 = n2[2], s2 = this._getWindowId(), a2 = o2 && o2 > 0 && Math.abs(t2 - o2) > tr, u2 = false, l2 = !i2, c2 = !e7 && Math.abs(t2 - r2) > this._sessionTimeoutMs;
    l2 || c2 || a2 ? (i2 = this._sessionIdGenerator(), s2 = this._windowIdGenerator(), o2 = t2, u2 = true) : s2 || (s2 = this._windowIdGenerator(), u2 = true);
    var d2 = 0 === r2 || !e7 || a2 ? t2 : r2, h2 = 0 === o2 ? (/* @__PURE__ */ new Date()).getTime() : o2;
    return this._setWindowId(s2), this._setSessionId(i2, d2, h2), u2 && this._sessionIdChangedHandlers.forEach(function(e8) {
      return e8(i2, s2);
    }), { sessionId: i2, windowId: s2, sessionStartTimestamp: h2 };
  } }]), e6;
}(), rr = o(function e5(t2, n2, i2, o2) {
  r(this, e5), this.name = "posthog-js", this.setupOnce = function(e6) {
    e6(function(e7) {
      var r2, s2, a2, u2, l2;
      if ("error" !== e7.level || !t2.__loaded)
        return e7;
      e7.tags || (e7.tags = {});
      var c2 = t2.config.ui_host || t2.config.api_host;
      e7.tags["PostHog Person URL"] = c2 + "/person/" + t2.get_distinct_id(), t2.sessionRecordingStarted() && (e7.tags["PostHog Recording URL"] = t2.get_session_replay_url({ withTimestamp: true }));
      var d2 = (null === (r2 = e7.exception) || void 0 === r2 ? void 0 : r2.values) || [], h2 = { $exception_message: null === (s2 = d2[0]) || void 0 === s2 ? void 0 : s2.value, $exception_type: null === (a2 = d2[0]) || void 0 === a2 ? void 0 : a2.type, $exception_personURL: c2 + "/person/" + t2.get_distinct_id(), $sentry_event_id: e7.event_id, $sentry_exception: e7.exception, $sentry_exception_message: null === (u2 = d2[0]) || void 0 === u2 ? void 0 : u2.value, $sentry_exception_type: null === (l2 = d2[0]) || void 0 === l2 ? void 0 : l2.type, $sentry_tags: e7.tags };
      return n2 && i2 && (h2.$sentry_url = (o2 || "https://sentry.io/organizations/") + n2 + "/issues/?project=" + i2 + "&query=" + e7.event_id), t2.capture("$exception", h2), e7;
    });
  };
}), ir = function(e6) {
  Promise && Promise.resolve || H.warn("This browser does not have Promise support, and can not use the segment integration");
  var t2 = function(t3, n2) {
    t3.event.userId || t3.event.anonymousId === e6.get_distinct_id() || e6.reset(), t3.event.userId && t3.event.userId !== e6.get_distinct_id() && (e6.register({ distinct_id: t3.event.userId }), e6.reloadFeatureFlags());
    var r2 = e6._calculate_event_properties(n2, t3.event.properties);
    return t3.event.properties = Object.assign({}, r2, t3.event.properties), t3;
  };
  return { name: "PostHog JS", type: "enrichment", version: "1.0.0", isLoaded: function() {
    return true;
  }, load: function() {
    return Promise.resolve();
  }, track: function(e7) {
    return t2(e7, e7.event.event);
  }, page: function(e7) {
    return t2(e7, "$pageview");
  }, identify: function(e7) {
    return t2(e7, "$identify");
  }, screen: function(e7) {
    return t2(e7, "$screen");
  } };
}, or = function() {
  function e6() {
    var t2 = this;
    r(this, e6), s(this, "_hasSeenPageView", false), s(this, "_updateScrollData", function() {
      var e7, n2, r2, i2;
      t2._pageViewData || (t2._pageViewData = t2._createPageViewData());
      var o2 = t2._pageViewData, s2 = t2._scrollY(), a2 = t2._scrollHeight(), u2 = t2._contentY(), l2 = t2._contentHeight();
      o2.lastScrollY = s2, o2.maxScrollY = Math.max(s2, null !== (e7 = o2.maxScrollY) && void 0 !== e7 ? e7 : 0), o2.maxScrollHeight = Math.max(a2, null !== (n2 = o2.maxScrollHeight) && void 0 !== n2 ? n2 : 0), o2.lastContentY = u2, o2.maxContentY = Math.max(u2, null !== (r2 = o2.maxContentY) && void 0 !== r2 ? r2 : 0), o2.maxContentHeight = Math.max(l2, null !== (i2 = o2.maxContentHeight) && void 0 !== i2 ? i2 : 0);
    });
  }
  return o(e6, [{ key: "_createPageViewData", value: function() {
    var e7;
    return { pathname: null !== (e7 = null == D ? void 0 : D.location.pathname) && void 0 !== e7 ? e7 : "" };
  } }, { key: "doPageView", value: function() {
    var e7, n2;
    return this._hasSeenPageView ? (n2 = this._pageViewData, this._pageViewData = this._createPageViewData()) : (this._hasSeenPageView = true, n2 = void 0, this._pageViewData || (this._pageViewData = this._createPageViewData())), setTimeout(this._updateScrollData, 0), t({ $prev_pageview_pathname: null === (e7 = n2) || void 0 === e7 ? void 0 : e7.pathname }, this._calculatePrevPageScrollProperties(n2));
  } }, { key: "doPageLeave", value: function() {
    var e7 = this._pageViewData;
    return t({ $prev_pageview_pathname: null == e7 ? void 0 : e7.pathname }, this._calculatePrevPageScrollProperties(e7));
  } }, { key: "_calculatePrevPageScrollProperties", value: function(e7) {
    if (!e7 || null == e7.maxScrollHeight || null == e7.lastScrollY || null == e7.maxScrollY || null == e7.maxContentHeight || null == e7.lastContentY || null == e7.maxContentY)
      return {};
    var t2 = e7.maxScrollHeight, n2 = e7.lastScrollY, r2 = e7.maxScrollY, i2 = e7.maxContentHeight, o2 = e7.lastContentY, s2 = e7.maxContentY;
    return t2 = Math.ceil(t2), n2 = Math.ceil(n2), r2 = Math.ceil(r2), i2 = Math.ceil(i2), o2 = Math.ceil(o2), s2 = Math.ceil(s2), { $prev_pageview_last_scroll: n2, $prev_pageview_last_scroll_percentage: t2 <= 1 ? 1 : sr(n2 / t2, 0, 1), $prev_pageview_max_scroll: r2, $prev_pageview_max_scroll_percentage: t2 <= 1 ? 1 : sr(r2 / t2, 0, 1), $prev_pageview_last_content: o2, $prev_pageview_last_content_percentage: i2 <= 1 ? 1 : sr(o2 / i2, 0, 1), $prev_pageview_max_content: s2, $prev_pageview_max_content_percentage: i2 <= 1 ? 1 : sr(s2 / i2, 0, 1) };
  } }, { key: "startMeasuringScrollPosition", value: function() {
    null == D || D.addEventListener("scroll", this._updateScrollData), null == D || D.addEventListener("scrollend", this._updateScrollData), null == D || D.addEventListener("resize", this._updateScrollData);
  } }, { key: "stopMeasuringScrollPosition", value: function() {
    null == D || D.removeEventListener("scroll", this._updateScrollData), null == D || D.removeEventListener("scrollend", this._updateScrollData), null == D || D.removeEventListener("resize", this._updateScrollData);
  } }, { key: "_scrollHeight", value: function() {
    return D ? Math.max(0, D.document.documentElement.scrollHeight - D.document.documentElement.clientHeight) : 0;
  } }, { key: "_scrollY", value: function() {
    return D && (D.scrollY || D.pageYOffset || D.document.documentElement.scrollTop) || 0;
  } }, { key: "_contentHeight", value: function() {
    return (null == D ? void 0 : D.document.documentElement.scrollHeight) || 0;
  } }, { key: "_contentY", value: function() {
    var e7 = (null == D ? void 0 : D.document.documentElement.clientHeight) || 0;
    return this._scrollY() + e7;
  } }]), e6;
}();
function sr(e6, t2, n2) {
  return Math.max(t2, Math.min(e6, n2));
}
var ar, ur, lr, cr = { icontains: function(e6) {
  return !!D && D.location.href.toLowerCase().indexOf(e6.toLowerCase()) > -1;
}, regex: function(e6) {
  return !!D && bt(D.location.href, e6);
}, exact: function(e6) {
  return (null == D ? void 0 : D.location.href) === e6;
} }, dr = function() {
  function e6(t2) {
    r(this, e6), this.instance = t2;
  }
  return o(e6, [{ key: "getSurveys", value: function(e7) {
    var t2 = this, n2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r2 = this.instance.get_property(qe);
    if (r2 && !n2)
      return e7(r2);
    this.instance._send_request("".concat(this.instance.config.api_host, "/api/surveys/?token=").concat(this.instance.config.token), {}, { method: "GET" }, function(n3) {
      var r3, i2 = n3.surveys || [];
      return null === (r3 = t2.instance.persistence) || void 0 === r3 || r3.register(s({}, qe, i2)), e7(i2);
    });
  } }, { key: "getActiveMatchingSurveys", value: function(e7) {
    var t2 = this, n2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    this.getSurveys(function(n3) {
      var r2 = n3.filter(function(e8) {
        return !(!e8.start_date || e8.end_date);
      }).filter(function(e8) {
        var t3, n4, r3, i2;
        if (!e8.conditions)
          return true;
        var o2 = null === (t3 = e8.conditions) || void 0 === t3 || !t3.url || cr[null !== (n4 = null === (r3 = e8.conditions) || void 0 === r3 ? void 0 : r3.urlMatchType) && void 0 !== n4 ? n4 : "icontains"](e8.conditions.url), s2 = null === (i2 = e8.conditions) || void 0 === i2 || !i2.selector || (null == B ? void 0 : B.querySelector(e8.conditions.selector));
        return o2 && s2;
      }).filter(function(e8) {
        if (!e8.linked_flag_key && !e8.targeting_flag_key)
          return true;
        var n4 = !e8.linked_flag_key || t2.instance.featureFlags.isFeatureEnabled(e8.linked_flag_key), r3 = !e8.targeting_flag_key || t2.instance.featureFlags.isFeatureEnabled(e8.targeting_flag_key);
        return n4 && r3;
      });
      return e7(r2);
    }, n2);
  } }]), e6;
}(), hr = 6e4, fr = function() {
  function e6() {
    var t2 = this;
    r(this, e6), s(this, "limits", {}), s(this, "checkForLimiting", function(e7) {
      try {
        var n2 = e7.responseText;
        if (!n2 || !n2.length)
          return;
        (JSON.parse(n2).quota_limited || []).forEach(function(e8) {
          H.info("[RateLimiter] ".concat(e8 || "events", " is quota limited.")), t2.limits[e8] = (/* @__PURE__ */ new Date()).getTime() + hr;
        });
      } catch (e8) {
        return void H.error(e8);
      }
    });
  }
  return o(e6, [{ key: "isRateLimited", value: function(e7) {
    var t2 = this.limits[e7 || "events"] || false;
    return false !== t2 && (/* @__PURE__ */ new Date()).getTime() < t2;
  } }]), e6;
}(), pr = function() {
  return t({ initialPathName: (null == D ? void 0 : D.location.pathname) || "", referringDomain: St.referringDomain() }, St.campaignParams());
}, _r = function() {
  function e6(t2, n2, i2) {
    var o2 = this;
    r(this, e6), s(this, "_onSessionIdCallback", function(e7) {
      var t3 = o2._getStoredProps();
      if (!t3 || t3.sessionId !== e7) {
        var n3 = { sessionId: e7, props: o2._sessionSourceParamGenerator() };
        o2._persistence.register(s({}, je, n3));
      }
    }), this._sessionIdManager = t2, this._persistence = n2, this._sessionSourceParamGenerator = i2 || pr, this._sessionIdManager.onSessionId(this._onSessionIdCallback);
  }
  return o(e6, [{ key: "_getStoredProps", value: function() {
    return this._persistence.props[je];
  } }, { key: "getSessionProps", value: function() {
    var e7, t2 = null === (e7 = this._getStoredProps()) || void 0 === e7 ? void 0 : e7.props;
    return t2 ? { $client_session_initial_referring_host: t2.referringDomain, $client_session_initial_pathname: t2.initialPathName, $client_session_initial_utm_source: t2.utm_source, $client_session_initial_utm_campaign: t2.utm_campaign, $client_session_initial_utm_medium: t2.utm_medium, $client_session_initial_utm_content: t2.utm_content, $client_session_initial_utm_term: t2.utm_term } : {};
  } }]), e6;
}(), gr = ["ahrefsbot", "ahrefssiteaudit", "applebot", "baiduspider", "bingbot", "bingpreview", "bot.htm", "bot.php", "crawler", "duckduckbot", "facebookexternal", "facebookcatalog", "gptbot", "http://yandex.com/bots", "hubspot", "ia_archiver", "linkedinbot", "mj12bot", "msnbot", "nessus", "petalbot", "pinterest", "prerender", "rogerbot", "screaming frog", "semrushbot", "sitebulb", "slurp", "turnitin", "twitterbot", "vercelbot", "yahoo! slurp", "yandexbot", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleweblight", "mediapartners-google", "storebot-google"], vr = function(e6, t2) {
  if (!e6)
    return false;
  var n2 = e6.toLowerCase();
  return gr.concat(t2 || []).some(function(e7) {
    var t3 = e7.toLowerCase();
    return n2.includes ? n2.includes(t3) : -1 !== n2.indexOf(t3);
  });
};
!function(e6) {
  e6[e6.INIT_MODULE = 0] = "INIT_MODULE", e6[e6.INIT_SNIPPET = 1] = "INIT_SNIPPET";
}(ar || (ar = {}));
var mr = function() {
}, yr = {}, br = "posthog", kr = (null == D ? void 0 : D.XMLHttpRequest) && "withCredentials" in new XMLHttpRequest(), wr = !kr && -1 === (null == N ? void 0 : N.indexOf("MSIE")) && -1 === (null == N ? void 0 : N.indexOf("Mozilla")), Sr = function() {
  var e6, t2, n2;
  return { api_host: "https://app.posthog.com", api_method: "POST", api_transport: "XHR", ui_host: null, token: "", autocapture: true, rageclick: true, cross_subdomain_cookie: (t2 = null == B ? void 0 : B.location, n2 = null == t2 ? void 0 : t2.hostname, !!E(n2) && "herokuapp.com" !== n2.split(".").slice(-2).join(".")), persistence: "localStorage+cookie", persistence_name: "", cookie_name: "", loaded: mr, store_google: true, custom_campaign_params: [], custom_blocked_useragents: [], save_referrer: true, capture_pageview: true, capture_pageleave: true, debug: false, verbose: false, cookie_expiration: 365, upgrade: false, disable_session_recording: false, disable_persistence: false, disable_cookie: false, enable_recording_console_log: void 0, secure_cookie: "https:" === (null == D || null === (e6 = D.location) || void 0 === e6 ? void 0 : e6.protocol), ip: true, opt_out_capturing_by_default: false, opt_out_persistence_by_default: false, opt_out_capturing_persistence_type: "localStorage", opt_out_capturing_cookie_prefix: null, opt_in_site_apps: false, property_blacklist: [], respect_dnt: false, sanitize_properties: null, xhr_headers: {}, inapp_protocol: "//", inapp_link_new_window: false, request_batching: true, properties_string_max_length: 65535, session_recording: {}, mask_all_element_attributes: false, mask_all_text: false, advanced_disable_decide: false, advanced_disable_feature_flags: false, advanced_disable_feature_flags_on_first_load: false, advanced_disable_toolbar_metrics: false, on_xhr_error: function(e7) {
    var t3 = "Bad HTTP status: " + e7.status + " " + e7.statusText;
    H.error(t3);
  }, get_device_id: function(e7) {
    return e7;
  }, _onCapture: mr, capture_performance: void 0, name: "posthog", callback_fn: "posthog._jsc", bootstrap: {}, disable_compression: false, session_idle_timeout_seconds: 1800 };
}, Fr = function(e6, t2, n2, r2) {
  var i2, o2 = n2 !== br && lr ? n2 ? lr[n2] : void 0 : lr, s2 = { initComplete: false, syncCode: false }, a2 = function(e7) {
    return function(t3) {
      s2[e7] || (s2[e7] = true, s2.initComplete && s2.syncCode && (null == r2 || r2(t3)));
    };
  };
  if (o2 && ur === ar.INIT_MODULE)
    i2 = o2;
  else {
    if (o2 && !S(o2))
      return void H.error("You have already initialized " + n2);
    i2 = new Ir();
  }
  if (i2._init(e6, t2, n2, a2("initComplete")), i2.toolbar.maybeLoadToolbar(), i2.sessionRecording = new Vt(i2), i2.sessionRecording.startRecordingIfEnabled(), i2.config.__preview_measure_pageview_stats && i2.pageViewManager.startMeasuringScrollPosition(), i2.__autocapture = i2.config.autocapture, Ue._setIsAutocaptureEnabled(i2), Ue._isAutocaptureEnabled) {
    i2.__autocapture = i2.config.autocapture;
    Ue.enabledForProject(i2.config.token, 100, 100) ? Ue.isBrowserSupported() ? Ue.init(i2) : (i2.__autocapture = false, H.info("Disabling Automatic Event Collection because this browser is not supported")) : (i2.__autocapture = false, H.info("Not in active bucket: disabling Automatic Event Collection."));
  }
  return m.DEBUG = m.DEBUG || i2.config.debug, !R(o2) && S(o2) && (i2._execute_array.call(i2.people, o2.people), i2._execute_array(o2)), a2("syncCode")(i2), i2;
}, Pr = function() {
  function e6() {
    r(this, e6), s(this, "__forceAllowLocalhost", false);
  }
  return o(e6, [{ key: "_forceAllowLocalhost", get: function() {
    return this.__forceAllowLocalhost;
  }, set: function(e7) {
    H.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"), this.__forceAllowLocalhost = e7;
  } }]), e6;
}(), Ir = function() {
  function e6() {
    var t2 = this;
    r(this, e6), s(this, "webPerformance", new Pr()), this.config = Sr(), this.compression = {}, this.decideEndpointWasHit = false, this.SentryIntegration = rr, this.segmentIntegration = function() {
      return ir(t2);
    }, this.__captureHooks = [], this.__request_queue = [], this.__loaded = false, this.__loaded_recorder_version = void 0, this.__autocapture = void 0, this._jsc = function() {
    }, this.analyticsDefaultEndpoint = "/e/", this.elementsChainAsString = false, this.featureFlags = new Qe(this), this.toolbar = new Yt(this), this.pageViewManager = new or(), this.surveys = new dr(this), this.rateLimiter = new fr(), this.people = { set: function(e7, n2, r2) {
      var i2 = E(e7) ? s({}, e7, n2) : e7;
      t2.setPersonProperties(i2), null == r2 || r2({});
    }, set_once: function(e7, n2, r2) {
      var i2 = E(e7) ? s({}, e7, n2) : e7;
      t2.setPersonProperties(void 0, i2), null == r2 || r2({});
    } };
  }
  return o(e6, [{ key: "init", value: function(e7, t2, n2) {
    if (R(n2))
      H.critical("You must name your new library: init(token, config, name)");
    else {
      if (n2 !== br) {
        var r2 = Fr(e7, t2, n2, function(e8) {
          lr[n2] = e8, e8._loaded();
        });
        return lr[n2] = r2, r2;
      }
      H.critical("You must initialize the main posthog object right after you include the PostHog js snippet");
    }
  } }, { key: "_init", value: function(e7) {
    var n2, r2, i2, o2 = this, s2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, a2 = arguments.length > 2 ? arguments[2] : void 0, u2 = arguments.length > 3 ? arguments[3] : void 0;
    this.__loaded = true, this.config = {}, this._triggered_notifs = [];
    var l2, c2 = { segmentRegister: false, syncCode: false }, d2 = function(e8) {
      return function() {
        c2[e8] || (c2[e8] = true, c2.segmentRegister && c2.syncCode && (null == u2 || u2(o2)));
      };
    };
    (this.set_config(z({}, Sr(), s2, { name: a2, token: e7, callback_fn: (a2 === br ? a2 : br + "." + a2) + "._jsc" })), this._jsc = function() {
    }, null != D && null !== (n2 = D.rrweb) && void 0 !== n2 && n2.record || null != D && D.rrwebRecord) && (this.__loaded_recorder_version = null == D || null === (l2 = D.rrweb) || void 0 === l2 ? void 0 : l2.version);
    if (this.persistence = new Pt(this.config), this._requestQueue = new an(this._handle_queued_event.bind(this)), this._retryQueue = new Kn(this.config.on_xhr_error, this.rateLimiter), this.__captureHooks = [], this.__request_queue = [], this.sessionManager = new nr(this.config, this.persistence), this.sessionPropsManager = new _r(this.sessionManager, this.persistence), this.sessionPersistence = "sessionStorage" === this.config.persistence ? this.persistence : new Pt(t(t({}, this.config), {}, { persistence: "sessionStorage" })), this._gdpr_init(), s2.segment ? (this.config.get_device_id = function() {
      return s2.segment.user().anonymousId();
    }, s2.segment.user().id() && (this.register({ distinct_id: s2.segment.user().id() }), this.persistence.set_user_state("identified")), s2.segment.register(this.segmentIntegration()).then(d2("segmentRegister"))) : d2("segmentRegister")(), void 0 !== (null === (r2 = s2.bootstrap) || void 0 === r2 ? void 0 : r2.distinctID)) {
      var h2, f2, p2 = this.config.get_device_id(nt()), _2 = null !== (h2 = s2.bootstrap) && void 0 !== h2 && h2.isIdentifiedID ? p2 : s2.bootstrap.distinctID;
      this.persistence.set_user_state(null !== (f2 = s2.bootstrap) && void 0 !== f2 && f2.isIdentifiedID ? "identified" : "anonymous"), this.register({ distinct_id: s2.bootstrap.distinctID, $device_id: _2 });
    }
    if (this._hasBootstrappedFeatureFlags()) {
      var g2, v2, m2 = Object.keys((null === (g2 = s2.bootstrap) || void 0 === g2 ? void 0 : g2.featureFlags) || {}).filter(function(e8) {
        var t2, n3;
        return !(null === (t2 = s2.bootstrap) || void 0 === t2 || null === (n3 = t2.featureFlags) || void 0 === n3 || !n3[e8]);
      }).reduce(function(e8, t2) {
        var n3, r3;
        return e8[t2] = (null === (n3 = s2.bootstrap) || void 0 === n3 || null === (r3 = n3.featureFlags) || void 0 === r3 ? void 0 : r3[t2]) || false, e8;
      }, {}), y2 = Object.keys((null === (v2 = s2.bootstrap) || void 0 === v2 ? void 0 : v2.featureFlagPayloads) || {}).filter(function(e8) {
        return m2[e8];
      }).reduce(function(e8, t2) {
        var n3, r3, i3, o3;
        null !== (n3 = s2.bootstrap) && void 0 !== n3 && null !== (r3 = n3.featureFlagPayloads) && void 0 !== r3 && r3[t2] && (e8[t2] = null === (i3 = s2.bootstrap) || void 0 === i3 || null === (o3 = i3.featureFlagPayloads) || void 0 === o3 ? void 0 : o3[t2]);
        return e8;
      }, {});
      this.featureFlags.receivedFeatureFlags({ featureFlags: m2, featureFlagPayloads: y2 });
    }
    if (!this.get_distinct_id()) {
      var b2 = this.config.get_device_id(nt());
      this.register_once({ distinct_id: b2, $device_id: b2 }, ""), this.persistence.set_user_state("anonymous");
    }
    null == D || null === (i2 = D.addEventListener) || void 0 === i2 || i2.call(D, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this)), d2("syncCode")();
  } }, { key: "_afterDecideResponse", value: function(e7) {
    var t2;
    if (this.compression = {}, e7.supportedCompression && !this.config.disable_compression) {
      var n2, r2 = {}, i2 = v(e7.supportedCompression);
      try {
        for (i2.s(); !(n2 = i2.n()).done; ) {
          r2[n2.value] = true;
        }
      } catch (e8) {
        i2.e(e8);
      } finally {
        i2.f();
      }
      this.compression = r2;
    }
    null !== (t2 = e7.analytics) && void 0 !== t2 && t2.endpoint && (this.analyticsDefaultEndpoint = e7.analytics.endpoint), e7.elementsChainAsString && (this.elementsChainAsString = e7.elementsChainAsString);
  } }, { key: "_loaded", value: function() {
    var e7 = this.config.advanced_disable_decide;
    e7 || this.featureFlags.setReloadingPaused(true);
    try {
      this.config.loaded(this);
    } catch (e8) {
      H.critical("`loaded` function failed", e8);
    }
    this._start_queue_if_opted_in(), this.config.capture_pageview && B && this.capture("$pageview", { title: B.title }, { send_instantly: true }), e7 || (new Ut(this).call(), this.featureFlags.resetRequestQueue());
  } }, { key: "_start_queue_if_opted_in", value: function() {
    var e7;
    this.has_opted_out_capturing() || this.config.request_batching && (null === (e7 = this._requestQueue) || void 0 === e7 || e7.poll());
  } }, { key: "_dom_loaded", value: function() {
    var e7 = this;
    this.has_opted_out_capturing() || W(this.__request_queue, function(t2) {
      e7._send_request.apply(e7, p(t2));
    }), this.__request_queue = [], this._start_queue_if_opted_in();
  } }, { key: "_prepare_callback", value: function(e7, t2) {
    if (R(e7))
      return null;
    if (kr)
      return function(n3) {
        e7(n3, t2);
      };
    var n2 = this._jsc, r2 = "" + Math.floor(1e8 * Math.random()), i2 = this.config.callback_fn + "[" + r2 + "]";
    return n2[r2] = function(i3) {
      delete n2[r2], e7(i3, t2);
    }, i2;
  } }, { key: "_handle_unload", value: function() {
    var e7, t2;
    this.config.request_batching ? (this.config.capture_pageview && this.config.capture_pageleave && this.capture("$pageleave"), null === (e7 = this._requestQueue) || void 0 === e7 || e7.unload(), null === (t2 = this._retryQueue) || void 0 === t2 || t2.unload()) : this.config.capture_pageview && this.config.capture_pageleave && this.capture("$pageleave", null, { transport: "sendBeacon" });
  } }, { key: "_handle_queued_event", value: function(e7, t2, n2) {
    var r2 = JSON.stringify(t2);
    this.__compress_and_send_json_request(e7, r2, n2 || yr, mr);
  } }, { key: "__compress_and_send_json_request", value: function(e7, n2, r2, i2) {
    var o2 = function(e8, n3, r3) {
      return e8 === Pn.GZipJS ? [Gn(zn(n3), { mtime: 0 }), t(t({}, r3), {}, { blob: true, urlQueryArgs: { compression: Pn.GZipJS } })] : [{ data: ne(n3) }, r3];
    }(this.compression[Pn.GZipJS] ? Pn.GZipJS : Pn.Base64, n2, r2), s2 = f(o2, 2), a2 = s2[0], u2 = s2[1];
    this._send_request(e7, a2, u2, i2);
  } }, { key: "_send_request", value: function(e7, n2, r2, i2) {
    if (this.__loaded && this._retryQueue && !this.rateLimiter.isRateLimited(r2._batchKey))
      if (wr)
        this.__request_queue.push([e7, n2, r2, i2]);
      else {
        var o2 = { method: this.config.api_method, transport: this.config.api_transport, verbose: this.config.verbose };
        r2 = z(o2, r2 || {}), kr || (r2.method = "GET");
        var s2 = D && "sendBeacon" in D.navigator && "sendBeacon" === r2.transport;
        if (e7 = Yn(e7, r2.urlQueryArgs || {}, { ip: this.config.ip }), s2)
          try {
            null == D || D.navigator.sendBeacon(e7, Qn(n2, t(t({}, r2), {}, { sendBeacon: true })));
          } catch (e8) {
          }
        else if (kr || !B)
          try {
            Jn({ url: e7, data: n2, headers: this.config.xhr_headers, options: r2, callback: i2, retriesPerformedSoFar: 0, retryQueue: this._retryQueue, onXHRError: this.config.on_xhr_error, onResponse: this.rateLimiter.checkForLimiting });
          } catch (e8) {
            H.error(e8);
          }
        else {
          var a2, u2 = B.createElement("script");
          u2.type = "text/javascript", u2.async = true, u2.defer = true, u2.src = e7;
          var l2 = B.getElementsByTagName("script")[0];
          null === (a2 = l2.parentNode) || void 0 === a2 || a2.insertBefore(u2, l2);
        }
      }
  } }, { key: "_execute_array", value: function(e7) {
    var t2, n2 = this, r2 = [], i2 = [], o2 = [];
    W(e7, function(e8) {
      e8 && (t2 = e8[0], S(t2) ? o2.push(e8) : P(e8) ? e8.call(n2) : S(e8) && "alias" === t2 ? r2.push(e8) : S(e8) && -1 !== t2.indexOf("capture") && P(n2[t2]) ? o2.push(e8) : i2.push(e8));
    });
    var s2 = function(e8, t3) {
      W(e8, function(e9) {
        if (S(e9[0])) {
          var n3 = t3;
          G(e9, function(e10) {
            n3 = n3[e10[0]].apply(n3, e10.slice(1));
          });
        } else
          this[e9[0]].apply(this, e9.slice(1));
      }, t3);
    };
    s2(r2, this), s2(i2, this), s2(o2, this);
  } }, { key: "_hasBootstrappedFeatureFlags", value: function() {
    var e7, t2;
    return (null === (e7 = this.config.bootstrap) || void 0 === e7 ? void 0 : e7.featureFlags) && Object.keys(null === (t2 = this.config.bootstrap) || void 0 === t2 ? void 0 : t2.featureFlags).length > 0 || false;
  } }, { key: "push", value: function(e7) {
    this._execute_array([e7]);
  } }, { key: "capture", value: function(e7, n2) {
    var r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : yr;
    if (!this.__loaded || !this.sessionPersistence || !this._requestQueue)
      return H.uninitializedWarning("posthog.capture");
    if (!function(e8) {
      var t2 = false;
      try {
        var n3 = e8.config.token, r3 = e8.config.respect_dnt, i3 = e8.config.opt_out_capturing_persistence_type, o3 = e8.config.opt_out_capturing_cookie_prefix || void 0, s3 = e8.config.window;
        n3 && (t2 = Zt(n3, { respectDnt: r3, persistenceType: i3, persistencePrefix: o3, window: s3 }));
      } catch (e9) {
        H.error("Unexpected error when checking capturing opt-out status: " + e9);
      }
      return t2;
    }(this)) {
      var i2 = (r2 = r2 || yr).transport;
      if (i2 && (r2.transport = i2), !R(e7) && E(e7)) {
        if (!N || !vr(N, this.config.custom_blocked_useragents)) {
          this.sessionPersistence.update_search_keyword(), this.config.store_google && this.sessionPersistence.update_campaign_params(), this.config.save_referrer && this.sessionPersistence.update_referrer_info();
          var o2 = { uuid: nt(), event: e7, properties: this._calculate_event_properties(e7, n2 || {}) };
          "$identify" === e7 && (o2.$set = r2.$set, o2.$set_once = r2.$set_once), (o2 = te(o2, r2._noTruncate ? null : this.config.properties_string_max_length)).timestamp = r2.timestamp || /* @__PURE__ */ new Date();
          var s2 = t(t({}, o2.properties.$set), o2.$set);
          x(s2) || this.setPersonPropertiesForFlags(s2), H.info("send", o2);
          var a2 = JSON.stringify(o2), u2 = this.config.api_host + (r2.endpoint || this.analyticsDefaultEndpoint), l2 = r2 !== yr;
          return !this.config.request_batching || l2 && !r2._batchKey || r2.send_instantly ? this.__compress_and_send_json_request(u2, a2, r2) : this._requestQueue.enqueue(u2, o2, r2), this._invokeCaptureHooks(e7, o2), o2;
        }
      } else
        H.error("No event name provided to posthog.capture");
    }
  } }, { key: "_addCaptureHook", value: function(e7) {
    this.__captureHooks.push(e7);
  } }, { key: "_invokeCaptureHooks", value: function(e7, t2) {
    this.config._onCapture(e7, t2), G(this.__captureHooks, function(t3) {
      return t3(e7);
    });
  } }, { key: "_calculate_event_properties", value: function(e7, n2) {
    if (!this.persistence || !this.sessionPersistence)
      return n2;
    var r2 = this.persistence.remove_event_timer(e7), i2 = t({}, n2);
    if (i2.token = this.config.token, "$snapshot" === e7) {
      var o2 = t(t({}, this.persistence.properties()), this.sessionPersistence.properties());
      return i2.distinct_id = o2.distinct_id, i2;
    }
    var s2 = St.properties();
    if (this.sessionManager) {
      var a2 = this.sessionManager.checkAndGetSessionAndWindowId(), u2 = a2.sessionId, l2 = a2.windowId;
      i2.$session_id = u2, i2.$window_id = l2;
    }
    if (this.sessionPropsManager && this.config.__preview_send_client_session_params && ("$pageview" === e7 || "$pageleave" === e7 || "$autocapture" === e7)) {
      var c2 = this.sessionPropsManager.getSessionProps();
      i2 = z(i2, c2);
    }
    if (this.config.__preview_measure_pageview_stats) {
      var d2 = {};
      "$pageview" === e7 ? d2 = this.pageViewManager.doPageView() : "$pageleave" === e7 && (d2 = this.pageViewManager.doPageLeave()), i2 = z(i2, d2);
    }
    if ("$pageview" === e7 && B && (i2.title = B.title), "$performance_event" === e7) {
      var h2 = this.persistence.properties();
      return i2.distinct_id = h2.distinct_id, i2.$current_url = s2.$current_url, i2;
    }
    if (!R(r2)) {
      var f2 = (/* @__PURE__ */ new Date()).getTime() - r2;
      i2.$duration = parseFloat((f2 / 1e3).toFixed(3));
    }
    i2 = z({}, St.properties(), this.persistence.properties(), this.sessionPersistence.properties(), i2);
    var p2 = this.config.property_blacklist;
    S(p2) ? G(p2, function(e8) {
      delete i2[e8];
    }) : H.error("Invalid value for property_blacklist config: " + p2);
    var _2 = this.config.sanitize_properties;
    return _2 && (i2 = _2(i2, e7)), i2;
  } }, { key: "register", value: function(e7, t2) {
    var n2;
    null === (n2 = this.persistence) || void 0 === n2 || n2.register(e7, t2);
  } }, { key: "register_once", value: function(e7, t2, n2) {
    var r2;
    null === (r2 = this.persistence) || void 0 === r2 || r2.register_once(e7, t2, n2);
  } }, { key: "register_for_session", value: function(e7) {
    var t2;
    null === (t2 = this.sessionPersistence) || void 0 === t2 || t2.register(e7);
  } }, { key: "unregister", value: function(e7) {
    var t2;
    null === (t2 = this.persistence) || void 0 === t2 || t2.unregister(e7);
  } }, { key: "unregister_for_session", value: function(e7) {
    var t2;
    null === (t2 = this.sessionPersistence) || void 0 === t2 || t2.unregister(e7);
  } }, { key: "_register_single", value: function(e7, t2) {
    this.register(s({}, e7, t2));
  } }, { key: "getFeatureFlag", value: function(e7, t2) {
    return this.featureFlags.getFeatureFlag(e7, t2);
  } }, { key: "getFeatureFlagPayload", value: function(e7) {
    var t2 = this.featureFlags.getFeatureFlagPayload(e7);
    try {
      return JSON.parse(t2);
    } catch (e8) {
      return t2;
    }
  } }, { key: "isFeatureEnabled", value: function(e7, t2) {
    return this.featureFlags.isFeatureEnabled(e7, t2);
  } }, { key: "reloadFeatureFlags", value: function() {
    this.featureFlags.reloadFeatureFlags();
  } }, { key: "updateEarlyAccessFeatureEnrollment", value: function(e7, t2) {
    this.featureFlags.updateEarlyAccessFeatureEnrollment(e7, t2);
  } }, { key: "getEarlyAccessFeatures", value: function(e7) {
    var t2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return this.featureFlags.getEarlyAccessFeatures(e7, t2);
  } }, { key: "onFeatureFlags", value: function(e7) {
    return this.featureFlags.onFeatureFlags(e7);
  } }, { key: "onSessionId", value: function(e7) {
    var t2, n2;
    return null !== (t2 = null === (n2 = this.sessionManager) || void 0 === n2 ? void 0 : n2.onSessionId(e7)) && void 0 !== t2 ? t2 : function() {
    };
  } }, { key: "getSurveys", value: function(e7) {
    var t2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    this.surveys.getSurveys(e7, t2);
  } }, { key: "getActiveMatchingSurveys", value: function(e7) {
    var t2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    this.surveys.getActiveMatchingSurveys(e7, t2);
  } }, { key: "identify", value: function(e7, t2, n2) {
    if (!this.__loaded || !this.persistence)
      return H.uninitializedWarning("posthog.identify");
    if (e7)
      if (["distinct_id", "distinctid"].includes(e7.toLowerCase()))
        H.critical('The string "'.concat(e7, '" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.'));
      else {
        var r2 = this.get_distinct_id();
        if (this.register({ $user_id: e7 }), !this.get_property("$device_id")) {
          var i2 = r2;
          this.register_once({ $had_persisted_distinct_id: true, $device_id: i2 }, "");
        }
        e7 !== r2 && e7 !== this.get_property(Fe) && (this.unregister(Fe), this.register({ distinct_id: e7 }));
        var o2 = "anonymous" === this.persistence.get_user_state();
        e7 !== r2 && o2 ? (this.persistence.set_user_state("identified"), this.setPersonPropertiesForFlags(t2 || {}, false), this.capture("$identify", { distinct_id: e7, $anon_distinct_id: r2 }, { $set: t2 || {}, $set_once: n2 || {} }), this.featureFlags.setAnonymousDistinctId(r2)) : (t2 || n2) && this.setPersonProperties(t2, n2), e7 !== r2 && (this.reloadFeatureFlags(), this.unregister(Be));
      }
    else
      H.error("Unique user id has not been set in posthog.identify");
  } }, { key: "setPersonProperties", value: function(e7, t2) {
    (e7 || t2) && (this.setPersonPropertiesForFlags(e7 || {}), this.capture("$set", { $set: e7 || {}, $set_once: t2 || {} }));
  } }, { key: "group", value: function(e7, n2, r2) {
    if (e7 && n2) {
      var i2 = this.getGroups();
      i2[e7] !== n2 && this.resetGroupPropertiesForFlags(e7), this.register({ $groups: t(t({}, i2), {}, s({}, e7, n2)) }), r2 && (this.capture("$groupidentify", { $group_type: e7, $group_key: n2, $group_set: r2 }), this.setGroupPropertiesForFlags(s({}, e7, r2))), i2[e7] === n2 || r2 || this.reloadFeatureFlags();
    } else
      H.error("posthog.group requires a group type and group key");
  } }, { key: "resetGroups", value: function() {
    this.register({ $groups: {} }), this.resetGroupPropertiesForFlags(), this.reloadFeatureFlags();
  } }, { key: "setPersonPropertiesForFlags", value: function(e7) {
    var t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    this.featureFlags.setPersonPropertiesForFlags(e7, t2);
  } }, { key: "resetPersonPropertiesForFlags", value: function() {
    this.featureFlags.resetPersonPropertiesForFlags();
  } }, { key: "setGroupPropertiesForFlags", value: function(e7) {
    var t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    this.featureFlags.setGroupPropertiesForFlags(e7, t2);
  } }, { key: "resetGroupPropertiesForFlags", value: function(e7) {
    this.featureFlags.resetGroupPropertiesForFlags(e7);
  } }, { key: "reset", value: function(e7) {
    var t2, n2, r2, i2;
    if (!this.__loaded)
      return H.uninitializedWarning("posthog.reset");
    var o2 = this.get_property("$device_id");
    null === (t2 = this.persistence) || void 0 === t2 || t2.clear(), null === (n2 = this.sessionPersistence) || void 0 === n2 || n2.clear(), null === (r2 = this.persistence) || void 0 === r2 || r2.set_user_state("anonymous"), null === (i2 = this.sessionManager) || void 0 === i2 || i2.resetSessionId();
    var s2 = this.config.get_device_id(nt());
    this.register_once({ distinct_id: s2, $device_id: e7 ? s2 : o2 }, "");
  } }, { key: "get_distinct_id", value: function() {
    return this.get_property("distinct_id");
  } }, { key: "getGroups", value: function() {
    return this.get_property("$groups") || {};
  } }, { key: "get_session_id", value: function() {
    var e7, t2;
    return null !== (e7 = null === (t2 = this.sessionManager) || void 0 === t2 ? void 0 : t2.checkAndGetSessionAndWindowId(true).sessionId) && void 0 !== e7 ? e7 : "";
  } }, { key: "get_session_replay_url", value: function(e7) {
    if (!this.sessionManager)
      return "";
    var t2 = this.config.ui_host || this.config.api_host, n2 = this.sessionManager.checkAndGetSessionAndWindowId(true), r2 = n2.sessionId, i2 = n2.sessionStartTimestamp, o2 = t2 + "/replay/" + r2;
    if (null != e7 && e7.withTimestamp && i2) {
      var s2, a2 = null !== (s2 = e7.timestampLookBack) && void 0 !== s2 ? s2 : 10;
      if (!i2)
        return o2;
      var u2 = Math.max(Math.floor(((/* @__PURE__ */ new Date()).getTime() - i2) / 1e3) - a2, 0);
      o2 += "?t=".concat(u2);
    }
    return o2;
  } }, { key: "alias", value: function(e7, t2) {
    return e7 === this.get_property(Se) ? (H.critical("Attempting to create alias for existing People user - aborting."), -2) : (R(t2) && (t2 = this.get_distinct_id()), e7 !== t2 ? (this._register_single(Fe, e7), this.capture("$create_alias", { alias: e7, distinct_id: t2 })) : (H.warn("alias matches current distinct_id - skipping api call."), this.identify(e7), -1));
  } }, { key: "set_config", value: function(e7) {
    var n2, r2, i2 = t({}, this.config);
    I(e7) && (z(this.config, e7), this.config.persistence_name || (this.config.persistence_name = this.config.cookie_name), this.config.disable_persistence || (this.config.disable_persistence = this.config.disable_cookie), this.config.api_host = this.config.api_host.replace(/\/$/, ""), null === (n2 = this.persistence) || void 0 === n2 || n2.update_config(this.config), null === (r2 = this.sessionPersistence) || void 0 === r2 || r2.update_config(this.config), dt.is_supported() && "true" === dt.get("ph_debug") && (this.config.debug = true), this.config.debug && (m.DEBUG = true), this.sessionRecording && !R(e7.disable_session_recording) && i2.disable_session_recording !== e7.disable_session_recording && (e7.disable_session_recording ? this.sessionRecording.stopRecording() : this.sessionRecording.startRecordingIfEnabled()));
  } }, { key: "startSessionRecording", value: function() {
    this.set_config({ disable_session_recording: false });
  } }, { key: "stopSessionRecording", value: function() {
    this.set_config({ disable_session_recording: true });
  } }, { key: "sessionRecordingStarted", value: function() {
    var e7;
    return !(null === (e7 = this.sessionRecording) || void 0 === e7 || !e7.started);
  } }, { key: "loadToolbar", value: function(e7) {
    return this.toolbar.loadToolbar(e7);
  } }, { key: "get_property", value: function(e7) {
    var t2;
    return null === (t2 = this.persistence) || void 0 === t2 ? void 0 : t2.props[e7];
  } }, { key: "getSessionProperty", value: function(e7) {
    var t2;
    return null === (t2 = this.sessionPersistence) || void 0 === t2 ? void 0 : t2.props[e7];
  } }, { key: "toString", value: function() {
    var e7, t2 = null !== (e7 = this.config.name) && void 0 !== e7 ? e7 : br;
    return t2 !== br && (t2 = br + "." + t2), t2;
  } }, { key: "_gdpr_init", value: function() {
    "localStorage" === this.config.opt_out_capturing_persistence_type && dt.is_supported() && (!this.has_opted_in_capturing() && this.has_opted_in_capturing({ persistence_type: "cookie" }) && this.opt_in_capturing({ enable_persistence: false }), !this.has_opted_out_capturing() && this.has_opted_out_capturing({ persistence_type: "cookie" }) && this.opt_out_capturing({ clear_persistence: false }), this.clear_opt_in_out_capturing({ persistence_type: "cookie", enable_persistence: false })), this.has_opted_out_capturing() ? this._gdpr_update_persistence({ clear_persistence: true }) : this.has_opted_in_capturing() || !this.config.opt_out_capturing_by_default && !lt.get("ph_optout") || (lt.remove("ph_optout"), this.opt_out_capturing({ clear_persistence: this.config.opt_out_persistence_by_default }));
  } }, { key: "_gdpr_update_persistence", value: function(e7) {
    var t2, n2, r2, i2, o2;
    if (e7 && e7.clear_persistence)
      r2 = true;
    else {
      if (!e7 || !e7.enable_persistence)
        return;
      r2 = false;
    }
    this.config.disable_persistence || (null === (t2 = this.persistence) || void 0 === t2 ? void 0 : t2.disabled) === r2 || (null === (i2 = this.persistence) || void 0 === i2 || i2.set_disabled(r2));
    this.config.disable_persistence || (null === (n2 = this.sessionPersistence) || void 0 === n2 ? void 0 : n2.disabled) === r2 || (null === (o2 = this.sessionPersistence) || void 0 === o2 || o2.set_disabled(r2));
  } }, { key: "_gdpr_call_func", value: function(e7, t2) {
    return t2 = z({ capture: this.capture.bind(this), persistence_type: this.config.opt_out_capturing_persistence_type, cookie_prefix: this.config.opt_out_capturing_cookie_prefix, cookie_expiration: this.config.cookie_expiration, cross_subdomain_cookie: this.config.cross_subdomain_cookie, secure_cookie: this.config.secure_cookie }, t2 || {}), dt.is_supported() || "localStorage" !== t2.persistence_type || (t2.persistence_type = "cookie"), e7(this.config.token, { capture: t2.capture, captureEventName: t2.capture_event_name, captureProperties: t2.capture_properties, persistenceType: t2.persistence_type, persistencePrefix: t2.cookie_prefix, cookieExpiration: t2.cookie_expiration, crossSubdomainCookie: t2.cross_subdomain_cookie, secureCookie: t2.secure_cookie });
  } }, { key: "opt_in_capturing", value: function(e7) {
    e7 = z({ enable_persistence: true }, e7 || {}), this._gdpr_call_func(Jt, e7), this._gdpr_update_persistence(e7);
  } }, { key: "opt_out_capturing", value: function(e7) {
    var t2 = z({ clear_persistence: true }, e7 || {});
    this._gdpr_call_func(Xt, t2), this._gdpr_update_persistence(t2);
  } }, { key: "has_opted_in_capturing", value: function(e7) {
    return this._gdpr_call_func(Kt, e7);
  } }, { key: "has_opted_out_capturing", value: function(e7) {
    return this._gdpr_call_func(Zt, e7);
  } }, { key: "clear_opt_in_out_capturing", value: function(e7) {
    var t2 = z({ enable_persistence: true }, null != e7 ? e7 : {});
    this._gdpr_call_func(en, t2), this._gdpr_update_persistence(t2);
  } }, { key: "debug", value: function(e7) {
    false === e7 ? (null == D || D.console.log("You've disabled debug mode."), localStorage && localStorage.removeItem("ph_debug"), this.set_config({ debug: false })) : (null == D || D.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), localStorage && localStorage.setItem("ph_debug", "true"), this.set_config({ debug: true }));
  } }]), e6;
}();
!function(e6, t2) {
  for (var n2 = 0; n2 < t2.length; n2++)
    e6.prototype[t2[n2]] = K(e6.prototype[t2[n2]]);
}(Ir, ["identify"]);
var xr, Rr, Er = {}, Cr = function() {
  lr.init = function(e6, t2, n2) {
    if (n2)
      return lr[n2] || (lr[n2] = Er[n2] = Fr(e6 || "", t2 || {}, n2, function(e7) {
        lr[n2] = Er[n2] = e7, e7._loaded();
      })), lr[n2];
    var r2 = lr;
    return Er[br] ? r2 = Er[br] : e6 && (r2 = Fr(e6, t2 || {}, br, function(e7) {
      Er[br] = e7, e7._loaded();
    }), Er[br] = r2), lr = r2, ur === ar.INIT_SNIPPET && (L[br] = lr), G(Er, function(e7, t3) {
      t3 !== br && (lr[t3] = e7);
    }), r2;
  };
}, Or = function() {
  function e6() {
    e6.done || (e6.done = true, wr = false, G(Er, function(e7) {
      e7._dom_loaded();
    }));
  }
  null != B && B.addEventListener && ("complete" === B.readyState ? e6() : B.addEventListener("DOMContentLoaded", e6, false)), D && ie(D, "load", e6, true);
};
!function(e6) {
  e6.Popover = "popover", e6.API = "api", e6.Widget = "widget";
}(xr || (xr = {})), function(e6) {
  e6.Open = "open", e6.MultipleChoice = "multiple_choice", e6.SingleChoice = "single_choice", e6.Rating = "rating", e6.Link = "link";
}(Rr || (Rr = {}));
var $r = (ur = ar.INIT_MODULE, lr = new Ir(), Cr(), lr.init(), Or(), lr);
$r.init("phc_QjBHlSHQPP3PQAqq5Mb0VvvEp8qpR3ujkS2gUUla1TB", {
  api_host: "https://us.posthog.com"
});
const handleError = ({ error, event }) => {
  $r.capture("client error", { error, event });
};
const matchers = {};
function create_else_block_2(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  var switch_value = (
    /*constructors*/
    ctx[1][0]
  );
  function switch_props(ctx2, dirty) {
    let switch_instance_props = {
      data: (
        /*data_0*/
        ctx2[3]
      ),
      form: (
        /*form*/
        ctx2[2]
      )
    };
    return { props: switch_instance_props };
  }
  if (switch_value) {
    switch_instance = construct_svelte_component(switch_value, switch_props(ctx));
    ctx[18](switch_instance);
  }
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l(nodes2) {
      if (switch_instance)
        claim_component(switch_instance.$$.fragment, nodes2);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance)
        mount_component(switch_instance, target, anchor);
      insert_hydration(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*constructors*/
      2 && switch_value !== (switch_value = /*constructors*/
      ctx2[1][0])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = construct_svelte_component(switch_value, switch_props(ctx2));
          ctx2[18](switch_instance);
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        const switch_instance_changes = {};
        if (dirty & /*data_0*/
        8)
          switch_instance_changes.data = /*data_0*/
          ctx2[3];
        if (dirty & /*form*/
        4)
          switch_instance_changes.form = /*form*/
          ctx2[2];
        switch_instance.$set(switch_instance_changes);
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(switch_instance_anchor);
      }
      ctx[18](null);
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
}
function create_if_block_2(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  var switch_value = (
    /*constructors*/
    ctx[1][0]
  );
  function switch_props(ctx2, dirty) {
    let switch_instance_props = {
      data: (
        /*data_0*/
        ctx2[3]
      ),
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx: ctx2 }
    };
    return { props: switch_instance_props };
  }
  if (switch_value) {
    switch_instance = construct_svelte_component(switch_value, switch_props(ctx));
    ctx[17](switch_instance);
  }
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l(nodes2) {
      if (switch_instance)
        claim_component(switch_instance.$$.fragment, nodes2);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance)
        mount_component(switch_instance, target, anchor);
      insert_hydration(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*constructors*/
      2 && switch_value !== (switch_value = /*constructors*/
      ctx2[1][0])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = construct_svelte_component(switch_value, switch_props(ctx2));
          ctx2[17](switch_instance);
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        const switch_instance_changes = {};
        if (dirty & /*data_0*/
        8)
          switch_instance_changes.data = /*data_0*/
          ctx2[3];
        if (dirty & /*$$scope, constructors, data_1, components, data_2, data_3, form*/
        524407) {
          switch_instance_changes.$$scope = { dirty, ctx: ctx2 };
        }
        switch_instance.$set(switch_instance_changes);
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(switch_instance_anchor);
      }
      ctx[17](null);
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
}
function create_else_block_1(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  var switch_value = (
    /*constructors*/
    ctx[1][1]
  );
  function switch_props(ctx2, dirty) {
    let switch_instance_props = {
      data: (
        /*data_1*/
        ctx2[4]
      ),
      form: (
        /*form*/
        ctx2[2]
      )
    };
    return { props: switch_instance_props };
  }
  if (switch_value) {
    switch_instance = construct_svelte_component(switch_value, switch_props(ctx));
    ctx[16](switch_instance);
  }
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l(nodes2) {
      if (switch_instance)
        claim_component(switch_instance.$$.fragment, nodes2);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance)
        mount_component(switch_instance, target, anchor);
      insert_hydration(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*constructors*/
      2 && switch_value !== (switch_value = /*constructors*/
      ctx2[1][1])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = construct_svelte_component(switch_value, switch_props(ctx2));
          ctx2[16](switch_instance);
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        const switch_instance_changes = {};
        if (dirty & /*data_1*/
        16)
          switch_instance_changes.data = /*data_1*/
          ctx2[4];
        if (dirty & /*form*/
        4)
          switch_instance_changes.form = /*form*/
          ctx2[2];
        switch_instance.$set(switch_instance_changes);
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(switch_instance_anchor);
      }
      ctx[16](null);
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
}
function create_if_block_3(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  var switch_value = (
    /*constructors*/
    ctx[1][1]
  );
  function switch_props(ctx2, dirty) {
    let switch_instance_props = {
      data: (
        /*data_1*/
        ctx2[4]
      ),
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx: ctx2 }
    };
    return { props: switch_instance_props };
  }
  if (switch_value) {
    switch_instance = construct_svelte_component(switch_value, switch_props(ctx));
    ctx[15](switch_instance);
  }
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l(nodes2) {
      if (switch_instance)
        claim_component(switch_instance.$$.fragment, nodes2);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance)
        mount_component(switch_instance, target, anchor);
      insert_hydration(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*constructors*/
      2 && switch_value !== (switch_value = /*constructors*/
      ctx2[1][1])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = construct_svelte_component(switch_value, switch_props(ctx2));
          ctx2[15](switch_instance);
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        const switch_instance_changes = {};
        if (dirty & /*data_1*/
        16)
          switch_instance_changes.data = /*data_1*/
          ctx2[4];
        if (dirty & /*$$scope, constructors, data_2, components, data_3, form*/
        524391) {
          switch_instance_changes.$$scope = { dirty, ctx: ctx2 };
        }
        switch_instance.$set(switch_instance_changes);
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(switch_instance_anchor);
      }
      ctx[15](null);
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
}
function create_else_block(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  var switch_value = (
    /*constructors*/
    ctx[1][2]
  );
  function switch_props(ctx2, dirty) {
    let switch_instance_props = {
      data: (
        /*data_2*/
        ctx2[5]
      ),
      form: (
        /*form*/
        ctx2[2]
      )
    };
    return { props: switch_instance_props };
  }
  if (switch_value) {
    switch_instance = construct_svelte_component(switch_value, switch_props(ctx));
    ctx[14](switch_instance);
  }
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l(nodes2) {
      if (switch_instance)
        claim_component(switch_instance.$$.fragment, nodes2);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance)
        mount_component(switch_instance, target, anchor);
      insert_hydration(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*constructors*/
      2 && switch_value !== (switch_value = /*constructors*/
      ctx2[1][2])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = construct_svelte_component(switch_value, switch_props(ctx2));
          ctx2[14](switch_instance);
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        const switch_instance_changes = {};
        if (dirty & /*data_2*/
        32)
          switch_instance_changes.data = /*data_2*/
          ctx2[5];
        if (dirty & /*form*/
        4)
          switch_instance_changes.form = /*form*/
          ctx2[2];
        switch_instance.$set(switch_instance_changes);
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(switch_instance_anchor);
      }
      ctx[14](null);
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
}
function create_if_block_4(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  var switch_value = (
    /*constructors*/
    ctx[1][2]
  );
  function switch_props(ctx2, dirty) {
    let switch_instance_props = {
      data: (
        /*data_2*/
        ctx2[5]
      ),
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx: ctx2 }
    };
    return { props: switch_instance_props };
  }
  if (switch_value) {
    switch_instance = construct_svelte_component(switch_value, switch_props(ctx));
    ctx[13](switch_instance);
  }
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l(nodes2) {
      if (switch_instance)
        claim_component(switch_instance.$$.fragment, nodes2);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance)
        mount_component(switch_instance, target, anchor);
      insert_hydration(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*constructors*/
      2 && switch_value !== (switch_value = /*constructors*/
      ctx2[1][2])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = construct_svelte_component(switch_value, switch_props(ctx2));
          ctx2[13](switch_instance);
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        const switch_instance_changes = {};
        if (dirty & /*data_2*/
        32)
          switch_instance_changes.data = /*data_2*/
          ctx2[5];
        if (dirty & /*$$scope, constructors, data_3, form, components*/
        524359) {
          switch_instance_changes.$$scope = { dirty, ctx: ctx2 };
        }
        switch_instance.$set(switch_instance_changes);
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(switch_instance_anchor);
      }
      ctx[13](null);
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
}
function create_default_slot_2(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  var switch_value = (
    /*constructors*/
    ctx[1][3]
  );
  function switch_props(ctx2, dirty) {
    let switch_instance_props = {
      data: (
        /*data_3*/
        ctx2[6]
      ),
      form: (
        /*form*/
        ctx2[2]
      )
    };
    return { props: switch_instance_props };
  }
  if (switch_value) {
    switch_instance = construct_svelte_component(switch_value, switch_props(ctx));
    ctx[12](switch_instance);
  }
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l(nodes2) {
      if (switch_instance)
        claim_component(switch_instance.$$.fragment, nodes2);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance)
        mount_component(switch_instance, target, anchor);
      insert_hydration(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*constructors*/
      2 && switch_value !== (switch_value = /*constructors*/
      ctx2[1][3])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = construct_svelte_component(switch_value, switch_props(ctx2));
          ctx2[12](switch_instance);
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        const switch_instance_changes = {};
        if (dirty & /*data_3*/
        64)
          switch_instance_changes.data = /*data_3*/
          ctx2[6];
        if (dirty & /*form*/
        4)
          switch_instance_changes.form = /*form*/
          ctx2[2];
        switch_instance.$set(switch_instance_changes);
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(switch_instance_anchor);
      }
      ctx[12](null);
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
}
function create_default_slot_1(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block_4, create_else_block];
  const if_blocks = [];
  function select_block_type_2(ctx2, dirty) {
    if (
      /*constructors*/
      ctx2[1][3]
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type_2(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    l(nodes2) {
      if_block.l(nodes2);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type_2(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(if_block_anchor);
      }
      if_blocks[current_block_type_index].d(detaching);
    }
  };
}
function create_default_slot(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block_3, create_else_block_1];
  const if_blocks = [];
  function select_block_type_1(ctx2, dirty) {
    if (
      /*constructors*/
      ctx2[1][2]
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type_1(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    l(nodes2) {
      if_block.l(nodes2);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type_1(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(if_block_anchor);
      }
      if_blocks[current_block_type_index].d(detaching);
    }
  };
}
function create_if_block(ctx) {
  let div;
  let if_block = (
    /*navigated*/
    ctx[8] && create_if_block_1(ctx)
  );
  return {
    c() {
      div = element("div");
      if (if_block)
        if_block.c();
      this.h();
    },
    l(nodes2) {
      div = claim_element(nodes2, "DIV", {
        id: true,
        "aria-live": true,
        "aria-atomic": true,
        style: true
      });
      var div_nodes = children(div);
      if (if_block)
        if_block.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "id", "svelte-announcer");
      attr(div, "aria-live", "assertive");
      attr(div, "aria-atomic", "true");
      set_style(div, "position", "absolute");
      set_style(div, "left", "0");
      set_style(div, "top", "0");
      set_style(div, "clip", "rect(0 0 0 0)");
      set_style(div, "clip-path", "inset(50%)");
      set_style(div, "overflow", "hidden");
      set_style(div, "white-space", "nowrap");
      set_style(div, "width", "1px");
      set_style(div, "height", "1px");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (if_block)
        if_block.m(div, null);
    },
    p(ctx2, dirty) {
      if (
        /*navigated*/
        ctx2[8]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block_1(ctx2);
          if_block.c();
          if_block.m(div, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      if (if_block)
        if_block.d();
    }
  };
}
function create_if_block_1(ctx) {
  let t2;
  return {
    c() {
      t2 = text(
        /*title*/
        ctx[9]
      );
    },
    l(nodes2) {
      t2 = claim_text(
        nodes2,
        /*title*/
        ctx[9]
      );
    },
    m(target, anchor) {
      insert_hydration(target, t2, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*title*/
      512)
        set_data(
          t2,
          /*title*/
          ctx2[9]
        );
    },
    d(detaching) {
      if (detaching) {
        detach(t2);
      }
    }
  };
}
function create_fragment(ctx) {
  let current_block_type_index;
  let if_block0;
  let t2;
  let if_block1_anchor;
  let current;
  const if_block_creators = [create_if_block_2, create_else_block_2];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*constructors*/
      ctx2[1][1]
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  let if_block1 = (
    /*mounted*/
    ctx[7] && create_if_block(ctx)
  );
  return {
    c() {
      if_block0.c();
      t2 = space();
      if (if_block1)
        if_block1.c();
      if_block1_anchor = empty();
    },
    l(nodes2) {
      if_block0.l(nodes2);
      t2 = claim_space(nodes2);
      if (if_block1)
        if_block1.l(nodes2);
      if_block1_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration(target, t2, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert_hydration(target, if_block1_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block0 = if_blocks[current_block_type_index];
        if (!if_block0) {
          if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block0.c();
        } else {
          if_block0.p(ctx2, dirty);
        }
        transition_in(if_block0, 1);
        if_block0.m(t2.parentNode, t2);
      }
      if (
        /*mounted*/
        ctx2[7]
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block(ctx2);
          if_block1.c();
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(t2);
        detach(if_block1_anchor);
      }
      if_blocks[current_block_type_index].d(detaching);
      if (if_block1)
        if_block1.d(detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { stores } = $$props;
  let { page } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  let { data_2 = null } = $$props;
  let { data_3 = null } = $$props;
  afterUpdate(stores.page.notify);
  let mounted = false;
  let navigated = false;
  let title = null;
  onMount(() => {
    const unsubscribe = stores.page.subscribe(() => {
      if (mounted) {
        $$invalidate(8, navigated = true);
        tick().then(() => {
          $$invalidate(9, title = document.title || "untitled page");
        });
      }
    });
    $$invalidate(7, mounted = true);
    return unsubscribe;
  });
  function switch_instance_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      components[3] = $$value;
      $$invalidate(0, components);
    });
  }
  function switch_instance_binding_1($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      components[2] = $$value;
      $$invalidate(0, components);
    });
  }
  function switch_instance_binding_2($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      components[2] = $$value;
      $$invalidate(0, components);
    });
  }
  function switch_instance_binding_3($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      components[1] = $$value;
      $$invalidate(0, components);
    });
  }
  function switch_instance_binding_4($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      components[1] = $$value;
      $$invalidate(0, components);
    });
  }
  function switch_instance_binding_5($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      components[0] = $$value;
      $$invalidate(0, components);
    });
  }
  function switch_instance_binding_6($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      components[0] = $$value;
      $$invalidate(0, components);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("stores" in $$props2)
      $$invalidate(10, stores = $$props2.stores);
    if ("page" in $$props2)
      $$invalidate(11, page = $$props2.page);
    if ("constructors" in $$props2)
      $$invalidate(1, constructors = $$props2.constructors);
    if ("components" in $$props2)
      $$invalidate(0, components = $$props2.components);
    if ("form" in $$props2)
      $$invalidate(2, form = $$props2.form);
    if ("data_0" in $$props2)
      $$invalidate(3, data_0 = $$props2.data_0);
    if ("data_1" in $$props2)
      $$invalidate(4, data_1 = $$props2.data_1);
    if ("data_2" in $$props2)
      $$invalidate(5, data_2 = $$props2.data_2);
    if ("data_3" in $$props2)
      $$invalidate(6, data_3 = $$props2.data_3);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*stores, page*/
    3072) {
      stores.page.set(page);
    }
  };
  return [
    components,
    constructors,
    form,
    data_0,
    data_1,
    data_2,
    data_3,
    mounted,
    navigated,
    title,
    stores,
    page,
    switch_instance_binding,
    switch_instance_binding_1,
    switch_instance_binding_2,
    switch_instance_binding_3,
    switch_instance_binding_4,
    switch_instance_binding_5,
    switch_instance_binding_6
  ];
}
class Root extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {
      stores: 10,
      page: 11,
      constructors: 1,
      components: 0,
      form: 2,
      data_0: 3,
      data_1: 4,
      data_2: 5,
      data_3: 6
    });
  }
}
const nodes = [
  () => __vitePreload(() => import("../nodes/0.CMIPQFkk.js"), true ? __vite__mapDeps([0,1,2]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/1.D8nJaiv8.js"), true ? __vite__mapDeps([3,1,2,4,5,6]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/2.C_oDQlgv.js"), true ? __vite__mapDeps([7,1,2,8,4,5,6,9,10,11]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/3.BMPqw2Om.js"), true ? __vite__mapDeps([12,1,2,13]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/4.CLZu8yoM.js"), true ? __vite__mapDeps([14,1,2,8,4,5,6,9]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/5.BrRoiui3.js"), true ? __vite__mapDeps([15,1,2,10,11,6,16,17]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/6.Cm6WBkrv.js"), true ? __vite__mapDeps([18,1,2]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/7.7J3Dh_0O.js"), true ? __vite__mapDeps([19,1,2]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/8.BjfjDFgb.js"), true ? __vite__mapDeps([20,1,2]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/9.DcFycQyw.js"), true ? __vite__mapDeps([21,1,2]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/10.DYw3yv1V.js"), true ? __vite__mapDeps([22,1,2,23,6,24]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/11.Bqipk0aN.js"), true ? __vite__mapDeps([25,1,2]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/12.C8xP_BLy.js"), true ? __vite__mapDeps([26,1,2]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/13.DHo-KTOd.js"), true ? __vite__mapDeps([27,1,2]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/14.fTvgoynY.js"), true ? __vite__mapDeps([28,1,2]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/15.BkzjzWD0.js"), true ? __vite__mapDeps([29,1,2,24,10,6]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/16.DeDV1Yy2.js"), true ? __vite__mapDeps([30,1,2]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/17.f7e5KaRI.js"), true ? __vite__mapDeps([31,1,2]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/18.D07N7BNU.js"), true ? __vite__mapDeps([32,1,2]) : void 0, import.meta.url)
];
const server_loads = [];
const dictionary = {
  "/(site)": [~5, [2]],
  "/(site)/(articles)/adding-devtools-to-vite-plugins": [~6, [2, 3]],
  "/(experiments)/blurhash": [4],
  "/(site)/(articles)/building-an-i18n-library-for-the-modern-web": [~7, [2, 3]],
  "/(site)/(articles)/declarative-exception-handling": [~8, [2, 3]],
  "/(site)/(articles)/dts-buddy-fixes-type-declarations": [~9, [2, 3]],
  "/(site)/(articles)/fluent-inputs": [~10, [2, 3]],
  "/(site)/(articles)/i-started-taking-notes": [~11, [2, 3]],
  "/(site)/(articles)/melt-ui-neat-pattern": [~12, [2, 3]],
  "/(site)/(articles)/mock-data-with-zocker": [~13, [2, 3]],
  "/(site)/(articles)/reliably-avoiding-theme-flashes": [~14, [2, 3]],
  "/(site)/(articles)/tailwind-ui": [~15, [2, 3]],
  "/(site)/(articles)/the-better-way-to-load-data": [~16, [2, 3]],
  "/(site)/(articles)/the-poor-mans-scheduled-post": [~17, [2, 3]],
  "/(site)/(articles)/zod-driven-development": [~18, [2, 3]]
};
const hooks = {
  handleError: handleError || (({ error }) => {
    console.error(error);
  }),
  reroute: () => {
  }
};
export {
  dictionary,
  hooks,
  matchers,
  nodes,
  Root as root,
  server_loads
};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../nodes/0.CMIPQFkk.js","../chunks/scheduler.DwkGEAYb.js","../chunks/index.BoYP9eQs.js","../nodes/1.D8nJaiv8.js","../chunks/stores.62zLq3Jg.js","../chunks/entry.BXLQ6IM8.js","../chunks/index.CU0sutvA.js","../nodes/2.C_oDQlgv.js","../chunks/Metadata.B_mrxRnM.js","../assets/Metadata.DyfCrczt.css","../chunks/each.CuygwpM4.js","../chunks/theme.COyUI6g7.js","../nodes/3.BMPqw2Om.js","../assets/3.CqjOwtjT.css","../nodes/4.CLZu8yoM.js","../nodes/5.BrRoiui3.js","../chunks/_commonjsHelpers.DWwsNxpa.js","../assets/5.BZyQRmUM.css","../nodes/6.Cm6WBkrv.js","../nodes/7.7J3Dh_0O.js","../nodes/8.BjfjDFgb.js","../nodes/9.DcFycQyw.js","../nodes/10.DYw3yv1V.js","../chunks/preload-helper.CP-VSAQc.js","../chunks/Showcase.Dhs04y0u.js","../nodes/11.Bqipk0aN.js","../nodes/12.C8xP_BLy.js","../nodes/13.DHo-KTOd.js","../nodes/14.fTvgoynY.js","../nodes/15.BkzjzWD0.js","../nodes/16.DeDV1Yy2.js","../nodes/17.f7e5KaRI.js","../nodes/18.D07N7BNU.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
