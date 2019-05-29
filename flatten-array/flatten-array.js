export class Flattener {
	flatten(nestedArray) {
		let newArr = []
		nestedArray.forEach(x => {
			if (Array.isArray(x)) {
				newArr.push(...this.flatten(x))
			} else {
				newArr.push(x)
			}
		})
		return newArr.filter(x => !(x == null || x == undefined))
	}
}
