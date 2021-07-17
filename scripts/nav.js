var nav = document.getElementsByTagName('nav')[0];
var navDropdownButton = document.getElementsByClassName('nav-dropdown-button')[0];
navDropdownButton.addEventListener('click', function() {
    nav.classList.toggle('open');
});
