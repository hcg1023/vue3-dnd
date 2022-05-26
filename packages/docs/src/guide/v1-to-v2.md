# 从 v1 到 v2

## 不兼容变化
所有的connector函数从`Ref<Connector>`类型变成了`Connector`类型，简化了在script中的调用方式。

### 示例
```vue
<script setup>
import { ref } from 'vue'
import { useDrag } from 'vue3-dnd'

const [collect, drag, dragPreview] = useDrag({
  item: {
    type: 'box'
  }
})

const element = ref<HTMLDivElement | null>(null)
// v1写法
// drag.value(element)
// v2写法
drag(element)
</script>

<template>
  <div ref="element">DragSource</div>
  <!-- template中的写法不变 -->
  <div :ref="dragPreview">DragPreview</div>
</template>
```
