<template>
  <DndProvider :backend="HTML5Backend">
    <SingleTarget></SingleTarget>
  </DndProvider>
</template>

<script lang="ts" setup>
import SingleTarget from './components/single-target'
import { DndProvider } from 'vue3-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
</script>
