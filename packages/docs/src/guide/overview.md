# 概述
本章我们会介绍React DnD的基本概念

---------------------------------------
React DnD 与大多数拖放库不同，如果您以前从未使用过它，它可能会令人生畏。但是，一旦您了解了其设计核心的一些概念，它就会开始变得有意义。我建议您在阅读其余文档之前阅读这些概念。

其中一些概念类似于Flux和Redux架构。
这不是巧合，因为 React DnD 在内部使用 Redux。

## 项目(Items) 和 类型(Types)
React DnD 使用数据而不是视图作为拖拽实施。当您在屏幕上拖动某些东西时，我们不会说正在拖动组件或 DOM 节点。相反，我们说正在拖动某种**类型**的**项目**。

什么是项目？项目是描述被拖动内容的纯JavaScript 对象。例如，在看板应用程序中，当您拖动卡片时，项目可能看起来像`{ cardId: 42 }`， 在国际象棋游戏中，当您拿起一块棋子时，该物品可能看起来像`{ fromCell: 'C5', piece: 'queen' }`，将拖动的数据描述为一个普通对象可以帮助您保持组件解耦并且彼此不了解。

那么什么是类型呢？类型是一个字符串（或一个符号），用于唯一标识应用程序中的一整类项目。在看板应用程序中，您可能有一个`'card'`表示可拖动卡片的`'list'`类型和一个用于这些卡片的可拖动列表的类型。在国际象棋中，您可能只有一种`'piece'`类型。

类型很有用，因为随着项目的庞大，你可能希望更多的东西可拖动，但你不一定希望所有现有的放置目标突然可以接收新项目的放置。类型让你可以指定拖放源和拖放目标。

## 监视器(Monitors)

拖放本质上是有状态的。拖动操作正在进行中，或者没有。要么有当前类型和当前项目，要么没有。这种状态必须存在于某个地方。

对于每个需要跟踪拖放状态的组件，您可以定义一个收集函数，从监视器中提取状态。

假设你想在拖动棋子的时候突出显示允许放置的`Cell`单元格，组件`Cell`的收集函数可能如下所示：
```ts {4,5}
const [collect, drop] = useDrop({
  accept: 'Cell',
  collect: monitor => ({
    canDrop: monitor.canDrop(),
    hovered: monitor.isOver(),
  }),
})
```

`canDrop`表示拖动元素可以放置到当前元素，`hovered`表示拖动元素正在当前元素上


## 连接器(Connectors)
连接器允许您将DOM元素连接到backend中预定义角色之一（拖动源`drag`、拖动预览`dragPreview`或放置目标`drop`）。

我们的hooks中提供了连接器函数，让我们看看如何使用它来指定放置目标：

```vue {2,4,8}
<script setup lang="ts">
import { useDrop } from 'vue3-dnd'

const [, drop] = useDrop({})
</script>

<template>
	<div :ref="drop"></div>
</template>
```

`drop`是一个ref函数，它的调用方式有很多，我们一般通过直接在DOM节点使用`v-bind:ref="drop"`来使用它，它会告诉DnD，该DOM是一个有效的放置节点，并且它的悬停和放置事件会由dnd backend处理。


## 拖拽源(Drag Sources) 和 拖放目标 (Drop Targets)
我们使用拖拽源`dragSource`来表示拖拽的元素

我们使用拖放目标`drop`来表示目标接收拖拽元素


## Backend
Backend抽象出了浏览器的差异并处理原生 DOM 事件。所有Backend所做的就是将 DOM 事件转换为 React DnD 可以处理的内部 Redux 操作。

受益于React DnD的设计，我们也可以直接采用它的 [HTML5 Backend](https://www.npmjs.com/package/react-dnd-html5-backend) , [Touch Backend](https://www.npmjs.com/package/react-dnd-touch-backend) 和 [Test Backend](https://www.npmjs.com/package/react-dnd-test-backend) ，甚至是一些自定义的Backend 


## 结论
我们描述了React DnD的一部分核心概念，更加详细的介绍可以参考[React DnD概述](https://react-dnd.github.io/react-dnd/docs/overview)
