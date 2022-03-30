<script setup lang="ts">
import { TransportationModeType } from './TransportationMode'
import { useMapKey } from './MapView.behaviour'
import MapView from '@/application/directions/MapView.vue'
import { provide, ref } from 'vue'

const destination = {
  identifier: 'bahnhof',
  name: 'Bahnhof',
}
const transportationModeType = TransportationModeType.WALKING
provide(useMapKey, () => {
  return {
    mapsUrl: ref('https://www.rethinc.ch'),
  }
})
</script>

<template>
  <MapView
    :destination="destination"
    :transportation-mode-type="transportationModeType"
  />
</template>

<style scoped>
.map {
  width: 100%;
  height: 100%;
  border: none;
}
</style>
