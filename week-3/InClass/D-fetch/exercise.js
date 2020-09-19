/*
================

1. Create an HTML file that uses this javascript file.
2. The HTML file should contain a form with 2 inputs: (latitude and longitude), and a button with the text GET.
3. When you click in the button, you should use fetch function to get information from the
URL https://fcc-weather-api.glitch.me/api/current?lat=35&lon=45 with user latitude and longitude.
4. When you get the response from the server, print the current temperature in an <h3> marker.
5. Validate the form when you click on the button, if the inputs are empty or are not numeric, show a warning message

================
*/

document.getElementById("submit").addEventListener("click", () => {
  event.preventDefault();
  let api = "https://fcc-weather-api.glitch.me/api/current";
  let lon = document.getElementById("textInput1").value;
  let lat = document.getElementById("textInput2").value;
  let url = `${api}?lat=${lat}&lon=${lon}`;

  console.log(url);

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let elementsToClean = document.querySelectorAll(".addedElement");
      let len = elementsToClean.length;
      for (var i = 0; i < len; i++) {
        elementsToClean[i].parentNode.removeChild(elementsToClean[i]);
      }
      console.log(data.main);
      console.log(Object.keys(data.main).length);
      for (let i = 0; i < Object.keys(data.main).length; i++) {
        let h3 = document.createElement("h3");
        h3.className = "addedElement";
        h3.innerHTML = `${Object.keys(data.main)[i]}: ${
          Object.values(data.main)[i]
        }`;
        document.getElementById("info").appendChild(h3);
      }
    });
});
