/**
 * @param {string[]} words
 * @return {number}
 */
    const dict = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

const alphas = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v', 'w', 'x', 'y', 'z'];
const alphamap = {};
    
for (let i = 0; i < alphas.length; i++) {
    alphamap[alphas[i]] = dict[alphas[i].charCodeAt(0) - 97];
}

var uniqueMorseRepresentations = function(words) {
    const set = new Set();
    
    for (let i = 0; i < words.length; i++) {
        let morse = '';
        
        for (let j = 0; j < words[i].length; j++) {
            morse += alphamap[words[i][j]];
        }
        
        set.add(morse);
    }
    
    return set.size;
};
