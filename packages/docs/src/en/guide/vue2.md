# Support Vue2

Due to some features of Vue2, there is a slight difference in what we use in Vue2.

1. To use in Vue<=2.6, you need to install [@vue/composition-api](https://github.com/vuejs/composition-api)
2. Since Vue2 does not support the dom ref function, we must define an additional ref to host the dom node and pass this ref to our connect function.

## Example
````vue{3,26-27}
<template>
     <div
         ref="element"
         role="Box"
         :data-testid="`box-${name}`"
     >
         {{ name }}
     </div>
</template>

<script lang="ts" setup>
import { useDrag } from 'vue3-dnd'
import { ref } from '@vue/composition-api'

interface DropResult {
   name: string
}

const props = defineProps<{ name: string }>()

const [collect, drag, dragPreview] = useDrag(() => ({
     type: 'BOX',
     item: { name: props.name },
}))

const element = ref()
drag(element)
// optional, the default is consistent with drag
// dragPreview(element)
// same if it is useDrop
// drop(element)
</script>
````
