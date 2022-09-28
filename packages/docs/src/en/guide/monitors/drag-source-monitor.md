# DragSourceMonitor

`DragSourceMonitor` is the object passed to `DragSource` drag source. It provides methods that allow you to get some state information about the drag source. The specific drag source bound to this monitor is referred to below as the monitor's owner.


## method
| method name | type | description |
|-------------------|---------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| `canDrag()` | `() => boolean` | `true` if no drag operation is in progress and the `canDrag()` method of the owner `useDrag` returns `true` or `undefined` `, otherwise return `false`. |
| `isDragging()` | `() => boolean` | If a drag operation is in progress and the owner is being dragged, or the `isDragging()` method of `useDrag` returns `true`, this method will Will return `true`, otherwise return `false`. |
| `getItemType()` | `() => (string \| null)` | Returns the type `type` that identifies the currently dragged item. Returns `null` if no item was dragged. |
| `getItem()` | `() => (object \| null)` | Returns a plain object representing the currently dragged item. Each drag source must be specified by specifying it from its `item` property. Returns `null` if no item was dragged. |
| `getDropResult()` | `() => (object \| null)` | Returns a plain object representing the drop result of the last record. <br>Drop targets can be specified by returning an object from their `drop()` method. <br>When the drop target is a nested target, any parent object that explicitly returns its own result from `drop()` overrides the `drop` result previously set by the child object. <br>**It can only be called inside `end()`**, if called outside `end()` it will return `null`. |
| `didDrop()` | `() => boolean` | Returns `true` if a drop target has handled the drop event, `false` otherwise. `didDrop()` returns `true` even if the target does not return a drop result. <br>It can be used in `end()` to check if a drop target has handled the drag. Returns `false` if called outside `end()`. |
| `getInitialClientOffset()` | `() => { x: number, y: number }` | Returns the initial position `{x, y}` of the mouse pointer relative to the client at the start of the current drag. <br>If no item was dragged, `null` is returned. |
| `getInitialSourceClientOffset()` | `() => { x: number, y: number }` | Returns the initial position of the root DOM node of the drag source relative to the client when the current drag starts `{x, y}` . <br>If no item was dragged, `null` is returned. |
| `getClientOffset()` | `() => { x: number, y: number }` | Returns the offset of the mouse pointer relative to the client of the drag start point `{x, y}`. <br>If no item was dragged, `null` is returned. |
| `getDifferenceFromInitialOffset()` | `() => { x: number, y: number }` | Returns the offset of the mouse pointer in the current drag relative to the mouse pointer position when the drag started `{x, y} `. <br>If no item was dragged, `null` is returned. |
| `getSourceClientOffset()` | `() => { x: number, y: number }` | Returns the offset `{x, y}` of the root DOM node of the current drag source relative to the client. <br>If no item was dragged, `null` is returned. |
Note, if you need to get the **real-time trajectory** (real-time Offset) of the mouse, you should pay attention to the callbacks in DropTargetMonitor, such as hover
