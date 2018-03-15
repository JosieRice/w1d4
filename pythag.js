var input = [ //an array of objects showing the measurements of two sides of a triangle
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

var result = input.map(function(square) { // maps an array containing x and y value objects
  return Math.sqrt((Math.pow(square.x, 2) + Math.pow(square.y, 2))); // returns x sq + y sq = z sq to result array
});

console.log(result[0] === 5);  // logs if these results are true or not
console.log(result[1] === 13);
console.log(result[2] === 17);


console.log(`The results in array order are ${result}`); // logs the Pythagorean Theorm results in array order given by the result function
