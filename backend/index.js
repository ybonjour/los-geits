import express from 'express'
import {fetchNextDepartures} from './transportAPI.js'

const app = express()

const port = process.env.PORT ? process.env.PORT : 80;
const staticDirectory = process.env.STATIC_DIRECTORY

if (staticDirectory) {
  app.use(express.static(staticDirectory))
}


app.get('/stations/:stationName/departures', async (request, response) => {
  const { stationName } = request.params
  response.send(await fetchNextDepartures(stationName))
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
