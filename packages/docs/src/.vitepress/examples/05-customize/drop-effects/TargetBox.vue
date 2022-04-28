<script lang="ts" setup>
import { useDrop } from 'vue3-dnd'
import { ItemTypes } from './ItemTypes'
import { toRefs } from '@vueuse/core'

const [collect, drop] = useDrop(() => ({
	accept: ItemTypes.BOX,
	collect: monitor => ({
		isActive: monitor.canDrop() && monitor.isOver(),
	}),
}))
const { isActive } = toRefs(collect)
</script>

<template>
	<div :ref="drop" class="target-box">
		{{ isActive ? 'Release to drop' : 'Drag item here' }}
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
