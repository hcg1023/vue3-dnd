<script setup lang="ts">
import { XYCoord, useDragLayer } from 'vue3-dnd'
import { ItemTypes } from './ItemTypes'
import BoxDragPreview from './BoxDragPreview.vue'
import { snapToGrid } from './snapToGrid'
import { toRefs } from 'vue'
import { toRefsReactive } from '../../../../lib/internals/toReactive'

function getItemStyles(
	initialOffset: XYCoord | null,
	currentOffset: XYCoord | null,
	isSnapToGrid: boolean
) {
	if (!initialOffset || !currentOffset) {
		return {
			display: 'none',
		}
	}

	let { x, y } = currentOffset

	if (isSnapToGrid) {
		x -= initialOffset.x
		y -= initialOffset.y
		;[x, y] = snapToGrid(x, y)
		x += initialOffset.x
		y += initialOffset.y
	}

	const transform = `translate(${x}px, ${y}px)`
	return {
		transform,
	}
}

const props = defineProps<{
	snapToGrid: boolean
}>()

const collect = useDragLayer(monitor => ({
	item: monitor.getItem(),
	itemType: monitor.getItemType(),
	initialOffset: monitor.getInitialSourceClientOffset(),
	currentOffset: monitor.getSourceClientOffset(),
	isDragging: monitor.isDragging(),
}))
const { itemType, isDragging, item, initialOffset, currentOffset } = toRefs(
	toRefsReactive(collect)
)
</script>

<template>
	<div class="layer">
		<div :style="getItemStyles(initialOffset, currentOffset, props.snapToGrid)">
			<BoxDragPreview v-if="itemType === ItemTypes.BOX" :title="item.title" />
		</div>
	</div>
</template>

<style lang="less" scoped>
.layer {
	position: fixed;
	pointer-events: none;
	z-index: 100;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
}
</style>
