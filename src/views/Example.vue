<script lang="ts" setup>
import { useDrag, useDrop } from 'vue3-dnd'
import { computed, unref } from 'vue'
import Box from './Box.vue'

const [dropCollect, drop] = useDrop(() => ({
	accept: 'Box',
	drop: () => ({ name: 'Dustbin' }),
	collect: monitor => ({
		isOver: monitor.isOver(),
		canDrop: monitor.canDrop(),
	}),
}))
const canDrop = computed(() => unref(dropCollect).canDrop)
const isOver = computed(() => unref(dropCollect).isOver)
const isActive = computed(() => unref(canDrop) && unref(isOver))
const backgroundColor = computed(() =>
	unref(isActive) ? 'darkgreen' : unref(canDrop) ? 'darkkhaki' : '#222'
)

const [collect, drag] = useDrag(() => ({
	type: 'Box',
	item: () => ({
		name: 'Box',
	}),
	end: (item, monitor) => {
		const dropResult = monitor.getDropResult<{ name: string }>()
		if (item && dropResult) {
			alert(`You dropped ${item.name} into ${dropResult.name}!`)
		}
	},
	collect: monitor => ({
		isDragging: monitor.isDragging(),
		handlerId: monitor.getHandlerId(),
	}),
}))
const isDragging = computed(() => collect.value.isDragging)

const opacity = computed(() => (unref(isDragging) ? 0.4 : 1))

const setRef = (instance: any) => {
	drag.value(instance.el)
}
</script>

<template>
	<div>
		<div :style="{ overflow: 'hidden', clear: 'both' }">
			<div
				:ref="drop"
				role="Dustbin"
				class="drop-container"
				:style="{ backgroundColor }"
			>
				{{ isActive ? 'Release to drop' : 'Drag a box here' }}
			</div>
		</div>
		<div :style="{ overflow: 'hidden', clear: 'both' }">
			<Box
				:ref="setRef"
				class="box"
				role="Box"
				:style="{ opacity }"
				title="Box"
			></Box>
			<!--			<div :ref="drag" class="box" role="Box" :style="{ opacity }">Box</div>-->
		</div>
	</div>
</template>

<style lang="less" scoped>
.drop-container {
	height: 12rem;
	width: 12rem;
	margin-right: 1.5rem;
	margin-bottom: 1.5rem;
	color: white;
	padding: 1rem;
	text-align: center;
	font-size: 1rem;
	line-height: normal;
	float: left;
}
.box {
	border: 1px solid gray;
	background-color: white;
	padding: 0.5rem 1rem;
	margin-right: 1.5rem;
	margin-bottom: 1.5rem;
	cursor: move;
	float: left;

	&.dragging {
		opacity: 0.4;
	}
}
</style>
