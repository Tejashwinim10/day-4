let timer; 
let elapsedTime = 0; 

const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
const timeDisplay = document.getElementById('timeDisplay');

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600).toString().padStart(2, '0');
  const minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
  const secs = (seconds % 60).toString().padStart(2, '0');
  return `${hours}:${minutes}:${secs}`;
}


startBtn.addEventListener('click', () => {
  timer = setInterval(() => {
    elapsedTime++;
    timeDisplay.textContent = formatTime(elapsedTime);
  }, 1000);
  startBtn.disabled = true; 
});


stopBtn.addEventListener('click', () => {
  clearInterval(timer);
  startBtn.disabled = false; 
});


resetBtn.addEventListener('click', () => {
  clearInterval(timer);
  elapsedTime = 0;
  timeDisplay.textContent = formatTime(elapsedTime);
  startBtn.disabled = false; 
});
