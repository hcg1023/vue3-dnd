Drop targets can also be nested within each other. Unlike a drop source, several drop targets may react to the same item being dropped.



Via Vue DnD doesn't provide a way to prevent propagation. Conversely, drag and drop targets can compare `monitor.isOver()` and `monitor.isOver({shallow: false})` to see if only they or their nested targets are hovered. They can also check `monitor.didDrop()` and `monitor.getDropResult()` to see if the nested target has handled the drop, or even return a different drop result.

---

+++ @/.vitepress/examples/03-nesting/drop-targets
