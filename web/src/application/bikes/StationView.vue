<script setup lang="ts">
import { Station } from './Station'
import BikeView from './BikeView.vue'
defineProps<{
  station: Station
}>()
</script>

<template>
  <div class="container">
    <h1>{{ station.name }}</h1>
    <ul>
      <li v-for="bike in station.bikes" :key="bike.name">
        <BikeView :bike="bike" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  border: 2px solid #ad1380;
  margin: 5px;
  padding: 0;
}
h1 {
  background: #ad1380;
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
