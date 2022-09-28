This example is similar to the previous one, but the drag source and drop target props change every second. It demonstrates that React DnD keeps track of changing props, and if a component receives new props, React DnD recalculates the drag and drop state. It also shows how a custom isDragging implementation can make the drag source appear dragged even if the component that initiated the drag has received new props.

---

+++ @/.vitepress/examples/01-dustbin/stress-test
