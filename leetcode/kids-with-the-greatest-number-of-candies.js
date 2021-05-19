/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = -1;
    for (let i = 0; i < candies.length; i++) {
        max = Math.max(max, candies[i]);
    }
    
    return candies.map(c => c+extraCandies >= max)
};
