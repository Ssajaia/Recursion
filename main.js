
function fibRec(num){
   if(n==0){
    return [];
   }
   if(n==1){
    return [0];
   }
   if(n==2){
    return [0,1];
   }
   const prevArray = fibRec(num - 1);

  const nextFib = prevArray[prevArray.length - 1]
   + prevArray[prevArray.length - 2];
  prevArray.push(nextFib);
  
  return prevArray;
}

function fib (num){
    let array = [];   
    for(i = 0;i<num;i++){
        if(i == 0 ){
        array.push(0);
        }
        else if(i == 1){
            array.push(1);
        }
        else{
            array.push(array[i-1]+array[i-2]);
        }
     
    }
    return array;
    
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}
