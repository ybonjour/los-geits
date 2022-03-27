export interface TransportationMode {
  type: TransportationModeType
  durationInSeconds: number
}

export enum TransportationModeType {
  WALKING = 'walking',
  BICYCLING = 'bicycling',
  DRIVING = 'driving',
  TRANSIT = 'transit',
}
