const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
    revealEls.forEach(el => el.classList.add('is-hidden'));

    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('is-hidden');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealEls.forEach(el => io.observe(el));
}

function scrollSuave() {
  const links = document.querySelectorAll(
    '.header-menu a[href^="#"], .header-menu a[href^="/"]'
  );

  function scrollSection(event) {
    const href = event.currentTarget.getAttribute('href');

    if (!href.startsWith('#')) return;

    event.preventDefault();

    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  links.forEach((link) => {
    link.addEventListener('click', scrollSection);
  });
}

scrollSuave();