/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
    nums.sort((a,b) => b-a);
    let totalSum = nums.reduce(function(sum, i) { return sum+i}, 0);
    
    let arr = [];
    let leftSum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        arr.push(nums[i]);
        leftSum += nums[i];
        totalSum -= nums[i];
        if (leftSum > totalSum) return arr;
    }
};
