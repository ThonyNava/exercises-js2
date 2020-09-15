/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

// 1. all the "p" element nodes of the document,
// --> should log a list of nodes with a length of 6
console.log(
  "1. all the 'p' element nodes of the document, --> should log a list of nodes with a length of 6. "
);
let allP = Array.from(document.querySelectorAll("p"), (e) => console.log(e));
console.log("The length we got is " + allP.length);

// 2. the first div element node
// --> should log the ".site-header" node
console.log(
  '2. the first div element node --> should log the ".site-header" node'
);
console.log(document.querySelector("div"));

// 3. the element with id "jumbotron-text"
// --> should log the "#jumbotron-text" node
console.log(
  '3. the element with id "jumbotron-text" --> should log the "#jumbotron-text" node'
);
console.log(document.getElementById("jumbotron-text"));

// 4. all the "p" elements of contained inside  the .primary-content element node
// --> should log a list of nodes with a length of 3
console.log(
  '4. all the "p" elements of contained inside  the .primary-content element node --> should log a list of nodes with a length of 3'
);

let pOfPrimary_content = Array.from(
  document.querySelectorAll(".primary-content p"),
  (e) => console.log(e)
);
console.log("The length we got is " + pOfPrimary_content.length);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

document.getElementById("alertBtn").addEventListener("click", () => {
  alert("Thanks for visiting Bikes for Refugees!");
});

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

document.getElementById("bgrChangeBtn").addEventListener("click", () => {
  function generateRandomColor() {
    var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  }
  document.body.style.backgroundColor = generateRandomColor();
});

/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/

document.getElementById("addTextBtn").addEventListener("click", () => {
  let newArticle = document.createElement("article");
  newArticle.classList.add("article");
  //   newArticle.innerHTML = "NEW ARTICLE";

  let newP = document.createElement("p");
  newP.classList.add("article-lead");
  newP.innerHTML =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

  newArticle.appendChild(newP);
  document.getElementById("mainArticles").appendChild(newArticle);
});

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
document.getElementById("largerLinksBtn").addEventListener("click", () => {
  Array.from(document.querySelectorAll("a"), (e) => {
    if (e.style.fontSize === "1em") {
      e.style.fontSize = "1.2em";
    } else {
      e.style.fontSize = "1em";
    }
  });
});

/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/

document.getElementById("addArticleBtn").addEventListener("click", () => {
  let newArticle = document.createElement("article");
  newArticle.classList.add("article");

  let newP = document.createElement("p");
  newP.classList.add("article-lead");
  newP.innerHTML =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

  document.getElementById("mainArticles").appendChild(newArticle);
  document.querySelector("#mainArticles .article:last-child").appendChild(newP);
});

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

let colors = ["yellow", "cyan", "magenta"];
let i = 0;
let color;

document.getElementById("bgrChangeBtn2").addEventListener("click", () => {
  if (i < colors.length) {
    color = colors[i];
    i++;
  } else {
    i = 0;
    color = colors[i];
    i++;
  }

  document.body.style.backgroundColor = color;
});
