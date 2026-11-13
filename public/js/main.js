(function () {
  'use strict';
  var doc = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // --- Menú móvil ---
  var toggle = document.querySelector('[data-nav-toggle]');
  var nav = document.querySelector('[data-nav]');
  function setNav(open) {
    if (!toggle || !nav) return;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    nav.classList.toggle('is-open', open);
    doc.classList.toggle('nav-open', open);
  }
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      setNav(toggle.getAttribute('aria-expanded') !== 'true');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setNav(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setNav(false);
    });
  }

  // --- Desplegables del menú ---
  var groups = document.querySelectorAll('[data-dropdown]');
  function closeGroups(except) {
    groups.forEach(function (g) {
      if (g === except) return;
      g.classList.remove('is-open');
      var b = g.querySelector('.nav__trigger');
      if (b) b.setAttribute('aria-expanded', 'false');
    });
  }
  groups.forEach(function (g) {
    var b = g.querySelector('.nav__trigger');
    if (!b) return;
    b.addEventListener('click', function () {
      var open = b.getAttribute('aria-expanded') !== 'true';
      closeGroups(g);
      g.classList.toggle('is-open', open);
      b.setAttribute('aria-expanded', String(open));
    });
    g.addEventListener('focusout', function (e) {
      if (!g.contains(e.relatedTarget) && window.matchMedia('(min-width: 901px)').matches) closeGroups();
    });
  });
  if (groups.length) {
    document.addEventListener('click', function (e) {
      if (!e.target.closest('[data-dropdown]')) closeGroups();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      var open = document.querySelector('[data-dropdown].is-open');
      closeGroups();
      if (open) open.querySelector('.nav__trigger').focus();
    });
  }

  // --- Cabecera y barra de progreso al hacer scroll ---
  var header = document.querySelector('[data-header]');
  var bar = document.querySelector('[data-progress]');
  var ticking = false;
  function onScroll() {
    ticking = false;
    var y = window.scrollY;
    if (header) header.classList.toggle('is-scrolled', y > 12);
    if (bar) {
      var max = doc.scrollHeight - window.innerHeight;
      bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, y / max) : 0) + ')';
    }
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  onScroll();

  // --- Animaciones de entrada ---
  document.querySelectorAll('[data-reveal-group]').forEach(function (g) {
    Array.prototype.forEach.call(g.children, function (child, i) {
      if (!child.hasAttribute('data-reveal')) child.setAttribute('data-reveal', '');
      child.style.transitionDelay = Math.min(i * 70, 560) + 'ms';
    });
  });
  var items = document.querySelectorAll('[data-reveal]');
  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  }

  // --- Sub-navegación de secciones (resalta la sección visible) ---
  var chips = document.querySelectorAll('[data-spy] a[href^="#"]');
  if (chips.length && 'IntersectionObserver' in window) {
    var map = {};
    chips.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        chips.forEach(function (a) { a.classList.remove('is-active'); a.removeAttribute('aria-current'); });
        var a = map[entry.target.id];
        if (a) { a.classList.add('is-active'); a.setAttribute('aria-current', 'true'); }
      });
    }, { rootMargin: '-35% 0px -55% 0px' });
    Object.keys(map).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) spy.observe(el);
    });
  }

  // --- Imprimir / guardar como PDF ---
  document.querySelectorAll('[data-print]').forEach(function (btn) {
    btn.addEventListener('click', function () { window.print(); });
  });

  // --- Inclinación suave de tarjetas con el puntero (solo con mouse) ---
  if (!reduce && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.querySelectorAll('[data-tilt]').forEach(function (el) {
      el.addEventListener('pointermove', function (e) {
        var r = el.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = 'perspective(900px) rotateX(' + (-y * 5).toFixed(2) + 'deg) rotateY(' + (x * 5).toFixed(2) + 'deg) translateY(-4px)';
      });
      el.addEventListener('pointerleave', function () { el.style.transform = ''; });
    });
  }
})();
