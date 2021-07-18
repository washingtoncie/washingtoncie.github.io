var nav = document.getElementsByTagName('nav')[0];
var navDropdownButton = document.getElementsByClassName('nav-dropdown-button')[0];
navDropdownButton.addEventListener('click', function() {
    nav.classList.toggle('open');
});

// Go through all the nav items; if the nav item is currently active give it the .active class to highlight it
var navItems = document.querySelectorAll('nav a');
for (i = 0; i < navItems.length; i++) {
    if (navItems[i].href.endsWith(window.location.pathname)) {
        navItems[i].className = 'active';
    }
}
