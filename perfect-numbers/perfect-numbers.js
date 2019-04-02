export const classify = (num) => {
    if (num === 0 || Math.sign(num) === -1) {
        throw Error("Classification is only possible for natural numbers.");
    } else if (num === 1) {
        return 'deficient';
    }
    let arr = [];
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            arr.push(i);
        }
    }
    const aliquot = arr.reduce((acc, curr) => acc + curr);
    return aliquot === num ? 'perfect'
         : aliquot > num ? 'abundant'
         : aliquot < num ? 'deficient'
         : Error("Classification is only possible for natural numbers.");
}