import{_ as m,d as p,f,k as v,e as a,o as c,c as n,t as i,N as g,x,a as d,F as D,b as y}from"../app.e83eb941.js";import{t as T}from"./index.444fde16.js";const k=p({props:{onDrop:null},setup(t){const e=t,[r,o]=f(()=>({accept:[g],drop(s){var l;(l=e.onDrop)==null||l.call(e,s)},collect:s=>({isOver:s.isOver(),canDrop:s.canDrop()})})),{canDrop:_,isOver:u}=T(r),h=v(()=>a(_)&&a(u));return(s,l)=>(c(),n("div",{ref:a(o),class:"target-box"},i(a(h)?"Release to drop":"Drag HTML here"),513))}});var B=m(k,[["__scopeId","data-v-d33c7b5a"]]);const b={key:0},H={key:1},L=p({props:{html:null},setup(t){return(e,r)=>t.html.length?(c(),n("div",b,i(t.html),1)):(c(),n("div",H,"Nothing to display"))}}),M=y("iframe",{srcdoc:"<img src='https://react-dnd.github.io/react-dnd/favicon-32x32.png' />"},null,-1),$=p({setup(t){const e=x(""),r=o=>{o&&(e.value=o.html)};return(o,_)=>(c(),n(D,null,[M,d(B,{"on-drop":r}),d(L,{html:e.value},null,8,["html"])],64))}});export{$ as _};
