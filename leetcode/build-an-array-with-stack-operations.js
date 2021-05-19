/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (c) {
    return c.reduce(function (a, b) { 
        var d = b - (a.g || 0); 
        a.g = b; 
        do a.push("Push", "Pop"); while (0 < --d); a.pop(); 
        return a 
    }, []);
};
