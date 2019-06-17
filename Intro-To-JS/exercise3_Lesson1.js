
const var1 = 'Lambda School';
const var2 = 9.8;
const var3 = var2.toString();
const var4 = var2 < 10;
const var5 = var4.toString;

// Exercise 1:
// What are the variables types of var1 - var5?
// var1: string
// var2: number
// var3: string
// var4: boolean
// var5: function

// Exercise 2:
// What are the values for of var1 - var5?
// var1: Lambda School
// var2: 9.8
// var3: '9.8'
// var4: true
// var5: function call

//Exercises 3 - 6
const firstName = 'Grace';
const lastName = 'Hopper';
let length = firstName.length;
console.log(length);
const fullName = firstName + lastName;
const mysteryVariable = lastName;

length = lastName.length;
console.log(mysteryVariable);

// 3. How many variables were declared?
let answer3 = 5;

// 4. What two values were logged to the console? 
let answer4Part1 = 5;
let answer4Part2 = 'Hopper';

// 5. What does the variable 'fullName' contain? 
let answer5 = 'Grace Hopper';

// 6. What is the final value of length?
let answer6 = 6;

// Exercises 7 - 9:
const x = 7;
const y = 3.3;
const z = y + 1;
const a = Math.ceil(y);
const b = Math.random();
const c = Math.pow(2, 2);
const randomize = Math.random();


// 7. How many function calls occur in this piece of code?
let answer7 = 4;

// 8. What are the arguments for each function call? Remember, none is valid answer. 
// Answer a: y
// Answer b: null;
// Answer c: 2, 2

// 9. What are the return values for each?
// Answer a: 4
// Answer b: random number between 0 and 1 
// Answer c: 4
// Answer randomize: random number between 0 and 1


// Exercise 10:
// const x = '9';
// const y = 1.4;
// const z = x++;
// const sum = console.log(y + 10);
// const greeting = hello;
// x = Math.round(y);

// What is wrong with the above code? 
// Answer: can't update the reference to a const variable and assign it a different value/increment it  
