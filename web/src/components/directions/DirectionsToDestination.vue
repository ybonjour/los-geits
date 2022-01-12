<template>
  <div class="directions-detail-container">
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
    <div class="details">
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
  </div>
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

export default {
  components: {
    Duration,
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
.directions-detail-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}

.durations-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.details {
  flex-grow: 1;
}
</style>
