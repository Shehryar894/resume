$(document).ready(function(){
//   HERO SLIDER

$('#hero-slider').owlCarousel({
    loop:true,
    margin:0,
    items:1,
    nav:true,
    smartSpeed:1000,
    dots:false,
    navText:['PREV','NEXT'],
    responsive:{
        0:{
            nav:false
        },
        768:{
           nav:true
        },
        1000:{
            // items:5
        }
    }
})
// project-slider
$('#project-slider').owlCarousel({
    loop:true,
    margin:24,
    // items:1,
    nav:true,
    smartSpeed:1000,
    dots:true,
    navText:['PREV','NEXT'],
    responsive:{
        0:{
            items:1,
            nav:false,
            margin:0,
        },
        768:{
           items:2,
        },
        1140:{
            items:2,
            center:true,
            dots:true,  
        }
    }
});
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    items:1,
    // nav:true,
    smartSpeed:1000,
    dots:true,

    })

})