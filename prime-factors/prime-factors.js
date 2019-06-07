export const primeFactors = (num) => {
        let primeArray = [];
        let remaining = num;
        for (let i = 2; i <= remaining; i++) {
                if (remaining === 1) return primeArray;
                while (remaining % i === 0) {
                        primeArray.push(i);
                        remaining /= i;
                }
        }
        return primeArray;
}
