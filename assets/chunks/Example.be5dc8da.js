import{_,d as p,u as h,e as l,o as n,c as d,A as x,n as v,p as m,f as D,F as b,q as y,s as B,B as O,j as S,t as k,x as C,a as $,b as u}from"../app.acaf07a8.js";import{t as I}from"./index.a50ef22d.js";const g={BOX:"box"};const F=p({props:{id:null,left:null,top:null,hideSourceOnDrag:{type:Boolean}},setup(a){const e=a,[s,c]=h(()=>({type:g.BOX,item:{id:e.id,left:e.left,top:e.top},collect:r=>({isDragging:r.isDragging()})})),{isDragging:t}=I(s);return(r,o)=>l(t)&&a.hideSourceOnDrag?(n(),d("div",{key:0,ref:l(c)},null,512)):(n(),d("div",{key:1,ref:l(c),class:"box",style:v({left:`${a.left}px`,top:`${a.top}px`}),role:"Box","data-testid":"box"},[x(r.$slots,"default",{},void 0,!0)],4))}});var N=_(F,[["__scopeId","data-v-3b7dbb9f"]]);const V=p({props:{hideSourceOnDrag:{type:Boolean}},setup(a){const e=m({a:{top:20,left:80,title:"Drag me around"},b:{top:180,left:20,title:"Drag me too"}}),s=(t,r,o)=>{Object.assign(e[t],{left:r,top:o})},[,c]=D(()=>({accept:g.BOX,drop(t,r){const o=r.getDifferenceFromInitialOffset(),i=Math.round(t.left+o.x),f=Math.round(t.top+o.y);s(t.id,i,f)}}));return(t,r)=>(n(),d("div",{ref:l(c),class:"container"},[(n(!0),d(b,null,y(l(e),(o,i)=>(n(),B(N,{id:i,key:i,left:o.left,top:o.top,"hide-source-on-drag":a.hideSourceOnDrag},{default:O(()=>[S(k(o.title),1)]),_:2},1032,["id","left","top","hide-source-on-drag"]))),128))],512))}});var X=_(V,[["__scopeId","data-v-eab54136"]]);const j={for:"hideSourceOnDrag"},w=["checked"],M=u("small",null,"Hide the source item while dragging",-1),z=p({setup(a){const e=C(!0),s=()=>e.value=!e.value;return(c,t)=>(n(),d("div",null,[$(X,{"hide-source-on-drag":e.value},null,8,["hide-source-on-drag"]),u("p",null,[u("label",j,[u("input",{id:"hideSourceOnDrag",type:"checkbox",role:"checkbox",checked:e.value,onChange:s},null,40,w),M])])]))}});export{z as _};