/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const max = 2147483647;
    const min = -2147483648;
    const sign = (x/Math.abs(x)) || 1;
    const reversed = (Math.abs(x)+'').split('').reverse().join('') * sign;

    if (reversed > max || reversed < min) return 0;
    return reversed;
    
};
