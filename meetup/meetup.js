const WEEKDAYS = Object.freeze('Sun,Mon,Tue,Wed,Thu,Fri,Sat'.split(','))
const weekday = day => WEEKDAYS.indexOf(day.substr(0, 3))

const CONSTRAINTS = {
  teenth: days => days.find(day => day > 12),
  '1st': days => days[0],
  '2nd': days => days[1],
  '3rd': days => days[2],
  '4th': days => days[3],
  '5th': days => days[4],
  last: days => days[days.length - 1],
}
const constrain = (days, type) => CONSTRAINTS[type](days)

export const meetupDay = (year, month, wday, descriptor) => {
  const first = (weekday(wday) - new Date(year, month).getDay() + 7) % 7 + 1
  const length = Math.floor((new Date(year, month + 1, 0).getDate() - first) / 7) + 1
  const day = constrain(Array.from({length}, (_, i) => first + i * 7), descriptor)

  if (!day) throw new Error("Impossible date")

  return new Date(year, month, day);
}