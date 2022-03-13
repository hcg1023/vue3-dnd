<script lang="ts" setup>
import Dustbin from './Dustbin.vue'
import Box from './Box.vue'
import { ref, unref } from 'vue'

const allowedDropEffect = ref('copy')
const updateAllowedDropEffect = () => {
	switch (unref(allowedDropEffect)) {
		case 'any':
			allowedDropEffect.value = 'copy'
			break
		case 'copy':
			allowedDropEffect.value = 'move'
			break
		case 'move':
			allowedDropEffect.value = 'any'
			break
	}
}
</script>

<template>
	<div>
		<div :style="{ overflow: 'hidden', clear: 'both' }">
			<Dustbin allowed-drop-effect="any" />
			<Dustbin allowed-drop-effect="copy" />
			<Dustbin allowed-drop-effect="move" />
			<Dustbin :allowed-drop-effect="allowedDropEffect" />
			<button @click="updateAllowedDropEffect">
				current {{ allowedDropEffect }}
			</button>
		</div>
		<div :style="{ overflow: 'hidden', clear: 'both' }">
			<Box name="Glass" />
			<Box name="Banana" />
			<Box name="Paper" />
		</div>
	</div>
</template>
