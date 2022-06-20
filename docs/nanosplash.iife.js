var N=Object.defineProperty,C=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var y=(c,o,a)=>o in c?N(c,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):c[o]=a,x=(c,o)=>{for(var a in o||(o={}))k.call(o,a)&&y(c,a,o[a]);if(I)for(var a of I(o))R.call(o,a)&&y(c,a,o[a]);return c},w=(c,o)=>C(c,D(o));(function(){"use strict";const c=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const f of r.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}};var o=(()=>`.ns-blur,body .ns-fs~*{filter:blur(5px);overflow:hidden}.ns-wrapper{position:relative}.ns-fs{left:0;min-height:100vh;min-width:100%;position:fixed;top:0;z-index:2}.ns-window{align-items:center;background-color:#fffc;display:flex;height:100%;justify-content:center;left:0;position:absolute;top:0;width:100%;z-index:1}.ns-img{margin-bottom:2em;max-height:9rem;width:9rem}.ns-text-container{align-items:center}.ns-text,.ns-text-container{display:flex;justify-content:center}.ns-text{color:#5a6685}.ns-spinner{display:flex;height:1em;margin-left:1em;width:1em}.ns-spinner>svg{stroke-width:8;-webkit-animation:Rotate 2s linear infinite;animation:Rotate 2s linear infinite;height:inherit;position:relative;width:inherit}.ns-spinner .path{stroke:#5a6685;stroke-linecap:round;-webkit-animation:Dash 1.5s ease-in-out infinite;animation:Dash 1.5s ease-in-out infinite}@-webkit-keyframes Rotate{to{transform:rotate(1turn)}}@keyframes Rotate{to{transform:rotate(1turn)}}@-webkit-keyframes Dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}to{stroke-dasharray:90,150;stroke-dashoffset:-124}}@keyframes Dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}to{stroke-dasharray:90,150;stroke-dashoffset:-124}}
`)();function a(n){return document.querySelector(n)}function v(n,e,t=!1){n&&e&&(e.hasChildNodes()&&t?e.insertBefore(n,e.firstChild):e.appendChild(n))}const h=n=>document.createElement(n);function l(n,...e){n.classList.add(...e)}function p(n,e,t){n.setAttribute(e,t)}class E extends Error{constructor(e,t){super(e),this.name=this.constructor.name,this.cause=t}}class b extends E{constructor(e,t,i){super(e),this.destination=t,this.cause=i}}class T extends E{constructor(e,t){super(e),this.argument=t}}class u{static destinationToNode(e){if(typeof e=="string")try{const t=a(e);if(!t)throw new E(`No DOM match with ${e}`);return t}catch(t){throw new b(`Destination (${e}) is either invalid or non-existing in DOM`,e,t)}else if(e instanceof Node)return e;throw new T(`Destination (${e}) must be either a Node or a CSS selector`,e)}static createContextualApiObject(e){const t={getId:()=>e.getId(),remove:()=>e.delete(),moveTo:i=>e.moveTo(i),getText:()=>e.getText(),setText:i=>e.setText(i),getImgSrc:()=>e.getImgSrc(),setImgSrc:i=>e.setImgSrc(i)};return w(x({},t),{inside:i=>(e.moveTo(i),t)})}static createNanosplashSpinnerElement(){const e=h("div");return l(e,"ns-spinner"),e.innerHTML=`
            <svg viewBox="0 0 50 50">
                <circle class="path" cx="25" cy="25" r="20" fill="none"></circle>
            </svg>
        `,e}}class g{constructor(e,t,i){var s;this.nsRootElement=h("div"),this.nsTextElement=h("div"),this.nsTextContainerElement=h("div"),this.nsSpinnerElement=u.createNanosplashSpinnerElement(),this.nsWindowElement=h("div"),this.nsWrapperElement=h("div"),this.nsContentElement=h("div"),this.nsImageElement=h("img"),this.id=Math.random().toString(36).substring(2),this.nsInstance=e,this.nsTextElement.innerText=t,this.imgSrc=i,this.nsImageElement.src=(s=this.imgSrc)!=null?s:"",this.nsImageElement.alt=d.APP_NAME,this.nsRootElement.style.fontSize=e.getFontSize(),this.nsSpinnerElement.style.display=e.spinnerIsVisible()?"flex":"none",this.assembleNSComponent(),this.setImgSrc(i)}assignCSSClasses(){l(this.nsContentElement,"ns-container"),l(this.nsWrapperElement,"ns-blur"),l(this.nsImageElement,"ns-img"),l(this.nsTextElement,"ns-text"),l(this.nsTextContainerElement,"ns-text-container"),l(this.nsSpinnerElement,"ns-spinner"),l(this.nsWindowElement,"ns","ns-window"),l(this.nsRootElement,"ns-wrapper")}assembleElementStructure(){this.nsTextContainerElement.append(this.nsTextElement,this.nsSpinnerElement),this.nsContentElement.append(this.nsImageElement,this.nsTextContainerElement),this.nsWindowElement.append(this.nsContentElement),this.nsRootElement.append(this.nsWrapperElement,this.nsWindowElement)}assembleNSComponent(){this.nsRootElement.id=this.getId(),p(this.nsRootElement,"data-ctx","nanosplash"),this.assembleElementStructure(),this.assignCSSClasses()}getId(){return this.id}getText(){return this.nsTextElement.innerText}setText(e){return this.nsTextElement.innerText=e,this}getImgSrc(){return this.imgSrc}setImgSrc(e){return this.nsImageElement.src=e!=null?e:"",this.nsImageElement.style.display=e?"block":"none",this.assembleElementStructure(),this}getDestination(){return this.destinationNode}cleanAndRestore(){const e=this.nsRootElement.parentElement;e&&this.restoreDOMStructure(e)}resetFullscreenAttributes(){p(this.nsRootElement,"style",""),this.nsRootElement.classList.remove("ns-fs")}moveWithRegularStrategy(e){const t=e.parentNode;t&&(this.restoreDOMStructure(t),t.replaceChild(this.nsRootElement,e),this.nsWrapperElement.appendChild(e))}moveWithFullscreenStrategy(){this.nsRootElement.classList.add("ns-fs"),v(this.nsRootElement,document.body,!0)}replaceSplashInstancesHavingSameDestination(e){const t=s=>s.getId()!==this.getId(),i=s=>s.delete();this.nsInstance.getFromDestinationNode(e).filter(t).forEach(i)}moveTo(e){try{this.cleanAndRestore(),this.destinationNode=u.destinationToNode(e),this.replaceSplashInstancesHavingSameDestination(this.destinationNode),this.destinationNode===document.body?this.moveWithFullscreenStrategy():(this.resetFullscreenAttributes(),this.moveWithRegularStrategy(this.destinationNode)),this.assembleNSComponent()}catch(t){this.nsInstance.debug&&console.warn(t)}}forEachWrappedNode(e){Array.from(this.nsWrapperElement.childNodes).forEach(e)}restoreDOMStructure(e){this.forEachWrappedNode(t=>e.insertBefore(t,this.nsRootElement))}removeElementsFromDOM(){[this.nsTextElement,this.nsSpinnerElement,this.nsTextContainerElement,this.nsImageElement,this.nsContentElement,this.nsWrapperElement,this.nsWindowElement,this.nsRootElement].forEach(e=>e.remove())}delete(){this.cleanAndRestore(),this.removeElementsFromDOM(),this.nsInstance.delete(this)}}class m{static ensureInstance(e,t,i,s){var r;return e||(e=new g(t,i,s)),e.setText(i).setImgSrc((r=e.getImgSrc())!=null?r:s)}static createShowFunction(e,t){return i=>(t=m.ensureInstance(t,e,i),e.instances.set(t.getId(),t),t.moveTo(document.body),u.createContextualApiObject(t))}static createProgressFunction(e,t){return(...i)=>(t=m.ensureInstance(t,e,""),t.moveTo(document.body),(async()=>{for(const[s,[r,f]]of i.entries())t.setText(f),await r;t.delete()})(),u.createContextualApiObject(t))}static createWhileFunction(e,t){return i=>(t=m.ensureInstance(t,e,""),{show(s){return e.instances.set(t.getId(),t),t.moveTo(document.body),t.setText(s),i.finally(()=>t.delete()),u.createContextualApiObject(t)}})}}const S=class{constructor(n){var e;this.debug=(n==null?void 0:n.debug)===void 0?S.DEBUG:n.spinner,this.imgSrc=n==null?void 0:n.imgSrc,this.spinner=(n==null?void 0:n.spinner)===void 0?S.SPINNER_DEFAULT_VISIBILITY:n.spinner,this.fontSize=(e=n==null?void 0:n.fontSize)!=null?e:"18px",this.instances=new Map}setImgSrc(n){return this.imgSrc=n,this}showSpinner(n){return this.spinner=n,this}setFontSize(n){return this.fontSize=n,this}getImgSrc(){return this.imgSrc}spinnerIsVisible(){return this.spinner}getFontSize(){return this.fontSize}show(n){return m.createShowFunction(this,new g(this,n,this.imgSrc))(n)}progress(...n){return m.createProgressFunction(this,new g(this,"",this.imgSrc))(...n)}while(n){return m.createWhileFunction(this,new g(this,"",this.imgSrc))(n)}lifoIterate(n){const e=this.instances.size,t=Array.from(this.instances.values());for(let i=e-1;i>=0;i--){const s=t[i],r=s.getId();if(!n(r,s,i))break}}delete(n){this.instances.delete(n.getId())}hideAll(){this.instances.forEach(n=>n.delete())}hide(n){if(n){const e=typeof n=="string",t=n instanceof Node,i=s=>{Array.from(this.instances.values()).filter(r=>r.getDestination()===s).forEach(r=>r.delete())};if(e){const s=this.instances.get(n);if(s)s.delete();else{const r=a(n);r&&i(r)}}else t&&i(n)}else{const e=this.instances.size;this.lifoIterate((t,i,s)=>{const r=s===e-1;return r&&i.delete(),r})}}getFromDestinationNode(n){const e=t=>t.getDestination()===n;return Array.from(this.instances.values()).filter(e)}};let d=S;d.APP_NAME="Nanosplash",d.SPINNER_DEFAULT_VISIBILITY=!0,d.DEBUG=!0,window.addEventListener("load",()=>{window.Nanosplash=d,window.ns=new d})})();
