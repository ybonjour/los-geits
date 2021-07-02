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
  console.log(JSON.stringify(response.data))
  return response.data.durationInSeconds
}
