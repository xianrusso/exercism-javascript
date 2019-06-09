const ALPHA = 'abcdefghijklmnopqrstuvwxyz';

function generateKey() {
        return Array(...Array(100))
                .map(() => ALPHA[Math.floor(Math.random() * ALPHA.length)])
                .join('');
}

const mod = (x, y) => ((x % y) + y) % y; 

export class Cipher {
        constructor(key) {
                if (typeof key === 'undefined') {
                        this.key = generateKey();
                } else if (key.length === 0 || key.match(/[^a-z]/, 'g')) {
                        throw new Error('Bad key');
                } else {
                        this.key = key;
                }
        }

        process(text, direction) {
                const key = this.key;
                return [...text].reduce((reduced, letter, i) => {
                        const offset = direction * ALPHA.indexOf(key[mod(i, key.length)]);
                        return reduced + ALPHA[mod(ALPHA.indexOf(letter) + offset, ALPHA.length)];
                }, '');
        }

        encode(text) {
                return this.process(text, 1);
        }

        decode(text) {
                return this.process(text, -1);
        }
}