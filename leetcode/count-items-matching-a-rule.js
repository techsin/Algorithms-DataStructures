/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    const keysIndex = {
        type: 0,
        color: 1,
        name: 2
    };
    
    return items.reduce(function(counter, item) {
        if (item[keysIndex[ruleKey]] === ruleValue) {
            return counter + 1;
        } else {
            return counter;
        }
    }, 0)
};
