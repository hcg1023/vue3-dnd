<script setup lang="ts">
import { XYCoord, useDragLayer } from 'vue3-dnd'
import { ItemTypes } from './ItemTypes'
import BoxDragPreview from './BoxDragPreview.vue'
import { snapToGrid } from './snapToGrid'
import { toRefs } from '@vueuse/core'

function getItemStyles(
  initialOffset: XYCoord | null,
  currentOffset: XYCoord | null,
  isSnapToGrid: boolean
) {
  if (!initialOffset || !currentOffset) {
    return {
      display: 'none',
    }
  }

  let { x, y } = currentOffset

  if (isSnapToGrid) {
    x -= initialOffset.x
    y -= initialOffset.y
    ;[x, y] = snapToGrid(x, y)
    x += initialOffset.x
    y += initialOffset.y
  }

  const transform = `translate(${x}px, ${y}px)`
  return {
    transform,
  }
}

const props = defineProps<{
  snapToGrid: boolean
}>()

const collect = useDragLayer(monitor => ({
  item: monitor.getItem(),
  itemType: monitor.getItemType(),
  initialOffset: monitor.getInitialSourceClientOffset(),
  currentOffset: monitor.getSourceClientOffset(),
  isDragging: monitor.isDragging(),
}))
const { itemType, isDragging, item, initialOffset, currentOffset } =
  toRefs(collect)
</script>

<template>
  <div class="layer">
    <div :style="getItemStyles(initialOffset, currentOffset, props.snapToGrid)">
      <BoxDragPreview v-if="itemType === ItemTypes.BOX" :title="item.title" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.layer {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
</style>
