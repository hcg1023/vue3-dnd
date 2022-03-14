<script setup lang="ts">
import { useDrag, DragSourceMonitor } from 'vue3-dnd'
import { ItemTypes } from './ItemTypes'
import { getEmptyImage } from 'react-dnd-html5-backend'
import Box from './Box.vue'
import { toRefsReactive } from '../../../../lib/internals/toReactive'
import { toRefs } from 'vue'

const props = defineProps<{
	id: string
	title: string
	left: number
	top: number
}>()

const [collect, drag, preview] = useDrag(() => ({
	type: ItemTypes.BOX,
	item: props,
	collect: (monitor: DragSourceMonitor) => ({
		isDragging: monitor.isDragging(),
	}),
}))

preview.value(getEmptyImage(), { captureDraggingState: true })

const { isDragging } = toRefs(toRefsReactive(collect))
</script>

<template>
	<div
		:ref="drag"
		:style="{
			position: 'absolute',
			transform: `translate3d(${left}px, ${top}px, 0)`,
			opacity: isDragging ? 0 : 1,
			height: isDragging ? 0 : '',
		}"
		role="DraggableBox"
	>
		<Box :title="title" />
	</div>
</template>
