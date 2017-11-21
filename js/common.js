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
	
	$( ".good-big-imgs" ).slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		infinite: true,
		asNavFor: '.good-small-imgs'
	})
	
	$( ".good-small-imgs" ).slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		infinite: true,
		focusOnSelect: true,
		asNavFor: '.good-big-imgs'
	})
	
	if(document.querySelector(".tabs-nav")) {
		var btn_tabs_node = document.querySelectorAll(".tabs-nav li");
		var btn_tabs = [btn_tabs_node.length];
		var tab_items_node = document.querySelectorAll(".tabs-content li");
		var tab_items = [tab_items_node.length];

		for (var i = 0; i < btn_tabs_node.length; i++) {
			btn_tabs[i] = btn_tabs_node.item(i);
			tab_items[i] = tab_items_node.item(i);
		}

		btn_tabs[0].classList.add("active");
		tab_items[0].classList.add("active");

		btn_tabs.forEach(function(btn_tab, i, btn_tabs) {
			btn_tab.addEventListener("click", function(event) {
				if(!this.classList.contains("active")) {
					event.preventDefault();
					for (var y = 0; y < btn_tabs.length; y++) {
						if(btn_tabs[y].classList.contains("active")) {
							btn_tabs[y].classList.remove("active");
							tab_items[y].classList.remove("active");
						}
					};
					btn_tab.classList.add("active");
					tab_items[i].classList.add("active");
				}
			})
		})
	}
	
});