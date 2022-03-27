<script setup lang="ts">
import { Destination } from './Destination'
import { useDirections } from './DirectionsView.behaviour'
import TransportationModeView from './TransportationModeView.vue'

const properties = defineProps<{
  destination: Destination
}>()
const { transportationModes } = useDirections(properties)
</script>
<template>
  <ul>
    <li
      v-for="transportationMode in transportationModes"
      :key="transportationMode.type"
    >
      <TransportationModeView
        :transportation-mode="transportationMode"
        :destination="destination"
        :collapsed="true"
      />
    </li>
  </ul>
</template>

<style scoped>
ul {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
  padding: 0 0 24px 0;
  margin: 0;
}
</style>
