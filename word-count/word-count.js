export class Words {
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