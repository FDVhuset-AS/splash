var __vite_style__=document.createElement("style");__vite_style__.innerHTML="@-webkit-keyframes pulse{0%{transform:scale(1)}to{transform:scale(1.1)}}@keyframes pulse{0%{transform:scale(1)}to{transform:scale(1.1)}}@-webkit-keyframes spin{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.nanosplash-container{align-items:center;border-radius:inherit;flex-direction:column;justify-content:center;overflow:inherit;position:absolute;z-index:1}.nanosplash-container[hidden=true]{display:none}.nanosplash-container:not([hidden=true]){display:flex}.nanosplash-container[data-blur=none]:not([hidden=true])~*{filter:blur(0)}.nanosplash-container[data-blur=light]:not([hidden=true])~*{filter:blur(2px)}.nanosplash-container[data-blur=medium]:not([hidden=true])~*{filter:blur(4px)}.nanosplash-container[data-blur=heavy]:not([hidden=true])~*{filter:blur(10px)}.nanosplash-container .nanosplash-text{text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-smoothing:antialiased;-webkit-font-smoothing:antialiased;text-shadow:0 0 2px rgba(0,0,0,.2)}.nanosplash-container img.nanosplash-img{margin-bottom:40px}.nanosplash-container[data-splash-animation=pulse]>img{-webkit-animation-direction:alternate;animation-direction:alternate;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:pulse;animation-name:pulse}.nanosplash-container[data-splash-animation=spin]>img{-webkit-animation-duration:.7s;animation-duration:.7s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:spin;animation-name:spin;-webkit-animation-timing-function:linear;animation-timing-function:linear}body>.nanosplash-container:not([hidden=true]){height:100vh;width:100%}\n",document.head.appendChild(__vite_style__),function(){"use strict";class t extends Error{constructor(t){super(t),this.name=this.constructor.name}t(){return this.constructor.name}}class i extends t{constructor(t){super(t)}}class n extends t{constructor(t){super(t)}}class s extends t{constructor(t){super(t)}}const e=t=>Array.from(document.querySelectorAll(t)),a=(t,i)=>{var n;const s=document.createElement(t);return i&&(s.id||(s.id=i.id+""),s.className||(s.className=i.className+""),null==(n=i.attributes)||n.filter((t=>t.value)).forEach((({key:t,value:i})=>u(s,t,i))),i.content&&("string"==typeof i.content?s.innerText=i.content:s.append(i.content))),s},o=(t,i)=>{t.hidden=!i,i?c(t,"hidden"):u(t,"hidden","true")},r=t=>({to:(i,n)=>{const s=Array.from(i.childNodes);if(s.length<1||!n)return void i.appendChild(t);const e=s[0];i.insertBefore(t,e)}}),l=t=>{const i=t.parentNode;i&&(n=>{const s="px",e=i===document.body;let a,o,r,l;a=e?scrollX+s:"0px",o=e?scrollY+s:"0px",r=e?"100%":n.width+s,l=e?"100vh":n.height+s,h(t,"left",a),h(t,"top",o),h(t,"width",r),h(t,"height",l)})(i.getBoundingClientRect())},h=(t,i,n)=>{t.style[i]=n},u=(t,i,n)=>{t.setAttribute(i,n)},c=(t,i)=>{t.removeAttribute(i)};class d{static i(){const t=a("div",{className:"nanosplash-container",attributes:[{key:"data-splash-animation",value:this.l.o}]});return t.style.backgroundColor=this.l.h,t}static u(){return a("img",{className:"nanosplash-img",attributes:[{key:"src",value:null},{key:"alt",value:"Nanosplash indicator"}]})}static m(){return a("div",{className:"nanosplash-text",content:this.l.p})}}d.l={v:document.body,p:"Loading ...",g:'"Arial", sans-serif',k:"medium",_:"#555",T:"26px",S:"100px",N:"auto",o:"pulse",h:"rgba(255, 255, 255, 0.90)",P:"light"};class m{constructor(t){var i,n,s,e,a;this.cache={A:""},this.O=null!=(n=null==(i=null==t?void 0:t.default)?void 0:i.text)?n:d.l.p,this.I=m.C(null!=(e=null==(s=null==t?void 0:t.default)?void 0:s.destination)?e:d.l.v),this.D=d.i(),this.H=d.u(),this.L=d.m(),this.R();const h=null==(a=null==t?void 0:t.splash)?void 0:a.src;h&&(this.B(h),r(this.H).to(this.D)),r(this.L).to(this.D),r(this.D).to(this.I,!0),o(this.D,!1),l(this.D),t&&this.configure(t)}install(){var t,i,n;Object.defineProperty(window,"loading",{value:this,writable:!1}),t=window,i=()=>l(this.D),n=["resize","scroll"],(([t,s])=>{n.forEach((n=>{t?t(`on${n}`,i):s(n,i,!0)}))})([t.attachEvent,t.addEventListener]);try{m.W()}catch(s){console.error(s)}}configure(t){var i,n,s,e,a,l,h,u,c,d,p,f;if((null==(i=null==t?void 0:t.default)?void 0:i.destination)&&(this.I=m.C(t.default.destination)),this.O||(this.O=null==(n=t.default)?void 0:n.text),(null==(s=t.text)?void 0:s.family)&&this.X(t.text.family),(null==(e=t.text)?void 0:e.weight)&&this.F(t.text.weight),(null==(a=t.text)?void 0:a.color)&&this.G(t.text.color),(null==(l=t.text)?void 0:l.size)&&this.j(t.text.size),(null==(h=t.background)?void 0:h.color)&&this.M(t.background.color),(null==(u=t.background)?void 0:u.blur)&&this.U(t.background.blur),t.splash){if(null==(c=t.splash)?void 0:c.src){this.D.contains(this.H)||r(this.H).to(this.D,!0),this.B(t.splash.src)}(null==(d=t.splash)?void 0:d.width)&&this.K(t.splash.width),(null==(p=t.splash)?void 0:p.height)&&this.Y(t.splash.height),(null==(f=t.splash)?void 0:f.animation)&&this.Z(t.splash.animation)}else o(this.H,!1);return this}show(t){this.$(null!=t?t:d.l.p),o(this.D,!0);const i=t=>t.finally((()=>this.hide()));return{inside:t=>{this.q();const n=m.C(t);return r(this.D).to(n,!0),l(this.D),this.J(),{during:i}},during:i}}hide(){this.q(),o(this.D,!1),this.$(this.O),r(this.D).to(this.I,!0),l(this.D)}R(){this.X(d.l.g),this.F(d.l.k),this.G(d.l._),this.j(d.l.T),this.K(d.l.S),this.Y(d.l.N),this.Z(d.l.o),this.M(d.l.h),this.U(d.l.P)}V(t){var i;(i=this.D.parentElement)&&t(i)}tt(t){this.V((i=>{h(i,"position",t)}))}it(){this.V((t=>{this.cache.A=t.style.position}))}q(){this.tt(this.cache.A)}J(){this.it(),this.tt("relative")}$(t){this.L.innerText=t}X(t){h(this.L,"fontFamily",t)}F(t){h(this.L,"fontWeight",t)}G(t){h(this.L,"color",t)}j(t){h(this.L,"fontSize",t)}B(t){this.H.src=t,o(this.H,!0)}K(t){h(this.H,"width",t)}Y(t){h(this.H,"height",t)}Z(t){u(this.D,"data-splash-animation",t)}M(t){h(this.D,"backgroundColor",t)}U(t){u(this.D,"data-blur",t)}static W(){window.addEventListener("load",(async function(){const t=e('link[href*="nanosplash"]'),i=e("style").filter((t=>/\.nanosplash/.test(t.innerText)));if(!(t.length>0||i.length>0))throw new s("Missing the Nanosplash CSS")}))}static C(t){const s="string"==typeof t,e=(a=t)&&"[object Function]"==={}.toString.call(a);var a;const o=(t=>t instanceof Element||t instanceof Node)(t);let r;if(s)l=t,r=document.querySelector(l);else if(e)r=t();else{if(!o)throw new i;r=t}var l;if(!r)throw new n("Destination element is falsy");return r}}window&&window instanceof Window&&(new m).install()}();
