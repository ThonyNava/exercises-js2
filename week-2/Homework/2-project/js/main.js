// - When clicking **blue** it should change:

//   - **Jumbotron** background color to `#588fbd`
//   - **Donate a bike** button background color to `#ffa500`
//   - **Volunteer** button background color to `black` and text color to `white`

document.getElementById("blueBtn").addEventListener("click", () => {
  document.querySelector(".jumbotron").style.backgroundColor = "#588fbd";
  document.querySelector(".jumbotron").style.color = "#ffffff";

  document.querySelector(".jumbotron .btn-primary").style.backgroundColor =
    "#ffa500";

  document.querySelector(".jumbotron .btn-secondary").style.backgroundColor =
    "#161616";
  document.querySelector(".jumbotron .btn-secondary").style.color = "#ffffff";
});

// - When clicking **orange** it should change:

//   - **Jumbotron** background color to `#f0ad4e`
//   - **Donate a bike** button background color to `#5751fd`
//   - **Volunteer** button background color to `#31b0d5` and text color to `white`

document.getElementById("orangeBtn").addEventListener("click", () => {
  document.querySelector(".jumbotron").style.backgroundColor = "#f0ad4e";
  document.querySelector(".jumbotron").style.color = "#ffffff";

  document.querySelector(".jumbotron .btn-primary").style.backgroundColor =
    "#5751fd";

  document.querySelector(".jumbotron .btn-secondary").style.backgroundColor =
    "#31b0d5";
  document.querySelector(".jumbotron .btn-secondary").style.color = "#ffffff";
});

// - When clicking **green** it should change:

//   - **Jumbotron** background color to `#87ca8a`
//   - **Donate a bike** button background color to `black`
//   - **Volunteer** button background color to `#8c9c08`

document.getElementById("greenBtn").addEventListener("click", () => {
  document.querySelector(".jumbotron").style.backgroundColor = "#87ca8a";
  document.querySelector(".jumbotron").style.color = "#ffffff";

  document.querySelector(".jumbotron .btn-primary").style.backgroundColor =
    "#161616";

  document.querySelector(".jumbotron .btn-secondary").style.backgroundColor =
    "#8c9c08";
  document.querySelector(".jumbotron .btn-secondary").style.color = "#ffffff";
});

// ## Part 2

// When the submit button is pressed, it should check that all the form fields are valid:
// - The **Your name**, **Email** and **Describe yourself** fields need to be non-empty (Hint: their `value` length has to be greater than zero)
// - For the **Email** field also check if it contains the `@` character
// - For all the fields that invalid, it should make their background color `red`.

// IF all the fields are valid, when you click **Submit** it should:
// - Display an alert to thank you for filling out the form
// - Blank out (make empty) all the text fields

document.querySelector("form button").addEventListener("click", () => {
  event.preventDefault();
  let inputs = document.querySelectorAll("form .form-group");
  checkingForms(inputs);
});

function checkingForms(inputs) {
  let ok = "✔";
  let empty = "*";
  inputs.forEach((obj) => {
    let label = obj.childNodes[1].innerHTML.split("");
    if (label[label.length - 1] === ok || label[label.length - 1] === empty) {
      let labelArr = obj.childNodes[1].innerHTML.split("");
      let label = labelArr.slice(0, labelArr.length - 1).join("");
      obj.childNodes[1].innerHTML = label;
    }
    switch (obj.childNodes[3].type) {
      case "email":
        if (
          obj.childNodes[3].value.length > 0 &&
          obj.childNodes[3].value.split("").includes("@")
        ) {
          if (obj.childNodes[1].innerHTML.split("").includes(ok) === false) {
            obj.childNodes[1].innerHTML += ` ${ok}`;
            obj.childNodes[3].style.background = "rgba(50,205,50,.1)";
          }
        } else {
          if (obj.childNodes[1].innerHTML.split("").includes(empty) === false) {
            obj.childNodes[1].innerHTML += ` ${empty}`;
            obj.childNodes[3].style.background = "rgba(220,20,60,.1)";
          }
        }
        break;
      case "text":
        if (obj.childNodes[3].value.length > 0) {
          if (obj.childNodes[1].innerHTML.split("").includes(ok) === false) {
            obj.childNodes[1].innerHTML += ` ${ok}`;
            obj.childNodes[3].style.background = "rgba(50,205,50,.1)";
          }
        } else {
          if (obj.childNodes[1].innerHTML.split("").includes(empty) === false) {
            obj.childNodes[1].innerHTML += ` ${empty}`;
            obj.childNodes[3].style.background = "rgba(220,20,60,.1)";
          }
        }
        break;
      case "textarea":
        if (obj.childNodes[3].value.length > 0) {
          if (obj.childNodes[1].innerHTML.split("").includes(ok) === false) {
            obj.childNodes[1].innerHTML += ` ${ok}`;
            obj.childNodes[3].style.background = "rgba(50,205,50,.1)";
          }
        } else {
          if (obj.childNodes[1].innerHTML.split("").includes(empty) === false) {
            obj.childNodes[1].innerHTML += ` ${empty}`;
            obj.childNodes[3].style.background = "rgba(220,20,60,.1)";
          }
        }
    }
  });
}

// **Important hint:** In your function that handles clicks on the `Submit` button you will need to call `event.preventDefault()`
// to stop the browser from refreshing the page. To read more on how to do this: https://developer.mozilla.org/en/docs/Web/API/Event/preventDefault
