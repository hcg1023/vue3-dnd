<script setup lang="ts">
import { computed } from 'vue'
import { DndProvider } from 'vue3-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme

const isMobile = computed(() => {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ]

  if (typeof window === 'undefined') return false

  return toMatch.some(toMatchItem => {
    return navigator.userAgent.match(toMatchItem)
  })
})
</script>

<template>
  <DndProvider :backend="isMobile ? TouchBackend : HTML5Backend">
    <Layout></Layout>
  </DndProvider>
</template>
