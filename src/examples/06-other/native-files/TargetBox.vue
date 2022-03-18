<script lang="ts" setup>
import { NativeTypes } from 'react-dnd-html5-backend'
import { useDrop, DropTargetMonitor } from 'vue3-dnd'
import { toRefsValue } from 'vue-ref2reactive'
import { computed, unref } from 'vue'

const props = defineProps<{
	onDrop: (item: { files: any[] }) => void
}>()

const [collect, drop] = useDrop(() => ({
	accept: [NativeTypes.FILE],
	drop(item: { files: any[] }) {
		props.onDrop?.(item)
	},
	canDrop(item: any) {
		console.log('canDrop', item.files, item.items)
		return true
	},
	hover(item: any) {
		console.log('hover', item.files, item.items)
	},
	collect: (monitor: DropTargetMonitor) => {
		const item = monitor.getItem() as any
		if (item) {
			console.log('collect', item.files, item.items)
		}

		return {
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}
	},
}))
const { canDrop, isOver } = toRefsValue(collect)
const isActive = computed(() => unref(canDrop) && unref(isOver))
</script>

<template>
	<div :ref="drop" class="target-box">
		{{ isActive ? 'Release to drop' : 'Drag file here' }}
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
