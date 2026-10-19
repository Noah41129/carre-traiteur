/* ═══════════════════════════════════════════════════════════
   CARRÉ TRAITEUR — Thème Noël (décor)
   Chargé par le script en tête de index.html seulement si le thème est actif.
   ═══════════════════════════════════════════════════════════ */

(function () {
  const SPARKLE_SVG =
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C12.8 7 17 11.2 24 12C17 12.8 12.8 17 12 24C11.2 17 7 12.8 0 12C7 11.2 11.2 7 12 0Z"/></svg>';

  const rand = (a, b) => a + Math.random() * (b - a);

  // Sapin en trois étages, posé sur la ligne de base
  function tree(x, h, base) {
    const p = [[0, -1], [.22, -.62], [.12, -.62], [.32, -.3], [.2, -.3], [.4, 0], [-.4, 0], [-.2, -.3], [-.32, -.3], [-.12, -.62], [-.22, -.62]];
    return 'M' + p.map(([dx, dy]) => `${(x + dx * h).toFixed(1)} ${(base + dy * h).toFixed(1)}`).join('L') + 'Z';
  }
  const treeCap = (x, h, base) =>
    `M${x} ${base - h}L${(x + .116 * h).toFixed(1)} ${(base - .8 * h).toFixed(1)}L${(x - .116 * h).toFixed(1)} ${(base - .8 * h).toFixed(1)}Z`;

  // Paysage d'hiver : sapins, maisons éclairées, cathédrale Sainte-Croix, sol enneigé
  function skylineSVG() {
    const B = 120;
    const TREES = [[40, 62], [78, 44], [128, 84], [170, 52], [225, 38], [262, 58], [470, 54], [505, 80], [545, 46], [600, 36],
      [650, 64], [700, 44], [935, 70], [975, 98], [1020, 56], [1068, 78], [1115, 48], [1160, 66]];
    const trees = TREES.map(([x, h]) => tree(x, h, B)).join('');
    const caps = TREES.map(([x, h]) => treeCap(x, h, B)).join('');
    return (
      '<svg viewBox="0 0 1200 140" preserveAspectRatio="xMidYMax slice" fill="currentColor" aria-hidden="true">' +
        `<path class="nl-tree" d="${trees}"/>` +
        // maisons
        '<path class="nl-tree" d="M300 118V92L325 74L350 92V118ZM360 118V86L390 64L420 86V118ZM402 78V64H410V84Z"/>' +
        // cathédrale Sainte-Croix : deux tours couronnées, façade à pignon, flèche centrale
        '<path class="nl-tree" d="M826 62L830 6L834 62Z' +
          'M772 118V44H800V118ZM860 118V44H888V118ZM800 118V70L830 56L860 70V118Z' +
          'M770 44L772 33L774 44ZM779 44L781 35L783 44ZM789 44L791 35L793 44ZM798 44L800 33L802 44Z' +
          'M858 44L860 33L862 44ZM867 44L869 35L871 44ZM877 44L879 35L881 44ZM886 44L888 33L890 44Z"/>' +
        `<path class="nl-cap-snow" d="${caps}"/>` +
        '<path class="nl-roof-snow" d="M298 93L325 73L352 93M358 87L390 63L422 87M770 45H802M858 45H890M800 71L830 57L860 71"/>' +
        '<path class="nl-lit" d="M310 98H318V107H310ZM332 98H340V107H332ZM372 94H381V104H372ZM399 94H408V104H399ZM784 56H788V68H784ZM872 56H876V68H872Z"/>' +
        '<circle class="nl-lit" cx="830" cy="82" r="7"/>' +
        '<path class="nl-snow" d="M0 140V112Q120 100 260 110T560 108T860 104T1200 110V140Z"/>' +
      '</svg>'
    );
  }

  // Guirlande : arcs de fil avec ampoules réparties sur chaque arc
  function garland(arcs) {
    const w = 1000 / arcs;
    let d = 'M0 4', bulbs = '', n = 0;
    for (let i = 0; i < arcs; i++) {
      const x0 = i * w, x1 = x0 + w, cx = x0 + w / 2;
      d += `Q${cx} 70 ${x1} 4`;
      [0.2, 0.4, 0.6, 0.8].forEach((t, k) => {
        const x = (1 - t) * (1 - t) * x0 + 2 * (1 - t) * t * cx + t * t * x1;
        const y = (1 - t) * (1 - t) * 4 + 2 * (1 - t) * t * 70 + t * t * 4;
        const color = ['c0', 'c1', 'c0', 'c2'][n % 4];
        bulbs += `<i class="nl-bulb ${color}${k % 2 ? ' hide-mobile' : ''}" style="left:${(x / 10).toFixed(2)}%;top:${(y / 60 * 100).toFixed(2)}%;--del:-${(n * 0.37 % 2.4).toFixed(2)}s"></i>`;
        n++;
      });
    }
    return `<div class="nl-garland"><svg viewBox="0 0 1000 60" preserveAspectRatio="none" aria-hidden="true"><path d="${d}"/></svg>${bulbs}</div>`;
  }

  function flakes(count, mobileEvery) {
    let html = '';
    for (let i = 0; i < count; i++) {
      const s = rand(2, 7.5);
      html += `<i class="nl-flake${mobileEvery && i % mobileEvery ? ' hide-mobile' : ''}" style="left:${rand(0, 100).toFixed(1)}%;` +
        `--s:${s.toFixed(1)}px;--o:${rand(.45, .95).toFixed(2)};--b:${s > 5.5 ? 1.2 : 0}px;--d:${rand(9, 19).toFixed(1)}s;` +
        `--del:-${rand(0, 19).toFixed(1)}s;--sway:${rand(12, 40).toFixed(0)}px"></i>`;
    }
    return html;
  }

  const sparkle = (style, cls = '') => `<span class="nl-sparkle${cls}" style="${style}">${SPARKLE_SVG}</span>`;
  const bauble = (cls, style) =>
    `<div class="nl-bauble ${cls}" style="${style}"><span class="nl-string"></span><span class="nl-cap"></span><span class="nl-ball"></span></div>`;

  // Ajoute un calque décoratif (sous le contenu) dans une section
  function deco(id, html) {
    const section = document.getElementById(id);
    if (!section) return;
    const layer = document.createElement('div');
    layer.className = 'nl-deco';
    layer.setAttribute('aria-hidden', 'true');
    layer.innerHTML = html;
    section.prepend(layer);
    if (layer.querySelector('.nl-flake')) fallLayers.push(layer);
  }

  // La neige tombe sur toute la hauteur réelle du calque (sections longues, écrans bas)
  const fallLayers = [];
  function syncFall() {
    fallLayers.forEach(l => l.style.setProperty('--fall', `${l.offsetHeight + 24}px`));
  }

  function init() {
    const hero = document.getElementById('hero');
    if (hero) {
      const layer = document.createElement('div');
      layer.className = 'nl-layer';
      layer.setAttribute('aria-hidden', 'true');

      let html = '';
      for (let i = 0; i < 22; i++) {
        html += `<i class="nl-star${i % 2 ? ' hide-mobile' : ''}" style="left:${rand(2, 98).toFixed(1)}%;top:${rand(14, 40).toFixed(1)}%;--del:-${rand(0, 3.2).toFixed(1)}s"></i>`;
      }
      // Étincelles réservées aux grands écrans : sur mobile elles se colleraient au bandeau
      html += sparkle('left:13%;top:27%;width:20px;height:20px;--del:-1s', ' hide-mobile') +
              sparkle('left:91%;top:30%;width:15px;height:15px;--del:-2.6s', ' hide-mobile') +
              sparkle('left:40%;top:17%;width:12px;height:12px;--del:-.4s', ' hide-mobile');
      html += garland(6);
      html += flakes(46, 2);
      // Boules accrochées aux points d'attache de la guirlande (jonctions des arcs)
      html += bauble('gold hb1', 'left:16.667%;--sw:3.6s;--del:-1.2s') +
              bauble('red hb2', 'left:83.333%;--sw:3.1s;--del:-.4s') +
              bauble('green hb3 hide-mobile', 'left:33.333%;--sw:2.8s;--del:-2s') +
              bauble('gold hb4 hide-mobile', 'left:66.667%;--sw:3.3s;--del:-.9s');
      html += `<div class="nl-skyline">${skylineSVG()}</div>`;
      layer.innerHTML = html;

      // Juste au-dessus de l'image, sous le texte du hero
      const bg = hero.querySelector('.hero-bg');
      bg ? bg.after(layer) : hero.prepend(layer);
      fallLayers.push(layer);

      const eyebrow = hero.querySelector('.hero-eyebrow');
      if (eyebrow) {
        const ribbon = document.createElement('p');
        ribbon.className = 'nl-ribbon';
        ribbon.innerHTML = `${SPARKLE_SVG}<span class="txt">Joyeuses fêtes</span>${SPARKLE_SVG}`;
        eyebrow.before(ribbon);
      }
    }

    deco('notre-histoire', bauble('gold', 'right:78px;--sw:3.4s'));
    deco('savoir-faire', flakes(18) + sparkle('right:7%;top:3rem;width:16px;height:16px'));
    deco('prix-remporte', bauble('red', 'right:86px;--sw:3s;--del:-1s'));
    deco('galerie', flakes(18) + sparkle('right:9%;top:3.4rem;width:14px;height:14px;--del:-1.8s'));
    deco('contact', bauble('green', 'right:70px;--sw:3.2s;--del:-.6s') + `<div class="nl-skyline to-footer">${skylineSVG()}</div>`);

    const tagline = document.querySelector('.footer-tagline');
    if (tagline) {
      const wish = document.createElement('p');
      wish.className = 'nl-footer';
      wish.innerHTML = '<i class="nl-flake-ico" aria-hidden="true"></i>Joyeuses fêtes&nbsp;!<i class="nl-flake-ico" aria-hidden="true"></i>';
      tagline.after(wish);
    }

    syncFall();
    window.addEventListener('load', syncFall);
    window.addEventListener('resize', syncFall, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
