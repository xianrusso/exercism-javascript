export const bracketPush = (bbp) => {
	const openBrackets = [...BRACKETS.keys()];
	let stack = [];

	for (const char of bbp) {
		if (openBrackets.includes(char)) {
			stack.push(BRACKETS.get(char));	
		} else if (stack.pop() !== char) {
			return false;
		}
	}

	return stack.length === 0;
}

const BRACKETS = new Map([
	['{', '}'],
	['(', ')'],
	['[', ']'],
]);
