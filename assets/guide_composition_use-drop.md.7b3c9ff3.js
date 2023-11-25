import{_ as n,c,o as a,Q as o,b as t,j as e}from"./app.84d2bec0.js";const T='{"title":"useDrop","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u53C2\u6570","slug":"\u53C2\u6570"},{"level":2,"title":"\u8FD4\u56DE\u503C","slug":"\u8FD4\u56DE\u503C"},{"level":3,"title":"Specification \u5BF9\u8C61","slug":"specification-\u5BF9\u8C61"}],"relativePath":"guide/composition/use-drop.md"}',d={},s=o('<h1 id="usedrop" tabindex="-1">useDrop <a class="header-anchor" href="#usedrop" aria-hidden="true">#</a></h1><p><code>useDrop</code>\u51FD\u6570\u63D0\u4F9B\u4E86\u4E00\u79CD\u5C06\u4F60\u7684\u7EC4\u4EF6\u4F5C\u4E3A<strong>\u653E\u7F6E\u76EE\u6807</strong>\u8FDE\u63A5\u5230 DnD \u7684\u65B9\u6CD5\u3002\u5B83\u63A5\u6536\u4E00\u4E2A<code>Specification</code>\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7<code>accpet</code>\u6307\u5B9A\u5141\u8BB8\u653E\u7F6E\u7684\u7C7B\u578B\uFF0C\u901A\u8FC7<code>item</code>\u8868\u793A\u62D6\u52A8\u6E90\u7684\u6570\u636E\uFF0C\u901A\u8FC7<code>collect</code>\u83B7\u53D6\u62D6\u62FD\u72B6\u6001\u7B49\u7B49\u3002</p><p><code>useDrop</code>\u8FD4\u56DE\u4E86\u4E24\u4E2A\u503C\uFF1A<code>collect</code>\u51FD\u6570\u7684\u8FD4\u56DE\u503C\uFF0C<code>dropTarget</code>\u7684\u8FDE\u63A5\u5668\u51FD\u6570\u3002</p>',3),i=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("script")]),e(),t("span",{class:"token attr-name"},"setup"),e(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),e("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[e(`
`),t("span",{class:"token keyword"},"import"),e(),t("span",{class:"token punctuation"},"{"),e(" useDrop "),t("span",{class:"token punctuation"},"}"),e(),t("span",{class:"token keyword"},"from"),e(),t("span",{class:"token string"},"'vue3-dnd'"),e(`

`),t("span",{class:"token keyword"},"const"),e(),t("span",{class:"token punctuation"},"["),e("collectedProps"),t("span",{class:"token punctuation"},","),e(" drop"),t("span",{class:"token punctuation"},"]"),e(),t("span",{class:"token operator"},"="),e(),t("span",{class:"token function"},"useDrop"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token operator"},"=>"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),e(`
	`),t("span",{class:"token literal-property property"},"accept"),t("span",{class:"token operator"},":"),e(),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},"'BOX'"),t("span",{class:"token punctuation"},"]"),e(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),e(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),e("script")]),t("span",{class:"token punctuation"},">")]),e(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("template")]),t("span",{class:"token punctuation"},">")]),e(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),e("div")]),e(),t("span",{class:"token attr-name"},":ref"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),e("drop"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),e("Drop Target"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),e("div")]),t("span",{class:"token punctuation"},">")]),e(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),e("template")]),t("span",{class:"token punctuation"},">")]),e(`
`)]),t("div",{class:"m-mdic-copy-wrapper"},[t("div",{class:"u-mdic-copy-notify",id:"j-notify-1700872669342-76341"},"copy success"),t("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`<script setup lang="ts">
import { useDrop } from 'vue3-dnd'

const [collectedProps, drop] = useDrop(() => ({
	accept: ['BOX']
}))
<\/script>

<template>
  <div :ref="drop">Drop Target</div>
</template>
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1700872669342-76341","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])])],-1),l=o('<h2 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h2><p><code>useDrop</code>\u7684\u53C2\u6570\u53EF\u4EE5\u662F\u4E00\u4E2A<code>Specification</code>\u5BF9\u8C61\uFF0C\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u8FD4\u56DE\u4E00\u4E2A<code>Specification</code>\u5BF9\u8C61\uFF0C\u6709\u5173<code>Specification</code>\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u8BF7\u53C2\u8003<a href="#specification-%E5%AF%B9%E8%B1%A1">Specification</a>\u3002</p><h2 id="\u8FD4\u56DE\u503C" tabindex="-1">\u8FD4\u56DE\u503C <a class="header-anchor" href="#\u8FD4\u56DE\u503C" aria-hidden="true">#</a></h2><p><code>useDrop</code>\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5305\u542B\u4E24\u4E2A\u503C\uFF1A<code>collect</code>\u51FD\u6570\u7684\u8FD4\u56DE\u503C\uFF0C<code>dropTarget</code>\u7684\u8FDE\u63A5\u5668\u51FD\u6570</p>',4),p=t("ul",null,[t("li",null,[t("p",null,[t("code",null,"[0] - Collected Props")]),t("ul",null,[t("li",null,[t("div",{class:"language-ts"},[t("pre",null,[t("code",null,`Ref<object>
`),t("div",{class:"m-mdic-copy-wrapper"},[t("div",{class:"u-mdic-copy-notify",id:"j-notify-1700872669344-78874"},"copy success"),t("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`Ref<object>
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1700872669344-78874","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])])])]),t("li",null,[e("\u5B83\u662F\u4E00\u4E2A"),t("code",null,"Ref"),e("\u5BF9\u8C61\uFF0C\u5B83\u7684"),t("code",null,"value"),e("\u6307\u5411"),t("code",null,"collect"),e("\u51FD\u6570\u7684\u8FD4\u56DE\u503C\uFF0C\u5982\u679C\u6CA1\u6709\u5B9A\u4E49"),t("code",null,"collect"),e("\u51FD\u6570\uFF0C\u5B83\u7684"),t("code",null,"value"),e("\u5C31\u662F\u4E00\u4E2A\u7A7A\u5BF9\u8C61")])])]),t("li",null,[t("p",null,[t("code",null,"[1] - DragTarget Connector")]),t("ul",null,[t("li",null,[t("div",{class:"language-ts"},[t("pre",null,[t("code",null,`Ref<(el: Ref<HTMLElement> | HTMLElement) => HTMLElement>
`),t("div",{class:"m-mdic-copy-wrapper"},[t("div",{class:"u-mdic-copy-notify",id:"j-notify-1700872669345-62696"},"copy success"),t("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`Ref<(el: Ref<HTMLElement> | HTMLElement) => HTMLElement>
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1700872669345-62696","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])])])]),t("li",null,[e("\u653E\u7F6E\u76EE\u6807\u7684\u8FDE\u63A5\u5668\u51FD\u6570\u3002"),t("strong",null,"\u5B83\u5FC5\u987B\u88AB\u8C03\u7528"),e("\uFF0C\u5E76\u4E14\u4F20\u5165\u4E00\u4E2A "),t("code",null,"Ref<HTMLElement> | HTMLElement"),e("\u7684\u53EF\u88AB\u62D6\u653E DOM \u5143\u7D20\uFF1B")]),t("li",null,"\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u4E00\u4E2Aoptions\u5BF9\u8C61\uFF0C\u4E0ESpecification\u5BF9\u8C61\u7684options\u4E00\u81F4")])])],-1),r=o('<h3 id="specification-\u5BF9\u8C61" tabindex="-1">Specification \u5BF9\u8C61 <a class="header-anchor" href="#specification-\u5BF9\u8C61" aria-hidden="true">#</a></h3><p>\u5728\u4E86\u89E3<code>Specification</code>\u5BF9\u8C61\u7684\u57FA\u672C\u7528\u6CD5\u4E4B\u524D\uFF0C\u4F60\u53EF\u80FD\u9700\u8981\u5148\u4E86\u89E3\u4E00\u4E0B<a href="./../monitors/drop-target-monitor.html">DropTargetMonitor</a>\u5BF9\u8C61\u3002</p><table><thead><tr><th>Key</th><th>\u5FC5\u586B</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>accept</td><td>\u662F</td><td><code>string | symbol | string[] | symbol[]</code></td><td>\u6B64\u653E\u7F6E\u76EE\u6807\u53EA\u4F1A\u5BF9<a href="./use-drag.html">\u6307\u5B9A\u7C7B\u578B\u7684\u62D6\u52A8\u6E90</a>\u505A\u51FA\u53CD\u5E94\u3002</td></tr><tr><td>collect</td><td>\u5426</td><td><code>(monitor: DropTargetMonitor) =&gt; CollectedProps</code></td><td>\u4E00\u4E2A\u6536\u96C6\u5668\u7684\u51FD\u6570\u3002\u5B83\u5E94\u8BE5\u8FD4\u56DE\u4E00\u4E2A\u666E\u901A\u5BF9\u8C61\u5E76\u6210\u4E3A<code>useDrop</code>\u8FD4\u56DE\u503C\u4E2D\u7684\u7B2C\u4E00\u4E2A\u9879\u3002</td></tr><tr><td>options</td><td>\u5426</td><td><code>object</code></td><td>\u76EE\u524D\u6CA1\u4EC0\u4E48\u7528\u3002</td></tr><tr><td>drop</td><td>\u5426</td><td><code>(item: object, monitor: DropTargetMonitor) =&gt; (void | Record&lt;string, any&gt;)</code></td><td>\u5F53\u62D6\u62FD\u5143\u7D20\u653E\u7F6E\u5728\u76EE\u6807\u4E0A\u65F6\u8C03\u7528\u3002<br>\u4F60\u53EF\u4EE5\u4E0D\u8FD4\u56DE\u4EFB\u4F55\u4E1C\u897F\uFF0C\u4E5F\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u666E\u901A\u5BF9\u8C61\u3002<br>\u5982\u679C\u4F60\u8FD4\u56DE\u4E86\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5B83\u5C06\u6210\u4E3A<code>dropResult</code>,\u5E76\u4E14\u5728<code>drag</code>\u7684<code>end</code>\u65B9\u6CD5\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>monitor.getDropResult()</code>\u83B7\u53D6\u5230\u5B83\u3002\u5982\u679C\u4F60\u60F3\u6839\u636E\u4E0D\u540C\u7684\u653E\u7F6E\u76EE\u6807\u6267\u884C\u4E0D\u540C\u7684\u64CD\u4F5C\uFF0C\u8FD9\u5C06\u662F\u4E00\u4E2A\u4E0D\u9519\u7684\u9009\u62E9\u3002<br>\u5982\u679C\u4F60\u7684\u653E\u7F6E\u76EE\u6807\u662F\u5D4C\u5957\u7684\uFF0C\u90A3\u4F60\u53EF\u4EE5\u901A\u8FC7<code>monitor.didDrop()</code>\u548C<code>monitor.getDropResult()</code>\u6765\u68C0\u67E5\u5D4C\u5957\u76EE\u6807\u662F\u5426\u5DF2\u7ECF\u5904\u7406\u3002<br>\u8FD9\u4E2A\u65B9\u6CD5\u548C<code>drag</code>\u7684<code>end</code>\u65B9\u6CD5\uFF0C\u90FD\u662F\u5904\u7406\u6570\u636E\u53D8\u5316\u7684\u597D\u5730\u65B9\u3002\u5982\u679C<code>canDrop()</code>\u65B9\u6CD5\u8FD4\u56DE<code>false</code>\uFF0C\u5219\u4E0D\u4F1A\u8C03\u7528\u6B64\u65B9\u6CD5\u3002</td></tr><tr><td>hover</td><td>\u5426</td><td><code>(item: object, monitor: DropTargetMonitor) =&gt; void </code></td><td>\u5F53\u62D6\u62FD\u7EC4\u4EF6\u7ECF\u8FC7\u7EC4\u4EF6\u4E0A\u65F6\u8C03\u7528\u8BE5\u65B9\u6CD5\u3002<br>\u4F60\u53EF\u4EE5\u901A\u8FC7\u68C0\u67E5<code>monitor.isOver({ shallow: true })</code>\u6765\u68C0\u67E5\u60AC\u505C\u662F\u4EC5\u53D1\u751F\u5728\u5F53\u524D\u76EE\u6807\u4E0A\u8FD8\u662F\u53D1\u751F\u5728\u5185\u90E8\u7684\u5D4C\u5957\u76EE\u6807\u4E0A\u3002<br>\u548C<code>drop()</code>\u65B9\u6CD5\u4E0D\u540C\u7684\u662F\uFF1A\u5373\u4F7F<code>canDrop()</code>\u8FD4\u56DE\u4E86<code>false</code>\uFF0C\u8BE5\u65B9\u6CD5\u4E5F\u4F1A\u88AB\u8C03\u7528\u3002<br>\u4F60\u53EF\u4EE5\u901A\u8FC7<code>monitor.canDrop()</code>\u6765\u786E\u8BA4\u5E76\u907F\u514D\u8FD9\u79CD\u60C5\u51B5\u3002</td></tr><tr><td>canDrop</td><td>\u5426</td><td><code>(item: DragObject, monitor: DropTargetMonitor&lt;DragObject, DropResult&gt;) =&gt; boolean</code></td><td>\u7528\u4E8E\u6307\u5B9A\u653E\u7F6E\u76EE\u6807\u662F\u5426\u80FD\u591F\u63A5\u53D7\u6B64\u62D6\u62FD\u7EC4\u4EF6\u3002 <br>\u5982\u679C\u4F60\u5E0C\u671B\u603B\u662F\u5141\u8BB8\uFF0C\u8BF7\u5FFD\u7565\u8BE5\u65B9\u6CD5\u3002<br>\u5982\u679C\u4F60\u60F3\u57FA\u4E8E <code>props</code>\u6216<code>monitor.getItem()</code>\u4E2D\u7684\u67D0\u4E9B\u65AD\u8A00\u7981\u7528\u653E\u7F6E\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u7528\u5B83\u3002<br>\u6CE8\u610F\uFF1A\u4F60\u4E0D\u80FD\u5728\u8FD9\u4E2A\u65B9\u6CD5\u4E2D\u8C03\u7528 <code>monitor.canDrop()</code>\u3002</td></tr></tbody></table>',3),u=[s,i,l,p,r];function m(y,k,h,f,g,_){return a(),c("div",null,u)}var D=n(d,[["render",m]]);export{T as __pageData,D as default};
