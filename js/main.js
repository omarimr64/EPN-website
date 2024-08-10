"use strict";

// Navbar menu functionality
const navbar = document.querySelector("header nav");
const openMenu = document.querySelector(".bars");
const menu = document.querySelector("header nav ul");
const closeMenu = document.querySelector(".close");
const links = document.querySelectorAll("header nav ul li a");

const startMenu = function () {
  menu.classList.add("active");
  document.body.classList.add("stop-scroll");
};
const endMenu = function () {
  menu.classList.remove("active");
  document.body.classList.remove("stop-scroll");
};

for (const link of links) {
  link.addEventListener("click", endMenu);
}
openMenu.addEventListener("click", startMenu);
closeMenu.addEventListener("click", endMenu);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    endMenu();
  }
});

// Make the navigation bar sticky
const addSticky = function () {
  navbar.classList.toggle("sticky", window.scrollY > 0);
};
window.addEventListener("scroll", addSticky);
