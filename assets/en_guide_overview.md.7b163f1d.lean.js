import{_ as a,c as o,o as s,Q as n,b as e,j as t}from"./app.32a3f66d.js";const _='{"title":"Overview","description":"","frontmatter":{},"headers":[{"level":2,"title":"Items and Types","slug":"items-and-types"},{"level":2,"title":"Monitors","slug":"monitors"},{"level":2,"title":"Connectors","slug":"connectors"},{"level":2,"title":"Drag Sources and Drop Targets","slug":"drag-sources-and-drop-targets"},{"level":2,"title":"Backend","slug":"backend"},{"level":2,"title":"in conclusion","slug":"in-conclusion"}],"relativePath":"en/guide/overview.md"}',c={},i=n("",14),d=e("div",{class:"language-ts"},[e("div",{class:"highlight-lines"},[e("br"),e("br"),e("br"),e("div",{class:"highlighted"},"\xA0"),e("div",{class:"highlighted"},"\xA0"),e("br"),e("br"),e("br")]),e("pre",null,[e("code",null,`const [collect, drop] = useDrop({
  accept: 'Cell',
  collect: monitor => ({
    canDrop: monitor.canDrop(),
    hovered: monitor.isOver(),
  }),
})
`),e("div",{class:"m-mdic-copy-wrapper"},[e("div",{class:"u-mdic-copy-notify",id:"j-notify-1693096727027-38511"},"copy success"),e("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`const [collect, drop] = useDrop({
  accept: 'Cell',
  collect: monitor => ({
    canDrop: monitor.canDrop(),
    hovered: monitor.isOver(),
  }),
})
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1693096727027-38511","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])])],-1),r=n("",4),l=e("div",{class:"language-vue"},[e("div",{class:"highlight-lines"},[e("br"),e("div",{class:"highlighted"},"\xA0"),e("br"),e("div",{class:"highlighted"},"\xA0"),e("br"),e("br"),e("br"),e("div",{class:"highlighted"},"\xA0"),e("br"),e("br")]),e("pre",null,[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),t("script")]),t(),e("span",{class:"token attr-name"},"setup"),t(),e("span",{class:"token attr-name"},"lang"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),t("ts"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token script"},[e("span",{class:"token language-javascript"},[t(`
`),e("span",{class:"token keyword"},"import"),t(),e("span",{class:"token punctuation"},"{"),t(" useDrop "),e("span",{class:"token punctuation"},"}"),t(),e("span",{class:"token keyword"},"from"),t(),e("span",{class:"token string"},"'vue3-dnd'"),t(`

`),e("span",{class:"token keyword"},"const"),t(),e("span",{class:"token punctuation"},"["),e("span",{class:"token punctuation"},","),t(" drop"),e("span",{class:"token punctuation"},"]"),t(),e("span",{class:"token operator"},"="),t(),e("span",{class:"token function"},"useDrop"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"{"),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),t(`
`)])]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),t("script")]),e("span",{class:"token punctuation"},">")]),t(`

`),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),t("template")]),e("span",{class:"token punctuation"},">")]),t(`
`),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),t("div")]),t(),e("span",{class:"token attr-name"},":ref"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),t("drop"),e("span",{class:"token punctuation"},'"')]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),t("div")]),e("span",{class:"token punctuation"},">")]),t(`
`),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),t("template")]),e("span",{class:"token punctuation"},">")]),t(`
`)]),e("div",{class:"m-mdic-copy-wrapper"},[e("div",{class:"u-mdic-copy-notify",id:"j-notify-1693096727029-69673"},"copy success"),e("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`<script setup lang="ts">
import { useDrop } from 'vue3-dnd'

const [, drop] = useDrop({})
<\/script>

<template>
<div :ref="drop"></div>
</template>
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1693096727029-69673","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])])],-1),p=n("",9),u=[i,d,r,l,p];function h(m,g,y,k,f,b){return s(),o("div",null,u)}var w=a(c,[["render",h]]);export{_ as __pageData,w as default};