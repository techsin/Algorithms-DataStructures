/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    const results = [];
    
    for (let i = left; i <= right; i++) {
        let digits = (i+'').split('').map(n=> parseInt(n));
        
        if (digits.some(d => i%d !== 0 )) {
            continue;
        } else {
            results.push(i);
        }
        
    }
    
    return results;
};
