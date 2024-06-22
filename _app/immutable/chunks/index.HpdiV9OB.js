import { c as commonjsGlobal, g as getDefaultExportFromCjs } from "./_commonjsHelpers.DWwsNxpa.js";
var quarterOfYear$1 = { exports: {} };
(function(module, exports) {
  !function(t, n) {
    module.exports = n();
  }(commonjsGlobal, function() {
    var t = "month", n = "quarter";
    return function(e, i) {
      var r = i.prototype;
      r.quarter = function(t2) {
        return this.$utils().u(t2) ? Math.ceil((this.month() + 1) / 3) : this.month(this.month() % 3 + 3 * (t2 - 1));
      };
      var s = r.add;
      r.add = function(e2, i2) {
        return e2 = Number(e2), this.$utils().p(i2) === n ? this.add(3 * e2, t) : s.bind(this)(e2, i2);
      };
      var u = r.startOf;
      r.startOf = function(e2, i2) {
        var r2 = this.$utils(), s2 = !!r2.u(i2) || i2;
        if (r2.p(e2) === n) {
          var o = this.quarter() - 1;
          return s2 ? this.month(3 * o).startOf(t).startOf("day") : this.month(3 * o + 2).endOf(t).endOf("day");
        }
        return u.bind(this)(e2, i2);
      };
    };
  });
})(quarterOfYear$1);
var quarterOfYearExports = quarterOfYear$1.exports;
const quarterOfYear = /* @__PURE__ */ getDefaultExportFromCjs(quarterOfYearExports);
var dayjs_min = { exports: {} };
(function(module, exports) {
  !function(t, e) {
    module.exports = e();
  }(commonjsGlobal, function() {
    var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
      var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
      return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
    } }, m = function(t2, e2, n2) {
      var r2 = String(t2);
      return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
    }, v = { s: m, z: function(t2) {
      var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
      return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
    }, m: function t2(e2, n2) {
      if (e2.date() < n2.date())
        return -t2(n2, e2);
      var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, c), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), c);
      return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
    }, a: function(t2) {
      return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
    }, p: function(t2) {
      return { M: c, y: h, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: f }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
    }, u: function(t2) {
      return void 0 === t2;
    } }, g = "en", D = {};
    D[g] = M;
    var p = "$isDayjsObject", S = function(t2) {
      return t2 instanceof _ || !(!t2 || !t2[p]);
    }, w = function t2(e2, n2, r2) {
      var i2;
      if (!e2)
        return g;
      if ("string" == typeof e2) {
        var s2 = e2.toLowerCase();
        D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
        var u2 = e2.split("-");
        if (!i2 && u2.length > 1)
          return t2(u2[0]);
      } else {
        var a2 = e2.name;
        D[a2] = e2, i2 = a2;
      }
      return !r2 && i2 && (g = i2), i2 || !r2 && g;
    }, O = function(t2, e2) {
      if (S(t2))
        return t2.clone();
      var n2 = "object" == typeof e2 ? e2 : {};
      return n2.date = t2, n2.args = arguments, new _(n2);
    }, b = v;
    b.l = w, b.i = S, b.w = function(t2, e2) {
      return O(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
    };
    var _ = function() {
      function M2(t2) {
        this.$L = w(t2.locale, null, true), this.parse(t2), this.$x = this.$x || t2.x || {}, this[p] = true;
      }
      var m2 = M2.prototype;
      return m2.parse = function(t2) {
        this.$d = function(t3) {
          var e2 = t3.date, n2 = t3.utc;
          if (null === e2)
            return /* @__PURE__ */ new Date(NaN);
          if (b.u(e2))
            return /* @__PURE__ */ new Date();
          if (e2 instanceof Date)
            return new Date(e2);
          if ("string" == typeof e2 && !/Z$/i.test(e2)) {
            var r2 = e2.match($);
            if (r2) {
              var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
              return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
            }
          }
          return new Date(e2);
        }(t2), this.init();
      }, m2.init = function() {
        var t2 = this.$d;
        this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
      }, m2.$utils = function() {
        return b;
      }, m2.isValid = function() {
        return !(this.$d.toString() === l);
      }, m2.isSame = function(t2, e2) {
        var n2 = O(t2);
        return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
      }, m2.isAfter = function(t2, e2) {
        return O(t2) < this.startOf(e2);
      }, m2.isBefore = function(t2, e2) {
        return this.endOf(e2) < O(t2);
      }, m2.$g = function(t2, e2, n2) {
        return b.u(t2) ? this[e2] : this.set(n2, t2);
      }, m2.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, m2.valueOf = function() {
        return this.$d.getTime();
      }, m2.startOf = function(t2, e2) {
        var n2 = this, r2 = !!b.u(e2) || e2, f2 = b.p(t2), l2 = function(t3, e3) {
          var i2 = b.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
          return r2 ? i2 : i2.endOf(a);
        }, $2 = function(t3, e3) {
          return b.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
        }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
        switch (f2) {
          case h:
            return r2 ? l2(1, 0) : l2(31, 11);
          case c:
            return r2 ? l2(1, M3) : l2(0, M3 + 1);
          case o:
            var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
            return l2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
          case a:
          case d:
            return $2(v2 + "Hours", 0);
          case u:
            return $2(v2 + "Minutes", 1);
          case s:
            return $2(v2 + "Seconds", 2);
          case i:
            return $2(v2 + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, m2.endOf = function(t2) {
        return this.startOf(t2, false);
      }, m2.$set = function(t2, e2) {
        var n2, o2 = b.p(t2), f2 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = f2 + "Date", n2[d] = f2 + "Date", n2[c] = f2 + "Month", n2[h] = f2 + "FullYear", n2[u] = f2 + "Hours", n2[s] = f2 + "Minutes", n2[i] = f2 + "Seconds", n2[r] = f2 + "Milliseconds", n2)[o2], $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
        if (o2 === c || o2 === h) {
          var y2 = this.clone().set(d, 1);
          y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
        } else
          l2 && this.$d[l2]($2);
        return this.init(), this;
      }, m2.set = function(t2, e2) {
        return this.clone().$set(t2, e2);
      }, m2.get = function(t2) {
        return this[b.p(t2)]();
      }, m2.add = function(r2, f2) {
        var d2, l2 = this;
        r2 = Number(r2);
        var $2 = b.p(f2), y2 = function(t2) {
          var e2 = O(l2);
          return b.w(e2.date(e2.date() + Math.round(t2 * r2)), l2);
        };
        if ($2 === c)
          return this.set(c, this.$M + r2);
        if ($2 === h)
          return this.set(h, this.$y + r2);
        if ($2 === a)
          return y2(1);
        if ($2 === o)
          return y2(7);
        var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[$2] || 1, m3 = this.$d.getTime() + r2 * M3;
        return b.w(m3, this);
      }, m2.subtract = function(t2, e2) {
        return this.add(-1 * t2, e2);
      }, m2.format = function(t2) {
        var e2 = this, n2 = this.$locale();
        if (!this.isValid())
          return n2.invalidDate || l;
        var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, c2 = n2.months, f2 = n2.meridiem, h2 = function(t3, n3, i3, s3) {
          return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
        }, d2 = function(t3) {
          return b.s(s2 % 12 || 12, t3, "0");
        }, $2 = f2 || function(t3, e3, n3) {
          var r3 = t3 < 12 ? "AM" : "PM";
          return n3 ? r3.toLowerCase() : r3;
        };
        return r2.replace(y, function(t3, r3) {
          return r3 || function(t4) {
            switch (t4) {
              case "YY":
                return String(e2.$y).slice(-2);
              case "YYYY":
                return b.s(e2.$y, 4, "0");
              case "M":
                return a2 + 1;
              case "MM":
                return b.s(a2 + 1, 2, "0");
              case "MMM":
                return h2(n2.monthsShort, a2, c2, 3);
              case "MMMM":
                return h2(c2, a2);
              case "D":
                return e2.$D;
              case "DD":
                return b.s(e2.$D, 2, "0");
              case "d":
                return String(e2.$W);
              case "dd":
                return h2(n2.weekdaysMin, e2.$W, o2, 2);
              case "ddd":
                return h2(n2.weekdaysShort, e2.$W, o2, 3);
              case "dddd":
                return o2[e2.$W];
              case "H":
                return String(s2);
              case "HH":
                return b.s(s2, 2, "0");
              case "h":
                return d2(1);
              case "hh":
                return d2(2);
              case "a":
                return $2(s2, u2, true);
              case "A":
                return $2(s2, u2, false);
              case "m":
                return String(u2);
              case "mm":
                return b.s(u2, 2, "0");
              case "s":
                return String(e2.$s);
              case "ss":
                return b.s(e2.$s, 2, "0");
              case "SSS":
                return b.s(e2.$ms, 3, "0");
              case "Z":
                return i2;
            }
            return null;
          }(t3) || i2.replace(":", "");
        });
      }, m2.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, m2.diff = function(r2, d2, l2) {
        var $2, y2 = this, M3 = b.p(d2), m3 = O(r2), v2 = (m3.utcOffset() - this.utcOffset()) * e, g2 = this - m3, D2 = function() {
          return b.m(y2, m3);
        };
        switch (M3) {
          case h:
            $2 = D2() / 12;
            break;
          case c:
            $2 = D2();
            break;
          case f:
            $2 = D2() / 3;
            break;
          case o:
            $2 = (g2 - v2) / 6048e5;
            break;
          case a:
            $2 = (g2 - v2) / 864e5;
            break;
          case u:
            $2 = g2 / n;
            break;
          case s:
            $2 = g2 / e;
            break;
          case i:
            $2 = g2 / t;
            break;
          default:
            $2 = g2;
        }
        return l2 ? $2 : b.a($2);
      }, m2.daysInMonth = function() {
        return this.endOf(c).$D;
      }, m2.$locale = function() {
        return D[this.$L];
      }, m2.locale = function(t2, e2) {
        if (!t2)
          return this.$L;
        var n2 = this.clone(), r2 = w(t2, e2, true);
        return r2 && (n2.$L = r2), n2;
      }, m2.clone = function() {
        return b.w(this.$d, this);
      }, m2.toDate = function() {
        return new Date(this.valueOf());
      }, m2.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, m2.toISOString = function() {
        return this.$d.toISOString();
      }, m2.toString = function() {
        return this.$d.toUTCString();
      }, M2;
    }(), k = _.prototype;
    return O.prototype = k, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h], ["$D", d]].forEach(function(t2) {
      k[t2[1]] = function(e2) {
        return this.$g(e2, t2[0], t2[1]);
      };
    }), O.extend = function(t2, e2) {
      return t2.$i || (t2(e2, _, O), t2.$i = true), O;
    }, O.locale = w, O.isDayjs = S, O.unix = function(t2) {
      return O(1e3 * t2);
    }, O.en = D[g], O.Ls = D, O.p = {}, O;
  });
})(dayjs_min);
var dayjs_minExports = dayjs_min.exports;
const dayjs = /* @__PURE__ */ getDefaultExportFromCjs(dayjs_minExports);
var Meridiem;
(function(Meridiem2) {
  Meridiem2[Meridiem2["AM"] = 0] = "AM";
  Meridiem2[Meridiem2["PM"] = 1] = "PM";
})(Meridiem || (Meridiem = {}));
var Weekday;
(function(Weekday2) {
  Weekday2[Weekday2["SUNDAY"] = 0] = "SUNDAY";
  Weekday2[Weekday2["MONDAY"] = 1] = "MONDAY";
  Weekday2[Weekday2["TUESDAY"] = 2] = "TUESDAY";
  Weekday2[Weekday2["WEDNESDAY"] = 3] = "WEDNESDAY";
  Weekday2[Weekday2["THURSDAY"] = 4] = "THURSDAY";
  Weekday2[Weekday2["FRIDAY"] = 5] = "FRIDAY";
  Weekday2[Weekday2["SATURDAY"] = 6] = "SATURDAY";
})(Weekday || (Weekday = {}));
var Month;
(function(Month2) {
  Month2[Month2["JANUARY"] = 1] = "JANUARY";
  Month2[Month2["FEBRUARY"] = 2] = "FEBRUARY";
  Month2[Month2["MARCH"] = 3] = "MARCH";
  Month2[Month2["APRIL"] = 4] = "APRIL";
  Month2[Month2["MAY"] = 5] = "MAY";
  Month2[Month2["JUNE"] = 6] = "JUNE";
  Month2[Month2["JULY"] = 7] = "JULY";
  Month2[Month2["AUGUST"] = 8] = "AUGUST";
  Month2[Month2["SEPTEMBER"] = 9] = "SEPTEMBER";
  Month2[Month2["OCTOBER"] = 10] = "OCTOBER";
  Month2[Month2["NOVEMBER"] = 11] = "NOVEMBER";
  Month2[Month2["DECEMBER"] = 12] = "DECEMBER";
})(Month || (Month = {}));
function assignTheNextDay(component, targetDayJs) {
  targetDayJs = targetDayJs.add(1, "day");
  assignSimilarDate(component, targetDayJs);
  implySimilarTime(component, targetDayJs);
}
function implyTheNextDay(component, targetDayJs) {
  targetDayJs = targetDayJs.add(1, "day");
  implySimilarDate(component, targetDayJs);
  implySimilarTime(component, targetDayJs);
}
function assignSimilarDate(component, targetDayJs) {
  component.assign("day", targetDayJs.date());
  component.assign("month", targetDayJs.month() + 1);
  component.assign("year", targetDayJs.year());
}
function assignSimilarTime(component, targetDayJs) {
  component.assign("hour", targetDayJs.hour());
  component.assign("minute", targetDayJs.minute());
  component.assign("second", targetDayJs.second());
  component.assign("millisecond", targetDayJs.millisecond());
  if (component.get("hour") < 12) {
    component.assign("meridiem", Meridiem.AM);
  } else {
    component.assign("meridiem", Meridiem.PM);
  }
}
function implySimilarDate(component, targetDayJs) {
  component.imply("day", targetDayJs.date());
  component.imply("month", targetDayJs.month() + 1);
  component.imply("year", targetDayJs.year());
}
function implySimilarTime(component, targetDayJs) {
  component.imply("hour", targetDayJs.hour());
  component.imply("minute", targetDayJs.minute());
  component.imply("second", targetDayJs.second());
  component.imply("millisecond", targetDayJs.millisecond());
}
const TIMEZONE_ABBR_MAP = {
  ACDT: 630,
  ACST: 570,
  ADT: -180,
  AEDT: 660,
  AEST: 600,
  AFT: 270,
  AKDT: -480,
  AKST: -540,
  ALMT: 360,
  AMST: -180,
  AMT: -240,
  ANAST: 720,
  ANAT: 720,
  AQTT: 300,
  ART: -180,
  AST: -240,
  AWDT: 540,
  AWST: 480,
  AZOST: 0,
  AZOT: -60,
  AZST: 300,
  AZT: 240,
  BNT: 480,
  BOT: -240,
  BRST: -120,
  BRT: -180,
  BST: 60,
  BTT: 360,
  CAST: 480,
  CAT: 120,
  CCT: 390,
  CDT: -300,
  CEST: 120,
  CET: {
    timezoneOffsetDuringDst: 2 * 60,
    timezoneOffsetNonDst: 60,
    dstStart: (year2) => getLastWeekdayOfMonth(year2, Month.MARCH, Weekday.SUNDAY, 2),
    dstEnd: (year2) => getLastWeekdayOfMonth(year2, Month.OCTOBER, Weekday.SUNDAY, 3)
  },
  CHADT: 825,
  CHAST: 765,
  CKT: -600,
  CLST: -180,
  CLT: -240,
  COT: -300,
  CST: -360,
  CT: {
    timezoneOffsetDuringDst: -5 * 60,
    timezoneOffsetNonDst: -6 * 60,
    dstStart: (year2) => getNthWeekdayOfMonth(year2, Month.MARCH, Weekday.SUNDAY, 2, 2),
    dstEnd: (year2) => getNthWeekdayOfMonth(year2, Month.NOVEMBER, Weekday.SUNDAY, 1, 2)
  },
  CVT: -60,
  CXT: 420,
  ChST: 600,
  DAVT: 420,
  EASST: -300,
  EAST: -360,
  EAT: 180,
  ECT: -300,
  EDT: -240,
  EEST: 180,
  EET: 120,
  EGST: 0,
  EGT: -60,
  EST: -300,
  ET: {
    timezoneOffsetDuringDst: -4 * 60,
    timezoneOffsetNonDst: -5 * 60,
    dstStart: (year2) => getNthWeekdayOfMonth(year2, Month.MARCH, Weekday.SUNDAY, 2, 2),
    dstEnd: (year2) => getNthWeekdayOfMonth(year2, Month.NOVEMBER, Weekday.SUNDAY, 1, 2)
  },
  FJST: 780,
  FJT: 720,
  FKST: -180,
  FKT: -240,
  FNT: -120,
  GALT: -360,
  GAMT: -540,
  GET: 240,
  GFT: -180,
  GILT: 720,
  GMT: 0,
  GST: 240,
  GYT: -240,
  HAA: -180,
  HAC: -300,
  HADT: -540,
  HAE: -240,
  HAP: -420,
  HAR: -360,
  HAST: -600,
  HAT: -90,
  HAY: -480,
  HKT: 480,
  HLV: -210,
  HNA: -240,
  HNC: -360,
  HNE: -300,
  HNP: -480,
  HNR: -420,
  HNT: -150,
  HNY: -540,
  HOVT: 420,
  ICT: 420,
  IDT: 180,
  IOT: 360,
  IRDT: 270,
  IRKST: 540,
  IRKT: 540,
  IRST: 210,
  IST: 330,
  JST: 540,
  KGT: 360,
  KRAST: 480,
  KRAT: 480,
  KST: 540,
  KUYT: 240,
  LHDT: 660,
  LHST: 630,
  LINT: 840,
  MAGST: 720,
  MAGT: 720,
  MART: -510,
  MAWT: 300,
  MDT: -360,
  MESZ: 120,
  MEZ: 60,
  MHT: 720,
  MMT: 390,
  MSD: 240,
  MSK: 180,
  MST: -420,
  MT: {
    timezoneOffsetDuringDst: -6 * 60,
    timezoneOffsetNonDst: -7 * 60,
    dstStart: (year2) => getNthWeekdayOfMonth(year2, Month.MARCH, Weekday.SUNDAY, 2, 2),
    dstEnd: (year2) => getNthWeekdayOfMonth(year2, Month.NOVEMBER, Weekday.SUNDAY, 1, 2)
  },
  MUT: 240,
  MVT: 300,
  MYT: 480,
  NCT: 660,
  NDT: -90,
  NFT: 690,
  NOVST: 420,
  NOVT: 360,
  NPT: 345,
  NST: -150,
  NUT: -660,
  NZDT: 780,
  NZST: 720,
  OMSST: 420,
  OMST: 420,
  PDT: -420,
  PET: -300,
  PETST: 720,
  PETT: 720,
  PGT: 600,
  PHOT: 780,
  PHT: 480,
  PKT: 300,
  PMDT: -120,
  PMST: -180,
  PONT: 660,
  PST: -480,
  PT: {
    timezoneOffsetDuringDst: -7 * 60,
    timezoneOffsetNonDst: -8 * 60,
    dstStart: (year2) => getNthWeekdayOfMonth(year2, Month.MARCH, Weekday.SUNDAY, 2, 2),
    dstEnd: (year2) => getNthWeekdayOfMonth(year2, Month.NOVEMBER, Weekday.SUNDAY, 1, 2)
  },
  PWT: 540,
  PYST: -180,
  PYT: -240,
  RET: 240,
  SAMT: 240,
  SAST: 120,
  SBT: 660,
  SCT: 240,
  SGT: 480,
  SRT: -180,
  SST: -660,
  TAHT: -600,
  TFT: 300,
  TJT: 300,
  TKT: 780,
  TLT: 540,
  TMT: 300,
  TVT: 720,
  ULAT: 480,
  UTC: 0,
  UYST: -120,
  UYT: -180,
  UZT: 300,
  VET: -210,
  VLAST: 660,
  VLAT: 660,
  VUT: 660,
  WAST: 120,
  WAT: 60,
  WEST: 60,
  WESZ: 60,
  WET: 0,
  WEZ: 0,
  WFT: 720,
  WGST: -120,
  WGT: -180,
  WIB: 420,
  WIT: 540,
  WITA: 480,
  WST: 780,
  WT: 0,
  YAKST: 600,
  YAKT: 600,
  YAPT: 600,
  YEKST: 360,
  YEKT: 360
};
function getNthWeekdayOfMonth(year2, month, weekday, n, hour = 0) {
  let dayOfMonth = 0;
  let i = 0;
  while (i < n) {
    dayOfMonth++;
    const date = new Date(year2, month - 1, dayOfMonth);
    if (date.getDay() === weekday)
      i++;
  }
  return new Date(year2, month - 1, dayOfMonth, hour);
}
function getLastWeekdayOfMonth(year2, month, weekday, hour = 0) {
  const oneIndexedWeekday = weekday === 0 ? 7 : weekday;
  const date = new Date(year2, month - 1 + 1, 1, 12);
  const firstWeekdayNextMonth = date.getDay() === 0 ? 7 : date.getDay();
  let dayDiff;
  if (firstWeekdayNextMonth === oneIndexedWeekday)
    dayDiff = 7;
  else if (firstWeekdayNextMonth < oneIndexedWeekday)
    dayDiff = 7 + firstWeekdayNextMonth - oneIndexedWeekday;
  else
    dayDiff = firstWeekdayNextMonth - oneIndexedWeekday;
  date.setDate(date.getDate() - dayDiff);
  return new Date(year2, month - 1, date.getDate(), hour);
}
function toTimezoneOffset(timezoneInput, date, timezoneOverrides = {}) {
  if (timezoneInput == null) {
    return null;
  }
  if (typeof timezoneInput === "number") {
    return timezoneInput;
  }
  const matchedTimezone = timezoneOverrides[timezoneInput] ?? TIMEZONE_ABBR_MAP[timezoneInput];
  if (matchedTimezone == null) {
    return null;
  }
  if (typeof matchedTimezone == "number") {
    return matchedTimezone;
  }
  if (date == null) {
    return null;
  }
  if (dayjs(date).isAfter(matchedTimezone.dstStart(date.getFullYear())) && !dayjs(date).isAfter(matchedTimezone.dstEnd(date.getFullYear()))) {
    return matchedTimezone.timezoneOffsetDuringDst;
  }
  return matchedTimezone.timezoneOffsetNonDst;
}
dayjs.extend(quarterOfYear);
class ReferenceWithTimezone {
  constructor(input) {
    input = input ?? /* @__PURE__ */ new Date();
    if (input instanceof Date) {
      this.instant = input;
    } else {
      this.instant = input.instant ?? /* @__PURE__ */ new Date();
      this.timezoneOffset = toTimezoneOffset(input.timezone, this.instant);
    }
  }
  getDateWithAdjustedTimezone() {
    return new Date(this.instant.getTime() + this.getSystemTimezoneAdjustmentMinute(this.instant) * 6e4);
  }
  getSystemTimezoneAdjustmentMinute(date, overrideTimezoneOffset) {
    if (!date || date.getTime() < 0) {
      date = /* @__PURE__ */ new Date();
    }
    const currentTimezoneOffset = -date.getTimezoneOffset();
    const targetTimezoneOffset = overrideTimezoneOffset ?? this.timezoneOffset ?? currentTimezoneOffset;
    return currentTimezoneOffset - targetTimezoneOffset;
  }
}
class ParsingComponents {
  constructor(reference, knownComponents) {
    this.reference = reference;
    this.knownValues = {};
    this.impliedValues = {};
    if (knownComponents) {
      for (const key in knownComponents) {
        this.knownValues[key] = knownComponents[key];
      }
    }
    const refDayJs = dayjs(reference.instant);
    this.imply("day", refDayJs.date());
    this.imply("month", refDayJs.month() + 1);
    this.imply("year", refDayJs.year());
    this.imply("hour", 12);
    this.imply("minute", 0);
    this.imply("second", 0);
    this.imply("millisecond", 0);
  }
  get(component) {
    if (component in this.knownValues) {
      return this.knownValues[component];
    }
    if (component in this.impliedValues) {
      return this.impliedValues[component];
    }
    return null;
  }
  isCertain(component) {
    return component in this.knownValues;
  }
  getCertainComponents() {
    return Object.keys(this.knownValues);
  }
  imply(component, value) {
    if (component in this.knownValues) {
      return this;
    }
    this.impliedValues[component] = value;
    return this;
  }
  assign(component, value) {
    this.knownValues[component] = value;
    delete this.impliedValues[component];
    return this;
  }
  delete(component) {
    delete this.knownValues[component];
    delete this.impliedValues[component];
  }
  clone() {
    const component = new ParsingComponents(this.reference);
    component.knownValues = {};
    component.impliedValues = {};
    for (const key in this.knownValues) {
      component.knownValues[key] = this.knownValues[key];
    }
    for (const key in this.impliedValues) {
      component.impliedValues[key] = this.impliedValues[key];
    }
    return component;
  }
  isOnlyDate() {
    return !this.isCertain("hour") && !this.isCertain("minute") && !this.isCertain("second");
  }
  isOnlyTime() {
    return !this.isCertain("weekday") && !this.isCertain("day") && !this.isCertain("month");
  }
  isOnlyWeekdayComponent() {
    return this.isCertain("weekday") && !this.isCertain("day") && !this.isCertain("month");
  }
  isDateWithUnknownYear() {
    return this.isCertain("month") && !this.isCertain("year");
  }
  isValidDate() {
    const date = this.dateWithoutTimezoneAdjustment();
    if (date.getFullYear() !== this.get("year"))
      return false;
    if (date.getMonth() !== this.get("month") - 1)
      return false;
    if (date.getDate() !== this.get("day"))
      return false;
    if (this.get("hour") != null && date.getHours() != this.get("hour"))
      return false;
    if (this.get("minute") != null && date.getMinutes() != this.get("minute"))
      return false;
    return true;
  }
  toString() {
    return `[ParsingComponents {knownValues: ${JSON.stringify(this.knownValues)}, impliedValues: ${JSON.stringify(this.impliedValues)}}, reference: ${JSON.stringify(this.reference)}]`;
  }
  dayjs() {
    return dayjs(this.date());
  }
  date() {
    const date = this.dateWithoutTimezoneAdjustment();
    const timezoneAdjustment = this.reference.getSystemTimezoneAdjustmentMinute(date, this.get("timezoneOffset"));
    return new Date(date.getTime() + timezoneAdjustment * 6e4);
  }
  dateWithoutTimezoneAdjustment() {
    const date = new Date(this.get("year"), this.get("month") - 1, this.get("day"), this.get("hour"), this.get("minute"), this.get("second"), this.get("millisecond"));
    date.setFullYear(this.get("year"));
    return date;
  }
  static createRelativeFromReference(reference, fragments) {
    let date = dayjs(reference.instant);
    for (const key in fragments) {
      date = date.add(fragments[key], key);
    }
    const components = new ParsingComponents(reference);
    if (fragments["hour"] || fragments["minute"] || fragments["second"]) {
      assignSimilarTime(components, date);
      assignSimilarDate(components, date);
      if (reference.timezoneOffset !== null) {
        components.assign("timezoneOffset", -reference.instant.getTimezoneOffset());
      }
    } else {
      implySimilarTime(components, date);
      if (reference.timezoneOffset !== null) {
        components.imply("timezoneOffset", -reference.instant.getTimezoneOffset());
      }
      if (fragments["d"]) {
        components.assign("day", date.date());
        components.assign("month", date.month() + 1);
        components.assign("year", date.year());
      } else {
        if (fragments["week"]) {
          components.imply("weekday", date.day());
        }
        components.imply("day", date.date());
        if (fragments["month"]) {
          components.assign("month", date.month() + 1);
          components.assign("year", date.year());
        } else {
          components.imply("month", date.month() + 1);
          if (fragments["year"]) {
            components.assign("year", date.year());
          } else {
            components.imply("year", date.year());
          }
        }
      }
    }
    return components;
  }
}
class ParsingResult {
  constructor(reference, index2, text, start, end) {
    this.reference = reference;
    this.refDate = reference.instant;
    this.index = index2;
    this.text = text;
    this.start = start || new ParsingComponents(reference);
    this.end = end;
  }
  clone() {
    const result = new ParsingResult(this.reference, this.index, this.text);
    result.start = this.start ? this.start.clone() : null;
    result.end = this.end ? this.end.clone() : null;
    return result;
  }
  date() {
    return this.start.date();
  }
  toString() {
    return `[ParsingResult {index: ${this.index}, text: '${this.text}', ...}]`;
  }
}
function repeatedTimeunitPattern(prefix, singleTimeunitPattern) {
  const singleTimeunitPatternNoCapture = singleTimeunitPattern.replace(/\((?!\?)/g, "(?:");
  return `${prefix}${singleTimeunitPatternNoCapture}\\s{0,5}(?:,?\\s{0,5}${singleTimeunitPatternNoCapture}){0,10}`;
}
function extractTerms(dictionary) {
  let keys;
  if (dictionary instanceof Array) {
    keys = [...dictionary];
  } else if (dictionary instanceof Map) {
    keys = Array.from(dictionary.keys());
  } else {
    keys = Object.keys(dictionary);
  }
  return keys;
}
function matchAnyPattern(dictionary) {
  const joinedTerms = extractTerms(dictionary).sort((a, b) => b.length - a.length).join("|").replace(/\./g, "\\.");
  return `(?:${joinedTerms})`;
}
function findMostLikelyADYear(yearNumber) {
  if (yearNumber < 100) {
    if (yearNumber > 50) {
      yearNumber = yearNumber + 1900;
    } else {
      yearNumber = yearNumber + 2e3;
    }
  }
  return yearNumber;
}
function findYearClosestToRef(refDate, day, month) {
  const refMoment = dayjs(refDate);
  let dateMoment = refMoment;
  dateMoment = dateMoment.month(month - 1);
  dateMoment = dateMoment.date(day);
  dateMoment = dateMoment.year(refMoment.year());
  const nextYear = dateMoment.add(1, "y");
  const lastYear = dateMoment.add(-1, "y");
  if (Math.abs(nextYear.diff(refMoment)) < Math.abs(dateMoment.diff(refMoment))) {
    dateMoment = nextYear;
  } else if (Math.abs(lastYear.diff(refMoment)) < Math.abs(dateMoment.diff(refMoment))) {
    dateMoment = lastYear;
  }
  return dateMoment.year();
}
const WEEKDAY_DICTIONARY$7 = {
  sunday: 0,
  sun: 0,
  "sun.": 0,
  monday: 1,
  mon: 1,
  "mon.": 1,
  tuesday: 2,
  tue: 2,
  "tue.": 2,
  wednesday: 3,
  wed: 3,
  "wed.": 3,
  thursday: 4,
  thurs: 4,
  "thurs.": 4,
  thur: 4,
  "thur.": 4,
  thu: 4,
  "thu.": 4,
  friday: 5,
  fri: 5,
  "fri.": 5,
  saturday: 6,
  sat: 6,
  "sat.": 6
};
const FULL_MONTH_NAME_DICTIONARY$2 = {
  january: 1,
  february: 2,
  march: 3,
  april: 4,
  may: 5,
  june: 6,
  july: 7,
  august: 8,
  september: 9,
  october: 10,
  november: 11,
  december: 12
};
const MONTH_DICTIONARY$7 = {
  ...FULL_MONTH_NAME_DICTIONARY$2,
  jan: 1,
  "jan.": 1,
  feb: 2,
  "feb.": 2,
  mar: 3,
  "mar.": 3,
  apr: 4,
  "apr.": 4,
  jun: 6,
  "jun.": 6,
  jul: 7,
  "jul.": 7,
  aug: 8,
  "aug.": 8,
  sep: 9,
  "sep.": 9,
  sept: 9,
  "sept.": 9,
  oct: 10,
  "oct.": 10,
  nov: 11,
  "nov.": 11,
  dec: 12,
  "dec.": 12
};
const INTEGER_WORD_DICTIONARY$6 = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12
};
const ORDINAL_WORD_DICTIONARY$3 = {
  first: 1,
  second: 2,
  third: 3,
  fourth: 4,
  fifth: 5,
  sixth: 6,
  seventh: 7,
  eighth: 8,
  ninth: 9,
  tenth: 10,
  eleventh: 11,
  twelfth: 12,
  thirteenth: 13,
  fourteenth: 14,
  fifteenth: 15,
  sixteenth: 16,
  seventeenth: 17,
  eighteenth: 18,
  nineteenth: 19,
  twentieth: 20,
  "twenty first": 21,
  "twenty-first": 21,
  "twenty second": 22,
  "twenty-second": 22,
  "twenty third": 23,
  "twenty-third": 23,
  "twenty fourth": 24,
  "twenty-fourth": 24,
  "twenty fifth": 25,
  "twenty-fifth": 25,
  "twenty sixth": 26,
  "twenty-sixth": 26,
  "twenty seventh": 27,
  "twenty-seventh": 27,
  "twenty eighth": 28,
  "twenty-eighth": 28,
  "twenty ninth": 29,
  "twenty-ninth": 29,
  "thirtieth": 30,
  "thirty first": 31,
  "thirty-first": 31
};
const TIME_UNIT_DICTIONARY_NO_ABBR = {
  second: "second",
  seconds: "second",
  minute: "minute",
  minutes: "minute",
  hour: "hour",
  hours: "hour",
  day: "d",
  days: "d",
  week: "week",
  weeks: "week",
  month: "month",
  months: "month",
  quarter: "quarter",
  quarters: "quarter",
  year: "year",
  years: "year"
};
const TIME_UNIT_DICTIONARY$6 = {
  s: "second",
  sec: "second",
  second: "second",
  seconds: "second",
  m: "minute",
  min: "minute",
  mins: "minute",
  minute: "minute",
  minutes: "minute",
  h: "hour",
  hr: "hour",
  hrs: "hour",
  hour: "hour",
  hours: "hour",
  d: "d",
  day: "d",
  days: "d",
  w: "w",
  week: "week",
  weeks: "week",
  mo: "month",
  mon: "month",
  mos: "month",
  month: "month",
  months: "month",
  qtr: "quarter",
  quarter: "quarter",
  quarters: "quarter",
  y: "year",
  yr: "year",
  year: "year",
  years: "year",
  ...TIME_UNIT_DICTIONARY_NO_ABBR
};
const NUMBER_PATTERN$6 = `(?:${matchAnyPattern(INTEGER_WORD_DICTIONARY$6)}|[0-9]+|[0-9]+\\.[0-9]+|half(?:\\s{0,2}an?)?|an?\\b(?:\\s{0,2}few)?|few|several|the|a?\\s{0,2}couple\\s{0,2}(?:of)?)`;
function parseNumberPattern$6(match) {
  const num = match.toLowerCase();
  if (INTEGER_WORD_DICTIONARY$6[num] !== void 0) {
    return INTEGER_WORD_DICTIONARY$6[num];
  } else if (num === "a" || num === "an" || num == "the") {
    return 1;
  } else if (num.match(/few/)) {
    return 3;
  } else if (num.match(/half/)) {
    return 0.5;
  } else if (num.match(/couple/)) {
    return 2;
  } else if (num.match(/several/)) {
    return 7;
  }
  return parseFloat(num);
}
const ORDINAL_NUMBER_PATTERN$4 = `(?:${matchAnyPattern(ORDINAL_WORD_DICTIONARY$3)}|[0-9]{1,2}(?:st|nd|rd|th)?)`;
function parseOrdinalNumberPattern$4(match) {
  let num = match.toLowerCase();
  if (ORDINAL_WORD_DICTIONARY$3[num] !== void 0) {
    return ORDINAL_WORD_DICTIONARY$3[num];
  }
  num = num.replace(/(?:st|nd|rd|th)$/i, "");
  return parseInt(num);
}
const YEAR_PATTERN$7 = `(?:[1-9][0-9]{0,3}\\s{0,2}(?:BE|AD|BC|BCE|CE)|[1-2][0-9]{3}|[5-9][0-9])`;
function parseYear$6(match) {
  if (/BE/i.test(match)) {
    match = match.replace(/BE/i, "");
    return parseInt(match) - 543;
  }
  if (/BCE?/i.test(match)) {
    match = match.replace(/BCE?/i, "");
    return -parseInt(match);
  }
  if (/(AD|CE)/i.test(match)) {
    match = match.replace(/(AD|CE)/i, "");
    return parseInt(match);
  }
  const rawYearNumber = parseInt(match);
  return findMostLikelyADYear(rawYearNumber);
}
const SINGLE_TIME_UNIT_PATTERN$6 = `(${NUMBER_PATTERN$6})\\s{0,3}(${matchAnyPattern(TIME_UNIT_DICTIONARY$6)})`;
const SINGLE_TIME_UNIT_REGEX$6 = new RegExp(SINGLE_TIME_UNIT_PATTERN$6, "i");
const SINGLE_TIME_UNIT_NO_ABBR_PATTERN = `(${NUMBER_PATTERN$6})\\s{0,3}(${matchAnyPattern(TIME_UNIT_DICTIONARY_NO_ABBR)})`;
const TIME_UNITS_PATTERN$6 = repeatedTimeunitPattern(`(?:(?:about|around)\\s{0,3})?`, SINGLE_TIME_UNIT_PATTERN$6);
const TIME_UNITS_NO_ABBR_PATTERN = repeatedTimeunitPattern(`(?:(?:about|around)\\s{0,3})?`, SINGLE_TIME_UNIT_NO_ABBR_PATTERN);
function parseTimeUnits$6(timeunitText) {
  const fragments = {};
  let remainingText = timeunitText;
  let match = SINGLE_TIME_UNIT_REGEX$6.exec(remainingText);
  while (match) {
    collectDateTimeFragment$6(fragments, match);
    remainingText = remainingText.substring(match[0].length).trim();
    match = SINGLE_TIME_UNIT_REGEX$6.exec(remainingText);
  }
  return fragments;
}
function collectDateTimeFragment$6(fragments, match) {
  const num = parseNumberPattern$6(match[1]);
  const unit = TIME_UNIT_DICTIONARY$6[match[2].toLowerCase()];
  fragments[unit] = num;
}
class AbstractParserWithWordBoundaryChecking {
  constructor() {
    this.cachedInnerPattern = null;
    this.cachedPattern = null;
  }
  patternLeftBoundary() {
    return `(\\W|^)`;
  }
  pattern(context) {
    const innerPattern = this.innerPattern(context);
    if (innerPattern == this.cachedInnerPattern) {
      return this.cachedPattern;
    }
    this.cachedPattern = new RegExp(`${this.patternLeftBoundary()}${innerPattern.source}`, innerPattern.flags);
    this.cachedInnerPattern = innerPattern;
    return this.cachedPattern;
  }
  extract(context, match) {
    const header = match[1] ?? "";
    match.index = match.index + header.length;
    match[0] = match[0].substring(header.length);
    for (let i = 2; i < match.length; i++) {
      match[i - 1] = match[i];
    }
    return this.innerExtract(context, match);
  }
}
const PATTERN_WITHOUT_PREFIX$2 = new RegExp(`(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${TIME_UNITS_PATTERN$6})(?=\\W|$)`, "i");
const PATTERN_WITH_PREFIX$2 = new RegExp(`(?:within|in|for)\\s*(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${TIME_UNITS_PATTERN$6})(?=\\W|$)`, "i");
const PATTERN_WITH_PREFIX_STRICT = new RegExp(`(?:within|in|for)\\s*(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${TIME_UNITS_NO_ABBR_PATTERN})(?=\\W|$)`, "i");
class ENTimeUnitWithinFormatParser extends AbstractParserWithWordBoundaryChecking {
  constructor(strictMode) {
    super();
    this.strictMode = strictMode;
  }
  innerPattern(context) {
    if (this.strictMode) {
      return PATTERN_WITH_PREFIX_STRICT;
    }
    return context.option.forwardDate ? PATTERN_WITHOUT_PREFIX$2 : PATTERN_WITH_PREFIX$2;
  }
  innerExtract(context, match) {
    const timeUnits = parseTimeUnits$6(match[1]);
    return ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
  }
}
const PATTERN$V = new RegExp(`(?:on\\s{0,3})?(${ORDINAL_NUMBER_PATTERN$4})(?:\\s{0,3}(?:to|\\-|\\–|until|through|till)?\\s{0,3}(${ORDINAL_NUMBER_PATTERN$4}))?(?:-|/|\\s{0,3}(?:of)?\\s{0,3})(${matchAnyPattern(MONTH_DICTIONARY$7)})(?:(?:-|/|,?\\s{0,3})(${YEAR_PATTERN$7}(?![^\\s]\\d)))?(?=\\W|$)`, "i");
const DATE_GROUP$a = 1;
const DATE_TO_GROUP$8 = 2;
const MONTH_NAME_GROUP$e = 3;
const YEAR_GROUP$h = 4;
class ENMonthNameLittleEndianParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN$V;
  }
  innerExtract(context, match) {
    const result = context.createParsingResult(match.index, match[0]);
    const month = MONTH_DICTIONARY$7[match[MONTH_NAME_GROUP$e].toLowerCase()];
    const day = parseOrdinalNumberPattern$4(match[DATE_GROUP$a]);
    if (day > 31) {
      match.index = match.index + match[DATE_GROUP$a].length;
      return null;
    }
    result.start.assign("month", month);
    result.start.assign("day", day);
    if (match[YEAR_GROUP$h]) {
      const yearNumber = parseYear$6(match[YEAR_GROUP$h]);
      result.start.assign("year", yearNumber);
    } else {
      const year2 = findYearClosestToRef(context.refDate, day, month);
      result.start.imply("year", year2);
    }
    if (match[DATE_TO_GROUP$8]) {
      const endDate = parseOrdinalNumberPattern$4(match[DATE_TO_GROUP$8]);
      result.end = result.start.clone();
      result.end.assign("day", endDate);
    }
    return result;
  }
}
const PATTERN$U = new RegExp(`(${matchAnyPattern(MONTH_DICTIONARY$7)})(?:-|/|\\s*,?\\s*)(${ORDINAL_NUMBER_PATTERN$4})(?!\\s*(?:am|pm))\\s*(?:(?:to|\\-)\\s*(${ORDINAL_NUMBER_PATTERN$4})\\s*)?(?:(?:-|/|\\s*,?\\s*)(${YEAR_PATTERN$7}))?(?=\\W|$)(?!\\:\\d)`, "i");
const MONTH_NAME_GROUP$d = 1;
const DATE_GROUP$9 = 2;
const DATE_TO_GROUP$7 = 3;
const YEAR_GROUP$g = 4;
class ENMonthNameMiddleEndianParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN$U;
  }
  innerExtract(context, match) {
    const month = MONTH_DICTIONARY$7[match[MONTH_NAME_GROUP$d].toLowerCase()];
    const day = parseOrdinalNumberPattern$4(match[DATE_GROUP$9]);
    if (day > 31) {
      return null;
    }
    const components = context.createParsingComponents({
      day,
      month
    });
    if (match[YEAR_GROUP$g]) {
      const year2 = parseYear$6(match[YEAR_GROUP$g]);
      components.assign("year", year2);
    } else {
      const year2 = findYearClosestToRef(context.refDate, day, month);
      components.imply("year", year2);
    }
    if (!match[DATE_TO_GROUP$7]) {
      return components;
    }
    const endDate = parseOrdinalNumberPattern$4(match[DATE_TO_GROUP$7]);
    const result = context.createParsingResult(match.index, match[0]);
    result.start = components;
    result.end = components.clone();
    result.end.assign("day", endDate);
    return result;
  }
}
const PATTERN$T = new RegExp(`((?:in)\\s*)?(${matchAnyPattern(MONTH_DICTIONARY$7)})\\s*(?:[,-]?\\s*(${YEAR_PATTERN$7})?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)`, "i");
const PREFIX_GROUP$7 = 1;
const MONTH_NAME_GROUP$c = 2;
const YEAR_GROUP$f = 3;
class ENMonthNameParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN$T;
  }
  innerExtract(context, match) {
    const monthName = match[MONTH_NAME_GROUP$c].toLowerCase();
    if (match[0].length <= 3 && !FULL_MONTH_NAME_DICTIONARY$2[monthName]) {
      return null;
    }
    const result = context.createParsingResult(match.index + (match[PREFIX_GROUP$7] || "").length, match.index + match[0].length);
    result.start.imply("day", 1);
    const month = MONTH_DICTIONARY$7[monthName];
    result.start.assign("month", month);
    if (match[YEAR_GROUP$f]) {
      const year2 = parseYear$6(match[YEAR_GROUP$f]);
      result.start.assign("year", year2);
    } else {
      const year2 = findYearClosestToRef(context.refDate, 1, month);
      result.start.imply("year", year2);
    }
    return result;
  }
}
const PATTERN$S = new RegExp(`([0-9]{4})[\\.\\/\\s](?:(${matchAnyPattern(MONTH_DICTIONARY$7)})|([0-9]{1,2}))[\\.\\/\\s]([0-9]{1,2})(?=\\W|$)`, "i");
const YEAR_NUMBER_GROUP$3 = 1;
const MONTH_NAME_GROUP$b = 2;
const MONTH_NUMBER_GROUP$2 = 3;
const DATE_NUMBER_GROUP$2 = 4;
class ENCasualYearMonthDayParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN$S;
  }
  innerExtract(context, match) {
    const month = match[MONTH_NUMBER_GROUP$2] ? parseInt(match[MONTH_NUMBER_GROUP$2]) : MONTH_DICTIONARY$7[match[MONTH_NAME_GROUP$b].toLowerCase()];
    if (month < 1 || month > 12) {
      return null;
    }
    const year2 = parseInt(match[YEAR_NUMBER_GROUP$3]);
    const day = parseInt(match[DATE_NUMBER_GROUP$2]);
    return {
      day,
      month,
      year: year2
    };
  }
}
const PATTERN$R = new RegExp("([0-9]|0[1-9]|1[012])/([0-9]{4})", "i");
const MONTH_GROUP$4 = 1;
const YEAR_GROUP$e = 2;
class ENSlashMonthFormatParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN$R;
  }
  innerExtract(context, match) {
    const year2 = parseInt(match[YEAR_GROUP$e]);
    const month = parseInt(match[MONTH_GROUP$4]);
    return context.createParsingComponents().imply("day", 1).assign("month", month).assign("year", year2);
  }
}
function primaryTimePattern(leftBoundary, primaryPrefix, primarySuffix, flags) {
  return new RegExp(`${leftBoundary}${primaryPrefix}(\\d{1,4})(?:(?:\\.|:|：)(\\d{1,2})(?:(?::|：)(\\d{2})(?:\\.(\\d{1,6}))?)?)?(?:\\s*(a\\.m\\.|p\\.m\\.|am?|pm?))?${primarySuffix}`, flags);
}
function followingTimePatten(followingPhase, followingSuffix) {
  return new RegExp(`^(${followingPhase})(\\d{1,4})(?:(?:\\.|\\:|\\：)(\\d{1,2})(?:(?:\\.|\\:|\\：)(\\d{1,2})(?:\\.(\\d{1,6}))?)?)?(?:\\s*(a\\.m\\.|p\\.m\\.|am?|pm?))?${followingSuffix}`, "i");
}
const HOUR_GROUP$4 = 2;
const MINUTE_GROUP$4 = 3;
const SECOND_GROUP$4 = 4;
const MILLI_SECOND_GROUP = 5;
const AM_PM_HOUR_GROUP$4 = 6;
class AbstractTimeExpressionParser {
  constructor(strictMode = false) {
    this.cachedPrimaryPrefix = null;
    this.cachedPrimarySuffix = null;
    this.cachedPrimaryTimePattern = null;
    this.cachedFollowingPhase = null;
    this.cachedFollowingSuffix = null;
    this.cachedFollowingTimePatten = null;
    this.strictMode = strictMode;
  }
  patternFlags() {
    return "i";
  }
  primaryPatternLeftBoundary() {
    return `(^|\\s|T|\\b)`;
  }
  primarySuffix() {
    return `(?=\\W|$)`;
  }
  followingSuffix() {
    return `(?=\\W|$)`;
  }
  pattern(context) {
    return this.getPrimaryTimePatternThroughCache();
  }
  extract(context, match) {
    const startComponents = this.extractPrimaryTimeComponents(context, match);
    if (!startComponents) {
      match.index += match[0].length;
      return null;
    }
    const index2 = match.index + match[1].length;
    const text = match[0].substring(match[1].length);
    const result = context.createParsingResult(index2, text, startComponents);
    match.index += match[0].length;
    const remainingText = context.text.substring(match.index);
    const followingPattern = this.getFollowingTimePatternThroughCache();
    const followingMatch = followingPattern.exec(remainingText);
    if (text.match(/^\d{3,4}/) && followingMatch && followingMatch[0].match(/^\s*([+-])\s*\d{2,4}$/)) {
      return null;
    }
    if (!followingMatch || followingMatch[0].match(/^\s*([+-])\s*\d{3,4}$/)) {
      return this.checkAndReturnWithoutFollowingPattern(result);
    }
    result.end = this.extractFollowingTimeComponents(context, followingMatch, result);
    if (result.end) {
      result.text += followingMatch[0];
    }
    return this.checkAndReturnWithFollowingPattern(result);
  }
  extractPrimaryTimeComponents(context, match, strict2 = false) {
    const components = context.createParsingComponents();
    let minute = 0;
    let meridiem = null;
    let hour = parseInt(match[HOUR_GROUP$4]);
    if (hour > 100) {
      if (this.strictMode || match[MINUTE_GROUP$4] != null) {
        return null;
      }
      minute = hour % 100;
      hour = Math.floor(hour / 100);
    }
    if (hour > 24) {
      return null;
    }
    if (match[MINUTE_GROUP$4] != null) {
      if (match[MINUTE_GROUP$4].length == 1 && !match[AM_PM_HOUR_GROUP$4]) {
        return null;
      }
      minute = parseInt(match[MINUTE_GROUP$4]);
    }
    if (minute >= 60) {
      return null;
    }
    if (hour > 12) {
      meridiem = Meridiem.PM;
    }
    if (match[AM_PM_HOUR_GROUP$4] != null) {
      if (hour > 12)
        return null;
      const ampm = match[AM_PM_HOUR_GROUP$4][0].toLowerCase();
      if (ampm == "a") {
        meridiem = Meridiem.AM;
        if (hour == 12) {
          hour = 0;
        }
      }
      if (ampm == "p") {
        meridiem = Meridiem.PM;
        if (hour != 12) {
          hour += 12;
        }
      }
    }
    components.assign("hour", hour);
    components.assign("minute", minute);
    if (meridiem !== null) {
      components.assign("meridiem", meridiem);
    } else {
      if (hour < 12) {
        components.imply("meridiem", Meridiem.AM);
      } else {
        components.imply("meridiem", Meridiem.PM);
      }
    }
    if (match[MILLI_SECOND_GROUP] != null) {
      const millisecond = parseInt(match[MILLI_SECOND_GROUP].substring(0, 3));
      if (millisecond >= 1e3)
        return null;
      components.assign("millisecond", millisecond);
    }
    if (match[SECOND_GROUP$4] != null) {
      const second = parseInt(match[SECOND_GROUP$4]);
      if (second >= 60)
        return null;
      components.assign("second", second);
    }
    return components;
  }
  extractFollowingTimeComponents(context, match, result) {
    const components = context.createParsingComponents();
    if (match[MILLI_SECOND_GROUP] != null) {
      const millisecond = parseInt(match[MILLI_SECOND_GROUP].substring(0, 3));
      if (millisecond >= 1e3)
        return null;
      components.assign("millisecond", millisecond);
    }
    if (match[SECOND_GROUP$4] != null) {
      const second = parseInt(match[SECOND_GROUP$4]);
      if (second >= 60)
        return null;
      components.assign("second", second);
    }
    let hour = parseInt(match[HOUR_GROUP$4]);
    let minute = 0;
    let meridiem = -1;
    if (match[MINUTE_GROUP$4] != null) {
      minute = parseInt(match[MINUTE_GROUP$4]);
    } else if (hour > 100) {
      minute = hour % 100;
      hour = Math.floor(hour / 100);
    }
    if (minute >= 60 || hour > 24) {
      return null;
    }
    if (hour >= 12) {
      meridiem = Meridiem.PM;
    }
    if (match[AM_PM_HOUR_GROUP$4] != null) {
      if (hour > 12) {
        return null;
      }
      const ampm = match[AM_PM_HOUR_GROUP$4][0].toLowerCase();
      if (ampm == "a") {
        meridiem = Meridiem.AM;
        if (hour == 12) {
          hour = 0;
          if (!components.isCertain("day")) {
            components.imply("day", components.get("day") + 1);
          }
        }
      }
      if (ampm == "p") {
        meridiem = Meridiem.PM;
        if (hour != 12)
          hour += 12;
      }
      if (!result.start.isCertain("meridiem")) {
        if (meridiem == Meridiem.AM) {
          result.start.imply("meridiem", Meridiem.AM);
          if (result.start.get("hour") == 12) {
            result.start.assign("hour", 0);
          }
        } else {
          result.start.imply("meridiem", Meridiem.PM);
          if (result.start.get("hour") != 12) {
            result.start.assign("hour", result.start.get("hour") + 12);
          }
        }
      }
    }
    components.assign("hour", hour);
    components.assign("minute", minute);
    if (meridiem >= 0) {
      components.assign("meridiem", meridiem);
    } else {
      const startAtPM = result.start.isCertain("meridiem") && result.start.get("hour") > 12;
      if (startAtPM) {
        if (result.start.get("hour") - 12 > hour) {
          components.imply("meridiem", Meridiem.AM);
        } else if (hour <= 12) {
          components.assign("hour", hour + 12);
          components.assign("meridiem", Meridiem.PM);
        }
      } else if (hour > 12) {
        components.imply("meridiem", Meridiem.PM);
      } else if (hour <= 12) {
        components.imply("meridiem", Meridiem.AM);
      }
    }
    if (components.date().getTime() < result.start.date().getTime()) {
      components.imply("day", components.get("day") + 1);
    }
    return components;
  }
  checkAndReturnWithoutFollowingPattern(result) {
    if (result.text.match(/^\d$/)) {
      return null;
    }
    if (result.text.match(/^\d\d\d+$/)) {
      return null;
    }
    if (result.text.match(/\d[apAP]$/)) {
      return null;
    }
    const endingWithNumbers = result.text.match(/[^\d:.](\d[\d.]+)$/);
    if (endingWithNumbers) {
      const endingNumbers = endingWithNumbers[1];
      if (this.strictMode) {
        return null;
      }
      if (endingNumbers.includes(".") && !endingNumbers.match(/\d(\.\d{2})+$/)) {
        return null;
      }
      const endingNumberVal = parseInt(endingNumbers);
      if (endingNumberVal > 24) {
        return null;
      }
    }
    return result;
  }
  checkAndReturnWithFollowingPattern(result) {
    if (result.text.match(/^\d+-\d+$/)) {
      return null;
    }
    const endingWithNumbers = result.text.match(/[^\d:.](\d[\d.]+)\s*-\s*(\d[\d.]+)$/);
    if (endingWithNumbers) {
      if (this.strictMode) {
        return null;
      }
      const startingNumbers = endingWithNumbers[1];
      const endingNumbers = endingWithNumbers[2];
      if (endingNumbers.includes(".") && !endingNumbers.match(/\d(\.\d{2})+$/)) {
        return null;
      }
      const endingNumberVal = parseInt(endingNumbers);
      const startingNumberVal = parseInt(startingNumbers);
      if (endingNumberVal > 24 || startingNumberVal > 24) {
        return null;
      }
    }
    return result;
  }
  getPrimaryTimePatternThroughCache() {
    const primaryPrefix = this.primaryPrefix();
    const primarySuffix = this.primarySuffix();
    if (this.cachedPrimaryPrefix === primaryPrefix && this.cachedPrimarySuffix === primarySuffix) {
      return this.cachedPrimaryTimePattern;
    }
    this.cachedPrimaryTimePattern = primaryTimePattern(this.primaryPatternLeftBoundary(), primaryPrefix, primarySuffix, this.patternFlags());
    this.cachedPrimaryPrefix = primaryPrefix;
    this.cachedPrimarySuffix = primarySuffix;
    return this.cachedPrimaryTimePattern;
  }
  getFollowingTimePatternThroughCache() {
    const followingPhase = this.followingPhase();
    const followingSuffix = this.followingSuffix();
    if (this.cachedFollowingPhase === followingPhase && this.cachedFollowingSuffix === followingSuffix) {
      return this.cachedFollowingTimePatten;
    }
    this.cachedFollowingTimePatten = followingTimePatten(followingPhase, followingSuffix);
    this.cachedFollowingPhase = followingPhase;
    this.cachedFollowingSuffix = followingSuffix;
    return this.cachedFollowingTimePatten;
  }
}
class ENTimeExpressionParser extends AbstractTimeExpressionParser {
  constructor(strictMode) {
    super(strictMode);
  }
  followingPhase() {
    return "\\s*(?:\\-|\\–|\\~|\\〜|to|until|through|till|\\?)\\s*";
  }
  primaryPrefix() {
    return "(?:(?:at|from)\\s*)??";
  }
  primarySuffix() {
    return "(?:\\s*(?:o\\W*clock|at\\s*night|in\\s*the\\s*(?:morning|afternoon)))?(?!/)(?=\\W|$)";
  }
  extractPrimaryTimeComponents(context, match) {
    const components = super.extractPrimaryTimeComponents(context, match);
    if (components) {
      if (match[0].endsWith("night")) {
        const hour = components.get("hour");
        if (hour >= 6 && hour < 12) {
          components.assign("hour", components.get("hour") + 12);
          components.assign("meridiem", Meridiem.PM);
        } else if (hour < 6) {
          components.assign("meridiem", Meridiem.AM);
        }
      }
      if (match[0].endsWith("afternoon")) {
        components.assign("meridiem", Meridiem.PM);
        const hour = components.get("hour");
        if (hour >= 0 && hour <= 6) {
          components.assign("hour", components.get("hour") + 12);
        }
      }
      if (match[0].endsWith("morning")) {
        components.assign("meridiem", Meridiem.AM);
        const hour = components.get("hour");
        if (hour < 12) {
          components.assign("hour", components.get("hour"));
        }
      }
    }
    return components;
  }
}
function reverseTimeUnits(timeUnits) {
  const reversed = {};
  for (const key in timeUnits) {
    reversed[key] = -timeUnits[key];
  }
  return reversed;
}
function addImpliedTimeUnits(components, timeUnits) {
  const output = components.clone();
  let date = components.dayjs();
  for (const key in timeUnits) {
    date = date.add(timeUnits[key], key);
  }
  if ("day" in timeUnits || "d" in timeUnits || "week" in timeUnits || "month" in timeUnits || "year" in timeUnits) {
    output.imply("day", date.date());
    output.imply("month", date.month() + 1);
    output.imply("year", date.year());
  }
  if ("second" in timeUnits || "minute" in timeUnits || "hour" in timeUnits) {
    output.imply("second", date.second());
    output.imply("minute", date.minute());
    output.imply("hour", date.hour());
  }
  return output;
}
const PATTERN$Q = new RegExp(`(${TIME_UNITS_PATTERN$6})\\s{0,5}(?:ago|before|earlier)(?=\\W|$)`, "i");
const STRICT_PATTERN$3 = new RegExp(`(${TIME_UNITS_NO_ABBR_PATTERN})\\s{0,5}(?:ago|before|earlier)(?=\\W|$)`, "i");
class ENTimeUnitAgoFormatParser extends AbstractParserWithWordBoundaryChecking {
  constructor(strictMode) {
    super();
    this.strictMode = strictMode;
  }
  innerPattern() {
    return this.strictMode ? STRICT_PATTERN$3 : PATTERN$Q;
  }
  innerExtract(context, match) {
    const timeUnits = parseTimeUnits$6(match[1]);
    const outputTimeUnits = reverseTimeUnits(timeUnits);
    return ParsingComponents.createRelativeFromReference(context.reference, outputTimeUnits);
  }
}
const PATTERN$P = new RegExp(`(${TIME_UNITS_PATTERN$6})\\s{0,5}(?:later|after|from now|henceforth|forward|out)(?=(?:\\W|$))`, "i");
const STRICT_PATTERN$2 = new RegExp("(" + TIME_UNITS_NO_ABBR_PATTERN + ")(later|from now)(?=(?:\\W|$))", "i");
const GROUP_NUM_TIMEUNITS$1 = 1;
class ENTimeUnitLaterFormatParser extends AbstractParserWithWordBoundaryChecking {
  constructor(strictMode) {
    super();
    this.strictMode = strictMode;
  }
  innerPattern() {
    return this.strictMode ? STRICT_PATTERN$2 : PATTERN$P;
  }
  innerExtract(context, match) {
    const fragments = parseTimeUnits$6(match[GROUP_NUM_TIMEUNITS$1]);
    return ParsingComponents.createRelativeFromReference(context.reference, fragments);
  }
}
class Filter {
  refine(context, results) {
    return results.filter((r) => this.isValid(context, r));
  }
}
class MergingRefiner {
  refine(context, results) {
    if (results.length < 2) {
      return results;
    }
    const mergedResults = [];
    let curResult = results[0];
    let nextResult = null;
    for (let i = 1; i < results.length; i++) {
      nextResult = results[i];
      const textBetween = context.text.substring(curResult.index + curResult.text.length, nextResult.index);
      if (!this.shouldMergeResults(textBetween, curResult, nextResult, context)) {
        mergedResults.push(curResult);
        curResult = nextResult;
      } else {
        const left = curResult;
        const right = nextResult;
        const mergedResult = this.mergeResults(textBetween, left, right, context);
        context.debug(() => {
          console.log(`${this.constructor.name} merged ${left} and ${right} into ${mergedResult}`);
        });
        curResult = mergedResult;
      }
    }
    if (curResult != null) {
      mergedResults.push(curResult);
    }
    return mergedResults;
  }
}
class AbstractMergeDateRangeRefiner extends MergingRefiner {
  shouldMergeResults(textBetween, currentResult, nextResult) {
    return !currentResult.end && !nextResult.end && textBetween.match(this.patternBetween()) != null;
  }
  mergeResults(textBetween, fromResult, toResult) {
    if (!fromResult.start.isOnlyWeekdayComponent() && !toResult.start.isOnlyWeekdayComponent()) {
      toResult.start.getCertainComponents().forEach((key) => {
        if (!fromResult.start.isCertain(key)) {
          fromResult.start.imply(key, toResult.start.get(key));
        }
      });
      fromResult.start.getCertainComponents().forEach((key) => {
        if (!toResult.start.isCertain(key)) {
          toResult.start.imply(key, fromResult.start.get(key));
        }
      });
    }
    if (fromResult.start.date().getTime() > toResult.start.date().getTime()) {
      let fromMoment = fromResult.start.dayjs();
      let toMoment = toResult.start.dayjs();
      if (toResult.start.isOnlyWeekdayComponent() && toMoment.add(7, "days").isAfter(fromMoment)) {
        toMoment = toMoment.add(7, "days");
        toResult.start.imply("day", toMoment.date());
        toResult.start.imply("month", toMoment.month() + 1);
        toResult.start.imply("year", toMoment.year());
      } else if (fromResult.start.isOnlyWeekdayComponent() && fromMoment.add(-7, "days").isBefore(toMoment)) {
        fromMoment = fromMoment.add(-7, "days");
        fromResult.start.imply("day", fromMoment.date());
        fromResult.start.imply("month", fromMoment.month() + 1);
        fromResult.start.imply("year", fromMoment.year());
      } else if (toResult.start.isDateWithUnknownYear() && toMoment.add(1, "years").isAfter(fromMoment)) {
        toMoment = toMoment.add(1, "years");
        toResult.start.imply("year", toMoment.year());
      } else if (fromResult.start.isDateWithUnknownYear() && fromMoment.add(-1, "years").isBefore(toMoment)) {
        fromMoment = fromMoment.add(-1, "years");
        fromResult.start.imply("year", fromMoment.year());
      } else {
        [toResult, fromResult] = [fromResult, toResult];
      }
    }
    const result = fromResult.clone();
    result.start = fromResult.start;
    result.end = toResult.start;
    result.index = Math.min(fromResult.index, toResult.index);
    if (fromResult.index < toResult.index) {
      result.text = fromResult.text + textBetween + toResult.text;
    } else {
      result.text = toResult.text + textBetween + fromResult.text;
    }
    return result;
  }
}
class ENMergeDateRangeRefiner extends AbstractMergeDateRangeRefiner {
  patternBetween() {
    return /^\s*(to|-|–|until|through|till)\s*$/i;
  }
}
function mergeDateTimeResult(dateResult, timeResult) {
  const result = dateResult.clone();
  const beginDate = dateResult.start;
  const beginTime = timeResult.start;
  result.start = mergeDateTimeComponent(beginDate, beginTime);
  if (dateResult.end != null || timeResult.end != null) {
    const endDate = dateResult.end == null ? dateResult.start : dateResult.end;
    const endTime = timeResult.end == null ? timeResult.start : timeResult.end;
    const endDateTime = mergeDateTimeComponent(endDate, endTime);
    if (dateResult.end == null && endDateTime.date().getTime() < result.start.date().getTime()) {
      const nextDayJs = endDateTime.dayjs().add(1, "day");
      if (endDateTime.isCertain("day")) {
        assignSimilarDate(endDateTime, nextDayJs);
      } else {
        implySimilarDate(endDateTime, nextDayJs);
      }
    }
    result.end = endDateTime;
  }
  return result;
}
function mergeDateTimeComponent(dateComponent, timeComponent) {
  const dateTimeComponent = dateComponent.clone();
  if (timeComponent.isCertain("hour")) {
    dateTimeComponent.assign("hour", timeComponent.get("hour"));
    dateTimeComponent.assign("minute", timeComponent.get("minute"));
    if (timeComponent.isCertain("second")) {
      dateTimeComponent.assign("second", timeComponent.get("second"));
      if (timeComponent.isCertain("millisecond")) {
        dateTimeComponent.assign("millisecond", timeComponent.get("millisecond"));
      } else {
        dateTimeComponent.imply("millisecond", timeComponent.get("millisecond"));
      }
    } else {
      dateTimeComponent.imply("second", timeComponent.get("second"));
      dateTimeComponent.imply("millisecond", timeComponent.get("millisecond"));
    }
  } else {
    dateTimeComponent.imply("hour", timeComponent.get("hour"));
    dateTimeComponent.imply("minute", timeComponent.get("minute"));
    dateTimeComponent.imply("second", timeComponent.get("second"));
    dateTimeComponent.imply("millisecond", timeComponent.get("millisecond"));
  }
  if (timeComponent.isCertain("timezoneOffset")) {
    dateTimeComponent.assign("timezoneOffset", timeComponent.get("timezoneOffset"));
  }
  if (timeComponent.isCertain("meridiem")) {
    dateTimeComponent.assign("meridiem", timeComponent.get("meridiem"));
  } else if (timeComponent.get("meridiem") != null && dateTimeComponent.get("meridiem") == null) {
    dateTimeComponent.imply("meridiem", timeComponent.get("meridiem"));
  }
  if (dateTimeComponent.get("meridiem") == Meridiem.PM && dateTimeComponent.get("hour") < 12) {
    if (timeComponent.isCertain("hour")) {
      dateTimeComponent.assign("hour", dateTimeComponent.get("hour") + 12);
    } else {
      dateTimeComponent.imply("hour", dateTimeComponent.get("hour") + 12);
    }
  }
  return dateTimeComponent;
}
class AbstractMergeDateTimeRefiner extends MergingRefiner {
  shouldMergeResults(textBetween, currentResult, nextResult) {
    return (currentResult.start.isOnlyDate() && nextResult.start.isOnlyTime() || nextResult.start.isOnlyDate() && currentResult.start.isOnlyTime()) && textBetween.match(this.patternBetween()) != null;
  }
  mergeResults(textBetween, currentResult, nextResult) {
    const result = currentResult.start.isOnlyDate() ? mergeDateTimeResult(currentResult, nextResult) : mergeDateTimeResult(nextResult, currentResult);
    result.index = currentResult.index;
    result.text = currentResult.text + textBetween + nextResult.text;
    return result;
  }
}
class ENMergeDateTimeRefiner extends AbstractMergeDateTimeRefiner {
  patternBetween() {
    return new RegExp("^\\s*(T|at|after|before|on|of|,|-)?\\s*$");
  }
}
const TIMEZONE_NAME_PATTERN = new RegExp("^\\s*,?\\s*\\(?([A-Z]{2,4})\\)?(?=\\W|$)", "i");
class ExtractTimezoneAbbrRefiner {
  constructor(timezoneOverrides) {
    this.timezoneOverrides = timezoneOverrides;
  }
  refine(context, results) {
    const timezoneOverrides = context.option.timezones ?? {};
    results.forEach((result) => {
      const suffix = context.text.substring(result.index + result.text.length);
      const match = TIMEZONE_NAME_PATTERN.exec(suffix);
      if (!match) {
        return;
      }
      const timezoneAbbr = match[1].toUpperCase();
      const refDate = result.start.date() ?? result.refDate ?? /* @__PURE__ */ new Date();
      const tzOverrides = { ...this.timezoneOverrides, ...timezoneOverrides };
      const extractedTimezoneOffset = toTimezoneOffset(timezoneAbbr, refDate, tzOverrides);
      if (extractedTimezoneOffset == null) {
        return;
      }
      context.debug(() => {
        console.log(`Extracting timezone: '${timezoneAbbr}' into: ${extractedTimezoneOffset} for: ${result.start}`);
      });
      const currentTimezoneOffset = result.start.get("timezoneOffset");
      if (currentTimezoneOffset !== null && extractedTimezoneOffset != currentTimezoneOffset) {
        if (result.start.isCertain("timezoneOffset")) {
          return;
        }
        if (timezoneAbbr != match[1]) {
          return;
        }
      }
      if (result.start.isOnlyDate()) {
        if (timezoneAbbr != match[1]) {
          return;
        }
      }
      result.text += match[0];
      if (!result.start.isCertain("timezoneOffset")) {
        result.start.assign("timezoneOffset", extractedTimezoneOffset);
      }
      if (result.end != null && !result.end.isCertain("timezoneOffset")) {
        result.end.assign("timezoneOffset", extractedTimezoneOffset);
      }
    });
    return results;
  }
}
const TIMEZONE_OFFSET_PATTERN = new RegExp("^\\s*(?:\\(?(?:GMT|UTC)\\s?)?([+-])(\\d{1,2})(?::?(\\d{2}))?\\)?", "i");
const TIMEZONE_OFFSET_SIGN_GROUP = 1;
const TIMEZONE_OFFSET_HOUR_OFFSET_GROUP = 2;
const TIMEZONE_OFFSET_MINUTE_OFFSET_GROUP = 3;
class ExtractTimezoneOffsetRefiner {
  refine(context, results) {
    results.forEach(function(result) {
      if (result.start.isCertain("timezoneOffset")) {
        return;
      }
      const suffix = context.text.substring(result.index + result.text.length);
      const match = TIMEZONE_OFFSET_PATTERN.exec(suffix);
      if (!match) {
        return;
      }
      context.debug(() => {
        console.log(`Extracting timezone: '${match[0]}' into : ${result}`);
      });
      const hourOffset = parseInt(match[TIMEZONE_OFFSET_HOUR_OFFSET_GROUP]);
      const minuteOffset = parseInt(match[TIMEZONE_OFFSET_MINUTE_OFFSET_GROUP] || "0");
      let timezoneOffset = hourOffset * 60 + minuteOffset;
      if (timezoneOffset > 14 * 60) {
        return;
      }
      if (match[TIMEZONE_OFFSET_SIGN_GROUP] === "-") {
        timezoneOffset = -timezoneOffset;
      }
      if (result.end != null) {
        result.end.assign("timezoneOffset", timezoneOffset);
      }
      result.start.assign("timezoneOffset", timezoneOffset);
      result.text += match[0];
    });
    return results;
  }
}
class OverlapRemovalRefiner {
  refine(context, results) {
    if (results.length < 2) {
      return results;
    }
    const filteredResults = [];
    let prevResult = results[0];
    for (let i = 1; i < results.length; i++) {
      const result = results[i];
      if (result.index < prevResult.index + prevResult.text.length) {
        if (result.text.length > prevResult.text.length) {
          prevResult = result;
        }
      } else {
        filteredResults.push(prevResult);
        prevResult = result;
      }
    }
    if (prevResult != null) {
      filteredResults.push(prevResult);
    }
    return filteredResults;
  }
}
class ForwardDateRefiner {
  refine(context, results) {
    if (!context.option.forwardDate) {
      return results;
    }
    results.forEach(function(result) {
      let refMoment = dayjs(context.refDate);
      if (result.start.isOnlyTime() && refMoment.isAfter(result.start.dayjs())) {
        refMoment = refMoment.add(1, "day");
        implySimilarDate(result.start, refMoment);
        if (result.end && result.end.isOnlyTime()) {
          implySimilarDate(result.end, refMoment);
          if (result.start.dayjs().isAfter(result.end.dayjs())) {
            refMoment = refMoment.add(1, "day");
            implySimilarDate(result.end, refMoment);
          }
        }
      }
      if (result.start.isOnlyWeekdayComponent() && refMoment.isAfter(result.start.dayjs())) {
        if (refMoment.day() >= result.start.get("weekday")) {
          refMoment = refMoment.day(result.start.get("weekday") + 7);
        } else {
          refMoment = refMoment.day(result.start.get("weekday"));
        }
        result.start.imply("day", refMoment.date());
        result.start.imply("month", refMoment.month() + 1);
        result.start.imply("year", refMoment.year());
        context.debug(() => {
          console.log(`Forward weekly adjusted for ${result} (${result.start})`);
        });
        if (result.end && result.end.isOnlyWeekdayComponent()) {
          if (refMoment.day() > result.end.get("weekday")) {
            refMoment = refMoment.day(result.end.get("weekday") + 7);
          } else {
            refMoment = refMoment.day(result.end.get("weekday"));
          }
          result.end.imply("day", refMoment.date());
          result.end.imply("month", refMoment.month() + 1);
          result.end.imply("year", refMoment.year());
          context.debug(() => {
            console.log(`Forward weekly adjusted for ${result} (${result.end})`);
          });
        }
      }
      if (result.start.isDateWithUnknownYear() && refMoment.isAfter(result.start.dayjs())) {
        for (let i = 0; i < 3 && refMoment.isAfter(result.start.dayjs()); i++) {
          result.start.imply("year", result.start.get("year") + 1);
          context.debug(() => {
            console.log(`Forward yearly adjusted for ${result} (${result.start})`);
          });
          if (result.end && !result.end.isCertain("year")) {
            result.end.imply("year", result.end.get("year") + 1);
            context.debug(() => {
              console.log(`Forward yearly adjusted for ${result} (${result.end})`);
            });
          }
        }
      }
    });
    return results;
  }
}
class UnlikelyFormatFilter extends Filter {
  constructor(strictMode) {
    super();
    this.strictMode = strictMode;
  }
  isValid(context, result) {
    if (result.text.replace(" ", "").match(/^\d*(\.\d*)?$/)) {
      context.debug(() => {
        console.log(`Removing unlikely result '${result.text}'`);
      });
      return false;
    }
    if (!result.start.isValidDate()) {
      context.debug(() => {
        console.log(`Removing invalid result: ${result} (${result.start})`);
      });
      return false;
    }
    if (result.end && !result.end.isValidDate()) {
      context.debug(() => {
        console.log(`Removing invalid result: ${result} (${result.end})`);
      });
      return false;
    }
    if (this.strictMode) {
      return this.isStrictModeValid(context, result);
    }
    return true;
  }
  isStrictModeValid(context, result) {
    if (result.start.isOnlyWeekdayComponent()) {
      context.debug(() => {
        console.log(`(Strict) Removing weekday only component: ${result} (${result.end})`);
      });
      return false;
    }
    if (result.start.isOnlyTime() && (!result.start.isCertain("hour") || !result.start.isCertain("minute"))) {
      context.debug(() => {
        console.log(`(Strict) Removing uncertain time component: ${result} (${result.end})`);
      });
      return false;
    }
    return true;
  }
}
const PATTERN$O = new RegExp("([0-9]{4})\\-([0-9]{1,2})\\-([0-9]{1,2})(?:T([0-9]{1,2}):([0-9]{1,2})(?::([0-9]{1,2})(?:\\.(\\d{1,4}))?)?(?:Z|([+-]\\d{2}):?(\\d{2})?)?)?(?=\\W|$)", "i");
const YEAR_NUMBER_GROUP$2 = 1;
const MONTH_NUMBER_GROUP$1 = 2;
const DATE_NUMBER_GROUP$1 = 3;
const HOUR_NUMBER_GROUP = 4;
const MINUTE_NUMBER_GROUP = 5;
const SECOND_NUMBER_GROUP = 6;
const MILLISECOND_NUMBER_GROUP = 7;
const TZD_HOUR_OFFSET_GROUP = 8;
const TZD_MINUTE_OFFSET_GROUP = 9;
class ISOFormatParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN$O;
  }
  innerExtract(context, match) {
    const components = {};
    components["year"] = parseInt(match[YEAR_NUMBER_GROUP$2]);
    components["month"] = parseInt(match[MONTH_NUMBER_GROUP$1]);
    components["day"] = parseInt(match[DATE_NUMBER_GROUP$1]);
    if (match[HOUR_NUMBER_GROUP] != null) {
      components["hour"] = parseInt(match[HOUR_NUMBER_GROUP]);
      components["minute"] = parseInt(match[MINUTE_NUMBER_GROUP]);
      if (match[SECOND_NUMBER_GROUP] != null) {
        components["second"] = parseInt(match[SECOND_NUMBER_GROUP]);
      }
      if (match[MILLISECOND_NUMBER_GROUP] != null) {
        components["millisecond"] = parseInt(match[MILLISECOND_NUMBER_GROUP]);
      }
      if (match[TZD_HOUR_OFFSET_GROUP] == null) {
        components["timezoneOffset"] = 0;
      } else {
        const hourOffset = parseInt(match[TZD_HOUR_OFFSET_GROUP]);
        let minuteOffset = 0;
        if (match[TZD_MINUTE_OFFSET_GROUP] != null) {
          minuteOffset = parseInt(match[TZD_MINUTE_OFFSET_GROUP]);
        }
        let offset = hourOffset * 60;
        if (offset < 0) {
          offset -= minuteOffset;
        } else {
          offset += minuteOffset;
        }
        components["timezoneOffset"] = offset;
      }
    }
    return components;
  }
}
class MergeWeekdayComponentRefiner extends MergingRefiner {
  mergeResults(textBetween, currentResult, nextResult) {
    const newResult = nextResult.clone();
    newResult.index = currentResult.index;
    newResult.text = currentResult.text + textBetween + newResult.text;
    newResult.start.assign("weekday", currentResult.start.get("weekday"));
    if (newResult.end) {
      newResult.end.assign("weekday", currentResult.start.get("weekday"));
    }
    return newResult;
  }
  shouldMergeResults(textBetween, currentResult, nextResult) {
    const weekdayThenNormalDate = currentResult.start.isOnlyWeekdayComponent() && !currentResult.start.isCertain("hour") && nextResult.start.isCertain("day");
    return weekdayThenNormalDate && textBetween.match(/^,?\s*$/) != null;
  }
}
function includeCommonConfiguration(configuration, strictMode = false) {
  configuration.parsers.unshift(new ISOFormatParser());
  configuration.refiners.unshift(new MergeWeekdayComponentRefiner());
  configuration.refiners.unshift(new ExtractTimezoneOffsetRefiner());
  configuration.refiners.unshift(new OverlapRemovalRefiner());
  configuration.refiners.push(new ExtractTimezoneAbbrRefiner());
  configuration.refiners.push(new OverlapRemovalRefiner());
  configuration.refiners.push(new ForwardDateRefiner());
  configuration.refiners.push(new UnlikelyFormatFilter(strictMode));
  return configuration;
}
function now(reference) {
  const targetDate = dayjs(reference.instant);
  const component = new ParsingComponents(reference, {});
  assignSimilarDate(component, targetDate);
  assignSimilarTime(component, targetDate);
  if (reference.timezoneOffset !== null) {
    component.assign("timezoneOffset", targetDate.utcOffset());
  }
  return component;
}
function today(reference) {
  const targetDate = dayjs(reference.instant);
  const component = new ParsingComponents(reference, {});
  assignSimilarDate(component, targetDate);
  implySimilarTime(component, targetDate);
  return component;
}
function yesterday(reference) {
  return theDayBefore(reference, 1);
}
function theDayBefore(reference, numDay) {
  return theDayAfter(reference, -numDay);
}
function tomorrow(reference) {
  return theDayAfter(reference, 1);
}
function theDayAfter(reference, nDays) {
  let targetDate = dayjs(reference.instant);
  const component = new ParsingComponents(reference, {});
  targetDate = targetDate.add(nDays, "day");
  assignSimilarDate(component, targetDate);
  implySimilarTime(component, targetDate);
  return component;
}
function tonight(reference, implyHour = 22) {
  const targetDate = dayjs(reference.instant);
  const component = new ParsingComponents(reference, {});
  component.imply("hour", implyHour);
  component.imply("meridiem", Meridiem.PM);
  assignSimilarDate(component, targetDate);
  return component;
}
function lastNight(reference, implyHour = 0) {
  let targetDate = dayjs(reference.instant);
  const component = new ParsingComponents(reference, {});
  if (targetDate.hour() < 6) {
    targetDate = targetDate.add(-1, "day");
  }
  assignSimilarDate(component, targetDate);
  component.imply("hour", implyHour);
  return component;
}
function evening(reference, implyHour = 20) {
  const component = new ParsingComponents(reference, {});
  component.imply("meridiem", Meridiem.PM);
  component.imply("hour", implyHour);
  return component;
}
function yesterdayEvening(reference, implyHour = 20) {
  let targetDate = dayjs(reference.instant);
  const component = new ParsingComponents(reference, {});
  targetDate = targetDate.add(-1, "day");
  assignSimilarDate(component, targetDate);
  component.imply("hour", implyHour);
  component.imply("meridiem", Meridiem.PM);
  return component;
}
function midnight(reference) {
  const component = new ParsingComponents(reference, {});
  const targetDate = dayjs(reference.instant);
  if (targetDate.hour() > 2) {
    implyTheNextDay(component, targetDate);
  }
  component.assign("hour", 0);
  component.imply("minute", 0);
  component.imply("second", 0);
  component.imply("millisecond", 0);
  return component;
}
function morning(reference, implyHour = 6) {
  const component = new ParsingComponents(reference, {});
  component.imply("meridiem", Meridiem.AM);
  component.imply("hour", implyHour);
  component.imply("minute", 0);
  component.imply("second", 0);
  component.imply("millisecond", 0);
  return component;
}
function afternoon(reference, implyHour = 15) {
  const component = new ParsingComponents(reference, {});
  component.imply("meridiem", Meridiem.PM);
  component.imply("hour", implyHour);
  component.imply("minute", 0);
  component.imply("second", 0);
  component.imply("millisecond", 0);
  return component;
}
function noon(reference) {
  const component = new ParsingComponents(reference, {});
  component.imply("meridiem", Meridiem.AM);
  component.imply("hour", 12);
  component.imply("minute", 0);
  component.imply("second", 0);
  component.imply("millisecond", 0);
  return component;
}
const PATTERN$N = /(now|today|tonight|tomorrow|tmr|tmrw|yesterday|last\s*night)(?=\W|$)/i;
class ENCasualDateParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern(context) {
    return PATTERN$N;
  }
  innerExtract(context, match) {
    let targetDate = dayjs(context.refDate);
    const lowerText = match[0].toLowerCase();
    const component = context.createParsingComponents();
    switch (lowerText) {
      case "now":
        return now(context.reference);
      case "today":
        return today(context.reference);
      case "yesterday":
        return yesterday(context.reference);
      case "tomorrow":
      case "tmr":
      case "tmrw":
        return tomorrow(context.reference);
      case "tonight":
        return tonight(context.reference);
      default:
        if (lowerText.match(/last\s*night/)) {
          if (targetDate.hour() > 6) {
            targetDate = targetDate.add(-1, "day");
          }
          assignSimilarDate(component, targetDate);
          component.imply("hour", 0);
        }
        break;
    }
    return component;
  }
}
const PATTERN$M = /(?:this)?\s{0,3}(morning|afternoon|evening|night|midnight|midday|noon)(?=\W|$)/i;
class ENCasualTimeParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN$M;
  }
  innerExtract(context, match) {
    switch (match[1].toLowerCase()) {
      case "afternoon":
        return afternoon(context.reference);
      case "evening":
      case "night":
        return evening(context.reference);
      case "midnight":
        return midnight(context.reference);
      case "morning":
        return morning(context.reference);
      case "noon":
      case "midday":
        return noon(context.reference);
    }
    return null;
  }
}
function createParsingComponentsAtWeekday(reference, weekday, modifier) {
  const refDate = reference.getDateWithAdjustedTimezone();
  const daysToWeekday = getDaysToWeekday(refDate, weekday, modifier);
  let components = new ParsingComponents(reference);
  components = addImpliedTimeUnits(components, { "day": daysToWeekday });
  components.assign("weekday", weekday);
  return components;
}
function getDaysToWeekday(refDate, weekday, modifier) {
  const refWeekday = refDate.getDay();
  switch (modifier) {
    case "this":
      return getDaysForwardToWeekday(refDate, weekday);
    case "last":
      return getBackwardDaysToWeekday(refDate, weekday);
    case "next":
      if (refWeekday == Weekday.SUNDAY) {
        return weekday == Weekday.SUNDAY ? 7 : weekday;
      }
      if (refWeekday == Weekday.SATURDAY) {
        if (weekday == Weekday.SATURDAY)
          return 7;
        if (weekday == Weekday.SUNDAY)
          return 8;
        return 1 + weekday;
      }
      if (weekday < refWeekday && weekday != Weekday.SUNDAY) {
        return getDaysForwardToWeekday(refDate, weekday);
      } else {
        return getDaysForwardToWeekday(refDate, weekday) + 7;
      }
  }
  return getDaysToWeekdayClosest(refDate, weekday);
}
function getDaysToWeekdayClosest(refDate, weekday) {
  const backward = getBackwardDaysToWeekday(refDate, weekday);
  const forward = getDaysForwardToWeekday(refDate, weekday);
  return forward < -backward ? forward : backward;
}
function getDaysForwardToWeekday(refDate, weekday) {
  const refWeekday = refDate.getDay();
  let forwardCount = weekday - refWeekday;
  if (forwardCount < 0) {
    forwardCount += 7;
  }
  return forwardCount;
}
function getBackwardDaysToWeekday(refDate, weekday) {
  const refWeekday = refDate.getDay();
  let backwardCount = weekday - refWeekday;
  if (backwardCount >= 0) {
    backwardCount -= 7;
  }
  return backwardCount;
}
const PATTERN$L = new RegExp(`(?:(?:\\,|\\(|\\（)\\s*)?(?:on\\s*?)?(?:(this|last|past|next)\\s*)?(${matchAnyPattern(WEEKDAY_DICTIONARY$7)})(?:\\s*(?:\\,|\\)|\\）))?(?:\\s*(this|last|past|next)\\s*week)?(?=\\W|$)`, "i");
const PREFIX_GROUP$6 = 1;
const WEEKDAY_GROUP$7 = 2;
const POSTFIX_GROUP$6 = 3;
class ENWeekdayParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN$L;
  }
  innerExtract(context, match) {
    const dayOfWeek = match[WEEKDAY_GROUP$7].toLowerCase();
    const weekday = WEEKDAY_DICTIONARY$7[dayOfWeek];
    const prefix = match[PREFIX_GROUP$6];
    const postfix = match[POSTFIX_GROUP$6];
    let modifierWord = prefix || postfix;
    modifierWord = modifierWord || "";
    modifierWord = modifierWord.toLowerCase();
    let modifier = null;
    if (modifierWord == "last" || modifierWord == "past") {
      modifier = "last";
    } else if (modifierWord == "next") {
      modifier = "next";
    } else if (modifierWord == "this") {
      modifier = "this";
    }
    return createParsingComponentsAtWeekday(context.reference, weekday, modifier);
  }
}
const PATTERN$K = new RegExp(`(this|last|past|next|after\\s*this)\\s*(${matchAnyPattern(TIME_UNIT_DICTIONARY$6)})(?=\\s*)(?=\\W|$)`, "i");
const MODIFIER_WORD_GROUP$3 = 1;
const RELATIVE_WORD_GROUP$3 = 2;
class ENRelativeDateFormatParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN$K;
  }
  innerExtract(context, match) {
    const modifier = match[MODIFIER_WORD_GROUP$3].toLowerCase();
    const unitWord = match[RELATIVE_WORD_GROUP$3].toLowerCase();
    const timeunit = TIME_UNIT_DICTIONARY$6[unitWord];
    if (modifier == "next" || modifier.startsWith("after")) {
      const timeUnits = {};
      timeUnits[timeunit] = 1;
      return ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
    }
    if (modifier == "last" || modifier == "past") {
      const timeUnits = {};
      timeUnits[timeunit] = -1;
      return ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
    }
    const components = context.createParsingComponents();
    let date = dayjs(context.reference.instant);
    if (unitWord.match(/week/i)) {
      date = date.add(-date.get("d"), "d");
      components.imply("day", date.date());
      components.imply("month", date.month() + 1);
      components.imply("year", date.year());
    } else if (unitWord.match(/month/i)) {
      date = date.add(-date.date() + 1, "d");
      components.imply("day", date.date());
      components.assign("year", date.year());
      components.assign("month", date.month() + 1);
    } else if (unitWord.match(/year/i)) {
      date = date.add(-date.date() + 1, "d");
      date = date.add(-date.month(), "month");
      components.imply("day", date.date());
      components.imply("month", date.month() + 1);
      components.assign("year", date.year());
    }
    return components;
  }
}
const PATTERN$J = new RegExp("([^\\d]|^)([0-3]{0,1}[0-9]{1})[\\/\\.\\-]([0-3]{0,1}[0-9]{1})(?:[\\/\\.\\-]([0-9]{4}|[0-9]{2}))?(\\W|$)", "i");
const OPENING_GROUP = 1;
const ENDING_GROUP = 5;
const FIRST_NUMBERS_GROUP = 2;
const SECOND_NUMBERS_GROUP = 3;
const YEAR_GROUP$d = 4;
class SlashDateFormatParser {
  constructor(littleEndian) {
    this.groupNumberMonth = littleEndian ? SECOND_NUMBERS_GROUP : FIRST_NUMBERS_GROUP;
    this.groupNumberDay = littleEndian ? FIRST_NUMBERS_GROUP : SECOND_NUMBERS_GROUP;
  }
  pattern() {
    return PATTERN$J;
  }
  extract(context, match) {
    if (match[OPENING_GROUP].length == 0 && match.index > 0 && match.index < context.text.length) {
      const previousChar = context.text[match.index - 1];
      if (previousChar >= "0" && previousChar <= "9") {
        return;
      }
    }
    const index2 = match.index + match[OPENING_GROUP].length;
    const text = match[0].substr(match[OPENING_GROUP].length, match[0].length - match[OPENING_GROUP].length - match[ENDING_GROUP].length);
    if (text.match(/^\d\.\d$/) || text.match(/^\d\.\d{1,2}\.\d{1,2}\s*$/)) {
      return;
    }
    if (!match[YEAR_GROUP$d] && match[0].indexOf("/") < 0) {
      return;
    }
    const result = context.createParsingResult(index2, text);
    let month = parseInt(match[this.groupNumberMonth]);
    let day = parseInt(match[this.groupNumberDay]);
    if (month < 1 || month > 12) {
      if (month > 12) {
        if (day >= 1 && day <= 12 && month <= 31) {
          [day, month] = [month, day];
        } else {
          return null;
        }
      }
    }
    if (day < 1 || day > 31) {
      return null;
    }
    result.start.assign("day", day);
    result.start.assign("month", month);
    if (match[YEAR_GROUP$d]) {
      const rawYearNumber = parseInt(match[YEAR_GROUP$d]);
      const year2 = findMostLikelyADYear(rawYearNumber);
      result.start.assign("year", year2);
    } else {
      const year2 = findYearClosestToRef(context.refDate, day, month);
      result.start.imply("year", year2);
    }
    return result;
  }
}
const PATTERN$I = new RegExp(`(this|last|past|next|after|\\+|-)\\s*(${TIME_UNITS_PATTERN$6})(?=\\W|$)`, "i");
const PATTERN_NO_ABBR = new RegExp(`(this|last|past|next|after|\\+|-)\\s*(${TIME_UNITS_NO_ABBR_PATTERN})(?=\\W|$)`, "i");
class ENTimeUnitCasualRelativeFormatParser extends AbstractParserWithWordBoundaryChecking {
  constructor(allowAbbreviations = true) {
    super();
    this.allowAbbreviations = allowAbbreviations;
  }
  innerPattern() {
    return this.allowAbbreviations ? PATTERN$I : PATTERN_NO_ABBR;
  }
  innerExtract(context, match) {
    const prefix = match[1].toLowerCase();
    let timeUnits = parseTimeUnits$6(match[2]);
    switch (prefix) {
      case "last":
      case "past":
      case "-":
        timeUnits = reverseTimeUnits(timeUnits);
        break;
    }
    return ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
  }
}
function hasImpliedEarlierReferenceDate(result) {
  return result.text.match(/\s+(before|from)$/i) != null;
}
function hasImpliedLaterReferenceDate(result) {
  return result.text.match(/\s+(after|since)$/i) != null;
}
class ENMergeRelativeDateRefiner extends MergingRefiner {
  patternBetween() {
    return /^\s*$/i;
  }
  shouldMergeResults(textBetween, currentResult, nextResult) {
    if (!textBetween.match(this.patternBetween())) {
      return false;
    }
    if (!hasImpliedEarlierReferenceDate(currentResult) && !hasImpliedLaterReferenceDate(currentResult)) {
      return false;
    }
    return !!nextResult.start.get("day") && !!nextResult.start.get("month") && !!nextResult.start.get("year");
  }
  mergeResults(textBetween, currentResult, nextResult) {
    let timeUnits = parseTimeUnits$6(currentResult.text);
    if (hasImpliedEarlierReferenceDate(currentResult)) {
      timeUnits = reverseTimeUnits(timeUnits);
    }
    const components = ParsingComponents.createRelativeFromReference(new ReferenceWithTimezone(nextResult.start.date()), timeUnits);
    return new ParsingResult(nextResult.reference, currentResult.index, `${currentResult.text}${textBetween}${nextResult.text}`, components);
  }
}
class ENDefaultConfiguration {
  createCasualConfiguration(littleEndian = false) {
    const option = this.createConfiguration(false, littleEndian);
    option.parsers.unshift(new ENCasualDateParser());
    option.parsers.unshift(new ENCasualTimeParser());
    option.parsers.unshift(new ENMonthNameParser());
    option.parsers.unshift(new ENRelativeDateFormatParser());
    option.parsers.unshift(new ENTimeUnitCasualRelativeFormatParser());
    return option;
  }
  createConfiguration(strictMode = true, littleEndian = false) {
    return includeCommonConfiguration({
      parsers: [
        new SlashDateFormatParser(littleEndian),
        new ENTimeUnitWithinFormatParser(strictMode),
        new ENMonthNameLittleEndianParser(),
        new ENMonthNameMiddleEndianParser(),
        new ENWeekdayParser(),
        new ENCasualYearMonthDayParser(),
        new ENSlashMonthFormatParser(),
        new ENTimeExpressionParser(strictMode),
        new ENTimeUnitAgoFormatParser(strictMode),
        new ENTimeUnitLaterFormatParser(strictMode)
      ],
      refiners: [
        new ENMergeRelativeDateRefiner(),
        new ENMergeDateTimeRefiner(),
        new ENMergeDateRangeRefiner()
      ]
    }, strictMode);
  }
}
class Chrono {
  constructor(configuration) {
    this.defaultConfig = new ENDefaultConfiguration();
    configuration = configuration || this.defaultConfig.createCasualConfiguration();
    this.parsers = [...configuration.parsers];
    this.refiners = [...configuration.refiners];
  }
  clone() {
    return new Chrono({
      parsers: [...this.parsers],
      refiners: [...this.refiners]
    });
  }
  parseDate(text, referenceDate, option) {
    const results = this.parse(text, referenceDate, option);
    return results.length > 0 ? results[0].start.date() : null;
  }
  parse(text, referenceDate, option) {
    const context = new ParsingContext(text, referenceDate, option);
    let results = [];
    this.parsers.forEach((parser) => {
      const parsedResults = Chrono.executeParser(context, parser);
      results = results.concat(parsedResults);
    });
    results.sort((a, b) => {
      return a.index - b.index;
    });
    this.refiners.forEach(function(refiner) {
      results = refiner.refine(context, results);
    });
    return results;
  }
  static executeParser(context, parser) {
    const results = [];
    const pattern = parser.pattern(context);
    const originalText = context.text;
    let remainingText = context.text;
    let match = pattern.exec(remainingText);
    while (match) {
      const index2 = match.index + originalText.length - remainingText.length;
      match.index = index2;
      const result = parser.extract(context, match);
      if (!result) {
        remainingText = originalText.substring(match.index + 1);
        match = pattern.exec(remainingText);
        continue;
      }
      let parsedResult = null;
      if (result instanceof ParsingResult) {
        parsedResult = result;
      } else if (result instanceof ParsingComponents) {
        parsedResult = context.createParsingResult(match.index, match[0]);
        parsedResult.start = result;
      } else {
        parsedResult = context.createParsingResult(match.index, match[0], result);
      }
      const parsedIndex = parsedResult.index;
      const parsedText = parsedResult.text;
      context.debug(() => console.log(`${parser.constructor.name} extracted (at index=${parsedIndex}) '${parsedText}'`));
      results.push(parsedResult);
      remainingText = originalText.substring(parsedIndex + parsedText.length);
      match = pattern.exec(remainingText);
    }
    return results;
  }
}
class ParsingContext {
  constructor(text, refDate, option) {
    this.text = text;
    this.reference = new ReferenceWithTimezone(refDate);
    this.option = option ?? {};
    this.refDate = this.reference.instant;
  }
  createParsingComponents(components) {
    if (components instanceof ParsingComponents) {
      return components;
    }
    return new ParsingComponents(this.reference, components);
  }
  createParsingResult(index2, textOrEndIndex, startComponents, endComponents) {
    const text = typeof textOrEndIndex === "string" ? textOrEndIndex : this.text.substring(index2, textOrEndIndex);
    const start = startComponents ? this.createParsingComponents(startComponents) : null;
    const end = endComponents ? this.createParsingComponents(endComponents) : null;
    return new ParsingResult(this.reference, index2, text, start, end);
  }
  debug(block) {
    if (this.option.debug) {
      if (this.option.debug instanceof Function) {
        this.option.debug(block);
      } else {
        const handler = this.option.debug;
        handler.debug(block);
      }
    }
  }
}
const enConfig = new ENDefaultConfiguration();
const casual$b = new Chrono(enConfig.createCasualConfiguration(false));
const strict$b = new Chrono(enConfig.createConfiguration(true, false));
const GB = new Chrono(enConfig.createConfiguration(false, true));
function parse$b(text, ref, option) {
  return casual$b.parse(text, ref, option);
}
function parseDate$b(text, ref, option) {
  return casual$b.parseDate(text, ref, option);
}
const index$a = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Chrono,
  GB,
  get Meridiem() {
    return Meridiem;
  },
  ParsingResult,
  get Weekday() {
    return Weekday;
  },
  casual: casual$b,
  parse: parse$b,
  parseDate: parseDate$b,
  strict: strict$b
}, Symbol.toStringTag, { value: "Module" }));
class DETimeExpressionParser extends AbstractTimeExpressionParser {
  primaryPrefix() {
    return "(?:(?:um|von)\\s*)?";
  }
  followingPhase() {
    return "\\s*(?:\\-|\\–|\\~|\\〜|bis)\\s*";
  }
  extractPrimaryTimeComponents(context, match) {
    if (match[0].match(/^\s*\d{4}\s*$/)) {
      return null;
    }
    return super.extractPrimaryTimeComponents(context, match);
  }
}
const WEEKDAY_DICTIONARY$6 = {
  "sonntag": 0,
  "so": 0,
  "montag": 1,
  "mo": 1,
  "dienstag": 2,
  "di": 2,
  "mittwoch": 3,
  "mi": 3,
  "donnerstag": 4,
  "do": 4,
  "freitag": 5,
  "fr": 5,
  "samstag": 6,
  "sa": 6
};
const MONTH_DICTIONARY$6 = {
  "januar": 1,
  "jänner": 1,
  "janner": 1,
  "jan": 1,
  "jan.": 1,
  "februar": 2,
  "feber": 2,
  "feb": 2,
  "feb.": 2,
  "märz": 3,
  "maerz": 3,
  "mär": 3,
  "mär.": 3,
  "mrz": 3,
  "mrz.": 3,
  "april": 4,
  "apr": 4,
  "apr.": 4,
  "mai": 5,
  "juni": 6,
  "jun": 6,
  "jun.": 6,
  "juli": 7,
  "jul": 7,
  "jul.": 7,
  "august": 8,
  "aug": 8,
  "aug.": 8,
  "september": 9,
  "sep": 9,
  "sep.": 9,
  "sept": 9,
  "sept.": 9,
  "oktober": 10,
  "okt": 10,
  "okt.": 10,
  "november": 11,
  "nov": 11,
  "nov.": 11,
  "dezember": 12,
  "dez": 12,
  "dez.": 12
};
const INTEGER_WORD_DICTIONARY$5 = {
  "eins": 1,
  "eine": 1,
  "einem": 1,
  "einen": 1,
  "einer": 1,
  "zwei": 2,
  "drei": 3,
  "vier": 4,
  "fünf": 5,
  "fuenf": 5,
  "sechs": 6,
  "sieben": 7,
  "acht": 8,
  "neun": 9,
  "zehn": 10,
  "elf": 11,
  "zwölf": 12,
  "zwoelf": 12
};
const TIME_UNIT_DICTIONARY$5 = {
  sek: "second",
  sekunde: "second",
  sekunden: "second",
  min: "minute",
  minute: "minute",
  minuten: "minute",
  h: "hour",
  std: "hour",
  stunde: "hour",
  stunden: "hour",
  tag: "d",
  tage: "d",
  tagen: "d",
  woche: "week",
  wochen: "week",
  monat: "month",
  monate: "month",
  monaten: "month",
  monats: "month",
  quartal: "quarter",
  quartals: "quarter",
  quartale: "quarter",
  quartalen: "quarter",
  a: "year",
  j: "year",
  jr: "year",
  jahr: "year",
  jahre: "year",
  jahren: "year",
  jahres: "year"
};
const NUMBER_PATTERN$5 = `(?:${matchAnyPattern(INTEGER_WORD_DICTIONARY$5)}|[0-9]+|[0-9]+\\.[0-9]+|halb?|halbe?|einigen?|wenigen?|mehreren?)`;
function parseNumberPattern$5(match) {
  const num = match.toLowerCase();
  if (INTEGER_WORD_DICTIONARY$5[num] !== void 0) {
    return INTEGER_WORD_DICTIONARY$5[num];
  } else if (num === "ein" || num === "einer" || num === "einem" || num === "einen" || num === "eine") {
    return 1;
  } else if (num.match(/wenigen/)) {
    return 2;
  } else if (num.match(/halb/) || num.match(/halben/)) {
    return 0.5;
  } else if (num.match(/einigen/)) {
    return 3;
  } else if (num.match(/mehreren/)) {
    return 7;
  }
  return parseFloat(num);
}
const YEAR_PATTERN$6 = `(?:[0-9]{1,4}(?:\\s*[vn]\\.?\\s*(?:C(?:hr)?|(?:u\\.?|d\\.?(?:\\s*g\\.?)?)?\\s*Z)\\.?|\\s*(?:u\\.?|d\\.?(?:\\s*g\\.)?)\\s*Z\\.?)?)`;
function parseYear$5(match) {
  if (/v/i.test(match)) {
    return -parseInt(match.replace(/[^0-9]+/gi, ""));
  }
  if (/n/i.test(match)) {
    return parseInt(match.replace(/[^0-9]+/gi, ""));
  }
  if (/z/i.test(match)) {
    return parseInt(match.replace(/[^0-9]+/gi, ""));
  }
  const rawYearNumber = parseInt(match);
  return findMostLikelyADYear(rawYearNumber);
}
const SINGLE_TIME_UNIT_PATTERN$5 = `(${NUMBER_PATTERN$5})\\s{0,5}(${matchAnyPattern(TIME_UNIT_DICTIONARY$5)})\\s{0,5}`;
const SINGLE_TIME_UNIT_REGEX$5 = new RegExp(SINGLE_TIME_UNIT_PATTERN$5, "i");
const TIME_UNITS_PATTERN$5 = repeatedTimeunitPattern("", SINGLE_TIME_UNIT_PATTERN$5);
function parseTimeUnits$5(timeunitText) {
  const fragments = {};
  let remainingText = timeunitText;
  let match = SINGLE_TIME_UNIT_REGEX$5.exec(remainingText);
  while (match) {
    collectDateTimeFragment$5(fragments, match);
    remainingText = remainingText.substring(match[0].length);
    match = SINGLE_TIME_UNIT_REGEX$5.exec(remainingText);
  }
  return fragments;
}
function collectDateTimeFragment$5(fragments, match) {
  const num = parseNumberPattern$5(match[1]);
  const unit = TIME_UNIT_DICTIONARY$5[match[2].toLowerCase()];
  fragments[unit] = num;
}
const PATTERN$H = new RegExp(`(?:(?:\\,|\\(|\\（)\\s*)?(?:a[mn]\\s*?)?(?:(diese[mn]|letzte[mn]|n(?:ä|ae)chste[mn])\\s*)?(${matchAnyPattern(WEEKDAY_DICTIONARY$6)})(?:\\s*(?:\\,|\\)|\\）))?(?:\\s*(diese|letzte|n(?:ä|ae)chste)\\s*woche)?(?=\\W|$)`, "i");
const PREFIX_GROUP$5 = 1;
const SUFFIX_GROUP = 3;
const WEEKDAY_GROUP$6 = 2;
class DEWeekdayParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN$H;
  }
  innerExtract(context, match) {
    const dayOfWeek = match[WEEKDAY_GROUP$6].toLowerCase();
    const offset = WEEKDAY_DICTIONARY$6[dayOfWeek];
    const prefix = match[PREFIX_GROUP$5];
    const postfix = match[SUFFIX_GROUP];
    let modifierWord = prefix || postfix;
    modifierWord = modifierWord || "";
    modifierWord = modifierWord.toLowerCase();
    let modifier = null;
    if (modifierWord.match(/letzte/)) {
      modifier = "last";
    } else if (modifierWord.match(/chste/)) {
      modifier = "next";
    } else if (modifierWord.match(/diese/)) {
      modifier = "this";
    }
    return createParsingComponentsAtWeekday(context.reference, offset, modifier);
  }
}
const FIRST_REG_PATTERN$3 = new RegExp("(^|\\s|T)(?:(?:um|von)\\s*)?(\\d{1,2})(?:h|:)?(?:(\\d{1,2})(?:m|:)?)?(?:(\\d{1,2})(?:s)?)?(?:\\s*Uhr)?(?:\\s*(morgens|vormittags|nachmittags|abends|nachts|am\\s+(?:Morgen|Vormittag|Nachmittag|Abend)|in\\s+der\\s+Nacht))?(?=\\W|$)", "i");
const SECOND_REG_PATTERN$3 = new RegExp("^\\s*(\\-|\\–|\\~|\\〜|bis(?:\\s+um)?|\\?)\\s*(\\d{1,2})(?:h|:)?(?:(\\d{1,2})(?:m|:)?)?(?:(\\d{1,2})(?:s)?)?(?:\\s*Uhr)?(?:\\s*(morgens|vormittags|nachmittags|abends|nachts|am\\s+(?:Morgen|Vormittag|Nachmittag|Abend)|in\\s+der\\s+Nacht))?(?=\\W|$)", "i");
const HOUR_GROUP$3 = 2;
const MINUTE_GROUP$3 = 3;
const SECOND_GROUP$3 = 4;
const AM_PM_HOUR_GROUP$3 = 5;
class DESpecificTimeExpressionParser {
  pattern(context) {
    return FIRST_REG_PATTERN$3;
  }
  extract(context, match) {
    const result = context.createParsingResult(match.index + match[1].length, match[0].substring(match[1].length));
    if (result.text.match(/^\d{4}$/)) {
      match.index += match[0].length;
      return null;
    }
    result.start = DESpecificTimeExpressionParser.extractTimeComponent(result.start.clone(), match);
    if (!result.start) {
      match.index += match[0].length;
      return null;
    }
    const remainingText = context.text.substring(match.index + match[0].length);
    const secondMatch = SECOND_REG_PATTERN$3.exec(remainingText);
    if (secondMatch) {
      result.end = DESpecificTimeExpressionParser.extractTimeComponent(result.start.clone(), secondMatch);
      if (result.end) {
        result.text += secondMatch[0];
      }
    }
    return result;
  }
  static extractTimeComponent(extractingComponents, match) {
    let hour = 0;
    let minute = 0;
    let meridiem = null;
    hour = parseInt(match[HOUR_GROUP$3]);
    if (match[MINUTE_GROUP$3] != null) {
      minute = parseInt(match[MINUTE_GROUP$3]);
    }
    if (minute >= 60 || hour > 24) {
      return null;
    }
    if (hour >= 12) {
      meridiem = Meridiem.PM;
    }
    if (match[AM_PM_HOUR_GROUP$3] != null) {
      if (hour > 12)
        return null;
      const ampm = match[AM_PM_HOUR_GROUP$3].toLowerCase();
      if (ampm.match(/morgen|vormittag/)) {
        meridiem = Meridiem.AM;
        if (hour == 12) {
          hour = 0;
        }
      }
      if (ampm.match(/nachmittag|abend/)) {
        meridiem = Meridiem.PM;
        if (hour != 12) {
          hour += 12;
        }
      }
      if (ampm.match(/nacht/)) {
        if (hour == 12) {
          meridiem = Meridiem.AM;
          hour = 0;
        } else if (hour < 6) {
          meridiem = Meridiem.AM;
        } else {
          meridiem = Meridiem.PM;
          hour += 12;
        }
      }
    }
    extractingComponents.assign("hour", hour);
    extractingComponents.assign("minute", minute);
    if (meridiem !== null) {
      extractingComponents.assign("meridiem", meridiem);
    } else {
      if (hour < 12) {
        extractingComponents.imply("meridiem", Meridiem.AM);
      } else {
        extractingComponents.imply("meridiem", Meridiem.PM);
      }
    }
    if (match[SECOND_GROUP$3] != null) {
      const second = parseInt(match[SECOND_GROUP$3]);
      if (second >= 60)
        return null;
      extractingComponents.assign("second", second);
    }
    return extractingComponents;
  }
}
class DEMergeDateRangeRefiner extends AbstractMergeDateRangeRefiner {
  patternBetween() {
    return /^\s*(bis(?:\s*(?:am|zum))?|-)\s*$/i;
  }
}
class DEMergeDateTimeRefiner extends AbstractMergeDateTimeRefiner {
  patternBetween() {
    return new RegExp("^\\s*(T|um|am|,|-)?\\s*$");
  }
}
class DECasualTimeParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern(context) {
    return /(diesen)?\s*(morgen|vormittag|mittags?|nachmittag|abend|nacht|mitternacht)(?=\W|$)/i;
  }
  innerExtract(context, match) {
    const targetDate = dayjs(context.refDate);
    const timeKeywordPattern = match[2].toLowerCase();
    const component = context.createParsingComponents();
    implySimilarTime(component, targetDate);
    return DECasualTimeParser.extractTimeComponents(component, timeKeywordPattern);
  }
  static extractTimeComponents(component, timeKeywordPattern) {
    switch (timeKeywordPattern) {
      case "morgen":
        component.imply("hour", 6);
        component.imply("minute", 0);
        component.imply("second", 0);
        component.imply("meridiem", Meridiem.AM);
        break;
      case "vormittag":
        component.imply("hour", 9);
        component.imply("minute", 0);
        component.imply("second", 0);
        component.imply("meridiem", Meridiem.AM);
        break;
      case "mittag":
      case "mittags":
        component.imply("hour", 12);
        component.imply("minute", 0);
        component.imply("second", 0);
        component.imply("meridiem", Meridiem.AM);
        break;
      case "nachmittag":
        component.imply("hour", 15);
        component.imply("minute", 0);
        component.imply("second", 0);
        component.imply("meridiem", Meridiem.PM);
        break;
      case "abend":
        component.imply("hour", 18);
        component.imply("minute", 0);
        component.imply("second", 0);
        component.imply("meridiem", Meridiem.PM);
        break;
      case "nacht":
        component.imply("hour", 22);
        component.imply("minute", 0);
        component.imply("second", 0);
        component.imply("meridiem", Meridiem.PM);
        break;
      case "mitternacht":
        if (component.get("hour") > 1) {
          component = addImpliedTimeUnits(component, { "day": 1 });
        }
        component.imply("hour", 0);
        component.imply("minute", 0);
        component.imply("second", 0);
        component.imply("meridiem", Meridiem.AM);
        break;
    }
    return component;
  }
}
const PATTERN$G = new RegExp(`(jetzt|heute|morgen|übermorgen|uebermorgen|gestern|vorgestern|letzte\\s*nacht)(?:\\s*(morgen|vormittag|mittags?|nachmittag|abend|nacht|mitternacht))?(?=\\W|$)`, "i");
const DATE_GROUP$8 = 1;
const TIME_GROUP = 2;
class DECasualDateParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern(context) {
    return PATTERN$G;
  }
  innerExtract(context, match) {
    let targetDate = dayjs(context.refDate);
    const dateKeyword = (match[DATE_GROUP$8] || "").toLowerCase();
    const timeKeyword = (match[TIME_GROUP] || "").toLowerCase();
    let component = context.createParsingComponents();
    switch (dateKeyword) {
      case "jetzt":
        component = now(context.reference);
        break;
      case "heute":
        component = today(context.reference);
        break;
      case "morgen":
        assignTheNextDay(component, targetDate);
        break;
      case "übermorgen":
      case "uebermorgen":
        targetDate = targetDate.add(1, "day");
        assignTheNextDay(component, targetDate);
        break;
      case "gestern":
        targetDate = targetDate.add(-1, "day");
        assignSimilarDate(component, targetDate);
        implySimilarTime(component, targetDate);
        break;
      case "vorgestern":
        targetDate = targetDate.add(-2, "day");
        assignSimilarDate(component, targetDate);
        implySimilarTime(component, targetDate);
        break;
      default:
        if (dateKeyword.match(/letzte\s*nacht/)) {
          if (targetDate.hour() > 6) {
            targetDate = targetDate.add(-1, "day");
          }
          assignSimilarDate(component, targetDate);
          component.imply("hour", 0);
        }
        break;
    }
    if (timeKeyword) {
      component = DECasualTimeParser.extractTimeComponents(component, timeKeyword);
    }
    return component;
  }
}
const PATTERN$F = new RegExp(`(?:am\\s*?)?(?:den\\s*?)?([0-9]{1,2})\\.(?:\\s*(?:bis(?:\\s*(?:am|zum))?|\\-|\\–|\\s)\\s*([0-9]{1,2})\\.?)?\\s*(${matchAnyPattern(MONTH_DICTIONARY$6)})(?:(?:-|/|,?\\s*)(${YEAR_PATTERN$6}(?![^\\s]\\d)))?(?=\\W|$)`, "i");
const DATE_GROUP$7 = 1;
const DATE_TO_GROUP$6 = 2;
const MONTH_NAME_GROUP$a = 3;
const YEAR_GROUP$c = 4;
class DEMonthNameLittleEndianParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN$F;
  }
  innerExtract(context, match) {
    const result = context.createParsingResult(match.index, match[0]);
    const month = MONTH_DICTIONARY$6[match[MONTH_NAME_GROUP$a].toLowerCase()];
    const day = parseInt(match[DATE_GROUP$7]);
    if (day > 31) {
      match.index = match.index + match[DATE_GROUP$7].length;
      return null;
    }
    result.start.assign("month", month);
    result.start.assign("day", day);
    if (match[YEAR_GROUP$c]) {
      const yearNumber = parseYear$5(match[YEAR_GROUP$c]);
      result.start.assign("year", yearNumber);
    } else {
      const year2 = findYearClosestToRef(context.refDate, day, month);
      result.start.imply("year", year2);
    }
    if (match[DATE_TO_GROUP$6]) {
      const endDate = parseInt(match[DATE_TO_GROUP$6]);
      result.end = result.start.clone();
      result.end.assign("day", endDate);
    }
    return result;
  }
}
class DETimeUnitAgoFormatParser extends AbstractParserWithWordBoundaryChecking {
  constructor() {
    super();
  }
  innerPattern() {
    return new RegExp(`(?:\\s*((?:nächste|kommende|folgende|letzte|vergangene|vorige|vor(?:her|an)gegangene)(?:s|n|m|r)?|vor|in)\\s*)?(${NUMBER_PATTERN$5})?(?:\\s*(nächste|kommende|folgende|letzte|vergangene|vorige|vor(?:her|an)gegangene)(?:s|n|m|r)?)?\\s*(${matchAnyPattern(TIME_UNIT_DICTIONARY$5)})`, "i");
  }
  innerExtract(context, match) {
    const num = match[2] ? parseNumberPattern$5(match[2]) : 1;
    const unit = TIME_UNIT_DICTIONARY$5[match[4].toLowerCase()];
    let timeUnits = {};
    timeUnits[unit] = num;
    let modifier = match[1] || match[3] || "";
    modifier = modifier.toLowerCase();
    if (!modifier) {
      return;
    }
    if (/vor/.test(modifier) || /letzte/.test(modifier) || /vergangen/.test(modifier)) {
      timeUnits = reverseTimeUnits(timeUnits);
    }
    return ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
  }
}
class DETimeUnitWithinFormatParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return new RegExp(`(?:in|für|während)\\s*(${TIME_UNITS_PATTERN$5})(?=\\W|$)`, "i");
  }
  innerExtract(context, match) {
    const timeUnits = parseTimeUnits$5(match[1]);
    return ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
  }
}
const casual$a = new Chrono(createCasualConfiguration$9());
const strict$a = new Chrono(createConfiguration$9(true));
function parse$a(text, ref, option) {
  return casual$a.parse(text, ref, option);
}
function parseDate$a(text, ref, option) {
  return casual$a.parseDate(text, ref, option);
}
function createCasualConfiguration$9(littleEndian = true) {
  const option = createConfiguration$9(false, littleEndian);
  option.parsers.unshift(new DECasualTimeParser());
  option.parsers.unshift(new DECasualDateParser());
  option.parsers.unshift(new DETimeUnitAgoFormatParser());
  return option;
}
function createConfiguration$9(strictMode = true, littleEndian = true) {
  return includeCommonConfiguration({
    parsers: [
      new ISOFormatParser(),
      new SlashDateFormatParser(littleEndian),
      new DETimeExpressionParser(),
      new DESpecificTimeExpressionParser(),
      new DEMonthNameLittleEndianParser(),
      new DEWeekdayParser(),
      new DETimeUnitWithinFormatParser()
    ],
    refiners: [new DEMergeDateRangeRefiner(), new DEMergeDateTimeRefiner()]
  }, strictMode);
}
const index$9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Chrono,
  get Meridiem() {
    return Meridiem;
  },
  ParsingResult,
  get Weekday() {
    return Weekday;
  },
  casual: casual$a,
  createCasualConfiguration: createCasualConfiguration$9,
  createConfiguration: createConfiguration$9,
  parse: parse$a,
  parseDate: parseDate$a,
  strict: strict$a
}, Symbol.toStringTag, { value: "Module" }));
class FRCasualDateParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern(context) {
    return /(maintenant|aujourd'hui|demain|hier|cette\s*nuit|la\s*veille)(?=\W|$)/i;
  }
  innerExtract(context, match) {
    let targetDate = dayjs(context.refDate);
    const lowerText = match[0].toLowerCase();
    const component = context.createParsingComponents();
    switch (lowerText) {
      case "maintenant":
        return now(context.reference);
      case "aujourd'hui":
        return today(context.reference);
      case "hier":
        return yesterday(context.reference);
      case "demain":
        return tomorrow(context.reference);
      default:
        if (lowerText.match(/cette\s*nuit/)) {
          assignSimilarDate(component, targetDate);
          component.imply("hour", 22);
          component.imply("meridiem", Meridiem.PM);
        } else if (lowerText.match(/la\s*veille/)) {
          targetDate = targetDate.add(-1, "day");
          assignSimilarDate(component, targetDate);
          component.imply("hour", 0);
        }
    }
    return component;
  }
}
class FRCasualTimeParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern(context) {
    return /(cet?)?\s*(matin|soir|après-midi|aprem|a midi|à minuit)(?=\W|$)/i;
  }
  innerExtract(context, match) {
    const suffixLower = match[2].toLowerCase();
    const component = context.createParsingComponents();
    switch (suffixLower) {
      case "après-midi":
      case "aprem":
        component.imply("hour", 14);
        component.imply("minute", 0);
        component.imply("meridiem", Meridiem.PM);
        break;
      case "soir":
        component.imply("hour", 18);
        component.imply("minute", 0);
        component.imply("meridiem", Meridiem.PM);
        break;
      case "matin":
        component.imply("hour", 8);
        component.imply("minute", 0);
        component.imply("meridiem", Meridiem.AM);
        break;
      case "a midi":
        component.imply("hour", 12);
        component.imply("minute", 0);
        component.imply("meridiem", Meridiem.AM);
        break;
      case "à minuit":
        component.imply("hour", 0);
        component.imply("meridiem", Meridiem.AM);
        break;
    }
    return component;
  }
}
class FRTimeExpressionParser extends AbstractTimeExpressionParser {
  primaryPrefix() {
    return "(?:(?:[àa])\\s*)?";
  }
  followingPhase() {
    return "\\s*(?:\\-|\\–|\\~|\\〜|[àa]|\\?)\\s*";
  }
  extractPrimaryTimeComponents(context, match) {
    if (match[0].match(/^\s*\d{4}\s*$/)) {
      return null;
    }
    return super.extractPrimaryTimeComponents(context, match);
  }
}
class FRMergeDateTimeRefiner extends AbstractMergeDateTimeRefiner {
  patternBetween() {
    return new RegExp("^\\s*(T|à|a|vers|de|,|-)?\\s*$");
  }
}
class FRMergeDateRangeRefiner extends AbstractMergeDateRangeRefiner {
  patternBetween() {
    return /^\s*(à|a|-)\s*$/i;
  }
}
const WEEKDAY_DICTIONARY$5 = {
  "dimanche": 0,
  "dim": 0,
  "lundi": 1,
  "lun": 1,
  "mardi": 2,
  "mar": 2,
  "mercredi": 3,
  "mer": 3,
  "jeudi": 4,
  "jeu": 4,
  "vendredi": 5,
  "ven": 5,
  "samedi": 6,
  "sam": 6
};
const MONTH_DICTIONARY$5 = {
  "janvier": 1,
  "jan": 1,
  "jan.": 1,
  "février": 2,
  "fév": 2,
  "fév.": 2,
  "fevrier": 2,
  "fev": 2,
  "fev.": 2,
  "mars": 3,
  "mar": 3,
  "mar.": 3,
  "avril": 4,
  "avr": 4,
  "avr.": 4,
  "mai": 5,
  "juin": 6,
  "jun": 6,
  "juillet": 7,
  "juil": 7,
  "jul": 7,
  "jul.": 7,
  "août": 8,
  "aout": 8,
  "septembre": 9,
  "sep": 9,
  "sep.": 9,
  "sept": 9,
  "sept.": 9,
  "octobre": 10,
  "oct": 10,
  "oct.": 10,
  "novembre": 11,
  "nov": 11,
  "nov.": 11,
  "décembre": 12,
  "decembre": 12,
  "dec": 12,
  "dec.": 12
};
const INTEGER_WORD_DICTIONARY$4 = {
  "un": 1,
  "deux": 2,
  "trois": 3,
  "quatre": 4,
  "cinq": 5,
  "six": 6,
  "sept": 7,
  "huit": 8,
  "neuf": 9,
  "dix": 10,
  "onze": 11,
  "douze": 12,
  "treize": 13
};
const TIME_UNIT_DICTIONARY$4 = {
  "sec": "second",
  "seconde": "second",
  "secondes": "second",
  "min": "minute",
  "mins": "minute",
  "minute": "minute",
  "minutes": "minute",
  "h": "hour",
  "hr": "hour",
  "hrs": "hour",
  "heure": "hour",
  "heures": "hour",
  "jour": "d",
  "jours": "d",
  "semaine": "week",
  "semaines": "week",
  "mois": "month",
  "trimestre": "quarter",
  "trimestres": "quarter",
  "ans": "year",
  "année": "year",
  "années": "year"
};
const NUMBER_PATTERN$4 = `(?:${matchAnyPattern(INTEGER_WORD_DICTIONARY$4)}|[0-9]+|[0-9]+\\.[0-9]+|une?\\b|quelques?|demi-?)`;
function parseNumberPattern$4(match) {
  const num = match.toLowerCase();
  if (INTEGER_WORD_DICTIONARY$4[num] !== void 0) {
    return INTEGER_WORD_DICTIONARY$4[num];
  } else if (num === "une" || num === "un") {
    return 1;
  } else if (num.match(/quelques?/)) {
    return 3;
  } else if (num.match(/demi-?/)) {
    return 0.5;
  }
  return parseFloat(num);
}
const ORDINAL_NUMBER_PATTERN$3 = `(?:[0-9]{1,2}(?:er)?)`;
function parseOrdinalNumberPattern$3(match) {
  let num = match.toLowerCase();
  num = num.replace(/(?:er)$/i, "");
  return parseInt(num);
}
const YEAR_PATTERN$5 = `(?:[1-9][0-9]{0,3}\\s*(?:AC|AD|p\\.\\s*C(?:hr?)?\\.\\s*n\\.)|[1-2][0-9]{3}|[5-9][0-9])`;
function parseYear$4(match) {
  if (/AC/i.test(match)) {
    match = match.replace(/BC/i, "");
    return -parseInt(match);
  }
  if (/AD/i.test(match) || /C/i.test(match)) {
    match = match.replace(/[^\d]+/i, "");
    return parseInt(match);
  }
  let yearNumber = parseInt(match);
  if (yearNumber < 100) {
    if (yearNumber > 50) {
      yearNumber = yearNumber + 1900;
    } else {
      yearNumber = yearNumber + 2e3;
    }
  }
  return yearNumber;
}
const SINGLE_TIME_UNIT_PATTERN$4 = `(${NUMBER_PATTERN$4})\\s{0,5}(${matchAnyPattern(TIME_UNIT_DICTIONARY$4)})\\s{0,5}`;
const SINGLE_TIME_UNIT_REGEX$4 = new RegExp(SINGLE_TIME_UNIT_PATTERN$4, "i");
const TIME_UNITS_PATTERN$4 = repeatedTimeunitPattern("", SINGLE_TIME_UNIT_PATTERN$4);
function parseTimeUnits$4(timeunitText) {
  const fragments = {};
  let remainingText = timeunitText;
  let match = SINGLE_TIME_UNIT_REGEX$4.exec(remainingText);
  while (match) {
    collectDateTimeFragment$4(fragments, match);
    remainingText = remainingText.substring(match[0].length);
    match = SINGLE_TIME_UNIT_REGEX$4.exec(remainingText);
  }
  return fragments;
}
function collectDateTimeFragment$4(fragments, match) {
  const num = parseNumberPattern$4(match[1]);
  const unit = TIME_UNIT_DICTIONARY$4[match[2].toLowerCase()];
  fragments[unit] = num;
}
const PATTERN$E = new RegExp(`(?:(?:\\,|\\(|\\（)\\s*)?(?:(?:ce)\\s*)?(${matchAnyPattern(WEEKDAY_DICTIONARY$5)})(?:\\s*(?:\\,|\\)|\\）))?(?:\\s*(dernier|prochain)\\s*)?(?=\\W|\\d|$)`, "i");
const WEEKDAY_GROUP$5 = 1;
const POSTFIX_GROUP$5 = 2;
class FRWeekdayParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN$E;
  }
  innerExtract(context, match) {
    const dayOfWeek = match[WEEKDAY_GROUP$5].toLowerCase();
    const weekday = WEEKDAY_DICTIONARY$5[dayOfWeek];
    if (weekday === void 0) {
      return null;
    }
    let suffix = match[POSTFIX_GROUP$5];
    suffix = suffix || "";
    suffix = suffix.toLowerCase();
    let modifier = null;
    if (suffix == "dernier") {
      modifier = "last";
    } else if (suffix == "prochain") {
      modifier = "next";
    }
    return createParsingComponentsAtWeekday(context.reference, weekday, modifier);
  }
}
const FIRST_REG_PATTERN$2 = new RegExp("(^|\\s|T)(?:(?:[àa])\\s*)?(\\d{1,2})(?:h|:)?(?:(\\d{1,2})(?:m|:)?)?(?:(\\d{1,2})(?:s|:)?)?(?:\\s*(A\\.M\\.|P\\.M\\.|AM?|PM?))?(?=\\W|$)", "i");
const SECOND_REG_PATTERN$2 = new RegExp("^\\s*(\\-|\\–|\\~|\\〜|[àa]|\\?)\\s*(\\d{1,2})(?:h|:)?(?:(\\d{1,2})(?:m|:)?)?(?:(\\d{1,2})(?:s|:)?)?(?:\\s*(A\\.M\\.|P\\.M\\.|AM?|PM?))?(?=\\W|$)", "i");
const HOUR_GROUP$2 = 2;
const MINUTE_GROUP$2 = 3;
const SECOND_GROUP$2 = 4;
const AM_PM_HOUR_GROUP$2 = 5;
class FRSpecificTimeExpressionParser {
  pattern(context) {
    return FIRST_REG_PATTERN$2;
  }
  extract(context, match) {
    const result = context.createParsingResult(match.index + match[1].length, match[0].substring(match[1].length));
    if (result.text.match(/^\d{4}$/)) {
      match.index += match[0].length;
      return null;
    }
    result.start = FRSpecificTimeExpressionParser.extractTimeComponent(result.start.clone(), match);
    if (!result.start) {
      match.index += match[0].length;
      return null;
    }
    const remainingText = context.text.substring(match.index + match[0].length);
    const secondMatch = SECOND_REG_PATTERN$2.exec(remainingText);
    if (secondMatch) {
      result.end = FRSpecificTimeExpressionParser.extractTimeComponent(result.start.clone(), secondMatch);
      if (result.end) {
        result.text += secondMatch[0];
      }
    }
    return result;
  }
  static extractTimeComponent(extractingComponents, match) {
    let hour = 0;
    let minute = 0;
    let meridiem = null;
    hour = parseInt(match[HOUR_GROUP$2]);
    if (match[MINUTE_GROUP$2] != null) {
      minute = parseInt(match[MINUTE_GROUP$2]);
    }
    if (minute >= 60 || hour > 24) {
      return null;
    }
    if (hour >= 12) {
      meridiem = Meridiem.PM;
    }
    if (match[AM_PM_HOUR_GROUP$2] != null) {
      if (hour > 12)
        return null;
      const ampm = match[AM_PM_HOUR_GROUP$2][0].toLowerCase();
      if (ampm == "a") {
        meridiem = Meridiem.AM;
        if (hour == 12) {
          hour = 0;
        }
      }
      if (ampm == "p") {
        meridiem = Meridiem.PM;
        if (hour != 12) {
          hour += 12;
        }
      }
    }
    extractingComponents.assign("hour", hour);
    extractingComponents.assign("minute", minute);
    if (meridiem !== null) {
      extractingComponents.assign("meridiem", meridiem);
    } else {
      if (hour < 12) {
        extractingComponents.imply("meridiem", Meridiem.AM);
      } else {
        extractingComponents.imply("meridiem", Meridiem.PM);
      }
    }
    if (match[SECOND_GROUP$2] != null) {
      const second = parseInt(match[SECOND_GROUP$2]);
      if (second >= 60)
        return null;
      extractingComponents.assign("second", second);
    }
    return extractingComponents;
  }
}
const PATTERN$D = new RegExp(`(?:on\\s*?)?(${ORDINAL_NUMBER_PATTERN$3})(?:\\s*(?:au|\\-|\\–|jusqu'au?|\\s)\\s*(${ORDINAL_NUMBER_PATTERN$3}))?(?:-|/|\\s*(?:de)?\\s*)(${matchAnyPattern(MONTH_DICTIONARY$5)})(?:(?:-|/|,?\\s*)(${YEAR_PATTERN$5}(?![^\\s]\\d)))?(?=\\W|$)`, "i");
const DATE_GROUP$6 = 1;
const DATE_TO_GROUP$5 = 2;
const MONTH_NAME_GROUP$9 = 3;
const YEAR_GROUP$b = 4;
class FRMonthNameLittleEndianParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN$D;
  }
  innerExtract(context, match) {
    const result = context.createParsingResult(match.index, match[0]);
    const month = MONTH_DICTIONARY$5[match[MONTH_NAME_GROUP$9].toLowerCase()];
    const day = parseOrdinalNumberPattern$3(match[DATE_GROUP$6]);
    if (day > 31) {
      match.index = match.index + match[DATE_GROUP$6].length;
      return null;
    }
    result.start.assign("month", month);
    result.start.assign("day", day);
    if (match[YEAR_GROUP$b]) {
      const yearNumber = parseYear$4(match[YEAR_GROUP$b]);
      result.start.assign("year", yearNumber);
    } else {
      const year2 = findYearClosestToRef(context.refDate, day, month);
      result.start.imply("year", year2);
    }
    if (match[DATE_TO_GROUP$5]) {
      const endDate = parseOrdinalNumberPattern$3(match[DATE_TO_GROUP$5]);
      result.end = result.start.clone();
      result.end.assign("day", endDate);
    }
    return result;
  }
}
let FRTimeUnitAgoFormatParser$1 = class FRTimeUnitAgoFormatParser extends AbstractParserWithWordBoundaryChecking {
  constructor() {
    super();
  }
  innerPattern() {
    return new RegExp(`il y a\\s*(${TIME_UNITS_PATTERN$4})(?=(?:\\W|$))`, "i");
  }
  innerExtract(context, match) {
    const timeUnits = parseTimeUnits$4(match[1]);
    const outputTimeUnits = reverseTimeUnits(timeUnits);
    return ParsingComponents.createRelativeFromReference(context.reference, outputTimeUnits);
  }
};
class FRTimeUnitWithinFormatParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return new RegExp(`(?:dans|en|pour|pendant|de)\\s*(${TIME_UNITS_PATTERN$4})(?=\\W|$)`, "i");
  }
  innerExtract(context, match) {
    const timeUnits = parseTimeUnits$4(match[1]);
    return ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
  }
}
class FRTimeUnitAgoFormatParser2 extends AbstractParserWithWordBoundaryChecking {
  constructor() {
    super();
  }
  innerPattern() {
    return new RegExp(`(?:les?|la|l'|du|des?)\\s*(${NUMBER_PATTERN$4})?(?:\\s*(prochaine?s?|derni[eè]re?s?|pass[ée]e?s?|pr[ée]c[ée]dents?|suivante?s?))?\\s*(${matchAnyPattern(TIME_UNIT_DICTIONARY$4)})(?:\\s*(prochaine?s?|derni[eè]re?s?|pass[ée]e?s?|pr[ée]c[ée]dents?|suivante?s?))?`, "i");
  }
  innerExtract(context, match) {
    const num = match[1] ? parseNumberPattern$4(match[1]) : 1;
    const unit = TIME_UNIT_DICTIONARY$4[match[3].toLowerCase()];
    let timeUnits = {};
    timeUnits[unit] = num;
    let modifier = match[2] || match[4] || "";
    modifier = modifier.toLowerCase();
    if (!modifier) {
      return;
    }
    if (/derni[eè]re?s?/.test(modifier) || /pass[ée]e?s?/.test(modifier) || /pr[ée]c[ée]dents?/.test(modifier)) {
      timeUnits = reverseTimeUnits(timeUnits);
    }
    return ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
  }
}
const casual$9 = new Chrono(createCasualConfiguration$8());
const strict$9 = new Chrono(createConfiguration$8(true));
function parse$9(text, ref, option) {
  return casual$9.parse(text, ref, option);
}
function parseDate$9(text, ref, option) {
  return casual$9.parseDate(text, ref, option);
}
function createCasualConfiguration$8(littleEndian = true) {
  const option = createConfiguration$8(false, littleEndian);
  option.parsers.unshift(new FRCasualDateParser());
  option.parsers.unshift(new FRCasualTimeParser());
  option.parsers.unshift(new FRTimeUnitAgoFormatParser2());
  return option;
}
function createConfiguration$8(strictMode = true, littleEndian = true) {
  return includeCommonConfiguration({
    parsers: [
      new SlashDateFormatParser(littleEndian),
      new FRMonthNameLittleEndianParser(),
      new FRTimeExpressionParser(),
      new FRSpecificTimeExpressionParser(),
      new FRTimeUnitAgoFormatParser$1(),
      new FRTimeUnitWithinFormatParser(),
      new FRWeekdayParser()
    ],
    refiners: [new FRMergeDateTimeRefiner(), new FRMergeDateRangeRefiner()]
  }, strictMode);
}
const index$8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Chrono,
  get Meridiem() {
    return Meridiem;
  },
  ParsingResult,
  get Weekday() {
    return Weekday;
  },
  casual: casual$9,
  createCasualConfiguration: createCasualConfiguration$8,
  createConfiguration: createConfiguration$8,
  parse: parse$9,
  parseDate: parseDate$9,
  strict: strict$9
}, Symbol.toStringTag, { value: "Module" }));
function toHankaku(text) {
  return String(text).replace(/\u2019/g, "'").replace(/\u201D/g, '"').replace(/\u3000/g, " ").replace(/\uFFE5/g, "¥").replace(/[\uFF01\uFF03-\uFF06\uFF08\uFF09\uFF0C-\uFF19\uFF1C-\uFF1F\uFF21-\uFF3B\uFF3D\uFF3F\uFF41-\uFF5B\uFF5D\uFF5E]/g, alphaNum);
}
function alphaNum(token) {
  return String.fromCharCode(token.charCodeAt(0) - 65248);
}
const PATTERN$C = /(?:(?:([同今本])|((昭和|平成|令和)?([0-9０-９]{1,4}|元)))年\s*)?([0-9０-９]{1,2})月\s*([0-9０-９]{1,2})日/i;
const SPECIAL_YEAR_GROUP = 1;
const TYPICAL_YEAR_GROUP = 2;
const ERA_GROUP = 3;
const YEAR_NUMBER_GROUP$1 = 4;
const MONTH_GROUP$3 = 5;
const DAY_GROUP$3 = 6;
class JPStandardParser {
  pattern() {
    return PATTERN$C;
  }
  extract(context, match) {
    const month = parseInt(toHankaku(match[MONTH_GROUP$3]));
    const day = parseInt(toHankaku(match[DAY_GROUP$3]));
    const components = context.createParsingComponents({
      day,
      month
    });
    if (match[SPECIAL_YEAR_GROUP] && match[SPECIAL_YEAR_GROUP].match("同|今|本")) {
      const moment = dayjs(context.refDate);
      components.assign("year", moment.year());
    }
    if (match[TYPICAL_YEAR_GROUP]) {
      const yearNumText = match[YEAR_NUMBER_GROUP$1];
      let year2 = yearNumText == "元" ? 1 : parseInt(toHankaku(yearNumText));
      if (match[ERA_GROUP] == "令和") {
        year2 += 2018;
      } else if (match[ERA_GROUP] == "平成") {
        year2 += 1988;
      } else if (match[ERA_GROUP] == "昭和") {
        year2 += 1925;
      }
      components.assign("year", year2);
    } else {
      const year2 = findYearClosestToRef(context.refDate, day, month);
      components.imply("year", year2);
    }
    return components;
  }
}
class JPMergeDateRangeRefiner extends AbstractMergeDateRangeRefiner {
  patternBetween() {
    return /^\s*(から|ー|-)\s*$/i;
  }
}
const PATTERN$B = /今日|きょう|当日|とうじつ|昨日|きのう|明日|あした|今夜|こんや|今夕|こんゆう|今晩|こんばん|今朝|けさ/i;
function normalizeTextToKanji(text) {
  switch (text) {
    case "きょう":
      return "今日";
    case "とうじつ":
      return "当日";
    case "きのう":
      return "昨日";
    case "あした":
      return "明日";
    case "こんや":
      return "今夜";
    case "こんゆう":
      return "今夕";
    case "こんばん":
      return "今晩";
    case "けさ":
      return "今朝";
    default:
      return text;
  }
}
class JPCasualDateParser {
  pattern() {
    return PATTERN$B;
  }
  extract(context, match) {
    const text = normalizeTextToKanji(match[0]);
    const date = dayjs(context.refDate);
    const components = context.createParsingComponents();
    switch (text) {
      case "昨日":
        return yesterday(context.reference);
      case "明日":
        return tomorrow(context.reference);
      case "今日":
      case "当日":
        return today(context.reference);
    }
    if (text == "今夜" || text == "今夕" || text == "今晩") {
      components.imply("hour", 22);
      components.assign("meridiem", Meridiem.PM);
    } else if (text.match("今朝")) {
      components.imply("hour", 6);
      components.assign("meridiem", Meridiem.AM);
    }
    components.assign("day", date.date());
    components.assign("month", date.month() + 1);
    components.assign("year", date.year());
    return components;
  }
}
const casual$8 = new Chrono(createCasualConfiguration$7());
const strict$8 = new Chrono(createConfiguration$7());
function parse$8(text, ref, option) {
  return casual$8.parse(text, ref, option);
}
function parseDate$8(text, ref, option) {
  return casual$8.parseDate(text, ref, option);
}
function createCasualConfiguration$7() {
  const option = createConfiguration$7();
  option.parsers.unshift(new JPCasualDateParser());
  return option;
}
function createConfiguration$7() {
  return {
    parsers: [new JPStandardParser()],
    refiners: [new JPMergeDateRangeRefiner()]
  };
}
const index$7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Chrono,
  get Meridiem() {
    return Meridiem;
  },
  ParsingResult,
  get Weekday() {
    return Weekday;
  },
  casual: casual$8,
  createCasualConfiguration: createCasualConfiguration$7,
  createConfiguration: createConfiguration$7,
  parse: parse$8,
  parseDate: parseDate$8,
  strict: strict$8
}, Symbol.toStringTag, { value: "Module" }));
const WEEKDAY_DICTIONARY$4 = {
  "domingo": 0,
  "dom": 0,
  "segunda": 1,
  "segunda-feira": 1,
  "seg": 1,
  "terça": 2,
  "terça-feira": 2,
  "ter": 2,
  "quarta": 3,
  "quarta-feira": 3,
  "qua": 3,
  "quinta": 4,
  "quinta-feira": 4,
  "qui": 4,
  "sexta": 5,
  "sexta-feira": 5,
  "sex": 5,
  "sábado": 6,
  "sabado": 6,
  "sab": 6
};
const MONTH_DICTIONARY$4 = {
  "janeiro": 1,
  "jan": 1,
  "jan.": 1,
  "fevereiro": 2,
  "fev": 2,
  "fev.": 2,
  "março": 3,
  "mar": 3,
  "mar.": 3,
  "abril": 4,
  "abr": 4,
  "abr.": 4,
  "maio": 5,
  "mai": 5,
  "mai.": 5,
  "junho": 6,
  "jun": 6,
  "jun.": 6,
  "julho": 7,
  "jul": 7,
  "jul.": 7,
  "agosto": 8,
  "ago": 8,
  "ago.": 8,
  "setembro": 9,
  "set": 9,
  "set.": 9,
  "outubro": 10,
  "out": 10,
  "out.": 10,
  "novembro": 11,
  "nov": 11,
  "nov.": 11,
  "dezembro": 12,
  "dez": 12,
  "dez.": 12
};
const YEAR_PATTERN$4 = "[0-9]{1,4}(?![^\\s]\\d)(?:\\s*[a|d]\\.?\\s*c\\.?|\\s*a\\.?\\s*d\\.?)?";
function parseYear$3(match) {
  if (match.match(/^[0-9]{1,4}$/)) {
    let yearNumber = parseInt(match);
    if (yearNumber < 100) {
      if (yearNumber > 50) {
        yearNumber = yearNumber + 1900;
      } else {
        yearNumber = yearNumber + 2e3;
      }
    }
    return yearNumber;
  }
  if (match.match(/a\.?\s*c\.?/i)) {
    match = match.replace(/a\.?\s*c\.?/i, "");
    return -parseInt(match);
  }
  return parseInt(match);
}
const PATTERN$A = new RegExp(`(?:(?:\\,|\\(|\\（)\\s*)?(?:(este|esta|passado|pr[oó]ximo)\\s*)?(${matchAnyPattern(WEEKDAY_DICTIONARY$4)})(?:\\s*(?:\\,|\\)|\\）))?(?:\\s*(este|esta|passado|pr[óo]ximo)\\s*semana)?(?=\\W|\\d|$)`, "i");
const PREFIX_GROUP$4 = 1;
const WEEKDAY_GROUP$4 = 2;
const POSTFIX_GROUP$4 = 3;
class PTWeekdayParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN$A;
  }
  innerExtract(context, match) {
    const dayOfWeek = match[WEEKDAY_GROUP$4].toLowerCase();
    const weekday = WEEKDAY_DICTIONARY$4[dayOfWeek];
    if (weekday === void 0) {
      return null;
    }
    const prefix = match[PREFIX_GROUP$4];
    const postfix = match[POSTFIX_GROUP$4];
    let norm = prefix || postfix || "";
    norm = norm.toLowerCase();
    let modifier = null;
    if (norm == "passado") {
      modifier = "this";
    } else if (norm == "próximo" || norm == "proximo") {
      modifier = "next";
    } else if (norm == "este") {
      modifier = "this";
    }
    return createParsingComponentsAtWeekday(context.reference, weekday, modifier);
  }
}
class PTTimeExpressionParser extends AbstractTimeExpressionParser {
  primaryPrefix() {
    return "(?:(?:ao?|às?|das|da|de|do)\\s*)?";
  }
  followingPhase() {
    return "\\s*(?:\\-|\\–|\\~|\\〜|a(?:o)?|\\?)\\s*";
  }
}
class PTMergeDateTimeRefiner extends AbstractMergeDateTimeRefiner {
  patternBetween() {
    return new RegExp("^\\s*(?:,|à)?\\s*$");
  }
}
class PTMergeDateRangeRefiner extends AbstractMergeDateRangeRefiner {
  patternBetween() {
    return /^\s*(?:-)\s*$/i;
  }
}
const PATTERN$z = new RegExp(`([0-9]{1,2})(?:º|ª|°)?(?:\\s*(?:desde|de|\\-|\\–|ao?|\\s)\\s*([0-9]{1,2})(?:º|ª|°)?)?\\s*(?:de)?\\s*(?:-|/|\\s*(?:de|,)?\\s*)(${matchAnyPattern(MONTH_DICTIONARY$4)})(?:\\s*(?:de|,)?\\s*(${YEAR_PATTERN$4}))?(?=\\W|$)`, "i");
const DATE_GROUP$5 = 1;
const DATE_TO_GROUP$4 = 2;
const MONTH_NAME_GROUP$8 = 3;
const YEAR_GROUP$a = 4;
class PTMonthNameLittleEndianParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN$z;
  }
  innerExtract(context, match) {
    const result = context.createParsingResult(match.index, match[0]);
    const month = MONTH_DICTIONARY$4[match[MONTH_NAME_GROUP$8].toLowerCase()];
    const day = parseInt(match[DATE_GROUP$5]);
    if (day > 31) {
      match.index = match.index + match[DATE_GROUP$5].length;
      return null;
    }
    result.start.assign("month", month);
    result.start.assign("day", day);
    if (match[YEAR_GROUP$a]) {
      const yearNumber = parseYear$3(match[YEAR_GROUP$a]);
      result.start.assign("year", yearNumber);
    } else {
      const year2 = findYearClosestToRef(context.refDate, day, month);
      result.start.imply("year", year2);
    }
    if (match[DATE_TO_GROUP$4]) {
      const endDate = parseInt(match[DATE_TO_GROUP$4]);
      result.end = result.start.clone();
      result.end.assign("day", endDate);
    }
    return result;
  }
}
class PTCasualDateParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern(context) {
    return /(agora|hoje|amanha|amanhã|ontem)(?=\W|$)/i;
  }
  innerExtract(context, match) {
    const lowerText = match[0].toLowerCase();
    const component = context.createParsingComponents();
    switch (lowerText) {
      case "agora":
        return now(context.reference);
      case "hoje":
        return today(context.reference);
      case "amanha":
      case "amanhã":
        return tomorrow(context.reference);
      case "ontem":
        return yesterday(context.reference);
    }
    return component;
  }
}
class PTCasualTimeParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return /(?:esta\s*)?(manha|manhã|tarde|meia-noite|meio-dia|noite)(?=\W|$)/i;
  }
  innerExtract(context, match) {
    const targetDate = dayjs(context.refDate);
    const component = context.createParsingComponents();
    switch (match[1].toLowerCase()) {
      case "tarde":
        component.imply("meridiem", Meridiem.PM);
        component.imply("hour", 15);
        break;
      case "noite":
        component.imply("meridiem", Meridiem.PM);
        component.imply("hour", 22);
        break;
      case "manha":
      case "manhã":
        component.imply("meridiem", Meridiem.AM);
        component.imply("hour", 6);
        break;
      case "meia-noite":
        assignTheNextDay(component, targetDate);
        component.imply("hour", 0);
        component.imply("minute", 0);
        component.imply("second", 0);
        break;
      case "meio-dia":
        component.imply("meridiem", Meridiem.AM);
        component.imply("hour", 12);
        break;
    }
    return component;
  }
}
const casual$7 = new Chrono(createCasualConfiguration$6());
const strict$7 = new Chrono(createConfiguration$6(true));
function parse$7(text, ref, option) {
  return casual$7.parse(text, ref, option);
}
function parseDate$7(text, ref, option) {
  return casual$7.parseDate(text, ref, option);
}
function createCasualConfiguration$6(littleEndian = true) {
  const option = createConfiguration$6(false, littleEndian);
  option.parsers.push(new PTCasualDateParser());
  option.parsers.push(new PTCasualTimeParser());
  return option;
}
function createConfiguration$6(strictMode = true, littleEndian = true) {
  return includeCommonConfiguration({
    parsers: [
      new SlashDateFormatParser(littleEndian),
      new PTWeekdayParser(),
      new PTTimeExpressionParser(),
      new PTMonthNameLittleEndianParser()
    ],
    refiners: [new PTMergeDateTimeRefiner(), new PTMergeDateRangeRefiner()]
  }, strictMode);
}
const index$6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Chrono,
  get Meridiem() {
    return Meridiem;
  },
  ParsingResult,
  get Weekday() {
    return Weekday;
  },
  casual: casual$7,
  createCasualConfiguration: createCasualConfiguration$6,
  createConfiguration: createConfiguration$6,
  parse: parse$7,
  parseDate: parseDate$7,
  strict: strict$7
}, Symbol.toStringTag, { value: "Module" }));
class NLMergeDateRangeRefiner extends AbstractMergeDateRangeRefiner {
  patternBetween() {
    return /^\s*(tot|-)\s*$/i;
  }
}
class NLMergeDateTimeRefiner extends AbstractMergeDateTimeRefiner {
  patternBetween() {
    return new RegExp("^\\s*(om|na|voor|in de|,|-)?\\s*$");
  }
}
class NLCasualDateParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern(context) {
    return /(nu|vandaag|morgen|morgend|gisteren)(?=\W|$)/i;
  }
  innerExtract(context, match) {
    const lowerText = match[0].toLowerCase();
    const component = context.createParsingComponents();
    switch (lowerText) {
      case "nu":
        return now(context.reference);
      case "vandaag":
        return today(context.reference);
      case "morgen":
      case "morgend":
        return tomorrow(context.reference);
      case "gisteren":
        return yesterday(context.reference);
    }
    return component;
  }
}
const DAY_GROUP$2 = 1;
const MOMENT_GROUP = 2;
class NLCasualTimeParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return /(deze)?\s*(namiddag|avond|middernacht|ochtend|middag|'s middags|'s avonds|'s ochtends)(?=\W|$)/i;
  }
  innerExtract(context, match) {
    const targetDate = dayjs(context.refDate);
    const component = context.createParsingComponents();
    if (match[DAY_GROUP$2] === "deze") {
      component.assign("day", context.refDate.getDate());
      component.assign("month", context.refDate.getMonth() + 1);
      component.assign("year", context.refDate.getFullYear());
    }
    switch (match[MOMENT_GROUP].toLowerCase()) {
      case "namiddag":
      case "'s namiddags":
        component.imply("meridiem", Meridiem.PM);
        component.imply("hour", 15);
        break;
      case "avond":
      case "'s avonds'":
        component.imply("meridiem", Meridiem.PM);
        component.imply("hour", 20);
        break;
      case "middernacht":
        assignTheNextDay(component, targetDate);
        component.imply("hour", 0);
        component.imply("minute", 0);
        component.imply("second", 0);
        break;
      case "ochtend":
      case "'s ochtends":
        component.imply("meridiem", Meridiem.AM);
        component.imply("hour", 6);
        break;
      case "middag":
      case "'s middags":
        component.imply("meridiem", Meridiem.AM);
        component.imply("hour", 12);
        break;
    }
    return component;
  }
}
const WEEKDAY_DICTIONARY$3 = {
  zondag: 0,
  zon: 0,
  "zon.": 0,
  zo: 0,
  "zo.": 0,
  maandag: 1,
  ma: 1,
  "ma.": 1,
  dinsdag: 2,
  din: 2,
  "din.": 2,
  di: 2,
  "di.": 2,
  woensdag: 3,
  woe: 3,
  "woe.": 3,
  wo: 3,
  "wo.": 3,
  donderdag: 4,
  dond: 4,
  "dond.": 4,
  do: 4,
  "do.": 4,
  vrijdag: 5,
  vrij: 5,
  "vrij.": 5,
  vr: 5,
  "vr.": 5,
  zaterdag: 6,
  zat: 6,
  "zat.": 6,
  "za": 6,
  "za.": 6
};
const MONTH_DICTIONARY$3 = {
  januari: 1,
  jan: 1,
  "jan.": 1,
  februari: 2,
  feb: 2,
  "feb.": 2,
  maart: 3,
  mar: 3,
  "mar.": 3,
  mrt: 3,
  "mrt.": 3,
  april: 4,
  apr: 4,
  "apr.": 4,
  mei: 5,
  juni: 6,
  jun: 6,
  "jun.": 6,
  juli: 7,
  jul: 7,
  "jul.": 7,
  augustus: 8,
  aug: 8,
  "aug.": 8,
  september: 9,
  sep: 9,
  "sep.": 9,
  sept: 9,
  "sept.": 9,
  oktober: 10,
  okt: 10,
  "okt.": 10,
  november: 11,
  nov: 11,
  "nov.": 11,
  december: 12,
  dec: 12,
  "dec.": 12
};
const INTEGER_WORD_DICTIONARY$3 = {
  een: 1,
  twee: 2,
  drie: 3,
  vier: 4,
  vijf: 5,
  zes: 6,
  zeven: 7,
  acht: 8,
  negen: 9,
  tien: 10,
  elf: 11,
  twaalf: 12
};
const ORDINAL_WORD_DICTIONARY$2 = {
  eerste: 1,
  tweede: 2,
  derde: 3,
  vierde: 4,
  vijfde: 5,
  zesde: 6,
  zevende: 7,
  achtste: 8,
  negende: 9,
  tiende: 10,
  elfde: 11,
  twaalfde: 12,
  dertiende: 13,
  veertiende: 14,
  vijftiende: 15,
  zestiende: 16,
  zeventiende: 17,
  achttiende: 18,
  negentiende: 19,
  twintigste: 20,
  "eenentwintigste": 21,
  "tweeëntwintigste": 22,
  "drieentwintigste": 23,
  "vierentwintigste": 24,
  "vijfentwintigste": 25,
  "zesentwintigste": 26,
  "zevenentwintigste": 27,
  "achtentwintig": 28,
  "negenentwintig": 29,
  "dertigste": 30,
  "eenendertigste": 31
};
const TIME_UNIT_DICTIONARY$3 = {
  sec: "second",
  second: "second",
  seconden: "second",
  min: "minute",
  mins: "minute",
  minute: "minute",
  minuut: "minute",
  minuten: "minute",
  minuutje: "minute",
  h: "hour",
  hr: "hour",
  hrs: "hour",
  uur: "hour",
  u: "hour",
  uren: "hour",
  dag: "d",
  dagen: "d",
  week: "week",
  weken: "week",
  maand: "month",
  maanden: "month",
  jaar: "year",
  jr: "year",
  jaren: "year"
};
const NUMBER_PATTERN$3 = `(?:${matchAnyPattern(INTEGER_WORD_DICTIONARY$3)}|[0-9]+|[0-9]+[\\.,][0-9]+|halve?|half|paar)`;
function parseNumberPattern$3(match) {
  const num = match.toLowerCase();
  if (INTEGER_WORD_DICTIONARY$3[num] !== void 0) {
    return INTEGER_WORD_DICTIONARY$3[num];
  } else if (num === "paar") {
    return 2;
  } else if (num === "half" || num.match(/halve?/)) {
    return 0.5;
  }
  return parseFloat(num.replace(",", "."));
}
const ORDINAL_NUMBER_PATTERN$2 = `(?:${matchAnyPattern(ORDINAL_WORD_DICTIONARY$2)}|[0-9]{1,2}(?:ste|de)?)`;
function parseOrdinalNumberPattern$2(match) {
  let num = match.toLowerCase();
  if (ORDINAL_WORD_DICTIONARY$2[num] !== void 0) {
    return ORDINAL_WORD_DICTIONARY$2[num];
  }
  num = num.replace(/(?:ste|de)$/i, "");
  return parseInt(num);
}
const YEAR_PATTERN$3 = `(?:[1-9][0-9]{0,3}\\s*(?:voor Christus|na Christus)|[1-2][0-9]{3}|[5-9][0-9])`;
function parseYear$2(match) {
  if (/voor Christus/i.test(match)) {
    match = match.replace(/voor Christus/i, "");
    return -parseInt(match);
  }
  if (/na Christus/i.test(match)) {
    match = match.replace(/na Christus/i, "");
    return parseInt(match);
  }
  const rawYearNumber = parseInt(match);
  return findMostLikelyADYear(rawYearNumber);
}
const SINGLE_TIME_UNIT_PATTERN$3 = `(${NUMBER_PATTERN$3})\\s{0,5}(${matchAnyPattern(TIME_UNIT_DICTIONARY$3)})\\s{0,5}`;
const SINGLE_TIME_UNIT_REGEX$3 = new RegExp(SINGLE_TIME_UNIT_PATTERN$3, "i");
const TIME_UNITS_PATTERN$3 = repeatedTimeunitPattern(`(?:(?:binnen|in)\\s*)?`, SINGLE_TIME_UNIT_PATTERN$3);
function parseTimeUnits$3(timeunitText) {
  const fragments = {};
  let remainingText = timeunitText;
  let match = SINGLE_TIME_UNIT_REGEX$3.exec(remainingText);
  while (match) {
    collectDateTimeFragment$3(fragments, match);
    remainingText = remainingText.substring(match[0].length);
    match = SINGLE_TIME_UNIT_REGEX$3.exec(remainingText);
  }
  return fragments;
}
function collectDateTimeFragment$3(fragments, match) {
  const num = parseNumberPattern$3(match[1]);
  const unit = TIME_UNIT_DICTIONARY$3[match[2].toLowerCase()];
  fragments[unit] = num;
}
class NLTimeUnitWithinFormatParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return new RegExp(`(?:binnen|in|binnen de|voor)\\s*(` + TIME_UNITS_PATTERN$3 + `)(?=\\W|$)`, "i");
  }
  innerExtract(context, match) {
    const timeUnits = parseTimeUnits$3(match[1]);
    return ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
  }
}
const PATTERN$y = new RegExp(`(?:(?:\\,|\\(|\\（)\\s*)?(?:op\\s*?)?(?:(deze|vorige|volgende)\\s*(?:week\\s*)?)?(${matchAnyPattern(WEEKDAY_DICTIONARY$3)})(?=\\W|$)`, "i");
const PREFIX_GROUP$3 = 1;
const WEEKDAY_GROUP$3 = 2;
const POSTFIX_GROUP$3 = 3;
class NLWeekdayParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN$y;
  }
  innerExtract(context, match) {
    const dayOfWeek = match[WEEKDAY_GROUP$3].toLowerCase();
    const weekday = WEEKDAY_DICTIONARY$3[dayOfWeek];
    const prefix = match[PREFIX_GROUP$3];
    const postfix = match[POSTFIX_GROUP$3];
    let modifierWord = prefix || postfix;
    modifierWord = modifierWord || "";
    modifierWord = modifierWord.toLowerCase();
    let modifier = null;
    if (modifierWord == "vorige") {
      modifier = "last";
    } else if (modifierWord == "volgende") {
      modifier = "next";
    } else if (modifierWord == "deze") {
      modifier = "this";
    }
    return createParsingComponentsAtWeekday(context.reference, weekday, modifier);
  }
}
const PATTERN$x = new RegExp(`(?:on\\s*?)?(${ORDINAL_NUMBER_PATTERN$2})(?:\\s*(?:tot|\\-|\\–|until|through|till|\\s)\\s*(${ORDINAL_NUMBER_PATTERN$2}))?(?:-|/|\\s*(?:of)?\\s*)(` + matchAnyPattern(MONTH_DICTIONARY$3) + `)(?:(?:-|/|,?\\s*)(${YEAR_PATTERN$3}(?![^\\s]\\d)))?(?=\\W|$)`, "i");
const MONTH_NAME_GROUP$7 = 3;
const DATE_GROUP$4 = 1;
const DATE_TO_GROUP$3 = 2;
const YEAR_GROUP$9 = 4;
class NLMonthNameMiddleEndianParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN$x;
  }
  innerExtract(context, match) {
    const month = MONTH_DICTIONARY$3[match[MONTH_NAME_GROUP$7].toLowerCase()];
    const day = parseOrdinalNumberPattern$2(match[DATE_GROUP$4]);
    if (day > 31) {
      match.index = match.index + match[DATE_GROUP$4].length;
      return null;
    }
    const components = context.createParsingComponents({
      day,
      month
    });
    if (match[YEAR_GROUP$9]) {
      const year2 = parseYear$2(match[YEAR_GROUP$9]);
      components.assign("year", year2);
    } else {
      const year2 = findYearClosestToRef(context.refDate, day, month);
      components.imply("year", year2);
    }
    if (!match[DATE_TO_GROUP$3]) {
      return components;
    }
    const endDate = parseOrdinalNumberPattern$2(match[DATE_TO_GROUP$3]);
    const result = context.createParsingResult(match.index, match[0]);
    result.start = components;
    result.end = components.clone();
    result.end.assign("day", endDate);
    return result;
  }
}
const PATTERN$w = new RegExp(`(${matchAnyPattern(MONTH_DICTIONARY$3)})\\s*(?:[,-]?\\s*(${YEAR_PATTERN$3})?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)`, "i");
const MONTH_NAME_GROUP$6 = 1;
const YEAR_GROUP$8 = 2;
class NLMonthNameParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN$w;
  }
  innerExtract(context, match) {
    const components = context.createParsingComponents();
    components.imply("day", 1);
    const monthName = match[MONTH_NAME_GROUP$6];
    const month = MONTH_DICTIONARY$3[monthName.toLowerCase()];
    components.assign("month", month);
    if (match[YEAR_GROUP$8]) {
      const year2 = parseYear$2(match[YEAR_GROUP$8]);
      components.assign("year", year2);
    } else {
      const year2 = findYearClosestToRef(context.refDate, 1, month);
      components.imply("year", year2);
    }
    return components;
  }
}
const PATTERN$v = new RegExp("([0-9]|0[1-9]|1[012])/([0-9]{4})", "i");
const MONTH_GROUP$2 = 1;
const YEAR_GROUP$7 = 2;
class NLSlashMonthFormatParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN$v;
  }
  innerExtract(context, match) {
    const year2 = parseInt(match[YEAR_GROUP$7]);
    const month = parseInt(match[MONTH_GROUP$2]);
    return context.createParsingComponents().imply("day", 1).assign("month", month).assign("year", year2);
  }
}
class NLTimeExpressionParser extends AbstractTimeExpressionParser {
  primaryPrefix() {
    return "(?:(?:om)\\s*)?";
  }
  followingPhase() {
    return "\\s*(?:\\-|\\–|\\~|\\〜|om|\\?)\\s*";
  }
  primarySuffix() {
    return "(?:\\s*(?:uur))?(?!/)(?=\\W|$)";
  }
  extractPrimaryTimeComponents(context, match) {
    if (match[0].match(/^\s*\d{4}\s*$/)) {
      return null;
    }
    return super.extractPrimaryTimeComponents(context, match);
  }
}
const PATTERN$u = new RegExp(`([0-9]{4})[\\.\\/\\s](?:(${matchAnyPattern(MONTH_DICTIONARY$3)})|([0-9]{1,2}))[\\.\\/\\s]([0-9]{1,2})(?=\\W|$)`, "i");
const YEAR_NUMBER_GROUP = 1;
const MONTH_NAME_GROUP$5 = 2;
const MONTH_NUMBER_GROUP = 3;
const DATE_NUMBER_GROUP = 4;
class NLCasualYearMonthDayParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN$u;
  }
  innerExtract(context, match) {
    const month = match[MONTH_NUMBER_GROUP] ? parseInt(match[MONTH_NUMBER_GROUP]) : MONTH_DICTIONARY$3[match[MONTH_NAME_GROUP$5].toLowerCase()];
    if (month < 1 || month > 12) {
      return null;
    }
    const year2 = parseInt(match[YEAR_NUMBER_GROUP]);
    const day = parseInt(match[DATE_NUMBER_GROUP]);
    return {
      day,
      month,
      year: year2
    };
  }
}
const DATE_GROUP$3 = 1;
const TIME_OF_DAY_GROUP = 2;
class NLCasualDateTimeParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern(context) {
    return /(gisteren|morgen|van)(ochtend|middag|namiddag|avond|nacht)(?=\W|$)/i;
  }
  innerExtract(context, match) {
    const dateText = match[DATE_GROUP$3].toLowerCase();
    const timeText = match[TIME_OF_DAY_GROUP].toLowerCase();
    const component = context.createParsingComponents();
    const targetDate = dayjs(context.refDate);
    switch (dateText) {
      case "gisteren":
        assignSimilarDate(component, targetDate.add(-1, "day"));
        break;
      case "van":
        assignSimilarDate(component, targetDate);
        break;
      case "morgen":
        assignTheNextDay(component, targetDate);
        break;
    }
    switch (timeText) {
      case "ochtend":
        component.imply("meridiem", Meridiem.AM);
        component.imply("hour", 6);
        break;
      case "middag":
        component.imply("meridiem", Meridiem.AM);
        component.imply("hour", 12);
        break;
      case "namiddag":
        component.imply("meridiem", Meridiem.PM);
        component.imply("hour", 15);
        break;
      case "avond":
        component.imply("meridiem", Meridiem.PM);
        component.imply("hour", 20);
        break;
    }
    return component;
  }
}
const PATTERN$t = new RegExp(`(deze|vorige|afgelopen|komende|over|\\+|-)\\s*(${TIME_UNITS_PATTERN$3})(?=\\W|$)`, "i");
class NLTimeUnitCasualRelativeFormatParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN$t;
  }
  innerExtract(context, match) {
    const prefix = match[1].toLowerCase();
    let timeUnits = parseTimeUnits$3(match[2]);
    switch (prefix) {
      case "vorige":
      case "afgelopen":
      case "-":
        timeUnits = reverseTimeUnits(timeUnits);
        break;
    }
    return ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
  }
}
const PATTERN$s = new RegExp(`(dit|deze|komende|volgend|volgende|afgelopen|vorige)\\s*(${matchAnyPattern(TIME_UNIT_DICTIONARY$3)})(?=\\s*)(?=\\W|$)`, "i");
const MODIFIER_WORD_GROUP$2 = 1;
const RELATIVE_WORD_GROUP$2 = 2;
class NLRelativeDateFormatParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN$s;
  }
  innerExtract(context, match) {
    const modifier = match[MODIFIER_WORD_GROUP$2].toLowerCase();
    const unitWord = match[RELATIVE_WORD_GROUP$2].toLowerCase();
    const timeunit = TIME_UNIT_DICTIONARY$3[unitWord];
    if (modifier == "volgend" || modifier == "volgende" || modifier == "komende") {
      const timeUnits = {};
      timeUnits[timeunit] = 1;
      return ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
    }
    if (modifier == "afgelopen" || modifier == "vorige") {
      const timeUnits = {};
      timeUnits[timeunit] = -1;
      return ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
    }
    const components = context.createParsingComponents();
    let date = dayjs(context.reference.instant);
    if (unitWord.match(/week/i)) {
      date = date.add(-date.get("d"), "d");
      components.imply("day", date.date());
      components.imply("month", date.month() + 1);
      components.imply("year", date.year());
    } else if (unitWord.match(/maand/i)) {
      date = date.add(-date.date() + 1, "d");
      components.imply("day", date.date());
      components.assign("year", date.year());
      components.assign("month", date.month() + 1);
    } else if (unitWord.match(/jaar/i)) {
      date = date.add(-date.date() + 1, "d");
      date = date.add(-date.month(), "month");
      components.imply("day", date.date());
      components.imply("month", date.month() + 1);
      components.assign("year", date.year());
    }
    return components;
  }
}
const PATTERN$r = new RegExp("(" + TIME_UNITS_PATTERN$3 + ")(?:geleden|voor|eerder)(?=(?:\\W|$))", "i");
const STRICT_PATTERN$1 = new RegExp("(" + TIME_UNITS_PATTERN$3 + ")geleden(?=(?:\\W|$))", "i");
class NLTimeUnitAgoFormatParser extends AbstractParserWithWordBoundaryChecking {
  constructor(strictMode) {
    super();
    this.strictMode = strictMode;
  }
  innerPattern() {
    return this.strictMode ? STRICT_PATTERN$1 : PATTERN$r;
  }
  innerExtract(context, match) {
    const timeUnits = parseTimeUnits$3(match[1]);
    const outputTimeUnits = reverseTimeUnits(timeUnits);
    return ParsingComponents.createRelativeFromReference(context.reference, outputTimeUnits);
  }
}
const PATTERN$q = new RegExp("(" + TIME_UNITS_PATTERN$3 + ")(later|na|vanaf nu|voortaan|vooruit|uit)(?=(?:\\W|$))", "i");
const STRICT_PATTERN = new RegExp("(" + TIME_UNITS_PATTERN$3 + ")(later|vanaf nu)(?=(?:\\W|$))", "i");
const GROUP_NUM_TIMEUNITS = 1;
class NLTimeUnitLaterFormatParser extends AbstractParserWithWordBoundaryChecking {
  constructor(strictMode) {
    super();
    this.strictMode = strictMode;
  }
  innerPattern() {
    return this.strictMode ? STRICT_PATTERN : PATTERN$q;
  }
  innerExtract(context, match) {
    const fragments = parseTimeUnits$3(match[GROUP_NUM_TIMEUNITS]);
    return ParsingComponents.createRelativeFromReference(context.reference, fragments);
  }
}
const casual$6 = new Chrono(createCasualConfiguration$5());
const strict$6 = new Chrono(createConfiguration$5(true));
function parse$6(text, ref, option) {
  return casual$6.parse(text, ref, option);
}
function parseDate$6(text, ref, option) {
  return casual$6.parseDate(text, ref, option);
}
function createCasualConfiguration$5(littleEndian = true) {
  const option = createConfiguration$5(false, littleEndian);
  option.parsers.unshift(new NLCasualDateParser());
  option.parsers.unshift(new NLCasualTimeParser());
  option.parsers.unshift(new NLCasualDateTimeParser());
  option.parsers.unshift(new NLMonthNameParser());
  option.parsers.unshift(new NLRelativeDateFormatParser());
  option.parsers.unshift(new NLTimeUnitCasualRelativeFormatParser());
  return option;
}
function createConfiguration$5(strictMode = true, littleEndian = true) {
  return includeCommonConfiguration({
    parsers: [
      new SlashDateFormatParser(littleEndian),
      new NLTimeUnitWithinFormatParser(),
      new NLMonthNameMiddleEndianParser(),
      new NLMonthNameParser(),
      new NLWeekdayParser(),
      new NLCasualYearMonthDayParser(),
      new NLSlashMonthFormatParser(),
      new NLTimeExpressionParser(strictMode),
      new NLTimeUnitAgoFormatParser(strictMode),
      new NLTimeUnitLaterFormatParser(strictMode)
    ],
    refiners: [new NLMergeDateTimeRefiner(), new NLMergeDateRangeRefiner()]
  }, strictMode);
}
const index$5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Chrono,
  get Meridiem() {
    return Meridiem;
  },
  ParsingResult,
  get Weekday() {
    return Weekday;
  },
  casual: casual$6,
  createCasualConfiguration: createCasualConfiguration$5,
  createConfiguration: createConfiguration$5,
  parse: parse$6,
  parseDate: parseDate$6,
  strict: strict$6
}, Symbol.toStringTag, { value: "Module" }));
const NOW_GROUP$1 = 1;
const DAY_GROUP_1$3 = 2;
const TIME_GROUP_1$1 = 3;
const TIME_GROUP_2$1 = 4;
const DAY_GROUP_3$3 = 5;
const TIME_GROUP_3$1 = 6;
class ZHHantCasualDateParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern(context) {
    return new RegExp("(而家|立(?:刻|即)|即刻)|(今|明|前|大前|後|大後|聽|昨|尋|琴)(早|朝|晚)|(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨))|(今|明|前|大前|後|大後|聽|昨|尋|琴)(?:日|天)(?:[\\s|,|，]*)(?:(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨)))?", "i");
  }
  innerExtract(context, match) {
    const index2 = match.index;
    const result = context.createParsingResult(index2, match[0]);
    const refMoment = dayjs(context.refDate);
    let startMoment = refMoment;
    if (match[NOW_GROUP$1]) {
      result.start.imply("hour", refMoment.hour());
      result.start.imply("minute", refMoment.minute());
      result.start.imply("second", refMoment.second());
      result.start.imply("millisecond", refMoment.millisecond());
    } else if (match[DAY_GROUP_1$3]) {
      const day1 = match[DAY_GROUP_1$3];
      const time1 = match[TIME_GROUP_1$1];
      if (day1 == "明" || day1 == "聽") {
        if (refMoment.hour() > 1) {
          startMoment = startMoment.add(1, "day");
        }
      } else if (day1 == "昨" || day1 == "尋" || day1 == "琴") {
        startMoment = startMoment.add(-1, "day");
      } else if (day1 == "前") {
        startMoment = startMoment.add(-2, "day");
      } else if (day1 == "大前") {
        startMoment = startMoment.add(-3, "day");
      } else if (day1 == "後") {
        startMoment = startMoment.add(2, "day");
      } else if (day1 == "大後") {
        startMoment = startMoment.add(3, "day");
      }
      if (time1 == "早" || time1 == "朝") {
        result.start.imply("hour", 6);
      } else if (time1 == "晚") {
        result.start.imply("hour", 22);
        result.start.imply("meridiem", 1);
      }
    } else if (match[TIME_GROUP_2$1]) {
      const timeString2 = match[TIME_GROUP_2$1];
      const time2 = timeString2[0];
      if (time2 == "早" || time2 == "朝" || time2 == "上") {
        result.start.imply("hour", 6);
      } else if (time2 == "下" || time2 == "晏") {
        result.start.imply("hour", 15);
        result.start.imply("meridiem", 1);
      } else if (time2 == "中") {
        result.start.imply("hour", 12);
        result.start.imply("meridiem", 1);
      } else if (time2 == "夜" || time2 == "晚") {
        result.start.imply("hour", 22);
        result.start.imply("meridiem", 1);
      } else if (time2 == "凌") {
        result.start.imply("hour", 0);
      }
    } else if (match[DAY_GROUP_3$3]) {
      const day3 = match[DAY_GROUP_3$3];
      if (day3 == "明" || day3 == "聽") {
        if (refMoment.hour() > 1) {
          startMoment = startMoment.add(1, "day");
        }
      } else if (day3 == "昨" || day3 == "尋" || day3 == "琴") {
        startMoment = startMoment.add(-1, "day");
      } else if (day3 == "前") {
        startMoment = startMoment.add(-2, "day");
      } else if (day3 == "大前") {
        startMoment = startMoment.add(-3, "day");
      } else if (day3 == "後") {
        startMoment = startMoment.add(2, "day");
      } else if (day3 == "大後") {
        startMoment = startMoment.add(3, "day");
      }
      const timeString3 = match[TIME_GROUP_3$1];
      if (timeString3) {
        const time3 = timeString3[0];
        if (time3 == "早" || time3 == "朝" || time3 == "上") {
          result.start.imply("hour", 6);
        } else if (time3 == "下" || time3 == "晏") {
          result.start.imply("hour", 15);
          result.start.imply("meridiem", 1);
        } else if (time3 == "中") {
          result.start.imply("hour", 12);
          result.start.imply("meridiem", 1);
        } else if (time3 == "夜" || time3 == "晚") {
          result.start.imply("hour", 22);
          result.start.imply("meridiem", 1);
        } else if (time3 == "凌") {
          result.start.imply("hour", 0);
        }
      }
    }
    result.start.assign("day", startMoment.date());
    result.start.assign("month", startMoment.month() + 1);
    result.start.assign("year", startMoment.year());
    return result;
  }
}
const NUMBER$1 = {
  "零": 0,
  "一": 1,
  "二": 2,
  "兩": 2,
  "三": 3,
  "四": 4,
  "五": 5,
  "六": 6,
  "七": 7,
  "八": 8,
  "九": 9,
  "十": 10,
  "廿": 20,
  "卅": 30
};
const WEEKDAY_OFFSET$1 = {
  "天": 0,
  "日": 0,
  "一": 1,
  "二": 2,
  "三": 3,
  "四": 4,
  "五": 5,
  "六": 6
};
function zhStringToNumber$1(text) {
  let number = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char === "十") {
      number = number === 0 ? NUMBER$1[char] : number * NUMBER$1[char];
    } else {
      number += NUMBER$1[char];
    }
  }
  return number;
}
function zhStringToYear$1(text) {
  let string = "";
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    string = string + NUMBER$1[char];
  }
  return parseInt(string);
}
const YEAR_GROUP$6 = 1;
const MONTH_GROUP$1 = 2;
const DAY_GROUP$1 = 3;
class ZHHantDateParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return new RegExp("(\\d{2,4}|[" + Object.keys(NUMBER$1).join("") + "]{4}|[" + Object.keys(NUMBER$1).join("") + "]{2})?(?:\\s*)(?:年)?(?:[\\s|,|，]*)(\\d{1,2}|[" + Object.keys(NUMBER$1).join("") + "]{1,2})(?:\\s*)(?:月)(?:\\s*)(\\d{1,2}|[" + Object.keys(NUMBER$1).join("") + "]{1,2})?(?:\\s*)(?:日|號)?");
  }
  innerExtract(context, match) {
    const startMoment = dayjs(context.refDate);
    const result = context.createParsingResult(match.index, match[0]);
    let month = parseInt(match[MONTH_GROUP$1]);
    if (isNaN(month))
      month = zhStringToNumber$1(match[MONTH_GROUP$1]);
    result.start.assign("month", month);
    if (match[DAY_GROUP$1]) {
      let day = parseInt(match[DAY_GROUP$1]);
      if (isNaN(day))
        day = zhStringToNumber$1(match[DAY_GROUP$1]);
      result.start.assign("day", day);
    } else {
      result.start.imply("day", startMoment.date());
    }
    if (match[YEAR_GROUP$6]) {
      let year2 = parseInt(match[YEAR_GROUP$6]);
      if (isNaN(year2))
        year2 = zhStringToYear$1(match[YEAR_GROUP$6]);
      result.start.assign("year", year2);
    } else {
      result.start.imply("year", startMoment.year());
    }
    return result;
  }
}
const PATTERN$p = new RegExp("(\\d+|[" + Object.keys(NUMBER$1).join("") + "]+|半|幾)(?:\\s*)(?:個)?(秒(?:鐘)?|分鐘|小時|鐘|日|天|星期|禮拜|月|年)(?:(?:之|過)?後|(?:之)?內)", "i");
const NUMBER_GROUP$1 = 1;
const UNIT_GROUP$1 = 2;
class ZHHantDeadlineFormatParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN$p;
  }
  innerExtract(context, match) {
    const result = context.createParsingResult(match.index, match[0]);
    let number = parseInt(match[NUMBER_GROUP$1]);
    if (isNaN(number)) {
      number = zhStringToNumber$1(match[NUMBER_GROUP$1]);
    }
    if (isNaN(number)) {
      const string = match[NUMBER_GROUP$1];
      if (string === "幾") {
        number = 3;
      } else if (string === "半") {
        number = 0.5;
      } else {
        return null;
      }
    }
    let date = dayjs(context.refDate);
    const unit = match[UNIT_GROUP$1];
    const unitAbbr = unit[0];
    if (unitAbbr.match(/[日天星禮月年]/)) {
      if (unitAbbr == "日" || unitAbbr == "天") {
        date = date.add(number, "d");
      } else if (unitAbbr == "星" || unitAbbr == "禮") {
        date = date.add(number * 7, "d");
      } else if (unitAbbr == "月") {
        date = date.add(number, "month");
      } else if (unitAbbr == "年") {
        date = date.add(number, "year");
      }
      result.start.assign("year", date.year());
      result.start.assign("month", date.month() + 1);
      result.start.assign("day", date.date());
      return result;
    }
    if (unitAbbr == "秒") {
      date = date.add(number, "second");
    } else if (unitAbbr == "分") {
      date = date.add(number, "minute");
    } else if (unitAbbr == "小" || unitAbbr == "鐘") {
      date = date.add(number, "hour");
    }
    result.start.imply("year", date.year());
    result.start.imply("month", date.month() + 1);
    result.start.imply("day", date.date());
    result.start.assign("hour", date.hour());
    result.start.assign("minute", date.minute());
    result.start.assign("second", date.second());
    return result;
  }
}
const PATTERN$o = new RegExp("(?<prefix>上|今|下|這|呢)(?:個)?(?:星期|禮拜|週)(?<weekday>" + Object.keys(WEEKDAY_OFFSET$1).join("|") + ")");
class ZHHantRelationWeekdayParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN$o;
  }
  innerExtract(context, match) {
    const result = context.createParsingResult(match.index, match[0]);
    const dayOfWeek = match.groups.weekday;
    const offset = WEEKDAY_OFFSET$1[dayOfWeek];
    if (offset === void 0)
      return null;
    let modifier = null;
    const prefix = match.groups.prefix;
    if (prefix == "上") {
      modifier = "last";
    } else if (prefix == "下") {
      modifier = "next";
    } else if (prefix == "今" || prefix == "這" || prefix == "呢") {
      modifier = "this";
    }
    let startMoment = dayjs(context.refDate);
    let startMomentFixed = false;
    const refOffset = startMoment.day();
    if (modifier == "last" || modifier == "past") {
      startMoment = startMoment.day(offset - 7);
      startMomentFixed = true;
    } else if (modifier == "next") {
      startMoment = startMoment.day(offset + 7);
      startMomentFixed = true;
    } else if (modifier == "this") {
      startMoment = startMoment.day(offset);
    } else {
      if (Math.abs(offset - 7 - refOffset) < Math.abs(offset - refOffset)) {
        startMoment = startMoment.day(offset - 7);
      } else if (Math.abs(offset + 7 - refOffset) < Math.abs(offset - refOffset)) {
        startMoment = startMoment.day(offset + 7);
      } else {
        startMoment = startMoment.day(offset);
      }
    }
    result.start.assign("weekday", offset);
    if (startMomentFixed) {
      result.start.assign("day", startMoment.date());
      result.start.assign("month", startMoment.month() + 1);
      result.start.assign("year", startMoment.year());
    } else {
      result.start.imply("day", startMoment.date());
      result.start.imply("month", startMoment.month() + 1);
      result.start.imply("year", startMoment.year());
    }
    return result;
  }
}
const FIRST_REG_PATTERN$1 = new RegExp("(?:由|從|自)?(?:(今|明|前|大前|後|大後|聽|昨|尋|琴)(早|朝|晚)|(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨))|(今|明|前|大前|後|大後|聽|昨|尋|琴)(?:日|天)(?:[\\s,，]*)(?:(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨)))?)?(?:[\\s,，]*)(?:(\\d+|[" + Object.keys(NUMBER$1).join("") + "]+)(?:\\s*)(?:點|時|:|：)(?:\\s*)(\\d+|半|正|整|[" + Object.keys(NUMBER$1).join("") + "]+)?(?:\\s*)(?:分|:|：)?(?:\\s*)(\\d+|[" + Object.keys(NUMBER$1).join("") + "]+)?(?:\\s*)(?:秒)?)(?:\\s*(A.M.|P.M.|AM?|PM?))?", "i");
const SECOND_REG_PATTERN$1 = new RegExp("(?:^\\s*(?:到|至|\\-|\\–|\\~|\\〜)\\s*)(?:(今|明|前|大前|後|大後|聽|昨|尋|琴)(早|朝|晚)|(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨))|(今|明|前|大前|後|大後|聽|昨|尋|琴)(?:日|天)(?:[\\s,，]*)(?:(上(?:午|晝)|朝(?:早)|早(?:上)|下(?:午|晝)|晏(?:晝)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨)))?)?(?:[\\s,，]*)(?:(\\d+|[" + Object.keys(NUMBER$1).join("") + "]+)(?:\\s*)(?:點|時|:|：)(?:\\s*)(\\d+|半|正|整|[" + Object.keys(NUMBER$1).join("") + "]+)?(?:\\s*)(?:分|:|：)?(?:\\s*)(\\d+|[" + Object.keys(NUMBER$1).join("") + "]+)?(?:\\s*)(?:秒)?)(?:\\s*(A.M.|P.M.|AM?|PM?))?", "i");
const DAY_GROUP_1$2 = 1;
const ZH_AM_PM_HOUR_GROUP_1$1 = 2;
const ZH_AM_PM_HOUR_GROUP_2$1 = 3;
const DAY_GROUP_3$2 = 4;
const ZH_AM_PM_HOUR_GROUP_3$1 = 5;
const HOUR_GROUP$1 = 6;
const MINUTE_GROUP$1 = 7;
const SECOND_GROUP$1 = 8;
const AM_PM_HOUR_GROUP$1 = 9;
class ZHHantTimeExpressionParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return FIRST_REG_PATTERN$1;
  }
  innerExtract(context, match) {
    if (match.index > 0 && context.text[match.index - 1].match(/\w/)) {
      return null;
    }
    const refMoment = dayjs(context.refDate);
    const result = context.createParsingResult(match.index, match[0]);
    let startMoment = refMoment.clone();
    if (match[DAY_GROUP_1$2]) {
      var day1 = match[DAY_GROUP_1$2];
      if (day1 == "明" || day1 == "聽") {
        if (refMoment.hour() > 1) {
          startMoment = startMoment.add(1, "day");
        }
      } else if (day1 == "昨" || day1 == "尋" || day1 == "琴") {
        startMoment = startMoment.add(-1, "day");
      } else if (day1 == "前") {
        startMoment = startMoment.add(-2, "day");
      } else if (day1 == "大前") {
        startMoment = startMoment.add(-3, "day");
      } else if (day1 == "後") {
        startMoment = startMoment.add(2, "day");
      } else if (day1 == "大後") {
        startMoment = startMoment.add(3, "day");
      }
      result.start.assign("day", startMoment.date());
      result.start.assign("month", startMoment.month() + 1);
      result.start.assign("year", startMoment.year());
    } else if (match[DAY_GROUP_3$2]) {
      var day3 = match[DAY_GROUP_3$2];
      if (day3 == "明" || day3 == "聽") {
        startMoment = startMoment.add(1, "day");
      } else if (day3 == "昨" || day3 == "尋" || day3 == "琴") {
        startMoment = startMoment.add(-1, "day");
      } else if (day3 == "前") {
        startMoment = startMoment.add(-2, "day");
      } else if (day3 == "大前") {
        startMoment = startMoment.add(-3, "day");
      } else if (day3 == "後") {
        startMoment = startMoment.add(2, "day");
      } else if (day3 == "大後") {
        startMoment = startMoment.add(3, "day");
      }
      result.start.assign("day", startMoment.date());
      result.start.assign("month", startMoment.month() + 1);
      result.start.assign("year", startMoment.year());
    } else {
      result.start.imply("day", startMoment.date());
      result.start.imply("month", startMoment.month() + 1);
      result.start.imply("year", startMoment.year());
    }
    let hour = 0;
    let minute = 0;
    let meridiem = -1;
    if (match[SECOND_GROUP$1]) {
      var second = parseInt(match[SECOND_GROUP$1]);
      if (isNaN(second)) {
        second = zhStringToNumber$1(match[SECOND_GROUP$1]);
      }
      if (second >= 60)
        return null;
      result.start.assign("second", second);
    }
    hour = parseInt(match[HOUR_GROUP$1]);
    if (isNaN(hour)) {
      hour = zhStringToNumber$1(match[HOUR_GROUP$1]);
    }
    if (match[MINUTE_GROUP$1]) {
      if (match[MINUTE_GROUP$1] == "半") {
        minute = 30;
      } else if (match[MINUTE_GROUP$1] == "正" || match[MINUTE_GROUP$1] == "整") {
        minute = 0;
      } else {
        minute = parseInt(match[MINUTE_GROUP$1]);
        if (isNaN(minute)) {
          minute = zhStringToNumber$1(match[MINUTE_GROUP$1]);
        }
      }
    } else if (hour > 100) {
      minute = hour % 100;
      hour = Math.floor(hour / 100);
    }
    if (minute >= 60) {
      return null;
    }
    if (hour > 24) {
      return null;
    }
    if (hour >= 12) {
      meridiem = 1;
    }
    if (match[AM_PM_HOUR_GROUP$1]) {
      if (hour > 12)
        return null;
      var ampm = match[AM_PM_HOUR_GROUP$1][0].toLowerCase();
      if (ampm == "a") {
        meridiem = 0;
        if (hour == 12)
          hour = 0;
      }
      if (ampm == "p") {
        meridiem = 1;
        if (hour != 12)
          hour += 12;
      }
    } else if (match[ZH_AM_PM_HOUR_GROUP_1$1]) {
      var zhAMPMString1 = match[ZH_AM_PM_HOUR_GROUP_1$1];
      var zhAMPM1 = zhAMPMString1[0];
      if (zhAMPM1 == "朝" || zhAMPM1 == "早") {
        meridiem = 0;
        if (hour == 12)
          hour = 0;
      } else if (zhAMPM1 == "晚") {
        meridiem = 1;
        if (hour != 12)
          hour += 12;
      }
    } else if (match[ZH_AM_PM_HOUR_GROUP_2$1]) {
      var zhAMPMString2 = match[ZH_AM_PM_HOUR_GROUP_2$1];
      var zhAMPM2 = zhAMPMString2[0];
      if (zhAMPM2 == "上" || zhAMPM2 == "朝" || zhAMPM2 == "早" || zhAMPM2 == "凌") {
        meridiem = 0;
        if (hour == 12)
          hour = 0;
      } else if (zhAMPM2 == "下" || zhAMPM2 == "晏" || zhAMPM2 == "晚") {
        meridiem = 1;
        if (hour != 12)
          hour += 12;
      }
    } else if (match[ZH_AM_PM_HOUR_GROUP_3$1]) {
      var zhAMPMString3 = match[ZH_AM_PM_HOUR_GROUP_3$1];
      var zhAMPM3 = zhAMPMString3[0];
      if (zhAMPM3 == "上" || zhAMPM3 == "朝" || zhAMPM3 == "早" || zhAMPM3 == "凌") {
        meridiem = 0;
        if (hour == 12)
          hour = 0;
      } else if (zhAMPM3 == "下" || zhAMPM3 == "晏" || zhAMPM3 == "晚") {
        meridiem = 1;
        if (hour != 12)
          hour += 12;
      }
    }
    result.start.assign("hour", hour);
    result.start.assign("minute", minute);
    if (meridiem >= 0) {
      result.start.assign("meridiem", meridiem);
    } else {
      if (hour < 12) {
        result.start.imply("meridiem", 0);
      } else {
        result.start.imply("meridiem", 1);
      }
    }
    match = SECOND_REG_PATTERN$1.exec(context.text.substring(result.index + result.text.length));
    if (!match) {
      if (result.text.match(/^\d+$/)) {
        return null;
      }
      return result;
    }
    let endMoment = startMoment.clone();
    result.end = context.createParsingComponents();
    if (match[DAY_GROUP_1$2]) {
      var day1 = match[DAY_GROUP_1$2];
      if (day1 == "明" || day1 == "聽") {
        if (refMoment.hour() > 1) {
          endMoment = endMoment.add(1, "day");
        }
      } else if (day1 == "昨" || day1 == "尋" || day1 == "琴") {
        endMoment = endMoment.add(-1, "day");
      } else if (day1 == "前") {
        endMoment = endMoment.add(-2, "day");
      } else if (day1 == "大前") {
        endMoment = endMoment.add(-3, "day");
      } else if (day1 == "後") {
        endMoment = endMoment.add(2, "day");
      } else if (day1 == "大後") {
        endMoment = endMoment.add(3, "day");
      }
      result.end.assign("day", endMoment.date());
      result.end.assign("month", endMoment.month() + 1);
      result.end.assign("year", endMoment.year());
    } else if (match[DAY_GROUP_3$2]) {
      var day3 = match[DAY_GROUP_3$2];
      if (day3 == "明" || day3 == "聽") {
        endMoment = endMoment.add(1, "day");
      } else if (day3 == "昨" || day3 == "尋" || day3 == "琴") {
        endMoment = endMoment.add(-1, "day");
      } else if (day3 == "前") {
        endMoment = endMoment.add(-2, "day");
      } else if (day3 == "大前") {
        endMoment = endMoment.add(-3, "day");
      } else if (day3 == "後") {
        endMoment = endMoment.add(2, "day");
      } else if (day3 == "大後") {
        endMoment = endMoment.add(3, "day");
      }
      result.end.assign("day", endMoment.date());
      result.end.assign("month", endMoment.month() + 1);
      result.end.assign("year", endMoment.year());
    } else {
      result.end.imply("day", endMoment.date());
      result.end.imply("month", endMoment.month() + 1);
      result.end.imply("year", endMoment.year());
    }
    hour = 0;
    minute = 0;
    meridiem = -1;
    if (match[SECOND_GROUP$1]) {
      var second = parseInt(match[SECOND_GROUP$1]);
      if (isNaN(second)) {
        second = zhStringToNumber$1(match[SECOND_GROUP$1]);
      }
      if (second >= 60)
        return null;
      result.end.assign("second", second);
    }
    hour = parseInt(match[HOUR_GROUP$1]);
    if (isNaN(hour)) {
      hour = zhStringToNumber$1(match[HOUR_GROUP$1]);
    }
    if (match[MINUTE_GROUP$1]) {
      if (match[MINUTE_GROUP$1] == "半") {
        minute = 30;
      } else if (match[MINUTE_GROUP$1] == "正" || match[MINUTE_GROUP$1] == "整") {
        minute = 0;
      } else {
        minute = parseInt(match[MINUTE_GROUP$1]);
        if (isNaN(minute)) {
          minute = zhStringToNumber$1(match[MINUTE_GROUP$1]);
        }
      }
    } else if (hour > 100) {
      minute = hour % 100;
      hour = Math.floor(hour / 100);
    }
    if (minute >= 60) {
      return null;
    }
    if (hour > 24) {
      return null;
    }
    if (hour >= 12) {
      meridiem = 1;
    }
    if (match[AM_PM_HOUR_GROUP$1]) {
      if (hour > 12)
        return null;
      var ampm = match[AM_PM_HOUR_GROUP$1][0].toLowerCase();
      if (ampm == "a") {
        meridiem = 0;
        if (hour == 12)
          hour = 0;
      }
      if (ampm == "p") {
        meridiem = 1;
        if (hour != 12)
          hour += 12;
      }
      if (!result.start.isCertain("meridiem")) {
        if (meridiem == 0) {
          result.start.imply("meridiem", 0);
          if (result.start.get("hour") == 12) {
            result.start.assign("hour", 0);
          }
        } else {
          result.start.imply("meridiem", 1);
          if (result.start.get("hour") != 12) {
            result.start.assign("hour", result.start.get("hour") + 12);
          }
        }
      }
    } else if (match[ZH_AM_PM_HOUR_GROUP_1$1]) {
      var zhAMPMString1 = match[ZH_AM_PM_HOUR_GROUP_1$1];
      var zhAMPM1 = zhAMPMString1[0];
      if (zhAMPM1 == "朝" || zhAMPM1 == "早") {
        meridiem = 0;
        if (hour == 12)
          hour = 0;
      } else if (zhAMPM1 == "晚") {
        meridiem = 1;
        if (hour != 12)
          hour += 12;
      }
    } else if (match[ZH_AM_PM_HOUR_GROUP_2$1]) {
      var zhAMPMString2 = match[ZH_AM_PM_HOUR_GROUP_2$1];
      var zhAMPM2 = zhAMPMString2[0];
      if (zhAMPM2 == "上" || zhAMPM2 == "朝" || zhAMPM2 == "早" || zhAMPM2 == "凌") {
        meridiem = 0;
        if (hour == 12)
          hour = 0;
      } else if (zhAMPM2 == "下" || zhAMPM2 == "晏" || zhAMPM2 == "晚") {
        meridiem = 1;
        if (hour != 12)
          hour += 12;
      }
    } else if (match[ZH_AM_PM_HOUR_GROUP_3$1]) {
      var zhAMPMString3 = match[ZH_AM_PM_HOUR_GROUP_3$1];
      var zhAMPM3 = zhAMPMString3[0];
      if (zhAMPM3 == "上" || zhAMPM3 == "朝" || zhAMPM3 == "早" || zhAMPM3 == "凌") {
        meridiem = 0;
        if (hour == 12)
          hour = 0;
      } else if (zhAMPM3 == "下" || zhAMPM3 == "晏" || zhAMPM3 == "晚") {
        meridiem = 1;
        if (hour != 12)
          hour += 12;
      }
    }
    result.text = result.text + match[0];
    result.end.assign("hour", hour);
    result.end.assign("minute", minute);
    if (meridiem >= 0) {
      result.end.assign("meridiem", meridiem);
    } else {
      const startAtPM = result.start.isCertain("meridiem") && result.start.get("meridiem") == 1;
      if (startAtPM && result.start.get("hour") > hour) {
        result.end.imply("meridiem", 0);
      } else if (hour > 12) {
        result.end.imply("meridiem", 1);
      }
    }
    if (result.end.date().getTime() < result.start.date().getTime()) {
      result.end.imply("day", result.end.get("day") + 1);
    }
    return result;
  }
}
const PATTERN$n = new RegExp("(?:星期|禮拜|週)(?<weekday>" + Object.keys(WEEKDAY_OFFSET$1).join("|") + ")");
class ZHHantWeekdayParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN$n;
  }
  innerExtract(context, match) {
    const result = context.createParsingResult(match.index, match[0]);
    const dayOfWeek = match.groups.weekday;
    const offset = WEEKDAY_OFFSET$1[dayOfWeek];
    if (offset === void 0)
      return null;
    let startMoment = dayjs(context.refDate);
    const refOffset = startMoment.day();
    if (Math.abs(offset - 7 - refOffset) < Math.abs(offset - refOffset)) {
      startMoment = startMoment.day(offset - 7);
    } else if (Math.abs(offset + 7 - refOffset) < Math.abs(offset - refOffset)) {
      startMoment = startMoment.day(offset + 7);
    } else {
      startMoment = startMoment.day(offset);
    }
    result.start.assign("weekday", offset);
    {
      result.start.imply("day", startMoment.date());
      result.start.imply("month", startMoment.month() + 1);
      result.start.imply("year", startMoment.year());
    }
    return result;
  }
}
class ZHHantMergeDateRangeRefiner extends AbstractMergeDateRangeRefiner {
  patternBetween() {
    return /^\s*(至|到|\-|\~|～|－|ー)\s*$/i;
  }
}
class ZHHantMergeDateTimeRefiner extends AbstractMergeDateTimeRefiner {
  patternBetween() {
    return /^\s*$/i;
  }
}
const hant = new Chrono(createCasualConfiguration$4());
const casual$5 = new Chrono(createCasualConfiguration$4());
const strict$5 = new Chrono(createConfiguration$4());
function parse$5(text, ref, option) {
  return casual$5.parse(text, ref, option);
}
function parseDate$5(text, ref, option) {
  return casual$5.parseDate(text, ref, option);
}
function createCasualConfiguration$4() {
  const option = createConfiguration$4();
  option.parsers.unshift(new ZHHantCasualDateParser());
  return option;
}
function createConfiguration$4() {
  const configuration = includeCommonConfiguration({
    parsers: [
      new ZHHantDateParser(),
      new ZHHantRelationWeekdayParser(),
      new ZHHantWeekdayParser(),
      new ZHHantTimeExpressionParser(),
      new ZHHantDeadlineFormatParser()
    ],
    refiners: [new ZHHantMergeDateRangeRefiner(), new ZHHantMergeDateTimeRefiner()]
  });
  configuration.refiners = configuration.refiners.filter((refiner) => !(refiner instanceof ExtractTimezoneOffsetRefiner));
  return configuration;
}
const NOW_GROUP = 1;
const DAY_GROUP_1$1 = 2;
const TIME_GROUP_1 = 3;
const TIME_GROUP_2 = 4;
const DAY_GROUP_3$1 = 5;
const TIME_GROUP_3 = 6;
class ZHHansCasualDateParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern(context) {
    return new RegExp("(现在|立(?:刻|即)|即刻)|(今|明|前|大前|后|大后|昨)(早|晚)|(上(?:午)|早(?:上)|下(?:午)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨))|(今|明|前|大前|后|大后|昨)(?:日|天)(?:[\\s|,|，]*)(?:(上(?:午)|早(?:上)|下(?:午)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨)))?", "i");
  }
  innerExtract(context, match) {
    const index2 = match.index;
    const result = context.createParsingResult(index2, match[0]);
    const refMoment = dayjs(context.refDate);
    let startMoment = refMoment;
    if (match[NOW_GROUP]) {
      result.start.imply("hour", refMoment.hour());
      result.start.imply("minute", refMoment.minute());
      result.start.imply("second", refMoment.second());
      result.start.imply("millisecond", refMoment.millisecond());
    } else if (match[DAY_GROUP_1$1]) {
      const day1 = match[DAY_GROUP_1$1];
      const time1 = match[TIME_GROUP_1];
      if (day1 == "明") {
        if (refMoment.hour() > 1) {
          startMoment = startMoment.add(1, "day");
        }
      } else if (day1 == "昨") {
        startMoment = startMoment.add(-1, "day");
      } else if (day1 == "前") {
        startMoment = startMoment.add(-2, "day");
      } else if (day1 == "大前") {
        startMoment = startMoment.add(-3, "day");
      } else if (day1 == "后") {
        startMoment = startMoment.add(2, "day");
      } else if (day1 == "大后") {
        startMoment = startMoment.add(3, "day");
      }
      if (time1 == "早") {
        result.start.imply("hour", 6);
      } else if (time1 == "晚") {
        result.start.imply("hour", 22);
        result.start.imply("meridiem", 1);
      }
    } else if (match[TIME_GROUP_2]) {
      const timeString2 = match[TIME_GROUP_2];
      const time2 = timeString2[0];
      if (time2 == "早" || time2 == "上") {
        result.start.imply("hour", 6);
      } else if (time2 == "下") {
        result.start.imply("hour", 15);
        result.start.imply("meridiem", 1);
      } else if (time2 == "中") {
        result.start.imply("hour", 12);
        result.start.imply("meridiem", 1);
      } else if (time2 == "夜" || time2 == "晚") {
        result.start.imply("hour", 22);
        result.start.imply("meridiem", 1);
      } else if (time2 == "凌") {
        result.start.imply("hour", 0);
      }
    } else if (match[DAY_GROUP_3$1]) {
      const day3 = match[DAY_GROUP_3$1];
      if (day3 == "明") {
        if (refMoment.hour() > 1) {
          startMoment = startMoment.add(1, "day");
        }
      } else if (day3 == "昨") {
        startMoment = startMoment.add(-1, "day");
      } else if (day3 == "前") {
        startMoment = startMoment.add(-2, "day");
      } else if (day3 == "大前") {
        startMoment = startMoment.add(-3, "day");
      } else if (day3 == "后") {
        startMoment = startMoment.add(2, "day");
      } else if (day3 == "大后") {
        startMoment = startMoment.add(3, "day");
      }
      const timeString3 = match[TIME_GROUP_3];
      if (timeString3) {
        const time3 = timeString3[0];
        if (time3 == "早" || time3 == "上") {
          result.start.imply("hour", 6);
        } else if (time3 == "下") {
          result.start.imply("hour", 15);
          result.start.imply("meridiem", 1);
        } else if (time3 == "中") {
          result.start.imply("hour", 12);
          result.start.imply("meridiem", 1);
        } else if (time3 == "夜" || time3 == "晚") {
          result.start.imply("hour", 22);
          result.start.imply("meridiem", 1);
        } else if (time3 == "凌") {
          result.start.imply("hour", 0);
        }
      }
    }
    result.start.assign("day", startMoment.date());
    result.start.assign("month", startMoment.month() + 1);
    result.start.assign("year", startMoment.year());
    return result;
  }
}
const NUMBER = {
  "零": 0,
  "〇": 0,
  "一": 1,
  "二": 2,
  "两": 2,
  "三": 3,
  "四": 4,
  "五": 5,
  "六": 6,
  "七": 7,
  "八": 8,
  "九": 9,
  "十": 10
};
const WEEKDAY_OFFSET = {
  "天": 0,
  "日": 0,
  "一": 1,
  "二": 2,
  "三": 3,
  "四": 4,
  "五": 5,
  "六": 6
};
function zhStringToNumber(text) {
  let number = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char === "十") {
      number = number === 0 ? NUMBER[char] : number * NUMBER[char];
    } else {
      number += NUMBER[char];
    }
  }
  return number;
}
function zhStringToYear(text) {
  let string = "";
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    string = string + NUMBER[char];
  }
  return parseInt(string);
}
const YEAR_GROUP$5 = 1;
const MONTH_GROUP = 2;
const DAY_GROUP = 3;
class ZHHansDateParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return new RegExp("(\\d{2,4}|[" + Object.keys(NUMBER).join("") + "]{4}|[" + Object.keys(NUMBER).join("") + "]{2})?(?:\\s*)(?:年)?(?:[\\s|,|，]*)(\\d{1,2}|[" + Object.keys(NUMBER).join("") + "]{1,3})(?:\\s*)(?:月)(?:\\s*)(\\d{1,2}|[" + Object.keys(NUMBER).join("") + "]{1,3})?(?:\\s*)(?:日|号)?");
  }
  innerExtract(context, match) {
    const startMoment = dayjs(context.refDate);
    const result = context.createParsingResult(match.index, match[0]);
    let month = parseInt(match[MONTH_GROUP]);
    if (isNaN(month))
      month = zhStringToNumber(match[MONTH_GROUP]);
    result.start.assign("month", month);
    if (match[DAY_GROUP]) {
      let day = parseInt(match[DAY_GROUP]);
      if (isNaN(day))
        day = zhStringToNumber(match[DAY_GROUP]);
      result.start.assign("day", day);
    } else {
      result.start.imply("day", startMoment.date());
    }
    if (match[YEAR_GROUP$5]) {
      let year2 = parseInt(match[YEAR_GROUP$5]);
      if (isNaN(year2))
        year2 = zhStringToYear(match[YEAR_GROUP$5]);
      result.start.assign("year", year2);
    } else {
      result.start.imply("year", startMoment.year());
    }
    return result;
  }
}
const PATTERN$m = new RegExp("(\\d+|[" + Object.keys(NUMBER).join("") + "]+|半|几)(?:\\s*)(?:个)?(秒(?:钟)?|分钟|小时|钟|日|天|星期|礼拜|月|年)(?:(?:之|过)?后|(?:之)?内)", "i");
const NUMBER_GROUP = 1;
const UNIT_GROUP = 2;
class ZHHansDeadlineFormatParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN$m;
  }
  innerExtract(context, match) {
    const result = context.createParsingResult(match.index, match[0]);
    let number = parseInt(match[NUMBER_GROUP]);
    if (isNaN(number)) {
      number = zhStringToNumber(match[NUMBER_GROUP]);
    }
    if (isNaN(number)) {
      const string = match[NUMBER_GROUP];
      if (string === "几") {
        number = 3;
      } else if (string === "半") {
        number = 0.5;
      } else {
        return null;
      }
    }
    let date = dayjs(context.refDate);
    const unit = match[UNIT_GROUP];
    const unitAbbr = unit[0];
    if (unitAbbr.match(/[日天星礼月年]/)) {
      if (unitAbbr == "日" || unitAbbr == "天") {
        date = date.add(number, "d");
      } else if (unitAbbr == "星" || unitAbbr == "礼") {
        date = date.add(number * 7, "d");
      } else if (unitAbbr == "月") {
        date = date.add(number, "month");
      } else if (unitAbbr == "年") {
        date = date.add(number, "year");
      }
      result.start.assign("year", date.year());
      result.start.assign("month", date.month() + 1);
      result.start.assign("day", date.date());
      return result;
    }
    if (unitAbbr == "秒") {
      date = date.add(number, "second");
    } else if (unitAbbr == "分") {
      date = date.add(number, "minute");
    } else if (unitAbbr == "小" || unitAbbr == "钟") {
      date = date.add(number, "hour");
    }
    result.start.imply("year", date.year());
    result.start.imply("month", date.month() + 1);
    result.start.imply("day", date.date());
    result.start.assign("hour", date.hour());
    result.start.assign("minute", date.minute());
    result.start.assign("second", date.second());
    return result;
  }
}
const PATTERN$l = new RegExp("(?<prefix>上|下|这)(?:个)?(?:星期|礼拜|周)(?<weekday>" + Object.keys(WEEKDAY_OFFSET).join("|") + ")");
class ZHHansRelationWeekdayParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN$l;
  }
  innerExtract(context, match) {
    const result = context.createParsingResult(match.index, match[0]);
    const dayOfWeek = match.groups.weekday;
    const offset = WEEKDAY_OFFSET[dayOfWeek];
    if (offset === void 0)
      return null;
    let modifier = null;
    const prefix = match.groups.prefix;
    if (prefix == "上") {
      modifier = "last";
    } else if (prefix == "下") {
      modifier = "next";
    } else if (prefix == "这") {
      modifier = "this";
    }
    let startMoment = dayjs(context.refDate);
    let startMomentFixed = false;
    const refOffset = startMoment.day();
    if (modifier == "last" || modifier == "past") {
      startMoment = startMoment.day(offset - 7);
      startMomentFixed = true;
    } else if (modifier == "next") {
      startMoment = startMoment.day(offset + 7);
      startMomentFixed = true;
    } else if (modifier == "this") {
      startMoment = startMoment.day(offset);
    } else {
      if (Math.abs(offset - 7 - refOffset) < Math.abs(offset - refOffset)) {
        startMoment = startMoment.day(offset - 7);
      } else if (Math.abs(offset + 7 - refOffset) < Math.abs(offset - refOffset)) {
        startMoment = startMoment.day(offset + 7);
      } else {
        startMoment = startMoment.day(offset);
      }
    }
    result.start.assign("weekday", offset);
    if (startMomentFixed) {
      result.start.assign("day", startMoment.date());
      result.start.assign("month", startMoment.month() + 1);
      result.start.assign("year", startMoment.year());
    } else {
      result.start.imply("day", startMoment.date());
      result.start.imply("month", startMoment.month() + 1);
      result.start.imply("year", startMoment.year());
    }
    return result;
  }
}
const FIRST_REG_PATTERN = new RegExp("(?:从|自)?(?:(今|明|前|大前|后|大后|昨)(早|朝|晚)|(上(?:午)|早(?:上)|下(?:午)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨))|(今|明|前|大前|后|大后|昨)(?:日|天)(?:[\\s,，]*)(?:(上(?:午)|早(?:上)|下(?:午)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨)))?)?(?:[\\s,，]*)(?:(\\d+|[" + Object.keys(NUMBER).join("") + "]+)(?:\\s*)(?:点|时|:|：)(?:\\s*)(\\d+|半|正|整|[" + Object.keys(NUMBER).join("") + "]+)?(?:\\s*)(?:分|:|：)?(?:\\s*)(\\d+|[" + Object.keys(NUMBER).join("") + "]+)?(?:\\s*)(?:秒)?)(?:\\s*(A.M.|P.M.|AM?|PM?))?", "i");
const SECOND_REG_PATTERN = new RegExp("(?:^\\s*(?:到|至|\\-|\\–|\\~|\\〜)\\s*)(?:(今|明|前|大前|后|大后|昨)(早|朝|晚)|(上(?:午)|早(?:上)|下(?:午)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨))|(今|明|前|大前|后|大后|昨)(?:日|天)(?:[\\s,，]*)(?:(上(?:午)|早(?:上)|下(?:午)|晚(?:上)|夜(?:晚)?|中(?:午)|凌(?:晨)))?)?(?:[\\s,，]*)(?:(\\d+|[" + Object.keys(NUMBER).join("") + "]+)(?:\\s*)(?:点|时|:|：)(?:\\s*)(\\d+|半|正|整|[" + Object.keys(NUMBER).join("") + "]+)?(?:\\s*)(?:分|:|：)?(?:\\s*)(\\d+|[" + Object.keys(NUMBER).join("") + "]+)?(?:\\s*)(?:秒)?)(?:\\s*(A.M.|P.M.|AM?|PM?))?", "i");
const DAY_GROUP_1 = 1;
const ZH_AM_PM_HOUR_GROUP_1 = 2;
const ZH_AM_PM_HOUR_GROUP_2 = 3;
const DAY_GROUP_3 = 4;
const ZH_AM_PM_HOUR_GROUP_3 = 5;
const HOUR_GROUP = 6;
const MINUTE_GROUP = 7;
const SECOND_GROUP = 8;
const AM_PM_HOUR_GROUP = 9;
class ZHHansTimeExpressionParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return FIRST_REG_PATTERN;
  }
  innerExtract(context, match) {
    if (match.index > 0 && context.text[match.index - 1].match(/\w/)) {
      return null;
    }
    const refMoment = dayjs(context.refDate);
    const result = context.createParsingResult(match.index, match[0]);
    let startMoment = refMoment.clone();
    if (match[DAY_GROUP_1]) {
      const day1 = match[DAY_GROUP_1];
      if (day1 == "明") {
        if (refMoment.hour() > 1) {
          startMoment = startMoment.add(1, "day");
        }
      } else if (day1 == "昨") {
        startMoment = startMoment.add(-1, "day");
      } else if (day1 == "前") {
        startMoment = startMoment.add(-2, "day");
      } else if (day1 == "大前") {
        startMoment = startMoment.add(-3, "day");
      } else if (day1 == "后") {
        startMoment = startMoment.add(2, "day");
      } else if (day1 == "大后") {
        startMoment = startMoment.add(3, "day");
      }
      result.start.assign("day", startMoment.date());
      result.start.assign("month", startMoment.month() + 1);
      result.start.assign("year", startMoment.year());
    } else if (match[DAY_GROUP_3]) {
      const day3 = match[DAY_GROUP_3];
      if (day3 == "明") {
        startMoment = startMoment.add(1, "day");
      } else if (day3 == "昨") {
        startMoment = startMoment.add(-1, "day");
      } else if (day3 == "前") {
        startMoment = startMoment.add(-2, "day");
      } else if (day3 == "大前") {
        startMoment = startMoment.add(-3, "day");
      } else if (day3 == "后") {
        startMoment = startMoment.add(2, "day");
      } else if (day3 == "大后") {
        startMoment = startMoment.add(3, "day");
      }
      result.start.assign("day", startMoment.date());
      result.start.assign("month", startMoment.month() + 1);
      result.start.assign("year", startMoment.year());
    } else {
      result.start.imply("day", startMoment.date());
      result.start.imply("month", startMoment.month() + 1);
      result.start.imply("year", startMoment.year());
    }
    let hour = 0;
    let minute = 0;
    let meridiem = -1;
    if (match[SECOND_GROUP]) {
      let second = parseInt(match[SECOND_GROUP]);
      if (isNaN(second)) {
        second = zhStringToNumber(match[SECOND_GROUP]);
      }
      if (second >= 60)
        return null;
      result.start.assign("second", second);
    }
    hour = parseInt(match[HOUR_GROUP]);
    if (isNaN(hour)) {
      hour = zhStringToNumber(match[HOUR_GROUP]);
    }
    if (match[MINUTE_GROUP]) {
      if (match[MINUTE_GROUP] == "半") {
        minute = 30;
      } else if (match[MINUTE_GROUP] == "正" || match[MINUTE_GROUP] == "整") {
        minute = 0;
      } else {
        minute = parseInt(match[MINUTE_GROUP]);
        if (isNaN(minute)) {
          minute = zhStringToNumber(match[MINUTE_GROUP]);
        }
      }
    } else if (hour > 100) {
      minute = hour % 100;
      hour = Math.floor(hour / 100);
    }
    if (minute >= 60) {
      return null;
    }
    if (hour > 24) {
      return null;
    }
    if (hour >= 12) {
      meridiem = 1;
    }
    if (match[AM_PM_HOUR_GROUP]) {
      if (hour > 12)
        return null;
      const ampm = match[AM_PM_HOUR_GROUP][0].toLowerCase();
      if (ampm == "a") {
        meridiem = 0;
        if (hour == 12)
          hour = 0;
      }
      if (ampm == "p") {
        meridiem = 1;
        if (hour != 12)
          hour += 12;
      }
    } else if (match[ZH_AM_PM_HOUR_GROUP_1]) {
      const zhAMPMString1 = match[ZH_AM_PM_HOUR_GROUP_1];
      const zhAMPM1 = zhAMPMString1[0];
      if (zhAMPM1 == "早") {
        meridiem = 0;
        if (hour == 12)
          hour = 0;
      } else if (zhAMPM1 == "晚") {
        meridiem = 1;
        if (hour != 12)
          hour += 12;
      }
    } else if (match[ZH_AM_PM_HOUR_GROUP_2]) {
      const zhAMPMString2 = match[ZH_AM_PM_HOUR_GROUP_2];
      const zhAMPM2 = zhAMPMString2[0];
      if (zhAMPM2 == "上" || zhAMPM2 == "早" || zhAMPM2 == "凌") {
        meridiem = 0;
        if (hour == 12)
          hour = 0;
      } else if (zhAMPM2 == "下" || zhAMPM2 == "晚") {
        meridiem = 1;
        if (hour != 12)
          hour += 12;
      }
    } else if (match[ZH_AM_PM_HOUR_GROUP_3]) {
      const zhAMPMString3 = match[ZH_AM_PM_HOUR_GROUP_3];
      const zhAMPM3 = zhAMPMString3[0];
      if (zhAMPM3 == "上" || zhAMPM3 == "早" || zhAMPM3 == "凌") {
        meridiem = 0;
        if (hour == 12)
          hour = 0;
      } else if (zhAMPM3 == "下" || zhAMPM3 == "晚") {
        meridiem = 1;
        if (hour != 12)
          hour += 12;
      }
    }
    result.start.assign("hour", hour);
    result.start.assign("minute", minute);
    if (meridiem >= 0) {
      result.start.assign("meridiem", meridiem);
    } else {
      if (hour < 12) {
        result.start.imply("meridiem", 0);
      } else {
        result.start.imply("meridiem", 1);
      }
    }
    match = SECOND_REG_PATTERN.exec(context.text.substring(result.index + result.text.length));
    if (!match) {
      if (result.text.match(/^\d+$/)) {
        return null;
      }
      return result;
    }
    let endMoment = startMoment.clone();
    result.end = context.createParsingComponents();
    if (match[DAY_GROUP_1]) {
      const day1 = match[DAY_GROUP_1];
      if (day1 == "明") {
        if (refMoment.hour() > 1) {
          endMoment = endMoment.add(1, "day");
        }
      } else if (day1 == "昨") {
        endMoment = endMoment.add(-1, "day");
      } else if (day1 == "前") {
        endMoment = endMoment.add(-2, "day");
      } else if (day1 == "大前") {
        endMoment = endMoment.add(-3, "day");
      } else if (day1 == "后") {
        endMoment = endMoment.add(2, "day");
      } else if (day1 == "大后") {
        endMoment = endMoment.add(3, "day");
      }
      result.end.assign("day", endMoment.date());
      result.end.assign("month", endMoment.month() + 1);
      result.end.assign("year", endMoment.year());
    } else if (match[DAY_GROUP_3]) {
      const day3 = match[DAY_GROUP_3];
      if (day3 == "明") {
        endMoment = endMoment.add(1, "day");
      } else if (day3 == "昨") {
        endMoment = endMoment.add(-1, "day");
      } else if (day3 == "前") {
        endMoment = endMoment.add(-2, "day");
      } else if (day3 == "大前") {
        endMoment = endMoment.add(-3, "day");
      } else if (day3 == "后") {
        endMoment = endMoment.add(2, "day");
      } else if (day3 == "大后") {
        endMoment = endMoment.add(3, "day");
      }
      result.end.assign("day", endMoment.date());
      result.end.assign("month", endMoment.month() + 1);
      result.end.assign("year", endMoment.year());
    } else {
      result.end.imply("day", endMoment.date());
      result.end.imply("month", endMoment.month() + 1);
      result.end.imply("year", endMoment.year());
    }
    hour = 0;
    minute = 0;
    meridiem = -1;
    if (match[SECOND_GROUP]) {
      let second = parseInt(match[SECOND_GROUP]);
      if (isNaN(second)) {
        second = zhStringToNumber(match[SECOND_GROUP]);
      }
      if (second >= 60)
        return null;
      result.end.assign("second", second);
    }
    hour = parseInt(match[HOUR_GROUP]);
    if (isNaN(hour)) {
      hour = zhStringToNumber(match[HOUR_GROUP]);
    }
    if (match[MINUTE_GROUP]) {
      if (match[MINUTE_GROUP] == "半") {
        minute = 30;
      } else if (match[MINUTE_GROUP] == "正" || match[MINUTE_GROUP] == "整") {
        minute = 0;
      } else {
        minute = parseInt(match[MINUTE_GROUP]);
        if (isNaN(minute)) {
          minute = zhStringToNumber(match[MINUTE_GROUP]);
        }
      }
    } else if (hour > 100) {
      minute = hour % 100;
      hour = Math.floor(hour / 100);
    }
    if (minute >= 60) {
      return null;
    }
    if (hour > 24) {
      return null;
    }
    if (hour >= 12) {
      meridiem = 1;
    }
    if (match[AM_PM_HOUR_GROUP]) {
      if (hour > 12)
        return null;
      const ampm = match[AM_PM_HOUR_GROUP][0].toLowerCase();
      if (ampm == "a") {
        meridiem = 0;
        if (hour == 12)
          hour = 0;
      }
      if (ampm == "p") {
        meridiem = 1;
        if (hour != 12)
          hour += 12;
      }
      if (!result.start.isCertain("meridiem")) {
        if (meridiem == 0) {
          result.start.imply("meridiem", 0);
          if (result.start.get("hour") == 12) {
            result.start.assign("hour", 0);
          }
        } else {
          result.start.imply("meridiem", 1);
          if (result.start.get("hour") != 12) {
            result.start.assign("hour", result.start.get("hour") + 12);
          }
        }
      }
    } else if (match[ZH_AM_PM_HOUR_GROUP_1]) {
      const zhAMPMString1 = match[ZH_AM_PM_HOUR_GROUP_1];
      const zhAMPM1 = zhAMPMString1[0];
      if (zhAMPM1 == "早") {
        meridiem = 0;
        if (hour == 12)
          hour = 0;
      } else if (zhAMPM1 == "晚") {
        meridiem = 1;
        if (hour != 12)
          hour += 12;
      }
    } else if (match[ZH_AM_PM_HOUR_GROUP_2]) {
      const zhAMPMString2 = match[ZH_AM_PM_HOUR_GROUP_2];
      const zhAMPM2 = zhAMPMString2[0];
      if (zhAMPM2 == "上" || zhAMPM2 == "早" || zhAMPM2 == "凌") {
        meridiem = 0;
        if (hour == 12)
          hour = 0;
      } else if (zhAMPM2 == "下" || zhAMPM2 == "晚") {
        meridiem = 1;
        if (hour != 12)
          hour += 12;
      }
    } else if (match[ZH_AM_PM_HOUR_GROUP_3]) {
      const zhAMPMString3 = match[ZH_AM_PM_HOUR_GROUP_3];
      const zhAMPM3 = zhAMPMString3[0];
      if (zhAMPM3 == "上" || zhAMPM3 == "早" || zhAMPM3 == "凌") {
        meridiem = 0;
        if (hour == 12)
          hour = 0;
      } else if (zhAMPM3 == "下" || zhAMPM3 == "晚") {
        meridiem = 1;
        if (hour != 12)
          hour += 12;
      }
    }
    result.text = result.text + match[0];
    result.end.assign("hour", hour);
    result.end.assign("minute", minute);
    if (meridiem >= 0) {
      result.end.assign("meridiem", meridiem);
    } else {
      const startAtPM = result.start.isCertain("meridiem") && result.start.get("meridiem") == 1;
      if (startAtPM && result.start.get("hour") > hour) {
        result.end.imply("meridiem", 0);
      } else if (hour > 12) {
        result.end.imply("meridiem", 1);
      }
    }
    if (result.end.date().getTime() < result.start.date().getTime()) {
      result.end.imply("day", result.end.get("day") + 1);
    }
    return result;
  }
}
const PATTERN$k = new RegExp("(?:星期|礼拜|周)(?<weekday>" + Object.keys(WEEKDAY_OFFSET).join("|") + ")");
class ZHHansWeekdayParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN$k;
  }
  innerExtract(context, match) {
    const result = context.createParsingResult(match.index, match[0]);
    const dayOfWeek = match.groups.weekday;
    const offset = WEEKDAY_OFFSET[dayOfWeek];
    if (offset === void 0)
      return null;
    let startMoment = dayjs(context.refDate);
    const refOffset = startMoment.day();
    if (Math.abs(offset - 7 - refOffset) < Math.abs(offset - refOffset)) {
      startMoment = startMoment.day(offset - 7);
    } else if (Math.abs(offset + 7 - refOffset) < Math.abs(offset - refOffset)) {
      startMoment = startMoment.day(offset + 7);
    } else {
      startMoment = startMoment.day(offset);
    }
    result.start.assign("weekday", offset);
    {
      result.start.imply("day", startMoment.date());
      result.start.imply("month", startMoment.month() + 1);
      result.start.imply("year", startMoment.year());
    }
    return result;
  }
}
class ZHHansMergeDateRangeRefiner extends AbstractMergeDateRangeRefiner {
  patternBetween() {
    return /^\s*(至|到|-|~|～|－|ー)\s*$/i;
  }
}
class ZHHansMergeDateTimeRefiner extends AbstractMergeDateTimeRefiner {
  patternBetween() {
    return /^\s*$/i;
  }
}
const hans = new Chrono(createCasualConfiguration$3());
const casual$4 = new Chrono(createCasualConfiguration$3());
const strict$4 = new Chrono(createConfiguration$3());
function parse$4(text, ref, option) {
  return casual$4.parse(text, ref, option);
}
function parseDate$4(text, ref, option) {
  return casual$4.parseDate(text, ref, option);
}
function createCasualConfiguration$3() {
  const option = createConfiguration$3();
  option.parsers.unshift(new ZHHansCasualDateParser());
  return option;
}
function createConfiguration$3() {
  const configuration = includeCommonConfiguration({
    parsers: [
      new ZHHansDateParser(),
      new ZHHansRelationWeekdayParser(),
      new ZHHansWeekdayParser(),
      new ZHHansTimeExpressionParser(),
      new ZHHansDeadlineFormatParser()
    ],
    refiners: [new ZHHansMergeDateRangeRefiner(), new ZHHansMergeDateTimeRefiner()]
  });
  configuration.refiners = configuration.refiners.filter((refiner) => !(refiner instanceof ExtractTimezoneOffsetRefiner));
  return configuration;
}
const index$4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Chrono,
  get Meridiem() {
    return Meridiem;
  },
  ParsingResult,
  get Weekday() {
    return Weekday;
  },
  casual: casual$4,
  createCasualConfiguration: createCasualConfiguration$3,
  createConfiguration: createConfiguration$3,
  hans,
  parse: parse$4,
  parseDate: parseDate$4,
  strict: strict$4
}, Symbol.toStringTag, { value: "Module" }));
const index$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Chrono,
  get Meridiem() {
    return Meridiem;
  },
  ParsingResult,
  get Weekday() {
    return Weekday;
  },
  casual: casual$5,
  createCasualConfiguration: createCasualConfiguration$4,
  createConfiguration: createConfiguration$4,
  hans: index$4,
  hant,
  parse: parse$5,
  parseDate: parseDate$5,
  strict: strict$5
}, Symbol.toStringTag, { value: "Module" }));
const REGEX_PARTS$1 = {
  leftBoundary: "([^\\p{L}\\p{N}_]|^)",
  rightBoundary: "(?=[^\\p{L}\\p{N}_]|$)",
  flags: "iu"
};
const WEEKDAY_DICTIONARY$2 = {
  воскресенье: 0,
  воскресенья: 0,
  вск: 0,
  "вск.": 0,
  понедельник: 1,
  понедельника: 1,
  пн: 1,
  "пн.": 1,
  вторник: 2,
  вторника: 2,
  вт: 2,
  "вт.": 2,
  среда: 3,
  среды: 3,
  среду: 3,
  ср: 3,
  "ср.": 3,
  четверг: 4,
  четверга: 4,
  чт: 4,
  "чт.": 4,
  пятница: 5,
  пятницу: 5,
  пятницы: 5,
  пт: 5,
  "пт.": 5,
  суббота: 6,
  субботу: 6,
  субботы: 6,
  сб: 6,
  "сб.": 6
};
const FULL_MONTH_NAME_DICTIONARY$1 = {
  январь: 1,
  января: 1,
  январе: 1,
  февраль: 2,
  февраля: 2,
  феврале: 2,
  март: 3,
  марта: 3,
  марте: 3,
  апрель: 4,
  апреля: 4,
  апреле: 4,
  май: 5,
  мая: 5,
  мае: 5,
  июнь: 6,
  июня: 6,
  июне: 6,
  июль: 7,
  июля: 7,
  июле: 7,
  август: 8,
  августа: 8,
  августе: 8,
  сентябрь: 9,
  сентября: 9,
  сентябре: 9,
  октябрь: 10,
  октября: 10,
  октябре: 10,
  ноябрь: 11,
  ноября: 11,
  ноябре: 11,
  декабрь: 12,
  декабря: 12,
  декабре: 12
};
const MONTH_DICTIONARY$2 = {
  ...FULL_MONTH_NAME_DICTIONARY$1,
  янв: 1,
  "янв.": 1,
  фев: 2,
  "фев.": 2,
  мар: 3,
  "мар.": 3,
  апр: 4,
  "апр.": 4,
  авг: 8,
  "авг.": 8,
  сен: 9,
  "сен.": 9,
  окт: 10,
  "окт.": 10,
  ноя: 11,
  "ноя.": 11,
  дек: 12,
  "дек.": 12
};
const INTEGER_WORD_DICTIONARY$2 = {
  один: 1,
  одна: 1,
  одной: 1,
  одну: 1,
  две: 2,
  два: 2,
  двух: 2,
  три: 3,
  трех: 3,
  трёх: 3,
  четыре: 4,
  четырех: 4,
  четырёх: 4,
  пять: 5,
  пяти: 5,
  шесть: 6,
  шести: 6,
  семь: 7,
  семи: 7,
  восемь: 8,
  восьми: 8,
  девять: 9,
  девяти: 9,
  десять: 10,
  десяти: 10,
  одиннадцать: 11,
  одиннадцати: 11,
  двенадцать: 12,
  двенадцати: 12
};
const ORDINAL_WORD_DICTIONARY$1 = {
  первое: 1,
  первого: 1,
  второе: 2,
  второго: 2,
  третье: 3,
  третьего: 3,
  четвертое: 4,
  четвертого: 4,
  пятое: 5,
  пятого: 5,
  шестое: 6,
  шестого: 6,
  седьмое: 7,
  седьмого: 7,
  восьмое: 8,
  восьмого: 8,
  девятое: 9,
  девятого: 9,
  десятое: 10,
  десятого: 10,
  одиннадцатое: 11,
  одиннадцатого: 11,
  двенадцатое: 12,
  двенадцатого: 12,
  тринадцатое: 13,
  тринадцатого: 13,
  четырнадцатое: 14,
  четырнадцатого: 14,
  пятнадцатое: 15,
  пятнадцатого: 15,
  шестнадцатое: 16,
  шестнадцатого: 16,
  семнадцатое: 17,
  семнадцатого: 17,
  восемнадцатое: 18,
  восемнадцатого: 18,
  девятнадцатое: 19,
  девятнадцатого: 19,
  двадцатое: 20,
  двадцатого: 20,
  "двадцать первое": 21,
  "двадцать первого": 21,
  "двадцать второе": 22,
  "двадцать второго": 22,
  "двадцать третье": 23,
  "двадцать третьего": 23,
  "двадцать четвертое": 24,
  "двадцать четвертого": 24,
  "двадцать пятое": 25,
  "двадцать пятого": 25,
  "двадцать шестое": 26,
  "двадцать шестого": 26,
  "двадцать седьмое": 27,
  "двадцать седьмого": 27,
  "двадцать восьмое": 28,
  "двадцать восьмого": 28,
  "двадцать девятое": 29,
  "двадцать девятого": 29,
  "тридцатое": 30,
  "тридцатого": 30,
  "тридцать первое": 31,
  "тридцать первого": 31
};
const TIME_UNIT_DICTIONARY$2 = {
  сек: "second",
  секунда: "second",
  секунд: "second",
  секунды: "second",
  секунду: "second",
  секундочка: "second",
  секундочки: "second",
  секундочек: "second",
  секундочку: "second",
  мин: "minute",
  минута: "minute",
  минут: "minute",
  минуты: "minute",
  минуту: "minute",
  минуток: "minute",
  минутки: "minute",
  минутку: "minute",
  минуточек: "minute",
  минуточки: "minute",
  минуточку: "minute",
  час: "hour",
  часов: "hour",
  часа: "hour",
  часу: "hour",
  часиков: "hour",
  часика: "hour",
  часике: "hour",
  часик: "hour",
  день: "d",
  дня: "d",
  дней: "d",
  суток: "d",
  сутки: "d",
  неделя: "week",
  неделе: "week",
  недели: "week",
  неделю: "week",
  недель: "week",
  недельке: "week",
  недельки: "week",
  неделек: "week",
  месяц: "month",
  месяце: "month",
  месяцев: "month",
  месяца: "month",
  квартал: "quarter",
  квартале: "quarter",
  кварталов: "quarter",
  год: "year",
  года: "year",
  году: "year",
  годов: "year",
  лет: "year",
  годик: "year",
  годика: "year",
  годиков: "year"
};
const NUMBER_PATTERN$2 = `(?:${matchAnyPattern(INTEGER_WORD_DICTIONARY$2)}|[0-9]+|[0-9]+\\.[0-9]+|пол|несколько|пар(?:ы|у)|\\s{0,3})`;
function parseNumberPattern$2(match) {
  const num = match.toLowerCase();
  if (INTEGER_WORD_DICTIONARY$2[num] !== void 0) {
    return INTEGER_WORD_DICTIONARY$2[num];
  }
  if (num.match(/несколько/)) {
    return 3;
  } else if (num.match(/пол/)) {
    return 0.5;
  } else if (num.match(/пар/)) {
    return 2;
  } else if (num === "") {
    return 1;
  }
  return parseFloat(num);
}
const ORDINAL_NUMBER_PATTERN$1 = `(?:${matchAnyPattern(ORDINAL_WORD_DICTIONARY$1)}|[0-9]{1,2}(?:го|ого|е|ое)?)`;
function parseOrdinalNumberPattern$1(match) {
  const num = match.toLowerCase();
  if (ORDINAL_WORD_DICTIONARY$1[num] !== void 0) {
    return ORDINAL_WORD_DICTIONARY$1[num];
  }
  return parseInt(num);
}
const year$1 = "(?:\\s+(?:году|года|год|г|г.))?";
const YEAR_PATTERN$2 = `(?:[1-9][0-9]{0,3}${year$1}\\s*(?:н.э.|до н.э.|н. э.|до н. э.)|[1-2][0-9]{3}${year$1}|[5-9][0-9]${year$1})`;
function parseYear$1(match) {
  if (/(год|года|г|г.)/i.test(match)) {
    match = match.replace(/(год|года|г|г.)/i, "");
  }
  if (/(до н.э.|до н. э.)/i.test(match)) {
    match = match.replace(/(до н.э.|до н. э.)/i, "");
    return -parseInt(match);
  }
  if (/(н. э.|н.э.)/i.test(match)) {
    match = match.replace(/(н. э.|н.э.)/i, "");
    return parseInt(match);
  }
  const rawYearNumber = parseInt(match);
  return findMostLikelyADYear(rawYearNumber);
}
const SINGLE_TIME_UNIT_PATTERN$2 = `(${NUMBER_PATTERN$2})\\s{0,3}(${matchAnyPattern(TIME_UNIT_DICTIONARY$2)})`;
const SINGLE_TIME_UNIT_REGEX$2 = new RegExp(SINGLE_TIME_UNIT_PATTERN$2, "i");
const TIME_UNITS_PATTERN$2 = repeatedTimeunitPattern(`(?:(?:около|примерно)\\s{0,3})?`, SINGLE_TIME_UNIT_PATTERN$2);
function parseTimeUnits$2(timeunitText) {
  const fragments = {};
  let remainingText = timeunitText;
  let match = SINGLE_TIME_UNIT_REGEX$2.exec(remainingText);
  while (match) {
    collectDateTimeFragment$2(fragments, match);
    remainingText = remainingText.substring(match[0].length).trim();
    match = SINGLE_TIME_UNIT_REGEX$2.exec(remainingText);
  }
  return fragments;
}
function collectDateTimeFragment$2(fragments, match) {
  const num = parseNumberPattern$2(match[1]);
  const unit = TIME_UNIT_DICTIONARY$2[match[2].toLowerCase()];
  fragments[unit] = num;
}
const PATTERN$j = `(?:(?:около|примерно)\\s*(?:~\\s*)?)?(${TIME_UNITS_PATTERN$2})${REGEX_PARTS$1.rightBoundary}`;
const PATTERN_WITH_PREFIX$1 = new RegExp(`(?:в течение|в течении)\\s*${PATTERN$j}`, REGEX_PARTS$1.flags);
const PATTERN_WITHOUT_PREFIX$1 = new RegExp(PATTERN$j, "i");
class RUTimeUnitWithinFormatParser extends AbstractParserWithWordBoundaryChecking {
  patternLeftBoundary() {
    return REGEX_PARTS$1.leftBoundary;
  }
  innerPattern(context) {
    return context.option.forwardDate ? PATTERN_WITHOUT_PREFIX$1 : PATTERN_WITH_PREFIX$1;
  }
  innerExtract(context, match) {
    const timeUnits = parseTimeUnits$2(match[1]);
    return ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
  }
}
const PATTERN$i = new RegExp(`(?:с)?\\s*(${ORDINAL_NUMBER_PATTERN$1})(?:\\s{0,3}(?:по|-|–|до)?\\s{0,3}(${ORDINAL_NUMBER_PATTERN$1}))?(?:-|\\/|\\s{0,3}(?:of)?\\s{0,3})(${matchAnyPattern(MONTH_DICTIONARY$2)})(?:(?:-|\\/|,?\\s{0,3})(${YEAR_PATTERN$2}(?![^\\s]\\d)))?${REGEX_PARTS$1.rightBoundary}`, REGEX_PARTS$1.flags);
const DATE_GROUP$2 = 1;
const DATE_TO_GROUP$2 = 2;
const MONTH_NAME_GROUP$4 = 3;
const YEAR_GROUP$4 = 4;
class RUMonthNameLittleEndianParser extends AbstractParserWithWordBoundaryChecking {
  patternLeftBoundary() {
    return REGEX_PARTS$1.leftBoundary;
  }
  innerPattern() {
    return PATTERN$i;
  }
  innerExtract(context, match) {
    const result = context.createParsingResult(match.index, match[0]);
    const month = MONTH_DICTIONARY$2[match[MONTH_NAME_GROUP$4].toLowerCase()];
    const day = parseOrdinalNumberPattern$1(match[DATE_GROUP$2]);
    if (day > 31) {
      match.index = match.index + match[DATE_GROUP$2].length;
      return null;
    }
    result.start.assign("month", month);
    result.start.assign("day", day);
    if (match[YEAR_GROUP$4]) {
      const yearNumber = parseYear$1(match[YEAR_GROUP$4]);
      result.start.assign("year", yearNumber);
    } else {
      const year2 = findYearClosestToRef(context.refDate, day, month);
      result.start.imply("year", year2);
    }
    if (match[DATE_TO_GROUP$2]) {
      const endDate = parseOrdinalNumberPattern$1(match[DATE_TO_GROUP$2]);
      result.end = result.start.clone();
      result.end.assign("day", endDate);
    }
    return result;
  }
}
const PATTERN$h = new RegExp(`((?:в)\\s*)?(${matchAnyPattern(MONTH_DICTIONARY$2)})\\s*(?:[,-]?\\s*(${YEAR_PATTERN$2})?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)`, REGEX_PARTS$1.flags);
const MONTH_NAME_GROUP$3 = 2;
const YEAR_GROUP$3 = 3;
class RUMonthNameParser extends AbstractParserWithWordBoundaryChecking {
  patternLeftBoundary() {
    return REGEX_PARTS$1.leftBoundary;
  }
  innerPattern() {
    return PATTERN$h;
  }
  innerExtract(context, match) {
    const monthName = match[MONTH_NAME_GROUP$3].toLowerCase();
    if (match[0].length <= 3 && !FULL_MONTH_NAME_DICTIONARY$1[monthName]) {
      return null;
    }
    const result = context.createParsingResult(match.index, match.index + match[0].length);
    result.start.imply("day", 1);
    const month = MONTH_DICTIONARY$2[monthName];
    result.start.assign("month", month);
    if (match[YEAR_GROUP$3]) {
      const year2 = parseYear$1(match[YEAR_GROUP$3]);
      result.start.assign("year", year2);
    } else {
      const year2 = findYearClosestToRef(context.refDate, 1, month);
      result.start.imply("year", year2);
    }
    return result;
  }
}
class RUTimeExpressionParser extends AbstractTimeExpressionParser {
  constructor(strictMode) {
    super(strictMode);
  }
  patternFlags() {
    return REGEX_PARTS$1.flags;
  }
  primaryPatternLeftBoundary() {
    return `(^|\\s|T|(?:[^\\p{L}\\p{N}_]))`;
  }
  followingPhase() {
    return `\\s*(?:\\-|\\–|\\~|\\〜|до|и|по|\\?)\\s*`;
  }
  primaryPrefix() {
    return `(?:(?:в|с)\\s*)??`;
  }
  primarySuffix() {
    return `(?:\\s*(?:утра|вечера|после полудня))?(?!\\/)${REGEX_PARTS$1.rightBoundary}`;
  }
  extractPrimaryTimeComponents(context, match) {
    const components = super.extractPrimaryTimeComponents(context, match);
    if (components) {
      if (match[0].endsWith("вечера")) {
        const hour = components.get("hour");
        if (hour >= 6 && hour < 12) {
          components.assign("hour", components.get("hour") + 12);
          components.assign("meridiem", Meridiem.PM);
        } else if (hour < 6) {
          components.assign("meridiem", Meridiem.AM);
        }
      }
      if (match[0].endsWith("после полудня")) {
        components.assign("meridiem", Meridiem.PM);
        const hour = components.get("hour");
        if (hour >= 0 && hour <= 6) {
          components.assign("hour", components.get("hour") + 12);
        }
      }
      if (match[0].endsWith("утра")) {
        components.assign("meridiem", Meridiem.AM);
        const hour = components.get("hour");
        if (hour < 12) {
          components.assign("hour", components.get("hour"));
        }
      }
    }
    return components;
  }
}
const PATTERN$g = new RegExp(`(${TIME_UNITS_PATTERN$2})\\s{0,5}назад(?=(?:\\W|$))`, REGEX_PARTS$1.flags);
class RUTimeUnitAgoFormatParser extends AbstractParserWithWordBoundaryChecking {
  patternLeftBoundary() {
    return REGEX_PARTS$1.leftBoundary;
  }
  innerPattern() {
    return PATTERN$g;
  }
  innerExtract(context, match) {
    const timeUnits = parseTimeUnits$2(match[1]);
    const outputTimeUnits = reverseTimeUnits(timeUnits);
    return ParsingComponents.createRelativeFromReference(context.reference, outputTimeUnits);
  }
}
class RUMergeDateRangeRefiner extends AbstractMergeDateRangeRefiner {
  patternBetween() {
    return /^\s*(и до|и по|до|по|-)\s*$/i;
  }
}
class RUMergeDateTimeRefiner extends AbstractMergeDateTimeRefiner {
  patternBetween() {
    return new RegExp(`^\\s*(T|в|,|-)?\\s*$`);
  }
}
const PATTERN$f = new RegExp(`(?:с|со)?\\s*(сегодня|вчера|завтра|послезавтра|послепослезавтра|позапозавчера|позавчера)${REGEX_PARTS$1.rightBoundary}`, REGEX_PARTS$1.flags);
class RUCasualDateParser extends AbstractParserWithWordBoundaryChecking {
  patternLeftBoundary() {
    return REGEX_PARTS$1.leftBoundary;
  }
  innerPattern(context) {
    return PATTERN$f;
  }
  innerExtract(context, match) {
    const lowerText = match[1].toLowerCase();
    const component = context.createParsingComponents();
    switch (lowerText) {
      case "сегодня":
        return today(context.reference);
      case "вчера":
        return yesterday(context.reference);
      case "завтра":
        return tomorrow(context.reference);
      case "послезавтра":
        return theDayAfter(context.reference, 2);
      case "послепослезавтра":
        return theDayAfter(context.reference, 3);
      case "позавчера":
        return theDayBefore(context.reference, 2);
      case "позапозавчера":
        return theDayBefore(context.reference, 3);
    }
    return component;
  }
}
const PATTERN$e = new RegExp(`(сейчас|прошлым\\s*вечером|прошлой\\s*ночью|следующей\\s*ночью|сегодня\\s*ночью|этой\\s*ночью|ночью|этим утром|утром|утра|в\\s*полдень|вечером|вечера|в\\s*полночь)${REGEX_PARTS$1.rightBoundary}`, REGEX_PARTS$1.flags);
class RUCasualTimeParser extends AbstractParserWithWordBoundaryChecking {
  patternLeftBoundary() {
    return REGEX_PARTS$1.leftBoundary;
  }
  innerPattern() {
    return PATTERN$e;
  }
  innerExtract(context, match) {
    let targetDate = dayjs(context.refDate);
    const lowerText = match[0].toLowerCase();
    const component = context.createParsingComponents();
    if (lowerText === "сейчас") {
      return now(context.reference);
    }
    if (lowerText === "вечером" || lowerText === "вечера") {
      return evening(context.reference);
    }
    if (lowerText.endsWith("утром") || lowerText.endsWith("утра")) {
      return morning(context.reference);
    }
    if (lowerText.match(/в\s*полдень/)) {
      return noon(context.reference);
    }
    if (lowerText.match(/прошлой\s*ночью/)) {
      return lastNight(context.reference);
    }
    if (lowerText.match(/прошлым\s*вечером/)) {
      return yesterdayEvening(context.reference);
    }
    if (lowerText.match(/следующей\s*ночью/)) {
      const daysToAdd = targetDate.hour() < 22 ? 1 : 2;
      targetDate = targetDate.add(daysToAdd, "day");
      assignSimilarDate(component, targetDate);
      component.imply("hour", 0);
    }
    if (lowerText.match(/в\s*полночь/) || lowerText.endsWith("ночью")) {
      return midnight(context.reference);
    }
    return component;
  }
}
const PATTERN$d = new RegExp(`(?:(?:,|\\(|（)\\s*)?(?:в\\s*?)?(?:(эту|этот|прошлый|прошлую|следующий|следующую|следующего)\\s*)?(${matchAnyPattern(WEEKDAY_DICTIONARY$2)})(?:\\s*(?:,|\\)|）))?(?:\\s*на\\s*(этой|прошлой|следующей)\\s*неделе)?${REGEX_PARTS$1.rightBoundary}`, REGEX_PARTS$1.flags);
const PREFIX_GROUP$2 = 1;
const WEEKDAY_GROUP$2 = 2;
const POSTFIX_GROUP$2 = 3;
class RUWeekdayParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN$d;
  }
  patternLeftBoundary() {
    return REGEX_PARTS$1.leftBoundary;
  }
  innerExtract(context, match) {
    const dayOfWeek = match[WEEKDAY_GROUP$2].toLowerCase();
    const weekday = WEEKDAY_DICTIONARY$2[dayOfWeek];
    const prefix = match[PREFIX_GROUP$2];
    const postfix = match[POSTFIX_GROUP$2];
    let modifierWord = prefix || postfix;
    modifierWord = modifierWord || "";
    modifierWord = modifierWord.toLowerCase();
    let modifier = null;
    if (modifierWord == "прошлый" || modifierWord == "прошлую" || modifierWord == "прошлой") {
      modifier = "last";
    } else if (modifierWord == "следующий" || modifierWord == "следующую" || modifierWord == "следующей" || modifierWord == "следующего") {
      modifier = "next";
    } else if (modifierWord == "этот" || modifierWord == "эту" || modifierWord == "этой") {
      modifier = "this";
    }
    return createParsingComponentsAtWeekday(context.reference, weekday, modifier);
  }
}
const PATTERN$c = new RegExp(`(в прошлом|на прошлой|на следующей|в следующем|на этой|в этом)\\s*(${matchAnyPattern(TIME_UNIT_DICTIONARY$2)})(?=\\s*)${REGEX_PARTS$1.rightBoundary}`, REGEX_PARTS$1.flags);
const MODIFIER_WORD_GROUP$1 = 1;
const RELATIVE_WORD_GROUP$1 = 2;
class RURelativeDateFormatParser extends AbstractParserWithWordBoundaryChecking {
  patternLeftBoundary() {
    return REGEX_PARTS$1.leftBoundary;
  }
  innerPattern() {
    return PATTERN$c;
  }
  innerExtract(context, match) {
    const modifier = match[MODIFIER_WORD_GROUP$1].toLowerCase();
    const unitWord = match[RELATIVE_WORD_GROUP$1].toLowerCase();
    const timeunit = TIME_UNIT_DICTIONARY$2[unitWord];
    if (modifier == "на следующей" || modifier == "в следующем") {
      const timeUnits = {};
      timeUnits[timeunit] = 1;
      return ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
    }
    if (modifier == "в прошлом" || modifier == "на прошлой") {
      const timeUnits = {};
      timeUnits[timeunit] = -1;
      return ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
    }
    const components = context.createParsingComponents();
    let date = dayjs(context.reference.instant);
    if (timeunit.match(/week/i)) {
      date = date.add(-date.get("d"), "d");
      components.imply("day", date.date());
      components.imply("month", date.month() + 1);
      components.imply("year", date.year());
    } else if (timeunit.match(/month/i)) {
      date = date.add(-date.date() + 1, "d");
      components.imply("day", date.date());
      components.assign("year", date.year());
      components.assign("month", date.month() + 1);
    } else if (timeunit.match(/year/i)) {
      date = date.add(-date.date() + 1, "d");
      date = date.add(-date.month(), "month");
      components.imply("day", date.date());
      components.imply("month", date.month() + 1);
      components.assign("year", date.year());
    }
    return components;
  }
}
const PATTERN$b = new RegExp(`(эти|последние|прошлые|следующие|после|спустя|через|\\+|-)\\s*(${TIME_UNITS_PATTERN$2})${REGEX_PARTS$1.rightBoundary}`, REGEX_PARTS$1.flags);
class RUTimeUnitCasualRelativeFormatParser extends AbstractParserWithWordBoundaryChecking {
  patternLeftBoundary() {
    return REGEX_PARTS$1.leftBoundary;
  }
  innerPattern() {
    return PATTERN$b;
  }
  innerExtract(context, match) {
    const prefix = match[1].toLowerCase();
    let timeUnits = parseTimeUnits$2(match[2]);
    switch (prefix) {
      case "последние":
      case "прошлые":
      case "-":
        timeUnits = reverseTimeUnits(timeUnits);
        break;
    }
    return ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
  }
}
const casual$3 = new Chrono(createCasualConfiguration$2());
const strict$3 = new Chrono(createConfiguration$2(true));
function parse$3(text, ref, option) {
  return casual$3.parse(text, ref, option);
}
function parseDate$3(text, ref, option) {
  return casual$3.parseDate(text, ref, option);
}
function createCasualConfiguration$2() {
  const option = createConfiguration$2(false);
  option.parsers.unshift(new RUCasualDateParser());
  option.parsers.unshift(new RUCasualTimeParser());
  option.parsers.unshift(new RUMonthNameParser());
  option.parsers.unshift(new RURelativeDateFormatParser());
  option.parsers.unshift(new RUTimeUnitCasualRelativeFormatParser());
  return option;
}
function createConfiguration$2(strictMode = true) {
  return includeCommonConfiguration({
    parsers: [
      new SlashDateFormatParser(true),
      new RUTimeUnitWithinFormatParser(),
      new RUMonthNameLittleEndianParser(),
      new RUWeekdayParser(),
      new RUTimeExpressionParser(strictMode),
      new RUTimeUnitAgoFormatParser()
    ],
    refiners: [new RUMergeDateTimeRefiner(), new RUMergeDateRangeRefiner()]
  }, strictMode);
}
const index$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Chrono,
  get Meridiem() {
    return Meridiem;
  },
  ParsingResult,
  get Weekday() {
    return Weekday;
  },
  casual: casual$3,
  createCasualConfiguration: createCasualConfiguration$2,
  createConfiguration: createConfiguration$2,
  parse: parse$3,
  parseDate: parseDate$3,
  strict: strict$3
}, Symbol.toStringTag, { value: "Module" }));
const WEEKDAY_DICTIONARY$1 = {
  "domingo": 0,
  "dom": 0,
  "lunes": 1,
  "lun": 1,
  "martes": 2,
  "mar": 2,
  "miércoles": 3,
  "miercoles": 3,
  "mié": 3,
  "mie": 3,
  "jueves": 4,
  "jue": 4,
  "viernes": 5,
  "vie": 5,
  "sábado": 6,
  "sabado": 6,
  "sáb": 6,
  "sab": 6
};
const MONTH_DICTIONARY$1 = {
  "enero": 1,
  "ene": 1,
  "ene.": 1,
  "febrero": 2,
  "feb": 2,
  "feb.": 2,
  "marzo": 3,
  "mar": 3,
  "mar.": 3,
  "abril": 4,
  "abr": 4,
  "abr.": 4,
  "mayo": 5,
  "may": 5,
  "may.": 5,
  "junio": 6,
  "jun": 6,
  "jun.": 6,
  "julio": 7,
  "jul": 7,
  "jul.": 7,
  "agosto": 8,
  "ago": 8,
  "ago.": 8,
  "septiembre": 9,
  "setiembre": 9,
  "sep": 9,
  "sep.": 9,
  "octubre": 10,
  "oct": 10,
  "oct.": 10,
  "noviembre": 11,
  "nov": 11,
  "nov.": 11,
  "diciembre": 12,
  "dic": 12,
  "dic.": 12
};
const INTEGER_WORD_DICTIONARY$1 = {
  "uno": 1,
  "dos": 2,
  "tres": 3,
  "cuatro": 4,
  "cinco": 5,
  "seis": 6,
  "siete": 7,
  "ocho": 8,
  "nueve": 9,
  "diez": 10,
  "once": 11,
  "doce": 12,
  "trece": 13
};
const TIME_UNIT_DICTIONARY$1 = {
  "sec": "second",
  "segundo": "second",
  "segundos": "second",
  "min": "minute",
  "mins": "minute",
  "minuto": "minute",
  "minutos": "minute",
  "h": "hour",
  "hr": "hour",
  "hrs": "hour",
  "hora": "hour",
  "horas": "hour",
  "día": "d",
  "días": "d",
  "semana": "week",
  "semanas": "week",
  "mes": "month",
  "meses": "month",
  "cuarto": "quarter",
  "cuartos": "quarter",
  "año": "year",
  "años": "year"
};
const NUMBER_PATTERN$1 = `(?:${matchAnyPattern(INTEGER_WORD_DICTIONARY$1)}|[0-9]+|[0-9]+\\.[0-9]+|un?|uno?|una?|algunos?|unos?|demi-?)`;
function parseNumberPattern$1(match) {
  const num = match.toLowerCase();
  if (INTEGER_WORD_DICTIONARY$1[num] !== void 0) {
    return INTEGER_WORD_DICTIONARY$1[num];
  } else if (num === "un" || num === "una" || num === "uno") {
    return 1;
  } else if (num.match(/algunos?/)) {
    return 3;
  } else if (num.match(/unos?/)) {
    return 3;
  } else if (num.match(/media?/)) {
    return 0.5;
  }
  return parseFloat(num);
}
const YEAR_PATTERN$1 = "[0-9]{1,4}(?![^\\s]\\d)(?:\\s*[a|d]\\.?\\s*c\\.?|\\s*a\\.?\\s*d\\.?)?";
function parseYear(match) {
  if (match.match(/^[0-9]{1,4}$/)) {
    let yearNumber = parseInt(match);
    if (yearNumber < 100) {
      if (yearNumber > 50) {
        yearNumber = yearNumber + 1900;
      } else {
        yearNumber = yearNumber + 2e3;
      }
    }
    return yearNumber;
  }
  if (match.match(/a\.?\s*c\.?/i)) {
    match = match.replace(/a\.?\s*c\.?/i, "");
    return -parseInt(match);
  }
  return parseInt(match);
}
const SINGLE_TIME_UNIT_PATTERN$1 = `(${NUMBER_PATTERN$1})\\s{0,5}(${matchAnyPattern(TIME_UNIT_DICTIONARY$1)})\\s{0,5}`;
const SINGLE_TIME_UNIT_REGEX$1 = new RegExp(SINGLE_TIME_UNIT_PATTERN$1, "i");
const TIME_UNITS_PATTERN$1 = repeatedTimeunitPattern("", SINGLE_TIME_UNIT_PATTERN$1);
function parseTimeUnits$1(timeunitText) {
  const fragments = {};
  let remainingText = timeunitText;
  let match = SINGLE_TIME_UNIT_REGEX$1.exec(remainingText);
  while (match) {
    collectDateTimeFragment$1(fragments, match);
    remainingText = remainingText.substring(match[0].length);
    match = SINGLE_TIME_UNIT_REGEX$1.exec(remainingText);
  }
  return fragments;
}
function collectDateTimeFragment$1(fragments, match) {
  const num = parseNumberPattern$1(match[1]);
  const unit = TIME_UNIT_DICTIONARY$1[match[2].toLowerCase()];
  fragments[unit] = num;
}
const PATTERN$a = new RegExp(`(?:(?:\\,|\\(|\\（)\\s*)?(?:(este|esta|pasado|pr[oó]ximo)\\s*)?(${matchAnyPattern(WEEKDAY_DICTIONARY$1)})(?:\\s*(?:\\,|\\)|\\）))?(?:\\s*(este|esta|pasado|pr[óo]ximo)\\s*semana)?(?=\\W|\\d|$)`, "i");
const PREFIX_GROUP$1 = 1;
const WEEKDAY_GROUP$1 = 2;
const POSTFIX_GROUP$1 = 3;
class ESWeekdayParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN$a;
  }
  innerExtract(context, match) {
    const dayOfWeek = match[WEEKDAY_GROUP$1].toLowerCase();
    const weekday = WEEKDAY_DICTIONARY$1[dayOfWeek];
    if (weekday === void 0) {
      return null;
    }
    const prefix = match[PREFIX_GROUP$1];
    const postfix = match[POSTFIX_GROUP$1];
    let norm = prefix || postfix || "";
    norm = norm.toLowerCase();
    let modifier = null;
    if (norm == "pasado") {
      modifier = "this";
    } else if (norm == "próximo" || norm == "proximo") {
      modifier = "next";
    } else if (norm == "este") {
      modifier = "this";
    }
    return createParsingComponentsAtWeekday(context.reference, weekday, modifier);
  }
}
class ESTimeExpressionParser extends AbstractTimeExpressionParser {
  primaryPrefix() {
    return "(?:(?:aslas|deslas|las?|al?|de|del)\\s*)?";
  }
  followingPhase() {
    return "\\s*(?:\\-|\\–|\\~|\\〜|a(?:l)?|\\?)\\s*";
  }
}
class ESMergeDateTimeRefiner extends AbstractMergeDateTimeRefiner {
  patternBetween() {
    return new RegExp("^\\s*(?:,|de|aslas|a)?\\s*$");
  }
}
class ESMergeDateRangeRefiner extends AbstractMergeDateRangeRefiner {
  patternBetween() {
    return /^\s*(?:-)\s*$/i;
  }
}
const PATTERN$9 = new RegExp(`([0-9]{1,2})(?:º|ª|°)?(?:\\s*(?:desde|de|\\-|\\–|ao?|\\s)\\s*([0-9]{1,2})(?:º|ª|°)?)?\\s*(?:de)?\\s*(?:-|/|\\s*(?:de|,)?\\s*)(${matchAnyPattern(MONTH_DICTIONARY$1)})(?:\\s*(?:de|,)?\\s*(${YEAR_PATTERN$1}))?(?=\\W|$)`, "i");
const DATE_GROUP$1 = 1;
const DATE_TO_GROUP$1 = 2;
const MONTH_NAME_GROUP$2 = 3;
const YEAR_GROUP$2 = 4;
class ESMonthNameLittleEndianParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN$9;
  }
  innerExtract(context, match) {
    const result = context.createParsingResult(match.index, match[0]);
    const month = MONTH_DICTIONARY$1[match[MONTH_NAME_GROUP$2].toLowerCase()];
    const day = parseInt(match[DATE_GROUP$1]);
    if (day > 31) {
      match.index = match.index + match[DATE_GROUP$1].length;
      return null;
    }
    result.start.assign("month", month);
    result.start.assign("day", day);
    if (match[YEAR_GROUP$2]) {
      const yearNumber = parseYear(match[YEAR_GROUP$2]);
      result.start.assign("year", yearNumber);
    } else {
      const year2 = findYearClosestToRef(context.refDate, day, month);
      result.start.imply("year", year2);
    }
    if (match[DATE_TO_GROUP$1]) {
      const endDate = parseInt(match[DATE_TO_GROUP$1]);
      result.end = result.start.clone();
      result.end.assign("day", endDate);
    }
    return result;
  }
}
class ESCasualDateParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern(context) {
    return /(ahora|hoy|mañana|ayer)(?=\W|$)/i;
  }
  innerExtract(context, match) {
    const lowerText = match[0].toLowerCase();
    const component = context.createParsingComponents();
    switch (lowerText) {
      case "ahora":
        return now(context.reference);
      case "hoy":
        return today(context.reference);
      case "mañana":
        return tomorrow(context.reference);
      case "ayer":
        return yesterday(context.reference);
    }
    return component;
  }
}
class ESCasualTimeParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return /(?:esta\s*)?(mañana|tarde|medianoche|mediodia|mediodía|noche)(?=\W|$)/i;
  }
  innerExtract(context, match) {
    const targetDate = dayjs(context.refDate);
    const component = context.createParsingComponents();
    switch (match[1].toLowerCase()) {
      case "tarde":
        component.imply("meridiem", Meridiem.PM);
        component.imply("hour", 15);
        break;
      case "noche":
        component.imply("meridiem", Meridiem.PM);
        component.imply("hour", 22);
        break;
      case "mañana":
        component.imply("meridiem", Meridiem.AM);
        component.imply("hour", 6);
        break;
      case "medianoche":
        assignTheNextDay(component, targetDate);
        component.imply("hour", 0);
        component.imply("minute", 0);
        component.imply("second", 0);
        break;
      case "mediodia":
      case "mediodía":
        component.imply("meridiem", Meridiem.AM);
        component.imply("hour", 12);
        break;
    }
    return component;
  }
}
class ESTimeUnitWithinFormatParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return new RegExp(`(?:en|por|durante|de|dentro de)\\s*(${TIME_UNITS_PATTERN$1})(?=\\W|$)`, "i");
  }
  innerExtract(context, match) {
    const timeUnits = parseTimeUnits$1(match[1]);
    return ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
  }
}
const casual$2 = new Chrono(createCasualConfiguration$1());
const strict$2 = new Chrono(createConfiguration$1(true));
function parse$2(text, ref, option) {
  return casual$2.parse(text, ref, option);
}
function parseDate$2(text, ref, option) {
  return casual$2.parseDate(text, ref, option);
}
function createCasualConfiguration$1(littleEndian = true) {
  const option = createConfiguration$1(false, littleEndian);
  option.parsers.push(new ESCasualDateParser());
  option.parsers.push(new ESCasualTimeParser());
  return option;
}
function createConfiguration$1(strictMode = true, littleEndian = true) {
  return includeCommonConfiguration({
    parsers: [
      new SlashDateFormatParser(littleEndian),
      new ESWeekdayParser(),
      new ESTimeExpressionParser(),
      new ESMonthNameLittleEndianParser(),
      new ESTimeUnitWithinFormatParser()
    ],
    refiners: [new ESMergeDateTimeRefiner(), new ESMergeDateRangeRefiner()]
  }, strictMode);
}
const index$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Chrono,
  get Meridiem() {
    return Meridiem;
  },
  ParsingResult,
  get Weekday() {
    return Weekday;
  },
  casual: casual$2,
  createCasualConfiguration: createCasualConfiguration$1,
  createConfiguration: createConfiguration$1,
  parse: parse$2,
  parseDate: parseDate$2,
  strict: strict$2
}, Symbol.toStringTag, { value: "Module" }));
const REGEX_PARTS = {
  leftBoundary: "([^\\p{L}\\p{N}_]|^)",
  rightBoundary: "(?=[^\\p{L}\\p{N}_]|$)",
  flags: "iu"
};
const WEEKDAY_DICTIONARY = {
  "неділя": 0,
  "неділі": 0,
  "неділю": 0,
  "нд": 0,
  "нд.": 0,
  "понеділок": 1,
  "понеділка": 1,
  "пн": 1,
  "пн.": 1,
  "вівторок": 2,
  "вівторка": 2,
  "вт": 2,
  "вт.": 2,
  "середа": 3,
  "середи": 3,
  "середу": 3,
  "ср": 3,
  "ср.": 3,
  "четвер": 4,
  "четверга": 4,
  "четвергу": 4,
  "чт": 4,
  "чт.": 4,
  "п'ятниця": 5,
  "п'ятниці": 5,
  "п'ятницю": 5,
  "пт": 5,
  "пт.": 5,
  "субота": 6,
  "суботи": 6,
  "суботу": 6,
  "сб": 6,
  "сб.": 6
};
const FULL_MONTH_NAME_DICTIONARY = {
  "січень": 1,
  "січня": 1,
  "січні": 1,
  "лютий": 2,
  "лютого": 2,
  "лютому": 2,
  "березень": 3,
  "березня": 3,
  "березні": 3,
  "квітень": 4,
  "квітня": 4,
  "квітні": 4,
  "травень": 5,
  "травня": 5,
  "травні": 5,
  "червень": 6,
  "червня": 6,
  "червні": 6,
  "липень": 7,
  "липня": 7,
  "липні": 7,
  "серпень": 8,
  "серпня": 8,
  "серпні": 8,
  "вересень": 9,
  "вересня": 9,
  "вересні": 9,
  "жовтень": 10,
  "жовтня": 10,
  "жовтні": 10,
  "листопад": 11,
  "листопада": 11,
  "листопаду": 11,
  "грудень": 12,
  "грудня": 12,
  "грудні": 12
};
const MONTH_DICTIONARY = {
  ...FULL_MONTH_NAME_DICTIONARY,
  "січ": 1,
  "січ.": 1,
  "лют": 2,
  "лют.": 2,
  "бер": 3,
  "бер.": 3,
  "квіт": 4,
  "квіт.": 4,
  "трав": 5,
  "трав.": 5,
  "черв": 6,
  "черв.": 6,
  "лип": 7,
  "лип.": 7,
  "серп": 8,
  "серп.": 8,
  "сер": 8,
  "cер.": 8,
  "вер": 9,
  "вер.": 9,
  "верес": 9,
  "верес.": 9,
  "жовт": 10,
  "жовт.": 10,
  "листоп": 11,
  "листоп.": 11,
  "груд": 12,
  "груд.": 12
};
const INTEGER_WORD_DICTIONARY = {
  "один": 1,
  "одна": 1,
  "одної": 1,
  "одну": 1,
  "дві": 2,
  "два": 2,
  "двох": 2,
  "три": 3,
  "трьох": 3,
  "чотири": 4,
  "чотирьох": 4,
  "п'ять": 5,
  "п'яти": 5,
  "шість": 6,
  "шести": 6,
  "сім": 7,
  "семи": 7,
  "вісім": 8,
  "восьми": 8,
  "дев'ять": 9,
  "дев'яти": 9,
  "десять": 10,
  "десяти": 10,
  "одинадцять": 11,
  "одинадцяти": 11,
  "дванадцять": 12,
  "дванадцяти": 12
};
const ORDINAL_WORD_DICTIONARY = {
  "перше": 1,
  "першого": 1,
  "друге": 2,
  "другого": 2,
  "третє": 3,
  "третього": 3,
  "четверте": 4,
  "четвертого": 4,
  "п'яте": 5,
  "п'ятого": 5,
  "шосте": 6,
  "шостого": 6,
  "сьоме": 7,
  "сьомого": 7,
  "восьме": 8,
  "восьмого": 8,
  "дев'яте": 9,
  "дев'ятого": 9,
  "десяте": 10,
  "десятого": 10,
  "одинадцяте": 11,
  "одинадцятого": 11,
  "дванадцяте": 12,
  "дванадцятого": 12,
  "тринадцяте": 13,
  "тринадцятого": 13,
  "чотирнадцяте": 14,
  "чотинрнадцятого": 14,
  "п'ятнадцяте": 15,
  "п'ятнадцятого": 15,
  "шістнадцяте": 16,
  "шістнадцятого": 16,
  "сімнадцяте": 17,
  "сімнадцятого": 17,
  "вісімнадцяте": 18,
  "вісімнадцятого": 18,
  "дев'ятнадцяте": 19,
  "дев'ятнадцятого": 19,
  "двадцяте": 20,
  "двадцятого": 20,
  "двадцять перше": 21,
  "двадцять першого": 21,
  "двадцять друге": 22,
  "двадцять другого": 22,
  "двадцять третє": 23,
  "двадцять третього": 23,
  "двадцять четверте": 24,
  "двадцять четвертого": 24,
  "двадцять п'яте": 25,
  "двадцять п'ятого": 25,
  "двадцять шосте": 26,
  "двадцять шостого": 26,
  "двадцять сьоме": 27,
  "двадцять сьомого": 27,
  "двадцять восьме": 28,
  "двадцять восьмого": 28,
  "двадцять дев'яте": 29,
  "двадцять дев'ятого": 29,
  "тридцяте": 30,
  "тридцятого": 30,
  "тридцять перше": 31,
  "тридцять першого": 31
};
const TIME_UNIT_DICTIONARY = {
  сек: "second",
  секунда: "second",
  секунд: "second",
  секунди: "second",
  секунду: "second",
  секундочок: "second",
  секундочки: "second",
  секундочку: "second",
  хв: "minute",
  хвилина: "minute",
  хвилин: "minute",
  хвилини: "minute",
  хвилину: "minute",
  хвилинок: "minute",
  хвилинки: "minute",
  хвилинку: "minute",
  хвилиночок: "minute",
  хвилиночки: "minute",
  хвилиночку: "minute",
  год: "hour",
  година: "hour",
  годин: "hour",
  години: "hour",
  годину: "hour",
  годинка: "hour",
  годинок: "hour",
  годинки: "hour",
  годинку: "hour",
  день: "d",
  дня: "d",
  днів: "d",
  дні: "d",
  доба: "d",
  добу: "d",
  тиждень: "week",
  тижню: "week",
  тижня: "week",
  тижні: "week",
  тижнів: "week",
  місяць: "month",
  місяців: "month",
  місяці: "month",
  місяця: "month",
  квартал: "quarter",
  кварталу: "quarter",
  квартала: "quarter",
  кварталів: "quarter",
  кварталі: "quarter",
  рік: "year",
  року: "year",
  році: "year",
  років: "year",
  роки: "year"
};
const NUMBER_PATTERN = `(?:${matchAnyPattern(INTEGER_WORD_DICTIONARY)}|[0-9]+|[0-9]+\\.[0-9]+|пів|декілька|пар(?:у)|\\s{0,3})`;
function parseNumberPattern(match) {
  const num = match.toLowerCase();
  if (INTEGER_WORD_DICTIONARY[num] !== void 0) {
    return INTEGER_WORD_DICTIONARY[num];
  }
  if (num.match(/декілька/)) {
    return 2;
  } else if (num.match(/пів/)) {
    return 0.5;
  } else if (num.match(/пар/)) {
    return 2;
  } else if (num === "") {
    return 1;
  }
  return parseFloat(num);
}
const ORDINAL_NUMBER_PATTERN = `(?:${matchAnyPattern(ORDINAL_WORD_DICTIONARY)}|[0-9]{1,2}(?:го|ого|е)?)`;
function parseOrdinalNumberPattern(match) {
  const num = match.toLowerCase();
  if (ORDINAL_WORD_DICTIONARY[num] !== void 0) {
    return ORDINAL_WORD_DICTIONARY[num];
  }
  return parseInt(num);
}
const year = "(?:\\s+(?:року|рік|р|р.))?";
const YEAR_PATTERN = `(?:[1-9][0-9]{0,3}${year}\\s*(?:н.е.|до н.е.|н. е.|до н. е.)|[1-2][0-9]{3}${year}|[5-9][0-9]${year})`;
function parseYearPattern(match) {
  if (/(рік|року|р|р.)/i.test(match)) {
    match = match.replace(/(рік|року|р|р.)/i, "");
  }
  if (/(до н.е.|до н. е.)/i.test(match)) {
    match = match.replace(/(до н.е.|до н. е.)/i, "");
    return -parseInt(match);
  }
  if (/(н. е.|н.е.)/i.test(match)) {
    match = match.replace(/(н. е.|н.е.)/i, "");
    return parseInt(match);
  }
  const rawYearNumber = parseInt(match);
  return findMostLikelyADYear(rawYearNumber);
}
const SINGLE_TIME_UNIT_PATTERN = `(${NUMBER_PATTERN})\\s{0,3}(${matchAnyPattern(TIME_UNIT_DICTIONARY)})`;
const SINGLE_TIME_UNIT_REGEX = new RegExp(SINGLE_TIME_UNIT_PATTERN, "i");
const TIME_UNITS_PATTERN = repeatedTimeunitPattern(`(?:(?:близько|приблизно)\\s{0,3})?`, SINGLE_TIME_UNIT_PATTERN);
function parseTimeUnits(timeunitText) {
  const fragments = {};
  let remainingText = timeunitText;
  let match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
  while (match) {
    collectDateTimeFragment(fragments, match);
    remainingText = remainingText.substring(match[0].length).trim();
    match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
  }
  return fragments;
}
function collectDateTimeFragment(fragments, match) {
  const num = parseNumberPattern(match[1]);
  const unit = TIME_UNIT_DICTIONARY[match[2].toLowerCase()];
  fragments[unit] = num;
}
const PATTERN$8 = `(?:(?:приблизно|орієнтовно)\\s*(?:~\\s*)?)?(${TIME_UNITS_PATTERN})${REGEX_PARTS.rightBoundary}`;
const PATTERN_WITH_PREFIX = new RegExp(`(?:протягом|на протязі|протягом|упродовж|впродовж)\\s*${PATTERN$8}`, REGEX_PARTS.flags);
const PATTERN_WITHOUT_PREFIX = new RegExp(PATTERN$8, "i");
class UKTimeUnitWithinFormatParser extends AbstractParserWithWordBoundaryChecking {
  patternLeftBoundary() {
    return REGEX_PARTS.leftBoundary;
  }
  innerPattern(context) {
    return context.option.forwardDate ? PATTERN_WITHOUT_PREFIX : PATTERN_WITH_PREFIX;
  }
  innerExtract(context, match) {
    const timeUnits = parseTimeUnits(match[1]);
    return ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
  }
}
const PATTERN$7 = new RegExp(`(?:з|із)?\\s*(${ORDINAL_NUMBER_PATTERN})(?:\\s{0,3}(?:по|-|–|до)?\\s{0,3}(${ORDINAL_NUMBER_PATTERN}))?(?:-|\\/|\\s{0,3}(?:of)?\\s{0,3})(${matchAnyPattern(MONTH_DICTIONARY)})(?:(?:-|\\/|,?\\s{0,3})(${YEAR_PATTERN}(?![^\\s]\\d)))?${REGEX_PARTS.rightBoundary}`, REGEX_PARTS.flags);
const DATE_GROUP = 1;
const DATE_TO_GROUP = 2;
const MONTH_NAME_GROUP$1 = 3;
const YEAR_GROUP$1 = 4;
class UKMonthNameLittleEndianParser extends AbstractParserWithWordBoundaryChecking {
  patternLeftBoundary() {
    return REGEX_PARTS.leftBoundary;
  }
  innerPattern() {
    return PATTERN$7;
  }
  innerExtract(context, match) {
    const result = context.createParsingResult(match.index, match[0]);
    const month = MONTH_DICTIONARY[match[MONTH_NAME_GROUP$1].toLowerCase()];
    const day = parseOrdinalNumberPattern(match[DATE_GROUP]);
    if (day > 31) {
      match.index = match.index + match[DATE_GROUP].length;
      return null;
    }
    result.start.assign("month", month);
    result.start.assign("day", day);
    if (match[YEAR_GROUP$1]) {
      const yearNumber = parseYearPattern(match[YEAR_GROUP$1]);
      result.start.assign("year", yearNumber);
    } else {
      const year2 = findYearClosestToRef(context.reference.instant, day, month);
      result.start.imply("year", year2);
    }
    if (match[DATE_TO_GROUP]) {
      const endDate = parseOrdinalNumberPattern(match[DATE_TO_GROUP]);
      result.end = result.start.clone();
      result.end.assign("day", endDate);
    }
    return result;
  }
}
const PATTERN$6 = new RegExp(`((?:в|у)\\s*)?(${matchAnyPattern(MONTH_DICTIONARY)})\\s*(?:[,-]?\\s*(${YEAR_PATTERN})?)?(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)`, REGEX_PARTS.flags);
const MONTH_NAME_GROUP = 2;
const YEAR_GROUP = 3;
class UkMonthNameParser extends AbstractParserWithWordBoundaryChecking {
  patternLeftBoundary() {
    return REGEX_PARTS.leftBoundary;
  }
  innerPattern() {
    return PATTERN$6;
  }
  innerExtract(context, match) {
    const monthName = match[MONTH_NAME_GROUP].toLowerCase();
    if (match[0].length <= 3 && !FULL_MONTH_NAME_DICTIONARY[monthName]) {
      return null;
    }
    const result = context.createParsingResult(match.index, match.index + match[0].length);
    result.start.imply("day", 1);
    const month = MONTH_DICTIONARY[monthName];
    result.start.assign("month", month);
    if (match[YEAR_GROUP]) {
      const year2 = parseYearPattern(match[YEAR_GROUP]);
      result.start.assign("year", year2);
    } else {
      const year2 = findYearClosestToRef(context.reference.instant, 1, month);
      result.start.imply("year", year2);
    }
    return result;
  }
}
class UKTimeExpressionParser extends AbstractTimeExpressionParser {
  constructor(strictMode) {
    super(strictMode);
  }
  patternFlags() {
    return REGEX_PARTS.flags;
  }
  primaryPatternLeftBoundary() {
    return `(^|\\s|T|(?:[^\\p{L}\\p{N}_]))`;
  }
  followingPhase() {
    return `\\s*(?:\\-|\\–|\\~|\\〜|до|і|по|\\?)\\s*`;
  }
  primaryPrefix() {
    return `(?:(?:в|у|о|об|з|із|від)\\s*)??`;
  }
  primarySuffix() {
    return `(?:\\s*(?:ранку|вечора|по обіді|після обіду))?(?!\\/)${REGEX_PARTS.rightBoundary}`;
  }
  extractPrimaryTimeComponents(context, match) {
    const components = super.extractPrimaryTimeComponents(context, match);
    if (components) {
      if (match[0].endsWith("вечора")) {
        const hour = components.get("hour");
        if (hour >= 6 && hour < 12) {
          components.assign("hour", components.get("hour") + 12);
          components.assign("meridiem", Meridiem.PM);
        } else if (hour < 6) {
          components.assign("meridiem", Meridiem.AM);
        }
      }
      if (match[0].endsWith("по обіді") || match[0].endsWith("після обіду")) {
        components.assign("meridiem", Meridiem.PM);
        const hour = components.get("hour");
        if (hour >= 0 && hour <= 6) {
          components.assign("hour", components.get("hour") + 12);
        }
      }
      if (match[0].endsWith("ранку")) {
        components.assign("meridiem", Meridiem.AM);
        const hour = components.get("hour");
        if (hour < 12) {
          components.assign("hour", components.get("hour"));
        }
      }
    }
    return components;
  }
}
const PATTERN$5 = new RegExp(`(${TIME_UNITS_PATTERN})\\s{0,5}тому(?=(?:\\W|$))`, REGEX_PARTS.flags);
class UKTimeUnitAgoFormatParser extends AbstractParserWithWordBoundaryChecking {
  patternLeftBoundary() {
    return REGEX_PARTS.leftBoundary;
  }
  innerPattern() {
    return PATTERN$5;
  }
  innerExtract(context, match) {
    const timeUnits = parseTimeUnits(match[1]);
    const outputTimeUnits = reverseTimeUnits(timeUnits);
    return ParsingComponents.createRelativeFromReference(context.reference, outputTimeUnits);
  }
}
class UKMergeDateRangeRefiner extends AbstractMergeDateRangeRefiner {
  patternBetween() {
    return /^\s*(і до|і по|до|по|-)\s*$/i;
  }
}
class UKMergeDateTimeRefiner extends AbstractMergeDateTimeRefiner {
  patternBetween() {
    return new RegExp(`^\\s*(T|в|у|о|,|-)?\\s*$`);
  }
}
const PATTERN$4 = new RegExp(`(?:з|із|від)?\\s*(сьогодні|вчора|завтра|післязавтра|післяпіслязавтра|позапозавчора|позавчора)${REGEX_PARTS.rightBoundary}`, REGEX_PARTS.flags);
class UKCasualDateParser extends AbstractParserWithWordBoundaryChecking {
  patternLeftBoundary() {
    return REGEX_PARTS.leftBoundary;
  }
  innerPattern(context) {
    return PATTERN$4;
  }
  innerExtract(context, match) {
    const lowerText = match[1].toLowerCase();
    const component = context.createParsingComponents();
    switch (lowerText) {
      case "сьогодні":
        return today(context.reference);
      case "вчора":
        return yesterday(context.reference);
      case "завтра":
        return tomorrow(context.reference);
      case "післязавтра":
        return theDayAfter(context.reference, 2);
      case "післяпіслязавтра":
        return theDayAfter(context.reference, 3);
      case "позавчора":
        return theDayBefore(context.reference, 2);
      case "позапозавчора":
        return theDayBefore(context.reference, 3);
    }
    return component;
  }
}
const PATTERN$3 = new RegExp(`(зараз|минулого\\s*вечора|минулої\\s*ночі|наступної\\s*ночі|сьогодні\\s*вночі|цієї\\s*ночі|цього ранку|вранці|ранку|зранку|опівдні|ввечері|вечора|опівночі|вночі)${REGEX_PARTS.rightBoundary}`, REGEX_PARTS.flags);
class UKCasualTimeParser extends AbstractParserWithWordBoundaryChecking {
  patternLeftBoundary() {
    return REGEX_PARTS.leftBoundary;
  }
  innerPattern() {
    return PATTERN$3;
  }
  innerExtract(context, match) {
    let targetDate = dayjs(context.reference.instant);
    const lowerText = match[0].toLowerCase();
    const component = context.createParsingComponents();
    if (lowerText === "зараз") {
      return now(context.reference);
    }
    if (lowerText === "ввечері" || lowerText === "вечора") {
      return evening(context.reference);
    }
    if (lowerText.endsWith("вранці") || lowerText.endsWith("ранку") || lowerText.endsWith("зранку")) {
      return morning(context.reference);
    }
    if (lowerText.endsWith("опівдні")) {
      return noon(context.reference);
    }
    if (lowerText.match(/минулої\s*ночі/)) {
      return lastNight(context.reference);
    }
    if (lowerText.match(/минулого\s*вечора/)) {
      return yesterdayEvening(context.reference);
    }
    if (lowerText.match(/наступної\s*ночі/)) {
      const daysToAdd = targetDate.hour() < 22 ? 1 : 2;
      targetDate = targetDate.add(daysToAdd, "day");
      assignSimilarDate(component, targetDate);
      component.imply("hour", 1);
    }
    if (lowerText.match(/цієї\s*ночі/)) {
      return midnight(context.reference);
    }
    if (lowerText.endsWith("опівночі") || lowerText.endsWith("вночі")) {
      return midnight(context.reference);
    }
    return component;
  }
}
const PATTERN$2 = new RegExp(`(?:(?:,|\\(|（)\\s*)?(?:в\\s*?)?(?:у\\s*?)?(?:(цей|минулого|минулий|попередній|попереднього|наступного|наступний|наступному)\\s*)?(${matchAnyPattern(WEEKDAY_DICTIONARY)})(?:\\s*(?:,|\\)|）))?(?:\\s*(на|у|в)\\s*(цьому|минулому|наступному)\\s*тижні)?${REGEX_PARTS.rightBoundary}`, REGEX_PARTS.flags);
const PREFIX_GROUP = 1;
const WEEKDAY_GROUP = 2;
const POSTFIX_GROUP = 3;
class UKWeekdayParser extends AbstractParserWithWordBoundaryChecking {
  innerPattern() {
    return PATTERN$2;
  }
  patternLeftBoundary() {
    return REGEX_PARTS.leftBoundary;
  }
  innerExtract(context, match) {
    const dayOfWeek = match[WEEKDAY_GROUP].toLocaleLowerCase();
    const weekday = WEEKDAY_DICTIONARY[dayOfWeek];
    const prefix = match[PREFIX_GROUP];
    const postfix = match[POSTFIX_GROUP];
    let modifierWord = prefix || postfix;
    modifierWord = modifierWord || "";
    modifierWord = modifierWord.toLocaleLowerCase();
    let modifier = null;
    if (modifierWord == "минулого" || modifierWord == "минулий" || modifierWord == "попередній" || modifierWord == "попереднього") {
      modifier = "last";
    } else if (modifierWord == "наступного" || modifierWord == "наступний") {
      modifier = "next";
    } else if (modifierWord == "цей" || modifierWord == "цього" || modifierWord == "цьому") {
      modifier = "this";
    }
    return createParsingComponentsAtWeekday(context.reference, weekday, modifier);
  }
}
const PATTERN$1 = new RegExp(`(в минулому|у минулому|на минулому|минулого|на наступному|в наступному|у наступному|наступного|на цьому|в цьому|у цьому|цього)\\s*(${matchAnyPattern(TIME_UNIT_DICTIONARY)})(?=\\s*)${REGEX_PARTS.rightBoundary}`, REGEX_PARTS.flags);
const MODIFIER_WORD_GROUP = 1;
const RELATIVE_WORD_GROUP = 2;
class UKRelativeDateFormatParser extends AbstractParserWithWordBoundaryChecking {
  patternLeftBoundary() {
    return REGEX_PARTS.leftBoundary;
  }
  innerPattern() {
    return PATTERN$1;
  }
  innerExtract(context, match) {
    const modifier = match[MODIFIER_WORD_GROUP].toLowerCase();
    const unitWord = match[RELATIVE_WORD_GROUP].toLowerCase();
    const timeunit = TIME_UNIT_DICTIONARY[unitWord];
    if (modifier == "на наступному" || modifier == "в наступному" || modifier == "у наступному" || modifier == "наступного") {
      const timeUnits = {};
      timeUnits[timeunit] = 1;
      return ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
    }
    if (modifier == "на минулому" || modifier == "в минулому" || modifier == "у минулому" || modifier == "минулого") {
      const timeUnits = {};
      timeUnits[timeunit] = -1;
      return ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
    }
    const components = context.createParsingComponents();
    let date = dayjs(context.reference.instant);
    if (timeunit.match(/week/i)) {
      date = date.add(-date.get("d"), "d");
      components.imply("day", date.date());
      components.imply("month", date.month() + 1);
      components.imply("year", date.year());
    } else if (timeunit.match(/month/i)) {
      date = date.add(-date.date() + 1, "d");
      components.imply("day", date.date());
      components.assign("year", date.year());
      components.assign("month", date.month() + 1);
    } else if (timeunit.match(/year/i)) {
      date = date.add(-date.date() + 1, "d");
      date = date.add(-date.month(), "month");
      components.imply("day", date.date());
      components.imply("month", date.month() + 1);
      components.assign("year", date.year());
    }
    return components;
  }
}
const PATTERN = new RegExp(`(ці|останні|минулі|майбутні|наступні|після|через|\\+|-)\\s*(${TIME_UNITS_PATTERN})${REGEX_PARTS.rightBoundary}`, REGEX_PARTS.flags);
class UKTimeUnitCasualRelativeFormatParser extends AbstractParserWithWordBoundaryChecking {
  patternLeftBoundary() {
    return REGEX_PARTS.leftBoundary;
  }
  innerPattern() {
    return PATTERN;
  }
  innerExtract(context, match) {
    const prefix = match[1].toLowerCase();
    let timeUnits = parseTimeUnits(match[3]);
    switch (prefix) {
      case "останні":
      case "минулі":
      case "-":
        timeUnits = reverseTimeUnits(timeUnits);
        break;
    }
    return ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
  }
}
const casual$1 = new Chrono(createCasualConfiguration());
const strict$1 = new Chrono(createConfiguration(true));
function createCasualConfiguration() {
  const option = createConfiguration(false);
  option.parsers.unshift(new UKCasualDateParser());
  option.parsers.unshift(new UKCasualTimeParser());
  option.parsers.unshift(new UkMonthNameParser());
  option.parsers.unshift(new UKRelativeDateFormatParser());
  option.parsers.unshift(new UKTimeUnitCasualRelativeFormatParser());
  return option;
}
function createConfiguration(strictMode) {
  return includeCommonConfiguration({
    parsers: [
      new ISOFormatParser(),
      new SlashDateFormatParser(true),
      new UKTimeUnitWithinFormatParser(),
      new UKMonthNameLittleEndianParser(),
      new UKWeekdayParser(),
      new UKTimeExpressionParser(strictMode),
      new UKTimeUnitAgoFormatParser()
    ],
    refiners: [new UKMergeDateTimeRefiner(), new UKMergeDateRangeRefiner()]
  }, strictMode);
}
function parse$1(text, ref, option) {
  return casual$1.parse(text, ref, option);
}
function parseDate$1(text, ref, option) {
  return casual$1.parseDate(text, ref, option);
}
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Chrono,
  get Meridiem() {
    return Meridiem;
  },
  ParsingResult,
  get Weekday() {
    return Weekday;
  },
  casual: casual$1,
  createCasualConfiguration,
  createConfiguration,
  parse: parse$1,
  parseDate: parseDate$1,
  strict: strict$1
}, Symbol.toStringTag, { value: "Module" }));
const strict = strict$b;
const casual = casual$b;
function parse(text, ref, option) {
  return casual.parse(text, ref, option);
}
function parseDate(text, ref, option) {
  return casual.parseDate(text, ref, option);
}
export {
  Chrono,
  Meridiem,
  ParsingResult,
  Weekday,
  casual,
  index$9 as de,
  index$a as en,
  index$1 as es,
  index$8 as fr,
  index$7 as ja,
  index$5 as nl,
  parse,
  parseDate,
  index$6 as pt,
  index$2 as ru,
  strict,
  index as uk,
  index$3 as zh
};
