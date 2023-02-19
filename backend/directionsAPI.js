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

// See https://developers.google.com/maps/documentation/places/web-service/place-id
export const places = {
  seftigenstrasse52: {
    name: 'Seftigenstrasse 52',
    placeId: 'ChIJMaXCl7Q5jkcR4oWPJHgtDhQ',
    isHome: true,
  },
  bahnhof: {
    name: 'Bahnhof',
    placeId: 'ChIJQfcX1745jkcRK3QdogDUwVU',
    isHome: false,
  },
  laenggasse: {
    name: 'Länggass',
    placeId: 'ChIJDWEotJ85jkcRe8m5VbQYcUE',
    isHome: false,
  },
  zytglogge: {
    name: 'Zytglogge',
    placeId: 'ChIJ2VyJVME5jkcRRrAu5ve6FDI',
    isHome: false,
  },
  wabern: {
    name: 'Wabere',
    placeId: 'ChIJXV0U9i04jkcRtsIWne_5p7s',
    isHome: false,
  },
  buempliz: {
    name: 'Bümpliz',
    placeId: 'ChIJ3z-R-CE5jkcR876gYS_nmn0',
    isHome: false,
  },
  lyssach: {
    name: 'Lyssach',
    placeId: 'ChIJ0YKiUnIujkcRRA6Gm8pAJEk',
    isHome: false,
  },
  ballmoos: {
    name: 'Ballmoos',
    placeId: 'ChIJOwjh87A6jkcRMOYYQIj_AAQ',
    isHome: false,
  }
}

export const getDirectionsUrl = async (origin, destination, mode) => {
  const originId = origin.placeId
  const destinationId = destination.placeId
  const modeName = mode.name
  return `https://www.google.com/maps/embed/v1/directions?key=${apiKey}&origin=place_id:${originId}&destination=place_id:${destinationId}&mode=${modeName}`
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
