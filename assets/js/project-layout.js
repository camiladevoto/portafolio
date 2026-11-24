
(() => {
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-assembling');
      observer.unobserve(entry.target);
    }
  }, { rootMargin: '0px 0px -10% 0px' });
  for (const panel of document.querySelectorAll('.case-tile')) observer.observe(panel);

  const slots = [...document.querySelectorAll('.overview-slot')];
  let frame = 0;
  const refresh = () => {
    frame = 0;
    const header = document.querySelector('.site-header');
    const exitLine = Math.max(innerHeight * .22, (header?.getBoundingClientRect().bottom ?? 0) + 48);
    for (const slot of slots) {
      const bounds = slot.getBoundingClientRect();
      slot.dataset.phase = bounds.bottom <= exitLine ? 'passed' : bounds.top >= innerHeight * .88 ? 'waiting' : 'visible';
    }
  };
  const schedule = () => { if (!frame) frame = requestAnimationFrame(refresh); };
  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule);
  addEventListener('pageshow', schedule);
  refresh();
})();

for (const strip of document.querySelectorAll('.case-marquee')) {
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const track = strip.querySelector('.marquee-track');
  const original = track.querySelector('p');
  const refresh = () => {
    track.replaceChildren(original);
    track.classList.toggle('is-ready', !motion.matches);
    strip.closest('.case-overview').classList.toggle('has-marquee', !motion.matches);
    if (motion.matches) return;
    const width = original.getBoundingClientRect().width;
    const repeats = Math.max(1, Math.ceil(strip.clientWidth / Math.max(1, width)));
    for (let index = 1; index < repeats * 2; index++) {
      const copy = original.cloneNode(true);
      copy.setAttribute('aria-hidden', 'true');
      track.append(copy);
    }
  };
  refresh();
  addEventListener('resize', refresh);
  motion.addEventListener?.('change', refresh);
  document.fonts?.ready.then(refresh);
}
