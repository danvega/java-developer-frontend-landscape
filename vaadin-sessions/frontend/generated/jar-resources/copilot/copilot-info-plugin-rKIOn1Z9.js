import { a as V, a8 as H, D as C, Z as U, G as z, j as u, x as c, p as N, F as j, a9 as I, H as O, L as J, a1 as L, a2 as B, M as q, b as F, n as P } from "./copilot-B_g-uHXF.js";
import { r as A } from "./state-DDML0umE.js";
import { B as M } from "./base-panel-C9ezFash.js";
import { i as b } from "./icons-x5khyqlC.js";
import { e as S } from "./early-project-state-CqEloDes.js";
const W = "copilot-info-panel{--dev-tools-red-color: red;--dev-tools-grey-color: gray;--dev-tools-green-color: green;position:relative}copilot-info-panel div.info-tray{display:flex;flex-direction:column;gap:10px}copilot-info-panel button.upgrade-btn{color:var(--blue-600);position:relative;height:unset}copilot-info-panel button.upgrade-btn .new-version-indicator{--indicator-size: 6px;top:0;right:calc(-1 * var(--indicator-size) / 2);width:var(--indicator-size);height:var(--indicator-size);box-sizing:border-box;border-radius:100%;position:absolute;background:var(--accent-color);animation:ping 2s cubic-bezier(0,0,.2,1) infinite}copilot-info-panel vaadin-button{margin-inline:var(--lumo-space-l)}copilot-info-panel dl{display:grid;grid-template-columns:auto auto;gap:0;margin:var(--space-100) var(--space-50);font:var(--font-xsmall)}copilot-info-panel dl>dt,copilot-info-panel dl>dd{padding:3px 10px;margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}copilot-info-panel dd.live-reload-status>span{overflow:hidden;text-overflow:ellipsis;display:block;color:var(--status-color)}copilot-info-panel dd span.hidden{display:none}copilot-info-panel dd span.true{color:var(--dev-tools-green-color);font-size:large}copilot-info-panel dd span.false{color:var(--dev-tools-red-color);font-size:large}copilot-info-panel code{white-space:nowrap;-webkit-user-select:all;user-select:all}copilot-info-panel .checks{display:inline-grid;grid-template-columns:auto 1fr;gap:var(--space-50)}copilot-info-panel span.hint{font-size:var(--font-size-0);background:var(--gray-50);padding:var(--space-75);border-radius:var(--radius-2)}";
var k, E;
function _() {
  return E || (E = 1, k = function() {
    var e = document.getSelection();
    if (!e.rangeCount)
      return function() {
      };
    for (var t = document.activeElement, o = [], l = 0; l < e.rangeCount; l++)
      o.push(e.getRangeAt(l));
    switch (t.tagName.toUpperCase()) {
      // .toUpperCase handles XHTML
      case "INPUT":
      case "TEXTAREA":
        t.blur();
        break;
      default:
        t = null;
        break;
    }
    return e.removeAllRanges(), function() {
      e.type === "Caret" && e.removeAllRanges(), e.rangeCount || o.forEach(function(n) {
        e.addRange(n);
      }), t && t.focus();
    };
  }), k;
}
var D, $;
function G() {
  if ($) return D;
  $ = 1;
  var e = _(), t = {
    "text/plain": "Text",
    "text/html": "Url",
    default: "Text"
  }, o = "Copy to clipboard: #{key}, Enter";
  function l(r) {
    var a = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
    return r.replace(/#{\s*key\s*}/g, a);
  }
  function n(r, a) {
    var s, g, f, v, p, i, w = !1;
    a || (a = {}), s = a.debug || !1;
    try {
      f = e(), v = document.createRange(), p = document.getSelection(), i = document.createElement("span"), i.textContent = r, i.ariaHidden = "true", i.style.all = "unset", i.style.position = "fixed", i.style.top = 0, i.style.clip = "rect(0, 0, 0, 0)", i.style.whiteSpace = "pre", i.style.webkitUserSelect = "text", i.style.MozUserSelect = "text", i.style.msUserSelect = "text", i.style.userSelect = "text", i.addEventListener("copy", function(d) {
        if (d.stopPropagation(), a.format)
          if (d.preventDefault(), typeof d.clipboardData > "u") {
            s && console.warn("unable to use e.clipboardData"), s && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
            var x = t[a.format] || t.default;
            window.clipboardData.setData(x, r);
          } else
            d.clipboardData.clearData(), d.clipboardData.setData(a.format, r);
        a.onCopy && (d.preventDefault(), a.onCopy(d.clipboardData));
      }), document.body.appendChild(i), v.selectNodeContents(i), p.addRange(v);
      var R = document.execCommand("copy");
      if (!R)
        throw new Error("copy command was unsuccessful");
      w = !0;
    } catch (d) {
      s && console.error("unable to copy using execCommand: ", d), s && console.warn("trying IE specific stuff");
      try {
        window.clipboardData.setData(a.format || "text", r), a.onCopy && a.onCopy(window.clipboardData), w = !0;
      } catch (x) {
        s && console.error("unable to copy using clipboardData: ", x), s && console.error("falling back to prompt"), g = l("message" in a ? a.message : o), window.prompt(g, r);
      }
    } finally {
      p && (typeof p.removeRange == "function" ? p.removeRange(v) : p.removeAllRanges()), i && document.body.removeChild(i), f();
    }
    return w;
  }
  return D = n, D;
}
var K = G();
const X = /* @__PURE__ */ V(K);
var Z = Object.defineProperty, Q = Object.getOwnPropertyDescriptor, h = (e, t, o, l) => {
  for (var n = l > 1 ? void 0 : l ? Q(t, o) : t, r = e.length - 1, a; r >= 0; r--)
    (a = e[r]) && (n = (l ? a(t, o, n) : a(n)) || n);
  return l && n && Z(t, o, n), n;
};
let y = class extends M {
  constructor() {
    super(...arguments), this.serverInfo = [], this.clientInfo = [{ name: "Browser", version: navigator.userAgent }], this.handleServerInfoEvent = (e) => {
      const t = JSON.parse(e.data.info);
      this.serverInfo = t.versions, H().then((o) => {
        o && (this.clientInfo.unshift({ name: "Vaadin Employee", version: "true", more: void 0 }), this.requestUpdate("clientInfo"));
      }), C() === "success" && U("hotswap-active", { value: z() });
    };
  }
  connectedCallback() {
    super.connectedCallback(), this.onCommand("copilot-info", this.handleServerInfoEvent), this.onEventBus("system-info-with-callback", (e) => {
      e.detail.callback(this.getInfoForClipboard(e.detail.notify));
    }), this.reaction(
      () => u.idePluginState,
      () => {
        this.requestUpdate("serverInfo");
      }
    );
  }
  getIndex(e) {
    return this.serverInfo.findIndex((t) => t.name === e);
  }
  render() {
    const e = u.newVaadinVersionState?.versions !== void 0 && u.newVaadinVersionState.versions.length > 0, t = [...this.serverInfo, ...this.clientInfo];
    let o = this.getIndex("Spring") + 1;
    o === 0 && (o = t.length), S.springSecurityEnabled && (t.splice(o, 0, { name: "Spring Security", version: "true" }), o++), S.springJpaDataEnabled && (t.splice(o, 0, { name: "Spring Data JPA", version: "true" }), o++);
    const l = t.find((n) => n.name === "Vaadin");
    return l && (l.more = c`<button
        aria-label="Upgrade vaadin version"
        class="upgrade-btn"
        id="new-vaadin-version-btn"
        @click="${(n) => {
      n.stopPropagation(), N.updatePanel("copilot-vaadin-versions", { floating: !0 });
    }}">
        Upgrade
        <span class="${e ? "new-version-indicator" : ""}"></span>
      </button>`), c` <style>
        ${W}
      </style>
      <div class="info-tray">
        <dl>
          ${t.map(
      (n) => c`
              <dt>${n.name}</dt>
              <dd title="${n.version}" style="${n.name === "Java Hotswap" ? "white-space: normal" : ""}">
                ${this.renderValue(n.version)}
                <span class="more">${n.more}</span>
              </dd>
            `
    )}
          ${this.renderDevWorkflowSection()}
        </dl>
        ${this.renderDevelopmentWorkflowButton()}
      </div>`;
  }
  renderDevWorkflowSection() {
    const e = C(), t = this.getIdePluginLabelText(u.idePluginState), o = this.getHotswapAgentLabelText(e);
    return c`
      <dt>Java Hotswap</dt>
      <dd>${m(e === "success")} ${o}</dd>
      ${I() !== "unsupported" ? c`<dt>IDE Plugin</dt>
            <dd>${m(I() === "success")} ${t}</dd>` : j}
    `;
  }
  renderDevelopmentWorkflowButton() {
    const e = O();
    let t = "", o = null;
    return e.status === "success" ? (t = "More details...", o = b.checkCircle) : e.status === "warning" ? (t = "Improve Development Workflow...", o = b.alertTriangle) : e.status === "error" && (t = "Fix Development Workflow...", o = c`<span style="color: var(--lumo-error-color)">${b.alertCircle}</span>`), c`
      <vaadin-button
        id="development-workflow-guide"
        @click="${() => {
      J();
    }}">
        <span slot="prefix"> ${o}</span>
        ${t}</vaadin-button
      >
    `;
  }
  getHotswapAgentLabelText(e) {
    return e === "success" ? "Java Hotswap is enabled" : e === "error" ? "Hotswap is partially enabled" : "Hotswap is not enabled";
  }
  getIdePluginLabelText(e) {
    if (I() !== "success")
      return "Not installed";
    if (e?.version) {
      let t = null;
      return e?.ide && (e?.ide === "intellij" ? t = "IntelliJ" : e?.ide === "vscode" ? t = "VS Code" : e?.ide === "eclipse" && (t = "Eclipse")), t ? `${e?.version} ${t}` : e?.version;
    }
    return "Not installed";
  }
  renderValue(e) {
    return e === "false" ? m(!1) : e === "true" ? m(!0) : e;
  }
  getInfoForClipboard(e) {
    const t = this.renderRoot.querySelectorAll(".info-tray dt"), n = Array.from(t).map((r) => ({
      key: r.textContent.trim(),
      value: r.nextElementSibling.textContent.trim()
    })).filter((r) => r.key !== "Live reload").filter((r) => !r.key.startsWith("Vaadin Emplo")).map((r) => {
      const { key: a } = r;
      let { value: s } = r;
      if (a === "IDE Plugin")
        s = this.getIdePluginLabelText(u.idePluginState) ?? "false";
      else if (a === "Java Hotswap") {
        const g = u.jdkInfo?.jrebel, f = C();
        g && f === "success" ? s = "JRebel is in use" : s = this.getHotswapAgentLabelText(f);
      } else a === "Vaadin" && s.indexOf(`
`) !== -1 && (s = s.substring(0, s.indexOf(`
`)));
      return `${a}: ${s}`;
    }).join(`
`);
    return e && L({
      type: B.INFORMATION,
      message: "Environment information copied to clipboard",
      dismissId: "versionInfoCopied"
    }), n.trim();
  }
};
h([
  A()
], y.prototype, "serverInfo", 2);
h([
  A()
], y.prototype, "clientInfo", 2);
y = h([
  P("copilot-info-panel")
], y);
let T = class extends q {
  createRenderRoot() {
    return this;
  }
  connectedCallback() {
    super.connectedCallback(), this.style.display = "flex";
  }
  render() {
    return c` <button title="Copy to clipboard" aria-label="Copy to clipboard" theme="icon tertiary">
      <span
        @click=${() => {
      F.emit("system-info-with-callback", {
        callback: X,
        notify: !0
      });
    }}
        >${b.copy}</span
      >
    </button>`;
  }
};
T = h([
  P("copilot-info-actions")
], T);
const Y = {
  header: "Info",
  expanded: !1,
  panelOrder: 15,
  panel: "right",
  floating: !1,
  tag: "copilot-info-panel",
  actionsTag: "copilot-info-actions",
  eager: !0
  // Render even when collapsed as error handling depends on this
}, ee = {
  init(e) {
    e.addPanel(Y);
  }
};
window.Vaadin.copilot.plugins.push(ee);
function m(e) {
  return e ? c`<span class="true">☑</span>` : c`<span class="false">☒</span>`;
}
export {
  T as Actions,
  y as CopilotInfoPanel
};
