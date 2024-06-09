import{_ as a,o as s,c as e,Q as o,b as n,j as t}from"./app.14328452.js";const f='{"title":"\u4ECE v1 \u5230 v2","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E0D\u517C\u5BB9\u53D8\u5316","slug":"\u4E0D\u517C\u5BB9\u53D8\u5316"},{"level":3,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B"}],"relativePath":"guide/v1-to-v2.md"}',c={},p=o('<h1 id="\u4ECE-v1-\u5230-v2" tabindex="-1">\u4ECE v1 \u5230 v2 <a class="header-anchor" href="#\u4ECE-v1-\u5230-v2" aria-hidden="true">#</a></h1><h2 id="\u4E0D\u517C\u5BB9\u53D8\u5316" tabindex="-1">\u4E0D\u517C\u5BB9\u53D8\u5316 <a class="header-anchor" href="#\u4E0D\u517C\u5BB9\u53D8\u5316" aria-hidden="true">#</a></h2><p>\u6240\u6709\u7684connector\u51FD\u6570\u4ECE<code>Ref&lt;Connector&gt;</code>\u7C7B\u578B\u53D8\u6210\u4E86<code>Connector</code>\u7C7B\u578B\uFF0C\u7B80\u5316\u4E86\u5728script\u4E2D\u7684\u8C03\u7528\u65B9\u5F0F\u3002</p><h3 id="\u793A\u4F8B" tabindex="-1">\u793A\u4F8B <a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a></h3>',4),l=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" useDrag "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue3-dnd'"),t(`

`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"["),t("collect"),n("span",{class:"token punctuation"},","),t(" drag"),n("span",{class:"token punctuation"},","),t(" dragPreview"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useDrag"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"item"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'box'"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`

`),n("span",{class:"token keyword"},"const"),t(" element "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("HTMLDivElement "),n("span",{class:"token operator"},"|"),t(),n("span",{class:"token keyword"},"null"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token comment"},"// v1\u5199\u6CD5"),t(`
`),n("span",{class:"token comment"},"// drag.value(element)"),t(`
`),n("span",{class:"token comment"},"// v2\u5199\u6CD5"),t(`
`),n("span",{class:"token function"},"drag"),n("span",{class:"token punctuation"},"("),t("element"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("element"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("DragSource"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token comment"},"<!-- template\u4E2D\u7684\u5199\u6CD5\u4E0D\u53D8 -->"),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},":ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("dragPreview"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("DragPreview"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1717893997350-46175"},"copy success"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`<script setup>
import { ref } from 'vue'
import { useDrag } from 'vue3-dnd'

const [collect, drag, dragPreview] = useDrag({
  item: {
    type: 'box'
  }
})

const element = ref<HTMLDivElement | null>(null)
// v1\u5199\u6CD5
// drag.value(element)
// v2\u5199\u6CD5
drag(element)
<\/script>

<template>
  <div ref="element">DragSource</div>
  <!-- template\u4E2D\u7684\u5199\u6CD5\u4E0D\u53D8 -->
  <div :ref="dragPreview">DragPreview</div>
</template>
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1717893997350-46175","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])])],-1),i=[p,l];function r(u,d,k,m,v,g){return s(),e("div",null,i)}var h=a(c,[["render",r]]);export{f as __pageData,h as default};
