<script setup lang="ts">
import { Destination } from '@/application/directions/Destination'
import DestinationListView from '@/application/directions/DestinationListView.vue'
import { ref } from 'vue'

const destinations: Destination[] = [
  {
    identifier: 'destination1',
    name: 'Bahnhof',
  },
  {
    identifier: 'destination2',
    name: 'Länggasse',
  },
]

const selectedDestination = ref<Destination | null>(null)
const selectDestination = (destination: Destination) => {
  selectedDestination.value = destination
}
</script>
<template>
  <DestinationListView
    :destinations="destinations"
    :on-destination-selected="selectDestination"
    :selected-destination="selectedDestination"
  />
  <p>Selected: {{ selectedDestination?.name }}</p>
</template>
