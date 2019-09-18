jquery = require('jquery')
owlCarousel = require('owl.carousel')



$ = window.$ = jquery
jQuery = window.jQuery = jquery

$(window).scroll(function() {
    var $home = $("#home");
    var $nav = $("nav");
    var window_offset = $home.offset().top - $(window).scrollTop();
    console.log(window_offset)

    if(window_offset < -40) {
        $nav.addClass("moved")
    }else {
        $nav.removeClass("moved")
    }
});

$(document).ready(function(){
    /* include styles */
    require('../scss/styles.scss')
})


