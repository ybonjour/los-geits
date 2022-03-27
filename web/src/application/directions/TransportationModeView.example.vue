<script setup lang="ts">
import TransportationModeView from './TransportationModeView.vue'
import { TransportationModeType } from './TransportationMode'

const transportationMode = {
  type: TransportationModeType.WALKING,
  durationInSeconds: 500,
}

const destination = {
  identifier: 'bahnhof',
  name: 'Bahnhof',
}
</script>

<template>
  <div class="container">
    <TransportationModeView
      :transportation-mode="transportationMode"
      :destination="destination"
      :collapsed="false"
    />
  </div>
</template>
<style scoped>
.container {
  padding: 20px;
}
</style>
