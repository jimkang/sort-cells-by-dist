var pluck = require('lodash.pluck');

function sortCellsByDist(origin, cells, xProp = 'col', yProp = 'row') {
  var indexedDistances = cells.map(getDistanceFromOriginAndIndex);
  var sortedIndexedDistances = indexedDistances.sort(compareDist);
  // console.log('sortedIndexedDistances', sortedIndexedDistances);
  return pluck(sortedIndexedDistances, 'index');

  function getDistanceFromOriginAndIndex(cell, i) {
    var xDist = cell[xProp] - origin[xProp];
    var yDist = cell[yProp] - origin[yProp];
    return {
      index: i,
      dist: Math.sqrt(xDist * xDist + yDist * yDist)
    };
  }
}

function compareDist(a, b) {
  if (a.dist < b.dist) {
    return -1;
  } else {
    return 1;
  }
}

module.exports = sortCellsByDist;
