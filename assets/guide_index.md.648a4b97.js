import{_ as t,c as n,o as d,O as a,b as e}from"./app.e83eb941.js";const k='{"title":"\u5173\u4E8E","description":"","frontmatter":{},"headers":[{"level":3,"title":"Composition API","slug":"composition-api"},{"level":3,"title":"\u53CC\u5411\u6570\u636E\u7ED1\u5B9A","slug":"\u53CC\u5411\u6570\u636E\u7ED1\u5B9A"},{"level":3,"title":"\u652F\u6301Vue2\u548CVue3","slug":"\u652F\u6301vue2\u548Cvue3"},{"level":3,"title":"\u6269\u5C55\u548C\u6D4B\u8BD5","slug":"\u6269\u5C55\u548C\u6D4B\u8BD5"}],"relativePath":"guide/index.md"}',r={},c=a('<h1 id="\u5173\u4E8E" tabindex="-1">\u5173\u4E8E <a class="header-anchor" href="#\u5173\u4E8E" aria-hidden="true">#</a></h1><p><a href="https://github.com/hcg1023/vue3-dnd" target="_blank" rel="noopener noreferrer">Vue3 DnD</a>\u662F\u57FA\u4E8E<a href="https://react-dnd.github.io/react-dnd/about" target="_blank" rel="noopener noreferrer">React DnD</a> \u5F00\u53D1\u7684Vue Composition-api \u7248\u672C\u3002\u6211\u4EEC\u4F1A\u5C3D\u53EF\u80FD\u7684\u4FDD\u8BC1\u5B83\u4E0EReact DnD\u7684\u529F\u80FD\u4E00\u81F4\uFF0C\u751A\u81F3\u4E8E\u4F60\u53EF\u4EE5\u628A\u8BE5\u6587\u6863\u770B\u4F5C\u662FReact DnD\u7684\u90E8\u5206\u6587\u6863\uFF08\u5F53\u7136\uFF0Creact hooks api\u7684\u4F9D\u8D56\u90E8\u5206\u9664\u5916\uFF09\u3002</p><h1 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h1>',3),o=e("div",{class:"language-bash"},[e("pre",null,[e("code",null,`# \u5B89\u88C5
pnpm install vue3-dnd react-dnd-html5-backend
# \u6216\u8005
npm install vue3-dnd react-dnd-html5-backend
# \u6216\u8005
yarn add vue3-dnd react-dnd-html5-backend
`),e("div",{class:"m-mdic-copy-wrapper"},[e("div",{class:"u-mdic-copy-notify",id:"j-notify-1664353487430-57806"},"copy success"),e("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`# \u5B89\u88C5
pnpm install vue3-dnd react-dnd-html5-backend
# \u6216\u8005
npm install vue3-dnd react-dnd-html5-backend
# \u6216\u8005
yarn add vue3-dnd react-dnd-html5-backend
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1664353487430-57806","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])])],-1),i=a('<p><a href="https://www.npmjs.com/package/react-dnd-html5-backend" target="_blank" rel="noopener noreferrer">react-dnd-html5-backend</a> \u662F\u4E00\u4E2A<a href="https://react-dnd.github.io/react-dnd/about" target="_blank" rel="noopener noreferrer">React DnD</a> \u7684\u63D2\u4EF6\uFF0C\u5B83\u63D0\u4F9B\u4E86\u4E00\u4E2AHTML5\u7684\u62D6\u653E\u652F\u6301\uFF1B\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528<a href="https://www.npmjs.com/package/react-dnd-touch-backend" target="_blank" rel="noopener noreferrer">react-dnd-touch-backend</a> \u63D0\u4F9B\u89E6\u6478\u62D6\u653E\u652F\u6301\u3002</p><h1 id="\u7279\u6027" tabindex="-1">\u7279\u6027 <a class="header-anchor" href="#\u7279\u6027" aria-hidden="true">#</a></h1><h3 id="composition-api" tabindex="-1">Composition API <a class="header-anchor" href="#composition-api" aria-hidden="true">#</a></h3><p>\u57FA\u4E8EVue\u7684\u7EC4\u5408\u5F0FAPI\uFF0C\u4F60\u53EF\u4EE5\u5728\u4EFB\u4F55\u7EC4\u4EF6\u4E2D\u4F7F\u7528\u62D6\u62FD\u3002</p><h3 id="\u53CC\u5411\u6570\u636E\u7ED1\u5B9A" tabindex="-1">\u53CC\u5411\u6570\u636E\u7ED1\u5B9A <a class="header-anchor" href="#\u53CC\u5411\u6570\u636E\u7ED1\u5B9A" aria-hidden="true">#</a></h3><p>\u57FA\u4E8EVue\u7684\u53CC\u5411\u6570\u636E\u7ED1\u5B9A\uFF0C\u4F60\u53EF\u4EE5\u5728\u6570\u636E\u66F4\u65B0\u65F6\u81EA\u52A8\u66F4\u65B0UI\u3002</p><h3 id="\u652F\u6301vue2\u548Cvue3" tabindex="-1">\u652F\u6301Vue2\u548CVue3 <a class="header-anchor" href="#\u652F\u6301vue2\u548Cvue3" aria-hidden="true">#</a></h3><p>\u540C\u65F6\u652F\u6301Vue2\u548CVue3\u4E24\u4E2A\u7248\u672C</p><h3 id="\u6269\u5C55\u548C\u6D4B\u8BD5" tabindex="-1">\u6269\u5C55\u548C\u6D4B\u8BD5 <a class="header-anchor" href="#\u6269\u5C55\u548C\u6D4B\u8BD5" aria-hidden="true">#</a></h3><p>\u53D7\u76CA\u4E8EReact DnD\u7684backend\u8BBE\u8BA1\uFF0C\u4F60\u53EF\u4EE5\u81EA\u5B9A\u4E49\u4E00\u4E2ADnD backend\uFF0C\u5E76\u4E14\u53EF\u4EE5\u4F7F\u7528 <a href="https://www.npmjs.com/package/react-dnd-test-backend" target="_blank" rel="noopener noreferrer">react-dnd-test-backend</a> \u6D4B\u8BD5\u4F60\u7684\u62D6\u62FD\u7EC4\u4EF6\u3002</p><h1 id="\u95EE\u9898\u548C\u5EFA\u8BAE" tabindex="-1">\u95EE\u9898\u548C\u5EFA\u8BAE <a class="header-anchor" href="#\u95EE\u9898\u548C\u5EFA\u8BAE" aria-hidden="true">#</a></h1><p>\u53EF\u4EE5\u5728<a href="https://github.com/hcg1023/vue3-dnd" target="_blank" rel="noopener noreferrer">GitHub</a> \u4E0A\u63D0\u4EA4issue\u6216\u8005pull request\u3002</p><h1 id="\u611F\u8C22" tabindex="-1">\u611F\u8C22 <a class="header-anchor" href="#\u611F\u8C22" aria-hidden="true">#</a></h1><p>\u611F\u8C22<a href="https://react-dnd.github.io/react-dnd/about" target="_blank" rel="noopener noreferrer">React DnD</a> \u7684\u4F5C\u8005\uFF0C\u4ED6\u4EEC\u7684\u5F00\u6E90\u9879\u76EE\u662F\u6211\u4EEC\u7684\u57FA\u7840\u3002</p><p>\u611F\u8C22\u8BBE\u8BA1\u5E08\u738B\u73E9\u63D0\u4F9B\u7684logo\u3002</p>',15),h=[c,o,i];function s(l,p,u,m,b,_){return d(),n("div",null,h)}var y=t(r,[["render",s]]);export{k as __pageData,y as default};
