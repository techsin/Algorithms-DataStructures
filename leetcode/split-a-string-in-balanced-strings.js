/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let counter = 0;
    let balance = 0;
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        switch (char) {
          case 'R':
            balance++;
            break;
          case 'L':
            balance--;
            break;
        }
        
        if (balance === 0) {
            counter++;
        }
    }
    return counter;
};
