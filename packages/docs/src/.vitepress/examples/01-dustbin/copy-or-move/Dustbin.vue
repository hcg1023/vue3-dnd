<script setup lang="ts">
import { ItemTypes } from './ItemTypes'
import { useDrop } from 'vue3-dnd'
import { computed, unref } from 'vue'
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

const props = defineProps<{
  allowedDropEffect: string
}>()

const [collect, drop] = useDrop(() => ({
  accept: ItemTypes.BOX,
  drop: () => ({
    name: `${props.allowedDropEffect} Dustbin`,
    allowedDropEffect: props.allowedDropEffect,
  }),
  collect: (monitor: any) => ({
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  }),
}))

const { canDrop, isOver } = toRefs(collect)
const isActive = computed(() => unref(canDrop) && unref(isOver))
const backgroundColor = computed(() =>
  unref(isActive) ? 'darkgreen' : unref(canDrop) ? 'darkkhaki' : '#222'
)
</script>

<template>
  <div :ref="drop" role="Dustbin" :style="{ ...style, backgroundColor }">
    Works with {{ allowedDropEffect }} drop effect
    <br />
    <br />
    {{ isActive ? 'Release to drop' : 'Drag a box here' }}
  </div>
</template>
