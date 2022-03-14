<script lang="ts" setup>
import { useDrag } from 'vue3-dnd'
import { ItemTypes } from './ItemTypes'
import { toRefsReactive } from '../../../../lib/internals/toReactive'
import { toRefs } from 'vue'

const props = defineProps<{
	id: any
	left: number
	top: number
	hideSourceOnDrag?: boolean
}>()

const [collect, drag] = useDrag(() => ({
	type: ItemTypes.BOX,
	item: { id: props.id, left: props.left, top: props.top },
	collect: monitor => ({
		isDragging: monitor.isDragging(),
	}),
}))
const { isDragging } = toRefs(toRefsReactive(collect))
</script>

<template>
	<div v-if="isDragging && hideSourceOnDrag" :ref="drag" />
	<div
		v-else
		:ref="drag"
		class="box"
		:style="{ left: `${left}px`, top: `${top}px` }"
		role="Box"
	>
		<slot></slot>
	</div>
</template>

<style lang="less" scoped>
.box {
	position: absolute;
	border: 1px dashed gray;
	background-color: white;
	padding: 0.5rem 1rem;
	cursor: move;
}
</style>
