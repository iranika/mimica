"use strict";(self["webpackChunkmimica"]=self["webpackChunkmimica"]||[]).push([[342],{3342:(e,t,l)=>{l.r(t),l.d(t,{default:()=>v});var n=l(3673),a=l(2323);const u=e=>((0,n.dD)("data-v-3705c599"),e=e(),(0,n.Cn)(),e),r=u((()=>(0,n._)("div",{class:"text-h4",style:{margin:"10px auto 10px auto"}},"KC",-1))),o=u((()=>(0,n._)("div",null," 某氏のために作った突貫のテキスト整形アプリです。 ",-1))),c=u((()=>(0,n._)("div",null,"これをコピーして貼り付けてみて",-1))),d={border:"1"};function s(e,t,l,u,s,p){const m=(0,n.up)("q-card-section"),i=(0,n.up)("q-input"),f=(0,n.up)("q-card"),w=(0,n.up)("q-page");return(0,n.wg)(),(0,n.j4)(w,{class:"flex flex-center"},{default:(0,n.w5)((()=>[(0,n.Wm)(f,{class:"bookmarklet-card",flat:""},{default:(0,n.w5)((()=>[(0,n.Wm)(m,{style:{}},{default:(0,n.w5)((()=>[r,o])),_:1}),(0,n.Wm)(m,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i,{type:"textarea",label:"ここにテキストを貼る",modelValue:e.text,"onUpdate:modelValue":t[0]||(t[0]=t=>e.text=t)},null,8,["modelValue"])])),_:1}),(0,n.Wm)(m,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i,{type:"textarea",label:"ここは整形後のテキスト(デバッグ用)",modelValue:e.result,"onUpdate:modelValue":t[1]||(t[1]=t=>e.result=t)},null,8,["modelValue"])])),_:1}),(0,n.Wm)(m,null,{default:(0,n.w5)((()=>[c,(0,n._)("table",d,[(0,n._)("tr",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.result.split("\n"),(e=>((0,n.wg)(),(0,n.iD)("td",{key:e,class:"tatenoko"},(0,a.zw)(e),1)))),128))])])])),_:1})])),_:1})])),_:1})}var p=l(1959);const m="\n(演出A)\n\n【ディレクションA】\n\nセリフセリフセリフA\n\n(演出A)\n\n\nセリフセリフセリフB\n\n【ディレクション】\n\nセリフセリフセリフC\n\nセリフセリフセリフD\n\n\n",i=(0,n.aZ)({name:"Bookmarklet",components:{},setup(){const e=(0,p.iH)(m);function t(e){navigator.clipboard.writeText(e).then((()=>{alert("クリップボードにコピーしました")}))}const l=(0,p.Fl)((()=>e.value.replace(/\(.+\)\n/g,"").replace(/【.+】\n/g,"").replace(/\n{2,}/g,"\n").trim()));return{copy:t,text:e,result:l}}});var f=l(4379),w=l(151),_=l(5589),x=l(4842),g=l(7518),k=l.n(g);i.render=s,i.__scopeId="data-v-3705c599";const v=i;k()(i,"components",{QPage:f.Z,QCard:w.Z,QCardSection:_.Z,QInput:x.Z})}}]);