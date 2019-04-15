import BigInt from './lib/big-integer'

export class Grains {
	square(n) {
		return BigInt(2)
			.pow(n - 1)
			.toString();
	}
	total() {
		return BigInt(2)
			.pow(64)
			.subtract(1)
			.toString();
	}
}
