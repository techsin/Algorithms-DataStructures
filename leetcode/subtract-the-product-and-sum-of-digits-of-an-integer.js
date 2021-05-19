/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let sum = 0;
    let product = 1;
    let num = n;
    
    let digits = 0;
    let d;

    do {
        d = Math.floor(n%(10**(digits+1))/(10**digits));
        sum +=d;
        product *=d;
        digits++;
    } while(n/10**digits > 1);
    return product - sum;
};
