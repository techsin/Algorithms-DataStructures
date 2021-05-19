/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let max = 0;
    let depth = 0;
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char == '(') {
            depth++
        } else if (char == ')') {
            depth--;
        }
        max = Math.max(max, depth);
    }
    return max;
};
