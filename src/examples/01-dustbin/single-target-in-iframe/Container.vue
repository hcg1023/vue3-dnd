<script lang="ts" setup>
import { DndProvider } from 'vue3-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Dustbin from './Dustbin.vue'
import Box from './Box.vue'
import Frame from './Frame.vue'
</script>

<template>
	<Frame :style="{ width: '100%', height: '400px' }">
		<template #default="{ window }">
			<DndProvider :backend="HTML5Backend" :context="window">
				<div>
					<div :style="{ overflow: 'hidden', clear: 'both' }">
						<Dustbin />
					</div>
					<div :style="{ overflow: 'hidden', clear: 'both' }">
						<Box name="Glass" />
						<Box name="Banana" />
						<Box name="Paper" />
					</div>
				</div>
			</DndProvider>
		</template>
	</Frame>
</template>
