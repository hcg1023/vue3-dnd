这个例子天真地依赖于浏览器拖放实现，没有太多自定义逻辑。

当盒子被拖拽时，我们通过返回来移除它原来的DOM节点 null，render()让浏览器绘制拖拽预览。当盒子被释放时，我们在新的坐标处绘制它。如果您尝试将框拖到容器外，浏览器将对其返回进行动画处理。

虽然这种方法适用于琐碎的情况，但它会在丢弃时闪烁。发生这种情况是因为浏览器在我们有机会使拖动的项目可见之前删除了拖动预览。如果您将原始项目变暗而不是隐藏它，这可能不是问题，但否则它会清晰可见。

如果我们想添加自定义逻辑，例如对齐网格或边界检查，我们只能在放置时执行此操作。一旦浏览器绘制了拖动预览，我们就无法控制它会发生什么。 如果您想用更多的控制权换取更多的工作，请查看[自定义渲染示例](./custom-drag-layer)。

----
<br>
<br>
<br>

<script setup>
import Naive from '../../.vitepress/examples/02-drag-around/naive'
</script>

<Naive></Naive>

[查看源码](https://github.com/hcg1023/vue3-dnd/tree/main/packages/docs/src/.vitepress/examples/02-drag-around/naive)
