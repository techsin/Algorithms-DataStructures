/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    nums.sort((a,b)=> {
        if (a%2==0 && b%2==0) return a-b;
        if (a%2!==0 && b%2==0) return 1;
        if (a%2==0 && b%2!==0) return -1;
    })
    
    return nums;
};
