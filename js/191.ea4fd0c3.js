"use strict";(self["webpackChunkmimica"]=self["webpackChunkmimica"]||[]).push([[191],{6191:(t,e,n)=>{n.r(e),n.d(e,{default:()=>Z});n(7070);var i=n(3673),r=n(2323);const o=(0,i._)("div",{class:"text-h4"},[(0,i.Uk)("MEditor"),(0,i._)("div",{class:"text-caption",style:{"margin-left":"10px",display:"inline-block"}},":WIP:0.10;")],-1),s={border:"1"},l={class:"tr-sound"},d=["innerHTML"],a=(0,i._)("td",{class:"tr-sound font-geneikoburi"},"@音響/#演出",-1),u=["innerHTML"],c=(0,i._)("td",{class:"tr-serifu font-geneikoburi"},"セリフ",-1),g=(0,i.Uk)("保存します"),v=(0,i._)("div",{class:"text-h5"},"デバッグエリア",-1);function p(t,e,n,p,m,b){const f=(0,i.up)("q-input"),w=(0,i.up)("q-separator"),x=(0,i.up)("q-tooltip"),h=(0,i.up)("q-btn"),k=(0,i.up)("q-toolbar"),S=(0,i.up)("q-card"),_=(0,i.up)("q-page");return(0,i.wg)(),(0,i.j4)(_,{padding:""},{default:(0,i.w5)((()=>[o,(0,i._)("table",s,[(0,i._)("tr",l,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.reverse(t.dialogue),(t=>((0,i.wg)(),(0,i.iD)("td",{class:"tr-sound font-geneikoburi",key:t,innerHTML:t.sound},null,8,d)))),128)),a]),(0,i._)("tr",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.reverse(t.dialogue),(t=>((0,i.wg)(),(0,i.iD)("td",{class:"tr-serifu font-geneikoburi",key:t,innerHTML:t.text},null,8,u)))),128)),c])]),(0,i.Wm)(S,{flat:"",bordered:""},{default:(0,i.w5)((()=>[(0,i.Wm)(f,{type:"textarea",modelValue:t.useEditoreStore().db.text,"onUpdate:modelValue":e[0]||(e[0]=e=>t.useEditoreStore().db.text=e)},null,8,["modelValue"]),(0,i.Wm)(w),(0,i.Wm)(k,null,{default:(0,i.w5)((()=>[(0,i.Wm)(h,{flat:"",round:"",dense:"",icon:"save",class:"q-mr-xs",onClick:e[1]||(e[1]=e=>t.useEditoreStore().commitEditorStore())},{default:(0,i.w5)((()=>[(0,i.Wm)(x,null,{default:(0,i.w5)((()=>[g])),_:1})])),_:1})])),_:1})])),_:1}),(0,i._)("div",null,[v,(0,i.Wm)(S,{textContent:(0,r.zw)(t.useEditoreStore().db.text)},null,8,["textContent"])])])),_:1})}var m=n(1959);class b{constructor(){var t,e;this.keys={text:"Text",setting:"Setting"},this.db=(0,m.qj)({text:String(null!==(t=window.localStorage.getItem(this.keys.text))&&void 0!==t?t:"<div>@音響指示は＠を使います</div><div>#演出は#を使います</div><div>こんにちは</div><div>これはテストです。</div><div>サンプルです。</div><div><br></div><div>一行空けることで列を追加できます。</div><div>空けないとこのように改行されます。</div>"),setting:String(null!==(e=window.localStorage.getItem(this.keys.setting))&&void 0!==e?e:"")})}toBoolean(t){return"true"===t.toLowerCase()}commitEditorStore(){window.localStorage.setItem(this.keys.text,this.db.text)}static get getInstance(){return this.instance||(this.instance=new b),this.instance}}function f(){return b.getInstance}const w=(0,i.aZ)({setup(){const t=(0,m.Fl)((()=>f().db.text.replace(/div/g,"td").replace(/<br>/g,""))),e=(0,m.Fl)((()=>f().db.text.split("\n\n").map((t=>{let e=t.split("\n"),n=[],i=[];return e.forEach((t=>{"#"==t[0]||"＃"==t[0]||"@"==t[0]||"＠"==t[0]?n.push(t):i.push(t)})),{sound:n.join("<br/>"),text:i.join("<br/>"),raw:t}}))));function n(t){if(0===t.length)return t;var e=t.slice();return e.reverse()}return{useEditoreStore:f,result:t,dialogue:e,reverse:n}}});var x=n(4379),h=n(151),k=n(4842),S=n(5869),_=n(9570),q=n(8240),y=n(8870),E=n(7518),W=n.n(E);w.render=p;const Z=w;W()(w,"components",{QPage:x.Z,QCard:h.Z,QInput:k.Z,QSeparator:S.Z,QToolbar:_.Z,QBtn:q.Z,QTooltip:y.Z})}}]);