<script setup lang="ts">
import DepartureView from './DepartureView.vue'

const now = new Date(0)

const departureWithoutDelay = {
  timestamp: 100,
  delay: null,
  to: 'Bahnhof',
}

const departureWithDelay = {
  timestamp: 100,
  delay: '+10 Minuten',
  to: 'Bahnhof',
}
</script>
<template>
  <h1>DepartureView</h1>
  <h2>Without Delay</h2>
  <DepartureView :departure="departureWithoutDelay" :now="now" />

  <h2>With Delay</h2>
  <DepartureView :departure="departureWithDelay" :now="now" />
</template>
