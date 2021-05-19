/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let pop = 0;
    let lastn = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (lastn === nums[i]) {
            nums[i] = null;
        } else {
            lastn = nums[i];
        }
    }
    
    let moveby = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === null) {
            moveby++;
        } else {
            nums[i - moveby] = nums[i];
        }
    }
    
    while(moveby--) {
        nums.pop();
    }
};
