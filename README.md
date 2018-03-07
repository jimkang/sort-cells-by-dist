sort-cells-by-dist
==================

Sorts the cells in a grid by their distance from a particular cell.

You give it cells (objects with `col` and `row` properties), and it gives you the indexes of the cells in order from close to far.

Installation
------------

    npm install sort-cells-by-dist

Usage
-----

    var sortCellsByDist = require('sort-cells-by-dist');
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
    sortCellsByDist({col: 2, row: 3}, cells);

Returns:

    [
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

You can also pass in optional parameters to tell it what to use as column and row accessor properties. For example, if your cells were all two-element arrays like `[0, 5]`, you could use: `sortCellsByDist(testCase.origin, cells, '0', '1')`

Tests
-----

Run tests with `make test`.

License
-------

The MIT License (MIT)

Copyright (c) 2017 Jim Kang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
