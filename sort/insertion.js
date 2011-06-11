//input: array of n numbers
//output: sorted in ascending order
//
//strategy: take each member of the array, and add it into a sorted list which becomes the result, can sort in order

module.exports = function insertion(a){
  for(var i = 1, ii = a.length; i < ii; ++i){
    console.log(a);
    var current = a[i];
    var j = i-1;
    while(j >= 0 && a[j] > current){
      a[j+1] = a[j];
      --j;
    }
    a[j+1] = current;
  }
  return a;
};
