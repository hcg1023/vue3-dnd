Because you write logic instead of using off-the-shelf components, you can tailor the behavior to what your application needs.

In this example, instead of moving the card in the drop target's `drop()` handler, we do it in the drag source's `end()` handler. This allows us to check `monitor.didDrop()` and resume the drag operation if the card was dropped outside of its container.

---

+++ @/.vitepress/examples/04-sortable/cancel-on-drop-outside
