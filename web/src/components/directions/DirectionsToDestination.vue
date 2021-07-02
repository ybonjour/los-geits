<template>
  <h1>{{ destination.name }}</h1>
  <div v-if="durations">
    <p>Z Fuess: {{ durations?.walkingInSeconds }} Sekunde</p>
    <p>Mit em Velo: {{ durations?.bicyclingInSeconds }} Sekunde</p>
    <p>Mit em Outo: {{ durations?.walkingInSeconds }} Sekunde</p>
    <p>Mit em ÖV: {{ durations?.transitInSeconds }} Sekunde</p>
  </div>
</template>

<script lang="ts">
import { onMounted, PropType, ref } from 'vue'
import { DestinationModel } from '@/components/directions/DestinationModel'
import { Ref } from '@vue/reactivity'
import { fetchDurationInSeconds } from '@/components/directions/DirectionsAPI'
import { Durations } from '@/components/directions/Durations'

export default {
  props: {
    destination: {
      type: Object as PropType<DestinationModel>,
      required: true
    }
  },
  setup(props: { destination: DestinationModel }) {
    const durations: Ref<Durations | null> = ref(null)
    onMounted(async () => {
      durations.value = {
        walkingInSeconds: await fetchDurationInSeconds(props.destination, 'walking'),
        bicyclingInSeconds: await fetchDurationInSeconds(props.destination, 'bicycling'),
        drivingInSeconds: await fetchDurationInSeconds(props.destination, 'driving'),
        transitInSeconds: await fetchDurationInSeconds(props.destination, 'transit')
      }
    })

    return {
      durations
    }
  }
}
</script>
