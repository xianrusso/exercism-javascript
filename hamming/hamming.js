export const compute = (a, b) => {
    let result = 0;

    if (a.length === 0 && b.length === 0) {
        return result;
    } else if (a.length === 0) {
        throw new Error("left strand must not be empty");
    } else if (b.length === 0) {
        throw new Error("right strand must not be empty");
    } else if (a.length !== b.length) {
        throw new Error("left and right strands must be of equal length");
    } 

    for (let i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {
            result++;
        }
    }

    return result;
}