jQuery(window).scroll(function () {

    jQuery('.jq_content_about').each(function () {
        var imagePos = jQuery(this).offset().top;

        var topOfWindow = jQuery(window).scrollTop();
        if (imagePos < topOfWindow + 600) {
            jQuery(this).addClass("fadeIn");
        }
    });

    jQuery('#some-companies img').each(function () {
        var imagePos = jQuery(this).offset().top;

        var topOfWindow = jQuery(window).scrollTop();
        if (imagePos < topOfWindow + 600) {
            jQuery(this).addClass("fadeIn");
        }
    });

});

$(function(){
	
	jQuery('.brand-heading').each(function () {
        var imagePos = jQuery(this).offset().top;

        var topOfWindow = jQuery(window).scrollTop();
        if (imagePos < topOfWindow + 600) {
            jQuery(this).addClass("slideLeft");
        }
    });
	
	var carousel = $("#owl-demo");
    carousel.owlCarousel({
        items: 3,
        itemsDesktop: [1024,2],
        itemsDesktopSmall: [979,2],
        itemsTablet: [768, 2],
        itemsTabletSmall: [768, 2],
        itemsMobile: [320, 1],
        navigation: false,
        autoPlay: false,
        stopOnHover: true
    });
	
	if($(window).width() < 768){ /*Quando For Mobile!*/
		$('.intro').css('min-height', $(window).outerHeight() + 'px');
	} 	
	
	$(window).on('resize', function(){
		if($(window).width() < 768){ /*Quando For Mobile!*/
			$('.intro').css('min-height', $(window).outerHeight() + 'px');
		} 	
	});
	
	jQuery("#owl-demo .owl-item div").mouseover(function () {
        var elem = $(this);
        $(elem).find("img").css("display", "inline");
    });

    jQuery("#owl-demo .owl-item div").mouseout(function () {
        var elem = $(this);
        $(elem).find("img").css("display", "none");
    });
	
});
