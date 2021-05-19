/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let pairs = {};
    const list = ["()", "{}", "[]"];
    
    for (let ele of list) {
        pairs[ele[1]] = ele[0];
    }
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (pairs[char] === undefined) {
            stack.push(char);
        } else {
            let b = stack.pop();
            if (b !== pairs[char]) {
                return false;
            }
        }
        
    }
    
    return stack.length ? false : true;
};
