// Animate headings as they enter the viewport. Content stays visible without JS.
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const reveal = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-revealed');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('main h2, main h3, .wrap > .section > h2, .wrap > .section .card h3').forEach((heading) => {
    reveal.observe(heading);
  });
}
