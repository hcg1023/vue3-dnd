import{_ as u,d as _,u as h,o as p,c as i,t as v,e as c,n as y,f as x,b as l,a as n}from"../app.e83eb941.js";import{t as f}from"./index.444fde16.js";const m={BOX:"box"};const g=_({props:{showCopyIcon:{type:Boolean}},setup(o){const t=o,[s,a]=h(()=>({type:m.BOX,options:{dropEffect:t.showCopyIcon?"copy":"move"},collect:r=>({opacity:r.isDragging()?.4:1})})),{opacity:e}=f(s);return(r,w)=>(p(),i("div",{ref:c(a),class:"source-box",style:y({opacity:c(e)})}," When I am over a drop zone, I have "+v(o.showCopyIcon?"copy":"no")+" icon. ",5))}});var d=u(g,[["__scopeId","data-v-7eb70521"]]);const B=_({setup(o){const[t,s]=x(()=>({accept:m.BOX,collect:e=>({isActive:e.canDrop()&&e.isOver()})})),{isActive:a}=f(t);return(e,r)=>(p(),i("div",{ref:c(s),class:"target-box"},v(c(a)?"Release to drop":"Drag item here"),513))}});var I=u(B,[["__scopeId","data-v-7da822e6"]]);const b={style:{float:"left"}},D={style:{float:"left"}},S=_({setup(o){return(t,s)=>(p(),i("div",{style:y({overflow:"hidden",clear:"both",marginTop:"1.5rem"})},[l("div",b,[n(d,{"show-copy-icon":""}),n(d)]),l("div",D,[n(I)])],4))}});export{S as _};
