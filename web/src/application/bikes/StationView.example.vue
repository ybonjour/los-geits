<script setup lang="ts">
import { StationName } from './StationName'
import { BikeType } from './Bike'
import StationView from './StationView.vue'

const station = {
  name: StationName.Beaumont,
  bikes: [
    {
      name: 'Normal Bike',
      type: BikeType.BIKE,
      batteryLevel: null,
    },
    {
      name: 'E-Bike',
      type: BikeType.EBIKE,
      batteryLevel: 70,
    },
  ],
}
</script>

<template>
  <h1>Station View</h1>
  <StationView :station="station" />
</template>
