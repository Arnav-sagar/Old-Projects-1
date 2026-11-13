const input = document.getElementById('nameInput');
const button = document.getElementById('checkButton');
const exit = document.getElementById('exit')
const boxes = document.getElementById('pro-boxes')
const para3 = document.getElementById('para1')

button.addEventListener('click', () => {
  // Check input value, converted to lowercase
  if (input.value.trim().toLowerCase() === 'arnav') {
    boxes.style.display= "flex"
    exit.style.display= "none"
    para3.style.display= "block"
  } else {
    exit.style.display= "block"
    para3.style.display= "none"

  }
});