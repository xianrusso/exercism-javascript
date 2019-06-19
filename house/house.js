const RHYME = [
    "This is the horse and the hound and the horn",
    "that belonged to the farmer sowing his corn",
    "that kept the rooster that crowed in the morn",
    "that woke the priest all shaven and shorn",
    "that married the man all tattered and torn",
    "that kissed the maiden all forlorn",
    "that milked the cow with the crumpled horn",
    "that tossed the dog",
    "that worried the cat",
    "that killed the rat",
    "that ate the malt",
    "that lay in the house that Jack built."
]

function flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
}

export class House {
    static verse(num) {
        const v = RHYME.slice(12 - num);
        const start = "This is the";

        if (num === 1) return ["This is the house that Jack built."];
        if (num < 6) {
            const end = v[0].split(' ').slice(-1).join('');
            v[0] = `${start} ${end}`;
        }
        if (num >= 6) {
            const end = v[0].split(' ').slice(v[0].split(' ').indexOf('the') + 1).join(' ');
            v[0] = `${start} ${end}`;
        }

        return v;
    }

    static verses(f, l) {
        let result = [];

        for (let i = f; i <= l; i++) {
            result.push(this.verse(i), '');
        }
        result.pop();
        
        return flatten(result);
    }
}