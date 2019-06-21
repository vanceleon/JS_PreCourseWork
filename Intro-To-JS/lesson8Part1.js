
/* For each example of code please identy 
   the higher order function and the callback function(s) */
   
/* For both types of functions, you will describe the 
   parameters and return values (if any) */

// Question 1:

function returned() {
    console.log("The king hath returned from the hunt!");
  };
  
  function death() {
    console.log("The king is dead!");
  }
  
  function birth() {
    console.log("An heir has been born today!");
  }
  
  function announce(cb) {
    console.log("Hear ye! Hear ye!");
    cb();
  }
  
  announce(returned);
  announce(birth);
  announce(death);
  
  /**
    1a) What is the higher order function is this example? List the parameters and return values. 
    1b) What are the callbacks in this example? List the parameters and return values for each.  
  */
  
  // Question 2:
  
  function addFn(x, y) {
    return x + y;
  }
  
  function subtractFn(x, y) {
    return x - y;
  }
  
  function combine(x, y, cb) {
    return cb(x, y);
  }
  
  const result1 = combine(1, 4, addFn);
  const result2 = combine(9, -2, subtractFn);
  const result3 = combine(2, 3, function(x, y) {
    return x * y;
  })
  
  /**
    2a) What is the higher order function? List the parameters and return values. 
    2b) What are the callbacks? List the parameters and return values for each.  
  */
  
  
  // Question 3:
  
  function addExcitement(string) {
    return 'string' + '!';
  }
  
  const phrases = [ 'A fish rots from the head down', 'A rolling stone gathers no moss', 'A rose is a rose is a rose'];
  const excitedPhrases = phrases.map(addExcitement);
  
  /**
    3a) What is the higher order function? List the parameters and return values. 
    3b) What are the callbacks? List the parameters and return values for each.  
  */
  
  
  // Stretch Question 4:
  
  function findLongest(str1, str2) {
    const firstLonger = str1.length >= str2.length;
  
    if (firstLonger) {
      return str1;
    } else {
      return str2;
    }
  }
  
  const words = [ 'cattywampus', 'snickersnee', 'lollygag', 'pandiculation', 'ratoon' ];
  const phrases = [ 'A fish rots from the head down', 'A rolling stone gathers no moss', 'A rose is a rose is a rose'];
  
  const longestWord = words.reduce(findLongest);
  const longestPhrase = phrases.reduce(findLongest);
  
  /**
    4a) What is the higher order function? List the parameters and return values. 
    4b) What are the callbacks? List the parameters and return values for each.  
  */