<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
	title: string
	yellow?: boolean
	preview?: boolean
}>()
const backgroundColor = computed(() => (props.yellow ? 'yellow' : 'white'))
</script>

<template>
	<div
		class="box"
		:style="{ backgroundColor }"
		:role="preview ? 'BoxPreview' : 'Box'"
	>
		{{ title }}
	</div>
</template>

<style lang="less" scoped>
.box {
	border: 1px dashed gray;
	padding: 0.5rem 1rem;
	cursor: move;
}
</style>
