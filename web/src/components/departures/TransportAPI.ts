import axios from 'axios'
import { DepartureModel } from './DepartureModel'
import { PublicTransportStation } from './PublicTransportationStation'

export const fetchNextDepartures = async (station: PublicTransportStation): Promise<DepartureModel[]> => {
  const response = await axios.get(`/api/stations/${station}/departures`)
  return response.data as DepartureModel[]
}
