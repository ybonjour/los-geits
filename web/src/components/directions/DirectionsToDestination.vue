<template>
  <h1>{{ destination.name }}</h1>
  <div v-if="durations">
    <p><a @click="setMode('walking')">Z Fuess: {{ formatDuration(durations?.walkingInSeconds) }}</a></p>
    <p><a @click="setMode('bicycling')">Mit em Velo: {{ formatDuration(durations?.bicyclingInSeconds) }}</a></p>
    <p><a @click="setMode('driving')">Mit em Outo: {{ formatDuration(durations?.drivingInSeconds) }}</a></p>
    <p><a @click="setMode('transit')">Mit em ÖV: {{ formatDuration(durations?.transitInSeconds) }}</a></p>
  </div>
  <div>
    <WalkingDetails
        v-if="mode === 'walking'"
        :destination="destination"
    />
    <BicyclingDetails
        v-if="mode === 'bicycling'"
        :destination="destination"
    />
    <DrivingDetails
        v-if="mode === 'driving'"
        :destination="destination"
    />
    <TransitDetails
        v-if="mode === 'transit'"
        :destination="destination"
    />
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
import WalkingDetails from '@/components/directions/WalkingDetails.vue'
import DrivingDetails from '@/components/directions/DrivingDetails.vue'

export default {
  components: {
    DrivingDetails,
    BicyclingDetails,
    TransitDetails,
    WalkingDetails
  },
  props: {
    destination: {
      type: Object as PropType<DestinationModel>,
      required: true
    }
  },
  methods: {
    formatDuration: (durationInseconds: number): string => {
      const minutes = Math.ceil(durationInseconds / 60)

      if (minutes < 60) {
        return `${minutes} Minute`
      }

      const hours = Math.floor(minutes / 60)
      const minutesOfHour = minutes % 60

      return `${hours} Stund u ${minutesOfHour} Minute`
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
