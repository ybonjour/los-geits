<script setup lang="ts">
import DestinationView from './DestinationView.vue'

const destination = {
  identifier: 'bahnhof',
  name: 'Bahnhof',
}
</script>

<template>
  <destination-view :destination="destination" />
</template>
