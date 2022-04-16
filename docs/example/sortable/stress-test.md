Vue DnD 可以同时处理多少个项目？此列表中有一千个项目。通过一些优化，例如更新requestAnimationFrame回调中的状态，它可以处理几千个项目而不会滞后。不过遇到这种情况，你最好使用虚拟列表。

幸运的是，Vue DnD 旨在与任何虚拟 Vue 数据列表组件一起工作，因为它不会在 DOM 中保留任何状态。

----
<br>
<br>
<br>

<script setup>
import StressTest from '../../.vitepress/examples/04-sortable/stress-test'
</script>

<StressTest></StressTest>
