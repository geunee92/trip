function formatTime(ms: number) {
  const minute = 60 * 1000
  const hour = 60 * minute
  const day = 24 * hour

  const days = Math.floor(ms / day)

  // 핫딜 종료
  if (days < 0) {
    return ''
  }

  const remainingHours = Math.floor((ms - days * day) / hour)
  const remainingMinutes = Math.floor(
    (ms - days * day - remainingHours * hour) / minute,
  )
  const remainingSeconds = Math.floor(
    (ms - days * day - remainingHours * hour - remainingMinutes * minute) /
      1000,
  )

  const HH = `${remainingHours}`.padStart(2, '0')
  const mm = `${remainingMinutes}`.padStart(2, '0')
  const SS = `${remainingSeconds}`.padStart(2, '0')

  return days > 0 ? `${days}일 ${HH}:${mm}:${SS}` : `${HH}:${mm}:${SS}`
}

export default formatTime
