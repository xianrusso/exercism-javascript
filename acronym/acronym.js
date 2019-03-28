export const parse = (str) => {
    const abr = str.split(/[\s-,_]/);
    let acronym = '';
    for (let i = 0; i < abr.length; i++) {
        acronym += abr[i].charAt(0);
    }
    return acronym.toUpperCase();
};