<template>
  <div id="selectionContainer">
    <div v-for="destination in destinations" :key="destination.name">
      <a @click="selectDetailDestination(destination)">{{ destination.name }}</a>
    </div>
  </div>
  <div id="details">
    <directions-to-destination v-if="detailDestination" :destination="detailDestination"/>
  </div>
</template>

<script lang="ts">
import { fetchDestinations } from '@/components/directions/DirectionsAPI'
import { onMounted, ref } from 'vue'
import { DestinationModel } from '@/components/directions/DestinationModel'
import { Ref } from '@vue/reactivity'
import DirectionsToDestination from '@/components/directions/DirectionsToDestination.vue'

export default {
  components: {
    DirectionsToDestination
  },
  setup() {
    const detailDestination: Ref<DestinationModel | null> = ref(null)
    const destinations: Ref<DestinationModel[]> = ref([])
    onMounted(async () => {
      destinations.value = await fetchDestinations()
    })

    const selectDetailDestination = (destination: DestinationModel) => {
      detailDestination.value = destination
    }

    return {
      destinations,
      detailDestination,
      selectDetailDestination
    }
  }
}
</script>

<style scoped>
a {
  cursor: pointer;
}
</style>
