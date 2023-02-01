import{_ as a,c as s,o as e,P as o,b as n,j as t}from"./app.6e11e860.js";const y='{"title":"Support Vue2","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example"}],"relativePath":"en/guide/vue2.md"}',c={},p=o('<h1 id="support-vue2" tabindex="-1">Support Vue2 <a class="header-anchor" href="#support-vue2" aria-hidden="true">#</a></h1><p>Due to some features of Vue2, there is a slight difference in what we use in Vue2.</p><ol><li>To use in Vue&lt;=2.6, you need to install <a href="https://github.com/vuejs/composition-api" target="_blank" rel="noopener noreferrer">@vue/composition-api</a></li><li>Since Vue2 does not support the dom ref function, we must define an additional ref to host the dom node and pass this ref to our connect function.</li></ol><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2>',4),l=n("div",{class:"language-vue"},[n("div",{class:"highlight-lines"},[n("br"),n("br"),n("div",{class:"highlighted"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlighted"},"\xA0"),n("div",{class:"highlighted"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
     `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(`
         `),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("element"),n("span",{class:"token punctuation"},'"')]),t(`
         `),n("span",{class:"token attr-name"},"role"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Box"),n("span",{class:"token punctuation"},'"')]),t(`
         `),n("span",{class:"token attr-name"},":data-testid"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("`box-${name}`"),n("span",{class:"token punctuation"},'"')]),t(`
     `),n("span",{class:"token punctuation"},">")]),t(`
         {{ name }}
     `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" useDrag "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue3-dnd'"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@vue/composition-api'"),t(`

`),n("span",{class:"token keyword"},"interface"),t(),n("span",{class:"token class-name"},"DropResult"),t(),n("span",{class:"token punctuation"},"{"),t(`
   `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(` string
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"const"),t(" props "),n("span",{class:"token operator"},"="),t(" defineProps"),n("span",{class:"token operator"},"<"),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(" string "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`

`),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"["),t("collect"),n("span",{class:"token punctuation"},","),t(" drag"),n("span",{class:"token punctuation"},","),t(" dragPreview"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"useDrag"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
     `),n("span",{class:"token literal-property property"},"type"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'BOX'"),n("span",{class:"token punctuation"},","),t(`
     `),n("span",{class:"token literal-property property"},"item"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(" props"),n("span",{class:"token punctuation"},"."),t("name "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),t(`

`),n("span",{class:"token keyword"},"const"),t(" element "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token function"},"drag"),n("span",{class:"token punctuation"},"("),t("element"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token comment"},"// optional, the default is consistent with drag"),t(`
`),n("span",{class:"token comment"},"// dragPreview(element)"),t(`
`),n("span",{class:"token comment"},"// same if it is useDrop"),t(`
`),n("span",{class:"token comment"},"// drop(element)"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1675212693832-73500"},"copy success"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`<template>
     <div
         ref="element"
         role="Box"
         :data-testid="\`box-\${name}\`"
     >
         {{ name }}
     </div>
</template>

<script lang="ts" setup>
import { useDrag } from 'vue3-dnd'
import { ref } from '@vue/composition-api'

interface DropResult {
   name: string
}

const props = defineProps<{ name: string }>()

const [collect, drag, dragPreview] = useDrag(() => ({
     type: 'BOX',
     item: { name: props.name },
}))

const element = ref()
drag(element)
// optional, the default is consistent with drag
// dragPreview(element)
// same if it is useDrop
// drop(element)
<\/script>
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1675212693832-73500","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])])],-1),i=[p,l];function r(u,d,k,m,g,h){return e(),s("div",null,i)}var b=a(c,[["render",r]]);export{y as __pageData,b as default};
