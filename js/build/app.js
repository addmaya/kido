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

	//inputs
	$('select').change(function() {
		$(this).blur();
	});

	$('.o-input input').blur(function() {
	  var me = $(this);
	  var placeholder = me.attr('placeholder');
	  var value = me.val();

	  if(value){
	    if(me.attr('type') != 'number'){
	    	me.val(placeholder+': '+value);
		}
		else {
			me.val(value);
		}
	  }
	});

	$('.o-input input').click(function() {
	  var me = $(this);
	  var placeholder = me.attr('placeholder')+': ';
	  var value = me.val();
	  
	  if(me.attr('type') != 'number'){
	  		me.val(value.substr(placeholder.length));
	    }
	    else {
	    	me.val(value);
	    }
	  
	});

	$('.o-date').flatpickr();

});

