import {
  Departure,
  timeToDepartureInMinutes,
} from '@/application/publicTransport/Departure'

export const departureTimeString = (departure: Departure): string => {
  const zeroPadding = (n: number): string => {
    return `${n < 10 ? '0' : ''}${n}`
  }

  const date = new Date(departure.timestamp * 1000)

  return `${zeroPadding(date.getHours())}:${zeroPadding(date.getMinutes())}`
}

export const timeToDepartureFormatted = (
  departure: Departure,
  now: Date
): string => {
  return `${timeToDepartureInMinutes(departure, now)}\``
}
