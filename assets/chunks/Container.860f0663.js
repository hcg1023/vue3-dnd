var C=Object.defineProperty,O=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var b=(o,e,t)=>e in o?C(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,g=(o,e)=>{for(var t in e||(e={}))N.call(e,t)&&b(o,t,e[t]);if(_)for(var t of _(e))S.call(e,t)&&b(o,t,e[t]);return o},h=(o,e)=>O(o,R(e));import{d as w,f as V,k,e as r,o as D,c as v,j as E,t as u,n as x,b as d,u as X,x as z,a as l}from"../app.acaf07a8.js";import{t as $}from"./index.a50ef22d.js";const B={BOX:"box"},T=d("br",null,null,-1),Y=d("br",null,null,-1),m=w({props:{allowedDropEffect:null},setup(o){const e=o,t={height:"12rem",width:"12rem",marginRight:"1.5rem",marginBottom:"1.5rem",color:"white",padding:"1rem",textAlign:"center",fontSize:"1rem",lineHeight:"normal",float:"left"},[i,p]=V(()=>({accept:B.BOX,drop:()=>({name:`${e.allowedDropEffect} Dustbin`,allowedDropEffect:e.allowedDropEffect}),collect:n=>({isOver:n.isOver(),canDrop:n.canDrop()})})),{canDrop:f,isOver:c}=$(i),s=k(()=>r(f)&&r(c)),a=k(()=>r(s)?"darkgreen":r(f)?"darkkhaki":"#222");return(n,A)=>(D(),v("div",{ref:r(p),role:"Dustbin",style:x(h(g({},t),{backgroundColor:r(a)}))},[E(" Works with "+u(o.allowedDropEffect)+" drop effect ",1),T,Y,E(" "+u(r(s)?"Release to drop":"Drag a box here"),1)],4))}}),y=w({props:{name:null},setup(o){const e=o,t={border:"1px dashed gray",backgroundColor:"white",padding:"0.5rem 1rem",marginRight:"1.5rem",marginBottom:"1.5rem",float:"left"},[i,p]=X(()=>({type:B.BOX,item:{name:e.name},end(c,s){const a=s.getDropResult();if(c&&a){let n="";a.allowedDropEffect==="any"||a.allowedDropEffect===a.dropEffect?n=`You ${a.dropEffect==="copy"?"copied":"moved"} ${c.name} into ${a.name}!`:n=`You cannot ${a.dropEffect} an item into the ${a.name}`,alert(n)}},collect:c=>({opacity:c.isDragging()?.4:1})})),{opacity:f}=$(i);return(c,s)=>(D(),v("div",{ref:r(p),style:x(h(g({},t),{opacity:r(f)}))},u(o.name),5))}}),j={style:{overflow:"hidden",clear:"both"}},G={style:{overflow:"hidden",clear:"both"}},q=w({setup(o){const e=z("copy"),t=()=>{switch(r(e)){case"any":e.value="copy";break;case"copy":e.value="move";break;case"move":e.value="any";break}};return(i,p)=>(D(),v("div",null,[d("div",j,[l(m,{"allowed-drop-effect":"any"}),l(m,{"allowed-drop-effect":"copy"}),l(m,{"allowed-drop-effect":"move"}),l(m,{"allowed-drop-effect":e.value},null,8,["allowed-drop-effect"]),d("button",{onClick:t}," current "+u(e.value),1)]),d("div",G,[l(y,{name:"Glass"}),l(y,{name:"Banana"}),l(y,{name:"Paper"})])]))}});export{q as _};