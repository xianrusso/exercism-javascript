'use strict';

export class BeerSong {
	static verse(num) {
		if (num !== 0) {
    	return `${(num > 1 ? `${num} bottles` : `${num} bottle`)} of beer on the wall, ${(num > 1 ? `${num} bottles` : `${num} bottle`)} of beer.\nTake ${(num - 1 !== 0 ? "one" : "it")} down and pass it around, ${(num - 1 > 1 ? `${num - 1} bottles` : num - 1 === 0 ? "no more bottles" : `${num - 1} bottle`)} of beer on the wall.\n`;
		} else {
			return `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n`;
		}
	}

	static sing(x, y) {
		[x, y] = arguments;
		x = x || 99;
		y = y || 0;

		const indices = range(x, y).map(x => this.verse(x));
		return indices.join("\n");
	}
}

const range = (end, start) => {
	const length = (end - start) + 1;
	return Array.from({ length }, (_, i) => start + i).sort((a, b) => b - a);
}