import{LitElement as C,css as O,html as N}from"lit";import{property as A,query as L,state as V,customElement as G}from"lit/decorators.js";function u(t,e,o,s){var n=arguments.length,r=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,o):s,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,o,s);else for(var i=t.length-1;i>=0;i--)(c=t[i])&&(r=(n<3?c(r):n>3?c(e,o,r):c(e,o))||r);return n>3&&r&&Object.defineProperty(e,o,r),r}const b=1e3,w=(t,e)=>{const o=Array.from(t.querySelectorAll(e.join(", "))),s=Array.from(t.querySelectorAll("*")).filter(n=>n.shadowRoot).flatMap(n=>w(n.shadowRoot,e));return[...o,...s]};let E=!1;const g=(t,e)=>{E||(window.addEventListener("message",n=>{n.data==="validate-license"&&window.location.reload()},!1),E=!0);const o=t._overlayElement;if(o){if(o.shadowRoot){const n=o.shadowRoot.querySelector("slot:not([name])");if(n&&n.assignedElements().length>0){g(n.assignedElements()[0],e);return}}g(o,e);return}const s=e.messageHtml?e.messageHtml:`${e.message} <p>Component: ${e.product.name} ${e.product.version}</p>`.replace(/https:([^ ]*)/g,"<a href='https:$1'>https:$1</a>");t.isConnected&&(t.outerHTML=`<no-license style="display:flex;align-items:center;text-align:center;justify-content:center;"><div>${s}</div></no-license>`)},v={},y={},m={},I={},h=t=>`${t.name}_${t.version}`,k=t=>{const{cvdlName:e,version:o}=t.constructor,s={name:e,version:o},n=t.tagName.toLowerCase();v[e]=v[e]??[],v[e].push(n);const r=m[h(s)];r&&setTimeout(()=>g(t,r),b),m[h(s)]||I[h(s)]||y[h(s)]||(y[h(s)]=!0,window.Vaadin.devTools.checkLicense(s))},D=t=>{I[h(t)]=!0,console.debug("License check ok for",t)},R=t=>{const e=t.product.name;m[h(t.product)]=t,console.error("License check failed for",e);const o=v[e];(o==null?void 0:o.length)>0&&w(document,o).forEach(s=>{setTimeout(()=>g(s,m[h(t.product)]),b)})},$=t=>{const e=t.message,o=t.product.name;t.messageHtml=`No license found. <a target=_blank onclick="javascript:window.open(this.href);return false;" href="${e}">Go here to start a trial or retrieve your license.</a>`,m[h(t.product)]=t,console.error("No license found when checking",o);const s=v[o];(s==null?void 0:s.length)>0&&w(document,s).forEach(n=>{setTimeout(()=>g(n,m[h(t.product)]),b)})},M=t=>t.command==="license-check-ok"?(D(t.data),!0):t.command==="license-check-failed"?(R(t.data),!0):t.command==="license-check-nokey"?($(t.data),!0):!1,P=()=>{window.Vaadin.devTools.createdCvdlElements.forEach(t=>{k(t)}),window.Vaadin.devTools.createdCvdlElements={push:t=>{k(t)}}};var a;(function(t){t.ACTIVE="active",t.INACTIVE="inactive",t.UNAVAILABLE="unavailable",t.ERROR="error"})(a||(a={}));class f{constructor(){this.status=a.UNAVAILABLE}onHandshake(){}onConnectionError(e){}onStatusChange(e){}setActive(e){!e&&this.status===a.ACTIVE?this.setStatus(a.INACTIVE):e&&this.status===a.INACTIVE&&this.setStatus(a.ACTIVE)}setStatus(e){this.status!==e&&(this.status=e,this.onStatusChange(e))}}f.HEARTBEAT_INTERVAL=18e4;class B extends f{constructor(e){super(),this.webSocket=new WebSocket(e),this.webSocket.onmessage=o=>this.handleMessage(o),this.webSocket.onerror=o=>this.handleError(o),this.webSocket.onclose=o=>{this.status!==a.ERROR&&this.setStatus(a.UNAVAILABLE),this.webSocket=void 0},setInterval(()=>{this.webSocket&&self.status!==a.ERROR&&this.status!==a.UNAVAILABLE&&this.webSocket.send("")},f.HEARTBEAT_INTERVAL)}onReload(e){}handleMessage(e){let o;try{o=JSON.parse(e.data)}catch(s){this.handleError(`[${s.name}: ${s.message}`);return}if(o.command==="hello")this.setStatus(a.ACTIVE),this.onHandshake();else if(o.command==="reload"){if(this.status===a.ACTIVE){const s=o.strategy||"reload";this.onReload(s)}}else this.handleError(`Unknown message from the livereload server: ${e}`)}handleError(e){console.error(e),this.setStatus(a.ERROR),e instanceof Event&&this.webSocket?this.onConnectionError(`Error in WebSocket connection to ${this.webSocket.url}`):this.onConnectionError(e)}}const x=16384;class _ extends f{constructor(e){if(super(),this.canSend=!1,!e)return;const o={transport:"websocket",fallbackTransport:"websocket",url:e,contentType:"application/json; charset=UTF-8",reconnectInterval:5e3,timeout:-1,maxReconnectOnClose:1e7,trackMessageLength:!0,enableProtocol:!0,handleOnlineOffline:!1,executeCallbackBeforeReconnect:!0,messageDelimiter:"|",onMessage:s=>{const n={data:s.responseBody};this.handleMessage(n)},onError:s=>{this.canSend=!1,this.handleError(s)},onOpen:()=>{this.canSend=!0},onClose:()=>{this.canSend=!1},onClientTimeout:()=>{this.canSend=!1},onReconnect:()=>{this.canSend=!1},onReopen:()=>{this.canSend=!0}};U().then(s=>{this.socket=s.subscribe(o)})}onReload(e){}onUpdate(e,o){}onMessage(e){}handleMessage(e){let o;try{o=JSON.parse(e.data)}catch(s){this.handleError(`[${s.name}: ${s.message}`);return}if(o.command==="hello")this.setStatus(a.ACTIVE),this.onHandshake();else if(o.command==="reload"){if(this.status===a.ACTIVE){const s=o.strategy||"reload";this.onReload(s)}}else o.command==="update"?this.status===a.ACTIVE&&this.onUpdate(o.path,o.content):this.onMessage(o)}handleError(e){console.error(e),this.setStatus(a.ERROR),this.onConnectionError(e)}send(e,o){if(!this.socket||!this.canSend){S(()=>this.socket&&this.canSend,c=>this.send(e,o));return}const s=JSON.stringify({command:e,data:o});let r=s.length+"|"+s;for(;r.length;)this.socket.push(r.substring(0,x)),r=r.substring(x)}}_.HEARTBEAT_INTERVAL=18e4;function S(t,e){const o=t();o?e(o):setTimeout(()=>S(t,e),50)}function U(){return new Promise((t,e)=>{S(()=>{var o;return(o=window==null?void 0:window.vaadinPush)==null?void 0:o.atmosphere},t)})}var d,p;(function(t){t.LOG="log",t.INFORMATION="information",t.WARNING="warning",t.ERROR="error"})(p||(p={}));const T=import.meta.hot?import.meta.hot.hmrClient:void 0;let l=d=class extends C{constructor(){super(...arguments),this.unhandledMessages=[],this.conf={enable:!1,url:"",liveReloadPort:-1},this.frontendStatus=a.UNAVAILABLE,this.javaStatus=a.UNAVAILABLE,this.componentPickActive=!1,this.nextMessageId=1,this.transitionDuration=0}static get styles(){return[O`
        :host {
          --dev-tools-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell,
            'Helvetica Neue', sans-serif;
          --dev-tools-font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
            monospace;

          --dev-tools-font-size: 0.8125rem;
          --dev-tools-font-size-small: 0.75rem;

          --dev-tools-text-color: rgba(255, 255, 255, 0.8);
          --dev-tools-text-color-secondary: rgba(255, 255, 255, 0.65);
          --dev-tools-text-color-emphasis: rgba(255, 255, 255, 0.95);
          --dev-tools-text-color-active: rgba(255, 255, 255, 1);

          --dev-tools-background-color-inactive: rgba(45, 45, 45, 0.25);
          --dev-tools-background-color-active: rgba(45, 45, 45, 0.98);
          --dev-tools-background-color-active-blurred: rgba(45, 45, 45, 0.85);

          --dev-tools-border-radius: 0.5rem;
          --dev-tools-box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05), 0 4px 12px -2px rgba(0, 0, 0, 0.4);

          --dev-tools-blue-hsl: 206, 100%, 70%;
          --dev-tools-blue-color: hsl(var(--dev-tools-blue-hsl));
          --dev-tools-green-hsl: 145, 80%, 42%;
          --dev-tools-green-color: hsl(var(--dev-tools-green-hsl));
          --dev-tools-grey-hsl: 0, 0%, 50%;
          --dev-tools-grey-color: hsl(var(--dev-tools-grey-hsl));
          --dev-tools-yellow-hsl: 38, 98%, 64%;
          --dev-tools-yellow-color: hsl(var(--dev-tools-yellow-hsl));
          --dev-tools-red-hsl: 355, 100%, 68%;
          --dev-tools-red-color: hsl(var(--dev-tools-red-hsl));

          /* Needs to be in ms, used in JavaScript as well */
          --dev-tools-transition-duration: 180ms;

          all: initial;

          direction: ltr;
          cursor: default;
          font: normal 400 var(--dev-tools-font-size) / 1.125rem var(--dev-tools-font-family);
          color: var(--dev-tools-text-color);
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
          color-scheme: dark;

          position: fixed;
          z-index: 20000;
          pointer-events: none;
          bottom: 0;
          right: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column-reverse;
          align-items: flex-end;
        }

        .dev-tools {
          pointer-events: auto;
          display: flex;
          align-items: center;
          position: fixed;
          z-index: inherit;
          right: 0.5rem;
          bottom: 0.5rem;
          min-width: 1.75rem;
          height: 1.75rem;
          max-width: 1.75rem;
          border-radius: 0.5rem;
          padding: 0.375rem;
          box-sizing: border-box;
          background-color: var(--dev-tools-background-color-inactive);
          box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
          color: var(--dev-tools-text-color);
          transition: var(--dev-tools-transition-duration);
          white-space: nowrap;
          line-height: 1rem;
        }

        .dev-tools:hover,
        .dev-tools.active {
          background-color: var(--dev-tools-background-color-active);
          box-shadow: var(--dev-tools-box-shadow);
        }

        .dev-tools.active {
          max-width: calc(100% - 1rem);
        }

        .dev-tools .status-description {
          overflow: hidden;
          text-overflow: ellipsis;
          padding: 0 0.25rem;
        }

        .dev-tools.error {
          background-color: hsla(var(--dev-tools-red-hsl), 0.15);
          animation: bounce 0.5s;
          animation-iteration-count: 2;
        }

        .window.hidden {
          opacity: 0;
          transform: scale(0);
          position: absolute;
        }

        .window.visible {
          transform: none;
          opacity: 1;
          pointer-events: auto;
        }

        .window.visible ~ .dev-tools {
          opacity: 0;
          pointer-events: none;
        }

        .window.visible ~ .dev-tools .dev-tools-icon,
        .window.visible ~ .dev-tools .status-blip {
          transition: none;
          opacity: 0;
        }

        .window {
          border-radius: var(--dev-tools-border-radius);
          overflow: auto;
          margin: 0.5rem;
          min-width: 30rem;
          max-width: calc(100% - 1rem);
          max-height: calc(100vh - 1rem);
          flex-shrink: 1;
          background-color: var(--dev-tools-background-color-active);
          color: var(--dev-tools-text-color);
          transition: var(--dev-tools-transition-duration);
          transform-origin: bottom right;
          display: flex;
          flex-direction: column;
          box-shadow: var(--dev-tools-box-shadow);
          outline: none;
        }

        .window-toolbar {
          display: flex;
          flex: none;
          align-items: center;
          padding: 0.375rem;
          white-space: nowrap;
          order: 1;
          background-color: rgba(0, 0, 0, 0.2);
          gap: 0.5rem;
        }

        .ahreflike {
          font-weight: 500;
          color: var(--dev-tools-text-color-secondary);
          text-decoration: underline;
          cursor: pointer;
        }

        .ahreflike:hover {
          color: var(--dev-tools-text-color-emphasis);
        }

        .button {
          all: initial;
          font-family: inherit;
          font-size: var(--dev-tools-font-size-small);
          line-height: 1;
          white-space: nowrap;
          background-color: rgba(0, 0, 0, 0.2);
          color: inherit;
          font-weight: 600;
          padding: 0.25rem 0.375rem;
          border-radius: 0.25rem;
        }

        .button:focus,
        .button:hover {
          color: var(--dev-tools-text-color-emphasis);
        }

        .message.information {
          --dev-tools-notification-color: var(--dev-tools-blue-color);
        }

        .message.warning {
          --dev-tools-notification-color: var(--dev-tools-yellow-color);
        }

        .message.error {
          --dev-tools-notification-color: var(--dev-tools-red-color);
        }

        .message {
          display: flex;
          padding: 0.1875rem 0.75rem 0.1875rem 2rem;
          background-clip: padding-box;
        }

        .message.log {
          padding-left: 0.75rem;
        }

        .message-content {
          margin-right: 0.5rem;
          -webkit-user-select: text;
          -moz-user-select: text;
          user-select: text;
        }

        .message-heading {
          position: relative;
          display: flex;
          align-items: center;
          margin: 0.125rem 0;
        }

        .message.log {
          color: var(--dev-tools-text-color-secondary);
        }

        .message:not(.log) .message-heading {
          font-weight: 500;
        }

        .message.has-details .message-heading {
          color: var(--dev-tools-text-color-emphasis);
          font-weight: 600;
        }

        .message-heading::before {
          position: absolute;
          margin-left: -1.5rem;
          display: inline-block;
          text-align: center;
          font-size: 0.875em;
          font-weight: 600;
          line-height: calc(1.25em - 2px);
          width: 14px;
          height: 14px;
          box-sizing: border-box;
          border: 1px solid transparent;
          border-radius: 50%;
        }

        .message.information .message-heading::before {
          content: 'i';
          border-color: currentColor;
          color: var(--dev-tools-notification-color);
        }

        .message.warning .message-heading::before,
        .message.error .message-heading::before {
          content: '!';
          color: var(--dev-tools-background-color-active);
          background-color: var(--dev-tools-notification-color);
        }

        .features-tray {
          padding: 0.75rem;
          flex: auto;
          overflow: auto;
          animation: fade-in var(--dev-tools-transition-duration) ease-in;
          user-select: text;
        }

        .features-tray p {
          margin-top: 0;
          color: var(--dev-tools-text-color-secondary);
        }

        .features-tray .feature {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding-bottom: 0.5em;
        }

        .message .message-details {
          font-weight: 400;
          color: var(--dev-tools-text-color-secondary);
          margin: 0.25rem 0;
        }

        .message .message-details[hidden] {
          display: none;
        }

        .message .message-details p {
          display: inline;
          margin: 0;
          margin-right: 0.375em;
          word-break: break-word;
        }

        .message .persist {
          color: var(--dev-tools-text-color-secondary);
          white-space: nowrap;
          margin: 0.375rem 0;
          display: flex;
          align-items: center;
          position: relative;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }

        .message .persist::before {
          content: '';
          width: 1em;
          height: 1em;
          border-radius: 0.2em;
          margin-right: 0.375em;
          background-color: rgba(255, 255, 255, 0.3);
        }

        .message .persist:hover::before {
          background-color: rgba(255, 255, 255, 0.4);
        }

        .message .persist.on::before {
          background-color: rgba(255, 255, 255, 0.9);
        }

        .message .persist.on::after {
          content: '';
          order: -1;
          position: absolute;
          width: 0.75em;
          height: 0.25em;
          border: 2px solid var(--dev-tools-background-color-active);
          border-width: 0 0 2px 2px;
          transform: translate(0.05em, -0.05em) rotate(-45deg) scale(0.8, 0.9);
        }

        .message .dismiss-message {
          font-weight: 600;
          align-self: stretch;
          display: flex;
          align-items: center;
          padding: 0 0.25rem;
          margin-left: 0.5rem;
          color: var(--dev-tools-text-color-secondary);
        }

        .message .dismiss-message:hover {
          color: var(--dev-tools-text-color);
        }

        .notification-tray {
          display: flex;
          flex-direction: column-reverse;
          align-items: flex-end;
          margin: 0.5rem;
          flex: none;
        }

        .window.hidden + .notification-tray {
          margin-bottom: 3rem;
        }

        .notification-tray .message {
          pointer-events: auto;
          background-color: var(--dev-tools-background-color-active);
          color: var(--dev-tools-text-color);
          max-width: 30rem;
          box-sizing: border-box;
          border-radius: var(--dev-tools-border-radius);
          margin-top: 0.5rem;
          transition: var(--dev-tools-transition-duration);
          transform-origin: bottom right;
          animation: slideIn var(--dev-tools-transition-duration);
          box-shadow: var(--dev-tools-box-shadow);
          padding-top: 0.25rem;
          padding-bottom: 0.25rem;
        }

        .notification-tray .message.animate-out {
          animation: slideOut forwards var(--dev-tools-transition-duration);
        }

        .notification-tray .message .message-details {
          max-height: 10em;
          overflow: hidden;
        }

        .message-tray {
          flex: auto;
          overflow: auto;
          max-height: 20rem;
          user-select: text;
        }

        .message-tray .message {
          animation: fade-in var(--dev-tools-transition-duration) ease-in;
          padding-left: 2.25rem;
        }

        .message-tray .message.warning {
          background-color: hsla(var(--dev-tools-yellow-hsl), 0.09);
        }

        .message-tray .message.error {
          background-color: hsla(var(--dev-tools-red-hsl), 0.09);
        }

        .message-tray .message.error .message-heading {
          color: hsl(var(--dev-tools-red-hsl));
        }

        .message-tray .message.warning .message-heading {
          color: hsl(var(--dev-tools-yellow-hsl));
        }

        .message-tray .message + .message {
          border-top: 1px solid rgba(255, 255, 255, 0.07);
        }

        .message-tray .dismiss-message,
        .message-tray .persist {
          display: none;
        }

        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0%);
            opacity: 1;
          }
        }

        @keyframes slideOut {
          from {
            transform: translateX(0%);
            opacity: 1;
          }
          to {
            transform: translateX(100%);
            opacity: 0;
          }
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
          }
        }

        @keyframes bounce {
          0% {
            transform: scale(0.8);
          }
          50% {
            transform: scale(1.5);
            background-color: hsla(var(--dev-tools-red-hsl), 1);
          }
          100% {
            transform: scale(1);
          }
        }

        @supports (backdrop-filter: blur(1px)) {
          .dev-tools,
          .window,
          .notification-tray .message {
            backdrop-filter: blur(8px);
          }
          .dev-tools:hover,
          .dev-tools.active,
          .window,
          .notification-tray .message {
            background-color: var(--dev-tools-background-color-active-blurred);
          }
        }
      `]}static get isActive(){const e=window.sessionStorage.getItem(d.ACTIVE_KEY_IN_SESSION_STORAGE);return e===null||e!=="false"}elementTelemetry(){let e={};try{const o=localStorage.getItem("vaadin.statistics.basket");if(!o)return;e=JSON.parse(o)}catch{return}this.frontendConnection&&this.frontendConnection.send("reportTelemetry",{browserData:e})}openWebSocketConnection(){if(this.frontendStatus=a.UNAVAILABLE,this.javaStatus=a.UNAVAILABLE,!this.conf.token){console.error("Dev tools functionality denied for this host."),this.log(p.LOG,"See Vaadin documentation on how to configure devmode.hostsAllowed property.",void 0,"https://vaadin.com/docs/latest/configuration/properties#properties",void 0);return}const e=r=>console.error(r),o=(r="reload")=>{if(r==="refresh"||r==="full-refresh"){const c=window.Vaadin;Object.keys(c.Flow.clients).filter(i=>i!=="TypeScript").map(i=>c.Flow.clients[i]).forEach(i=>{i.sendEventMessage?i.sendEventMessage(1,"ui-refresh",{fullRefresh:r==="full-refresh"}):console.warn("Ignoring ui-refresh event for application ",id)})}else{const c=window.sessionStorage.getItem(d.TRIGGERED_COUNT_KEY_IN_SESSION_STORAGE),i=c?parseInt(c,10)+1:1;window.sessionStorage.setItem(d.TRIGGERED_COUNT_KEY_IN_SESSION_STORAGE,i.toString()),window.sessionStorage.setItem(d.TRIGGERED_KEY_IN_SESSION_STORAGE,"true"),window.location.reload()}},s=(r,c)=>{let i=document.head.querySelector(`style[data-file-path='${r}']`);i?(i.textContent=c,document.dispatchEvent(new CustomEvent("vaadin-theme-updated"))):o()},n=new _(this.getDedicatedWebSocketUrl());n.onHandshake=()=>{d.isActive||n.setActive(!1),this.elementTelemetry()},n.onConnectionError=e,n.onReload=o,n.onUpdate=s,n.onStatusChange=r=>{this.frontendStatus=r},n.onMessage=r=>this.handleFrontendMessage(r),this.frontendConnection=n,this.conf.backend===d.SPRING_BOOT_DEVTOOLS&&(this.javaConnection=new B(this.getSpringBootWebSocketUrl(window.location)),this.javaConnection.onHandshake=()=>{d.isActive||this.javaConnection.setActive(!1)},this.javaConnection.onReload=o,this.javaConnection.onConnectionError=e,this.javaConnection.onStatusChange=r=>{this.javaStatus=r})}tabHandleMessage(e,o){const s=e;return s.handleMessage&&s.handleMessage.call(e,o)}handleFrontendMessage(e){e.command==="featureFlags"||M(e)||this.handleHmrMessage(e)||this.unhandledMessages.push(e)}handleHmrMessage(e){return e.command!=="hmr"?!1:(T&&T.notifyListeners(e.data.event,e.data.eventData),!0)}getDedicatedWebSocketUrl(){function e(s){const n=document.createElement("div");return n.innerHTML=`<a href="${s}"/>`,n.firstChild.href}if(this.conf.url===void 0)return;const o=e(this.conf.url);if(!o.startsWith("http://")&&!o.startsWith("https://")){console.error("The protocol of the url should be http or https for live reload to work.");return}return`${o}?v-r=push&debug_window&token=${this.conf.token}`}getSpringBootWebSocketUrl(e){const{hostname:o}=e,s=e.protocol==="https:"?"wss":"ws";if(o.endsWith("gitpod.io")){const n=o.replace(/.*?-/,"");return`${s}://${this.conf.liveReloadPort}-${n}`}else return`${s}://${o}:${this.conf.liveReloadPort}`}connectedCallback(){if(super.connectedCallback(),this.conf=window.Vaadin.devToolsConf||this.conf,window.sessionStorage.getItem(d.TRIGGERED_KEY_IN_SESSION_STORAGE)){const n=new Date;`${`0${n.getHours()}`.slice(-2)}${`0${n.getMinutes()}`.slice(-2)}${`0${n.getSeconds()}`.slice(-2)}`,window.sessionStorage.removeItem(d.TRIGGERED_KEY_IN_SESSION_STORAGE)}this.transitionDuration=parseInt(window.getComputedStyle(this).getPropertyValue("--dev-tools-transition-duration"),10);const o=window;o.Vaadin=o.Vaadin||{},o.Vaadin.devTools=Object.assign(this,o.Vaadin.devTools);const s=window.Vaadin;s.devToolsPlugins&&(Array.from(s.devToolsPlugins).forEach(n=>this.initPlugin(n)),s.devToolsPlugins={push:n=>this.initPlugin(n)}),this.openWebSocketConnection(),P()}async initPlugin(e){const o=this;e.init({send:function(s,n){o.frontendConnection.send(s,n)}})}format(e){return e.toString()}checkLicense(e){this.frontendConnection?this.frontendConnection.send("checkLicense",e):R({message:"Internal error: no connection",product:e})}setActive(e){var o,s;(o=this.frontendConnection)==null||o.setActive(e),(s=this.javaConnection)==null||s.setActive(e),window.sessionStorage.setItem(d.ACTIVE_KEY_IN_SESSION_STORAGE,e?"true":"false")}render(){return N` 
      <div
        style="display: none"
        class="dev-tools"
      >
      </div>`}setJavaLiveReloadActive(e){var o;this.javaConnection?this.javaConnection.setActive(e):(o=this.frontendConnection)==null||o.setActive(e)}};l.DISMISSED_NOTIFICATIONS_IN_LOCAL_STORAGE="vaadin.live-reload.dismissedNotifications";l.ACTIVE_KEY_IN_SESSION_STORAGE="vaadin.live-reload.active";l.TRIGGERED_KEY_IN_SESSION_STORAGE="vaadin.live-reload.triggered";l.TRIGGERED_COUNT_KEY_IN_SESSION_STORAGE="vaadin.live-reload.triggeredCount";l.AUTO_DEMOTE_NOTIFICATION_DELAY=5e3;l.HOTSWAP_AGENT="HOTSWAP_AGENT";l.JREBEL="JREBEL";l.SPRING_BOOT_DEVTOOLS="SPRING_BOOT_DEVTOOLS";l.BACKEND_DISPLAY_NAME={HOTSWAP_AGENT:"HotswapAgent",JREBEL:"JRebel",SPRING_BOOT_DEVTOOLS:"Spring Boot Devtools"};u([A({type:String,attribute:!1})],l.prototype,"frontendStatus",void 0);u([A({type:String,attribute:!1})],l.prototype,"javaStatus",void 0);u([L(".window")],l.prototype,"root",void 0);u([V()],l.prototype,"componentPickActive",void 0);l=d=u([G("vaadin-dev-tools")],l);
