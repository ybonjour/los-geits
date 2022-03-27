<script setup lang="ts">
import { TransportationMode } from './TransportationMode'
import { translate, icon } from './TransportationMode.formatters'
import { formatDuration } from './Duration.formatters'

defineProps<{
  transportationMode: TransportationMode
}>()
</script>
<template>
  <h1>
    <font-awesome-icon
      :icon="icon(transportationMode.type)"
      :title="translate(transportationMode.type)"
    />
    {{ formatDuration(transportationMode.durationInSeconds) }}
  </h1>
</template>
