# Composition API

我们提供了三个主要的钩子来将你的组件连接到Vue3 DnD。并且提供了第四个钩子来让你在开发或测试中连接到Vue3 DnD。

- `useDrag`
- `useDrop`
- `useDragLayer`
- `useDragDropManager`（开发/测试挂钩）


## 基本示例
使用composition api制作一个简单的可以拖放的盒子。

```vue
<script setup lang="ts">
import { useDrag } from 'vue3-dnd'
import { toRefsValue } from "vue-ref2reactive";

const [collect, drag, dragPreview] = useDrag(() => ({
	// “type”是必需的。它由放置目标的“accept”使用。
	type: 'BOX',
	// collect 函数传入一个“监视器”实例，用于从 DnD 中获取需要的状态信息。
	collect: (monitor) => ({
		isDragging: monitor.isDragging()
	})
}))
// collect是一个Ref对象，默认取值需要从collect.value中获取,
// 可以使用toRefsValue将Ref对象转换为Reactive对象
const { isDragging } = toRefsValue(collect)
</script>

<template>
	<!-- 这是可选的。默认情况下，dragPreview 将附加到 dragSource -->
	<div :ref="dragPreview" :style="{ opacity: isDragging ? 0.5 : 1 }">
		<div role="Handle" :ref="drag"/>
	</div>
</template>
```

接下来，我们需要一个放置目标。
```vue
<script setup lang="ts">
import { useDrop } from 'vue3-dnd'
import { toRefsValue } from 'vue-ref2reactive'

const [collect, drop] = useDrop(() => ({
    // 允许放置的type(string|symbol)，或者types
	accept: 'BOX',
    // 传递个collect的数据
	collect: monitor => ({
		isOver: monitor.isOver(),
		canDrop: monitor.canDrop(),
	}),
}))
const { canDrop, isOver } = toRefsValue(collect)
</script>

<template>
	<div :ref="drop" :style="{ backgroundColor: isOver ? 'red' : 'white' }">
		{{ canDrop ? 'Release to drop' : 'Drag a box here' }}
	</div>
</template>
```
