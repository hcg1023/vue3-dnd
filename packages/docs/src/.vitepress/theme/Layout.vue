<script setup lang="ts">
import { DndProvider } from 'vue3-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'
import DefaultTheme from 'vitepress/theme'
import {useIsMobile} from "../composables/useIsMobile";
const { Layout } = DefaultTheme

const isMobile = useIsMobile()
</script>

<template>
  <DndProvider :backend="isMobile ? TouchBackend : HTML5Backend">
    <Layout></Layout>
  </DndProvider>
</template>
