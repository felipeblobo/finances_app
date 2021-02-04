// Select the button
const btn = document.querySelector('.btnTheme');
const header = document.querySelector('header');

// Listen for a click on the button
btn.addEventListener('click', function() {
  // Then toggle (add/remove) the .dark-theme class to the body
  document.body.classList.toggle('dark-theme');
  header.classList.toggle('dark-header');

})