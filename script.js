document.addEventListener('DOMContentLoaded', (event) => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const containers = document.querySelectorAll('.container');

    // Function to hide all sections
    function hideAll() {
        containers.forEach((container) => {
            container.style.display = 'none';
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            hideAll(); // Hide all sections
            document.getElementById(this.getAttribute('onclick').split("'")[1]).style.display = 'block'; // Show clicked section
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Display home section by default on page load
    hideAll();
    document.getElementById('home').style.display = 'block';
    document.querySelector('nav ul li a').classList.add('active');
});
