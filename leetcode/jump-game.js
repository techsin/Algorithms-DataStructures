/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canJump = function(nums) {
    const hash = {};
    return reachesEnd(0, nums, hash);
};

function reachesEnd(i, arr, hash) {
    if (i === arr.length - 1) return true;
    if (i > arr.length -1 ) return false;
    
    let maximum = arr[i];

//     for(let j = 1; j <= maximum; j++) {
//         let result;
//         let jumpIndex = i+j;
        
//         if (jumpIndex > arr.length) {
//             return false;
//         }
        
//         if (typeof hash[jumpIndex] !== 'undefined') {
//             result = hash[jumpIndex] 
//         } else {
//             result = reachesEnd(jumpIndex, arr, hash); 
//             hash[jumpIndex] = result;
//         }
        
//         if (result) return true;
//     }
    
    for(let j = maximum; j >= 1; j--) {
        let result;
        let jumpIndex = i+j;
        
        if (typeof hash[jumpIndex] !== 'undefined') {
            result = hash[jumpIndex] 
        } else {
            result = reachesEnd(jumpIndex, arr, hash); 
            hash[jumpIndex] = result;
        }
        
        if (result) return true;
    }
    
    
    return false;
}
