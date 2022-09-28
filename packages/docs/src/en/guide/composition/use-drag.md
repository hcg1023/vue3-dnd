# useDrag

The `useDrag` function provides a way to connect your component to DnD as a drag source. It receives a `Specification`, you can specify the type of dragging through `type`, the data of the drag source through `item`, get the drag status through `collect`, and so on.

`useDrag` returns three values: the return value of the `collect` function, the connector functions of `dragSource` and `dragPreview`.

````vue
<script setup lang="ts">
import { useDrag } from 'vue3-dnd'

const [collectedProps, dragSource, dragPreview] = useDrag(() => ({
type: 'BOX',
item: { id: '1' },
}))
</script>

<template>
<div v-if="collectedProps.isDragging" :ref="dragPreview">dragPreview</div>
<div v-else :ref="dragSource">dragSource</div>
</template>
````

## parameters

The parameter of `useDrag` can be a `Specification` object or a function that returns a `Specification` object. For more information about `Specification`, please refer to [Specification](#specification-object).

## return value

`useDrag` returns an array containing three values: the return value of the `collect` function, the connector functions of `dragSource` and `dragPreview`

- `[0] - Collected Props`
  - ```ts
    Ref<object>
    ````
  - It is a `Ref` object, its `value` points to the return value of the `collect` function, if the `collect` function is not defined, its `value` is an empty object

- `[1] - DragSource Connector`
  - ```ts
    (el: Ref<HTMLElement> | HTMLElement, options?: DragSourceOptions) => HTMLElement
    ````
  - Drag and drop the source's connector function. **It must be called**, and pass a draggable DOM element of `Ref<HTMLElement> | HTMLElement`;
  - The second parameter is an options object, which is consistent with the options of the Specification object

- `[2] - DragPreview Connector`
  - ```ts
    (el: Ref<HTMLElement> | HTMLElement, options?: DragPreviewOptions) => HTMLElement
    ````
  - Drag and drop previewed connector functions. It is optional, **default uses dragSource as preview element**, receives a draggable DOM element of `Ref<HTMLElement> | HTMLElement`;
  - The second parameter is an options object, which is consistent with the previewOptions of the Specification object

### Specification object

Before understanding the basic usage of the `Specification` object, you may need to understand the [DragSourceMonitor](../monitors/drag-source-monitor) object first.


| Key | Required | Type | Description |
|----------------|-----|-------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| type | is | `string \| symbol` | type of dragged element |
| item | is | `object \| () => object` | object, it is a plain JavaScript object describing the dragged data. <br>This is the only information available about the drag source for the drag target, so it's important to choose the minimum data they need to know. You might be tempted to place a complex reference here, but you should try to avoid doing so as it couples the drag source and drop target. It's a good idea to use something like `{ id }`. <br> function, it is fired when the drag operation begins and returns an object representing the drag operation. If `null` is returned, the drag operation is canceled. |
| collect | no | `(monitor: DragSourceMonitor) => CollectedProps` | A function for a collector. It should return a plain object and be the first item in the return value of `useDrag`. |
| previewOptions | no | `DragPreviewOptions` | A plain JavaScript object describing drag preview options. |
| options | no | `DragSourceOptions` | A plain object, optionally containing any of the following properties: <br>`dropEffect`: optional, the type of drop effect used in this drag. Optional values: `'move' \| 'copy'` |
| end | no | `(draggedItem: object, monitor: DragSourceMonitor) => void` | The `end` function is called when the dragging stops. <br>You can call `monitor.didDrop()` to check if the drop was successful; if it was successful, and the drop target specifies the drop result by returning a plain object from its `drop()` method, then it will As the return value of `monitor.getDropResult()`. <br>This method is a good place to handle data changes. |
| canDrag | no | `boolean \| (monitor: DragSourceMonitor) => boolean` | You can use this to specify whether dragging is currently allowed. Defaults to `true`. <br>Specifying a function is convenient if you want to disable dragging based on some condition. <br>Note: You cannot call `monitor.canDrag()` inside this method. |
| isDragging | no | `boolean \| (monitor: DragSourceMonitor) => boolean` | By default, only the drag source that initiated the drag operation is considered to be dragged. <br>You can override this behavior by defining a custom `isDragging` method. It may return something like `props.id === monitor.getItem().id`. <br>Note: You cannot call `monitor.isDragging()` inside this method. |
