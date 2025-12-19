// ===== BACKGROUND MUSIC FIX =====
const bgMusic = document.getElementById("bgMusic");
let musicStarted = false;

function startMusic() {
  if (!musicStarted) {
    bgMusic.volume = 0;
    bgMusic.play().then(() => {
      // Smooth fade-in
      let vol = 0;
      const fade = setInterval(() => {
        vol += 0.05;
        bgMusic.volume = Math.min(vol, 0.6);
        if (vol >= 0.6) clearInterval(fade);
      }, 100);
    });
    musicStarted = true;
  }
}

// Start music on ANY user interaction
document.addEventListener("click", startMusic, { once: true });
document.addEventListener("touchstart", startMusic, { once: true });


// ===== BASIC CHECK =====
console.log("Script loaded");

// ===== SLIDER =====
const slider = document.querySelector(".slider");
const pages = document.querySelectorAll(".page");
let currentPage = 0;

function updateSlider() {
  slider.style.transform = `translateX(-${currentPage * 100}vw)`;
}

document.querySelector(".nav.left").addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    updateSlider();
  }
});

document.querySelector(".nav.right").addEventListener("click", () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    updateSlider();
  }
});

// ===== BUTTONS =====
const yesBtn = document.getElementById("yesBtn");
const talkBtn = document.getElementById("talkBtn");

const yesModal = document.getElementById("yesModal");
const talkModal = document.getElementById("talkModal");

// YES button
yesBtn.addEventListener("click", () => {
  yesModal.classList.remove("hidden");
});

// TALK button
talkBtn.addEventListener("click", () => {
  talkModal.classList.remove("hidden");
});

// ===== CLOSE MODALS =====
document.querySelectorAll(".close").forEach(btn => {
  btn.addEventListener("click", () => {
    yesModal.classList.add("hidden");
    talkModal.classList.add("hidden");
  });
});

// Close when clicking outside modal box
document.querySelectorAll(".modal").forEach(modal => {
  modal.addEventListener("click", e => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });
});
// ===== FLOATING HEARTS =====
const heartsContainer = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("span");
  heart.innerHTML = "💙";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 6 + Math.random() * 6 + "s";
  heart.style.fontSize = 14 + Math.random() * 20 + "px";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 12000);
}

setInterval(createHeart, 600);

