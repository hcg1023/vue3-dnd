# useDragLayer

The `useDragLayer` function provides a way to connect your component to DnD as a drag layer.

````vue
<script setup lang="ts">
import { useDragLayer } from 'vue3-dnd'

const collectedProps = useDragLayer(monitor => ({
       item: monitor.getItem(),
     }))
</script>

<template>
   <div>...</div>
</template>
````

## parameters

The argument to `useDragLayer` is a `collect` collection function, which should return a plain object that you can use in your component.


The argument to the `collect` collection function is a [DragLayerMonitor](../monitors/drag-layer-monitor) object, which provides some monitor methods so that you can get the monitor's status. The types of the `collect` function are as follows:
```ts
(monitor: DragLayerMonitor) => (void | object)
````


## return value

`useDragLayer` returns a `Ref` object, which is the return value of the `collect` function.

- `Collected Props - Ref<object>`
  - It is a `Ref` object whose `value` points to the return value of the `collect` function.
