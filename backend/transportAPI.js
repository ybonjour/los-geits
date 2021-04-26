import axios from 'axios'

const stationBoardConfigurations = {
  "weissenbuehl": {
    stationId: 8595142,
    limit: 5
  },
  "wander": {
    stationId: 8589993,
    limit: 5
  }
}

export const fetchNextDepartures = async (stationName) => {
  const config = stationBoardConfigurations[stationName]
  const url = `https://transport.opendata.ch/v1/stationboard?id=${config.stationId}&limit=${config.limit}`
  const response = await axios.get(url)
  return response.data.stationboard.map((stationboard) => {
    return {
      departure: stationboard.stop.departureTimestamp,
      delay: stationboard.stop.delay,
      to: stationboard.to
    }
  })
}
