"use strict";var m=Object.defineProperty;var v=(t,e,s)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var r=(t,e,s)=>(v(t,typeof e!="symbol"?e+"":e,s),s);Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const S="3.0.1";var a=(t=>(t.Add="add",t.Remove="remove",t))(a||{});const c=class c{constructor(){r(this,"id");r(this,"element");this.element=p(),this.element.id=this.id=c.generateGUID()}static generateGUID(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const s=Math.random()*16|0;return(e==="x"?s:s&3|8).toString(16)})}getNSContentElement(){return this.getNSElement().firstElementChild}getNSTextElement(){return this.getNSContentElement().firstElementChild}getId(){return this.id}getNSElement(){return this.element}setText(e){return this.getNSTextElement().innerText=e,e.length>0?this.showText():this.hideText(),this}showText(){return I(this.getNSTextElement()),this}hideText(){return N(this.getNSTextElement()),this}remove(){var e;return this.element&&((e=this.element.parentElement)==null||e.removeChild(this.element),delete this.element),this}};r(c,"SplashClass","s"),r(c,"SplashHostClass","sh");let d=c;function p(){return new DOMParser().parseFromString('<div class=s><div class=sc><div class=st></div><div class=ss><svg viewBox="0 0 50 50"><circle class=path cx=25 cy=25 r=20 fill=none></circle></svg></div></div></div>',"text/html").body.firstChild}function w(t,e){e.children.length>0?e.insertBefore(t,e.children.item(0)):e.append(t)}function h(t,e){t==null||t.classList[e](d.SplashHostClass)}function E(t){h(t.getNSElement().parentElement,a.Remove)}function I(t){t.style.display="flex"}function N(t){t.style.display="none"}function u(t){return t instanceof Element?t:document.querySelector(t||"")}function y(t){var e;return((e=t==null?void 0:t.classList)==null?void 0:e.contains(d.SplashClass))??!1}function x(t,e){h(t.parentElement,a.Remove),h(e,a.Add),w(t,e)}function f(t){const e=t.firstElementChild;if(e!==null&&y(e)){const l=e.id;return o.getInstance().stack.find(g=>g.getId()===l)??null}return null}const n=class n{constructor(){r(this,"version");r(this,"stack");this.version=S,this.stack=[]}findIndex(e){return this.stack.findIndex(e)}find(e){return this.stack.find(e)}static getInstance(){return n.instance||(n.instance=new n),n.instance}static assignToWindow(){Object.defineProperty(window,n.WindowAccessorKey,{value:n.getInstance(),writable:!1})}static start(){n.assignToWindow(),window.addEventListener("load",()=>{window[n.WindowAccessorKey]instanceof n||n.assignToWindow()})}createNS(e){const s=new d;return s.setText(e||""),this.stack.push(s),s}cleanAndRemove(e){return E(e),e.remove().getId()}stackDelete(e){let s=this.findIndex(i=>i.getId()===e.getId());return s<0?null:(this.stack.splice(s,1),e.getId())}deleteNS(e){const s=this.find(e);return s?(this.cleanAndRemove(s),this.stackDelete(s)):null}show(e){let s=f(document.body);return s||(s=this.createNS(),x(s.getNSElement(),document.body)),s.setText(e||"").getId()}showInside(e,s){const i=u(e);if(i){let l=f(i);return l||(l=this.createNS()),x(l.getNSElement(),i),l.setText(s||"").getId()}return null}hide(){const e=this.stack.pop();return e?this.cleanAndRemove(e):null}hideAll(){this.stack.forEach(this.cleanAndRemove),this.stack.splice(0,this.stack.length)}hideId(e){return this.deleteNS(s=>s.getId()===e)}hideInside(e){const s=u(e),i=l=>l.getNSElement().parentElement===s;return s?this.deleteNS(i):null}};r(n,"WindowAccessorKey","splash"),r(n,"instance");let o=n;const C={Service:o};exports.Service=o;exports.default=C;
