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
