(function ($) {
    "use strict";
	
	var $window = $(window); 
	
	/* Preloader Effect */
	$window.load(function() {
	    $(".preloader").fadeOut(600);
    });
	
	/* Top Menu */
	$(document).on('click','#navigation ul li a, #responsive-menu ul li a',function(){
		var id = $(this).attr('href');
		var h = parseFloat($(id).offset().top);
		var h = Math.ceil( parseFloat($(id).offset().top) );
		
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
	
	/* slick nav */
	$('#main-menu').slicknav({prependTo:'#responsive-menu',label:'', closeOnClick:true});
	
	/* Init Counter */
    $('.counter').counterUp({ delay: 4, time: 1000 });
	
	var swiper = new Swiper('.testimonial-slider', {
		slidesPerView: 2,
		speed: 1000,
		spaceBetween: 30,
		breakpoints: {
			768: {
				slidesPerView: 1
			}
		},
		pagination: {
			el: '.testimonial-pagination',
			clickable: true
		},
	});
	
	/* Animate with wow js */
    new WOW({mobile:false}).init(); 
	
})(jQuery);