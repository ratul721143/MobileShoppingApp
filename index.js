$(document).ready(function(){
    $("#banner-area .owl-carousel").owlCarousel({
        dots:true,
        items:1,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });

    //top sale owl-carousel
    $('#top-sale .owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        dots:true,
        responsive:{
            0:{items:1},
            600:{items:3},
            1000:{items:5}
        }
        
    });

    //isotope filter
    var $grid = $('.grid').isotope({
        itemSelector:'.grid-item',
        layoutMode:'fitRows'
    });

    //filter items on button click
    $('.button-group').on('click','button',function(){
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({filter:filterValue});
    });

    //new phone owl carousel
    $('#new-phone .owl-carousel').owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{items:1},
            600:{items:3},
            1000:{items:5}
        }
        
    });

    //blogs carousel
    $('#latest-blogs .owl-carousel').owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{items:1},
            600:{items:3}
        }
    });

    //product qty section
    let $qty_up = $('.qty .qty-up');
    let $qty_down = $('.qty .qty-down');
    //let $input = $('.qty .qty_input');
    $qty_up.click(function(e){
        let $input = $(`.qty_input[data-id='${$(this).data("id")}']`);//return the data id and select as it is
        if($input.val() >=1 && $input.val()<=9){
            $input.val(function(i,oldval){
                return ++oldval;
            });
        }
    });

    $qty_down.click(function(e){
        let $input = $(`.qty_input[data-id='${$(this).data("id")}']`);
        if($input.val() >1 && $input.val()<=10){
            $input.val(function(i,oldval){
                return --oldval;
            });
        }
    });
});
