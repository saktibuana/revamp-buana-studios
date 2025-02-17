(function ($) {
    "use strict";
	
	var $window = $(window); 
	
	/* Preloader Effect */
	$window.load(function() {
	    $(".preloader").fadeOut(600);
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
	$('#main-menu').slicknav({prependTo:'#responsive-menu',label:''});
	
	/*OwlCarousels Testimonial Start*/
	$('#testimonial-slider').owlCarousel({
		loop: true,
		items: 1,
		margin: 10,
		responsiveClass: true,
		nav: true,
		dots: false,
		autoplay: true,
		autoplaySpeed: 1000,
		navText: [ '<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	});
	
	/* Popup video */
	$('.popup-video').magnificPopup({
        type: 'iframe',
        preloader: true,
    });
	
	/* Init Counter */
	var $counter = $('.counter');
	if($counter.length){
		$counter.counterUp({ delay: 4, time: 1000 });
	}
	
	/* Animate with wow js */
    new WOW({mobile:false}).init(); 
})(jQuery);