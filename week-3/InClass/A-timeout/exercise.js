/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/

let backgroundColorOne = () => {
  setTimeout(backgroundColorParty, 5000);
};

let backgroundColorParty = () => {
  function generateRandomColor() {
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  }
  document.body.style.backgroundColor = generateRandomColor();
  setTimeout(backgroundColorParty, 5000);
};

backgroundColorOne();
