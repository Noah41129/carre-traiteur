/* ═══════════════════════════════════════════════════════════
   CARRÉ TRAITEUR — Thème Halloween (décor)
   Chargé par le script en tête de index.html seulement si le thème est actif.
   ═══════════════════════════════════════════════════════════ */

(function () {
  const BAT_SVG =
    '<svg viewBox="0 0 64 32" fill="currentColor" aria-hidden="true"><path d="M32 11L33.1 11L34.6 7.2L35.4 11.6L40 9.6L47 8.2L55 9.2L63 12.6L59.5 14L57.5 17.6L54.6 15.6L51.6 19.4L48.4 17.2L45 21.2L41.6 18.8L37.6 21.6L35 21.4L33.4 23.6L32 24.6L30.6 23.6L29 21.4L26.4 21.6L22.4 18.8L19 21.2L15.6 17.2L12.4 19.4L9.4 15.6L6.5 17.6L4.5 14L1 12.6L9 9.2L17 8.2L24 9.6L28.6 11.6L29.4 7.2L30.9 11Z"/></svg>';

  const SPIDER_SVG =
    '<svg viewBox="0 0 40 40" aria-hidden="true">' +
      '<g stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round">' +
        '<path d="M15 17L7 11L4 16M15 20L6 19L2 24M15 23L7 26L4 32M16 26L10 32L8 37"/>' +
        '<path d="M25 17L33 11L36 16M25 20L34 19L38 24M25 23L33 26L36 32M24 26L30 32L32 37"/>' +
      '</g>' +
      '<ellipse cx="20" cy="23" rx="6" ry="7" fill="currentColor"/>' +
      '<circle cx="20" cy="14" r="4.2" fill="currentColor"/>' +
      '<circle cx="18.4" cy="13.4" r="0.9" fill="#F28C28"/>' +
      '<circle cx="21.6" cy="13.4" r="0.9" fill="#F28C28"/>' +
    '</svg>';

  // top, durée, décalage, taille, sens, masquée sur mobile ?, position figée (mouvements réduits)
  const BATS = [
    { top: '14%', dur: 17, delay: -2,  size: 46, rtl: false, mobile: true,  rest: '14vw' },
    { top: '22%', dur: 21, delay: -11, size: 30, rtl: true,  mobile: true,  rest: '70vw' },
    { top: '9%',  dur: 25, delay: -6,  size: 24, rtl: false, mobile: false, rest: '40vw' },
    { top: '30%', dur: 19, delay: -15, size: 36, rtl: true,  mobile: false, rest: '84vw' },
    { top: '18%', dur: 29, delay: -20, size: 20, rtl: false, mobile: true,  rest: '58vw' },
  ];

  function init() {
    const hero = document.getElementById('hero');
    if (hero) {
      const layer = document.createElement('div');
      layer.className = 'hw-layer';
      layer.setAttribute('aria-hidden', 'true');

      let html = '<div class="hw-moon"></div><div class="hw-fog"></div>';
      BATS.forEach(b => {
        html +=
          `<div class="hw-bat${b.rtl ? ' rtl' : ''}${b.mobile ? '' : ' hide-mobile'}" ` +
          `style="--top:${b.top};--dur:${b.dur}s;--delay:${b.delay}s;--size:${b.size}px;--rest:${b.rest}">` +
          `<div class="hw-bat-inner">${BAT_SVG}</div></div>`;
      });
      html += `<div class="hw-spider"><span class="hw-thread"></span>${SPIDER_SVG}</div>`;
      layer.innerHTML = html;

      // Juste au-dessus de l'image, sous le texte du hero
      const bg = hero.querySelector('.hero-bg');
      bg ? bg.after(layer) : hero.prepend(layer);

      const eyebrow = hero.querySelector('.hero-eyebrow');
      if (eyebrow) {
        const ribbon = document.createElement('p');
        ribbon.className = 'hw-ribbon';
        ribbon.innerHTML = '<span aria-hidden="true">🎃</span> Joyeux Halloween <span aria-hidden="true">🎃</span>';
        eyebrow.before(ribbon);
      }
    }

    const tagline = document.querySelector('.footer-tagline');
    if (tagline) {
      const wish = document.createElement('p');
      wish.className = 'hw-footer';
      wish.innerHTML = '<span aria-hidden="true">🦇</span> Joyeux Halloween ! <span aria-hidden="true">🦇</span>';
      tagline.after(wish);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
