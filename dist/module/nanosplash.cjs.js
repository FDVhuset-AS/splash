"use strict";Object.defineProperty(exports,"t",{value:!0}),exports[Symbol.toStringTag]="Module";class t extends Error{constructor(t){super(t)}i(){return this.constructor.name}}class s extends t{constructor(t){super(t)}}const i=(t,s)=>{var i,e;const n=document.createElement(t);return s&&(n.id||(n.id=s.id+""),n.className||(n.className=s.className+""),null==(i=s.attributes)||i.filter((t=>t.value)).forEach((({key:t,value:s})=>n.setAttribute(t,s))),null==(e=s.h)||e.forEach((({event:t,o:s})=>n.addEventListener(t,s))),s.content&&("string"==typeof s.content?n.innerText=s.content:n.append(s.content))),n},e=(t,s,i)=>{t.setAttribute(s,i)},n=(t,s)=>{s?(t=>{t.hidden=!1,((t,s)=>{t.removeAttribute(s)})(t,"hidden")})(t):(t=>{t.hidden=!0,e(t,"hidden","true")})(t)},h=t=>t.parentNode,o=(t,s)=>{const i=Array.from(t.childNodes);if(i.length<1)return void t.appendChild(s);const e=i[0];t.insertBefore(s,e)},l=t=>{const s=h(t);var i;s&&(i=s.getBoundingClientRect(),t.style.width=i.width+"px",t.style.height=i.height+"px",t.style.top=i.top+"px",t.style.left=i.left+"px")},a=t=>t instanceof Element||t instanceof Node,r=(t,s,i)=>{t.style[s]=i};class u{static l(){const t=i("div",{className:"nanosplash-container",attributes:[{key:"data-splash-animation",value:this.v.u}]});return t.style.backgroundColor=this.v.m,t}static p(){const t=i("img",{className:"nanosplash-img",attributes:[{key:"src",value:this.v.T},{key:"alt",value:"NanoSplash indicator"}]});return n(t,!1),t}static S(){return i("div",{className:"nanosplash-text",content:this.v.g})}}u.v={N:document.body,g:"Loading ...",O:'"Arial", sans-serif',_:"medium",A:"#555",k:"26px",T:"favicon.svg",H:"100px",D:"auto",u:"pulse",m:"rgba(255, 255, 255, 0.90)",I:"light"};class c{constructor(t){this.L=u.v.g,this.C=u.v.N,this.B=u.l(),this.R=u.p(),this.F=u.S(),this.B.append(this.R,this.F),o(this.C,this.B),n(this.B,!1),l(this.B),this.M(),t&&this.configure(t)}install(){Object.defineProperty(window,"loading",{value:this,writable:!1}),(t=>{const s=()=>l(t);(([t,i])=>{t?t("onresize",s):i&&i("resize",s,!0)})([window.attachEvent,window.addEventListener])})(this.B)}configure(t){var s,i,e,h,o,l,a,r,u,d,v,m;return(null==(s=null==t?void 0:t.default)?void 0:s.destination)&&(this.C=c.W(t.default.destination)),this.L||(this.L=null==(i=t.default)?void 0:i.text),(null==(e=t.text)?void 0:e.family)&&this.X(t.text.family),(null==(h=t.text)?void 0:h.weight)&&this.G(t.text.weight),(null==(o=t.text)?void 0:o.color)&&this.P(t.text.color),(null==(l=t.text)?void 0:l.size)&&this.U(t.text.size),(null==(a=t.background)?void 0:a.color)&&this.j(t.background.color),(null==(r=t.background)?void 0:r.blur)&&this.K(t.background.blur),t.Z?((null==(u=t.Z)?void 0:u.src)&&this.q(t.Z.src),(null==(d=t.Z)?void 0:d.width)&&this.J(t.Z.width),(null==(v=t.Z)?void 0:v.height)&&this.V(t.Z.height),(null==(m=t.Z)?void 0:m.animation)&&this.Y(t.Z.animation)):n(this.R,!1),this}show(t){this.$(null!=t?t:u.v.g),n(this.B,!0);const s=this.B.parentNode;return s&&s!==document.body&&l(this.B),{inside:t=>this.moveTo(t)}}hide(){n(this.B,!1),this.$(this.L),this.moveTo(this.C)}M(){this.X(u.v.O),this.G(u.v._),this.P(u.v.A),this.U(u.v.k),this.q(u.v.T),this.J(u.v.H),this.V(u.v.D),this.Y(u.v.u),this.j(u.v.m),this.K(u.v.I)}moveTo(t){const s=c.W(t);var i;this.B.parentNode?(i=this.B,{to:t=>{var s;null==(s=h(i))||s.removeChild(i),o(t,i)}}).to(s):o(s,this.B),l(this.B)}$(t){this.F.innerText=t}X(t){r(this.F,"fontFamily",t)}G(t){r(this.F,"fontWeight",t)}P(t){r(this.F,"color",t)}U(t){r(this.F,"fontSize",t)}q(t){this.R.src=t,n(this.R,!0)}J(t){r(this.R,"width",t)}V(t){r(this.R,"height",t)}Y(t){e(this.B,"data-splash-animation",t)}j(t){r(this.B,"background-color",t)}K(t){e(this.B,"data-blur",t)}static W(t){if("string"==typeof t){const i=(e=t,document.querySelector(e));if(a(i))return i;throw new s("The DOM selector does not point to an Element")}if((i=t)&&"[object Function]"==={}.toString.call(i)){const i=t();if(a(i))return i;throw new s("The destination callback returned an invalid value")}if(a(t))return t;var i,e;throw new s}}exports.NanoSplash=c;
