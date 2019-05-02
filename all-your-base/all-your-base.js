export const convert = (arr, base1, base2) => {

	if (base1 === 1 || base1 <= 0 || !base1 || Math.trunc(base1) !== base1) {
		throw new Error("Wrong input base");
	}

	if (base2 === 1 || base2 <= 0 || !base2 || Math.trunc(base2) !== base2) {
		throw new Error("Wrong output base");
	}

	if (arr.length === 0 || arr.some(num => num < 0) || arr.some(num => num >= base1)) {
		throw new Error("Input has wrong format");
	}

	if (arr[0] === 0) {
		if (arr.length > 1) {
			throw new Error("Input has wrong format");
		}
		return [0];
	}

	const sequence = [...arr].reverse(); 
	const result = [];
	let decimal = sequence.map((num, i) => num * (base1 ** i))
												.reduce((v, num) => v + num, 0);

	while (decimal > 0) {
		result.push(decimal % base2);
		decimal = Math.trunc(decimal / base2);
	}

	return result.reverse();
}
