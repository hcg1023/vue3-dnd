import{d as p,w as f,f as B,k as h,e as o,o as n,c as d,b as S,t as v,y as V,a,z as w,n as y,_ as N,u as $,g as r,A as i,M as A}from"./app.659e5859.js";import{t as I}from"./chunks/index.d5b3e1f5.js";const b={BOX:"box"},z=a("br",null,null,-1),P={key:0},s=p({props:{greedy:{type:Boolean}},setup(c){const t=c;function l(e){return{border:"1px solid rgba(0,0,0,0.2)",minHeight:"8rem",minWidth:"8rem",color:"white",backgroundColor:e,padding:"2rem",paddingTop:"1rem",margin:"1rem",textAlign:"center",float:"left",fontSize:"1rem"}}const _=f(!1),u=f(!1),[x,D]=B(()=>({accept:b.BOX,drop(e,g){const m=g.didDrop();m&&!t.greedy||(_.value=!0,u.value=m)},collect:e=>({isOver:e.isOver(),isOverCurrent:e.isOver({shallow:!0})})})),{isOver:O,isOverCurrent:C}=I(x),k=h(()=>t.greedy?"greedy":"not greedy"),T=h(()=>{let e="rgba(0, 0, 0, .5)";return(o(C)||o(O)&&t.greedy)&&(e="darkgreen"),e});return(e,g)=>(n(),d("div",{ref:o(D),style:y(l(o(T)))},[S(v(o(k))+" ",1),z,_.value?(n(),d("span",P,"dropped "+v(u.value?" on child":""),1)):V("",!0),a("div",null,[w(e.$slots,"default")])],4))}});const R=p({setup(c){const[,t]=$(()=>({type:b.BOX}));return(l,_)=>(n(),d("div",{ref:o(t),class:"box"},"Drag me",512))}});var X=N(R,[["__scopeId","data-v-063da431"]]);const E={style:{overflow:"hidden",clear:"both",margin:"-1rem"}},j=p({setup(c){return(t,l)=>(n(),d("div",null,[a("div",E,[r(s,{greedy:""},{default:i(()=>[r(s,{greedy:""},{default:i(()=>[r(s,{greedy:""})]),_:1})]),_:1}),r(s,null,{default:i(()=>[r(s,null,{default:i(()=>[r(s)]),_:1})]),_:1})]),a("div",{style:y({overflow:"hidden",clear:"both",marginTop:"1.5rem"})},[r(X)],4)]))}}),H=A("<p>\u653E\u7F6E\u76EE\u6807\u4E5F\u53EF\u4EE5\u76F8\u4E92\u5D4C\u5957\u3002\u4E0E\u62D6\u653E\u6E90\u4E0D\u540C\uFF0C\u51E0\u4E2A\u62D6\u653E\u76EE\u6807\u53EF\u80FD\u4F1A\u5BF9\u88AB\u62D6\u653E\u7684\u540C\u4E00\u9879\u505A\u51FA\u53CD\u5E94\u3002</p><p>\u901A\u8FC7Vue DnD\u5E76\u4E0D\u80FD\u63D0\u4F9B\u963B\u6B62\u4F20\u64AD\u7684\u65B9\u6CD5\u3002\u76F8\u53CD\uFF0C\u62D6\u653E\u76EE\u6807\u53EF\u4EE5\u6BD4\u8F83<code>monitor.isOver()</code>\u548C<code>monitor.isOver({shallow: false})</code>\u6765\u4E86\u89E3\u662F\u5426\u53EA\u6709\u5B83\u4EEC\u6216\u5B83\u4EEC\u5D4C\u5957\u7684\u76EE\u6807\u88AB\u60AC\u6D6E\u3002\u4ED6\u4EEC\u8FD8\u53EF\u4EE5\u68C0\u67E5<code>monitor.didDrop()</code>\u548C<code>monitor.getDropResult()</code>\u6765\u4E86\u89E3\u5D4C\u5957\u7684\u76EE\u6807\u662F\u5426\u5DF2\u7ECF\u5904\u7406\u4E86\u653E\u7F6E\uFF0C\u751A\u81F3\u8FD4\u56DE\u4E00\u4E2A\u4E0D\u540C\u7684\u653E\u7F6E\u7ED3\u679C\u3002</p><hr><br><br><br>",6),M=a("p",null,[a("a",{href:"https://github.com/hcg1023/vue3-dnd/tree/main/packages/docs/src/.vitepress/examples/03-nesting/drop-targets",target:"_blank",rel:"noopener noreferrer"},"\u67E5\u770B\u6E90\u7801")],-1),G='{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"example/nesting/drop-targets.md"}',W={},J=Object.assign(W,{setup(c){return(t,l)=>(n(),d("div",null,[H,r(o(j)),M]))}});export{G as __pageData,J as default};
