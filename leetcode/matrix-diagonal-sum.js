/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum = 0;
    let ax = 0;
    let bx = mat.length - 1;
    for (let i = 0; i < mat.length; i++) {
        sum += mat[i][ax] + mat[i][bx]
        bx = mat.length - 2 - i;
        ax = i+1;
    }
    
    if (mat.length % 2 !== 0) {
        let middle = Math.floor(mat.length/2);
        sum -= mat[middle][middle];
    }
    
    return sum;
};

