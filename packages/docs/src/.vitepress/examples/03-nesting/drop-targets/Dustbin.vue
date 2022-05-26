<script lang="ts" setup>
import { computed, ref, unref } from 'vue'
import { useDrop } from 'vue3-dnd'
import { ItemTypes } from './ItemTypes'
import { toRefs } from '@vueuse/core'

function getStyle(backgroundColor: string) {
  return {
    border: '1px solid rgba(0,0,0,0.2)',
    minHeight: '8rem',
    minWidth: '8rem',
    color: 'white',
    backgroundColor,
    padding: '2rem',
    paddingTop: '1rem',
    margin: '1rem',
    textAlign: 'center',
    float: 'left',
    fontSize: '1rem',
  }
}

const props = defineProps<{
  greedy?: boolean
}>()

const hasDropped = ref(false)
const hasDroppedOnChild = ref(false)

const [collect, drop] = useDrop(() => ({
  accept: ItemTypes.BOX,
  drop(_item: unknown, monitor) {
    const didDrop = monitor.didDrop()
    if (didDrop && !props.greedy) {
      return
    }
    hasDropped.value = true
    hasDroppedOnChild.value = didDrop
  },
  collect: monitor => ({
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
  }),
}))
const { isOver, isOverCurrent } = toRefs(collect)
const text = computed(() => (props.greedy ? 'greedy' : 'not greedy'))
const backgroundColor = computed(() => {
  let backgroundColor = 'rgba(0, 0, 0, .5)'

  if (unref(isOverCurrent) || (unref(isOver) && props.greedy)) {
    backgroundColor = 'darkgreen'
  }
  return backgroundColor
})
</script>

<template>
  <div :ref="drop" :style="getStyle(backgroundColor)">
    {{ text }}
    <br />
    <span v-if="hasDropped"
      >dropped {{ hasDroppedOnChild ? ' on child' : '' }}</span
    >
    <div><slot></slot></div>
  </div>
</template>
