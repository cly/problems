//input: array of n numbers
//output: sorted in ascending order
//
//strategy: take each member of the array, and add it into a sorted list which becomes the result, can sort in order
//this is an incremental approach, do a little, then do more, etc.

module.exports = function insertion(a){
  console.log("INSERTION SORT -------------");
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
  console.log(a);
  return a;
};

//L7 - L16, the loop a[0..i-1] is always sorted
//
//Loop invariant
//1. initialization (true before first step)
//  - when i = 1, a[0] is only one element thus sorted
//2. maintenance (if true before an iteration, true after iteration)
//  - informally, the location of the current value is found and then inserted
//3. termination (invariants in 1, 2 shows through induction that the algorithm is correct at termination)
//  - when loop terminates, exit when we go through all elements of the array, which means the new array consist of all elements of the old array but now in sorted order
