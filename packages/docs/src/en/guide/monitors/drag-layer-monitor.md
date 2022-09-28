# DragLayerMonitor

`DragLayerMonitor` is the object passed to the `DragLayer` drag layer `collect` collection function. It provides methods that allow you to get global drag and drop state information.


## method
| method name | type | description |
|------------------------------------|-----------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| `isDragging()` | `() => boolean` | If a drag operation is in progress and the owner is being dragged, or the `isDragging()` method of `useDrag` returns `true`, this method will Will return `true`, otherwise return `false`. |
| `getItemType()` | `() => (string \| null)` | Returns the type `type` that identifies the currently dragged item. Returns `null` if no item was dragged. |
| `getItem()` | `() => (object \| null)` | Returns a plain object representing the currently dragged item. Each drag source must be specified by specifying it from its `item` property. Returns `null` if no item was dragged. |
| `getInitialClientOffset()` | `() => { x: number, y: number }` | Returns the initial position `{x, y}` of the mouse pointer relative to the client at the start of the current drag. <br>Returns null if no item was dragged. |
| `getInitialSourceClientOffset()` | `() => { x: number, y: number }` | Returns the initial position of the root DOM node of the drag source relative to the client when the current drag starts `{x, y}` . <br>Returns null if no item was dragged. |
| `getClientOffset()` | `() => { x: number, y: number }` | Returns the offset of the mouse pointer relative to the client in the current drag `{x, y}`. <br>Returns null if no item was dragged. |
| `getDifferenceFromInitialOffset()` | `() => { x: number, y: number }` | Returns the offset of the mouse pointer in the current drag relative to the mouse pointer position when the drag started `{x, y} `. <br>Returns null if no item was dragged. |
| `getSourceClientOffset()` | `() => { x: number, y: number }` | Returns the offset `{x, y}` of the root DOM node of the current drag source relative to the client. <br>Returns null if no item was dragged. |
