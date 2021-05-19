/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = {};

    for (let i = 0; i < nums.length; i++ ) {
        let ele = nums[i];
        map[ele] = map[ele] || 0;
        map[ele]++;
    }
    
    let eles = Object.keys(map);
    
    eles.sort(function(a,b){
        return map[b] - map[a];
    });
    
    return eles.slice(0, k);
};
