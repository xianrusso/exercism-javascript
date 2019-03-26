export const toRoman = (num) => {
    if (num > 3000) {
        throw Error('This challenge only accepts values that are smaller than 3,000.');
    }
    let result = '';
    let remaining = num;
    const numerals = [
        { arabic: 1000, roman: 'M' },
        { arabic: 900, roman: 'CM' },
        { arabic: 500, roman: 'D' },
        { arabic: 400, roman: 'CD' },
        { arabic: 100, roman: 'C' },
        { arabic: 90, roman: 'XC' },
        { arabic: 50, roman: 'L' },
        { arabic: 40, roman: 'XL' },
        { arabic: 10, roman: 'X' },
        { arabic: 9, roman: 'IX' },
        { arabic: 5, roman: 'V' },
        { arabic: 4, roman: 'IV' },
        { arabic: 1, roman: 'I' },
    ];

    numerals.forEach(x => {
        while(remaining >= x.arabic) {
            result += x.roman;
            remaining -= x.arabic;
        }
    });
    return result;
};