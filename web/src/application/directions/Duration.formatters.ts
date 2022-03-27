export const formatDuration = (durationInseconds: number): string => {
  const minutes = Math.ceil(durationInseconds / 60)

  if (minutes < 60) {
    return `${minutes} Minute`
  }

  const hours = Math.floor(minutes / 60)
  const minutesOfHour = minutes % 60

  return `${hours} Stund u ${minutesOfHour} Minute`
}
