import { Destination } from './Destination'
import {
  TransportationMode,
  TransportationModeType,
} from './TransportationMode'
import { fetchDurationInSeconds } from './DirectionsAPI'

const transportationModes = [
  TransportationModeType.WALKING,
  TransportationModeType.BICYCLING,
  TransportationModeType.DRIVING,
  TransportationModeType.TRANSIT,
]
export const fetchTransportationModes = async (
  destination: Destination
): Promise<TransportationMode[]> => {
  return Promise.all(
    transportationModes.map(
      async (transportationMode: TransportationModeType) => {
        return {
          type: transportationMode,
          durationInSeconds: await fetchDurationInSeconds(
            destination,
            transportationMode
          ),
        }
      }
    )
  )
}
