
$.noConflict();

//sticky header

// window.onscroll = function() {myFunction()};

// var header = document.getElementById("stickyHeader");

// function myFunction() {
//   if (window.pageYOffset > 100) {
      
//     header.classList.add("sticky-header");
//   } else {
//     header.classList.remove("sticky-header");
//   }
// }

// Flash Sale Counter
jQuery( document ).ready(function() {
    setInterval(function time(){
    var d = new Date();
      var days = 365 - d.getDay();
    var hours = 24 - d.getHours();
    var min = 60 - d.getMinutes();
    if((min + '').length == 1){
      min = '0' + min;
    }
    var sec = 60 - d.getSeconds();
    if((sec + '').length == 1){
          sec = '0' + sec;
    }
    jQuery('.countdown .days').html(days+"<small>Days</small>");
    jQuery('.countdown .hours').html(hours+"<small>Hour</small>");
    jQuery('.countdown .mintues').html(min+"<small>Min</small>");
    jQuery('.countdown .seconds').html(sec+"<small>Sec</small>");
  }, 1000); });


  // Mobile Menu
jQuery(document).ready(function () {
  const targetElement = document.getElementById("popup"); //only popup can scroll

  jQuery('.navigation-mobile-toggler').on('click', function () {
      
      jQuery('#navigation-mobile').toggleClass('navigation-active');
      jQuery('.mobile-overlay').addClass('active');

      //put this when popup opens, to stop body scrolling
      bodyScrollLock.disableBodyScroll(targetElement);
      jQuery('html').css('overflow', 'hidden');
      jQuery('body').css('overflow', 'hidden');
  });

  jQuery('.mobile-overlay').on('click', function () {
      jQuery('#navigation-mobile').removeClass('navigation-active');
      jQuery('.mobile-overlay').removeClass('active');

      //put this when close popup and show scrollbar in body
      bodyScrollLock.enableBodyScroll(targetElement);

      jQuery('html').css('overflow', 'auto');
      jQuery('body').css('overflow', 'auto');
  });
});