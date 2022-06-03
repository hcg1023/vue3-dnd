放置目标也可以相互嵌套。与拖放源不同，几个拖放目标可能会对被拖放的同一项做出反应。



通过Vue DnD并不能提供阻止传播的方法。相反，拖放目标可以比较`monitor.isOver()`和`monitor.isOver({shallow: false})`来了解是否只有它们或它们嵌套的目标被悬浮。他们还可以检查`monitor.didDrop()`和`monitor.getDropResult()`来了解嵌套的目标是否已经处理了放置，甚至返回一个不同的放置结果。

---

+++ @/.vitepress/examples/03-nesting/drop-targets
