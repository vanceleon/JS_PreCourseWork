// The following arrays will be used through the questions:
const words = [ 'cattywampus', 'snickersnee', 'lollygag', 'pandiculation', 'ratoon' ];
const numbers = [ 8, 3, 22, 0, -73, 15 ];

// Question 1: 
// Use forEach to console.log all the words in the words array. Do not write a for loop. 
function logWords(words){
  words.forEach((words) => {
    console.log(words);
  });
}
// logWords(words)

// Question 2: Use forEach to console.log the each number in the numbers array divided by two
// It should console.log: 
// 4
// 1.5
// ...etc. 
function logHalfNumbers(){
  numbers.forEach((number) => {
    const result = number / 2;
    console.log(result)
  })
}
// logHalfNumbers(numbers)

// Question 3: Using the getFirstLetter function below as your callback,
//             use map to create an array contaning the first letter of 
//             every word from the words array.

function getFirstLetter(word) {
  // console.log(word)
  const firstLetter = word[0].split('');
  return firstLetter[0];
}
// getFirstLetter(words)

const firstLetters = words.map((word) => {
  // console.log(getFirstLetter[0])
  return getFirstLetter(word);
});
// console.log(firstLetters)


// Question 4: Use map to create an array containing the last letter of every word
//             from the words array. 

const lastLetters = words.map((word) => {
  const splitWords = word.split('');
  const wordLength = splitWords.length - 1;
  // splitWords[splitWords.length - 1]
  return splitWords[wordLength]
});
// console.log(lastLetters)

// Question 5: Use map to create an array containing the reversed version of each word
//             from the word array. For example, the first entry will be 'supmawyttac'.

const reversedWords = words.map(function(word) {
  const splitWords = word.split('');
  let reverseWords = [];
  for (let i = splitWords.length; i >= 0; i--) {
    if(splitWords[i] !== undefined) {
      reverseWords.push(splitWords[i]);
    }
  }
  // console.log(reverseWords)
}); 

// Question 6: Use map to create an array containing the absolute value of every number
//             in the numbers array.

const absoluteNumbers = numbers.map((number) => {
  return Math.abs(number);
  
});
// console.log(absoluteNumbers);

// Question 7: Use map to create an array containing each number from the numbers array
//             rounded to the nearest 10. For example: 10, 0, 20, 0, etc. 
const nearestNumber = 10;
const roundedToTenNumbers = numbers.map((number) => {
  return Math.round(number / nearestNumber) * nearestNumber;
});
// console.log(roundedToTenNumbers)

// Question 8: Use map to create an array that contains only the words from the words
//             array containing 's'. All other words should be replaced with null.
//             For example: 'cattywampus', 'snickersnee', null, etc. 

const wordsWithS = words.map((word) => {
  if (word.includes('s' || 'S')) {
    return word;  
  }else {
    return null;
  }
});
// console.log(wordsWithS)
// // Stretch Questions:
// // The stretch question will use the array method reduce, which was only briefly reviewed 
// // in the lecture. Refer to online documentation for more information on reduce. 

// // Question 9: Use reduce to sum up all of the numbers in the numbers array. 

// function sum(currentTotal, nextNumber) {

// }

// const sumTotal = numbers.reduce();

// // Question 10: Use reduce to find the word from the words array that is last in the alphabet.

// const alphabeticallyLast = words.reduce(function() {

// });