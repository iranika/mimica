"use strict";(self["webpackChunkmimica"]=self["webpackChunkmimica"]||[]).push([[162],{3162:(e,t,i)=>{i.r(t),i.d(t,{default:()=>T});i(7070);var n=i(3673),r=i(2323);const s=(0,n._)("div",{class:"text-h4"},[(0,n.Uk)("MEditor"),(0,n._)("div",{class:"text-caption",style:{"margin-left":"10px",display:"inline-block"}},":WIP:0.10;")],-1),o={border:"1"},l={class:"tr-sound"},d=["innerHTML"],a=(0,n._)("td",{class:"tr-sound font-geneikoburi"},"@音響/#演出",-1),u=["innerHTML"],c=(0,n._)("td",{class:"tr-serifu font-geneikoburi"},"セリフ",-1),v=(0,n._)("div",{class:"text-h5"},"デバッグエリア",-1);function g(e,t,i,g,x,b){const h=(0,n.up)("q-editor"),m=(0,n.up)("q-card"),p=(0,n.up)("q-page");return(0,n.wg)(),(0,n.j4)(p,{padding:""},{default:(0,n.w5)((()=>[s,(0,n._)("table",o,[(0,n._)("tr",l,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.reverse(e.dialogue),(e=>((0,n.wg)(),(0,n.iD)("td",{class:"tr-sound font-geneikoburi",key:e,innerHTML:e.sound},null,8,d)))),128)),a]),(0,n._)("tr",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.reverse(e.dialogue),(e=>((0,n.wg)(),(0,n.iD)("td",{class:"tr-serifu font-geneikoburi",key:e,innerHTML:e.text},null,8,u)))),128)),c])]),(0,n.Wm)(h,{modelValue:e.useEditoreStore().db.text,"onUpdate:modelValue":t[0]||(t[0]=t=>e.useEditoreStore().db.text=t),"min-height":"5rem",definitions:{save:{tip:"保存します",icon:"save",label:"保存",handler:e.useEditoreStore().commitEditorStore()}},toolbar:[["left","center","right","justify"],["bold","italic","strike","underline"],["save"]]},null,8,["modelValue","definitions"]),(0,n._)("div",null,[v,(0,n.Wm)(m,{textContent:(0,r.zw)(e.useEditoreStore().db.text)},null,8,["textContent"])])])),_:1})}var x=i(1959);class b{constructor(){var e,t;this.keys={text:"Text",setting:"Setting"},this.db=(0,x.qj)({text:String(null!==(e=window.localStorage.getItem(this.keys.text))&&void 0!==e?e:"<div>@音響指示は＠を使います</div><div>#演出は#を使います</div><div>こんにちは</div><div>これはテストです。</div><div>サンプルです。</div><div><br></div><div>一行空けることで列を追加できます。</div><div>空けないとこのように改行されます。</div>"),setting:String(null!==(t=window.localStorage.getItem(this.keys.setting))&&void 0!==t?t:"")})}toBoolean(e){return"true"===e.toLowerCase()}commitEditorStore(){window.localStorage.setItem(this.keys.text,this.db.text)}static get getInstance(){return this.instance||(this.instance=new b),this.instance}}function h(){return b.getInstance}const m=(0,n.aZ)({setup(){const e=(0,x.Fl)((()=>h().db.text.replace(/div/g,"td").replace(/<br>/g,""))),t=(0,x.Fl)((()=>h().db.text.split("<br>").map((e=>{let t=(new DOMParser).parseFromString(e,"text/html");var i=[];let n=[];return t.querySelectorAll("div").forEach((e=>{"#"==e.innerText[0]||"＃"==e.innerText[0]||"@"==e.innerText[0]||"＠"==e.innerText[0]?i.push(e.innerText):n.push(e.innerText)})),{sound:i.join("<br>"),text:n.join("<br>"),raw:e}}))));function i(e){if(0===e.length)return e;var t=e.slice();return t.reverse()}return{useEditoreStore:h,result:e,dialogue:t,reverse:i}}});var p=i(4379),f=i(4592),w=i(151),k=i(7518),S=i.n(k);m.render=g;const T=m;S()(m,"components",{QPage:p.Z,QEditor:f.Z,QCard:w.Z})}}]);