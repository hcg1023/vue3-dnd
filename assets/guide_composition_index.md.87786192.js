import{_ as a,c as s,o,P as e,b as n,j as t}from"./app.6e11e860.js";const _='{"title":"Composition API","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u793A\u4F8B","slug":"\u57FA\u672C\u793A\u4F8B"}],"relativePath":"guide/composition/index.md"}',c={},p=e('<h1 id="composition-api" tabindex="-1">Composition API <a class="header-anchor" href="#composition-api" aria-hidden="true">#</a></h1><p>\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E09\u4E2A\u4E3B\u8981\u7684\u94A9\u5B50\u6765\u5C06\u4F60\u7684\u7EC4\u4EF6\u8FDE\u63A5\u5230Vue3 DnD\u3002\u5E76\u4E14\u63D0\u4F9B\u4E86\u7B2C\u56DB\u4E2A\u94A9\u5B50\u6765\u8BA9\u4F60\u5728\u5F00\u53D1\u6216\u6D4B\u8BD5\u4E2D\u8FDE\u63A5\u5230Vue3 DnD\u3002</p><ul><li><code>useDrag</code></li><li><code>useDrop</code></li><li><code>useDragLayer</code></li><li><code>useDragDropManager</code>\uFF08\u5F00\u53D1/\u6D4B\u8BD5\u6302\u94A9\uFF09</li></ul><h2 id="\u57FA\u672C\u793A\u4F8B" tabindex="-1">\u57FA\u672C\u793A\u4F8B <a class="header-anchor" href="#\u57FA\u672C\u793A\u4F8B" aria-hidden="true">#</a></h2><p>\u4F7F\u7528composition api\u5236\u4F5C\u4E00\u4E2A\u7B80\u5355\u7684\u53EF\u4EE5\u62D6\u653E\u7684\u76D2\u5B50\u3002</p>',5),l=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" useDrag "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue3-dnd'"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" toRefs "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},'"@vueuse/core"'),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"["),t("collect"),n("span",{class:"token punctuation"},","),t(" drag"),n("span",{class:"token punctuation"},","),t(" dragPreview"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useDrag"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token comment"},"// \u201Ctype\u201D\u662F\u5FC5\u9700\u7684\u3002\u5B83\u7531\u653E\u7F6E\u76EE\u6807\u7684\u201Caccept\u201D\u4F7F\u7528\u3002"),t(`
	`),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'BOX'"),n("span",{class:"token punctuation"},","),t(`
	`),n("span",{class:"token comment"},"// collect \u51FD\u6570\u4F20\u5165\u4E00\u4E2A\u201C\u76D1\u89C6\u5668\u201D\u5B9E\u4F8B\uFF0C\u7528\u4E8E\u4ECE DnD \u4E2D\u83B7\u53D6\u9700\u8981\u7684\u72B6\u6001\u4FE1\u606F\u3002"),t(`
	`),n("span",{class:"token function-variable function"},"collect"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"monitor"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token literal-property property"},"isDragging"),n("span",{class:"token operator"},":"),t(" monitor"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"isDragging"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token comment"},"// collect\u662F\u4E00\u4E2ARef\u5BF9\u8C61\uFF0C\u9ED8\u8BA4\u53D6\u503C\u9700\u8981\u4ECEcollect.value\u4E2D\u83B7\u53D6,"),t(`
`),n("span",{class:"token comment"},"// \u53EF\u4EE5\u4F7F\u7528toRefs\u5C06Ref\u5BF9\u8C61\u8F6C\u6362\u4E3A\u53EF\u89E3\u6784\u7684\u5BF9\u8C61"),t(`
`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"{"),t(" isDragging "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"toRefs"),n("span",{class:"token punctuation"},"("),t("collect"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
	`),n("span",{class:"token comment"},"<!-- \u8FD9\u662F\u53EF\u9009\u7684\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CdragPreview \u5C06\u9644\u52A0\u5230 dragSource -->"),t(`
	`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},":ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("dragPreview"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ opacity: isDragging ? 0.5 : 1 }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
		`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"role"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Handle"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("drag"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},"/>")]),t(`
	`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1674521224638-14916"},"copy success"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`<script setup lang="ts">
import { useDrag } from 'vue3-dnd'
import { toRefs } from "@vueuse/core";

const [collect, drag, dragPreview] = useDrag(() => ({
	// \u201Ctype\u201D\u662F\u5FC5\u9700\u7684\u3002\u5B83\u7531\u653E\u7F6E\u76EE\u6807\u7684\u201Caccept\u201D\u4F7F\u7528\u3002
	type: 'BOX',
	// collect \u51FD\u6570\u4F20\u5165\u4E00\u4E2A\u201C\u76D1\u89C6\u5668\u201D\u5B9E\u4F8B\uFF0C\u7528\u4E8E\u4ECE DnD \u4E2D\u83B7\u53D6\u9700\u8981\u7684\u72B6\u6001\u4FE1\u606F\u3002
	collect: (monitor) => ({
		isDragging: monitor.isDragging()
	})
}))
// collect\u662F\u4E00\u4E2ARef\u5BF9\u8C61\uFF0C\u9ED8\u8BA4\u53D6\u503C\u9700\u8981\u4ECEcollect.value\u4E2D\u83B7\u53D6,
// \u53EF\u4EE5\u4F7F\u7528toRefs\u5C06Ref\u5BF9\u8C61\u8F6C\u6362\u4E3A\u53EF\u89E3\u6784\u7684\u5BF9\u8C61
const { isDragging } = toRefs(collect)
<\/script>

<template>
	<!-- \u8FD9\u662F\u53EF\u9009\u7684\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CdragPreview \u5C06\u9644\u52A0\u5230 dragSource -->
	<div :ref="dragPreview" :style="{ opacity: isDragging ? 0.5 : 1 }">
		<div role="Handle" :ref="drag"/>
	</div>
</template>
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1674521224638-14916","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])])],-1),i=n("p",null,"\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u9700\u8981\u4E00\u4E2A\u653E\u7F6E\u76EE\u6807\u3002",-1),u=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t("useDrop"),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue3-dnd'"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t("toRefs"),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@vueuse/core'"),t(`

`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"["),t("collect"),n("span",{class:"token punctuation"},","),t(" drop"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useDrop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token comment"},"// \u5141\u8BB8\u653E\u7F6E\u7684type(string|symbol)\uFF0C\u6216\u8005types"),t(`
	`),n("span",{class:"token literal-property property"},"accept"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'BOX'"),n("span",{class:"token punctuation"},","),t(`
	`),n("span",{class:"token comment"},"// \u4F20\u9012\u4E2Acollect\u7684\u6570\u636E"),t(`
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
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1674521224639-7865"},"copy success"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`
<script setup lang="ts">
import {useDrop} from 'vue3-dnd'
import {toRefs} from '@vueuse/core'

const [collect, drop] = useDrop(() => ({
	// \u5141\u8BB8\u653E\u7F6E\u7684type(string|symbol)\uFF0C\u6216\u8005types
	accept: 'BOX',
	// \u4F20\u9012\u4E2Acollect\u7684\u6570\u636E
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
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1674521224639-7865","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])])],-1),r=n("p",null,[t("\u8FD9\u6837\u6211\u4EEC\u5C31\u5B9E\u73B0\u4E86\u4E00\u4E2A\u62D6\u62FD\u7684\u76D2\u5B50\uFF0C\u4F60\u53EF\u4EE5\u63A5\u7740\u9605\u8BFB\u5355\u72EC\u7684API\u6587\u6863\uFF0C\u6216\u8005\u67E5\u770B"),n("a",{href:"/vue3-dnd/example/"},"\u793A\u4F8B"),t("\u3002")],-1),k=[p,l,i,u,r];function d(m,g,y,f,v,h){return o(),s("div",null,k)}var b=a(c,[["render",d]]);export{_ as __pageData,b as default};
