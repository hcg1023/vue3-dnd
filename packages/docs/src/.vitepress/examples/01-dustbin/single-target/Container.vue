<script lang="ts" setup>
import Dustbin from './Dustbin.vue'
import Box from './Box.vue'
</script>

<template>
  <div>
    <div :style="{ overflow: 'hidden', clear: 'both' }">
      <Dustbin />
    </div>
    <div :style="{ overflow: 'hidden', clear: 'both' }">
      <Box name="Glass" />
      <Box name="Banana" />
      <Box name="Paper" />
    </div>
  </div>
</template>
