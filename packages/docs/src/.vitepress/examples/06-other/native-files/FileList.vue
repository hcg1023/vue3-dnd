<script setup lang="ts">
const props = defineProps<{
  files: File[]
}>()
</script>

<template>
  <ul v-if="files.length">
    <li v-for="file in files" :key="file.name">
      {{ file.name }} of size {{ file.size }} and type {{ file.type }}
    </li>
  </ul>
  <div v-else>Nothing to display</div>
</template>
