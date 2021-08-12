var __vite_style__=document.createElement("style");__vite_style__.innerHTML="@-webkit-keyframes fade{0%{display:none;opacity:0}to{display:flex;opacity:1}}@keyframes fade{0%{display:none;opacity:0}to{display:flex;opacity:1}}@-webkit-keyframes pulse{0%{transform:scale(1)}to{transform:scale(1.1)}}@keyframes pulse{0%{transform:scale(1)}to{transform:scale(1.1)}}@-webkit-keyframes spin{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(1turn)}}#tiny-loader[hidden=true]{animation-direction:reverse}#tiny-loader:not([hidden=true]),#tiny-loader[hidden=true]{-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-name:fade;animation-name:fade;transition:all .3s linear}#tiny-loader:not([hidden=true]){-webkit-animation-direction:alternate;animation-direction:alternate;display:flex}#tiny-loader{align-items:center;flex-direction:column;justify-content:center;position:absolute;z-index:1}#tiny-loader[data-blur=true]:not([hidden=true])~*{filter:blur(2px)}#tiny-loader>.tl-text{text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-smoothing:antialiased;-webkit-font-smoothing:antialiased;color:#333;font-family:Arial,sans-serif;font-size:1.5rem;text-shadow:0 0 2px rgba(0,0,0,.2)}#tiny-loader>img.tl-splash{margin-bottom:2rem}#tiny-loader[data-splash-animation=pulse]>img{-webkit-animation-direction:alternate;animation-direction:alternate;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:pulse;animation-name:pulse}#tiny-loader[data-splash-animation=spin]>img{-webkit-animation-duration:.7s;animation-duration:.7s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:spin;animation-name:spin;-webkit-animation-timing-function:linear;animation-timing-function:linear}",document.head.appendChild(__vite_style__),function(){"use strict";class t extends Error{constructor(t){super(t)}getName(){return this.constructor.name}}class e extends t{constructor(t){super(t)}}function n(t,e){const n=document.createElement(t);return e&&(e.id&&(n.id=e.id),e.className&&(n.className=e.className),e.attributes&&e.attributes.filter((t=>t.value)).forEach((({key:t,value:e})=>n.setAttribute(t,e))),e.eventListeners&&e.eventListeners.forEach((({event:t,handler:e})=>n.addEventListener(t,e))),e.content&&("string"==typeof e.content?n.innerText=e.content:n.append(e.content))),n}function i(t,e,n){t.setAttribute(e,n)}function a(t,e){e?function(t){t.hidden=!1,function(t,e){t.removeAttribute(e)}(t,"hidden")}(t):function(t){t.hidden=!0,i(t,"hidden","true")}(t)}function s(t){return t.parentNode}function o(t,e){const n=Array.from(t.childNodes);if(n.length<1)return void t.appendChild(e);const i=n[0];t.insertBefore(e,i)}function l(t){const e=s(t),{top:n,left:i}=e.getBoundingClientRect();t.style.width=e.offsetWidth+"px",t.style.height=e.offsetHeight+"px",t.style.top=n+"px",t.style.left=i+"px"}const r=class{constructor(){this.defaultText=r.DEFAULT_TEXT,this.defaultDestination=r.DEFAULT_DESTINATION,this.mainElement=r.makeMainElement(),this.splashElement=r.makeSplashElement(),this.textElement=r.makeTextElement(),r.assembleElements(this.mainElement,this.splashElement,this.textElement),o(r.DEFAULT_DESTINATION,this.mainElement),a(this.mainElement,!1),l(this.mainElement),this.setDefaultStyles()}configure(t){var e,n,i,s,o,l,d,m,u,c;return(null==(e=null==t?void 0:t.default)?void 0:e.destination)&&(this.defaultDestination=r.getDestinationElement(t.default.destination)),this.defaultText||(this.defaultText=null==(n=t.default)?void 0:n.text),(null==(i=t.text)?void 0:i.family)&&this.setTextFontFamily(t.text.family),(null==(s=t.text)?void 0:s.color)&&this.setTextColor(t.text.color),(null==(o=t.text)?void 0:o.size)&&this.setTextSize(t.text.size),(null==(l=t.background)?void 0:l.color)&&this.setBackgroundColor(t.background.color),void 0!==(null==(d=t.background)?void 0:d.blur)&&this.setBackgroundBlur(t.background.blur),t.splash?((null==(m=t.splash)?void 0:m.src)&&this.setSplashSource(t.splash.src),(null==(u=t.splash)?void 0:u.width)&&this.setSplashWidth(t.splash.width),(null==(c=t.splash)?void 0:c.animation)&&this.setSplashAnimation(t.splash.animation)):a(this.splashElement,!1),this}setDefaultStyles(){this.setTextFontFamily(r.DEFAULT_TEXT_FONT),this.setTextColor(r.DEFAULT_TEXT_COLOR),this.setTextSize(r.DEFAULT_TEXT_SIZE),this.setSplashWidth(r.DEFAULT_SPLASH_WIDTH),this.setSplashAnimation(r.DEFAULT_SPLASH_ANIMATION),this.setBackgroundColor(r.DEFAULT_BACKGROUND_COLOR),this.setBackgroundBlur(r.DEFAULT_BACKGROUND_BLUR)}show(t){return this.setText(null!=t?t:r.DEFAULT_TEXT),a(this.mainElement,!0),{inside:t=>this.moveTo(t)}}hide(){a(this.mainElement,!1),this.setText(this.defaultText),this.moveTo(this.defaultDestination)}moveTo(t){const e=r.getDestinationElement(t);this.mainElement.parentNode?function(t,e){const n=s(t);null==n||n.removeChild(t),o(e,t)}(this.mainElement,e):o(e,this.mainElement),l(this.mainElement)}static makeMainElement(){const t=n("div",{id:"tiny-loader",attributes:[{key:"data-blur",value:String(r.DEFAULT_BACKGROUND_BLUR)},{key:"data-splash-animation",value:r.DEFAULT_SPLASH_ANIMATION}]});return t.style.backgroundColor=r.DEFAULT_BACKGROUND_COLOR,t}static makeSplashElement(){const t=n("img",{className:"tl-splash",attributes:[{key:"src",value:r.DEFAULT_SPLASH_SOURCE},{key:"alt",value:"NanoSplash indicator"}]});return a(t,!1),t}static makeTextElement(){return n("div",{className:"tl-text",content:r.DEFAULT_TEXT})}static assembleElements(t,e,n){e&&t.appendChild(e),t.appendChild(n)}setText(t){this.textElement.innerText=t}setTextFontFamily(t){this.textElement.style.fontFamily=t}setTextColor(t){this.textElement.style.color=t}setTextSize(t){this.textElement.style.fontSize=t}setSplashSource(t){this.splashElement.src=t,a(this.splashElement,!0)}setSplashWidth(t){this.splashElement.style.width=t}setSplashAnimation(t){i(this.mainElement,"data-splash-animation",t)}setBackgroundColor(t){this.mainElement.style.backgroundColor=t}setBackgroundBlur(t){i(this.mainElement,"data-blur",String(t))}static getDestinationElement(t){if("string"==typeof t){const i=(n=t,document.querySelector(n));if(r.isElementOrNode(i))return i;throw new e("The DOM selector does not point to an Element")}if(r.isFunction(t)){const n=t();if(r.isElementOrNode(n))return n;throw new e("The destination callback returned an invalid value")}if(r.isElementOrNode(t))return t;var n;throw new e}static isElementOrNode(t){return t instanceof Element||t instanceof Node}static isFunction(t){return t&&"[object Function]"==={}.toString.call(t)}static injectInstanceIntoGlobalScope(t){Object.defineProperty(window,"loader",{value:t,writable:!1}),r.adaptSizeOnResize(t.mainElement)}static adaptSizeOnResize(t){window.attachEvent?window.attachEvent("onresize",(function(){l(t)})):window.addEventListener&&window.addEventListener("resize",(function(){l(t)}),!0)}};let d=r;d.DEFAULT_TEXT="Loading ...",d.DEFAULT_TEXT_FONT='"Arial", sans-serif',d.DEFAULT_TEXT_COLOR="#555",d.DEFAULT_TEXT_SIZE="1.5rem",d.DEFAULT_SPLASH_SOURCE=null,d.DEFAULT_SPLASH_WIDTH="100px",d.DEFAULT_SPLASH_ANIMATION="pulse",d.DEFAULT_DESTINATION=document.body,d.DEFAULT_BACKGROUND_COLOR="rgba(255, 255, 255, 0.75)",d.DEFAULT_BACKGROUND_BLUR=!0;window&&window instanceof Window&&d.injectInstanceIntoGlobalScope(new d)}();
