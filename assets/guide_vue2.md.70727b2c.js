import{_ as n,c as a,o as s,M as t}from"./app.e3545364.js";const m='{"title":"\u652F\u6301Vue2","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B"}],"relativePath":"guide/vue2.md"}',p={},e=t(`<h1 id="\u652F\u6301vue2" tabindex="-1">\u652F\u6301Vue2 <a class="header-anchor" href="#\u652F\u6301vue2" aria-hidden="true">#</a></h1><p>\u7531\u4E8EVue2\u7684\u4E00\u4E9B\u7279\u6027\uFF0C\u6211\u4EEC\u5728Vue2\u4E2D\u4F7F\u7528\u8FD8\u6709\u4E00\u70B9\u7EC6\u5FAE\u7684\u5DEE\u522B\u3002</p><ol><li>\u5728Vue2\u4E2D\u4F7F\u7528\uFF0C\u9700\u8981\u5148\u5B89\u88C5<a href="https://github.com/vuejs/composition-api" target="_blank" rel="noopener noreferrer">@vue/composition-api</a></li><li>\u7531\u4E8EVue2\u4E0D\u652F\u6301dom ref\u51FD\u6570\uFF0C\u6240\u4EE5\u6211\u4EEC\u5FC5\u987B\u989D\u5916\u5B9A\u4E49\u4E00\u4E2Aref\uFF0C\u7528\u4E8E\u627F\u8F7Ddom\u8282\u70B9\uFF0C\u5E76\u5C06\u8FD9\u4E2Aref\u4F20\u9012\u7ED9\u6211\u4EEC\u7684connect\u51FD\u6570\u3002</li></ol><h2 id="\u793A\u4F8B" tabindex="-1">\u793A\u4F8B <a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a></h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
        <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>element<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">role</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Box<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:data-testid</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\`box-\${name}\`<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">&gt;</span></span>
        {{ name }}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useDrag <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue3-dnd&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vue/composition-api&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">DropResult</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string
<span class="token punctuation">}</span>

<span class="token keyword">const</span> props <span class="token operator">=</span> defineProps<span class="token operator">&lt;</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> string <span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">[</span>collect<span class="token punctuation">,</span> drag<span class="token punctuation">,</span> dragPreview<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useDrag</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;BOX&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">item</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> props<span class="token punctuation">.</span>name <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
drag<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span>
<span class="token comment">// \u53EF\u9009\u7684\uFF0C\u9ED8\u8BA4\u4E0Edrag\u4E00\u81F4</span>
dragPreview<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span>
<span class="token comment">// \u5982\u679C\u662FuseDrop\uFF0C\u4E5F\u662F\u4E00\u6837\u7684</span>
<span class="token comment">// drop.value(element)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,5),o=[e];function c(l,u,r,k,i,d){return s(),a("div",null,o)}var _=n(p,[["render",c]]);export{m as __pageData,_ as default};
