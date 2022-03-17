<script setup lang="ts">
import { useDrag } from 'vue3-dnd'
import { ItemTypes } from './ItemTypes'
import { toRefsValue } from 'vue-ref2reactive'

const [collect, drag, preview] = useDrag(() => ({
	type: ItemTypes.BOX,
	collect: monitor => ({
		opacity: monitor.isDragging() ? 0.4 : 1,
	}),
}))
const { opacity } = toRefsValue(collect)
</script>

<template>
	<div :ref="preview" class="box-preview" :style="{ opacity }">
		<div :ref="drag" class="box-drag" />
		Drag me by the handle
	</div>
</template>

<style lang="less" scoped>
.box-preview {
	border: 1px dashed gray;
	padding: 0.5rem 1rem;
	margin-bottom: 0.5rem;
	background-color: white;
	width: 20rem;
}
.box-drag {
	background-color: green;
	width: 1rem;
	height: 1rem;
	display: inline-block;
	margin-right: 0.75rem;
	cursor: move;
}
</style>
