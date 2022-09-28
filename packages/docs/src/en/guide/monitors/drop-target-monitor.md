# DropTargetMonitor

`DropTargetMonitor` is the object passed to `DropTarget` drop target. It provides methods that allow you to get some status information about the drop target. The specific drop target bound to this monitor is referred to below as the monitor's owner.


## method
| method name | type | description |
|------------------------------------|-----------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| `canDrop()` | `() => boolean` | `true` if there is a drag operation in progress and the `canDrop()` method of the owner `useDrop` returns `true` or `undefined` `, otherwise return `false`. |
| `isOver()` | `(options?: { shallow: boolean }) => boolean` | Returns true if there is a drag operation in progress and the pointer is currently hovering over the owner. You can optionally pass `{shallow: true}` to strictly check that only the owner is suspended, not nested targets. |
| `getItemType()` | `() => (string \| null)` | Returns the type `type` that identifies the currently dragged item. Returns `null` if no item was dragged. |
| `getItem()` | `() => (object \| null)` | Returns a plain object representing the currently dragged item. Each drag source must be specified by specifying it from its `item` property. Returns `null` if no item was dragged. |
| `getDropResult()` | `() => (object \| null)` | Returns a plain object representing the drop result of the last record. <br>Drop targets can be specified by returning an object from their `drop()` method. <br>When the drop target is a nested target, any parent object that explicitly returns its own result from `drop()` overrides the `drop` result previously set by the child object. <br>**It can only be called inside `drop()`**, if called outside `drop()` it returns `null`. |
| `didDrop()` | `() => boolean` | Returns `true` if a drop target has handled the drop event, `false` otherwise. `didDrop()` returns `true` even if the target does not return a drop result. <br>It can be used in `drop()` to check if a drop target has already handled the drag. Returns `false` if called outside `drop()`. |
| `getInitialClientOffset()` | `() => { x: number, y: number }` | Returns the initial position `{x, y}` of the mouse pointer relative to the client at the start of the current drag. <br>Returns null if no item was dragged. |
| `getInitialSourceClientOffset()` | `() => { x: number, y: number }` | Returns the initial position of the root DOM node of the drag source relative to the client when the current drag starts `{x, y}` . <br>Returns null if no item was dragged. |
| `getClientOffset()` | `() => { x: number, y: number }` | Returns the offset of the mouse pointer relative to the client in the current drag `{x, y}`. <br>Returns null if no item was dragged. |
| `getDifferenceFromInitialOffset()` | `() => { x: number, y: number }` | Returns the offset of the mouse pointer in the current drag relative to the mouse pointer position when the drag started `{x, y} `. <br>Returns null if no item was dragged. |
| `getSourceClientOffset()` | `() => { x: number, y: number }` | Returns the offset `{x, y}` of the root DOM node of the current drag source relative to the client. <br>Returns null if no item was dragged. |
