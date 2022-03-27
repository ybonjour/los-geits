<script setup lang="ts">
import { BikeType } from '@/application/bikes/Bike'
import BikeView from './BikeView.vue'

const normalBike = {
  name: 'MyBike',
  type: BikeType.BIKE,
  batteryLevel: null,
}

const eBike = {
  name: 'MyEBike',
  type: BikeType.EBIKE,
  batteryLevel: 20,
}
</script>
<template>
  <h1>BikeView</h1>
  <h2>Normal Bike</h2>
  <BikeView :bike="normalBike" />

  <h2>E-Bike</h2>
  <BikeView :bike="eBike" />
</template>
