// Progressive enhancement: all navigation works without JavaScript.
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
if (toggle && nav) {
  toggle.hidden = false;
  nav.classList.add('collapsible');
  const closeMenu = () => toggle.setAttribute('aria-expanded', 'false');
  toggle.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', String(toggle.getAttribute('aria-expanded') !== 'true'));
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      toggle.focus();
    }
  });
  nav.addEventListener('click', (event) => { if (event.target.closest('a')) closeMenu(); });
  window.matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);
}
document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

// Animate headings as they enter the viewport. Content stays visible without JS.
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const reveal = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-revealed');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('.section-heading h2, .project-card h3, .evidence-section h2').forEach((heading) => {
    if (heading.getBoundingClientRect().top >= window.innerHeight) reveal.observe(heading);
  });
}
