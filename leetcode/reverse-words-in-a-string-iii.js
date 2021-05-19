/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
    return s.split(' ').map(x=> x.split('').reverse().join('')).join(' ');
    
    let left;
    let right;
    let newStr = '';
    for (let i = 0; i < s.length; i++) {
        left = left ?? i;
        right = i;

        const char = s[i];
        if (char === ' ') {
            while (right - left > 0) {
                newStr += s[--right];
            }
            newStr += ' ';
            left = null;
        }
        
        if (i === s.length - 1) {
            while (right - left >= 0) {
                newStr += s[right--];
            }
        }
        

    }
    
    return newStr;
};
