// The Projects tab always links to the index. The adjacent button opens its list.
const projectsNav = document.querySelector('.projects-nav');
if (projectsNav) {
  const trigger = projectsNav.querySelector('.projects-toggle');
  const menu = projectsNav.querySelector('.project-menu');
  const setOpen = (open) => {
    trigger.setAttribute('aria-expanded', String(open));
    menu.hidden = !open;
  };

  trigger.hidden = false;
  trigger.addEventListener('click', () => setOpen(menu.hidden));
  projectsNav.addEventListener('pointerenter', (event) => {
    if (event.pointerType === 'mouse') setOpen(true);
  });
  projectsNav.addEventListener('pointerleave', (event) => {
    if (event.pointerType === 'mouse' && !menu.contains(document.activeElement)) setOpen(false);
  });
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
