export class Triangle {
  constructor(num) {
    this.num = num;
    this.rows = [];

    let row = [];
    for (let i = 0; i < this.num; i++) {
      row = [];
      for (let j = 0; j <= i; j++) {
        let val = 1;
        if (j !== 0 && j!== i) {
          val = this.rows[i-1][j-1] + this.rows[i-1][j];
        }
        row = [...row, val];
      }
      this.rows = [...this.rows, row];
    }
    this.lastRow = row;
  }
}
