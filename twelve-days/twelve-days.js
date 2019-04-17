const lyrics = {
    "first": `a Partridge in a Pear Tree.`,
    "second": `two Turtle Doves, and a Partridge in a Pear Tree.`,
    "third": `three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.`,
    "fourth": `four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.`,
    "fifth": `five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.`,
    "sixth": `six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.`,
    "seventh": `seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.`,
    "eighth": `eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.`,
    "ninth": `nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.`,
    "tenth": `ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.`,
    "eleventh": `eleven Pipers Piping, ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.`,
    "twelfth": `twelve Drummers Drumming, eleven Pipers Piping, ten Lords-a-Leaping, nine Ladies Dancing, eight Maids-a-Milking, seven Swans-a-Swimming, six Geese-a-Laying, five Gold Rings, four Calling Birds, three French Hens, two Turtle Doves, and a Partridge in a Pear Tree.`,
}

export class TwelveDays {
    verse(lowNum, highNum) {
        if (highNum === undefined) {
            const [key, val] = Object.entries(lyrics)[lowNum - 1];
            return `On the ${key} day of Christmas my true love gave to me: ${val}\n`;
        } else {
            let listOfLyrics = '';
            for (let i = lowNum - 1; i < highNum; i++) {
                const [key, val] = Object.entries(lyrics)[i];
                if (i + 1 != highNum) {
                    listOfLyrics += `On the ${key} day of Christmas my true love gave to me: ${val}\n\n`;
                } else {
                    listOfLyrics += `On the ${key} day of Christmas my true love gave to me: ${val}\n`;
                }
            }
            return listOfLyrics;
        }
    }
    sing() {
        return this.verse(1, 12);
    }
}
