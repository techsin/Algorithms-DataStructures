/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let pairs = 0;
    nums.sort((a,b)=> a-b);
    
    for (let i = 0; i < nums.length - 1; i++){
        let j = i+1;
        while(nums[i] === nums[j]) {
            pairs++;
            j++;
        }
    }
    return pairs;
};
