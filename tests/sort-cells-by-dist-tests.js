var test = require('tape');
var sortCellsByDist = require('../index');

var cells = [
  { type: 'populated', col: 0, row: 0 },
  { type: 'populated', col: 1, row: 0 },
  { type: 'populated', col: 2, row: 0 },
  { type: 'populated', col: 3, row: 0 },
  { type: 'populated', col: 4, row: 0 },
  { type: 'populated', col: 0, row: 1 },
  { type: 'populated', col: 1, row: 1 },
  { type: 'populated', col: 2, row: 1 },
  { type: 'populated', col: 3, row: 1 },
  { type: 'populated', col: 4, row: 1 },
  { type: 'populated', col: 0, row: 2 },
  { type: 'populated', col: 1, row: 2 },
  { type: 'populated', col: 2, row: 2 },
  { type: 'populated', col: 3, row: 2 },
  { type: 'populated', col: 4, row: 2 },
  { type: 'populated', col: 0, row: 3 },
  { type: 'populated', col: 1, row: 3 },
  { type: 'populated', col: 2, row: 3 },
  { type: 'populated', col: 3, row: 3 },
  { type: 'populated', col: 4, row: 3 },
  { type: 'populated', col: 0, row: 4 },
  { type: 'populated', col: 1, row: 4 },
  { type: 'populated', col: 2, row: 4 },
  { type: 'populated', col: 3, row: 4 },
  { type: 'populated', col: 4, row: 4 }
];

var testCases = [
  {
    origin: { col: 0, row: 0 },
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
    origin: { col: 2, row: 3 },
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
      sortCellsByDist(cells, testCase.origin),
      testCase.expectedOrder,
      'Order is correct.'
    );
    // console.log(
    //   JSON.stringify(sortCellsByDist(cells, testCase.origin), null, 2)
    // );
    t.end();
  }
}
