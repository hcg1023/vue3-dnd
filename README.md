[![npm version](https://img.shields.io/npm/v/vue3-dnd.svg?style=flat-square)](https://www.npmjs.com/package/vue3-dnd)
[![npm downloads](https://img.shields.io/npm/dm/vue3-dnd.svg?style=flat-square)](https://www.npmjs.com/package/vue3-dnd)

# Vue3 _DnD_

React Dnd implementation in Vue3

# Using
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
Please refer to the [react-dnd](https://react-dnd.github.io/react-dnd/docs/overview) documentation and [github example](https://github.com/hcg1023/vue3-dnd/tree/main/src/examples), and we will supplement our documentation later.

## Notice
**Because of composition-API limitations, please do not attempt to deconstruct assignment for the collect parameter from hooks such as useDrag and useDrop, otherwise it will lose its responsiveness, Such as:**

```ts
import { toRefs } from 'vue'
import { useDrag, toRefsReactive } from 'vue3-dnd'

const [collect, drag] = useDrag(() => ({
	type: props.type,
	item: {name: props.name},
	collect: monitor => ({
		opacity: monitor.isDragging() ? 0.4 : 1,
	}),
}))

// good
const opacity = computed(() => unref(collect).opacity)
// using toRefsReactive api
const { opacity } = toRefs(toRefsReactive(collect))
// bad
const {opacity} = collect.value
const {opacity} = toRefs(collect.value)
```

# example
App.vue
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
Example.vue
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
