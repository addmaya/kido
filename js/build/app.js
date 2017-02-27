jQuery(document).ready(function($) {
    
    //scroll to hash
    $(document).on('click', 'a[href*="#"]:not([href="#"])', function(e) {
	    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	        if (target.length) {
	            $('html, body').animate({
	                scrollTop: target.offset().top
	            }, 1000);
	            e.preventDefault();
	        }
	    }
	});

	//slider
	var slider = new Swiper('.c-slider', {
	    paginationClickable: true,
	    autoplay: 7000,
	    loop: true,
	    speed: 1000,
	    effect: 'fade'
	});

});

