<template>
  <div v-for="stationDeparture in stationDepartures" :key="stationDeparture.name">
    <StationDepartures :stationDepartures="stationDeparture"/>
  </div>
</template>

<script lang="ts">
import { onMounted, PropType, ref } from 'vue'
import { DestinationModel } from '@/components/directions/DestinationModel'
import { Ref } from '@vue/reactivity'
import StationDepartures from '@/components/departures/StationDepartures.vue'
import { StationDeparturesModel } from '@/components/departures/StationDeparturesModel'
import { fetchNextDepartures } from '@/components/departures/TransportAPI'
import { PublicTransportStation } from '@/components/departures/PublicTransportationStation'

export default {
  components: {StationDepartures},
  props: {
    destination: {
      type: Object as PropType<DestinationModel>,
      required: true
    }
  },
  setup() {
    const stationDepartures: Ref<StationDeparturesModel[] | null> = ref(null)

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
    })

    return {
      stationDepartures
    }
  }
}
</script>
