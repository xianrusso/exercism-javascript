const ALLERGENS = [
	'eggs',
	'peanuts',
	'shellfish',
	'strawberries',
	'tomatoes',
	'chocolate',
	'pollen',
	'cats'
]

export class Allergies {
	constructor(number) {
		this.num = number.toString(2).split('').reverse().slice(0, ALLERGENS.length)
		this._list = ALLERGENS.filter((allergen, i) => this.num[i] == 1)
	}

	list() {
		return this._list	
	}

	num() {
		return this.num
	}

	allergicTo(allergen) {
		return (this._list.indexOf(allergen) != -1)
	}
}
