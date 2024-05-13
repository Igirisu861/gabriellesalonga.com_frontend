function navbarPosition(){
    const topElementHeight = document.querySelector('.top-element').offsetHeight;
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > topElementHeight) {
            navbar.classList.add('navbar-fixed');
        } else {
            navbar.classList.remove('navbar-fixed');
        }
    });
}
document.addEventListener('DOMContentLoaded', navbarPosition);



