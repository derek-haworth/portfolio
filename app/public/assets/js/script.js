$(window).load(function() {
  setTimeout(function() {
    $('.spinner').fadeOut("slow");

    setTimeout(function() {
      $('#preloader').fadeOut("slow"); 

      setTimeout(function() {
        // $('.content-block').addClass('animated fadeInDown').fadeIn("slow");
        $('#footer').fadeIn('slow');

      }, 700);
    }, 500);    
  }, 500);  
  
});