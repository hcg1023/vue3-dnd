<script lang="ts" setup>
import { onUnmounted, ref } from 'vue'
import { NativeTypes } from 'react-dnd-html5-backend'
import Dustbin from './Dustbin.vue'
import Box from './Box.vue'
import { ItemTypes } from './ItemTypes'
interface SourceBox {
	name: string
	type: string
}
interface DustbinBox {
	id: number
	accepts: string[]
	lastDroppedItem: any
}

const dustbins = ref<DustbinBox[]>([
	{ id: 1, accepts: [ItemTypes.GLASS], lastDroppedItem: null },
	{ id: 2, accepts: [ItemTypes.FOOD], lastDroppedItem: null },
	{
		id: 3,
		accepts: [ItemTypes.PAPER, ItemTypes.GLASS, NativeTypes.URL],
		lastDroppedItem: null,
	},
	{
		id: 4,
		accepts: [ItemTypes.PAPER, NativeTypes.FILE],
		lastDroppedItem: null,
	},
])
const boxes = ref<SourceBox[]>([
	{ name: 'Bottle', type: ItemTypes.GLASS },
	{ name: 'Banana', type: ItemTypes.FOOD },
	{ name: 'Magazine', type: ItemTypes.PAPER },
])
const droppedBoxNames = ref<string[]>([])

const interval = setInterval(() => {
	boxes.value.sort(() => Math.random() - 0.5)
	dustbins.value.sort(() => Math.random() - 0.5)
}, 4000)
onUnmounted(() => {
	clearInterval(interval)
})
const isDropped = (boxName: string) =>
	droppedBoxNames.value.indexOf(boxName) > -1

const handleDrop = (index: number, item: { name: string }) => {
	const { name } = item
	dustbins.value[index].lastDroppedItem = item
	name && droppedBoxNames.value.push(name)
}
</script>

<template>
	<div>
		<div :style="{ overflow: 'hidden', clear: 'both' }">
			<Dustbin
				v-for="(item, index) in dustbins"
				:key="`${item.id}`"
				:accepts="item.accepts"
				:last-dropped-item="item.lastDroppedItem"
				:on-drop="item => handleDrop(index, item)"
			/>
		</div>

		<div :style="{ overflow: 'hidden', clear: 'both' }">
			<Box
				v-for="(item, index) in boxes"
				:key="index"
				:name="item.name"
				:type="item.type"
				:is-dropped="isDropped(item.name)"
			/>
		</div>
	</div>
</template>
