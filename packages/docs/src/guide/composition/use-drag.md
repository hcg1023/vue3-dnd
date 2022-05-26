# useDrag

`useDrag`函数提供了一种将你的组件作为**拖拽源**连接到 DnD 的方法。它接收一个`Specification`，你可以通过`type`指定拖拽的类型，通过`item`表示拖动源的数据，通过`collect`获取拖拽状态等等。

`useDrag`返回了三个值：`collect`函数的返回值，`dragSource`和`dragPreview`的连接器函数。

```vue
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
```

## 参数

`useDrag`的参数可以是一个`Specification`对象，也可以是一个函数，返回一个`Specification`对象，有关`Specification`的详细信息，请参考[Specification](#specification-对象)。

## 返回值

`useDrag`返回一个数组，包含三个值：`collect`函数的返回值，`dragSource`和`dragPreview`的连接器函数

- `[0] - Collected Props`
  - ```ts
    Ref<object>
    ``` 
  - 它是一个`Ref`对象，它的`value`指向`collect`函数的返回值，如果没有定义`collect`函数，它的`value`就是一个空对象

- `[1] - DragSource Connector`
  - ```ts
    (el: Ref<HTMLElement> | HTMLElement, options?: DragSourceOptions) => HTMLElement
    ``` 
  - 拖拽源的连接器函数。**它必须被调用**，并且传入一个 `Ref<HTMLElement> | HTMLElement`的可拖拽 DOM 元素；
  - 第二个参数是一个options对象，与Specification对象的options一致

- `[2] - DragPreview Connector` 
  - ```ts
    (el: Ref<HTMLElement> | HTMLElement, options?: DragPreviewOptions) => HTMLElement
    ``` 
  - 拖拽预览的连接器函数。它是可选的，**默认使用 dragSource 作为预览元素**，接收一个 `Ref<HTMLElement> | HTMLElement`的可拖拽 DOM 元素；
  - 第二个参数是一个options对象，与Specification对象的previewOptions一致

### Specification 对象

在了解`Specification`对象的基本用法之前，你可能需要先了解一下[DragSourceMonitor](../monitors/drag-source-monitor)对象。


| Key            | 必填  | 类型                                                          | 说明                                                                                                                                                                             |
|----------------|-----|-------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| type           | 是   | `string \| symbol`                                                                                                                                                                        | 拖拽元素的类型                                                                                                                                                                                              |
| item           | 是   | `object \| () => object`                                                                                                                                                                  | 对象时，它是一个描述被拖动数据的纯 JavaScript 对象。<br>这是拖放目标唯一可用的关于拖动源的信息，因此选择他们需要知道的最少数据很重要。您可能很想在此处放置一个复杂的引用，但您应该尽量避免这样做，因为它会耦合拖动源和放置目标。使用类似的东西是个好主意`{ id }`。<br> 函数时，它在拖动操作开始时被触发并返回一个表示拖动操作的对象。如果返回`null`，则取消拖动操作。 |
| collect        | 否   | `(monitor: DragSourceMonitor) => CollectedProps`            | 一个收集器的函数。它应该返回一个普通对象并成为`useDrag`返回值中的第一个项。                                                                                                                                     |
| previewOptions | 否   | `DragPreviewOptions`                                        | 一个描述拖动预览选项的纯 JavaScript 对象。                                                                                                                                                    |
| options        | 否   | `DragSourceOptions`                                         | 一个普通对象，可选地包含以下任何属性：<br>`dropEffect`: 非必填，在此拖动中使用的拖放效果类型。可选值：`'move' \| 'copy'`                                                                               |
| end            | 否   | `(draggedItem: object, monitor: DragSourceMonitor) => void` | 当拖动停止时，`end`函数会被调用。<br>你可以调用`monitor.didDrop()`以检查本次拖拽是否成功；如果它成功，并且放置目标通过从其`drop()`方法返回一个普通对象来指定放置结果，那么它将作为`monitor.getDropResult()`的返回值。<br>这个方法是处理数据变化的好地方。 |
| canDrag        | 否   | `boolean \| (monitor: DragSourceMonitor) => boolean`                                                                                                                                       | 你可以使用它来指定当前是否允许拖动。默认为`true`。<br>如果您想禁用基于某些条件的拖动，则指定一个函数会很便捷。<br>注意：你不能在这个方法内部调用`monitor.canDrag()`。                                                       |
| isDragging     | 否   | `boolean \| (monitor: DragSourceMonitor) => boolean`                                                                                                                                       | 默认情况下，只有发起拖动操作的拖动源才被认为是拖动的。<br>你可以通过定义自定义一个`isDragging`方法来覆盖此行为。它可能会返回类似`props.id === monitor.getItem().id`。<br>注意：你不能在这个方法内部调用`monitor.isDragging()`。 |
