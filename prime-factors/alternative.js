export const primeFactors = (number) => {
        let arr = [];
        if (number === 1) {
                return [];
        }
        for (let i = 2; i <= number; i++) {
                while (isPrime(i) && number % i === 0) {
                        arr.push(i);
                        number /= i;
                }
        }
        return arr;

}

function isPrime(num) {
        for (let i = 2; i < Math.sqrt(num); i++) {
                if (num % i === 0) return false;
        }
        return true;
}