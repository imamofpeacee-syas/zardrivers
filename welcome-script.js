document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const getStartedBtn = document.getElementById('getStartedBtn');
  const signInBtn = document.getElementById('signInBtn');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinks');

  // Toggle mobile navigation menu when hamburger is clicked
  if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener('click', () => {
      hamburgerBtn.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close menu automatically when clicking a nav link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // Interactive Click Handlers for Buttons
  if (getStartedBtn) {
    getStartedBtn.addEventListener('click', (e) => {
      // If you are linking to join.html, remove e.preventDefault() if you want it to navigate normally.
      // Keeping it as prompt/alert as requested in your original script setup:
      if (getStartedBtn.getAttribute('href') === 'join.html') {
        // Let it navigate or show alert if needed. Let's let it function normally or fallback:
        return; 
      }
      e.preventDefault();
      alert('Welcome to Zaride! Redirecting to rider registration...');
    });
  }

  if (signInBtn) {
    signInBtn.addEventListener('click', (e) => {
      if (signInBtn.getAttribute('href') === 'signin.html') {
        return;
      }
      e.preventDefault();
      alert('Opening Zaride Sign In page...');
    });
  }

  // Active state styling for nav links
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
      document.querySelectorAll('.nav-links a').forEach(nav => nav.classList.remove('active'));
      this.classList.add('active');
    });
  });
});