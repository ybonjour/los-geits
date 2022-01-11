<template>
  <div class="container">
    <div class="destinations-container">
      <div
          v-for="destination in destinations"
          :key="destination.name"
          class="destination-container"
          @click="selectDetailDestination(destination)"
          :class="{ active: detailDestination === destination}"
      >
        <p>{{ destination.name }}</p>
      </div>
    </div>
    <div>
      <directions-to-destination v-if="detailDestination" :destination="detailDestination"/>
    </div>
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

.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.destinations-container {
  padding-top: 5px;
  padding-bottom: 5px;
  display: flex;
  flex-direction: row;
  gap: 5px;
}

.destination-container {
  cursor: pointer;
}

.active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
