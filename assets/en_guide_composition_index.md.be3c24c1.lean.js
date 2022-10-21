import{_ as a,c as s,o,P as e,b as n,j as t}from"./app.6e11e860.js";const D='{"title":"Composition API","description":"","frontmatter":{},"headers":[{"level":2,"title":"Basic example","slug":"basic-example"}],"relativePath":"en/guide/composition/index.md"}',c={},p=e("",5),l=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" useDrag "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue3-dnd'"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" toRefs "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},'"@vueuse/core"'),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"["),t("collect"),n("span",{class:"token punctuation"},","),t(" drag"),n("span",{class:"token punctuation"},","),t(" dragPreview"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useDrag"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
`),n("span",{class:"token comment"},'// "type" is required. It is used by "accept" of the drop target.'),t(`
`),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'BOX'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token comment"},'// The collect function passes in a "monitor" instance, which is used to get the required status information from DnD.'),t(`
`),n("span",{class:"token function-variable function"},"collect"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"monitor"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
`),n("span",{class:"token literal-property property"},"isDragging"),n("span",{class:"token operator"},":"),t(" monitor"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"isDragging"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token comment"},"// collect is a Ref object, the default value needs to be obtained from collect.value,"),t(`
`),n("span",{class:"token comment"},"// Ref objects can be converted to destructible objects using toRefs"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"{"),t(" isDragging "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"toRefs"),n("span",{class:"token punctuation"},"("),t("collect"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token comment"},"<!-- This is optional. By default dragPreview will be attached to dragSource -->"),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},":ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("dragPreview"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ opacity: isDragging ? 0.5 : 1 }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"role"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Handle"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("drag"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1666314173814-63456"},"copy success"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`<script setup lang="ts">
import { useDrag } from 'vue3-dnd'
import { toRefs } from "@vueuse/core";

const [collect, drag, dragPreview] = useDrag(() => ({
// "type" is required. It is used by "accept" of the drop target.
type: 'BOX',
// The collect function passes in a "monitor" instance, which is used to get the required status information from DnD.
collect: (monitor) => ({
isDragging: monitor.isDragging()
})
}))
// collect is a Ref object, the default value needs to be obtained from collect.value,
// Ref objects can be converted to destructible objects using toRefs
const { isDragging } = toRefs(collect)
<\/script>

<template>
<!-- This is optional. By default dragPreview will be attached to dragSource -->
<div :ref="dragPreview" :style="{ opacity: isDragging ? 0.5 : 1 }">
<div role="Handle" :ref="drag"/>
</div>
</template>
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1666314173814-63456","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])])],-1),i=n("p",null,"Next, we need a drop target.",-1),u=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t("useDrop"),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue3-dnd'"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t("toRefs"),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@vueuse/core'"),t(`

`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"["),t("collect"),n("span",{class:"token punctuation"},","),t(" drop"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useDrop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
`),n("span",{class:"token comment"},"// allowed type(string|symbol), or type"),t(`
`),n("span",{class:"token literal-property property"},"accept"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'BOX'"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token comment"},"// pass a collect data"),t(`
`),n("span",{class:"token function-variable function"},"collect"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token parameter"},"monitor"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
`),n("span",{class:"token literal-property property"},"isOver"),n("span",{class:"token operator"},":"),t(" monitor"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"isOver"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token literal-property property"},"canDrop"),n("span",{class:"token operator"},":"),t(" monitor"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"canDrop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"{"),t("canDrop"),n("span",{class:"token punctuation"},","),t(" isOver"),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"toRefs"),n("span",{class:"token punctuation"},"("),t("collect"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},":ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("drop"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ backgroundColor: isOver ? "),n("span",{class:"token punctuation"},"'"),t("red"),n("span",{class:"token punctuation"},"'"),t(" : "),n("span",{class:"token punctuation"},"'"),t("white"),n("span",{class:"token punctuation"},"'"),t(" }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
{{ canDrop ? 'Release to drop' : 'Drag a box here' }}
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1666314173815-30416"},"copy success"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`
<script setup lang="ts">
import {useDrop} from 'vue3-dnd'
import {toRefs} from '@vueuse/core'

const [collect, drop] = useDrop(() => ({
// allowed type(string|symbol), or type
accept: 'BOX',
// pass a collect data
collect: monitor => ({
isOver: monitor.isOver(),
canDrop: monitor.canDrop(),
}),
}))
const {canDrop, isOver} = toRefs(collect)
<\/script>

<template>
<div :ref="drop" :style="{ backgroundColor: isOver ? 'red' : 'white' }">
{{ canDrop ? 'Release to drop' : 'Drag a box here' }}
</div>
</template>
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1666314173815-30416","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])])],-1),r=n("p",null,[t("So we have implemented a drag and drop box, you can then read the separate API documentation, or check out "),n("a",{href:"/vue3-dnd/example/"},"example"),t(".")],-1),k=[p,l,i,u,r];function d(m,g,y,f,v,h){return o(),s("div",null,k)}var _=a(c,[["render",d]]);export{D as __pageData,_ as default};
