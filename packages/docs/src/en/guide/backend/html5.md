# HTML5

This is Backend primarily supported by `react-dnd`. It uses the `Drag` and `Drop` events of `HTML5` under the hood. And dealt with [some of its problems](http://quirksmode.org/blog/archives/2009/09/the_html5_drag.html).

## Install
```bash
npm install react-dnd-html5-backend
````
### Extra Features

In addition to the exported `Backend`, HTML5 Backend provides some additional features:

- `getEmptyImage()`: It is a function that returns a transparent empty image. Used to use DragSource's `dragPreview` connector to completely hide the drag preview drawn by the browser. Easy to draw custom drag layer `DragLayer`. Note that custom drag previews do not work in IE.
- `NativeTypes`: an enumeration of three constant `NativeTypes`. `NativeTypes.FILE`, `NativeTypes.URL` and `NativeTypes.TEXT`. You can specify these types for drop targets to handle drag-and-drop of local files, urls, or regular page text.

## use

````vue

<script setup lang="ts">
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'vue3-dnd'
</script>

<template>
  <DndProvider :backend="HTML5Backend">
    <!-- your drag-and-drop application -->
  </DndProvider>
</template>
````

When you call `getItem()` on the `monitor` monitor, HTML5 Backend exposes various data in the event according to the drop type:

- `NativeTypes.FILE`:
  - `getItem().files`, an array containing the dragged files
  - `getItem().items`, use `event.dataTransfer.items` (you can use this to list files when deleting a directory)
- `NativeTypes.URL`:
  - `getItem().url`, an array containing the dragged URLs
- `NativeTypes.TEXT`:
  - `getItem().text`, the dragged text
