import { Destination } from './Destination'
import { TransportationModeType } from './TransportationMode'
import { onMounted, ref, Ref } from 'vue'
import { fetchMapsUrl } from '@/application/directions/DirectionsAPI'

export interface MapViewProperties {
  destination: Destination
  transportationModeType: TransportationModeType
}

interface MapViewContract {
  mapsUrl: Ref<string | null>
}

export const useMap = (properties: MapViewProperties): MapViewContract => {
  const mapsUrl = ref<string | null>(null)
  onMounted(async () => {
    mapsUrl.value = await fetchMapsUrl(
      properties.destination,
      properties.transportationModeType
    )
  })
  return {
    mapsUrl,
  }
}
