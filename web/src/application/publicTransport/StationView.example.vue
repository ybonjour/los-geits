<script setup lang="ts">
import StationView from './StationView.vue'
import { StationName } from './StationName'
const now = new Date(0)
const station = {
  name: StationName.Weissenbuehl,
  departures: [
    {
      timestamp: 100,
      delay: null,
      to: 'Bahnhof',
    },
  ],
}
</script>

<template>
  <h1>Station view</h1>
  <StationView :station="station" :now="now" />
</template>
