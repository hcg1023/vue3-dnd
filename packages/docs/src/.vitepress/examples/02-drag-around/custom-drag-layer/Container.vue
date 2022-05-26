<script setup lang="ts">
import { reactive } from 'vue'
import { useDrop } from 'vue3-dnd'
import DraggableBox from './DraggableBox.vue'
import { ItemTypes } from './ItemTypes'
import { DragItem } from './interfaces'
import { snapToGrid as doSnapToGrid } from './snapToGrid'

const props = defineProps<{
  snapToGrid: boolean
}>()

interface BoxMap {
  [key: string]: { top: number; left: number; title: string }
}

const boxes = reactive<BoxMap>({
  a: { top: 20, left: 80, title: 'Drag me around' },
  b: { top: 180, left: 20, title: 'Drag me too' },
})
const moveBox = (id: string, left: number, top: number) => {
  Object.assign(boxes[id], { left, top })
}

const [, drop] = useDrop(() => ({
  accept: ItemTypes.BOX,
  drop(item: DragItem, monitor) {
    const delta = monitor.getDifferenceFromInitialOffset() as {
      x: number
      y: number
    }

    let left = Math.round(item.left + delta.x)
    let top = Math.round(item.top + delta.y)
    if (props.snapToGrid) {
      ;[left, top] = doSnapToGrid(left, top)
    }

    moveBox(item.id, left, top)
    return undefined
  },
}))
</script>

<template>
  <div :ref="drop" class="container">
    <DraggableBox
      v-for="(value, key) in boxes"
      :id="key"
      :key="key"
      v-bind="value"
    />
  </div>
</template>

<style scoped lang="less">
.container {
  position: relative;
  width: 300px;
  height: 300px;
  border: 1px solid black;
}
</style>
