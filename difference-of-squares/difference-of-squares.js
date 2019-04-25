export class Squares {
  constructor(val) {
    this.val = val;
  }

  get squareOfSum() {
    let arr = [];
    for (let i = 1; i <= this.val; i++) {
      arr.push(i);
    }
    const sum = arr.reduce((a, b) => a + b);
    return Math.pow(sum, 2);
  }

  get sumOfSquares() {
    let arr = [];
    for (let i = 1; i <= this.val; i++) {
      arr.push(Math.pow(i, 2));
    }
    return arr.reduce((a, b) => a + b);
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}