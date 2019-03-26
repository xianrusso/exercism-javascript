export const convert = (num) => {
    let result = '';
    if (num % 3 === 0) {
        result = result + 'Pling';
    }
    if (num % 5 === 0) {
        result = result + 'Plang';
    }
    if (num % 7 === 0) {
        result = result + 'Plong';
    }
    return result === '' ? num.toString() : result;
}