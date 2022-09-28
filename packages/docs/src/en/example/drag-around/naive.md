This example naively relies on the browser drag and drop implementation without much custom logic.

When the box is dragged, we remove its original DOM node by returning null, and render() lets the browser draw a preview of the drag. When the box is released, we draw it at the new coordinates. If you try to drag the box outside the container, the browser will animate it back.

While this method works for trivial cases, it will flicker when discarded. This happens because the browser removes the drag preview before we have a chance to make the dragged item visible. This might not be a problem if you darken the original item instead of hiding it, but otherwise it will be clearly visible.

If we want to add custom logic, like snap to grid or bounds checking, we can only do it on placement. We have no control over what happens to the drag preview once the browser has drawn it. If you want to trade more control for more work, check out the [custom rendering example](./custom-drag-layer).

---

+++ @/.vitepress/examples/02-drag-around/naive
