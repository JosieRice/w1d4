// exercise 1 - make loaded die

function makeLoadedDie() {                    // creates a function
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];  // creates variable list in function with set dice rolls

  return function() {                         // returns inner function to initiate it
    var store0 = list[0];                     // creates variable store0 to store the 0 position on the list array
    list.shift();                             // cuts first value off array
    return store0;                            // returns the original 0 position of the list array before it was cut
  }
}

var rollLoadedDie = makeLoadedDie();          // creates a variable to call the function

console.log(rollLoadedDie());  // 5             these call the function and roll the die in a predictable way
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
console.log(rollLoadedDie());
// console.log(rollLoadedDie());       these last two return undefined because the array is being cut down
// console.log(rollLoadedDie());