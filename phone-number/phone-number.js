export class PhoneNumber {
	constructor(phone) {
		this.phone = phone;
	}

	number() {
		let cell = this.phone.split('').filter(int => int.match(/([0-9]+)/g));
		if (cell.length === 11 && cell[0] === '1') cell.shift();
		return cell.length === 10 && cell[0] >= 2 && cell[3] >= 2 ? cell.join('') : null;
	}
}