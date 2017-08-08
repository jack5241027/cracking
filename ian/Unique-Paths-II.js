/*
  Follow up for "Unique Paths":

  Now consider if some obstacles are added to the grids. How many unique paths would there be?

  An obstacle and empty space is marked as 1 and 0 respectively in the grid.

  For example,
  There is one obstacle in the middle of a 3x3 grid as illustrated below.

  [
    [0,0,0],
    [0,1,0],
    [0,0,0]
  ]
  The total number of unique paths is 2.

  Note: m and n will be at most 100.
* /

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

// start [0, 0]
// end [m-1, n-1]


// Traverse (?)
let times = 0;
const pos = [0, 0];

const toRight = function toRight([x, y], ary) {
  if (ary[x + 1, y] === 0) {
    pos[x] = pos[x] + 1;
    return true;
  }
  return false
};

const toBottom = function toBottom([x, y], ary) {
  if (ary[x, y + 1] === 0) {
    pos[y] = pos[y] + 1;
    return true;
  }
  return false
};
// DFS - 所有路徑都走過一遍
const go = function go(ary) {
  if (toRight(pos, ary)) {
    go();
  } else {
    if (toBottom(pos, ary)) {
      go();
    } else {
      if (pos[x + 1] === undefined && pos[y + 1] === undefined) {
        times = times + 1;
      }
    }
  }
};

const uniquePathsWithObstacles = (obstacleGrid) => {

};

