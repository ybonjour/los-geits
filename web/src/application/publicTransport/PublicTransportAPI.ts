import { Departure } from './Departure'
import axios from 'axios'
import { StationName } from './StationName'

export const fetchNextDepartures = async (
  stationName: StationName
): Promise<Departure[]> => {
  const response = await axios.get(`/api/stations/${stationName}/departures`)
  return response.data as Departure[]
}
