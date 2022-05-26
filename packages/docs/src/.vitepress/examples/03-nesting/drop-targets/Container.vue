<script lang="ts" setup>
import Dustbin from './Dustbin.vue'
import Box from './Box.vue'
</script>

<template>
  <div>
    <div :style="{ overflow: 'hidden', clear: 'both', margin: '-1rem' }">
      <Dustbin greedy>
        <Dustbin greedy>
          <Dustbin greedy />
        </Dustbin>
      </Dustbin>
      <Dustbin>
        <Dustbin>
          <Dustbin />
        </Dustbin>
      </Dustbin>
    </div>

    <div :style="{ overflow: 'hidden', clear: 'both', marginTop: '1.5rem' }">
      <Box />
    </div>
  </div>
</template>
