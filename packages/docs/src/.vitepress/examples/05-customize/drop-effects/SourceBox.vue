<script lang="ts" setup>
import { useDrag } from 'vue3-dnd'
import { ItemTypes } from './ItemTypes'
import { toRefs } from '@vueuse/core'

const props = defineProps<{
  showCopyIcon?: boolean
}>()

const [collect, drag] = useDrag(() => ({
  type: ItemTypes.BOX,
  options: {
    dropEffect: props.showCopyIcon ? 'copy' : 'move',
  },
  collect: monitor => ({
    opacity: monitor.isDragging() ? 0.4 : 1,
  }),
}))
const { opacity } = toRefs(collect)
</script>
<template>
  <div :ref="drag" class="source-box" :style="{ opacity }">
    When I am over a drop zone, I have {{ showCopyIcon ? 'copy' : 'no' }} icon.
  </div>
</template>
<style lang="less" scoped>
.source-box {
  margin-right: 1rem;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  background-color: white;
  border: 1px dashed gray;
  cursor: move;
}
</style>
