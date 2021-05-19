/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    nums.sort((a,b)=> b-a);
    let a = nums[0];
    let b = nums[1];
    return (a * b - b - a + 1)
};
