export const secretHandshake = (int) => {
        let bin = +(parseInt(int, 10).toString(2));
        let reverse = false;
        let result = [];

        if (isNaN(int)) throw new Error("Handshake must be a number");

        while (bin) {
                if (bin >= 10000) {
                        reverse = true;
                        bin -= 10000;
                } else if (bin >= 1000) {
                        result.unshift('jump');
                        bin -= 1000;
                } else if (bin >= 100) {
                        result.unshift('close your eyes');
                        bin -= 100;
                } else if (bin >= 10) {
                        result.unshift('double blink');
                        bin -= 10;
                } else if (bin >= 1) {
                        result.unshift('wink');
                        bin -= 1;
                }
        }

        return reverse ? result.reverse() : result;
};
