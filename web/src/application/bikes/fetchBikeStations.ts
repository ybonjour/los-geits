import { Station } from '@/application/bikes/Station'
import { StationName } from '@/application/bikes/StationName'
import { fetchBikes } from '@/application/bikes/BikesApi'

const stations = [StationName.Beaumont, StationName.Wander]

export const fetchBikeStations = (): Promise<Station[]> => {
  return Promise.all(
    stations.map(async (stationName) => {
      return {
        name: stationName,
        bikes: await fetchBikes(stationName),
      }
    })
  )
}
