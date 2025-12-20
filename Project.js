setTimeout(function () {
    document.getElementById("Jerusalem").style.display = "none";
}, 3000);
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navUl = document.querySelector('nav ul');

    if (navToggle && navUl) {
        navToggle.addEventListener('click', function () {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';


            navUl.classList.toggle('show');


            navToggle.setAttribute('aria-expanded', !isExpanded);


            const spans = navToggle.querySelectorAll('span');
            if (!isExpanded) {

                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {

                spans[0].style.transform = '';
                spans[1].style.opacity = '1';
                spans[2].style.transform = '';
            }
        });


        document.addEventListener('click', function (event) {
            const isClickInsideNav = navToggle.contains(event.target) || navUl.contains(event.target);

            if (!isClickInsideNav && navUl.classList.contains('show')) {
                navUl.classList.remove('show');
                navToggle.setAttribute('aria-expanded', 'false');


                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '1';
                spans[2].style.transform = '';
            }
        });


        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach((link, index) => {
            link.addEventListener('keydown', function (e) {
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    const nextLink = navLinks[index + 1];
                    if (nextLink) nextLink.focus();
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    const prevLink = navLinks[index - 1];
                    if (prevLink) prevLink.focus();
                } else if (e.key === 'Escape') {
                    navUl.classList.remove('show');
                    navToggle.setAttribute('aria-expanded', 'false');
                    navToggle.focus();
                }
            });
        });
    }


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});