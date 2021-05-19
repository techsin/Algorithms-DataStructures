/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
   const map = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};
    
    let str =  s.split('');
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        if (map[str[i]] < map[str[i+1]]) sum -= map[str[i]] * 2;
        sum += map[str[i]];
    }
    
    return sum;
};

/*
When the symbol has a greater value than the symbol after it, add the symbols, such as: XI = X + I = 10 + 1 = 11. When the symbol has a lesser value than the symbol after it, subtract the symbol with the lesser value from the symbol with the greater value
*/ 
