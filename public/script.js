const elements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  const stickyThreshold = 10;

  if (window.scrollY > stickyThreshold) {
    nav.classList.add('sticky-active');
  } else {
    nav.classList.remove('sticky-active')
  }
 
});

elements.forEach(el => {
    el.classList.add('visible');
  });

document.getElementById("close-banner").addEventListener("click", function () {
  document.getElementById("updates-banner").style.display = "none";
});

