import express from 'express'
import {fetchNextDepartures} from './transportAPI.js'
import {fetchBikesAtStation} from './publiBikeAPI.js'
import {getDirections, getDirectionsUrl, mode, places} from './directionsAPI.js'

const app = express()

const port = process.env.PORT ? process.env.PORT : 80
const staticDirectory = process.env.STATIC_DIRECTORY

app.get(`/api/stations/:stationName/bikes`, async (request, response) => {
  const {stationName} = request.params
  response.send(await fetchBikesAtStation(stationName))
})

app.get('/api/stations/:stationName/departures', async (request, response) => {
  const {stationName} = request.params
  response.send(await fetchNextDepartures(stationName))
})

app.get('/api/destinations', async (request, response) => {
  const destinations = Object.keys(places)
    .filter((place) => !places[place].isHome)
    .map((place) => {
      return {
        identifier: place,
        name: places[place].name
      }
    })
  response.send({destinations: destinations})
})

app.get('/api/directions', async (request, response) => {
  const {destination, transportationMode} = request.query
  if (!destination || !(places[destination])) {
    response.sendStatus(400)
    return
  }

  if (!transportationMode || !(mode[transportationMode])) {
    response.sendStatus(400)
    return
  }

  response.send(await getDirections(
    places.seftigenstrasse52,
    places[destination],
    mode[transportationMode]
  ))
})

app.get('/api/directions/url', async (request, response) => {
  const {destination, transportationMode} = request.query
  if (!destination || !(places[destination])) {
    response.sendStatus(400)
    return
  }

  if (!transportationMode || !(mode[transportationMode])) {
    response.sendStatus(400)
    return
  }

  response.send({
    mapsUrl: await getDirectionsUrl(
      places.seftigenstrasse52,
      places[destination],
      mode[transportationMode]
    )
  })
})

if (staticDirectory) {
  app.use(express.static(staticDirectory))
  app.get('*', (req, res) => {
    res.sendFile(`${staticDirectory}/index.html`)
  })
}

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
