# 常见问题

## 用法
### 如何安装 Vue3 DnD？
```bash
npm install vue3-dnd react-dnd-html5-backend
```

### 如何使组件只能通过指定的小手柄拖拽？
将容器节点指定为`dragPreview`，但仅将拖动手柄设为`dragSource`。请参阅[自定义拖动手柄示例](/zh/example/customize/handles-and-previews)。


### 如何限制拖拽移动的预览？
默认情况下，您无法约束拖动预览移动，因为拖动预览是由浏览器绘制的。但是，您可以使用[自定义拖动层](/zh/example/drag-around/custom-drag-layer)，您可以在其中自由渲染任何内容，包括任何捕捉或约束。

## 如何使单个元素既可以拖拽又可以放置？
`useDrag`和`useDrop`的连接器可以同时使用。例如：

```vue

<script setup lang="ts">
import { useDrop, useDrag } from 'vue3-dnd'

const [, drag] = useDrag({})
const [, drop] = useDrop({})
</script>

<template>
  <div :ref="node => drag(drop(node))"></div>
</template>
```


## 如何拖放一个本机文件？
如果您使用的是[HTML5 Backend](https://www.npmjs.com/package/react-dnd-html5-backend) ，则可以使用`NativeTypes`，给放置目标指定一个类型：

```vue {2,6}
<script lang="ts" setup>
import { NativeTypes } from 'react-dnd-html5-backend'
import { useDrop } from 'vue3-dnd'

const [collect, drop] = useDrop(() => ({
	accept: [NativeTypes.FILE],
	drop(item: { files: any[] }) {
		console.log(item.files)
	}
}))
</script>

<template>
	<div :ref="drop"></div>
</template>
```


## Could not find the drag and drop manager in the context
请检查你的组件是否使用`DndProvider`包裹。
