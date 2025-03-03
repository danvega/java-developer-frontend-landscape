import { x as r, j as d, Z as g, a1 as c, a2 as f, n as u } from "./copilot-B_g-uHXF.js";
import { B as h } from "./base-panel-C9ezFash.js";
import { i as m } from "./icons-x5khyqlC.js";
const v = "copilot-features-panel{padding:var(--space-100);font:var(--font-xsmall);display:grid;grid-template-columns:auto 1fr;gap:var(--space-50);height:auto}copilot-features-panel a{display:flex;align-items:center;gap:var(--space-50);white-space:nowrap}copilot-features-panel a svg{height:12px;width:12px;min-height:12px;min-width:12px}";
var b = Object.getOwnPropertyDescriptor, w = (e, t, a, n) => {
  for (var o = n > 1 ? void 0 : n ? b(t, a) : t, s = e.length - 1, i; s >= 0; s--)
    (i = e[s]) && (o = i(o) || o);
  return o;
};
const l = window.Vaadin.devTools;
let p = class extends h {
  render() {
    return r` <style>
        ${v}
      </style>
      ${d.featureFlags.map(
      (e) => r`
          <copilot-toggle-button
            .title="${e.title}"
            ?checked=${e.enabled}
            @on-change=${(t) => this.toggleFeatureFlag(t, e)}>
          </copilot-toggle-button>
          <a class="ahreflike" href="${e.moreInfoLink}" title="Learn more" target="_blank"
            >learn more ${m.share}</a
          >
        `
    )}`;
  }
  toggleFeatureFlag(e, t) {
    const a = e.target.checked;
    g("use-feature", { source: "toggle", enabled: a, id: t.id }), l.frontendConnection ? (l.frontendConnection.send("setFeature", { featureId: t.id, enabled: a }), c({
      type: f.INFORMATION,
      message: `“${t.title}” ${a ? "enabled" : "disabled"}`,
      details: t.requiresServerRestart ? "This feature requires a server restart" : void 0,
      dismissId: `feature${t.id}${a ? "Enabled" : "Disabled"}`
    })) : l.log("error", `Unable to toggle feature ${t.title}: No server connection available`);
  }
};
p = w([
  u("copilot-features-panel")
], p);
const $ = {
  header: "Features",
  expanded: !1,
  panelOrder: 35,
  panel: "right",
  floating: !1,
  tag: "copilot-features-panel",
  helpUrl: "https://vaadin.com/docs/latest/flow/configuration/feature-flags"
}, x = {
  init(e) {
    e.addPanel($);
  }
};
window.Vaadin.copilot.plugins.push(x);
export {
  p as CopilotFeaturesPanel
};
