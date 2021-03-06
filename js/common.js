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
							$( tab_items[y] ).slideUp(250);
							tab_items[y].classList.remove("active");
							
						}
					};
					btn_tab.classList.add("active");
					$( tab_items[i] ).slideDown(250);
					tab_items[i].classList.add("active");
				}
			})
		})
	}
	
	if( $( document ).width() < 992 ) {
		$( ".good-top-imgs" ).appendTo( ".good-top-info-content .cols" );
	}
	
	$( window ).resize(function() {
		if( $( document ).width() < 992 ) {
			$( ".good-top-imgs" ).appendTo( ".good-top-info-content .cols" );
		} else {
			$( ".good-top-imgs" ).prependTo( ".good-top-info > .cols" );
		}
	})
	
	
	if( $( ".type-pay") ) {
		$( ".type-pay label" ).click(function(){
			$( ".type-pay label ").not( this ).find($( ".input-radio-info" )).slideUp(250);
			$(this).find($( ".input-radio-info" )).slideDown(500);
			$( ".type-pay label" ).not( this ).css("margin-bottom", "5px");
			$(this).css("margin-bottom", "20px");
		})
	}
	
	/* basket */
	if( $( ".amount-counter" )) {
		
		$( ".amount-minus" ).click(function() {
			$( this ).next().find( "input" ).parent().parent().parent().parent().find( ".basket-good-cost" ).data("goodCost");
			var goodCost = $( this ).next().find( "input" ).parent().parent().parent().parent().find( ".basket-good-cost" ).data("goodCost");
			var goodCount;
			var goodFullCost;
			if( $( this ).next().find( "input" ).val() > 1 ) {
				$( this ).next().find( "input" ).val(function(i, curVal) {
					goodCount = +curVal - 1;
					return goodCount
				})
				goodFullCost = goodCost * goodCount;
				console.log($( this ).next().find( "input" ).parent().parent().parent().parent().find( ".basket-good-cost-amount" ).data("goodAmountCost", goodFullCost));
			}
		})
		
		$( ".amount-plus" ).click(function() {
			$( this ).prev().find( "input" ).val(function(i, curVal) {
				return +curVal + 1
			})
			console.log($( this ).prev().find( "input" ).val())
		})
		
	}
	
	/* comparison */
	if( $( ".input-comparison" )) {
		$( ".input-comparison" ).change(function(event) {
			if( !$( this ).is(":checked")) {
				$( ".td-comparison").css("background", "transparent");
			} else {
				$( ".td-comparison").css("background", "#cee1ee");
			}
		})
	}
	
	if( $( ".btn-clear-item" ) ) {
		$( ".btn-clear-item" ).click(function() {
			var removeGood = +$( this ).parent().index(),
				removeGoodName = removeGood + 1;
			$( this ).parent().parent().parent().parent().find( "thead tr th:nth-of-type(" + removeGoodName + ")").remove();
			$( this ).parent().parent().parent().parent().find( "tbody tr td:nth-of-type(" + removeGood  + ")").remove();
		})
	}
	
	
});