import axios from 'axios'
import { DestinationModel } from '@/components/directions/DestinationModel'

export const fetchDestinations = async (): Promise<DestinationModel[]> => {
  const response = await axios.get('/api/destinations')
  return response.data.destinations.map((name: string) => {
    return {
      name: name
    }
  })
}

export const fetchDurationInSeconds = async (
  destination: DestinationModel,
  transportationMode: string
): Promise<number> => {
  const response = await axios.get(`/api/directions?destination=${destination.name}&transportationMode=${transportationMode}`)
  return response.data.durationInSeconds
}


export const fetchMapsUrl = async (
  destination: DestinationModel,
  transportationMode: string
): Promise<string> => {
  const response = await axios.get(`/api/directions/url?destination=${destination.name}&transportationMode=${transportationMode}`)
  return response.data.mapsUrl
}
