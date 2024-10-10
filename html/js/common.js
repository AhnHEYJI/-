$(document).ready(function() {
    /* common.js */
    var isOn = false;
    /*var pandan = false;*/
    $(".m_menu").click(function() {
        $(".all_menu").slideDown("fast","swing");                
        return false;
    });
    /*$(".m_menu a").click(function () {
        if (!pandan) {
            $(this).css("background-position", "-70px 0");
            pandan = true;
        } else {
            $(this).css("background-position", "0 0");
            pandan = false;
        }
        return false;
    });*/
       $(".all_menu").click(function() {
               $("dd").slideToggle(); 
            });
    
    $(".close").click(function () {
        $(".all_menu").slideUp("fast","swing");
    });
    $(".all_menu dl > dt > a").click(function (event) {
        $(".all_menu dl > dt > a").slideUp(), 
        $(this).next().slideDown(),
        event.stopPropagation();
    });
    
    /* search */
    $(".search_bt").click(function(event) {
        $(".search_pop").animate({left:0}, 500, "swing");
        event.preventDefault();
    });
    $(".search_pop button").click(function() {
        $(".search_pop").animate({left:"-100%"}, 500, "swing");
    });
    /*visual swiper*/

    var swiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination'               
            },
        });
});