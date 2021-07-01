import express from 'express'
import {fetchNextDepartures} from './transportAPI.js'
import {fetchBikesAtStation} from './publiBikeAPI.js'
import {getDirections, places, mode} from './directionsAPI.js'

const app = express()

const port = process.env.PORT ? process.env.PORT : 80
const staticDirectory = process.env.STATIC_DIRECTORY

if (staticDirectory) {
  app.use(express.static(staticDirectory))
}

app.get(`/stations/:stationName/bikes`, async (request, response) => {
  const {stationName} = request.params
  response.send(await fetchBikesAtStation(stationName))
})

app.get('/stations/:stationName/departures', async (request, response) => {
  const {stationName} = request.params
  response.send(await fetchNextDepartures(stationName))
})

app.get('/destinations', async (request, response) => {
  const destinations = []
  for (var place in places) {
    if (!places[place].isHome) {
      destinations.push(place)
    }
  }
  response.send({destinations: destinations})
})

app.get('/directions', async (request, response) => {
  const {destination, transportationMode} = request.query
  console.log(`${destination}, ${transportationMode}`)
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

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
