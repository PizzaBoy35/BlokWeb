// JavaScript Document

var deButton = document.querySelector("button");
var deNav = document.querySelector("nav ul");

deButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  deNav.classList.toggle("toonMenu");
}
