const button = document.getElementById('b');
const result = document.getElementById('s');

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

button.addEventListener('click', () => {
  const min = parseInt(document.getElementById('one').value);
  const max = parseInt(document.getElementById('two').value);
  const randomNumber = generateRandomNumber(min, max);
  result.textContent = randomNumber;
});


