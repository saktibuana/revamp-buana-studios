(function ($) {
    "use strict";
	
	var $window = $(window); 
	var $body = $('body'); 
	
	/* Preloader Effect */
	$window.on( "load", function() {
	   $(".preloader").fadeOut(600);
    });
	
	/* slick nav */
	$('#main-menu').slicknav({prependTo:'#responsive-menu',label:'', closeOnClick:true});
	
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
				scrollTop: h - 72
			}, 800);
			return false;
		}
	});
	
	/* Project slider */
	var swiper = new Swiper('.projects-slider',{
		autoplay: {
			delay: 3000,
		},
		speed: 1000,
		loop: true,
		slidesPerView: 2,
		spaceBetween: 30,
		navigation: {
			nextEl: '.project-next',
			prevEl: '.project-prev',
		},
		breakpoints: {
			991: {
				slidesPerView: 1
			}
		}
    });
	
	/* Testimonial slider */
	var swiper = new Swiper('.testimonial-slider',{
		autoplay: {
			delay: 3000,
		},
		speed: 1000,
		loop: true,
		slidesPerView: 3,
		spaceBetween: 30,
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
		}
    });
	
	/* Partner slider */
	var swiper = new Swiper('.partner-slider',{
		autoplay: {
			delay: 3000,
		},
		speed: 1000,
		loop: true,
		slidesPerView: 5,
		spaceBetween: 30,
		pagination: {
			el: '.testimonial-pagination',
			type: 'bullets',
			clickable: true,
		},
		breakpoints: {
			768: {
				slidesPerView: 1
			},
			
			991: {
				slidesPerView: 3
			}
		}
    });
	
	/* Popup video */
	var $popupvideo = $(".popup-video"); 
	if($popupvideo.length){
		$popupvideo.magnificPopup({
			type: 'iframe',
			preloader: true,
		});
	}
	
	/* Init Counter */
    $('.counter').counterUp({ delay: 10, time: 1000 });
	
	/* Animate with wow js */
    new WOW({mobile:false}).init(); 
	
	/* Animated Header Slider Start */
	var swiperAnimation = new SwiperAnimation();
	var mySwiper = new Swiper('.swiper-container.banner-slider', {
		autoplay:{
			delay: 3000,
		},
		loopedSlides: true,
		effect: 'fade',
		speed: 2000,
		autoplay: {
			delay: 6000
		},
		pagination: {
			el: '.banner-pagination',
			type: 'bullets',
			clickable: true
		},
		on: {
			init: function() {
				swiperAnimation.init(this).animate();
			},
			slideChange: function() {
				swiperAnimation.init(this).animate();
			}
		}
	});
	console.log(mySwiper);
	
})(jQuery);