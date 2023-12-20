"use strict";
const hexColor = [1, 2, 9, 5, 6, 7, 8, 9, "D", "F", "B", "E", "Y", 3];
const btn = document.querySelector(".btn-flip");
const bodySection = document.querySelector(".body-section");

btn.addEventListener("click", function () {
  let hexColorNum = "#";

  const getRandomColor = function () {
    return Math.floor(Math.random() * hexColor.length);
  };
  for (let i = 0; i < 6; i++) {
    hexColorNum += hexColor[getRandomColor()];
  }
  //   console.log(hexColorNum);

  bodySection.style.backgroundColor = hexColorNum;
  document.querySelector(".color-displayer").textContent = hexColorNum;
  //   console.log(hexColor);
});

// bodySection.classList.backgroundColor = Math.random(hexColor[hex]);
