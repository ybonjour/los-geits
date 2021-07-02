import axios from 'axios'
import { PubliBikeStation } from '@/components/bikes/PubliBikeStation'
import { BikeModel } from '@/components/bikes/BikeModel'

export const fetchBikes = async (station: PubliBikeStation): Promise<BikeModel[]> => {
  const response = await axios.get(`/api/stations/${station}/bikes`)
  return response.data as BikeModel[]
}
