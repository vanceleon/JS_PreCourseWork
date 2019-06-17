// Example: 
const rseultExample = true && true;
let resultExample_answer = true

// 1.
const result1 = true && false;
let result1_answer

// 2.
const result2 = true || false;
let result2_answer

// 3. 
const result3 = true && (true || false);
let result3_answer

// 4. 
const result4 = !true || false;
let result4_answer

// 5. 
const result5 = !(true && false);
let result5_answer

// 6. 
const result6 = !undefined;
let result6_answer

// 7.
const likesPizza = true;
const hasPizza = false;
const eatsPizza = likesPizza && hasPizza;
const result7 = eatsPizza;
let result7_answer

// 8. 
const result8 = (null === undefined);
let result8_answer

// 9.
const result9 = (0 < 10) && true;
let result9_answer

// 10. 
const ordersPizza = true;
const makesPizza = false;
const hasPizza1 = ordersPizza || makesPizza;
const result10 = hasPizza1;
let result10_answer

// 11.
const firstName = 'Candice';
const lastName = null;
const hasFullName = !!firstName && !!lastName;
const result11 = hasFullName;
let result11_answer

// 12.
const emptyStr = '';
const result12 = !!emptyStr;
let result12_answer

// 13. 
const result13 = (true || false) === false;
let result13_answer

// 14.
const result14 = true && !false;
let result14_answer

// 15.
const hasPizza2 = true;
const canAffordGoodPizza = false;
const hasLowStandards = true;
const enjoysPizza = hasPizza2 && (canAffordGoodPizza || hasLowStandards);
const result15 = enjoysPizza;
let result15_answer


// STRETCH QUESTIONS (NOT REQUIRED)

// 16. 
const mondayHours = 4;
const tuesdayHours = 0;
const wednesdayHours = 2;
const workedThisWeek = (!!mondayHours || !!tuesdayHours || !!wednesdayHours);
const result16 = workedThisWeek;
let result16_answer

// 17.
const result17 = !(true && false) || (false && true);
let result17_answer

// 18.
const result18 = ((0 < 12) || !0) === false;
let result18_answer

// 19.
const orderedFood = false;
const madeFood = false;
const hasFood = orderedFood || madeFood;
const isHungry = true;
const likesFood = false;
const wantsFood = !hasFood && isHungry && likesFood;
const result19 = wantsFood;
let result19_answer

// 20. 
const result20 = !(!true || false) && !(false || (true && false));
let result20_answer