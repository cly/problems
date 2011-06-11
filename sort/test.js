var insertion = require('./insertion.js');

var input = [5, 2, 4, 6, 1, 3],
    expected = [1, 2, 3, 4, 5, 6];

var algos = [insertion];

var isExpected = (function(expected){
  return function(e, i, a){
    return e === expected[i];
  };
})(expected);


for(var i = 0, ii = algos.length; i < ii; ++i){
  actual = algos[i](input);
  console.log(actual.every(isExpected));
}
