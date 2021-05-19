/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const hashmap = {};
    let counter = 0;
    
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        if (!hashmap[char]) {
            hashmap[char] = true;
            counter++;
        }
    }
    
    if (counter < 26) return false;
    return true;
};
