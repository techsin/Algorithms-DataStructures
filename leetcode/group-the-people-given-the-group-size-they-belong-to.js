/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    let hashMap = {};
    let output = [];
    
    for (let i = 0; i < groupSizes.length; i++) {
        let group = groupSizes[i];
        
        if (hashMap[group] === undefined) {
            hashMap[group] = [i];
        } else if (hashMap[group].length < group) {
            hashMap[group].push(i);
        }
        
        if (hashMap[group].length === group) {
            output.push(hashMap[group]);
            hashMap[group] = undefined;
        }
    }
    
    return output;
};
