import { Destination } from './Destination'
import { TransportationMode } from './TransportationMode'
import { Ref, ref, watch } from 'vue'
import { fetchTransportationModes } from '@/application/directions/fetchTransportationModes'

export interface DirectionViewProperties {
  destination: Destination
}

export interface DirectionsViewContract {
  transportationModes: Ref<TransportationMode[]>
}

export const useDirections = (
  properties: DirectionViewProperties
): DirectionsViewContract => {
  const transportationModes = ref<TransportationMode[]>([])
  watch(
    () => properties.destination,
    async (newDestination) => {
      transportationModes.value = await fetchTransportationModes(newDestination)
    },
    { immediate: true }
  )

  return {
    transportationModes,
  }
}
