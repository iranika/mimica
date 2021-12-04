(()=>{"use strict";var e={1619:(e,t,o)=>{o(5363),o(71);var r=o(8880),a=o(8670),n=o(3673);function i(e,t,o,r,a,i){const l=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(l)}const l=(0,n.aZ)({name:"App"});l.render=i;const s=l;var c=o(556),d=o(7083),u=o(9582);const f=[{path:"/",component:()=>Promise.all([o.e(736),o.e(904)]).then(o.bind(o,904)),children:[{path:"",component:()=>Promise.all([o.e(736),o.e(999)]).then(o.bind(o,8999))},{path:"mixn",component:()=>Promise.all([o.e(736),o.e(932)]).then(o.bind(o,3932))},{path:"bookmarklet",component:()=>Promise.all([o.e(736),o.e(822)]).then(o.bind(o,1822))}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([o.e(736),o.e(989)]).then(o.bind(o,8989))}],h=f,m=(0,d.BC)((function(){const e=u.r5,t=(0,u.p7)({scrollBehavior:()=>({left:0,top:0}),routes:h,history:e("")});return t}));async function p(e,t){const r="function"===typeof c["default"]?await(0,c["default"])({}):c["default"],{storeKey:n}=await Promise.resolve().then(o.bind(o,556)),i="function"===typeof m?await m({store:r}):m;r.$router=i;const l=e(s);return l.use(a.Z,t),{app:l,store:r,storeKey:n,router:i}}var g=o(589),v=o(7153),b=o(6249);const y={config:{loading:{}},plugins:{LocalStorage:g.Z,SessionStorage:v.Z,Loading:b.Z}},w="";async function S({app:e,router:t,store:o,storeKey:r},a){let n=!1;const i=e=>{n=!0;const o=Object(e)===e?t.resolve(e).fullPath:e;window.location.href=o},l=window.location.href.replace(window.location.origin,"");for(let c=0;!1===n&&c<a.length;c++)try{await a[c]({app:e,router:t,store:o,ssrContext:null,redirect:i,urlPath:l,publicPath:w})}catch(s){return s&&s.url?void(window.location.href=s.url):void console.error("[Quasar] boot error:",s)}!0!==n&&(e.use(t),e.use(o,r),e.mount("#q-app"))}p(r.ri,y).then((e=>Promise.all([Promise.resolve().then(o.bind(o,5242)),Promise.resolve().then(o.bind(o,1768))]).then((t=>{const o=t.map((e=>e.default)).filter((e=>"function"===typeof e));S(e,o)}))))},1768:(e,t,o)=>{o.r(t),o.d(t,{default:()=>l,api:()=>i});var r=o(7083),a=o(52),n=o.n(a);const i=n().create({baseURL:"https://api.example.com"}),l=(0,r.xr)((({app:e})=>{e.config.globalProperties.$axios=n(),e.config.globalProperties.$api=i}))},5242:(e,t,o)=>{o.r(t),o.d(t,{default:()=>d,i18n:()=>c});var r=o(7083),a=o(5948);const n={failed:"Action failed",success:"Action was successful",collapse:"collapse",home:"Home",createDeck:"Create Deck",myDecks:"My Decks",favorite:"Favarite",help:"Help",Mixn:"Tom × Brown",Bookmarklet:"Bookmarklet Box"},i={failed:"Action failed",success:"Action was successful",home:"ホーム",myDecks:"マイデッキ",favorite:"お気に入り",collapse:"折りたたむ",createDeck:"デッキの作成",help:"ヘルプ",Mixn:"トム×ブラウン",Bookmarklet:"ブックマークレットBOX"},l={"en-US":n,"ja-JP":i};var s=o(3602);const c=(0,a.o)({locale:s.D.getInstance.db.defaultLocale,messages:l}),d=(0,r.xr)((({app:e})=>{e.use(c)}))},556:(e,t,o)=>{o.r(t),o.d(t,{storeKey:()=>n,default:()=>i,useStore:()=>l});var r=o(7083),a=o(3617);const n=Symbol("vuex-key"),i=(0,r.h)((function(){const e=(0,a.MT)({modules:{},strict:!1});return e}));function l(){return(0,a.oR)(n)}},3602:(e,t,o)=>{o.d(t,{D:()=>a});var r=o(1959);class a{constructor(){var e,t;this.keys={miniState:"MiniState",defaultLocale:"DefaultLocale"},this.db=(0,r.qj)({miniState:this.toBoolean(null!==(e=window.localStorage.getItem(this.keys.miniState))&&void 0!==e?e:"false"),defaultLocale:String(null!==(t=window.localStorage.getItem(this.keys.defaultLocale))&&void 0!==t?t:"ja-JP")})}toBoolean(e){return"true"===e.toLowerCase()}setMiniState(e){window.localStorage.setItem(this.keys.miniState,String(e)),this.db.miniState=e}setDefaultLocale(e){window.localStorage.setItem(this.keys.defaultLocale,e),this.db.defaultLocale=e}updateStoreFromLocalstorage(){var e,t;this.db.miniState=this.toBoolean(null!==(e=window.localStorage.getItem(this.keys.miniState))&&void 0!==e?e:"false"),this.db.defaultLocale=String(null!==(t=window.localStorage.getItem(this.keys.defaultLocale))&&void 0!==t?t:"ja-JP")}setAllLocalstorageFromStore(){window.localStorage.setItem(this.keys.miniState,String(this.db.miniState)),window.localStorage.setItem(this.keys.defaultLocale,String(this.db.defaultLocale))}static get getInstance(){return this.instance||(this.instance=new a,console.log("miniState",this.instance.db.miniState),this.instance.setAllLocalstorageFromStore()),this.instance}}}},t={};function o(r){var a=t[r];if(void 0!==a)return a.exports;var n=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.loaded=!0,n.exports}o.m=e,(()=>{var e=[];o.O=(t,r,a,n)=>{if(!r){var i=1/0;for(d=0;d<e.length;d++){for(var[r,a,n]=e[d],l=!0,s=0;s<r.length;s++)(!1&n||i>=n)&&Object.keys(o.O).every((e=>o.O[e](r[s])))?r.splice(s--,1):(l=!1,n<i&&(i=n));if(l){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[r,a,n]}})(),(()=>{o.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return o.d(t,{a:t}),t}})(),(()=>{o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,r)=>(o.f[r](e,t),t)),[]))})(),(()=>{o.u=e=>"js/"+e+"."+{822:"632a8111",904:"d42dc37a",932:"cb2c1a05",989:"05676f75",999:"bf55f92e"}[e]+".js"})(),(()=>{o.miniCssF=e=>"css/"+({143:"app",736:"vendor"}[e]||e)+"."+{143:"31d6cfe0",736:"b3361e1c",822:"c4f28482",904:"08c3d49b",932:"3374b95d"}[e]+".css"})(),(()=>{o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="mimica:";o.l=(r,a,n,i)=>{if(e[r])e[r].push(a);else{var l,s;if(void 0!==n)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==r||u.getAttribute("data-webpack")==t+n){l=u;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.setAttribute("data-webpack",t+n),l.src=r),e[r]=[a];var f=(t,o)=>{l.onerror=l.onload=null,clearTimeout(h);var a=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((e=>e(o))),t)return t(o)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),(()=>{o.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{o.p=""})(),(()=>{var e=(e,t,o,r)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var n=n=>{if(a.onerror=a.onload=null,"load"===n.type)o();else{var i=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,a.parentNode.removeChild(a),r(s)}};return a.onerror=a.onload=n,a.href=t,document.head.appendChild(a),a},t=(e,t)=>{for(var o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var a=o[r],n=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(n===e||n===t))return a}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){a=i[r],n=a.getAttribute("data-href");if(n===e||n===t)return a}},r=r=>new Promise(((a,n)=>{var i=o.miniCssF(r),l=o.p+i;if(t(i,l))return a();e(r,l,a,n)})),a={143:0};o.f.miniCss=(e,t)=>{var o={822:1,904:1,932:1};a[e]?t.push(a[e]):0!==a[e]&&o[e]&&t.push(a[e]=r(e).then((()=>{a[e]=0}),(t=>{throw delete a[e],t})))}})(),(()=>{var e={143:0};o.f.j=(t,r)=>{var a=o.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var n=new Promise(((o,r)=>a=e[t]=[o,r]));r.push(a[2]=n);var i=o.p+o.u(t),l=new Error,s=r=>{if(o.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var n=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",l.name="ChunkLoadError",l.type=n,l.request=i,a[1](l)}};o.l(i,s,"chunk-"+t,t)}},o.O.j=t=>0===e[t];var t=(t,r)=>{var a,n,[i,l,s]=r,c=0;if(i.some((t=>0!==e[t]))){for(a in l)o.o(l,a)&&(o.m[a]=l[a]);if(s)var d=s(o)}for(t&&t(r);c<i.length;c++)n=i[c],o.o(e,n)&&e[n]&&e[n][0](),e[i[c]]=0;return o.O(d)},r=self["webpackChunkmimica"]=self["webpackChunkmimica"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=o.O(void 0,[736],(()=>o(1619)));r=o.O(r)})();