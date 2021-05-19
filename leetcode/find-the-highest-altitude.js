/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let max = -Infinity;
    let altitude = 0;
    
    for (let i = 0; i < gain.length; i++) {
        altitude += gain[i];
        max = Math.max(altitude, max, 0);
    }
    
    return max;
};
