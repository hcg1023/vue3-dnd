<script lang="ts" setup>
import { Colors } from './Colors'
import SourceBox from './SourceBox.vue'
import StatefulTargetBox from './StatefulTargetBox.vue'
</script>

<template>
  <div :style="{ overflow: 'hidden', clear: 'both', margin: '-.5rem' }">
    <div :style="{ float: 'left' }">
      <SourceBox :color="Colors.BLUE">
        <SourceBox :color="Colors.YELLOW">
          <SourceBox :color="Colors.YELLOW" />
          <SourceBox :color="Colors.BLUE" />
        </SourceBox>
        <SourceBox :color="Colors.BLUE">
          <SourceBox :color="Colors.YELLOW" />
        </SourceBox>
      </SourceBox>
    </div>

    <div :style="{ float: 'left', marginLeft: '5rem', marginTop: '.5rem' }">
      <StatefulTargetBox />
    </div>
  </div>
</template>
