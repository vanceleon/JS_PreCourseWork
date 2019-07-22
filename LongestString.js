const strs = [
    'long',
    'longer',
    'longestString',
    'longest',
    'Coffee Is Awesome'
    ];
  
  function longestString(arr) {
      let word = -1;
      let storedStr;
        arr.forEach(function(arr1){
          if (arr1.length > word){
            console.log(arr1.length);
            word = arr1.length
            storedStr = arr1
          }
            
        })
    return storedStr;
  }
  longestString(strs);
  