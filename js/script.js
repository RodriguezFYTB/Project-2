document.addEventListener('DOMContentLoaded', function () {
    
    const navLinks = document.querySelectorAll('#main-navbar a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navLinks.forEach(function(link) {
                link.classList.remove('active');
            });

            this.classList.add('active');
        });
    });
});
