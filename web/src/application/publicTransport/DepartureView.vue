<script setup lang="ts">
import { Departure } from '@/application/publicTransport/Departure'
import {
  departureTimeString,
  timeToDepartureFormatted,
} from '@/application/publicTransport/Departue.formatters'

const props = defineProps<{
  departure: Departure
  now?: Date
}>()

const departureInMinutes = timeToDepartureFormatted(
  props.departure,
  props.now ?? new Date()
)
const departureTime = departureTimeString(props.departure)
</script>

<template>
  <span class="minutes">{{ departureInMinutes }}</span> ({{ departureTime }}) -
  {{ departure.to }}
</template>
<style>
.minutes {
  font-weight: bolder;
}
</style>
