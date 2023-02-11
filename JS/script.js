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

//
// ***** PRODUCT PAGES ***** //
//
//  CAROUSEL

// Select all slides
const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX property to index * 100%
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// select next slide button
const nextSlide = document.querySelector(".btn-next");

// current slide counter
let curSlide = 0;

// maximum number of slides
let maxSlide = slides.length - 1;

// add event listener and next slide functionality
nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  //   move slide by -100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// select prev slide button
const prevSlide = document.querySelector(".btn-prev");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});
