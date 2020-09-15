/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */

let user_1 = {
  firstName: "Thony",
  lastName: "Nava",
  job: "Founder, CEO, & CTO",
};

let user_2 = {
  firstName: "Gwynne",
  lastName: "Shotwell",
  job: "President & COO",
};

let user_3 = {
  firstName: "Mark",
  lastName: "Juncosa",
  job: "VP, Vehicle Engineering",
};

let namesDB = [user_1, user_2, user_3];

function exerciseOne(arrayOfPeople) {
  let content = document.querySelector("#content");
  let div = document.createElement("div");
  arrayOfPeople.forEach((obj) => {
    let article = document.createElement("article");
    article.className = "article";

    let h1 = document.createElement("h1");
    h1.innerHTML = obj.firstName + " " + obj.lastName;

    let h2 = document.createElement("p");
    h2.innerHTML = obj.job;

    article.appendChild(h1);
    article.appendChild(h2);
    div.appendChild(article);
  });
  content.appendChild(div);
}

exerciseOne(namesDB);

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */

let product_1 = {
  id: 1,
  name: "Kaizen Cure Program",
  price: 347,
};

let product_2 = {
  id: 2,
  name: "Being a professional SiHuber",
  price: 780,
};

let product_3 = {
  id: 3,
  name: "Productivity 360° Program",
  price: 997,
};

let products = [product_1, product_2, product_3];

function exerciseTwo(shopping) {
  let content = document.querySelector("#content");
  let ul = document.createElement("ul");
  shopping.forEach((obj) => {
    let li = document.createElement("li");

    let h1 = document.createElement("h1");
    h1.innerHTML = obj.name;

    let h2 = document.createElement("p");
    h2.innerHTML = "€ " + obj.price;

    li.appendChild(h1);
    li.appendChild(h2);
    ul.appendChild(li);
  });
  content.appendChild(ul);
}

exerciseTwo(products);

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/

function exerciseThree(booksArr) {
  let content = document.querySelector("#content");
  let ul = document.createElement("ul");
  ul.style.display = "flex";
  ul.style.listStyle = "none";
  booksArr.forEach((obj) => {
    let li = document.createElement("li");
    li.style.margin = "15px";
    li.style.padding = "10px";
    li.style.minWidth = "350px";
    li.style.borderRadius = "5px";
    li.style.textAlign = "center";
    li.style.width = "calc(25% - 51px)";

    let p = document.createElement("p");
    p.innerHTML = obj.title + " – " + obj.author;

    let img = document.createElement("img");
    img.src = obj.url;

    if (obj.alreadyRead) {
      li.style.backgroundColor = "rgba(50,205,50,.5)";
    } else {
      li.style.backgroundColor = "rgba(220,20,60,.5)";
    }

    li.appendChild(p);
    li.appendChild(img);
    ul.appendChild(li);
  });
  content.appendChild(ul);
}

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

// exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

// exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    url: "img/design.jpeg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    url: "img/human.jpeg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    url: "img/programmer.jpeg",
  },
];

exerciseThree(books);
