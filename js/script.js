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


const scriptURL = 'https://script.google.com/macros/s/AKfycbxRbGlNhY4QiXPr-N2p84Syqt2d8b9G-Y9xDFKpX28T8gPm9AMgX4MKae3eYXbw9hKj0A/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  fetch(scriptURL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  })
  .then(response => {
    alert("✅ Form submitted successfully!");
    form.reset();
  })
  .catch(error => {
    alert("❌ Error! Please try again.");
    console.error('Error:', error);
  });
});
