<script setup lang="ts">
import Container from './Container.vue'
import { ref } from 'vue'

const hideSourceOnDrag = ref(true)
const toggle = () => (hideSourceOnDrag.value = !hideSourceOnDrag.value)
</script>

<template>
	<div>
		<Container :hide-source-on-drag="hideSourceOnDrag" />
		<p>
			<label for="hideSourceOnDrag">
				<input
					id="hideSourceOnDrag"
					type="checkbox"
					role="checkbox"
					:checked="hideSourceOnDrag"
					@change="toggle"
				/>
				<small>Hide the source item while dragging</small>
			</label>
		</p>
	</div>
</template>
