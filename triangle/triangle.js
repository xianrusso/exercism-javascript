'use strict'

export class Triangle {
	constructor(...sides) {
		this.sides = sides;
	}
	
	kind() {
		
		const [a, b, c] = this.sides;
		this.validate(a, b, c);
		
		if (a === b && b === c && c === b) {
			return 'equilateral'
		} else if (a === b || b === c || c === a) {
			return 'isosceles';
		} else {
			return 'scalene';
		}	
	}

	validate(a, b, c) {
		for (let i = 0; i < 3; i++) {
			if (this.sides[i] <= 0) {
				throw Error;
			} 
		}
		if (a + b < c || b + c < a || c + a < b) {
			throw Error;
		}	
	} 
}
	