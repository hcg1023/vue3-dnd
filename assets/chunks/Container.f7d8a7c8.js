import{_ as B,d as C,x as y,f as A,u as O,k as S,e as p,o as c,c as x,t as E,n as F,F as M,q as T,s as b}from"../app.e83eb941.js";import{t as g}from"./index.444fde16.js";const h={CARD:"card"};const w=["data-handler-id"],W=C({props:{id:null,text:null,index:null,moveCard:null},setup(d){const e=d,r=y(),[o,a]=A({accept:h.CARD,collect(t){return{handlerId:t.getHandlerId()}},hover(t,_){var f;if(!r.value)return;const i=t.index,s=e.index;if(i===s)return;const u=(f=r.value)==null?void 0:f.getBoundingClientRect(),m=(u.bottom-u.top)/2,v=_.getClientOffset().y-u.top;i<s&&v<m||i>s&&v>m||(e.moveCard(i,s),t.index=s)}}),[n,l]=O({type:h.CARD,item:()=>({id:e.id,index:e.index}),collect:t=>({isDragging:t.isDragging()})}),{handlerId:D}=g(o),{isDragging:R}=g(n),I=S(()=>p(R)?0:1),k=t=>{r.value=l(a(t))};return(t,_)=>(c(),x("div",{ref:k,class:"card",style:F({opacity:p(I)}),"data-handler-id":p(D)},E(d.text),13,w))}});var Y=B(W,[["__scopeId","data-v-72683321"]]);const $={style:{width:"400px"}},J=C({setup(d){const e=y([{id:1,text:"Write a cool JS library"},{id:2,text:"Make it generic enough"},{id:3,text:"Write README"},{id:4,text:"Create some examples"},{id:5,text:"Spam in Twitter and IRC to promote it (note that this element is taller than the others)"},{id:6,text:"???"},{id:7,text:"PROFIT"}]),r=(o,a)=>{const n=e.value[o];e.value.splice(o,1),e.value.splice(a,0,n)};return(o,a)=>(c(),x("div",$,[(c(!0),x(M,null,T(e.value,(n,l)=>(c(),b(Y,{id:n.id,key:n.id,text:n.text,index:l,"move-card":r},null,8,["id","text","index"]))),128))]))}});export{J as _};
