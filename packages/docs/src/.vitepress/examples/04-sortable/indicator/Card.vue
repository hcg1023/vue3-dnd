<script lang="ts" setup>
import { computed, ref, unref } from 'vue'
import { useDrag, useDrop } from 'vue3-dnd'
import { ItemTypes } from './ItemTypes'
import type { XYCoord, Identifier } from 'dnd-core'
import { toRefs } from '@vueuse/core'

const props = defineProps<{
  id: any
  text: string
  index: number
  moveCard: (dragIndex: number, hoverIndex: number) => void
}>()

interface DragItem {
  index: number
  id: string
  type: string
}

const card = ref<HTMLDivElement>()
const [dropCollect, drop] = useDrop<
  DragItem,
  void,
  { handlerId: Identifier | null, isShallowOver: boolean }
>({
  accept: ItemTypes.CARD,
  collect(monitor) {
    return {
      handlerId: monitor.getHandlerId(),
      isShallowOver: monitor.isOver({ shallow: true })
    }
  },
  drop(item: DragItem, monitor) {
    const dragIndex = item.index
    const hoverIndex = props.index
    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return
    }

    // Time to actually perform the action
    props.moveCard(dragIndex, hoverIndex)

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    item.index = hoverIndex
  }
})

const [collect, drag] = useDrag({
  type: ItemTypes.CARD,
  item: () => {
    return { id: props.id, index: props.index }
  },
  collect: (monitor: any) => ({
    isDragging: monitor.isDragging(),
  }),
})

const { handlerId, isShallowOver } = toRefs(dropCollect)
const { isDragging } = toRefs(collect)
const opacity = computed(() => (unref(isDragging) ? 0 : 1))

const setRef = (el: HTMLDivElement) => {
  card.value = drag(drop(el)) as HTMLDivElement
}
</script>

<template>
  <div class="wrapper">
    <div
      :ref="setRef"
      class="card"
      :style="{ opacity }"
      :data-handler-id="handlerId"
    >
      {{ text }}
    </div>
    <div v-if="isShallowOver && !isDragging" :class="['indicator', { first: props.index === 0 }]"></div>
  </div>

</template>

<style lang="less" scoped>
.wrapper {
  position: relative;
  padding: .5rem 0;
}
.indicator {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: #000;
  &.first {
    top: 0;
    bottom: unset;
  }
}
.card {
  padding: 0.5rem 1rem;
  background-color: white;
  border: 1px dashed gray;
  cursor: move;
}
</style>
