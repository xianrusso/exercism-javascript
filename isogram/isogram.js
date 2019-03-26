export const isIsogram = (word) => {
    if (word.length === 0) {
        return true;
    }

    word = word.toLowerCase();
    let arr = [];
    let mapping = word.split('').filter(x => {
        if (x.match(/[a-z]/)) {
            arr.push(x);
        };
    })
    let construct = new Set(arr);
    return construct.size === arr.length ? true : false;
}