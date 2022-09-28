You can nest drag sources within each other. If a nested drag source returns false from canDrag, its parent will be asked until the draggable source is found and activated. Only the active drag source will call item() and end() with it.

---

+++ @/.vitepress/examples/03-nesting/drag-sources
