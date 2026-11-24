// The Projects tab always links to the index. The adjacent button opens its list.
const projectsNav = document.querySelector('.projects-nav');
if (projectsNav) {
  const trigger = projectsNav.querySelector('.projects-toggle');
  const menu = projectsNav.querySelector('.project-menu');
  let closeTimer;
  const setOpen = (open) => {
    clearTimeout(closeTimer);
    trigger.setAttribute('aria-expanded', String(open));
    menu.hidden = !open;
  };

  trigger.hidden = false;
  trigger.addEventListener('click', () => setOpen(menu.hidden));
  projectsNav.addEventListener('pointerenter', (event) => {
    if (event.pointerType === 'mouse') setOpen(true);
  });
  projectsNav.addEventListener('pointerleave', (event) => {
    if (event.pointerType === 'mouse' && !menu.contains(document.activeElement)) {
      closeTimer = setTimeout(() => setOpen(false), 280);
    }
  });
  menu.addEventListener('pointerenter', () => clearTimeout(closeTimer));
  projectsNav.addEventListener('focusout', (event) => {
    if (!projectsNav.contains(event.relatedTarget)) setOpen(false);
  });
  document.addEventListener('click', (event) => {
    if (!projectsNav.contains(event.target)) setOpen(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || menu.hidden) return;
    if (menu.contains(document.activeElement)) trigger.focus();
    setOpen(false);
  });
}

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const focusItems = [...document.querySelectorAll('.focus-section .focus-item')];
if (focusItems.length) {
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const revealLine = () => window.innerHeight * 0.8;
  // Use layout offsets so the sliding transform does not move its own trigger.
  const refresh = (initial = false) => {
    const cutoff = window.scrollY + revealLine();
    const panelTop = focusItems[0].offsetParent.getBoundingClientRect().top + window.scrollY;
    focusItems.forEach((item) => {
      const buffer = initial ? 0 : item.classList.contains('is-pending') ? -12 : 12;
      item.classList.toggle('is-pending', !motion.matches && panelTop + item.offsetTop > cutoff + buffer);
    });
  };
  let scheduled = false;
  const schedule = () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      refresh();
    });
  };
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  motion.addEventListener?.('change', schedule);
  window.addEventListener('pageshow', schedule);
  document.fonts?.ready.then(schedule);
  refresh(true);
}

const careerCarousel = document.querySelector('.career-carousel');
if (careerCarousel) {
  const track = careerCarousel.querySelector('.carousel-track');
  const slides = [...track.children];
  const controls = careerCarousel.querySelector('.carousel-controls');
  const buttons = [...controls.querySelectorAll('button')];
  const position = controls.querySelector('.carousel-position');
  const progress = controls.querySelector('.carousel-progress');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const startOf = (slide) => slide.getBoundingClientRect().left - track.getBoundingClientRect().left + track.scrollLeft;
  const limit = () => Math.max(0, track.scrollWidth - track.clientWidth);
  const nearestSlide = () => {
    if (track.scrollLeft >= limit() - 2) return slides.length - 1;
    return slides.reduce((best, slide, index) => (
      Math.abs(startOf(slide) - track.scrollLeft) < Math.abs(startOf(slides[best]) - track.scrollLeft) ? index : best
    ), 0);
  };
  const update = () => {
    const index = nearestSlide();
    const count = String(index + 1).padStart(2, '0');
    position.textContent = `${count} / ${slides.length}`;
    if (progress) {
      progress.max = slides.length;
      progress.value = index + 1;
    }
    buttons[0].disabled = track.scrollLeft <= 2;
    buttons[1].disabled = track.scrollLeft >= limit() - 2;
  };
  const move = (step) => {
    const index = Math.min(slides.length - 1, Math.max(0, nearestSlide() + step));
    track.scrollTo({ left: startOf(slides[index]), behavior: reduced.matches ? 'instant' : 'smooth' });
  };
  buttons.forEach((button) => button.addEventListener('click', () => move(Number(button.dataset.carouselStep))));
  track.addEventListener('keydown', (event) => {
    if (event.target !== track || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    move(event.key === 'ArrowRight' ? 1 : -1);
  });
  track.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  controls.hidden = false;
  update();
}
