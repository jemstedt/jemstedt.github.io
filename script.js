document.addEventListener('DOMContentLoaded', (event) => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const containers = document.querySelectorAll('.container');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            containers.forEach(container => {
                container.classList.add('hidden');
            });
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
            document.querySelector(this.getAttribute('href')).classList.remove('hidden');
        });
    });
});
