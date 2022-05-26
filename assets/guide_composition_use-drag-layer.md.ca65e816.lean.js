import{_ as e,c as o,o as s,a as t,b as n,M as a}from"./app.659e5859.js";const C='{"title":"useDragLayer","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u53C2\u6570","slug":"\u53C2\u6570"},{"level":2,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C"}],"relativePath":"guide/composition/use-drag-layer.md"}',c={},l=t("h1",{id:"usedraglayer",tabindex:"-1"},[n("useDragLayer "),t("a",{class:"header-anchor",href:"#usedraglayer","aria-hidden":"true"},"#")],-1),i=t("p",null,[t("code",null,"useDragLayer"),n("\u51FD\u6570\u63D0\u4F9B\u4E86\u4E00\u79CD\u5C06\u4F60\u7684\u7EC4\u4EF6\u4F5C\u4E3A"),t("strong",null,"\u62D6\u52A8\u5C42"),n("\u8FDE\u63A5\u5230 DnD \u7684\u65B9\u6CD5\u3002")],-1),d=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"setup"),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" useDragLayer "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue3-dnd'"),n(`

`),t("span",{class:"token keyword"},"const"),n(" collectedProps "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"useDragLayer"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"monitor"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(` 
      `),t("span",{class:"token literal-property property"},"item"),t("span",{class:"token operator"},":"),n(" monitor"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"getItem"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("..."),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`)]),t("div",{class:"m-mdic-copy-wrapper"},[t("div",{class:"u-mdic-copy-notify",id:"j-notify-1653553229080-92114"},"copy success"),t("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`<script setup lang="ts">
import { useDragLayer } from 'vue3-dnd'

const collectedProps = useDragLayer(monitor => ({ 
      item: monitor.getItem(),
    }))
<\/script>

<template>
  <div>...</div>
</template>
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1653553229080-92114","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])])],-1),p=a("",3),r=t("div",{class:"language-ts"},[t("pre",null,[t("code",null,[t("span",{class:"token punctuation"},"("),n("monitor"),t("span",{class:"token operator"},":"),n(" DragLayerMonitor"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"void"),n(),t("span",{class:"token operator"},"|"),n(" object"),t("span",{class:"token punctuation"},")"),n(`
`)]),t("div",{class:"m-mdic-copy-wrapper"},[t("div",{class:"u-mdic-copy-notify",id:"j-notify-1653553229082-12708"},"copy success"),t("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`(monitor: DragLayerMonitor) => (void | object)
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1653553229082-12708","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])])],-1),u=a("",3),m=[l,i,d,p,r,u];function y(k,_,g,h,f,v){return s(),o("div",null,m)}var D=e(c,[["render",y]]);export{C as __pageData,D as default};
