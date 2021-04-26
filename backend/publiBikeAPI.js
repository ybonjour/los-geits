import axios from 'axios'

const publiBikeStationIds = {
  "wander": 300,
  "beaumont": 480
}

export const fetchBikesAtStation = async (stationName) => {
  const stationId = publiBikeStationIds[stationName]
  const response = await axios.get(`https://api.publibike.ch/v1/public/stations/${stationId}`)
  return response.data.vehicles.map((vehicle) => {
    return {
      name: vehicle.name,
      type: vehicle.ebike_battery_level == null ? 'BIKE' : 'EBIKE',
      batteryLevel: vehicle.ebike_battery_level
    }
  })
}
