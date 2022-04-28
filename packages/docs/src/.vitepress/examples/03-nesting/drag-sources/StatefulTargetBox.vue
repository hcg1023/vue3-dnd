<script lang="ts" setup>
import { ref } from 'vue'
import TargetBox from './TargetBox.vue'
const lastDroppedColor = ref<string | null>(null)
const handleDrop = (color: string) => (lastDroppedColor.value = color)
</script>

<template>
	<TargetBox
		v-bind="$attrs"
		:last-dropped-color="lastDroppedColor"
		:on-drop="handleDrop"
	/>
</template>
