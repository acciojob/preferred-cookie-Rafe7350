//your JS code here. If required.

const savedFontSize = localStorage.getItem('fontSize');
const savedFontColor = localStorage.getItem('fontColor');

// Apply saved preferences to the page
if (savedFontSize) {
  document.documentElement.style.setProperty('--fontsize', savedFontSize);
  document.getElementById('fontsize').value = savedFontSize;
}
if (savedFontColor) {
  document.documentElement.style.setProperty('--fontcolor', savedFontColor);
  document.getElementById('fontcolor').value = savedFontColor;
}

// Save new preferences on form submit
document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();

  const newFontSize = document.getElementById('fontsize').value + 'px';
  const newFontColor = document.getElementById('fontcolor').value;

  document.documentElement.style.setProperty('--fontsize', newFontSize);
  document.documentElement.style.setProperty('--fontcolor', newFontColor);
  localStorage.setItem('fontSize', newFontSize);
  localStorage.setItem('fontColor', newFontColor);
});

