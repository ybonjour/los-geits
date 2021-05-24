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
    placeId: 'ChIJMaXCl7Q5jkcR4oWPJHgtDhQ'
  },
  bahnhof: {
    placeId: 'ChIJQfcX1745jkcRK3QdogDUwVU'
  }
}

export const getDirections = async (from, to, mode) => {
  // TODO: uri encoding of parameters
  const origin = from.placeId
  const destination = to.placeId
  const url = `https://maps.googleapis.com/maps/api/directions/json?origin=place_id:${origin}&destination=place_id:${destination}&mode=${mode.name}&key=${apiKey}`

  const response = await axios.get(url)

  const durations =  response.data.routes.flatMap((route) => route.legs.map((leg) => leg.duration.value))

  const sum = durations.reduce((sum, duration) => sum + duration, 0)

  return {
    durationInSeconds: sum
  }
}
