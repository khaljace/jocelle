console.log("Script loaded");

// SLIDER
const slider = document.querySelector(".slider");
const pages = document.querySelectorAll(".page");
let currentPage = 0;

function updateSlider() {
  slider.style.transform = `translateX(-${currentPage * 100}vw)`;
  runTypewriter(currentPage);
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

// TYPEWRITER
function typeWriter(el, speed = 30) {
  const text = el.textContent;
  el.textContent = "";
  let i = 0;

  function type() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

function runTypewriter(index) {
  const elements = pages[index].querySelectorAll(".typewriter");
  elements.forEach(el => {
    if (!el.dataset.typed) {
      el.dataset.typed = "true";
      typeWriter(el);
    }
  });
}

runTypewriter(0);

// MODALS
const yesModal = document.getElementById("yesModal");
const talkModal = document.getElementById("talkModal");

document.getElementById("yesBtn").onclick = () =>
  yesModal.classList.remove("hidden");

document.getElementById("talkBtn").onclick = () =>
  talkModal.classList.remove("hidden");

document.querySelectorAll(".close").forEach(btn => {
  btn.onclick = () => {
    yesModal.classList.add("hidden");
    talkModal.classList.add("hidden");
  };
});

// MUSIC
const bgMusic = document.getElementById("bgMusic");
let started = false;

document.addEventListener("click", () => {
  if (!started) {
    bgMusic.volume = 0;
    bgMusic.play();
    let v = 0;
    const fade = setInterval(() => {
      v += 0.05;
      bgMusic.volume = Math.min(v, 0.6);
      if (v >= 0.6) clearInterval(fade);
    }, 100);
    started = true;
  }
}, { once: true });

// HEARTS
const hearts = document.querySelector(".hearts");

setInterval(() => {
  const h = document.createElement("span");
  h.textContent = "💙";
  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = 14 + Math.random() * 20 + "px";
  hearts.appendChild(h);
  setTimeout(() => h.remove(), 12000);
}, 700);
