/**
 * @param {string} s
 * @return {string[]}
 */
var printVertically = function(s) {
    let arr = [];
    
    let counter = 0;
    let resets = 0;
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === ' ') {
            if (counter !== 0) {
                counter = 0;
                resets++;
            }
            
            continue;
        }
        
        arr[counter] = arr[counter] || '';
        let padding = Math.max(resets - arr[counter].length, 0);
        arr[counter] += ' '.repeat(padding) + char;
        counter++;
    }
    
    return arr;
    
};
