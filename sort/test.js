var insertion = require('./insertion.js');
var merge = require('./merge.js');
var heap = require('./heap.js');
var quick = require('./quick.js');

var input = [5, 2, 4, 6, 1, 3],
    expected = [1, 2, 3, 4, 5, 6],
    start;

var algos = [insertion, merge, heap, quick];

var isExpected = (function(expected){
  return function(e, i, a){
    return e === expected[i];
  };
})(expected);

for(var i = 0, ii = algos.length; i < ii; ++i){
  //re-initialize
  start = [];
  for(var j = 0, jj = input.length; j < jj; ++j){
    start[j] = input[j];
  }
  actual = algos[i](start);
  console.log(actual.every(isExpected));
}
