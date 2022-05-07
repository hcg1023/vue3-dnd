<script setup lang="ts">
import { useDrag } from 'vue3-dnd'
import { ItemTypes } from './ItemTypes'
import { toRefs } from '@vueuse/core'

const [collect, drag, preview] = useDrag(() => ({
	type: ItemTypes.BOX,
	collect: monitor => ({
		opacity: monitor.isDragging() ? 0.4 : 1,
	}),
}))
const { opacity } = toRefs(collect)
</script>

<template>
	<div :ref="preview" class="box-preview" :style="{ opacity }">
		<div :ref="drag" class="box-drag" />
		Drag me by the handle
	</div>
</template>

<style lang="less" scoped>
.box-preview {
	width: 20rem;
	margin-bottom: 0.5rem;
	padding: 0.5rem 1rem;
	background-color: white;
	border: 1px dashed gray;
}

.box-drag {
	display: inline-block;
	width: 1rem;
	height: 1rem;
	margin-right: 0.75rem;
	background-color: green;
	cursor: move;
}
</style>
