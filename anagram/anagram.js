'use strict';

export class Anagram {
    constructor(word) {
        this.word = word;
    }

    isIdentical(x, y) {
        return x.toLowerCase() !== y.toLowerCase() ? true : false;
    }

    matches(arrOfWords) {
        let letters = this.word.toLowerCase().split('').sort().join('').trim();
        return arrOfWords.filter(x => x.toLowerCase().split('').sort().join('').trim() === letters && this.isIdentical(x, this.word));
    }
}