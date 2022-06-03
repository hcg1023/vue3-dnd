import { defineConfig } from 'vitepress'
// @ts-ignore
import markdownCopy from 'markdown-it-copy'
import { transformDemo } from './plugins/markdown-it/transform-demo'
import path from 'path'
import { mdTransform } from './plugins/vite/md-transform'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

const BASE_URL = process.env.BASE_URL || '/'

export default defineConfig({
  base: BASE_URL,
  outDir: path.resolve(__dirname, '../../dist'),
  lang: 'zh-CN',
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: path.join(BASE_URL, '/vue3-dnd.svg').replace('\\', '/'),
      },
    ],
  ],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), './src'),
      },
    },
    // @ts-ignore vite的内置类型中没有ssr，所以暂时可以通过这个去配置
    ssr: {
      noExternal: [
        /^react-dnd-/,
        'dnd-core',
        /^prismjs/,
        'ant-design-vue',
        '@ant-design/icons-vue',
      ],
    },
    plugins: [
      Components({
        resolvers: [AntDesignVueResolver()],
      }),
      mdTransform(),
    ],
  },
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Vue3 DnD',
      description: 'Drag and Drop for Vue3.',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Vue3 DnD',
      description: 'Drag and Drop for Vue3.',
    },
  },
  themeConfig: {
    logo: './vue3-dnd.svg',
    algolia: {
      appId: 'MPEA5OIOBN',
      apiKey: '4731e5999d5e86ca8daf77c77a921adc',
      indexName: 'vue3-dnd',
    },
    locales: {
      '/': {
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        label: '简体中文',
        repo: 'https://github.com/hcg1023/vue3-dnd',
        repoLabel: 'GitHub',
        docsDir: 'packages/docs/src',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: '帮助我们改善此页面！',
        lastUpdated: '上次更新',
        nav: [
          { text: '首页', link: '/', activeMatch: '^/$' },
          {
            text: '学习',
            link: '/guide/',
            activeMatch: '^/guide/',
          },
          {
            text: '示例',
            link: '/example/',
            activeMatch: '^/example/',
          },
          {
            text: 'Gitee',
            link: 'https://gitee.com/haochenguang/vue3-dnd',
          },
        ],
        sidebar: {
          '/guide/': [
            {
              text: '入门',
              link: '/guide/',
              children: [
                {
                  text: '概述',
                  link: '/guide/overview',
                },
                // {
                // 	text: '测试',
                // 	link: '/guide/testing',
                // },
                {
                  text: 'Vue2',
                  link: '/guide/vue2',
                },
                {
                  text: '常见问题',
                  link: '/guide/faq',
                },
                {
                  text: '从 v1 到 v2',
                  link: '/guide/v1-to-v2',
                },
                {
                  text: '示例',
                  link: '/example/',
                },
              ],
            },
            {
              text: '组件',
              children: [
                {
                  text: 'DndProvider',
                  link: '/guide/components/dnd-provider',
                },
                {
                  text: 'DragPreviewImage',
                  link: '/guide/components/drag-preview-image',
                },
              ],
            },
            {
              text: 'Composition API',
              link: '/guide/composition/',
              children: [
                {
                  text: 'useDrag',
                  link: '/guide/composition/use-drag',
                },
                {
                  text: 'useDrop',
                  link: '/guide/composition/use-drop',
                },
                {
                  text: 'useDragLayer',
                  link: '/guide/composition/use-drag-layer',
                },
              ],
            },
            {
              text: 'Monitors',
              children: [
                {
                  text: 'DragSourceMonitor',
                  link: '/guide/monitors/drag-source-monitor',
                },
                {
                  text: 'DropTargetMonitor',
                  link: '/guide/monitors/drop-target-monitor',
                },
                {
                  text: 'DragLayerMonitor',
                  link: '/guide/monitors/drag-layer-monitor',
                },
              ],
            },
            {
              text: 'Backends',
              children: [
                {
                  text: 'HTML5',
                  link: '/guide/backend/html5',
                },
                {
                  text: 'Touch',
                  link: '/guide/backend/touch',
                },
                {
                  text: 'Test',
                  link: '/guide/backend/test',
                },
              ],
            },
          ],
          '/example/': [
            {
              text: '示例',
              children: [
                {
                  text: '关于',
                  link: '/example/',
                },
              ],
            },
            {
              text: '垃圾箱',
              children: [
                {
                  text: '单一目标',
                  link: '/example/dustbin/single-target',
                },
                {
                  text: 'iframe内',
                  link: '/example/dustbin/iframe',
                },
                {
                  text: '复制或移动',
                  link: '/example/dustbin/copy-or-move',
                },
                {
                  text: '多个目标',
                  link: '/example/dustbin/multiple-targets',
                },
                {
                  text: '压力测试',
                  link: '/example/dustbin/stress-test',
                },
              ],
            },
            {
              text: '拖动',
              children: [
                {
                  text: '简单的',
                  link: '/example/drag-around/naive',
                },
                {
                  text: '自定义拖动层',
                  link: '/example/drag-around/custom-drag-layer',
                },
              ],
            },
            {
              text: '嵌套',
              children: [
                {
                  text: '嵌套的拖动源',
                  link: '/example/nesting/drag-sources',
                },
                {
                  text: '嵌套的放置目镖',
                  link: '/example/nesting/drop-targets',
                },
              ],
            },
            {
              text: '排序',
              children: [
                {
                  text: '简单的',
                  link: '/example/sortable/simple',
                },
                {
                  text: '外置时取消',
                  link: '/example/sortable/cancel-on-drop-outside',
                },
                {
                  text: '压力测试',
                  link: '/example/sortable/stress-test',
                },
              ],
            },
            {
              text: '定制',
              children: [
                {
                  text: '拖拽位置和预览',
                  link: '/example/customize/handles-and-previews',
                },
                {
                  text: '放置效果',
                  link: '/example/customize/drop-effects',
                },
              ],
            },
            {
              text: '其它',
              children: [
                {
                  text: '文件',
                  link: '/example/other/native-files',
                },
                {
                  text: '原生HTML',
                  link: '/example/other/native-html',
                },
              ],
            },
          ],
        },
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        nav: [
          { text: 'Home', link: '/en/', activeMatch: '^/$' },
          {
            text: 'Getting Started',
            link: '/en/guide/',
            activeMatch: '^/en/guide/',
          },
          {
            text: 'Example',
            link: '/en/example/',
            activeMatch: '^/en/example/',
          },
        ],
        sidebar: 'auto',
      },
    },
  },
  markdown: {
    config(md) {
      md.use(markdownCopy)
      md.use(transformDemo, path.resolve(process.cwd(), './src'))
    },
  },
})
