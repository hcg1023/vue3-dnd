import{d as _,f as v,k as g,o as r,c as n,t as c,e as p,_ as h,L as D,F as d,q as y,x,a as u}from"../app.c80053fd.js";import{t as F}from"./index.cc6a3336.js";const k=_({__name:"TargetBox",props:{onDrop:{type:Function}},setup(l){const o=l,[a,s]=v(()=>({accept:[D],drop(e){var t;(t=o.onDrop)==null||t.call(o,e)},canDrop(e){return console.log("canDrop",e.files,e.items),!0},hover(e){console.log("hover",e.files,e.items)},collect:e=>{const t=e.getItem();return t&&console.log("collect",t.files,t.items),{isOver:e.isOver(),canDrop:e.canDrop()}}})),{canDrop:i,isOver:f}=F(a),m=g(()=>p(i)&&p(f));return(e,t)=>(r(),n("div",{ref:p(s),class:"target-box"},c(m.value?"Release to drop":"Drag file here"),513))}});var B=h(k,[["__scopeId","data-v-e9d14e62"]]);const L={key:0},I={key:1},O=_({__name:"FileList",props:{files:{}},setup(l){return(o,a)=>o.files.length?(r(),n("ul",L,[(r(!0),n(d,null,y(o.files,s=>(r(),n("li",{key:s.name},c(s.name)+" of size "+c(s.size)+" and type "+c(s.type),1))),128))])):(r(),n("div",I,"Nothing to display"))}}),C=_({__name:"Container",setup(l){const o=x([]),a=s=>{s&&(o.value=s.files)};return(s,i)=>(r(),n(d,null,[u(B,{"on-drop":a}),u(O,{files:o.value},null,8,["files"])],64))}});export{C as _};