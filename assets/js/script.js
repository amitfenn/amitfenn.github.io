/* ============================================================
   AMIT FENN — Site Script
   Handles: nav scroll state, hero institution fade,
            scroll reveal, hamburger menu
   ============================================================ */

(function () {
  'use strict';

  /* ── Nav scroll state ──────────────────────────────────────── */
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  function onScroll() {
    const y = window.scrollY;

    // Add shadow when scrolled
    navbar.classList.toggle('scrolled', y > 20);

    // Fade institutions as hero scrolls away
    const institutions = document.querySelector('.hero-institutions');
    if (institutions) {
      institutions.classList.toggle('faded', y > 120);
    }

    lastScroll = y;
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  /* ── Scroll reveal ─────────────────────────────────────────── */
  const revealEls = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Staggered delay based on index within parent
          const siblings = Array.from(
            entry.target.parentElement.querySelectorAll('.reveal')
          );
          const idx = siblings.indexOf(entry.target);
          entry.target.style.transitionDelay = `${idx * 80}ms`;
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  revealEls.forEach((el) => observer.observe(el));

  /* ── Hamburger menu ────────────────────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    // Close on link click
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  /* ── Active nav link on scroll ─────────────────────────────── */
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  function updateActiveNav() {
    let current = '';
    sections.forEach((sec) => {
      const top = sec.offsetTop - 80;
      if (window.scrollY >= top) current = sec.id;
    });

    navAnchors.forEach((a) => {
      a.style.color = '';
      if (a.getAttribute('href') === `#${current}`) {
        a.style.color = 'var(--tum)';
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });

})();
