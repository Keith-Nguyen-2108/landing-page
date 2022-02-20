// TOGGLE ICON BARS MENU
let nav = document.getElementById("nav");
let schedule__item = document.querySelector(".schedule__item");
function toggleIconNav(icon) {
  icon.classList.toggle("fa-times");
  nav.classList.toggle("active");
  schedule__item.classList.toggle("active");
}

//SLIDER
const groupImages = document.querySelector(".section4__group__images");
let listImages = document.querySelectorAll(".section4__slide_image");

//Copy first and last elements
let firstChildCopy = listImages[0].cloneNode(true);
let lastChildCopy = listImages[listImages.length - 1].cloneNode(true);

firstChildCopy.id = "first-copy";
lastChildCopy.id = "last-copy";

groupImages.append(firstChildCopy);
groupImages.prepend(lastChildCopy);

let index = 1;
let width = listImages[index].clientWidth;
let intervalID;

groupImages.style.transform = "translateX(" + -width * index + "px)";

const slideShow = () => {
  intervalID = setInterval(() => {
    index++;
    groupImages.style.transform = "translateX(" + -width * index + "px)";
    groupImages.style.transition = ".5s";
  }, 3000);
};

const getSlides = () => {
  listImages = document.querySelectorAll(".section4__slide_image");
};

groupImages.addEventListener("transitionend", () => {
  getSlides();
  if (listImages[index].id === firstChildCopy.id) {
    groupImages.style.transition = "none";
    index = 1;
    groupImages.style.transform = "translateX(" + -width * index + "px)";
  }
  if (listImages[index].id === lastChildCopy.id) {
    groupImages.style.transition = "none";
    index = listImages.length - 2;
    groupImages.style.transform = "translateX(" + -width * index + "px)";
  }
});

groupImages.onmouseenter = () => {
  clearInterval(intervalID);
};

groupImages.onmouseleave = () => {
  slideShow();
};

const nextSlide = () => {
  getSlides();
  if (index >= listImages.length - 1) return;
  index++;
  groupImages.style.transform = "translateX(" + -width * index + "px)";
  groupImages.style.transition = ".5s";
};

const prevSlide = () => {
  getSlides();
  if (index < 1) return;
  index--;
  groupImages.style.transform = "translateX(" + -width * index + "px)";
  groupImages.style.transition = ".5s";
};

slideShow();
