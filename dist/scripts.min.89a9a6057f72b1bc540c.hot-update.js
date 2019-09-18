webpackHotUpdate("scripts.min",{

/***/ "./js/includes.js":
/*!************************!*\
  !*** ./js/includes.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($, __webpack_provided_window_dot_jQuery, jQuery) {jquery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
owlCarousel = __webpack_require__(/*! owl.carousel */ "./node_modules/owl.carousel/dist/owl.carousel.js");
$ = window.$ = jquery;
jQuery = __webpack_provided_window_dot_jQuery = jquery;
$(window).scroll(function () {
  var $home = $("#home");
  var $nav = $("nav");
  var window_offset = $home.offset().top - $(window).scrollTop();
  console.log(window_offset);

  if (window_offset > -40) {
    $nav.addClass("moved");
  } else {
    $nav.removeClass("moved");
  }
});
$(document).ready(function () {
  /* include styles */
  __webpack_require__(/*! ../scss/styles.scss */ "./scss/styles.scss");
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

})
//# sourceMappingURL=scripts.min.89a9a6057f72b1bc540c.hot-update.js.map