<script setup lang="ts">
import { useAllStations } from './AllStationsView.behaviour'
import StationView from './StationView.vue'

const { stations } = useAllStations()
</script>

<template>
  <div v-for="station in stations" :key="station.name">
    <StationView :station="station" />
  </div>
</template>
