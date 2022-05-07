您可以将拖动源相互嵌套。如果嵌套拖动源从canDrag中返回false，将询问其父级，直到找到并激活可拖动源。只有激活的拖动源才会调用有它的item() 和 end()。

----
<br>
<br>
<br>

<script setup>
import DragSources from '../../.vitepress/examples/03-nesting/drag-sources'
</script>

<DragSources></DragSources>
