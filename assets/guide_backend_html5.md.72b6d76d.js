import{_ as a,c,o,Q as n,b as t,j as e}from"./app.84d2bec0.js";const f='{"title":"HTML5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":3,"title":"\u989D\u5916\u529F\u80FD","slug":"\u989D\u5916\u529F\u80FD"},{"level":2,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"}],"relativePath":"guide/backend/html5.md"}',s={},d=n('<h1 id="html5" tabindex="-1">HTML5 <a class="header-anchor" href="#html5" aria-hidden="true">#</a></h1><p>\u8FD9\u662F\u7531<code>react-dnd</code>\u4E3B\u8981\u652F\u6301\u7684Backend\u3002\u5B83\u5728\u5E95\u5C42\u4F7F\u7528\u4E86<code>HTML5</code>\u7684<code>Drag</code>\u548C<code>Drop</code>\u4E8B\u4EF6\u3002\u5E76\u4E14\u5904\u7406\u4E86<a href="http://quirksmode.org/blog/archives/2009/09/the_html5_drag.html" target="_blank" rel="noopener noreferrer">\u5B83\u7684\u4E00\u4E9B\u95EE\u9898</a>\u3002</p><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2>',3),i=t("div",{class:"language-bash"},[t("pre",null,[t("code",null,`npm install react-dnd-html5-backend
`),t("div",{class:"m-mdic-copy-wrapper"},[t("div",{class:"u-mdic-copy-notify",id:"j-notify-1708994261838-71867"},"copy success"),t("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`npm install react-dnd-html5-backend
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1708994261838-71867","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])])],-1),l=n('<h3 id="\u989D\u5916\u529F\u80FD" tabindex="-1">\u989D\u5916\u529F\u80FD <a class="header-anchor" href="#\u989D\u5916\u529F\u80FD" aria-hidden="true">#</a></h3><p>\u9664\u4E86\u5BFC\u51FA\u7684<code>Backend</code>\uFF0CHTML5 Backend \u8FD8\u63D0\u4F9B\u4E86\u4E00\u4E9B\u989D\u5916\u7684\u529F\u80FD:</p><ul><li><code>getEmptyImage()</code>: \u5B83\u662F\u4E00\u4E2A\u8FD4\u56DE\u900F\u660E\u7A7A\u56FE\u50CF\u7684\u51FD\u6570\u3002\u7528\u4E8E\u4F7F\u7528DragSource\u7684<code>dragPreview</code>\u8FDE\u63A5\u5668\u6765\u5B8C\u5168\u9690\u85CF\u6D4F\u89C8\u5668\u7ED8\u5236\u7684\u62D6\u52A8\u9884\u89C8\u3002\u65B9\u4FBF\u7ED8\u5236\u81EA\u5B9A\u4E49\u62D6\u52A8\u5C42<code>DragLayer</code>\u3002\u8BF7\u6CE8\u610F\uFF0C\u81EA\u5B9A\u4E49\u62D6\u62FD\u9884\u89C8\u5728IE\u4E2D\u4E0D\u8D77\u4F5C\u7528\u3002</li><li><code>NativeTypes</code>: \u4E09\u4E2A\u5E38\u91CF<code>NativeTypes</code>\u7684\u679A\u4E3E\u3002<code>NativeTypes.FILE</code>, <code>NativeTypes.URL</code>\u548C <code>NativeTypes.TEXT</code>\u3002\u60A8\u53EF\u4EE5\u7ED9\u653E\u7F6E\u76EE\u6807\u6307\u5B9A\u8FD9\u4E9B\u7C7B\u578B\uFF0C\u7528\u4E8E\u5904\u7406\u672C\u5730\u6587\u4EF6\u3001url\u6216\u5E38\u89C4\u9875\u9762\u6587\u672C\u7684\u62D6\u62FD\u653E\u7F6E\u3002</li></ul><h2 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h2>',4),p=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[e(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("script")]),e(),t("span",{class:"token attr-name"},"setup"),e(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),e("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[e(`
`),t("span",{class:"token keyword"},"import"),e(),t("span",{class:"token punctuation"},"{"),e(" HTML5Backend "),t("span",{class:"token punctuation"},"}"),e(),t("span",{class:"token keyword"},"from"),e(),t("span",{class:"token string"},"'react-dnd-html5-backend'"),e(`
`),t("span",{class:"token keyword"},"import"),e(),t("span",{class:"token punctuation"},"{"),e(" DndProvider "),t("span",{class:"token punctuation"},"}"),e(),t("span",{class:"token keyword"},"from"),e(),t("span",{class:"token string"},"'vue3-dnd'"),e(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),e("script")]),t("span",{class:"token punctuation"},">")]),e(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("template")]),t("span",{class:"token punctuation"},">")]),e(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("DndProvider")]),e(),t("span",{class:"token attr-name"},":backend"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),e("HTML5Backend"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),e(`
    `),t("span",{class:"token comment"},"<!-- your drag-and-drop application -->"),e(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),e("DndProvider")]),t("span",{class:"token punctuation"},">")]),e(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),e("template")]),t("span",{class:"token punctuation"},">")]),e(`
`)]),t("div",{class:"m-mdic-copy-wrapper"},[t("div",{class:"u-mdic-copy-notify",id:"j-notify-1708994261839-99850"},"copy success"),t("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`
<script setup lang="ts">
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'vue3-dnd'
<\/script>

<template>
  <DndProvider :backend="HTML5Backend">
    <!-- your drag-and-drop application -->
  </DndProvider>
</template>
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1708994261839-99850","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])])],-1),r=n("<p>\u5F53\u4F60\u5728<code>monitor</code>\u76D1\u89C6\u5668\u4E0A\u8C03\u7528<code>getItem()</code>\u65F6\uFF0CHTML5 Backend\u4F1A\u6839\u636Edrop\u7C7B\u578B\u66B4\u9732\u4E8B\u4EF6\u4E2D\u7684\u5404\u79CD\u6570\u636E:</p><ul><li><code>NativeTypes.FILE</code>: <ul><li><code>getItem().files</code>, \u4E00\u4E2A\u6570\u7EC4\uFF0C\u5305\u542B\u62D6\u62FD\u7684\u6587\u4EF6</li><li><code>getItem().items</code>, \u4F7F\u7528 <code>event.dataTransfer.items</code>\uFF08\u60A8\u53EF\u4EE5\u5728\u5220\u9664\u76EE\u5F55\u65F6\u4F7F\u7528\u5B83\u6765\u5217\u51FA\u6587\u4EF6\uFF09</li></ul></li><li><code>NativeTypes.URL</code>: <ul><li><code>getItem().url</code>, \u4E00\u4E2A\u6570\u7EC4\uFF0C\u5305\u542B\u62D6\u62FD\u7684 URL</li></ul></li><li><code>NativeTypes.TEXT</code>: <ul><li><code>getItem().text</code>, \u62D6\u62FD\u7684\u6587\u672C</li></ul></li></ul>",2),u=[d,i,l,p,r];function m(k,y,h,_,g,T){return o(),c("div",null,u)}var b=a(s,[["render",m]]);export{f as __pageData,b as default};