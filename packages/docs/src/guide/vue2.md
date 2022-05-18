# 支持Vue2

由于Vue2的一些特性，我们在Vue2中使用还有一点细微的差别。

1. 在Vue2中使用，需要先安装[@vue/composition-api](https://github.com/vuejs/composition-api)
2. 由于Vue2不支持dom ref函数，所以我们必须额外定义一个ref，用于承载dom节点，并将这个ref传递给我们的connect函数。

## 示例
```vue
<template>
    <div
        ref="element"
        role="Box"
        :data-testid="`box-${name}`"
    >
        {{ name }}
    </div>
</template>

<script lang="ts" setup>
import { useDrag } from 'vue3-dnd'
import { ref } from '@vue/composition-api'

interface DropResult {
  name: string
}

const props = defineProps<{ name: string }>()

const [collect, drag, dragPreview] = useDrag(() => ({
    type: 'BOX',
    item: { name: props.name },
}))

const element = ref()
drag(element)
// 可选的，默认与drag一致
// dragPreview(element)
// 如果是useDrop，也是一样的
// drop(element)
</script>
```
