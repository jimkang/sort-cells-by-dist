var test = require('tape');
var sortCellsByDist = require('../index');

var cells = [
  [0, 0],
  [1, 0],
  [2, 0],
  [3, 0],
  [4, 0],
  [0, 1],
  [1, 1],
  [2, 1],
  [3, 1],
  [4, 1],
  [0, 2],
  [1, 2],
  [2, 2],
  [3, 2],
  [4, 2],
  [0, 3],
  [1, 3],
  [2, 3],
  [3, 3],
  [4, 3],
  [0, 4],
  [1, 4],
  [2, 4],
  [3, 4],
  [4, 4]
];

var testCases = [
  {
    origin: [0, 0],
    expectedOrder: [
      0,
      5,
      1,
      6,
      10,
      2,
      7,
      11,
      12,
      15,
      3,
      8,
      16,
      13,
      17,
      20,
      4,
      9,
      21,
      18,
      22,
      14,
      23,
      19,
      24
    ]
  },
  {
    origin: [2, 3],
    expectedOrder: [
      17,
      18,
      16,
      22,
      12,
      13,
      11,
      21,
      23,
      7,
      15,
      19,
      24,
      20,
      14,
      6,
      8,
      10,
      9,
      5,
      2,
      1,
      3,
      0,
      4
    ]
  }
];

testCases.forEach(runTest);

function runTest(testCase) {
  test(
    `Order cells by dist from ${JSON.stringify(testCase.origin)}`,
    testOrder
  );

  function testOrder(t) {
    t.deepEqual(
      sortCellsByDist(testCase.origin, cells, '0', '1'),
      testCase.expectedOrder,
      'Order is correct.'
    );
    // console.log(
    //   JSON.stringify(sortCellsByDist(cells, testCase.origin), null, 2)
    // );
    t.end();
  }
}
