import{_ as o,o as a,c as s,b as n,j as t,Q as e}from"./app.2848e89b.js";const P='{"title":"Touch","description":"","frontmatter":{},"headers":[{"level":2,"title":"Install","slug":"install"},{"level":2,"title":"use","slug":"use"}],"relativePath":"en/guide/backend/touch.md"}',c={},i=n("h1",{id:"touch",tabindex:"-1"},[t("Touch "),n("a",{class:"header-anchor",href:"#touch","aria-hidden":"true"},"#")],-1),l=n("p",null,[t("HTML5 Backend does not support touch events. So it doesn't work on tablets and mobile devices. You can use "),n("code",null,"react-dnd-touch-backend"),t(" for touch devices.")],-1),d=n("h2",{id:"install",tabindex:"-1"},[t("Install "),n("a",{class:"header-anchor",href:"#install","aria-hidden":"true"},"#")],-1),p=n("div",{class:"language-bash"},[n("pre",null,[n("code",null,[n("span",{class:"token function"},"npm"),t(),n("span",{class:"token function"},"install"),t(` react-dnd-touch-backend
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1719016925059-58028"},"copy success"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`npm install react-dnd-touch-backend
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1719016925059-58028","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])])],-1),r=n("h2",{id:"use",tabindex:"-1"},[t("use "),n("a",{class:"header-anchor",href:"#use","aria-hidden":"true"},"#")],-1),u=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" TouchBackend"),n("span",{class:"token punctuation"},","),t(" TouchBackendOptions "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'react-dnd-touch-backend'"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" DndProvider "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue3-dnd'"),t(`

`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token literal-property property"},"options"),n("span",{class:"token operator"},":"),t(" TouchBackendOptions "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),t(`

`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("DndProvider")]),t(),n("span",{class:"token attr-name"},":backend"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("TouchBackend"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token comment"},"<!-- your drag-and-drop application -->"),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("DndProvider")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1719016925059-32203"},"copy success"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`
<script setup lang="ts">
import { TouchBackend, TouchBackendOptions } from 'react-dnd-touch-backend'
import { DndProvider } from 'vue3-dnd'

const options: TouchBackendOptions = {

}
<\/script>

<template>
  <DndProvider :backend="TouchBackend" :options="options">
    <!-- your drag-and-drop application -->
  </DndProvider>
</template>
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1719016925059-32203","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])])],-1),k=e("",2),m=n("div",{class:"language-ts"},[n("pre",null,[n("code",null,[n("span",{class:"token comment"},"// allow vertical scrolling"),t(`
`),n("span",{class:"token keyword"},"const"),t(" options "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),t(`
  scrollAngleRanges`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
    `),n("span",{class:"token punctuation"},"{"),t(" start"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},","),t(" end"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"150"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"{"),t(" start"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"210"),n("span",{class:"token punctuation"},","),t(" end"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"330"),t(),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"]"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token comment"},"// allow horizontal scrolling"),t(`
`),n("span",{class:"token keyword"},"const"),t(" options "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),t(`
  scrollAngleRanges`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(" start"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"300"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(" end"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"60"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(" start"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"120"),n("span",{class:"token punctuation"},","),t(" end"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"240"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1719016925060-55819"},"copy success"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`// allow vertical scrolling
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
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1719016925060-55819","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])])],-1),y=e("",1),h=n("div",{class:"language-ts"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"const"),t(" hasNative "),n("span",{class:"token operator"},"="),t(`
  document `),n("span",{class:"token operator"},"&&"),t(),n("span",{class:"token punctuation"},"("),t("document"),n("span",{class:"token punctuation"},"."),t("elementsFromPoint "),n("span",{class:"token operator"},"||"),t(" document"),n("span",{class:"token punctuation"},"."),t("msElementsFromPoint"),n("span",{class:"token punctuation"},")"),t(`

`),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"getDropTargetElementsAtPoint"),n("span",{class:"token punctuation"},"("),t("x"),n("span",{class:"token punctuation"},","),t(" y"),n("span",{class:"token punctuation"},","),t(" dropTargets"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"return"),t(" dropTargets"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"filter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),t("t"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" rect "),n("span",{class:"token operator"},"="),t(" t"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getBoundingClientRect"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"("),t(`
      x `),n("span",{class:"token operator"},">="),t(" rect"),n("span",{class:"token punctuation"},"."),t("left "),n("span",{class:"token operator"},"&&"),t(" x "),n("span",{class:"token operator"},"<="),t(" rect"),n("span",{class:"token punctuation"},"."),t("right "),n("span",{class:"token operator"},"&&"),t(" y "),n("span",{class:"token operator"},"<="),t(" rect"),n("span",{class:"token punctuation"},"."),t("bottom "),n("span",{class:"token operator"},"&&"),t(" y "),n("span",{class:"token operator"},">="),t(" rect"),n("span",{class:"token punctuation"},"."),t(`top
    `),n("span",{class:"token punctuation"},")"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token comment"},"// use custom function only if elementsFromPoint is not supported"),t(`
`),n("span",{class:"token keyword"},"const"),t(" backendOptions "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),t(`
  getDropTargetElementsAtPoint`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token operator"},"!"),t("hasNative "),n("span",{class:"token operator"},"&&"),t(` getDropTargetElementsAtPoint
`),n("span",{class:"token punctuation"},"}"),t(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1719016925060-81292"},"copy success"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`const hasNative =
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
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1719016925060-81292","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])])],-1),g=[i,l,d,p,r,u,k,m,y,h];function f(b,v,_,T,C,w){return a(),s("div",null,g)}var D=o(c,[["render",f]]);export{P as __pageData,D as default};
