"use strict";

const openMenu = document.querySelector(".bars");
const menu = document.querySelector("header nav ul");
const closeMenu = document.querySelector(".close");

openMenu.addEventListener("click", () => {
  menu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  menu.classList.remove("active");
});
