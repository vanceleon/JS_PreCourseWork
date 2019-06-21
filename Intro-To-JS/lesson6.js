
// getThird takes in an array 
// it returns the third item in the array
// if there is no third item, return null
// Example: getThird(['Doc', 'Biff', 'Marty']) returns 'Marty'

function getThird(array) {
    if(array[2] != null){
      return array[2];
    }else{
      return null;
    }
  }
  
  // stringLengths takes in four strings
  // it returns an array containing the length of each string
  // Example: stringLengths('mushroom', 'onion', '', 'garlic') returns [8, 5, 0, 6] 
  
  function stringLengths(str1, str2, str3, str4) {
    let strLenghtArray = [];
    strLenghtArray.push(str1.length,str2.length, str3.length, str4.length);
    return strLenghtArray;
  }
  
  // removeFirst takes in an array
  // it returns the same array, but with the first item removed
  // Example: removeFirst(['frog', 'toad', 'cricket', 'skunk']) would
  //          return ['toad', 'cricket', 'skunk'] 
  
  function removeFirst(array) {
    array.shift();
    return array;
  }console.log(removeFirst(['frog', 'toad', 'cricket', 'skunk']))
  
  // swap takes in an array and two indices 
  // it returns the array with the items at i and j swapped
  // Example: swap(['unicycle', 'scooter', 'skateboard', 'canoe'], 0, 2) would
  //          return ['skateboard', 'scooter', 'unicycle', 'canoe'];
  
  function swap(array, i, j) {
    let swapVar;
    swapVar = array[i];
    array[i] = array[j];
    array[j] = swapVar;
    return array;
  }console.log(swap(['unicycle', 'scooter', 'skateboard', 'canoe'], 0, 2))
  
  // getValue takes in an object and a key name
  // if the key exists in the object, return the value of that key
  // if not, return null
  // Example: getValue({ first: 'Gordon', last: 'Peppermill'}, 'last') 
  //          would return 'Peppermill'
  
  function getValue(object, key) {
    if (object[key] === undefined) {
      return null;
    } else {
      return object[key];
    }
  }
  console.log(getValue({ first: 'Gordon', last: 'Peppermill'}, 'last'));
  
  
  
  
  // generateCSS takes in three strings containing CSS values
  // it returns an object with the CSS key value pairs
  // Example: generateCSS('100px', '70px', 'blue') would return
  //          { height: '100px', width: '70px', color: 'blue' }
  
  function generateCSS(height, width, color) {
    let cssObj = {
      height: height,
      width: width,
      color: color,
    }
    return cssObj;
  }console.log(generateCSS('100px', '70px', 'blue'))
  
  // getValues takes in an objects
  // it return an array containing the values from that object
  // Example: getValues({ name: 'Ally', age: 27, job: 'hypnotist' })
  //          would return ['Ally', 27, 'hypnotist']
  
  function getValues(obj) {
    let objValues = Object.values(obj);
    return objValues;
  }console.log(getValues({ name: 'Ally', age: 27, job: 'hypnotist' }))
  
  // STRETCH PROBLEMS (NOT REQUIRED)
  
  // wrapAround takes in an array
  // and returns an array with the last item in the first spot
  // and everything else shifted one index over
  // Example: wrapAround(['teaspoon', 'meat grinder', 'spatula', 'salad fork'])
  //          would return ['salad fork', 'teaspoon', 'meat grinder', 'spatula']
  
  function wrapAround(array) {
  
  }
  
  // count takes in an array
  // and returns an objects containing a frequency count for each item in the array
  // Example: count(['red', 'blue', 'blue', 'pink', 'blue', 'green', 'red']) would
  //          return { red: 2, blue: 3, pink: 1, green: 1}
  
  function count(array) {
    
  }