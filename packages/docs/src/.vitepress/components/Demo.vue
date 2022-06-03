<script setup lang="ts">
import { computed, unref, ref } from 'vue'
import {
  FolderOutlined,
  FolderOpenOutlined,
  GithubOutlined,
} from '@ant-design/icons-vue'

const props = defineProps<{
  demo: object
  source: string
  path: string
}>()

interface DemoInfo {
  [filename: string]: {
    type: string
    raw: string
    highlight: string
  }
}

const demoInfo = computed<DemoInfo>(() => {
  return JSON.parse(decodeURIComponent(props.source))
})
const entryName = 'index.ts'
const tabKeys = computed(() => {
  const keys = Object.keys(unref(demoInfo))
  const entryIndex = keys.indexOf(entryName)
  if (entryIndex > -1) {
    keys.splice(entryIndex, 1)
    keys.unshift(entryName)
  }
  return keys
})
const activeKey = ref(entryName)
if (!unref(tabKeys).includes(entryName)) {
  activeKey.value = unref(tabKeys)[0]
}

const info = computed(() => unref(demoInfo)[unref(activeKey)])

const showSourceCode = ref(false)
const lazy = ref(false)
const handlerSourceCodeVisible = (visible: boolean) => {
  if (!unref(lazy) && visible) {
    lazy.value = true
  }
  showSourceCode.value = visible
}

const handlerOpenGitHub = () => {
  console.log(props.path)
}
</script>

<template>
  <div class="demo">
    <div class="demo-container">
      <component :is="demo"></component>
    </div>
    <div class="demo-toolbar">
      <a-tooltip title="使用 GitHub 查看">
        <a
          class="demo-toolbar-link"
          :href="decodeURIComponent(path)"
          target="_blank"
        >
          <github-outlined class="icon" @click="handlerOpenGitHub" />
        </a>
      </a-tooltip>
      <a-tooltip :title="showSourceCode ? '收起源代码' : '展开源代码'">
        <folder-outlined
          v-if="!showSourceCode"
          class="icon"
          @click="handlerSourceCodeVisible(true)"
        ></folder-outlined>
        <folder-open-outlined
          v-else
          class="icon"
          @click="handlerSourceCodeVisible(false)"
        ></folder-open-outlined>
      </a-tooltip>
    </div>
    <div class="demo-source-code" v-if="lazy" v-show="showSourceCode">
      <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane v-for="key in tabKeys" :key="key" :tab="key">
          <div
            :class="['demo-source-code-language', `language-${info.type}`]"
            v-html="demoInfo[key].highlight"
          ></div>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<style lang="less">
.demo {
  --dnd-demo-border-color: #dcdfe6;
  --dnd-demo-border: 1px solid var(--dnd-demo-border-color);

  margin-top: 20px;
  border: var(--dnd-demo-border);

  &-container {
    padding: 20px;
    border-bottom: var(--dnd-demo-border);
  }

  &-toolbar {
    display: flex;
    align-items: center;
    justify-content: right;
    padding: 12px;

    .icon {
      margin-right: 12px;
      font-size: 18px;
    }

    &-link {
      color: inherit;
    }
  }

  .ant-tabs-nav {
    margin-bottom: 10px;
    padding: 0 12px;
    border-top: var(--dnd-demo-border);
  }

  div[class*='language-'].demo-source-code-language {
    margin-top: 0;
    margin-bottom: 0;

    & > pre {
      padding: 15px;
    }
  }
}

a {
  color: var(--c-brand);

  &:hover,
  &:focus {
    color: var(--c-brand-light);
  }
}

.ant-tabs-tab-btn:focus,
.ant-tabs-tab-remove:focus,
.ant-tabs-tab-btn:active,
.ant-tabs-tab-remove:active,
.ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
  color: var(--c-brand);
}

.ant-tabs-tab:hover {
  color: var(--c-brand-light);
}

.ant-tabs-ink-bar {
  background: var(--c-brand);
}
</style>
