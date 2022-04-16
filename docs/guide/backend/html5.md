# HTML5

这是由`react-dnd`主要支持的Backend。它在底层使用了`HTML5`的`Drag`和`Drop`事件。并且处理了[它的一些问题](http://quirksmode.org/blog/archives/2009/09/the_html5_drag.html)。

## 安装
```bash
npm install react-dnd-html5-backend
```
### 额外功能

除了导出的`Backend`，HTML5 Backend 还提供了一些额外的功能:

- `getEmptyImage()`: 它是一个返回透明空图像的函数。用于使用DragSource的`dragPreview`连接器来完全隐藏浏览器绘制的拖动预览。方便绘制自定义拖动层`DragLayer`。请注意，自定义拖拽预览在IE中不起作用。
- `NativeTypes`: 三个常量`NativeTypes`的枚举。`NativeTypes.FILE`, `NativeTypes.URL`和 `NativeTypes.TEXT`。您可以给放置目标指定这些类型，用于处理本地文件、url或常规页面文本的拖拽放置。

## 使用

```vue

<script setup lang="ts">
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'vue3-dnd'
</script>

<template>
  <DndProvider :backend="HTML5Backend">
    <!-- your drag-and-drop application -->
  </DndProvider>
</template>
```

当你在`monitor`监视器上调用`getItem()`时，HTML5 Backend会根据drop类型暴露事件中的各种数据:

- `NativeTypes.FILE`:
  - `getItem().files`, 一个数组，包含拖拽的文件 
  - `getItem().items`, 使用 `event.dataTransfer.items`（您可以在删除目录时使用它来列出文件）
- `NativeTypes.URL`:
  - `getItem().url`, 一个数组，包含拖拽的 URL
- `NativeTypes.TEXT`:
  - `getItem().text`, 拖拽的文本
