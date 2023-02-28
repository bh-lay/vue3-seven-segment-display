(function(){ try {var elementStyle = document.createElement('style'); elementStyle.appendChild(document.createTextNode(".seven-segment-display{display:inline-block;position:relative;line-height:0}.seven-segment-display span{position:absolute;width:100%;height:100%;line-height:1.5em;font-size:1em;text-align:left;color:#0000;overflow:hidden}.seven-segment-display svg{height:1em}.seven-segment-display path{fill:currentColor;opacity:.05;transition:.5s ease-out}.seven-segment-display[data-num=\"0\"] path[n*=\"0\"],.seven-segment-display[data-num=\"1\"] path[n*=\"1\"],.seven-segment-display[data-num=\"2\"] path[n*=\"2\"],.seven-segment-display[data-num=\"3\"] path[n*=\"3\"],.seven-segment-display[data-num=\"4\"] path[n*=\"4\"],.seven-segment-display[data-num=\"5\"] path[n*=\"5\"],.seven-segment-display[data-num=\"6\"] path[n*=\"6\"],.seven-segment-display[data-num=\"7\"] path[n*=\"7\"],.seven-segment-display[data-num=\"8\"] path[n*=\"8\"],.seven-segment-display[data-num=\"9\"] path[n*=\"9\"]{opacity:1}")); document.head.appendChild(elementStyle);} catch(e) {console.error('vite-plugin-css-injected-by-js', e);} })();import { defineComponent as r, ref as p, watch as L, h as a, openBlock as o, createElementBlock as d, Fragment as f, renderList as i, createBlock as v } from "vue";
const m = "seven-segment-display";
function y(e) {
  return typeof e == "string" && (e = parseInt(e, 10)), typeof e == "number" ? (e < 0 || e > 9 ? e = "NaN" : e % 1 !== 0 && (e = Math.floor(e)), e.toString()) : "NaN";
}
function S(e) {
  if (typeof e == "number" && (e = e.toString()), typeof e == "string")
    e = e.replace(/[^\d]/g, "");
  else
    return ["NaN"];
  return e.split("");
}
const _ = r({
  props: {
    value: {
      type: [String, Number],
      default: void 0
    },
    disableSelect: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, l) {
    const t = p("");
    return L(
      () => e.value,
      function(n) {
        t.value = y(n || 0);
      },
      {
        immediate: !0
      }
    ), () => {
      const n = e.disableSelect ? null : a("span", {}, t.value === "NaN" ? "" : t.value);
      return a("div", {
        class: m,
        "data-num": t.value
      }, [
        n,
        a("svg", {
          viewBox: "0 0 15 20",
          xmlns: "http://www.w3.org/2000/svg",
          innerHTML: `<path pins="0" n="02356789" d="M 9.545 0 L 8.727 2.182 L 2.209 2.182 L 0.027 1.364 Q 0.274 0.376 1.191 0.059 A 2.369 2.369 0 0 1 1.391 0 L 9.545 0 Z"/>
          <path pins="1" n="01234789" d="M 10.909 9.545 L 9.273 7.909 L 9.273 2.182 L 10.091 0 Q 11.078 0.247 11.395 1.164 A 2.369 2.369 0 0 1 11.455 1.364 L 11.455 9 L 10.909 9.545 Z"/>
          <path pins="2" n="013456789" d="M 9.273 11.727 L 10.909 10.091 L 11.455 10.636 L 11.455 18.273 Q 11.208 19.26 10.291 19.577 A 2.369 2.369 0 0 1 10.091 19.636 L 9.273 17.455 L 9.273 11.727 Z"/>
          <path pins="3" n="0235689" d="M 8.727 17.455 L 9.545 19.636 L 1.364 19.636 Q 0.376 19.39 0.059 18.473 A 2.369 2.369 0 0 1 0 18.273 L 2.182 17.455 L 8.727 17.455 Z"/>
          <path pins="4" n="0268" d="M 2.182 16.909 L 0 17.727 L 0 10.636 L 0.545 10.091 L 2.182 11.727 L 2.182 16.909 Z"/>
          <path pins="5" n="045689" d="M 0 1.909 L 2.182 2.727 L 2.182 7.909 L 0.545 9.545 L 0 9 L 0 1.909 Z"/>
          <path pins="6" n="2345689" d="M 2.182 8.727 L 9.273 8.727 L 10.364 9.818 L 9.273 10.909 L 2.182 10.909 L 1.091 9.818 L 2.182 8.727 Z"/>`
        })
      ]);
    };
  }
});
const s = /* @__PURE__ */ r({
  __name: "seven-segment-display",
  props: {
    value: {
      type: [String, Number],
      default: void 0
    },
    disableSelect: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const l = e, t = p(["0"]);
    return L(
      () => l.value,
      function(n) {
        t.value = S(n);
      },
      {
        immediate: !0
      }
    ), (n, h) => (o(!0), d(f, null, i(t.value, (c, u) => (o(), v(_, {
      key: u,
      value: c,
      "disable-select": e.disableSelect
    }, null, 8, ["value", "disable-select"]))), 128));
  }
}), Z = Object.assign(s, {
  install: (e) => {
    e.component("seven-segment-display", s);
  }
});
export {
  Z as default
};
