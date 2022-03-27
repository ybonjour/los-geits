<script setup lang="ts">
import { Station } from './Station'
import DepartureView from './DepartureView.vue'

const props = defineProps<{
  station: Station
  now?: Date
}>()

const now = props.now ?? new Date()
</script>
<template>
  <div class="container">
    <h1>{{ station.name }}</h1>
    <ul>
      <li v-for="departure in station.departures" :key="departure.timestamp">
        <DepartureView :departure="departure" :now="now" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  border: 2px solid #df2b3f;
  margin: 5px;
  padding: 0;
}
h1 {
  background: #df2b3f;
  color: #ffffff;
  padding: 10px;
  margin-top: 0;
  margin-bottom: 0;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
li {
  padding: 5px;
  border-bottom: 1px solid black;
}
li:nth-child(even) {
  background: #dddddd;
}
li:last-child {
  border-bottom: 0;
}
</style>
