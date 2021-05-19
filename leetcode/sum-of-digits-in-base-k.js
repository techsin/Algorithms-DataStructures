/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function(n, k) {
    return changeBase(n, k)[1];
};

function changeBase(n, base) {
    let newNum = 0;
    let q; // remainder
    let i = 0;
    let sum = 0;
    while (n > 0) {
        q = n % base;
        n = ~~(n/base);
        newNum += q * 10**i++;
        sum += q;
    }
    
    return [newNum, sum]
}

/*
Decimal to Other Base System
Steps

Step 1 − Divide the decimal number to be converted by the value of the new base.

Step 2 − Get the remainder from Step 1 as the rightmost digit (least significant digit) of new base number.

Step 3 − Divide the quotient of the previous divide by the new base.

Step 4 − Record the remainder from Step 3 as the next digit (to the left) of the new base number.
*/
