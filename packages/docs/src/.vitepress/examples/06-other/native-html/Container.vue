<script lang="ts" setup>
import { ref } from 'vue'
import TargetBox from './TargetBox.vue'
import HTMLContent from './HTMLContent.vue'

const droppedHTML = ref('')
const handleHTMLDrop = (item: { html: string }) => {
  if (item) {
    droppedHTML.value = item.html
  }
}
</script>

<template>
  <iframe
    srcdoc="<img src='https://react-dnd.github.io/react-dnd/favicon-32x32.png' />"
  />
  <TargetBox :on-drop="handleHTMLDrop" />
  <HTMLContent :html="droppedHTML" />
</template>
