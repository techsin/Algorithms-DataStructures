/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    return nums.reduce((sum, n)=> (n+'').length%2==0?sum+1: sum, 0)
};
