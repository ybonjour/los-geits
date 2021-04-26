<template>
  <span class="minutes">{{ formatMinutes(departure.departure) }}</span> ({{ formatTime(departure.departure) }}) - {{ departure.to }}
</template>

<script lang="ts">
import { DepartureModel } from '@/components/departures/DepartureModel'
import { PropType } from 'vue'

export default {
  props: {
    departure: {
      type: Object as PropType<DepartureModel>,
      required: true
    }
  },
  methods: {
    formatTime: (timestamp: number): string => {
      const zeroPadding = (n: number): string => {
        return `${n < 10 ? '0' : ''}${n}`
      }

      const date = new Date(timestamp * 1000)

      return `${zeroPadding(date.getHours())}:${zeroPadding(date.getMinutes())}`
    },
    formatMinutes: (timestamp: number): string => {
      const now = new Date()
      const differenceMs = timestamp - (now.valueOf() / 1000)
      return `${Math.floor(differenceMs / 60)}\``
    }
  }
}
</script>

<style>
  .minutes {
    font-weight: bolder;
  }
</style>
