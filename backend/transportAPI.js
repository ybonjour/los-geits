import axios from 'axios'

const stationBoardConfigurations = {
  'weissenbuehl': {
    stationId: 8595142,
    limit: 5,
    firstIgnoredMinutes: 2,
    estimatedConnectionsPerMinute: 1
  },
  'wander': {
    stationId: 8589993,
    limit: 5,
    firstIgnoredMinutes: 5,
    estimatedConnectionsPerMinute: 3
  }
}

export const fetchNextDepartures = async (stationName) => {
  const config = stationBoardConfigurations[stationName]
  const limit = config.firstIgnoredMinutes * config.estimatedConnectionsPerMinute + config.limit
  const nowTimestamp = new Date().valueOf() / 1000

  const url = `https://transport.opendata.ch/v1/stationboard?id=${config.stationId}&limit=${limit}`
  const response = await axios.get(url)
  return response.data.stationboard
    .filter((stationboard) => {
      return nowTimestamp + config.firstIgnoredMinutes * 60 <= stationboard.stop.departureTimestamp
    })
    .slice(0, config.limit)
    .map((stationboard) => {
      return {
        timestamp: stationboard.stop.departureTimestamp,
        delay: stationboard.stop.delay,
        to: stationboard.to
      }
    })
}
