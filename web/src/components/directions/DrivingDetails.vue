<template>
  <directions-map :destination="destination" mode="driving"/>
</template>

<script lang="ts">
import { PropType } from 'vue'
import { DestinationModel } from '@/components/directions/DestinationModel'
import DirectionsMap from '@/components/directions/DirectionsMap.vue'

export default {
  components: {
    DirectionsMap
  },
  props: {
    destination: {
      type: Object as PropType<DestinationModel>,
      required: true
    }
  }
}
</script>

<style scoped>
</style>
