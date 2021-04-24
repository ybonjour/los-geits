<template>
  <ul v-if="departures">
    <li v-for="departure in departures" :key="departure.departure">
      {{ departure.departure }} - {{ departure.to }}
    </li>
  </ul>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue'
import { fetchNextDepartures } from '@/components/departures/TransportAPI'
import { PublicTransportStation } from '@/components/departures/PublicTransportationStation'
import { DepartureModel } from '@/components/departures/DepartureModel'
import { Ref } from '@vue/reactivity'

export default {
  setup() {
    const departures: Ref<DepartureModel[] | null> = ref(null)

    onMounted(async () => {
      departures.value = await fetchNextDepartures(PublicTransportStation.WeissenbuehlTram)
    })

    return {
      departures: departures
    }
  }
}
</script>
