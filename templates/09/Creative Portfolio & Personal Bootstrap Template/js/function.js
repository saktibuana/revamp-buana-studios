(function ($) {
    "use strict";
	
	var $window = $(window); 
	var $body = $('body'); 
	
	/* Preloader Effect */
	$window.on( "load", function() {
		$(".preloader").fadeOut(1000);
    });
	
	/* Stickey Header */
	window.onscroll = function() {myFunction()};
	var navbar = document.getElementById("main-navbar");
	var sticky = navbar.offsetTop;
	function myFunction(){
		if (window.pageYOffset >= sticky) {
			navbar.classList.add("sticky-header")
		} else {
			navbar.classList.remove("sticky-header");
		}
	}
	
	/* Top Menu */
	$(document).on('click','.navbar-nav li a, #responsive-menu ul li a',function(){
		if($(this).hasClass("has-popup")) return false;
		var id = $(this).attr('href');
		if($(id).length) {
			var h = parseFloat($(id).offset().top);
			$('body,html').stop().animate({
				scrollTop: h - 62
			}, 800);
			return false;
		}
	});
	
	/* Scroll to anchor when calling URL */
	$(document).ready(function() {
		var elem = window.location.hash.replace('#', '');
		if($('#'+elem).length) {
			 var h = parseFloat($('#'+elem).offset().top);
			$('body,html').stop().animate({
				scrollTop: h - 62
			}, 800);
		}
	});
	
	/* slick nav */
	$('#main-menu').slicknav({prependTo:'#responsive-menu',label:'', closeOnClick:true});
	
	/* Home slider */
	var swiper = new Swiper('.home-slider',{
		autoplay: {
			delay: 3000,
		},
		speed: 1000,
		loop: true,
		slidesPerView: 1,
		centeredSlides: true,
		pagination: {
			el: '.testimonial-pagination',
			type: 'bullets',
			clickable: true,
		},
		breakpoints: {
			991: {
				slidesPerView: 1
			}
		},
		navigation: {
			nextEl: '.home-slider-next',
			prevEl: '.home-slider-prev',
		}
    });
	
	/* Services slider */
	var swiper = new Swiper('.services-slider',{
		autoplay: {
			delay: 3000,
		},
		speed: 1000,
		loop: true,
		slidesPerView: 4,
		spaceBetween: 0,
		pagination:{
			el: '.service-pagination',
			type: 'bullets',
			clickable: true,
		},
		breakpoints:{
			1100:{
				slidesPerView: 3
			},
			991:{
				slidesPerView: 2
			},
			568:{
				slidesPerView: 1
			}
		}
    });
	
	/* Client slider */
	var swiper = new Swiper('.client-slider',{
		autoplay: {
			delay: 3000,
		},
		speed: 1000,
		loop: true,
		slidesPerView: 4,
		spaceBetween: 50,
		pagination:{
			el: '.client-pagination',
			type: 'bullets',
			clickable: true,
		},
		breakpoints:{
			991:{
				slidesPerView: 2
			},
			568:{
				slidesPerView: 1
			}
		}
    });
	
	/* Portfolio slider */
	var swiper = new Swiper('.portfolio-slider',{
		autoplay: {
			delay: 3000,
		},
		speed: 1000,
		loop: true,
		slidesPerView: 1,
		spaceBetween: 0,
		navigation: {
			nextEl: '.portfolio-next',
			prevEl: '.portfolio-prev',
		},
		pagination:{
			el: '.portfolio-pagination',
			type: 'bullets',
			clickable: true,
		}
    });
	
})(jQuery);