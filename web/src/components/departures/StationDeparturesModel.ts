import { DepartureModel } from '@/components/departures/DepartureModel'

export interface StationDeparturesModel {
  name: string
  departures: DepartureModel[]
}
