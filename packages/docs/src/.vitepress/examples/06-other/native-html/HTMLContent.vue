<script lang="ts" setup>
defineProps<{
  html: string
}>()
</script>
<template>
  <div v-if="html.length">{{ html }}</div>
  <div v-else>Nothing to display</div>
</template>
