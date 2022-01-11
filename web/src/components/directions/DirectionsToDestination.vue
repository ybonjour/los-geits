<template>
  <div class="directions-detail-container">
    <div v-if="durations" class="durations-container">
      <div class="duration-container" @click="setMode('walking')">
        <div class="mode-icon">
          <font-awesome-icon icon="walking"/>
        </div>
        <div class="duration" :class="{active: mode === 'walking'}">
          {{ formatDuration(durations?.walkingInSeconds) }}
        </div>
      </div>
      <div class="duration-container" @click="setMode('bicycling')">
        <div class="mode-icon">
          <font-awesome-icon icon="bicycle"/>
        </div>
        <div class="duration" :class="{active: mode === 'bicycling'}">
          {{ formatDuration(durations?.bicyclingInSeconds) }}
        </div>
      </div>
      <div class="duration-container" @click="setMode('driving')">
        <div class="mode-icon">
          <font-awesome-icon icon="car"/>
        </div>
        <div class="duration" :class="{active: mode === 'driving'}">
          {{ formatDuration(durations?.drivingInSeconds) }}
        </div>
      </div>
      <div class="duration-container" @click="setMode('transit')">
        <div class="mode-icon">
          <font-awesome-icon icon="subway"/>
        </div>
        <div class="duration" :class="{active: mode === 'transit'}">
          {{ formatDuration(durations?.transitInSeconds) }}
        </div>
      </div>
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

.duration-container {
  border: 1px solid #AAA;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.mode-icon {
  padding: 20px;
}

.duration {
  text-align: center;
  padding: 5px;
}

.details {
  flex-grow: 1;
}

.active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
