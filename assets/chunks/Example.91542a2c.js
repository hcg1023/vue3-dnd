import{_ as h,d as g,k as I,o as p,c as _,t as $,n as D,e as s,u as S,l as T,m as O,a as y,p as M,f as X,F as A,q as L,s as b,v as P,w as W,x,y as F,b as c,z as N}from"../app.32a3f66d.js";import{t as w}from"./index.f406b62b.js";const B={BOX:"box"};const V=["role"],z=g({props:{title:null,yellow:{type:Boolean},preview:{type:Boolean}},setup(n){const e=n,t=I(()=>e.yellow?"yellow":"white");return(a,u)=>(p(),_("div",{class:"box",style:D({backgroundColor:s(t)}),role:n.preview?"BoxPreview":"Box"},$(n.title),13,V))}});var k=h(z,[["__scopeId","data-v-66657dc4"]]);const E=g({props:{id:null,title:null,left:null,top:null},setup(n){const e=n,[t,a,u]=S(()=>({type:B.BOX,item:e,collect:l=>({isDragging:l.isDragging()})}));T(()=>{u(O(),{captureDraggingState:!0})});const{isDragging:r}=w(t);return(l,i)=>(p(),_("div",{ref:s(a),style:D({position:"absolute",transform:`translate3d(${n.left}px, ${n.top}px, 0)`,opacity:s(r)?0:1,height:s(r)?0:""}),role:"DraggableBox"},[y(k,{title:n.title},null,8,["title"])],4))}});function C(n,e){const t=Math.round(n/32)*32,a=Math.round(e/32)*32;return[t,a]}const j=g({props:{snapToGrid:{type:Boolean}},setup(n){const e=n,t=M({a:{top:20,left:80,title:"Drag me around"},b:{top:180,left:20,title:"Drag me too"}}),a=(r,l,i)=>{Object.assign(t[r],{left:l,top:i})},[,u]=X(()=>({accept:B.BOX,drop(r,l){const i=l.getDifferenceFromInitialOffset();let d=Math.round(r.left+i.x),o=Math.round(r.top+i.y);e.snapToGrid&&([d,o]=C(d,o)),a(r.id,d,o)}}));return(r,l)=>(p(),_("div",{ref:s(u),class:"container"},[(p(!0),_(A,null,L(s(t),(i,d)=>(p(),b(E,P({id:d,key:d},i),null,16,["id"]))),128))],512))}});var q=h(j,[["__scopeId","data-v-6e7dfca1"]]);const R={class:"box-drag-preview"},U=g({props:{title:null},setup(n){T(()=>{const t=setInterval(()=>e.value=!e.value,500);W(()=>{clearInterval(t)})});const e=x(!1);return(t,a)=>(p(),_("div",R,[y(k,{title:n.title,yellow:e.value,preview:""},null,8,["title","yellow"])]))}});var Y=h(U,[["__scopeId","data-v-3563bfe4"]]);const H={class:"layer"},J=g({props:{snapToGrid:{type:Boolean}},setup(n){const e=n;function t(o,m,G){if(!o||!m)return{display:"none"};let{x:v,y:f}=m;return G&&(v-=o.x,f-=o.y,[v,f]=C(v,f),v+=o.x,f+=o.y),{transform:`translate(${v}px, ${f}px)`}}const a=F(o=>({item:o.getItem(),itemType:o.getItemType(),initialOffset:o.getInitialSourceClientOffset(),currentOffset:o.getSourceClientOffset(),isDragging:o.isDragging()})),{itemType:u,isDragging:r,item:l,initialOffset:i,currentOffset:d}=w(a);return(o,m)=>(p(),_("div",H,[c("div",{style:D(t(s(i),s(d),e.snapToGrid))},[s(u)===s(B).BOX?(p(),b(Y,{key:0,title:s(l).title},null,8,["title"])):N("",!0)],4)]))}});var K=h(J,[["__scopeId","data-v-27dc481a"]]);const Q={for:"snapToGridWhileDragging"},Z=["checked"],ee=c("small",null,"Snap to grid while dragging",-1),te=c("br",null,null,-1),ne={for:"snapToGridAfterDrop"},oe=["checked"],ae=c("small",null,"Snap to grid after drop",-1),ie=g({setup(n){const e=x(!1),t=x(!1),a=()=>{e.value=!e.value},u=()=>{t.value=!t.value};return(r,l)=>(p(),_("div",null,[y(q,{"snap-to-grid":e.value},null,8,["snap-to-grid"]),y(K,{"snap-to-grid":t.value},null,8,["snap-to-grid"]),c("p",null,[c("label",Q,[c("input",{id:"snapToGridWhileDragging",type:"checkbox",checked:t.value,onChange:u},null,40,Z),ee]),te,c("label",ne,[c("input",{id:"snapToGridAfterDrop",type:"checkbox",checked:e.value,onChange:a},null,40,oe),ae])])]))}});export{ie as _};