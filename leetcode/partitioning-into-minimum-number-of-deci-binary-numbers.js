/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    let max = Number.NEGATIVE_INFINITY;
    
    for (let i = 0; i < n.length; i++) {
        max = Math.max(Number(n[i]), max);
    }
    
    return max;
};
