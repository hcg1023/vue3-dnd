import{d as u,f as O,k as h,o as _,c as D,t as C,e as o,n as R,u as T,x,C as H,E as k,G as M,H as S,I as X,s as z,B,a as m,b as f,T as G,J as I,K as N}from"../app.2848e89b.js";import{t as $}from"./index.b2c5a59d.js";const A={BOX:"box"},P=u({__name:"Dustbin",setup(p){const n={height:"12rem",width:"12rem",marginRight:"1.5rem",marginBottom:"1.5rem",color:"white",padding:"1rem",textAlign:"center",fontSize:"1rem",lineHeight:"normal",float:"left"},[c,s]=O(()=>({accept:A.BOX,drop:()=>({name:"Dustbin"}),collect:r=>({isOver:r.isOver(),canDrop:r.canDrop()})})),{canDrop:t,isOver:d}=$(c),a=h(()=>o(t)&&o(d)),e=h(()=>a.value?"darkgreen":t.value?"darkkhaki":"#222");return(r,i)=>(_(),D("div",{ref:o(s),class:"target-box",style:R({...n,backgroundColor:e.value})},C(a.value?"Release to drop":"Drag a box here"),5))}}),g=u({__name:"Box",props:{name:{}},setup(p){const n=p,c={border:"1px dashed gray",backgroundColor:"white",padding:"0.5rem 1rem",marginRight:"1.5rem",marginBottom:"1.5rem",cursor:"move",float:"left"},[s,t]=T(()=>({type:A.BOX,item:{name:n.name},end:(e,r)=>{const i=r.getDropResult();e&&i&&alert(`You dropped ${e.name} into ${i.name}!`)},collect:e=>({isDragging:e.isDragging()})})),{isDragging:d}=$(s),a=h(()=>o(d)?.4:1);return(e,r)=>(_(),D("div",{ref:o(t),style:R({...c,opacity:a.value})},C(e.name),5))}}),V=u({name:"Frame",setup(p,{slots:n}){const c=x(),s=x(),t=M(),d=a=>{var y,w;const e=((y=t==null?void 0:t.proxy)==null?void 0:y.$el)||s.value||a.target;if(!e)return null;const r=e.contentWindow,i=e.contentDocument,l=(w=n.default)==null?void 0:w.call(n,{window:r}),E=i.body,v=document.createElement("div");E.append(v);const b=S({name:"IframeApp",provide(){return{window:r,document:i}},data(){return{children:l==null?void 0:l.slice(0)}},render(){return k("div",this.children)}});b.mount(v),c.value=b};return H(()=>{var a,e,r;if(c.value){const l=(((a=t==null?void 0:t.proxy)==null?void 0:a.$el)||s.value).contentWindow;c.value.children=(r=(e=n.default)==null?void 0:e.call(n,{window:l}))==null?void 0:r.slice()}}),()=>k("iframe",{onload:d,ref:s})}}),W={style:{overflow:"hidden",clear:"both"}},F={style:{overflow:"hidden",clear:"both"}},L=u({__name:"Container",setup(p){const n=X();return(c,s)=>(_(),z(V,{style:{width:"100%",height:"400px"}},{default:B(({window:t})=>[m(o(N),{backend:o(n)?o(G):o(I),context:t},{default:B(()=>[f("div",null,[f("div",W,[m(P)]),f("div",F,[m(g,{name:"Glass"}),m(g,{name:"Banana"}),m(g,{name:"Paper"})])])]),_:2},1032,["backend","context"])]),_:1}))}});export{L as _};