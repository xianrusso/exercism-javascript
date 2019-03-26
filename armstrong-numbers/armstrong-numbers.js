export const validate = (num) => {
    if (num.length === 0) {
        return true;
    }
    let arr = num.toString().split('');
    let mapping = arr.map(n => (parseInt(n, 10)));
    return mapping.reduce((acc, curr) => acc + (curr ** mapping.length), 0) === num ? true : false;
}