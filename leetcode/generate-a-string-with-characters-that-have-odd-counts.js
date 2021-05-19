/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    let a = n % 2 == 1 ? n : n - 1;
    let b = n % 2 == 1 ? 0 : 1;
    
    return 'x'.repeat(a)+'y'.repeat(b);
};
