# Touch

HTML5 Backend does not support touch events. So it doesn't work on tablets and mobile devices. You can use `react-dnd-touch-backend` for touch devices.

## Install
```bash
npm install react-dnd-touch-backend
````

## use

````vue

<script setup lang="ts">
import { TouchBackend, TouchBackendOptions } from 'react-dnd-touch-backend'
import { DndProvider } from 'vue3-dnd'

const options: TouchBackendOptions = {

}
</script>

<template>
  <DndProvider :backend="TouchBackend" :options="options">
    <!-- your drag-and-drop application -->
  </DndProvider>
</template>
````

##Options

| Key | Type | Default | Description |
|----------------------|------------------------------------ ------------|-------------|------------- -------------------------------------------------- --------------------------|
| enableTouchEvents | `boolean` | `true` | Flag indicating whether touch-based event handling is enabled. |
| enableMouseEvents | `boolean` | `false` | Flag indicating whether click-based event handling is enabled. <br>**NOTE**: This is wrong due to the difference between `touchstart/touchend` event propagation and `mousedown/mouseup/click`. |
| enableKeyboardEvents | `boolean` | `false` | Flag indicating whether keyboard event handling is enabled. |
| delay | `number` | `0` | The number of milliseconds to delay processing all events. |
| delayTouchStart | `number` | `0` | The number of milliseconds to delay processing touch events. |
| delayMouseStart | `number` | `0` | The number of milliseconds to delay processing mouse events. |
| touchSlop | `number` | `0` | Specifies the pixel distance to move before signaling a drag. |
| ignoreContextMenu | `boolean` | `false` | If true, prevents the contextmenu event from canceling the drag. |
| scrollAngleRanges | `{ start?: number, end?: number }[]` | `undefined` | Specifies the range of angles (in degrees) for which drag events should be ignored. This is useful when you want to allow the user to scroll in a specific direction instead of dragging. The degrees move clockwise, with 0/360 pointing to the left. |
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
````
| Key | Type | Default | Description |
|------------|------------|---------------| ---------------------------------------------------------------------------------------------------------------------------|
| enableHoverOutsideTarget | `boolean` | `undefined` | Continue dragging the currently dragged element when the pointer leaves the DropTarget area. |
| getDropTargetElementsAtPoint | `boolean` | `undefined` | Use `document.elementsFromPoint` or a polyfill. Specify a custom function to find the drop target element at a given point. Useful for improving performance in environments where `document.elementsFromPoint` is not available (iOS Safari). . |

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
````
