# DragPreviewImage

Component that renders an HTML Image element as a drag preview.

## usage
````vue
<script lang="ts" setup>
import { DragPreviewImage, useDrag } from 'vue3-dnd'
const [collect, drag, dragPreview] = useDrag(() => ({
   type: 'Box',
}))
</script>

<template>
     <DragPreviewImage :connect="dragPreview" src="house_dragged.png" />
     <div :ref="drag">🏠</div>
</template>
````


## Props
| Parameters | Description | Type | Required |
|---------|-----------------|----------|------|
| src | src of the image | string | yes |
| connect | `dragPreview` connector | function | yes |
