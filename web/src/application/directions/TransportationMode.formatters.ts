import { TransportationModeType } from '@/application/directions/TransportationMode'

export const translate = (
  transportationModeType: TransportationModeType
): string => {
  switch (transportationModeType) {
    case TransportationModeType.WALKING:
      return 'Z Fuess'
    case TransportationModeType.BICYCLING:
      return 'Mit em Velo'
    case TransportationModeType.DRIVING:
      return 'Mit em Outo'
    case TransportationModeType.TRANSIT:
      return 'Mit em ÖV'
  }
}

export const icon = (
  transportationModeType: TransportationModeType
): string => {
  switch (transportationModeType) {
    case TransportationModeType.WALKING:
      return 'walking'
    case TransportationModeType.BICYCLING:
      return 'bicycle'
    case TransportationModeType.DRIVING:
      return 'car'
    case TransportationModeType.TRANSIT:
      return 'subway'
  }
}
