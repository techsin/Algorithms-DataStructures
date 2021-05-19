/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let newly_infected = [];
  let total_infected = 0;
  let total = 0;
  let counter = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const val = grid[i][j];
      if (val === 1) {
        total++;
      } else if (val === 2) {
        total++;
        newly_infected.push([i,j]);
        total_infected++;
      }
    }
  }

  while (total_infected < total) {
    if (newly_infected.length === 0 && total_infected < total) {
      return -1;
    }

    let temp = newly_infected;
    newly_infected = [];
    temp.forEach(function (cell) {
      infectAround(cell, grid);
    });
    counter++;
  }

  return counter;

  function infectAround(cell) {
    let [x, y] = cell;
    infect(x, y - 1); //top
    infect(x + 1, y); //right
    infect(x, y + 1); //bottom
    infect(x - 1, y); //left
  }

  function infect(x, y) {
    let val = grid[x] ? grid[x][y] : false;
    if (val == 1) {
      grid[x][y] = 2;
      total_infected++;
      newly_infected.push([x,y]);
    }
  }

};

