'use strict';

const toColumns = (rows) => {
    let columns = [];
    rows.forEach(row => {
        row.forEach((elem, index) => {
            columns[index] = columns[index] || [];
            columns[index].push(elem);
        })
    })
    return columns;
}

const toRows = (numbers) => {
    return numbers
            .split('\n')
            .map(x => x.split(' ')
            .map(char => parseInt(char, 10)));
}

export class Matrix {
    constructor(numbers) {
        this.rows = toRows(numbers);
        this.columns = toColumns(this.rows);
    }
}