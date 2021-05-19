/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    const sorted = [...heights].sort((a,b)=> a-b);
    let counter = 0;
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== sorted[i]) counter++;
    }
    
    return counter;
};
