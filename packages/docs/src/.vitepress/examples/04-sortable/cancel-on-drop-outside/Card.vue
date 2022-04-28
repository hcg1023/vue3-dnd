<script lang="ts" setup>
import { useDrag, useDrop } from 'vue3-dnd'
import { ItemTypes } from './ItemTypes'
import { computed, unref } from 'vue'
import { toRefs } from '@vueuse/core'

const props = defineProps<{
	id: string
	text: string
	moveCard: (id: string, to: number) => void
	findCard: (id: string) => { index: number }
}>()

interface Item {
	id: string
	originalIndex: number
}

const originalIndex = computed(() => props.findCard(props.id).index)
const [collect, drag] = useDrag(() => ({
	type: ItemTypes.CARD,
	item: () => ({ id: props.id, originalIndex: originalIndex.value }),
	collect: monitor => ({
		isDragging: monitor.isDragging(),
	}),
	end: (item, monitor) => {
		const { id: droppedId, originalIndex } = item
		const didDrop = monitor.didDrop()
		if (!didDrop) {
			props.moveCard(droppedId, originalIndex)
		}
	},
}))

const [, drop] = useDrop(() => ({
	accept: ItemTypes.CARD,
	hover({ id: draggedId }: Item) {
		if (draggedId !== props.id) {
			const { index: overIndex } = props.findCard(props.id)
			props.moveCard(draggedId, overIndex)
		}
	},
}))

const { isDragging } = toRefs(collect)
const opacity = computed(() => (unref(isDragging) ? 0 : 1))
</script>

<template>
	<div :ref="node => drag(drop(node))" class="card" :style="{ opacity }">
		{{ text }}
	</div>
</template>

<style lang="less" scoped>
.card {
	border: 1px dashed gray;
	padding: 0.5rem 1rem;
	margin-bottom: 0.5rem;
	background-color: white;
	cursor: move;
}
</style>
