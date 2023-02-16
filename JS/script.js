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

// WHEN SCROLLING
const nav = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY;

  if (scrollPos) {
    if (scrollPos > 10) {
      nav.classList.add("scroll");
    } else {
      nav.classList.remove("scroll");
    }
  }
});
