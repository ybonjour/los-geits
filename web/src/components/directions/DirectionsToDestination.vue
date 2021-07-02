<template>
  <span>Walking to {{ destination.name }}: {{ walkingDurationInSeconds }}</span>
</template>

<script lang="ts">
import { onMounted, PropType, ref } from 'vue'
import { DestinationModel } from '@/components/directions/DestinationModel'
import { Ref } from '@vue/reactivity'
import { fetchWalkingDurationInSeconds } from '@/components/directions/DirectionsAPI'

export default {
  props: {
    destination: {
      type: Object as PropType<DestinationModel>,
      required: true
    }
  },
  setup(props: { destination: DestinationModel }) {
    const walkingDurationInSeconds: Ref<number | null> = ref(null)
    onMounted(async () => {
      walkingDurationInSeconds.value = await fetchWalkingDurationInSeconds(props.destination)
    })

    return {
      walkingDurationInSeconds
    }
  }
}
</script>
