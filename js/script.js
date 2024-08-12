"use strict";

const arr = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
const img = document.querySelector(".rnd__img");

function showRndImage() {
  const rnd = Math.floor(Math.random() * arr.length);
  img.src = `./images/${arr[rnd]}`;
}

showRndImage();

document.querySelector(".btn").onclick = showRndImage;
