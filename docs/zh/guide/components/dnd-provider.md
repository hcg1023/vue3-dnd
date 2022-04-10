# DndProvider
`DndProvider` 组件为您的应用程序提供 Vue3 DnD 功能。它必须通过`backend`这个prop注入一个Backend。

一般我们在App.vue文件中使用它。

## 用法
### PC端
```vue
<script setup lang="ts">
import { DndProvider } from 'vue3-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
</script>

<template>
  <DndProvider :backend="HTML5Backend">
    <!-- Your Drag-and-Drop Application -->
  </DndProvider>
</template>
```
### 移动端
```vue
<script setup lang="ts">
import { DndProvider } from 'vue3-dnd'
import { TouchBackend } from 'react-dnd-touch-backend'
</script>

<template>
  <DndProvider :backend="TouchBackend">
    <!-- Your Drag-and-Drop Application -->
  </DndProvider>
</template>
```

## Props
| 参数      | 说明                                | 类型      | 是否必填 |
|---------|-----------------------------------|---------|------|
| backend | 一个React DnD的Backend               | Backend | 是    |
| context | 用于配置Backend的上下文对象; 这取决于Backend实现。 | object  | 否    |
| options | 用于配置Backend的选项对象; 这取决于Backend实现。  | object  | 否    |
