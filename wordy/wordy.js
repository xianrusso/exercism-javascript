const OPERATORS = {
  'plus': (x, y) => +x + y,
  'minus': (x, y) => +x - y,
  'multiplied': (x, y) => +x * y,
  'divided': (x, y) => +x / y,
}

const nope = /^what$|^is$|^by$/i;

export class WordProblem {
  constructor(question) {
    this.tokens = question
      .replace(/[.?]/g, '')
      .split(' ')
      .filter(word => !nope.test(word))
      .reduce((tokens, elem, i) => {
        if (i % 2 === 0) tokens.operands.push(Number(elem));
        else tokens.operators.push(OPERATORS[elem]);
        return tokens;
      }, { operators: [], operands: [] });
  }

  answer() {
    const { operators, operands } = this.tokens;
    if (operands.some(x => isNaN(x))) throw new ArgumentError();
    if (operators.some(x => !x)) throw new ArgumentError();
    return operands.reduce((acc, elem, i) => operators[i - 1](acc, elem));
  }
}

export class ArgumentError extends Error {
  constructor() {
    super();
  }
}