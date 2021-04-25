<template>
  <div v-if="stationDepartures" class="container">
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
<style>
    * {
        font-family: sans-serif;
    }
    .container {
        border: 2px solid #DF2B3F;
        margin: 5px;
        padding: 0px;
    }
    h1 {
        background: #DF2B3F;
        color: #FFFFFF;
        padding: 10px;
        margin-top: 0px;
        margin-bottom: 0px;
    }
    ul {
        list-style-type: none;
        padding: 0px;
        margin: 0px
    }
    li {
        padding: 5px;
        border-bottom: 1px solid black;
    }
    li:nth-child(even) {
        background: #DDD;
    }
    li:last-child {
        border-bottom: 0px;
    }
</style>
