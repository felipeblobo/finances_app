// Select the button
const btn = document.querySelector('.btnTheme');
const header = document.querySelector('header');
const dayNight = document.querySelector('#dayNight');
const footer = document.querySelector('footer');
const modal = document.querySelector('.modal');
const formTitle = document.querySelector('.h2');

// Listen for a click on the button
const darkMode = btn.addEventListener('click', function() {

  // Then toggle (add/remove) classes to change theme
  document.body.classList.toggle('dark-theme');
  header.classList.toggle('dark-header');
  footer.classList.toggle('dark-footer'); 
  modal.classList.toggle('dark-modal');
  formTitle.classList.toggle('darkTitle');

  //dark or light symbol
  dayNight.classList.toggle('fa-moon');
  dayNight.classList.toggle('fa-sun');
  
  dayNight.classList.toggle('whiteMoon');
  dayNight.classList.toggle('yellowSun');
});

let dark = localStorage.getItem('darkMode');



