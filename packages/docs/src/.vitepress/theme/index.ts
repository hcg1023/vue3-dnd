import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import 'markdown-it-copy/theme/default.css'
import './override.css'

export default {
	...DefaultTheme,
	Layout,
}
