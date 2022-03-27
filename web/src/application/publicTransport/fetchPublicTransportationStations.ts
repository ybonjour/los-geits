import { Station } from './Station'
import { StationName } from './StationName'
import { fetchNextDepartures } from '@/application/publicTransport/PublicTransportAPI'

const stations = [StationName.Weissenbuehl, StationName.Wander]

export const fetchPublicTransportationStations = (): Promise<Station[]> => {
  return Promise.all(
    stations.map(async (stationName) => {
      return {
        name: stationName,
        departures: await fetchNextDepartures(stationName),
      }
    })
  )
}
