<script setup lang="ts">
import Container from './Container.vue'
import { onMounted, ref } from 'vue'

const shouldRender = ref(false)
onMounted(() => {
	shouldRender.value = true
})
</script>

<template>
	<Container v-if="shouldRender"></Container>
</template>
