<script lang="ts" setup>
import { NativeTypes } from 'react-dnd-html5-backend'
import { useDrop, DropTargetMonitor } from 'vue3-dnd'
import { computed, unref } from 'vue'
import { toRefs } from '@vueuse/core'

const props = defineProps<{
  onDrop: (item: { files: any[] }) => void
}>()

const [collect, drop] = useDrop(() => ({
  accept: [NativeTypes.FILE],
  drop(item: { files: any[] }) {
    props.onDrop?.(item)
  },
  canDrop(item: any) {
    console.log('canDrop', item.files, item.items)
    return true
  },
  hover(item: any) {
    console.log('hover', item.files, item.items)
  },
  collect: (monitor: DropTargetMonitor) => {
    const item = monitor.getItem() as any
    if (item) {
      console.log('collect', item.files, item.items)
    }

    return {
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }
  },
}))
const { canDrop, isOver } = toRefs(collect)
const isActive = computed(() => unref(canDrop) && unref(isOver))
</script>

<template>
  <div :ref="drop" class="target-box">
    {{ isActive ? 'Release to drop' : 'Drag file here' }}
  </div>
</template>

<style lang="less" scoped>
.target-box {
  width: 15rem;
  height: 15rem;
  padding: 2rem;
  text-align: center;
  border: 1px solid gray;
}
</style>
