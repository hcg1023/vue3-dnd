import{_ as o,c,o as a,b as t,j as n,P as e}from"./app.6e11e860.js";const E='{"title":"Touch","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":2,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"},{"level":2,"title":"Options\u9009\u9879","slug":"options\u9009\u9879"}],"relativePath":"guide/backend/touch.md"}',d={},s=t("h1",{id:"touch",tabindex:"-1"},[n("Touch "),t("a",{class:"header-anchor",href:"#touch","aria-hidden":"true"},"#")],-1),i=t("p",null,[n("HTML5 Backend\u4E0D\u652F\u6301\u89E6\u6478\u4E8B\u4EF6\u3002\u6240\u4EE5\u5B83\u4E0D\u9002\u7528\u4E8E\u5E73\u677F\u7535\u8111\u548C\u79FB\u52A8\u8BBE\u5907\u3002\u4F60\u53EF\u4EE5\u5C06"),t("code",null,"react-dnd-touch-backend"),n("\u7528\u4E8E\u89E6\u6478\u8BBE\u5907\u3002")],-1),l=t("h2",{id:"\u5B89\u88C5",tabindex:"-1"},[n("\u5B89\u88C5 "),t("a",{class:"header-anchor",href:"#\u5B89\u88C5","aria-hidden":"true"},"#")],-1),r=t("div",{class:"language-bash"},[t("pre",null,[t("code",null,`npm install react-dnd-touch-backend
`),t("div",{class:"m-mdic-copy-wrapper"},[t("div",{class:"u-mdic-copy-notify",id:"j-notify-1677026604984-28933"},"copy success"),t("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`npm install react-dnd-touch-backend
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1677026604984-28933","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])])],-1),p=t("h2",{id:"\u4F7F\u7528",tabindex:"-1"},[n("\u4F7F\u7528 "),t("a",{class:"header-anchor",href:"#\u4F7F\u7528","aria-hidden":"true"},"#")],-1),u=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"setup"),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" TouchBackend"),t("span",{class:"token punctuation"},","),n(" TouchBackendOptions  "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'react-dnd-touch-backend'"),n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" DndProvider "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue3-dnd'"),n(`

`),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token literal-property property"},"options"),t("span",{class:"token operator"},":"),n(" TouchBackendOptions "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"{"),n(`
	
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("DndProvider")]),n(),t("span",{class:"token attr-name"},":backend"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("TouchBackend"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":options"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("options"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token comment"},"<!-- your drag-and-drop application -->"),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("DndProvider")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`)]),t("div",{class:"m-mdic-copy-wrapper"},[t("div",{class:"u-mdic-copy-notify",id:"j-notify-1677026604985-72179"},"copy success"),t("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`
<script setup lang="ts">
import { TouchBackend, TouchBackendOptions  } from 'react-dnd-touch-backend'
import { DndProvider } from 'vue3-dnd'

const options: TouchBackendOptions = {
	
}
<\/script>

<template>
  <DndProvider :backend="TouchBackend" :options="options">
    <!-- your drag-and-drop application -->
  </DndProvider>
</template>
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1677026604985-72179","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])])],-1),m=e("",2),y=t("div",{class:"language-ts"},[t("pre",null,[t("code",null,`// allow vertical scrolling
const options = {
  scrollAngleRanges: [
    { start: 30, end: 150 },
    { start: 210, end: 330 }
  ]
}
// allow horizontal scrolling
const options = {
  scrollAngleRanges: [{ start: 300 }, { end: 60 }, { start: 120, end: 240 }]
}
`),t("div",{class:"m-mdic-copy-wrapper"},[t("div",{class:"u-mdic-copy-notify",id:"j-notify-1677026604985-57544"},"copy success"),t("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`// allow vertical scrolling
const options = {
  scrollAngleRanges: [
    { start: 30, end: 150 },
    { start: 210, end: 330 }
  ]
}
// allow horizontal scrolling
const options = {
  scrollAngleRanges: [{ start: 300 }, { end: 60 }, { start: 120, end: 240 }]
}
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1677026604985-57544","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])])],-1),h=e("",1),k=t("div",{class:"language-ts"},[t("pre",null,[t("code",null,`const hasNative =
  document && (document.elementsFromPoint || document.msElementsFromPoint)

function getDropTargetElementsAtPoint(x, y, dropTargets) {
  return dropTargets.filter((t) => {
    const rect = t.getBoundingClientRect()
    return (
      x >= rect.left && x <= rect.right && y <= rect.bottom && y >= rect.top
    )
  })
}

// use custom function only if elementsFromPoint is not supported
const backendOptions = {
  getDropTargetElementsAtPoint: !hasNative && getDropTargetElementsAtPoint
}
`),t("div",{class:"m-mdic-copy-wrapper"},[t("div",{class:"u-mdic-copy-notify",id:"j-notify-1677026604986-54225"},"copy success"),t("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`const hasNative =
  document && (document.elementsFromPoint || document.msElementsFromPoint)

function getDropTargetElementsAtPoint(x, y, dropTargets) {
  return dropTargets.filter((t) => {
    const rect = t.getBoundingClientRect()
    return (
      x >= rect.left && x <= rect.right && y <= rect.bottom && y >= rect.top
    )
  })
}

// use custom function only if elementsFromPoint is not supported
const backendOptions = {
  getDropTargetElementsAtPoint: !hasNative && getDropTargetElementsAtPoint
}
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1677026604986-54225","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])])],-1),b=[s,i,l,r,p,u,m,y,h,k];function g(f,_,v,T,C,x){return a(),c("div",null,b)}var A=o(d,[["render",g]]);export{E as __pageData,A as default};
