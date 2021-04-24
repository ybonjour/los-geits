import axios from 'axios'
import { DepartureModel } from './DepartureModel'
import { PublicTransportStation } from './PublicTransportationStation'

const stationBoardConfigurations = {
  [PublicTransportStation.WeissenbuehlTram]: {
    stationId: 8595142,
    limit: 5
  },
  [PublicTransportStation.WeissenbuehlTrain]: {
    stationId: 8507079,
    limit: 2
  },
  [PublicTransportStation.Wander]: {
    stationId: 8589993,
    limit: 5
  }
}

export const fetchNextDepartures = async (station: PublicTransportStation): Promise<DepartureModel[]> => {
  const config = stationBoardConfigurations[station]
  const url = `https://transport.opendata.ch/v1/stationboard?id=${config.stationId}&limit=${config.limit}`
  const response = await axios.get(url)
  return response.data.stationboard.map((stationboard: any) => {
    return {
      departure: stationboard.stop.departureTimestamp,
      delay: stationboard.stop.delay,
      to: stationboard.to
    }
  })
}
