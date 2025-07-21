document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll('.fade-in');

  let lastScrollY = window.scrollY;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const scrollingDown = window.scrollY > lastScrollY;

      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        if (!scrollingDown) {
          // 위로 스크롤할 때만 사라지게
          entry.target.classList.remove('visible');
        }
      }
    });

    lastScrollY = window.scrollY;
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -60% 0px"
  });

  faders.forEach(el => observer.observe(el));
});