因为您编写逻辑而不是使用现成的组件，所以您可以将行为调整为您的应用程序需要的行为。

在这个例子中，我们不是在放置目标的`drop()`处理程序中移动卡片，而是在拖动源的`end()`处理程序中进行。这让我们可以检查`monitor.didDrop()`并恢复卡片是否掉落到其容器之外的拖动操作。

---

+++ @/.vitepress/examples/04-sortable/cancel-on-drop-outside
