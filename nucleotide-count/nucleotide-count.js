export class NucleotideCounts {
  static parse(dna) {
    let a, c, t, g;
    a = c = t = g = 0;
    const arr = dna.split('').sort();
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 'A') {
        a++;
      } else if (arr[i] === 'C') {
        c++;
      } else if (arr[i] === 'G') {
        g++;
      } else if (arr[i] === 'T') {
        t++;
      } else {
        throw new Error("Invalid nucleotide in strand");
      }
    }
    return `${a} ${c} ${g} ${t}`;
  }
}