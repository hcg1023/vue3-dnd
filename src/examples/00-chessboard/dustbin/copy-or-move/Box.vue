<script lang="ts" setup>
import { ItemTypes } from './ItemTypes'
import { useDrag, DragSourceMonitor } from 'vue3-dnd'
import { computed, toRefs } from 'vue'
import { toRefsReactive } from '../../../../../lib/internals/toReactive'

const style = {
	border: '1px dashed gray',
	backgroundColor: 'white',
	padding: '0.5rem 1rem',
	marginRight: '1.5rem',
	marginBottom: '1.5rem',
	float: 'left',
}

interface DropResult {
	allowedDropEffect: string
	dropEffect: string
	name: string
}

const props = defineProps<{
	name: string
}>()

const [collect, drag] = useDrag(() => ({
	type: ItemTypes.BOX,
	item: { name: props.name },
	end(item, monitor) {
		const dropResult = monitor.getDropResult() as DropResult
		if (item && dropResult) {
			let alertMessage = ''
			const isDropAllowed =
				dropResult.allowedDropEffect === 'any' ||
				dropResult.allowedDropEffect === dropResult.dropEffect

			if (isDropAllowed) {
				const isCopyAction = dropResult.dropEffect === 'copy'
				const actionName = isCopyAction ? 'copied' : 'moved'
				alertMessage = `You ${actionName} ${item.name} into ${dropResult.name}!`
			} else {
				alertMessage = `You cannot ${dropResult.dropEffect} an item into the ${dropResult.name}`
			}
			alert(alertMessage)
		}
	},
	collect: (monitor: DragSourceMonitor) => ({
		opacity: monitor.isDragging() ? 0.4 : 1,
	}),
}))
const { opacity } = toRefs(toRefsReactive(collect))
</script>

<template>
	<div :ref="drag" :style="{ ...style, opacity }">{{ name }}</div>
</template>
