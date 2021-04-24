<template>
  <div v-if="stationDepartures">
      <h1>{{ stationDepartures.name }}</h1>
      <ul>
        <li v-for="departure in stationDepartures.departures" :key="departure.departure">
          <Departure :departure="departure"/>
        </li>
      </ul>
  </div>
</template>

<script lang="ts">
import { StationDeparturesModel } from '@/components/departures/StationDeparturesModel'
import { DepartureModel } from '@/components/departures/DepartureModel'
import Departure from '@/components/departures/Departure.vue'
import { PropType } from 'vue'

export default {
  components: {Departure},
  props: {
    stationDepartures: {
      type: Object as PropType<StationDeparturesModel | null>,
      required: false
    }
  }
}
</script>
