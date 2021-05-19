/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let result;
    for (let i = 0; i < n; i++) {
        let n = start + 2*i;
        if (result === undefined) {
            result = n;
        } else {
            result = result ^ n;
        }
    }
    return result;
};
