import{_ as a,c as o,o as c,b as t,j as e,O as n}from"./app.e83eb941.js";const C='{"title":"useDragLayer","description":"","frontmatter":{},"headers":[{"level":2,"title":"parameters","slug":"parameters"},{"level":2,"title":"return value","slug":"return-value"}],"relativePath":"en/guide/composition/use-drag-layer.md"}',s={},i=t("h1",{id:"usedraglayer",tabindex:"-1"},[e("useDragLayer "),t("a",{class:"header-anchor",href:"#usedraglayer","aria-hidden":"true"},"#")],-1),l=t("p",null,[e("The "),t("code",null,"useDragLayer"),e(" function provides a way to connect your component to DnD as a drag layer.")],-1),d=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("script")]),e(),t("span",{class:"token attr-name"},"setup"),e(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),e("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[e(`
`),t("span",{class:"token keyword"},"import"),e(),t("span",{class:"token punctuation"},"{"),e(" useDragLayer "),t("span",{class:"token punctuation"},"}"),e(),t("span",{class:"token keyword"},"from"),e(),t("span",{class:"token string"},"'vue3-dnd'"),e(`

`),t("span",{class:"token keyword"},"const"),e(" collectedProps "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token function"},"useDragLayer"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"monitor"),e(),t("span",{class:"token operator"},"=>"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),e(`
       `),t("span",{class:"token literal-property property"},"item"),t("span",{class:"token operator"},":"),e(" monitor"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"getItem"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),e(`
     `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),e(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),e("script")]),t("span",{class:"token punctuation"},">")]),e(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("template")]),t("span",{class:"token punctuation"},">")]),e(`
   `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("div")]),t("span",{class:"token punctuation"},">")]),e("..."),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),e("div")]),t("span",{class:"token punctuation"},">")]),e(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),e("template")]),t("span",{class:"token punctuation"},">")]),e(`
`)]),t("div",{class:"m-mdic-copy-wrapper"},[t("div",{class:"u-mdic-copy-notify",id:"j-notify-1664353486815-17332"},"copy success"),t("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`<script setup lang="ts">
import { useDragLayer } from 'vue3-dnd'

const collectedProps = useDragLayer(monitor => ({
       item: monitor.getItem(),
     }))
<\/script>

<template>
   <div>...</div>
</template>
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1664353486815-17332","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])])],-1),p=n('<h2 id="parameters" tabindex="-1">parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h2><p>The argument to <code>useDragLayer</code> is a <code>collect</code> collection function, which should return a plain object that you can use in your component.</p><p>The argument to the <code>collect</code> collection function is a <a href="./../monitors/drag-layer-monitor.html">DragLayerMonitor</a> object, which provides some monitor methods so that you can get the monitor&#39;s status. The types of the <code>collect</code> function are as follows:</p>',3),r=t("div",{class:"language-ts"},[t("pre",null,[t("code",null,`(monitor: DragLayerMonitor) => (void | object)
`),t("div",{class:"m-mdic-copy-wrapper"},[t("div",{class:"u-mdic-copy-notify",id:"j-notify-1664353486815-78626"},"copy success"),t("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`(monitor: DragLayerMonitor) => (void | object)
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1664353486815-78626","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])])],-1),u=n('<h2 id="return-value" tabindex="-1">return value <a class="header-anchor" href="#return-value" aria-hidden="true">#</a></h2><p><code>useDragLayer</code> returns a <code>Ref</code> object, which is the return value of the <code>collect</code> function.</p><ul><li><code>Collected Props - Ref&lt;object&gt;</code><ul><li>It is a <code>Ref</code> object whose <code>value</code> points to the return value of the <code>collect</code> function.</li></ul></li></ul>',3),m=[i,l,d,p,r,u];function y(h,k,g,_,f,v){return c(),o("div",null,m)}var T=a(s,[["render",y]]);export{C as __pageData,T as default};
