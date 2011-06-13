var l = function(i){
  return 2*i + 1;
};

var r = function(i){
  return 2*i + 2;
};

var p = function(i){
  return Math.floor((i-1)/2);
};

function maxHeapify(A, i, max){
  var largest,
      temp,
      left = l(i),
      right = r(i);

  largest = (left <= max && A[left] > A[i]) ? left : i;
  largest = (right <= max && A[right] > A[largest]) ? right : largest;
  if(largest === i){
    return;
  }
  temp = A[i];
  A[i] = A[largest];
  A[largest] = temp;
  maxHeapify(A, largest, max);
}

function buildMaxHeap(A){
  //everything at leaf is already a root of a max-heap, if every element in the tree is a root of a max-heap, then the entire structure is a max heap
  //gotta start with something with at least left child
  //2*i + 1 == a.length - 1
  //i = (a.length - 2)/2 = Math.floor(a.length/2 - 1)
  //if length is 3
  var i = Math.floor(A.length/2 - 1);
  while(i >= 0){
    maxHeapify(A, i, A.length - 1);
    --i;
  }
}

function heapSort(A){
  buildMaxHeap(A);
  var last = A.length-1;
  var temp;
  while(last > 0){
    temp = A[last];
    A[last] = A[0];
    A[0] = temp;
    --last;
    maxHeapify(A, 0, last);
  }
  return A;
}

var input = [16, 4, 10, 14, 7, 9, 3, 2, 8, 1];
var output = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1];

maxHeapify(input, 1, input.length-1);
console.log(input);

input = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];

buildMaxHeap(input);
console.log(input);

var getMax = function(A){
  return A[0];
};

var extractMax = function(A){
  var max = getMax(A);
  A[0] = A[A.length-1];
  delete A[A.length-1];
  maxHeapify(A, 0, A.length-1);
  return max;
};

//increase element x's key to new value k
var increaseKey = function(A, i, v){
  A[i] = v;
  while(i > 0){
    var parent = p(i);
    if(A[parent] < A[i]){
      var temp = A[parent];
      A[parent] = A[i];
      A[i] = temp;
    }
    else {
      break;
    }
    i = parent;
  }
  return A;
};

console.log(getMax(input));
console.log(extractMax(input));
console.log(input);
console.log(increaseKey(input, 3, 99));

input = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];
heapSort(input);
console.log(input);

module.exports = heapSort;
