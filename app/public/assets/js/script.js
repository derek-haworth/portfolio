// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 2;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var scrollT = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - scrollT) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    if (scrollT > lastScrollTop && scrollT > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down nav-shadow').addClass('nav-up');
    } else {
        // Scroll Up
        if(scrollT + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down nav-shadow');
        }
    }

    if (scrollT < 75) {
        $('header').removeClass('nav-shadow');
    }
    
    lastScrollTop = scrollT;
}


// Resume Download Button
$("#resume").click(function () {
    $(this).text("And Another?");
})

//TODO
// Add random message each time button is clicked. EX: "1 more please, and another, 1 more for good measure etc."