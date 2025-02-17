(function ($) {
    "use strict";
	
	var $window = $(window); 
	
	/* Preloader Effect */
	$window.load(function() {
		$(".preloader").fadeOut(600);
    });
	
	/* Top Menu */
	var navheight = $('#main-nav').outerHeight();
	$(document).on('click','#navigation ul li a, #responsive-menu ul li a',function(){
		var id = $(this).attr('href');
		var h = Math.ceil($(id).offset().top);
		$('body,html').stop().animate({
			scrollTop: h - 81
		}, 800);
		$(".navbar-collapse").collapse("hide");

		return false;
	});
	
	/* Sticky header */
	$window.scroll(function(){
    	if ($window.scrollTop() > 61) {
			$('.navbar').addClass('sticky-header');
		} else {
			$('.navbar').removeClass('sticky-header');
		}
	});
	
	/* slick nav */
	$('#main-menu').slicknav({prependTo:'#responsive-menu',label:'',closeOnClick:true});
	
	/*OwlCarousels Testimonial Start*/
	$('#testimonial-slider').owlCarousel({
		loop: true,
		items: 2,
		margin: 30,
		responsiveClass: true,
		nav: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 1000,
		responsive : {
			0 : {
				items: 1
			},
			 
			991 : {
				items: 2
			}
		  },
	});
	
	/* Load google map */
	var $map=$('#map');
	if ($map.length){
		google.maps.event.addDomListener(window, 'load', initMap);
		var map;
	}
	
	function initMap() {
		map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 22.2844621, lng: 70.7544859},
			zoom: 12,
			scrollwheel: false,
			styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}],
		});
	}
	
	/* Popup video */
	$('.popup-video').magnificPopup({
        type: 'iframe',
        preloader: true,
    });
	
})(jQuery);