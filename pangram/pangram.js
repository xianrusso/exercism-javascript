export const isPangram = (str) => {
    if (str.length === 0) {
        return false;
    }

    const s = new Set(
                    str.split('')
                       .filter(x => x.match(/[A-Za-z]/))
                       .map(x => x.toUpperCase()));

    return s.size === 26;
};