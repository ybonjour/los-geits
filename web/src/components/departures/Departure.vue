<template>
  <span class="minutes">{{ minutesFormatted(departure) }}</span> ({{ formattedTime(departure) }}) - {{ departure.to }}
</template>

<script lang="ts">
import { departureInMinutes, DepartureModel, timeString } from '@/components/departures/DepartureModel'
import { PropType } from 'vue'

export default {
  props: {
    departure: {
      type: Object as PropType<DepartureModel>,
      required: true
    }
  },
  methods: {
    formattedTime: (departure: DepartureModel): string => {
      return timeString(departure)
    },
    minutesFormatted: (departure: DepartureModel): string => {
      return `${departureInMinutes(departure, new Date())}\``
    }
  }
}
</script>

<style>
  .minutes {
    font-weight: bolder;
  }
</style>
