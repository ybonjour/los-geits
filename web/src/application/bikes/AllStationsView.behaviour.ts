import { Station } from './Station'
import { onMounted, ref, Ref } from 'vue'
import { fetchBikeStations } from './fetchBikeStations'

interface AllStationsViewContract {
  stations: Ref<Station[]>
}

export const useAllStations = (): AllStationsViewContract => {
  const stations = ref<Station[]>([])
  onMounted(async () => {
    stations.value = await fetchBikeStations()
  })
  return {
    stations,
  }
}
