<script setup lang="ts">
import { useDrop } from 'vue3-dnd'
import { ItemTypes } from './ItemTypes'
import { computed, ref, unref } from '@vue/composition-api'
import { toRefs } from '@vueuse/core'

const style = {
  height: '12rem',
  width: '12rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
}

const [collect, drop] = useDrop(() => ({
  accept: ItemTypes.BOX,
  drop: () => ({ name: 'Dustbin' }),
  collect: monitor => ({
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  }),
}))

const element = ref<Element | null>(null)
drop(element)

const { canDrop, isOver } = toRefs(collect)
const isActive = computed(() => unref(canDrop) && unref(isOver))
const backgroundColor = computed(() =>
  unref(isActive) ? 'darkgreen' : unref(canDrop) ? 'darkkhaki' : '#222'
)
</script>

<template>
  <div ref="element" role="Dustbin" :style="{ ...style, backgroundColor }">
    {{ isActive ? 'Release to drop' : 'Drag a box here' }}
  </div>
</template>
