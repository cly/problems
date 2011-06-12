//merge or combine method takes two sorted lists
//takes smallest member of each sorted list and puts them together
//if one of the lists is emtpy, then copy the other one over in full
//
//sentinels can be used to simplify algorithms, in this case an infinity value at the end of the two arrays

//A = array
//A[p..q] and A[q+1..r] are sorted subarrays
//p <= q < r
function merge(A, p, q, r){
  //console.log("merge", p, q, r);
  var left = A.slice(p, q+1);
  var right = A.slice(q+1, r+1);
  var leftIndex = 0;
  var rightIndex = 0;
  left.push(Infinity);
  right.push(Infinity);

  for(var i = p, ii = r; i <= ii; ++i){
    if(left[leftIndex] < right[rightIndex]){
      A[i] = left[leftIndex];
      ++leftIndex;
    } 
    else{
      A[i] = right[rightIndex];
      ++rightIndex;
    }
  }
  return A;
}

function mergeSort(a, p, r){
  //console.log("mergeSort", p, r);
  if(p < r){
    var q = Math.floor((r+p)/2);
    mergeSort(a, p, q);
    mergeSort(a, q+1, r);
    merge(a, p, q, r);
  }
}

module.exports = function(a){
  console.log("MERGE SORT -------------");
  mergeSort(a, 0, a.length-1);
  return a;
};

//let T(n) be running time on a problem of n
//suppose division of problem yields a subproblems and each of which is 1/b the size of original, for merge sort a = b = 2
//T(n) = {O(1) if n <= csmall}, {aT(n/b) + D(n) + C(n) ow}
//
//D(n) divide is constant time
//C(n) combine is linear time
//conquer is 2T(n/2)
//
//Master Theorem
//
//if T(n) = 9T(n/3) + n, a = 9, b = 3, f(n) = n, n^(log_ba) = n^2, then this is more significant, so T(n) = n^2
//if T(n) = T(2n/3) + 1, n^(log_(3/2)1) = n^0 = 1, which is same as 1, then T(n) = \theta n^(logb)a * lgn
//if T(n) = 3T(n/4)+nlgn, then nlgn is more significant, T(n) = nlgn
