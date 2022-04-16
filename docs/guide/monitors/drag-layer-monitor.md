# DragLayerMonitor

`DragLayerMonitor` 是传递给`DragLayer`拖动层`collect`收集函数的对象。它提供了一些方法，让你可以获取到全局拖放状态信息。


## 方法
| 方法名                                | 类型                                            | 说明                                                                                                                                        |
|------------------------------------|-----------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `canDrop()`                        | `() => boolean`                               | 如果有正在进行的拖动操作，并且所有者`useDrop`的`canDrop()`方法返回`true`或者`undefined`，则返回`true`，否则返回`false`。                                                     |
| `isOver()`                         | `(options?: { shallow: boolean }) => boolean` | 如果有正在进行的拖动操作，并且指针当前悬停在所有者的上方，则返回true。你可以选择通过`{shallow: true}`来严格检查是否只有所有者被悬浮，而不是嵌套的目标。                                                    |
| `getItemType()`                    | `() => (string \| null)`                                                                                                                                    | 返回标识当前拖动项的类型`type`。如果没有项目被拖动，则返回`null`。 |
| `getItem()`                        | `() => (object \| null)`                                                                                                                                    | 返回表示当前拖动项的普通对象。每个拖动源必须通过从其`item`属性来指定它。如果没有项目被拖动，则返回`null`。 |
| `getDropResult()`                  | `() => (object \| null)`                                                                                                                                    | 返回一个表示最后记录的放置结果的普通对象。<br>放置目标可以通过从它们的`drop()`方法返回一个对象来指定它。<br>当放置目标为嵌套目标时，任何显式地从`drop()`返回自己的结果的父对象都会覆盖之前由子对象设置的`drop`结果。<br>**它只能在`drop()`内部调用**，如果在`drop()`外部调用，则返回`null`。 |
| `didDrop()`                        | `() => boolean`                               | 如果某个拖放目标已经处理了拖放事件则返回`true`，否则返回`false`。即使目标没有返回放置结果，`didDrop()`也会返回`true`。<br>可以在`drop()`中使用它来检查是否有放置目标已经处理了这次拖拽。如果在`drop()`外部调用，则返回`false`。 |
| `getInitialClientOffset()`         | `() => { x: number, y: number }`              | 返回当前拖动开始时鼠标指针相对于客户端的初始位置`{x, y}`。<br>如果没有项目被拖动，则返回null。                                                                                   |
| `getInitialSourceClientOffset()`   | `() => { x: number, y: number }`              | 返回当前拖动开始时，拖动源的根DOM节点相对于客户端的初始位置`{x, y}`。<br>如果没有项目被拖动，则返回null。                                                                            |
| `getClientOffset()`                | `() => { x: number, y: number }`              | 返回当前拖动中鼠标指针相对于客户端的偏移量`{x, y}`。<br>如果没有项目被拖动，则返回null。                                                                                      |
| `getDifferenceFromInitialOffset()` | `() => { x: number, y: number }`              | 返回当前拖动中鼠标指针相对于开始拖动时的鼠标指针位置的偏移量`{x, y}`。<br>如果没有项目被拖动，则返回null。                                                                             |
| `getSourceClientOffset()`          | `() => { x: number, y: number }`              | 返回当前拖动源的根DOM节点相对于客户端的偏移量`{x, y}`。<br>如果没有项目被拖动，则返回null。                                                                                   |
