import { Destination } from './Destination'
import { TransportationModeType } from './TransportationMode'
import { ref, Ref, watch } from 'vue'
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
  watch(
    properties,
    async (newProperties): Promise<void> => {
      mapsUrl.value = await fetchMapsUrl(
        newProperties.destination,
        newProperties.transportationModeType
      )
    },
    {
      immediate: true,
      deep: true,
    }
  )
  return {
    mapsUrl,
  }
}
