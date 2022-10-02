import{_ as a,c,o,O as n,b as t,j as e}from"./app.e83eb941.js";const f='{"title":"\u6982\u8FF0","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u9879\u76EE(Items) \u548C \u7C7B\u578B(Types)","slug":"\u9879\u76EE-items-\u548C-\u7C7B\u578B-types"},{"level":2,"title":"\u76D1\u89C6\u5668(Monitors)","slug":"\u76D1\u89C6\u5668-monitors"},{"level":2,"title":"\u8FDE\u63A5\u5668(Connectors)","slug":"\u8FDE\u63A5\u5668-connectors"},{"level":2,"title":"\u62D6\u62FD\u6E90(Drag Sources) \u548C \u62D6\u653E\u76EE\u6807 (Drop Targets)","slug":"\u62D6\u62FD\u6E90-drag-sources-\u548C-\u62D6\u653E\u76EE\u6807-drop-targets"},{"level":2,"title":"Backend","slug":"backend"},{"level":2,"title":"\u7ED3\u8BBA","slug":"\u7ED3\u8BBA"}],"relativePath":"guide/overview.md"}',s={},d=n("",14),r=t("div",{class:"language-ts"},[t("div",{class:"highlight-lines"},[t("br"),t("br"),t("br"),t("div",{class:"highlighted"},"\xA0"),t("div",{class:"highlighted"},"\xA0"),t("br"),t("br"),t("br")]),t("pre",null,[t("code",null,`const [collect, drop] = useDrop({
  accept: 'Cell',
  collect: monitor => ({
    canDrop: monitor.canDrop(),
    hovered: monitor.isOver(),
  }),
})
`),t("div",{class:"m-mdic-copy-wrapper"},[t("div",{class:"u-mdic-copy-notify",id:"j-notify-1664672942653-78293"},"copy success"),t("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`const [collect, drop] = useDrop({
  accept: 'Cell',
  collect: monitor => ({
    canDrop: monitor.canDrop(),
    hovered: monitor.isOver(),
  }),
})
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1664672942653-78293","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])])],-1),p=n("",4),i=t("div",{class:"language-vue"},[t("div",{class:"highlight-lines"},[t("br"),t("div",{class:"highlighted"},"\xA0"),t("br"),t("div",{class:"highlighted"},"\xA0"),t("br"),t("br"),t("br"),t("div",{class:"highlighted"},"\xA0"),t("br"),t("br")]),t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("script")]),e(),t("span",{class:"token attr-name"},"setup"),e(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),e("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[e(`
`),t("span",{class:"token keyword"},"import"),e(),t("span",{class:"token punctuation"},"{"),e(" useDrop "),t("span",{class:"token punctuation"},"}"),e(),t("span",{class:"token keyword"},"from"),e(),t("span",{class:"token string"},"'vue3-dnd'"),e(`

`),t("span",{class:"token keyword"},"const"),e(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},","),e(" drop"),t("span",{class:"token punctuation"},"]"),e(),t("span",{class:"token operator"},"="),e(),t("span",{class:"token function"},"useDrop"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),e(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),e("script")]),t("span",{class:"token punctuation"},">")]),e(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("template")]),t("span",{class:"token punctuation"},">")]),e(`
	`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("div")]),e(),t("span",{class:"token attr-name"},":ref"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),e("drop"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),e("div")]),t("span",{class:"token punctuation"},">")]),e(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),e("template")]),t("span",{class:"token punctuation"},">")]),e(`
`)]),t("div",{class:"m-mdic-copy-wrapper"},[t("div",{class:"u-mdic-copy-notify",id:"j-notify-1664672942655-35912"},"copy success"),t("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`<script setup lang="ts">
import { useDrop } from 'vue3-dnd'

const [, drop] = useDrop({})
<\/script>

<template>
	<div :ref="drop"></div>
</template>
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1664672942655-35912","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])])],-1),l=n("",9),u=[d,r,p,i,l];function h(m,k,g,y,_,b){return o(),c("div",null,u)}var D=a(s,[["render",h]]);export{f as __pageData,D as default};
