# useDrop

`useDrop`函数提供了一种将你的组件作为**放置目标**连接到 DnD 的方法。它接收一个`Specification`，你可以通过`accpet`指定允许放置的类型，通过`item`表示拖动源的数据，通过`collect`获取拖拽状态等等。

`useDrop`返回了两个值：`collect`函数的返回值，`dropTarget`的连接器函数。


```vue
<script setup lang="ts">
import { useDrop } from 'vue3-dnd'

const [collectedProps, drop] = useDrop(() => ({
	accept: ['BOX']
}))
</script>

<template>
  <div :ref="drop">Drop Target</div>
</template>
```

## 参数

`useDrop`的参数可以是一个`Specification`对象，也可以是一个函数，返回一个`Specification`对象，有关`Specification`的详细信息，请参考[Specification](#specification-对象)。

## 返回值

`useDrop`返回一个数组，包含两个值：`collect`函数的返回值，`dropTarget`的连接器函数

- `[0] - Collected Props` 
  - ```ts
    Ref<object>
    ``` 
  - 它是一个`Ref`对象，它的`value`指向`collect`函数的返回值，如果没有定义`collect`函数，它的`value`就是一个空对象

- `[1] - DragTarget Connector` 
  - ```ts
    Ref<(el: Ref<HTMLElement> | HTMLElement) => HTMLElement>
    ```
  - 放置目标的连接器函数。**它必须被调用**，并且传入一个 `Ref<HTMLElement> | HTMLElement`的可被拖放 DOM 元素；
  - 第二个参数是一个options对象，与Specification对象的options一致

### Specification 对象

在了解`Specification`对象的基本用法之前，你可能需要先了解一下[DropTargetMonitor](../monitors/drop-target-monitor)对象。

| Key     | 必填  | 类型                                                   | 说明                                                                                                                                                                                       |
|---------|-----|------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| accept  | 是   | `string \| symbol \| string[] \| symbol[]`                | 此放置目标只会对[指定类型的拖动源](./use-drag)做出反应。          |
| collect        | 否   | `(monitor: DropTargetMonitor) => CollectedProps`            | 一个收集器的函数。它应该返回一个普通对象并成为`useDrop`返回值中的第一个项。                                                                                                                                               |
| options | 否   | `object`                                             | 目前没什么用。                                                                                                                                                                                  |
| drop    | 否   | `(item: object, monitor: DropTargetMonitor) => (void \| Record<string, any>)`                                                                                                                                                                    | 当拖拽元素放置在目标上时调用。<br>你可以不返回任何东西，也可以返回一个普通对象。<br>如果你返回了一个对象，它将成为`dropResult`,并且在`drag`的`end`方法中，可以通过`monitor.getDropResult()`获取到它。如果你想根据不同的放置目标执行不同的操作，这将是一个不错的选择。<br>如果你的放置目标是嵌套的，那你可以通过`monitor.didDrop()`和`monitor.getDropResult()`来检查嵌套目标是否已经处理。<br>这个方法和`drag`的`end`方法，都是处理数据变化的好地方。如果`canDrop()`方法返回`false`，则不会调用此方法。 |
| hover   | 否   | `(item: object, monitor: DropTargetMonitor) => void ` | 当拖拽组件经过组件上时调用该方法。<br>你可以通过检查`monitor.isOver({ shallow: true })`来检查悬停是仅发生在当前目标上还是发生在内部的嵌套目标上。<br>和`drop()`方法不同的是：即使`canDrop()`返回了`false`，该方法也会被调用。<br>你可以通过`monitor.canDrop()`来确认并避免这种情况。 |
| canDrop    | 否   | `(item: DragObject, monitor: DropTargetMonitor<DragObject, DropResult>) => boolean`                                                                                                                                                                    | 用于指定放置目标是否能够接受此拖拽组件。 <br>如果你希望总是允许，请忽略该方法。<br>如果你想基于 `props`或`monitor.getItem()`中的某些断言禁用放置，就可以使用它。<br>注意：你不能在这个方法中调用 `monitor.canDrop()`。|
