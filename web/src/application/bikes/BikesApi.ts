import axios from 'axios'
import { StationName } from './StationName'
import { Bike } from './Bike'

export const fetchBikes = async (station: StationName): Promise<Bike[]> => {
  const response = await axios.get(`/api/stations/${station}/bikes`)
  return response.data as Bike[]
}
