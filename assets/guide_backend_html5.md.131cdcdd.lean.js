import{_ as a,c,o,Q as n,b as t,j as e}from"./app.32a3f66d.js";const f='{"title":"HTML5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":3,"title":"\u989D\u5916\u529F\u80FD","slug":"\u989D\u5916\u529F\u80FD"},{"level":2,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"}],"relativePath":"guide/backend/html5.md"}',s={},d=n("",3),i=t("div",{class:"language-bash"},[t("pre",null,[t("code",null,`npm install react-dnd-html5-backend
`),t("div",{class:"m-mdic-copy-wrapper"},[t("div",{class:"u-mdic-copy-notify",id:"j-notify-1696811913792-70288"},"copy success"),t("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`npm install react-dnd-html5-backend
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1696811913792-70288","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])])],-1),l=n("",4),p=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[e(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("script")]),e(),t("span",{class:"token attr-name"},"setup"),e(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),e("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[e(`
`),t("span",{class:"token keyword"},"import"),e(),t("span",{class:"token punctuation"},"{"),e(" HTML5Backend "),t("span",{class:"token punctuation"},"}"),e(),t("span",{class:"token keyword"},"from"),e(),t("span",{class:"token string"},"'react-dnd-html5-backend'"),e(`
`),t("span",{class:"token keyword"},"import"),e(),t("span",{class:"token punctuation"},"{"),e(" DndProvider "),t("span",{class:"token punctuation"},"}"),e(),t("span",{class:"token keyword"},"from"),e(),t("span",{class:"token string"},"'vue3-dnd'"),e(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),e("script")]),t("span",{class:"token punctuation"},">")]),e(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("template")]),t("span",{class:"token punctuation"},">")]),e(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("DndProvider")]),e(),t("span",{class:"token attr-name"},":backend"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),e("HTML5Backend"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),e(`
    `),t("span",{class:"token comment"},"<!-- your drag-and-drop application -->"),e(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),e("DndProvider")]),t("span",{class:"token punctuation"},">")]),e(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),e("template")]),t("span",{class:"token punctuation"},">")]),e(`
`)]),t("div",{class:"m-mdic-copy-wrapper"},[t("div",{class:"u-mdic-copy-notify",id:"j-notify-1696811913793-90066"},"copy success"),t("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`
<script setup lang="ts">
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'vue3-dnd'
<\/script>

<template>
  <DndProvider :backend="HTML5Backend">
    <!-- your drag-and-drop application -->
  </DndProvider>
</template>
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1696811913793-90066","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])])],-1),r=n("",2),u=[d,i,l,p,r];function m(k,y,h,_,g,T){return o(),c("div",null,u)}var b=a(s,[["render",m]]);export{f as __pageData,b as default};