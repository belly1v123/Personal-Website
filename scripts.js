// Toggle mobile menu

function toggleMobileMenu() {
  const overlay = document.getElementById("mobileMenuOverlay");
  overlay.classList.toggle("active");
}

// Optional: close overlay when clicking outside or on a link
document.addEventListener('click', function (e) {
  const overlay = document.getElementById("mobileMenuOverlay");
  const hamburger = document.querySelector('.mobile-toggle');
  if (overlay.classList.contains('active')) {
    // Only close if clicking outside overlay and not on hamburger
    if (
      !overlay.contains(e.target) &&
      (!hamburger.contains(e.target))
    ) {
      overlay.classList.remove('active');
    }
    // Close if clicking a link inside overlay
    if (overlay.contains(e.target) && e.target.tagName === 'A') {
      overlay.classList.remove('active');
    }
  }
});

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

// Close modal (and mobile menu) on ESC
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    const modal = document.getElementById('certificateModal');
    if (modal && modal.style.display === 'flex') {
      closeModal();
    }
    const overlay = document.getElementById('mobileMenuOverlay');
    if (overlay && overlay.classList.contains('active')) {
      overlay.classList.remove('active');
    }
  }
});

// Heart sound effect
const heart = document.getElementById('heart');
const audio = new Audio('heart-sound.m4a');

document.addEventListener('DOMContentLoaded', function () {
  const heart = document.getElementById('heart');
  const heartSound = document.getElementById('heart-sound');

  if (heart && heartSound) {
    heart.addEventListener('click', function () {
      // Rewind to the start of the audio before playing
      heartSound.currentTime = 0;
      heartSound.play();
    });
  }
});

function filterProjects(category) {
  const cards = document.querySelectorAll('.project-grid .holder-blue');
  cards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });

  // Update active tab styling
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`.tab-btn[onclick*="${category}"]`).classList.add('active');
}


