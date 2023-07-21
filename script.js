document.addEventListener('DOMContentLoaded', (event) => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const containers = document.querySelectorAll('.container');
    const heroButtons = document.querySelectorAll('.hero-buttons button');

    // Function to hide all sections
    function hideAll() {
        containers.forEach((container) => {
            container.style.display = 'none';
        });
    }

    function addClickListenerToButtons(buttons) {
        buttons.forEach(button => {
            button.addEventListener('click', function(event) {
                event.preventDefault();
                hideAll(); // Hide all sections
                document.getElementById(this.getAttribute('onclick').split("'")[1]).style.display = 'block'; // Show clicked section
                navLinks.forEach(link => link.classList.remove('active'));
                navLinks.forEach(link => {
                    if (link.getAttribute('onclick') === this.getAttribute('onclick')) {
                        link.classList.add('active');
                    }
                });
            });
        });
    }

    // Add click listeners to nav links and hero buttons
    addClickListenerToButtons(navLinks);
    addClickListenerToButtons(heroButtons);

    // Display home section by default on page load
    hideAll();
    document.getElementById('home').style.display = 'block';
    document.querySelector('nav ul li a').classList.add('active');
});
