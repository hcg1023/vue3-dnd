import{d as p,x as m,f as w,k as v,e as s,o as n,c as d,j as S,t as y,z as N,b as l,A as T,n as h,_ as V,u as $,a as r,B as a}from"../app.84d2bec0.js";import{t as z}from"./index.16dc7ab6.js";const x={BOX:"box"},X=l("br",null,null,-1),A={key:0},o=p({props:{greedy:{type:Boolean}},setup(c){const t=c;function i(e){return{border:"1px solid rgba(0,0,0,0.2)",minHeight:"8rem",minWidth:"8rem",color:"white",backgroundColor:e,padding:"2rem",paddingTop:"1rem",margin:"1rem",textAlign:"center",float:"left",fontSize:"1rem"}}const u=m(!1),_=m(!1),[b,B]=w(()=>({accept:x.BOX,drop(e,f){const g=f.didDrop();g&&!t.greedy||(u.value=!0,_.value=g)},collect:e=>({isOver:e.isOver(),isOverCurrent:e.isOver({shallow:!0})})})),{isOver:O,isOverCurrent:C}=z(b),k=v(()=>t.greedy?"greedy":"not greedy"),D=v(()=>{let e="rgba(0, 0, 0, .5)";return(s(C)||s(O)&&t.greedy)&&(e="darkgreen"),e});return(e,f)=>(n(),d("div",{ref:s(B),style:h(i(s(D)))},[S(y(s(k))+" ",1),X,u.value?(n(),d("span",A,"dropped "+y(_.value?" on child":""),1)):N("",!0),l("div",null,[T(e.$slots,"default")])],4))}});const I=p({setup(c){const[,t]=$(()=>({type:x.BOX}));return(i,u)=>(n(),d("div",{ref:s(t),class:"box"},"Drag me",512))}});var j=V(I,[["__scopeId","data-v-063da431"]]);const E={style:{overflow:"hidden",clear:"both",margin:"-1rem"}},W=p({setup(c){return(t,i)=>(n(),d("div",null,[l("div",E,[r(o,{greedy:""},{default:a(()=>[r(o,{greedy:""},{default:a(()=>[r(o,{greedy:""})]),_:1})]),_:1}),r(o,null,{default:a(()=>[r(o,null,{default:a(()=>[r(o)]),_:1})]),_:1})]),l("div",{style:h({overflow:"hidden",clear:"both",marginTop:"1.5rem"})},[r(j)],4)]))}});export{W as _};