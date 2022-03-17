<script setup lang="ts">
import Faker from 'faker'
import Card from './Card.vue'
import { onUnmounted, reactive, ref, toRefs } from 'vue'

function buildCardData() {
	const cardsById: { [key: string]: any } = {}
	const cardsByIndex = []

	for (let i = 0; i < 1000; i += 1) {
		const card = { id: i, text: Faker.name.findName() }
		cardsById[card.id] = card
		cardsByIndex[i] = card
	}

	return {
		cardsById,
		cardsByIndex,
	}
}

const state = reactive(buildCardData())
const { cardsById, cardsByIndex } = toRefs(state)
const requestedFrame = ref()

onUnmounted(() => {
	cancelAnimationFrame(requestedFrame.value)
})

const pendingUpdateFn = ref()
const scheduleUpdate = (updateFn: any) => {
	pendingUpdateFn.value = updateFn

	if (!requestedFrame.value) {
		requestedFrame.value = requestAnimationFrame(drawFrame)
	}
}

const drawFrame = (): void => {
	pendingUpdateFn.value?.()

	pendingUpdateFn.value = undefined
	requestedFrame.value = undefined
}

const moveCard = (id: string, afterId: string): void => {
	const card = cardsById.value[id]
	const afterCard = cardsById.value[afterId]

	const cardIndex = cardsByIndex.value.indexOf(card)
	const afterIndex = cardsByIndex.value.indexOf(afterCard)

	scheduleUpdate(() => {
		{
			cardsByIndex.value.splice(cardIndex, 1)
			cardsByIndex.value.splice(afterIndex, 0, card)
		}
	})
}
</script>

<template>
	<div style="width: 400px">
		<Card
			v-for="card in cardsByIndex"
			:id="card.id"
			:key="card.id"
			:text="card.text"
			:move-card="moveCard"
		/>
	</div>
</template>
