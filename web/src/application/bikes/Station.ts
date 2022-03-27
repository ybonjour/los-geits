import { StationName } from './StationName'
import { Bike } from './Bike'

export interface Station {
  name: StationName
  bikes: Bike[]
}
