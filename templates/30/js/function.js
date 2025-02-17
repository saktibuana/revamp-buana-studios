(function ($) {
    "use strict";
	
	var $window = $(window); 
	
	/* Preloader Effect */
	$window.load(function() {
	    $(".preloader").fadeOut(600);
    });
	
	/* Top Menu */
	$('#navigation ul li a').on('click', function(){
		var id = $(this).attr('href');
		var h = parseFloat($(id).offset().top);
		$('body,html').stop().animate({
			scrollTop: h - 70
		}, 800);
		$(".navbar-collapse").collapse("hide");

		return false;
	});
	
	/* Sticky header */
	$window.scroll(function(){
    	if ($window.scrollTop() > 200) {
			$('.navbar').addClass('sticky-header');
		} else {
			$('.navbar').removeClass('sticky-header');
		}
	});
	
	var swiper = new Swiper('.testimonial-slider', {
		grabCursor: true,
		slidesPerView: 2,
		spaceBetween: 30,
		breakpoints:{
			768: {
				slidesPerView: 1,
				spaceBetween: 10
			}
		},
		pagination: {
			el: '.testimonial-pagination',
			clickable: true
		},
    });
	
	/* Init Counter */
	
	var aboutcounter = $('.counter');
	if(aboutcounter.length)
	{
		$('.counter').counterUp({ delay: 4, time: 1000 });
	}
	
	/* Animate with wow js */
	new WOW({mobile:false}).init();
   
})(jQuery);