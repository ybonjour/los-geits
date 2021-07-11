<template>
  <directions-map :destination="destination" mode="walking" />
</template>

<script lang="ts">
import { onMounted, PropType, ref } from 'vue'
import { DestinationModel } from '@/components/directions/DestinationModel'
import { fetchMapsUrl } from '@/components/directions/DirectionsAPI'
import DirectionsMap from '@/components/directions/DirectionsMap.vue'

export default {
  components: {
    DirectionsMap
  },
  props: {
    destination: {
      type: Object as PropType<DestinationModel>,
      required: true
    }
  },
  setup(props: {
    destination: DestinationModel
  }) {
    const mapsUrl = ref<string | null>(null)
    onMounted(async () => {
      mapsUrl.value = await fetchMapsUrl(props.destination, 'walking')
    })
    return {
      mapsUrl
    }
  }
}
</script>

<style scoped>
</style>
