/* *************************
********** services ********
****************************/
$(function (){
    // initializing WOW js animation
    new WOW().init();
});

/* *************************
********** gallery *********
****************************/
$(function (){
    // initializing magnific Popup
    $("#gallery").magnificPopup({
        delegate: 'a', // child item selector, bt clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/* *****************************
********** Key persons *********
********************************/
$(function (){
   $("#key-persons").owlCarousel({
       items: 3,
       autoplay: true,
       smartSpeed: 800,
       loop: true,
       autoplayHoverPause: true,
       responsive : {
           //breakpoint from 0 up
           0:{
               items:1
           },
           //breakpoint from 0 up
           480:{
               items:2
           },
           //breakpoint from 0 up
           768:{
               items:3
           }

       }
   });
});

/* *****************************
********** stats ***************
********************************/
$(function (){
   $('.counter').counterUp({
       delay: 10,
       time: 3000,
   });
});

/* *****************************
********** Clients *************
********************************/
$(function (){
   $("#clients-list").owlCarousel({
       items: 4,
       autoplay: true,
       smartSpeed: 800,
       loop: true,
       autoplayHoverPause: true,
       responsive : {
           //breakpoint from 0 up
           0:{
               items:1
           },
           //breakpoint from 0 up
           480:{
               items:2
           },
           //breakpoint from 0 up
           768:{
               items:3
           },
           //breakpoint from 0 up
           992:{
               items:6
           }
       }
   });
});
/* *****************************
********** Navbar **************
********************************/
$(function (){
    $(window).scroll(function (){

        if($(this).scrollTop()<50){
        // hide nav
            $("nav").removeClass("sahil-top-nav");
            //bact to top btn
            $("#back-to-top").fadeOut();
        } else {
        //show nab
           $("nav").addClass("sahil-top-nav");
           $("#back-to-top").fadeIn();
        }
    });
});

// Close menu on click

$(function (){
    $(".navbar-collapse ul li a").on("click touch", function (){
        $(".navbar-toggle").click();
    });
});


/* *****************************
********** Smooth Scrolling ****
********************************/
/*
$(function (){
    $("a.smooth-scroll").click(function (event){
        event.preventDefault();
        //get / return id like #ahome #about etc
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo" );
    });
});*/

/* *****************************
********** table Scrolling ****
********************************/


$(document).ready(function () {
$('#dtHorizontalVerticalExample').DataTable({
"scrollX": true,
"scrollY": 200,
});
$('.dataTables_length').addClass('bs-select');
});



/* *****************************
********** Logo shrink on scroll ****
********************************/

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.paddingTop = "2px 2px";
     document.getElementById("sahil-menu").style.marginTop = "5px";
    document.getElementById("sahil-menu").style.fontSize = "24px";
    document.getElementById("logo").style.height = "46px";
    document.getElementById("navbar-logo").style.height = "46px";
    document.getElementById("logo").style.width = "54px";
  } else {
    document.getElementById("navbar").style.padding = "15px 15px";
    document.getElementById("sahil-menu").style.marginTop = "15px";
    document.getElementById("sahil-menu").style.fontSize = "48px";
    document.getElementById("logo").style.height = "76px";
    document.getElementById("navbar-logo").style.height = "76px";
    document.getElementById("logo").style.width = "84px";
    document.getElementById("logo").style.marginTop = "0px";
  }
}



