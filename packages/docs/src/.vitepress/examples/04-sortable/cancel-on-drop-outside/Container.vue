<script lang="ts" setup>
import { useDrop } from 'vue3-dnd'
import Card from './Card.vue'
import { ItemTypes } from './ItemTypes'
import { ref } from 'vue'

const ITEMS = [
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
		text: 'Spam in Twitter and IRC to promote it',
	},
	{
		id: 6,
		text: '???',
	},
	{
		id: 7,
		text: 'PROFIT',
	},
]

const cards = ref(ITEMS)

const findCard = (id: string) => {
	const card = cards.value.filter(c => `${c.id}` === id)[0] as {
		id: number
		text: string
	}
	return {
		card,
		index: cards.value.indexOf(card),
	}
}

const moveCard = (id: string, atIndex: number) => {
	const { card, index } = findCard(id)
	cards.value.splice(index, 1)
	cards.value.splice(atIndex, 0, card)
}

const [, drop] = useDrop(() => ({ accept: ItemTypes.CARD }))
</script>

<template>
	<div :ref="drop" style="width: 400px">
		<Card
			v-for="card in cards"
			:id="`${card.id}`"
			:key="card.id"
			:text="card.text"
			:move-card="moveCard"
			:find-card="findCard"
		/>
	</div>
</template>
