import{_ as a,c as s,o as e,P as o,b as n,j as t}from"./app.6e11e860.js";const h='{"title":"\u652F\u6301Vue2","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B"}],"relativePath":"guide/vue2.md"}',c={},p=o('<h1 id="\u652F\u6301vue2" tabindex="-1">\u652F\u6301Vue2 <a class="header-anchor" href="#\u652F\u6301vue2" aria-hidden="true">#</a></h1><p>\u7531\u4E8EVue2\u7684\u4E00\u4E9B\u7279\u6027\uFF0C\u6211\u4EEC\u5728Vue2\u4E2D\u4F7F\u7528\u8FD8\u6709\u4E00\u70B9\u7EC6\u5FAE\u7684\u5DEE\u522B\u3002</p><ol><li>\u5728Vue&lt;=2.6\u4E2D\u4F7F\u7528\uFF0C\u9700\u8981\u5148\u5B89\u88C5<a href="https://github.com/vuejs/composition-api" target="_blank" rel="noopener noreferrer">@vue/composition-api</a></li><li>\u7531\u4E8EVue2\u4E0D\u652F\u6301dom ref\u51FD\u6570\uFF0C\u6240\u4EE5\u6211\u4EEC\u5FC5\u987B\u989D\u5916\u5B9A\u4E49\u4E00\u4E2Aref\uFF0C\u7528\u4E8E\u627F\u8F7Ddom\u8282\u70B9\uFF0C\u5E76\u5C06\u8FD9\u4E2Aref\u4F20\u9012\u7ED9\u6211\u4EEC\u7684connect\u51FD\u6570\u3002</li></ol><h2 id="\u793A\u4F8B" tabindex="-1">\u793A\u4F8B <a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a></h2>',4),l=n("div",{class:"language-vue"},[n("div",{class:"highlight-lines"},[n("br"),n("br"),n("div",{class:"highlighted"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlighted"},"\xA0"),n("div",{class:"highlighted"},"\xA0"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
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
`),n("span",{class:"token comment"},"// \u53EF\u9009\u7684\uFF0C\u9ED8\u8BA4\u4E0Edrag\u4E00\u81F4"),t(`
`),n("span",{class:"token comment"},"// dragPreview(element)"),t(`
`),n("span",{class:"token comment"},"// \u5982\u679C\u662FuseDrop\uFF0C\u4E5F\u662F\u4E00\u6837\u7684"),t(`
`),n("span",{class:"token comment"},"// drop(element)"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)]),n("div",{class:"m-mdic-copy-wrapper"},[n("div",{class:"u-mdic-copy-notify",id:"j-notify-1671151344568-15648"},"copy success"),n("button",{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":`<template>
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
// \u53EF\u9009\u7684\uFF0C\u9ED8\u8BA4\u4E0Edrag\u4E00\u81F4
// dragPreview(element)
// \u5982\u679C\u662FuseDrop\uFF0C\u4E5F\u662F\u4E00\u6837\u7684
// drop(element)
<\/script>
`,"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1671151344568-15648","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"},"copy")])])],-1),r=[p,l];function i(u,k,d,m,g,y){return e(),s("div",null,r)}var f=a(c,[["render",i]]);export{h as __pageData,f as default};
