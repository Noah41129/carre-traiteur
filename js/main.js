/* ═══════════════════════════════════════════════════════════
   CARRÉ TRAITEUR — main.js
   ═══════════════════════════════════════════════════════════ */

// ─── NAVBAR SCROLL ───────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ─── BURGER MENU ─────────────────────────────────────────────
const burger   = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ─── SMOOTH ACTIVE NAV ───────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a[href^="#"]');

function setActiveNav() {
  const scrollY = window.scrollY + 120;
  sections.forEach(section => {
    const top    = section.offsetTop;
    const height = section.offsetHeight;
    const id     = section.getAttribute('id');
    if (scrollY >= top && scrollY < top + height) {
      navItems.forEach(a => a.classList.remove('active'));
      const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
}
window.addEventListener('scroll', setActiveNav, { passive: true });

// ─── SCROLL REVEAL ───────────────────────────────────────────
const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger children in the same parent
      const delay = Array.from(entry.target.parentNode.children)
        .filter(el => el.classList.contains('reveal'))
        .indexOf(entry.target) * 120;

      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);

      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => observer.observe(el));

// ─── YOUTUBE FACADE ──────────────────────────────────────────
const ytFacade = document.getElementById('yt-facade');
if (ytFacade) {
  ytFacade.addEventListener('click', function() {
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/eV0kC8D2Ivs?autoplay=1';
    iframe.title = 'Carré Traiteur — Vidéo';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;border:none;';
    this.replaceWith(iframe);
  });
}

// ─── GALLERY LIGHTBOX (simple) ────────────────────────────────
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(img => {
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed; inset: 0; z-index: 9999;
      background: rgba(17,17,16,0.94);
      display: flex; align-items: center; justify-content: center;
      cursor: zoom-out;
      animation: fadeIn 0.25s ease;
    `;
    const style = document.createElement('style');
    style.textContent = '@keyframes fadeIn { from{opacity:0} to{opacity:1} }';
    document.head.appendChild(style);

    const big = document.createElement('img');
    big.src = img.src.replace('w=375', 'w=1200');
    big.style.cssText = `
      max-width: 90vw; max-height: 88vh;
      object-fit: contain;
      box-shadow: 0 20px 80px rgba(0,0,0,0.7);
    `;

    const close = document.createElement('button');
    close.textContent = '✕';
    close.style.cssText = `
      position: absolute; top: 1.5rem; right: 2rem;
      background: none; border: none; color: #fff;
      font-size: 1.5rem; cursor: pointer; opacity: 0.7;
    `;
    close.addEventListener('click', () => overlay.remove());
    overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });

    overlay.appendChild(big);
    overlay.appendChild(close);
    document.body.appendChild(overlay);
  });
});
