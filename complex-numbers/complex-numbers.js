export class ComplexNumber {
	constructor(real, imag) {
		this.real = real;
		this.imag = imag;
	}

	add(num) {
		return new ComplexNumber(this.real + num.real, this.imag + num.imag);
	}

	sub(num) {
		return new ComplexNumber(this.real - num.real, this.imag - num.imag);
	}

	mul(num) {
		return new ComplexNumber(
			(this.real * num.real) - (this.imag * num.imag),
			(this.imag * num.real) + (this.real * num.imag),
		);
	}

	div(num) {
		return new ComplexNumber(
			((this.real * num.real) + (this.imag * num.imag))
			/ ((num.real * num.real) + (num.imag * num.imag)),
			((this.imag * num.real) - (this.real * num.imag))
			/ ((num.real * num.real) + (num.imag * num.imag)),
		);
	}

	get abs() {
		return Math.sqrt((this.real * this.real) + (this.imag * this.imag));
	}

	get conj() {
		return new ComplexNumber(this.real, this.imag !== 0 ? -this.imag : 0);
	}

	get exp() {
		return new ComplexNumber(
			Math.exp(this.real) * Math.cos(this.imag),
			Math.exp(this.real) * Math.sin(this.imag),
		);
	}
}
