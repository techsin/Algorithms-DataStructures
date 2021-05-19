/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let result = [];
    let sorted = nums.map(function(n,i) {return {n,i}});
    sorted.sort((a,b)=> a.n-b.n);

    let sameNums = 0;
    let prevNum = null;


    for (let i = 0; i< sorted.length; i++) {
        const num = sorted[i].n;
        if (num === prevNum) {
            sameNums++;
            result[sorted[i].i] = (i-sameNums);
        } else {
            prevNum = num;
            sameNums = 0;
            result[sorted[i].i] = i;
        }
    }
    return result;
};
