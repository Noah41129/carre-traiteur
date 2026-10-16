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

  // Sorcière sur son balai (silhouette, passe devant la lune de temps en temps)
  const WITCH_SVG =
    '<svg viewBox="0 0 120 70" fill="currentColor" aria-hidden="true">' +
      '<path d="M4 50L110 38" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>' +
      '<path d="M22 47L2 40L6 48L0 54L8 55L4 62L22 52Z"/>' +
      '<path d="M58 44L36 30L30 40L40 38L34 48Z"/>' +
      '<path d="M56 46L62 24L72 26L70 44Z"/>' +
      '<circle cx="70" cy="19" r="5.5"/>' +
      '<path d="M74 18L81 21L74 22Z"/>' +
      '<path d="M64 18L56 26L60 26L58 32L64 24Z"/>' +
      '<path d="M58 15L82 13L82 15.5L58 17.5Z"/>' +
      '<path d="M62 15L77 13.5L72 4L62 0L66 6Z"/>' +
      '<path d="M68 28L82 40M64 44L74 50L80 50" stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="none"/>' +
    '</svg>';

  // Petite citrouille en ombre chinoise, seuls les yeux et la bouche sont éclairés
  const pumpkin = (x, y, s) =>
    `<g transform="translate(${x} ${y}) scale(${s})">` +
      '<path d="M-12 0C-20 0-23-6-23-11S-19-22-12-22C-8-24-4-24 0-23C4-24 8-24 12-22C19-22 23-17 23-11S20 0 12 0Z"/>' +
      '<path d="M-1-23L0-29H3L1-23Z"/>' +
      '<path class="hw-lit" d="M-11-13L-7-17L-3-13ZM3-13L7-17L11-13ZM-12-8H12L9-5L6-7L3-4L0-7L-3-4L-6-7L-9-5Z"/>' +
    '</g>';

  // Paysage gothique en ombre chinoise : arbre mort, tombes, manoir éclairé, grille
  function skylineSVG() {
    let fence = '';
    for (let x = 880; x <= 1040; x += 11) fence += `M${x} 94V72L${x + 1.5} 67L${x + 3} 72V94Z`;
    fence += 'M878 76H1046V78.5H878ZM878 87H1046V89.5H878Z';
    return (
      '<svg viewBox="0 0 1200 120" preserveAspectRatio="xMidYMax slice" fill="currentColor" aria-hidden="true">' +
        '<path d="M0 120V98Q140 86 280 94T560 92T840 88T1080 94T1200 90V120Z"/>' +
        '<g stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">' +
          '<path d="M206 98L210 66L205 44" stroke-width="8"/>' +
          '<path d="M209 66L232 48L246 44M232 48L236 34M207 54L186 38L174 37M186 38L183 26M205 44L213 24L222 16M213 24L207 12M205 44L198 30L190 26" stroke-width="3.5"/>' +
          '<path d="M246 44L256 46M222 16L230 14M174 37L166 32M183 26L178 18M190 26L184 20M236 34L242 26M207 12L203 4" stroke-width="1.8"/>' +
        '</g>' +
        '<path d="M318 96V80Q326 68 334 80V96ZM352 97V86Q357 79 362 86V97ZM418 95V68H422V95ZM410 75H430V79H410ZM1086 94V78Q1094 66 1102 78V94Z"/>' +
        '<path d="M742 92V60L770 40L798 60V92ZM798 92V52L812 30L826 52V92ZM811 31V22H813V31ZM752 53V42H759V47Z"/>' +
        '<path class="hw-lit" d="M754 66H761V76H754ZM779 66H786V76H779ZM808 58H814V67H808Z"/>' +
        `<path d="${fence}"/>` +
        pumpkin(478, 96, 1) + pumpkin(1018, 94, 0.75) +
      '</svg>'
    );
  }

  const eyes = (style) => `<div class="hw-eyes" style="${style}"><i></i><i></i></div>`;

  // Ajoute un calque décoratif (sous le contenu) dans une section
  function deco(id, html) {
    const section = document.getElementById(id);
    if (!section) return;
    const layer = document.createElement('div');
    layer.className = 'hw-deco';
    layer.setAttribute('aria-hidden', 'true');
    layer.innerHTML = html;
    section.prepend(layer);
  }

  // top, durée, décalage, taille, sens, masquée sur mobile ?, position figée (mouvements réduits)
  const BATS = [
    { top: '14%', dur: 17, delay: -2,  size: 46, rtl: false, mobile: true,  rest: '14vw' },
    { top: '22%', dur: 21, delay: -11, size: 30, rtl: true,  mobile: true,  rest: '70vw' },
    { top: '9%',  dur: 25, delay: -6,  size: 24, rtl: false, mobile: false, rest: '40vw' },
    { top: '30%', dur: 19, delay: -15, size: 36, rtl: true,  mobile: false, rest: '84vw' },
    { top: '18%', dur: 29, delay: -20, size: 20, rtl: false, mobile: true,  rest: '58vw' },
    { top: '40%', dur: 23, delay: -8,  size: 18, rtl: false, mobile: false, rest: '30vw' },
    { top: '12%', dur: 33, delay: -26, size: 16, rtl: true,  mobile: false, rest: '90vw' },
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
      html += `<div class="hw-witch">${WITCH_SVG}</div>`;
      html += eyes('left:3.5%;top:56%;--dur:11s;--delay:-3s') + eyes('left:15%;top:38%;--dur:14s;--delay:-9s');
      html += `<div class="hw-skyline">${skylineSVG()}</div>`;
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

    const spider = `<div class="hw-spider sm"><span class="hw-thread"></span>${SPIDER_SVG}</div>`;
    deco('notre-histoire', spider);
    deco('savoir-faire', '<div class="hw-fog"></div>' + eyes('left:4%;bottom:2.4rem;--dur:12s;--delay:-5s'));
    deco('galerie', '<div class="hw-fog"></div>' + eyes('right:5%;bottom:2.6rem;--dur:10s;--delay:-2s') + eyes('left:6%;top:42%;--dur:15s;--delay:-11s'));
    deco('contact', spider + `<div class="hw-skyline to-footer">${skylineSVG()}</div>`);

    const tagline = document.querySelector('.footer-tagline');
    if (tagline) {
      const wish = document.createElement('p');
      wish.className = 'hw-footer';
      wish.innerHTML = '<i class="hw-bat-ico" aria-hidden="true"></i> Joyeux Halloween ! <i class="hw-bat-ico" aria-hidden="true"></i>';
      tagline.after(wish);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
