// Select the button
const btn = document.querySelector('.btnTheme');
const header = document.querySelector('header');
const imgMode = document.querySelector('#imgMode');
const footer = document.querySelector('.footer');
const modal = document.querySelector('.modal');

// Listen for a click on the button
const darkMode = btn.addEventListener('click', function() {
  // Then toggle (add/remove) the .dark-theme class to the body, header and footer
  document.body.classList.toggle('dark-theme');
  header.classList.toggle('dark-header');
  footer.classList.toggle('darkfooter'); 
  modal.classList.toggle('darkmodal');

  //dark or light symbol
  imgMode.classList.toggle('fa-moon');
  imgMode.classList.toggle('fa-sun');
  
  imgMode.classList.toggle('whiteMoon');
  imgMode.classList.toggle('yellowSun');
});

let dark = localStorage.getItem('darkMode');




