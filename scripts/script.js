// JavaScript Document

var deButton = document.querySelector("button");
var deNav = document.querySelector("nav ul");
var deImage = document.querySelector("img.search");
var deSearch = document.querySelector("section.inputfield");

deButton.addEventListener("click", toggleMenu);
deImage.addEventListener("click", toggleSearch);

function toggleMenu(event) {
  deNav.classList.toggle("toonMenu");
}


function toggleSearch(event) {
  deSearch.classList.toggle("toonInput");
}
