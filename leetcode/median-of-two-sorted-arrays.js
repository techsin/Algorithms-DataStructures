/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let n = nums1.length;
    let m = nums2.length;
    let t = n + m;
    let even = (n + m) % 2 === 0;
    let middle = ~~(t/2);
    let p1 = 0;
    let p2 = 0;
    let prev = null;
    let curr = null;

    for (let i = 0; i <= middle; i++ ) {
        prev = curr ?? null;
        
        if (nums2[p2] === undefined) {
            curr = nums1[p1++];
        } else if (nums1[p1] === undefined) {
            curr = nums2[p2++];
        } else if (nums1[p1] < nums2[p2]) {
            curr = nums1[p1++];
        } else {
            curr = nums2[p2++];
        }
    }

    if (even) return (prev+curr)/2;
    return curr;
};
