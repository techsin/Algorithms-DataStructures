/*

Write a method, power_digit_sum, that takes a base (x) and an exponent (n) as arguments and returns the sum of the digits of x raised to the power of n. It should work for arbitrarily large n (at least up to n = 1000).
For example, power_digit_sum(2, 4) would return 7:
2 to the power of 4 is 16
1 + 6 = 7

*/


//mimic how a human would multiply as Math.pow would give number too big for JS
function multiply(str, i) {
    str = String(str);
    let result = '';
    let carry_over = 0;
    for (let k = str.length - 1; k >= 0; k--) {
        let num = Number(str[k]) * i + carry_over;
        let str_num = String(num);
        if (k == 0) {
            result = str_num.substr(0) + result;
        } else {
            result = str_num.substr(-1) + result;
            if (str_num.length > 1) {
                carry_over = Number(str_num.slice(0, -1));
            } else {
                carry_over = 0;
            }
        }
    }
    return result;
}



function power_digit_sum(n, p) {
    let result = 1;
    for (let i = 1; i < p; i++) {
        if (i == 1) result = n;
        result = multiply(result, n);
    }
    return result.split('').reduce((t, x) => Number(x) + t, 0);
}
