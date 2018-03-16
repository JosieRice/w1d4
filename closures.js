/*






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





*/



// Exercise 2 - Countdown

var countdownGenerator = function (countdownStart) {   // creates variable countdownGenerator which has a function as a value
  return function() {                                   // invokes inner function
    if (countdownStart > 0) {                   // checks that countdownStart from outer function is above zero to count
      console.log(`T-minus ${countdownStart}...`);
    } else if (countdownStart === 0) {       // checks if countdownStart has reached zero for blastoff notification
      console.log("Blast Off!");
    } else {                                // continues to tell bub that the rocket is gone if countdown() is pressed more than once for zero
      console.log("Rockets already gone, bub!")
    }
    countdownStart -= 1;
  }
};

var countdown = countdownGenerator(3);      // variable to call the countdownGenerator function and starting time


countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
