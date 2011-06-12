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
