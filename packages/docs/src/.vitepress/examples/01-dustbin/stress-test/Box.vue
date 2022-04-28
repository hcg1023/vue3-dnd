<script setup lang="ts">
import { useDrag } from 'vue3-dnd'
import { toRefs } from '@vueuse/core'
import { computed, unref } from 'vue'

const style = {
	border: '1px dashed gray',
	backgroundColor: 'white',
	padding: '0.5rem 1rem',
	marginRight: '1.5rem',
	marginBottom: '1.5rem',
	cursor: 'move',
	float: 'left',
}

const props = defineProps<{
	name: string
	type: string
	isDropped: boolean
}>()

const [collect, drag] = useDrag(() => ({
	type: props.type,
	item: { name: props.name },
	isDragging(monitor) {
		const item = monitor.getItem()
		return props.name === item.name
	},
	collect: monitor => ({
		isDragging: monitor.isDragging(),
	}),
}))
const { isDragging } = toRefs(collect)
const opacity = computed(() => (unref(isDragging) ? 0.4 : 1))
</script>

<template>
	<div
		:ref="drag"
		:style="{
			...style,
			opacity,
		}"
	>
		<s v-if="isDropped">{{ name }}</s>
		<span v-else>{{ name }}</span>
	</div>
</template>
