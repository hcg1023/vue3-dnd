<script setup lang="ts">
import { DndProvider } from 'vue3-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { routes } from './router/routes'
</script>

<template>
	<div id="app">
		<ul id="sidebar">
			<li v-for="item in routes" :key="item.name">
				<router-link :to="item.path">{{ item.name }}</router-link>
			</li>
		</ul>
		<div>
			<DndProvider :backend="HTML5Backend">
				<router-view></router-view>
			</DndProvider>
		</div>
	</div>
</template>
<style lang="less" scoped>
#app {
	display: flex;
}
#sidebar {
	width: 200px;
	li {
		margin: 20px 0;
	}
}
</style>
