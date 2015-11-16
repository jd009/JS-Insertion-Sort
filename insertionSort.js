create sorted array (empty)
start with input array
  if sorted array is empty
    just push
  else
    compare the current input item with 
       each item in sorted array
       while current item > sorted array item
          continue
==================================
if input array length == 0
  return null

if input array length == 1
  return array

iterate over input array starting at position 1
  take item at current position
  current item = inputArray.splice(currentPosition, 1);
  iterate over input array starting at position 0
    and up to <= current position
    if(current item < previous item)
      inputArray.splice(previousPosition, 0, currentItem)
      break;

function insertionSort (array) {
  var arrayLength = array.length;
  if(arrayLength === 0){
    return null;
  }
  if(arrayLength === 1){
    return array;
  }

  for(var currentIndex = 1; currentIndex < arrayLength; currentIndex++){
    var deletedItemArray = array.splice(currentIndex, 1);
    var currentItem = deletedItemArray[0];
    for(var previouslySortedIndex = 0; previouslySortedIndex <= currentIndex; previouslySortedIndex++){
      if(previouslySortedIndex === currentIndex){
        array.splice(currentIndex, 0, currentItem);
        break;
      } else {
        var previousItem = array[previouslySortedIndex];
        if(currentItem < previousItem){
          array.splice(previouslySortedIndex, 0, currentItem);
          break;
        }
      }
    }
  }

  return array;
}

function insertionSort (array) {
  var arrayLength = array.length;
  if(arrayLength === 0){
    return null;
  }
  if(arrayLength === 1){
    return array;
  }

  for(var currentIndex = 1; currentIndex < arrayLength; currentIndex++){
    var deletedItemArray = array.splice(currentIndex, 1);
    var currentItem = deletedItemArray[0];
    for(var previouslySortedIndex = 0; previouslySortedIndex <= currentIndex; previouslySortedIndex++){
      if(previouslySortedIndex === currentIndex){
        array.splice(currentIndex, 0, currentItem);
        break;
      } else {
        var previousItem = array[previouslySortedIndex];
        if(currentItem < previousItem){
          array.splice(previouslySortedIndex, 0, currentItem);
          break;
        }
      }
    }
  }

  return array;
}










