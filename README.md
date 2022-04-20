# Vue3 _DnD_

[website](https://hcg1023.github.io/vue3-dnd/) | 
[gitee](https://haochenguang.gitee.io/vue3-dnd/)

React Dnd implementation in Vue3

If you think this project is helpful to you, I hope you can contribute a [star⭐](https://github.com/hcg1023/vue3-dnd)

[![npm version](https://img.shields.io/npm/v/vue3-dnd.svg?style=flat-square)](https://www.npmjs.com/package/vue3-dnd)
[![GitHub open issues](https://img.shields.io/github/issues/hcg1023/vue3-dnd.svg)](https://github.com/hcg1023/vue3-dnd/issues?q=is%3Aopen+is%3Aissue)
[![npm download](https://img.shields.io/npm/dt/vue3-dnd.svg?maxAge=30)](https://www.npmjs.com/package/vue3-dnd)
[![npm download per month](https://img.shields.io/npm/dm/vue3-dnd.svg?style=flat-square)](https://www.npmjs.com/package/vue3-dnd)
[![MIT License](https://img.shields.io/github/license/hcg1023/vue3-dnd.svg)](https://github.com/hcg1023/vue3-dnd/blob/main/LICENSE)

**[中文](README_ZH.md)** | **[English](README.md)**

## Using
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
// Write your own code
</script>
```

## Docs
[https://hcg1023.github.io/vue3-dnd/](https://hcg1023.github.io/vue3-dnd/)
This document is now in Chinese, if you need English, Please refer to the [react-dnd](https://react-dnd.github.io/react-dnd/docs/overview) documentation and [github example](https://github.com/hcg1023/vue3-dnd/tree/main/src/examples), and we will supplement our documentation later.

## Notice
1. **Because of composition-API limitations, please do not attempt to deconstruct assignment for the collect parameter from hooks such as useDrag and useDrop, otherwise it will lose its responsiveness, Such as:**

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
    // using vueuse toRefs api
    const { opacity } = toRefs(collect)
    // bad
    const { opacity } = collect.value
    ```

2. **The drag drop dragPreview ref is a function, using template please using `v-bind:ref="drag"`, You can also set the value to it using a new function**
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

// You can also set the value to it using a new function
const setDrop = (el: HTMLDivElement | null) => {
	drop.value(el)
    // or
	drop.value(el?.querySelector('section') || null)
}


</script>
```

## example
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
### Q: The data does not change during or after the drag is complete

A: Check if your spec or item is a function, If your item is a static object, you really don't get reactive data changes during drag and drop

```ts
// The following situations may result in don't have reactive
const [collect, connectDrag] = useDrag({
	type: 'box',
	item: { id: props.id },
})
// The correct way to write it
const [collect, connectDrag] = useDrag({
	type: 'box',
	item: () => ({ id: props.id }),
})
const [collect, connectDrag] = useDrag(() => ({
	type: 'box',
	item:  { id: props.id },
}))
```

## ⭐Stargazers
[![Stargazers repo roster for vue3-dnd](https://reporoster.com/stars/hcg1023/vue3-dnd)](https://github.com/hcg1023/vue3-dnd/stargazers)

## Thanks

[React-Dnd](https://github.com/react-dnd/react-dnd)
