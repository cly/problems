//sort A[p..r]
//
//DIVIDE
//  divide into subarrays
//  A[p..q-1] and A[q+1..r]
//  A[p..q-1] has elements <= A[q] <= A[q+1..r]
//  Compute q
//
//CONQUER
//  sort two subarrays, recursively
//
//COMBINE
//  sorted in place, no work to combine them, A[p..r] is now sorted
//

function swap(A, i, j){
  if(i === j){
    return;
  }
  var temp = A[i];
  A[i] = A[j];
  A[j] = temp;
}

function partition(A, p, r){
  if(p >= r){
    return;
  }
  var pivot = A[r];
  var curr = p;
  for(var i = p, ii = r; i <= ii; ++i){
    if(A[i] < pivot){
      swap(A, i, curr);
      ++curr;
    }
  }
  swap(A, curr, r);
  return curr;
}

function _quicksort(A, p, r){
  if(p < r){
    var q = partition(A, p, r);
    _quicksort(A, p, q-1);
    _quicksort(A, q+1, r);
  }
}

function quicksort(A){
  console.log("QUICK SORT --------");
  _quicksort(A, 0, A.length - 1);
  return A;
}


module.exports = quicksort;
