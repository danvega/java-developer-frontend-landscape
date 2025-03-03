import { n as f, b as c, x as i, F as g, W as m, N as e, z as b } from "./copilot-B_g-uHXF.js";
import { B as $ } from "./base-panel-C9ezFash.js";
import { i as a } from "./icons-x5khyqlC.js";
const v = 'copilot-shortcuts-panel{display:flex;flex-direction:column;padding:var(--space-150)}copilot-shortcuts-panel h3{font:var(--font-xsmall-semibold);margin-bottom:var(--space-100);margin-top:0}copilot-shortcuts-panel h3:not(:first-of-type){margin-top:var(--space-200)}copilot-shortcuts-panel ul{display:flex;flex-direction:column;list-style:none;margin:0;padding:0}copilot-shortcuts-panel ul li{display:flex;align-items:center;gap:var(--space-50);position:relative}copilot-shortcuts-panel ul li:not(:last-of-type):before{border-bottom:1px dashed var(--border-color);content:"";inset:auto 0 0 calc(var(--size-m) + var(--space-50));position:absolute}copilot-shortcuts-panel ul li span:has(svg){align-items:center;display:flex;height:var(--size-m);justify-content:center;width:var(--size-m)}copilot-shortcuts-panel .kbds{margin-inline-start:auto}copilot-shortcuts-panel kbd{align-items:center;border:1px solid var(--border-color);border-radius:var(--radius-2);box-sizing:border-box;display:inline-flex;font-family:var(--font-family);font-size:var(--font-size-1);line-height:var(--line-height-1);padding:0 var(--space-50)}', u = window.Vaadin.copilot.tree;
if (!u)
  throw new Error("Tried to access copilot tree before it was initialized.");
var y = Object.getOwnPropertyDescriptor, w = (s, l, h, p) => {
  for (var o = p > 1 ? void 0 : p ? y(l, h) : l, n = s.length - 1, r; n >= 0; n--)
    (r = s[n]) && (o = r(o) || o);
  return o;
};
let d = class extends $ {
  constructor() {
    super(), this.onTreeUpdated = () => {
      this.requestUpdate();
    };
  }
  connectedCallback() {
    super.connectedCallback(), c.on("copilot-tree-created", this.onTreeUpdated);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), c.off("copilot-tree-created", this.onTreeUpdated);
  }
  render() {
    const s = u.hasFlowComponents();
    return i`<style>
        ${v}
      </style>
      <h3>Global</h3>
      <ul>
        <li>
          <span>${a.vaadinLogo}</span>
          <span>Copilot</span>
          ${t(e.toggleCopilot)}
        </li>
        <li>
          <span>${a.terminal}</span>
          <span>Command window</span>
          ${t(e.toggleCommandWindow)}
        </li>
        <li>
          <span>${a.flipBack}</span>
          <span>Undo</span>
          ${t(e.undo)}
        </li>
        <li>
          <span>${a.flipForward}</span>
          <span>Redo</span>
          ${t(e.redo)}
        </li>
      </ul>
      <h3>Selected component</h3>
      <ul>
        <li>
          <span>${a.fileCodeAlt}</span>
          <span>Go to source</span>
          ${t(e.goToSource)}
        </li>
        ${s ? i`<li>
              <span>${a.code}</span>
              <span>Go to attach source</span>
              ${t(e.goToAttachSource)}
            </li>` : g}
        <li>
          <span>${a.copy}</span>
          <span>Copy</span>
          ${t(e.copy)}
        </li>
        <li>
          <span>${a.clipboard}</span>
          <span>Paste</span>
          ${t(e.paste)}
        </li>
        <li>
          <span>${a.copyAlt}</span>
          <span>Duplicate</span>
          ${t(e.duplicate)}
        </li>
        <li>
          <span>${a.userUp}</span>
          <span>Select parent</span>
          ${t(e.selectParent)}
        </li>
        <li>
          <span>${a.userLeft}</span>
          <span>Select previous sibling</span>
          ${t(e.selectPreviousSibling)}
        </li>
        <li>
          <span>${a.userRight}</span>
          <span>Select first child / next sibling</span>
          ${t(e.selectNextSibling)}
        </li>
        <li>
          <span>${a.trash}</span>
          <span>Delete</span>
          ${t(e.delete)}
        </li>
      </ul>`;
  }
};
d = w([
  f("copilot-shortcuts-panel")
], d);
function t(s) {
  return i`<span class="kbds">${m(s)}</span>`;
}
const x = b({
  header: "Keyboard Shortcuts",
  tag: "copilot-shortcuts-panel",
  width: 400,
  height: 550,
  floatingPosition: {
    top: 50,
    left: 50
  }
}), C = {
  init(s) {
    s.addPanel(x);
  }
};
window.Vaadin.copilot.plugins.push(C);
