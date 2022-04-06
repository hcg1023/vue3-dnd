import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

export default createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
})
