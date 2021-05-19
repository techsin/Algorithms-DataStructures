/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let islands = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == 1) {
                markRecur(i, j, grid);
                islands++;
            }
        }
    }
    
    return islands;
};

function markRecur(x, y, grid) {
    grid[Number(x)][Number(y)] = 'x';
    if (grid[x-1] && grid[x-1][y] == 1) markRecur(x-1, y, grid);
    if (grid[x+1] && grid[x+1][y] == 1) markRecur(x+1, y, grid);
    if (grid[x][y+1] && grid[x][y+1] == 1) markRecur(x, y+1, grid);
    if (grid[x][y-1] && grid[x][y-1] == 1) markRecur(x, y-1, grid);
}
