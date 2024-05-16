import{_ as n,o as a,c,Q as o,b as t,j as e}from"./app.1c8e75ae.js";const v='{"title":"useDrop","description":"","frontmatter":{},"headers":[{"level":2,"title":"parameters","slug":"parameters"},{"level":2,"title":"return value","slug":"return-value"},{"level":3,"title":"Specification object","slug":"specification-object"}],"relativePath":"en/guide/composition/use-drop.md"}',s={},d=o('<h1 id="usedrop" tabindex="-1">useDrop <a class="header-anchor" href="#usedrop" aria-hidden="true">#</a></h1><p>The <code>useDrop</code> function provides a way to connect your component to DnD as a drop target. It accepts a <code>Specification</code>, you can specify the type of allowed drop through <code>accpet</code>, the data of the drag source through <code>item</code>, the drag state through <code>collect</code>, and so on.</p><p><code>useDrop</code> returns two values: the return value of the <code>collect</code> function, and the connector function of <code>dropTarget</code>.</p>',3),i=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("script")]),e(),t("span",{class:"token attr-name"},"setup"),e(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),e("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[e(`
`),t("span",{class:"token keyword"},"import"),e(),t("span",{class:"token punctuation"},"{"),e(" useDrop "),t("span",{class:"token punctuation"},"}"),e(),t("span",{class:"token keyword"},"from"),e(),t("span",{class:"token string"},"'vue3-dnd'"),e(`

`),t("span",{class:"token keyword"},"const"),e(),t("span",{class:"token punctuation"},"["),e("collectedProps"),t("span",{class:"token punctuation"},","),e(" drop"),t("span",{class:"token punctuation"},"]"),e(),t("span",{class:"token operator"},"="),e(),t("span",{class:"token function"},"useDrop"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token operator"},"=>"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),e(`
`),t("span",{class:"token literal-property property"},"accept"),t("span",{class:"token operator"},":"),e(),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},"'BOX'"),t("span",{class:"token punctuation"},"]"),e(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),e(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),e("script")]),t("span",{class:"token punctuation"},">")]),e(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("template")]),t("span",{class:"token punctuation"},">")]),e(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("div")]),e(),t("span",{class:"token attr-name"},":ref"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),e("drop"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),e("Drop Target"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),e("div")]),t("span",{class:"token punctuation"},">")]),e(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),e("template")]),t("span",{class:"token punctuation"},">")]),e(`
`)]),t("div",{class:"m-mdic-copy-wrapper"},[t("div",{class:"u-mdic-copy-notify",id:"j-notify-1715820052175-293"},"copy success"),t("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`<script setup lang="ts">
import { useDrop } from 'vue3-dnd'

const [collectedProps, drop] = useDrop(() => ({
accept: ['BOX']
}))
<\/script>

<template>
  <div :ref="drop">Drop Target</div>
</template>
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1715820052175-293","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])])],-1),r=o('<h2 id="parameters" tabindex="-1">parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h2><p>The parameter of <code>useDrop</code> can be a <code>Specification</code> object or a function that returns a <code>Specification</code> object. For more information about <code>Specification</code>, please refer to <a href="#specification-object">Specification</a>.</p><h2 id="return-value" tabindex="-1">return value <a class="header-anchor" href="#return-value" aria-hidden="true">#</a></h2><p><code>useDrop</code> returns an array containing two values: the return value of the <code>collect</code> function, the connector function of <code>dropTarget</code></p>',4),l=t("ul",null,[t("li",null,[t("p",null,[t("code",null,"[0] - Collected Props")]),t("ul",null,[t("li",null,[t("div",{class:"language-ts"},[t("pre",null,[t("code",null,[e("Ref"),t("span",{class:"token operator"},"<"),e("object"),t("span",{class:"token operator"},">"),e(`
`)]),t("div",{class:"m-mdic-copy-wrapper"},[t("div",{class:"u-mdic-copy-notify",id:"j-notify-1715820052176-13959"},"copy success"),t("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`Ref<object>
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1715820052176-13959","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])])])]),t("li",null,[e("It is a "),t("code",null,"Ref"),e(" object, its "),t("code",null,"value"),e(" points to the return value of the "),t("code",null,"collect"),e(" function, if the "),t("code",null,"collect"),e(" function is not defined, its "),t("code",null,"value"),e(" is an empty object")])])]),t("li",null,[t("p",null,[t("code",null,"[1] - DragTarget Connector")]),t("ul",null,[t("li",null,[t("div",{class:"language-ts"},[t("pre",null,[t("code",null,[e("Ref"),t("span",{class:"token operator"},"<"),t("span",{class:"token punctuation"},"("),e("el"),t("span",{class:"token operator"},":"),e(" Ref"),t("span",{class:"token operator"},"<"),e("HTMLElement"),t("span",{class:"token operator"},">"),e(),t("span",{class:"token operator"},"|"),e(" HTMLElement"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token operator"},"=>"),e(" HTMLElement"),t("span",{class:"token operator"},">"),e(`
`)]),t("div",{class:"m-mdic-copy-wrapper"},[t("div",{class:"u-mdic-copy-notify",id:"j-notify-1715820052176-4059"},"copy success"),t("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`Ref<(el: Ref<HTMLElement> | HTMLElement) => HTMLElement>
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1715820052176-4059","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])])])]),t("li",null,[e("The linker function for the drop target. "),t("strong",null,"It must be called"),e(", and pass a "),t("code",null,"Ref<HTMLElement> | HTMLElement"),e(" draggable DOM element;")]),t("li",null,"The second parameter is an options object, which is consistent with the options of the Specification object")])])],-1),p=o('<h3 id="specification-object" tabindex="-1">Specification object <a class="header-anchor" href="#specification-object" aria-hidden="true">#</a></h3><p>Before understanding the basic usage of the <code>Specification</code> object, you may need to understand the <a href="./../monitors/drop-target-monitor.html">DropTargetMonitor</a> object.</p><table><thead><tr><th>Key</th><th>Required</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>accept</td><td>yes</td><td><code>string | symbol | string[] | symbol[]</code></td><td>This drop target will only react to <a href="./use-drag.html">a drag source of the specified type</a>.</td></tr><tr><td>collect</td><td>no</td><td><code>(monitor: DropTargetMonitor) =&gt; CollectedProps</code></td><td>A function for a collector. It should return a plain object and be the first item in the return value of <code>useDrop</code>.</td></tr><tr><td>options</td><td>no</td><td><code>object</code></td><td>currently useless.</td></tr><tr><td>drop</td><td>no</td><td><code>(item: object, monitor: DropTargetMonitor) =&gt; (void | Record&lt;string, any&gt;)</code></td><td>Called when the drop element is dropped on the target. <br>You can return nothing, or you can return a plain object. <br>If you return an object, it becomes <code>dropResult</code>, and in the <code>end</code> method of <code>drag</code>, it can be obtained by <code>monitor.getDropResult()</code>. This is a good choice if you want to perform different actions based on different drop targets. <br>If your drop target is nested, then you can check if the nested target has been processed with <code>monitor.didDrop()</code> and <code>monitor.getDropResult()</code>. <br>This method, along with the <code>end</code> method of <code>drag</code>, is a good place to handle data changes. This method will not be called if the <code>canDrop()</code> method returns <code>false</code>.</td></tr><tr><td>hover</td><td>no</td><td><code>(item: object, monitor: DropTargetMonitor) =&gt; void </code></td><td>This method is called when the dragged component passes over the component. <br>You can check if the hover is only happening on the current target or on the inner nested target by checking <code>monitor.isOver({ shallow: true })</code>. <br>The difference from the <code>drop()</code> method is that this method will be called even if <code>canDrop()</code> returns <code>false</code>. <br>You can confirm and avoid this with <code>monitor.canDrop()</code>.</td></tr><tr><td>canDrop</td><td>no</td><td><code>(item: DragObject, monitor: DropTargetMonitor&lt;DragObject, DropResult&gt;) =&gt; boolean</code></td><td>Use it to specify whether the drop target is able to accept the item. <br>If you want to always allow it, omit this method. <br>Specifying it is handy if you&#39;d like to disable dropping based on some predicate over <code>props</code> or <code>monitor.getItem()</code>. <br>Note: You may not call <code>monitor.canDrop()</code> inside this method.</td></tr></tbody></table>',3),u=[d,i,r,l,p];function m(h,y,f,k,g,b){return a(),c("div",null,u)}var T=n(s,[["render",m]]);export{v as __pageData,T as default};
