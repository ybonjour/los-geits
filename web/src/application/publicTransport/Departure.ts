export interface Departure {
  timestamp: number
  delay: string | null
  to: string
}

export const timeToDepartureInMinutes = (
  departure: Departure,
  now: Date
): number => {
  const differenceMs = departure.timestamp - now.valueOf() / 1000
  return Math.floor(differenceMs / 60)
}
