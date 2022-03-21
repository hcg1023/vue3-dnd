<script lang="ts" setup>
import { useDrop } from 'vue3-dnd'
import { ItemTypes } from './ItemTypes'
import { toRefsValue } from 'vue-ref2reactive'
import { computed, unref } from 'vue'

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

const [collect, drop] = useDrop(() => ({
	accept: ItemTypes.BOX,
	drop: () => ({ name: 'Dustbin' }),
	collect: monitor => ({
		isOver: monitor.isOver(),
		canDrop: monitor.canDrop(),
	}),
}))
const { canDrop, isOver } = toRefsValue(collect)
const isActive = computed(() => unref(canDrop) && unref(isOver))
const backgroundColor = computed(() => {
	if (isActive.value) {
		return 'darkgreen'
	} else if (canDrop.value) {
		return 'darkkhaki'
	}
	return '#222'
})
</script>
<template>
	<div :ref="drop" class="target-box" :style="{ ...style, backgroundColor }">
		{{ isActive ? 'Release to drop' : 'Drag a box here' }}
	</div>
</template>
