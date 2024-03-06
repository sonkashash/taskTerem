const header = document.querySelector(".header");
const yellowBlock = document.querySelector(".yellow");
const greenBlock = document.querySelector(".green");

const blockDelete = (el) => {
  el.classList.toggle("blockVisibility");
};

const blockChange = (el1, el2) => {
  el1.classList.toggle("yellow");
  el1.classList.toggle("green");
  el2.classList.toggle("yellow");
  el2.classList.toggle("green");
};

