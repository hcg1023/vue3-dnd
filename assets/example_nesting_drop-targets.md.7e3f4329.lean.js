import{d as p,w as f,f as B,k as h,e as o,o as n,c as d,b as S,t as v,y as V,a,z as w,n as y,_ as N,u as $,g as r,A as i,M as A}from"./app.659e5859.js";import{t as I}from"./chunks/index.d5b3e1f5.js";const b={BOX:"box"},z=a("br",null,null,-1),P={key:0},s=p({props:{greedy:{type:Boolean}},setup(c){const t=c;function l(e){return{border:"1px solid rgba(0,0,0,0.2)",minHeight:"8rem",minWidth:"8rem",color:"white",backgroundColor:e,padding:"2rem",paddingTop:"1rem",margin:"1rem",textAlign:"center",float:"left",fontSize:"1rem"}}const _=f(!1),u=f(!1),[x,D]=B(()=>({accept:b.BOX,drop(e,g){const m=g.didDrop();m&&!t.greedy||(_.value=!0,u.value=m)},collect:e=>({isOver:e.isOver(),isOverCurrent:e.isOver({shallow:!0})})})),{isOver:O,isOverCurrent:C}=I(x),k=h(()=>t.greedy?"greedy":"not greedy"),T=h(()=>{let e="rgba(0, 0, 0, .5)";return(o(C)||o(O)&&t.greedy)&&(e="darkgreen"),e});return(e,g)=>(n(),d("div",{ref:o(D),style:y(l(o(T)))},[S(v(o(k))+" ",1),z,_.value?(n(),d("span",P,"dropped "+v(u.value?" on child":""),1)):V("",!0),a("div",null,[w(e.$slots,"default")])],4))}});const R=p({setup(c){const[,t]=$(()=>({type:b.BOX}));return(l,_)=>(n(),d("div",{ref:o(t),class:"box"},"Drag me",512))}});var X=N(R,[["__scopeId","data-v-063da431"]]);const E={style:{overflow:"hidden",clear:"both",margin:"-1rem"}},j=p({setup(c){return(t,l)=>(n(),d("div",null,[a("div",E,[r(s,{greedy:""},{default:i(()=>[r(s,{greedy:""},{default:i(()=>[r(s,{greedy:""})]),_:1})]),_:1}),r(s,null,{default:i(()=>[r(s,null,{default:i(()=>[r(s)]),_:1})]),_:1})]),a("div",{style:y({overflow:"hidden",clear:"both",marginTop:"1.5rem"})},[r(X)],4)]))}}),H=A("",6),M=a("p",null,[a("a",{href:"https://github.com/hcg1023/vue3-dnd/tree/main/packages/docs/src/.vitepress/examples/03-nesting/drop-targets",target:"_blank",rel:"noopener noreferrer"},"\u67E5\u770B\u6E90\u7801")],-1),G='{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"example/nesting/drop-targets.md"}',W={},J=Object.assign(W,{setup(c){return(t,l)=>(n(),d("div",null,[H,r(o(j)),M]))}});export{G as __pageData,J as default};
