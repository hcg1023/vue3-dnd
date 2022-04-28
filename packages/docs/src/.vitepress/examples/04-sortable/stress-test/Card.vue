<script lang="ts" setup>
import { useDrag, useDrop } from 'vue3-dnd'
import { ItemTypes } from './ItemTypes'
import { computed, ref, unref } from 'vue'
import { toRefs } from '@vueuse/core'

const props = defineProps<{
	id: any
	text: string
	moveCard: (draggedId: string, id: string) => void
}>()

const [collect, connectDrag] = useDrag({
	type: ItemTypes.CARD,
	item: () => ({ id: props.id }),
	collect: monitor => {
		const result = {
			handlerId: monitor.getHandlerId(),
			isDragging: monitor.isDragging(),
		}
		return result
	},
})
const { isDragging, handlerId } = toRefs(collect)

const [, connectDrop] = useDrop({
	accept: ItemTypes.CARD,
	hover({ id: draggedId }: { id: string; type: string }) {
		if (draggedId !== props.id) {
			props.moveCard(draggedId, props.id)
		}
	},
})

const divRef = ref<HTMLDivElement | null>(null)
connectDrag.value(divRef)
connectDrop.value(divRef)

const opacity = computed(() => (unref(isDragging) ? 0 : 1))
</script>

<template>
	<div
		ref="divRef"
		class="card"
		:style="{ opacity }"
		:data-handler-id="handlerId"
	>
		{{ text }}
	</div>
</template>

<style lang="less" scoped>
.card {
	border: 1px dashed gray;
	padding: 0.5rem 1rem;
	margin-bottom: 0.5rem;
	background-color: white;
	cursor: move;
}
</style>
