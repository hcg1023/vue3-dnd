<script lang="ts" setup>
import { NativeTypes } from 'react-dnd-html5-backend'
import Dustbin from './Dustbin.vue'
import Box from './Box.vue'
import { ItemTypes } from './ItemTypes'
import { ref } from 'vue'

interface DustbinState {
  accepts: string[]
  lastDroppedItem: any
}

interface BoxState {
  name: string
  type: string
}

export interface DustbinSpec {
  accepts: string[]
  lastDroppedItem: any
}
export interface BoxSpec {
  name: string
  type: string
}

const dustbins = ref<DustbinState[]>([
  { accepts: [ItemTypes.GLASS], lastDroppedItem: null },
  { accepts: [ItemTypes.FOOD], lastDroppedItem: null },
  {
    accepts: [ItemTypes.PAPER, ItemTypes.GLASS, NativeTypes.URL],
    lastDroppedItem: null,
  },
  { accepts: [ItemTypes.PAPER, NativeTypes.FILE], lastDroppedItem: null },
])

const boxes = ref<BoxState[]>([
  { name: 'Bottle', type: ItemTypes.GLASS },
  { name: 'Banana', type: ItemTypes.FOOD },
  { name: 'Magazine', type: ItemTypes.PAPER },
])

const droppedBoxNames = ref<string[]>([])

function isDropped(boxName: string) {
  return droppedBoxNames.value.includes(boxName)
}

const handleDrop = (index: number, item: { name: string }) => {
  const { name } = item
  droppedBoxNames.value.push(name)
  dustbins.value[index].lastDroppedItem = item
}
</script>

<template>
  <div>
    <div :style="{ overflow: 'hidden', clear: 'both' }">
      <Dustbin
        v-for="(item, index) in dustbins"
        :key="index"
        :accept="item.accepts"
        :last-dropped-item="item.lastDroppedItem"
        @drop="handleDrop(index, $event)"
      ></Dustbin>
    </div>

    <div :style="{ overflow: 'hidden', clear: 'both' }">
      <Box
        v-for="(item, index) in boxes"
        :key="index"
        :name="item.name"
        :type="item.type"
        :is-dropped="isDropped(item.name)"
      ></Box>
    </div>
  </div>
</template>
