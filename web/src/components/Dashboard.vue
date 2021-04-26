<template>
  <div v-for="stationDeparture in stationDepartures" :key="stationDeparture.name">
    <StationDepartures :stationDepartures="stationDeparture"/>
  </div>
  <div v-for="stationBike in stationBikes" :key="stationBike.name">
    <StationBikes :station-bikes="stationBike"/>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue'
import { fetchNextDepartures } from '@/components/departures/TransportAPI'
import { PublicTransportStation } from '@/components/departures/PublicTransportationStation'
import { Ref } from '@vue/reactivity'
import StationDepartures from '@/components/departures/StationDepartures.vue'
import { StationDeparturesModel } from '@/components/departures/StationDeparturesModel'
import { StationBikesModel } from '@/components/bikes/StationBikesModel'
import { PubliBikeStation } from '@/components/bikes/PubliBikeStation'
import { fetchBikes } from '@/components/bikes/PubliBikeAPI'
import StationBikes from '@/components/bikes/StationBikes.vue'

export default {
  components: {StationBikes, StationDepartures},
  setup() {
    const stationDepartures: Ref<StationDeparturesModel[] | null> = ref(null)
    const stationBikes: Ref<StationBikesModel[] | null> = ref(null)

    onMounted(async () => {
      stationDepartures.value = [
        {
          name: 'Weissenbühl',
          departures: await fetchNextDepartures(PublicTransportStation.Weissenbuehl)
        },
        {
          name: 'Wander',
          departures: await fetchNextDepartures(PublicTransportStation.Wander)
        }
      ]
      stationBikes.value = [
        {
          name: 'Beaumont',
          bikes: await fetchBikes(PubliBikeStation.Beaumont)
        },
        {
          name: 'Wander',
          bikes: await fetchBikes(PubliBikeStation.Wander)
        }
      ]
    })

    return {
      stationDepartures: stationDepartures,
      stationBikes: stationBikes
    }
  }
}
</script>

<style>
  * {
    font-family: sans-serif;
  }
</style>
