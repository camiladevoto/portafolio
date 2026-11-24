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
  const refresh = () => {
    const cutoff = window.scrollY + revealLine();
    const panelTop = focusItems[0].offsetParent.getBoundingClientRect().top + window.scrollY;
    focusItems.forEach(item => item.classList.toggle('is-pending', !motion.matches && panelTop + item.offsetTop > cutoff));
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
  refresh();
}
