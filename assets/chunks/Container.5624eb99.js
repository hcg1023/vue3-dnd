import{d as n,u as m,o as p,c as i,t as u,e as c,n as h,_ as v,f as x,b as l,a as _}from"../app.2848e89b.js";import{t as y}from"./index.b2c5a59d.js";const f={BOX:"box"};const g=n({__name:"SourceBox",props:{showCopyIcon:{type:Boolean}},setup(a){const o=a,[t,r]=m(()=>({type:f.BOX,options:{dropEffect:o.showCopyIcon?"copy":"move"},collect:s=>({opacity:s.isDragging()?.4:1})})),{opacity:e}=y(t);return(s,C)=>(p(),i("div",{ref:c(r),class:"source-box",style:h({opacity:c(e)})}," When I am over a drop zone, I have "+u(s.showCopyIcon?"copy":"no")+" icon. ",5))}});var d=v(g,[["__scopeId","data-v-7eb70521"]]);const B=n({__name:"TargetBox",setup(a){const[o,t]=x(()=>({accept:f.BOX,collect:e=>({isActive:e.canDrop()&&e.isOver()})})),{isActive:r}=y(o);return(e,s)=>(p(),i("div",{ref:c(t),class:"target-box"},u(c(r)?"Release to drop":"Drag item here"),513))}});var I=v(B,[["__scopeId","data-v-7da822e6"]]);const b={style:{overflow:"hidden",clear:"both",marginTop:"1.5rem"}},D={style:{float:"left"}},w={style:{float:"left"}},O=n({__name:"Container",setup(a){return(o,t)=>(p(),i("div",b,[l("div",D,[_(d,{"show-copy-icon":""}),_(d)]),l("div",w,[_(I)])]))}});export{O as _};