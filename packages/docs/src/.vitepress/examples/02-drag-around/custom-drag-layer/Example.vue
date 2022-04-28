<script setup lang="ts">
import Container from './Container.vue'
import CustomDragLayer from './CustomDragLayer.vue'
import { ref } from 'vue'

const snapToGridAfterDrop = ref(false)
const snapToGridWhileDragging = ref(false)

const handleSnapToGridAfterDropChange = () => {
	snapToGridAfterDrop.value = !snapToGridAfterDrop.value
}

const handleSnapToGridWhileDraggingChange = () => {
	snapToGridWhileDragging.value = !snapToGridWhileDragging.value
}
</script>

<template>
	<div>
		<Container :snap-to-grid="snapToGridAfterDrop" />
		<CustomDragLayer :snap-to-grid="snapToGridWhileDragging" />
		<CustomDragLayer :snap-to-grid="snapToGridWhileDragging" />
		<p>
			<label for="snapToGridWhileDragging">
				<input
					id="snapToGridWhileDragging"
					type="checkbox"
					:checked="snapToGridWhileDragging"
					@change="handleSnapToGridWhileDraggingChange"
				/>
				<small>Snap to grid while dragging</small>
			</label>
			<br />
			<label for="snapToGridAfterDrop">
				<input
					id="snapToGridAfterDrop"
					type="checkbox"
					:checked="snapToGridAfterDrop"
					@change="handleSnapToGridAfterDropChange"
				/>
				<small>Snap to grid after drop</small>
			</label>
		</p>
	</div>
</template>
