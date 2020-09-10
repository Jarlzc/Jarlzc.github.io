
$(document).ready(function(){
//    hidding creative part
   
    $("#show").click(function(){
        $(".creative").toggle(1788);
    });

//  lightbox option
//  lightbox.option({
//     'resizeDuration': 200,
//     'wrapAround': true
//   })

// narbar transform
    var navbar = $('.navbar');
    var navbrand = $('.navbar-brand');
    var navlink = $('.nav-link')
	
	$(window).scroll(function(){
		if($(window).scrollTop() <= 40){
            navbar.removeClass('navbar-scroll');
            navbrand.removeClass('scroll-brand');
            navlink.removeClass('scroll-link')
		} else {
            navbar.addClass('navbar-scroll');
            navbrand.addClass('scroll-brand');
            navlink.addClass('scroll-link');
		}
    });
// gallery
    // $('.gallery img').click(function () {
    //     $(this).animate({
    //         width: '200%',
    //         zIndex: '2'
        
    //     }, 500, "linear", function () {
    //         console.log('animation complete')
    //     }
    //     )})
    // $('.gallery img').mouseout(function() {
    //     $(this).animate({
    //         width: "100%"
    //     }, 500, "linear", function() {
    //         console.log('animation complete')
    //     })
    // })

    // $('.gallery img').last().click(function () {
    //     $(this).animate({
    //         left: "+=200px",
    //     }, 500, 'linear', function (){
    //         console.log("scrolled")
    //     })

    // })
            


});