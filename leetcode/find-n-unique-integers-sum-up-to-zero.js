/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let arr = [];
    let sum = 0;
    
    for (let i = 1; i < n; i++){
        arr.push(i);
        sum+=i;
    }
    
    arr.push(-sum);
    return arr;
};
