<template>
	<div
		:ref="drag"
		role="Box"
		:style="{ ...style, opacity }"
		:data-testid="`box-${name}`"
	>
		{{ name }}
	</div>
</template>

<script lang="ts" setup>
import { useDrag } from 'vue3-dnd'
import { ItemTypes } from './ItemTypes'
import { computed, toRefs, unref } from 'vue'
import { toRefsReactive } from '../../../../../lib/internals/toReactive'

interface DropResult {
	name: string
}

const props = defineProps<{ name: string }>()

const style = {
	border: '1px dashed gray',
	backgroundColor: 'white',
	padding: '0.5rem 1rem',
	marginRight: '1.5rem',
	marginBottom: '1.5rem',
	cursor: 'move',
	float: 'left',
}

const [collect, drag] = useDrag(() => ({
	type: ItemTypes.BOX,
	item: () => ({
		name: props.name,
	}),
	end: (item, monitor) => {
		const dropResult = monitor.getDropResult<DropResult>()
		if (item && dropResult) {
			alert(`You dropped ${item.name} into ${dropResult.name}!`)
		}
	},
	collect: monitor => ({
		isDragging: monitor.isDragging(),
		handlerId: monitor.getHandlerId(),
	}),
}))

const { isDragging } = toRefs(toRefsReactive(collect))

const opacity = computed(() => (unref(isDragging) ? 0.4 : 1))
</script>

<style lang="less" scoped>
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
