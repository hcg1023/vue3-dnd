<script setup lang="ts">
import SourceBox from './SourceBox.vue'
import TargetBox from './TargetBox.vue'
</script>
<template>
  <div :style="{ overflow: 'hidden', clear: 'both', marginTop: '1.5rem' }">
    <div :style="{ float: 'left' }">
      <SourceBox show-copy-icon />
      <SourceBox />
    </div>
    <div :style="{ float: 'left' }">
      <TargetBox />
    </div>
  </div>
</template>
