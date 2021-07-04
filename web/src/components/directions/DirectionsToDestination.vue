<template>
  <h1>{{ destination.name }}</h1>
  <div v-if="durations">
    <p><a @click="setMode('walking')">Z Fuess: {{ durations?.walkingInSeconds }} Sekunde</a></p>
    <p><a @click="setMode('bicycling')">Mit em Velo: {{ durations?.bicyclingInSeconds }} Sekunde</a></p>
    <p><a @click="setMode('driving')">Mit em Outo: {{ durations?.walkingInSeconds }} Sekunde</a></p>
    <p><a @click="setMode('transit')">Mit em ÖV: {{ durations?.transitInSeconds }} Sekunde</a></p>
  </div>
  <div>
    <div v-if="mode === 'walking'">
      Loufe details
    </div>
    <BicyclingDetails
        v-if="mode === 'bicycling'"
        :destination="destination"
    />
    <div v-if="mode === 'driving'">
      Outo details
    </div>
    <TransitDetails v-if="mode === 'transit'" :destination="destination"/>
  </div>
</template>

<script lang="ts">
import { onMounted, PropType, ref } from 'vue'
import { DestinationModel } from '@/components/directions/DestinationModel'
import { Ref } from '@vue/reactivity'
import { fetchDurationInSeconds } from '@/components/directions/DirectionsAPI'
import { Durations } from '@/components/directions/Durations'
import BicyclingDetails from '@/components/directions/BicyclingDetails.vue'
import TransitDetails from '@/components/directions/TransitDetails.vue'

export default {
  components: {
    BicyclingDetails,
    TransitDetails
  },
  props: {
    destination: {
      type: Object as PropType<DestinationModel>,
      required: true
    }
  },
  setup(props: { destination: DestinationModel }) {
    const mode: Ref<String | null> = ref(null)
    const durations: Ref<Durations | null> = ref(null)

    const setMode = (newMode: String) => {
      mode.value = newMode
    }
    onMounted(async () => {
      durations.value = {
        walkingInSeconds: await fetchDurationInSeconds(props.destination, 'walking'),
        bicyclingInSeconds: await fetchDurationInSeconds(props.destination, 'bicycling'),
        drivingInSeconds: await fetchDurationInSeconds(props.destination, 'driving'),
        transitInSeconds: await fetchDurationInSeconds(props.destination, 'transit')
      }
    })

    return {
      durations,
      mode,
      setMode
    }
  }
}
</script>
