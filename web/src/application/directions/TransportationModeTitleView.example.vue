<script setup lang="ts">
import { TransportationModeType } from './TransportationMode'
import TransportationModeTitleView from './TransportationModeTitleView.vue'

const walking = {
  type: TransportationModeType.WALKING,
  durationInSeconds: 500,
}

const bicycling = {
  type: TransportationModeType.BICYCLING,
  durationInSeconds: 500,
}

const driving = {
  type: TransportationModeType.DRIVING,
  durationInSeconds: 500,
}

const transit = {
  type: TransportationModeType.TRANSIT,
  durationInSeconds: 500,
}
</script>
<template>
  <div class="container">
    <div><TransportationModeTitleView :transportation-mode="walking" /></div>
    <div><TransportationModeTitleView :transportation-mode="bicycling" /></div>
    <div><TransportationModeTitleView :transportation-mode="driving" /></div>
    <div><TransportationModeTitleView :transportation-mode="transit" /></div>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
</style>
