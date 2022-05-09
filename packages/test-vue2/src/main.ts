// Import the 2.x vue alias from the root directory, make sure you use the same package as vue3-dnd
import Vue from 'vue2'
// Import the @vue/composition-api from the root directory, make sure you use the same package as vue3-dnd
import VueCompositionAPI from '@vue/composition-api'
import App from './App.vue'

Vue.use(VueCompositionAPI)

new Vue(App).$mount('#app')
