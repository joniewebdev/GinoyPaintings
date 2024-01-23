const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const boxes = document.querySelectorAll('.item');
let currentBox = 0;

function showBox(n) {
  boxes[currentBox].style.display = 'none';
  currentBox = (n + boxes.length) % boxes.length;
  boxes[currentBox].style.display = 'block';
}

function prevBox() {
  showBox(currentBox - 1);
}

function nextBox() {
  showBox(currentBox + 1);
}

showBox(currentBox);