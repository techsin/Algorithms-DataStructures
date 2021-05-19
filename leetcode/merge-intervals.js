/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => a[0] === b[0] ? 0 : a[0] < b[0] ? -1 : 1);

    const merged = [];
    let max = -1;
    
    for (let i = 0; i < intervals.length; i++) {
        const interval = intervals[i];
        if (merged.length === 0) {
            merged.push(interval);
            max = interval[1];
            continue;
        }
        
        const cf = interval[0];
        const cl = interval[1];
        
        if (cl > max && cf > max) {
            merged.push(interval);
            max = cl;
        } else if (cl > max && cf <= max) {
            merged[merged.length - 1][1] = cl;
            max = cl;
        }
        

    }
    
    return merged;
};
