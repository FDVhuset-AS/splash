var x=Object.defineProperty;var g=(t,e,s)=>e in t?x(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var o=(t,e,s)=>(g(t,typeof e!="symbol"?e+"":e,s),s);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();class S{constructor(){o(this,"_items");this._items=[]}get items(){return this._items}push(e){this.items.push(e)}pop(){return this.items.pop()}peek(){return this.items[this.size()-1]}isEmpty(){return this.size()===0}size(){return this.items.length}clear(){this._items=[]}}function p(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})}class a{constructor(){o(this,"id");o(this,"element");this.element=N(),this.element.id=this.id=p()}getNSContentElement(){return this.getNSElement().firstElementChild}getNSTextElement(){return this.getNSContentElement().firstElementChild}getId(){return this.id}getNSElement(){return this.element}setText(e){return this.getNSTextElement().innerText=e,e.length>0?this.showText():this.hideText(),this}showText(){return v(this.getNSTextElement()),this}hideText(){return E(this.getNSTextElement()),this}remove(){var e;return this.element&&((e=this.element.parentElement)==null||e.removeChild(this.element),delete this.element),this}}o(a,"NSClass","ns"),o(a,"NSHostClass","nsh");function N(){return new DOMParser().parseFromString('<div class=ns><div class=nsc><div class=nst></div><div class=nss><svg viewBox="0 0 50 50"><circle class=path cx=25 cy=25 r=20 fill=none></circle></svg></div></div></div>',"text/html").body.firstChild}function y(t,e){e.children.length>0?e.insertBefore(t,e.children.item(0)):e.append(t)}function h(t,e){t==null||t.classList[e](a.NSHostClass)}function w(t){h(t.getNSElement().parentElement,"remove")}function v(t){t.style.display="flex"}function E(t){t.style.display="none"}function u(t){return t instanceof Element?t:document.querySelector(t||"")}function I(t){var e;return((e=t==null?void 0:t.classList)==null?void 0:e.contains(a.NSClass))??!1}function f(t,e){h(t.parentElement,"remove"),h(e,"add"),y(t,e)}function m(t){const e=t.firstElementChild;if(e!==null&&I(e)){const n=e.id;return l.getInstance().nsStack.items.find(d=>d.getId()===n)??null}return null}const r=class{constructor(){o(this,"nsStack");this.nsStack=new S}findIndex(e){return this.nsStack.items.findIndex(e)}find(e){return this.nsStack.items.find(e)}static getInstance(){return r.instance||(r.instance=new r),r.instance}static assignToWindow(){Object.defineProperty(window,r.WindowAccessorKey,{value:r.getInstance(),writable:!1})}static start(){r.assignToWindow(),window.addEventListener("load",()=>{window[r.WindowAccessorKey]instanceof r||r.assignToWindow()})}createNS(e){const s=new a;return s.setText(e||""),this.nsStack.push(s),s}cleanAndRemove(e){return w(e),e.remove().getId()}stackDelete(e){let s=this.findIndex(c=>c.getId()===e.getId());return s<0?null:(this.nsStack.items.splice(s,1),e.getId())}deleteNS(e){const s=this.find(e);return s?(this.cleanAndRemove(s),this.stackDelete(s)):null}show(e){let s=m(document.body);return s||(s=this.createNS(),f(s.getNSElement(),document.body)),s.setText(e||"").getId()}showInside(e,s){const c=u(e);if(c){let n=m(c);return n||(n=this.createNS()),f(n.getNSElement(),c),n.setText(s||"").getId()}return null}hide(){const e=this.nsStack.pop();return e?this.cleanAndRemove(e):null}hideAll(){this.nsStack.items.forEach(e=>{this.cleanAndRemove(e)}),this.nsStack.clear()}hideId(e){return this.deleteNS(s=>s.getId()===e)}hideInside(e){const s=u(e),c=n=>n.getNSElement().parentElement===s;return s?this.deleteNS(c):null}};let l=r;o(l,"WindowAccessorKey","ns"),o(l,"instance");try{l.start()}catch(t){console.warn(t)}
