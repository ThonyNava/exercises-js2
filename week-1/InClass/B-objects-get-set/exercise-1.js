/*
    Console.log the values of each property of "kitten"
*/

var kitten = {
  ageMonths: 3,
  isFemale: true,
  furColour: "brown",
};

// YOUR CODE HERE

console.log(kitten.ageMonths);
console.log(kitten.isFemale);
console.log(kitten.furColour);

//Alternative CODE
const arrOfKitten = Object.values(kitten);
let printer = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};
console.log(printer(arrOfKitten));
