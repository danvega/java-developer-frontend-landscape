import { x as d, b as c, p as h, Z as f, s as v, P as b, z as m, n as g } from "./copilot-B_g-uHXF.js";
import { r as p } from "./state-DDML0umE.js";
import { m as y, e as k } from "./overlay-monkeypatch-CfGi1TGf.js";
import { B as x } from "./base-panel-C9ezFash.js";
import { i as w } from "./icons-x5khyqlC.js";
const $ = "copilot-feedback-panel{display:flex;flex-direction:column;font:var(--font-xsmall);--vaadin-input-field-label-font-size: var(--font-size-1);padding:var(--space-200);gap:var(--space-200);justify-content:space-between}copilot-feedback-panel>p{margin:0}copilot-feedback-panel .dialog-footer{display:flex;gap:var(--space-100)}copilot-feedback-panel vaadin-select,copilot-feedback-panel vaadin-text-area,copilot-feedback-panel vaadin-text-field{padding-top:0;--lumo-text-field-size: 1.75rem;--vaadin-input-field-label-font-size: var(--font-size-2);--vaadin-input-field-background: none;--vaadin-input-field-border-color: transparent;--vaadin-input-field-border-width: 1px;--vaadin-input-field-border-color: var(--border-color-high-contrast);--vaadin-input-field-hover-highlight: var(--gray-100);--vaadin-input-field-hover-highlight-opacity: 1}copilot-feedback-panel vaadin-text-area>textarea{max-height:7em}copilot-feedback-panel vaadin-text-area>textarea{padding:var(--space-100) 0;font:var(--font-xsmall)}copilot-feedback-panel vaadin-text-area:hover::part(input-field){background-color:var(--gray-100)}copilot-feedback-panel vaadin-text-field>input{font:var(--font-xsmall)}copilot-feedback-panel vaadin-select::part(input-field){border-radius:var(--radius-1);flex:1;padding:0 var(--space-50)}copilot-feedback-panel vaadin-select[focus-ring]::part(input-field){box-shadow:none;outline:2px solid var(--selection-color);outline-offset:-2px}copilot-feedback-panel vaadin-select-value-button{padding:0 var(--space-50)}copilot-feedback-panel vaadin-select-item{--_lumo-selected-item-height: 1.75rem;--_lumo-selected-item-padding: 0;font:var(--font-xsmall)}copilot-feedback-panel vaadin-select-item:not([disabled]):hover{background:transparent;color:var(--color-high-contrast)}copilot-feedback-panel vaadin-combo-box-item:not([disabled]):hover{background:transparent;color:var(--color-high-contrast)}";
var A = Object.defineProperty, P = Object.getOwnPropertyDescriptor, o = (e, t, l, n) => {
  for (var a = n > 1 ? void 0 : n ? P(t, l) : t, s = e.length - 1, r; s >= 0; s--)
    (r = e[s]) && (a = (n ? r(t, l, a) : r(a)) || a);
  return n && a && A(t, l, a), a;
};
const u = "https://github.com/vaadin/copilot/issues/new", T = "?template=feature_request.md&title=%5BFEATURE%5D", F = "A short, concise description of the bug and why you consider it a bug. Any details like exceptions and logs can be helpful as well.", D = "Please provide as many details as possible, this will help us deliver a fix as soon as possible.%0AThank you!%0A%0A%23%23%23 Description of the Bug%0A%0A{description}%0A%0A%23%23%23 Expected Behavior%0A%0AA description of what you would expect to happen. (Sometimes it is clear what the expected outcome is if something does not work, other times, it is not super clear.)%0A%0A%23%23%23 Minimal Reproducible Example%0A%0AWe would appreciate the minimum code with which we can reproduce the issue.%0A%0A%23%23%23 Versions%0A{versionsInfo}";
let i = class extends x {
  constructor() {
    super(), this.description = "", this.items = [
      {
        label: "Report a Bug",
        value: "bug",
        ghTitle: "[BUG]"
      },
      {
        label: "Ask a Question",
        value: "question",
        ghTitle: "[QUESTION]"
      },
      {
        label: "Share an Idea",
        value: "idea",
        ghTitle: "[FEATURE]"
      }
    ];
  }
  render() {
    return d`<style>
        ${$}</style
      >${this.renderContent()}${this.renderFooter()}`;
  }
  firstUpdated() {
    y(this);
  }
  renderContent() {
    return this.message === void 0 ? d`
          <p>
            Your insights are incredibly valuable to us. Whether you’ve encountered a hiccup, have questions, or ideas
            to make our platform better, we're all ears! If you wish, leave your email and we’ll get back to you. You
            can even share your code snippet with us for a clearer picture.
          </p>
          <vaadin-select
            label="What's on your mind?"
            theme="feedback"
            .items="${this.items}"
            .value="${this.items[0].value}"
            @value-changed=${(e) => {
      this.type = e.detail.value;
    }}>
          </vaadin-select>
          <vaadin-text-area
            .value="${this.description}"
            @keydown=${this.keyDown}
            @focus=${() => {
      this.descriptionField.invalid = !1, this.descriptionField.placeholder = "";
    }}
            @value-changed=${(e) => {
      this.description = e.detail.value;
    }}
            label="Tell Us More"
            helper-text="Describe what you're experiencing, wondering about, or envisioning. The more you share, the better we can understand and act on your feedback"></vaadin-text-area>
          <vaadin-text-field
            @keydown=${this.keyDown}
            @value-changed=${(e) => {
      this.email = e.detail.value;
    }}
            id="email"
            label="Your Email (Optional)"
            helper-text="Leave your email if you’d like us to follow up. Totally optional, but we’d love to keep the conversation going."></vaadin-text-field>
        ` : d`<p>${this.message}</p>`;
  }
  renderFooter() {
    return this.message === void 0 ? d`
          <div class="dialog-footer">
            <vaadin-button
              theme="tertiary"
              @click="${() => c.emit("system-info-with-callback", {
      callback: (e) => this.openGithub(e, this),
      notify: !1
    })}">
              <span style="display: flex" slot="prefix">${w.github}</span>
              Create GitHub issue
            </vaadin-button>
            <div style="flex-grow: 1"></div>
            <vaadin-button theme="tertiary" @click="${this.close}">Cancel</vaadin-button>
            <vaadin-button theme="primary" @click="${this.submit}">Submit</vaadin-button>
          </div>
        ` : d` <div class="footer">
          <vaadin-button @click="${this.close}">Close</vaadin-button>
        </div>`;
  }
  close() {
    h.updatePanel("copilot-feedback-panel", {
      floating: !1
    });
  }
  submit() {
    if (f("feedback"), this.description.trim() === "") {
      this.descriptionField.invalid = !0, this.descriptionField.placeholder = "Please tell us more before sending", this.descriptionField.value = "";
      return;
    }
    const e = {
      description: this.description,
      email: this.email,
      type: this.type
    };
    c.emit("system-info-with-callback", {
      callback: (t) => v(`${b}feedback`, { ...e, versions: t }),
      notify: !1
    }), this.parentNode?.style.setProperty("--section-height", "150px"), this.message = "Thank you for sharing feedback.";
  }
  keyDown(e) {
    (e.key === "Backspace" || e.key === "Delete") && e.stopPropagation();
  }
  openGithub(e, t) {
    if (this.type === "idea") {
      window.open(`${u}${T}`);
      return;
    }
    const l = e.replace(/\n/g, "%0A"), n = `${t.items.find((r) => r.value === this.type)?.ghTitle}`, a = t.description !== "" ? t.description : F, s = D.replace("{description}", a).replace("{versionsInfo}", l);
    window.open(`${u}?title=${n}&body=${s}`, "_blank")?.focus();
  }
};
o([
  p()
], i.prototype, "description", 2);
o([
  p()
], i.prototype, "type", 2);
o([
  p()
], i.prototype, "email", 2);
o([
  p()
], i.prototype, "message", 2);
o([
  p()
], i.prototype, "items", 2);
o([
  k("vaadin-text-area")
], i.prototype, "descriptionField", 2);
i = o([
  g("copilot-feedback-panel")
], i);
const E = m({
  header: "Help Us Improve!",
  tag: "copilot-feedback-panel",
  width: 500,
  height: 500,
  floatingPosition: {
    top: 50,
    left: 50
  }
}), _ = {
  init(e) {
    e.addPanel(E);
  }
};
window.Vaadin.copilot.plugins.push(_);
export {
  i as CopilotFeedbackPanel
};
