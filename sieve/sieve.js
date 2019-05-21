export const primes = (max) => {
  let nonPrimes = [];
  const list = Array.from(Array(max - 1), (val, i) => i + 2);

  for(let elem of list) {
    if(nonPrimes.includes(elem)) continue;
    for(let multiplier = 2; elem * multiplier <= max; multiplier++) {
      nonPrimes.push(elem * multiplier);
    }
  }
  return list.filter(elem => !nonPrimes.includes(elem));
}