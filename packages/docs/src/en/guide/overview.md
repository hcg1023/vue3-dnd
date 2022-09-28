# Overview
In this chapter we will introduce the basic concepts of React DnD

---------------------------------------
React DnD is different from most drag and drop libraries and can be intimidating if you've never used it before. However, it starts to make sense once you understand some of the concepts at the heart of its design. I recommend that you read these concepts before reading the rest of the documentation.

Some of these concepts are similar to Flux and Redux architecture.
This is no coincidence since React DnD uses Redux internally.

## Items and Types
React DnD uses data instead of views as a drag-and-drop implementation. When you drag something on the screen, we don't say a component or DOM node is being dragged. Instead, we say that an **item** of some **type** is being dragged.

What is a project? Items are plain JavaScript objects that describe what is being dragged. For example, in a Kanban application, when you drag a card, an item might look like `{ cardId: 42 }`, in a game of chess, when you pick up a piece, the item might look like `{ fromCell: 'C5', piece: 'queen' }`, describing the dragged data as a plain object can help you keep your components decoupled and unaware of each other.

So what are types? A type is a string (or a symbol) that uniquely identifies a whole class of items in an application. In a Kanban application, you might have a `'card'` type for draggable cards and a `'list'` type for draggable lists of those cards. In chess, you may have only one type of `'piece'`.

Types are useful because as the item gets bigger, you may want more things to be draggable, but you don't necessarily want all existing drop targets to suddenly receive new item placements. Type lets you specify the drop source and drop target.

## Monitors

Drag and drop is stateful in nature. A drag operation is in progress, or not. Either there is a current type and a current item, or it doesn't. This state has to exist somewhere.

For each component that needs to track the drag and drop state, you can define a collection function that pulls the state from the monitor.

Suppose you want to highlight the `Cell` cells that are allowed to be placed while dragging the pawn, the collection function of the component `Cell` might look like this:
```ts{4,5}
const [collect, drop] = useDrop({
  accept: 'Cell',
  collect: monitor => ({
    canDrop: monitor.canDrop(),
    hovered: monitor.isOver(),
  }),
})
````

`canDrop` indicates that the dragged element can be placed on the current element, `hovered` indicates that the dragged element is on the current element


## Connectors
Connectors allow you to connect a DOM element to one of the predefined roles in the backend (drag source `drag`, drag preview `dragPreview`, or drop target `drop`).

The connector function is available in our hooks, let's see how to use it to specify drop targets:

````vue{2,4,8}
<script setup lang="ts">
import { useDrop } from 'vue3-dnd'

const [, drop] = useDrop({})
</script>

<template>
<div :ref="drop"></div>
</template>
````

`drop` is a ref function, it can be called in many ways, we usually use it by using `v-bind:ref="drop"` directly on the DOM node, it will tell DnD that the DOM is a valid drop node, and its hover and drop events are handled by the dnd backend.


## Drag Sources and Drop Targets
We use the drag source `dragSource` to represent the dragged element

We use the drop target `drop` to indicate that the target receives the dragged element


## Backend
Backend abstracts away browser differences and handles native DOM events. All Backend does is translate DOM events into internal Redux actions that React DnD can handle.

Benefiting from the design of React DnD, we can also directly adopt its [HTML5 Backend](https://www.npmjs.com/package/react-dnd-html5-backend) , [Touch Backend](https://www .npmjs.com/package/react-dnd-touch-backend) and [Test Backend](https://www.npmjs.com/package/react-dnd-test-backend), and even some custom backends


## in conclusion
We have described some of the core concepts of React DnD. For a more detailed introduction, please refer to [React DnD Overview](https://react-dnd.github.io/react-dnd/docs/overview)
