<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ title: string }>()

const el = ref()
defineExpose({
	el,
})
</script>

<template>
	<div ref="el" class="box">
		{{ title }}
	</div>
</template>
