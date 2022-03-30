<script setup lang="ts">
import { Destination } from './Destination'
import { TransportationModeType } from './TransportationMode'
import { useMapKey } from './MapView.behaviour'
import { inject } from '@vue/runtime-core'

const properties = defineProps<{
  destination: Destination
  transportationModeType: TransportationModeType
}>()
const { mapsUrl } = inject(useMapKey)!(properties)
</script>

<template>
  <iframe
    v-if="mapsUrl"
    class="map"
    loading="lazy"
    allowfullscreen
    :src="mapsUrl"
  />
</template>

<style scoped>
.map {
  width: 100%;
  height: 100%;
  border: none;
}
</style>
