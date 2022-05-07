<script lang="ts" setup>
import { useDrag } from 'vue3-dnd'
import { ItemTypes } from './ItemTypes'

const [, drag] = useDrag(() => ({ type: ItemTypes.BOX }))
</script>

<template>
	<div :ref="drag" class="box">Drag me</div>
</template>

<style lang="less" scoped>
.box {
	display: inline-block;
	padding: 0.5rem 1rem;
	background-color: white;
	border: 1px dashed gray;
	cursor: move;
}
</style>
