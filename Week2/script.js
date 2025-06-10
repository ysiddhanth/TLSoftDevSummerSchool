// Select the toggle button
const toggleButton = document.getElementById('themeToggle');

// Listen for clicks on the button
toggleButton.addEventListener('click', function() {
  // Toggle the 'dark-mode' class on the body
  document.body.classList.toggle('dark-mode');
});
