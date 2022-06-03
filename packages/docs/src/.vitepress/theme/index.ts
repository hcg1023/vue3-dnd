import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import Demo from '../components/Demo.vue'
import 'markdown-it-copy/theme/default.css'
import './override.css'

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app }: any) {
    app.component('Demo', Demo)
  },
}
