/*global $, document,  */

/* styleford */


//******************** Start Loading screen **************************************
$(window).on('load', function () {
	'use strict';
	
	$('.loading .sk-chase, .loading').fadeOut(1000, function () {
		// show the scroll
		$('body,html').css('overflow', 'auto');
		
		// remove loading div from Html
		$(this).remove();		
		
	});
	
	
});

//******************** End Loading screen ******************************************

//page go to top on reload
window.onbeforeunload = function () {
	'use strict';
	window.scrollTo(0, 0);
};


$(document).ready(function () {
	'use strict';
	
	
	//********************Start add active class to navbar on click *********************
	
	// remove class active from all "li" 
	$('.navbar-collapse li').removeClass('active');
	
	// add class active to home based on url
	if (window.location.href.indexOf("index.html") > -1) {
		$('.navbar-collapse').find('[href="index.html"]').parent().addClass('active');
	}
	
	// add class active to "li" that has same data-paga as clicked link
	$('.navbar-collapse').find("[data-page='" + sessionStorage.getItem("activeNav") + "']").parent().addClass('active');
	
	// store the attr [data-page] in local storage when click 
	$('[data-page]').on('click', function () {
		sessionStorage.setItem("activeNav", this.getAttribute("data-page"));
	});
	
	//**************************End add active class to navbar on click ********************
	
	
	
	
	
		// varaibles for sticky navbar
	var navbar = $('.navbar'),
		header = $('.header-top'),
		headerBottom = header.offset().top + header.innerHeight(),
		// variables for scroll to top button
		scrollButton = $('.scroll_top'),
		page = $('html');
	
	//****************** Start Sticky navbar **************
		
	
	  //****** give dynamic top for navbar 
	$(navbar).css({
		top: header.innerHeight()
	});
	
	$(window).on('scroll', function () {
		
		if ($(window).scrollTop() >= headerBottom) {
			$(navbar).css({
				position: 'fixed',
				top: '0'
			});
		} else {
			$(navbar).css({
				position: 'absolute',
				top: header.innerHeight()
			});
		}
	
	});
	
	//****************** End Sticky navbar ********************
	
	
	//***************** Start show/ hide search bar ********************
	$('.search_close_open').on('click', function () {
		$('.search_bar').slideToggle(0);
		
		//-------------- show / hide close icon ---------
		
		$('.search_close_open').toggleClass('opacity_0');
	});
	
	
	
	
	//***************** End show/ hide search bar ********************
	
	
	//***************** Start show/ hide options ********************
	$('.open_opotions_01').on('click', function () {
		
		$('.side .options_01').toggleClass('d-none');
	});
	
	$('.open_opotions_02').on('click', function () {
		
		$('.side .options_02').toggleClass('d-none');
	});
	
	
	
	//***************** End show/ hide options ********************
	

	//***************** Start scroll to top button ******************************************
	$(scrollButton).on('click', function () {
		$(page).animate({
			scrollTop: '0'
		}, 1500);
	});
	
	// Show & hide scroll button on scroll
	$(window).on('scroll', function () {
		
		if ($(this).scrollTop() > 500) {
			$(scrollButton).show();
			
		} else {
			$(scrollButton).fadeOut(500);
		}
	});
	//***************** End scroll to top button ******************************************
	
	//**************** Start owl carousel *********************
	$('.owl-carousel').owlCarousel({
		loop: true,
		stagePadding: 150,
		margin: 30,
		nav: false,
		dots: false,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		autoplay: true,
		responsive: {
			0: {
				stagePadding: 100,
				items: 1
			},
			600: {
				stagePadding: 130,
				items: 2
			},
			1000: {
				items: 3
			}
		}
	});
	//**************** End owl carousel *********************

	
	
	
	
	
	
});


