const elements = document.querySelectorAll('.fade-in');

elements.forEach((el, i) => {
  el.style.transitionDelay = `${i * 200}ms`; // or whatever you're using

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        el.classList.add('visible');

        // Remove the delay after the initial transition completes
        setTimeout(() => {
          el.style.transitionDelay = '0s';
        }, 600 + i * 200); // match your .fade-in transition duration + delay

        observer.unobserve(el);
      }
    });
  }, { threshold: 0.1 });

  observer.observe(el);
});

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

