let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".navbar a");
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(l => l.classList.remove("active"));

            this.classList.add("active");
        });
    });
});


let sectrions = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navbar a");
  navLinks.forEach(link => {
    link.addEventListener("click", function () {

      navLinks.forEach(l => l.classList.remove("active"));

      this.classList.add("active");

      navbar.classList.remove("active");
      menuIcon.classList.remove("bx-x");
    });
  });
});