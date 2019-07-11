const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];


function firstItem(arr, cb) {
  // firstItem passes the first item of the given array to the callback function.
  cb(arr[0]);
};

firstItem(items, firstItem => {
  console.log(`This is the first item: ${firstItem}`);
}) 



function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  cb(arr.length);
};
getLength(items, getLength => {
  console.log(`The length of the array is ${getLength}`);
});




function last(arr, cb) {
  // last passes the last item of the array into the callback.
  cb(arr[arr.length-1]);
};

last(items, last => {
  console.log(`This is the last value: ${last}`);
});



function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  cb(x + y);
  
}

sumNums(2, 4, sumNums => {
  console.log('adding two nums', )
})

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
}

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}


//Outside example
// function doHomework(subject, callback) {
//   alert(`Starting my ${subject} homework.`);
//   callback();
// }

// doHomework('math', function() {
//   alert(`Finished my homework'`);
// })