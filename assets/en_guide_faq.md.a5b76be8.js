import{_ as e,c as s,o,O as a,b as t,j as n}from"./app.e83eb941.js";const I='{"title":"common problem","description":"","frontmatter":{},"headers":[{"level":2,"title":"usage","slug":"usage"},{"level":3,"title":"How to install Vue3 DnD?","slug":"how-to-install-vue3-dnd"},{"level":3,"title":"How to make the component drag and drop only through the specified small handle?","slug":"how-to-make-the-component-drag-and-drop-only-through-the-specified-small-handle"},{"level":3,"title":"How to limit the preview of drag and drop?","slug":"how-to-limit-the-preview-of-drag-and-drop"},{"level":2,"title":"How to make a single element both draggable and droppable?","slug":"how-to-make-a-single-element-both-draggable-and-droppable"},{"level":2,"title":"How to drag and drop a native file?","slug":"how-to-drag-and-drop-a-native-file"},{"level":2,"title":"Could not find the drag and drop manager in the context","slug":"could-not-find-the-drag-and-drop-manager-in-the-context"},{"level":2,"title":"The collect function of useDrop cannot be executed in time","slug":"the-collect-function-of-usedrop-cannot-be-executed-in-time"}],"relativePath":"en/guide/faq.md"}',c={},p=a('<h1 id="common-problem" tabindex="-1">common problem <a class="header-anchor" href="#common-problem" aria-hidden="true">#</a></h1><h2 id="usage" tabindex="-1">usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><h3 id="how-to-install-vue3-dnd" tabindex="-1">How to install Vue3 DnD? <a class="header-anchor" href="#how-to-install-vue3-dnd" aria-hidden="true">#</a></h3>',3),l=t("div",{class:"language-bash"},[t("pre",null,[t("code",null,`npm install vue3-dnd react-dnd-html5-backend
`),t("div",{class:"m-mdic-copy-wrapper"},[t("div",{class:"u-mdic-copy-notify",id:"j-notify-1664353486893-87643"},"copy success"),t("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`npm install vue3-dnd react-dnd-html5-backend
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1664353486893-87643","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])])],-1),i=a('<h3 id="how-to-make-the-component-drag-and-drop-only-through-the-specified-small-handle" tabindex="-1">How to make the component drag and drop only through the specified small handle? <a class="header-anchor" href="#how-to-make-the-component-drag-and-drop-only-through-the-specified-small-handle" aria-hidden="true">#</a></h3><p>Specify the container node as <code>dragPreview</code>, but only set the drag handle to <code>dragSource</code>. See <a href="/vue3-dnd/example/customize/handles-and-previews.html">Example of custom drag handles</a>.</p><h3 id="how-to-limit-the-preview-of-drag-and-drop" tabindex="-1">How to limit the preview of drag and drop? <a class="header-anchor" href="#how-to-limit-the-preview-of-drag-and-drop" aria-hidden="true">#</a></h3><p>By default, you cannot constrain the drag preview movement because the drag preview is drawn by the browser. However, you can use a <a href="/vue3-dnd/example/drag-around/custom-drag-layer.html">custom drag layer</a> where you are free to render anything, including any snaps or constraints.</p><h2 id="how-to-make-a-single-element-both-draggable-and-droppable" tabindex="-1">How to make a single element both draggable and droppable? <a class="header-anchor" href="#how-to-make-a-single-element-both-draggable-and-droppable" aria-hidden="true">#</a></h2><p>The <code>useDrag</code> and <code>useDrop</code> connectors can be used simultaneously. E.g:</p>',6),d=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"setup"),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" useDrop"),t("span",{class:"token punctuation"},","),n(" useDrag "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue3-dnd'"),n(`

`),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},","),n(" drag"),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"useDrag"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},","),n(" drop"),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"useDrop"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},":ref"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("node => drag(drop(node))"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`)]),t("div",{class:"m-mdic-copy-wrapper"},[t("div",{class:"u-mdic-copy-notify",id:"j-notify-1664353486894-6374"},"copy success"),t("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`
<script setup lang="ts">
import { useDrop, useDrag } from 'vue3-dnd'

const [, drag] = useDrag({})
const [, drop] = useDrop({})
<\/script>

<template>
  <div :ref="node => drag(drop(node))"></div>
</template>
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1664353486894-6374","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])])],-1),u=t("h2",{id:"how-to-drag-and-drop-a-native-file",tabindex:"-1"},[n("How to drag and drop a native file? "),t("a",{class:"header-anchor",href:"#how-to-drag-and-drop-a-native-file","aria-hidden":"true"},"#")],-1),r=t("p",null,[n("If you are using "),t("a",{href:"https://www.npmjs.com/package/react-dnd-html5-backend",target:"_blank",rel:"noopener noreferrer"},"HTML5 Backend"),n(", you can use "),t("code",null,"NativeTypes"),n(" to specify a type for the drop target:")],-1),k=t("div",{class:"language-vue"},[t("div",{class:"highlight-lines"},[t("br"),t("div",{class:"highlighted"},"\xA0"),t("br"),t("br"),t("br"),t("div",{class:"highlighted"},"\xA0"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br"),t("br")]),t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" NativeTypes "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'react-dnd-html5-backend'"),n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" useDrop "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue3-dnd'"),n(`

`),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token punctuation"},"["),n("collect"),t("span",{class:"token punctuation"},","),n(" drop"),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"useDrop"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
`),t("span",{class:"token literal-property property"},"accept"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),n("NativeTypes"),t("span",{class:"token punctuation"},"."),t("span",{class:"token constant"},"FILE"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token function"},"drop"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[t("span",{class:"token literal-property property"},"item"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"files"),t("span",{class:"token operator"},":"),n(" any"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token punctuation"},"}")]),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
console`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),n("item"),t("span",{class:"token punctuation"},"."),n("files"),t("span",{class:"token punctuation"},")"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},":ref"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("drop"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`)]),t("div",{class:"m-mdic-copy-wrapper"},[t("div",{class:"u-mdic-copy-notify",id:"j-notify-1664353486894-37964"},"copy success"),t("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`<script lang="ts" setup>
import { NativeTypes } from 'react-dnd-html5-backend'
import { useDrop } from 'vue3-dnd'

const [collect, drop] = useDrop(() => ({
accept: [NativeTypes.FILE],
drop(item: { files: any[] }) {
console.log(item.files)
}
}))
<\/script>

<template>
<div :ref="drop"></div>
</template>
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1664353486894-37964","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])])],-1),m=t("h2",{id:"could-not-find-the-drag-and-drop-manager-in-the-context",tabindex:"-1"},[n("Could not find the drag and drop manager in the context "),t("a",{class:"header-anchor",href:"#could-not-find-the-drag-and-drop-manager-in-the-context","aria-hidden":"true"},"#")],-1),h=t("p",null,[n("Please check if your component is wrapped with "),t("code",null,"DndProvider"),n(".")],-1),y=t("h2",{id:"the-collect-function-of-usedrop-cannot-be-executed-in-time",tabindex:"-1"},[n("The collect function of useDrop cannot be executed in time "),t("a",{class:"header-anchor",href:"#the-collect-function-of-usedrop-cannot-be-executed-in-time","aria-hidden":"true"},"#")],-1),g=t("p",null,"Please check whether the accept parameter you pass in is a constant or a ref. This scenario is common: when the accept parameter is passed in from props, the user directly writes a reference type value in the vue template or render function, as shown below:",-1),f=t("div",{class:"language-vue"},[t("div",{class:"highlight-lines"},[t("br"),t("div",{class:"highlighted"},"\xA0"),t("br"),t("br")]),t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("UseDrop")]),n(),t("span",{class:"token attr-name"},":accept"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("["),t("span",{class:"token punctuation"},"'"),n("box"),t("span",{class:"token punctuation"},"'"),n("]"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("UseDrop")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`)]),t("div",{class:"m-mdic-copy-wrapper"},[t("div",{class:"u-mdic-copy-notify",id:"j-notify-1664353486897-49713"},"copy success"),t("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`<template>
  <UseDrop :accept="['box']"></UseDrop>
</template>
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1664353486897-49713","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])])],-1),b=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token literal-property property"},"name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'UseDrop'"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"setup"),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" useDrop "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue3-dnd'"),n(`
`),t("span",{class:"token keyword"},"const"),n(" props "),t("span",{class:"token operator"},"="),n(" defineProps"),t("span",{class:"token operator"},"<"),t("span",{class:"token punctuation"},"{"),n(),t("span",{class:"token literal-property property"},"accept"),t("span",{class:"token operator"},":"),n(" string"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token operator"},">"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(`

`),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token punctuation"},"["),n("collect"),t("span",{class:"token punctuation"},","),n(" drop"),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"useDrop"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token comment"},"// At this time, the reference of accept will be changed due to the execution of the render function, and then a series of side effects of useDrop will be triggered, resulting in the unsuccessful collection of collect"),n(`
  `),t("span",{class:"token literal-property property"},"accept"),t("span",{class:"token operator"},":"),n(" props"),t("span",{class:"token punctuation"},"."),n("accept"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)]),t("div",{class:"m-mdic-copy-wrapper"},[t("div",{class:"u-mdic-copy-notify",id:"j-notify-1664353486897-26810"},"copy success"),t("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`<script>
export default {
  name: 'UseDrop',
}
<\/script>
<script setup lang="ts">
import { useDrop } from 'vue3-dnd'
const props = defineProps<{ accept: string[] }>()

const [collect, drop] = useDrop(() => ({
  // At this time, the reference of accept will be changed due to the execution of the render function, and then a series of side effects of useDrop will be triggered, resulting in the unsuccessful collection of collect
  accept: props.accept,
}))
<\/script>
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1664353486897-26810","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])])],-1),v=t("p",null,"solution",-1),w=t("div",{class:"language-vue"},[t("div",{class:"highlight-lines"},[t("br"),t("div",{class:"highlighted"},"\xA0"),t("br"),t("br"),t("div",{class:"highlighted"},"\xA0"),t("br"),t("br")]),t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("UseDrop")]),n(),t("span",{class:"token attr-name"},":accept"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("accept"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("UseDrop")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"setup"),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"const"),n(" accept "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},"'box'"),t("span",{class:"token punctuation"},"]"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)]),t("div",{class:"m-mdic-copy-wrapper"},[t("div",{class:"u-mdic-copy-notify",id:"j-notify-1664353486898-25525"},"copy success"),t("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`<template>
<UseDrop :accept="accept"></UseDrop>
</template>
<script setup>
const accept = ['box']
<\/script>
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1664353486898-25525","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])])],-1),_=[p,l,i,d,u,r,k,m,h,y,g,f,b,v,w];function C(x,D,T,j,N,$){return o(),s("div",null,_)}var P=e(c,[["render",C]]);export{I as __pageData,P as default};
