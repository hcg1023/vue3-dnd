<script lang="ts" setup>
import { DragPreviewImage, useDrag } from 'vue3-dnd'
import { ItemTypes } from './ItemTypes'
import { boxImage } from './boxImage'
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
	<DragPreviewImage :connect="preview" :src="boxImage" />
	<div :ref="drag" class="box" :style="{ opacity }">
		Drag me to see an image
	</div>
</template>

<style lang="less" scoped>
.box {
	border: 1px dashed gray;
	padding: 0.5rem 1rem;
	margin-bottom: 0.5rem;
	background-color: white;
	cursor: move;
	width: 20rem;
}
</style>
