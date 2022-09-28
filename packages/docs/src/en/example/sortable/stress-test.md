How many projects can Vue DnD handle at the same time? There are a thousand items in this list. With some optimizations, like updating the state in the requestAnimationFrame callback, it can handle a few thousand items without lag. But in this case, you'd better use a dummy list.

Fortunately, Vue DnD is designed to work with any dummy Vue data list component, as it doesn't keep any state in the DOM.

---

+++ @/.vitepress/examples/04-sortable/stress-test
