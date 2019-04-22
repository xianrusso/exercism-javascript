// Updated Solution using hasOwnProperty
export class Words {
    count(str) {
        let words = {};
        str.toLowerCase().trim().split(/\s+/).map(i => {
            words[i] = (words.hasOwnProperty(i) ? words[i] += 1 : 1);
        })
        return words;
    }
}


// Original Solution (add 's' to 'Word')
class Word {
    count(str) {
        let arr = str.toLowerCase().trim().split(/\s+/);
        let words = Object.create(null);
        for (let i = 0; i < arr.length; i++) {
            let word = arr[i];
            if (!words[word]) {
                words[word] = 1;
            } else {
                words[word]++;
            }
        }
        return words;
    }
}