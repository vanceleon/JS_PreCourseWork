const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

const commonElements = (arr1, arr2) => {
  let sameItems = [];
  let indexSameItems = 0;
  for (let i = 0; i < arr1.length; i++){
    for (let j = 0; j < arr2.length; j++){
      if (arr1[i] === arr2[j]) {
        sameItems[indexSameItems] = arr1[i]
        indexSameItems++;
      }
    }
  }
  return sameItems;
}
commonElements(array1, array2);