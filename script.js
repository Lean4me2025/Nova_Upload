console.log('MeetMyNova loaded');
window.addEventListener('DOMContentLoaded', () => {
  const voice = new Audio('voice_intro.mp3');
  voice.play().catch(err => console.log("Voice autoplay blocked:", err));
});

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.style.display = 'none');
  const target = document.getElementById(id);
  if (target) {
    target.style.opacity = 0;
    target.style.display = 'block';
    setTimeout(() => { target.style.opacity = 1; }, 100);
  }
}
