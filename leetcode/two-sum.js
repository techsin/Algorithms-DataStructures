/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    let h = {};
    for (let i = 0; i < nums.length; i++) {
        let ele = nums[i];
        let remainder = target - ele;
        if (typeof h[remainder] !== 'undefined') {
            return [h[remainder], i];
        }
        h[ele] = i;
    }
};

// var twoSum = function(nums, target) {
//     nums.sort((a,b)=> a-b);
//     for (let i = 0; i < nums.length; i++) {
//         let e = nums[i];
//         let t = target - e;
//         let r = binarySearch(nums, t, 0, nums.length-1);
//         if (r > -1) {
//             return [i, r];
//         }
//     }

// };

// function binarySearch(arr, n, l, r) {
//     if (r >= l) {
//         const mid = l + ~~((r-l)/2);
//         const ele = arr[mid];
        
//         if (ele === n) return mid;
//         if (ele > n) return binarySearch(arr, n, l, mid -1);
//         return binarySearch(arr, n, mid + 1, r);
//     }
//     return -1;
// }
