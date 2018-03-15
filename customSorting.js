/*

First sorting task

var array = [10, 2, 5, 1, 9]; // an array of jumbled numbers

array.sort(function(a,b) { // calling array into the .sort method and sorting numberically by mathematical comparison
  return a - b;
});

console.log(array); // logs the new array

*/


// Advanced sorting


var students = [                            // an array of objects (student info)
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 },
  { id: 5, name: "chairman meow", age: 9 },
  { id: 6, name: "Rai",      age: 34}
];




students.sort(function(a, b) {     // calling student to use the sort function
  if (a.name === b.name) {         // if the names are the same put the higher age first in array
    return b.age - a.age;
  }
  if (a.name.toLowerCase() > b.name.toLowerCase()) { // if a.name comes before b.name alphabetically, keep it forward in array
    return 1;
  }
  if (a.name.toLowerCase() < b.name.toLowerCase()) { // if a.name comes after b.name alphabetically, move it later in array
    return -1;
  }

});



console.log(students);





// write a sorting function that sorts the array by name ascending (A-Z)
// and age decending (oldest first then down) if the name is the same


// check if any names are the same
// if they are the same, sort only these by oldest first










