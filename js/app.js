
var navbar = document.getElementById("navbar");
var navbarY = navbar.offsetTop;
var navBarHeight = navbar.offsetHeight;

var aboutSection = document.getElementById("about");

/**
 * When the navbar is scrolled past, it is set to be stuck to the top of the screen and the space is filled by adjusting the padding of the about section
 */
function updateNavBar() {

    if (window.pageYOffset >= navbarY) {
        navbar.classList.add("sticky");
        aboutSection.style.marginTop = navBarHeight + "px";
    } else {
        navbar.classList.remove("sticky");
        aboutSection.style.marginTop = "0px";
    }
}

window.onscroll = function() {updateNavBar()};