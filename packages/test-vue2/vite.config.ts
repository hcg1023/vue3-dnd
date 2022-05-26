import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import vue2ScriptSetup from 'unplugin-vue2-script-setup/vite'

export default defineConfig({
  plugins: [createVuePlugin(), vue2ScriptSetup()],
})
