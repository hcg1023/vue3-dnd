<script lang="ts" setup>
import { useDrag } from 'vue3-dnd'
import { ItemTypes } from './ItemTypes'
import { toRefs } from '@vueuse/core'
import { computed, unref } from 'vue'

interface DragItem {
  name: string
}

const props = defineProps<{
  name: string
}>()

const style = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
}

const [collect, drag] = useDrag(() => ({
  type: ItemTypes.BOX,
  item: { name: props.name },
  end: (item, monitor) => {
    const dropResult = monitor.getDropResult<DragItem>()
    if (item && dropResult) {
      alert(`You dropped ${item.name} into ${dropResult.name}!`)
    }
  },
  collect: monitor => ({
    isDragging: monitor.isDragging(),
  }),
}))

const { isDragging } = toRefs(collect)
const opacity = computed(() => (unref(isDragging) ? 0.4 : 1))
</script>

<template>
  <div :ref="drag" :style="{ ...style, opacity }">
    {{ name }}
  </div>
</template>
