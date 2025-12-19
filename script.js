document.addEventListener('DOMContentLoaded', () => {

  /* -------------------
     GOOGLE SHEETS LOGGER
  ------------------- */
  const SHEET_URL = 'https://script.google.com/macros/s/AKfycbXXXXXXXXXXXX/exec';

  function logResponse(answer) {
    fetch(SHEET_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ response: answer })
    }).catch(() => {});
  }

  /* -------------------
     SLIDER LOGIC
  ------------------- */
  const slider = document.querySelector('.slider');
  const pages = document.querySelectorAll('.page');
  const leftBtn = document.querySelector('.nav.left');
  const rightBtn = document.querySelector('.nav.right');

  let current = 0;

  function updateSlider() {
    slider.style.transform = `translateX(-${current * 100}vw)`;
    typePage(pages[current]);
  }

  leftBtn?.addEventListener('click', () => {
    if (current > 0) {
      current--;
      updateSlider();
    }
  });

  rightBtn?.addEventListener('click', () => {
    if (current < pages.length - 1) {
      current++;
      updateSlider();
    }
  });

  /* -------------------
     TYPEWRITER (SLIDES)
  ------------------- */
  function typePage(page) {
    const elements = page.querySelectorAll('.typewriter');

    elements.forEach(el => {
      if (el.dataset.done) return;

      el.dataset.text = el.innerHTML;
      el.innerHTML = '';
      let i = 0;

      const interval = setInterval(() => {
        el.innerHTML += el.dataset.text.charAt(i);
        i++;
        if (i >= el.dataset.text.length) {
          clearInterval(interval);
          el.dataset.done = 'true';
          el.classList.remove('typewriter');
        }
      }, 30);
    });
  }

  typePage(pages[0]);

  /* -------------------
     MODALS
  ------------------- */
  const yesBtn = document.getElementById('yesBtn');
  const talkBtn = document.getElementById('talkBtn');
  const yesModal = document.getElementById('yesModal');
  const talkModal = document.getElementById('talkModal');
  const closeButtons = document.querySelectorAll('.close');

  yesBtn?.addEventListener('click', () => {
    yesModal.classList.remove('hidden');
    typeModal(yesModal);
    logResponse('YES');
  });

  talkBtn?.addEventListener('click', () => {
    talkModal.classList.remove('hidden');
    typeModal(talkModal);
    logResponse('TALK FIRST');
  });

  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.modal')?.classList.add('hidden');
    });
  });

  /* -------------------
     TYPEWRITER (MODALS)
  ------------------- */
  function typeModal(modal) {
    const elements = modal.querySelectorAll('.typewriter');

    elements.forEach(el => {
      if (el.dataset.done) return;

      el.dataset.text = el.innerHTML;
      el.innerHTML = '';
      let i = 0;

      const interval = setInterval(() => {
        el.innerHTML += el.dataset.text.charAt(i);
        i++;
        if (i >= el.dataset.text.length) {
          clearInterval(interval);
          el.dataset.done = 'true';
          el.classList.remove('typewriter');
        }
      }, 30);
    });
  }

  /* -------------------
     BACKGROUND MUSIC (MOBILE SAFE)
  ------------------- */
  const bgMusic = document.getElementById('bgMusic');
  if (bgMusic) {
    bgMusic.volume = 0.4;

    document.addEventListener('touchstart', () => {
      bgMusic.play().catch(() => {});
    }, { once: true });
  }

  /* -------------------
     FLOATING HEARTS
  ------------------- */
  const hearts = document.querySelector('.hearts');

  if (hearts) {
    setInterval(() => {
      const heart = document.createElement('span');
      heart.textContent = '💙';
      heart.style.left = Math.random() * 100 + 'vw';
      heart.style.animationDuration = 6 + Math.random() * 6 + 's';
      hearts.appendChild(heart);

      setTimeout(() => heart.remove(), 12000);
    }, 500);
  }

});
