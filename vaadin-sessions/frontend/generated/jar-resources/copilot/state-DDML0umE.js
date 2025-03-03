import { aa as u, ab as l } from "./copilot-B_g-uHXF.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const p = { attribute: !0, type: String, converter: l, reflect: !1, hasChanged: u }, d = (t = p, n, e) => {
  const { kind: o, metadata: s } = e;
  let a = globalThis.litPropertyMetadata.get(s);
  if (a === void 0 && globalThis.litPropertyMetadata.set(s, a = /* @__PURE__ */ new Map()), a.set(e.name, t), o === "accessor") {
    const { name: r } = e;
    return { set(i) {
      const c = n.get.call(this);
      n.set.call(this, i), this.requestUpdate(r, c, t);
    }, init(i) {
      return i !== void 0 && this.P(r, void 0, t), i;
    } };
  }
  if (o === "setter") {
    const { name: r } = e;
    return function(i) {
      const c = this[r];
      n.call(this, i), this.requestUpdate(r, c, t);
    };
  }
  throw Error("Unsupported decorator location: " + o);
};
function h(t) {
  return (n, e) => typeof e == "object" ? d(t, n, e) : ((o, s, a) => {
    const r = s.hasOwnProperty(a);
    return s.constructor.createProperty(a, r ? { ...o, wrapped: !0 } : o), r ? Object.getOwnPropertyDescriptor(s, a) : void 0;
  })(t, n, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function b(t) {
  return h({ ...t, state: !0, attribute: !1 });
}
export {
  h as n,
  b as r
};
