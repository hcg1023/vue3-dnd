<script lang="ts" setup>
import { useDrop, DropTargetMonitor } from 'vue3-dnd'
import type { DragItem } from './interfaces'
import { Colors } from './Colors'
import { toRefsValue } from 'vue-ref2reactive'
import { computed, unref } from 'vue'

const props = defineProps<{
	onDrop: (item: any) => void
	lastDroppedColor?: string
}>()

const [collect, drop] = useDrop(() => ({
	accept: [Colors.YELLOW, Colors.BLUE],
	drop(_item: DragItem, monitor) {
		props.onDrop(monitor.getItemType())
		return undefined
	},
	collect: (monitor: DropTargetMonitor) => ({
		isOver: monitor.isOver(),
		canDrop: monitor.canDrop(),
		draggingColor: monitor.getItemType() as string,
	}),
}))
const { isOver, draggingColor, canDrop } = toRefsValue(collect)

const opacity = computed(() => (unref(isOver) ? 1 : 0.7))
const backgroundColor = computed(() => {
	let backgroundColor = '#fff'
	switch (unref(draggingColor)) {
		case Colors.BLUE:
			backgroundColor = 'lightblue'
			break
		case Colors.YELLOW:
			backgroundColor = 'lightgoldenrodyellow'
			break
		default:
			break
	}
	return backgroundColor
})
</script>

<template>
	<div
		:ref="drop"
		:data-color="lastDroppedColor || 'none'"
		:style="{ backgroundColor, opacity }"
		class="target-box"
		role="TargetBox"
	>
		<p>Drop here.</p>
		<p v-if="!canDrop && lastDroppedColor">
			Last dropped: {{ lastDroppedColor }}
		</p>
	</div>
</template>

<style lang="less" scoped>
.target-box {
	border: 1px solid gray;
	height: 15rem;
	width: 15rem;
	padding: 2rem;
	text-align: center;
}
</style>
