"use strict";

//
// ***** HEADER-NAV ALL PAGES***** //
//

// Menu btn
const openMenubtn = document.querySelector(".open-mobile");
const closeMenubtn = document.querySelector(".close-mobile");
// Nav-list-mobile
const navList = document.querySelector(".main-nav-list-mobile");

// MOBILE MENU //
// OPEN MENU
openMenubtn.addEventListener("click", function () {
  openMenubtn.classList.toggle("hide");
  closeMenubtn.classList.remove("hide");
  navList.classList.remove("hide");
});

// CLOSE MENU
closeMenubtn.addEventListener("click", function () {
  closeMenubtn.classList.toggle("hide");
  openMenubtn.classList.remove("hide");
  navList.classList.add("hide");
});

//
// ***** PATTERN PAGE - DROP-DOWN-MENU ***** //
//
const dropbtn = document.querySelector(".dropbtn");
const dropDownContent = document.querySelector(".dropDownContent");

// When the user clicks on the button, toggle between hiding and showing the dropdown content //
dropbtn.addEventListener("click", function () {
  dropDownContent.classList.toggle("open");
});

// Close the dropdown menu if the user clicks outside of it //
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    dropDownContent.classList.remove("open");
  }
};

//
// ***** PATTERN PAGE - FILTER BY LANGUAGE ***** //
//
const lang = document.querySelector(".language-filter");

const langNorskBtn = document.querySelector(".language-norsk");
const langEnglishBtn = document.querySelector(".language-english");
const langSvenskaBtn = document.querySelector(".language-svenska");

const langNorsk = document.querySelector(".lang-norsk");
const langEnglish = document.querySelector(".lang-english");
const langSvenska = document.querySelector(".lang-svenska");

langEnglishBtn.addEventListener("click", function () {
  langEnglish.classList.remove("hide");
  langNorsk.classList.add("hide");
  langSvenska.classList.add("hide");
});

langNorskBtn.addEventListener("click", function () {
  langNorsk.classList.remove("hide");
  langEnglish.classList.add("hide");
  langSvenska.classList.add("hide");
});

langSvenskaBtn.addEventListener("click", function () {
  langSvenska.classList.remove("hide");
  langEnglish.classList.add("hide");
  langNorsk.classList.add("hide");
});
