"use strict";
function slider() {
  let btnArrow = document.querySelectorAll(".btn-arrow");

  let slideImg = document.querySelectorAll(".slider__img");

  for (let j = 0; j < btnArrow.length; j++) {
    for (let i = 0; i < slideImg.length; i++) {
      btnArrow[j].addEventListener("click", () => {
        slideImg[i].classList.toggle("index");
      });
    }
  }
}

slider();

function benefits() {}
const activeCard = document.querySelectorAll(".benefits__card");
const activeDescription = document.querySelectorAll(".benefirs__description");

for (let i = 0; i < activeCard.length; i++) {
  activeCard[i].addEventListener("click", () => {
    Array.from(activeCard).forEach((el) => {
      el.classList.remove("active");
    });
    Array.from(activeDescription).forEach((elem) => {
      elem.classList.add("hidden");
    });
    activeCard[i].classList.add("active");
    for (let j = 0; j < activeDescription.length; j++) {
      if (i === j) {
        activeDescription[j].classList.remove("hidden");
      }
    }
  });
}

benefits();

function accordion() {
  const elHeader = document.querySelectorAll(".accordion__header");
  const elItem = document.querySelectorAll(".accordion__item");
  const plus = document.querySelectorAll(".accordion_img");

  for (let i = 0; i < elHeader.length; i++) {
    elHeader[i].addEventListener("click", () => {
      Array.from(elItem).forEach((el) => {
        el.classList.remove("accordion__item_show");
      });
      elItem[i].classList.add("accordion__item_show");
      for (let f = 0; f < plus.length; f++) {
        if (i === f) {
          plus[f].removeAttribute("src");
          plus[f].setAttribute("src", "../img/minus.svg");
        } else {
          plus[f].removeAttribute("src");
          plus[f].setAttribute("src", "../img/plus.svg");
        }
      }
    });
  }
}

accordion();
