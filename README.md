[![npm version](https://img.shields.io/npm/v/vue3-dnd.svg?style=flat-square)](https://www.npmjs.com/package/vue3-dnd)
[![npm downloads](https://img.shields.io/npm/dm/vue3-dnd.svg?style=flat-square)](https://www.npmjs.com/package/vue3-dnd)
[![Build Status](https://travis-ci.org/vue3-dnd/vue3-dnd.svg?branch=main)](https://travis-ci.org/vue3-dnd/vue3-dnd)

# Vue3 _DnD_

React Dnd implementation in Vue3

**Because of composition-API limitations, please do not attempt to deconstruct assignment for the collect parameter from hooks such as useDrag and useDrop, otherwise it will lose its responsiveness, Such as:**

```vue
const [collect, drag] = useDrag(() => ({
	type: props.type,
	item: { name: props.name },
	collect: monitor => ({
		opacity: monitor.isDragging() ? 0.4 : 1,
	}),
}))
// good
const opacity = computed(() => unref(collect).opacity)
// bad
const { opacity } = collect.value
const { opactiy } = toRefs(collect.value)
```
