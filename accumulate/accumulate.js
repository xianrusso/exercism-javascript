export const accumulate = (arr, fn) => {
  let result = [];
  for(const val of arr) {
    result.push(fn(val));
  }
  return result;
}