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
// ***** HEADER - ALL PAGES ***** //
//

const nav = document.getElementById("navbar");

// WHEN SCROLLING
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
// ***** PATTERN SECTION - DROP-DOWN-MENU ***** //
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

//
// ***** PRODUCT PAGE ***** //
//
const fgn = document.getElementById("fgn");
const fge = document.getElementById("fge");
const ggn = document.getElementById("ggn");
const gge = document.getElementById("gge");
const mgn = document.getElementById("mgn");
const egn = document.getElementById("egn");
const egs = document.getElementById("egs");
const gln = document.getElementById("gln");

// OPEN CLOSE PRODUCT PAGES
// Fridas genser Norsk --
const fgnCard = document.getElementById("fgnCard");
const pCloseFgn = document.getElementById("closeIconFgn");
// Open product modal
fgnCard.addEventListener("click", function () {
  fgn.classList.add("active");
});
// Close product modal
pCloseFgn.addEventListener("click", function () {
  fgn.classList.remove("active");
});

// Fridas genser English --
const fgeCard = document.getElementById("fgeCard");
const pCloseFge = document.getElementById("closeIconFge");
fgeCard.addEventListener("click", function () {
  fge.classList.add("active");
});
pCloseFge.addEventListener("click", function () {
  fge.classList.remove("active");
});

// Malins genser norsk --
const mgnCard = document.getElementById("mgnCard");
const pCloseMgn = document.getElementById("closeIconMgn");
mgnCard.addEventListener("click", function () {
  mgn.classList.add("active");
});
pCloseMgn.addEventListener("click", function () {
  mgn.classList.remove("active");
});

// Guros genser norsk --
const ggnCard = document.getElementById("ggnCard");
const pCloseGgn = document.getElementById("closeIconGgn");
ggnCard.addEventListener("click", function () {
  ggn.classList.add("active");
});
pCloseGgn.addEventListener("click", function () {
  ggn.classList.remove("active");
});

// Guros genser english --
const ggeCard = document.getElementById("ggeCard");
const pCloseGge = document.getElementById("closeIconGge");
ggeCard.addEventListener("click", function () {
  gge.classList.add("active");
});
pCloseGge.addEventListener("click", function () {
  gge.classList.remove("active");
});

// Evelinagenser norsk --
const egnCard = document.getElementById("egnCard");
const pCloseEgn = document.getElementById("closeIconEgn");
egnCard.addEventListener("click", function () {
  egn.classList.add("active");
});
pCloseEgn.addEventListener("click", function () {
  egn.classList.remove("active");
});

// Evelinagenser svenska --
const egsCard = document.getElementById("egsCard");
const pCloseEgs = document.getElementById("closeIconEgs");
egsCard.addEventListener("click", function () {
  egs.classList.add("active");
});
pCloseEgs.addEventListener("click", function () {
  egs.classList.remove("active");
});

// Guros lue norsk --
const glnCard = document.getElementById("glnCard");
const pCloseGln = document.getElementById("closeIconGln");
glnCard.addEventListener("click", function () {
  gln.classList.add("active");
});
// Close product modal
pCloseGln.addEventListener("click", function () {
  gln.classList.remove("active");
});

//
// ***** PRODUCT MODAL - CAROUSEL ***** //
//
FIXME;
const slides = document.querySelectorAll(".slide");
const nextSlide = document.querySelector(".btn-next");
const prevSlide = document.querySelector(".btn-prev");

// loop through slides
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// current slide counter
let curSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

// add event listener and next slide functionality
nextSlide.addEventListener("click", function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

// add prev slide functionality
prevSlide.addEventListener("click", function () {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});
