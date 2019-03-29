export const solve = (x, y) => {
    const OUTER = 10;
    const MIDDLE = 5;
    const INNER = 1;
    const isOuter = (num) => (num > MIDDLE && num <= OUTER) ? true : false;
    const isMiddle = (num) => (num > INNER && num <= MIDDLE) ? true : false;
    const isBullseye = (num) => num < INNER ? true : false;

    if (isNaN(x) || isNaN(y)) {
        return null;
    } else if ((x && y) > OUTER) {
        return 0; 
    } else if ((isOuter(x) || isOuter(y)) === true) {
        return 1;
    } else if ((isMiddle(x) || isMiddle(y)) === true) {
        return 5;
    } else if ((isBullseye(x) && isBullseye(y)) === true) {
        return 10;
    }
};
