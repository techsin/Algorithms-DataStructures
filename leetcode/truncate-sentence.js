/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let counter = 0;
    let str = '';
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === ' ') {
            counter++;
        }
        
        if (counter === k) {
            return str;
        }
        
        str += char;
    }
    
    return str
};
