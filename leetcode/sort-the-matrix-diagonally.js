/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(arr) {
    let row = arr[0];

    for (let x = 0; x < row.length; x++) {
        sortDiag(x, 0, arr); // sortDiag(x,y);
    }
    
    for (let y = 1; y < arr.length; y++) {
        sortDiag(0, y, arr);
    }

    return arr;
};

function sortDiag(x, y, arr) {
    for (let ix = 0+x, iy = 0+y; isNull(ix, iy, arr); ix++, iy++) {
        for (let jx = ix+1, jy = iy+1; isNull(jx, jy, arr); jx++, jy++) {
            swap(ix,iy, jx, jy, arr);
    }
}
    
function swap(ix, iy, jx, jy, arr) {
    if (arr[iy][ix] > arr[jy][jx]) {
            let temp = arr[iy][ix];
            arr[iy][ix] = arr[jy][jx];
            arr[jy][jx] = temp;
        }
    }
}

function isNull(x,y, arr) {
    let val;
    try {
    let row = arr[y];
        val = row[x];    
    } catch(e) {}
    
    return val ? val : false
    
}
