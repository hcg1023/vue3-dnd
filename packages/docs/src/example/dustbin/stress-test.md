此示例与上一个示例类似，但拖动源和放置目标的 props 每秒都在变化。它演示了 React DnD 跟踪不断变化的 props，如果组件接收到新的 props，React DnD 会重新计算拖放状态。它还展示了自定义isDragging实现如何使拖动源显示为已拖动，即使启动拖动的组件已收到新的道具。

---

+++ @/.vitepress/examples/01-dustbin/stress-test
