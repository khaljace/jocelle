
// SLIDER
const slider = document.querySelector(".slider");
const pages = document.querySelectorAll(".page");
let currentPage = 0;

function updateSlider() {
  slider.style.transform = `translateX(-${currentPage * 100}vw)`;
}

document.querySelector(".nav.left").onclick = () => {
  if (currentPage > 0) {
    currentPage--;
    updateSlider();
  }
};

document.querySelector(".nav.right").onclick = () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    updateSlider();
  }
};

// MODALS
const yesBtn = document.getElementById("yesBtn");
const talkBtn = document.getElementById("talkBtn");
const yesModal = document.getElementById("yesModal");
const talkModal = document.getElementById("talkModal");

yesBtn.onclick = () => yesModal.classList.remove("hidden");
talkBtn.onclick = () => talkModal.classList.remove("hidden");

document.querySelectorAll(".close").forEach(btn => {
  btn.onclick = () => {
    yesModal.classList.add("hidden");
    talkModal.classList.add("hidden");
  };
});

// MUSIC
const bgMusic = document.getElementById("bgMusic");
let musicStarted = false;

function startMusic() {
  if (!musicStarted) {
    bgMusic.volume = 0;
    bgMusic.play();
    let v = 0;
    const fade = setInterval(() => {
      v += 0.05;
      bgMusic.volume = Math.min(v, 0.6);
      if (v >= 0.6) clearInterval(fade);
    }, 100);
    musicStarted = true;
  }
}

document.addEventListener("click", startMusic, { once: true });

// HEARTS
const hearts = document.querySelector(".hearts");

setInterval(() => {
  const heart = document.createElement("span");
  heart.textContent = "💙";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = 14 + Math.random() * 20 + "px";
  heart.style.animationDuration = 6 + Math.random() * 6 + "s";
  hearts.appendChild(heart);

  setTimeout(() => heart.remove(), 12000);
}, 600);
