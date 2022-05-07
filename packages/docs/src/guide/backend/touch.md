# Touch

HTML5 Backend不支持触摸事件。所以它不适用于平板电脑和移动设备。你可以将`react-dnd-touch-backend`用于触摸设备。

## 安装
```bash
npm install react-dnd-touch-backend
```

## 使用

```vue

<script setup lang="ts">
import { TouchBackend, TouchBackendOptions  } from 'react-dnd-touch-backend'
import { DndProvider } from 'vue3-dnd'

const options: TouchBackendOptions = {
	
}
</script>

<template>
  <DndProvider :backend="TouchBackend" :options="options">
    <!-- your drag-and-drop application -->
  </DndProvider>
</template>
```

## Options选项

| Key                  | 类型                                   | 默认值         | 说明                                                                                                |
|----------------------|--------------------------------------|-------------|---------------------------------------------------------------------------------------------------|
| enableTouchEvents    | `boolean`                            | `true`      | 指示是否启用基于触摸的事件处理的标志。                                                                               |
| enableMouseEvents    | `boolean`                            | `false`     | 指示是否启用基于点击的事件处理的标志。<br>**注意**：由于 `touchstart/touchend` 事件传播与 `mousedown/mouseup/click` 的差异，这是错误的。 |
| enableKeyboardEvents | `boolean`                            | `false`     | 指示是否启用键盘事件处理的标志。                                                                                  |
| delay                | `number`                             | `0`         | 延迟处理所有事件的毫秒数。                                                                                     |
| delayTouchStart                | `number`                             | `0`         | 延迟处理触摸事件的毫秒数。                                                                                     |
| delayMouseStart                | `number`                             | `0`         | 延迟处理鼠标事件的毫秒数。                                                                                     |
| touchSlop                | `number`                             | `0`         | 指定在发出拖动信号之前移动的像素距离。                                                                                     |
| ignoreContextMenu                 | `boolean`                            | `false`     | 如果为 true，则阻止 contextmenu 事件取消拖动。                                                                                     |
| scrollAngleRanges                 | `{ start?: number, end?: number }[]` | `undefined` | 指定应忽略拖动事件的角度范围（以度为单位）。当您希望允许用户沿特定方向滚动而不是拖动时，这很有用。度数顺时针移动，0/360 指向左侧。                                                                                     |
```ts
// allow vertical scrolling
const options = {
  scrollAngleRanges: [
    { start: 30, end: 150 },
    { start: 210, end: 330 }
  ]
}
// allow horizontal scrolling
const options = {
  scrollAngleRanges: [{ start: 300 }, { end: 60 }, { start: 120, end: 240 }]
}
```
| Key                  | 类型        | 默认值         | 说明                                                                                                                        |
|----------------------|-----------|-------------|---------------------------------------------------------------------------------------------------------------------------|
| enableHoverOutsideTarget                 | `boolean` | `undefined` | 当指针离开 DropTarget 区域时继续拖动当前拖动的元素。                                                                                          |
| getDropTargetElementsAtPoint                  | `boolean` | `undefined` | 使用 `document.elementsFromPoint` 或 polyfill。指定自定义函数以在给定点查找放置目标元素。对于在 `document.elementsFromPoint` 不可用的环境（iOS Safari）中提高性能很有用。。 |

```ts
const hasNative =
  document && (document.elementsFromPoint || document.msElementsFromPoint)

function getDropTargetElementsAtPoint(x, y, dropTargets) {
  return dropTargets.filter((t) => {
    const rect = t.getBoundingClientRect()
    return (
      x >= rect.left && x <= rect.right && y <= rect.bottom && y >= rect.top
    )
  })
}

// use custom function only if elementsFromPoint is not supported
const backendOptions = {
  getDropTargetElementsAtPoint: !hasNative && getDropTargetElementsAtPoint
}
```
