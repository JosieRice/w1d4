// The second argument/parameter is expected to be a function

// var indexFound = 0;

function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      // indexFound = i;
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(findIndex) {
  console.log(`Found him at index ${findIndex}!`);
}



// function findIndex(arr, index) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === "Waldo") {
//       index = i;
//     }
//   }
// }


// another function that gives the index and added into actionWhenFound callback

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);