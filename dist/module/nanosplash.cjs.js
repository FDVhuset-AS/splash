var t=Object.defineProperty,s=Object.defineProperties,e=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,h=(s,e,i)=>e in s?t(s,e,{t:!0,i:!0,writable:!0,value:i}):s[e]=i;function o(t){return document.querySelector(t)}const a=t=>document.createElement(t);function c(t,...s){t.classList.add(...s)}function l(t,s,e){t.setAttribute(s,e)}class Exception extends Error{constructor(t,s){super(t),this.name=this.constructor.name,this.h=s}}class DestinationException extends Exception{constructor(t,s,e){super(t),this.destination=s,this.h=e}}class IllegalArgumentException extends Exception{constructor(t,s){super(t),this.o=s}}class NanosplashRepository{static l(t){if("string"==typeof t)try{const s=o(t);if(!s)throw new Exception(`No DOM match with ${t}`);return s}catch(s){throw new DestinationException(`Destination (${t}) is either invalid or non-existing in DOM`,t,s)}else if(t instanceof Node)return t;throw new IllegalArgumentException(`Destination (${t}) must be either a Node or a CSS selector`,t)}static u(t){const o={getId:()=>t.getId(),remove:()=>t.delete(),moveTo:s=>t.moveTo(s),getText:()=>t.getText(),setText:s=>t.setText(s),getImgSrc:()=>t.getImgSrc(),setImgSrc:s=>t.setImgSrc(s)};return a=((t,s)=>{for(var e in s||(s={}))n.call(s,e)&&h(t,e,s[e]);if(i)for(var e of i(s))r.call(s,e)&&h(t,e,s[e]);return t})({},o),s(a,e({inside:s=>(t.moveTo(s),o)}));var a}static p(){const t=a("div");return c(t,"ns-spinner"),t.innerHTML='\n            <svg viewBox="0 0 50 50">\n                <circle class="path" cx="25" cy="25" r="20" fill="none"></circle>\n            </svg>\n        ',t}}class SplashInstance{constructor(t,s,e){var i;this.m=a("div"),this.g=a("div"),this.v=a("div"),this.S=NanosplashRepository.p(),this.N=a("div"),this.I=a("div"),this.F=a("div"),this.D=a("img"),this.id=Math.random().toString(36).substring(2),this.O=t,this.g.innerText=s,this.A=e,this.D.src=null!=(i=this.A)?i:"",this.D.alt=p.R,this.m.style.fontSize=t.getFontSize(),this.S.style.display=t.spinnerIsVisible()?"flex":"none",this.j(),this.setImgSrc(e)}T(){c(this.F,"ns-container"),c(this.I,"ns-blur"),c(this.D,"ns-img"),c(this.g,"ns-text"),c(this.v,"ns-text-container"),c(this.S,"ns-spinner"),c(this.N,"ns","ns-window"),c(this.m,"ns-wrapper")}M(){this.v.append(this.g,this.S),this.F.append(this.D,this.v),this.N.append(this.F),this.m.append(this.I,this.N)}j(){this.m.id=this.getId(),l(this.m,"data-ctx","nanosplash"),this.M(),this.T()}getId(){return this.id}getText(){return this.g.innerText}setText(t){return this.g.innerText=t,this}getImgSrc(){return this.A}setImgSrc(t){return this.D.src=null!=t?t:"",this.D.style.display=t?"block":"none",this.M(),this}getDestination(){return this.C}W(){const t=this.m.parentElement;t&&this.$(t)}k(){l(this.m,"style",""),this.m.classList.remove("ns-fs")}B(t){const s=t.parentNode;s&&(this.$(s),s.replaceChild(this.m,t),this.I.appendChild(t))}H(){this.m.classList.add("ns-fs"),((t,s,e=!1)=>{t&&s&&(s.hasChildNodes()&&e?s.insertBefore(t,s.firstChild):s.appendChild(t))})(this.m,document.body,!0)}P(t){this.O.getFromDestinationNode(t).filter((t=>t.getId()!==this.getId())).forEach((t=>t.delete()))}moveTo(t){try{this.W(),this.C=NanosplashRepository.l(t),this.P(this.C),this.C===document.body?this.H():(this.k(),this.B(this.C)),this.j()}catch(t){console.warn(t)}}V(t){Array.from(this.I.childNodes).forEach(t)}$(t){this.V((s=>t.insertBefore(s,this.m)))}q(){[this.g,this.S,this.v,this.D,this.F,this.I,this.N,this.m].forEach((t=>t.remove()))}delete(){this.W(),this.q(),this.O.delete(this)}}class NanosplashFactory{static G(t,s,e,i){var n;return t||(t=new SplashInstance(s,e,i)),t.setText(e).setImgSrc(null!=(n=t.getImgSrc())?n:i)}static J(t,s){return e=>(s=NanosplashFactory.G(s,t,e),t.K.set(s.getId(),s),s.moveTo(document.body),NanosplashRepository.u(s))}static L(t,s){return(...e)=>((s=NanosplashFactory.G(s,t,"")).moveTo(document.body),(async()=>{for(const[t,[i,n]]of e.entries())s.setText(n),await i;s.delete()})(),NanosplashRepository.u(s))}static U(t,s){return e=>(s=NanosplashFactory.G(s,t,""),{show:i=>(t.K.set(s.getId(),s),s.moveTo(document.body),s.setText(i),e.finally((()=>s.delete())),NanosplashRepository.u(s))})}}const u=class{constructor(t){var s;this.A=null==t?void 0:t.A,this.X=void 0===(null==t?void 0:t.X)?u.Y:t.X,this.fontSize=null!=(s=null==t?void 0:t.fontSize)?s:"18px",this.K=new Map}setImgSrc(t){return this.A=t,this}showSpinner(t){return this.X=t,this}setFontSize(t){return this.fontSize=t,this}getImgSrc(){return this.A}spinnerIsVisible(){return this.X}getFontSize(){return this.fontSize}show(t){return NanosplashFactory.J(this,new SplashInstance(this,t,this.A))(t)}progress(...t){return NanosplashFactory.L(this,new SplashInstance(this,"",this.A))(...t)}while(t){return NanosplashFactory.U(this,new SplashInstance(this,"",this.A))(t)}Z(t){const s=this.K.size,e=Array.from(this.K.values());for(let i=s-1;i>=0;i--){const s=e[i];if(!t(s.getId(),s,i))break}}delete(t){this.K.delete(t.getId())}hideAll(){this.K.forEach((t=>t.delete()))}hide(t){if(t){const s=t instanceof Node,e=t=>{Array.from(this.K.values()).filter((s=>s.getDestination()===t)).forEach((t=>t.delete()))};if("string"==typeof t){const s=this.K.get(t);if(s)s.delete();else{const s=o(t);s&&e(s)}}else s&&e(t)}else{const t=this.K.size;this.Z(((s,e,i)=>{const n=i===t-1;return n&&e.delete(),n}))}}getFromDestinationNode(t){return Array.from(this.K.values()).filter((s=>s.getDestination()===t))}};let p=u;p.R="Nanosplash",p.Y=!0,module.exports=p;
