var nav = document.getElementsByTagName('nav')[0];
var navDropdownButton = document.getElementsByClassName('nav-dropdown-button')[0];
navDropdownButton.addEventListener('click', function() {
    nav.classList.toggle('open');
});

// Go through all the nav items; if the nav item is currently active give it the .active class to highlight it
var navItems = document.querySelectorAll('nav a');
for (i = 0; i < navItems.length; i++) {
    var match = navItems[i].href.match(new RegExp('\\w+\\/([\\/\\w-]+)'));
    if (match && window.location.pathname.includes(match[1])) {
        navItems[i].className = 'active';
        // The Refugee Resettlement page is listed twice, so the highest level should be active. I have no knowledge of JavaScript, so there is probably a better way to do this--this is just what my limited knowledge and internet searching got me:
        if (window.location.pathname.includes("refugee-resettlement")) {
            var unactive = document.getElementById("community-service");
            unactive.classList.remove("active");
        }
    }
}
