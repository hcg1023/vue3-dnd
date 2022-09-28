# common problem

## usage
### How to install Vue3 DnD?
```bash
npm install vue3-dnd react-dnd-html5-backend
````

### How to make the component drag and drop only through the specified small handle?
Specify the container node as `dragPreview`, but only set the drag handle to `dragSource`. See [Example of custom drag handles](/example/customize/handles-and-previews).


### How to limit the preview of drag and drop?
By default, you cannot constrain the drag preview movement because the drag preview is drawn by the browser. However, you can use a [custom drag layer](/example/drag-around/custom-drag-layer) where you are free to render anything, including any snaps or constraints.

## How to make a single element both draggable and droppable?
The `useDrag` and `useDrop` connectors can be used simultaneously. E.g:

````vue

<script setup lang="ts">
import { useDrop, useDrag } from 'vue3-dnd'

const [, drag] = useDrag({})
const [, drop] = useDrop({})
</script>

<template>
  <div :ref="node => drag(drop(node))"></div>
</template>
````


## How to drag and drop a native file?
If you are using [HTML5 Backend](https://www.npmjs.com/package/react-dnd-html5-backend), you can use `NativeTypes` to specify a type for the drop target:

````vue{2,6}
<script lang="ts" setup>
import { NativeTypes } from 'react-dnd-html5-backend'
import { useDrop } from 'vue3-dnd'

const [collect, drop] = useDrop(() => ({
accept: [NativeTypes.FILE],
drop(item: { files: any[] }) {
console.log(item.files)
}
}))
</script>

<template>
<div :ref="drop"></div>
</template>
````


## Could not find the drag and drop manager in the context
Please check if your component is wrapped with `DndProvider`.


## The collect function of useDrop cannot be executed in time

Please check whether the accept parameter you pass in is a constant or a ref.
This scenario is common: when the accept parameter is passed in from props, the user directly writes a reference type value in the vue template or render function, as shown below:
````vue{2}
<template>
  <UseDrop :accept="['box']"></UseDrop>
</template>
````
````vue
<script>
export default {
  name: 'UseDrop',
}
</script>
<script setup lang="ts">
import { useDrop } from 'vue3-dnd'
const props = defineProps<{ accept: string[] }>()

const [collect, drop] = useDrop(() => ({
  // At this time, the reference of accept will be changed due to the execution of the render function, and then a series of side effects of useDrop will be triggered, resulting in the unsuccessful collection of collect
  accept: props.accept,
}))
</script>
````

solution
````vue{2,5}
<template>
<UseDrop :accept="accept"></UseDrop>
</template>
<script setup>
const accept = ['box']
</script>
````
