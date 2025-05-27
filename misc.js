// Smooth scroll fallback (optional if CSS doesn't fully work)
document.querySelectorAll('a.nav-item[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetID = this.getAttribute('href');
    const targetElement = document.querySelector(targetID);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Fade-up on scroll effect
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-up");

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Optional: stop observing once visible
      }
    });
  }, {
    threshold: 0.1
  });

  faders.forEach(el => appearOnScroll.observe(el));
});

  document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    toggleButton.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("year").textContent = new Date().getFullYear();
});
