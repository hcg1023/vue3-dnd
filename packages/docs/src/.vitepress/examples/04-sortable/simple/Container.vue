<script lang="ts" setup>
import { ref } from 'vue'
import Card from './Card.vue'

interface Item {
	id: number
	text: string
}

const cards = ref<Item[]>([
	{
		id: 1,
		text: 'Write a cool JS library',
	},
	{
		id: 2,
		text: 'Make it generic enough',
	},
	{
		id: 3,
		text: 'Write README',
	},
	{
		id: 4,
		text: 'Create some examples',
	},
	{
		id: 5,
		text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
	},
	{
		id: 6,
		text: '???',
	},
	{
		id: 7,
		text: 'PROFIT',
	},
])

const moveCard = (dragIndex: number, hoverIndex: number) => {
	const item = cards.value[dragIndex]
	cards.value.splice(dragIndex, 1)
	cards.value.splice(hoverIndex, 0, item)
}
</script>

<template>
	<div style="width: 400px">
		<Card
			v-for="(card, index) in cards"
			:id="card.id"
			:key="card.id"
			:text="card.text"
			:index="index"
			:move-card="moveCard"
		/>
	</div>
</template>
