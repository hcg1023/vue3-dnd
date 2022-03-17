<script lang="ts" setup>
import { useDrag, DragSourceMonitor } from 'vue3-dnd'
import { Colors } from './Colors'
import { computed, ref, unref } from 'vue'
import { toRefsValue } from 'vue-ref2reactive'

const props = defineProps<{
	color: string
}>()

const forbidDrag = ref(false)
const [collect, drag] = useDrag(() => ({
	type: props.color,
	canDrag: !forbidDrag.value,
	collect: (monitor: DragSourceMonitor) => ({
		isDragging: monitor.isDragging(),
	}),
}))
const { isDragging } = toRefsValue(collect)

const onToggleForbidDrag = () => {
	forbidDrag.value = !forbidDrag.value
}

const backgroundColor = computed(() => {
	switch (props.color) {
		case Colors.YELLOW:
			return 'lightgoldenrodyellow'
		case Colors.BLUE:
			return 'lightblue'
		default:
			return 'lightgoldenrodyellow'
	}
})

const containerStyle = computed(() => ({
	backgroundColor: unref(backgroundColor),
	opacity: unref(isDragging) ? 0.4 : 1,
	cursor: unref(forbidDrag) ? 'default' : 'move',
}))
</script>

<template>
	<div
		:ref="drag"
		class="source-box"
		:style="containerStyle"
		role="SourceBox"
		:data-color="color"
	>
		<input type="checkbox" :checked="forbidDrag" @change="onToggleForbidDrag" />
		<small>Forbid drag</small>
		<slot></slot>
	</div>
</template>

<style lang="less" scoped>
.source-box {
	border: 1px dashed gray;
	padding: 0.5rem;
	margin: 0.5rem;
}
</style>
