<template>
  <div v-for="stationBike in stationBikes" :key="stationBike.name">
    <StationBikes :station-bikes="stationBike"/>
  </div>
</template>

<script lang="ts">
import { onMounted, PropType, ref } from 'vue'
import { DestinationModel } from '@/components/directions/DestinationModel'
import { Ref } from '@vue/reactivity'
import { StationBikesModel } from '@/components/bikes/StationBikesModel'
import StationBikes from '@/components/bikes/StationBikes.vue'
import { fetchBikes } from '@/components/bikes/PubliBikeAPI'
import { PubliBikeStation } from '@/components/bikes/PubliBikeStation'

export default {
  components: {StationBikes},
  props: {
    destination: {
      type: Object as PropType<DestinationModel>,
      required: true
    }
  },
  setup() {
    const stationBikes: Ref<StationBikesModel[] | null> = ref(null)

    onMounted(async () => {
      stationBikes.value = [
        {
          name: 'Beaumont',
          bikes: await fetchBikes(PubliBikeStation.Beaumont)
        },
        {
          name: 'Wander',
          bikes: await fetchBikes(PubliBikeStation.Wander)
        }
      ]
    })

    return {
      stationBikes
    }
  }
}
</script>
