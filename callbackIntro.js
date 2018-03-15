// Callback's to locate Waldo and his index in an array



function findWaldo(arr, found) {
  arr.forEach(function(element, i) { // .forEach through the arrice from line 18
    if (element === "Waldo") { // look until you find Waldo
      found(i);  // runs the function that was the second perameter from below,
                 // passed i into argument because the index needs to show the index number
    }
  });
}

function actionWhenFound(findIndex) { //the function that is run when Waldo is found
  console.log(`Found him at index ${findIndex} !`); // findIndex grabs the i from the function it is run into
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);   // The callback that starts the process, with two perameters (array of name, function when found)