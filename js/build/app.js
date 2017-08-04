jQuery(document).ready(function($) {
    //utilities
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

	$('.c-features li').matchHeight();
	$('.js-eq > .u-half').matchHeight();
	$('.c-staff > li').matchHeight();

	//slider
	var slider = new Swiper('.c-slider', {
	    paginationClickable: true,
	    autoplay: 7000,
	    loop: true,
	    speed: 1000,
	    effect: 'fade'
	});

	//quotes
	var quotes = new Swiper('.c-quotes', {
	    paginationClickable: true,
	    pagination: '.swiper-pagination',
	    autoplay: 8000,
	    loop: true,
	    speed: 1000
	});

	//menu
	$(window).scroll(function() {
	   if ($(window).scrollTop() > 300){
	   		$('.c-header').addClass('is-sticky');
	   }
	   else{
	   		$('.c-header').removeClass('is-sticky');
	   	}
	});

	function numberWithCommas(x) {
    	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
	function removeCommas(s){
	  return s.replace(/,/g, '');
	}

	$('.js-thousands').keyup(function() {
      var me = $(this);
      var value = me.val();
      var valueFormatted = numberWithCommas(removeCommas(value));
      me.val(valueFormatted);
    });
	

	//Goal Setup
	function resizeInput() {
		if(!$(this).hasClass('js-thousands')){
			var placeholderLength = 8;
	    	$(this).attr('size', placeholderLength);
	    }
	}
	$('.c-setup input[type="text"]').each(resizeInput);
	$('.c-setup input[type="text"]').keyup(resizeInput);

	var swiperGoal = new Swiper('.swiper-wizard', {
        pagination: '.swiper-pagination',
        nextButton: '.c-setup-footer .s--next',
        prevButton: '.c-setup-footer .s--back',
        paginationType: 'progress',
        simulateTouch: false,
        autoHeight: true,
        onSlideChangeEnd: function(){
	    	$('.swiper-slide-active input').focus();
	    }
    });
    $('.c-setup-footer .s--restart').click(function(e) {
    	e.preventDefault();
    	swiperGoal.slideTo(0);
    });
});

