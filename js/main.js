//
let ID1 = ["Próba János", "20", "2023.06.10", "2023.07.05"];
let ID2 = ["Gipsz Jakab", "14"];

//Variables
let openButton = document.getElementById("open-JS");
let backButton = document.getElementById("back-button-js");

openButton.addEventListener("click", visib);
backButton.addEventListener("click", visib);

//This function controls the visibility of "area"
function visib() {
  let open = document.getElementById("open-area");
  let work = document.getElementById("work-area");

  open.classList.toggle("invisible");
  work.classList.toggle("invisible");
}
