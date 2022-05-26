<script lang="ts" setup>
import { ref } from 'vue'
import TargetBox from './TargetBox.vue'
import FileList from './FileList.vue'

const droppedFiles = ref<File[]>([])

const handleFileDrop = (item: any) => {
  if (item) {
    droppedFiles.value = item.files
  }
}
</script>

<template>
  <TargetBox :on-drop="handleFileDrop" />
  <FileList :files="droppedFiles" />
</template>
