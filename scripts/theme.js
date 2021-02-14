// Select the button
const btn = document.querySelector('.btnTheme');
const header = document.querySelector('header');
const dayNight = document.querySelector('#dayNight');
const footer = document.querySelector('footer');
const modal = document.querySelector('.modal');
const formTitle = document.querySelector('.h2');
const darkModalOverlay = document.querySelector('.modalOverlay');
const cancelButton = document.querySelector('#cancelButton');


//sumir o texto de cancelar 
cancelButton.addEventListener('mouseover', () => {
  cancelButton.innerHTML = '';
});
cancelButton.addEventListener('mouseout', () => {
  cancelButton.innerHTML = 'Cancelar';
})

// Listen for a click on the button
const darkMode = btn.addEventListener('click', function() {

  // Then toggle (add/remove) classes to change theme
  document.body.classList.toggle('darkTheme');
  header.classList.toggle('darkHeader');
  footer.classList.toggle('darkFooter'); 
  darkModalOverlay.classList.toggle('darkModalOverlay');
  modal.classList.toggle('darkModal');
  modal.classList.toggle('darkModal::before');
  modal.classList.toggle('darkModal::after');
  formTitle.classList.toggle('darkTitle');
 

  //dark or light symbol
  dayNight.classList.toggle('fa-moon');
  dayNight.classList.toggle('fa-sun');
  
  dayNight.classList.toggle('whiteMoon');
  dayNight.classList.toggle('yellowSun');
});

let dark = localStorage.getItem('darkMode');



