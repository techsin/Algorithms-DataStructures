/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const combos = [];
    const hash = {};
    
    candidates.sort((a,b) => a-b);
    
    candidates.forEach(function(ele, i){
        recursive(i, [i], ele)
    });

    function recursive(i, list, sum) {
        if (sum === target) {
            let vals = list.map(x=> candidates[x]);
            if (!hash[vals]) {
                combos.push(vals);
                hash[vals] = 1;
            } 
            return;

        } else if (sum > target) {
            return;
        }
        
        for (let j = i+1; j < candidates.length; j++) {
            recursive(j, [...list, j], sum + candidates[j]);
        }
    }
    
    return combos;
};
