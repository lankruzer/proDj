$( document ).ready(function() {
	$( ".slick-big-slider" ).slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		dots: true,
		responsive: [{
			breakpoint: 768,
		  		settings: {
					arrows: false,
					dots: false
				}
	   }]
	})
	
	$( ".slick-slider-four" ).slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		dots: false,
		centerMode: true,
		centerPadding: '0px',
		responsive: [{
			breakpoint: 1200,
		  		settings: {
					centerPadding: '5px'
		  		}
		},
	    {			 
			breakpoint: 992,
		  		settings: {
					slidesToShow: 3,
					centerPadding: '0px'
		  		}
		},
		{
			breakpoint: 768,
		  		settings: {
					slidesToShow: 2,
					centerPadding: '0px'
		  		},
		},
		{
			breakpoint: 560,
		  		settings: {
					slidesToShow: 1,
					centerPadding: '0px'
		  		}
		}]
	})
	
	$( ".slick-slider-two" ).slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		dots: false,
		centerMode: true,
		centerPadding: '0px',
		responsive: [{
			breakpoint: 1200,
		  		settings: {
					slidesToShow: 4,
					centerPadding: '5px'
		  		}
		},
	    {			 
			breakpoint: 992,
		  		settings: {
					slidesToShow: 3,
					centerPadding: '0px'
		  		}
		},
		{
			breakpoint: 768,
		  		settings: {
					slidesToShow: 2,
					centerPadding: '0px'
		  		},
		},
		{
			breakpoint: 560,
		  		settings: {
					slidesToShow: 1,
					centerPadding: '0px'
		  		}
		}]
	})
	
	$( ".slick-slider-tree" ).slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		dots: false,
		centerMode: true,
		centerPadding: '0px',
		responsive: [{
			breakpoint: 1200,
		  		settings: {
					slidesToShow: 4,
					arrows: true,
					centerPadding: '5px'
		  		}
		},
	    {			 
			breakpoint: 992,
		  		settings: {
					slidesToShow: 3,
					arrows: true,
					centerPadding: '0px'
		  		}
		},
		{
			breakpoint: 768,
		  		settings: {
					slidesToShow: 2,
					centerPadding: '0px'
		  		},
		},
		{
			breakpoint: 560,
		  		settings: {
					slidesToShow: 1,
					centerPadding: '0px'
		  		}
		}]
	})
	
	$( ".mobile-header-main-nav" ).click(function() {
		$( ".header-menu-block" ).slideToggle(500);
	})
	
	$( ".mobile-menu-close" ).click(function() {
		$( ".header-menu-block" ).slideToggle(500);
	})
	
	$( ".header-social" ).clone().appendTo( ".header-menu-block" )
	
	$( ".btn-mobile-menu-cactegories" ).click(function() {
		$( this ).toggleClass( "active" )
		$( ".menu-categories" ).slideToggle(500);
	})
	
	$( ".caret" ).click(function() {
		$( this ).toggleClass( "active" );
		$( this ).next( "ul" ).slideToggle(250);
	})
});