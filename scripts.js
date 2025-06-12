// Toggle mobile menu

function toggleMobileMenu() {
  document.getElementById("menu").classList.toggle("active");
}

// Typed.js animation
document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed('#element', {
    strings: ['Student ', 'Tech Enthusiast', ' Learner'],
    typeSpeed: 150,
    backSpeed: 100,
    loop: true,
    showCursor: true,
    // cursorChar: '|'
  });
  var typed = new Typed('#project1', {
    strings: ['More projects coming soon!'],
    typeSpeed: 150,
    backSpeed: 100,
    loop: true,
    showCursor: true,
    // cursorChar: '|'
  });
});

function openModal(src, type) {
  const modal = document.getElementById('certificateModal');
  const previewArea = document.getElementById('previewArea');
  const viewFullBtn = document.getElementById('viewFullBtn');

  previewArea.innerHTML =
    type === 'image'
      ? `<img src="${src}" alt="Certificate Preview" />`
      : `<embed src="${src}#toolbar=0" type="application/pdf" />`;

  viewFullBtn.href = src;
  modal.style.display = 'flex';
}

function closeModal() {
  document.getElementById('certificateModal').style.display = 'none';
  document.getElementById('previewArea').innerHTML = '';
}

// Close modal on ESC or background click
window.onclick = function (e) {
  const modal = document.getElementById('certificateModal');
  if (e.target === modal) {
    closeModal();
  }
};
// Heart sound effect
const heart = document.getElementById('heart');
const audio = new Audio('heart-sound.m4a');

        document.addEventListener('DOMContentLoaded', function() {
            const heart = document.getElementById('heart');
            const heartSound = document.getElementById('heart-sound');

            if (heart && heartSound) {
                heart.addEventListener('click', function() {
                    // Rewind to the start of the audio before playing
                    heartSound.currentTime = 0;
                    heartSound.play();
                });
            }
        });
