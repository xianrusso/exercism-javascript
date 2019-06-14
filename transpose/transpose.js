export const transpose = arr => arr
        .reduce(
                (acc, curr, index) => {
                        const newAcc = acc;
                        const a = arr.slice(index, arr.length);
                        const length = Math.max(...a.map(x => x.length));
                        Array.from(Array(length))
                                .map((n, i) => curr[i] || ' ')
                                .forEach((val, i) => {
                                        if (newAcc[i]) {
                                                newAcc[i][index] = val || '';
                                        } else {
                                                newAcc[i] = [];
                                                newAcc[i][index] = val || '';
                                        }
                                });
                        return newAcc;
                }, [],
        )
        .map(s => s.join(''));