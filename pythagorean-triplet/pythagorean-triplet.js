export class Triplet {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  sum() {
    return this.a + this.b + this.c;
  }

  product() {
    return this.a * this.b * this.c;
  }

  isPythagorean() {
    return Math.pow(this.a, 2) + Math.pow(this.b, 2) === Math.pow(this.c, 2) ? true : false;
  }

  static where(query) {
    const min = query.minFactor|=1;
    const max = query.maxFactor || 100;
    const sum = query.sum;
    const triplets = [];
    for (let a = min; a <= max; a++) {
      for (let b = a; b <= max; b++) {
        for (let c = b; c <= max; c++) {
          let triplet = new Triplet(a, b, c);
          if (triplet.isPythagorean() && (!sum || triplet.sum() == sum)) {
            triplets.push(triplet);
          }
        }
      }
    }
    return triplets;
  }
} 