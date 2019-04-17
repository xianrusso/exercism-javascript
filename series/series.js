export class Series {
	constructor(str) {
		this.digits = Array.from(str).map(n => parseFloat(n, 10));
	}
	slices(num) {
		if (this.digits.length < num) { throw new Error("Slice size is too big."); }
		let result = [];
		for(let i = 0; i !== this.digits.length; i++) {
			if (i + num <= this.digits.length) {
				result.push(this.digits.slice(i, i + num));
			}
		}
		return result;
	}
}
