<script setup lang="ts">
import { useDrop } from 'vue3-dnd'
import { toRefsValue } from 'vue-ref2reactive'
import { computed, unref } from 'vue'
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
	lastDroppedItem?: any
	accepts: string[]
	onDrop: (arg: any) => void
}>()

const [collect, drop] = useDrop(() => ({
	accept: props.accepts,
	collect: monitor => ({
		isOver: monitor.isOver(),
		canDrop: monitor.canDrop(),
	}),
	drop: (item: unknown) => props.onDrop(item),
}))

const { canDrop, isOver } = toRefsValue(collect)
const isActive = computed(() => unref(canDrop) && unref(isOver))
const backgroundColor = computed(() => {
	if (isActive.value) {
		return 'darkgreen'
	} else if (canDrop.value) {
		return 'darkkhaki'
	}
	return '#222'
})
</script>
<template>
	<div
		:ref="drop"
		:style="{
			...style,
			backgroundColor,
		}"
	>
		{{
			isActive
				? 'Release to drop'
				: `This dustbin accepts: ${accepts.join(',')}`
		}}
		<p v-if="lastDroppedItem">
			Last dropped: {{ JSON.stringify(lastDroppedItem) }}
		</p>
	</div>
</template>
