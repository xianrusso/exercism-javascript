export const at = (hour, min = 0) => {
  const format = n => n < 10 ? `0${n}` : n

  function clock(h, m) {
    const date = new Date(0, 0, 0, h, m)
    return `${format(date.getHours())}:${format(date.getMinutes())}`
  }

  return {
    toString: () => clock(hour, min),
    plus: n => clock(hour, min + n),
    minus: n => clock(hour, min - n),
    equals: (c) => clock(hour, min) === c.toString()
  }
}
