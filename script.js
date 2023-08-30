const surpriseButton = document.getElementById('surpriseButton');
const fallingHearts = document.getElementById('fallingHearts');
const birthdaySong = document.getElementById('birthdaySong');

surpriseButton.addEventListener('click', () => {
  fallingHearts.innerHTML = '';
  for (let i = 0; i < 10; i++) {
    createFallingHeart();
  }
  birthdaySong.play();
});

function createFallingHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  const xPos = Math.random() * window.innerWidth;
  const animationDuration = Math.random() * 2 + 1;
  heart.style.left = `${xPos}px`;
  heart.style.animationDuration = `${animationDuration}s`;
  fallingHearts.appendChild(heart);
}
