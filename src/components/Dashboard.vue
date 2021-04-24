<template>
  <div v-for="stationDeparture in stationDepartures" :key="stationDeparture.name">
    <StationDepartures :stationDepartures="stationDeparture"/>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue'
import { fetchNextDepartures } from '@/components/departures/TransportAPI'
import { PublicTransportStation } from '@/components/departures/PublicTransportationStation'
import { Ref } from '@vue/reactivity'
import StationDepartures from '@/components/departures/StationDepartures.vue'
import { StationDeparturesModel } from '@/components/departures/StationDeparturesModel'

export default {
  components: {StationDepartures},
  setup() {
    const stationDepartures: Ref<StationDeparturesModel[] | null> = ref(null)

    onMounted(async () => {
      stationDepartures.value = [
        {
          name: 'Weissenbühl (Tram)',
          departures: await fetchNextDepartures(PublicTransportStation.WeissenbuehlTram)
        },
        {
          name: 'Wander',
          departures: await fetchNextDepartures(PublicTransportStation.Wander)
        },
        {
          name: 'Weissenbühl (Train)',
          departures: await fetchNextDepartures(PublicTransportStation.WeissenbuehlTrain)
        }
      ]
    })

    return {
      stationDepartures: stationDepartures
    }
  }
}
</script>
