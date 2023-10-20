import{_ as a,c as e,o as s,Q as o,b as n,j as t}from"./app.3862bf17.js";const h='{"title":"from v1 to v2","description":"","frontmatter":{},"headers":[{"level":2,"title":"Incompatible changes","slug":"incompatible-changes"},{"level":3,"title":"Example","slug":"example"}],"relativePath":"en/guide/v1-to-v2.md"}',c={},p=o('<h1 id="from-v1-to-v2" tabindex="-1">from v1 to v2 <a class="header-anchor" href="#from-v1-to-v2" aria-hidden="true">#</a></h1><h2 id="incompatible-changes" tabindex="-1">Incompatible changes <a class="header-anchor" href="#incompatible-changes" aria-hidden="true">#</a></h2><p>All connector functions are changed from <code>Ref&lt;Connector&gt;</code> type to <code>Connector</code> type, which simplifies the way they are called in script.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h3>',4),l=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" useDrag "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue3-dnd'"),t(`

`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"["),t("collect"),n("span",{class:"token punctuation"},","),t(" drag"),n("span",{class:"token punctuation"},","),t(" dragPreview"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useDrag"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
   `),n("span",{class:"token literal-property property"},"item"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
     `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'box'"),t(`
   `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`

`),n("span",{class:"token keyword"},"const"),t(" element "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("HTMLDivElement "),n("span",{class:"token operator"},"|"),t(),n("span",{class:"token keyword"},"null"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token comment"},"// v1 writing"),t(`
`),n("span",{class:"token comment"},"// drag.value(element)"),t(`
`),n("span",{class:"token comment"},"// v2 writing"),t(`
`),n("span",{class:"token function"},"drag"),n("span",{class:"token punctuation"},"("),t("element"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
   `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("element"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("DragSource"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
   `),n("span",{class:"token comment"},"<!-- The writing in template remains unchanged -->"),t(`
   `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},":ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("dragPreview"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("DragPreview"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1697762289026-31833"},"copy success"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`<script setup>
import { ref } from 'vue'
import { useDrag } from 'vue3-dnd'

const [collect, drag, dragPreview] = useDrag({
   item: {
     type: 'box'
   }
})

const element = ref<HTMLDivElement | null>(null)
// v1 writing
// drag.value(element)
// v2 writing
drag(element)
<\/script>

<template>
   <div ref="element">DragSource</div>
   <!-- The writing in template remains unchanged -->
   <div :ref="dragPreview">DragPreview</div>
</template>
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1697762289026-31833","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])])],-1),i=[p,l];function r(u,d,k,m,g,v){return s(),e("div",null,i)}var f=a(c,[["render",r]]);export{h as __pageData,f as default};
