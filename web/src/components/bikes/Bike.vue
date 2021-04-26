<template>
  {{ bike.name }} {{ batteryLevel(bike) }}
</template>

<script lang="ts">
import { PropType } from 'vue'
import { BikeModel, BikeType } from '@/components/bikes/BikeModel'

export default {
  props: {
    bike: {
      type: Object as PropType<BikeModel>,
      required: true
    }
  },
  methods: {
    batteryLevel: (bike: BikeModel): string => {
      if (bike.type === BikeType.EBIKE) {
        return `(${bike.batteryLevel}% Battery)`
      } else {
        return ''
      }
    }
  }
}
</script>
