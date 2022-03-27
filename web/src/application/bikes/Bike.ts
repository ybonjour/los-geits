export interface Bike {
  name: string
  type: BikeType
  batteryLevel: number | null
}

export enum BikeType {
  BIKE = 'BIKE',
  EBIKE = 'EBIKE',
}
