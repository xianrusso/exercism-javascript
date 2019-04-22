'use strict'
const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

export const value = (arrOfColors) => {
	const i = arrOfColors
							.map(x => COLORS.indexOf(x))
							.join('');					
	return parseInt(i, 10);
}