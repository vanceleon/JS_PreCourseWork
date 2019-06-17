// example:
// Write a for loop that logs the numbers 0 through 5
for (let i = 0; i < 6; i++) {
    console.log(i);
  }
  
  
  // 1.
  // Write a for loop that logs the numbers 0 through 10
  for (let i = 0; i < 11; i++) {
    console.log(i)
  }
    
  
  
  // 2.
  // Write a loop that logs the numbers 10 through 0
  
  for(let i = 10; i >= 0; i--){
    console.log(i);
  }
  
  
  // 3.
  // Write a loop that logs the word "Hippopotamus" 17 times.  
  for (let i = 0;i < 17;i++) {
    console.log("Hippopotamus");
  }
  
  
  // 4.
  // Write a for loop that logs 2, 4, 6, 8, 10
  for(let i = 0; i < 10;i++) {
    let j = i + 2
    if(j % 2 === 0) {
      console.log("4: ",j);
    }
  }
  
  
  // 5.
  // Write a loop that logs the numbers 2, 4, 6, 8.
  // Do not edit the existing code.
  
  for (let i = 0; i < 4; i++) {
    let j = i + 2
    if(j > 4) {
      for(let x = 6; x <= 8; x++){
        if(x % 2 === 0) {
          console.log(x);
        }    
      }
    }
    if(j % 2 === 0) {
      console.log(j);
    }
  }
  
  // 6.
  // Write a loop that logs the numbers 5 through 10. 
  // Do not edit the existing code.
  
  for (let i = 0; i < 20; i++) {
    if(5 <= i && i <= 10) {
      console.log("6: ", i);
    }
  } 
  
  // 7. 
  // Write a loop that logs "Marco!" when i is even,
  // "Polo!" when i is odd, 
  // and 'Game Over!' when i is 0. 
  // Do not edit the existing code.
  
  for (let i = 10; i >= 0; i--) {
    if(i === 0) {
      console.log('Game Over');
    }
    else if(i % 2 === 0) {
      console.log('Marco!');
    }else if (i % 2 === 1){
      console.log('Polo!');
    }
  }
  
  // 8.
  // Use an else-if statement to assign all four null variables based on the age variable.
  // The code should work regardless of what value age is assigned to. 
  // Assume the driving age is 16, voting age is 18, drinking age is 21, and retirement age is 66.
  const age = 26;
  let canDrive = null;
  let canVote = null;
  let canDrink = null;
  let canRetire = null;
  
  // Write all of your code below. Do not change the code above. 
  if (age < 16) {
    canDrive = false;
    canVote = false;
    canDrink = false;
    canRetire = false;
  } else if (age > 66) {
    canDrive = true;
    canVote = true;
    canDrink = true;
    canRetire = true;
  } else if (age > 21) {
    canDrive = true;
    canVote = true;
    canDrink = true;
    canRetire = false;
  } else if (age > 18) {
    canDrive = true;
    canVote = true;
    canDrink = false;
    canRetire = false;
  } else if (age > 16) {
    canDrive = true;
    canVote = false;
    canDrink = false;
    canRetire = false;
  } else{
    let canDrive = null;
    let canVote = null;
    let canDrink = null;
    let canRetire = null;
  }
  
  console.log(canDrive, canVote, canDrink, canRetire);
  
  
  
  // STRETCH PROBLEMS (NOT REQUIRED)
  
  // 9.
  // Find a second way to write the loop from question 4. 
  
  
  
  // 10. 
  // Write a loop that logs the numbers 0 through 10. 
  // Only add code in the parenthesis following the 'for' keyword
  // Finish the code in the parentheses
  
  for (let i; i; i) {
    
    //Do not add or edit code below here!
    if (i < 0) {
      continue;
    } else if ( i > 50) {
      break;
    } else {
      console.log(i/5);
    }
  }
  
  // 11.
  // Imagine you throw two six sided dice and sum up the total.
  // Write a loop that logs every possible score you could roll.
  // Used a nested for loop ( a loop inside of a loop)
  // Bonus Challenge: Don't log repeats.
  
  
  