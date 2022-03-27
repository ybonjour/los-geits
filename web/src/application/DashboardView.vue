<script setup lang="ts">
import DestinationListView from '@/application/directions/DestinationListView.vue'
import DirectionsView from '@/application/directions/DirectionsView.vue'
import { useDashboard } from './DashboardView.behaviour'

const { destinations, selectedDestination, selectDestination } = useDashboard()
</script>

<template>
  <div class="container">
    <div class="navigation">
      <DestinationListView
        :destinations="destinations"
        :on-destination-selected="selectDestination"
        :selected-destination="selectedDestination"
      />
    </div>
    <div v-if="selectedDestination" class="details">
      <DirectionsView :destination="selectedDestination" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  > .navigation {
    flex-grow: 2;
  }
  > .details {
    flex-grow: 8;
    overflow-y: scroll;
    padding: 24px;
  }
}
</style>
