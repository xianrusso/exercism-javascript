export const keep = (arr, fn) => {
  let result = [];
  arr.map(x => fn(x) == true ? result.push(x) : null);
  return result;
}

export const discard = (arr, fn) => {
  let result = [];
  arr.map(x => !fn(x) ? result.push(x) : null);
  return result;
}