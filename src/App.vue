<script setup lang="ts">
import { DndProvider } from 'vue3-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { menus } from './router/routes'
</script>

<template>
	<div id="app">
		<div id="sidebar">
			<div v-for="item in menus" :key="item.name">
				<div>{{ item.name }}</div>
				<ul>
					<li v-for="route in item.children" :key="route.name">
						<router-link :to="route.path">{{ route.name }}</router-link>
					</li>
				</ul>
			</div>
		</div>
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
