document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll('#menu a');
    const sections = document.querySelectorAll('h1');

    window.addEventListener('scroll', () => {
        let fromTop = window.scrollY + 20;

        menuItems.forEach(link => {
            let section = document.querySelector(link.getAttribute('href'));
            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });
});
