/*
================
You are given the following list of movies

Task 1
Create a function called "showMovies" that
- iterates through the "movies" array and
- for each movie, it creates a <p> element with the movie title and director and append it to the #all-movies div.
- it sets the innerText of the #movies-number element to the total number of the movies in the array "movies"

Task 2
Amend your function above to only show movies after 1 second. Remember to use setTimeout to achieve that
Create a new function called "addMovie"
- it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide 
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
How many movies can you see on your page?

Task 3
Can you make sure the new movie you just added is showing on the screen? 
TIP: use callbacks

Task 4
Create a form anywhere on your page. The form should have
- 4 input text fields, one for each property of your movie object
- a "save" button.
When the button is clicked
- The field values should be used to create a new movie object literal
- The new movie is then added to the list of movies and gets displayed on your page
TIP: Use the functions you created on tasks 1-3

================
*/

// Task 1
// Create a function called "showMovies" that
// - iterates through the "movies" array and
// - for each movie, it creates a <p> element with the movie title and director and append it to the #all-movies div.
// - it sets the innerText of the #movies-number element to the total number of the movies in the array "movies"

var movies = [
  {
    title: "Color Out of Space",
    director: "Richard Stanley",
    type: "sci-fi",
    haveWatched: true,
  },
  {
    title: "A Twelve-Year Night",
    director: "Álvaro Brechner",
    type: "horror",
    haveWatched: false,
  },
  {
    title: "The Whistlers",
    director: "Corneliu Porumboiu",
    type: "comedy",
    haveWatched: true,
  },
  {
    title: "The Invisible Man",
    director: "Leigh Whannell",
    type: "horror",
    haveWatched: false,
  },
];

// create showMovies function
let showMovies = (arr) => {
  let span = document.getElementById("movies-number");
  span.innerHTML = "";
  span.innerHTML = arr.length;
  arr.forEach((obj) => {
    let p = document.createElement("p");
    p.className = "text-center alert addedElement";
    p.innerHTML = `${obj.title} – ${obj.director}`;
    let allMovies = document.querySelector("div #all-movies");
    allMovies.appendChild(p);
  });
};

setTimeout(showMovies, 1000, movies);

// Task 2
// Amend your function above to only show movies after 1 second. Remember to use setTimeout to achieve that.
// Create a new function called "addMovie".
// - it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide.
// - it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that.
// Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
// How many movies can you see on your page?
// create a new movie object for your favorite movie

let favoriteMovie = {
  title: "The Illusionist",
  director: "Neil Burger",
  type: "Mystery/Romance",
  haveWatched: true,
};

let addMovie = (movieObj, baseArr) => {
  var elementsToClean = document.querySelectorAll(".addedElement");
  var len = elementsToClean.length;
  for (var i = 0; i < len; i++) {
    elementsToClean[i].parentNode.removeChild(elementsToClean[i]);
  }

  baseArr.push(movieObj);
  showMovies(baseArr);
};

setTimeout(addMovie, 2000, favoriteMovie, movies);

// Task 3
// Can you make sure the new movie you just added is showing on the screen?
// ✅

// Task 4
// Create a form anywhere on your page. The form should have
// - 4 input text fields, one for each property of your movie object
// - a "save" button.
// When the button is clicked
// - The field values should be used to create a new movie object literal
// - The new movie is then added to the list of movies and gets displayed on your page
// TIP: Use the functions you created on tasks 1-3

document.getElementById("save").addEventListener("click", (obj) => {
  event.preventDefault();
  let movTitle = document.getElementById("textInput1").value;
  let movDirector = document.getElementById("textInput2").value;
  let movGenre = document.getElementById("textInput3").value;
  let movWatched = true;

  if (document.getElementById("selectInput1").value == "Unwatched movie") {
    movWatched = false;
  }

  let newMovie = {
    title: movTitle,
    director: movDirector,
    type: movGenre,
    haveWatched: movWatched,
  };

  addMovie(newMovie, movies);

  document.getElementById("textInput1").value = "";
  document.getElementById("textInput2").value = "";
  document.getElementById("textInput3").value = "";
  document.getElementById("selectInput1").value = "Watched movie";
});
