/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    let data = [];
    for (let i = 0; i < mat.length; i++) {
        const row = mat[i];
        const soldiers = row.reduce((sum, i)=> ((i === 1) ? sum+1 : sum), 0)
        data.push({row: i, soldiers})
    }
    
    data.sort(function(a,b){
        if (a.soldiers === b.soldiers) {
            return a.row - b.row
        } else {
            return a.soldiers - b.soldiers;
        }
    })
        
    return data.map(x => x.row).slice(0, k);
};
