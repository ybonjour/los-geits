import axios from 'axios'

const apiKey = process.env['DIRECTIONS_API_KEY']

// See https://developers.google.com/maps/documentation/directions/get-directions
export const mode = {
  walking: {
    name: 'walking'
  },
  bicycling: {
    name: 'bicycling'
  },
  transit: {
    name: 'transit'
  },
  driving: {
    name: 'driving'
  }
}

export const places = {
  seftigenstrasse52: {
    placeId: 'ChIJMaXCl7Q5jkcR4oWPJHgtDhQ',
    isHome: true,
  },
  bahnhof: {
    placeId: 'ChIJQfcX1745jkcRK3QdogDUwVU',
    isHome: false,
  }
}

export const getDirections = async (origin, destination, mode) => {
  const originId = origin.placeId
  const destinationId = destination.placeId
  const modeName = mode.name
  const url = `https://maps.googleapis.com/maps/api/directions/json?origin=place_id:${originId}&destination=place_id:${destinationId}&mode=${modeName}&key=${apiKey}`

  const response = await axios.get(url)

  const durations =  response.data.routes.flatMap((route) => route.legs.map((leg) => leg.duration.value))

  const sum = durations.reduce((sum, duration) => sum + duration, 0)

  return {
    durationInSeconds: sum
  }
}
