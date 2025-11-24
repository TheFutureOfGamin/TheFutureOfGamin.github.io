document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav');
  const navLinks = document.querySelectorAll('.site-nav a');

  if (!navToggle || !siteNav) return;

  // Open / close nav when the hamburger is tapped
  navToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
    navToggle.classList.toggle('is-open');
  });

  // Close nav after clicking a link (nice on mobile)
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (siteNav.classList.contains('open')) {
        siteNav.classList.remove('open');
        navToggle.classList.remove('is-open');
      }
    });
  });
});
