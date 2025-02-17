/* ----------------------------------------------------------------------------------------
* Author        : Awaiken
* Template Name : App Launch - App Landing Page HTML5 Template
* File          : Custom JS
* Version       : 1.0
* ---------------------------------------------------------------------------------------- */
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
	
	/* slick nav */
	$('#main-menu').slicknav({prependTo:'#responsive-menu',label:''});
	
	/* Animated skills Bars */
	$('#aboutus').waypoint(function() {
		$('.skillbar').each(function() {
			$(this).find('.count-bar').animate({
			  width:$(this).attr('data-percent')
			},2000);
		});
	},{
		offset: '35%'
	});
	
	/* Init Counter */
    $('.counter').counterUp({ delay: 4, time: 1000 });
	
	/*OwlCarousels Testimonial Start*/
	$('#testimonial-slider').owlCarousel({
		loop: true,
		items: 1,
		margin: 10,
		responsiveClass: true,
		nav: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 1000,
	});
	
	
	/*Portfolio (filtering) */
	/* Init Isotope */
	var $portfolio = $(".portfolio-boxes").isotope({
		itemSelector: ".portfolio-box",
		layoutMode: "masonry"
	});

	/* Set initial filtering */
	$window.load(function(){
		$portfolio.isotope({ filter: "*" });
	});

	/* Filter items on click */
	var $portfolionav=$(".portfolio-nav li a");
		$portfolionav.on('click', function (e) { 
	
		var filterValue = $(this).attr('data-filter');
		$portfolio.isotope({
			filter: filterValue
		}); 
		
		$portfolionav.removeClass("active-portfolio"); 
		$(this).addClass("active-portfolio");
		e.preventDefault();
	}); 
	
	/* Portfolio magnific popup */
	$('.has-popup').magnificPopup({
		type: 'inline',
		overflowY: 'auto',
		closeBtnInside: true,
		mainClass: 'mfp-fade'
	});
	
	/* Popup video */
	$('.popup-video').magnificPopup({
        type: 'iframe',
        preloader: true,
    });
	
})(jQuery);