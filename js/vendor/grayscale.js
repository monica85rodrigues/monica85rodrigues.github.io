/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function () {
    var element = $(".navbar");
    if (element.length !== 0) {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
			$("a.page-scroll.menu-item").css("color","#fff");
			$("#fullhandLogo").attr("src","images/logos/logo-fullhand-white-50.png");
			
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
			$("a.page-scroll.menu-item").css("color","#3c3c3c");
			$("#fullhandLogo").attr("src","images/logos/logo-fullhand-black-50.png");
        }
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
