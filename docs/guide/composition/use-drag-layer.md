# useDragLayer

`useDragLayer`函数提供了一种将你的组件作为**拖动层**连接到 DnD 的方法。

```vue
<script setup lang="ts">
import { useDragLayer } from 'vue3-dnd'

const collectedProps = useDragLayer(monitor => ({ 
      item: monitor.getItem(),
    }))
</script>

<template>
  <div>...</div>
</template>
```

## 参数

`useDragLayer`的参数是一个`collect`收集函数，它应该返回一个普通对象，并使你在组件中使用。


`collect`收集函数的参数是一个[DragLayerMonitor](../monitors/drag-layer-monitor)对象，它提供了一些监视器的方法，以便你可以获取监视器的状态。`collect`函数的类型如下:
```ts
(monitor: DragLayerMonitor) => (void | object)
```


## 返回值

`useDragLayer`返回一个`Ref`对象，它是`collect`函数的返回值。

- `Collected Props - Ref<object>`
    - 它是一个`Ref`对象，它的`value`指向`collect`函数的返回值。
