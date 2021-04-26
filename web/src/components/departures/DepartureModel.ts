export interface DepartureModel {
  departure: number,
  delay: string | null,
  to: string
}

export const departureInMinutes = (
  departure: DepartureModel,
  now: Date
): number => {
  const differenceMs = departure.departure - (now.valueOf() / 1000)
  return Math.floor(differenceMs / 60)
}

export const timeString = (
  departure: DepartureModel
): string => {
  const zeroPadding = (n: number): string => {
    return `${n < 10 ? '0' : ''}${n}`
  }

  const date = new Date(departure.departure * 1000)

  return `${zeroPadding(date.getHours())}:${zeroPadding(date.getMinutes())}`
}
