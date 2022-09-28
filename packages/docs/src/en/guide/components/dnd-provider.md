# DndProvider
The `DndProvider` component provides Vue3 DnD functionality to your application. It must inject a Backend via the `backend` prop.

Usually we use it in App.vue file.

## usage
### PC side
````vue
<script setup lang="ts">
import { DndProvider } from 'vue3-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
</script>

<template>
  <DndProvider :backend="HTML5Backend">
    <!-- Your Drag-and-Drop Application -->
  </DndProvider>
</template>
````
### Mobile
````vue
<script setup lang="ts">
import { DndProvider } from 'vue3-dnd'
import { TouchBackend } from 'react-dnd-touch-backend'
</script>

<template>
  <DndProvider :backend="TouchBackend">
    <!-- Your Drag-and-Drop Application -->
  </DndProvider>
</template>
````

## Props
| Parameters | Description | Type | Required |
|---------|-----------------------------------|---------|------|
| backend | A React DnD Backend | Backend | is |
| context | The context object used to configure Backend; this depends on the Backend implementation. | object | no |
| options | The options object used to configure Backend; this depends on the Backend implementation. | object | no |
