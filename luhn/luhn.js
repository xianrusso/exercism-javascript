const IGNORED = /[^0-9_\s]+/g;

export class Luhn {
    constructor(number) {
        this.number = number;
    }

    get valid() {
        if (this.number.length <= 1 || IGNORED.test(this.number) || /[a-zA-Z]/.test(this.number)) return false;     // IGNORED allows '059a' to pass for some reason.
        if (this.number.replace(/\D/g, '').length <= 1) return false;

        let arr = [...this.number.replace(/\D/g, '')].map(num => +(num));
        let reversed = arr.reverse();
        let result = reversed;
        let computedElems = [];
        let count = 0;

        for (let i = 1; i < reversed.length; i+=2) {
            computedElems.push(reversed[i]);
        }

        computedElems = computedElems.map(num => num * 2 >= 10 ? num * 2 - 9 : num * 2);
       
        for (let i = 1; i < result.length; i+=2) {
            result[i] = computedElems[count];
            count++;
        }

        result = result.reverse().reduce((acc, curr) => acc + curr);
        return result % 10 === 0;
    }
}
