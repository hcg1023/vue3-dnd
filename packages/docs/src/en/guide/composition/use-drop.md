# useDrop

The `useDrop` function provides a way to connect your component to DnD as a drop target. It accepts a `Specification`, you can specify the type of allowed drop through `accpet`, the data of the drag source through `item`, the drag state through `collect`, and so on.

`useDrop` returns two values: the return value of the `collect` function, and the connector function of `dropTarget`.


````vue
<script setup lang="ts">
import { useDrop } from 'vue3-dnd'

const [collectedProps, drop] = useDrop(() => ({
accept: ['BOX']
}))
</script>

<template>
  <div :ref="drop">Drop Target</div>
</template>
````

## parameters

The parameter of `useDrop` can be a `Specification` object or a function that returns a `Specification` object. For more information about `Specification`, please refer to [Specification](#specification-object).

## return value

`useDrop` returns an array containing two values: the return value of the `collect` function, the connector function of `dropTarget`

- `[0] - Collected Props`
  - ```ts
    Ref<object>
    ````
  - It is a `Ref` object, its `value` points to the return value of the `collect` function, if the `collect` function is not defined, its `value` is an empty object

- `[1] - DragTarget Connector`
  - ```ts
    Ref<(el: Ref<HTMLElement> | HTMLElement) => HTMLElement>
    ````
  - The linker function for the drop target. **It must be called**, and pass a `Ref<HTMLElement> | HTMLElement` draggable DOM element;
  - The second parameter is an options object, which is consistent with the options of the Specification object

### Specification object

Before understanding the basic usage of the `Specification` object, you may need to understand the [DropTargetMonitor](../monitors/drop-target-monitor) object.

| Key | Required | Type | Description |
|---------|-----|------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| accept | yes | `string \| symbol \| string[] \| symbol[]` | This drop target will only react to [a drag source of the specified type](./use-drag). |
| collect | no | `(monitor: DropTargetMonitor) => CollectedProps` | A function for a collector. It should return a plain object and be the first item in the return value of `useDrop`. |
| options | no | `object` | currently useless. |
| drop | no | `(item: object, monitor: DropTargetMonitor) => (void \| Record<string, any>)` | Called when the drop element is dropped on the target. <br>You can return nothing, or you can return a plain object. <br>If you return an object, it becomes `dropResult`, and in the `end` method of `drag`, it can be obtained by `monitor.getDropResult()`. This is a good choice if you want to perform different actions based on different drop targets. <br>If your drop target is nested, then you can check if the nested target has been processed with `monitor.didDrop()` and `monitor.getDropResult()`. <br>This method, along with the `end` method of `drag`, is a good place to handle data changes. This method will not be called if the `canDrop()` method returns `false`. |
| hover | no | `(item: object, monitor: DropTargetMonitor) => void ` | This method is called when the dragged component passes over the component. <br>You can check if the hover is only happening on the current target or on the inner nested target by checking `monitor.isOver({ shallow: true })`. <br>The difference from the `drop()` method is that this method will be called even if `canDrop()` returns `false`. <br>You can confirm and avoid this with `monitor.canDrop()`. |
| canDrop | no | `(item: DragObject, monitor: DropTargetMonitor<DragObject, DropResult>) => boolean` | Use it to specify whether the drop target is able to accept the item. <br>If you want to always allow it, omit this method. <br>Specifying it is handy if you'd like to disable dropping based on some predicate over `props` or `monitor.getItem()`. <br>Note: You may not call `monitor.canDrop()` inside this method. |
