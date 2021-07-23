$(document).ready(function() {
    $('#banner .img').unslider({
    	speed: 500,
    	delay: 3000,
    	keys: true,
    	fluid: true
    });
    $('#banner .img').unslider('initSwipe');
    $('#banner .img').hover(function() {
        $(this).unslider("stop");
    });
});
