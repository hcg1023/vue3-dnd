# 关于
[Vue3 DnD](https://github.com/hcg1023/vue3-dnd)是基于[React DnD](https://react-dnd.github.io/react-dnd/about) 开发的Vue3版本。我们会尽可能的保证它与React DnD的功能一致，甚至于你可以把该文档看作是React DnD的部分文档（当然，react hooks api的依赖部分除外）。

# 安装
```bash
# 安装
pnpm install vue3-dnd react-dnd-html5-backend
# 或者
npm install vue3-dnd react-dnd-html5-backend
# 或者
yarn add vue3-dnd react-dnd-html5-backend
```
[react-dnd-html5-backend](https://www.npmjs.com/package/react-dnd-html5-backend) 是一个[React DnD](https://react-dnd.github.io/react-dnd/about) 的插件，它提供了一个HTML5的拖放支持；你也可以使用[react-dnd-touch-backend](https://www.npmjs.com/package/react-dnd-touch-backend) 提供触摸拖放支持。

# 特性
### Composition API 
基于Vue的组合式API，你可以在任何组件中使用拖拽。
### 双向数据绑定
基于Vue的双向数据绑定，你可以在数据更新时自动更新UI。
### 扩展和测试
受益于React DnD的backend设计，你可以自定义一个DnD backend，并且可以使用 [react-dnd-test-backend](https://www.npmjs.com/package/react-dnd-test-backend) 测试你的拖拽组件。


# 问题和建议
可以在[GitHub](https://github.com/hcg1023/vue3-dnd) 上提交issue或者pull request。

# 感谢
感谢[React DnD](https://react-dnd.github.io/react-dnd/about) 的作者，他们的开源项目是我们的基础。
