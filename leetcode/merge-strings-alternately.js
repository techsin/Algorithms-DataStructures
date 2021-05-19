/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let str = '';
    let max = Math.max(word1.length, word2.length);
    let c1;
    let c2;
    
    for (let i = 0; i < max; i++) {
        c1 = word1[i];
        c2 = word2[i];
        
        if (!c1) {
            str += word2.slice(i);
            break;
        }
        
        if (!c2) {
            str += word1.slice(i);
            break;
        }
        
        str += c1;
        str += c2;
    }
    
    return str;
    
};
