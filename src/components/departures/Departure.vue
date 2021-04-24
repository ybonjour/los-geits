<template>
  {{ formatTime(departure.departure) }} - {{ departure.to }}
</template>

<script lang="ts">
import { DepartureModel } from '@/components/departures/DepartureModel'
import { PropType } from 'vue'

export default {
  props: {
    departure: {
      type:  Object as PropType<DepartureModel>,
      required: true
    }
  },
  methods: {
    formatTime: (timestamp: number): string => {
      const date = new Date(timestamp * 1000)
      return `${date.getHours()}:${date.getMinutes()}`
    }
  }
}
</script>
