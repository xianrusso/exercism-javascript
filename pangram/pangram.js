export const isPangram = (str) => {
    if (str.length === 0) {
        return false;
    }

    let pangram = [];

    let mapping = str.split('').map(x => {
        if (x.match(/[A-Za-z]/)) {
            pangram.push(x);
        }
    });

    const s = new Set(pangram.map(x => x.toUpperCase()));
    return s.size === 26 ? true : false;
};