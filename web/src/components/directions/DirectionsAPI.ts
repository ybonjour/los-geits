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

export const fetchWalkingDurationInSeconds = async (destination: DestinationModel): Promise<number> => {
  const response = await axios.get(`/api/directions?destination=${destination.name}&transportationMode=walking`)
  console.log(JSON.stringify(response.data))
  return response.data.durationInSeconds
}
