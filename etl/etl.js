'use strict';

export const transform = (old) => {    
    let obj = {};
    for (let i in old) {
        let letters = old[i];
        for (let j in letters) {
            let letter = letters[j].toLowerCase();
            obj[letter] = Number(i);
        }
    }
    return obj;
}