document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinks');

  // Toggle mobile navigation menu when hamburger is clicked
  if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener('click', () => {
      hamburgerBtn.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close mobile menu when any nav link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }
});