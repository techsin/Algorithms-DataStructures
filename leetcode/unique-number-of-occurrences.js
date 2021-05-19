/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const hashmap = {};
    const occurences = {};
    
    for (let i of arr) {
        hashmap[i] = hashmap[i] || 0;
        hashmap[i]++;
    }
    
    for (let k in hashmap) {
        if (occurences[hashmap[k]]) return false;
        occurences[hashmap[k]] = true;
    }
    
    return true;
};
