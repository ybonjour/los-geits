import { Bike, BikeType } from './Bike'

export const batteryLevel = (bike: Bike): string => {
  if (bike.type !== BikeType.EBIKE) {
    return ''
  }
  return `(${bike.batteryLevel}% Battery)`
}
