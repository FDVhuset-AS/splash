function t(t){return document.querySelector(t)}const s=t=>document.createElement(t);function i(t,...s){t.classList.add(...s)}function e(t,s,i){t.setAttribute(s,i)}class Exception extends Error{constructor(t,s){super(t),this.name=this.constructor.name,this.t=s}}class DestinationException extends Exception{constructor(t,s,i){super(t),this.destination=s,this.t=i}}class IllegalArgumentException extends Exception{constructor(t,s){super(t),this.i=s}}class NanosplashRepository{static h(s){if("string"==typeof s)try{const i=t(s);if(!i)throw new Exception(`No DOM match with ${s}`);return i}catch(t){throw new DestinationException(`Destination (${s}) is either invalid or non-existing in DOM`,s,t)}else if(s instanceof Node)return s;throw new IllegalArgumentException(`Destination (${s}) must be either a Node or a CSS selector`,s)}static o(t){const s={getId:()=>t.getId(),remove:()=>t.delete(),moveTo:s=>t.moveTo(s),getText:()=>t.getText(),setText:s=>t.setText(s),getImgSrc:()=>t.getImgSrc(),setImgSrc:s=>t.setImgSrc(s)};return{...s,inside:i=>(t.moveTo(i),s)}}static l(){const t=s("div");return i(t,"ns-spinner"),t.innerHTML='\n            <svg viewBox="0 0 50 50">\n                <circle class="path" cx="25" cy="25" r="20" fill="none"></circle>\n            </svg>\n        ',t}}class SplashInstance{constructor(t,i,e){var n;this.u=s("div"),this.p=s("div"),this.m=s("div"),this.g=NanosplashRepository.l(),this.v=s("div"),this.S=s("div"),this.N=s("div"),this.I=s("img"),this.id=Math.random().toString(36).substring(2),this.F=t,this.p.innerText=i,this.D=e,this.I.src=null!=(n=this.D)?n:"",this.I.alt=h.A,this.u.style.fontSize=t.getFontSize(),this.g.style.display=t.spinnerIsVisible()?"flex":"none",this.R(),this.setImgSrc(e)}T(){i(this.N,"ns-container"),i(this.S,"ns-blur"),i(this.I,"ns-img"),i(this.p,"ns-text"),i(this.m,"ns-text-container"),i(this.g,"ns-spinner"),i(this.v,"ns","ns-window"),i(this.u,"ns-wrapper")}M(){this.m.append(this.p,this.g),this.N.append(this.I,this.m),this.v.append(this.N),this.u.append(this.S,this.v)}R(){this.u.id=this.getId(),e(this.u,"data-ctx","nanosplash"),this.M(),this.T()}getId(){return this.id}getText(){return this.p.innerText}setText(t){return this.p.innerText=t,this}getImgSrc(){return this.D}setImgSrc(t){return this.I.src=null!=t?t:"",this.I.style.display=t?"block":"none",this.M(),this}getDestination(){return this.C}O(){const t=this.u.parentElement;t&&this.W(t)}$(){e(this.u,"style",""),this.u.classList.remove("ns-fs")}k(t){const s=t.parentNode;s&&(this.W(s),s.replaceChild(this.u,t),this.S.appendChild(t))}j(){this.u.classList.add("ns-fs"),((t,s,i=!1)=>{t&&s&&(s.hasChildNodes()&&i?s.insertBefore(t,s.firstChild):s.appendChild(t))})(this.u,document.body,!0)}B(t){this.F.getFromDestinationNode(t).filter((t=>t.getId()!==this.getId())).forEach((t=>t.delete()))}moveTo(t){try{this.O(),this.C=NanosplashRepository.h(t),this.B(this.C),this.C===document.body?this.j():(this.$(),this.k(this.C)),this.R()}catch(t){this.F.debug&&console.warn(t)}}H(t){Array.from(this.S.childNodes).forEach(t)}W(t){this.H((s=>t.insertBefore(s,this.u)))}P(){[this.p,this.g,this.m,this.I,this.N,this.S,this.v,this.u].forEach((t=>t.remove()))}delete(){this.O(),this.P(),this.F.delete(this)}}class NanosplashFactory{static V(t,s,i,e){var n;return t||(t=new SplashInstance(s,i,e)),t.setText(i).setImgSrc(null!=(n=t.getImgSrc())?n:e)}static q(t,s){return i=>(s=NanosplashFactory.V(s,t,i),t.G.set(s.getId(),s),s.moveTo(document.body),NanosplashRepository.o(s))}static J(t,s){return(...i)=>((s=NanosplashFactory.V(s,t,"")).moveTo(document.body),(async()=>{for(const[t,[e,n]]of i.entries())s.setText(n),await e;s.delete()})(),NanosplashRepository.o(s))}static K(t,s){return i=>(s=NanosplashFactory.V(s,t,""),{show:e=>(t.G.set(s.getId(),s),s.moveTo(document.body),s.setText(e),i.finally((()=>s.delete())),NanosplashRepository.o(s))})}}const n=class{constructor(t){var s;this.debug=void 0===(null==t?void 0:t.debug)?n.L:t.U,this.D=null==t?void 0:t.D,this.U=void 0===(null==t?void 0:t.U)?n.X:t.U,this.fontSize=null!=(s=null==t?void 0:t.fontSize)?s:"18px",this.G=new Map}setImgSrc(t){return this.D=t,this}showSpinner(t){return this.U=t,this}setFontSize(t){return this.fontSize=t,this}getImgSrc(){return this.D}spinnerIsVisible(){return this.U}getFontSize(){return this.fontSize}show(t){return NanosplashFactory.q(this,new SplashInstance(this,t,this.D))(t)}progress(...t){return NanosplashFactory.J(this,new SplashInstance(this,"",this.D))(...t)}while(t){return NanosplashFactory.K(this,new SplashInstance(this,"",this.D))(t)}Y(t){const s=this.G.size,i=Array.from(this.G.values());for(let e=s-1;e>=0;e--){const s=i[e];if(!t(s.getId(),s,e))break}}delete(t){this.G.delete(t.getId())}hideAll(){this.G.forEach((t=>t.delete()))}hide(s){if(s){const i=s instanceof Node,e=t=>{Array.from(this.G.values()).filter((s=>s.getDestination()===t)).forEach((t=>t.delete()))};if("string"==typeof s){const i=this.G.get(s);if(i)i.delete();else{const i=t(s);i&&e(i)}}else i&&e(s)}else{const t=this.G.size;this.Y(((s,i,e)=>{const n=e===t-1;return n&&i.delete(),n}))}}getFromDestinationNode(t){return Array.from(this.G.values()).filter((s=>s.getDestination()===t))}};let h=n;h.A="Nanosplash",h.X=!0,h.L=!0,module.exports=h;
