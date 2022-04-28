<script lang="ts" setup>
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
	accept: string[]
	lastDroppedItem?: any
	onDrop: (item: any) => void
}>()

const [collect, drop] = useDrop({
	accept: props.accept,
	drop: props.onDrop,
	collect: (monitor: any) => ({
		isOver: monitor.isOver(),
		canDrop: monitor.canDrop(),
	}),
})

const { canDrop, isOver } = toRefs(collect)
const isActive = computed(() => unref(canDrop) && unref(isOver))
const backgroundColor = computed(() =>
	unref(isActive) ? 'darkgreen' : unref(canDrop) ? 'darkkhaki' : '#222'
)
</script>

<template>
	<div :ref="drop" role="Dustbin" :style="{ ...style, backgroundColor }">
		{{
			isActive
				? 'Release to drop'
				: `This dustbin accepts: ${accept.join(', ')}`
		}}

		<p v-if="lastDroppedItem">
			Last dropped: {{ JSON.stringify(lastDroppedItem) }}
		</p>
	</div>
</template>
