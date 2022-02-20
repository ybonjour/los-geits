<template>
  <selection-and-detail-horizontal>
    <template v-slot:selection>
      <div v-if="durations" class="durations-container">
        <duration
            @click="setMode('walking')"
            icon="walking"
            :duration-in-seconds="durations?.walkingInSeconds"
            :isActive="mode === 'walking'"
        />
        <duration
            @click="setMode('bicycling')"
            icon="bicycle"
            :duration-in-seconds="durations?.bicyclingInSeconds"
            :isActive="mode === 'bicycling'"
        />
        <duration
            @click="setMode('driving')"
            icon="car"
            :duration-in-seconds="durations?.drivingInSeconds"
            :isActive="mode === 'driving'"
        />
        <duration
            @click="setMode('transit')"
            icon="subway"
            :duration-in-seconds="durations?.transitInSeconds"
            :isActive="mode === 'transit'"
        />
      </div>
    </template>
    <template v-slot:detail>
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
    </template>
  </selection-and-detail-horizontal>
</template>

<script lang="ts">
import { onMounted, PropType, ref, watch } from 'vue'
import { DestinationModel } from '@/components/directions/DestinationModel'
import { Ref } from '@vue/reactivity'
import { fetchDurationInSeconds } from '@/components/directions/DirectionsAPI'
import { Durations } from '@/components/directions/Durations'
import BicyclingDetails from '@/components/directions/BicyclingDetails.vue'
import TransitDetails from '@/components/directions/TransitDetails.vue'
import WalkingDetails from '@/components/directions/WalkingDetails.vue'
import DrivingDetails from '@/components/directions/DrivingDetails.vue'
import Duration from '@/components/directions/Duration.vue'
import SelectionAndDetailHorizontal from '@/components/layouts/SelectionAndDetailHorizontal.vue'

export default {
  components: {
    Duration,
    SelectionAndDetailHorizontal,
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
  setup(props: { destination: DestinationModel }) {
    const mode: Ref<String | null> = ref(null)
    const durations: Ref<Durations | null> = ref(null)

    const setMode = (newMode: String) => {
      mode.value = newMode
    }

    const fetchDurations = async (destination: DestinationModel) => {
      durations.value = {
        walkingInSeconds: await fetchDurationInSeconds(destination, 'walking'),
        bicyclingInSeconds: await fetchDurationInSeconds(destination, 'bicycling'),
        drivingInSeconds: await fetchDurationInSeconds(destination, 'driving'),
        transitInSeconds: await fetchDurationInSeconds(destination, 'transit')
      }
    }

    watch(() => props.destination, async (destination: DestinationModel) => {
      await fetchDurations(destination)
    })

    onMounted(async () => {
      await fetchDurations(props.destination)
    })

    return {
      durations,
      mode,
      setMode
    }
  }
}
</script>

<style scoped>
.durations-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
