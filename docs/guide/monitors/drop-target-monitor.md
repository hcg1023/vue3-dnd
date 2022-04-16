# DropTargetMonitor

`DropTargetMonitor` 是传递给`DropTarget`放置目标的对象。它提供了一些方法，让你可以获取到有关放置目标的一些状态信息。绑定到该监视器的特定放置目标在下面称为监视器的所有者。


## 方法
| 方法名                                | 类型                                            | 说明                                                                                                                                        |
|------------------------------------|-----------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| `isDragging()`    | `() => boolean`                  | 如果正在进行的拖动操作，该方法就会返回`true`，否则返回`false`。                                                   |
| `getItemType()`                    | `() => (string \| null)`                                                                                                                                    | 返回标识当前拖动项的类型`type`。如果没有项目被拖动，则返回`null`。 |
| `getItem()`                        | `() => (object \| null)`                                                                                                                                    | 返回表示当前拖动项的普通对象。每个拖动源必须通过从其`item`属性来指定它。如果没有项目被拖动，则返回`null`。 |
| `getInitialClientOffset()`         | `() => { x: number, y: number }`              | 返回当前拖动开始时鼠标指针相对于客户端的初始位置`{x, y}`。<br>如果没有项目被拖动，则返回null。                                                                                   |
| `getInitialSourceClientOffset()`   | `() => { x: number, y: number }`              | 返回当前拖动开始时，拖动源的根DOM节点相对于客户端的初始位置`{x, y}`。<br>如果没有项目被拖动，则返回null。                                                                            |
| `getClientOffset()`                | `() => { x: number, y: number }`              | 返回当前拖动中鼠标指针相对于客户端的偏移量`{x, y}`。<br>如果没有项目被拖动，则返回null。                                                                                      |
| `getDifferenceFromInitialOffset()` | `() => { x: number, y: number }`              | 返回当前拖动中鼠标指针相对于开始拖动时的鼠标指针位置的偏移量`{x, y}`。<br>如果没有项目被拖动，则返回null。                                                                             |
| `getSourceClientOffset()`          | `() => { x: number, y: number }`              | 返回当前拖动源的根DOM节点相对于客户端的偏移量`{x, y}`。<br>如果没有项目被拖动，则返回null。                                                                                   |
