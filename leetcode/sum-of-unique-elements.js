/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let hashmap = {};
    let sum = 0;
    nums.forEach(function(num){
        if (hashmap[num] === undefined) {
            hashmap[num] = 1;
            sum += num;
        } else if (hashmap[num] === 1) {
            hashmap[num] = 2;
            sum -= num;
        }
    });
    return sum;
};
