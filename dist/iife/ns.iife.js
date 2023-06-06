var b=Object.defineProperty;var E=(a,i,c)=>i in a?b(a,i,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[i]=c;var o=(a,i,c)=>(E(a,typeof i!="symbol"?i+"":i,c),c);(function(){var a=document.createElement("style");a.textContent=`.ns,.ns-host:before{width:100%;height:100%}.ns,.ns-host:before{top:0;left:0}.ns-content,.ns{display:flex;justify-content:center;align-items:center}.ns-host{--text-color: DarkSlateGray;--font-size: 20px;--proportional-size: calc(var(--font-size) * .9);--font-family: "Helvetica", "Arial", sans-serif;--font-weight: 400;--background: rgba(255, 255, 255, .8);--z-index: 999999999;--blur-filter: blur(10px)}.ns-host{position:relative;z-index:var(--z-index)}.ns-host:before{position:absolute;background-color:var(--background);content:"";backdrop-filter:var(--blur-filter);-webkit-backdrop-filter:var(--blur-filter);z-index:calc(var(--z-index) + 1)}body.ns-host{height:100vh}.ns{position:absolute;z-index:calc(var(--z-index) + 2)}.ns-text{color:var(--text-color);font-size:var(--font-size);font-family:var(--font-family);font-weight:var(--font-weight);margin-right:var(--proportional-size)}.ns-spinner{display:block;width:var(--proportional-size);height:var(--proportional-size)}.ns-spinner>svg{animation:Rotate 2s linear infinite;position:relative;width:inherit;height:inherit;stroke-width:8}.ns-spinner .path{stroke:var(--text-color);stroke-linecap:round;animation:Dash 1.5s ease-in-out infinite}@keyframes Rotate{to{transform:rotate(360deg)}}@keyframes Dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}to{stroke-dasharray:90,150;stroke-dashoffset:-124}}
`,document.head.appendChild(a);class i{constructor(){o(this,"_items");this._items=[]}get items(){return this._items}push(t){this.items.push(t)}pop(){return this.items.pop()}peek(){return this.items[this.size()-1]}isEmpty(){return this.size()===0}size(){return this.items.length}clear(){this._items=[]}}const c="";function g(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const t=Math.random()*16|0;return(e==="x"?t:t&3|8).toString(16)})}class h{constructor(){o(this,"id");o(this,"element");this.element=p(),this.element.id=this.id=g()}getNSContentElement(){return this.getNSElement().firstElementChild}getNSTextElement(){return this.getNSContentElement().firstElementChild}getId(){return this.id}getNSElement(){return this.element}setText(t){return this.getNSTextElement().innerText=t,t.length>0?this.showText():this.hideText(),this}showText(){return y(this.getNSTextElement()),this}hideText(){return k(this.getNSTextElement()),this}remove(){var t;this.element&&((t=this.element.parentElement)==null||t.removeChild(this.element),delete this.element)}}o(h,"CSSClassName","ns"),o(h,"HostCSSClassName","ns-host");function p(){return new DOMParser().parseFromString('<div class=ns><div class=ns-content><div class=ns-text></div><div class=ns-spinner><svg viewBox="0 0 50 50"><circle class=path cx=25 cy=25 r=20 fill=none></circle></svg></div></div></div>',"text/html").body.firstChild}function v(e,t){t.children.length>0?t.insertBefore(e,t.children.item(0)):t.append(e)}function u(e,t){e==null||e.classList[t](h.HostCSSClassName)}function S(e){u(e.getNSElement().parentElement,"remove")}function y(e){e.style.display="flex"}function k(e){e.style.display="none"}function f(e){let t;if(typeof e=="string")t=document.querySelector(e);else{if(e instanceof Element)return e;if(typeof e=="function"){if(t=e(),!(t instanceof Node))return null}else t=null}return t}function w(e){var t;return(t=e==null?void 0:e.classList)==null?void 0:t.contains("ns")}function m(e,t){u(e.parentElement,"remove"),u(t,"add"),v(e,t)}function x(e){const t=e.firstElementChild;if(t!==null&&w(t)){const r=t.id;return d.getInstance().nsStack.items.find(N=>N.getId()===r)??null}return null}const s=class{constructor(){o(this,"nsStack");this.nsStack=new i}findIndex(t){return this.nsStack.items.findIndex(t)}find(t){return this.nsStack.items.find(t)}static getInstance(){return s.instance||(s.instance=new s),s.instance}static assignToWindow(){Object.defineProperty(window,s.WindowAccessorKey,{value:s.getInstance(),writable:!1})}static start(){s.assignToWindow(),window.addEventListener("load",()=>{window[s.WindowAccessorKey]instanceof s||s.assignToWindow()})}createNS(t){const n=new h;return n.setText(t||""),this.nsStack.push(n),n}cleanAndRemove(t){return S(t),t.remove(),t.getId()}stackDelete(t){let n=this.findIndex(l=>l.getId()===t.getId());return n<0?null:(this.nsStack.items.splice(n,1),t.getId())}deleteNS(t){const n=this.find(t);return n?(this.cleanAndRemove(n),this.stackDelete(n)):null}show(t){let n=x(document.body);return n||(n=this.createNS(),m(n.getNSElement(),document.body)),n.setText(t||""),n.getId()}showInside(t,n){const l=f(t);if(l){let r=x(l);return r||(r=this.createNS()),r.setText(n||""),m(r.getNSElement(),l),r.getId()}return null}hide(){const t=this.nsStack.pop();return t?this.cleanAndRemove(t):null}hideAll(){this.nsStack.items.forEach(t=>{this.cleanAndRemove(t)}),this.nsStack.clear()}hideId(t){return this.deleteNS(n=>n.getId()===t)}hideInside(t){const n=f(t),l=r=>r.getNSElement().parentElement===n;return n?this.deleteNS(l):null}};let d=s;o(d,"WindowAccessorKey","ns"),o(d,"instance");try{d.start()}catch(e){console.warn(e)}})();
