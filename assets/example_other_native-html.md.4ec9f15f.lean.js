import{_ as a}from"./chunks/Container.c37412ab.js";import{c as t,a as p,b as n,r as o,o as e}from"./app.e83eb941.js";import"./chunks/index.444fde16.js";const E=n("p",null,"\u6F14\u793A\u672C\u673A html \u62D6\u653E\u7684\u793A\u4F8B\u3002\u975E\u5E38\u9002\u5408\u4ECE\u53E6\u4E00\u4E2A\u9009\u9879\u5361\u6216 iframe \u62D6\u52A8\u56FE\u50CF\u3002",-1),c=n("hr",null,null,-1),m='{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"example/other/native-html.md"}',l={},d=Object.assign(l,{setup(D){const C={"@/.vitepress/examples/06-other/native-html":a};return(u,r)=>{const s=o("Demo");return e(),t("div",null,[E,c,p(s,{demo:C["@/.vitepress/examples/06-other/native-html"],source:"%7B%22Container.vue%22%3A%7B%22type%22%3A%22vue%22%2C%22raw%22%3A%22%3Cscript%20lang%3D%5C%22ts%5C%22%20setup%3E%5Cnimport%20%7B%20ref%20%7D%20from%20'vue'%5Cnimport%20TargetBox%20from%20'.%2FTargetBox.vue'%5Cnimport%20HTMLContent%20from%20'.%2FHTMLContent.vue'%5Cn%5Cnconst%20droppedHTML%20%3D%20ref('')%5Cnconst%20handleHTMLDrop%20%3D%20(item%3A%20%7B%20html%3A%20string%20%7D)%20%3D%3E%20%7B%5Cn%20%20if%20(item)%20%7B%5Cn%20%20%20%20droppedHTML.value%20%3D%20item.html%5Cn%20%20%7D%5Cn%7D%5Cn%3C%2Fscript%3E%5Cn%5Cn%3Ctemplate%3E%5Cn%20%20%3Ciframe%5Cn%20%20%20%20srcdoc%3D%5C%22%3Cimg%20src%3D'https%3A%2F%2Freact-dnd.github.io%2Freact-dnd%2Ffavicon-32x32.png'%20%2F%3E%5C%22%5Cn%20%20%2F%3E%5Cn%20%20%3CTargetBox%20%3Aon-drop%3D%5C%22handleHTMLDrop%5C%22%20%2F%3E%5Cn%20%20%3CHTMLContent%20%3Ahtml%3D%5C%22droppedHTML%5C%22%20%2F%3E%5Cn%3C%2Ftemplate%3E%5Cn%22%2C%22highlight%22%3A%22%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%5C%22token%20tag%5C%22%3E%3Cspan%20class%3D%5C%22token%20tag%5C%22%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20attr-name%5C%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20attr-value%5C%22%3E%3Cspan%20class%3D%5C%22token%20punctuation%20attr-equals%5C%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%5C%22%3C%2Fspan%3Ets%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%5C%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20attr-name%5C%22%3Esetup%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20script%5C%22%3E%3Cspan%20class%3D%5C%22token%20language-javascript%5C%22%3E%5Cn%3Cspan%20class%3D%5C%22token%20keyword%5C%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%7B%3C%2Fspan%3E%20ref%20%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20keyword%5C%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20string%5C%22%3E'vue'%3C%2Fspan%3E%5Cn%3Cspan%20class%3D%5C%22token%20keyword%5C%22%3Eimport%3C%2Fspan%3E%20TargetBox%20%3Cspan%20class%3D%5C%22token%20keyword%5C%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20string%5C%22%3E'.%2FTargetBox.vue'%3C%2Fspan%3E%5Cn%3Cspan%20class%3D%5C%22token%20keyword%5C%22%3Eimport%3C%2Fspan%3E%20HTMLContent%20%3Cspan%20class%3D%5C%22token%20keyword%5C%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20string%5C%22%3E'.%2FHTMLContent.vue'%3C%2Fspan%3E%5Cn%5Cn%3Cspan%20class%3D%5C%22token%20keyword%5C%22%3Econst%3C%2Fspan%3E%20droppedHTML%20%3Cspan%20class%3D%5C%22token%20operator%5C%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20function%5C%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20string%5C%22%3E''%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E)%3C%2Fspan%3E%5Cn%3Cspan%20class%3D%5C%22token%20keyword%5C%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20function-variable%20function%5C%22%3EhandleHTMLDrop%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20operator%5C%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20parameter%5C%22%3E%3Cspan%20class%3D%5C%22token%20literal-property%20property%5C%22%3Eitem%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20operator%5C%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%7B%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20literal-property%20property%5C%22%3Ehtml%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20operator%5C%22%3E%3A%3C%2Fspan%3E%20string%20%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20operator%5C%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%7B%3C%2Fspan%3E%5Cn%20%20%3Cspan%20class%3D%5C%22token%20keyword%5C%22%3Eif%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E(%3C%2Fspan%3Eitem%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%7B%3C%2Fspan%3E%5Cn%20%20%20%20droppedHTML%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E.%3C%2Fspan%3Evalue%20%3Cspan%20class%3D%5C%22token%20operator%5C%22%3E%3D%3C%2Fspan%3E%20item%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E.%3C%2Fspan%3Ehtml%5Cn%20%20%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%7D%3C%2Fspan%3E%5Cn%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%7D%3C%2Fspan%3E%5Cn%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20tag%5C%22%3E%3Cspan%20class%3D%5C%22token%20tag%5C%22%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%5Cn%5Cn%3Cspan%20class%3D%5C%22token%20tag%5C%22%3E%3Cspan%20class%3D%5C%22token%20tag%5C%22%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%5Cn%20%20%3Cspan%20class%3D%5C%22token%20tag%5C%22%3E%3Cspan%20class%3D%5C%22token%20tag%5C%22%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%26lt%3B%3C%2Fspan%3Eiframe%3C%2Fspan%3E%5Cn%20%20%20%20%3Cspan%20class%3D%5C%22token%20attr-name%5C%22%3Esrcdoc%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20attr-value%5C%22%3E%3Cspan%20class%3D%5C%22token%20punctuation%20attr-equals%5C%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%5C%22%3C%2Fspan%3E%26lt%3Bimg%20src%3D%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E'%3C%2Fspan%3Ehttps%3A%2F%2Freact-dnd.github.io%2Freact-dnd%2Ffavicon-32x32.png%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E'%3C%2Fspan%3E%20%2F%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%5C%22%3C%2Fspan%3E%3C%2Fspan%3E%5Cn%20%20%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%5Cn%20%20%3Cspan%20class%3D%5C%22token%20tag%5C%22%3E%3Cspan%20class%3D%5C%22token%20tag%5C%22%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%26lt%3B%3C%2Fspan%3ETargetBox%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20attr-name%5C%22%3E%3Aon-drop%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20attr-value%5C%22%3E%3Cspan%20class%3D%5C%22token%20punctuation%20attr-equals%5C%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%5C%22%3C%2Fspan%3EhandleHTMLDrop%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%5C%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%5Cn%20%20%3Cspan%20class%3D%5C%22token%20tag%5C%22%3E%3Cspan%20class%3D%5C%22token%20tag%5C%22%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%26lt%3B%3C%2Fspan%3EHTMLContent%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20attr-name%5C%22%3E%3Ahtml%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20attr-value%5C%22%3E%3Cspan%20class%3D%5C%22token%20punctuation%20attr-equals%5C%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%5C%22%3C%2Fspan%3EdroppedHTML%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%5C%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%5Cn%3Cspan%20class%3D%5C%22token%20tag%5C%22%3E%3Cspan%20class%3D%5C%22token%20tag%5C%22%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%5Cn%3C%2Fcode%3E%3C%2Fpre%3E%22%7D%2C%22HTMLContent.vue%22%3A%7B%22type%22%3A%22vue%22%2C%22raw%22%3A%22%3Cscript%20lang%3D%5C%22ts%5C%22%20setup%3E%5CndefineProps%3C%7B%5Cn%20%20html%3A%20string%5Cn%7D%3E()%5Cn%3C%2Fscript%3E%5Cn%3Ctemplate%3E%5Cn%20%20%3Cdiv%20v-if%3D%5C%22html.length%5C%22%3E%7B%7B%20html%20%7D%7D%3C%2Fdiv%3E%5Cn%20%20%3Cdiv%20v-else%3ENothing%20to%20display%3C%2Fdiv%3E%5Cn%3C%2Ftemplate%3E%5Cn%22%2C%22highlight%22%3A%22%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%5C%22token%20tag%5C%22%3E%3Cspan%20class%3D%5C%22token%20tag%5C%22%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20attr-name%5C%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20attr-value%5C%22%3E%3Cspan%20class%3D%5C%22token%20punctuation%20attr-equals%5C%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%5C%22%3C%2Fspan%3Ets%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%5C%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20attr-name%5C%22%3Esetup%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20script%5C%22%3E%3Cspan%20class%3D%5C%22token%20language-javascript%5C%22%3E%5CndefineProps%3Cspan%20class%3D%5C%22token%20operator%5C%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%7B%3C%2Fspan%3E%5Cn%20%20%3Cspan%20class%3D%5C%22token%20literal-property%20property%5C%22%3Ehtml%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20operator%5C%22%3E%3A%3C%2Fspan%3E%20string%5Cn%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20operator%5C%22%3E%3E%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E)%3C%2Fspan%3E%5Cn%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20tag%5C%22%3E%3Cspan%20class%3D%5C%22token%20tag%5C%22%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%5Cn%3Cspan%20class%3D%5C%22token%20tag%5C%22%3E%3Cspan%20class%3D%5C%22token%20tag%5C%22%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%5Cn%20%20%3Cspan%20class%3D%5C%22token%20tag%5C%22%3E%3Cspan%20class%3D%5C%22token%20tag%5C%22%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20attr-name%5C%22%3Ev-if%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20attr-value%5C%22%3E%3Cspan%20class%3D%5C%22token%20punctuation%20attr-equals%5C%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%5C%22%3C%2Fspan%3Ehtml.length%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%5C%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%7B%7B%20html%20%7D%7D%3Cspan%20class%3D%5C%22token%20tag%5C%22%3E%3Cspan%20class%3D%5C%22token%20tag%5C%22%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%5Cn%20%20%3Cspan%20class%3D%5C%22token%20tag%5C%22%3E%3Cspan%20class%3D%5C%22token%20tag%5C%22%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20attr-name%5C%22%3Ev-else%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3ENothing%20to%20display%3Cspan%20class%3D%5C%22token%20tag%5C%22%3E%3Cspan%20class%3D%5C%22token%20tag%5C%22%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%5Cn%3Cspan%20class%3D%5C%22token%20tag%5C%22%3E%3Cspan%20class%3D%5C%22token%20tag%5C%22%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%5Cn%3C%2Fcode%3E%3C%2Fpre%3E%22%7D%2C%22TargetBox.vue%22%3A%7B%22type%22%3A%22vue%22%2C%22raw%22%3A%22%3Cscript%20lang%3D%5C%22ts%5C%22%20setup%3E%5Cnimport%20%7B%20NativeTypes%20%7D%20from%20'react-dnd-html5-backend'%5Cnimport%20%7B%20useDrop%20%7D%20from%20'vue3-dnd'%5Cnimport%20%7B%20computed%2C%20unref%20%7D%20from%20'vue'%5Cnimport%20%7B%20toRefs%20%7D%20from%20'%40vueuse%2Fcore'%5Cn%5Cnconst%20props%20%3D%20defineProps%3C%7B%5Cn%20%20onDrop%3A%20(arg%3A%20%7B%20html%3A%20string%20%7D)%20%3D%3E%20void%5Cn%7D%3E()%5Cn%5Cnconst%20%5Bcollect%2C%20drop%5D%20%3D%20useDrop(()%20%3D%3E%20(%7B%5Cn%20%20accept%3A%20%5BNativeTypes.HTML%5D%2C%5Cn%20%20drop(item%3A%20%7B%20html%3A%20string%20%7D)%20%7B%5Cn%20%20%20%20props.onDrop%3F.(item)%5Cn%20%20%7D%2C%5Cn%20%20collect%3A%20monitor%20%3D%3E%20(%7B%5Cn%20%20%20%20isOver%3A%20monitor.isOver()%2C%5Cn%20%20%20%20canDrop%3A%20monitor.canDrop()%2C%5Cn%20%20%7D)%2C%5Cn%7D))%5Cnconst%20%7B%20canDrop%2C%20isOver%20%7D%20%3D%20toRefs(collect)%5Cnconst%20isActive%20%3D%20computed(()%20%3D%3E%20unref(canDrop)%20%26%26%20unref(isOver))%5Cn%3C%2Fscript%3E%5Cn%5Cn%3Ctemplate%3E%5Cn%20%20%3Cdiv%20%3Aref%3D%5C%22drop%5C%22%20class%3D%5C%22target-box%5C%22%3E%5Cn%20%20%20%20%7B%7B%20isActive%20%3F%20'Release%20to%20drop'%20%3A%20'Drag%20HTML%20here'%20%7D%7D%5Cn%20%20%3C%2Fdiv%3E%5Cn%3C%2Ftemplate%3E%5Cn%5Cn%3Cstyle%20lang%3D%5C%22less%5C%22%20scoped%3E%5Cn.target-box%20%7B%5Cn%20%20width%3A%2015rem%3B%5Cn%20%20height%3A%2015rem%3B%5Cn%20%20padding%3A%202rem%3B%5Cn%20%20text-align%3A%20center%3B%5Cn%20%20border%3A%201px%20solid%20gray%3B%5Cn%7D%5Cn%3C%2Fstyle%3E%5Cn%22%2C%22highlight%22%3A%22%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%5C%22token%20tag%5C%22%3E%3Cspan%20class%3D%5C%22token%20tag%5C%22%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20attr-name%5C%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20attr-value%5C%22%3E%3Cspan%20class%3D%5C%22token%20punctuation%20attr-equals%5C%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%5C%22%3C%2Fspan%3Ets%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%5C%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20attr-name%5C%22%3Esetup%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20script%5C%22%3E%3Cspan%20class%3D%5C%22token%20language-javascript%5C%22%3E%5Cn%3Cspan%20class%3D%5C%22token%20keyword%5C%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%7B%3C%2Fspan%3E%20NativeTypes%20%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20keyword%5C%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20string%5C%22%3E'react-dnd-html5-backend'%3C%2Fspan%3E%5Cn%3Cspan%20class%3D%5C%22token%20keyword%5C%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%7B%3C%2Fspan%3E%20useDrop%20%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20keyword%5C%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20string%5C%22%3E'vue3-dnd'%3C%2Fspan%3E%5Cn%3Cspan%20class%3D%5C%22token%20keyword%5C%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%7B%3C%2Fspan%3E%20computed%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%2C%3C%2Fspan%3E%20unref%20%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20keyword%5C%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20string%5C%22%3E'vue'%3C%2Fspan%3E%5Cn%3Cspan%20class%3D%5C%22token%20keyword%5C%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%7B%3C%2Fspan%3E%20toRefs%20%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20keyword%5C%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20string%5C%22%3E'%40vueuse%2Fcore'%3C%2Fspan%3E%5Cn%5Cn%3Cspan%20class%3D%5C%22token%20keyword%5C%22%3Econst%3C%2Fspan%3E%20props%20%3Cspan%20class%3D%5C%22token%20operator%5C%22%3E%3D%3C%2Fspan%3E%20defineProps%3Cspan%20class%3D%5C%22token%20operator%5C%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%7B%3C%2Fspan%3E%5Cn%20%20%3Cspan%20class%3D%5C%22token%20function-variable%20function%5C%22%3EonDrop%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20operator%5C%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20parameter%5C%22%3E%3Cspan%20class%3D%5C%22token%20literal-property%20property%5C%22%3Earg%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20operator%5C%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%7B%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20literal-property%20property%5C%22%3Ehtml%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20operator%5C%22%3E%3A%3C%2Fspan%3E%20string%20%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20operator%5C%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20keyword%5C%22%3Evoid%3C%2Fspan%3E%5Cn%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20operator%5C%22%3E%3E%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E)%3C%2Fspan%3E%5Cn%5Cn%3Cspan%20class%3D%5C%22token%20keyword%5C%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%5B%3C%2Fspan%3Ecollect%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%2C%3C%2Fspan%3E%20drop%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%5D%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20operator%5C%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20function%5C%22%3EuseDrop%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20operator%5C%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%7B%3C%2Fspan%3E%5Cn%20%20%3Cspan%20class%3D%5C%22token%20literal-property%20property%5C%22%3Eaccept%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20operator%5C%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%5B%3C%2Fspan%3ENativeTypes%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20constant%5C%22%3EHTML%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%2C%3C%2Fspan%3E%5Cn%20%20%3Cspan%20class%3D%5C%22token%20function%5C%22%3Edrop%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20parameter%5C%22%3E%3Cspan%20class%3D%5C%22token%20literal-property%20property%5C%22%3Eitem%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20operator%5C%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%7B%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20literal-property%20property%5C%22%3Ehtml%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20operator%5C%22%3E%3A%3C%2Fspan%3E%20string%20%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%7D%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%7B%3C%2Fspan%3E%5Cn%20%20%20%20props%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E.%3C%2Fspan%3EonDrop%3Cspan%20class%3D%5C%22token%20operator%5C%22%3E%3F.%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E(%3C%2Fspan%3Eitem%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E)%3C%2Fspan%3E%5Cn%20%20%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%2C%3C%2Fspan%3E%5Cn%20%20%3Cspan%20class%3D%5C%22token%20function-variable%20function%5C%22%3Ecollect%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20operator%5C%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20parameter%5C%22%3Emonitor%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20operator%5C%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%7B%3C%2Fspan%3E%5Cn%20%20%20%20%3Cspan%20class%3D%5C%22token%20literal-property%20property%5C%22%3EisOver%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20operator%5C%22%3E%3A%3C%2Fspan%3E%20monitor%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20function%5C%22%3EisOver%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%2C%3C%2Fspan%3E%5Cn%20%20%20%20%3Cspan%20class%3D%5C%22token%20literal-property%20property%5C%22%3EcanDrop%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20operator%5C%22%3E%3A%3C%2Fspan%3E%20monitor%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20function%5C%22%3EcanDrop%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%2C%3C%2Fspan%3E%5Cn%20%20%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%2C%3C%2Fspan%3E%5Cn%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E)%3C%2Fspan%3E%5Cn%3Cspan%20class%3D%5C%22token%20keyword%5C%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%7B%3C%2Fspan%3E%20canDrop%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%2C%3C%2Fspan%3E%20isOver%20%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20operator%5C%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20function%5C%22%3EtoRefs%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E(%3C%2Fspan%3Ecollect%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E)%3C%2Fspan%3E%5Cn%3Cspan%20class%3D%5C%22token%20keyword%5C%22%3Econst%3C%2Fspan%3E%20isActive%20%3Cspan%20class%3D%5C%22token%20operator%5C%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20function%5C%22%3Ecomputed%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20operator%5C%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20function%5C%22%3Eunref%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E(%3C%2Fspan%3EcanDrop%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20operator%5C%22%3E%26amp%3B%26amp%3B%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20function%5C%22%3Eunref%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E(%3C%2Fspan%3EisOver%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E)%3C%2Fspan%3E%5Cn%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20tag%5C%22%3E%3Cspan%20class%3D%5C%22token%20tag%5C%22%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%5Cn%5Cn%3Cspan%20class%3D%5C%22token%20tag%5C%22%3E%3Cspan%20class%3D%5C%22token%20tag%5C%22%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%5Cn%20%20%3Cspan%20class%3D%5C%22token%20tag%5C%22%3E%3Cspan%20class%3D%5C%22token%20tag%5C%22%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20attr-name%5C%22%3E%3Aref%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20attr-value%5C%22%3E%3Cspan%20class%3D%5C%22token%20punctuation%20attr-equals%5C%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%5C%22%3C%2Fspan%3Edrop%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%5C%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20attr-name%5C%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20attr-value%5C%22%3E%3Cspan%20class%3D%5C%22token%20punctuation%20attr-equals%5C%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%5C%22%3C%2Fspan%3Etarget-box%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%5C%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%5Cn%20%20%20%20%7B%7B%20isActive%20%3F%20'Release%20to%20drop'%20%3A%20'Drag%20HTML%20here'%20%7D%7D%5Cn%20%20%3Cspan%20class%3D%5C%22token%20tag%5C%22%3E%3Cspan%20class%3D%5C%22token%20tag%5C%22%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%5Cn%3Cspan%20class%3D%5C%22token%20tag%5C%22%3E%3Cspan%20class%3D%5C%22token%20tag%5C%22%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%5Cn%5Cn%3Cspan%20class%3D%5C%22token%20tag%5C%22%3E%3Cspan%20class%3D%5C%22token%20tag%5C%22%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%26lt%3B%3C%2Fspan%3Estyle%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20attr-name%5C%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20attr-value%5C%22%3E%3Cspan%20class%3D%5C%22token%20punctuation%20attr-equals%5C%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%5C%22%3C%2Fspan%3Eless%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%5C%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20attr-name%5C%22%3Escoped%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20style%5C%22%3E%3Cspan%20class%3D%5C%22token%20language-css%5C%22%3E%5Cn%3Cspan%20class%3D%5C%22token%20selector%5C%22%3E.target-box%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%7B%3C%2Fspan%3E%5Cn%20%20%3Cspan%20class%3D%5C%22token%20property%5C%22%3Ewidth%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%3A%3C%2Fspan%3E%2015rem%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%3B%3C%2Fspan%3E%5Cn%20%20%3Cspan%20class%3D%5C%22token%20property%5C%22%3Eheight%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%3A%3C%2Fspan%3E%2015rem%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%3B%3C%2Fspan%3E%5Cn%20%20%3Cspan%20class%3D%5C%22token%20property%5C%22%3Epadding%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%3A%3C%2Fspan%3E%202rem%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%3B%3C%2Fspan%3E%5Cn%20%20%3Cspan%20class%3D%5C%22token%20property%5C%22%3Etext-align%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%3A%3C%2Fspan%3E%20center%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%3B%3C%2Fspan%3E%5Cn%20%20%3Cspan%20class%3D%5C%22token%20property%5C%22%3Eborder%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%3A%3C%2Fspan%3E%201px%20solid%20gray%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%3B%3C%2Fspan%3E%5Cn%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%7D%3C%2Fspan%3E%5Cn%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20tag%5C%22%3E%3Cspan%20class%3D%5C%22token%20tag%5C%22%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%26lt%3B%2F%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%5C%22token%20punctuation%5C%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%5Cn%3C%2Fcode%3E%3C%2Fpre%3E%22%7D%2C%22index.ts%22%3A%7B%22type%22%3A%22ts%22%2C%22raw%22%3A%22import%20Container%20from%20'.%2FContainer.vue'%5Cn%5Cnexport%20default%20Container%5Cn%22%2C%22highlight%22%3A%22%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%5C%22token%20keyword%5C%22%3Eimport%3C%2Fspan%3E%20Container%20%3Cspan%20class%3D%5C%22token%20keyword%5C%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20string%5C%22%3E'.%2FContainer.vue'%3C%2Fspan%3E%5Cn%5Cn%3Cspan%20class%3D%5C%22token%20keyword%5C%22%3Eexport%3C%2Fspan%3E%20%3Cspan%20class%3D%5C%22token%20keyword%5C%22%3Edefault%3C%2Fspan%3E%20Container%5Cn%3C%2Fcode%3E%3C%2Fpre%3E%22%7D%7D",path:"https%3A%2F%2Fgithub.com%2Fhcg1023%2Fvue3-dnd%2Ftree%2Fmain%2Fpackages%2Fdocs%2Fsrc%2F.vitepress%2Fexamples%2F06-other%2Fnative-html"},null,8,["demo"])])}}});export{m as __pageData,d as default};
