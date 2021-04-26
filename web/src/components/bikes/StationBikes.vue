<template>
  <div v-if="stationBikes" class="container">
    <h1>{{ stationBikes.name }}</h1>
    <ul>
      <li v-for="bike in stationBikes.bikes" :key="bike.name">
        <Bike :bike="bike" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue'
import Bike from '@/components/bikes/Bike.vue'
import { StationBikesModel } from '@/components/bikes/StationBikesModel'

export default {
  components: {Bike},
  props: {
    stationBikes: {
      type: Object as PropType<StationBikesModel | null>,
      required: false
    }
  }
}
</script>
<style scoped>
.container {
  border: 2px solid #ad1380;
  margin: 5px;
  padding: 0;
}
h1 {
  background: #ad1380;
  color: #FFFFFF;
  padding: 10px;
  margin-top: 0;
  margin-bottom: 0;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0
}
li {
  padding: 5px;
  border-bottom: 1px solid black;
}
li:nth-child(even) {
  background: #7E7A7A;
}
li:last-child {
  border-bottom: 0;
}
</style>
