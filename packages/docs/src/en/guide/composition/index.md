# Composition API

We provide three main hooks to connect your components to Vue3 DnD. And a fourth hook is provided to let you connect to Vue3 DnD in development or testing.

- `useDrag`
- `useDrop`
- `useDragLayer`
- `useDragDropManager` (dev/test hook)


## Basic example
Use the composition api to make a simple drag and drop box.

````vue
<script setup lang="ts">
import { useDrag } from 'vue3-dnd'
import { toRefs } from "@vueuse/core";

const [collect, drag, dragPreview] = useDrag(() => ({
// "type" is required. It is used by "accept" of the drop target.
type: 'BOX',
// The collect function passes in a "monitor" instance, which is used to get the required status information from DnD.
collect: (monitor) => ({
isDragging: monitor.isDragging()
})
}))
// collect is a Ref object, the default value needs to be obtained from collect.value,
// Ref objects can be converted to destructible objects using toRefs
const { isDragging } = toRefs(collect)
</script>

<template>
<!-- This is optional. By default dragPreview will be attached to dragSource -->
<div :ref="dragPreview" :style="{ opacity: isDragging ? 0.5 : 1 }">
<div role="Handle" :ref="drag"/>
</div>
</template>
````

Next, we need a drop target.

````vue

<script setup lang="ts">
import {useDrop} from 'vue3-dnd'
import {toRefs} from '@vueuse/core'

const [collect, drop] = useDrop(() => ({
// allowed type(string|symbol), or type
accept: 'BOX',
// pass a collect data
collect: monitor => ({
isOver: monitor.isOver(),
canDrop: monitor.canDrop(),
}),
}))
const {canDrop, isOver} = toRefs(collect)
</script>

<template>
<div :ref="drop" :style="{ backgroundColor: isOver ? 'red' : 'white' }">
{{ canDrop ? 'Release to drop' : 'Drag a box here' }}
</div>
</template>
````

So we have implemented a drag and drop box, you can then read the separate API documentation, or check out [example](/example/).
