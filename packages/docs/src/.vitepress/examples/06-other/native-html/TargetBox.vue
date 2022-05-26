<script lang="ts" setup>
import { NativeTypes } from 'react-dnd-html5-backend'
import { useDrop } from 'vue3-dnd'
import { computed, unref } from 'vue'
import { toRefs } from '@vueuse/core'

const props = defineProps<{
  onDrop: (arg: { html: string }) => void
}>()

const [collect, drop] = useDrop(() => ({
  accept: [NativeTypes.HTML],
  drop(item: { html: string }) {
    props.onDrop?.(item)
  },
  collect: monitor => ({
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  }),
}))
const { canDrop, isOver } = toRefs(collect)
const isActive = computed(() => unref(canDrop) && unref(isOver))
</script>

<template>
  <div :ref="drop" class="target-box">
    {{ isActive ? 'Release to drop' : 'Drag HTML here' }}
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
