# from v1 to v2

## Incompatible changes
All connector functions are changed from `Ref<Connector>` type to `Connector` type, which simplifies the way they are called in script.

### Example
````vue
<script setup>
import { ref } from 'vue'
import { useDrag } from 'vue3-dnd'

const [collect, drag, dragPreview] = useDrag({
   item: {
     type: 'box'
   }
})

const element = ref<HTMLDivElement | null>(null)
// v1 writing
// drag.value(element)
// v2 writing
drag(element)
</script>

<template>
   <div ref="element">DragSource</div>
   <!-- The writing in template remains unchanged -->
   <div :ref="dragPreview">DragPreview</div>
</template>
````
