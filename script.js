const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      nav.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });
}

// Keep only one speaker bio expanded at a time so the section stays easy to scan.
const speakerDetails = [...document.querySelectorAll('.speaker-details')];
speakerDetails.forEach((detail) => {
  detail.addEventListener('toggle', () => {
    if (!detail.open) return;
    speakerDetails.forEach((other) => {
      if (other !== detail) other.open = false;
    });
  });
});
