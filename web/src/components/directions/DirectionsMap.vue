<template>
  <iframe
      class="map"
      loading="lazy"
      allowfullscreen
      :src=mapsUrl
      v-if="mapsUrl"
  />
</template>

<script lang="ts">
import { onMounted, PropType, ref } from 'vue'
import { DestinationModel } from '@/components/directions/DestinationModel'
import { fetchMapsUrl } from '@/components/directions/DirectionsAPI'

export default {
  props: {
    destination: {
      type: Object as PropType<DestinationModel>,
      required: true
    },
    mode: {
      type: String,
      required: true
    }
  },
  setup(props: {
    destination: DestinationModel,
    mode: string
  }) {
    const mapsUrl = ref<string | null>(null)
    onMounted(async () => {
      mapsUrl.value = await fetchMapsUrl(props.destination, props.mode)
    })
    return {
      mapsUrl
    }
  }
}
</script>

<style scoped>
.map {
  width: 100%;
  height: 100%;
  border: none;
}
</style>
