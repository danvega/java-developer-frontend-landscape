import { M as t, j as n, b as a } from "./copilot-B_g-uHXF.js";
class i extends t {
  constructor() {
    super(...arguments), this.eventBusRemovers = [], this.messageHandlers = {}, this.handleESC = (e) => {
      n.active && e.key === "Escape" && typeof this.close == "function" && this.close();
    };
  }
  createRenderRoot() {
    return this;
  }
  onEventBus(e, s) {
    this.eventBusRemovers.push(a.on(e, s));
  }
  connectedCallback() {
    super.connectedCallback(), this.addESCListener();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.eventBusRemovers.forEach((e) => e()), this.removeESCListener();
  }
  addESCListener() {
    document.addEventListener("keydown", this.handleESC);
  }
  removeESCListener() {
    document.removeEventListener("keydown", this.handleESC);
  }
  onCommand(e, s) {
    this.messageHandlers[e] = s;
  }
  handleMessage(e) {
    return this.messageHandlers[e.command] ? (this.messageHandlers[e.command].call(this, e), !0) : !1;
  }
}
export {
  i as B
};
