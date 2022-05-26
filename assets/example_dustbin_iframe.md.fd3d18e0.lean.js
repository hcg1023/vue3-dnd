var T=Object.defineProperty,X=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var $=(n,e,t)=>e in n?T(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,h=(n,e)=>{for(var t in e||(e={}))G.call(e,t)&&$(n,t,e[t]);if(B)for(var t of B(e))L.call(e,t)&&$(n,t,e[t]);return n},g=(n,e)=>X(n,z(e));import{d as f,f as M,k as b,e as s,o as _,c as w,t as R,n as E,u as N,w as C,B as V,C as W,E as A,G as j,q,A as O,g as u,a as o,H as F,I}from"./app.659e5859.js";import{t as H}from"./chunks/index.d5b3e1f5.js";const P={BOX:"box"},U=f({setup(n){const e={height:"12rem",width:"12rem",marginRight:"1.5rem",marginBottom:"1.5rem",color:"white",padding:"1rem",textAlign:"center",fontSize:"1rem",lineHeight:"normal",float:"left"},[t,i]=M(()=>({accept:P.BOX,drop:()=>({name:"Dustbin"}),collect:a=>({isOver:a.isOver(),canDrop:a.canDrop()})})),{canDrop:c,isOver:m}=H(t),l=b(()=>s(c)&&s(m)),r=b(()=>l.value?"darkgreen":c.value?"darkkhaki":"#222");return(a,d)=>(_(),w("div",{ref:s(i),class:"target-box",style:E(g(h({},e),{backgroundColor:s(r)}))},R(s(l)?"Release to drop":"Drag a box here"),5))}}),v=f({props:{name:null},setup(n){const e=n,t={border:"1px dashed gray",backgroundColor:"white",padding:"0.5rem 1rem",marginRight:"1.5rem",marginBottom:"1.5rem",cursor:"move",float:"left"},[i,c]=N(()=>({type:P.BOX,item:{name:e.name},end:(r,a)=>{const d=a.getDropResult();r&&d&&alert(`You dropped ${r.name} into ${d.name}!`)},collect:r=>({isDragging:r.isDragging()})})),{isDragging:m}=H(i),l=b(()=>s(m)?.4:1);return(r,a)=>(_(),w("div",{ref:s(c),style:E(g(h({},t),{opacity:s(l)}))},R(n.name),5))}}),Y=f({name:"Frame",setup(n,{slots:e}){const t=C(),i=C(),c=V(),m=l=>{var k,D;const r=((k=c==null?void 0:c.proxy)==null?void 0:k.$el)||i.value||l.target;if(!r)return null;const a=r.contentWindow,d=r.contentDocument,p=(D=e.default)==null?void 0:D.call(e,{window:a}),S=d.body,x=document.createElement("div");S.append(x);const y=j({name:"IframeApp",provide(){return{window:a,document:d}},data(){return{children:p==null?void 0:p.slice(0)}},render(){return A("div",this.children)}});y.mount(x),t.value=y};return W(()=>{var l,r,a;if(t.value){const p=(((l=c==null?void 0:c.proxy)==null?void 0:l.$el)||i.value).contentWindow;t.value.children=(a=(r=e.default)==null?void 0:r.call(e,{window:p}))==null?void 0:a.slice()}}),()=>A("iframe",{onload:m,ref:i})}}),J={style:{overflow:"hidden",clear:"both"}},K={style:{overflow:"hidden",clear:"both"}},Q=f({setup(n){return(e,t)=>(_(),q(Y,{style:{width:"100%",height:"400px"}},{default:O(({window:i})=>[u(s(I),{backend:s(F),context:i},{default:O(()=>[o("div",null,[o("div",J,[u(U)]),o("div",K,[u(v,{name:"Glass"}),u(v,{name:"Banana"}),u(v,{name:"Paper"})])])]),_:2},1032,["backend","context"])]),_:1}))}}),Z=o("p",null,"\u8FD9\u662F\u540C\u4E00\u4E2A\u5783\u573E\u7BB1\u793A\u4F8B\uFF0C\u4F46\u5D4C\u5957\u5728 iframe \u4E2D\u3002",-1),ee=o("p",null,"\u5F53\u60A8\u4F7F\u7528react-dnd-html5-backend\u65F6\uFF0C\u60A8\u53EA\u80FD\u5728\u5355\u4E2A HTML \u6587\u6863\u4E2D\u8FDB\u884C\u62D6\u653E\u3002",-1),te=o("p",null,"\u5728 iframe \u4E2D\u4F7F\u7528 react-dnd \u9700\u8981\u5728 iframe \u4E2D\u4F7F\u7528DndProvider\u3002",-1),ne=o("hr",null,null,-1),re=o("br",null,null,-1),ae=o("br",null,null,-1),oe=o("br",null,null,-1),ce=o("p",null,[o("a",{href:"https://github.com/hcg1023/vue3-dnd/tree/main/packages/docs/src/.vitepress/examples/01-dustbin/single-target-in-iframe",target:"_blank",rel:"noopener noreferrer"},"\u67E5\u770B\u6E90\u7801")],-1),ue='{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"example/dustbin/iframe.md"}',se={},me=Object.assign(se,{setup(n){return(e,t)=>(_(),w("div",null,[Z,ee,te,ne,re,ae,oe,u(s(Q)),ce]))}});export{ue as __pageData,me as default};
