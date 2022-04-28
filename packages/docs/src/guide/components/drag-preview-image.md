# DragPreviewImage

将 HTML Image 元素呈现为拖动预览的组件。

## 用法
```vue
<script lang="ts" setup>
import { DragPreviewImage, useDrag } from 'vue3-dnd'
const [collect, drag, dragPreview] = useDrag(() => ({
  type: 'Box',
}))
</script>

<template>
    <DragPreviewImage :connect="dragPreview" src="house_dragged.png" />
    <div :ref="drag">🏠</div>
</template>
```


## Props
| 参数      | 说明               | 类型       | 是否必填 |
|---------|------------------|----------|------|
| src     | 图片的src           | string   | 是    |
| connect | `dragPreview`连接器 | function | 是    |

