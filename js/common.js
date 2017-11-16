$( document ).ready(function() {
	$( ".slick-big-slider" ).slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		dots: true
	})
	
	$( ".slick-slider-four" ).slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		dots: false,
		centerMode: true,
		centerPadding: '5px'
	})
	
	$( ".slick-slider-two" ).slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		dots: false,
		centerMode: true,
		centerPadding: '0px'
	})
	
	$( ".slick-slider-tree" ).slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		dots: false,
		centerMode: true,
		centerPadding: '0px'
	})
});