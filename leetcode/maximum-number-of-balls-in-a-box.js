/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit, highLimit) {
    const freq = {};
    let max = -1;

    for (let i = lowLimit; i <= highLimit; i++) {
        // let power = 0;
        // let digit;
        // let sum = 0;
        
        // do {
        //     digit = Math.floor(i%(10**(power+1))/(10**power));
        //     sum += digit;
        //     power++;
        // } while(i/10**power >= 1);
        
        sum = (i+'').split('').reduce((sum, i)=> sum + parseInt(i), 0);
        freq[sum] = freq[sum]  || 0
        max = Math.max(++freq[sum], max);
    }
    
    return max;
};
