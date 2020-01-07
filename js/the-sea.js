// JavaScript Document


// screen loader
$(window).load(function() {
    "use strict";
    $('.screen-loader').fadeOut('slow');
});


// owlCarousel
/*
$(document).ready(function() {
    "use strict";
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                // nav:true,
                nav: false
            },
            600: {
                items: 1,
                // nav:false,
                nav: false
            },
            1000: {
                items: 1,
                // nav:true,
                nav: false,
                loop: false
            }
        }
    })
});


// YTPlayer
$(function() {
    "use strict";
    $(".player").mb_YTPlayer();
});


// flexSlider
$(window).load(function() {
    "use strict";
    $('#slider-left').flexslider({
        animation: 'slide',
        slideshowSpeed: 6000,
        initDelay: 1000,
    });
    $('#slider-right').flexslider({
        animation: 'slide',
        slideshowSpeed: 6000,
        initDelay: 1000,
    });
});
*/

// countdown setup start



// preload
$(document).ready(function() {
    "use strict";
    $('#preload').css({
        display: 'block'
    });
});

// preload function
$(window).load(preLoader);
"use strict";

function preLoader() {
    setTimeout(function() {
        $('#preload').delay(240).fadeOut(1400);
        $('.center-container-home').delay(1800).css({
            display: 'none'
        }).fadeIn(3000);
        $('.center-container').delay(1800).css({
            display: 'none'
        }).fadeIn(3000);
        $('.btn-nav').delay(1800).css({
            display: 'none'
        }).fadeIn(3000);
		$('#borders').delay(1800).css({
            display: 'none'
        }).fadeIn(3000);
		$('#particles-holder').delay(1800).css({
            display: 'none'
        }).fadeIn(3000);
    });
};




// kenburnsy
$(function() {
    "use strict";
    $("#kenburnsy-bg").kenburnsy({
        fullscreen: true
    });
});


// doc. ready
$(document).ready(function() {
    setUpSections();
    $('[role="navigation"] .move a').click(function() {
        target = $(this).attr('href');
        openContent(target, $(target).attr('data-direction'));
        return false;
    });
    $('.close').click(function() {
        closeContent($('section.active').attr('data-direction'));
        return false;
    });
});

// keyboard navigation
$(document).keyup(function(e) {
    // section top
    if (e.keyCode == 38) {
        if (!$('section.active').length) openContent('#section-top');
        else if ($('#contact').hasClass('active') && !$('#section-top').hasClass('active')) closeContent($('section.active').attr('data-direction'));
    }
    // contact
    if (e.keyCode == 40) {
        if (!$('section.active').length) openContent('#contact');
        else if ($('#section-top').hasClass('active') && !$('#contact').hasClass('active')) closeContent($('section.active').attr('data-direction'))
    }
    // section left
    if (e.keyCode == 37) {
        if (!$('section.active').length) openContent('#section-left');
        else if ($('#section-right').hasClass('active') && !$('#section-left').hasClass('active')) closeContent($('section.active').attr('data-direction'));
    }
    // section right
    if (e.keyCode == 39) {
        if (!$('section.active').length) openContent('#section-right');
        else if ($('#section-left').hasClass('active') && !$('#section-right').hasClass('active')) closeContent($('section.active').attr('data-direction'));
    }
    // [e]sc
    if (e.keyCode == 27) {
        closeContent($('section.active').attr('data-direction'))
    }
});

// sections
function setUpSections() {
    var sections = document.getElementsByTagName('body')[0].getElementsByTagName('section');
    for (i = 0; i < sections.length; i++) {
        switch (sections[i].getAttribute('data-direction')) {
            case "from-bottom": // section top
                _position = {
                    "top": "100%"
                };
                _destination = {
                    top: "0"
                };
                _headerDestination = {
                    top: "-100%"
                };
                _headerOrigin = {
                    "top": "0"
                };
                break;
            case "from-left": // section left
                _position = {
                    "left": "-100%",
                    "right": "100%"
                };
                _destination = {
                    "left": "0",
                    "right": "0"
                };
                _headerDestination = {
                    "left": "100%"
                };
                _headerOrigin = {
                    "left": "0"
                };
                break;
            case "from-right": // section right
                _position = {
                    "left": "100%"
                };
                _destination = {
                    "left": "0"
                };
                _headerDestination = {
                    "left": "-100%"
                };
                _headerOrigin = {
                    "left": "0"
                };
                break;
            case "from-top": // contact
                _position = {
                    "bottom": "100%",
                    "top": "-100%"
                };
                _destination = {
                    "bottom": "0",
                    "top": "0"
                };
                _headerDestination = {
                    "top": "100%"
                };
                _headerOrigin = {
                    "top": "0"
                };
                break;
        }
        sections[i].positions = _position;
        sections[i].destinations = _destination;
        sections[i].headerDestinations = _headerDestination;
        sections[i].headerOrigins = _headerOrigin;
    }
}

function openContent(_target, _direction) {
    _element = document.querySelector(_target);
    $(_target).css(_element.positions).css({
        "z-index": 2
    }).animate(_element.destinations, "easeOutQuint", function() {
        $(_target).addClass('active')
    });
    $('header').animate(_element.headerDestinations, "easeOutQuint");
}

function closeContent(_direction) {
    _target = 'section.active';
    _element = document.querySelector(_target);
    $(_target).removeClass('active').delay(300).animate(_element.positions, "easeOutQuint", function() {
        $(this).css({
            "z-index": 0
        })
    });
    $('header').delay(300).animate(_element.headerOrigins, "easeOutQuint");
}

function isDesktop() {
        if ($(window).width() >= 1023) return true;
        else return false;
}
	
	
// navigation
function screen_height() {
    height = $(window).height();
    $('.main-nav').css('padding-top', height / 2.5)
}


// twitter ticker settings
$(document).ready(function() {
        "use strict";
        $(this).find(".tweet_list").list_ticker({
            speed: 8000,
            effect: 'fade' // fade, slide
        })
    })


// CharCycle
$('.cycle-it').mouseenter(function() {
	"use strict";
    if ($(this).hasClass('cycling') == false) {
        $(this).charcycle({
            'target': '.cycle-text'
        });
    }
});


// mobile-detect
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};