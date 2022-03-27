import { Station } from './Station'
import { onMounted, ref, Ref } from 'vue'
import { fetchPublicTransportationStations } from './fetchPublicTransportationStations'

interface AllStationsViewContract {
  stations: Ref<Station[]>
}

export const useAllStations = (): AllStationsViewContract => {
  const stations = ref<Station[]>([])

  onMounted(async () => {
    stations.value = await fetchPublicTransportationStations()
  })

  return {
    stations,
  }
}
