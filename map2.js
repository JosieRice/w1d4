var words = ["ground", "control", "to", "major", "tom"];



function map(arr, fun) {      // creates a map function that takes two arguments
  var newArr = [];            // creates an empty array
    for (var i = 0; i < arr.length; i++) {    // loops through array, set to length of whatever array is passed
      newArr.push(fun(arr[i], i, arr));       // adds value into the empty newArr array
                                              // based on the callback function parameters (fun) (arr)

    }
    return newArr;                            // after loop is done, return the value of newArr
};







// function calls below this line



// var lengths = map(words, function(word) {     // sets variable of lengths to call the map function with two parameters set
//                                               // first parameter is the array words
//   return word.length;                         // second parameter is an anonymous function that gets the length of words
// });

// console.log(lengths);                         // triggers callback





// var caps = map(words, function(word) {
//   return word.toUpperCase();
// });

// console.log(caps);






var reverse = map(words, function(word) {
  return word.split('').reverse().join('');
});

console.log(reverse);