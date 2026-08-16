
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


const secoes = document.querySelectorAll('main section[id], main[id]');
const links = document.querySelectorAll('.header-menu a');

if ('IntersectionObserver' in window && secoes.length && links.length) {
    const navIo = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                links.forEach(link => {
                    link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, { threshold: 0.5 });

    secoes.forEach(secao => navIo.observe(secao));
}

function scrollSuave(){
    const links = document.querySelectorAll('.header-menu a[href^="#"]');

    function scrollSection(event){
        event.preventDefault();
    }
}
