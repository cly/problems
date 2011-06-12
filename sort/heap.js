var l = function(i){
  return 2*i + 1;
};

var r = function(i){
  return 2*i + 2;
};

var p = function(i){
  return Math.floor((i-1)/2);
};

function maxHeapify2(A, i){
  var largest,
      temp,
      left = l(i),
      right = r(i),
      max = A.length - 1;

  largest = (left < max && A[left] > A[i]) ? left : i;
  largest = (right < max && A[right] > A[largest]) ? right : largest;
  if(largest === i){
    return;
  }
  temp = A[i];
  A[i] = A[largest];
  A[largest] = temp;
  maxHeapify2(A, largest);
}

function maxHeapify(A, i){
  var temp;
  var heapifyWith;
  //if last row
  if(r(i) > (A.length - 1)){
    if(l(i) < A.length && A[l(i)] > A[i]){
      temp = A[i];
      A[i] = A[l(i)];
      A[l(i)] = temp;
    }
    return;
  }
  if(A[i] > A[l(i)] && A[i] > A[r(i)]){
    return;
  }
  if(A[l(i)] > A[r(i)]){
    heapifyWith = l(i);
  }
  else{
    heapifyWith = r(i);
  }
  temp = A[i];
  A[i] = A[heapifyWith];
  A[heapifyWith] = temp;
  maxHeapify(A, heapifyWith);
}

//[0, 1, 2, 3, 4, 5, 6]

var input = [16, 4, 10, 14, 7, 9, 3, 2, 8, 1];
var output = [16, 14, 10, 8, 7, 9, 3, 2, 4, 1];

maxHeapify2(input, 1);
console.log(input);
