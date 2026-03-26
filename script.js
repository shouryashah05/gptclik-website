const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
    rootMargin: '0px 0px -5% 0px'
  }
);

reveals.forEach((el) => observer.observe(el));

window.addEventListener('load', () => {
  document.querySelectorAll('.intro-content .reveal').forEach((el) => {
    el.classList.add('visible');
  });
});
