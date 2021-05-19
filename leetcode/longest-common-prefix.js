/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let matchingIndex = null;
    
    for (let i = 1; i < strs.length; i++) {
        const str = strs[i];
        const prevstr = strs[i-1];
        const minlen = Math.min(str.length, prevstr.length);
        
        if (matchingIndex === null) {
            matchingIndex = -1;
            while (
                str[matchingIndex+1] === prevstr[matchingIndex+1] &&
                (matchingIndex+1) < minlen
            ) {
                matchingIndex++
            }
        }
        

        while (str[matchingIndex] !== prevstr[matchingIndex]) {
            matchingIndex--;
            if (matchingIndex < 0) break;
        }
        if (matchingIndex < 0) break;
    }
    
    
    return strs[0].substring(0, matchingIndex+1);
};
