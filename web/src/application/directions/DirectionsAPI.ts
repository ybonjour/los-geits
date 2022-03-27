import axios from 'axios'
import { Destination } from './Destination'
import { TransportationModeType } from './TransportationMode'

export const fetchDestinations = async (): Promise<Destination[]> => {
  const response = await axios.get('/api/destinations')
  return response.data.destinations
}

export const fetchDurationInSeconds = async (
  destination: Destination,
  transportationMode: TransportationModeType
): Promise<number> => {
  const response = await axios.get(
    `/api/directions?destination=${destination.identifier}&transportationMode=${transportationMode}`
  )
  return response.data.durationInSeconds
}

export const fetchMapsUrl = async (
  destination: Destination,
  transportationMode: TransportationModeType
): Promise<string> => {
  const response = await axios.get(
    `/api/directions/url?destination=${destination.identifier}&transportationMode=${transportationMode}`
  )
  return response.data.mapsUrl
}
