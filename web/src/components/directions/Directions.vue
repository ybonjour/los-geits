<template>
  <selection-and-detail-vertical>
    <template v-slot:selection>
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
    </template>
    <template v-slot:detail>
      <directions-to-destination v-if="detailDestination" :destination="detailDestination"/>
    </template>
  </selection-and-detail-vertical>
</template>

<script lang="ts">
import { fetchDestinations } from '@/components/directions/DirectionsAPI'
import { onMounted, ref } from 'vue'
import { DestinationModel } from '@/components/directions/DestinationModel'
import { Ref } from '@vue/reactivity'
import DirectionsToDestination from '@/components/directions/DirectionsToDestination.vue'
import SelectionAndDetailVertical from '@/components/layouts/SelectionAndDetailVertical.vue'

export default {
  components: {
    SelectionAndDetailVertical,
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
