# Vue3 Dn<img src="http://image.haochenguang.cn/pictures/vue3-dnd.svg" width="28">

[官网](https://hcg1023.github.io/vue3-dnd/) | 
[国内镜像](https://haochenguang.gitee.io/vue3-dnd/)

React Dnd 的 Composition-api 实现。

**支持Vue2和Vue3**

如果你觉得这个项目对你有帮助，希望你能贡献一个 [star⭐](https://github.com/hcg1023/vue3-dnd)

[![npm version](https://img.shields.io/npm/v/vue3-dnd.svg?style=flat-square)](https://www.npmjs.com/package/vue3-dnd)
[![GitHub open issues](https://img.shields.io/github/issues/hcg1023/vue3-dnd.svg)](https://github.com/hcg1023/vue3-dnd/issues?q=is%3Aopen+is%3Aissue)
[![GitHub Stars](https://img.shields.io/github/stars/hcg1023/vue3-dnd.svg)](https://github.com/hcg1023/vue3-dnd/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/hcg1023/vue3-dnd)](https://github.com/hcg1023/vue3-dnd/network/members)
[![GitHub PR](https://img.shields.io/github/issues-pr/hcg1023/vue3-dnd)](https://github.com/hcg1023/vue3-dnd/pulls)
[![GitHub contributors](https://img.shields.io/github/contributors/hcg1023/vue3-dnd?color=2b9348)](https://github.com/hcg1023/vue3-dnd/graphs/contributors)
[![npm download](https://img.shields.io/npm/dt/vue3-dnd.svg?maxAge=30)](https://www.npmjs.com/package/vue3-dnd)
[![npm download per month](https://img.shields.io/npm/dm/vue3-dnd.svg?style=flat-square)](https://www.npmjs.com/package/vue3-dnd)
[![MIT License](https://img.shields.io/github/license/hcg1023/vue3-dnd.svg)](https://github.com/hcg1023/vue3-dnd/blob/main/LICENSE)


**[中文](README_ZH.md)** | **[English](README.md)**

## 使用
```
npm install vue3-dnd
yarn add vue3-dnd
pnpm install vue3-dnd
```
```vue
// App.vue
<script>
import { DndProvider } from 'vue3-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Home from './Home.vue'
</script>

<template>
    <DndProvider :backend="HTML5Backend">
        <Home></Home>
    </DndProvider>
</template>
// Home.vue
<script>
import { useDrag, useDrop, useDragLayer } from 'vue3-dnd'
// 开始你的杰作
</script>
```

## 文档
[https://hcg1023.github.io/vue3-dnd/](https://hcg1023.github.io/vue3-dnd/)

## 注意
1. **由于 composition-api 的限制，请不要尝试从 useDrag 和 useDrop 等钩子中解构 collect 参数，这样会失去响应性，例如：**

    ```ts
    import { useDrag } from 'vue3-dnd'
    import { toRefs } from '@vueuse/core'
    
    const [collect, drag] = useDrag(() => ({
        type: props.type,
        item: {name: props.name},
        collect: monitor => ({
            opacity: monitor.isDragging() ? 0.4 : 1,
        }),
    }))
    
    // good
    const opacity = computed(() => unref(collect).opacity)
    // 如果希望解构，可以使用@vueuse/core提供的toRefs
    const { opacity } = toRefs(collect)
    // bad
    const {opacity} = collect.value
    ```

2. **`drag drop dragPreview`等ref是一个函数，在template中请使用`v-bind:ref="drag"`，您也可以在一个新的函数中调用它们**
```vue
<template>
  <div :ref="drag">box</div>
  <div :ref="setDrop">drop div
    <section>
      drop section
    </section>
  </div>
</template>
<script lang="ts" setup>
import { useDrag, useDrop } from 'vue3-dnd'

const [, drag] = useDrag(() => ({
	type: 'Box',
}))
const [, drop] = useDrop(() => ({
  type: 'Box'
}))

// 你还可以使用新函数为其设置值
const setDrop = (el: HTMLDivElement | null) => {
	drop.value(el)
    // or
	drop.value(el?.querySelector('section') || null)
}


</script>
```

## 示例
### App.vue
```vue
<script setup lang="ts">
import { DndProvider } from 'vue3-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Example from './Example.vue'
</script>

<template>
    <DndProvider :backend="HTML5Backend">
        <Example></Example>
    </DndProvider>
</template>

```
#### Example.vue
```vue
<script lang="ts" setup>
import { useDrag, useDrop } from 'vue3-dnd'
import { computed, unref } from 'vue'

const [dropCollect, drop] = useDrop(() => ({
	accept: 'Box',
	drop: () => ({ name: 'Dustbin' }),
	collect: monitor => ({
		isOver: monitor.isOver(),
		canDrop: monitor.canDrop(),
	}),
}))
const canDrop = computed(() => unref(dropCollect).canDrop)
const isOver = computed(() => unref(dropCollect).isOver)
const isActive = computed(() => unref(canDrop) && unref(isOver))
const backgroundColor = computed(() =>
	unref(isActive) ? 'darkgreen' : unref(canDrop) ? 'darkkhaki' : '#222'
)

const [collect, drag] = useDrag(() => ({
	type: 'Box',
	item: () => ({
		name: 'Box',
	}),
	end: (item, monitor) => {
		const dropResult = monitor.getDropResult<{ name: string }>()
		if (item && dropResult) {
			alert(`You dropped ${item.name} into ${dropResult.name}!`)
		}
	},
	collect: monitor => ({
		isDragging: monitor.isDragging(),
		handlerId: monitor.getHandlerId(),
	}),
}))
const isDragging = computed(() => collect.value.isDragging)

const opacity = computed(() => (unref(isDragging) ? 0.4 : 1))
</script>

<template>
    <div>
        <div :style="{ overflow: 'hidden', clear: 'both' }">
            <div
                :ref="drop"
                role="Dustbin"
                class="drop-container"
                :style="{ backgroundColor }"
            >
                {{ isActive ? 'Release to drop' : 'Drag a box here' }}
            </div>
        </div>
        <div :style="{ overflow: 'hidden', clear: 'both' }">
            <div :ref="drag" class="box" role="Box" :style="{ opacity }">Box</div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.drop-container {
    height: 12rem;
    width: 12rem;
    margin-right: 1.5rem;
    margin-bottom: 1.5rem;
    color: white;
    padding: 1rem;
    text-align: center;
    font-size: 1rem;
    line-height: normal;
    float: left;
}
.box {
    border: 1px solid gray;
    background-color: white;
    padding: 0.5rem 1rem;
    margin-right: 1.5rem;
    margin-bottom: 1.5rem;
    cursor: move;
    float: left;

    &.dragging {
        opacity: 0.4;
    }
}
</style>
```

## Q/A
### Q: 在拖动期间或拖动完成之后数据没有更改

A: 检查你的spec 或者 item是否是函数，如果你的item是静态对象，则在拖放过程中你不会得到响应式的数据更改

```ts
// 以下情况可能导致没有反应
const [collect, connectDrag] = useDrag({
	type: 'box',
	item: { id: props.id },
})
// 正确的写法
const [collect, connectDrag] = useDrag({
	type: 'box',
	item: () => ({ id: props.id }),
})
const [collect, connectDrag] = useDrag(() => ({
	type: 'box',
	item:  { id: props.id },
}))
```


## 感谢

[React-Dnd](https://github.com/react-dnd/react-dnd)
