import{d as u,x as g,f as k,k as v,o as d,c as l,j as w,t as y,z as S,b as c,A as $,e as n,n as N,u as T,_ as V,a as r,B as s}from"../app.3f294c87.js";import{t as z}from"./index.7659ba2e.js";const h={BOX:"box"},X=c("br",null,null,-1),A={key:0},t=u({__name:"Dustbin",props:{greedy:{type:Boolean}},setup(i){function a(e){return{border:"1px solid rgba(0,0,0,0.2)",minHeight:"8rem",minWidth:"8rem",color:"white",backgroundColor:e,padding:"2rem",paddingTop:"1rem",margin:"1rem",textAlign:"center",float:"left",fontSize:"1rem"}}const o=i,_=g(!1),p=g(!1),[x,b]=k(()=>({accept:h.BOX,drop(e,m){const f=m.didDrop();f&&!o.greedy||(_.value=!0,p.value=f)},collect:e=>({isOver:e.isOver(),isOverCurrent:e.isOver({shallow:!0})})})),{isOver:B,isOverCurrent:C}=z(x),O=v(()=>o.greedy?"greedy":"not greedy"),D=v(()=>{let e="rgba(0, 0, 0, .5)";return(n(C)||n(B)&&o.greedy)&&(e="darkgreen"),e});return(e,m)=>(d(),l("div",{ref:n(b),style:N(a(D.value))},[w(y(O.value)+" ",1),X,_.value?(d(),l("span",A,"dropped "+y(p.value?" on child":""),1)):S("",!0),c("div",null,[$(e.$slots,"default")])],4))}});const I=u({__name:"Box",setup(i){const[,a]=T(()=>({type:h.BOX}));return(o,_)=>(d(),l("div",{ref:n(a),class:"box"},"Drag me",512))}});var j=V(I,[["__scopeId","data-v-063da431"]]);const E={style:{overflow:"hidden",clear:"both",margin:"-1rem"}},H={style:{overflow:"hidden",clear:"both",marginTop:"1.5rem"}},q=u({__name:"Container",setup(i){return(a,o)=>(d(),l("div",null,[c("div",E,[r(t,{greedy:""},{default:s(()=>[r(t,{greedy:""},{default:s(()=>[r(t,{greedy:""})]),_:1})]),_:1}),r(t,null,{default:s(()=>[r(t,null,{default:s(()=>[r(t)]),_:1})]),_:1})]),c("div",H,[r(j)])]))}});export{q as _};
