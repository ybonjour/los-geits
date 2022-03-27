import { Departure } from './Departure'
import { StationName } from './StationName'

export interface Station {
  name: StationName
  departures: Departure[]
}
