The browser API cannot change the drag preview or its behavior after the drag has started. Libraries like jQuery UI implement drag and drop from scratch to solve this problem, but react-dnd currently only supports browser drag and drop "backends", so we have to live with its limitations. However, if we provide the browser with an empty image as a preview of the drag, we can customize the behavior a lot. This library provides a DragLayer that you can use to implement a fixed layer on top of your app where you can draw a custom drag preview component. Note that we could draw completely different components on the drag layer if we wanted to. This is not just a screenshot.

Using this approach, we miss the default "return" animation when leaving the container. However, we gain great flexibility in customizing drag feedback and zero flicker.

---

+++ @/.vitepress/examples/02-drag-around/custom-drag-layer
