# DragSourceMonitor

`DragSourceMonitor` 是传递给`DragSource`拖动源的对象。它提供了一些方法，让你可以获取到有关拖动源的一些状态信息。绑定到该监视器的特定拖动源在下面称为监视器的所有者。


## 方法
| 方法名               | 类型                               | 说明                                                                                                                                       |
|-------------------|----------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| `canDrag()`       | `() => boolean`                  | 如果没有正在进行的拖动操作，并且所有者`useDrag`的`canDrag()`方法返回`true`或者`undefined`，则返回`true`，否则返回`false`。                                                   |
| `isDragging()`    | `() => boolean`                  | 如果正在进行的拖动操作，并且所有者正在被拖动，或者`useDrag`的`isDragging()`方法返回`true`，该方法就会返回`true`，否则返回`false`。                                                   |
| `getItemType()`   | `() => (string \| null)`                                                                                                                                   | 返回标识当前拖动项的类型`type`。如果没有项目被拖动，则返回`null`。 |
| `getItem()`       | `() => (object \| null)`                                                                                                                                   | 返回表示当前拖动项的普通对象。每个拖动源必须通过从其`item`属性来指定它。如果没有项目被拖动，则返回`null`。 |
| `getDropResult()` | `() => (object \| null)`                                                                                                                                   | 返回一个表示最后记录的放置结果的普通对象。<br>放置目标可以通过从它们的`drop()`方法返回一个对象来指定它。<br>当放置目标为嵌套目标时，任何显式地从`drop()`返回自己的结果的父对象都会覆盖之前由子对象设置的`drop`结果。<br>**它只能在`end()`内部调用**，如果在`end()`外部调用，则返回`null`。 |
| `didDrop()` | `() => boolean`                  | 如果某个拖放目标已经处理了拖放事件则返回`true`，否则返回`false`。即使目标没有返回放置结果，`didDrop()`也会返回`true`。<br>可以在`end()`中使用它来检查是否有放置目标已经处理了这次拖拽。如果在`end()`外部调用，则返回`false`。 |
| `getInitialClientOffset()` | `() => { x: number, y: number }` | 返回当前拖动开始时鼠标指针相对于客户端的初始位置`{x, y}`。<br>如果没有项目被拖动，则返回`null`。                                                                                  |
| `getInitialSourceClientOffset()` | `() => { x: number, y: number }` | 返回当前拖动开始时，拖动源的根DOM节点相对于客户端的初始位置`{x, y}`。<br>如果没有项目被拖动，则返回`null`。                                                                           |
| `getClientOffset()` | `() => { x: number, y: number }` | 返回拖动起始点的鼠标指针相对于客户端的偏移量`{x, y}`。<br>如果没有项目被拖动，则返回`null`。                                                                                     |
| `getDifferenceFromInitialOffset()` | `() => { x: number, y: number }` | 返回当前拖动中鼠标指针相对于开始拖动时的鼠标指针位置的偏移量`{x, y}`。<br>如果没有项目被拖动，则返回`null`。                                                                            |
| `getSourceClientOffset()` | `() => { x: number, y: number }` | 返回当前拖动源的根DOM节点相对于客户端的偏移量`{x, y}`。<br>如果没有项目被拖动，则返回`null`。                                                                                   |

注意 ，如果需要获取鼠标的 **实时轨迹** （实时的Offset），应该关注一下 DropTargetMonitor 而不是 DragSourceMonitor， 比如，你可以在 useDrop 的回调 hover: (item, monitor) => {...} 的参数中获取 DropTargetMonitor ：

```
let dropPointNow = ref({x:0,y:0})
const [collect, drop] = useDrop(() => ({
  accept: ItemTypes.BOX,
  drop: () => ({ name: 'Dustbin' }),
  hover: (item, monitor) => {
    const offset = monitor. getClientOffset();
    if(offset !== null){
      dropPointNow.value.x = offset.x;
      dropPointNow.value.y = offset.y;
    }
    console.log(' useDrop hover >>> ',JSON.stringify(dropPointNow.value));
  },
}))
```
