<script lang="ts" setup>
import { useDrag } from 'vue3-dnd'
import { toRefs } from '@vueuse/core'

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
	collect: monitor => ({
		opacity: monitor.isDragging() ? 0.4 : 1,
	}),
}))
const { opacity } = toRefs(collect)
</script>
<template>
	<div
		:ref="drag"
		role="Box"
		:style="{
			...style,
			opacity,
		}"
		data-testid="box"
	>
		<s v-if="isDropped">{{ name }}</s>
		<template v-else>{{ name }}</template>
	</div>
</template>
