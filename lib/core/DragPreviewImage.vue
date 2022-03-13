<script lang="ts">
import { defineComponent, PropType, watchEffect } from 'vue'
import { ConnectDragPreview } from '../types'

export default defineComponent({
	props: {
		connect: {
			type: Function as PropType<ConnectDragPreview<unknown>>,
			required: true,
		},
		src: {
			type: String as PropType<string>,
			required: true,
		},
	},
	setup(props) {
		watchEffect(() => {
			if (typeof Image === 'undefined') return

			let connected = false
			const img = new Image()
			img.src = props.src
			img.onload = () => {
				props.connect(img)
				connected = true
			}
			return () => {
				if (connected) {
					props.connect(null)
				}
			}
		})
		return () => null
	},
})
</script>
