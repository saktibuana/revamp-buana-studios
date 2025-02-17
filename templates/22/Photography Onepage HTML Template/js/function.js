(function ($) {
    "use strict";
	
	var $window = $(window); 
	
	/* Preloader Effect */
	$window.load(function() {
		$(".preloader").fadeOut(600);
    });
	
	/* Top Menu */
	$('.header-nav li a').on('click', function(){
		var id = $(this).attr('href');
		var h = parseFloat($(id).offset().top);
		$('body,html').stop().animate({
			scrollTop: h
		}, 800);		

		return false;
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
	
	$('.single-portfolio-two').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom',
		image: {
			verticalFit: true,
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
			  return element.find('img');
			}
		}
	});
	
})(jQuery);