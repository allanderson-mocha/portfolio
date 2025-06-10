const elements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  const stickyThreshold = 10;

  if (window.scrollY > stickyThreshold) {
    nav.classList.add('sticky-active');
  } else {
    nav.classList.remove('sticky-active')
  }
 
  elements.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 50) {
      el.classList.add('visible');
    }
  });
});

